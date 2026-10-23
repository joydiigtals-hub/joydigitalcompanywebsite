import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Madurai | Top SEO Company & Agency",
  description: "Drive qualified local leads and Google Maps 3-Pack rankings with expert SEO services in Madurai. Joy Digital delivers technical SEO, speed audits & citation growth.",
  keywords: [
    "seo services in madurai",
    "seo service in madurai",
    "seo company in madurai",
    "seo agency in madurai",
    "local seo services in madurai",
    "google maps seo madurai",
    "technical seo madurai",
    "seo audit madurai",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/seo-services-madurai",
  },
  openGraph: {
    title: "SEO Services in Madurai | Top SEO Company & Agency - Joy Digital",
    description: "Drive qualified local leads and Google Maps 3-Pack rankings with expert SEO services in Madurai. Joy Digital delivers technical SEO, speed audits & citation growth.",
    url: "https://www.joydigital.in/seo-services-madurai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "SEO Services in Madurai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Madurai | Top SEO Company & Agency - Joy Digital",
    description: "Drive qualified local leads and Google Maps 3-Pack rankings with expert SEO services in Madurai. Joy Digital delivers technical SEO, speed audits & citation growth.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function SeoServicesMadurai() {
  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20SEO%20Services%20in%20Madurai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with a Madurai SEO Specialist on WhatsApp"
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
    </div>
  );

  return (
    <ServicePageTemplate
      serviceName="SEO Services in Madurai"
      heroTitle="SEO Services in Madurai"
      heroSubtitle="Accelerate organic rankings, Google Maps 3-Pack visibility, and customer phone calls with results-driven SEO services in Madurai. We combine technical code audits, local citation sync, and speed optimization for local businesses."
      leadSource="SEO Services Madurai Landing Page"
      heroCtaText="Claim Free SEO Consultation"
      heroActions={heroActions}
      canonicalUrl="https://www.joydigital.in/seo-services-madurai"
      overviewTitle="Organic Google Map Rankings & SEO Services in Madurai"
      overviewContent={
        <div className="space-y-6 text-justify">
          <p>
            Operating a business in Madurai—whether you manage a hospital in Anna Nagar, a hotel near the historic Meenakshi Amman Temple, an educational institution in K.Pudur, an automotive workshop in Sellur, or an industrial trading firm near Kalavasal and Mattuthavani—requires active online visibility. When local customers search for immediate services on their mobile phones, over 80% never scroll past the top three Google Maps listings and organic search results. Joy Digital delivers dedicated <strong>SEO services in Madurai</strong> engineered to turn local search intent into direct phone calls, WhatsApp inquiries, and in-store visits.
          </p>
          <p>
            As a full-stack <strong>SEO company in Madurai</strong>, we move beyond basic keyword placement. Traditional agencies often focus on generic blogs that generate empty traffic from outside your service area. We prioritize local search relevance: performing comprehensive technical site audits, fixing crawl barriers, ensuring accurate Name-Address-Phone (NAP) consistency across directories, and optimizing your Google Business Profile for high-intent search terms like <em>&quot;best clinic in Madurai&quot;</em> or <em>&quot;industrial machinery supplier Madurai&quot;</em>.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Dominating the Google Maps Local 3-Pack in Madurai
          </h3>
          <p>
            Local search queries represent high-intent buyers looking to call, get GPS directions, or book consultations immediately. Our localized framework synchronizes citations across trusted Indian business directories (Justdial, Sulekha, IndiaMART), audits category selections, eliminates duplicate listings, and embeds structured LocalBusiness JSON-LD schemas into your website. This signals clear geographical authority to Googlebot, helping your business capture prime spots in local map pack results.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Core Web Vitals Speed & Technical On-Page Optimization
          </h3>
          <p>
            Google search crawlers consistently deprioritize slow, bloated websites. If your website takes 4+ seconds to load on mobile connections, potential customers bounce to competitors before reading your offers. As an engineering-first <strong>SEO agency in Madurai</strong>, we analyze layout rendering, eliminate unused JavaScript, optimize WebP assets, and configure clean semantic headings (H1, H2, H3) and canonical tags so search engines easily crawl and rank your service pages.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Preparing for Google AI Overviews & Local Entity Search
          </h3>
          <p>
            Search is rapidly evolving toward AI answers and conversational queries. We structure your website content into structured question-and-answer formats and clear entity hierarchies. This ensures your business not only ranks on traditional Google blue links, but is also cited in Google AI Overviews and modern conversational search tools.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Transparent Lead Tracking & Conversion Analytics
          </h3>
          <p>
            Every SEO campaign should produce measurable commercial results. We connect Google Search Console (GSC) and implement custom Google Analytics 4 (GA4) event trackers to monitor every telephone click, contact form submission, and WhatsApp conversation. You receive regular, transparent monthly progress reports detailing keyword trajectories and qualified lead inquiries.
          </p>

          {/* Interactive Tool Banner */}
          <div className="mt-8 p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white">Curious about your website’s current SEO score?</h4>
              <p className="text-xs text-slate-300">Run a free technical audit to find speed bottlenecks and indexing errors holding back your rankings.</p>
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
      benefitsTitle="Why Choose Joy Digital for SEO Services in Madurai?"
      benefitsSubtitle="We deliver verified technical SEO, local Google Maps authority, and measurable business inquiries."
      benefits={[
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Google Maps 3-Pack Rankings",
          description: "Optimize Google Business Profile categories, service areas, and local citations to capture high-intent 'near me' searches in Madurai.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Commercial Keyword Strategy",
          description: "Target transactional keywords used by local Madurai buyers ready to book appointments or request commercial quotes.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Speed Index & Core Web Vitals",
          description: "Resolve mobile layout shifts (CLS), accelerate Largest Contentful Paint (LCP), and achieve sub-1.5s load times.",
        },
        {
          icon: "fa-solid fa-code",
          title: "Structured Schema.org Markup",
          description: "Inject valid LocalBusiness, Service, and FAQ schemas to help Google understand your entity data and earn rich snippets.",
        },
        {
          icon: "fa-solid fa-link",
          title: "Clean Internal Crawl Architecture",
          description: "Establish semantic URL pathways, canonical tags, and internal link silos so Googlebot indexes every service page effectively.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Conversion Tracking & GA4",
          description: "Measure actual phone calls, WhatsApp chats, and enquiry form submissions with clear, actionable monthly reporting.",
        },
      ]}
      processTitle="Our Madurai SEO Roadmap"
      processSubtitle="A proven, transparent four-phase process tailored for regional search visibility."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "SEO & Competitor Audit",
          description: "We audit site architecture, mobile responsiveness, crawl errors, and competitor keyword gaps across Madurai.",
        },
        {
          step: "2",
          icon: "fa-solid fa-screwdriver-wrench",
          title: "On-Page Code Adjustments",
          description: "We optimize heading tags, write high-CTR metadata, refine internal link paths, and align page content with search intent.",
        },
        {
          step: "3",
          icon: "fa-solid fa-map-location-dot",
          title: "Maps Listing & Citation Sync",
          description: "We verify Google Business Profile categories, sync regional directory citations (Justdial, Sulekha), and inject local schemas.",
        },
        {
          step: "4",
          icon: "fa-solid fa-square-poll-vertical",
          title: "Analytics Integration & Reports",
          description: "We verify sitemap indexing in GSC, connect GA4 lead tracking, and deliver transparent monthly ranking progress reports.",
        },
      ]}
      pricingTitle="Transparent SEO Packages"
      pricingSubtitle="Select the plan that fits your business scale. No hidden fees or locked-in long-term retainers."
      pricingTiers={[
        {
          name: "Local SEO Starter",
          price: "₹15,000",
          period: "monthly",
          description: "Perfect for local retail stores, clinics, consultants, and single-location businesses in Madurai.",
          features: [
            "Google Business Profile (GBP) Full Optimization",
            "Local Map Pack Citation Setup & Cleanup",
            "On-Page Technical Audit & Metadata Tuning",
            "Google Search Console & XML Sitemap Integration",
            "WhatsApp & Click-to-Call Conversion Tracking",
            "Monthly Keyword & Performance Progress Reports",
          ],
          ctaText: "Choose Starter Plan",
        },
        {
          name: "Growth Plan",
          price: "₹25,000",
          period: "monthly",
          description: "Best for growing businesses, multi-service companies, and competitive commercial niches across Madurai.",
          isPopular: true,
          features: [
            "Advanced Multi-Keyword Target SEO",
            "Core Web Vitals Speed & Technical Code Audit",
            "Advanced Structured Schema.org Injection",
            "Local Citation Building & NAP Consistency",
            "Google Analytics 4 & Custom Event Tracking",
            "Madurai Competitor Gap Analysis & Content Advice",
            "Monthly Ranking Audits & Specialist Consultation",
          ],
          ctaText: "Choose Growth Plan",
        },
        {
          name: "Enterprise Custom",
          price: "Custom Quote",
          description: "For e-commerce portals, multi-city regional brands, and corporate networks.",
          features: [
            "Unlimited Target Keywords & Service Landing Pages",
            "Custom Architecture Speed & Code Optimization",
            "Multi-Location & Regional Expansion SEO",
            "AI Search & Generative Engine Optimization (GEO)",
            "Advanced Conversion Rate Optimization (CRO)",
            "Direct Senior Developer Coordination & Priority Support",
            "Custom Periodic Audit Consultations",
          ],
          ctaText: "Get Custom Quote",
        },
      ]}
      faqs={[
        {
          question: "How long does it take to rank on Google in Madurai?",
          answer: "Onsite technical improvements, metadata updates, and XML sitemap submissions begin indexing within days. Measurable increases in organic keyword rankings and local Google Maps 3-Pack visibility generally take 3 to 6 months depending on keyword competition in your niche.",
        },
        {
          question: "Do you guarantee #1 rankings on Google?",
          answer: "No legitimate SEO company can guarantee #1 rankings because Google's algorithm uses hundreds of dynamic ranking factors and competitor moves. We follow strict white-hat SEO and Google Search Essentials. Our technical optimizations, speed improvements, and localized content strategies systematically elevate your visibility and deliver qualified business inquiries.",
        },
        {
          question: "How do your local SEO services help my Madurai business get found on Google Maps?",
          answer: "We optimize your Google Business Profile (GBP), ensure consistent Name-Address-Phone (NAP) details across major Indian business directories (Justdial, Sulekha, IndiaMART), target localized Madurai areas (Anna Nagar, KK Nagar, Tallakulam, Kalavasal), and integrate structured LocalBusiness schema.",
        },
        {
          question: "Do I need a custom-built website to rank higher?",
          answer: "While any domain can be optimized, fast-loading Next.js websites achieve significantly higher mobile speed scores. Google's mobile-first algorithm rewards sites with fast load times and clean mobile rendering with superior ranking stability.",
        },
        {
          question: "How do you track and report SEO results?",
          answer: "We connect Google Search Console and Google Analytics 4 (GA4) with custom conversion tracking for click-to-call links, WhatsApp chats, and enquiry forms. You receive clear monthly reports showing impression growth, keyword positions, and actual lead volume.",
        },
        {
          question: "Can I test my website's current SEO health before hiring an agency?",
          answer: "Yes! You can run our free online SEO Audit Tool right now on this website to inspect your page speed, meta tags, heading structure, and mobile usability, or contact our team for a personalized manual review.",
        },
      ]}
      crossLinks={[
        { href: "/website-development-company-madurai", label: "Web Development Madurai" },
        { href: "/website-design-company-madurai", label: "Web Design Madurai" },
        { href: "/seo-audit-tool", label: "Free SEO Audit Tool" },
        { href: "/case-studies", label: "Client Case Studies" },
      ]}
    />
  );
}
