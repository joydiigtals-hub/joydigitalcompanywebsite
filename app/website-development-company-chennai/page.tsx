import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import ChennaiClientProofCard from "@/components/sections/ChennaiClientProofCard";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Website Development Company in Chennai | Joy Digital",
  description:
    "Custom Next.js website development in Chennai. Fast, SEO-ready websites that bring leads via WhatsApp and forms. Free quote.",
  alternates: {
    canonical: "https://www.joydigital.in/website-development-company-chennai",
  },
  openGraph: {
    title: "Website Development Company in Chennai | Joy Digital",
    description:
      "Custom Next.js website development in Chennai. Fast, SEO-ready websites that bring leads via WhatsApp and forms. Free quote.",
    url: "https://www.joydigital.in/website-development-company-chennai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Chennai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Chennai | Joy Digital",
    description:
      "Custom Next.js website development in Chennai. Fast, SEO-ready websites that bring leads via WhatsApp and forms. Free quote.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function WebsiteDevelopmentCompanyChennai() {
  const post1 = await getPostBySlug("website-development-cost-in-chennai");
  const post2 = await getPostBySlug("nextjs-website-development-chennai");
  const post3 = await getPostBySlug("why-website-important-business-growth-chennai-2026");
  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Custom%20Website%20Development%20in%20Chennai%20starting%20from%20Rs%2025,000."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] !text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with a Web Development Specialist on WhatsApp"
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
        <span>Case Study: You &amp; Me Voyage (Adyar)</span>
      </Link>
    </div>
  );

  // ProfessionalService schema specifically targeting Chennai & Madurai (Real HQ address only)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.joydigital.in/website-development-company-chennai#professionalservice",
        "name": "Joy Digital - Website Development Company in Chennai",
        "url": "https://www.joydigital.in/website-development-company-chennai",
        "telephone": "+919080026133",
        "logo": "https://www.joydigital.in/assets/images/logo.webp",
        "image": "https://www.joydigital.in/assets/images/hero-banner.webp",
        "description": "Custom Next.js website development in Chennai. Fast, SEO-ready websites that bring leads via WhatsApp and forms. Starting from Rs 25,000.",
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
          "https://www.linkedin.com/in/saravanan-l-34a861154/",
          "https://share.google/BSniheS2qnzwqUKXU",
          "https://www.youtube.com/@Joydigital2026",
          "https://www.facebook.com/profile.php?id=61590372457559"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.joydigital.in/website-development-company-chennai#service",
        "name": "Website Development in Chennai",
        "serviceType": "Custom Next.js & React Web Engineering",
        "provider": {
          "@id": "https://www.joydigital.in/website-development-company-chennai#professionalservice"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chennai"
        },
        "description": "Custom Next.js web application development, mobile responsiveness, Core Web Vitals optimization, and WhatsApp lead routing for Chennai businesses.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "25000",
          "minPrice": "25000",
          "description": "Starting from Rs 25,000 (one-time). Final price depends on pages, features and integrations."
        }
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@id": "https://www.joydigital.in/website-development-company-chennai#professionalservice"
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
      question: "How much does website development cost in Chennai?",
      answer:
        "At Joy Digital, our custom Next.js website development starts from Rs 25,000 (one-time) for a complete, mobile-responsive business website. This includes custom React/Next.js coding, sub-second speed tuning, technical on-page SEO, direct WhatsApp lead routing, and Google Analytics 4 event tracking. Final price depends on pages, features and integrations (such as custom booking calculators, API integrations, multi-language toggles, or dynamic catalogs).",
    },
    {
      question: "How long does it take to develop a custom website in Chennai?",
      answer:
        "A standard custom Next.js business website typically takes 7 to 14 business days from approved wireframes to live deployment. Complex platforms featuring dynamic user portals, multi-step booking funnels, or third-party CRM and ERP synchronizations average 3 to 5 weeks.",
    },
    {
      question: "Why should Chennai businesses choose custom Next.js over traditional WordPress templates?",
      answer:
        "Traditional WordPress sites rely on dozens of conflicting third-party plugins that bloat page weight, slow mobile loading to 4-6 seconds, and create constant security vulnerabilities. In contrast, our custom Next.js builds deliver sub-1.5 second loading, zero database attack vectors, automated Google Core Web Vitals compliance, and 100% source code ownership with zero monthly theme license fees.",
    },
    {
      question: "What is included in your Rs 25,000 starter website development package?",
      answer:
        "Our Rs 25,000 package includes up to 5 custom-designed responsive pages, clean Next.js 15 & Tailwind CSS code, direct WhatsApp and contact form lead capture, Google Maps location embed, Core Web Vitals speed optimization, Schema.org local business markup, Google Search Console indexing, and 1 full year of hosting setup and technical support.",
    },
    {
      question: "Will our website be optimized for search engines (SEO) from day one?",
      answer:
        "Yes, absolutely. Every website we build includes foundational technical and on-page SEO: semantic HTML5 tags, optimized title and meta descriptions, automated XML sitemaps, robots.txt directives, and structured JSON-LD schemas. If your business needs ongoing ranking campaigns across Chennai, we also provide specialized SEO services in Chennai.",
    },
    {
      question: "How do you track website leads and conversions?",
      answer:
        "We configure custom Google Analytics 4 (GA4) event tags to track every interaction that matters: direct mobile telephone clicks, initiated WhatsApp chats with referral page data, and completed lead inquiry forms. You receive full access to real-time analytics to measure your marketing return on investment.",
    },
    {
      question: "Do you provide website maintenance and support after launch?",
      answer:
        "Yes. We support you through launch and provide 1 year of technical guidance for hosting setup, security certificates, and minor content adjustments. There are no restrictive maintenance lock-ins—you retain complete ownership of your Git repository and production files.",
    },
    {
      question: "Can you migrate our slow WordPress site to Next.js without losing Google rankings?",
      answer:
        "Yes. We execute zero-downtime SEO migrations. We map your existing URL structures, set up flawless 1:1 server-side 301 redirects, transfer your content, and retain established meta titles. Most clients see an immediate improvement in rankings due to dramatic page speed gains.",
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
        serviceName="Website Development in Chennai"
        heroTitle="Website Development Company in Chennai"
        heroSubtitle="Build a custom, high-speed Next.js website that loads in under 1.5 seconds, ranks in Google search, and converts visitors into leads via WhatsApp, phone calls, and forms. Starting from Rs 25,000 (one-time)."
        leadSource="Website Development Chennai Landing Page"
        heroCtaText="Claim Free Website Quote"
        heroActions={heroActions}
        canonicalUrl="https://www.joydigital.in/website-development-company-chennai"
        pricingNote="Starting from Rs 25,000 (one-time). Final price depends on pages, features and integrations."
        chennaiProofSection={<ChennaiClientProofCard />}
        overviewTitle="Custom Next.js Web Development Built for Chennai's High-Growth Enterprises"
        overviewContent={
          <div className="space-y-6 text-justify">
            <p>
              In Chennai&apos;s intensely competitive commercial marketplace, your website is the digital front door to your business. Whether your clients are IT procurement directors browsing along <strong>Old Mahabalipuram Road (OMR) and Guindy</strong>, industrial buyers sourcing components from <strong>Ambattur, Sriperumbudur, and Oragadam</strong>, or regional patients and consumers in <strong>Adyar, Anna Nagar, and T. Nagar</strong>, they expect instant, frictionless mobile experiences. If your site takes more than 3 seconds to load or fails to provide an immediate call or WhatsApp option, visitors abandon your business before reading a single sentence.
            </p>
            <p>
              As a dedicated <strong>website development company in Chennai</strong>, Joy Digital replaces slow, fragile WordPress templates with modern, engineered Next.js platforms. We write clean, strictly-typed React and TypeScript code designed around your specific business goals: ranking on Google, achieving sub-second mobile speeds, and generating continuous inbound leads.
            </p>

            {/* H2: Secondary Keyword 1 */}
            <h2 className="text-2xl font-extrabold text-[#0F172A] mt-8 mb-4">
              Custom Website Development Chennai: Engineering Speed and Conversions
            </h2>
            <p>
              Many digital agencies in Chennai sell pre-made off-the-shelf templates loaded with dozens of plugins. While templates appear easy to set up initially, they quickly become an operational liability. Heavy plugin scripts increase mobile loading times to 4-7 seconds, introduce recurring security vulnerabilities, and cause frequent layout shifts that trigger Google Core Web Vitals penalties.
            </p>
            <p>
              Our approach to <strong>custom website development Chennai</strong> centers on performance-first engineering:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Next.js App Router Architecture:</strong> We leverage server-side static generation (SSG) and edge computing to serve pre-rendered pages directly from cloud CDN edges, ensuring page rendering times under 1.5 seconds.
              </li>
              <li>
                <strong>Mobile-First Interface Design:</strong> Over 75% of web inquiries in Chennai occur on smartphones. We engineer touch-friendly layouts, sticky contact triggers, and intuitive menus that perform seamlessly across all screen resolutions.
              </li>
              <li>
                <strong>Direct Lead Routing via WhatsApp:</strong> We connect high-converting WhatsApp triggers that automatically format inquiries with destination or service details, allowing prospects to initiate conversations in one tap.
              </li>
              <li>
                <strong>100% IP &amp; Code Ownership:</strong> Unlike proprietary website builders that lock you into monthly subscriptions, we hand over full Git repository code ownership with zero vendor lock-in.
              </li>
            </ul>
            <p>
              If your business also requires specialized local or national search engine visibility, explore our dedicated <Link href="/seo-services-chennai" className="text-[#7C3AED] font-bold hover:underline">SEO services in Chennai</Link> or learn more about our global <Link href="/custom-website-development" className="text-[#7C3AED] font-bold hover:underline">custom website development</Link> capabilities.
            </p>

            {/* H2: Secondary Keyword 2 */}
            <h2 className="text-2xl font-extrabold text-[#0F172A] mt-8 mb-4">
              Bespoke Website Design and Development Chennai for Core Industries
            </h2>
            <p>
              Different industries in Chennai require distinct user conversion pathways. As an experienced team specializing in <strong>website design and development Chennai</strong>, we tailor every layout to the commercial realities of your market:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>B2B &amp; Precision Manufacturing (Ambattur, Guindy, Sriperumbudur):</strong> We build product specification catalogs, downloadable technical PDFs, and fast quotation inquiry workflows tailored for procurement managers.
              </li>
              <li>
                <strong>Technology Consultancies &amp; SaaS (OMR, DLF Porur, Sholinganallur):</strong> We engineer modern, sleek product landing pages, interactive feature tours, and calendar booking integrations that attract international clients.
              </li>
              <li>
                <strong>Travel, Tourism &amp; Hospitality (Adyar, Central Chennai):</strong> As demonstrated in our <Link href="/case-studies/you-and-me-voyage" className="text-[#7C3AED] font-bold hover:underline">You &amp; Me Voyage Case Study</Link>, we engineer 3-step tour planners, dynamic itinerary displays, and direct mobile booking funnels.
              </li>
              <li>
                <strong>Healthcare Clinics &amp; Professional Practices:</strong> We build fast doctor appointment booking systems, patient service guides, and Google Maps local schema integrations that drive daily patient calls.
              </li>
            </ul>

            {/* Architecture Comparison Table */}
            <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
              Custom Next.js vs. Generic WordPress Templates
            </h3>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-xs border-collapse bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 font-bold border-b border-slate-800">Feature</th>
                    <th className="p-3 font-bold border-b border-slate-800">Generic WordPress Template</th>
                    <th className="p-3 font-bold border-b border-slate-800 text-[#38bdf8]">Joy Digital Custom Next.js</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold">Mobile Page Speed</td>
                    <td className="p-3">Sluggish (3.5s to 6.5s) with heavy plugin bloat</td>
                    <td className="p-3 font-semibold text-emerald-600">Sub-second (&lt; 1.5s on mobile)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Google Core Web Vitals</td>
                    <td className="p-3">Frequent layout shifts &amp; render delays</td>
                    <td className="p-3 font-semibold text-emerald-600">Scores 90+ across LCP, INP &amp; CLS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Security &amp; Maintenance</td>
                    <td className="p-3">Requires constant plugin updates; SQL injection risk</td>
                    <td className="p-3 font-semibold text-slate-900">Decoupled serverless build; zero database exploit vector</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Lead Capture Pathways</td>
                    <td className="p-3">Generic email forms with high abandonment</td>
                    <td className="p-3 font-semibold text-emerald-600">Direct WhatsApp routing + GA4 conversion event tracking</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Code Ownership</td>
                    <td className="p-3">Locked into theme licenses and visual builders</td>
                    <td className="p-3 font-semibold text-slate-900">100% full IP and TypeScript source code ownership</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quote Action Banner */}
            <div className="my-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 not-prose shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">Ready to Build a Website That Actually Generates Leads?</h3>
                <p className="text-xs text-slate-300">Custom Next.js packages start from Rs 25,000 (one-time). Receive a tailored scope and technical roadmap.</p>
              </div>
              <a
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20need%20a%20website%20development%20quote%20for%20my%20Chennai%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#10b981] hover:bg-[#059669] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-sm" />
                <span>Get Instant Quote</span>
              </a>
            </div>
          </div>
        }
        benefitsTitle="Why Choose Our Chennai Web Development Team?"
        benefitsSubtitle="We engineer fast-loading websites designed specifically to capture leads in Chennai."
        benefits={[
          {
            icon: "fa-solid fa-bolt",
            title: "Sub-Second Page Load Speed",
            description: "Our serverless Next.js structures ensure pages load in under 1.5 seconds, achieving perfect Core Web Vitals on mobile networks.",
          },
          {
            icon: "fa-solid fa-code",
            title: "Custom React & TypeScript Code",
            description: "Clean, bespoke component code styled with Tailwind CSS to match your exact brand guidelines with zero template bloat.",
          },
          {
            icon: "fa-solid fa-comments",
            title: "WhatsApp Leads Routing",
            description: "Integrated WhatsApp click hooks that convert mobile website visitors into qualified phone conversations instantly.",
          },
          {
            icon: "fa-solid fa-magnifying-glass-location",
            title: "SEO-Ready Schema Architecture",
            description: "Granular JSON-LD schema markup, self-referencing canonicals, and local business coordinates injected from day one.",
          },
          {
            icon: "fa-solid fa-shield-halved",
            title: "Serverless Edge Security",
            description: "Hosted on cloud CDNs with pre-configured SSL certificates, protecting your users with zero exposed database ports.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "Verified Conversion Tracking",
            description: "Google Analytics 4 configured to track phone calls, WhatsApp inquiries, and form submissions with clear reporting.",
          },
        ]}
        processTitle="Our 4-Stage Development Process"
        processSubtitle="We launch high-speed React web assets in a transparent, structured 4-step framework."
        processSteps={[
          {
            step: "1",
            icon: "fa-solid fa-compass-drafting",
            title: "Discovery & Structure Plan",
            description: "We map out navigation flow, target keywords, and wireframe pages customized to your local industry niche.",
          },
          {
            step: "2",
            icon: "fa-solid fa-code",
            title: "React & Next.js Coding",
            description: "We convert approved layouts into fast, strictly-typed, fully responsive HTML & TypeScript components.",
          },
          {
            step: "3",
            icon: "fa-solid fa-magnifying-glass-chart",
            title: "SEO & Schema Deployment",
            description: "We integrate custom JSON-LD schemas, alt properties, metadata, and configure XML sitemaps.",
          },
          {
            step: "4",
            icon: "fa-solid fa-rocket",
            title: "CDN Hosting & Speed Test",
            description: "We configure domain DNS, run Lighthouse audits, and submit URLs to Google Search Console for indexing.",
          },
        ]}
        pricingTitle="Transparent Web Development Packages"
        pricingSubtitle="Custom development packages starting from Rs 25,000 (one-time). Final price depends on pages, features and integrations."
        pricingTiers={[
          {
            name: "Startup Website",
            price: "Starting from Rs 25,000 (one-time)",
            period: "one-time",
            description: "Perfect for local service providers, consultants, clinics, and small business portfolios in Chennai.",
            features: [
              "Up to 5 Custom Responsive Next.js Pages",
              "Sub-1.5s Mobile Page Load Speed",
              "Direct WhatsApp Lead Capture Routing",
              "Contact & Inquiry Form Setup with GA4 Events",
              "Google Maps Location Integration",
              "Core Web Vitals & Technical SEO Readiness",
              "1 Year Hosting Setup & Technical Support",
            ],
            ctaText: "Choose Startup Plan",
          },
          {
            name: "Growth Business Plan",
            price: "Starting from Rs 45,000 (one-time)",
            period: "one-time",
            description: "Best for growing companies, healthcare clinics, multi-service firms, and industrial exporters in Chennai.",
            isPopular: true,
            features: [
              "Up to 10-12 Custom Next.js Pages",
              "Dynamic Product / Service Catalog Architecture",
              "Comprehensive Local Schema.org Integration",
              "Google Analytics 4 & Search Console Setup",
              "Interactive Lead Generation Funnels & Calculators",
              "Mobile Performance Scoring 95+ Guarantee",
              "100% Full Source Code & IP Handover",
            ],
            ctaText: "Choose Growth Plan",
          },
          {
            name: "Enterprise Custom Portal",
            price: "Custom Quote",
            period: "custom scope",
            description: "For e-commerce portals, custom web applications, travel booking platforms, and API-driven systems.",
            features: [
              "Unlimited Custom Responsive Pages & Layouts",
              "Bespoke Database Schema (PostgreSQL/Supabase)",
              "Custom Admin Panel for Content Updates",
              "Third-Party API Integrations (Payment / CRM)",
              "Advanced Lead Routing & Automated Email Alerts",
              "Dedicated Technical Architect Support",
              "Full Zero-Downtime Edge Deployment",
            ],
            ctaText: "Request Custom Quote",
          },
        ]}
        faqs={keyFaqs}
        crossLinks={[
          { href: "/seo-services-chennai", label: "SEO Services in Chennai" },
          { href: "/custom-website-development", label: "Custom Website Development" },
          { href: "/case-studies/you-and-me-voyage", label: "Chennai Client: You & Me Voyage" },
          { href: "/website-development-company-madurai", label: "Web Development Madurai" },
          { href: "/website-design-company-coimbatore", label: "Web Design Coimbatore" },
          { href: "/free-website-audit", label: "Free Website Audit" },
        ]}
        relatedBlogPosts={relatedBlogPosts}
      />
    </>
  );
}
