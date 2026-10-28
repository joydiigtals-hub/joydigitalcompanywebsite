import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website SEO Services | Complete Search Engine Optimization",
  description:
    "End-to-end website SEO services by Joy Digital. Increase organic Google rankings, improve website visibility, drive qualified search traffic, and generate continuous business leads.",
  alternates: {
    canonical: "https://www.joydigital.in/website-seo",
  },
  openGraph: {
    type: "website",
    title: "Website SEO Services | Complete Search Engine Optimization | Joy Digital",
    description:
      "Drive sustainable search rankings and revenue with our full-spectrum website SEO services: technical audits, on-page architecture, keyword research, and high-converting content.",
    url: "https://www.joydigital.in/website-seo",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Website SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website SEO Services | Complete Search Engine Optimization | Joy Digital",
    description:
      "Full-spectrum website SEO services: keyword research, technical code fixes, on-page optimization, and organic pipeline growth.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Complete Website SEO Services",
  "serviceType": "Full-Service Search Engine Optimization",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "url": "https://www.joydigital.in"
  },
  "description":
    "Joy Digital delivers complete website SEO solutions combining technical architecture, on-page optimization, commercial keyword targeting, and high-authority link building to drive compounding organic traffic.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "400",
    "highPrice": "1500",
    "offerCount": "3"
  }
};

