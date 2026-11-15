const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const urls = [
  { name: 'Home', url: 'http://localhost:3000/' },
  { name: 'Blog Index', url: 'http://localhost:3000/blog' },
  { name: 'Contact', url: 'http://localhost:3000/contact' },
  { name: 'City Page (seo-services-chennai)', url: 'http://localhost:3000/seo-services-chennai' },
  { name: 'Service Page (website-development)', url: 'http://localhost:3000/website-development' },
];

const results = [];

for (const target of urls) {
  console.log(`Running Lighthouse mobile audit for ${target.name} (${target.url})...`);
  const outPath = path.join(__dirname, `lh_${target.name.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
  
  try {
    const cmd = `npx --cache "C:\\Users\\SARAVANAN\\AppData\\Local\\Temp\\npm-cache" lighthouse "${target.url}" --output=json --output-path="${outPath}" --chrome-flags="--headless --no-sandbox" --form-factor=mobile --only-categories=performance,accessibility,seo --quiet`;
    execSync(cmd, { stdio: 'inherit' });
    
    if (fs.existsSync(outPath)) {
      const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      const perfScore = Math.round((data.categories.performance?.score || 0) * 100);
      const a11yScore = Math.round((data.categories.accessibility?.score || 0) * 100);
      const seoScore = Math.round((data.categories.seo?.score || 0) * 100);
      const lcp = data.audits['largest-contentful-paint']?.displayValue || 'N/A';
      const cls = data.audits['cumulative-layout-shift']?.displayValue || 'N/A';
      
      results.push({
        page: target.name,
        performance: perfScore,
        accessibility: a11yScore,
        seo: seoScore,
        lcp,
        cls,
      });
      // clean up json
      fs.unlinkSync(outPath);
    }
  } catch (err) {
    console.error(`Failed to audit ${target.name}:`, err.message);
  }
}

console.log('\n=== LIGHTHOUSE MOBILE AUDIT RESULTS ===\n');
console.table(results);
fs.writeFileSync(path.join(__dirname, 'lighthouse_results.json'), JSON.stringify(results, null, 2), 'utf8');
