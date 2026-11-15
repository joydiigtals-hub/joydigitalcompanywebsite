const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, callback);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      callback(full);
    }
  }
}

let count = 0;
walkDir('app', (file) => {
  let content = fs.readFileSync(file, 'utf8');
  if (/keywords\s*:/.test(content)) {
    // Match keywords: [ ... ], or keywords: "...",
    const oldContent = content;
    
    // Pattern 1: array keywords: [ ... ],
    content = content.replace(/\s*keywords:\s*\[[\s\S]*?\],?/g, '');
    
    // Pattern 2: string keywords: "...",
    content = content.replace(/\s*keywords:\s*["'`][\s\S]*?["'`],?/g, '');

    if (content !== oldContent) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
      console.log(`Removed keywords from ${file}`);
    }
  }
});

console.log(`Total files cleaned: ${count}`);