export default function WebsiteSEOPage() {
  return (
    <ServicePageTemplate
      serviceName="Website SEO"
      canonicalUrl="https://www.joydigital.in/website-seo"
      heroTitle="Complete Website SEO Services for Sustainable Growth"
      heroSubtitle="Transform your website into your primary customer acquisition channel. We combine deep technical audits, on-page search intent mapping, authoritative backlink building, and conversion optimization to outrank your competitors on Google."
      leadSource="Website SEO Landing Page"
      overviewTitle="Full-Spectrum Website SEO That Drives Real Business Revenue"
      overviewContent={
        <div className="space-y-6">
          <p>
            Having a beautifully designed website is only half the battle. If prospective customers can't find your brand when searching for your services on Google, your competitors are capturing your market share. Winning in organic search today requires a holistic approach uniting technical health, on-page relevance, high-quality content, and trustworthy digital authority.
          </p>
          <p>
            At <strong>Joy Digital</strong>, our comprehensive <strong>Website SEO Services</strong> are built for businesses that demand measurable ROI. We don't focus on vanity metrics or random rankings for irrelevant terms. We identify the high-intent keywords that your ideal customers search when they are ready to buy, and we engineer your entire website to claim the top spots.
          </p>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">What Complete Website SEO Covers</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Technical Foundation:</strong> Core Web Vitals, crawlability, and indexation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>On-Page Alignment:</strong> Semantic headings, meta tags, and internal link trees</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Keyword Intent Mapping:</strong> Targeting commercial &amp; transactional buyer terms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Authoritative Digital PR:</strong> High-DA backlinks that build true domain trust</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Conversion Rate Optimization:</strong> Turning organic traffic into leads &amp; sales</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Transparent Reporting:</strong> Clear Google Search Console &amp; ROI metrics</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">A Sustainable, White-Hat Methodology</h3>
          <p>
            We strictly adhere to Google Search Essentials and Webmaster Guidelines. We never use spammy automated link farms or deceptive tactics that risk algorithmic penalties. Everything we build is designed to protect and increase your domain equity for years to come.
          </p>
        </div>
      }
      benefitsTitle="Why Businesses Choose Our Full-Service Website SEO"
      benefitsSubtitle="We align every SEO campaign directly with your commercial pipeline goals."
      benefits={[
        {
          icon: "fa-solid fa-trophy",
          title: "Page #1 Google Dominance",
          description: "We target qualified, commercial search keywords that place your brand directly in front of active buyers searching for your specific solutions."
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Technical Excellence",
          description: "We optimize site architecture, mobile responsiveness, and page loading speed so your site satisfies Google's Core Web Vitals requirements."
        },
        {
          icon: "fa-solid fa-chart-pie",
          title: "Lower Customer Acquisition Costs",
          description: "Organic search delivers compounding traffic without the continuous pay-per-click costs of Google Ads and social media advertising."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Penalty-Proof Strategies",
          description: "100% white-hat methodologies protecting your brand across every core Google algorithm and Helpful Content update."
        },
        {
          icon: "fa-solid fa-filter-circle-dollar",
          title: "Traffic That Actually Converts",
          description: "We analyze buyer psychology and optimize on-page calls-to-action (CTAs) to ensure your new visitors become paying customers."
        },
        {
          icon: "fa-solid fa-eye",
          title: "Total Metric Transparency",
          description: "Live dashboard tracking your keyword movements, impressions, organic clicks, and lead generation progress every month."
        }
      ]}
      processTitle="Our Proven 4-Step Website SEO Process"
      processSubtitle="A repeatable, data-backed approach to ranking dominance."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Full Site & Competitor Audit",
          description: "We analyze technical health, current keyword rankings, and competitor strengths to discover fast ranking opportunities."
        },
        {
          step: "2",
          icon: "fa-solid fa-wrench",
          title: "On-Page & Technical Remediation",
          description: "We repair site speed, mobile bottlenecks, meta tags, heading hierarchies, and internal links across all core pages."
        },
        {
          step: "3",
          icon: "fa-solid fa-layer-group",
          title: "Topical Content & Authority Scaling",
          description: "We deploy targeted content clusters and acquire authoritative backlinks that establish high domain credibility."
        },
        {
          step: "4",
          icon: "fa-solid fa-chart-line",
          title: "Conversion Optimization & Scaling",
          description: "We refine lead capture points, monitor keyword expansions, and expand your topical footprint across new geographic regions."
        }
      ]}
      pricingTitle="Website SEO Growth Packages"
      pricingSubtitle="Predictable monthly plans designed for businesses at every stage of growth."
      pricingTiers={[
        {
          name: "Local & Regional SEO",
          price: "$400 USD",
          period: "/month",
          description: "Designed for local businesses and regional service providers looking to dominate city search queries and Google Maps.",
          features: [
            "Up to 15 Target Local & Commercial Keywords",
            "Full Technical Site Health Audit & Fixes",
            "Google Business Profile Optimization",
            "Local Citation & Directory Cleanups",
            "On-Page Optimization for Top 5 Pages",
            "Monthly Local Ranking Report"
          ],
          ctaText: "Start Local SEO"
        },
        {
          name: "National & E-Commerce Growth",
          price: "$850 USD",
          period: "/month",
          description: "Comprehensive SEO campaign for expanding companies competing across nationwide markets.",
          isPopular: true,
          features: [
            "Up to 40 Target High-Intent Keywords",
            "Full Technical SEO & Core Web Vitals Engineering",
            "On-Page Optimization for Top 15 Pages",
            "2 In-Depth SEO Content Articles / Month",
            "High-DA Contextual Link Acquisition",
            "Competitor Gap Analysis & SERP Tracking",
            "Bi-Weekly Strategy & Reporting Calls"
          ],
          ctaText: "Scale Nationally"
        },
        {
          name: "Enterprise & Global Domination",
          price: "$1,500 USD",
          period: "/month",
          description: "Full-scale organic pipeline acceleration for high-volume SaaS, multi-location brands, and international enterprises.",
          features: [
            "Unlimited Keyword & Entity Tracking",
            "Advanced JavaScript & Next.js Architecture Support",
            "Complete Topical Authority Content Engine (4 Articles/Mo)",
            "Generative Engine Optimization (GEO & AI Overviews)",
            "Premium Digital PR & Authoritative Backlink Outreach",
            "Dedicated Senior SEO Growth Strategist"
          ],
          ctaText: "Launch Enterprise SEO"
        }
      ]}
      faqs={[
        {
          question: "How long does it take for Website SEO to show results?",
          answer: "Technical fixes can improve indexing within 2 to 4 weeks. Meaningful keyword ranking climbs and compounding traffic growth typically take 3 to 6 months as domain authority builds and Google indexes fresh content clusters."
        },
        {
          question: "How is Website SEO different from paid Google Ads?",
          answer: "Google Ads stop delivering leads the moment you stop paying for clicks. Website SEO builds permanent organic real estate that continues to drive qualified customer inquiries every single day without paying per click."
        },
        {
          question: "Do you guarantee #1 rankings on Google?",
          answer: "No legitimate agency can guarantee #1 rankings on Google because search algorithms change continuously. However, our proven data-driven framework has consistently achieved top-3 positions for hundreds of high-value commercial keywords across competitive sectors."
        },
        {
          question: "Will SEO work for my specific industry?",
          answer: "If your target customers use Google to search for your products, services, or solutions, SEO will work for your business. We tailor keyword research and content strategy specifically to the search behaviors of your target audience."
        },
        {
          question: "What reporting will I receive each month?",
          answer: "You receive comprehensive monthly reports showing keyword ranking movements, organic impression growth, clicks from Google Search Console, and tangible lead form submissions so you can clearly measure ROI."
        }
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/technical-seo", label: "Technical SEO Services" },
        { href: "/on-page-seo", label: "On-Page SEO Services" },
        { href: "/seo-content", label: "SEO Content Strategy" },
        { href: "/seo-services", label: "Enterprise B2B SEO" },
        { href: "/local-seo-services", label: "Local SEO Services" },
        { href: "/ai-search-optimization", label: "Generative Engine Optimization (GEO)" },
        { href: "/free-website-audit", label: "Free Instant Website Audit" }
      ]}
    />
  );
}
