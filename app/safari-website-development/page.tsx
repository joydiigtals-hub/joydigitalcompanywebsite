import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Safari Website Development Company | For Safari Operators & Lodges",
  description: "Premium safari website development for safari operators and wildlife tourism businesses. We build custom, high-converting websites that generate high-ticket enquiries.",
  keywords: [
    "safari website development",
    "safari operator website design",
    "wildlife tourism website development",
    "african safari website design",
    "safari lodge website development"
  ],
  alternates: {
    canonical: "https://joydigital.in/safari-website-development",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Safari Website Development",
  "serviceType": "Safari Web Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133"
  },
  "description": "Premium safari website development for safari operators, lodges, and wildlife tourism businesses globally.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "35000",
    "highPrice": "85000",
    "offerCount": "2"
  }
};

export default function SafariWebPage() {
  return (
    <ServicePageTemplate
      serviceName="Safari Website Development"
      heroTitle="Custom Safari Website Development for Operators & Lodges"
      heroSubtitle="Build Trust and Sell High-Ticket Safari Packages. We build premium, high-converting websites for African safari businesses, wildlife tours, and luxury lodges."
      leadSource="Safari Website Development Landing Page"
      heroCtaText="Request a Safari Website Quote"
      canonicalUrl="https://joydigital.in/safari-website-development"
      overviewTitle="Build Trust and Sell High-Ticket Safari Packages"
      overviewContent={
        <div className="space-y-6">
          <p>
            Safari packages are high-ticket investments for international tourists. A generic travel template isn't enough to build the immense trust required for a guest to book a luxury African safari or multi-day wildlife expedition with you.
          </p>
          <p>
            Joy Digital is the expert custom website development partner for Safari operators, wildlife tourism businesses, and lodges. We build premium, immersive, and high-trust websites designed to convert global safari enquiries.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Features Every Safari Website Needs</h3>
          <p>
            Unlike standard travel agencies, safari operators require unique digital features: beautiful day-by-day visual itineraries, detailed accommodation and camp showcases, easy-to-update seasonal rate tables, and immersive wildlife photo galleries. 
          </p>
          <p>
            We ensure all high-resolution imagery and videos load lightning fast across the globe using advanced Next.js optimization and lazy-loading technology.
          </p>
        </div>
      }
      benefitsTitle="Premium Safari Website Features"
      benefitsSubtitle="We build high-trust digital experiences that justify high-ticket safari bookings."
      benefits={[
        {
          icon: "fa-solid fa-camera-retro",
          title: "Visual Day-by-Day Itineraries",
          description: "Showcase each day of your safari with specific wildlife highlights, activities, and camp details in an interactive timeline.",
        },
        {
          icon: "fa-solid fa-campground",
          title: "Lodge & Camp Showcases",
          description: "Highlight your luxury accommodations with rich image galleries, amenities lists, and seasonal availability charts.",
        },
        {
          icon: "fa-solid fa-table-list",
          title: "Seasonal Rate Tables",
          description: "Easily update complex pricing structures based on high, low, and peak safari seasons via a custom CMS.",
        },
        {
          icon: "fa-solid fa-shield-heart",
          title: "High-Trust Elements",
          description: "Integrate verified TripAdvisor reviews, association badges (like KATO or ATTA), and secure payment gateways.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Flawless Media Loading",
          description: "Advanced image and video compression ensures your rich media loads instantly, even on slower global networks.",
        },
        {
          icon: "fa-solid fa-calendar-check",
          title: "Custom Enquiry Funnels",
          description: "Capture qualified leads with forms tailored for group sizes, preferred dates, and specific wildlife interests.",
        }
      ]}
      processTitle="Our Safari Website Design Process"
      processSubtitle="We understand the difference between a city tour and a 7-day Serengeti migration."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-compass",
          title: "Brand & Itinerary Discovery",
          description: "We analyze your target audience, high-ticket packages, and brand identity to establish a premium aesthetic.",
        },
        {
          step: "2",
          icon: "fa-solid fa-palette",
          title: "Immersive UI/UX Design",
          description: "We design high-trust layouts focusing on breathtaking imagery and clear conversion paths for international clients.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Next.js Custom Development",
          description: "We code your site for maximum speed, integrating your custom CMS for easy seasonal pricing and itinerary updates.",
        },
        {
          step: "4",
          icon: "fa-solid fa-rocket",
          title: "Global SEO Launch",
          description: "We launch on premium edge servers, ensuring fast load times globally and optimizing for specific safari keywords.",
        }
      ]}
      pricingTitle="Safari Web Development Packages"
      pricingSubtitle="Invest in a premium digital storefront that matches the quality of your safaris."
      pricingTiers={[
        {
          name: "Professional Safari Portal",
          price: "₹35,000",
          period: "starting at",
          description: "Perfect for independent safari guides or single-country operators needing a high-trust digital presence.",
          features: [
            "Premium Custom Design",
            "Up to 15 Safari Itineraries",
            "Camp & Lodge Showcase Pages",
            "Custom Enquiry Forms",
            "Fast Media Optimization",
            "Basic On-Page SEO"
          ],
          ctaText: "Request Quote"
        },
        {
          name: "Enterprise Operator Platform",
          price: "Custom",
          period: "quote",
          description: "For multi-country DMCs, luxury lodge chains, and high-volume safari operators.",
          isPopular: true,
          features: [
            "Unlimited Itineraries & Camps",
            "Advanced Headless CMS Integration",
            "Complex Seasonal Pricing Tables",
            "CRM & Booking Engine Integration",
            "Multi-language Support",
            "Priority Global SEO Strategy"
          ],
          ctaText: "Talk About Your Website"
        }
      ]}
      faqs={[
        {
          question: "How is a safari website different from a regular travel website?",
          answer: "Safari websites require a much higher level of trust, as the packages are usually high-ticket. They need specific features like detailed day-by-day visual itineraries, seasonal rate charts, camp showcases, and flawless loading of high-resolution wildlife media."
        },
        {
          question: "Can I update my safari prices and itineraries myself?",
          answer: "Yes, we integrate an easy-to-use Content Management System (CMS) that allows your team to easily update seasonal rates, add new tour packages, and upload new wildlife photos without touching any code."
        },
        {
          question: "Do you optimize the website for international clients?",
          answer: "Absolutely. We build our sites using Next.js on edge server networks, which means your website will load incredibly fast for clients in the US, UK, Europe, or Australia, preventing bounce rates and increasing conversions."
        }
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/travel-website-development", label: "Travel Website Development" },
        { href: "/custom-website-development", label: "Custom Web Development Services" },
        { href: "/web-design-services", label: "Custom Website Design" }
      ]}
    />
  );
}
