import {
  getOrganizationEntity,
  getLocalBusinessEntity,
  getWebSiteEntity,
  getBreadcrumbEntity,
  getServiceEntity,
  getBlogPostingEntity,
  getFaqEntity,
  buildPageGraphSchema,
} from "../lib/seo/schema";

try {
  const org = getOrganizationEntity();
  const local = getLocalBusinessEntity();
  const site = getWebSiteEntity();
  const breadcrumbs = getBreadcrumbEntity({
    url: "https://www.joydigital.in/contact",
    items: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Contact", item: "https://www.joydigital.in/contact" },
    ],
  });
  const service = getServiceEntity({
    name: "Next.js Development",
    serviceType: "Web Development",
    url: "https://www.joydigital.in/website-development",
    description: "Custom Next.js solutions",
  });
  const blog = getBlogPostingEntity({
    url: "https://www.joydigital.in/blog/test",
    headline: "Test Headline",
    description: "Test Description",
    datePublished: "2026-01-01",
    dateModified: "2026-02-01",
    authorName: "Saravanan L",
  });
  const faq = getFaqEntity({
    url: "https://www.joydigital.in/faqs",
    faqs: [{ question: "Q1?", answer: "A1." }],
  });

  const fullGraph = buildPageGraphSchema({
    url: "https://www.joydigital.in/test",
    title: "Test Page",
    description: "Test Description",
    isHomepage: true,
    includeLocalBusiness: true,
    service: {
      name: "Web Dev",
      serviceType: "Development",
      description: "Dev service",
    },
    faqs: [{ question: "Q1?", answer: "A1." }],
    breadcrumbs: [{ name: "Home", item: "https://www.joydigital.in" }],
  });

  console.log("All schemas built successfully!");
  console.log(`Graph contains ${fullGraph["@graph"].length} entity nodes.`);
} catch (err) {
  console.error("Schema generation failed:", err);
  process.exit(1);
}
