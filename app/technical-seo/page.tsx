import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Technical SEO Services & Core Web Vitals Optimization",
  description:
    "Expert Technical SEO services by Joy Digital. JavaScript SEO, Next.js architecture, Core Web Vitals (LCP, INP, CLS), crawl budget, dynamic XML sitemaps, and rich JSON-LD schemas.",
  alternates: {
    canonical: "https://www.joydigital.in/technical-seo",
  },
  openGraph: {
    type: "website",
    title: "Technical SEO Services & Core Web Vitals | Joy Digital",
    description:
      "Eliminate crawl errors, resolve JavaScript rendering bottlenecks, and achieve sub-second Core Web Vitals with our engineering-first Technical SEO services.",
    url: "https://www.joydigital.in/technical-seo",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Technical SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Services & Core Web Vitals | Joy Digital",
    description:
      "Engineering-first Technical SEO audits, JavaScript rendering fixes, and sub-second Core Web Vitals optimization.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical SEO Services",
  "serviceType": "Technical Search Engine Optimization & Core Web Vitals",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "url": "https://www.joydigital.in"
  },
  "description":
    "Joy Digital engineers sub-second crawlable websites, resolving JavaScript rendering blocks, Core Web Vitals bottlenecks, indexation leaks, and structured schema graphs.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "400",
    "highPrice": "1500",
    "offerCount": "3"
  }
};

