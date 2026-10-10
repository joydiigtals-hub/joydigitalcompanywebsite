import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services in Chennai | Technical & Local SEO Agency",
  description: "Drive organic search rankings with Joy Digital's SEO services in Chennai. We run Core Web Vitals audits, Maps 3-Pack SEO, and GA4 lead tracking.",
  alternates: {
    canonical: "https://joydigital.in/seo-services-chennai",
  },
  openGraph: {
    title: "SEO Services in Chennai | Technical & Local SEO Agency",
    description: "Drive organic search rankings with Joy Digital's SEO services in Chennai. We run Core Web Vitals audits, Maps 3-Pack SEO, and GA4 lead tracking.",
    url: "https://joydigital.in/seo-services-chennai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Chennai | Technical & Local SEO Agency",
    description: "Drive organic search rankings with Joy Digital's SEO services in Chennai. We run Core Web Vitals audits, Maps 3-Pack SEO, and GA4 lead tracking.",
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Services in Chennai",
  "serviceType": "Search Engine Optimization & Local Maps Ranking",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Joy Digital",
    "image": "https://joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  },
  "description": "Joy Digital is a technical SEO company serving Chennai businesses with Core Web Vitals speed tuning, crawl budget optimization, Maps 3-Pack rankings, and GA4 conversion tracking.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "15000",
    "highPrice": "75000",
    "offerCount": "3"
  }
};

