const fs = require('fs');
const path = require('path');

// 1. Update app/layout.tsx with global default keywords
const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

if (!layoutCode.includes('keywords:')) {
  const target = 'description: "Joy Digital builds high-performance Next.js websites and data-driven SEO strategies that generate qualified enquiries and measurable organic growth.",';
  const replacement = `description: "Joy Digital builds high-performance Next.js websites and data-driven SEO strategies that generate qualified enquiries and measurable organic growth.",
  keywords: [
    "Web Development Company",
    "Custom Website Development",
    "SEO Services",
    "Next.js Development Agency",
    "Local SEO Services",
    "B2B Web Design",
    "Joy Digital",
    "Technical SEO",
    "Digital Marketing Agency"
  ],`;

  if (layoutCode.includes(target)) {
    layoutCode = layoutCode.replace(target, replacement);
    fs.writeFileSync(layoutPath, layoutCode, 'utf8');
    console.log("✅ Updated app/layout.tsx with global keywords");
  } else {
    console.log("⚠️ Could not find target in layout.tsx");
  }
} else {
  console.log("ℹ️ app/layout.tsx already has keywords");
}

// 2. Update app/blog/[slug]/page.tsx generateMetadata with dynamic keywords
const blogSlugPagePath = path.join(process.cwd(), 'app', 'blog', '[slug]', 'page.tsx');
let blogSlugCode = fs.readFileSync(blogSlugPagePath, 'utf8');

if (!blogSlugCode.includes('keywords: blogKeywords')) {
  const oldReturn = `  return {
    title: title,
    description: description,`;

  const newReturn = `  const blogKeywords = [
    post.focusKeyword,
    ...(post.tags || []),
    ...(post.secondaryKeywords ? post.secondaryKeywords.split(',').map((k: string) => k.trim()) : [])
  ].filter(Boolean);

  return {
    title: title,
    description: description,
    keywords: blogKeywords.length > 0 ? blogKeywords : ["Web Development", "SEO Services", "Joy Digital"],`;

  if (blogSlugCode.includes(oldReturn)) {
    blogSlugCode = blogSlugCode.replace(oldReturn, newReturn);
    fs.writeFileSync(blogSlugPagePath, blogSlugCode, 'utf8');
    console.log("✅ Updated app/blog/[slug]/page.tsx generateMetadata with dynamic keywords");
  } else {
    console.log("⚠️ Could not find oldReturn in app/blog/[slug]/page.tsx");
  }
} else {
  console.log("ℹ️ app/blog/[slug]/page.tsx already has dynamic keywords");
}

