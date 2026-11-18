export const SITE_URL = "https://www.joydigital.in";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS_SERVICES = [
  {
    name: "Custom Website Development",
    description: "High-performance, mobile-first business websites engineered for speed, clean UX, and organic enquiry generation.",
    url: `${SITE_URL}/custom-website-development`
  },
  {
    name: "Next.js Web Development",
    description: "Sub-second Next.js web applications, React Server Components, TypeScript engineering, and scalable headless architectures.",
    url: `${SITE_URL}/nextjs-development-agency`
  },
  {
    name: "SEO Services & Organic Growth",
    description: "Technical SEO audits, Core Web Vitals remediation, local 3-pack rankings, and organic search traffic growth.",
    url: `${SITE_URL}/seo-services`
  },
  {
    name: "Generative Engine Optimization (GEO)",
    description: "Entity-first optimization for AI search engines including ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.",
    url: `${SITE_URL}/ai-search-optimization`
  },
  {
    name: "WordPress to Next.js Migration",
    description: "Seamless migration from slow, vulnerable WordPress installations to modern, lightning-fast headless Next.js platforms.",
    url: `${SITE_URL}/wordpress-to-nextjs-migration`
  },
  {
    name: "E-Commerce Website Development",
    description: "Headless e-commerce stores, custom checkout funnels, secure payment gateway integrations, and sub-second catalog loading.",
    url: `${SITE_URL}/ecommerce-website-development`
  },
  {
    name: "Landing Page Development",
    description: "High-converting, performance-tuned landing pages designed for Google Ads, paid campaigns, and direct lead generation.",
    url: `${SITE_URL}/landing-page-development`
  },
  {
    name: "Local SEO & Google Business Profile Optimization",
    description: "Google Maps 3-Pack rankings, local citation building, and review optimization for regional businesses.",
    url: `${SITE_URL}/google-business-profile-optimization`
  },
  {
    name: "Custom Software Development",
    description: "Custom internal portals, CRM systems, workflow automation, and scalable cloud-native web systems.",
    url: `${SITE_URL}/custom-software-development`
  },
  {
    name: "Dynamic Website Development",
    description: "Database-driven web platforms with custom admin panels, real-time API integrations, and Supabase/PostgreSQL backends.",
    url: `${SITE_URL}/dynamic-website-development`
  },
  {
    name: "Static Website Development",
    description: "Blazing fast static websites with zero database overhead, maximum security, and CDN edge distribution.",
    url: `${SITE_URL}/static-website-development`
  },
  {
    name: "Web Design & UI/UX Services",
    description: "Conversion-optimized, user-friendly digital product and web interface design with responsive layouts.",
    url: `${SITE_URL}/web-design-services`
  }
];

export const BUSINESS_INDUSTRIES = [
  {
    name: "Textile & Garment Manufacturing Websites",
    description: "B2B export portals, fabric product catalogs, and international RFQ inquiry systems for textile and apparel manufacturers.",
    url: `${SITE_URL}/website-for-textile-manufacturers`
  },
  {
    name: "Tour, Safari & Travel Agency Websites",
    description: "Safari booking funnels, dynamic multi-day tour itineraries, direct WhatsApp reservations, and travel payment portals.",
    url: `${SITE_URL}/website-for-tour-and-safari`
  },
  {
    name: "Hospitals, Clinics & Healthcare Websites",
    description: "Doctor profiles, patient appointment booking, specialty departments, and local medical SEO for healthcare providers.",
    url: `${SITE_URL}/website-for-hospitals`
  },
  {
    name: "Real Estate & Property Development Websites",
    description: "Property listings, floor plan showcases, interactive project galleries, and buyer inquiry funnels for builders and agents.",
    url: `${SITE_URL}/website-for-real-estate`
  },
  {
    name: "Solar Energy & Commercial Solar EPC Websites",
    description: "Solar savings calculator funnels, commercial EPC project portfolios, subsidy information, and lead capture for solar companies.",
    url: `${SITE_URL}/website-for-solar-companies`
  },
  {
    name: "Schools & Educational Institution Websites",
    description: "Admission inquiry funnels, campus showcases, academic curriculum details, and parent communication hubs.",
    url: `${SITE_URL}/website-for-schools`
  },
  {
    name: "Pest Control & Home Service Websites",
    description: "Emergency quote funnels, local service area landing pages, and Google Local Services ranking systems.",
    url: `${SITE_URL}/website-for-pest-control`
  },
  {
    name: "Export & Import Trading Portals",
    description: "International B2B trade platforms, product specification catalogs, and multi-currency bulk order quotation workflows.",
    url: `${SITE_URL}/website-for-export-and-import`
  },
  {
    name: "Logistics & Freight Shipping Websites",
    description: "Freight rate request funnels, shipment tracking interfaces, and warehousing supply chain showcases.",
    url: `${SITE_URL}/website-for-logistics-and-shipping`
  },
  {
    name: "Hotels & Luxury Resort Websites",
    description: "Commission-free direct room reservation funnels, accommodation galleries, and destination experience guides.",
    url: `${SITE_URL}/website-for-hotels`
  },
  {
    name: "Law Firms & Legal Practice Websites",
    description: "Practice area showcases, advocate profiles, confidential consultation booking, and legal trust signals.",
    url: `${SITE_URL}/website-for-law-firms`
  },
  {
    name: "Consulting & Professional Services Websites",
    description: "Authority-building websites, case study portfolios, discovery call funnels, and corporate branding.",
    url: `${SITE_URL}/website-for-consulting-companies`
  },
  {
    name: "Small Business & Local Retail Websites",
    description: "Affordable high-speed websites engineered to turn local searchers into phone calls, visits, and WhatsApp inquiries.",
    url: `${SITE_URL}/website-for-small-business`
  },
  {
    name: "Manufacturing & Industrial Enterprise Websites",
    description: "Industrial equipment catalogs, certification showcases, distributor locator portals, and RFQ systems.",
    url: `${SITE_URL}/website-for-manufacturing-companies`
  },
  {
    name: "Insurance Agency Websites",
    description: "Policy comparison funnels, premium quote calculators, and lead management for independent insurance agents.",
    url: `${SITE_URL}/website-for-insurance-agents`
  }
];

