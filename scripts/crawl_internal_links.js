const fs = require('fs');
const path = require('path');

// Read redirects from next.config.ts
const nextConfigContent = fs.readFileSync('next.config.ts', 'utf8');
const redirectRegex = /source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["']/g;
const redirects = new Map();
let match;
while ((match = redirectRegex.exec(nextConfigContent)) !== null) {
  redirects.set(match[1], match[2]);
}

// Find all HTML files in .next/server/app
function getHtmlFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getHtmlFiles(full, list);
    } else if (item.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = getHtmlFiles('.next/server/app');

// Build set of valid routes
const validRoutes = new Set();
validRoutes.add('/');

for (const file of htmlFiles) {
  let rel = path.relative('.next/server/app', file).replace(/\\/g, '/');
  let route = '/' + rel.replace(/\.html$/, '');
  if (route === '/index') route = '/';
  validRoutes.add(route);
}

// Check public files
function getPublicFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getPublicFiles(full, list);
    } else {
      let rel = '/' + path.relative('public', full).replace(/\\/g, '/');
      list.push(rel);
    }
  }
  return list;
}
const publicFiles = new Set(getPublicFiles('public'));

console.log(`Indexed ${validRoutes.size} routes and ${publicFiles.size} public assets.`);
console.log(`Loaded ${redirects.size} redirects from next.config.ts.`);

const brokenLinks = [];
const redirectedLinks = [];
const checkedLinks = new Set();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let rel = path.relative('.next/server/app', file).replace(/\\/g, '/');
  let fromRoute = '/' + rel.replace(/\.html$/, '');
  if (fromRoute === '/index') fromRoute = '/';

  // Extract all hrefs: href="..."
  const hrefMatches = content.matchAll(/href="([^"#?]+)(?:#[^"]*)?(?:\?[^"]*)?"/g);
  for (const m of hrefMatches) {
    let target = m[1];
    if (!target.startsWith('/')) continue; // skip external, tel:, mailto:
    if (target.startsWith('/_next')) continue; // skip next chunks
    if (target.startsWith('/api')) continue; // skip api
    
    // Normalize trailing slash (except root)
    if (target.length > 1 && target.endsWith('/')) {
      target = target.slice(0, -1);
    }

    const key = `${fromRoute} -> ${target}`;
    if (checkedLinks.has(key)) continue;
    checkedLinks.add(key);

    // Check if target is redirected
    if (redirects.has(target)) {
      redirectedLinks.push({ from: fromRoute, to: target, destination: redirects.get(target) });
      continue;
    }

    // Check if target exists
    if (!validRoutes.has(target) && !publicFiles.has(target)) {
      brokenLinks.push({ from: fromRoute, to: target });
    }
  }
}

console.log('\n=== CRAWL REPORT: REDIRECTED INTERNAL LINKS ===');
console.log(`Total: ${redirectedLinks.length}`);
for (const r of redirectedLinks) {
  console.log(`  [Redirect ${r.to} -> ${r.destination}] on page: ${r.from}`);
}

console.log('\n=== CRAWL REPORT: BROKEN (404) INTERNAL LINKS ===');
console.log(`Total: ${brokenLinks.length}`);
for (const b of brokenLinks) {
  console.log(`  [404: ${b.to}] on page: ${b.from}`);
}