// 3. Predefined keyword map for specific key pages
const specificKeywordsMap = {
  'app/page.tsx': [
    'Custom Web Development',
    'Web Development Company',
    'SEO Agency Services',
    'Next.js Development Agency',
    'Local SEO Services',
    'B2B Website Design',
    'Joy Digital'
  ],
  'app/about/page.tsx': [
    'About Joy Digital',
    'Web Development Agency',
    'Next.js Specialists',
    'SEO Experts India',
    'Saravanan L Web Architect'
  ],
  'app/contact/page.tsx': [
    'Contact Joy Digital',
    'Web Development Consultation',
    'SEO Agency Contact',
    'Website Enquiry',
    'Hire Next.js Developers'
  ],
  'app/blog/page.tsx': [
    'Web Development Blog',
    'SEO Guides & Insights',
    'Technical SEO Blog',
    'Next.js Tutorials',
    'Local SEO Tips'
  ],
  'app/portfolio/page.tsx': [
    'Web Development Portfolio',
    'Next.js Website Projects',
    'Client Case Studies',
    'Joy Digital Projects',
    'B2B Web Showcase'
  ],
  'app/free-website-audit/page.tsx': [
    'Free Website Audit',
    'Website Speed Test',
    'Technical SEO Audit Tool',
    'Core Web Vitals Audit',
    'Free SEO Health Check'
  ],
  'app/website-development/page.tsx': [
    'Custom Web Development',
    'Next.js Web Development Services',
    'Full-Stack Web Engineering',
    'Enterprise Web Solutions',
    'Modern Web App Development'
  ],
  'app/custom-website-development/page.tsx': [
    'Custom Website Development',
    'Tailored Web Architecture',
    'High Performance Web Design',
    'B2B Web Applications',
    'Next.js Web Agency'
  ],
  'app/seo-services/page.tsx': [
    'B2B SEO Services',
    'Enterprise SEO Agency',
    'Technical SEO Optimization',
    'Generative Engine Optimization',
    'GEO AI Search Services'
  ],
  'app/local-seo-services/page.tsx': [
    'Local SEO Services',
    'Google Business Profile Optimization',
    'Google Maps 3-Pack Rankings',
    'Local Search Marketing',
    'NAP Citations Optimization'
  ],
  'app/technical-seo/page.tsx': [
    'Technical SEO Services',
    'Core Web Vitals Optimization',
    'Sub-Second Page Speed',
    'Next.js SEO Architecture',
    'Structured Data Schema Markup'
  ],
  'app/on-page-seo/page.tsx': [
    'On-Page SEO Services',
    'Content Optimization',
    'Meta Tag & Heading Optimization',
    'Internal Linking Architecture',
    'Search Intent Optimization'
  ],
  'app/seo-content/page.tsx': [
    'SEO Content Writing',
    'B2B Content Strategy',
    'High-Converting Blog Articles',
    'Search Optimized Copywriting',
    'E-E-A-T Content Services'
  ],
  'app/social-media-marketing/page.tsx': [
    'Social Media Marketing Services',
    'B2B LinkedIn Marketing',
    'Brand Visibility Campaigns',
    'Organic Social Growth',
    'Digital Marketing Agency'
  ],
  'app/web-design-services/page.tsx': [
    'Custom Web Design Services',
    'UI UX Design Agency',
    'Mobile Responsive Web Design',
    'Conversion Focused Web Design',
    'Figma to Next.js Design'
  ],
  'app/landing-page-development/page.tsx': [
    'Landing Page Development',
    'High Converting Landing Pages',
    'PPC Landing Page Design',
    'Fast Loading Next.js Landing Pages',
    'Conversion Rate Optimization'
  ],
  'app/ecommerce-website-development/page.tsx': [
    'Ecommerce Website Development',
    'Headless Ecommerce Next.js',
    'Custom Online Store Development',
    'Shopify Headless Store',
    'Ecommerce SEO Services'
  ],
  'app/shopify-vs-headless-nextjs/page.tsx': [
    'Shopify vs Headless Next.js',
    'Headless Commerce Performance',
    'Shopify Speed Optimization',
    'Next.js Ecommerce Architecture',
    'Ecommerce ROI Analysis'
  ],
  'app/wordpress-to-nextjs-migration/page.tsx': [
    'WordPress to Next.js Migration',
    'Migrate WordPress Site to Next.js',
    'Headless WordPress Agency',
    'WordPress Speed Optimization',
    'Database Migration Services'
  ],
  'app/static-website-development/page.tsx': [
    'Static Website Development',
    'Jamstack Web Development',
    'Next.js Static Site Generation',
    'Serverless Web Architecture',
    'Lightning Fast Static Sites'
  ],
  'app/dynamic-website-development/page.tsx': [
    'Dynamic Website Development',
    'Database Driven Web Applications',
    'Next.js Server Side Rendering',
    'API Integrated Web Systems',
    'Custom Web Portal Development'
  ],
  'app/enterprise-web-solutions/page.tsx': [
    'Enterprise Web Solutions',
    'Scalable Cloud Architecture',
    'Enterprise Next.js Applications',
    'High Security Web Development',
    'B2B Enterprise Portal'
  ],
  'app/offshore-web-development-partner/page.tsx': [
    'Offshore Web Development Partner',
    'Hire Dedicated Next.js Developers',
    'White Label Web Development',
    'Software Outsourcing India',
    'Cost Effective Web Engineering'
  ],
  'app/ai-search-optimization/page.tsx': [
    'AI Search Optimization',
    'Generative Engine Optimization',
    'GEO Services 2026',
    'AEO Answer Engine Optimization',
    'ChatGPT & Gemini Search Optimization'
  ],
  // Industry specific pages
  'app/website-for-schools/page.tsx': [
    'School Website Development',
    'School Website Design',
    'SEO for Schools',
    'School Admission Marketing',
    'Education Institution Web Design'
  ],
  'app/website-for-pest-control/page.tsx': [
    'Pest Control Website Design',
    'Pest Control SEO Services',
    'Local SEO for Pest Control',
    'Pest Control Marketing',
    'Pest Inspection Lead Generation'
  ],
  'app/website-for-export-and-import/page.tsx': [
    'Export Import Website Development',
    'Export Business Web Design',
    'International SEO Services',
    'B2B Export Marketing',
    'International Buyer Lead Generation'
  ],
  'app/website-for-textile-manufacturers/page.tsx': [
    'Textile Manufacturer Website Development',
    'Textile Export Web Design',
    'Tiruppur Garment Exporter SEO',
    'Garment Manufacturing Web Portal',
    'B2B Textile Supplier SEO'
  ],
  'app/website-for-real-estate/page.tsx': [
    'Real Estate Website Development',
    'Real Estate SEO Services',
    'Builder & Contractor Website Design',
    'Property Listing Portal',
    'Real Estate Lead Generation'
  ],
  'app/website-for-solar-companies/page.tsx': [
    'Solar Company Website Development',
    'Solar EPC Web Design',
    'Solar SEO Services',
    'Commercial Solar Lead Generation',
    'Clean Energy Web Solutions'
  ],
  'app/website-for-manufacturing-companies/page.tsx': [
    'Manufacturing Company Website Development',
    'Industrial Web Design',
    'B2B Manufacturing SEO',
    'OEM Supplier Website',
    'Industrial RFQ Generation'
  ],
  'app/website-for-hospitals/page.tsx': [
    'Hospital Website Development',
    'Healthcare Web Design',
    'Medical Clinic SEO Services',
    'Doctor Appointment Booking Website',
    'Healthcare Digital Marketing'
  ],
  'app/website-for-hotels/page.tsx': [
    'Hotel Website Development',
    'Resort Website Design',
    'Hotel SEO Services',
    'Direct Booking Engine for Hotels',
    'Hospitality Web Solutions'
  ],
  'app/travel-website-development/page.tsx': [
    'Travel Website Development',
    'Travel Agency Web Design',
    'Tour Operator SEO',
    'Custom Itinerary Booking Engine',
    'Direct Travel Booking Portal'
  ],
  'app/tour-operator-website-development/page.tsx': [
    'Tour Operator Website Development',
    'Tour Booking Web Design',
    'Safari Tour Operator SEO',
    'Travel Booking Engine',
    'Direct Tourism Lead Generation'
  ],
  'app/safari-website-development/page.tsx': [
    'Safari Website Development',
    'African Safari Web Design',
    'Wildlife Safari Tour SEO',
    'Custom Safari Itinerary Portal',
    'Safari Direct Booking Engine'
  ],
  'app/website-for-logistics-and-shipping/page.tsx': [
    'Logistics Website Development',
    'Freight Forwarder Web Design',
    'Shipping Company SEO',
    'Supply Chain Portal Development',
    'Cargo Tracking Web Design'
  ],
  'app/website-for-law-firms/page.tsx': [
    'Law Firm Website Development',
    'Legal Web Design Services',
    'SEO for Lawyers & Advocates',
    'Attorney Website Design',
    'Legal Practice Lead Generation'
  ],
  'app/website-for-consulting-companies/page.tsx': [
    'Consulting Company Website Development',
    'Corporate Consulting Web Design',
    'B2B Advisory SEO',
    'Professional Services Web Development',
    'High Ticket Lead Generation'
  ],
  'app/website-for-insurance-agents/page.tsx': [
    'Insurance Agent Website Development',
    'Insurance Broker Web Design',
    'Insurance SEO Services',
    'Policy Lead Generation Funnels',
    'Financial Services Web Design'
  ],
  'app/website-for-luxury-brands/page.tsx': [
    'Luxury Brand Website Development',
    'High End Web Design',
    'Luxury Goods Ecommerce',
    'Minimalist Luxury UI Design',
    'Premium Brand Web Experience'
  ],
  'app/website-for-marketing-agencies/page.tsx': [
    'Marketing Agency Website Development',
    'Creative Agency Web Design',
    'White Label Web Development',
    'Next.js Partner for Agencies',
    'High Performance Agency Sites'
  ],
  'app/website-for-small-business/page.tsx': [
    'Small Business Website Development',
    'Affordable Web Design for Small Business',
    'Local Business SEO',
    'Lead Generating Small Business Sites',
    'Mobile Responsive Web Design'
  ],
  // City landing pages
  'app/seo-services-chennai/page.tsx': [
    'SEO Services Chennai',
    'SEO Company in Chennai',
    'Best SEO Agency Chennai',
    'Local SEO Services Chennai',
    'Digital Marketing Agency Chennai',
    'Joy Digital Chennai'
  ],
  'app/seo-services-in-chennai/page.tsx': [
    'SEO Services in Chennai',
    'Best SEO Company Chennai',
    'Top SEO Agency Chennai',
    'Local SEO Chennai Experts',
    'Organic Traffic Growth Chennai'
  ],
  'app/seo-company-chennai/page.tsx': [
    'SEO Company Chennai',
    'Search Engine Optimization Company Chennai',
    'Enterprise SEO Chennai',
    'Local SEO Services Chennai',
    'Google Ranking Agency Chennai'
  ],
  'app/website-development-company-chennai/page.tsx': [
    'Website Development Company Chennai',
    'Web Design Company in Chennai',
    'Next.js Web Development Chennai',
    'Best Web Developers Chennai',
    'Custom Website Design Chennai'
  ],
  'app/website-development-company-in-chennai/page.tsx': [
    'Website Development Company in Chennai',
    'Top Web Developers Chennai',
    'Custom Web Design Chennai',
    'Next.js Web Agency Chennai',
    'Fast Loading Websites Chennai'
  ],
  'app/web-development-company-chennai/page.tsx': [
    'Web Development Company Chennai',
    'Web Design Agency Chennai',
    'Full Stack Web Development Chennai',
    'React & Next.js Developers Chennai',
    'Corporate Web Design Chennai'
  ],
  'app/website-design-company-chennai/page.tsx': [
    'Website Design Company Chennai',
    'UI UX Web Design Chennai',
    'Professional Web Designers Chennai',
    'Responsive Website Design Chennai',
    'Modern Web Agency Chennai'
  ],
  'app/website-design-company-in-chennai/page.tsx': [
    'Website Design Company in Chennai',
    'Top Web Design Firm Chennai',
    'Creative Web Designers Chennai',
    'Mobile Friendly Web Design Chennai',
    'Custom Web Portals Chennai'
  ],
  'app/digital-marketing-agency-in-chennai/page.tsx': [
    'Digital Marketing Agency in Chennai',
    'Top Digital Marketing Company Chennai',
    'SEO & Web Design Chennai',
    'B2B Lead Generation Chennai',
    'Google Ads & SEO Agency Chennai'
  ],
  'app/affordable-web-design-agency-chennai/page.tsx': [
    'Affordable Web Design Agency Chennai',
    'Budget Friendly Website Design Chennai',
    'Low Cost Web Development Chennai',
    'Quality Small Business Web Design',
    'Next.js Website Packages Chennai'
  ],
  'app/seo-services-madurai/page.tsx': [
    'SEO Services Madurai',
    'SEO Company in Madurai',
    'Best SEO Agency Madurai',
    'Local SEO Services Madurai',
    'Digital Marketing Agency Madurai',
    'Joy Digital Madurai HQ'
  ],
  'app/seo-company-madurai/page.tsx': [
    'SEO Company Madurai',
    'Search Engine Optimization Madurai',
    'Local SEO Madurai 3-Pack',
    'Google Ranking Services Madurai',
    'Digital Marketing Madurai'
  ],
  'app/local-seo-madurai/page.tsx': [
    'Local SEO Madurai',
    'Google Business Profile Setup Madurai',
    'Google Maps 3-Pack Ranking Madurai',
    'Local Search Marketing Madurai',
    'Madurai SEO Specialists'
  ],
  'app/website-development-company-madurai/page.tsx': [
    'Website Development Company Madurai',
    'Web Design Company in Madurai',
    'Website Developers Madurai',
    'Custom Website Design Madurai',
    'Next.js Web Development Madurai'
  ],
  'app/web-development-company-madurai/page.tsx': [
    'Web Development Company Madurai',
    'Professional Web Design Madurai',
    'Local Web Developers Madurai',
    'Business Website Development Madurai',
    'Joy Digital Madurai'
  ],
  'app/website-design-company-madurai/page.tsx': [
    'Website Design Company Madurai',
    'Creative Web Design Agency Madurai',
    'Mobile Responsive Web Design Madurai',
    'Corporate Website Designers Madurai',
    'Top Rated Web Agency Madurai'
  ],
  'app/digital-marketing-agency-madurai/page.tsx': [
    'Digital Marketing Agency Madurai',
    'Online Marketing Company Madurai',
    'SEO & Social Media Marketing Madurai',
    'Local Lead Generation Madurai',
    'Joy Digital Madurai Services'
  ],
  'app/seo-company-coimbatore/page.tsx': [
    'SEO Company Coimbatore',
    'SEO Services Coimbatore',
    'Best SEO Agency Coimbatore',
    'Local SEO Coimbatore',
    'Digital Marketing Coimbatore'
  ],
  'app/website-design-company-coimbatore/page.tsx': [
    'Website Design Company Coimbatore',
    'Web Development Company Coimbatore',
    'Industrial Web Design Coimbatore',
    'Next.js Web Agency Coimbatore',
    'Business Website Design Coimbatore'
  ]
};

