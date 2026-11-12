const fs = require('fs');
const path = require('path');

// Update app/blog/[slug]/page.tsx
const blogPagePath = path.join(process.cwd(), 'app', 'blog', '[slug]', 'page.tsx');
let blogCode = fs.readFileSync(blogPagePath, 'utf8');

if (!blogCode.includes('keywords:')) {
  const target = 'description: description,';
  const addition = `description: description,
    keywords: [
      post.focusKeyword,
      ...(post.tags || []),
      ...(post.secondaryKeywords ? post.secondaryKeywords.split(',').map((k: string) => k.trim()) : [])
    ].filter(Boolean),`;

  if (blogCode.includes(target)) {
    blogCode = blogCode.replace(target, addition);
    fs.writeFileSync(blogPagePath, blogCode, 'utf8');
    console.log("✅ Updated app/blog/[slug]/page.tsx with dynamic blog keywords");
  } else {
    console.log("⚠️ Target not found in app/blog/[slug]/page.tsx");
  }
} else {
  console.log("ℹ️ app/blog/[slug]/page.tsx already has keywords");
}

// Update [country] dynamic pages if needed
const countryPages = [
  'app/[country]/page.tsx',
  'app/[country]/seo-services/page.tsx',
  'app/[country]/website-development/page.tsx',
  'app/[country]/contact/page.tsx'
];

for (const cPath of countryPages) {
  const full = path.join(process.cwd(), cPath);
  if (!fs.existsSync(full)) continue;
  let code = fs.readFileSync(full, 'utf8');
  if (code.includes('keywords:')) continue;

  const target = 'description:';
  if (code.includes(target)) {
    const regex = /(description:\s*(?:[^,\n\r]+),?)/;
    code = code.replace(regex, `$1\n    keywords: ["Next.js Website Development", "Enterprise SEO Services", "International Web Agency", "Custom Web Development", "Joy Digital"],`);
    fs.writeFileSync(full, code, 'utf8');
    console.log(`✅ Updated ${cPath} with keywords`);
  }
}
