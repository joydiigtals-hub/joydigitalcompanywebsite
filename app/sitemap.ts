import type { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";

const BASE_URL = "https://joydigital.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Regional country prefixes
  const regions = ["us", "uk", "ae", "ca", "au", "in"];
  const regionalSubPaths = ["/seo-services", "/website-development", "/contact"];

  // Indexable core pages
  const corePaths = [
    "",
    "/about",
    "/author/saravanan",
    "/portfolio",
    "/case-studies",
    "/case-studies/chennai-clinic-leads",
    "/case-studies/ecommerce-sales-increase",
    "/case-studies/saas-landing-optimization",
    "/contact",
    "/free-website-audit",
    "/blog",
  ];

  // Core Service Pages
  const servicePaths = [
    "/website-development",
    "/custom-website-development",
    "/nextjs-development-agency",
    "/web-design-services",
    "/seo-services",
    "/local-seo-services",
    "/digital-marketing-services",
    "/ai-search-optimization",
    "/ecommerce-website-development",
    "/enterprise-web-solutions",
    "/custom-software-development",
    "/dynamic-website-development",
    "/static-website-development",
    "/landing-page-development",
    "/portfolio-website-development",
    "/wordpress-to-nextjs-migration",
    "/shopify-vs-headless-nextjs",
    "/offshore-web-development-partner",
    "/social-media-marketing",
    "/logo-design-services",
    "/google-business-profile-setup",
    "/google-business-profile-optimization",
    "/safari-website-development",
    "/tour-operator-website-development",
    "/travel-website-development",
    "/africa/tourism-website-development",
  ];

  // City Pages (Primary & Canonical indexable URLs)
  const cityPaths = [
    "/website-development-company-madurai",
    "/website-design-company-madurai",
    "/seo-services-madurai",
    "/website-development-company-chennai",
    "/website-design-company-chennai",
    "/seo-services-chennai",
    "/digital-marketing-agency-in-chennai",
    "/website-design-company-coimbatore",
  ];

  // Industry Pages
  const industryPaths = [
    "/website-for-consulting-companies",
    "/website-for-ecommerce",
    "/website-for-export-and-import",
    "/website-for-hospitals",
    "/website-for-hotels",
    "/website-for-insurance-agents",
    "/website-for-law-firms",
    "/website-for-logistics-and-shipping",
    "/website-for-luxury-brands",
    "/website-for-manufacturing-companies",
    "/website-for-marketing-agencies",
    "/website-for-pest-control",
    "/website-for-real-estate",
    "/website-for-schools",
    "/website-for-small-business",
    "/website-for-solar-companies",
    "/website-for-textile-manufacturers",
    "/website-for-tour-and-safari",
  ];

  // Free Tools Pages
  const toolPaths = [
    "/free-tools",
    "/gst-calculator",
    "/invoice-generator",
    "/quotation-generator",
    "/qr-code-generator",
    "/whatsapp-link-generator",
    "/seo-audit-tool",
    "/image-compressor",
  ];

  // Legal & Utility Pages (Excluded: /thank-you, search, filter parameters)
  const legalPaths = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/disclaimer",
    "/refund-policy",
    "/sitemap",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Core pages
  for (const path of corePaths) {
    const url = `${BASE_URL}${path}`;
    sitemapEntries.push({
      url,
      lastModified: currentDate,
      changeFrequency: path === "" || path === "/blog" ? "daily" : "weekly",
      priority: path === "" ? 1.0 : path === "/blog" ? 0.8 : 0.7,
    });
  }

  // 2. Regional pages
  for (const region of regions) {
    sitemapEntries.push({
      url: `${BASE_URL}/${region}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });

    for (const sub of regionalSubPaths) {
      sitemapEntries.push({
        url: `${BASE_URL}/${region}${sub}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  }

  // 3. Service pages
  for (const path of servicePaths) {
    sitemapEntries.push({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // 4. City pages
  for (const path of cityPaths) {
    sitemapEntries.push({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // 5. Industry pages
  for (const path of industryPaths) {
    sitemapEntries.push({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // 6. Tools pages
  for (const path of toolPaths) {
    sitemapEntries.push({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  // 7. Legal pages
  for (const path of legalPaths) {
    sitemapEntries.push({
      url: `${BASE_URL}${path}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    });
  }

  // 8. Dynamic Blog Posts
  try {
    const posts = await getAllPosts();
    const publishedPosts = posts.filter(
      (p) => p.status !== "Draft" && p.status !== "Archived"
    );

    for (const post of publishedPosts) {
      const postDate = post.lastUpdatedDate || post.date ? new Date(post.lastUpdatedDate || post.date) : currentDate;
      sitemapEntries.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: isNaN(postDate.getTime()) ? currentDate : postDate,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    const categories = await getAllCategories();
    for (const cat of categories) {
      sitemapEntries.push({
        url: `${BASE_URL}/blog/category/${cat.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  } catch (err) {
    console.error("Error generating sitemap blog entries:", err);
  }

  return sitemapEntries;
}
