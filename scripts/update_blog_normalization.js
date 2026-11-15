const fs = require('fs');

let blogTs = fs.readFileSync('lib/blog.ts', 'utf8');
blogTs = blogTs.replace(/\r\n/g, '\n');

const oldNormalize = `// Helper to normalize parsed frontmatter data into BlogPost interface
function normalizePostData(slug: string, data: any, content: string): BlogPost {
  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags;
  } else if (typeof data.tags === "string" && data.tags.trim()) {
    tags = data.tags.split(",").map((t: string) => t.trim());
  }

  let internalLinks: InternalLinkItem[] = [];
  if (Array.isArray(data.internalLinks)) {
    internalLinks = data.internalLinks;
  }`;

const newNormalize = `// Helper to normalize parsed frontmatter data into BlogPost interface
function normalizePostData(slug: string, data: any, content: string): BlogPost {
  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags;
  } else if (typeof data.tags === "string" && data.tags.trim()) {
    tags = data.tags.split(",").map((t: string) => t.trim());
  }

  // Normalize legacy URLs in content
  let normalizedContent = (content || "")
    .replace(/\\]\\(\\/website-for-tours-and-travels\\)/g, "](/travel-website-development)")
    .replace(/href=["']\\/website-for-tours-and-travels["']/g, 'href="/travel-website-development"')
    .replace(/\\]\\(\\/local-seo-madurai\\)/g, "](/seo-services-madurai)")
    .replace(/href=["']\\/local-seo-madurai["']/g, 'href="/seo-services-madurai"')
    .replace(/\\]\\(\\/africa\\)/g, "](/africa/tourism-website-development)")
    .replace(/href=["']\\/africa["']/g, 'href="/africa/tourism-website-development"');

  let internalLinks: InternalLinkItem[] = [];
  if (Array.isArray(data.internalLinks)) {
    internalLinks = data.internalLinks.map((item: any) => ({
      anchorText: item.anchorText || "",
      targetUrl: item.targetUrl === "/website-for-tours-and-travels"
        ? "/travel-website-development"
        : item.targetUrl === "/local-seo-madurai"
        ? "/seo-services-madurai"
        : item.targetUrl === "/africa"
        ? "/africa/tourism-website-development"
        : item.targetUrl || "",
    }));
  }`;

if (blogTs.includes(oldNormalize)) {
  blogTs = blogTs.replace(oldNormalize, newNormalize);
  // Also pass normalizedContent to return
  blogTs = blogTs.replace('content,\n\n    showTableOfContents:', 'content: normalizedContent,\n\n    showTableOfContents:');
  fs.writeFileSync('lib/blog.ts', blogTs, 'utf8');
  console.log('Updated lib/blog.ts with link normalization');
} else {
  console.error('Could not find oldNormalize in lib/blog.ts');
}
