import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization Services | Joy Digital",
  description: "Expert Google Business Profile optimization to rank in Google Maps 3-Pack, gain local visibility, and generate phone calls with Joy Digital.",
  alternates: {
    canonical: "https://joydigital.in/google-business-profile-optimization",
  },
  openGraph: {
    title: "Google Business Profile Optimization Services | Joy Digital",
    description: "Expert Google Business Profile optimization to rank in Google Maps 3-Pack, gain local visibility, and generate phone calls with Joy Digital.",
    url: "https://joydigital.in/google-business-profile-optimization",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Optimization Services | Joy Digital",
    description: "Expert Google Business Profile optimization to rank in Google Maps 3-Pack, gain local visibility, and generate phone calls with Joy Digital.",
  },
};

const GBP_FAQS = [
  {
    question: "Why is Google Business Profile optimization essential for local businesses?",
    answer: "When local customers search for services near them, Google shows the top 3 Google Business Profiles in the Local 3-Pack above regular website results. Optimizing your categories, primary services, geotagged photos, and review signals drives direct phone calls and map directions.",
  },
  {
    question: "Why was my Google Business Profile suspended and can you reinstate it?",
    answer: "Suspensions usually happen due to policy compliance triggers like address mismatches, keyword stuffing in business names, or virtual office citations. We audit your listing details, resolve compliance issues with official documentation, and manage the reinstatement appeal with Google support.",
  },
  {
    question: "How long does verification take for a new or reclaimed listing?",
    answer: "Verification methods include video verification, phone OTP, email, or postcard verification. Instant phone and email verifications complete within minutes, while postal verification typically takes 7 to 14 business days.",
  },
];

export default function GoogleBusinessProfilePage() {
  const pageGraphSchema = buildPageGraphSchema({
    url: "https://joydigital.in/google-business-profile-optimization",
    title: "Google Business Profile Optimization Services | Joy Digital",
    description: "Expert Google Business Profile optimization to rank in Google Maps 3-Pack, gain local visibility, and generate phone calls with Joy Digital.",
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "Google Business Profile Optimization", item: "https://joydigital.in/google-business-profile-optimization" },
    ],
    service: {
      name: "Google Business Profile Optimization",
      description: "Expert Google Business Profile audit, suspension reinstatement, category optimization, and local map pack ranking services.",
      serviceType: "Local SEO & Google Maps Optimization",
    },
    faqs: GBP_FAQS,
  });

  return (
    <ServicePageTemplate
      serviceName="Google Business Profile Optimization"
      heroTitle="Google Business Profile Optimization Services"
      heroSubtitle="Claim, optimize, and rank your business listing on Google Maps. We optimize categories, manage client reviews, structure local schemas, and configure call tracking to drive direct phone calls and inquiries."
      leadSource="Google Business Profile Optimization Landing Page"
      canonicalUrl="https://joydigital.in/google-business-profile-optimization"
      overviewTitle="Dominating Nearby Search Queries with Google Business Profiles"
      overviewContent={
        <div className="space-y-6">
          <p>
            When potential customers need a local service near them, they open Google Maps or run search queries on their mobile phones. Google displays the top three maps profiles in the Local 3-Pack. If your profile is suspended, missing categories, or unoptimized, you are losing valuable phone leads and store visits to competitors.
          </p>
          <p>
            At Joy Digital, our expert <strong>google business profile optimization</strong> service helps local companies claim, verify, and rank their profiles. We audit categories, resolve suspension issues, standardize addresses (NAP consistency), and link profiles to optimized local landing pages.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Why Google Maps Algorithms Value Profile Completeness</h3>
          <p>
            Google ranks map profiles based on relevance, distance, and prominence. We optimize relevance by adding accurate secondary categories, listing services with search terms, and writing detailed keyword descriptions.
          </p>
          <p>
            We also upload geotagged images, set up FAQ lists, and configure messaging shortcuts. To boost prominence, we launch customer review collection links, build high-authority local citations, and ensure details match across directories.
          </p>
        </div>
      }
      benefitsTitle="Why Optimize Your Google Maps Profile?"
      benefitsSubtitle="We configure your Google profile to drive calls, website visits, and physical directions."
      benefits={[
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Rank in the Maps 3-Pack",
          description: "We optimize your categories and search indicators to rank your business profile in the top three map listings.",
        },
        {
          icon: "fa-solid fa-phone",
          title: "Drive Mobile Calls",
          description: "Optimized mobile profiles place a call button front and center, allowing visitors to contact your office.",
        },
        {
          icon: "fa-solid fa-star",
          title: "Build Customer Trust",
          description: "We set up review shortcuts and templates to help your team earn positive feedback, which builds trust.",
        },
        {
          icon: "fa-solid fa-images",
          title: "Upload Geotagged Photos",
          description: "We upload optimized photos containing embedded metadata coordinates to signal local activity to crawlers.",
        },
        {
          icon: "fa-solid fa-shield-check",
          title: "Resolve Suspension Issues",
          description: "We audit guidelines, help verify business documentation, and draft reinstatement appeals.",
        },
        {
          icon: "fa-solid fa-chart-simple",
          title: "Track Performance Analytics",
          description: "We monitor map impressions, phone call clicks, website visits, and search query keywords.",
        },
      ]}
      processTitle="Our Optimization Workflow"
      processSubtitle="How we audit, clean, and verify your local map profile to boost search visibility."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Profile Audit",
          description: "We check category setups, audit competitors, check address coordinates, and map target terms.",
        },
        {
          step: "2",
          icon: "fa-solid fa-pencil",
          title: "On-Page Optimization",
          description: "We set categories, write optimized profile descriptions, list services, and configure opening hours.",
        },
        {
          step: "3",
          icon: "fa-solid fa-list-check",
          title: "Local Citations Setup",
          description: "We submit standardized Name, Address, and Phone details to directories to build search authority.",
        },
        {
          step: "4",
          icon: "fa-solid fa-comments",
          title: "Review & Upkeep",
          description: "We configure review collection templates, post profile updates, and monitor map rankings.",
        },
      ]}
      pricingTitle="Affordable Profile Packages"
      pricingSubtitle="Select the optimization scale that matches your business locations. No monthly lock-in contracts."
      pricingTiers={[
        {
          name: "Starter Setup",
          price: "₹5,000",
          period: "one-time",
          description: "Best for new businesses or single-profile setups needing basic verification and layout.",
          features: [
            "1 Google Business Profile Setup",
            "Verification Support & Categories Select",
            "Keyword-Optimized Description Copy",
            "Standard Geotagged Photos Upload",
            "Review Acquisition Link Generation",
            "Google Maps Address Linkage Setup",
          ],
          ctaText: "Choose Starter Plan",
        },
        {
          name: "Premium Optimization",
          price: "₹12,000",
          period: "one-time",
          description: "Best for medical clinics, local hotels, travels, and growing companies aiming to rank.",
          isPopular: true,
          features: [
            "1 Google Business Profile Complete Audit",
            "In-Depth Competitor Placement Audits",
            "Secondary Categories & Services Setup",
            "60+ High-Authority Citation Directory Submissions",
            "Local Schema Markup Code for Website",
            "3 Months Rank Tracking & Updates Support",
          ],
          ctaText: "Choose Premium Plan",
        },
      ]}
      faqs={GBP_FAQS}
      schemaMarkup={pageGraphSchema}
      crossLinks={[
        { href: "/local-seo-services", label: "Local SEO Services" },
        { href: "/seo-services-chennai", label: "SEO Services Chennai" },
        { href: "/website-development-company-madurai", label: "Web Development Madurai" },
      ]}
    />
  );
}
