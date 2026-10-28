import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import ChennaiClientProofCard from "@/components/sections/ChennaiClientProofCard";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Website Development in Chennai & India | Joy Digital",
  },
  description:
    "Custom website design and development built for speed and leads. Serving Chennai businesses. Get a free quote and project roadmap.",
  alternates: {
    canonical: "https://www.joydigital.in/custom-website-development",
  },
  openGraph: {
    title: "Custom Website Development in Chennai & India | Joy Digital",
    description:
      "Custom website design and development built for speed and leads. Serving Chennai businesses. Get a free quote and project roadmap.",
    url: "https://www.joydigital.in/custom-website-development",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Custom Website Development in Chennai & India - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development in Chennai & India | Joy Digital",
    description:
      "Custom website design and development built for speed and leads. Serving Chennai businesses. Get a free quote and project roadmap.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function CustomWebsiteDevelopmentPage() {
  const post1 = await getPostBySlug("website-development-cost-in-chennai");
  const post2 = await getPostBySlug("why-global-b2b-companies-ditching-legacy-cms-for-nextjs");
  const post3 = await getPostBySlug("template-websites-vs-custom-web-apps-best-investment");
  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Custom%20Website%20Development%20starting%20from%20Rs%2025,000."
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
        <span>Featured Chennai Case Study</span>
      </Link>
    </div>
  );

  // ProfessionalService schema specifically targeting Chennai & Madurai (Real HQ address only)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.joydigital.in/custom-website-development#professionalservice",
        "name": "Joy Digital - Custom Website Development",
        "url": "https://www.joydigital.in/custom-website-development",
        "telephone": "+919080026133",
        "logo": "https://www.joydigital.in/assets/images/logo.webp",
        "image": "https://www.joydigital.in/assets/images/hero-banner.webp",
        "description": "Custom website design and development built for speed and leads. Serving Chennai businesses and global enterprises. Starting from Rs 25,000.",
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
          { "@type": "City", "name": "Madurai" },
          { "@type": "Country", "name": "India" },
          { "@type": "AdministrativeArea", "name": "Worldwide" }
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
        "@id": "https://www.joydigital.in/custom-website-development#service",
        "name": "Custom Website Development",
        "serviceType": "Custom Next.js & React Full-Stack Web Development",
        "provider": {
          "@id": "https://www.joydigital.in/custom-website-development#professionalservice"
        },
        "description": "Bespoke Next.js web application development, custom API integrations, sub-second edge speeds, and conversion-focused architectures.",
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
          "@id": "https://www.joydigital.in/custom-website-development#professionalservice"
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
      question: "How much does custom website development cost in Chennai and India?",
      answer:
        "At Joy Digital, our custom Next.js website development starts from Rs 25,000 (one-time). This starting package includes up to 5 custom-designed responsive pages, clean React/TypeScript code, sub-second mobile page loads, WhatsApp and form lead capture, and technical on-page SEO. Final price depends on pages, features and integrations (such as custom calculators, client portals, e-commerce checkouts, or third-party CRM integrations).",
    },
    {
      question: "What is the difference between custom website development and off-the-shelf templates?",
      answer:
        "Custom website development involves engineering bespoke, modular React and Next.js components tailored specifically to your branding and commercial workflows. Off-the-shelf templates (such as WordPress or Wix themes) rely on heavy, bloated plugins that slow down mobile page speeds to 4-6 seconds, create security vulnerabilities, and limit design customization. With custom code, you achieve sub-second speeds, zero plugin bloat, and 100% full code ownership.",
    },
    {
      question: "How long does a custom website development project take?",
      answer:
        "A standard custom Next.js business website typically takes 7 to 14 business days. For larger enterprise web applications, dynamic database portals, or complex headless e-commerce builds, timelines average 3 to 6 weeks depending on integration requirements.",
    },
    {
      question: "Do you serve businesses in Chennai as well as international clients?",
      answer:
        "Yes. While we engineer high-performance web platforms for enterprises across India, North America, the UK, and the UAE, Chennai is one of our primary hubs. We work closely with Chennai businesses—from manufacturing companies in Ambattur and Guindy to SaaS firms along OMR and travel agencies in Adyar—delivering localized expertise with global engineering standards.",
    },
    {
      question: "Will our custom website be optimized for Google Search (SEO)?",
      answer:
        "Yes. Every custom build includes automated technical SEO: clean semantic markup, automated XML sitemaps, structured JSON-LD schemas, robots.txt directives, and sub-second Core Web Vitals performance. For clients targeting page one rankings in Chennai, we also offer dedicated SEO services in Chennai.",
    },
    {
      question: "How do you track leads and conversions on our custom website?",
      answer:
        "We set up custom Google Analytics 4 (GA4) event trackers to measure direct telephone clicks, initiated WhatsApp chats with referral page data, and completed lead inquiry forms. You receive full visibility into how your website generates tangible business inquiries.",
    },
    {
      question: "Do I own the code once the project is completed?",
      answer:
        "Yes, 100%. We transfer the complete Git repository, TypeScript source files, and asset packages directly to your ownership. There are no proprietary builder locks or monthly platform software fees.",
    },
    {
      question: "What support is provided after launch?",
      answer:
        "We include 1 full year of hosting setup support, DNS configuration assistance, and minor content adjustments. We also offer dedicated ongoing retainers for continuous feature expansion, speed tuning, and search optimization.",
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
        serviceName="Custom Website Development"
        heroTitle="Custom Website Development in Chennai & India"
        heroSubtitle="High-speed, bespoke Next.js website engineering built for speed, Core Web Vitals, and verified lead generation. Serving ambitious businesses in Chennai, India, and worldwide. Starting from Rs 25,000 (one-time)."
        leadSource="Custom Website Development Page"
        heroCtaText="Get a Website Quote"
        heroActions={heroActions}
        canonicalUrl="https://www.joydigital.in/custom-website-development"
        pricingNote="Starting from Rs 25,000 (one-time). Final price depends on pages, features and integrations."
        chennaiProofSection={<ChennaiClientProofCard />}
        overviewTitle="Websites Built to Turn Traffic Into Qualified Business Enquiries"
        overviewContent={
          <div className="space-y-6 text-justify">
            <p>
              A website should be an active commercial asset that generates leads around the clock, not just a passive digital brochure. At <strong>Joy Digital</strong>, we engineer bespoke platforms and <strong>custom website development services</strong> designed to turn organic search visitors into phone calls, WhatsApp messages, and qualified commercial quotation requests.
            </p>
            <p>
              Whether you are an established enterprise in India or an international brand scaling globally, our web engineering team builds scalable Next.js and React architectures that easily achieve Google Core Web Vitals benchmarks. By eliminating bloated template dependencies, we provide your business with an undeniable technical SEO and conversion advantage from day one.
            </p>

            {/* Architecture Comparison Table */}
            <h3 className="text-xl font-extrabold text-primary-dark mt-8 mb-4">
              Custom Next.js &amp; React Build vs. Generic WordPress / Wix Templates
            </h3>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-xs border-collapse border border-[#E9E4F2] bg-white rounded-xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#1F1B2D] text-white">
                    <th className="p-3 border border-[#3D306E]">Architecture Feature</th>
                    <th className="p-3 border border-[#3D306E] bg-[#7C3AED]/20 text-[#A78BFA]">Custom Next.js &amp; React Build</th>
                    <th className="p-3 border border-[#3D306E]">Generic WordPress / Wix Template</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E4F2] text-[#1F1B2D]">
                  <tr className="bg-white">
                    <td className="p-3 border border-[#E9E4F2] font-bold">Mobile Page Speed</td>
                    <td className="p-3 border border-[#E9E4F2] font-semibold text-emerald-600">Sub-second (&lt; 1.5s), 95+ Core Web Vitals</td>
                    <td className="p-3 border border-[#E9E4F2] text-rose-600">Slow (3.5s - 6s), heavy plugin bloat</td>
                  </tr>
                  <tr className="bg-[#FAF9FF]">
                    <td className="p-3 border border-[#E9E4F2] font-bold">Security &amp; Vulnerabilities</td>
                    <td className="p-3 border border-[#E9E4F2] font-semibold text-emerald-600">Serverless static rendering (Zero database attack vector)</td>
                    <td className="p-3 border border-[#E9E4F2] text-rose-600">High vulnerability risk from outdated plugins and CMS exploits</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-[#E9E4F2] font-bold">Code &amp; IP Ownership</td>
                    <td className="p-3 border border-[#E9E4F2] font-semibold text-emerald-600">100% full IP and TypeScript source code ownership</td>
                    <td className="p-3 border border-[#E9E4F2] text-rose-600">Vendor lock-in on proprietary themes &amp; builders</td>
                  </tr>
                  <tr className="bg-[#FAF9FF]">
                    <td className="p-3 border border-[#E9E4F2] font-bold">Lead Generation Pathways</td>
                    <td className="p-3 border border-[#E9E4F2] font-semibold text-emerald-600">Direct WhatsApp routing + GA4 conversion event tracking</td>
                    <td className="p-3 border border-[#E9E4F2] text-rose-600">Generic contact forms with high mobile drop-off</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Dedicated Chennai Section (as required) */}
            <div className="my-10 p-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-2 border-[#7C3AED]/20 rounded-3xl not-prose text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#7C3AED] bg-purple-100 px-3 py-1 rounded-full inline-block mb-3">
                Serving Chennai Enterprises
              </span>
              <h2 className="text-2xl font-extrabold text-[#1F1B2D] mb-4">
                Custom Website Development in Chennai: Built for Fast-Growing Local &amp; Export Businesses
              </h2>
              <div className="text-sm text-[#6B6478] leading-relaxed space-y-4">
                <p>
                  Chennai is home to a dynamic mix of traditional industrial leaders and fast-paced tech innovators. From precision engineering manufacturers in <strong>Ambattur and Guindy</strong> to enterprise software startups across <strong>Old Mahabalipuram Road (OMR) and DLF Porur</strong>, Chennai businesses need web platforms that represent their true engineering caliber to clients across the globe.
                </p>
                <p>
                  We build custom, high-speed websites tailored specifically to Chennai&apos;s commercial landscape:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>
                    <strong>B2B Manufacturing &amp; Industrial Exporters:</strong> Structured product catalogs, technical documentation downloads, and RFQ inquiry funnels built for global procurement officers.
                  </li>
                  <li>
                    <strong>Healthcare &amp; Diagnostic Clinics:</strong> Proximity-optimized patient appointment systems and local schema integrations that drive daily patient calls.
                  </li>
                  <li>
                    <strong>Travel &amp; Hospitality Portals:</strong> Interactive multi-step tour planners with instant WhatsApp booking routing, as proven by our work with Adyar-based agency <em>You &amp; Me Voyage</em>.
                  </li>
                </ul>
                <p className="pt-2">
                  Looking for a dedicated local team? Explore our specialized <Link href="/website-development-company-chennai" className="text-[#7C3AED] font-bold hover:underline">website development company in Chennai</Link> or pair your platform with our high-impact <Link href="/seo-services-chennai" className="text-[#7C3AED] font-bold hover:underline">SEO services in Chennai</Link>.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary-dark mt-8 mb-4">
              Serverless Edge Execution &amp; Global Performance
            </h3>
            <p>
              We leverage modern edge distribution (Vercel Edge, CloudFront) to execute compute logic physically closer to your site visitors across North America, Europe, Australia, and India. This guarantees that your Time to First Byte (TTFB) remains consistently under 300ms globally, giving international corporate buyers an immediate, premium impression of your brand.
            </p>
          </div>
        }
        benefitsTitle="Built for Performance, SEO, and Scale"
        benefitsSubtitle="How our custom engineering approach outperforms generic templates to bring you more leads."
        benefits={[
          {
            icon: "fa-solid fa-cubes",
            title: "Custom Next.js & React Build",
            description: "Modular TypeScript component engineering providing total editorial flexibility and zero rigid theme restrictions.",
          },
          {
            icon: "fa-solid fa-bolt",
            title: "Sub-Second Global Edge Latency",
            description: "Edge pre-rendering ensuring TTFB under 300ms globally for international and Indian visitors.",
          },
          {
            icon: "fa-solid fa-shield-halved",
            title: "Serverless Enterprise Security",
            description: "Decoupled frontend with zero exposed database ports or vulnerable third-party CMS plugin attack vectors.",
          },
          {
            icon: "fa-solid fa-file-code",
            title: "100% Code & IP Ownership",
            description: "Clean, strictly-typed TypeScript repository handed directly to your engineering team upon project launch.",
          },
          {
            icon: "fa-solid fa-magnifying-glass",
            title: "Automated Technical SEO",
            description: "Dynamic JSON-LD schemas, automated XML sitemaps, and Core Web Vitals optimization pre-configured from day one.",
          },
          {
            icon: "fa-solid fa-comments",
            title: "WhatsApp & GA4 Lead Tracking",
            description: "Integrated click-to-WhatsApp routing and GA4 conversion tracking to measure every inbound business opportunity.",
          },
        ]}
        processTitle="Agile 4-Stage Delivery Process"
        processSubtitle="Transparent sprints designed to deliver high-converting web applications on time and within budget."
        processSteps={[
          {
            step: "1",
            icon: "fa-solid fa-clipboard-check",
            title: "Discovery & PRD Blueprinting",
            description: "We audit your technical needs, define user conversion funnels, and map data architecture.",
          },
          {
            step: "2",
            icon: "fa-solid fa-palette",
            title: "UI/UX & Design System",
            description: "Clean responsive layout mockups, conversion triggers, and mobile-first design systems.",
          },
          {
            step: "3",
            icon: "fa-solid fa-code",
            title: "Agile TypeScript Sprints",
            description: "Bespoke Next.js modular component engineering in transparent sprints with live staging links.",
          },
          {
            step: "4",
            icon: "fa-solid fa-rocket",
            title: "QA & Global Edge Launch",
            description: "Synthetic load testing, Core Web Vitals speed audits, and zero-downtime Edge deployment.",
          },
        ]}
        pricingTitle="Transparent Development Packages"
        pricingSubtitle="Custom development packages starting from Rs 25,000 (one-time). Final price depends on pages, features and integrations."
        pricingTiers={[
          {
            name: "Custom Starter Build",
            price: "Starting from Rs 25,000 (one-time)",
            period: "one-time",
            description: "Ideal for businesses needing a high-speed custom web platform with lead capture.",
            features: [
              "Up to 5 Custom Responsive Next.js Pages",
              "Sub-1.5s Mobile Page Load Speed",
              "Direct WhatsApp Lead Routing",
              "Contact & Inquiry Form Setup with GA4 Events",
              "Core Web Vitals & Technical SEO Readiness",
              "100% TypeScript Source Code Handover",
              "1 Year Hosting Setup & Technical Support",
            ],
            ctaText: "Request Starter Quote",
          },
          {
            name: "Enterprise Business Platform",
            price: "Starting from Rs 45,000 (one-time)",
            period: "one-time",
            description: "Full-scale custom web platform with catalog architectures and lead funnels.",
            isPopular: true,
            features: [
              "Up to 10-12 Custom Next.js Pages",
              "Dynamic Product / Service Catalog Architecture",
              "Comprehensive Local & Organization Schema.org Graph",
              "Interactive Lead Generation Funnels & Quotation Tools",
              "Google Analytics 4 & Search Console Setup",
              "95+ Core Web Vitals Guarantee on Mobile",
              "100% IP & Code Rights Transfer",
            ],
            ctaText: "Choose Enterprise Plan",
          },
          {
            name: "Bespoke Web App / Portal",
            price: "Custom Quote",
            period: "custom scope",
            description: "For custom database portals, booking engines, and API microservices.",
            features: [
              "Complex Database Schema & Supabase/PostgreSQL",
              "Full API Microservices (Payment / CRMs / Auth)",
              "Multi-Region Edge Caching & Scalability",
              "Dedicated Technical Architect",
              "Advanced Funnel & Conversion Optimization",
              "Full Zero-Downtime Edge Deployment",
            ],
            ctaText: "Book Architecture Call",
          },
        ]}
        faqs={keyFaqs}
        crossLinks={[
          { href: "/website-development-company-chennai", label: "Web Development Company in Chennai" },
          { href: "/seo-services-chennai", label: "SEO Services in Chennai" },
          { href: "/case-studies/you-and-me-voyage", label: "Chennai Client: You & Me Voyage" },
          { href: "/website-development", label: "Web Development Services" },
          { href: "/web-design-services", label: "Web Design Services" },
          { href: "/ecommerce-website-development", label: "Ecommerce Website Development" },
        ]}
        relatedBlogPosts={relatedBlogPosts}
      />
    </>
  );
}
