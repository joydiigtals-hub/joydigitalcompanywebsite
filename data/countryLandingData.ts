import { SITE_URL } from "@/lib/siteConfig";

export interface CountryValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface CountryProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface CountryFaqItem {
  question: string;
  answer: string;
}

export interface CountryPricingPlan {
  starterPrice: string;
  growthPrice: string;
  enterprisePrice: string;
  currencySymbol: string;
  currencyCode: string;
}

export interface CountryLandingData {
  countryCode: string;
  countryName: string;
  targetMarket: string;
  phoneCode: string;
  currencySymbol: string;
  currencyCode: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
  hero: {
    badge: string;
    headingWordsMain: string[];
    headingWordsGradient: string[];
    subtitle: string;
    bulletPoints: string[];
    trustText: string;
  };
  valueProposition: {
    badge: string;
    title: string;
    subtitle: string;
    items: CountryValueItem[];
  };
  marketBottlenecks: {
    badge: string;
    title: string;
    subtitle: string;
    items: CountryProblemItem[];
  };
  metroFocus: {
    badge: string;
    title: string;
    description: string;
    regions: { label: string; href: string }[];
  };
  whyChooseUs: {
    subtitle: string;
    solutionStatement: string;
  };
  pricing: CountryPricingPlan;
  faqs: CountryFaqItem[];
}