export const BUSINESS_INFO = {
  name: "Joy Digital",
  legalName: "Joy Digital",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.webp`,
  image: `${SITE_URL}/assets/images/hero-banner.webp`,
  description: "Joy Digital is a web development and SEO agency headquartered in Madurai, Tamil Nadu, India. We build fast, mobile-friendly websites, custom software, SEO, and Generative Engine Optimization (GEO) for businesses in India, the USA, the UK, and the UAE.",
  telephone: "+919080026133",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com",
  address: {
    "@type": "PostalAddress",
    "streetAddress": "4/166 T, Thinamani Nagar",
    "addressLocality": "Madurai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "625018",
    "addressCountry": "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    "latitude": 9.9252,
    "longitude": 78.1198
  },
  areaServed: [
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "Singapore" },
    { "@type": "AdministrativeArea", "name": "Worldwide" }
  ],
  sameAs: [
    "https://www.linkedin.com/in/saravanan-l-34a861154/",
    "https://share.google/BSniheS2qnzwqUKXU",
    "https://www.youtube.com/@Joydigital2026",
    "https://www.facebook.com/profile.php?id=61590372457559",
    "https://wa.me/919080026133",
    "https://github.com/joydiigtals-hub"
  ],
  services: BUSINESS_SERVICES.map(s => s.name),
  industries: BUSINESS_INDUSTRIES.map(i => i.name)
};

export const PERSON_SARAVANAN_ID = `${SITE_URL}/author/saravanan#person`;

export function getPersonEntity() {
  return {
    "@type": "Person",
    "@id": PERSON_SARAVANAN_ID,
    "name": "Saravanan L",
    "jobTitle": "Technical Web Specialist & Founder",
    "worksFor": { "@id": ORGANIZATION_ID },
    "url": `${SITE_URL}/author/saravanan`,
    "image": `${SITE_URL}/assets/images/founder.jpg`,
    "sameAs": [
      "https://www.linkedin.com/in/saravanan-l-34a861154/"
    ],
    "knowsAbout": [
      "Next.js Web Development",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Web Engineering & Core Web Vitals",
      "Technical PageSpeed Optimization",
      "Custom Web Architecture"
    ]
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function getOrganizationEntity() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.url,
    "logo": BUSINESS_INFO.logo,
    "image": BUSINESS_INFO.image,
    "description": BUSINESS_INFO.description,
    "telephone": BUSINESS_INFO.telephone,
    "email": BUSINESS_INFO.email,
    "address": BUSINESS_INFO.address,
    "areaServed": BUSINESS_INFO.areaServed,
    "founder": {
      "@type": "Person",
      "@id": PERSON_SARAVANAN_ID,
      "name": "Saravanan L"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.telephone,
        "contactType": "sales",
        "email": BUSINESS_INFO.email,
        "areaServed": ["IN", "US", "GB", "AE", "AU", "CA", "SG"],
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.telephone,
        "contactType": "customer service",
        "email": BUSINESS_INFO.email,
        "areaServed": ["IN", "US", "GB", "AE", "AU", "CA", "SG"],
        "availableLanguage": ["English", "Tamil"]
      }
    ],
    "sameAs": BUSINESS_INFO.sameAs,
    "knowsAbout": [
      ...BUSINESS_SERVICES.map((s) => s.name),
      ...BUSINESS_INDUSTRIES.map((i) => i.name),
      "Next.js 15 Web Engineering",
      "React Server Components",
      "Generative Engine Optimization (GEO)",
      "Search Engine Optimization (SEO)",
      "Core Web Vitals & PageSpeed 95+",
      "Technical SEO & Structured Data",
      "Local Map Pack SEO",
      "WordPress to Next.js Migration",
      "Headless E-commerce Solutions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Joy Digital Services & Industry Solutions",
      "itemListElement": [
        ...BUSINESS_SERVICES.map((service, idx) => ({
          "@type": "Offer",
          "position": idx + 1,
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "url": service.url
          }
        })),
        ...BUSINESS_INDUSTRIES.map((industry, idx) => ({
          "@type": "Offer",
          "position": BUSINESS_SERVICES.length + idx + 1,
          "itemOffered": {
            "@type": "Service",
            "name": industry.name,
            "description": industry.description,
            "url": industry.url
          }
        }))
      ]
    }
  };
}

