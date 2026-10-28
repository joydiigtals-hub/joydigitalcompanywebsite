const fs = require('fs');
const path = require('path');

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
console.log(`Found ${pageFiles.length} page.tsx files.`);

const reports = [];

for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('app', file).replace(/\\/g, '/');

  // Check keywords
  const hasKeywords = /keywords\s*:/.test(content);

  // Extract title
  let titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/) || 
                   content.match(/title:\s*\{\s*absolute:\s*["'`]([^"'`]+)["'`]/);
  const title = titleMatch ? titleMatch[1] : '';

  // Extract description
  let descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  const desc = descMatch ? descMatch[1] : '';

  reports.push({
    file: relPath,
    hasKeywords,
    title,
    titleLen: title.length,
    desc,
    descLen: desc.length,
    hasOg: /openGraph\s*:/.test(content),
    hasTwitter: /twitter\s*:/.test(content),
  });
}

const filesWithKeywords = reports.filter(r => r.hasKeywords);
console.log(`Files with keywords: ${filesWithKeywords.length}`);

const shortTitles = reports.filter(r => r.title && r.titleLen < 40);
console.log(`Titles < 40 chars: ${shortTitles.length}`);

const shortDescs = reports.filter(r => r.desc && (r.descLen < 120 || r.descLen > 165));
console.log(`Descs outside 120-165 chars: ${shortDescs.length}`);
