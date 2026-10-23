import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "Best SEO Services in Chennai | Top SEO Agency - Joy Digital",
  },
  description:
    "Looking for result-driven SEO services in Chennai? Joy Digital offers local SEO, technical SEO, and higher ranking strategies for your business.",
  keywords: [
    "SEO Services in Chennai",
    "SEO Company in Chennai",
    "Best SEO Agency Chennai",
    "Local SEO Services Chennai",
    "Organic Traffic Growth",
    "Technical SEO",
    "On-Page SEO",
    "Link Building",
    "Rank #1 on Google",
    "Digital Marketing Agency",
    "best seo company in chennai",
    "seo agency in chennai",
    "google maps seo chennai",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/seo-services-chennai",
  },
  openGraph: {
    title: "Best SEO Services in Chennai | Top SEO Agency - Joy Digital",
    description:
      "Looking for result-driven SEO services in Chennai? Joy Digital offers local SEO, technical SEO, and higher ranking strategies for your business.",
    url: "https://www.joydigital.in/seo-services-chennai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Best SEO Services in Chennai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Services in Chennai | Top SEO Agency - Joy Digital",
    description:
      "Looking for result-driven SEO services in Chennai? Joy Digital offers local SEO, technical SEO, and higher ranking strategies for your business.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function SeoServicesChennai() {
  const post1 = await getPostBySlug("nextjs-website-development-chennai");
  const post2 = await getPostBySlug("google-business-profile-optimization-guide");
  const post3 = await getPostBySlug("why-nextjs-is-better-than-traditional-wordpress-for-local-seo");
  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Result-Driven%20SEO%20Services%20in%20Chennai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] !text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with an SEO Specialist on WhatsApp"
        style={{ color: "#ffffff" }}
      >
        <i className="fa-brands fa-whatsapp text-base" style={{ color: "#ffffff" }} />
        <span style={{ color: "#ffffff" }}>WhatsApp Consultation</span>
      </a>
      <Link
        href="/seo-audit-tool"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] !text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        style={{ color: "#ffffff" }}
      >
        <i className="fa-solid fa-magnifying-glass-chart text-xs" style={{ color: "#ffffff" }} />
        <span style={{ color: "#ffffff" }}>Run Free SEO Audit</span>
      </Link>
      <Link
        href="/case-studies/chennai-clinic-leads"
        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 transition-all duration-200"
      >
        <i className="fa-solid fa-chart-line text-xs text-primary" />
        <span>Case Study: +240% Leads</span>
      </Link>
    </div>
  );

  // ProfessionalService schema specifically targeting Chennai as areaServed
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.joydigital.in/seo-services-chennai#professionalservice",
    name: "Joy Digital - SEO Services in Chennai",
    description:
      "Looking for result-driven SEO services in Chennai? Joy Digital offers local SEO, technical SEO, and higher ranking strategies for your business.",
    url: "https://www.joydigital.in/seo-services-chennai",
    telephone: "+919080026133",
    priceRange: "₹₹",
    image: "https://www.joydigital.in/assets/images/hero-banner.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11, Jothi nagar 5th street, Murugappa polytechnic nearby, Avadi",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600053",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1147,
      longitude: 80.0982,
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    serviceArea: {
      "@type": "City",
      name: "Chennai",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Services in Chennai",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO Services in Chennai",
            description: "Core Web Vitals optimization, speed enhancements, and crawl budget indexing for Chennai businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-Page SEO Services in Chennai",
            description: "Keyword mapping, content architecture, heading hierarchy tuning, and internal linking strategy.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO Services Chennai",
            description: "Google Business Profile optimization, local 3-Pack rankings, and Tamil Nadu regional citations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Authority Link Building Chennai",
            description: "Ethical editorial outreach, niche directory citations, and authoritative brand link acquisition.",
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.joydigital.in",
      "https://wa.me/919080026133",
    ],
  };

  const keyFaqs = [
    {
      question: "Why should Chennai businesses hire an SEO Company in Chennai instead of relying only on paid Google Ads?",
      answer:
        "While paid Google Ads deliver immediate temporary traffic, your visibility ceases the moment your advertising budget expires. In contrast, partnering with a professional SEO Company in Chennai builds compounding Organic Traffic Growth. Over 85% of high-intent searchers in Chennai bypass sponsored ads to click organic results and Google Maps listings. Organic SEO establishes enduring credibility, decreases long-term customer acquisition costs, and secures top positions 24/7 without paying per click.",
    },
    {
      question: "How long does it take for a Chennai business to see Organic Traffic Growth?",
      answer:
        "Technical SEO fixes, code tuning, and Google Search Console indexation occur within the first few days of implementation. Measurable improvements in keyword rankings, local map visibility, and organic inquiry volume typically manifest within 60 to 90 days. For highly competitive commercial niches across Chennai—such as commercial real estate, multi-specialty healthcare, or manufacturing exports—achieving top 3 Google positions usually requires 3 to 6 months of systematic On-Page optimization and authority Link Building.",
    },
    {
      question: "What makes Joy Digital the Best SEO Agency Chennai for technical search optimization?",
      answer:
        "Most traditional agencies in Chennai focus merely on superficial keyword placement and generic blog posts on bloated, slow WordPress templates. As the Best SEO Agency Chennai for engineering-led search performance, Joy Digital combines Next.js sub-second web architecture, Google Core Web Vitals mastery, schema.org entity graphs, and localized conversion optimization. We optimize code crawlability and track verified phone calls and WhatsApp leads, ensuring your SEO investment yields tangible business revenue.",
    },
    {
      question: "How do Local SEO Services Chennai help brick-and-mortar stores and clinics rank in Google Maps?",
      answer:
        "Our specialized Local SEO Services Chennai optimize every touchpoint of Google's local ranking algorithm: primary and secondary Google Business Profile (GBP) categories, geo-tagged photography, localized service descriptions, and active review generation. We also audit and synchronize your Name, Address, and Phone number (NAP) across premier Indian business directories (Justdial, Sulekha, IndiaMART, TradeIndia) and implement local schema, guaranteeing prime visibility in Chennai's Google Maps Local 3-Pack.",
    },
    {
      question: "Can you migrate an existing WordPress or PHP site to Next.js without losing keyword rankings?",
      answer:
        "Yes, absolutely. We specialize in zero-downtime SEO migrations. Before deploying your high-speed Next.js build, our technical specialists map every legacy URL, configure flawless 1:1 server-side 301 redirects, preserve established meta hierarchies, update XML sitemaps, and submit change-of-address logs to Google Search Console. Clients typically observe an immediate ranking boost due to superior Core Web Vitals performance and instant page rendering speeds.",
    },
  ];

  return (
    <>
      {/* Route-Specific ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      <ServicePageTemplate
        serviceName="SEO Services in Chennai"
        heroTitle="Result-Driven SEO Services in Chennai"
        heroSubtitle="Accelerate organic traffic and qualified customer inquiries with performance-driven SEO services in Chennai. We combine sub-second Next.js speed, deep technical SEO, and Google Maps Local 3-Pack optimization to connect your business with ready-to-buy customers."
        leadSource="SEO Services Chennai Landing Page"
        heroCtaText="Claim Free SEO Consultation"
        heroActions={heroActions}
        canonicalUrl="https://www.joydigital.in/seo-services-chennai"
        overviewTitle="Why Your Chennai Business Needs Professional SEO"
        overviewContent={
          <div className="space-y-6 text-justify">
            <p>
              Chennai is one of India&apos;s most vibrant and fiercely contested economic engines. From the heavy manufacturing and automotive heartlands of <strong>Ambattur, Guindy, Sriperumbudur, and Oragadam</strong> to the bustling technology corridors stretching across <strong>Old Mahabalipuram Road (OMR), DLF Porur, Tidel Park, and Sholinganallur</strong>, thousands of ambitious enterprises compete for customer attention daily. In this demanding business ecosystem, prospective corporate buyers, medical patients, industrial procurement officers, and retail shoppers turn first to Google. Over 85% of these searchers click exclusively on the first three organic positions and the Google Maps Local 3-Pack. If your website does not command prime placement on page one, your highest-value customers are effortlessly diverted to your closest competitors.
            </p>
            <p>
              Relying strictly on paid pay-per-click (PPC) advertising or traditional word-of-mouth has become financially unsustainable for scaling businesses. Paid search costs across Chennai keep escalating every quarter, and the moment ad budgets cease, customer inquiries vanish instantly. In contrast, partnering with an experienced <strong>SEO Company in Chennai</strong> creates an enduring, compounding asset. Professional search optimization establishes permanent digital brand authority, captures ready-to-buy customers at the precise moment of commercial intent, and drives sustainable <strong>Organic Traffic Growth</strong> that produces qualified phone inquiries, WhatsApp leads, and quotation requests month after month.
            </p>
            <p>
              At <strong>Joy Digital</strong>, recognized by forward-thinking founders as the <strong>Best SEO Agency Chennai</strong>, we eliminate the guesswork from search engine marketing. We replace superficial keyword stuffing and vague vanity metrics with rigorous data science, deep full-stack web engineering, and transparent revenue tracking. Whether you are an industrial supplier seeking multi-crore enterprise contracts, a specialized medical clinic looking to book premium patient consultations, or an established regional service brand, our customized <strong>SEO Services in Chennai</strong> are designed from the ground up to turn organic visibility into measurable commercial revenue.
            </p>

            {/* Authentic Case Study Highlight with Fully Visible Button */}
            <div className="my-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/70 rounded-2xl not-prose">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-dark bg-purple-100 px-3 py-1 rounded-full">
                    Verified Local SEO Case Study
                  </span>
                  <h3 className="text-lg font-bold text-primary-dark mt-2 mb-1">
                    How a Chennai Dental Clinic Increased Patient Appointments by 240%
                  </h3>
                  <p className="text-xs text-slate-600 max-w-xl">
                    Through targeted Google Business Profile categorization, local citation cleanup across Chennai business directories, and sub-second page speed architecture, we secured top 3-Pack rankings within 30 days.
                  </p>
                </div>
                <Link
                  href="/case-studies/chennai-clinic-leads"
                  style={{ color: "#ffffff", backgroundColor: "#7C3AED" }}
                  className="shrink-0 inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] !text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span style={{ color: "#ffffff" }} className="!text-white font-bold">Read Full Case Study</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" style={{ color: "#ffffff" }} />
                </Link>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Local SEO Services Chennai & Google Maps 3-Pack Domination
            </h3>
            <p>
              For regional enterprises, medical facilities, educational institutions, and storefront retailers, localized search queries represent the highest-converting digital acquisition channel available today. When local prospects query commercial terms with geographic intent—such as <em>&ldquo;best diagnostic center near me&rdquo;</em>, <em>&ldquo;corporate legal firm in T. Nagar&rdquo;</em>, or <em>&ldquo;precision cnc machining Chennai&rdquo;</em>—Google immediately showcases its Local 3-Pack feature above traditional web links. Ranking inside this coveted 3-Pack directly drives over 40% of all local clicks and telephone calls.
            </p>
            <p>
              Our comprehensive <strong>Local SEO Services Chennai</strong> framework systematically engineers localized market dominance across all prime Chennai neighborhoods:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Google Business Profile (GBP) Optimization:</strong> Comprehensive configuration of primary and secondary business categories, geo-tagged high-resolution photography, localized service descriptions, and active review management systems.
              </li>
              <li>
                <strong>Regional Directory NAP Synchronization:</strong> Auditing and maintaining identical Name, Address, and Phone number (NAP) data across high-authority Indian portals including Justdial, Sulekha, IndiaMART, TradeIndia, and regional Tamil Nadu business registries.
              </li>
              <li>
                <strong>Localized Neighborhood Landing Pages:</strong> Engineering targeted content clusters mapped to distinct Chennai micro-markets including <em>Avadi, Ambattur, Guindy, OMR, Anna Nagar, T. Nagar, Tambaram, Velachery, and Porur</em>.
              </li>
              <li>
                <strong>Connected LocalBusiness Schema:</strong> Implementing granular JSON-LD structured data with precise geographic coordinates, operating schedules, accepted payment methods, and real-time customer review ratings.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Deep Technical SEO: The Secret to Rank #1 on Google
            </h3>
            <p>
              While ordinary agencies focus exclusively on publishing repetitive blog posts, Google&apos;s sophisticated search algorithms prioritize deep technical health, code efficiency, and user experience. Websites constructed on outdated, bloated CMS platforms loaded with conflicting plugins inevitably suffer from sluggish server responses, render-blocking scripts, and frustrating mobile interaction delays.
            </p>
            <p>
              To reliably <strong>Rank #1 on Google</strong>, your technical architecture must operate flawlessly. Our engineering team implements meticulous <strong>Technical SEO</strong> optimizations that establish an immediate competitive advantage over slower competitors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Google Core Web Vitals Mastery:</strong> We eliminate Cumulative Layout Shift (CLS), streamline Interaction to Next Paint (INP), and achieve sub-1.5-second Largest Contentful Paint (LCP) benchmarks on standard 4G mobile connections.
              </li>
              <li>
                <strong>Crawl Budget & Indexation Tuning:</strong> Restructuring XML sitemaps, refining canonical tags, resolving pagination loops, and perfecting robots.txt directives to maximize crawler discovery efficiency.
              </li>
              <li>
                <strong>Mobile-First Architecture:</strong> With over 75% of Chennai searchers browsing via mobile smartphones, we guarantee instantaneous touch response, fluid viewport scaling, and zero horizontal shifting.
              </li>
              <li>
                <strong>Complete Technical Debt Elimination:</strong> Eradicating broken 404 links, 301 redirect chains, duplicate meta titles, and oversized uncompressed assets.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Generative Engine Optimization (GEO) & AI Search Overviews
            </h3>
            <p>
              Search behavior is experiencing its most radical shift in over twenty years. Google AI Overviews, Perplexity, and ChatGPT Search are transforming search engines from simple link indexers into intelligent answer synthesis engines. Businesses without structured knowledge graphs, verified semantic entities, and clear factual citations will rapidly lose organic visibility to modern AI models.
            </p>
            <p>
              As a forward-thinking <strong>Digital Marketing Agency</strong> and the leading <strong>SEO Company in Chennai</strong>, we protect and elevate your market leadership with advanced Generative Engine Optimization (GEO):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Semantic Topic Clusters:</strong> Developing authoritative topic pillars and contextual nodes that establish undeniable topical authority in your industry.
              </li>
              <li>
                <strong>Direct Answer Architecture:</strong> Formatting concise definitions, step-by-step methodologies, bulleted summaries, and comparison tables engineered for direct citation in Google AI Overviews.
              </li>
              <li>
                <strong>Comprehensive Schema Networks:</strong> Interconnecting <code>Service</code>, <code>FAQPage</code>, <code>ProfessionalService</code>, and <code>BreadcrumbList</code> schemas into an interconnected entity graph.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              How Joy Digital Compares to Generic SEO Agencies
            </h3>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-xs border-collapse bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 font-bold border-b border-slate-800">Performance Dimension</th>
                    <th className="p-3 font-bold border-b border-slate-800">Typical SEO Agency in Chennai</th>
                    <th className="p-3 font-bold border-b border-slate-800 text-[#38bdf8]">Joy Digital Technical SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold">Primary Objective</td>
                    <td className="p-3">Superficial impressions & non-converting keywords</td>
                    <td className="p-3 font-semibold text-emerald-600">High-intent inquiries, qualified phone leads & revenue</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Technical Engineering</td>
                    <td className="p-3">Automated WordPress plugins & basic meta tags</td>
                    <td className="p-3 font-semibold text-slate-900">Custom Next.js engineering & Core Web Vitals optimization</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Mobile Page Speed</td>
                    <td className="p-3">Sluggish load times (3.5s to 6.5s)</td>
                    <td className="p-3 font-semibold text-emerald-600">Sub-second execution (&lt; 1.5s on mobile)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">AI Search Readiness</td>
                    <td className="p-3">No concept of GEO or semantic entity modeling</td>
                    <td className="p-3 font-semibold text-slate-900">Optimized for Google AI Overviews & Perplexity citations</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Reporting & Transparency</td>
                    <td className="p-3">Automated 40-page PDF reports filled with vanity charts</td>
                    <td className="p-3 font-semibold text-slate-900">GA4 tracked phone calls, WhatsApp leads & verified conversions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Customized SEO Solutions for Chennai&apos;s Core Business Verticals
            </h3>
            <p>
              Different commercial sectors require specialized search acquisition frameworks. As an adaptable <strong>SEO Company in Chennai</strong>, we engineer tailored ranking roadmaps suited to the commercial realities of your industry:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>B2B & Industrial Manufacturers (Ambattur, Guindy, Sriperumbudur, Oragadam):</strong> We target high-value commercial keywords for component suppliers, heavy fabrication units, and export corporations looking to sign long-term supply contracts.
              </li>
              <li>
                <strong>IT, SaaS & Technology Consultancies (OMR, DLF Porur, Sholinganallur):</strong> We build high-authority topical clusters around enterprise software, digital transformation, and specialized engineering to attract high-paying overseas clients across North America, Europe, and the Middle East.
              </li>
              <li>
                <strong>Healthcare Providers & Specialist Clinics (Greams Road, Anna Nagar, Adyar):</strong> We capture patient inquiries through proximity-based <strong>Local SEO Services Chennai</strong> tactics, targeting specialty treatments and direct consultation appointments.
              </li>
              <li>
                <strong>Real Estate Developers & Retail Showrooms:</strong> We capture hyper-local neighborhood searches across Chennai, ensuring your properties and retail outlets gain prime visibility before competing brands.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Transparent Lead Tracking & Guaranteed Accountability
            </h3>
            <p>
              Every marketing rupee invested in search engine optimization must demonstrate clear financial return. We do not hide behind superficial metrics like keyword impressions. Instead, we configure custom Google Analytics 4 (GA4) event trackers to measure real customer interactions across your digital ecosystem:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Direct telephone click-to-call conversions from mobile viewports.</li>
              <li>Initiated WhatsApp business chats with timestamp and referral page data.</li>
              <li>Completed quotation requests and customized lead inquiry forms.</li>
              <li>Comprehensive monthly video reviews breaking down keyword progress, competitive market movements, and upcoming strategic milestones.</li>
            </ul>

            {/* Embedded H2 FAQ Section within Content */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-6">
                Frequently Asked Questions About SEO Services in Chennai
              </h2>
              <div className="space-y-6">
                {keyFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 not-prose">
                    <h3 className="text-base font-bold text-primary-dark mb-2 flex items-start gap-2">
                      <span className="text-accent font-extrabold text-sm">Q{idx + 1}:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Tool Banner with Fully Visible White Button */}
            <div className="mt-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 not-prose shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-white">Want to see where your website currently stands?</h4>
                <p className="text-xs text-slate-300">Run an instant, automated technical SEO audit to identify speed bottlenecks, meta gaps, and ranking roadblocks holding back your business.</p>
              </div>
              <Link
                href="/seo-audit-tool"
                style={{ color: "#ffffff", backgroundColor: "#7C3AED" }}
                className="shrink-0 bg-[#7C3AED] hover:bg-[#6D28D9] !text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Test My Site Free &rarr;</span>
              </Link>
            </div>
          </div>
        }
        benefitsTitle="Comprehensive SEO Solutions We Offer in Chennai"
        benefitsSubtitle="From deep server architecture to high-authority backlink acquisition, our full-spectrum search services drive sustainable business growth."
        benefits={[
          {
            icon: "fa-solid fa-code",
            title: "Technical SEO & Core Web Vitals",
            description:
              "We audit server responses, clean render-blocking scripts, resolve crawl errors, and optimize Core Web Vitals (LCP, INP, CLS) to ensure search crawlers index your website effortlessly.",
          },
          {
            icon: "fa-solid fa-file-lines",
            title: "Strategic On-Page SEO & Content",
            description:
              "We optimize title tags, heading hierarchies (H1-H4), meta descriptions, internal link structures, and content depth aligned with transactional search intent for target Chennai keywords.",
          },
          {
            icon: "fa-solid fa-map-location-dot",
            title: "Local SEO Services Chennai & Google 3-Pack",
            description:
              "We claim, verify, and optimize your Google Business Profile (GBP), manage localized review workflows, and build consistent citations across top Indian directories to dominate local map searches.",
          },
          {
            icon: "fa-solid fa-link",
            title: "High-Authority Link Building & Outreach",
            description:
              "We secure genuine contextual backlinks from industry-relevant publications, regional business portals, and niche editorial sites to build enduring domain authority and search trust.",
          },
          {
            icon: "fa-solid fa-robot",
            title: "Generative Engine Optimization (GEO)",
            description:
              "We structure your content into entity-rich schema graphs and direct answers to ensure your brand gets cited in Google AI Overviews and answer engines like Perplexity.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "Conversion Tracking & Organic Traffic Growth",
            description:
              "We install custom Google Analytics 4 (GA4) event trackers to monitor phone calls, WhatsApp inquiries, and form submissions, delivering clear ROI-focused monthly reports.",
          },
        ]}
        processTitle="Our Proven SEO Process for Local & Global Growth"
        processSubtitle="A structured, transparent four-phase framework tailored to deliver continuous keyword ranking improvements and qualified inbound inquiries."
        processSteps={[
          {
            step: "1",
            icon: "fa-solid fa-magnifying-glass",
            title: "Technical Audit & Competitor Intelligence",
            description:
              "We inspect layout files, check mobile responsiveness, audit index coverage, and benchmark competitor keyword strategies across Chennai.",
          },
          {
            step: "2",
            icon: "fa-solid fa-screwdriver-wrench",
            title: "On-Page Code & Content Tuning",
            description:
              "We optimize heading hierarchies, rewrite title tags and meta descriptions, refine internal links, and map content to user search intent.",
          },
          {
            step: "3",
            icon: "fa-solid fa-map-location-dot",
            title: "Local Authority & Link Building",
            description:
              "We verify Google Business Profile categories, audit NAP consistency across Indian business directories, and acquire authoritative backlinks.",
          },
          {
            step: "4",
            icon: "fa-solid fa-square-poll-vertical",
            title: "Analytics Integration & Continuous Scaling",
            description:
              "We connect GA4 lead tracking, verify Search Console sitemaps, and deliver regular performance reports to drive continuous ranking gains.",
          },
        ]}
        pricingTitle="Transparent SEO Packages"
        pricingSubtitle="Select the plan suited to your business scale. No hidden fees or locked-in long-term retainers."
        pricingTiers={[
          {
            name: "Local SEO Starter",
            price: "₹15,000",
            period: "monthly",
            description: "Ideal for local clinics, regional service providers, and single-location businesses in Chennai.",
            features: [
              "Google Business Profile (GBP) Full Optimization",
              "Local Map Pack & Citation Cleanup (Justdial, Sulekha)",
              "On-Page Technical Audit & Metadata Optimization",
              "Google Search Console & XML Sitemap Integration",
              "Phone Click & WhatsApp Conversion Event Tracking",
              "Monthly Keyword & Performance Progress Report",
            ],
            ctaText: "Choose Starter Plan",
          },
          {
            name: "Growth Plan",
            price: "₹25,000",
            period: "monthly",
            description: "Best for growing businesses, multi-service companies, and competitive commercial sectors in Chennai.",
            isPopular: true,
            features: [
              "Comprehensive Multi-Keyword Target SEO",
              "Core Web Vitals Speed & Code Structure Optimization",
              "Advanced Structured Schema.org Markup Injection",
              "Local 3-Pack Growth & Citation Authority Building",
              "Google Analytics 4 & Custom Conversion Event Tracking",
              "Chennai Competitor Gap Analysis & Content Strategy",
              "Monthly Ranking Audits & Direct Specialist Consultation",
            ],
            ctaText: "Choose Growth Plan",
          },
          {
            name: "Enterprise Custom",
            price: "Custom Quote",
            description: "For e-commerce portals, multi-city enterprises, and corporate brands seeking market leadership.",
            features: [
              "Unlimited Target Keywords & Service Landing Pages",
              "Custom Architecture Optimization & Speed Engineering",
              "Multi-Location & Regional Expansion SEO",
              "AI Search & Generative Engine Optimization (GEO)",
              "Advanced Funnel & Conversion Rate Optimization (CRO)",
              "Direct Senior Developer Coordination & Dedicated Support",
              "Bi-Weekly Strategic Consultation & Executive Reports",
            ],
            ctaText: "Request Custom Quote",
          },
        ]}
        faqs={keyFaqs}
        crossLinks={[
          { href: "/digital-marketing-agency-in-chennai", label: "Digital Marketing Chennai" },
          { href: "/website-development-company-chennai", label: "Web Development Chennai" },
          { href: "/google-business-profile-optimization", label: "Google Business Profile Optimization" },
          { href: "/local-seo-services", label: "Local SEO Services" },
          { href: "/seo-audit-tool", label: "Free SEO Audit Tool" },
          { href: "/case-studies/chennai-clinic-leads", label: "Chennai SEO Case Study (+240%)" },
          { href: "/wordpress-to-nextjs-migration", label: "WordPress to Next.js SEO Migration" },
        ]}
        relatedBlogPosts={relatedBlogPosts}
      />
    </>
  );
}
