import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Best Website Development Company in Madurai",
  description: "Build sub-second, custom websites with Joy Digital, a leading website development company in Madurai. Expert Next.js, React & high-converting business portals.",
  keywords: [
    "best website development company in madurai",
    "website development company in madurai",
    "web development services in madurai",
    "custom website development in madurai",
    "web development company in madurai",
    "nextjs development madurai",
    "react web developers madurai",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/website-development-company-madurai",
  },
  openGraph: {
    title: "Best Website Development Company in Madurai | Joy Digital",
    description: "Build sub-second, custom websites with Joy Digital, a leading website development company in Madurai. Expert Next.js, React & high-converting business portals.",
    url: "https://www.joydigital.in/website-development-company-madurai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Madurai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Madurai | Joy Digital",
    description: "Build sub-second, custom websites with Joy Digital, a leading website development company in Madurai. Expert Next.js, React & high-converting business portals.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function WebDevMadurai() {
  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Website%20Development%20in%20Madurai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with a Madurai Web Developer on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-base" />
        <span>WhatsApp Consultation</span>
      </a>
      <Link
        href="/free-website-audit"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <i className="fa-solid fa-code text-xs" />
        <span>Book Free Web Audit</span>
      </Link>
    </div>
  );

  return (
    <ServicePageTemplate
      serviceName="Website Development Madurai"
      heroTitle="Website Development Company in Madurai"
      heroSubtitle="Build high-speed, custom React and Next.js web applications tailored for Madurai businesses. We engineer sub-1.5s websites that bypass legacy CMS bloat, protect user data, and convert visitors into active customers."
      leadSource="Website Development Madurai Landing Page"
      heroCtaText="Claim Free Project Quote"
      heroActions={heroActions}
      canonicalUrl="https://www.joydigital.in/website-development-company-madurai"
      overviewTitle="High-Performance React & Next.js Web Development in Madurai"
      overviewContent={
        <div className="space-y-6 text-justify">
          <p>
            In Madurai’s thriving commercial ecosystem—from manufacturing units in Kappalur and Nagari to retail showrooms near the Meenakshi Amman Temple, private hospitals in Anna Nagar, and commercial agencies across K.Pudur and Kalavasal—a slow, generic website costs your business potential customers every day. Joy Digital is recognized as a premier <strong>website development company in Madurai</strong>, engineering modern, lightweight React and Next.js websites that load in under 1.5 seconds on mobile 4G/5G connections.
          </p>
          <p>
            Many businesses struggle with outdated templates, bloated page builders, and vulnerable WordPress plugins that slow down loading speeds and compromise security. When you partner with Joy Digital for <strong>custom website development in Madurai</strong>, your platform is coded from the ground up using clean, semantic architecture. We eliminate database bottlenecks, achieve 95+ Core Web Vitals scores, and integrate seamless conversion pathways that connect website visitors directly with your sales desk.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Why Custom Next.js Engineering Outperforms Legacy WordPress
          </h3>
          <p>
            Traditional content management systems rely on heavy server databases that query information on every single page load, creating frustrating delays. Our custom Next.js builds pre-render HTML pages and distribute them across lightning-fast global Content Delivery Networks (CDNs). This ensures instant Time to First Byte (TTFB), complete protection against database injection attacks, and the ability to handle traffic spikes effortlessly without crashing your server.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Sub-1.5 Second Speeds & Mobile-First Architecture
          </h3>
          <p>
            Over 75% of online searches in Tamil Nadu originate on smartphones. If your website exhibits visual layout shifts (CLS), overlapping elements, or slow-rendering images, visitors leave within seconds. As an engineering-driven provider of <strong>web development services in Madurai</strong>, we build mobile-first responsive interfaces using Tailwind CSS. Every button, navigation bar, and contact form is thoroughly tested for intuitive touch interactions across all screen sizes.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Built-in Technical SEO & Local Schema Integration
          </h3>
          <p>
            A high-performance website must be easily discoverable on Google. We bake technical SEO best practices into the core code: setting clean canonical tags, generating automated XML sitemaps, configuring OpenGraph social cards, and injecting structured LocalBusiness and Service JSON-LD schemas. This helps search engines recognize your location authority in Madurai and index your service pages faster.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Direct WhatsApp Lead Capture & Higher Conversion Rates
          </h3>
          <p>
            Websites should be revenue-generating systems, not static brochures. We integrate click-to-call buttons, verified lead forms, and direct WhatsApp chat triggers with custom event tracking in Google Analytics 4 (GA4). This makes it frictionless for prospective customers in Madurai to request pricing or book consultations with a single tap.
          </p>
        </div>
      }
      benefitsTitle="Why Choose Our Madurai Development Team?"
      benefitsSubtitle="We build speed-optimized, modern digital assets designed to convert visitors."
      benefits={[
        {
          icon: "fa-solid fa-bolt",
          title: "Sub-1.5s Load Speeds",
          description: "Our serverless static builds load almost instantly, preventing visitor drop-offs and satisfying Google's Core Web Vitals.",
        },
        {
          icon: "fa-solid fa-code",
          title: "Custom React & Next.js",
          description: "Handcrafted frontend code tailored strictly to your company branding, workflows, and commercial requirements.",
        },
        {
          icon: "fa-solid fa-mobile-screen",
          title: "100% Mobile Responsive",
          description: "Flawlessly rendered across smartphones, tablets, and desktops with smooth navigation and accessible touch controls.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-location",
          title: "Pre-Configured Local SEO",
          description: "Geotagged local business schemas, semantic heading hierarchies, and clean URL paths built right into the code.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Bank-Grade Serverless Security",
          description: "Eliminate vulnerable third-party plugins and database exposure with secure SSL certificates and static hosting.",
        },
        {
          icon: "fa-solid fa-headset",
          title: "Direct Developer Support",
          description: "Direct WhatsApp and phone access to our engineering team for domain configurations, content updates, and maintenance.",
        },
      ]}
      processTitle="Our Structured Website Delivery Framework"
      processSubtitle="We design, code, test, and launch fast-loading React web platforms in four streamlined phases."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-compass-drafting",
          title: "Discovery & Wireframe Strategy",
          description: "We map out target search keywords, page architecture, user journeys, and wireframe layouts aligned with your business goals.",
        },
        {
          step: "2",
          icon: "fa-solid fa-code",
          title: "Next.js & React Coding Sprints",
          description: "We write clean, semantic React code styled with lightweight modern CSS, ensuring maximum performance and zero bloat.",
        },
        {
          step: "3",
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Structured Schema & SEO Setup",
          description: "We configure LocalBusiness, Service, and FAQ schemas to prepare your website for seamless Googlebot indexing.",
        },
        {
          step: "4",
          icon: "fa-solid fa-rocket",
          title: "Speed Audits & Live Launch",
          description: "We run Lighthouse Core Web Vitals tests, configure GA4 lead tracking, connect your custom domain, and deploy to global CDNs.",
        },
      ]}
      pricingTitle="Clear, Milestone-Based Development Pricing"
      pricingSubtitle="Select the plan that fits your business scale. No hidden fees or surprise maintenance lock-ins."
      pricingTiers={[
        {
          name: "Starter Site",
          price: "₹25,000",
          period: "one-time",
          description: "Ideal for local advisors, growing retail shops, and professional business portfolios in Madurai.",
          features: [
            "1-5 Custom Responsive Pages",
            "100% Mobile Responsive Layout",
            "Direct WhatsApp & Phone CTA Integration",
            "Lighthouse Sub-1.5s Speed Optimization",
            "Secure Contact Inquiry Form Setup",
            "Google Maps & Local Schema Embed",
          ],
          ctaText: "Select Starter Plan",
        },
        {
          name: "Professional Growth",
          price: "₹45,000",
          period: "one-time",
          description: "Best for healthcare clinics, regional resorts, educational institutions, and multi-service companies.",
          isPopular: true,
          features: [
            "Up to 10 Custom Next.js Pages",
            "Complete On-Page SEO Architecture",
            "Local Schema.org Structured Data Injection",
            "Google Analytics 4 & Custom Event Tracking",
            "1 Year Hosting Setup & DNS Configuration",
            "Priority Developer Coordination & Support",
          ],
          ctaText: "Select Growth Plan",
        },
        {
          name: "Enterprise Custom",
          price: "Custom Quote",
          description: "Best for complex e-commerce stores, custom booking platforms, and database-driven portals.",
          features: [
            "Unlimited Custom Frontend Pages",
            "Headless E-commerce or Portal Integration",
            "Custom API & Database Configurations",
            "Advanced Funnel & Lead Routing Setup",
            "Dedicated Development Coordination",
            "Ongoing Maintenance & Scalability Support",
          ],
          ctaText: "Get Custom Quote",
        },
      ]}
      faqs={[
        {
          question: "How long does custom website development take in Madurai?",
          answer: "A standard custom Next.js business website typically takes 7 to 14 business days from wireframe approval to live launch. Complex enterprise platforms, multi-language websites, or custom database portals average 3 to 5 weeks.",
        },
        {
          question: "Why should Madurai businesses choose Next.js over traditional WordPress?",
          answer: "While WordPress is popular, it relies on bloated plugins and heavy database queries that slow down page loads and leave sites vulnerable to security breaches. Next.js delivers sub-second speeds, automated mobile responsiveness, built-in Core Web Vitals optimization, and serverless security that Google rewards with better search rankings.",
        },
        {
          question: "Can you migrate an existing WordPress website in Madurai to Next.js?",
          answer: "Yes! We regularly migrate outdated WordPress, PHP, and Wix websites to Next.js. We preserve 100% of your existing URLs and organic search rankings with precise 301 redirects, modernize your visual layout, and slash loading speeds under 1.5 seconds.",
        },
        {
          question: "Which areas in Madurai do you serve?",
          answer: "We work with businesses across Madurai, including Anna Nagar, KK Nagar, K.Pudur, Tallakulam, Sellur, Kalavasal, Villapuram, Kappalur, and surrounding industrial belts. We provide seamless remote coordination via WhatsApp, phone, and video calls.",
        },
        {
          question: "Do you offer website maintenance and support after launch?",
          answer: "Yes, every project includes 30 days of complimentary post-launch support covering domain configurations, SSL renewals, minor layout adjustments, and performance monitoring. We also provide flexible ongoing maintenance packages.",
        },
      ]}
      crossLinks={[
        { href: "/website-design-company-madurai", label: "Web Design Madurai" },
        { href: "/seo-services-madurai", label: "SEO Services Madurai" },
        { href: "/free-website-audit", label: "Free Website Audit" },
        { href: "/case-studies", label: "Client Case Studies" },
      ]}
    />
  );
}
