const fs = require('fs');

// 1. Update app/seo-services-madurai/page.tsx
let maduraiSeo = fs.readFileSync('app/seo-services-madurai/page.tsx', 'utf8');
maduraiSeo = maduraiSeo.replace(/\r\n/g, '\n');
maduraiSeo = maduraiSeo.replace(
  'question: "Do you guarantee #1 rankings on Google?",',
  'question: "Do you guarantee #1 rankings on Google for Madurai businesses?",'
);
fs.writeFileSync('app/seo-services-madurai/page.tsx', maduraiSeo, 'utf8');
console.log('Updated app/seo-services-madurai/page.tsx FAQs');

// 2. Update app/website-design-company-coimbatore/page.tsx
let coimbatoreDesign = fs.readFileSync('app/website-design-company-coimbatore/page.tsx', 'utf8');
coimbatoreDesign = coimbatoreDesign.replace(/\r\n/g, '\n');
coimbatoreDesign = coimbatoreDesign.replace(
  'question: "Can you help update photos or text after the site goes live?",',
  'question: "Can you help update photos or text for our Coimbatore business after launch?",'
);
coimbatoreDesign = coimbatoreDesign.replace(
  'question: "How do we coordinate design reviews?",',
  'question: "How do we coordinate design reviews for our Coimbatore project?",'
);
fs.writeFileSync('app/website-design-company-coimbatore/page.tsx', coimbatoreDesign, 'utf8');
console.log('Updated app/website-design-company-coimbatore/page.tsx FAQs');