// 4. Function to generate sensible keywords from folder/route name if not in map
function generateDefaultKeywords(relPath) {
  const clean = relPath
    .replace(/^app[\/\\]/, '')
    .replace(/[\/\\]page\.tsx$/, '')
    .replace(/-/g, ' ');
  
  const words = clean.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return [
    words,
    `${words} Services`,
    'Web Development',
    'SEO Services',
    'Joy Digital'
  ];
}

// 5. Walk all page.tsx files and inject keywords into metadata
function walkDir(dir, callback) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, callback);
    } else if (f === 'page.tsx') {
      callback(full);
    }
  }
}

let updatedCount = 0;

walkDir('app', (filePath) => {
  const normPath = filePath.replace(/\\/g, '/');
  
  // Skip blog/[slug] because handled via generateMetadata dynamically
  if (normPath.includes('app/blog/[slug]')) return;
  // Skip admin pages
  if (normPath.includes('app/admin')) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if file has metadata
  if (!content.includes('export const metadata: Metadata = {') && !content.includes('export const metadata = {')) {
    return;
  }

  // Already has keywords?
  if (content.includes('keywords:')) {
    console.log(`ℹ️ Already has keywords: ${normPath}`);
    return;
  }

  const keywordsArray = specificKeywordsMap[normPath] || generateDefaultKeywords(normPath);
  const keywordsString = JSON.stringify(keywordsArray, null, 4)
    .replace(/\n/g, '\n  ')
    .replace(/"/g, '"');

  const keywordsProp = `\n  keywords: ${keywordsString},`;

  // Pattern A: Match description: "...",
  const descRegex = /(description:\s*(?:PAGE_DESC|BLOG_DESC|["'`][\s\S]*?["'`]),?)/;
  if (descRegex.test(content)) {
    content = content.replace(descRegex, `$1${keywordsProp}`);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`✅ Injected keywords into: ${normPath}`);
    return;
  }

  // Pattern B: Match title: ...,
  const titleRegex = /(title:\s*(?:PAGE_TITLE|["'`][\s\S]*?["'`]|\{[\s\S]*?\}),?)/;
  if (titleRegex.test(content)) {
    content = content.replace(titleRegex, `$1${keywordsProp}`);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`✅ Injected keywords after title in: ${normPath}`);
    return;
  }
});

console.log(`\n🎉 Total pages injected with SEO keywords: ${updatedCount}`);
