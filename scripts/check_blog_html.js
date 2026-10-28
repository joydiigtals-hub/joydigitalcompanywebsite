const fs = require('fs');
const html = fs.readFileSync('.next/server/app/blog/digital-marketing-tourism-africa.html', 'utf8');
let idx = 0;
while ((idx = html.indexOf('href="/africa"', idx)) !== -1) {
  console.log('Context:', html.substring(Math.max(0, idx - 100), Math.min(html.length, idx + 100)));
  idx += 14;
}
