import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Next.js Development Agency | Custom React Web Development",
  description: "Global Next.js development agency specializing in high-performance, serverless React applications, headless commerce, and sub-second web architecture.",
  keywords: [
    "next.js development agency",
    "nextjs development company",
    "react js development company",
    "headless web development",
    "serverless web architecture"
  ],
  alternates: {
    canonical: "https://joydigital.in/nextjs-development-agency",
  },
  openGraph: {
    type: "website",
    title: "Next.js Development Agency | Custom React Web Development | Joy Digital",
    description: "Global Next.js development agency specializing in high-performance, serverless React applications, headless commerce, and sub-second web architecture.",
    url: "https://joydigital.in/nextjs-development-agency",
    images: [
      {
        url: "https://joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Next.js Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Development Agency | Custom React Web Development | Joy Digital",
    description: "Global Next.js development agency specializing in high-performance, serverless React applications, headless commerce, and sub-second web architecture.",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Next.js & React Custom Web Development",
  "serviceType": "Next.js Web Engineering",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133"
  },
  "description": "Premium Next.js development agency delivering highly scalable, sub-second web applications for global B2B and enterprise clients.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1500",
    "highPrice": "10000",
    "offerCount": "2"
  }
};

export default function NextjsAgencyPage() {
  return (
    <ServicePageTemplate
      serviceName="Next.js Development Agency"
      heroTitle="Next.js Development Agency for Sub-Second Web Performance"
      heroSubtitle="We engineer blazing-fast, secure, and highly scalable React applications deployed on the Edge. Outperform your competitors with modern headless architecture."
      leadSource="Next.js Agency Page"
      heroCtaText="Consult a Next.js Expert"
      canonicalUrl="https://joydigital.in/nextjs-development-agency"
      overviewTitle="Why Enterprises are Migrating to Next.js"
      overviewContent={
        <div className="space-y-6">
          <p>
            Legacy monolithic platforms like WordPress and Magento are inherently slow, vulnerable to plugin hacks, and difficult to scale globally. The modern web demands <strong>sub-second load times</strong> and dynamic edge delivery.
          </p>
          <p>
            As a specialized <strong>Next.js development agency</strong>, Joy Digital builds decoupled frontend architectures. By separating your UI from your backend systems (Headless CMS, CRMs, APIs), we create platforms that are infinitely scalable and completely unhackable.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Core Web Vitals Obsession</h3>
          <p>
            Google now ranks websites heavily based on Core Web Vitals. Our Next.js engineering guarantees a 95+ score on mobile through static site generation (SSG), advanced image optimization, and server-side rendering (SSR) delivered via global CDNs.
          </p>
        </div>
      }
      benefitsTitle="Next-Gen Architecture Advantages"
      benefitsSubtitle="The technical superiority of a properly engineered Next.js application."
      benefits={[
        {
          icon: "fa-solid fa-gauge-high",
          title: "Sub-Second Edge Rendering",
          description: "Pages are pre-rendered and served from Vercel or AWS Edge nodes closest to the user.",
        },
        {
          icon: "fa-solid fa-shield-virus",
          title: "Zero-Vulnerability Security",
          description: "Without a connected database or PHP plugins, your frontend is virtually immune to standard web attacks.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Technical SEO Dominance",
          description: "Server-side rendering ensures Googlebot indexes your dynamic content instantly and perfectly.",
        },
        {
          icon: "fa-solid fa-code-merge",
          title: "Headless CMS Integration",
          description: "Seamlessly connect with Sanity, Contentful, or Strapi for total editorial control without layout locking.",
        },
        {
          icon: "fa-solid fa-cart-shopping",
          title: "Headless E-Commerce",
          description: "Integrate Shopify Plus or Swell APIs to build custom shopping experiences that convert faster.",
        },
        {
          icon: "fa-solid fa-laptop-code",
          title: "100% IP Ownership",
          description: "Clean, strictly-typed TypeScript repositories that your internal engineering team can inherit easily.",
        },
      ]}
      processTitle="Our Next.js Engineering Process"
      processSubtitle="Strict TypeScript conventions and automated CI/CD pipelines."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-sitemap",
          title: "Architecture & Blueprinting",
          description: "We map out your API dependencies, data fetching strategies (SSR vs SSG), and caching layers.",
        },
        {
          step: "2",
          icon: "fa-brands fa-react",
          title: "React Component Library",
          description: "Building accessible, reusable Tailwind CSS components based on your design system.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Strict TypeScript Sprints",
          description: "Agile development sprints ensuring type safety and robust error boundary handling.",
        },
        {
          step: "4",
          icon: "fa-solid fa-cloud-arrow-up",
          title: "Edge Deployment & CI/CD",
          description: "Automated testing and deployment pipelines to Vercel or AWS Amplify with zero downtime.",
        },
      ]}
      pricingTitle="Next.js Engineering Investment"
      pricingSubtitle="Hire a specialized agency, not generalist freelancers."
      pricingTiers={[
        {
          name: "Next.js MVP App",
          price: "$1,500",
          period: "starting rate",
          description: "For startups needing a fast, secure marketing site or MVP web application.",
          features: [
            "Next.js App Router Architecture",
            "Tailwind CSS / UI Components",
            "Basic Headless CMS Setup",
            "Edge Deployment Configuration",
            "90+ Performance Guarantee",
          ],
          ctaText: "Discuss MVP Project",
        },
        {
          name: "Enterprise Headless Build",
          price: "Custom",
          period: "scoping",
          description: "For established businesses migrating away from legacy monoliths to headless architecture.",
          isPopular: true,
          features: [
            "Complex Microservices Integration",
            "Advanced Sanity/Contentful CMS",
            "Global Edge Caching Strategy",
            "Strict TypeScript & Jest Testing",
            "Full Code IP Transfer",
          ],
          ctaText: "Book Architecture Call",
        },
      ]}
      faqs={[
        {
          question: "What is Next.js and why should my company use it?",
          answer: "Next.js is a React framework that allows for server-side rendering and static site generation. It is used by major tech companies because it creates the fastest, most SEO-friendly web experiences possible, drastically outperforming traditional platforms like WordPress.",
        },
        {
          question: "Can you migrate our existing WordPress site to Next.js?",
          answer: "Yes, we specialize in headless migrations. We can keep WordPress as your backend CMS (via GraphQL) while building a blazing-fast Next.js frontend, giving you the best of both worlds.",
        },
        {
          question: "Do you hand over the source code?",
          answer: "Absolutely. We provide 100% intellectual property rights and full access to the Git repository upon project completion. Our code is clean and typed so your internal team can easily take over.",
        },
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/custom-website-development", label: "Custom Website Development" },
        { href: "/web-design-services", label: "UI/UX Web Design" },
        { href: "/ecommerce-website-development", label: "Headless E-Commerce Development" },
      ]}
    />
  );
}
