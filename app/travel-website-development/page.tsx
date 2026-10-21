import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CaseStudyTravelVoyage from "@/components/sections/CaseStudyTravelVoyage";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Custom Travel Agency Website Development & Next.js Travel Engine",
  description: "High-converting custom travel agency website development with instant Next.js travel engine speed, bespoke tour operator admin panel, and global SEO. Book your free consultation!",
  keywords: [
    "Custom Travel Agency Website Development",
    "Tour Operator Admin Panel",
    "Next.js Travel Engine",
    "best website for travel agency",
    "travel agency website builder",
    "travel website development",
    "safari website development company",
    "tour operator website development",
    "travel agency website design",
    "tourism website development",
    "custom travel booking platform",
    "safari tour operator website"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/travel-website-development",
  },
  openGraph: {
    type: "website",
    title: "Custom Travel Agency Website Development | Joy Digital",
    description: "Custom travel & safari website engineering with instant booking engines, sub-second itinerary loading, and global SEO. Book your free consultation!",
    url: "https://www.joydigital.in/travel-website-development",
    images: [
      {
        url: "https://www.joydigital.in/images/case-studies/youandmevoyage-preview.webp",
        width: 1200,
        height: 750,
        alt: "You & Me Voyage custom Next.js travel portal and custom admin panel preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Travel Agency Website Development | Joy Digital",
    description: "Custom travel & safari website engineering with instant booking engines, sub-second itinerary loading, and global SEO. Book your free consultation!",
    images: ["https://www.joydigital.in/images/case-studies/youandmevoyage-preview.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Travel Agency Website Development & Tour Operator Admin Panel",
  "serviceType": "Travel Web Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133"
  },
  "description": "Joy Digital is a leading tourism website development company providing custom travel agency website development, next.js travel engine architectures, bespoke tour operator admin panels, and high-converting tour package portals.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "500",
    "highPrice": "4500",
    "offerCount": "3"
  }
};

export default async function ToursTravelsWebPage() {
  const post1 = await getPostBySlug("travel-website-features-tour-operators-2026");
  const post2 = await getPostBySlug("5-must-have-website-features-tour-operators-safari-taxi");
  const post3 = await getPostBySlug("why-safari-business-needs-professional-website");

  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <ServicePageTemplate
      serviceName="Travel Website Development"
      heroTitle="Custom Travel Agency Website Development Powered by Next.js Travel Engine"
      h1ClassName="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
      heroSubtitle="Partner with Joy Digital to build high-converting travel booking systems, bespoke tour package portals, and an intuitive Tour Operator Admin Panel that scales direct tourist inquiries worldwide."
      leadSource="Travel Website Development Landing Page"
      heroCtaText="Request a Travel Website Quote"
      canonicalUrl="https://www.joydigital.in/travel-website-development"
      simplifiedLeadForm={true}
      belowHeroSection={<CaseStudyTravelVoyage />}
      overviewTitle="Custom Travel Agency Website Development Built for Conversion"
      overviewContent={
        <div className="space-y-6">
          <p>
            In the competitive travel and hospitality market, partnering with an experienced development agency is crucial to capturing direct tourist bookings. Joy Digital delivers full-stack <strong>Custom Travel Agency Website Development</strong>, high-converting layouts, and modern <strong>Next.js Travel Engine</strong> web applications tailored for global travel brands.
          </p>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">
            Next.js Travel Engine: Sub-Second Load Times for Global Bookings
          </h3>
          <p>
            If you are searching for the <strong>best website for travel agency</strong> lead generation, off-the-shelf templates and generic <strong>travel agency website builder</strong> software will severely limit your organic visibility. Subscription-based site builders rely on slow, monolithic databases and heavy plugins that trigger slow mobile load times for international travelers. Our custom <strong>Next.js Travel Engine</strong> gives you sub-second edge loading, zero plugin lock-in, and automated itinerary routing that turns international website traffic into paid bookings.
          </p>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">
            Tour Operator Admin Panel: Total Control Over Packages, Pricing &amp; Departures
          </h3>
          <p>
            Tired of contacting developers every time you add a seasonal tour or adjust package rates? Our bespoke <strong>Tour Operator Admin Panel</strong> empowers your operations team to create, edit, and publish rich multi-day itineraries, manage departure schedules, and update high-resolution photo galleries in seconds—all without writing a single line of code.
          </p>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">
            Custom Travel Agency Website Development for Tour Operators &amp; Safari Organizers
          </h3>
          <p>
            Whether you manage domestic package tours or international wildlife expeditions, our custom web portals allow you to showcase day-by-day itineraries, high-resolution destination galleries, inclusions, and downloadable travel guides with dedicated schema for rich Google search snippets.
          </p>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">
            Travel Booking Website Development &amp; WhatsApp Lead Routing
          </h3>
          <p>
            Our travel booking solutions feature direct WhatsApp click-to-chat links, interactive query forms, and automated itinerary downloads. We build specialized engines designed to load in under 1.2s on mobile networks, eliminating the bounce rate common to legacy agency sites.
          </p>

          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">
            Looking for a Professional Travel Agency Website Redesign?
          </h3>
          <p>
            If your current travel website is slow, outdated, or failing to convert visitors, our website redesign and migration service transforms slow WordPress or Wix templates into fast-loading, mobile-responsive Next.js portals that increase direct inquiries and reduce dependency on expensive third-party booking aggregators.
          </p>
        </div>
      }
      benefitsTitle="Bespoke Travel Website Features"
      benefitsSubtitle="We build layouts focused on establishing agency authority and making tourist contact simple."
      benefits={[
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Itinerary Showcases",
          description: "Display day-by-day schedules, hotel stays, inclusions, and exclusions in clean layout tabs.",
        },
        {
          icon: "fa-solid fa-comments-dollar",
          title: "WhatsApp Leads Sync",
          description: "Allow clients to click and start a WhatsApp conversation with a pre-filled template about specific packages.",
        },
        {
          icon: "fa-solid fa-cloud-arrow-down",
          title: "Brochure Downloads",
          description: "Capture prospect contact details before providing travel guides, pricing lists, or hotel sheets.",
        },
        {
          icon: "fa-solid fa-star",
          title: "Review Feeds Integration",
          description: "Highlight TripAdvisor, Google, or Facebook reviews to build instant credibility with new clients.",
        },
        {
          icon: "fa-solid fa-suitcase-rolling",
          title: "Custom Trip Planners",
          description: "Integrated contact forms asking destinations, stay durations, and budget details for custom tour planning.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Under 1.2s Page Load",
          description: "Built on serverless static hosting so pages load instantly on tourist mobile networks during travel.",
        },
      ]}
      processTitle="How We Build Your Travel Portal"
      processSubtitle="We systematically construct your agency profile and connect all direct inquiry routing."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-compass",
          title: "Gather Package Details",
          description: "We collect your tour photos, itinerary lists, pricing structures, and contact information.",
        },
        {
          step: "2",
          icon: "fa-solid fa-file-code",
          title: "Design & Custom Code",
          description: "We code a fast, secure website tailored to your branding with optimized conversion actions.",
        },
        {
          step: "3",
          icon: "fa-solid fa-message",
          title: "Setup WhatsApp Bookings",
          description: "We configure forms to redirect package inquiries directly to your mobile chat WhatsApp.",
        },
        {
          step: "4",
          icon: "fa-solid fa-globe",
          title: "Launch & SEO Setup",
          description: "We connect domains, configure security protocols, and submit XML sitemaps to Google.",
        },
      ]}
      pricingTitle="Affordable Pricing Packages"
      pricingSubtitle="Get a premium, direct-booking travel website starting from $500 with no monthly developer charges."
      pricingTiers={[
        {
          name: "Standard Agency Profile",
          price: "$500",
          period: "one-time",
          description: "Perfect for local travel agents aiming for a professional profile and featured packages grid.",
          features: [
            "1-5 Responsive Layout Pages",
            "Customized Theme Design (Brand-tailored)",
            "Customized Booking & WhatsApp Inquiry Form",
            "Social Media Integration (Instagram, FB & WhatsApp)",
            "Up to 10 Holiday Packages list",
            "Agency Overview & Contact details",
            "Dedicated Developer Support",
            "1 Year Hosting Setup Support",
          ],
          ctaText: "Select Standard Plan",
        },
        {
          name: "Premium Tour Operator Portal",
          price: "$1,200",
          period: "one-time",
          description: "Recommended for tour operators, trekking clubs, and agencies managing multiple recurring routes.",
          isPopular: true,
          features: [
            "Up to 12 Advanced Pages (Unlimited Tours)",
            "100% Customized Travel UI/UX Theme",
            "Bespoke Tour Operator Admin Panel",
            "In-built SEO Admin Panel (Edit Meta Tags Anytime)",
            "Customized Multi-Step Booking & WhatsApp Engine",
            "Social Media & Review Feeds Integration",
            "Google Maps Local SEO & Schema Setup",
            "Dedicated 1-on-1 Priority Support",
          ],
          ctaText: "Select Premium Plan",
        },
      ]}
      faqs={[
        {
          question: "Why is a custom Next.js Travel Engine superior to generic builders for travel agency operations?",
          answer: "Standard travel agency website builder software locks you into rigid monthly subscriptions and slow templates with poor mobile Core Web Vitals. Our custom Next.js Travel Engine loads in under 1.2s anywhere in the world, integrates WhatsApp natively, and delivers higher search rankings for competitive tour destinations.",
        },
        {
          question: "How does the custom Tour Operator Admin Panel make package management easier?",
          answer: "Our custom Tour Operator Admin Panel gives you complete independence. You can add new destinations, adjust seasonal pricing, update photo galleries, and publish day-by-day itineraries with a simple, secure dashboard without needing technical assistance.",
        },
        {
          question: "Why choose Joy Digital for Custom Travel Agency Website Development?",
          answer: "Joy Digital is a specialized web engineering agency. We build custom travel agency systems, tour operator platforms, and travel booking setups designed to load under 1.2s globally while maximizing direct traveler leads.",
        },
        {
          question: "Can you assist with a travel agency website redesign and Wix/WordPress migration?",
          answer: "Absolutely. As demonstrated in our You & Me Voyage case study, we regularly migrate travel brands from slow Wix, WordPress, or Webflow templates into fast, modern Next.js applications that preserve existing SEO authority and drastically increase booking conversions.",
        },
        {
          question: "Can guests request custom holiday plans and communicate via WhatsApp?",
          answer: "Yes! We integrate secure interactive forms where travelers submit destination preferences, budgets, and dates, with one-click routing to your team's WhatsApp desk.",
        },
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/custom-website-development", label: "Custom Website Development" },
        { href: "/website-development", label: "Custom Web Development Services" },
        { href: "/web-design-services", label: "Custom Website Design" },
      ]}
      relatedBlogPosts={relatedBlogPosts}
    />
  );
}
