import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Content Strategy & Copywriting Services",
  description:
    "Expert SEO content strategy and copywriting services by Joy Digital. Topical authority clustering, commercial intent copywriting, GEO & AI citation writing, and blog engines that drive pipeline growth.",
  alternates: {
    canonical: "https://www.joydigital.in/seo-content",
  },
  openGraph: {
    type: "website",
    title: "SEO Content Strategy & Copywriting Services | Joy Digital",
    description:
      "Scale your organic search presence with data-backed topic clusters, high-intent blog writing, and E-E-A-T rich copy engineered for conversions and AI citations.",
    url: "https://www.joydigital.in/seo-content",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - SEO Content Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Content Strategy & Copywriting Services | Joy Digital",
    description:
      "Data-driven SEO content clusters, commercial intent writing, and authoritative articles engineered for top Google rankings.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Content Strategy & Copywriting Services",
  "serviceType": "SEO Content Creation & Topical Authority Strategy",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "url": "https://www.joydigital.in"
  },
  "description":
    "Joy Digital engineers revenue-focused SEO content engines, including topical authority clusters, commercial-intent landing page copy, and AI-optimized editorial articles.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "450",
    "highPrice": "1800",
    "offerCount": "3"
  }
};

export default function SEOContentPage() {
  return (
    <ServicePageTemplate
      serviceName="SEO Content"
      canonicalUrl="https://www.joydigital.in/seo-content"
      heroTitle="SEO Content Strategy & High-Converting Copywriting"
      heroSubtitle="Transform your website into the dominant authority in your industry. We engineer comprehensive topic clusters, commercial-intent blog engines, and AI citation-optimized copy that ranks #1 and converts organic traffic into qualified leads."
      leadSource="SEO Content Landing Page"
      overviewTitle="Building Topical Authority with Revenue-Driven SEO Content"
      overviewContent={
        <div className="space-y-6">
          <p>
            Generic, low-quality blog posts churned out without strategic intent do not rank in today's search landscape. Google's Helpful Content System and advanced AI search engines demand deeply researched, authoritative content that demonstrates firsthand experience, answers specific commercial questions, and solves user challenges concisely.
          </p>
          <p>
            At <strong>Joy Digital</strong>, our SEO content service is built on topical authority mapping. We map out full pillar-and-cluster architectures that exhaustively answer every question your potential buyers search for across their decision journey. From top-of-funnel educational guides to bottom-of-funnel comparison pages, our content turns search engines into compounding customer acquisition engines.
          </p>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">What Our SEO Content Engine Delivers</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Topical Pillar &amp; Cluster Maps:</strong> Exhaustive keyword coverage in your niche</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Commercial Intent Mapping:</strong> Targeting queries that drive pipeline revenue</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Generative Engine Optimization (GEO):</strong> Structured for AI search citations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>E-E-A-T Author Credentials:</strong> Factual backing, data tables, and expert quotes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>High-Converting CRO CTAs:</strong> Seamless bridges from reader to sales inquiry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Original Graphics &amp; Visual Tables:</strong> Built for featured snippet acquisition</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Content Crafted for Humans, Search Bots, and AI Models</h3>
          <p>
            With the rise of Google AI Overviews, SearchGPT, and Perplexity, your content must be clearly structured for machine extraction. We format key definitions, concise lists, and structured comparison matrices that LLMs extract when generating answers for prospective buyers.
          </p>
        </div>
      }
      benefitsTitle="Why Modern Brands Invest in Our SEO Content Strategy"
      benefitsSubtitle="We write content that builds industry authority, earns organic backlinks, and converts visitors."
      benefits={[
        {
          icon: "fa-solid fa-network-wired",
          title: "Topical Authority Clustering",
          description: "We don't publish isolated articles. We engineer interconnected content clusters that establish your website as the definitive source of truth in your sector."
        },
        {
          icon: "fa-solid fa-funnel-dollar",
          title: "Commercial Intent Prioritization",
          description: "We focus on high-intent 'best', 'cost', 'alternative', and 'vs' keywords that decision-makers search right before booking a service or purchasing."
        },
        {
          icon: "fa-solid fa-robot",
          title: "AI Search & Citation Ready",
          description: "Our content is structured with semantic Q&A definitions, schema markup, and verifiable statistics so AI models cite your brand as an authority."
        },
        {
          icon: "fa-solid fa-pen-fancy",
          title: "Flawless Technical Copywriting",
          description: "Written by native, domain-expert copywriters who understand software, technical services, and complex B2B products without fluff."
        },
        {
          icon: "fa-solid fa-magnet",
          title: "Passive Backlink Acquisition",
          description: "By publishing proprietary frameworks, checklists, and data-backed guides, your content organically attracts links from journalists and publications."
        },
        {
          icon: "fa-solid fa-arrow-trend-up",
          title: "Compounding Organic Value",
          description: "Unlike paid advertising that stops the moment you turn off ad spend, our evergreen SEO content delivers compounding organic leads for years."
        }
      ]}
      processTitle="Our 4-Stage Content Publishing Engine"
      processSubtitle="From competitive keyword gap analysis to ranking optimization and lead capture."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-compass",
          title: "Content Strategy & Gap Audit",
          description: "We audit your competitors' top-ranking articles, uncover untargeted search queries, and build a 6-month topical publishing roadmap."
        },
        {
          step: "2",
          icon: "fa-solid fa-feather",
          title: "Expert Drafting & E-E-A-T Review",
          description: "Our experienced copywriters draft in-depth, original articles featuring data tables, clear formatting, and authoritative insights."
        },
        {
          step: "3",
          icon: "fa-solid fa-code-merge",
          title: "On-Page Optimization & Schema Injection",
          description: "We apply semantic headings, custom meta tags, internal links, FAQ schema, and optimized images before publishing."
        },
        {
          step: "4",
          icon: "fa-solid fa-rotate",
          title: "Rank Tracking & Content Refreshing",
          description: "We monitor keyword trajectory, update content based on algorithmic shifts, and continuously optimize for featured snippets."
        }
      ]}
      pricingTitle="SEO Content Retainers & Publishing Packages"
      pricingSubtitle="Consistent, high-caliber content production aligned with your organic pipeline targets."
      pricingTiers={[
        {
          name: "Content Blueprint & Strategy",
          price: "$450 USD",
          period: "/one-time",
          description: "Comprehensive 6-month topical roadmap and editorial calendar for internal teams to execute.",
          features: [
            "Complete Competitor Content Gap Audit",
            "Topical Authority Pillar & Cluster Map",
            "20 In-Depth Keyword Content Briefs with SERP Analysis",
            "Internal Linking Blueprint",
            "On-Page SEO Guidelines & E-E-A-T Checklist"
          ],
          ctaText: "Get Strategy Blueprint"
        },
        {
          name: "Growth Content Engine",
          price: "$950 USD",
          period: "/month",
          description: "End-to-end strategy, writing, on-page optimization, and publishing of 4 high-impact articles per month.",
          isPopular: true,
          features: [
            "4 In-Depth (1,500-2,500 word) Expert Articles / Month",
            "Full Keyword & Search Intent Research",
            "Custom Diagrams, Data Tables, & Formatted Lists",
            "Full On-Page Optimization & Schema Injection",
            "Strategic Internal Linking into Core Service Pages",
            "Monthly Keyword & Impression Growth Reporting"
          ],
          ctaText: "Start Growth Engine"
        },
        {
          name: "Scale Authority Retainer",
          price: "$1,800 USD",
          period: "/month",
          description: "Aggressive organic expansion for competitive industries requiring 8+ high-volume, long-form articles monthly.",
          features: [
            "8 Long-Form (2,000-3,500 word) Authoritative Articles / Month",
            "Topical Pillar Pages & Comprehensive eBooks/Guides",
            "Generative Engine Optimization (GEO) Formatting",
            "Quarterly Competitor Gap Re-Audits",
            "Continuous Historical Content Refreshing",
            "Dedicated Senior SEO Content Director"
          ],
          ctaText: "Scale Organic Dominance"
        }
      ]}
      faqs={[
        {
          question: "What makes Joy Digital's SEO content different from standard blog writing?",
          answer: "We don't write generic, AI-generated filler. We build interconnected topical clusters designed around commercial buyer intent, engineered with semantic schemas and direct answers that satisfy both human readers and search algorithms."
        },
        {
          question: "How many articles do I need to start seeing organic ranking gains?",
          answer: "Most businesses begin noticing ranking movement within 60 to 90 days after launching an initial topic cluster of 8 to 12 tightly interconnected articles targeting relevant long-tail search queries."
        },
        {
          question: "Do you write for technical and B2B industries?",
          answer: "Yes. Our team specializes in web engineering, software, SaaS, travel, medical, legal, and financial industries, translating complex technical concepts into clear, engaging, and high-converting copy."
        },
        {
          question: "Does your content get cited in Google AI Overviews and ChatGPT?",
          answer: "Yes. We format articles with clear question-and-answer pairs, entity-dense definitions, and data tables that LLMs frequently extract and cite when answering user prompts."
        },
        {
          question: "Do you publish the content directly onto our website?",
          answer: "Yes. We can upload, format, and publish articles directly to your Next.js markdown directory, WordPress, Ghost, or headless CMS with all meta tags and images fully configured."
        }
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/website-seo", label: "Complete Website SEO" },
        { href: "/technical-seo", label: "Technical SEO Services" },
        { href: "/on-page-seo", label: "On-Page SEO Services" },
        { href: "/seo-services", label: "Enterprise B2B SEO" },
        { href: "/ai-search-optimization", label: "Generative Engine Optimization (GEO)" },
        { href: "/blog", label: "Read Our SEO Knowledge Hub" }
      ]}
    />
  );
}
