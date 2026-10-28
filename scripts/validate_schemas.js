const fs = require('fs');
const path = require('path');

function walkDir(dir, cb) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, cb);
    } else if (f === 'page.tsx') {
      cb(full);
    }
  }
}

const faqStats = new Map(); // question -> count

walkDir('app', (file) => {
  const content = fs.readFileSync(file, 'utf8');
  // Look for question: "..."
  const qMatches = content.matchAll(/question:\s*["'`]([^"'`]+)["'`]/g);
  for (const m of qMatches) {
    const q = m[1].trim();
    if (!faqStats.has(q)) {
      faqStats.set(q, []);
    }
    faqStats.get(q).push(file);
  }
});

console.log(`Total unique FAQ questions found: ${faqStats.size}`);
let dups = 0;
for (const [q, files] of faqStats.entries()) {
  if (files.length > 1) {
    dups++;
    console.log(`FAQ duplicate (${files.length} pages): "${q}" in:\n  ${files.join('\n  ')}`);
  }
}
if (dups === 0) {
  console.log('No duplicate FAQs found across pages!');
}
