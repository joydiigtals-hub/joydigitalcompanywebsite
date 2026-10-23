import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Best Website Design Company in Madurai",
  description: "Partner with a leading website design company in Madurai. Joy Digital crafts modern, responsive website designs and UI/UX layouts that turn visitors into customers.",
  keywords: [
    "best website design company in madurai",
    "website design company in madurai",
    "website designers in madurai",
    "responsive website design in madurai",
    "web design services in madurai",
    "ui ux design madurai",
    "web designers in madurai",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/website-design-company-madurai",
  },
  openGraph: {
    title: "Best Website Design Company in Madurai | Joy Digital",
    description: "Partner with a leading website design company in Madurai. Joy Digital crafts modern, responsive website designs and UI/UX layouts that turn visitors into customers.",
    url: "https://www.joydigital.in/website-design-company-madurai",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Website Design Company in Madurai - Joy Digital",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Design Company in Madurai | Joy Digital",
    description: "Partner with a leading website design company in Madurai. Joy Digital crafts modern, responsive website designs and UI/UX layouts that turn visitors into customers.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function WebDesignMadurai() {
  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Website%20Design%20in%20Madurai%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Chat with a Madurai Web Designer on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-base" />
        <span>WhatsApp Consultation</span>
      </a>
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <i className="fa-solid fa-layer-group text-xs" />
        <span>View Case Studies</span>
      </Link>
    </div>
  );

  return (
    <ServicePageTemplate
      serviceName="Website Design Madurai"
      heroTitle="Website Design Company in Madurai"
      heroSubtitle="Stand out with modern, mobile-first responsive web design built to convert. As a dedicated website design company in Madurai, we create bespoke UI/UX layouts that elevate local brand credibility and drive user engagement."
      leadSource="Website Design Madurai Landing Page"
      heroCtaText="Claim Free Design Quote"
      heroActions={heroActions}
      canonicalUrl="https://www.joydigital.in/website-design-company-madurai"
      overviewTitle="Custom Website Design & Branding Solutions in Madurai"
      overviewContent={
        <div className="space-y-6 text-justify">
          <p>
            In today&apos;s competitive digital environment, your website is frequently the first impression a prospective client has of your business in Madurai. Whether you operate a luxury boutique, a multi-specialty healthcare center in Anna Nagar, an educational academy in KK Nagar, or a trading company in Simmakkal, a generic template with cluttered elements makes your business look dated. Joy Digital is a premier <strong>website design company in Madurai</strong>, crafting elegant, bespoke visual interfaces designed to captivate visitors and establish instant credibility.
          </p>
          <p>
            As specialized <strong>website designers in Madurai</strong>, we avoid sluggish drag-and-drop builders that produce bloated code. We design clean, conversion-centered wireframes and transform them into pixel-perfect, mobile-friendly websites. By pairing human-centered UI/UX principles with modern design aesthetics, our layouts guide visitors naturally toward submitting inquiries, booking consultations, or messaging your team directly on WhatsApp.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Bespoke UI/UX Design Tailored to Your Brand
          </h3>
          <p>
            Every business has a unique story and value proposition. We do not use cookie-cutter templates. Our design process begins with understanding your brand identity, color palette, typography, and target customer psychology. We design intuitive navigation menus, clean typography scales, and high-impact hero banners that communicate professionalism and trustworthiness from the very first second.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Mobile-First Responsive Web Design for Local Buyers
          </h3>
          <p>
            More than 70% of potential buyers in Madurai browse websites on smartphones while on the go. If a website forces users to pinch-to-zoom, hides key phone numbers, or shifts visually during scrolling, bounce rates skyrocket. We craft <strong>responsive website design in Madurai</strong> tested meticulously across modern screen resolutions—ensuring seamless navigation, readable text, and tap-friendly buttons on mobile, tablet, and desktop viewports.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            High-Speed Design That Loads in Under 1.5 Seconds
          </h3>
          <p>
            Beautiful design should never come at the expense of page speed. Bloated graphics, uncompressed banners, and heavy font libraries slow down user experience and hurt Google rankings. We optimize every graphic asset with modern WebP compression, lazy-load below-the-fold media, and code lightweight layouts that load under 1.5 seconds even on standard mobile data connections.
          </p>

          <h3 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">
            Conversion-Focused Pathways & Direct Lead Capture
          </h3>
          <p>
            Effective web design is engineered to drive business action. We position prominent click-to-call buttons, sticky WhatsApp widgets, and streamlined contact forms in high-visibility focal points. Visitors can reach out with minimal friction, transforming passive browsing sessions into qualified commercial inquiries.
          </p>
        </div>
      }
      benefitsTitle="Why Choose Our Madurai Web Design Team?"
      benefitsSubtitle="We deliver custom visual designs that combine aesthetics, speed, and lead generation."
      benefits={[
        {
          icon: "fa-solid fa-wand-magic-sparkles",
          title: "Bespoke UI/UX Designs",
          description: "Unique visual layouts crafted strictly to reflect your brand identity, color schemes, and target market preferences.",
        },
        {
          icon: "fa-solid fa-mobile-screen",
          title: "100% Mobile Responsive",
          description: "Fluid, flexible layouts thoroughly tested on iOS, Android, tablets, and wide desktop screens for flawless rendering.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Sub-1.5s Speed Optimization",
          description: "Clean code and automated WebP asset compression ensure fast loading without compromising visual richness.",
        },
        {
          icon: "fa-solid fa-location-dot",
          title: "Local Schema Injection",
          description: "Geotagged local business metadata and structured tags pre-configured to boost your regional Google ranking authority.",
        },
        {
          icon: "fa-solid fa-lock",
          title: "Secure Serverless Architecture",
          description: "Clean frontend builds deployed with free SSL certificates and zero database vulnerability exposure.",
        },
        {
          icon: "fa-solid fa-comments",
          title: "Direct WhatsApp CTA Sync",
          description: "Integrated click-to-chat triggers and mobile call buttons direct potential buyers straight to your phone line.",
        },
      ]}
      processTitle="How We Design Your Website"
      processSubtitle="A proven four-phase creative workflow from wireframe drafts to live launch."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-pen-nib",
          title: "Wireframe Drafting",
          description: "We map page layout structures, content hierarchy, keyword targets, and navigation paths for optimal user flow.",
        },
        {
          step: "2",
          icon: "fa-solid fa-palette",
          title: "Visual Design Layouts",
          description: "We style custom mockups incorporating your brand guidelines, typography, imagery, and interactive elements.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Semantic Next.js Coding",
          description: "We transform approved visual designs into lightweight, clean, and accessible React and Next.js code elements.",
        },
        {
          step: "4",
          icon: "fa-solid fa-rocket",
          title: "Speed Check & Launch",
          description: "We perform mobile responsiveness checks, verify Lighthouse speed scores, and deploy your site to global servers.",
        },
      ]}
      pricingTitle="Flat-Rate Web Design Packages"
      pricingSubtitle="Clear, milestone-based pricing with zero hidden fees or unexpected developer charges."
      pricingTiers={[
        {
          name: "Standard Plan",
          price: "₹25,000",
          period: "one-time",
          description: "Perfect for local service providers, clinic listings, consultants, and retail stores in Madurai.",
          features: [
            "1-5 Custom Responsive Pages",
            "100% Mobile Responsive Layout",
            "Direct Call & WhatsApp CTA Integration",
            "Secure Contact Enquiry Form",
            "Google Maps Card & Local Schema",
            "1 Year Hosting Setup & Support",
          ],
          ctaText: "Select Standard Plan",
        },
        {
          name: "Business Growth Plan",
          price: "₹35,000",
          period: "one-time",
          description: "Recommended for healthcare centers, regional resorts, educational hubs, and multi-service companies.",
          isPopular: true,
          features: [
            "Up to 10 Custom Designed Pages",
            "Complete On-Page SEO Architecture",
            "Local Schema Markup Injection",
            "Google Analytics 4 Tracking Setup",
            "Custom Interactive Elements & Widgets",
            "1 Year Priority Developer Support",
          ],
          ctaText: "Select Growth Plan",
        },
        {
          name: "Custom Brand Portal",
          price: "Custom Quote",
          description: "For corporate brands, complex e-commerce catalogs, and multi-city organizations requiring bespoke design systems.",
          features: [
            "Unlimited Custom Designed Pages",
            "Bespoke UI/UX Design System",
            "Headless E-commerce Design Integration",
            "Multi-Step Conversion Funnels",
            "Advanced Interactive Animations",
            "Dedicated Project Design Director",
          ],
          ctaText: "Request Custom Quote",
        },
      ]}
      faqs={[
        {
          question: "Can you redesign my existing website without losing current Google rankings?",
          answer: "Yes! We specialize in modernizing outdated sites into fast, responsive Next.js designs. We map all existing URLs, maintain canonical integrity, and set up 301 redirects to ensure your organic traffic and rankings remain protected.",
        },
        {
          question: "How long does a website design project take in Madurai?",
          answer: "A standard custom 5-page responsive website design typically takes 7 to 12 business days from wireframe approval to final deployment. Larger portals or multi-page corporate sites average 3 to 4 weeks.",
        },
        {
          question: "Will my website look great on mobile phones and tablets?",
          answer: "Yes, every single layout we engineer is built mobile-first. We rigorously test each design across multiple devices, resolutions, and orientations to guarantee that your navigation, fonts, and images render flawlessly.",
        },
        {
          question: "How do we coordinate design reviews and revisions?",
          answer: "We provide private staging preview links where you can inspect your website designs in real time on your phone or laptop. Feedback rounds and design adjustments are managed conveniently via WhatsApp or phone call.",
        },
        {
          question: "Can you help update photos or text after the site is launched?",
          answer: "Yes! Every project includes 30 days of complimentary post-launch support for content updates and minor layout tweaks. We can also provide intuitive admin dashboards for effortless ongoing edits.",
        },
      ]}
      crossLinks={[
        { href: "/website-development-company-madurai", label: "Web Development Madurai" },
        { href: "/seo-services-madurai", label: "SEO Services Madurai" },
        { href: "/case-studies", label: "Client Case Studies" },
      ]}
    />
  );
}
