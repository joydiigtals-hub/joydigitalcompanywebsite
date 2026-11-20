import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services Company | Performance Marketing",
  description: "Results-driven digital marketing services. From Google Ads and paid social to conversion funnels and lead generation. Get a free digital marketing consultation.",
  alternates: {
    canonical: "https://www.joydigital.in/digital-marketing-services",
  },
  openGraph: {
    title: "Digital Marketing Services Company | Performance Marketing | Joy Digital",
    description: "Results-driven digital marketing services. From Google Ads and paid social to conversion funnels and lead generation. Get a free digital marketing consultation.",
    url: "https://www.joydigital.in/digital-marketing-services",
    type: "website",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Digital Marketing Services Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services Company | Performance Marketing | Joy Digital",
    description: "Results-driven digital marketing services. From Google Ads and paid social to conversion funnels and lead generation. Get a free digital marketing consultation.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function DigitalMarketingServicesPage() {
  return (
    <ServicePageTemplate
      serviceName="Digital Marketing Services"
      heroTitle="Performance Digital Marketing Services That Drive Real Business Growth"
      heroSubtitle="Turn search visibility and advertising spend into qualified customer enquiries. We build high-converting paid search, social media marketing campaigns, and lead acquisition funnels for growing businesses."
      leadSource="Digital Marketing Services Landing Page"
      heroCtaText="Get Free Marketing Audit"
      canonicalUrl="https://www.joydigital.in/digital-marketing-services"
      overviewTitle="Strategic Digital Marketing Built Around Sales and Customer Acquisition"
      overviewContent={
        <div className="space-y-6">
          <p>
            In today&apos;s crowded digital landscape, generating vanity website clicks is no longer enough to grow a profitable business. You need qualified, high-intent prospects who are actively looking for your products and services, ready to call, email, or send an enquiry. At Joy Digital, our <strong>digital marketing services</strong> are engineered around one primary business metric: driving real customer conversions and predictable pipeline revenue.
          </p>
          <p>
            Whether you operate a local professional firm in India, an export business, a healthcare clinic, or a global B2B enterprise in the USA, UK, or UAE, our team aligns paid search advertising, technical SEO, and conversion-optimized landing pages into an integrated acquisition engine. We eliminate budget waste, test copy relentlessly, and ensure every marketing rupee or dollar spent generates measurable return on investment (ROI).
          </p>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between my-4 text-xs">
            <span className="font-semibold text-slate-800">Combine marketing with high-speed web infrastructure:</span>
            <div className="flex gap-3 shrink-0">
              <Link href="/website-development" className="text-accent underline font-bold hover:text-purple-700">Web Development Company</Link>
              <span className="text-slate-300">|</span>
              <Link href="/seo-services" className="text-accent underline font-bold hover:text-purple-700">SEO Services</Link>
            </div>
          </div>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Core Components of Our Digital Marketing Campaigns</h3>
          <p>
            An effective digital marketing campaign requires harmony between audience targeting, compelling ad creative, and lightning-fast post-click experiences. We manage Google Search &amp; Performance Max ads to intercept buyers at the exact moment of search intent, paired with Meta (Facebook &amp; Instagram) campaigns designed to build brand trust and retarget warm visitors.
          </p>
          <p>
            Crucially, we do not send paid advertising traffic to generic homepages. We build dedicated, distraction-free <Link href="/landing-page-development" className="text-accent underline font-semibold">landing pages</Link> with pre-filled WhatsApp enquiry buttons, one-click click-to-call triggers, and friction-free inquiry forms. This conversion-first focus typically cuts cost per acquisition by 30% to 50% compared to traditional agency approaches.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Omnichannel Tracking, Analytics &amp; Transparent Reporting</h3>
          <p>
            You should never have to guess which marketing channels are generating sales. We configure Google Tag Manager, Google Analytics 4, and conversion pixels with server-side API tracking to accurately attribute phone calls, form completions, and WhatsApp messages. Every month, you receive clear, jargon-free reports highlighting cost per lead, total inquiries, and recommendations for scaling.
          </p>
        </div>
      }
      benefitsTitle="Why Partner with Joy Digital for Marketing?"
      benefitsSubtitle="Clear reporting, conversion-first strategy, and direct engineer access."
      benefits={[
        {
          icon: "fa-solid fa-bullseye",
          title: "High-Intent Buyer Targeting",
          description: "We focus budgets on transactional search queries and decision-maker audiences rather than vanity impressions.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Sub-Second Landing Pages",
          description: "Ultra-fast Next.js landers that load in under 1 second, preventing mobile bounce rates from paid ad clicks.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Full Attribution Tracking",
          description: "Track phone calls, WhatsApp messages, and form submissions accurately with GA4 and Meta Conversions API.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Direct Specialist Access",
          description: "Work directly with technical marketing strategists with zero account manager middlemen.",
        },
      ]}
      processTitle="Our 4-Stage Marketing Acquisition Process"
      processSubtitle="A repeatable, data-backed roadmap from initial market audit to scalable buyer acquisition."
      processSteps={[
        {
          step: "01",
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Market Audit & Competitor Breakdown",
          description: "We analyze your current search rankings, competitor ads, target audience pain points, and current conversion bottlenecks.",
        },
        {
          step: "02",
          icon: "fa-solid fa-bullseye",
          title: "Campaign & Funnel Construction",
          description: "We write persuasive ad copy, configure pixel tracking, build custom landing pages, and set up negative keyword filters.",
        },
        {
          step: "03",
          icon: "fa-solid fa-rocket",
          title: "Launch & Rapid A/B Testing",
          description: "Campaigns go live with daily bid management, audience adjustments, and headline testing to quickly reduce cost per acquisition.",
        },
        {
          step: "04",
          icon: "fa-solid fa-chart-line",
          title: "Scaling & Organic Synergies",
          description: "We scale profitable campaigns and feed converting search term data into ongoing organic SEO and local search strategies.",
        },
      ]}
      pricingTitle="Transparent Marketing Packages"
      pricingSubtitle="Clear, scalable retainer tiers tailored for businesses ready to dominate their vertical."
      pricingTiers={[
        {
          name: "Local Growth Marketing",
          price: "₹18,000",
          period: "/ month",
          description: "Ideal for local service businesses and clinics looking to acquire regional calls and WhatsApp leads.",
          features: [
            "Google Ads (Search & Maps)",
            "Up to 2 Dedicated Landing Pages",
            "WhatsApp & Call Conversion Tracking",
            "Monthly Performance Reporting",
            "Ad Spend Budget: Up to ₹40,000/mo",
          ],
          ctaText: "Choose Local Plan",
        },
        {
          name: "National & Global Scale",
          price: "₹35,000",
          period: "/ month",
          description: "For expanding brands, exporters, and multi-location businesses seeking consistent inbound pipelines.",
          isPopular: true,
          features: [
            "Google Ads + Meta (FB/IG) Retargeting",
            "Custom High-Speed Next.js Funnels",
            "GA4 & Server-Side Conversions API",
            "Bi-Weekly Strategy & Optimization Calls",
            "Ad Spend Budget: Up to ₹1,50,000/mo",
          ],
          ctaText: "Choose Growth Plan",
        },
      ]}
      faqs={[
        {
          question: "How quickly do digital marketing campaigns generate results?",
          answer: "Paid advertising campaigns (Google Ads and Meta Ads) begin driving targeted visitors and potential customer inquiries within 48 to 72 hours of launch. In contrast, organic SEO builds compound authority over 60 to 90 days.",
        },
        {
          question: "How do you track incoming WhatsApp and phone call leads?",
          answer: "We implement dynamic URL parameter tracking and custom JavaScript event triggers that fire Google Analytics and Meta conversion events whenever a user clicks your WhatsApp or call button.",
        },
        {
          question: "Do you require long-term contracts?",
          answer: "No. Our digital marketing services operate on flexible month-to-month retainers. We believe our performance and lead volume should be the reason you choose to stay with us.",
        },
      ]}
      crossLinks={[
        { href: "/seo-services", label: "Enterprise SEO Services" },
        { href: "/local-seo-services", label: "Local SEO & Map Pack Optimization" },
        { href: "/landing-page-development", label: "Landing Page Development" },
        { href: "/website-development", label: "Professional Web Development" },
      ]}
    />
  );
}
