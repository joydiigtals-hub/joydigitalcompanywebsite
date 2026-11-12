const fs = require('fs');
const path = require('path');

// 1. Update app/blog/[slug]/page.tsx
const blogPath = path.join(process.cwd(), 'app', 'blog', '[slug]', 'page.tsx');
let blogCode = fs.readFileSync(blogPath, 'utf8');

// Replace any previous keywords insertion with clean type-safe version
const regexBlogReturn = /return\s*\{\s*title:\s*title,\s*description:\s*description,[\s\S]*?robots:/;
blogCode = blogCode.replace(
  /return\s*\{\s*title:\s*title,\s*description:\s*description,[\s\S]*?robots:/,
  `const rawKeywords: (string | undefined)[] = [
    post.focusKeyword,
    ...(post.tags || []),
    ...(post.secondaryKeywords ? post.secondaryKeywords.split(',').map((k: string) => k.trim()) : [])
  ];
  const blogKeywords: string[] = rawKeywords.filter((k): k is string => Boolean(k));

  return {
    title: title,
    description: description,
    keywords: blogKeywords.length > 0 ? blogKeywords : ["Web Development", "SEO Services", "Joy Digital"],
    robots:`
);
fs.writeFileSync(blogPath, blogCode, 'utf8');
console.log('✅ app/blog/[slug]/page.tsx updated with type-safe keywords');

// 2. Update app/[country]/page.tsx
const countryPage = path.join(process.cwd(), 'app', '[country]', 'page.tsx');
let countryCode = fs.readFileSync(countryPage, 'utf8');
if (!countryCode.includes('keywords:')) {
  countryCode = countryCode.replace(
    'return {\n    title: data.title,\n    description: data.description,',
    `return {\n    title: data.title,\n    description: data.description,\n    keywords: [\n      \`Web Development \${countryLower.toUpperCase()}\`,\n      \`SEO Agency \${countryLower.toUpperCase()}\`,\n      "Next.js Web Development",\n      "Enterprise SEO Services",\n      "Joy Digital"\n    ],`
  );
  countryCode = countryCode.replace(
    'return {\r\n    title: data.title,\r\n    description: data.description,',
    `return {\r\n    title: data.title,\r\n    description: data.description,\r\n    keywords: [\r\n      \`Web Development \${countryLower.toUpperCase()}\`,\r\n      \`SEO Agency \${countryLower.toUpperCase()}\`,\r\n      "Next.js Web Development",\r\n      "Enterprise SEO Services",\r\n      "Joy Digital"\r\n    ],`
  );
  fs.writeFileSync(countryPage, countryCode, 'utf8');
  console.log('✅ app/[country]/page.tsx updated with country keywords');
}

// 3. Update app/[country]/seo-services/page.tsx
const countrySeoPage = path.join(process.cwd(), 'app', '[country]', 'seo-services', 'page.tsx');
let countrySeoCode = fs.readFileSync(countrySeoPage, 'utf8');
if (!countrySeoCode.includes('keywords:')) {
  countrySeoCode = countrySeoCode.replace(
    'return {\n    title: data.title,\n    description: data.description,',
    `return {\n    title: data.title,\n    description: data.description,\n    keywords: [\n      \`SEO Services \${countryLower.toUpperCase()}\`,\n      \`SEO Agency \${countryLower.toUpperCase()}\`,\n      "B2B SEO",\n      "Technical SEO",\n      "Joy Digital"\n    ],`
  );
  countrySeoCode = countrySeoCode.replace(
    'return {\r\n    title: data.title,\r\n    description: data.description,',
    `return {\r\n    title: data.title,\r\n    description: data.description,\r\n    keywords: [\r\n      \`SEO Services \${countryLower.toUpperCase()}\`,\r\n      \`SEO Agency \${countryLower.toUpperCase()}\`,\r\n      "B2B SEO",\r\n      "Technical SEO",\r\n      "Joy Digital"\r\n    ],`
  );
  fs.writeFileSync(countrySeoPage, countrySeoCode, 'utf8');
  console.log('✅ app/[country]/seo-services/page.tsx updated with country keywords');
}

// 4. Update app/[country]/website-development/page.tsx
const countryWebDevPage = path.join(process.cwd(), 'app', '[country]', 'website-development', 'page.tsx');
let countryWebDevCode = fs.readFileSync(countryWebDevPage, 'utf8');
if (!countryWebDevCode.includes('keywords:')) {
  countryWebDevCode = countryWebDevCode.replace(
    'return {\n    title: data.title,\n    description: data.description,',
    `return {\n    title: data.title,\n    description: data.description,\n    keywords: [\n      \`Website Development \${countryLower.toUpperCase()}\`,\n      \`Web Design Agency \${countryLower.toUpperCase()}\`,\n      "Next.js Web Development",\n      "Custom Web Applications",\n      "Joy Digital"\n    ],`
  );
  countryWebDevCode = countryWebDevCode.replace(
    'return {\r\n    title: data.title,\r\n    description: data.description,',
    `return {\r\n    title: data.title,\r\n    description: data.description,\r\n    keywords: [\r\n      \`Website Development \${countryLower.toUpperCase()}\`,\r\n      \`Web Design Agency \${countryLower.toUpperCase()}\`,\r\n      "Next.js Web Development",\r\n      "Custom Web Applications",\r\n      "Joy Digital"\r\n    ],`
  );
  fs.writeFileSync(countryWebDevPage, countryWebDevCode, 'utf8');
  console.log('✅ app/[country]/website-development/page.tsx updated with country keywords');
}

// 5. Update app/[country]/contact/page.tsx
const countryContactPage = path.join(process.cwd(), 'app', '[country]', 'contact', 'page.tsx');
let countryContactCode = fs.readFileSync(countryContactPage, 'utf8');
if (!countryContactCode.includes('keywords:')) {
  countryContactCode = countryContactCode.replace(
    'return {\n    title: data.title,\n    description: data.description,',
    `return {\n    title: data.title,\n    description: data.description,\n    keywords: [\n      \`Contact Joy Digital \${countryLower.toUpperCase()}\`,\n      "Web Development Consultation",\n      "Hire Next.js Developers",\n      "SEO Agency Contact"\n    ],`
  );
  countryContactCode = countryContactCode.replace(
    'return {\r\n    title: data.title,\r\n    description: data.description,',
    `return {\r\n    title: data.title,\r\n    description: data.description,\r\n    keywords: [\r\n      \`Contact Joy Digital \${countryLower.toUpperCase()}\`,\n      "Web Development Consultation",\n      "Hire Next.js Developers",\n      "SEO Agency Contact"\n    ],`
  );
  fs.writeFileSync(countryContactPage, countryContactCode, 'utf8');
  console.log('✅ app/[country]/contact/page.tsx updated with country keywords');
}
