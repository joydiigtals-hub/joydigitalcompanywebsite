import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { generatePageSeo } from "@/lib/seoEngine";
import { PRICING } from "@/config/pricing";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await generatePageSeo("/dynamic-website-development");
  return {
    ...seoData.metadata,
  };
}

export default async function DynamicWebDevPage() {
  const seoData = await generatePageSeo(
    "/dynamic-website-development",
    "Dynamic Website Development Services & Custom CMS | Joy Digital",
    "Build high-speed, database-driven dynamic websites with custom admin panels, real-time API sync, and secure PostgreSQL/Supabase backends."
  );

  return (
    <>
      <ServicePageTemplate
        serviceName="Dynamic Website Development"
        heroTitle={seoData.pageMapping?.h1 || "Dynamic Website Development Services with Custom Admin Controls"}
        heroSubtitle="Build high-performance, database-driven dynamic web applications equipped with custom CMS dashboards, real-time API sync, and fast-loading page performance."
        leadSource="Dynamic Website Development Page"
        heroCtaText="Request a Dynamic Web Quote"
        canonicalUrl="https://joydigital.in/dynamic-website-development"
        overviewTitle="Database-Driven Dynamic Architecture & Real-Time Content Systems"
        overviewContent={
          <div className="space-y-6">
            <p>
              Modern businesses need websites that adapt to customer interactions, inventory changes, and regular content updates. Joy Digital builds database-driven web platforms using Next.js, React, Node.js, and PostgreSQL or Supabase backends.
            </p>
            <p>
              Every build includes a custom content management system (CMS) or an integration with your existing CRM, inventory, or booking tools. You get full control over your content through an easy-to-use admin panel, without needing to touch code for daily updates.
            </p>
          </div>
        }
        benefitsTitle="Why Choose Custom Dynamic Web Architecture?"
        benefitsSubtitle="Empower your team with intuitive content management and sub-second database query execution."
        benefits={[
          {
            icon: "fa-solid fa-[#7C3AED] fa-database",
            title: "Dynamic Website Development",
            description: "PostgreSQL & Supabase architectures configured with parameterized queries and strict type-safety.",
          },
          {
            icon: "fa-solid fa-sliders",
            title: "Custom Admin Control Dashboards",
            description: "Tailor-made CMS panels allowing non-technical editors to update content, images, and services instantly.",
          },
          {
            icon: "fa-solid fa-bolt",
            title: "Incremental Static Regeneration (ISR)",
            description: "Pages update dynamically in the background without requiring full rebuilds or causing slow database bottlenecks.",
          },
          {
            icon: "fa-solid fa-shield-halved",
            title: "Role-Based Access Control (RBAC)",
            description: "Secure user authentication layers (JWT / OAuth 2.0) with fine-grained permission models.",
          },
        ]}
        processTitle="4-Step Dynamic Web Development Process"
        processSubtitle="From database schema mapping to live production release."
        processSteps={[
          {
            step: "1",
            icon: "fa-solid fa-[#7C3AED] fa-sitemap",
            title: "Schema & Data Modeling",
            description: "We model relational tables, user entities, and API endpoints.",
          },
          {
            step: "2",
            icon: "fa-solid fa-code",
            title: "Admin Panel & API Build",
            description: "We engineer custom dashboard controls and secure API endpoints.",
          },
          {
            step: "3",
            icon: "fa-solid fa-vial",
            title: "Security & Query Testing",
            description: "We audit database indexing, rate-limiting, and sanitized query executions.",
          },
          {
            step: "4",
            icon: "fa-solid fa-rocket",
            title: "Deployment & CMS Handover",
            description: "We deploy live on Vercel/AWS and provide full admin dashboard training.",
          },
        ]}
        pricingTitle="Dynamic Website Development Packages"
        pricingSubtitle="Flat-rate custom quotes based on admin controls and database complexity."
        pricingTiers={[
          {
            name: "Standard Dynamic Platform",
            price: `Starts from ${PRICING.dynamicStandard.inr}`,
            period: "one-time",
            description: "Ideal for businesses needing a functional CRM, booking engine, or basic database integration.",
            features: [
              "Up to 15 Custom Application Pages",
              "Relational Database Integration",
              "Secure Admin Control Dashboard",
              "Basic API Integrations (Payments/SMS)",
              "Dynamic User Authentication",
            ],
            ctaText: "Start Dynamic Project",
          },
          {
            name: "Enterprise Custom Web App",
            price: "Custom Quote",
            period: "per project",
            description: "Complex multi-tenant portals, custom user roles, and advanced API middleware.",
            isPopular: true,
            features: [
              "Advanced Database & Relational Schemas",
              "Role-Based Access Control (RBAC)",
              "Real-time API Sync (CRMs/Stripe)",
              "Dedicated Technical Lead",
              "100% IP Code Handover",
            ],
            ctaText: "Request Enterprise Quote",
          },
        ]}
        faqs={seoData.pageMapping?.faq_schema || [
          {
            question: "What can I manage through the dynamic website admin panel?",
            answer: "You can update text, upload images, manage product or service listings, publish blog posts, and review customer enquiries. We tailor the dashboard to your daily workflow so you only see the controls you need."
          },
          {
            question: "How does a custom dynamic website compare to a CMS like WordPress?",
            answer: "A custom Next.js dynamic site is faster, has a smaller attack surface, and is built around your exact workflow. WordPress can work well for simple blogs, but plugin-heavy setups often slow down and need frequent security updates. We help you choose based on your budget and requirements."
          }
        ]}
        crossLinks={[
          { href: "/custom-website-development", label: "Custom Web Dev" },
          { href: "/website-development", label: "Web Services" },
          { href: "/website-for-real-estate", label: "Real Estate Portals" },
        ]}
      />
    </>
  );
}
