const fs = require('fs');
const path = require('path');

// 1. Update ViewCounter.tsx
let viewCounter = fs.readFileSync('components/ui/ViewCounter.tsx', 'utf8');
viewCounter = viewCounter.replace(/\r\n/g, '\n');

const oldNullReturn = `  if (views === null) {
    return (
      <span className={\`inline-flex items-center gap-1 text-[10px] text-text-muted font-semibold \${className}\`}>
        <i className="fa-solid fa-eye animate-pulse" /> ... views
      </span>
    );
  }`;

const newNullReturn = `  if (views === null) {
    return null;
  }`;

if (viewCounter.includes(oldNullReturn)) {
  viewCounter = viewCounter.replace(oldNullReturn, newNullReturn);
  fs.writeFileSync('components/ui/ViewCounter.tsx', viewCounter, 'utf8');
  console.log('Updated ViewCounter.tsx to hide placeholder');
}

// 2. Replace hero-banner.webp in blog markdown files
const imageReplacements = {
  '7-step-guide-website-development-process.md': '/assets/images/blog/nextjs-website-development-chennai.webp',
  'ai-website-development-2026.md': '/assets/images/blog/ai-insurance-lead-qualification.png',
  'cost-of-nextjs-web-development-usa-vs-offshore.md': '/assets/images/blog/nextjs-website-development-chennai.webp',
  'digital-marketing-strategy-small-businesses.md': '/assets/images/blog/gbp-showcase.webp',
  'generative-engine-optimization-geo-b2b-readiness.md': '/assets/images/blog/wordpress-to-nextjs-migration-blueprint.webp',
  'google-business-profile-optimization-guide.md': '/assets/images/blog/gbp-showcase.webp',
  'hidden-cost-of-slow-b2b-websites-enterprise-pipeline.md': '/assets/images/blog/gsc-performance-dashboard.webp',
  'how-dubai-real-estate-brokers-capture-hnw-buyers-ai-seo.md': '/assets/images/blog/essential-tourism-website-features.webp',
  'real-estate-website-design-features.md': '/assets/images/blog/essential-tourism-website-features.webp',
  'template-websites-vs-custom-web-apps-best-investment.md': '/assets/images/blog/migrate-wordpress-to-nextjs-guide.webp',
  'ultimate-8-step-guide-website-development-process.md': '/assets/images/blog/nextjs-website-development-chennai.webp',
  'why-global-b2b-companies-ditching-legacy-cms-for-nextjs.md': '/assets/images/blog/wordpress-to-nextjs-migration-blueprint.webp',
  'why-nextjs-is-better-than-traditional-wordpress-for-local-seo.md': '/assets/images/blog/migrate-wordpress-to-nextjs-guide.webp',
  'why-slow-website-costing-your-business-customers.md': '/assets/images/blog/gsc-performance-dashboard.webp',
  'why-uk-businesses-hire-custom-react-agencies-india.md': '/assets/images/blog/nextjs-website-development-chennai.webp',
  'why-website-important-business-growth-chennai-2026.md': '/assets/images/blog/nextjs-website-development-chennai.webp',
};

for (const [filename, newImg] of Object.entries(imageReplacements)) {
  const filePath = path.join('content/blog', filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\/assets\/images\/hero-banner\.webp/g, newImg);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced hero-banner in ${filename} -> ${newImg}`);
  }
}

// 3. Update BlogArticleContainer.tsx to ensure guaranteed service link fallback and clean SITE_URL
let container = fs.readFileSync('components/sections/BlogArticleContainer.tsx', 'utf8');
container = container.replace(/\r\n/g, '\n');

// Import SITE_URL
if (!container.includes('from "@/lib/siteConfig"')) {
  container = container.replace(
    'import { buildPageGraphSchema } from "@/lib/seo/schema";',
    'import { buildPageGraphSchema } from "@/lib/seo/schema";\nimport { SITE_URL } from "@/lib/siteConfig";'
  );
}

// Replace hardcoded URLs in breadcrumbs
container = container.replace(/https:\/\/www\.joydigital\.in\/blog/g, '${SITE_URL}/blog');
container = container.replace(/https:\/\/www\.joydigital\.in/g, '${SITE_URL}');

// Add guaranteed service link fallback
const oldInternalLinksBox = `{/* Internal Links Box (Recommended Related Services & Resources) */}
          {post.internalLinks && post.internalLinks.length > 0 && (
            <div className="mt-10 p-6 bg-gradient-to-br from-slate-50 to-purple-50/40 border border-primary/20 rounded-2xl select-none shadow-sm">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <i className="fa-solid fa-compass text-primary" /> Recommended Services &amp; Solutions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold">
                {post.internalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.targetUrl}
                      className="text-slate-800 hover:text-primary flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                    >
                      <span className="truncate pr-2 font-bold">{link.anchorText}</span>
                      <i className="fa-solid fa-arrow-right text-[10px] text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}`;

const newInternalLinksBox = `{/* Internal Links Box (Recommended Related Services & Resources) */}
          {(() => {
            const getFallbackServiceLinks = () => {
              const text = \`\${post.category || ""} \${post.title || ""}\`.toLowerCase();
              if (text.includes("travel") || text.includes("safari") || text.includes("tour")) {
                return [
                  { anchorText: "Travel Website Development", targetUrl: "/travel-website-development" },
                  { anchorText: "Tour Operator Web Solutions", targetUrl: "/tour-operator-website-development" },
                ];
              }
              if (text.includes("seo") || text.includes("google") || text.includes("ranking") || text.includes("search")) {
                return [
                  { anchorText: "Professional SEO Services", targetUrl: "/seo-services" },
                  { anchorText: "Technical SEO & Speed Tuning", targetUrl: "/technical-seo" },
                ];
              }
              if (text.includes("design") || text.includes("ui") || text.includes("landing")) {
                return [
                  { anchorText: "Web Design Services", targetUrl: "/web-design-services" },
                  { anchorText: "Landing Page Development", targetUrl: "/landing-page-development" },
                ];
              }
              return [
                { anchorText: "Custom Next.js Web Development", targetUrl: "/website-development" },
                { anchorText: "Full-Stack Web Engineering", targetUrl: "/custom-website-development" },
              ];
            };

            const linksToRender = (post.internalLinks && post.internalLinks.length > 0)
              ? post.internalLinks
              : getFallbackServiceLinks();

            return (
              <div className="mt-10 p-6 bg-gradient-to-br from-slate-50 to-purple-50/40 border border-primary/20 rounded-2xl select-none shadow-sm">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <i className="fa-solid fa-compass text-primary" /> Recommended Services &amp; Solutions
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold">
                  {linksToRender.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.targetUrl}
                        className="text-slate-800 hover:text-primary flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <span className="truncate pr-2 font-bold">{link.anchorText}</span>
                        <i className="fa-solid fa-arrow-right text-[10px] text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}`;

if (container.includes(oldInternalLinksBox)) {
  container = container.replace(oldInternalLinksBox, newInternalLinksBox);
  fs.writeFileSync('components/sections/BlogArticleContainer.tsx', container, 'utf8');
  console.log('Updated BlogArticleContainer.tsx with guaranteed service links');
} else {
  console.log('Could not find exact oldInternalLinksBox in BlogArticleContainer.tsx');
}
