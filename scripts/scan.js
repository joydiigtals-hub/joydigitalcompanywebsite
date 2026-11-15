const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'backup-static-site') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = walk('.');

console.log('=== 1. Non-www joydigital.in occurrences ===');
const nonWwwRegex = /https?:\/\/(?!www\.)joydigital\.in[^\s"'`<>)]*/gi;
let nonWwwCount = 0;
for (const file of allFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json') || file.endsWith('.md')) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(nonWwwRegex);
    if (matches) {
      console.log(`${file}:`, matches);
      nonWwwCount += matches.length;
    }
  }
}
console.log('Total non-www matches:', nonWwwCount);

console.log('\n=== 2. City page folders in app/ ===');
const appDirs = fs.readdirSync('app').filter(f => fs.statSync(path.join('app', f)).isDirectory());
const cityDirs = appDirs.filter(d => /chennai|madurai|coimbatore/i.test(d));
console.log('City directories in app/:', cityDirs);

console.log('\n=== 3. Internal link checks in header & footer ===');
const footerContent = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
const headerContent = fs.readFileSync('components/layout/Header.tsx', 'utf8');

console.log('Footer mentions Coimbatore:', (footerContent.match(/coimbatore/gi) || []).length);
console.log('Footer mentions Madurai:', (footerContent.match(/madurai/gi) || []).length);

console.log('\n=== 4. Check /website-for-tours-and-travels vs /travel-website-development ===');
for (const file of allFiles) {
  if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json') || file.endsWith('.md')) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('website-for-tours-and-travels')) {
      console.log('Found /website-for-tours-and-travels in:', file);
    }
  }
}

console.log('\n=== 5. Check Free Tools cards in HomePageComponent ===');
const homeContent = fs.readFileSync('components/sections/HomePageComponent.tsx', 'utf8');
const freeToolsRegex = /href="\/free-tools"[^>]*>[\s\S]*?(?:SEO Audit|Image Compressor)/gi;
console.log('HomePageComponent matches for free-tools cards:', homeContent.match(freeToolsRegex));

console.log('\n=== 6. Check canonicals in built HTML (.next/server/app) ===');
function checkHtmlFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkHtmlFiles(full, results);
    } else if (f.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = checkHtmlFiles('.next/server/app');
console.log('Total HTML pages in .next:', htmlFiles.length);

let canonicalIssues = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const canonicalMatches = content.match(/<link rel="canonical"[^>]*>/gi) || [];
  if (canonicalMatches.length !== 1) {
    console.log(`[${canonicalMatches.length} canonicals] ${file}:`, canonicalMatches);
    canonicalIssues++;
  } else {
    const hrefMatch = canonicalMatches[0].match(/href="([^"]*)"/i);
    const href = hrefMatch ? hrefMatch[1] : '';
    if (!href.startsWith('https://www.joydigital.in')) {
      console.log(`[Bad canonical prefix] ${file}: ${href}`);
      canonicalIssues++;
    }
  }
}
console.log('Total canonical issues found in built HTML:', canonicalIssues);

console.log('\n=== 7. Verify self-referencing canonical matches HTML route ===');
let mismatchCount = 0;
for (const file of htmlFiles) {
  if (file.includes('_global-error') || file.includes('_not-found')) continue;
  const content = fs.readFileSync(file, 'utf8');
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]*)"/i);
  if (!canonicalMatch) continue;
  const canonical = canonicalMatch[1];
  
  // Calculate expected route from file path: e.g. .next/server/app/about.html -> /about
  // .next/server/app/index.html -> /
  // .next/server/app/[country]/seo-services.html -> (handled differently for SSG routes like us/seo-services.html)
  let rel = path.relative('.next/server/app', file).replace(/\\/g, '/');
  let routePath = '/' + rel.replace(/\.html$/, '');
  if (routePath === '/index') routePath = '/';

  // Compare
  const canonicalPath = new URL(canonical).pathname;
  // Normalize trailing slash
  const normCanonicalPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '');
  const normRoutePath = routePath === '/' ? '/' : routePath.replace(/\/$/, '');

  if (normCanonicalPath !== normRoutePath) {
    console.log(`Mismatch: file=${file} -> route=${normRoutePath} vs canonical=${normCanonicalPath}`);
    mismatchCount++;
  }
}
console.log('Total canonical route mismatches:', mismatchCount);

console.log('\n=== 8. Internal links to cannibalized / redirected city pages ===');
const redirectedUrls = [
  'seo-company-chennai',
  'seo-services-in-chennai',
  'web-development-company-chennai',
  'web-development-company-in-chennai',
  'website-design-company-in-chennai',
  'affordable-web-design-agency-chennai',
  'seo-company-madurai',
  'seo-services-in-madurai',
  'web-development-company-madurai',
  'web-development-company-in-madurai',
  'website-design-company-in-madurai',
  'digital-marketing-agency-madurai',
  'local-seo-madurai',
  'website-for-tours-and-travels',
  'website-for-e-commerce-stores'
];

for (const file of allFiles) {
  if (file === 'next.config.ts' || file === 'proxy.ts' || file === 'scripts/scan.js' || file === 'add-redirects.js') continue;
  if (!file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.js') && !file.endsWith('.jsx') && !file.endsWith('.json') && !file.endsWith('.md')) continue;
  
  const content = fs.readFileSync(file, 'utf8');
  for (const red of redirectedUrls) {
    // Look for href="/... or string literal "/...
    const pattern = new RegExp(`['"\`]\\/${red}['"\`]`, 'g');
    if (pattern.test(content)) {
      console.log(`File ${file} links to /${red}`);
    }
  }
}

console.log('\n=== 9. Check pages missing explicit canonical metadata in app/ ===');
function findPageFiles(dir, list = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      findPageFiles(full, list);
    } else if (item === 'page.tsx') {
      list.push(full);
    }
  }
  return list;
}

const pageFiles = findPageFiles('app');
for (const pf of pageFiles) {
  const content = fs.readFileSync(pf, 'utf8');
  if (pf.includes('admin') || pf.includes('quote-demo')) continue;
  if (!content.includes('canonical')) {
    console.log('Page missing canonical in metadata:', pf);
  }
}