export default function TechnicalSEOPage() {
  return (
    <ServicePageTemplate
      serviceName="Technical SEO"
      canonicalUrl="https://www.joydigital.in/technical-seo"
      heroTitle="Technical SEO Services & Core Web Vitals Architecture"
      heroSubtitle="Transform your website from an indexing bottleneck into an ultra-fast, search engine-accessible powerhouse. We resolve JavaScript rendering blocks, eliminate crawl waste, and guarantee sub-second Core Web Vitals on Next.js and modern stacks."
      leadSource="Technical SEO Landing Page"
      overviewTitle="Engineering-Led Technical SEO for High-Growth Websites"
      overviewContent={
        <div className="space-y-6">
          <p>
            Modern search engine algorithms prioritize websites that load instantly, render cleanly, and provide bots with clear architectural signals. If your website suffers from render-blocking JavaScript, bloated DOM elements, or unresolved canonical redirect chains, search engines will throttle your crawl budget and deprioritize your rankings regardless of how good your content is.
          </p>
          <p>
            At <strong>Joy Digital</strong>, we approach technical SEO from a software engineering perspective. We don't just export automated tool reports with generic recommendations; our engineers diagnose and write production-grade code to fix indexing loops, eliminate JavaScript hydration delays, optimize server-side rendering (SSR/SSG), and inject advanced JSON-LD structured schema graphs.
          </p>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">What We Diagnose &amp; Engineer</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Core Web Vitals Pass Guarantee:</strong> LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>JavaScript SEO:</strong> Clean SSR/SSG rendering for Googlebot and Bingbot</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Crawl Budget Optimization:</strong> Log file analysis &amp; duplicate URL pruning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Dynamic XML Sitemaps &amp; Robots Directives:</strong> Instant discovery &amp; indexing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Connected Schema Graph:</strong> Rich snippets, breadcrumbs, &amp; organization entities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>International Hreflang Configuration:</strong> Multi-region &amp; multi-lingual mapping</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Why Next.js &amp; Modern Frameworks Need Specialized Technical SEO</h3>
          <p>
            Client-side rendered React applications often present empty HTML shells to search crawlers, resulting in delayed indexing or missed keyword context. We configure hybrid pre-rendering, edge caching, and incremental static regeneration (ISR) so that every page delivers 100% crawlable, semantic HTML to search engines within milliseconds.
          </p>
        </div>
      }
      benefitsTitle="Why Choose Our Engineering-Driven Technical SEO"
      benefitsSubtitle="We fix the root code issues that traditional digital agencies leave unresolved."
      benefits={[
        {
          icon: "fa-solid fa-gauge-high",
          title: "Sub-Second Core Web Vitals",
          description: "We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) directly in the source code to achieve 95+ mobile Lighthouse scores."
        },
        {
          icon: "fa-solid fa-diagram-project",
          title: "JavaScript & Hydration Fixes",
          description: "We eliminate heavy JavaScript bundles and third-party execution lags, ensuring Googlebot indexes your entire page content on the first crawl wave."
        },
        {
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Server Log & Crawl Diagnostics",
          description: "We analyze server access logs to identify where search engine bots are wasting crawl budget, eliminating 4xx errors, infinite loops, and orphaned pages."
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Rich JSON-LD Schema Architecture",
          description: "We implement multi-layered schema markup—Organization, Service, FAQPage, Article, and Product—enabling search engines to understand your topical entities and award rich snippets."
        },
        {
          icon: "fa-solid fa-route",
          title: "Canonical & Redirect Mapping",
          description: "We untangle complicated redirect chains, eliminate duplicate content parameter URLs, and establish rock-solid canonical tag hierarchies."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Migration Risk Protection",
          description: "Protect your organic ranking equity during domain transfers, CMS overhauls, or migrations from WordPress to Next.js with meticulous 1:1 redirect tables."
        }
      ]}
      processTitle="Our 4-Phase Technical SEO Execution"
      processSubtitle="A proven roadmap from deep diagnostic crawl to production deployment."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Deep Technical Site Audit",
          description: "We perform full-depth crawls, analyze server logs, evaluate indexation coverage in Google Search Console, and identify all blocking bottlenecks."
        },
        {
          step: "2",
          icon: "fa-solid fa-code",
          title: "Code-Level Engineering",
          description: "Our developers directly patch performance bottlenecks, optimize asset pipelines, compress media, and fix semantic HTML structures."
        },
        {
          step: "3",
          icon: "fa-solid fa-sitemap",
          title: "Schema & Architecture Structuring",
          description: "We deploy unified JSON-LD schema graphs, streamline sitemaps, configure robots.txt, and implement clean URL taxonomies."
        },
        {
          step: "4",
          icon: "fa-solid fa-chart-line",
          title: "Validation & Continuous Monitoring",
          description: "We submit live validation requests in Search Console, monitor indexation velocity, and ensure ongoing Core Web Vitals compliance."
        }
      ]}
      pricingTitle="Technical SEO Packages & Engineering Sprints"
      pricingSubtitle="Select the technical package tailored to your website architecture and scale."
      pricingTiers={[
        {
          name: "Technical SEO Sprint",
          price: "$400 USD",
          period: "/one-time",
          description: "Ideal for small-to-mid business sites suffering from Core Web Vitals issues, indexation drops, or crawl errors.",
          features: [
            "Comprehensive 120-Point Technical Crawl Audit",
            "Core Web Vitals Diagnosis & Action Plan",
            "Robots.txt & Dynamic XML Sitemap Optimization",
            "Canonical & 404/Redirect Chain Resolution",
            "Essential JSON-LD Schema (Organization & Service)",
            "30 Days Post-Implementation Monitoring"
          ],
          ctaText: "Start Technical Sprint"
        },
        {
          name: "Full Code & Performance Overhaul",
          price: "$950 USD",
          period: "/one-time",
          description: "Complete hands-on engineering overhaul for React, Next.js, or complex e-commerce platforms requiring 90+ Lighthouse.",
          isPopular: true,
          features: [
            "Everything in Technical Sprint",
            "Direct Code-Level Core Web Vitals Implementation",
            "JavaScript Hydration & Bundle Splitting Optimization",
            "Advanced Connected JSON-LD Schema Graph",
            "Server Log File Crawl Budget Analysis",
            "Google Search Console Indexation Cleanup",
            "60 Days Performance Guarantee & Re-crawl Tracking"
          ],
          ctaText: "Get Performance Overhaul"
        },
        {
          name: "Enterprise Technical Retainer",
          price: "$1,500 USD",
          period: "/month",
          description: "Ongoing technical SEO engineering, continuous monitoring, and edge performance optimization for high-scale platforms.",
          features: [
            "Continuous Weekly Log File & Crawl Monitoring",
            "Proactive Core Web Vitals Regression Prevention",
            "New Feature & Landing Page Pre-Deployment Audits",
            "Multi-Regional Hreflang & Subdirectory Management",
            "Dedicated Full-Stack Technical SEO Engineer",
            "Priority Slack/Jira Collaboration"
          ],
          ctaText: "Retain Engineering Partner"
        }
      ]}
      faqs={[
        {
          question: "What is Technical SEO and why is it important?",
          answer: "Technical SEO refers to optimizing the underlying code, server architecture, and site performance so search engine bots can crawl, render, and index your web pages without friction. Without solid technical SEO, even the best content may remain invisible in search rankings."
        },
        {
          question: "How do Core Web Vitals affect my Google rankings?",
          answer: "Core Web Vitals are official Google ranking signals measuring page speed, responsiveness, and visual stability (LCP, INP, and CLS). Websites passing all three metrics receive ranking boosts and experience significantly lower bounce rates and higher conversion rates."
        },
        {
          question: "Can you fix Technical SEO issues on WordPress, Shopify, and Next.js?",
          answer: "Yes. While we specialize in high-performance Next.js and headless architectures, we routinely optimize WordPress, WooCommerce, Shopify, Webflow, and custom PHP websites, resolving plugin bloat, database query delays, and script loading issues."
        },
        {
          question: "What is the difference between Technical SEO and On-Page SEO?",
          answer: "Technical SEO focuses on backend code, crawlability, indexing, site speed, and structured data markup. On-Page SEO focuses on visible page elements like headings, keywords, meta tags, search intent alignment, and content formatting."
        },
        {
          question: "How quickly do rankings improve after technical SEO fixes?",
          answer: "Once technical errors (like noindex tags, crawl blocks, or redirect loops) are resolved and resubmitted to Google, re-crawling typically takes between 3 to 14 days, often resulting in immediate indexation and positive ranking recoveries."
        }
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/website-seo", label: "Complete Website SEO" },
        { href: "/on-page-seo", label: "On-Page SEO Services" },
        { href: "/seo-content", label: "SEO Content Strategy" },
        { href: "/seo-services", label: "Enterprise B2B SEO" },
        { href: "/ai-search-optimization", label: "Generative Engine Optimization (GEO)" },
        { href: "/wordpress-to-nextjs-migration", label: "WordPress to Next.js Migration" },
        { href: "/free-website-audit", label: "Free Website & SEO Audit" }
      ]}
    />
  );
}
