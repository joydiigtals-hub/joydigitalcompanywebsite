import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tour Operator Website Development Company | Booking Websites",
  description: "Expert tour operator website development. We build custom booking portals, day-by-day itineraries, and high-converting travel websites for DMCs.",
  keywords: [
    "tour operator website development",
    "tour booking website development",
    "custom tour operator website design",
    "DMC website development",
    "travel agency website design"
  ],
  alternates: {
    canonical: "https://joydigital.in/tour-operator-website-development",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Tour Operator Website Development",
  "serviceType": "Travel Web Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133"
  },
  "description": "Joy Digital builds custom booking portals and high-converting websites specifically designed for global Tour Operators and Destination Management Companies (DMCs).",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1500",
    "highPrice": "6000",
    "offerCount": "2"
  }
};

export default async function TourOperatorWebPage() {
  const post1 = await getPostBySlug("travel-website-features-tour-operators-2026");
  const post2 = await getPostBySlug("5-must-have-website-features-tour-operators-safari-taxi");
  const relatedBlogPosts = [post1, post2].filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <ServicePageTemplate
      serviceName="Tour Operator Website Development"
      heroTitle="High-Performance Tour Operator Website Development"
      heroSubtitle="Transform your Destination Management Company with a custom booking portal designed to capture direct, high-margin international enquiries."
      leadSource="Tour Operator Website Page"
      heroCtaText="Get a Tour Website Quote"
      canonicalUrl="https://joydigital.in/tour-operator-website-development"
      overviewTitle="Direct Bookings Start with a High-Trust Portal"
      overviewContent={
        <div className="space-y-6">
          <p>
            As a Tour Operator or DMC, relying solely on OTAs (Online Travel Agencies) eats into your margins. To win direct, high-ticket bookings from international travelers, you need a digital storefront that exudes trust, speed, and professionalism.
          </p>
          <p>
            Our <strong>tour operator website development</strong> services focus on building custom, high-converting platforms featuring rich day-by-day itineraries, seamless seasonal pricing, and secure direct-booking funnels.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Why Templates Fail Tour Operators</h3>
          <p>
            Generic WordPress travel plugins are slow and easily break under high traffic. We build bespoke Next.js React platforms that load in under a second across the globe, ensuring your rich imagery and video content never frustrates a potential buyer.
          </p>
        </div>
      }
      benefitsTitle="Purpose-Built Features for Tour Operators"
      benefitsSubtitle="We engineer the features you need to manage and sell complex multi-day tours."
      benefits={[
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Visual Day-by-Day Itineraries",
          description: "Interactive timelines showcasing daily activities, meals, and accommodations for complex tours.",
        },
        {
          icon: "fa-solid fa-calendar-alt",
          title: "Dynamic Seasonal Pricing",
          description: "Custom CMS enabling you to easily manage high, low, and peak season rates without coding.",
        },
        {
          icon: "fa-solid fa-comments-dollar",
          title: "Direct WhatsApp Booking",
          description: "Enable customers to instantly chat with your sales team about specific tour packages.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Global Edge Speed",
          description: "Sub-second loading times for international clients using our serverless Next.js architecture.",
        },
        {
          icon: "fa-solid fa-file-pdf",
          title: "Automated Brochure Capture",
          description: "Collect traveler emails before allowing them to download detailed PDF tour itineraries.",
        },
        {
          icon: "fa-solid fa-star",
          title: "Live Trust Badges",
          description: "Integrate live TripAdvisor and Google reviews to immediately establish authority.",
        },
      ]}
      processTitle="Our Engineering Process"
      processSubtitle="From destination mapping to global edge deployment."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-clipboard-list",
          title: "Package & Itinerary Audit",
          description: "We analyze your tour structures, pricing complexity, and target global audience.",
        },
        {
          step: "2",
          icon: "fa-solid fa-palette",
          title: "Bespoke UI Design",
          description: "Crafting a premium layout that highlights your destination imagery and builds trust.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Next.js Development",
          description: "Building your custom CMS and fast frontend utilizing modern React frameworks.",
        },
        {
          step: "4",
          icon: "fa-solid fa-rocket",
          title: "Global Launch & SEO",
          description: "Deploying on international edge servers with fully optimized Technical SEO schemas.",
        },
      ]}
      pricingTitle="Tour Operator Development Investment"
      pricingSubtitle="Stop renting templates. Invest in an asset you own completely."
      pricingTiers={[
        {
          name: "Standard DMC Portal",
          price: "$1,500",
          period: "starting rate",
          description: "For established tour operators needing a fast, professional showcase of up to 20 packages.",
          features: [
            "Premium Custom Next.js Design",
            "Day-by-Day Itinerary Builder",
            "Direct WhatsApp / Form Booking",
            "Speed & Core Web Vitals Guaranteed",
            "100% Code Ownership",
          ],
          ctaText: "Request Quote",
        },
        {
          name: "Enterprise Operator System",
          price: "Custom",
          period: "quote",
          description: "For multi-country DMCs requiring complex CRM integrations and dynamic booking engines.",
          isPopular: true,
          features: [
            "Unlimited Dynamic Itineraries",
            "Advanced Headless CMS (Sanity)",
            "Live Booking Engine / Payment Gateway",
            "Multi-language Regional SEO",
            "Custom API Integrations",
          ],
          ctaText: "Discuss Architecture",
        },
      ]}
      faqs={[
        {
          question: "Why do I need custom tour operator website development instead of WordPress?",
          answer: "Custom development (like Next.js) ensures sub-second page loads globally, which is critical for international tourists. It also removes the risk of plugin hacks and gives you total flexibility in how you display complex itineraries.",
        },
        {
          question: "Can I manage the tour packages and pricing myself?",
          answer: "Yes, we integrate a tailored Content Management System (CMS) that makes it incredibly simple to add new destinations, update seasonal prices, and change itinerary details without any coding knowledge.",
        },
        {
          question: "Will my website rank on Google globally?",
          answer: "Our platforms are built with Technical SEO as a core foundation. We implement automated schema markup, server-side rendering, and ultra-fast hosting—all crucial signals for ranking in international search results.",
        },
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/travel-website-development", label: "Travel Agency Website Development" },
        { href: "/safari-website-development", label: "Safari Website Development" },
        { href: "/custom-website-development", label: "Custom Website Development" },
      ]}
      relatedBlogPosts={relatedBlogPosts}
    />
  );
}
