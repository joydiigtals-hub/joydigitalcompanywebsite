import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import ChennaiClientProofCard from "@/components/sections/ChennaiClientProofCard";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "SEO Services in Chennai | Get More Leads | Joy Digital",
  },
  description:
    "Affordable SEO services in Chennai: technical SEO, on-page, local SEO and content. See our case studies and get a free SEO audit.",
  alternates: {
    canonical: "https://www.joydigital.in/seo-services-chennai",
  },
  openGraph: {
    title: "SEO Services in Chennai | Get More Leads | Joy Digital",
    description:
      "Affordable SEO services in Chennai: technical SEO, on-page, local SEO and content. See our case studies and get a free SEO audit.",
    url: "https://www.joydigital.in/seo-services-chennai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "SEO Services in Chennai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Chennai | Get More Leads | Joy Digital",
    description:
      "Affordable SEO services in Chennai: technical SEO, on-page, local SEO and content. See our case studies and get a free SEO audit.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function SeoServicesChennai() {
  const post1 = await getPostBySlug("seo-cost-in-chennai");
  const post2 = await getPostBySlug("how-to-choose-an-seo-company-in-chennai");
  const post3 = await getPostBySlug("nextjs-website-development-chennai");
  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20SEO%20Services%20in%20Chennai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] !text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with an SEO Specialist on WhatsApp"
        style={{ color: "#ffffff" }}
      >
        <i className="fa-brands fa-whatsapp text-base" style={{ color: "#ffffff" }} />
        <span style={{ color: "#ffffff" }}>WhatsApp Consultation</span>
      </a>
      <a
        href="tel:+919080026133"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark !text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        style={{ color: "#ffffff" }}
      >
        <i className="fa-solid fa-phone text-xs" style={{ color: "#ffffff" }} />
        <span style={{ color: "#ffffff" }}>Call +91 90800 26133</span>
      </a>
      <Link
        href="/case-studies/you-and-me-voyage"
        className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-[#7C3AED] font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-200 transition-all duration-200"
      >
        <i className="fa-solid fa-award text-xs text-[#7C3AED]" />
        <span>Chennai Client: You &amp; Me Voyage</span>
      </Link>
    </div>
  );

  // ProfessionalService schema specifically targeting Chennai & Madurai (Real HQ address only)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.joydigital.in/seo-services-chennai#professionalservice",
        "name": "Joy Digital - SEO Services in Chennai",
        "url": "https://www.joydigital.in/seo-services-chennai",
        "telephone": "+919080026133",
        "logo": "https://www.joydigital.in/assets/images/logo.webp",
        "image": "https://www.joydigital.in/assets/images/hero-banner.webp",
        "description": "Affordable SEO services in Chennai: technical SEO, on-page, local SEO and content. See our case studies and get a free SEO audit.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Madurai",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "625001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.9252,
          "longitude": 78.1198
        },
        "areaServed": [
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Madurai" }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/joydigital-solution/",
          "https://share.google/BSniheS2qnzwqUKXU",
          "https://www.youtube.com/@Joydigital2026",
          "https://www.facebook.com/profile.php?id=61590372457559"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.joydigital.in/seo-services-chennai#service",
        "name": "SEO Services in Chennai",
        "serviceType": "Search Engine Optimization",
        "provider": {
          "@id": "https://www.joydigital.in/seo-services-chennai#professionalservice"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chennai"
        },
        "description": "Technical SEO, local Google Maps 3-Pack optimization, high-intent keyword mapping, and content strategy for Chennai businesses.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "description": "Starting from Rs [SEO_PRICE] / month based on commercial scope and target competition."
        }
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@id": "https://www.joydigital.in/seo-services-chennai#professionalservice"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "[OWNER_NAME]"
        },
        "reviewBody": "Joy Digital built our website completely custom. It looks great, it is fast, and we are getting leads from it."
      }
    ]
  };

  const keyFaqs = [
    {
      question: "How much do SEO services in Chennai cost?",
      answer:
        "Our specialized SEO services in Chennai start from Rs [SEO_PRICE] / month for localized campaigns and single-category service providers. The exact investment depends on the competitiveness of your industry, the current technical health of your website, and whether your scope targets local Chennai inquiries (like Google Maps 3-Pack) or national commercial keywords. We provide a custom scope assessment and clear monthly deliverables before any campaign begins.",
    },
    {
      question: "How long does SEO take to generate qualified leads in Chennai?",
      answer:
        "Technical SEO fixes (such as resolving slow loading speeds, broken canonical tags, and schema errors) start indexing within days. Noticeable improvements in keyword positions and local Google Maps rankings typically emerge between 60 to 90 days. For highly competitive Chennai commercial sectors—such as commercial real estate, multi-specialty healthcare, or industrial manufacturing—achieving dominant top 3 organic placements usually requires 3 to 6 months of steady technical tuning and authoritative citation building.",
    },
    {
      question: "What is included in your Chennai SEO packages?",
      answer:
        "Our full-spectrum SEO services in Chennai include a comprehensive technical audit, Google Core Web Vitals optimization, on-page heading and meta tuning, keyword research mapped to commercial buyer intent, Google Business Profile (GBP) management, local citation audits across Indian business directories, Schema.org entity structured data injection, and monthly transparent lead reporting tracking phone calls and WhatsApp inquiries.",
    },
    {
      question: "Why should my business choose an SEO agency in Chennai over paid Google Ads alone?",
      answer:
        "Paid Google Ads deliver immediate clicks, but traffic completely stops the second you pause your ad budget. Furthermore, over 80% of high-intent searchers in Chennai skip sponsored links to click on organic results and Google Maps listings. Partnering with a dedicated SEO company in Chennai creates a compounding digital asset that drives qualified leads 24/7 without paying for every single click.",
    },
    {
      question: "How do your local SEO services help Chennai clinics and businesses rank on Google Maps?",
      answer:
        "We optimize all three pillars of Google's local algorithm: relevance, distance, and prominence. We verify primary and secondary Google Business Profile categories, add geo-tagged photos, manage customer review generation workflows, synchronize your Name, Address, and Phone number (NAP) across major Indian business directories (Justdial, Sulekha, IndiaMART), and embed geo-coordinates in your website schema.",
    },
    {
      question: "Do you provide custom website development alongside SEO in Chennai?",
      answer:
        "Yes. Unlike traditional agencies that attempt SEO on bloated, slow templates, Joy Digital is also an engineering-focused website development company in Chennai. We build and migrate websites to sub-second Next.js architectures that score 95+ on Core Web Vitals, providing an immediate technical advantage in search rankings.",
    },
    {
      question: "What support and reporting do you provide after launching an SEO campaign?",
      answer:
        "We provide transparent monthly reports tracking organic impression growth, top keyword rankings, Google Search Console index health, and verified conversions. We track phone calls, WhatsApp messages, and lead form submissions in Google Analytics 4 (GA4), giving you clear insight into your return on investment.",
    },
    {
      question: "Can you optimize an existing website or do I need a new build?",
      answer:
        "We can perform comprehensive on-page and technical SEO on your existing website. However, if your current site is severely slowed down by an outdated WordPress theme or unmaintained plugins, we can also migrate it to a high-speed custom Next.js build with 1:1 server-side 301 redirects to protect existing rankings while boosting performance.",
    },
  ];

  return (
    <>
      {/* Route-Specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      <ServicePageTemplate
        serviceName="SEO Services in Chennai"
        heroTitle="SEO Services in Chennai"
        heroSubtitle="Partner with a technical SEO agency in Chennai that focuses on measurable leads, sub-second performance, and Google Maps Local 3-Pack visibility. We turn high-intent organic search queries into phone calls, WhatsApp chats, and qualified business inquiries."
        leadSource="SEO Services Chennai Landing Page"
        heroCtaText="Claim Free SEO Consultation"
        heroActions={heroActions}
        canonicalUrl="https://www.joydigital.in/seo-services-chennai"
        pricingNote="Starting from Rs [SEO_PRICE] / month. Final price depends on industry competition, existing website health, and target geographic scope."
        chennaiProofSection={<ChennaiClientProofCard />}
        overviewTitle="High-Impact SEO Services in Chennai Designed for Real Business Leads"
        overviewContent={
          <div className="space-y-6 text-justify">
            <p>
              Chennai is one of India&apos;s most competitive business capitals. From the busy IT corridors of <strong>Old Mahabalipuram Road (OMR), DLF Porur, and Sholinganallur</strong> to the sprawling industrial and manufacturing zones of <strong>Ambattur, Guindy, Sriperumbudur, and Oragadam</strong>, thousands of companies compete for customer visibility every single day. If your company relies on customers discovering your services through Google, ranking on page one is not optional—it is fundamental to your pipeline. If your business is not visible in the top organic positions or the Google Maps Local 3-Pack, high-intent prospects in Chennai are choosing your competitors.
            </p>
            <p>
              At <strong>Joy Digital</strong>, we provide engineering-led <strong>SEO services in Chennai</strong> designed to generate phone calls, WhatsApp chats, and qualified commercial quotation requests. We do not sell vanity impressions, keyword stuffing, or automated generic PDF reports. Instead, we combine deep technical SEO, clean code architecture, local Google Business Profile mastery, and conversion-focused content to connect your business with buyers at the exact moment they search for your solutions.
            </p>

            {/* H2: Secondary Keyword 1 */}
            <h2 className="text-2xl font-extrabold text-[#0F172A] mt-8 mb-4">
              Why Partner with an Experienced SEO Company in Chennai?
            </h2>
            <p>
              Many business owners in Chennai struggle with the escalating costs of pay-per-click (PPC) ads. While paid ads deliver temporary visibility, the leads stop the moment your budget runs dry. Furthermore, over 80% of searchers actively scroll past sponsored ads to click organic search results and Google Maps listings because they perceive organic rankings as a mark of verified credibility.
            </p>
            <p>
              Partnering with a reliable <strong>SEO company in Chennai</strong> builds an enduring, compounding commercial asset. An optimized website continues to capture prospective clients 24 hours a day, 7 days a week, lowering your blended customer acquisition cost and establishing long-term authority in your sector. Whether you are an industrial machinery exporter, a medical clinic in Greams Road or Adyar, a B2B SaaS consultancy, or a retail showroom, our search strategies are designed to deliver clear return on investment.
            </p>
            <p>
              Additionally, because search algorithms prioritize technical health, we frequently work hand-in-hand with our <Link href="/website-development-company-chennai" className="text-[#7C3AED] font-bold hover:underline">website development company in Chennai</Link> team to eliminate render-blocking scripts and deliver sub-second mobile page speeds. If your project requires a completely bespoke platform from the ground up, explore our <Link href="/custom-website-development" className="text-[#7C3AED] font-bold hover:underline">custom website development</Link> solutions.
            </p>

            {/* H2: Secondary Keyword 2 */}
            <h2 className="text-2xl font-extrabold text-[#0F172A] mt-8 mb-4">
              What Sets Our Technical SEO Agency in Chennai Apart?
            </h2>
            <p>
              Traditional digital marketing agencies in Chennai often treat search engine optimization as an afterthought, relying on basic WordPress plugins, generic blog posts, and low-quality directory spam. Modern search engines like Google use sophisticated ranking systems that evaluate Core Web Vitals, semantic entity relationships, schema accuracy, and user interaction signals.
            </p>
            <p>
              As a technical <strong>SEO agency in Chennai</strong>, Joy Digital approaches search optimization from an engineering standpoint:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Core Web Vitals Engineering:</strong> We analyze Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) to ensure your website responds instantly on mobile networks.
              </li>
              <li>
                <strong>Transactional Keyword Mapping:</strong> We identify high-intent, bottom-of-funnel search terms used by real buyers in Chennai rather than empty informational queries that never convert.
              </li>
              <li>
                <strong>Local Google 3-Pack Dominance:</strong> We synchronize your business citations, optimize your Google Business Profile categories, and build location-specific landing pages that rank in regional map searches.
              </li>
              <li>
                <strong>Structured Schema.org Networks:</strong> We implement verified JSON-LD schemas connecting your organization, services, reviews, and FAQ data into a clean entity graph for Google and modern AI search engines.
              </li>
            </ul>

            {/* H2: Local SEO in Chennai */}
            <h2 className="text-2xl font-extrabold text-[#0F172A] mt-8 mb-4">
              Dominating Local Search Queries Across Chennai Neighborhoods
            </h2>
            <p>
              For regional clinics, consulting firms, educational academies, and industrial suppliers, localized queries represent the highest-converting digital channel. When prospects search terms like <em>&ldquo;custom software developers in OMR&rdquo;</em>, <em>&ldquo;dental clinic in Adyar&rdquo;</em>, or <em>&ldquo;precision engineering in Ambattur&rdquo;</em>, Google highlights the Maps 3-Pack before any standard web pages.
            </p>
            <p>
              Our local search framework ensures your business maintains a verified, accurate presence across prime Chennai business hubs including <strong>Adyar, Guindy, Ambattur, T. Nagar, Anna Nagar, Velachery, Porur, Tambaram, and OMR</strong>. We audit your Name, Address, and Phone number (NAP) data across premier Indian business directories (Justdial, Sulekha, IndiaMART, TradeIndia), eliminate duplicate listings, and implement automated review acquisition pathways.
            </p>

            {/* Comparison Table */}
            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              How Joy Digital Compares to Generic SEO Agencies
            </h3>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-xs border-collapse bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 font-bold border-b border-slate-800">Capability</th>
                    <th className="p-3 font-bold border-b border-slate-800">Generic SEO Agency</th>
                    <th className="p-3 font-bold border-b border-slate-800 text-[#38bdf8]">Joy Digital Technical SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold">Primary KPI</td>
                    <td className="p-3">Generic impressions &amp; irrelevant clicks</td>
                    <td className="p-3 font-semibold text-emerald-600">Verified WhatsApp leads, phone calls &amp; inquiries</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Code &amp; Speed Engineering</td>
                    <td className="p-3">Automated WordPress plugins &amp; slow themes</td>
                    <td className="p-3 font-semibold text-slate-900">Custom Next.js &amp; sub-second Core Web Vitals</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Local Maps 3-Pack</td>
                    <td className="p-3">Basic profile setup without citation cleanup</td>
                    <td className="p-3 font-semibold text-emerald-600">Systematic NAP sync across Indian registries &amp; schema</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Transparency</td>
                    <td className="p-3">Automated 50-page PDF reports filled with vanity charts</td>
                    <td className="p-3 font-semibold text-slate-900">GA4 verified conversion tracking &amp; direct developer chats</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Free Audit CTA Card */}
            <div className="my-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 not-prose shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">Get a Free Technical SEO Audit of Your Website</h3>
                <p className="text-xs text-slate-300">Discover speed bottlenecks, indexing issues, and keyword ranking opportunities holding back your business in Chennai.</p>
              </div>
              <Link
                href="/seo-audit-tool"
                style={{ color: "#ffffff", backgroundColor: "#7C3AED" }}
                className="shrink-0 bg-[#7C3AED] hover:bg-[#6D28D9] !text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Run Free Audit &rarr;</span>
              </Link>
            </div>
          </div>
        }
        benefitsTitle="Comprehensive SEO Solutions We Offer in Chennai"
        benefitsSubtitle="From deep technical code audits to high-authority local citations, our full-spectrum search services drive sustainable business growth."
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
            title: "Local SEO & Google Maps 3-Pack",
            description:
              "We claim, verify, and optimize your Google Business Profile (GBP), manage localized review workflows, and build consistent citations across top Indian directories to dominate local map searches.",
          },
          {
            icon: "fa-solid fa-link",
            title: "Ethical Authority Link Building",
            description:
              "We secure genuine contextual mentions from industry-relevant publications, regional business portals, and niche editorial sites to build enduring domain authority and search trust.",
          },
          {
            icon: "fa-solid fa-robot",
            title: "Generative Engine Optimization (GEO)",
            description:
              "We structure your content into entity-rich schema graphs and direct answers to ensure your brand gets cited in Google AI Overviews and answer engines like Perplexity.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "GA4 Conversion Tracking",
            description:
              "We install custom Google Analytics 4 event trackers to monitor phone calls, WhatsApp inquiries, and form submissions, delivering clear ROI-focused monthly reports.",
          },
        ]}
        processTitle="Our Structured 4-Step SEO Process"
        processSubtitle="A transparent, data-driven framework tailored to deliver continuous ranking improvements and qualified inbound inquiries."
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
            title: "Local Authority & Citation Sync",
            description:
              "We verify Google Business Profile categories, audit NAP consistency across Indian business directories, and acquire authoritative backlinks.",
          },
          {
            step: "4",
            icon: "fa-solid fa-square-poll-vertical",
            title: "Lead Tracking & Ongoing Optimization",
            description:
              "We connect GA4 lead tracking, verify Search Console sitemaps, and deliver regular performance reports to drive continuous ranking gains.",
          },
        ]}
        pricingTitle="Transparent SEO Packages"
        pricingSubtitle="Choose the service package suited to your commercial goals. Transparent monthly scopes with zero hidden retainers."
        pricingTiers={[
          {
            name: "Local SEO Starter",
            price: "Starting from Rs [SEO_PRICE] / month",
            period: "monthly",
            description: "Ideal for local clinics, regional consulting firms, and single-location businesses in Chennai.",
            features: [
              "Google Business Profile (GBP) Full Optimization",
              "Local 3-Pack Map Ranking Strategy",
              "NAP Citation Cleanup (Justdial, Sulekha, IndiaMART)",
              "Technical On-Page Code & Metadata Optimization",
              "Google Search Console & XML Sitemap Management",
              "Phone Call & WhatsApp Conversion Tracking (GA4)",
              "Monthly Keyword Ranking & Lead Progress Report",
            ],
            ctaText: "Choose Starter Plan",
          },
          {
            name: "Growth SEO Plan",
            price: "Starting from Rs [SEO_PRICE] / month",
            period: "monthly",
            description: "Best for multi-service businesses, tech consultancies, and competitive commercial sectors across Chennai.",
            isPopular: true,
            features: [
              "Comprehensive Multi-Keyword Category Targeting",
              "Core Web Vitals Speed & Technical Code Engineering",
              "Advanced Structured Schema.org Graph Integration",
              "High-Intent Content Mapping & Pillar Creation",
              "Ethical Niche Citation & Authority Link Outreach",
              "Competitor Keyword Gap Analysis across Chennai",
              "GA4 Lead Event Tracking & Bi-Weekly Check-Ins",
            ],
            ctaText: "Choose Growth Plan",
          },
          {
            name: "Enterprise Custom SEO",
            price: "Custom Quote",
            period: "custom scope",
            description: "For e-commerce platforms, multi-city enterprises, and corporate brands seeking market leadership.",
            features: [
              "Unlimited Target Keyword Clusters & Landing Pages",
              "Custom Web Architecture & Sub-Second Edge Optimization",
              "Multi-Location & Pan-India Expansion SEO",
              "Generative Engine Optimization (GEO) for AI Search",
              "Conversion Rate Optimization (CRO) Funnel Tuning",
              "Dedicated Senior SEO Engineer & Weekly Direct Strategy Calls",
              "Custom Executive Analytics Dashboards & ROI Reviews",
            ],
            ctaText: "Request Custom Quote",
          },
        ]}
        faqs={keyFaqs}
        crossLinks={[
          { href: "/website-development-company-chennai", label: "Web Development Company in Chennai" },
          { href: "/custom-website-development", label: "Custom Website Development" },
          { href: "/case-studies/you-and-me-voyage", label: "Chennai Client: You & Me Voyage" },
          { href: "/case-studies/chennai-clinic-leads", label: "Chennai Dental Clinic Case Study" },
          { href: "/seo-audit-tool", label: "Free SEO Audit Tool" },
          { href: "/google-business-profile-optimization", label: "Google Business Profile Optimization" },
          { href: "/wordpress-to-nextjs-migration", label: "WordPress to Next.js Migration" },
        ]}
        relatedBlogPosts={relatedBlogPosts}
      />
    </>
  );
}
