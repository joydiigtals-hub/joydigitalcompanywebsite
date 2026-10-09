"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ExternalLink, Sparkles, Star } from "lucide-react";
import TrackedWaLink from "@/components/ui/TrackedWaLink";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  fallback: string;
  width: number;
  height: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Homepage & Hero Showcase",
    subtitle: "High-converting European holiday tour landing experience",
    src: "/assets/images/portfolio/you-and-me-voyage-1.webp",
    fallback: "/assets/images/portfolio/you-and-me-voyage-1.png",
    width: 800,
    height: 450,
  },
  {
    id: 2,
    title: "Curated Tour Packages List",
    subtitle: "Dynamic package catalog with price filters & highlights",
    src: "/assets/images/portfolio/you-and-me-voyage-2.webp",
    fallback: "/assets/images/portfolio/you-and-me-voyage-2.png",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    title: "Detailed Day-by-Day Itineraries",
    subtitle: "Interactive travel schedules with one-click WhatsApp booking",
    src: "/assets/images/portfolio/you-and-me-voyage-3.webp",
    fallback: "/assets/images/portfolio/you-and-me-voyage-3.png",
    width: 600,
    height: 400,
  },
  {
    id: 4,
    title: "Travel Guides & SEO Blog Hub",
    subtitle: "Organic traffic funnels targeting high-intent traveler searches",
    src: "/assets/images/portfolio/you-and-me-voyage-4.webp",
    fallback: "/assets/images/portfolio/you-and-me-voyage-4.png",
    width: 600,
    height: 400,
  },
  {
    id: 5,
    title: "Interactive Route Map & Footer",
    subtitle: "Google Maps integration and direct traveler contact desk",
    src: "/assets/images/portfolio/you-and-me-voyage-5.webp",
    fallback: "/assets/images/portfolio/you-and-me-voyage-5.png",
    width: 600,
    height: 400,
  },
];

