const fs = require('fs');
const path = require('path');
const blogFiles = fs.readdirSync('content/blog').filter(f => f.endsWith('.md'));
for (const file of blogFiles) {
  const content = fs.readFileSync(path.join('content/blog', file), 'utf8');
  if (content.includes('hero-banner.webp')) {
    console.log('Post with hero-banner.webp:', file);
  }
}