export default function SeoServicesChennai() {
  return (
    <ServicePageTemplate
      serviceName="SEO Services Chennai"
      heroTitle="Technical & Local SEO Services in Chennai"
      heroSubtitle="Drive high-intent Google search traffic and claim top spots in the Google Maps Local 3-Pack. We optimize site speed, resolve crawl bottlenecks, structure indexing schemas, and track real customer leads across Chennai."
      leadSource="SEO Services Chennai Landing Page"
      canonicalUrl="https://joydigital.in/seo-services-chennai"
      overviewTitle="Technical Website Audits & Full-Funnel SEO in Chennai"
      overviewContent={
        <div className="space-y-6 text-justify">
          <p>
            For startups, professional service agencies, and corporate businesses in Chennai—competing in high-density markets like T. Nagar, Adyar, Guindy, and the OMR IT corridor—appearing on Google Page 1 is crucial for capturing qualified inbound leads. Standard business listings are often buried under national aggregators or competitors with better search strategies. Joy Digital provides results-focused <strong>SEO services in Chennai</strong>, combining deep technical code audits, high-intent keyword alignment, Google Maps Local 3-Pack dominance, and conversion event tracking.
          </p>
          <p>
            Unlike agencies that rely solely on surface-level keyword stuffing and generic blog posts, we engineer every layer of your website. We correct heading hierarchies, establish strict canonical structures, optimize assets for Core Web Vitals, and configure structured LocalBusiness and FAQ JSON-LD schemas so search engines index and rank your pages ahead of competitors.
          </p>
          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">Core Web Vitals & Technical Speed Architecture</h3>
          <p>
            Google search crawlers deprioritize slow, bloated websites. If your website suffers from poor mobile rendering, layout shifts, or bloated JavaScript bundles, your rankings drop. We build on modern serverless Next.js frameworks designed to achieve 95+ Core Web Vitals scores, providing a high-speed foundation that search engines reward.
          </p>
          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">Dominating the Google Maps Local 3-Pack</h3>
          <p>
            When customers in Chennai search for medical clinics, industrial equipment, hotels, or travel agencies, they turn to Google Maps. Our local SEO framework synchronizes citations across trusted directories (Justdial, Sulekha, IndiaMART), audits Name-Address-Phone (NAP) consistency, configures localized service areas, and injects Google Business Profile schema directly into your code to maximize local phone calls and direction requests.
          </p>
          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">Transparent Event Analytics & Lead Attribution</h3>
          <p>
            Every SEO campaign should produce measurable revenue opportunities. We connect Google Search Console and implement Google Analytics 4 (GA4) event trackers to measure phone clicks, form submissions, and WhatsApp consultations, giving you total visibility into how organic traffic converts into paying clients.
          </p>
        </div>
      }
      benefitsTitle="Why Partner with Our Chennai SEO Team?"
      benefitsSubtitle="We construct SEO systems designed to target commercial intent keywords and generate phone calls."
      benefits={[
        {
          icon: "fa-solid fa-magnifying-glass-location",
          title: "Technical Code Audits",
          description: "Scan layouts to resolve rendering errors, clean semantic tags, and check redirects.",
        },
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Google Map Rankings",
          description: "Optimize Google Business Profile (GBP) categories and local directory citations.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Core Web Vitals Speed",
          description: "Improve page speeds, reducing mobile bounce rates and helping your site rank higher.",
        },
        {
          icon: "fa-solid fa-code",
          title: "Structured Schema markup",
          description: "Implement LocalBusiness and FAQ schemas to help search engines index your pages.",
        },
        {
          icon: "fa-solid fa-link",
          title: "Crawl & Sitemap Optimization",
          description: "Setup clean canonical tags, check robots.txt, and configure XML sitemaps.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Conversion Tracking Setup",
          description: "Monitor user clicks on phone numbers and WhatsApp buttons using GA4.",
        },
      ]}
      processTitle="Our Technical SEO Roadmap"
      processSubtitle="We scale your Chennai search presence across four structured phases."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Technical SEO Audit",
          description: "We inspect layout files, check mobile responsiveness, and compile key search terms.",
        },
        {
          step: "2",
          icon: "fa-solid fa-screwdriver-wrench",
          title: "On-Page Code Adjustments",
          description: "We optimize heading tags, configure meta descriptions, and set canonical tags.",
        },
        {
          step: "3",
          icon: "fa-solid fa-map-location-dot",
          title: "Maps Listing & Schema Setup",
          description: "We verify profile categories, sync citations, and inject custom JSON-LD schema codes.",
        },
        {
          step: "4",
          icon: "fa-solid fa-square-poll-vertical",
          title: "Analytics Integration & Reports",
          description: "We connect GA4 trackers, verify GSC sitemaps, and deliver monthly rankings progress reports.",
        },
      ]}
      pricingTitle="Transparent SEO Packages"
      pricingSubtitle="Select the plan that fits your business scale. No hidden fees or long-term lock-in contracts."
      pricingTiers={[
        {
          name: "Local SEO Starter",
          price: "₹15,000",
          period: "monthly",
          description: "Perfect for local service providers, clinic listings, and local portfolios.",
          features: [
            "Local Map Pack Citation Setup",
            "On-page Metadata Optimization",
            "Google Business Profile Setup Support",
            "Google Search Console Integration",
            "Monthly Performance Progress Reports",
            "WhatsApp conversion event tracking",
          ],
          ctaText: "Choose Starter Plan",
        },
        {
          name: "Growth Plan",
          price: "₹25,000",
          period: "monthly",
          description: "Best for growing businesses, multipage sites, and competitive niches.",
          isPopular: true,
          features: [
            "Advanced Multi-Keyword Target SEO",
            "Local Schema Markup Injection",
            "Citations Audit & Duplicate Cleanups",
            "Google Analytics 4 & Clarity tracking",
            "Custom landing page content advice",
            "Monthly ranking audits and consultation",
          ],
          ctaText: "Choose Growth Plan",
        },
        {
          name: "Enterprise Custom",
          price: "Custom Quote",
          description: "For e-commerce stores, national campaigns, and corporate networks.",
          features: [
            "Unlimited Keyword Optimization",
            "E-commerce Schema Setup & Tags",
            "Content Strategy & Landing Page Coding",
            "Advanced Analytics Conversion Funnels",
            "Direct developer coordination support",
            "Custom periodic audit consultations",
          ],
          ctaText: "Get Custom Quote",
        },
      ]}
      faqs={[
        {
          question: "How long does it take to rank on Google in Chennai?",
          answer: "Onsite technical changes and GSC sitemap uploads start indexing within days. Significant increases in organic rankings and local map visibility usually take 3 to 6 months depending on keyword competition.",
        },
        {
          question: "Do you configure Google Business Profiles (GBP)?",
          answer: "Yes. GMB/GBP setup, category selection, local proximity reviews templates, citations sync, and maps packing optimization are core elements of our local search marketing plans.",
        },
        {
          question: "Do I need a custom website to rank?",
          answer: "While you can rank any domain, fast-loading, clean Next.js/React websites achieve significantly higher rankings. Google prioritizes sites with high speed scores and mobile-responsive layouts.",
        },
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/digital-marketing-agency-in-chennai", label: "Digital Marketing Chennai" },
        { href: "/website-development-company-chennai", label: "Web Development Chennai" },
        { href: "/google-business-profile-optimization", label: "Google Business Profile Optimization" },
        { href: "/local-seo-services", label: "Local SEO Services" },
      ]}
    />
  );
}
