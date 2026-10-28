import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "On-Page SEO Services & Semantic Content Optimization",
  description:
    "Expert On-Page SEO services by Joy Digital. High-intent keyword mapping, meta tags, semantic HTML5, header hierarchy, internal link architecture, and search intent alignment.",
  alternates: {
    canonical: "https://www.joydigital.in/on-page-seo",
  },
  openGraph: {
    type: "website",
    title: "On-Page SEO Services & Keyword Optimization | Joy Digital",
    description:
      "Maximize your rankings and organic click-through rates with precision on-page SEO: semantic headings, internal link equity, and commercial search intent targeting.",
    url: "https://www.joydigital.in/on-page-seo",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - On-Page SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Page SEO Services & Keyword Optimization | Joy Digital",
    description:
      "Precision on-page SEO: title optimization, search intent alignment, and high-impact internal linking architectures.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "On-Page SEO Services",
  "serviceType": "On-Page Search Engine Optimization & Content Structuring",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "url": "https://www.joydigital.in"
  },
  "description":
    "Joy Digital optimizes visible and structural on-page elements: keyword mapping, title tags, meta descriptions, semantic HTML5 tags, and strategic internal links to maximize organic rankings and CTR.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "350",
    "highPrice": "1200",
    "offerCount": "3"
  }
};

