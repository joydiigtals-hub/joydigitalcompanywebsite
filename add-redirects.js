const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'app');
const dirs = fs.readdirSync(appDir).filter(f => fs.statSync(path.join(appDir, f)).isDirectory());

const thinPages = dirs.filter(d => 
  d.includes('-chennai') || 
  d.includes('-madurai') || 
  d.includes('-coimbatore') || 
  d.startsWith('website-for-') ||
  d === 'local-seo-services' ||
  d === 'seo-services-usa' ||
  d === 'seo-services-uk' ||
  d === 'seo-services-uae'
);

const redirects = thinPages.map(page => ({
  source: `/${page}`,
  destination: '/',
  permanent: true
}));

const configPath = path.join(process.cwd(), 'next.config.ts');
let config = fs.readFileSync(configPath, 'utf-8');

const redirectString = redirects.map(r => 
  `      { source: "${r.source}", destination: "${r.destination}", permanent: true },`
).join('\n');

config = config.replace('async redirects() {\n    return [', 'async redirects() {\n    return [\n' + redirectString);

fs.writeFileSync(configPath, config);
console.log('Added ' + redirects.length + ' redirects successfully.');
