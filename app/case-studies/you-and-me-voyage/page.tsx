import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import { ExternalLink, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: You & Me Voyage | Custom Next.js Website Chennai",
  description:
    "See how Joy Digital built a custom Next.js travel platform with an interactive 3-step tour enquiry planner and direct WhatsApp lead routing for You & Me Voyage, Chennai.",
  alternates: {
    canonical: "https://www.joydigital.in/case-studies/you-and-me-voyage",
  },
  openGraph: {
    type: "article",
    url: "https://www.joydigital.in/case-studies/you-and-me-voyage",
    title: "Case Study: You & Me Voyage | Joy Digital",
    description:
      "Custom Next.js travel portal and WhatsApp lead generation architecture for You & Me Voyage, based in Adyar, Chennai.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/portfolio/you-and-me-voyage-1.webp",
        width: 1200,
        height: 630,
        alt: "You & Me Voyage Custom Next.js Travel Website",
      },
    ],
  },
};

const SCREENSHOTS = [
  {
    title: "Homepage & Hero Tour Showcase",
    desc: "Bespoke Europe holiday package hero section engineered with sub-second LCP speed.",
    src: "/assets/images/portfolio/you-and-me-voyage-1.webp",
  },
  {
    title: "Dynamic Tour Package Catalog",
    desc: "Curated European tour itineraries with price transparencies and destination highlights.",
    src: "/assets/images/portfolio/you-and-me-voyage-2.webp",
  },
  {
    title: "Interactive Day-by-Day Itineraries",
    desc: "3-step booking route connecting travelers directly to WhatsApp travel specialists.",
    src: "/assets/images/portfolio/you-and-me-voyage-3.webp",
  },
  {
    title: "SEO-Optimized Destination Guides",
    desc: "Dynamic editorial travel guides capturing high-intent organic search queries.",
    src: "/assets/images/portfolio/you-and-me-voyage-4.webp",
  },
  {
    title: "Google Maps Location & Direct Contact",
    desc: "Integrated Adyar, Chennai business location mapping and lead inquiry routing.",
    src: "/assets/images/portfolio/you-and-me-voyage-5.webp",
  },
];

const TECH_STACK = [
  { name: "Next.js 15 (App Router)", purpose: "Server-side rendering & static generation for sub-second speeds" },
  { name: "React & TypeScript", purpose: "Type-safe modular UI and interactive travel planners" },
  { name: "Tailwind CSS", purpose: "Lightweight, zero-runtime utility styling" },
  { name: "Vercel Edge Network", purpose: "Global CDN caching for instant international loading" },
  { name: "WhatsApp Business API", purpose: "Direct 1-click lead capture and mobile inquiry routing" },
  { name: "Schema.org JSON-LD", purpose: "Structured data for Google Search rich snippets" },
];

export default function YouAndMeVoyageCaseStudyPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.joydigital.in/case-studies/you-and-me-voyage#article",
        "headline": "You & Me Voyage: Custom Next.js Travel Website & WhatsApp Lead Routing",
        "description": "How Joy Digital engineered a custom Next.js travel platform with a 3-step enquiry planner for You & Me Voyage, Chennai.",
        "url": "https://www.joydigital.in/case-studies/you-and-me-voyage",
        "image": "https://www.joydigital.in/assets/images/portfolio/you-and-me-voyage-1.webp",
        "author": {
          "@type": "Organization",
          "name": "Joy Digital",
          "url": "https://www.joydigital.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Joy Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.joydigital.in/assets/images/logo.webp"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.joydigital.in" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.joydigital.in/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "You & Me Voyage", "item": "https://www.joydigital.in/case-studies/you-and-me-voyage" }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "ProfessionalService",
          "name": "Joy Digital",
          "url": "https://www.joydigital.in",
          "telephone": "+919080026133",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Madurai",
            "addressLocality": "Madurai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "625001",
            "addressCountry": "IN"
          }
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "[OWNER_NAME]"
        },
        "reviewBody": "Joy Digital built our website completely custom. It looks great, it is fast, and we are getting leads from it."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#FAF9FF] text-[#1F1B2D]">
        {/* Breadcrumb & Hero */}
        <section className="py-12 lg:py-16 bg-white border-b border-[#E9E4F2] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#6B6478] mb-6">
              <Link href="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-[#7C3AED] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[#7C3AED]">You &amp; Me Voyage</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider border border-[#7C3AED]/20">
                <Sparkles className="w-3.5 h-3.5" /> Chennai Client Success Story
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Client Location: Adyar, Chennai
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1B2D] tracking-tight mb-6 leading-tight">
              You &amp; Me Voyage: Custom Next.js Platform &amp; WhatsApp Lead Routing
            </h1>

            <p className="text-base sm:text-lg text-[#6B6478] max-w-3xl leading-relaxed mb-8">
              How Joy Digital engineered a bespoke, sub-second travel booking platform for <strong>You &amp; Me - Independent Voyage</strong>, a premier travel agency based in Adyar, Chennai, eliminating visitor drop-offs and routing qualified tour inquiries directly to WhatsApp.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://youandmevoyage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Visit Client Site (youandmevoyage.com)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/website-development-company-chennai"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#1F1B2D] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-slate-200 transition-all"
              >
                <span>Explore Chennai Web Development Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Client Testimonial Callout Banner */}
        <section className="py-12 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border-b border-purple-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border-2 border-[#7C3AED]/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
              <div className="flex items-center gap-1.5 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-base font-bold">★</span>
                ))}
                <span className="text-xs font-bold text-slate-600 ml-2">Verified Client Testimonial</span>
              </div>
              <blockquote className="text-base sm:text-lg italic text-[#1F1B2D] font-medium leading-relaxed mb-4">
                &ldquo;Joy Digital built our website completely custom. It looks great, it is fast, and we are getting leads from it.&rdquo;
              </blockquote>
              <div className="border-t border-slate-100 pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                <div>
                  <strong className="text-sm font-bold text-[#1F1B2D] block">[OWNER_NAME]</strong>
                  <span className="text-slate-500">Owner, You &amp; Me - Independent Voyage</span>
                </div>
                <span className="text-slate-500 font-medium">Location: Adyar, Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative: Problem, Solution, Tools */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            
            {/* The Client & Challenge */}
            <div className="bg-white border border-[#E9E4F2] p-8 sm:p-10 rounded-2xl shadow-sm text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full mb-4">
                <span>The Challenge</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#1F1B2D] mb-4">
                The Problem: Slow Legacy Templates Causing High Inbound Inquiry Drop-Offs
              </h2>
              <div className="text-sm text-[#6B6478] leading-relaxed space-y-4">
                <p>
                  <strong>You &amp; Me - Independent Voyage</strong> is an international travel consultancy operating out of <strong>Adyar, Chennai</strong>. They specialize in bespoke, tailor-made European holiday tours, luxury African safaris, and specialized international flight itineraries for high-net-worth families and corporate travelers across Tamil Nadu and global destinations.
                </p>
                <p>
                  Their previous digital presence relied on a traditional WordPress site burdened by heavy page builder plugins, unoptimized media assets, and sluggish server response times. When prospective travelers clicked on European packages from mobile phones, pages took 5+ seconds to render.
                </p>
                <p>
                  Even worse, the inquiry mechanism was limited to generic, lengthy contact forms that travelers routinely abandoned. In the fast-moving travel industry, potential clients expect instant answers, customized itineraries, and effortless WhatsApp connectivity. The agency needed a clean, bespoke digital platform that looked high-end, loaded instantly, and routed inquiries straight to their travel planners.
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-white border border-[#E9E4F2] p-8 sm:p-10 rounded-2xl shadow-sm text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4">
                <span>The Engineering Solution</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#1F1B2D] mb-4">
                The Solution: Bespoke Next.js Platform with 3-Step Tour Planner &amp; WhatsApp Lead Routing
              </h2>
              <div className="text-sm text-[#6B6478] leading-relaxed space-y-4">
                <p>
                  Joy Digital developed an entirely custom platform engineered on <strong>Next.js 15, React, and TypeScript</strong> with zero reliance on rigid, slow CMS themes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-sm text-[#1F1B2D] mb-1 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#7C3AED]" /> Sub-Second Edge Speed
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal">
                      Deployed on Vercel&apos;s global CDN with automated WebP image optimization and server-side static generation (SSG) for instant mobile loading.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-sm text-[#1F1B2D] mb-1 flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-[#10b981]" /> 3-Step Enquiry Planner
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal">
                      Built an interactive 3-step itinerary selector where travelers choose destinations, dates, and group size with zero friction.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-sm text-[#1F1B2D] mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" /> Direct WhatsApp Routing
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal">
                      Inquiries automatically format into pre-filled WhatsApp messages, allowing travelers to begin a direct conversation with the Adyar desk in 1 tap.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-sm text-[#1F1B2D] mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#10b981]" /> Travel Schema &amp; Local SEO
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal">
                      Injected Tour, Itinerary, and LocalBusiness schema markup geotargeted for Chennai travel searches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Tech Stack */}
            <div className="bg-white border border-[#E9E4F2] p-8 sm:p-10 rounded-2xl shadow-sm text-left">
              <h2 className="text-2xl font-extrabold text-[#1F1B2D] mb-6">
                Tools &amp; Technologies Used
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECH_STACK.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-[#1F1B2D] mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-600">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Screenshots */}
            <div className="space-y-6">
              <div className="text-left">
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
                  Visual Tour
                </span>
                <h2 className="text-2xl font-extrabold text-[#1F1B2D]">
                  Platform Screenshots &amp; User Experience
                </h2>
              </div>

              <div className="space-y-8">
                {SCREENSHOTS.map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#E9E4F2] rounded-2xl overflow-hidden shadow-sm">
                    <div className="relative w-full aspect-[16/9] bg-slate-900">
                      <Image
                        src={item.src}
                        alt={`${item.title} - You & Me Voyage`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="p-5 text-left border-t border-slate-100">
                      <h3 className="text-base font-bold text-[#1F1B2D] mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results / Deliverables */}
            <div className="bg-white border border-[#E9E4F2] p-8 sm:p-10 rounded-2xl shadow-sm text-left">
              <h2 className="text-2xl font-extrabold text-[#1F1B2D] mb-4">
                The Result: Fast, Custom Platform Generating Continuous Leads
              </h2>
              <div className="text-sm text-[#6B6478] leading-relaxed space-y-4">
                <p>
                  The custom website for You &amp; Me Voyage launched smoothly with zero downtime. By switching from a slow template to an engineered Next.js platform, the client gained complete ownership of their codebase, lightning-fast mobile performance, and automated WhatsApp inquiry routing.
                </p>
                <p>
                  As the client stated:
                </p>
                <div className="p-5 bg-purple-50 border-l-4 border-[#7C3AED] rounded-r-xl font-medium text-slate-800 italic">
                  &ldquo;Joy Digital built our website completely custom. It looks great, it is fast, and we are getting leads from it.&rdquo;
                </div>
                <p>
                  Prospective travelers can now explore custom itineraries on any mobile device and connect with the agency via WhatsApp in seconds.
                </p>
              </div>
            </div>

            {/* Related Service Links */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-left">
              <h3 className="text-base font-bold text-[#1F1B2D] mb-3">
                Need a Custom Website or SEO for Your Chennai Business?
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Explore our specialized services tailored for enterprises across Chennai:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/website-development-company-chennai"
                  className="bg-white border border-slate-200 hover:border-[#7C3AED] px-4 py-2.5 rounded-xl text-xs font-bold text-[#1F1B2D] hover:text-[#7C3AED] transition-colors"
                >
                  Website Development Company in Chennai &rarr;
                </Link>
                <Link
                  href="/seo-services-chennai"
                  className="bg-white border border-slate-200 hover:border-[#7C3AED] px-4 py-2.5 rounded-xl text-xs font-bold text-[#1F1B2D] hover:text-[#7C3AED] transition-colors"
                >
                  SEO Services in Chennai &rarr;
                </Link>
                <Link
                  href="/custom-website-development"
                  className="bg-white border border-slate-200 hover:border-[#7C3AED] px-4 py-2.5 rounded-xl text-xs font-bold text-[#1F1B2D] hover:text-[#7C3AED] transition-colors"
                >
                  Custom Website Development &rarr;
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