export default function PortfolioClient() {
  const [activeImage, setActiveImage] = useState<GalleryItem>(GALLERY_ITEMS[0]);

  const features = [
    "Next.js high-speed architecture with built-in search engine optimization (SEO).",
    "Custom UI/UX tailored with international travel branding & sleek typography.",
    "Online booking system & dynamic Europe holiday package / itinerary showcase.",
    "In-built Admin Panel (client can update SEO keywords and tour packages independently).",
    "Instant WhatsApp Direct Inquiries & social integrations for maximum lead conversion.",
  ];

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#FAF9FF] text-[#1F1B2D] min-h-screen">
        {/* Breadcrumb & Hero Introduction */}
        <section className="py-10 text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-[#6B6478] mb-6"
            >
              <Link href="/" className="hover:text-[#7C3AED] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#7C3AED]">Portfolio</span>
            </nav>

            <span className="inline-flex items-center gap-2 bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#7C3AED]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Featured Global Client Project
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#1F1B2D] tracking-tight mb-4">
              You & Me Voyage — <span className="text-[#7C3AED]">Travel Booking Platform</span>
            </h1>
            <p className="text-xs sm:text-base text-[#6B6478] max-w-2xl mx-auto leading-relaxed font-semibold">
              Explore how Joy Digital engineered a bespoke, sub-second Next.js web application for an international travel agency, driving organic rankings and 3x direct booking inquiries.
            </p>
          </div>
        </section>

        {/* Main Showcase Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-[#E9E4F2] rounded-[32px] p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* LEFT: Project Narrative, Specs & Testimonial */}
                <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[10px] font-black text-[#7C3AED] uppercase tracking-wider bg-[#7C3AED]/10 px-3 py-1 rounded-md border border-[#7C3AED]/20">
                      Travel & Tourism Web Engineering
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live in Production
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1F1B2D] mb-3">
                      You & Me Voyage
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B6478] font-semibold leading-relaxed">
                      High-performance, mobile-responsive travel booking platform focused on European holiday tour packages for couples, families, and private groups.
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 pt-2">
                    <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#7C3AED] mb-1 flex items-center gap-1.5">
                        <i className="fa-solid fa-circle-exclamation text-[10px]" /> The Challenge
                      </h3>
                      <p className="text-xs text-[#6B6478] font-medium leading-relaxed">
                        Needed an international travel booking platform designed for holiday package tours with sub-second load times, mobile responsiveness, and an intuitive user interface to replace slow generic templates.
                      </p>
                    </div>

                    <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                      <h3 className="text-xs font-black uppercase tracking-wider text-emerald-600 mb-1 flex items-center gap-1.5">
                        <i className="fa-solid fa-circle-check text-[10px]" /> Joy Digital Solution
                      </h3>
                      <p className="text-xs text-[#6B6478] font-medium leading-relaxed">
                        Engineered a custom serverless Next.js travel portal with targeted local SEO schemas, instant WhatsApp booking sync, and lightweight image pipelines.
                      </p>
                    </div>
                  </div>

                  {/* Key Features Delivered */}
                  <div>
                    <h4 className="text-xs font-black text-[#1F1B2D] uppercase tracking-wider mb-3 border-b border-[#E9E4F2] pb-2">
                      Key Features Delivered
                    </h4>
                    <div className="space-y-2.5">
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4B4458] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-[#6B6478] mb-2">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "Tailwind CSS", "Local SEO Schema", "Vercel Edge CDNs", "FormSubmit API"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-extrabold text-[#1F1B2D] bg-[#FAF9FF] border border-[#E9E4F2] px-3 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] rounded-2xl p-5 relative">
                    <div className="flex gap-1 text-amber-400 text-xs mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs italic text-[#1F1B2D] font-medium leading-relaxed mb-4">
                      &ldquo;Joy Digital did an amazing job. The website looks premium, loads super fast, and we are getting great organic leads!&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center font-bold text-xs text-[#7C3AED]">
                        YM
                      </div>
                      <div>
                        <span className="block text-xs font-extrabold text-[#1F1B2D]">Founder</span>
                        <span className="block text-[10px] font-semibold text-[#6B6478]">You & Me Voyage</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="https://www.youandmevoyage.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-extrabold transition-all shadow-md shadow-[#7C3AED]/20 hover:-translate-y-0.5"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <TrackedWaLink
                      href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20saw%20your%20You%20and%20Me%20Voyage%20portfolio%20and%20want%20a%20similar%20website."
                      location="portfolio_page_cta"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF9FF] hover:bg-slate-100 border border-[#E9E4F2] text-[#1F1B2D] text-xs font-extrabold transition-all hover:border-emerald-500/50"
                    >
                      <i className="fa-brands fa-whatsapp text-emerald-500 text-base" />
                      <span>I Want a Website Like This</span>
                    </TrackedWaLink>
                  </div>
                </div>

                {/* RIGHT: Visual Showcase & Gallery */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  {/* Large Featured Screen */}
                  <div className="w-full bg-[#0D0B18] rounded-2xl overflow-hidden border border-[#2B2346] shadow-xl relative group">
                    <div className="p-3 bg-[#17122B] border-b border-[#2B2346] flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="text-[11px] font-mono text-slate-400 ml-2">
                          youandmevoyage.com
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#A78BFA] bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                        {activeImage.title}
                      </span>
                    </div>

                    <div className="relative w-full overflow-hidden bg-slate-900">
                      <Image
                        src={activeImage.src}
                        alt={`${activeImage.title} - You & Me Voyage`}
                        width={activeImage.width}
                        height={activeImage.height}
                        priority
                        unoptimized
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Sub-Screens 2x2 Grid */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#1F1B2D] mb-3 flex items-center justify-between">
                      <span>Click to View Project Screenshots</span>
                      <span className="text-[10px] text-[#7C3AED] font-extrabold">5 Screenshots Available</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {GALLERY_ITEMS.map((item) => {
                        const isSelected = activeImage.id === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveImage(item)}
                            className={`text-left rounded-xl overflow-hidden border transition-all p-2.5 bg-white cursor-pointer ${
                              isSelected
                                ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/30 shadow-md bg-[#FAF9FF]"
                                : "border-[#E9E4F2] hover:border-[#7C3AED]/40 hover:shadow-sm"
                            }`}
                          >
                            <div className="w-full rounded-lg overflow-hidden border border-[#E9E4F2] mb-2 bg-slate-100 relative aspect-[16/10]">
                              <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover"
                              />
                            </div>
                            <span className="block text-[11px] font-extrabold text-[#1F1B2D] truncate">
                              {item.title}
                            </span>
                            <span className="block text-[10px] text-[#6B6478] truncate">
                              {item.subtitle}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Performance Metrics Box */}
                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-5 rounded-2xl">
                    <div className="text-[10px] font-black text-[#1F1B2D] uppercase tracking-wider border-b border-[#E9E4F2] pb-2 flex items-center justify-between">
                      <span>Verified Speed & Conversion Impact</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <i className="fa-solid fa-bolt text-[10px]" /> Core Web Vitals 98+
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-4">
                      <div className="p-3 bg-white rounded-xl border border-[#E9E4F2]">
                        <span className="block text-xl font-black text-emerald-600">0.8s</span>
                        <span className="block text-[10px] font-extrabold text-[#6B6478] uppercase mt-0.5">
                          Load Speed
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E9E4F2]">
                        <span className="block text-xl font-black text-[#7C3AED]">98/100</span>
                        <span className="block text-[10px] font-extrabold text-[#6B6478] uppercase mt-0.5">
                          Lighthouse
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E9E4F2]">
                        <span className="block text-xl font-black text-emerald-600">-62%</span>
                        <span className="block text-[10px] font-extrabold text-[#6B6478] uppercase mt-0.5">
                          Bounce Rate
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E9E4F2]">
                        <span className="block text-xl font-black text-[#7C3AED]">3x</span>
                        <span className="block text-[10px] font-extrabold text-[#6B6478] uppercase mt-0.5">
                          Bookings
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="py-20 bg-gradient-to-br from-[#1F1B2D] via-[#151221] to-[#0D0B18] text-white text-center relative overflow-hidden border-t border-[#2E2845]">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="inline-block bg-[#7C3AED]/20 text-[#A78BFA] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#7C3AED]/40 mb-6">
              Ready To Launch?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Want a Platform Like <span className="text-[#A78BFA]">You & Me Voyage?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              We design and engineer bespoke Next.js websites built for sub-second speeds, high search rankings, and direct WhatsApp / form conversions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20saw%20your%20You%20and%20Me%20Voyage%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Chat on WhatsApp
              </a>
              <Link
                href="/free-website-audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs py-4 px-8 rounded-xl shadow-lg shadow-[#7C3AED]/20 transition-all hover:-translate-y-0.5"
              >
                Claim Free Website Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
