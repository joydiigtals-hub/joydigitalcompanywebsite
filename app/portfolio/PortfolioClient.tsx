"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  client: string;
  image: string;
  gallery?: string[];
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  before: string;
  whatWeChanged: string;
  after: string;
  liveUrl?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "you-and-me-voyage",
    category: "websites",
    categoryLabel: "Travel & Destination Platform",
    title: "You & Me Voyage",
    client: "You & Me Voyage (Global Tours)",
    image: "/assets/images/portfolio/you-and-me-voyage-1.png",
    gallery: [
      "/assets/images/portfolio/you-and-me-voyage-1.png",
      "/assets/images/portfolio/you-and-me-voyage-2.png",
      "/assets/images/portfolio/you-and-me-voyage-3.png",
      "/assets/images/portfolio/you-and-me-voyage-4.png",
      "/assets/images/portfolio/you-and-me-voyage-5.png",
    ],
    challenge: "Needed an international travel booking platform designed for high-converting holiday packages with sub-second load times, mobile itinerary displays, and a sleek UI.",
    solution: "Engineered a bespoke Next.js travel portal with serverless architecture, instant WhatsApp booking sync, dynamic itinerary filters, and built-in local SEO schemas.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Local SEO Schema", "Vercel Edge"],
    features: ["Interactive Tour Itineraries", "One-Click WhatsApp Booking", "High Core Web Vitals (98+)", "Dynamic Pricing Cards"],
    before: "Generic slow CMS template with 4.2s mobile load time and high visitor drop-offs.",
    whatWeChanged: "Rebuilt from ground up in Next.js, added interactive package cards, and optimized all media assets.",
    after: "Loads in 0.8s, bounce rate dropped by 62%, and client saw a 3x boost in tour inquiries.",
    liveUrl: "https://www.youandmevoyage.com",
  },
  {
    id: "ganesan-associates",
    category: "websites",
    categoryLabel: "Insurance & Advisory Web Portal",
    title: "Ganesan Associates LIC & Star Health",
    client: "Ganesan Associates",
    image: "/assets/images/ganesan-associates.webp",
    challenge: "Slow WordPress website taking 4.5s on mobile devices, causing over 60% of prospective policy buyers to bounce before making contact.",
    solution: "Rebuilt the entire platform as a serverless static Next.js web application, optimized policy portfolios, and implemented automated lead inquiry forms.",
    techStack: ["Next.js", "React", "Tailwind CSS", "FormSubmit API", "WebP Assets"],
    features: ["WhatsApp Direct Policy Sync", "Fast PDF Brochure Downloads", "Local Business Schema Markup"],
    before: "4.5s mobile load time, high visitor bounces, only 2-3 inquiries per week.",
    whatWeChanged: "Replaced heavy plugins with static React code, compressed high-resolution images, and added sticky CTA widgets.",
    after: "1.1s mobile load speed, bounce rate fell by 55%, 18+ policy leads/week via WhatsApp.",
    liveUrl: "https://ganeshmuruganlic.com",
  },
  {
    id: "chithra-insurance",
    category: "websites",
    categoryLabel: "Digital Business Card & Advisor Portal",
    title: "Chithra LIC Advisor Portal",
    client: "Chithra Insurance Consultancy",
    image: "/assets/images/business-card-mockup.webp",
    challenge: "Zero web presence or digital identity. The advisor relied entirely on manual calling and physical paper flyers to find prospective clients.",
    solution: "Created a modern, mobile-first single-page personal advisor portfolio with policy grids, one-tap dialing, and quick contact triggers.",
    techStack: ["Next.js", "React", "Mobile First UI", "Google Fonts", "SEO Meta"],
    features: ["One-Click Contact Dialing", "Responsive Services Directory", "Local Map Pack Optimization"],
    before: "No digital visibility, manual phone outreach only.",
    whatWeChanged: "Designed a mobile-first digital card landing page and synced it with local SEO citations.",
    after: "Loads in 0.9s, ranks for local keyword queries, captures 12+ qualified advisor leads/month.",
    liveUrl: "https://chithrainsurance.com",
  },
  {
    id: "joy-digital-gbp",
    category: "marketing",
    categoryLabel: "Local SEO & Google Maps (GBP)",
    title: "Joy Digital Local Maps Ranking",
    client: "Joy Digital Agency (Regional Campaign)",
    image: "/assets/images/gbp-showcase.webp",
    challenge: "Low search ranks for local web developer keywords, with low-quality directory sites outranking the direct business listing.",
    solution: "Configured geotagged schema attributes, audited online NAP indicators, and optimized Google Business Profile categories.",
    techStack: ["Google Business Profile SEO", "NAP Directory Citations", "JSON-LD Schemas"],
    features: ["Google Maps Local 3-Pack Rank", "Citations Backlinks", "GBP Review Generation Strategy"],
    before: "Ranking #15 on local map pack searches, zero organic web inquiries.",
    whatWeChanged: "Corrected directory address differences, added geotagged visual updates, and synced website local tags.",
    after: "Ranked #1 for local designer search terms, driving 50+ organic leads/month.",
  },
  {
    id: "saas-landing",
    category: "websites",
    categoryLabel: "SaaS Product & Conversion Page",
    title: "Startup SaaS Product Landing Page",
    client: "TechStart Software (Product Launch)",
    image: "/assets/images/marketing-poster-mockup.webp",
    challenge: "Heavy page builder templates slowing desktop load speeds and resulting in sub-par trial signup rates.",
    solution: "Coded a high-converting single-page landing page optimized for fast load speeds, interactive tier cards, and simple user navigation.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel CDNs", "Conversion CRO"],
    features: ["Distraction-Free Signup Form", "Pricing Package Sliders", "Lighthouse Performance Audits"],
    before: "3.8s page speed, 2.5% visitor signup conversion rate.",
    whatWeChanged: "Rewrote visual code, optimized image assets, and streamlined form pathways.",
    after: "Loads in 1.0s, conversion rate rose to 6.8%, reducing sign-up friction.",
  },
];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeThumbnails, setActiveThumbnails] = useState<Record<string, string>>({});

  const filteredItems =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter);

  const handleSelectThumbnail = (caseId: string, imgPath: string) => {
    setActiveThumbnails((prev) => ({ ...prev, [caseId]: imgPath }));
  };

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#FAF9FF] text-[#1F1B2D] min-h-screen">
        {/* Breadcrumbs & Intro Header */}
        <section className="py-12 text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-semibold text-[#6B6478] mb-6">
              <Link href="/" className="hover:text-[#7C3AED] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#7C3AED]">Portfolio</span>
            </nav>

            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#7C3AED]/20 mb-4">
              Our Track Record & Proof of Work
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#1F1B2D] tracking-tight mb-4">
              Client Portfolio & <span className="text-[#7C3AED]">Case Studies</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#6B6478] max-w-2xl mx-auto leading-relaxed font-semibold">
              Explore high-performance websites, custom web applications, and search-optimized platforms engineered by Joy Digital for forward-thinking clients worldwide.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-y border-[#E9E4F2] bg-white sticky top-16 z-20 backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto px-6 flex justify-center gap-3 flex-wrap">
            {[
              { id: "all", label: "All Projects" },
              { id: "websites", label: "Web Development & Apps" },
              { id: "marketing", label: "Local SEO & Google Maps" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`font-extrabold text-xs px-6 py-3 rounded-full border transition-all duration-200 capitalize cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/15"
                    : "bg-white text-[#6B6478] border-[#E9E4F2] hover:bg-slate-50 hover:text-[#1F1B2D]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-16">
              {filteredItems.map((item) => {
                const currentImg = activeThumbnails[item.id] || item.image;

                return (
                  <article
                    key={item.id}
                    className="bg-white border border-[#E9E4F2] rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
                  >
                    {/* Left Column: Image, Gallery Thumbnails & Live Link */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                      <div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9E4F2] bg-slate-50">
                          <Image
                            src={currentImg}
                            alt={`${item.title} Preview Screenshot`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-all duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Interactive Gallery Thumbnails (if available) */}
                        {item.gallery && item.gallery.length > 1 && (
                          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                            {item.gallery.map((thumb, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSelectThumbnail(item.id, thumb)}
                                className={`relative w-14 h-11 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                                  currentImg === thumb
                                    ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/30 scale-105"
                                    : "border-[#E9E4F2] opacity-70 hover:opacity-100"
                                }`}
                                title={`View screenshot ${idx + 1}`}
                              >
                                <Image
                                  src={thumb}
                                  alt={`Thumbnail ${idx + 1}`}
                                  fill
                                  sizes="56px"
                                  className="object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-[#E9E4F2] text-[#1F1B2D] font-extrabold text-xs py-3.5 rounded-xl transition-all hover:border-[#7C3AED]/30"
                        >
                          Visit Live Website <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#7C3AED]" />
                        </a>
                      )}
                    </div>

                    {/* Right Column: Case Study Details */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-6 text-left">
                      <div>
                        <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
                          <span className="text-[9px] font-black text-[#7C3AED] uppercase tracking-wider bg-[#7C3AED]/5 px-2.5 py-1 rounded-md border border-[#7C3AED]/10">
                            {item.categoryLabel}
                          </span>
                          <span className="text-[10px] font-extrabold text-[#6B6478]">
                            Client: {item.client}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#1F1B2D] mb-4">
                          {item.title}
                        </h2>

                        {/* Details specs */}
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1 text-[#7C3AED]">
                              <i className="fa-solid fa-circle-exclamation text-[9px]" /> The Challenge
                            </h3>
                            <p className="text-xs text-[#6B6478] font-semibold leading-relaxed">
                              {item.challenge}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1 text-emerald-600">
                              <i className="fa-solid fa-circle-check text-[9px]" /> Our Engineering Solution
                            </h3>
                            <p className="text-xs text-[#6B6478] font-semibold leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap items-center gap-2 mt-5">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-extrabold text-[#6B6478] bg-[#FAF9FF] border border-[#E9E4F2] px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results Box */}
                      <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-5 rounded-2xl flex flex-col gap-3">
                        <div className="text-[10px] font-black text-[#1F1B2D] uppercase tracking-wider border-b border-[#E9E4F2] pb-1.5 flex items-center justify-between">
                          <span>Performance Metrics & Impact</span>
                          <span className="text-emerald-600 font-bold flex items-center gap-1">
                            <i className="fa-solid fa-bolt text-[10px]" /> Verified
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black text-rose-500 uppercase">
                              Before
                            </span>
                            <span className="font-bold text-[#6B6478] mt-0.5">{item.before}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black text-emerald-600 uppercase">
                              Delivered Outcome
                            </span>
                            <span className="font-extrabold text-[#1F1B2D] mt-0.5">
                              {item.after}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex flex-wrap items-center justify-end gap-3 mt-2">
                        <a
                          href={`https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20saw%20your%20case%20study%20for%20${encodeURIComponent(
                            item.title
                          )}.%20I%20would%20like%20to%20discuss%20starting%20a%20similar%20project%20for%20my%20business.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs py-3.5 px-6 rounded-xl shadow-md shadow-[#7C3AED]/15 hover:-translate-y-0.5 transition-all"
                        >
                          <span>Start a Similar Project</span>
                          <i className="fa-solid fa-arrow-right text-[10px]" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
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
              Have a Vision for Your <span className="text-[#A78BFA]">Next Website?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              We build fast, secure, search-optimized Next.js web applications tailored to turn your visitors into customers. Get in touch for a transparent quote and strategy audit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
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
                <i className="fa-solid fa-arrow-right text-xs" />
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
