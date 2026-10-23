import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "SEO Services in Chennai | SEO Company & Agency",
  description: "Drive qualified business leads with expert SEO services in Chennai. Joy Digital delivers technical SEO audits, Google Maps 3-Pack rankings & high-speed web architecture.",
  keywords: [
    "seo services in chennai",
    "seo company in chennai",
    "seo agency in chennai",
    "local seo services in chennai",
    "technical seo chennai",
    "google maps seo chennai",
    "seo audit chennai",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/seo-services-chennai",
  },
  openGraph: {
    title: "SEO Services in Chennai | SEO Company & Agency - Joy Digital",
    description: "Drive qualified business leads with expert SEO services in Chennai. Joy Digital delivers technical SEO audits, Google Maps 3-Pack rankings & high-speed web architecture.",
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
    title: "SEO Services in Chennai | SEO Company & Agency - Joy Digital",
    description: "Drive qualified business leads with expert SEO services in Chennai. Joy Digital delivers technical SEO audits, Google Maps 3-Pack rankings & high-speed web architecture.",
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
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20SEO%20Services%20in%20Chennai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with an SEO Specialist on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-base" />
        <span>WhatsApp Consultation</span>
      </a>
      <Link
        href="/seo-audit-tool"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <i className="fa-solid fa-magnifying-glass-chart text-xs" />
        <span>Run Free SEO Audit</span>
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

  return (
    <ServicePageTemplate
      serviceName="SEO Services in Chennai"
      heroTitle="SEO Services in Chennai"
      heroSubtitle="Accelerate organic traffic and qualified customer inquiries with performance-driven SEO services in Chennai. We combine sub-second Next.js speed, deep technical SEO, and Google Maps Local 3-Pack optimization to connect your business with ready-to-buy customers."
      leadSource="SEO Services Chennai Landing Page"
      heroCtaText="Claim Free SEO Consultation"
      heroActions={heroActions}
      canonicalUrl="https://www.joydigital.in/seo-services-chennai"
      overviewTitle="Strategic SEO Services in Chennai Engineered for Revenue Growth"
      overviewContent={
        <div className="space-y-6 text-justify">
          <p>
            In Chennai’s fast-evolving business landscape—from industrial hubs in Ambattur and Guindy to corporate offices across the OMR IT corridor, T. Nagar, and Anna Nagar—high search engine visibility directly dictates inbound revenue. When prospective buyers search for specialized services, medical clinics, manufacturing suppliers, or professional agencies, they contact the top businesses appearing in Google’s organic results and the Google Maps Local 3-Pack. Standard directory listings and generic marketing campaigns are no longer enough to win competitive search real estate.
          </p>
          <p>
            Joy Digital delivers data-driven <strong>SEO services in Chennai</strong> focused on qualified lead generation rather than vanity metrics. As an engineering-first <strong>SEO company in Chennai</strong>, we bridge the gap between technical web development and modern search engine optimization. We analyze search intent, optimize crawl efficiency, build localized relevance, and engineer page architecture designed to convert visitors into direct phone calls, WhatsApp messages, and quote inquiries.
          </p>

          {/* Authentic Case Study Highlight */}
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
                  Through Google Business Profile categorization, local citation cleanup across Chennai directories, and targeted on-page technical optimization, we established top 3-Pack rankings within 30 days.
                </p>
              </div>
              <Link
                href="/case-studies/chennai-clinic-leads"
                className="shrink-0 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <span>Read Full Case Study</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Core Web Vitals & Technical Speed Architecture
          </h3>
          <p>
            Google’s ranking algorithms heavily favor websites that deliver instant, seamless mobile experiences. Legacy content management systems and plugin-heavy websites frequently suffer from slow server responses, bloated JavaScript bundles, and unstable visual layouts that increase bounce rates. By pairing our technical search strategies with modern server-rendered frameworks, we ensure your site passes Google Core Web Vitals benchmarks (LCP, INP, and CLS) with sub-1.5-second load times. Search engines reward this performance with higher crawl frequency and stronger ranking stability.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Dominating the Google Maps Local 3-Pack
          </h3>
          <p>
            For regional service providers and physical establishments, local proximity queries represent the highest-intent traffic available. As an experienced <strong>local SEO services in Chennai</strong> partner, we conduct comprehensive Name-Address-Phone (NAP) audits, synchronize citations across prominent regional directories (Justdial, Sulekha, IndiaMART), eliminate duplicate listings, and optimize your Google Business Profile (GBP) categories and attributes. This systematic optimization ensures your business ranks prominently when nearby clients search for your services.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Preparing for Google AI Overviews & Generative Search (GEO)
          </h3>
          <p>
            Search is shifting toward conversational answers and AI-driven summaries. As a forward-looking <strong>SEO agency in Chennai</strong>, we construct entity-based content models, implement structured Schema.org data, and align headings with natural language questions. This positions your brand not only for traditional organic blue links, but also for direct citation within Google AI Overviews, Perplexity, and AI search engines.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Transparent Lead Tracking & Revenue Attribution
          </h3>
          <p>
            We believe search marketing should be directly accountable to business growth. We integrate Google Search Console and configure custom Google Analytics 4 (GA4) event trackers to measure real customer interactions—including phone call clicks, WhatsApp conversations, and lead form submissions. You receive transparent monthly reports detailing keyword impression trends, organic traffic gains, and qualified inquiries.
          </p>

          {/* Interactive Tool Banner */}
          <div className="mt-8 p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white">Want to see where your website currently stands?</h4>
              <p className="text-xs text-slate-300">Run an instant, automated technical SEO audit to identify bottlenecks holding back your rankings.</p>
            </div>
            <Link
              href="/seo-audit-tool"
              className="shrink-0 bg-accent hover:bg-accent-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-md"
            >
              Test My Site Free &rarr;
            </Link>
          </div>
        </div>
      }
      benefitsTitle="Why Choose Joy Digital as Your SEO Agency in Chennai?"
      benefitsSubtitle="We replace vanity ranking promises with rigorous technical audits, local map dominance, and verified inbound leads."
      benefits={[
        {
          icon: "fa-solid fa-bolt",
          title: "Technical SEO & Core Web Vitals",
          description: "We optimize server response times, eliminate layout shifts (CLS), and achieve sub-1.5s mobile speeds favored by Google's crawlers.",
        },
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Google Maps Local 3-Pack",
          description: "We optimize Google Business Profiles, refine service areas, and sync local directory citations to capture high-intent 'near me' inquiries.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-location",
          title: "High-Intent Keyword Alignment",
          description: "Rather than chasing irrelevant high-volume terms, we target commercial and transactional keywords used by buyers ready to engage.",
        },
        {
          icon: "fa-solid fa-code",
          title: "Structured Schema.org Markup",
          description: "We implement connected JSON-LD schemas (LocalBusiness, Service, FAQPage, BreadcrumbList) for rich snippet visibility.",
        },
        {
          icon: "fa-solid fa-robot",
          title: "Generative AI Search Readiness",
          description: "We structure your content into clear, answer-focused formats to win recommendations inside Google AI Overviews and answer engines.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Conversion Tracking & GA4",
          description: "Monitor real phone clicks, WhatsApp conversations, and enquiry form submissions with transparent monthly analytics reports.",
        },
      ]}
      processTitle="Our Technical SEO Roadmap"
      processSubtitle="A structured, transparent four-phase framework tailored for competitive Chennai search markets."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Technical & Competitor Audit",
          description: "We inspect layout files, check mobile responsiveness, audit index coverage, and benchmark competitor keyword strategies in Chennai.",
        },
        {
          step: "2",
          icon: "fa-solid fa-screwdriver-wrench",
          title: "On-Page Code & Content Tuning",
          description: "We optimize heading hierarchies, rewrite title tags and meta descriptions, refine internal links, and map content to user search intent.",
        },
        {
          step: "3",
          icon: "fa-solid fa-map-location-dot",
          title: "Maps Listing & Citation Sync",
          description: "We verify Google Business Profile categories, audit NAP consistency across Indian business directories, and configure local schemas.",
        },
        {
          step: "4",
          icon: "fa-solid fa-square-poll-vertical",
          title: "Analytics Integration & Monthly Growth",
          description: "We connect GA4 lead tracking, verify Search Console sitemaps, and deliver regular performance reports to drive continuous ranking gains.",
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
      faqs={[
        {
          question: "Why should Chennai businesses choose Joy Digital for SEO services?",
          answer: "Unlike traditional agencies that rely on generic blog posts and superficial keywords, Joy Digital combines full-stack technical engineering with modern search optimization. We improve Core Web Vitals speed scores, fix technical crawl bottlenecks, build dominant Google Maps 3-Pack visibility, and track real business conversions such as phone calls and WhatsApp inquiries.",
        },
        {
          question: "Do you guarantee #1 rankings on Google?",
          answer: "No reputable SEO company can guarantee #1 rankings because Google's algorithm evaluates hundreds of dynamic variables and competitor activities. We adhere strictly to Google Search Essentials and white-hat practices. Our technical audits, speed optimizations, and localized content strategies systematically improve organic visibility and deliver qualified business inquiries.",
        },
        {
          question: "How long does it take to see results from SEO in Chennai?",
          answer: "Technical site fixes, canonical corrections, and sitemap submissions begin indexing within days. Noticeable improvements in organic impressions, keyword rankings, and local map visibility generally emerge within 3 to 6 months, depending on the competitiveness of your specific Chennai market.",
        },
        {
          question: "How do your SEO services integrate with website development?",
          answer: "Technical SEO and web development are fundamentally connected. Slow loading times, render-blocking scripts, and poor mobile architecture directly damage search rankings. Because we engineer clean, lightweight codebases that load in under 1.5 seconds, search crawlers can index your pages efficiently, providing a substantial advantage over competitors.",
        },
        {
          question: "How do you help businesses rank in the Google Maps Local 3-Pack?",
          answer: "We audit and optimize your Google Business Profile (GBP), ensure consistent Name-Address-Phone (NAP) details across major business directories (Justdial, Sulekha, IndiaMART), target localized Chennai neighborhoods (like Guindy, OMR, T. Nagar, Anna Nagar), and implement structured LocalBusiness schema.",
        },
        {
          question: "How do you track and report SEO results?",
          answer: "We connect Google Search Console and Google Analytics 4 (GA4) with custom event tracking for telephone clicks, WhatsApp conversations, and lead forms. You receive clear monthly reports showing impression growth, keyword trajectories, and qualified inbound leads.",
        },
        {
          question: "Can I test my website's SEO health before hiring an agency?",
          answer: "Yes! You can use our free online SEO Audit Tool on this site to check your current page speed, meta tags, heading hierarchy, and mobile usability, or contact us for a comprehensive manual review.",
        },
      ]}
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
  );
}
