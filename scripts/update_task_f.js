const fs = require('fs');

// 1. Update app/layout.tsx
let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(/\r\n/g, '\n');

// Clean title and description
layout = layout.replace(
  'default: "Next.js Web Development & SEO Agency | Joy Digital",',
  'default: "Custom Next.js Website Development & SEO Agency | Joy Digital",'
);
layout = layout.replace(
  'template: "%s",',
  'template: "%s | Joy Digital",'
);
layout = layout.replace(
  'description: "Joy Digital is a premier Digital Agency & Next.js Web Development company based in Chennai, India. We engineer sub-second web applications, custom software, SEO, and Generative Engine Optimization (GEO) for global brands.",',
  'description: "Joy Digital builds high-performance Next.js websites and data-driven SEO strategies that generate qualified enquiries and measurable organic growth.",'
);

// Clean languages (remove fake translations)
const oldLangs = `    languages: {
      "en-IN": SITE_URL,
      "en-US": \`\${SITE_URL}/us\`,
      "en-GB": \`\${SITE_URL}/uk\`,
      "en-AE": \`\${SITE_URL}/ae\`,
      "en-CA": \`\${SITE_URL}/ca\`,
      "en-AU": \`\${SITE_URL}/au\`,
      "es-ES": \`\${SITE_URL}/es\`,
      "de-DE": \`\${SITE_URL}/de\`,
      "it-IT": \`\${SITE_URL}/it\`,
      "en-SG": \`\${SITE_URL}/sg\`,
      "es-MX": \`\${SITE_URL}/mx\`,
      "pt-BR": \`\${SITE_URL}/br\`,
      "x-default": SITE_URL,
    },`;

const newLangs = `    languages: {
      "en-IN": SITE_URL,
      "en-US": \`\${SITE_URL}/us\`,
      "en-GB": \`\${SITE_URL}/uk\`,
      "en-AE": \`\${SITE_URL}/ae\`,
      "en-CA": \`\${SITE_URL}/ca\`,
      "en-AU": \`\${SITE_URL}/au\`,
      "x-default": SITE_URL,
    },`;

if (layout.includes(oldLangs)) {
  layout = layout.replace(oldLangs, newLangs);
}

// Clean openGraph & twitter
layout = layout.replace(
  'title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",',
  'title: "Custom Next.js Website Development & SEO Agency | Joy Digital",'
);
layout = layout.replace(
  'description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. We build high-converting, sub-second web applications and generative AI search-optimized systems.",',
  'description: "Joy Digital builds high-performance Next.js websites and data-driven SEO strategies that generate qualified enquiries and measurable organic growth.",'
);
layout = layout.replace(
  'title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",',
  'title: "Custom Next.js Website Development & SEO Agency | Joy Digital",'
);
layout = layout.replace(
  'description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. High-performance Next.js apps, SEO, and Generative Engine Optimization (GEO).",',
  'description: "Joy Digital builds high-performance Next.js websites and data-driven SEO strategies that generate qualified enquiries and measurable organic growth.",'
);

fs.writeFileSync('app/layout.tsx', layout, 'utf8');
console.log('Updated app/layout.tsx');

// 2. Update app/blog/page.tsx
let blog = fs.readFileSync('app/blog/page.tsx', 'utf8');
blog = blog.replace(/\r\n/g, '\n');

const oldBlogMeta = `export const metadata: Metadata = {
  title: "Web Development & SEO Blog",
  description: "Stay ahead of competitors with the latest search marketing checklists, SEO audit guidelines, conversion optimization practices, and next-gen web speed updates.",
  alternates: {
    canonical: \`\${SITE_URL}/blog\`,
  },
  openGraph: {
    type: "website",
    url: \`\${SITE_URL}/blog\`,
    siteName: "Joy Digital Agency",
    title: "Web Development & SEO Blog | Joy Digital",
    description: "Stay ahead of competitors with the latest search marketing checklists, SEO audit guidelines, conversion optimization practices, and next-gen web speed updates.",
    images: [{ url: \`\${SITE_URL}/assets/images/hero-banner.webp\`, width: 1200, height: 630, alt: "Joy Digital Agency Blog" }],
  },
};`;

const newBlogMeta = `const BLOG_TITLE = "Web Development & SEO Blog | Joy Digital Insights";
const BLOG_DESC = "Explore actionable web development guides, technical SEO audit frameworks, and Core Web Vitals optimization techniques to grow your search traffic.";

export const metadata: Metadata = {
  title: {
    absolute: BLOG_TITLE,
  },
  description: BLOG_DESC,
  alternates: {
    canonical: \`\${SITE_URL}/blog\`,
  },
  openGraph: {
    type: "website",
    url: \`\${SITE_URL}/blog\`,
    siteName: "Joy Digital",
    title: BLOG_TITLE,
    description: BLOG_DESC,
    images: [{ url: \`\${SITE_URL}/assets/images/hero-banner.webp\`, width: 1200, height: 630, alt: "Joy Digital Web Development & SEO Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESC,
    images: [\`\${SITE_URL}/assets/images/hero-banner.webp\`],
    creator: "@joydigital",
  },
};`;

if (blog.includes(oldBlogMeta)) {
  blog = blog.replace(oldBlogMeta, newBlogMeta);
  fs.writeFileSync('app/blog/page.tsx', blog, 'utf8');
  console.log('Updated app/blog/page.tsx');
} else {
  console.error('Could not find oldBlogMeta in app/blog/page.tsx');
}