export const COUNTRY_LANDING_DATA: Record<string, CountryLandingData> = {
  us: {
    countryCode: "us",
    countryName: "United States",
    targetMarket: "United States",
    phoneCode: "+1",
    currencySymbol: "$",
    currencyCode: "USD",
    metadata: {
      title: "Next.js Web Development & SEO Agency USA | Joy Digital",
      description: "Scale organic revenue with Joy Digital. We build high-speed Next.js web applications, custom B2B portals, and data-driven SEO architectures for US startups and enterprises.",
      keywords: [
        "Next.js development agency USA",
        "custom B2B web design USA",
        "hire Next.js developers US",
        "React web development United States",
        "organic SEO services USA",
        "enterprise web development USA",
        "headless Next.js agency America",
        "Core Web Vitals agency USA"
      ],
      ogLocale: "en_US"
    },
    hero: {
      badge: "Next.js & React Engineering Partner for US Businesses",
      headingWordsMain: ["High-Performance", "Next.js", "Web", "Engineering", "for"],
      headingWordsGradient: ["US", "Enterprises"],
      subtitle: "Joy Digital partners with US startups, growing SaaS innovators, and established enterprises to engineer sub-second Next.js web platforms, headless storefronts, and high-converting organic search funnels.",
      bulletPoints: [
        "Direct sprint alignment across Eastern (EST) & Pacific (PST) working hours",
        "Sub-second Core Web Vitals performance with clean, modular TypeScript architecture",
        "Full ADA / Section 508 accessibility compliance and 100% repository code ownership"
      ],
      trustText: "Trusted by tech founders, B2B leaders, and fast-scaling brands across New York, California, Texas, Florida, and nationwide."
    },
    valueProposition: {
      badge: "Why US Businesses Choose Joy Digital",
      title: "Engineered for High-Growth American Enterprises",
      subtitle: "Bypass bloated US domestic agency markups. Partner directly with senior engineers dedicated to your technical speed, compliance, and organic pipeline.",
      items: [
        {
          icon: "fa-solid fa-clock text-[#C9F600]",
          title: "EST & PST Timezone Overlap",
          description: "Daily sprint syncs and real-time collaboration scheduled during your US business hours. Direct developer communication without administrative delays."
        },
        {
          icon: "fa-solid fa-dollar-sign text-[#C9F600]",
          title: "Transparent Flat USD Sprints",
          description: "Fixed-scope milestone billing starting at $1,200 USD. Zero hourly creep, unexpected retainer markups, or proprietary CMS subscription fees."
        },
        {
          icon: "fa-solid fa-shield-halved text-[#C9F600]",
          title: "100% Code & IP Ownership",
          description: "Complete GitHub repository handover with MIT licensing, clean documentation, and standard mutual non-disclosure agreements (NDAs)."
        },
        {
          icon: "fa-solid fa-universal-access text-[#C9F600]",
          title: "ADA & WCAG 2.1 Compliance",
          description: "Semantic HTML5 code, keyboard navigability, and accessible contrast ratios engineered to protect your US enterprise against digital compliance risks."
        },
        {
          icon: "fa-solid fa-bolt text-[#C9F600]",
          title: "Sub-Second Edge Infrastructure",
          description: "Deployed on global edge CDNs with serverless origin points optimized across US East (Virginia) and US West (Oregon) for instant rendering."
        },
        {
          icon: "fa-solid fa-brain text-[#C9F600]",
          title: "Generative AI Search (GEO) Ready",
          description: "Deep structured schema and entity graphs ensuring your US business is actively cited by ChatGPT Search, Perplexity, Claude, and Google Gemini."
        }
      ]
    },
    marketBottlenecks: {
      badge: "US Market Challenges",
      title: "Is Your Current Website Holding Back US Growth?",
      subtitle: "American businesses face intense digital competition. Here are the common technical and strategic pitfalls draining US marketing budgets.",
      items: [
        {
          icon: "fa-solid fa-receipt",
          title: "Exorbitant US Agency Retainers",
          description: "Traditional American web agencies charge $150–$250/hour while delegating production to junior staff, leading to multi-month project delays."
        },
        {
          icon: "fa-solid fa-gauge-simple",
          title: "Sluggish WordPress & Theme Bloat",
          description: "Legacy CMS websites loaded with 30+ plugins fail Google Core Web Vitals, causing high mobile bounce rates and demoted search rankings."
        },
        {
          icon: "fa-solid fa-chart-line-down",
          title: "Skyrocketing Customer Acquisition Costs",
          description: "Heavy reliance on Google Ads without an organic search foundation burns advertising capital without building compounding inbound authority."
        },
        {
          icon: "fa-solid fa-lock",
          title: "Vendor Lock-in & Rigid Builders",
          description: "Proprietary website builders (Wix, Squarespace, Webflow) restrict custom database logic, API integrations, and scalable corporate workflows."
        },
        {
          icon: "fa-solid fa-scale-unbalanced",
          title: "ADA Accessibility Lawsuit Exposure",
          description: "Websites lacking structured ARIA labels and accessibility safeguards face mounting legal scrutiny and demand letters in the US."
        },
        {
          icon: "fa-solid fa-arrow-right-from-bracket",
          title: "Leaky B2B Conversion Funnels",
          description: "Web pages that receive traffic but fail to convert qualified US prospects due to slow mobile loading, generic forms, and weak trust hierarchy."
        }
      ]
    },
    metroFocus: {
      badge: "US Metro Reach",
      title: "Targeting High-Growth US Metro Markets?",
      description: "We engineer high-performance web systems and local search campaigns tailored for businesses expanding across premier American commercial hubs.",
      regions: [
        { label: "New York & Tri-State", href: "/us" },
        { label: "California & Silicon Valley", href: "/us" },
        { label: "Texas Tech Corridors", href: "/us" },
        { label: "Florida & Southeast", href: "/us" }
      ]
    },
    whyChooseUs: {
      subtitle: "Why American Brands Partner with Joy Digital",
      solutionStatement: "We deliver modern Next.js architecture, verified Core Web Vitals speed, and technical SEO foundations built to compete aggressively in the US market."
    },
    pricing: {
      starterPrice: "$1,200",
      growthPrice: "$2,400",
      enterprisePrice: "$4,800+",
      currencySymbol: "$",
      currencyCode: "USD"
    },
    faqs: [
      {
        question: "How does Joy Digital coordinate with US teams across Eastern and Pacific time zones?",
        answer: "We maintain dedicated sprint overlap with US working hours (EST and PST). Our team communicates directly via Slack, Microsoft Teams, and Google Meet, providing daily async summaries, transparent GitHub milestone tracking, and rapid response windows without bureaucratic ticket queues."
      },
      {
        question: "What currencies, contracts, and payment terms do you support for US companies?",
        answer: "All projects for US clients are quoted and invoiced transparently in US Dollars (USD). We accept payments via Stripe, major corporate credit cards, and direct international bank wires. We operate with milestone-based agreements (50% upfront, 50% upon deployment approval) with zero recurring maintenance traps."
      },
      {
        question: "Do you sign mutual NDAs and transfer full code and intellectual property ownership?",
        answer: "Yes, absolutely. We execute standard US-compliant mutual non-disclosure agreements (NDAs) prior to project discovery. Upon completion and final settlement, 100% of the intellectual property, source code, design assets, and repository ownership are transferred directly to your organization."
      },
      {
        question: "How do you guarantee Core Web Vitals performance across US telecommunication networks?",
        answer: "Every website we engineer is built using server-rendered Next.js and Tailwind CSS, deployed on global edge networks (Vercel / AWS CloudFront) with data centers in North Virginia and Oregon. We enforce strict asset compression, AVIF/WebP image pipelines, and minimal JavaScript bundles to ensure sub-second LCP (Largest Contentful Paint)."
      },
      {
        question: "Are your web applications compliant with US ADA and Section 508 accessibility standards?",
        answer: "Yes. We code semantic HTML5 structures with comprehensive ARIA landmark attributes, keyboard navigation hierarchies, proper focus rings, and WCAG 2.1 AA compliant color contrast ratios to minimize legal exposure under Title III of the Americans with Disabilities Act (ADA)."
      },
      {
        question: "What is your typical delivery timeline for a US startup or business website?",
        answer: "A standard multi-page corporate profile or high-converting landing page is deployed within 7 to 14 business days. Complex B2B web applications, directory portals, or headless e-commerce platforms average 3 to 6 weeks, delivered through agile milestone sprints."
      }
    ]
  },

  uk: {
    countryCode: "uk",
    countryName: "United Kingdom",
    targetMarket: "United Kingdom",
    phoneCode: "+44",
    currencySymbol: "£",
    currencyCode: "GBP",
    metadata: {
      title: "Professional Web Design & SEO Services UK | Joy Digital",
      description: "Convert UK search traffic into loyal clients. Joy Digital builds high-speed, Core Web Vitals compliant Next.js platforms and executes bespoke B2B SEO campaigns across the UK.",
      keywords: [
        "Web design agency UK",
        "Next.js development company UK",
        "B2B SEO services United Kingdom",
        "custom web development London",
        "corporate web design Manchester",
        "headless CMS developers UK",
        "Core Web Vitals agency Britain",
        "GDPR compliant web design UK"
      ],
      ogLocale: "en_GB"
    },
    hero: {
      badge: "Bespoke Next.js & B2B SEO Agency for UK Companies",
      headingWordsMain: ["Bespoke", "Next.js", "Web", "Design", "&", "SEO", "for"],
      headingWordsGradient: ["UK", "Enterprises"],
      subtitle: "Joy Digital constructs ultra-fast, headless Next.js platforms and executes organic search marketing campaigns engineered specifically for British enterprises, consultancies, and innovative brands.",
      bulletPoints: [
        "Full GMT / BST working hours synchronization with senior UK project engineers",
        "Rigorous GDPR & PECR privacy compliance with cookieless telemetry options",
        "Sub-second Core Web Vitals optimized for British telecom & mobile networks"
      ],
      trustText: "Partnering with growing companies, consultancies, and trade firms across London, Manchester, Birmingham, Edinburgh, and the UK."
    },
    valueProposition: {
      badge: "Why UK Businesses Choose Joy Digital",
      title: "Engineered for British Commercial Standards",
      subtitle: "Achieve superior digital speed and Google.co.uk rankings without the bloated fees of Central London agencies.",
      items: [
        {
          icon: "fa-solid fa-clock text-[#C9F600]",
          title: "GMT / BST Working Hours Sync",
          description: "Real-time communication during British working hours. Coordinate sprints seamlessly over Slack and Google Meet without timezone friction."
        },
        {
          icon: "fa-solid fa-sterling-sign text-[#C9F600]",
          title: "Transparent Flat GBP (£) Invoicing",
          description: "Clear milestone pricing in British Pounds starting from £950. No fluctuating exchange rates, surprise agency retainers, or hidden fees."
        },
        {
          icon: "fa-solid fa-cookie-bite text-[#C9F600]",
          title: "GDPR & PECR Privacy Engineered",
          description: "Built-in compliance adhering to UK Information Commissioner's Office (ICO) guidelines, privacy-first cookie controls, and secure data handling."
        },
        {
          icon: "fa-solid fa-code text-[#C9F600]",
          title: "Full Intellectual Property Handover",
          description: "Complete GitHub code repository transfer under standard UK contract terms, granting your firm 100% asset and copyright ownership."
        },
        {
          icon: "fa-solid fa-leaf text-[#C9F600]",
          title: "Eco-Friendly High-Speed Architecture",
          description: "Ultra-lean Next.js codebases that reduce digital carbon emissions while scoring 95+ on Google Lighthouse across UK broadband networks."
        },
        {
          icon: "fa-solid fa-magnifying-glass-chart text-[#C9F600]",
          title: "Google.co.uk Search Authority",
          description: "Localized UK schema (`en-GB`), regional breadcrumbs, and Knowledge Graph mapping engineered to outrank established British competitors."
        }
      ]
    },
    marketBottlenecks: {
      badge: "UK Market Bottlenecks",
      title: "Common Website Roadblocks Facing UK Businesses",
      subtitle: "British enterprises frequently struggle with outdated systems that fail mobile customers and leak valuable commercial inquiries.",
      items: [
        {
          icon: "fa-solid fa-gauge-simple",
          title: "Sluggish Legacy CMS & Page Builder Bloat",
          description: "Traditional UK WordPress builds burdened with dozens of plugins take 4+ seconds to load on mobile EE and Vodafone networks, spiking bounce rates."
        },
        {
          icon: "fa-solid fa-money-bill-wave",
          title: "Prohibitive London Agency Quotations",
          description: "Capital city agencies quote £8,000–£20,000 for standard brochure sites with lengthy 3-month launch cycles and excessive project management overhead."
        },
        {
          icon: "fa-solid fa-shield-xmark",
          title: "Intrusive Cookie Banners Killing Conversions",
          description: "Poorly implemented GDPR overlays that irritate visitors and block mobile screens, reducing inquiry conversion rates by up to 35%."
        },
        {
          icon: "fa-solid fa-comments-dollar",
          title: "Fragmented Account Management",
          description: "Dealing with layers of account executives rather than the technical developers writing your code, causing miscommunication and scope drift."
        },
        {
          icon: "fa-solid fa-arrow-trend-down",
          title: "Stagnant Google.co.uk Search Rankings",
          description: "Websites that rank poorly for commercial UK search terms due to missing structured data, poor Core Web Vitals, and duplicate content."
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          title: "Clumsy Mobile Inquiry Journeys",
          description: "Mobile layouts that fail to accommodate quick quotation requests, telephone callbacks, and WhatsApp interactions for on-the-go British buyers."
        }
      ]
    },
    metroFocus: {
      badge: "UK Regional Coverage",
      title: "Targeting London & UK Commercial Hubs?",
      description: "We help British brands expand organic search presence across London, Manchester, Birmingham, Leeds, Glasgow, and throughout the United Kingdom.",
      regions: [
        { label: "London & Greater London", href: "/uk" },
        { label: "Manchester & North West", href: "/uk" },
        { label: "Birmingham & Midlands", href: "/uk" },
        { label: "Scotland & Regional UK", href: "/uk" }
      ]
    },
    whyChooseUs: {
      subtitle: "Why British Companies Partner with Joy Digital",
      solutionStatement: "We combine modern Next.js development with disciplined technical SEO and British market compliance, delivering reliable digital pipelines."
    },
    pricing: {
      starterPrice: "£950",
      growthPrice: "£1,850",
      enterprisePrice: "£3,700+",
      currencySymbol: "£",
      currencyCode: "GBP"
    },
    faqs: [
      {
        question: "How do you coordinate with UK businesses during GMT / BST working hours?",
        answer: "Our senior technical developers maintain working hours synchronized with the UK (GMT and BST). We conduct sprint reviews and planning sessions via Google Meet or Slack, ensuring fast communication, quick question resolutions, and smooth project momentum."
      },
      {
        question: "Do you invoice in British Pounds (GBP) and offer transparent milestone billing?",
        answer: "Yes, all proposals and invoices for UK clients are issued in British Pounds (£ GBP). We provide clear flat-rate milestone contracts with no hidden fees or currency conversion surcharges."
      },
      {
        question: "How do you ensure GDPR and PECR cookie compliance on custom Next.js websites?",
        answer: "We engineer websites with strict adherence to UK GDPR and PECR privacy standards. We implement lightweight, non-intrusive cookie consent controls with granular consent categories, zero unauthorized tracking script execution, and support for privacy-first analytics."
      },
      {
        question: "How are your SEO strategies optimized specifically for Google UK (google.co.uk)?",
        answer: "We configure localized hreflang tags (`en-GB`), localized schema structures with UK PostalAddress and areaServed definitions, and target high-intent commercial British keywords, ensuring your business gains maximum prominence in regional UK SERPs."
      },
      {
        question: "Can you migrate our existing slow WordPress website without losing UK search rankings?",
        answer: "Yes. Our WordPress-to-Next.js migration process includes exhaustive 301 URL redirect mapping, structured metadata preservation, and complete schema parity. Our clients routinely observe a 40–70% increase in Google Core Web Vitals scores and improved search rankings post-migration."
      },
      {
        question: "What code ownership and warranty do UK businesses receive upon launch?",
        answer: "You receive 100% full intellectual property and code ownership upon completion. All code is delivered to your designated GitHub or GitLab repository, accompanied by post-launch warranty and technical support."
      }
    ]
  },

  ae: {
    countryCode: "ae",
    countryName: "United Arab Emirates",
    targetMarket: "United Arab Emirates",
    phoneCode: "+971",
    currencySymbol: "AED",
    currencyCode: "AED",
    metadata: {
      title: "Next.js Enterprise Web Dev Dubai & UAE | Joy Digital",
      description: "Engineer ultra-fast, sub-second Next.js web applications in Dubai & Abu Dhabi. Scale B2B enquiries with enterprise-grade SEO, bilingual Arabic/English UI, and AI Search Optimization.",
      keywords: [
        "Next.js web development Dubai",
        "web design company UAE",
        "enterprise web development Abu Dhabi",
        "bilingual web design Arabic English",
        "AI SEO agency Dubai",
        "luxury website design UAE",
        "real estate web design Dubai",
        "custom software development UAE"
      ],
      ogLocale: "en_AE"
    },
    hero: {
      badge: "Enterprise Next.js Web Engineering & AI SEO for UAE Brands",
      headingWordsMain: ["Sub-Second", "Web", "Applications", "&", "SEO", "for"],
      headingWordsGradient: ["Dubai", "&", "UAE"],
      subtitle: "Joy Digital builds luxury-grade, ultra-responsive Next.js web applications, bilingual portals, and AI search architectures engineered for Dubai, Abu Dhabi, and the GCC enterprise market.",
      bulletPoints: [
        "Bilingual Arabic (RTL) & English localization framework architecture",
        "Sub-second mobile rendering optimized for high-speed UAE 5G networks",
        "Direct WhatsApp lead conversion and luxury-tier B2B corporate aesthetics"
      ],
      trustText: "Trusted by real estate developers, luxury brands, consulting firms, and commercial trading hubs across Dubai, Abu Dhabi, and Sharjah."
    },
    valueProposition: {
      badge: "Why UAE Enterprises Choose Joy Digital",
      title: "Engineered for Dubai's Rapid Commercial Velocity",
      subtitle: "In the UAE market, speed, prestige, and seamless mobile conversion are non-negotiable. We engineer digital assets that reflect world-class leadership.",
      items: [
        {
          icon: "fa-solid fa-clock text-[#C9F600]",
          title: "Gulf Standard Time (GST) Sync",
          description: "Full alignment with UAE working weeks (Monday–Friday). Instant WhatsApp and Google Meet response windows across Dubai and Abu Dhabi business hours."
        },
        {
          icon: "fa-solid fa-money-bill-1 text-[#C9F600]",
          title: "Transparent Flat AED Quotes",
          description: "Milestone-based pricing in UAE Dirhams starting from AED 4,500. Zero hidden charges, local tax transparency, and no ongoing platform hostage fees."
        },
        {
          icon: "fa-solid fa-language text-[#C9F600]",
          title: "Bilingual Arabic (RTL) & English",
          description: "Native Right-to-Left (RTL) Arabic typography, seamless language toggles, and localized schema markup for local Emirati and international expat audiences."
        },
        {
          icon: "fa-solid fa-crown text-[#C9F600]",
          title: "Prestige Luxury UI/UX Aesthetics",
          description: "Sophisticated typography, high-contrast layouts, and polished micro-interactions designed to reflect the prestige expected by high-net-worth Gulf clients."
        },
        {
          icon: "fa-brands fa-whatsapp text-[#C9F600]",
          title: "WhatsApp & VIP Lead Automation",
          description: "Integrated click-to-WhatsApp routing, instant enquiry notifications, and CRM synchronizations engineered for the UAE's messaging-first culture."
        },
        {
          icon: "fa-solid fa-robot text-[#C9F600]",
          title: "Generative AI Search (GEO) Dubai",
          description: "Knowledge graph syndication ensuring your UAE firm is prominently cited across ChatGPT Search, Perplexity, and Google AI Overviews."
        }
      ]
    },
    marketBottlenecks: {
      badge: "UAE Market Bottlenecks",
      title: "Digital Roadblocks Facing UAE & Dubai Companies",
      subtitle: "Many Dubai websites fail to capture high-value commercial enquiries because they rely on slow templates that lack prestige and bilingual fluency.",
      items: [
        {
          icon: "fa-solid fa-gem",
          title: "Generic Templates Failing Luxury Standards",
          description: "Discerning Gulf clients immediately recognize cheap WordPress templates, destroying trust and brand prestige within the first 3 seconds of a visit."
        },
        {
          icon: "fa-solid fa-arrows-left-right",
          title: "Broken Arabic (RTL) Layout Shifts",
          description: "Automated translation plugins that break page alignment, produce unnatural Arabic grammar, and create an unpolished impression for local clients."
        },
        {
          icon: "fa-solid fa-mobile-screen",
          title: "Sluggish Mobile Loading on 5G Networks",
          description: "Unoptimized video banners and bloated scripts that stall mobile devices, triggering high bounce rates among busy executives and investors."
        },
        {
          icon: "fa-brands fa-whatsapp",
          title: "Missing Direct WhatsApp Enquiry Funnels",
          description: "Failure to integrate direct WhatsApp triggers, forcing prospects through tedious multi-field contact forms and losing up to 50% of inbound leads."
        },
        {
          icon: "fa-solid fa-map-pin",
          title: "Poor Dubai Google Maps & Local Pack Visibility",
          description: "Missing out on high-intent local searches in Downtown Dubai, DIFC, Business Bay, and Abu Dhabi due to incorrect NAP and schema citations."
        },
        {
          icon: "fa-solid fa-sack-dollar",
          title: "Inflated Regional Agency Markups",
          description: "Local Dubai web agencies charging AED 40,000–80,000 for standard brochure sites with extensive delays and rigid change-request fees."
        }
      ]
    },
    metroFocus: {
      badge: "UAE Regional Coverage",
      title: "Dominating the UAE & Gulf Commercial Market?",
      description: "Capture high-intent queries and high-net-worth clients across Downtown Dubai, DIFC, Business Bay, Abu Dhabi, and the GCC region.",
      regions: [
        { label: "Dubai & DIFC Hubs", href: "/ae" },
        { label: "Abu Dhabi Commercial", href: "/ae" },
        { label: "Sharjah & Northern Emirates", href: "/ae" },
        { label: "GCC Export Portals", href: "/ae" }
      ]
    },
    whyChooseUs: {
      subtitle: "Why UAE Enterprises Choose Joy Digital",
      solutionStatement: "We build digital platforms combining sub-second Next.js performance, prestige aesthetics, and bilingual Arabic/English fluency."
    },
    pricing: {
      starterPrice: "AED 4,500",
      growthPrice: "AED 8,900",
      enterprisePrice: "AED 17,500+",
      currencySymbol: "AED",
      currencyCode: "AED"
    },
    faqs: [
      {
        question: "Do you develop bilingual Arabic (RTL) and English websites for UAE businesses?",
        answer: "Yes, bilingual architecture is one of our core competencies. We build custom Next.js websites with native Right-to-Left (RTL) support for Arabic, clean typographic hierarchy, seamless language toggling, and independent SEO metadata for both Arabic and English pages."
      },
      {
        question: "How do your websites integrate WhatsApp for rapid client lead capture in Dubai?",
        answer: "Recognizing that over 80% of business inquiries in the UAE occur via WhatsApp, we embed intelligent WhatsApp click-to-chat triggers with pre-populated inquiry strings, automated UTM tracking, and direct CRM routing to ensure immediate sales response."
      },
      {
        question: "Can you invoice in UAE Dirhams (AED) with commercial milestone agreements?",
        answer: "Yes. All contracts and invoices for UAE clients are issued in UAE Dirhams (AED). We operate with transparent milestone schedules (initial deposit, milestone demo, and final handover) with zero recurring platform maintenance traps."
      },
      {
        question: "How fast can an enterprise or real estate website be deployed in Dubai?",
        answer: "Standard multi-page corporate websites are completed within 10 to 14 business days. High-end real estate portals, bilingual directory platforms, or custom B2B web applications average 3 to 5 weeks, including full QA and Core Web Vitals optimization."
      },
      {
        question: "How do you optimize websites for AI search engines like ChatGPT and Google Gemini in the GCC?",
        answer: "We implement Generative Engine Optimization (GEO) through comprehensive JSON-LD Knowledge Graph schemas, clear entity definitions, bilingual structured content, and authority citation matrices to ensure AI assistants recommend your UAE business."
      },
      {
        question: "Do you provide ongoing technical support and hosting deployment in the UAE?",
        answer: "Yes. We configure low-latency edge hosting on Vercel or AWS with edge locations in Dubai and Bahrain, coupled with continuous security patching, automated backups, and Core Web Vitals monitoring."
      }
    ]
  },

  ca: {
    countryCode: "ca",
    countryName: "Canada",
    targetMarket: "Canada",
    phoneCode: "+1",
    currencySymbol: "C$",
    currencyCode: "CAD",
    metadata: {
      title: "Next.js Web Development & SEO Agency Canada | Joy Digital",
      description: "Scale organic revenue across Canada. Joy Digital builds high-performance Next.js websites, headless storefronts, and SEO campaigns for Canadian enterprises and startups.",
      keywords: [
        "Next.js web development Canada",
        "SEO agency Toronto",
        "custom web design Vancouver",
        "web development company Montreal",
        "B2B website design Canada",
        "PIPEDA compliant web agency",
        "Canadian web engineering agency",
        "headless Next.js developers Canada"
      ],
      ogLocale: "en_CA"
    },
    hero: {
      badge: "High-Performance Next.js & SEO Agency for Canadian Businesses",
      headingWordsMain: ["Custom", "Next.js", "Web", "Engineering", "for"],
      headingWordsGradient: ["Canadian", "Enterprises"],
      subtitle: "Joy Digital delivers high-speed Next.js web applications, headless commerce platforms, and organic search optimization engineered for Canadian startups, consultancies, and enterprises.",
      bulletPoints: [
        "Full North American timezone alignment (EST / PST) with direct engineer sync",
        "PIPEDA privacy compliance and bilingual English/French Canadian readiness",
        "Sub-second Core Web Vitals performance across Canadian telecom networks"
      ],
      trustText: "Empowering growing tech startups, retail brands, and B2B service firms across Toronto, Vancouver, Montreal, Calgary, and Ottawa."
    },
    valueProposition: {
      badge: "Why Canadian Businesses Choose Joy Digital",
      title: "Engineered for Canada's Diverse Commercial Landscape",
      subtitle: "Combine cost-effective global development efficiency with rigorous Canadian compliance, bilingual fluency, and sub-second speed.",
      items: [
        {
          icon: "fa-solid fa-clock text-[#C9F600]",
          title: "Canadian Timezone Coordination",
          description: "Full working hours overlap across Eastern (Toronto/Montreal) and Pacific (Vancouver) business schedules. Direct developer interaction without ticket delays."
        },
        {
          icon: "fa-solid fa-dollar-sign text-[#C9F600]",
          title: "Flat CAD (C$) Milestone Billing",
          description: "Transparent proposals in Canadian Dollars starting from C$1,650. Guaranteed project budgets with zero unexpected currency conversion markups."
        },
        {
          icon: "fa-solid fa-user-shield text-[#C9F600]",
          title: "PIPEDA Privacy Compliance",
          description: "Built-in data privacy frameworks aligned with the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial regulations."
        },
        {
          icon: "fa-solid fa-language text-[#C9F600]",
          title: "Bilingual English & French Canadian",
          description: "Native multi-language routing architecture supporting English and French Canadian translations to serve Quebec and national markets seamlessly."
        },
        {
          icon: "fa-solid fa-network-wired text-[#C9F600]",
          title: "Canadian Edge CDN Caching",
          description: "Fast content delivery with edge points of presence in Montreal, Toronto, and Vancouver, ensuring sub-second speeds from coast to coast."
        },
        {
          icon: "fa-solid fa-chart-line text-[#C9F600]",
          title: "Google.ca Search Authority",
          description: "Geo-targeted Canadian technical SEO and structured business schemas engineered to outrank competitors on both Google.ca and Google.com."
        }
      ]
    },
    marketBottlenecks: {
      badge: "Canadian Market Challenges",
      title: "Common Website Roadblocks Facing Canadian Brands",
      subtitle: "Canadian companies face high domestic production rates, strict privacy laws, and intense search competition from US conglomerates.",
      items: [
        {
          icon: "fa-solid fa-hand-holding-dollar",
          title: "High Domestic Agency Rates",
          description: "Toronto and Vancouver digital studios charge steep hourly fees, making modern custom web development prohibitively expensive for growing SMBs."
        },
        {
          icon: "fa-solid fa-gauge-simple",
          title: "Cross-Country Latency & Slow Speeds",
          description: "Hosting architectures that fail to cache assets across Canada's vast geography, resulting in slow load times for Western and Atlantic Canadian users."
        },
        {
          icon: "fa-solid fa-earth-americas",
          title: "Clunky Bilingual Implementations",
          description: "Monolithic CMS platforms that struggle to manage English and French Canadian versions cleanly, harming SEO performance and user experience."
        },
        {
          icon: "fa-solid fa-flag",
          title: "Neglected Google.ca Local Rankings",
          description: "Websites lacking structured Canadian schema and local search signals, causing them to be overlooked in competitive regional Google queries."
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          title: "Friction-Heavy Lead Pathways",
          description: "Outdated contact forms that fail on mobile devices, causing high drop-off rates among Canadian mobile shoppers and procurement managers."
        },
        {
          icon: "fa-solid fa-arrow-down-wide-short",
          title: "Overshadowed by US Search Competitors",
          description: "Domestic Canadian brands struggling to gain visibility against large American companies for competitive high-intent industry terms."
        }
      ]
    },
    metroFocus: {
      badge: "Canadian Tech Corridors",
      title: "Targeting Canadian Commercial & Tech Corridors?",
      description: "We help Canadian brands scale organic authority across Toronto, Vancouver, Montreal, Calgary, Ottawa, and national markets.",
      regions: [
        { label: "Toronto & GTA Tech Hub", href: "/ca" },
        { label: "Vancouver & West Coast", href: "/ca" },
        { label: "Montreal & Quebec Region", href: "/ca" },
        { label: "Calgary & Alberta Energy", href: "/ca" }
      ]
    },
    whyChooseUs: {
      subtitle: "Why Canadian Enterprises Choose Joy Digital",
      solutionStatement: "We deliver high-speed Next.js engineering, PIPEDA compliance, and Canadian search optimization to accelerate your digital growth."
    },
    pricing: {
      starterPrice: "C$1,650",
      growthPrice: "C$3,200",
      enterprisePrice: "C$6,500+",
      currencySymbol: "C$",
      currencyCode: "CAD"
    },
    faqs: [
      {
        question: "How do you coordinate with Canadian teams across different time zones?",
        answer: "We accommodate Eastern (Toronto/Montreal), Central, and Pacific (Vancouver) business hours with dedicated sprint overlaps. We provide daily async updates on Slack and hold live reviews via Google Meet to keep projects progressing swiftly."
      },
      {
        question: "Do you quote and invoice in Canadian Dollars (CAD)?",
        answer: "Yes. All proposals, milestone agreements, and invoices for Canadian clients are issued in Canadian Dollars (CAD) with no unexpected foreign exchange surcharges."
      },
      {
        question: "Can you build bilingual websites supporting both English and French Canadian?",
        answer: "Yes. We configure subpath or domain-level bilingual routing (e.g., `/fr` for French) with localized SEO metadata, independent XML sitemaps, and full hreflang mapping to satisfy Canadian language standards and federal requirements."
      },
      {
        question: "How do you ensure PIPEDA compliance on client websites?",
        answer: "We follow privacy-by-design principles, implementing secure SSL/TLS protocols, strict consent controls for tracking scripts, minimal data collection form designs, and compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA)."
      },
      {
        question: "How do your SEO strategies specifically target the Canadian market (Google.ca)?",
        answer: "We configure localized hreflang tags (`en-CA`), Canadian business schemas, Canadian geo-targeting signals in Search Console, and target high-volume regional keywords across Canadian metropolitan markets."
      },
      {
        question: "What is your typical project turnaround for a Canadian client?",
        answer: "A standard corporate website is launched within 7 to 14 business days. Custom B2B platforms, bilingual directories, or headless e-commerce builds average 3 to 5 weeks with milestone delivery."
      }
    ]
  },

  au: {
    countryCode: "au",
    countryName: "Australia",
    targetMarket: "Australia",
    phoneCode: "+61",
    currencySymbol: "A$",
    currencyCode: "AUD",
    metadata: {
      title: "Custom Web Design & SEO Agency Australia | Joy Digital",
      description: "Empower your business with fast, search-compliant Next.js websites and Google ranking strategies engineered for Australian companies. AEST timezone sync & edge CDN speeds.",
      keywords: [
        "Custom web design Australia",
        "Next.js development Sydney",
        "SEO agency Melbourne",
        "web development company Brisbane",
        "B2B web design Australia",
        "e-commerce web development Australia",
        "Core Web Vitals agency Australia",
        "local SEO services Australia"
      ],
      ogLocale: "en_AU"
    },
    hero: {
      badge: "Bespoke Next.js Web Development & SEO for Australian Brands",
      headingWordsMain: ["Ultra-Fast", "Next.js", "Websites", "&", "SEO", "for"],
      headingWordsGradient: ["Australian", "Businesses"],
      subtitle: "Joy Digital constructs high-speed, search-compliant Next.js websites and data-driven Google ranking systems engineered specifically for Australian enterprises, startups, and trades.",
      bulletPoints: [
        "APAC & AEST timezone coordination with responsive daytime developer sync",
        "Ultra-low latency edge caching via Sydney & Melbourne Cloudflare / AWS edge nodes",
        "Australian Privacy Principles (Privacy Act 1988) compliance and full code ownership"
      ],
      trustText: "Partnering with growing companies, tourism operators, and B2B leaders across Sydney, Melbourne, Brisbane, Perth, and nationwide."
    },
    valueProposition: {
      badge: "Why Australian Businesses Choose Joy Digital",
      title: "Engineered for Australia's Fast-Moving Digital Economy",
      subtitle: "Get enterprise Next.js performance and Google.com.au search visibility without the high costs of Sydney and Melbourne agencies.",
      items: [
        {
          icon: "fa-solid fa-clock text-[#C9F600]",
          title: "AEST Working Hours Alignment",
          description: "Coordinated sprint overlaps during Australian Eastern Standard Time (AEST/AEDT). Live Slack communication and prompt turnaround for Australian teams."
        },
        {
          icon: "fa-solid fa-dollar-sign text-[#C9F600]",
          title: "Fixed AUD (A$) Milestone Pricing",
          description: "Transparent, milestone-based pricing in Australian Dollars starting from A$1,850. Zero hidden hourly charges, lock-in retainers, or currency exchange fees."
        },
        {
          icon: "fa-solid fa-shield-halved text-[#C9F600]",
          title: "Australian Privacy Act Compliance",
          description: "Systems designed in accordance with the Australian Privacy Principles (APPs) under the Privacy Act 1988, ensuring safe and compliant customer data handling."
        },
        {
          icon: "fa-solid fa-gauge-high text-[#C9F600]",
          title: "Sub-Second Oceanic Edge Speeds",
          description: "Edge-cached through Sydney and Melbourne points of presence, providing sub-second load times across Telstra, Optus, and Australian NBN broadband."
        },
        {
          icon: "fa-solid fa-map-location-dot text-[#C9F600]",
          title: "Google.com.au Local Pack Dominance",
          description: "Engineered for high-volume Australian commercial terms, local Google Maps rankings, and localized structured data for Australian metro centers."
        },
        {
          icon: "fa-solid fa-file-code text-[#C9F600]",
          title: "100% Repository & Asset Handover",
          description: "Complete ownership of your GitHub codebase and creative assets upon project sign-off. No proprietary CMS lock-in or recurring hostage retainers."
        }
      ]
    },
    marketBottlenecks: {
      badge: "Australian Market Bottlenecks",
      title: "Digital Challenges Holding Australian Companies Back",
      subtitle: "Australian businesses often face slow international hosting, overpriced local agency rates, and websites that fail to convert mobile inquiries.",
      items: [
        {
          icon: "fa-solid fa-money-bill-transfer",
          title: "Sky-High Domestic Agency Fees",
          description: "Sydney and Melbourne digital studios charge $140–$220/hour for basic web work, placing custom development out of reach for growing Australian businesses."
        },
        {
          icon: "fa-solid fa-hourglass-half",
          title: "High Oceanic Latency & Slow Page Speed",
          description: "Websites hosted overseas without Australian edge CDNs suffer 3+ second latency, frustrating local visitors and causing Google ranking penalties."
        },
        {
          icon: "fa-solid fa-mobile-button",
          title: "Clunky Mobile Interfaces for Mobile Users",
          description: "Outdated layouts that fail on smartphones over 4G/5G networks, leading to immediate visitor abandonment and lost trade inquiries."
        },
        {
          icon: "fa-solid fa-phone-slash",
          title: "Weak Click-to-Call & Quotation Pathways",
          description: "Websites that fail to incorporate instant telephone triggers, WhatsApp links, and streamlined quote forms for fast-acting Aussie customers."
        },
        {
          icon: "fa-solid fa-chart-line-down",
          title: "Poor Google.com.au Organic Visibility",
          description: "Failure to rank against established competitors in Sydney, Melbourne, and Brisbane due to missing technical SEO and localized schema signals."
        },
        {
          icon: "fa-solid fa-box-archive",
          title: "Proprietary CMS & WordPress Frustrations",
          description: "Difficulty updating content or modifying layouts in bloated WordPress or legacy builders without paying expensive maintenance fees."
        }
      ]
    },
    metroFocus: {
      badge: "Australian Metro Reach",
      title: "Targeting Australian Commercial & Industrial Hubs?",
      description: "We help Australian businesses capture high-intent inquiries across Sydney, Melbourne, Brisbane, Perth, Adelaide, and nationwide.",
      regions: [
        { label: "Sydney & New South Wales", href: "/au" },
        { label: "Melbourne & Victoria", href: "/au" },
        { label: "Brisbane & Queensland", href: "/au" },
        { label: "Perth & Western Australia", href: "/au" }
      ]
    },
    whyChooseUs: {
      subtitle: "Why Australian Brands Partner with Joy Digital",
      solutionStatement: "We build ultra-fast Next.js websites and Google.com.au SEO frameworks designed to convert visitors into phone calls and enquiries."
    },
    pricing: {
      starterPrice: "A$1,850",
      growthPrice: "A$3,600",
      enterprisePrice: "A$7,200+",
      currencySymbol: "A$",
      currencyCode: "AUD"
    },
    faqs: [
      {
        question: "How do you coordinate with Australian businesses across AEST and AEDT time zones?",
        answer: "We schedule daily sprint overlaps aligned with Australian Eastern Standard Time (AEST/AEDT). Communication is managed directly through Slack and Google Meet with prompt turnaround during Australian business hours."
      },
      {
        question: "Do you quote and invoice in Australian Dollars (AUD)?",
        answer: "Yes. All contracts, estimates, and invoices for Australian clients are provided in Australian Dollars (AUD) with clear milestone payment terms."
      },
      {
        question: "How do you solve latency for Australian visitors accessing websites from Oceania?",
        answer: "We deploy Next.js applications on global edge networks (Cloudflare / Vercel Edge) with active points of presence in Sydney, Melbourne, and Perth. This guarantees sub-second page loads across Telstra, Optus, and NBN connections."
      },
      {
        question: "Are your websites compliant with the Australian Privacy Act 1988?",
        answer: "Yes. Our web solutions adhere to the Australian Privacy Principles (APPs) governing user data collection, cookie usage, transparent privacy policies, and secure data handling."
      },
      {
        question: "How do you optimize websites to rank specifically on Google.com.au?",
        answer: "We configure localized hreflang tags (`en-AU`), Australian corporate schema, Google Business Profile integrations, and regional keyword silos to dominate commercial search queries in Australia."
      },
      {
        question: "How quickly can you deliver a custom Next.js website for an Australian client?",
        answer: "Standard corporate profiles and landing pages are deployed within 7 to 14 business days. Custom B2B applications, booking portals, or directory systems average 3 to 5 weeks."
      }
    ]
  }
};

/**
 * Returns country-specific landing page data, with fallback to US for unknown country codes.
 */
export function getCountryLandingData(countryCode: string): CountryLandingData {
  const code = (countryCode || "").toLowerCase();
  if (COUNTRY_LANDING_DATA[code]) {
    return COUNTRY_LANDING_DATA[code];
  }
  
  // Default to US data if country is unknown, with adjusted country code
  const base = COUNTRY_LANDING_DATA.us;
  return {
    ...base,
    countryCode: code,
    countryName: code.toUpperCase(),
    targetMarket: code.toUpperCase(),
    metadata: {
      ...base.metadata,
      title: `Next.js Web Development & SEO Agency ${code.toUpperCase()} | Joy Digital`,
      description: `High-performance Next.js web applications, custom B2B portals, and data-driven SEO architectures for growing businesses in ${code.toUpperCase()}.`
    }
  };
}