export function getLocalBusinessEntity() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": LOCALBUSINESS_ID,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.url,
    "logo": BUSINESS_INFO.logo,
    "image": BUSINESS_INFO.image,
    "telephone": BUSINESS_INFO.telephone,
    "email": BUSINESS_INFO.email,
    "priceRange": "$$",
    "currenciesAccepted": "USD, INR, GBP, EUR, AED, AUD, CAD",
    "paymentAccepted": "Credit Card, Bank Wire, Stripe, Razorpay",
    "address": BUSINESS_INFO.address,
    "geo": BUSINESS_INFO.geo,
    "areaServed": BUSINESS_INFO.areaServed,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": BUSINESS_INFO.sameAs,
    "parentOrganization": { "@id": ORGANIZATION_ID }
  };
}

export function getProfessionalServiceEntity() {
  return getLocalBusinessEntity();
}

export function getWebSiteEntity() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": BUSINESS_INFO.url,
    "name": BUSINESS_INFO.name,
    "publisher": { "@id": ORGANIZATION_ID }
  };
}

export function getWebPageEntity(params: {
  url: string;
  name: string;
  description: string;
  isHomepage?: boolean;
  hasBreadcrumb?: boolean;
  hasFaq?: boolean;
}) {
  const pageId = params.isHomepage ? `${SITE_URL}/#webpage` : `${params.url}#webpage`;
  
  const entity: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": pageId,
    "url": params.url,
    "name": params.name,
    "description": params.description,
    "isPartOf": { "@id": WEBSITE_ID },
    "about": { "@id": ORGANIZATION_ID }
  };

  if (params.hasBreadcrumb && !params.isHomepage) {
    entity.breadcrumb = { "@id": `${params.url}#breadcrumb` };
  }

  return entity;
}

export function getBreadcrumbEntity(params: {
  url: string;
  items: BreadcrumbItem[];
}) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${params.url}#breadcrumb`,
    "itemListElement": params.items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item.startsWith("/") ? "" : "/"}${item.item}`
    }))
  };
}

export function getServiceEntity(params: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: Array<Record<string, string>>;
}) {
  return {
    "@type": "Service",
    "@id": `${params.url}#service`,
    "name": params.name,
    "description": params.description,
    "url": params.url,
    "serviceType": params.serviceType || params.name,
    "provider": { "@id": ORGANIZATION_ID },
    "areaServed": params.areaServed || BUSINESS_INFO.areaServed
  };
}

export function getBlogPostingEntity(params: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorRole?: string;
  authorUrl?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${params.url}#article`,
    "mainEntityOfPage": { "@id": `${params.url}#webpage` },
    "headline": params.headline,
    "description": params.description,
    "image": params.image || BUSINESS_INFO.image,
    "datePublished": params.datePublished,
    "dateModified": params.dateModified || params.datePublished,
    "author": {
      "@type": "Person",
      "@id": PERSON_SARAVANAN_ID,
      "name": params.authorName || "Saravanan L",
      "jobTitle": params.authorRole || "Technical Web Specialist",
      "url": params.authorUrl || `${SITE_URL}/author/saravanan`
    },
    "publisher": { "@id": ORGANIZATION_ID },
    "url": params.url
  };
}