export default function OnPageSEOPage() {
  return (
    <ServicePageTemplate
      serviceName="On-Page SEO"
      canonicalUrl="https://www.joydigital.in/on-page-seo"
      heroTitle="On-Page SEO Services & Semantic Content Optimization"
      heroSubtitle="Align every page of your website with real customer search intent. We engineer high-CTR titles, semantic heading hierarchies, strategic internal link equity networks, and conversion-focused copy that outranks competitors on Google."
      leadSource="On-Page SEO Landing Page"
      overviewTitle="Strategic On-Page Optimization That Converts Clicks into Revenue"
      overviewContent={
        <div className="space-y-6">
          <p>
            On-page SEO is more than just scattering keywords across your paragraphs. Modern search algorithms, powered by natural language processing (NLP) and semantic vector search, analyze how comprehensively your page addresses user queries, how logical your content hierarchy is, and how easily users find actionable answers.
          </p>
          <p>
            At <strong>Joy Digital</strong>, our on-page SEO methodology blends data-driven keyword intent modeling with compelling copywriting and CRO (conversion rate optimization). We ensure that every landing page and blog post not only ranks at the top of the search engine results page (SERP) but also drives qualified inquiries and customer conversions.
          </p>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">Comprehensive On-Page Optimization Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>High-CTR Title &amp; Meta Descriptions:</strong> Crafted to maximize click-through rates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Semantic Heading Architecture:</strong> Structured H1, H2, and H3 tag hierarchies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Internal Link Equity Sculpting:</strong> Contextual hubs that pass authority efficiently</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Keyword Intent &amp; Cannibalization Fixes:</strong> Clear commercial vs informational separation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Media &amp; Image Alt Tag Optimization:</strong> Descriptive alt attributes &amp; next-gen formats</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Featured Snippet &amp; Q&amp;A Targeting:</strong> Formatted tables, lists, and direct answers</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Eliminating Keyword Cannibalization &amp; Thin Content</h3>
          <p>
            When multiple pages on your website target similar search phrases, search engines become confused about which URL to display, dampening the ranking potential of both. We conduct exhaustive content gap audits to consolidate duplicate pages, resolve cannibalization issues, and ensure every page holds distinct topical authority.
          </p>
        </div>
      }
      benefitsTitle="Why B2B &amp; Service Brands Choose Our On-Page SEO"
      benefitsSubtitle="Every element on your page is optimized for both search bots and human decision-makers."
      benefits={[
        {
          icon: "fa-solid fa-bullseye",
          title: "Search Intent Alignment",
          description: "We analyze SERP intent—informational, commercial, or transactional—and structure your pages to deliver the exact solution searchers want to see."
        },
        {
          icon: "fa-solid fa-heading",
          title: "Semantic HTML5 Hierarchy",
          description: "We enforce strict semantic structure with clean H1 to H4 headings, bulleted takeaways, and FAQ blocks that search crawlers easily parse."
        },
        {
          icon: "fa-solid fa-arrow-pointer",
          title: "High-CTR Meta Tag Copywriting",
          description: "We craft persuasive, keyword-rich title tags and meta descriptions with powerful triggers that entice users to click your listing over rivals."
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Strategic Internal Linking",
          description: "We build authoritative internal linking pathways that distribute PageRank from high-performing pages directly into high-converting service offerings."
        },
        {
          icon: "fa-solid fa-image",
          title: "Accessible Image & Media SEO",
          description: "We optimize all graphics with contextual keywords, semantic alt descriptions, and descriptive filenames for Google Image and universal search."
        },
        {
          icon: "fa-solid fa-file-contract",
          title: "E-E-A-T Content Proofing",
          description: "We inject author credentials, external citations, factual data points, and transparent trust indicators aligned with Google's Quality Rater Guidelines."
        }
      ]}
      processTitle="Our 4-Step On-Page Optimization Framework"
      processSubtitle="Systematic keyword mapping, semantic rewriting, and live SERP testing."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Keyword & Intent Mapping",
          description: "We research primary, secondary, and semantic LSI keywords, assigning each high-value keyword target to a unique URL."
        },
        {
          step: "2",
          icon: "fa-solid fa-pen-nib",
          title: "On-Page Copy & Tag Refinement",
          description: "We rewrite titles, meta descriptions, headers, and intro paragraphs, ensuring high keyword relevance without keyword stuffing."
        },
        {
          step: "3",
          icon: "fa-solid fa-link",
          title: "Internal Link Architecture",
          description: "We connect related topic clusters with descriptive, contextual anchor text that reinforces core service keywords."
        },
        {
          step: "4",
          icon: "fa-solid fa-chart-line",
          title: "CTR & Ranking Tracking",
          description: "We track click-through rate shifts and keyword position improvements in Google Search Console, making iterative refinements."
        }
      ]}
      pricingTitle="On-Page SEO Packages & Optimization Plans"
      pricingSubtitle="Select the plan that matches your page volume and organic growth objectives."
      pricingTiers={[
        {
          name: "On-Page Starter Sprint",
          price: "$350 USD",
          period: "/one-time",
          description: "Perfect for local businesses or startups looking to optimize up to 5 core high-converting landing pages.",
          features: [
            "In-Depth Keyword Research for Up to 5 Pages",
            "High-CTR Title Tag & Meta Description Rewriting",
            "H1-H3 Semantic Heading Restructuring",
            "Image Alt Tag & Asset Optimization",
            "Strategic Internal Link Mapping",
            "Full Performance & Implementation Report"
          ],
          ctaText: "Start Starter Sprint"
        },
        {
          name: "Growth On-Page Overhaul",
          price: "$750 USD",
          period: "/one-time",
          description: "Comprehensive on-page overhaul for expanding businesses with up to 15 key service and category pages.",
          isPopular: true,
          features: [
            "Keyword Intent Mapping for Up to 15 Pages",
            "Complete Content Gap & Cannibalization Audit",
            "Semantic HTML & Header Hierarchy Optimization",
            "Full Contextual Internal Link Equity Architecture",
            "Featured Snippet & FAQ Schema Formatting",
            "Conversion Rate Optimization (CRO) Recommendations",
            "45 Days Ranking Improvement Tracking"
          ],
          ctaText: "Get Growth Overhaul"
        },
        {
          name: "Complete Site On-Page Retainer",
          price: "$1,200 USD",
          period: "/month",
          description: "Continuous on-page optimization, content refreshes, and monthly new landing page optimization for scaling brands.",
          features: [
            "Ongoing Monthly Optimization of 10+ Pages",
            "New Content Pre-Publishing On-Page Audits",
            "Continuous Keyword Cannibalization Monitoring",
            "Competitor SERP Delta Analysis & Updates",
            "Rich Snippet & Entity Optimization",
            "Dedicated SEO Content Strategist"
          ],
          ctaText: "Retain On-Page Team"
        }
      ]}
      faqs={[
        {
          question: "What is On-Page SEO and how does it help my business?",
          answer: "On-Page SEO involves optimizing visible page elements—including content, headlines, keywords, title tags, internal links, and images—to ensure search engines clearly understand your topics and rank your site for relevant buyer queries."
        },
        {
          question: "How long does it take for on-page SEO changes to show results?",
          answer: "On-page changes are often noticed by Google within days of crawling. Significant ranking improvements and CTR increases typically appear within 2 to 6 weeks as Google re-evaluates page relevance and user engagement signals."
        },
        {
          question: "What is keyword cannibalization and how do you fix it?",
          answer: "Keyword cannibalization happens when multiple pages on your site compete for the same query, confusing search engines. We fix this by consolidating competing pages, applying canonical tags, or re-targeting pages to distinct long-tail variations."
        },
        {
          question: "Do you write new content or optimize existing content?",
          answer: "We do both. We optimize existing web pages by improving headings, keyword density, and internal links, and we can also produce entirely new, search-intent-aligned copy to fill content gaps."
        },
        {
          question: "How does internal linking improve SEO?",
          answer: "Internal links guide search engine spiders through your site and pass link equity (PageRank) from high-authority pages to deeper service pages, signaling to Google which pages are the most important."
        }
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/website-seo", label: "Complete Website SEO" },
        { href: "/technical-seo", label: "Technical SEO Services" },
        { href: "/seo-content", label: "SEO Content Strategy" },
        { href: "/seo-services", label: "Enterprise B2B SEO" },
        { href: "/local-seo-services", label: "Local SEO Services" },
        { href: "/ai-search-optimization", label: "Generative Engine Optimization (GEO)" },
        { href: "/free-website-audit", label: "Free Instant Website Audit" }
      ]}
    />
  );
}
