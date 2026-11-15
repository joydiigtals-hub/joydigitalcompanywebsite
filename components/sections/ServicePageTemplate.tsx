"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { BlogPost } from "@/lib/blog";

// Dynamically imported below-the-fold components
const Footer = dynamic(() => import("@/components/layout/Footer"));
const StickyWidgets = dynamic(() => import("@/components/ui/StickyWidgets"));
const LeadForm = dynamic(() => import("@/components/ui/LeadForm"));
const Accordion = dynamic(() => import("@/components/ui/Accordion"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const GetQuoteModal = dynamic(() => import("@/components/ui/GetQuoteModal"));

function getQuoteServiceCategory(name: string): "Custom Next.js Development" | "Travel & Safari Portal" | "SEO & AI Search (GEO)" | "Web Design & Landing Page" | "Other" {
  const lower = name.toLowerCase();
  if (lower.includes("travel") || lower.includes("safari") || lower.includes("tour")) {
    return "Travel & Safari Portal";
  }
  if (lower.includes("seo") || lower.includes("search") || lower.includes("google") || lower.includes("ranking")) {
    return "SEO & AI Search (GEO)";
  }
  if (lower.includes("design") || lower.includes("landing page") || lower.includes("logo")) {
    return "Web Design & Landing Page";
  }
  return "Custom Next.js Development";
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface PricingTier {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  ctaText?: string;
  isPopular?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  serviceName: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  leadSource: string;
  overviewTitle: string;
  overviewContent: React.ReactNode;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricingTiers: PricingTier[];
  faqs: FAQItem[];
  schemaMarkup?: Record<string, unknown>;
  crossLinks: { href: string; label: string }[];
  canonicalUrl?: string;
  heroCtaText?: string;
  relatedBlogPosts?: BlogPost[];
  customLeadForm?: React.ReactNode;
  heroActions?: React.ReactNode;
  customCtaBanner?: React.ReactNode;
  customPricingSection?: React.ReactNode;
  pricingNote?: string;
  chennaiProofSection?: React.ReactNode;
  belowHeroSection?: React.ReactNode;
  afterBenefitsSection?: React.ReactNode;
  simplifiedLeadForm?: boolean;
  h1ClassName?: string;
}

export default function ServicePageTemplate({
  serviceName,
  heroTitle,
  heroSubtitle,
  leadSource,
  overviewTitle,
  overviewContent,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  processTitle,
  processSubtitle,
  processSteps,
  pricingTitle,
  pricingSubtitle,
  pricingTiers,
  pricingNote,
  chennaiProofSection,
  faqs,
  schemaMarkup,
  crossLinks,
  canonicalUrl = "https://www.joydigital.in",
  heroCtaText,
  relatedBlogPosts,
  customLeadForm,
  heroActions,
  customCtaBanner,
  customPricingSection,
  belowHeroSection,
  afterBenefitsSection,
  simplifiedLeadForm,
  h1ClassName = "",
}: ServicePageTemplateProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const STANDARD_FAQS = [
    {
      question: "How much does a professional website cost?",
      answer: "Professional website development costs depend on your project scope, page count, and custom integrations. Joy Digital provides transparent, tailored proposals based on your exact business needs. Request a quote to receive a customized estimate and technical roadmap."
    },
    {
      question: "How long does website development take?",
      answer: "A standard custom Next.js business website typically takes 7 to 14 business days. Larger platforms or complex database systems average 3 to 6 weeks."
    },
    {
      question: "Is hosting included?",
      answer: "We assist in setting up fast, secure server configurations (like Vercel or Netlify) and configure SSL. Hosting fees are paid directly to the providers, but setup is included in our package."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, we provide dedicated support plans covering backups, security updates, domain configuration, and continuous speed optimization."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "While onsite technical optimization starts indexing immediately, noticeable traffic increases and organic keyword ranking improvements usually take 3 to 6 months."
    },
    {
      question: "Do you offer Local SEO services?",
      answer: "Yes! We offer comprehensive Local SEO and Google Business Profile setup and management to rank your business in the Google Maps Local 3-Pack."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. We can migrate and redesign outdated sites (such as WordPress) into custom Next.js builds to improve speed and convert more leads."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, every single layout we design is fully responsive and mobile-friendly, targeting speed scores and mobile conversions on all screen sizes."
    }
  ];

  // Combine custom page FAQs and standard FAQs without duplicates
  const uniqueStandardFaqs = STANDARD_FAQS.filter(
    std => !faqs.some(f => f.question.toLowerCase().trim() === std.question.toLowerCase().trim())
  );
  const combinedFaqs = [...faqs, ...uniqueStandardFaqs];

  const pageGraphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: `${serviceName} Services | Joy Digital`,
    description: heroSubtitle,
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: serviceName, item: canonicalUrl },
    ],
    service: {
      name: serviceName,
      description: heroSubtitle,
    },
    faqs: combinedFaqs,
  });

  return (
    <>
      {/* Unified Connected Schema Graph */}
      <JsonLd schema={pageGraphSchema} />

      <Header />
      <main className="pt-20 lg:pt-24 bg-[#3B1580] text-[#FFFFFF]">
        {/* Hero Section */}
        <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-12 lg:pb-16 overflow-hidden bg-[#3B1580] text-[#FFFFFF]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9F600]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9F600]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold text-[#FFFFFF]/60 mb-4 uppercase tracking-widest">
                <Link href="/" className="hover:text-[#C9F600] transition-colors">Home</Link>
                <span className="text-[#FFFFFF]/40">/</span>
                <span className="text-[#C9F600]">{serviceName}</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-[#C9F600]/15 border border-[#C9F600]/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#C9F600] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#C9F600] uppercase tracking-wider">
                  Premium Growth Service
                </span>
              </div>
              <h1 
                className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white ${h1ClassName}`}
                style={
                  h1ClassName.includes("bg-clip-text")
                    ? { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
                    : undefined
                }
              >
                {h1ClassName.includes("bg-clip-text") ? (
                  heroTitle
                ) : (
                  typeof heroTitle === "string" ? (
                    heroTitle.includes(" Powered by ") ? (
                      <>
                        {heroTitle.split(" Powered by ")[0]} <span className="text-[#C9F600]">Powered by {heroTitle.split(" Powered by ").slice(1).join(" Powered by ")}</span>
                      </>
                    ) : heroTitle.includes(" for ") ? (
                      <>
                        {heroTitle.split(" for ")[0]} <span className="text-[#C9F600]">for {heroTitle.split(" for ").slice(1).join(" for ")}</span>
                      </>
                    ) : heroTitle.includes(" in ") ? (
                      <>
                        {heroTitle.split(" in ")[0]} <span className="text-[#C9F600]">in {heroTitle.split(" in ").slice(1).join(" in ")}</span>
                      </>
                    ) : heroTitle.includes(" & ") ? (
                      <>
                        {heroTitle.split(" & ")[0]} <span className="text-[#C9F600]">&amp; {heroTitle.split(" & ").slice(1).join(" & ")}</span>
                      </>
                    ) : (
                      heroTitle
                    )
                  ) : (
                    heroTitle
                  )
                )}
              </h1>
              <p className="text-sm md:text-base text-[#FFFFFF]/80 mb-8 max-w-xl leading-relaxed">
                {heroSubtitle}
              </p>

              {heroActions && (
                <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full">
                  {heroActions}
                </div>
              )}
              
              {/* Trust markers - Accurate engineering facts, no unproven claims */}
              <div className="flex items-center gap-6 mt-2 pb-6 border-b border-[#FFFFFF]/15 w-full max-w-lg">
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-[#FFFFFF]">&lt; 1.5s</span>
                  <span className="text-[10px] font-semibold text-[#FFFFFF]/60 uppercase">Page Load Speed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-[#FFFFFF]">Next.js</span>
                  <span className="text-[10px] font-semibold text-[#FFFFFF]/60 uppercase">React Architecture</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-[#FFFFFF]">Direct</span>
                  <span className="text-[10px] font-semibold text-[#FFFFFF]/60 uppercase">Developer Access</span>
                </div>
              </div>

              {/* Cross Links / Internal Linking */}
              {crossLinks && crossLinks.length > 0 && (
                <div className="flex flex-wrap items-center gap-2.5 mt-6">
                  <span className="text-xs font-bold text-[#FFFFFF]">Related:</span>
                  {crossLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs font-medium text-[#FFFFFF]/80 hover:text-[#3B1580] hover:bg-[#C9F600] hover:border-[#C9F600] border border-[#FFFFFF]/20 px-3 py-1 rounded-full transition-all duration-200 bg-[#3B1580] shadow-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hero Form */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {customLeadForm ? (
                customLeadForm
              ) : (
                <LeadForm
                  layout="vertical"
                  title="Claim Free Consultation"
                  subtitle="Fill in the fields below, and our local experts will reach out to you."
                  ctaText={heroCtaText || "Get Free Quote"}
                  source={leadSource}
                  simplified={simplifiedLeadForm}
                />
              )}
            </div>

            {/* Scroll Down Option Icon (Middle Bottom of Hero) */}
            <div className="lg:col-span-12 flex justify-center pt-8 z-20">
              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById("service-overview");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollBy({ top: window.innerHeight * 0.75, behavior: "smooth" });
                  }
                }}
                aria-label="Scroll down to service details"
                className="group flex items-center gap-2.5 text-xs font-bold text-[#FFFFFF] hover:text-[#C9F600] transition-all cursor-pointer bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/25 px-5 py-2.5 rounded-full shadow-md hover:border-[#C9F600] hover:scale-105 active:scale-95"
              >
                <span className="uppercase tracking-widest text-[11px] font-bold">Scroll</span>
                <div className="w-6 h-6 rounded-full bg-[#C9F600]/15 group-hover:bg-[#C9F600] flex items-center justify-center transition-colors">
                  <i className="fa-solid fa-chevron-down text-[10px] text-[#C9F600] group-hover:text-[#3B1580] animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Optional Below-Hero Section (e.g. Featured Case Study) */}
        {belowHeroSection}

        {/* Overview Section */}
        <section id="service-overview" className="py-16 lg:py-24 bg-[#260B5E] border-y border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF] text-center mb-8">
              {overviewTitle}
            </h2>
            <div className="prose prose-invert max-w-none text-sm md:text-base text-[#FFFFFF]/85 leading-relaxed space-y-6">
              {overviewContent}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-[#3B1580] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                Key Benefits
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                {benefitsTitle}
              </h2>
              <p className="text-sm text-[#FFFFFF]/80">
                {benefitsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#260B5E] border border-[#FFFFFF]/20 rounded-2xl p-8 shadow-sm hover:border-[#C9F600]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col text-[#FFFFFF]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-xl mb-6">
                    <i className={benefit.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">{benefit.title}</h3>
                  <p className="text-sm text-[#FFFFFF]/80 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Section After Benefits (e.g. Comparison Table) */}
        {afterBenefitsSection}

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                How We Deliver
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                {processTitle}
              </h2>
              <p className="text-sm text-[#FFFFFF]/80">
                {processSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((stepItem, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#3B1580] border border-[#C9F600]/30 flex items-center justify-center text-[#C9F600] text-2xl shadow-sm group-hover:bg-[#C9F600] group-hover:text-[#3B1580] transition-all duration-300 z-10 relative">
                      <i className={stepItem.icon} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#C9F600] text-[#3B1580] text-xs font-extrabold rounded-full flex items-center justify-center shadow-sm">
                      {stepItem.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {customPricingSection ? (
          customPricingSection
        ) : (
        <section className="py-16 lg:py-24 bg-[#3B1580] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                Packages &amp; Deliverables
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                {pricingTitle ? pricingTitle.replace(/pricing/gi, "Packages").replace(/plans/gi, "Packages") : "Tailored Packages & Deliverables"}
              </h2>
              <p className="text-sm text-[#FFFFFF]/80 max-w-2xl mx-auto">
                {pricingSubtitle || "Select the package aligned with your business goals. Request a custom quote to receive an exact technical roadmap and transparent proposal."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-[#260B5E] border rounded-[20px] p-8 shadow-sm flex flex-col relative transition-all duration-300 text-[#FFFFFF] ${
                    tier.isPopular
                      ? "border-[#C9F600] ring-2 ring-[#C9F600]/30 -translate-y-2 lg:-translate-y-3"
                      : "border-[#FFFFFF]/20 hover:border-[#FFFFFF]/40 hover:-translate-y-1"
                  }`}
                >
                  {tier.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9F600] text-[#3B1580] font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                      Most Recommended
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 tracking-tight">{tier.name}</h3>
                  <p className="text-xs text-[#FFFFFF]/80 mb-5 leading-relaxed min-h-[36px]">{tier.description}</p>
                  
                  {/* Scope & Quotation Badge */}
                  <div className="mb-6 p-3 rounded-xl bg-[#3B1580] border border-[#FFFFFF]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FFFFFF]">
                      <span className="w-2 h-2 rounded-full bg-[#C9F600] animate-pulse" />
                      <span>{tier.price || "Scope-Based Proposal"}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#C9F600] uppercase tracking-wider bg-[#3B1580] px-2.5 py-0.5 rounded-md border border-[#C9F600]/30">
                      {tier.period || (tier.price ? "Package Rate" : "Custom Quote")}
                    </span>
                  </div>
                  
                  {/* Features & Deliverables List */}
                  <div className="flex-grow border-t border-[#FFFFFF]/15 pt-5 mb-8">
                    <p className="text-[11px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-layer-group text-[#C9F600]" />
                      <span>Included Features &amp; Deliverables:</span>
                    </p>
                    <ul className="flex flex-col gap-3 text-xs text-[#FFFFFF]">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-snug">
                          <span className="text-[#C9F600] text-sm mt-0.5 shrink-0">
                            <i className="fa-solid fa-circle-check" />
                          </span>
                          <span className="leading-relaxed font-medium text-[#FFFFFF]/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High-Converting Get Quote Trigger */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier);
                      setIsQuoteOpen(true);
                    }}
                    className={`w-full text-center font-bold text-xs py-3.5 px-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? "bg-[#C9F600] hover:opacity-90 text-[#3B1580] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        : "bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] hover:text-[#C9F600] border border-[#FFFFFF]/30 hover:border-[#C9F600] hover:-translate-y-0.5"
                    }`}
                  >
                    <span>{tier.ctaText || "Get Custom Quote"}</span>
                    <i className="fa-solid fa-arrow-right text-[11px]" />
                  </button>
                </div>
              ))}
            </div>

            {pricingNote && (
              <p className="text-xs text-center text-[#FFFFFF]/60 mt-8 max-w-2xl mx-auto font-medium">
                {pricingNote}
              </p>
            )}
          </div>
        </section>

        )}

        {/* Related Blog Posts Section */}
        {relatedBlogPosts && relatedBlogPosts.length > 0 && (
          <section className="py-16 lg:py-24 bg-[#3B1580] border-t border-[#FFFFFF]/15 text-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                  Industry Insights &amp; Growth Guides
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                  Related Guides &amp; Articles
                </h2>
                <p className="text-sm text-[#FFFFFF]/80">
                  Explore expert articles, website strategies, and lead-generation guides for {serviceName}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-[#260B5E] border border-[#FFFFFF]/20 rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-[#FFFFFF]"
                  >
                    <div>
                      <div className="relative w-full aspect-video bg-[#3B1580] border-b border-[#FFFFFF]/15 overflow-hidden">
                        <Image
                          src={post.image || "/assets/images/hero-banner.webp"}
                          alt={post.imageAlt || post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-[#C9F600] text-[#3B1580] font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                            {post.category || "Guide"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-base font-extrabold text-[#FFFFFF] leading-snug group-hover:text-[#C9F600] transition-colors mb-2 line-clamp-2">
                          <Link href={`/blog/${post.slug}`} title={post.title}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-[#FFFFFF]/80 leading-relaxed line-clamp-2 font-normal">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-[#FFFFFF]/15 bg-[#260B5E]/50 flex items-center justify-between">
                      <span className="text-[10px] text-[#FFFFFF]/60 font-semibold">
                        By {post.authorName || post.author || "Joy Digital"}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-bold text-[#C9F600] hover:text-[#C9F600]/80 flex items-center gap-1.5"
                      >
                        Read Guide &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Optional Chennai Client Proof Section */}
        {chennaiProofSection && (
          <section className="py-8 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
            <div className="max-w-7xl mx-auto px-6">
              {chennaiProofSection}
            </div>
          </section>
        )}

        {/* FAQ Section (Positioned before final CTA) */}
        <section className="py-16 lg:py-24 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                Common Inquiries
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#FFFFFF]/80">
                Have questions about our project timelines, design deliverables, or ranking processes? Find answers below.
              </p>
            </div>

            <Accordion items={combinedFaqs} />
          </div>
        </section>

        {/* Dynamic Final CTA Banner */}
        {customCtaBanner ? (
          customCtaBanner
        ) : (
          <CTABanner
            title={`Take Your ${serviceName} Performance to the Next Level`}
            description={`Get a detailed ${serviceName} roadmap customized to your target keyword goals. No commitments, just pure value.`}
            primaryCtaText="Get My Free Audit Report"
            source={`${serviceName} CTABanner`}
          />
        )}
      </main>
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        showTrigger={false}
        source={`${serviceName} - ${selectedTier?.name || "Service Package"}`}
        defaultService={getQuoteServiceCategory(serviceName)}
        packageName={selectedTier?.name}
        initialNotes={
          selectedTier
            ? `Interested in the "${selectedTier.name}" package for ${serviceName}. Please share custom quotation and timeline.`
            : `Interested in custom quote for ${serviceName}.`
        }
      />
      <Footer />
      <StickyWidgets />
    </>
  );
}