export function getFaqEntity(params: {
  url: string;
  faqs: FaqItem[];
}) {
  return {
    "@type": "FAQPage",
    "@id": `${params.url}#faq`,
    "mainEntity": params.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getWebApplicationEntity(params: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
}) {
  return {
    "@type": "WebApplication",
    "@id": `${params.url}#app`,
    "name": params.name,
    "description": params.description,
    "url": params.url,
    "applicationCategory": params.applicationCategory || "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
    "provider": { "@id": ORGANIZATION_ID }
  };
}

export interface BuildGraphOptions {
  url: string;
  title: string;
  description: string;
  isHomepage?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  service?: {
    name: string;
    description: string;
    serviceType?: string;
  };
  blogPosting?: {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    authorRole?: string;
  };
  webApp?: {
    name: string;
    description: string;
    applicationCategory?: string;
  };
  faqs?: FaqItem[];
  includeLocalBusiness?: boolean;
  additionalEntities?: Record<string, unknown>[];
}

export function buildPageGraphSchema(options: BuildGraphOptions) {
  const canonicalUrl = options.url.startsWith("http")
    ? options.url
    : `${SITE_URL}${options.url.startsWith("/") ? "" : "/"}${options.url}`;

  const graph: Record<string, unknown>[] = [
    getWebSiteEntity(),
    getOrganizationEntity(),
  ];

  if (options.isHomepage || options.includeLocalBusiness) {
    graph.push(getLocalBusinessEntity());
  }

  const hasBreadcrumbs = Boolean(options.breadcrumbs && options.breadcrumbs.length > 0 && !options.isHomepage);
  const hasFaqs = Boolean(options.faqs && options.faqs.length > 0);

  graph.push(
    getWebPageEntity({
      url: canonicalUrl,
      name: options.title,
      description: options.description,
      isHomepage: options.isHomepage,
      hasBreadcrumb: hasBreadcrumbs,
      hasFaq: hasFaqs,
    })
  );

  if (hasBreadcrumbs && options.breadcrumbs) {
    graph.push(
      getBreadcrumbEntity({
        url: canonicalUrl,
        items: options.breadcrumbs,
      })
    );
  }

  if (options.service) {
    graph.push(
      getServiceEntity({
        url: canonicalUrl,
        name: options.service.name,
        description: options.service.description,
        serviceType: options.service.serviceType,
      })
    );
  }

  if (options.blogPosting) {
    graph.push(
      getBlogPostingEntity({
        url: canonicalUrl,
        headline: options.blogPosting.headline,
        description: options.blogPosting.description,
        image: options.blogPosting.image,
        datePublished: options.blogPosting.datePublished,
        dateModified: options.blogPosting.dateModified,
        authorName: options.blogPosting.authorName,
        authorRole: options.blogPosting.authorRole,
      })
    );
  }

  if (options.webApp) {
    graph.push(
      getWebApplicationEntity({
        url: canonicalUrl,
        name: options.webApp.name,
        description: options.webApp.description,
        applicationCategory: options.webApp.applicationCategory,
      })
    );
  }

  if (hasFaqs && options.faqs) {
    graph.push(
      getFaqEntity({
        url: canonicalUrl,
        faqs: options.faqs,
      })
    );
  }

  if (options.additionalEntities && options.additionalEntities.length > 0) {
    graph.push(...options.additionalEntities);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getRootLayoutSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getWebSiteEntity(),
      getOrganizationEntity(),
      getLocalBusinessEntity(),
      getPersonEntity(),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-nextjs`,
        "name": "Custom Next.js Web Application Development",
        "provider": { "@id": ORGANIZATION_ID },
        "serviceType": "Next.js Solutions & Web Development",
        "areaServed": BUSINESS_INFO.areaServed,
        "description": "High-performance, sub-second Next.js web systems, headless CMS architectures, and enterprise web applications."
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-geo`,
        "name": "Generative Engine Optimization (GEO) & AI Search",
        "provider": { "@id": ORGANIZATION_ID },
        "serviceType": "SEO & GEO Optimization",
        "areaServed": BUSINESS_INFO.areaServed,
        "description": "Entity-first Generative Engine Optimization (GEO) to dominate AI citations across ChatGPT, Perplexity, Claude, Google Gemini, and Bing Copilot."
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-custom-apps`,
        "name": "Custom Web Applications",
        "provider": { "@id": ORGANIZATION_ID },
        "serviceType": "Custom Web Apps",
        "areaServed": BUSINESS_INFO.areaServed,
        "description": "Scalable B2B SaaS web applications, custom CRM platforms, logistics dashboards, and transactional portals."
      }
    ]
  };
}

/**
 * Dedicated standalone Organization Schema in exact JSON-LD format
 * for direct inclusion in <head> or on homepage.
 */
export function getRootOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...getOrganizationEntity(),
  };
}

/**
 * Dedicated standalone FAQPage Schema in exact JSON-LD format
 * matching Google Search Central and Rich Results guidelines.
 */
export function buildFaqPageSchema(faqs: FaqItem[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faq` } : {}),
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}


