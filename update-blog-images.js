const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'content/blog');

const genericImages = [
  '/assets/images/hero-banner.webp',
  '/assets/images/gbp-showcase.webp',
  '/assets/images/business-card-mockup.webp',
  '/assets/images/marketing-poster-mockup.webp',
  '/assets/images/gsc-performance-dashboard.webp'
];

function getRelatedImage(title, slug) {
  const text = (title + ' ' + slug).toLowerCase();
  
  if (text.includes('travel') || text.includes('safari') || text.includes('ota') || text.includes('tour') || text.includes('resort')) {
    const travelImages = [
      '/assets/images/blog/travel-ai-trip-planner.png',
      '/assets/images/blog/travel-direct-booking.png',
      '/assets/images/blog/travel-website-features-hero.png'
    ];
    return travelImages[Math.abs(hashString(slug)) % travelImages.length];
  }
  
  if (text.includes('insurance') || text.includes('lic') || text.includes('policy')) {
    const insuranceImages = [
      '/assets/images/blog/ai-insurance-lead-qualification.png',
      '/assets/images/blog/future-of-insurance-lead-generation.png',
      '/assets/images/blog/insurance-agent-local-seo.png',
      '/assets/images/blog/insurance-agent-website-ai-lead-generation.png',
      '/assets/images/blog/traditional-vs-digital-insurance-leads.png'
    ];
    return insuranceImages[Math.abs(hashString(slug)) % insuranceImages.length];
  }
  
  if (text.includes('textile') || text.includes('fabric')) {
    const textileImages = [
      '/assets/images/blog/textile-b2b-rfq.png',
      '/assets/images/blog/textile-fabric-catalog-filter.png',
      '/assets/images/blog/textile-manufacturing-hero.png'
    ];
    return textileImages[Math.abs(hashString(slug)) % textileImages.length];
  }
  
  if (text.includes('export') || text.includes('food') || text.includes('spice')) {
    return '/assets/images/blog/food-spice-export.png';
  }
  
  if (text.includes('manufactur') || text.includes('china') || text.includes('b2b')) {
    return '/assets/images/blog/china-manufacture.png';
  }

  // Fallback to generic images using a hash of the slug
  return genericImages[Math.abs(hashString(slug)) % genericImages.length];
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function updateMarkdownFiles() {
  const files = fs.readdirSync(BLOG_DIR);
  
  let updatedCount = 0;

  files.forEach(file => {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const filePath = path.join(BLOG_DIR, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      const slug = file.replace(/\.mdx?$/, '');
      
      // Extract title to determine related image
      const titleMatch = content.match(/title:\s*['"]?(.*?)['"]?\n/);
      const title = titleMatch ? titleMatch[1] : '';
      
      const relatedImage = getRelatedImage(title, slug);
      
      // If image exists, replace it
      if (content.match(/^image:.*$/m)) {
        content = content.replace(/^image:.*$/m, `image: "${relatedImage}"`);
      } else {
        // If image doesn't exist, add it after author or category
        content = content.replace(/^(author:.*)$/m, `$1\nimage: "${relatedImage}"`);
      }
      
      // Also update ogImage and twitterImage if they exist
      if (content.match(/^ogImage:.*$/m)) {
        content = content.replace(/^ogImage:.*$/m, `ogImage: "${relatedImage}"`);
      }
      if (content.match(/^twitterImage:.*$/m)) {
        content = content.replace(/^twitterImage:.*$/m, `twitterImage: "${relatedImage}"`);
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
    }
  });
  
  console.log(`Successfully updated ${updatedCount} blog files with related images.`);
}

updateMarkdownFiles();
