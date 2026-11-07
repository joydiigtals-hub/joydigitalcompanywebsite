"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Stethoscope, Building2, GraduationCap, ShoppingBag, Utensils, CheckCircle2 } from "lucide-react";

// ============================================================================
// DATA ARRAY: INDUSTRY SPECIALIZATIONS
// Add or edit industries here to automatically update tabs and preview cards.
// ============================================================================

export interface IndustryBullet {
  text: string;
  icon: string;
}

export interface FloatingMiniCard {
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  iconClass: string;
  // TODO: Replace these placeholder metrics with verified client case-study numbers
  headlineMetric: string;
  metricLabel: string;
  resultDescription: string;
  bullets: IndustryBullet[];
  miniCards: [FloatingMiniCard, FloatingMiniCard];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "travel-safari",
    name: "Travel & Safari",
    slug: "travel-safari",
    iconClass: "fa-solid fa-compass",
    // TODO: Replace with real case-study metric
    headlineMetric: "+42%",
    metricLabel: "Direct Tour Inquiries",
    resultDescription: "3-step itinerary funnels engineered for overseas travelers and safari adventurers.",
    bullets: [
      { text: "Tour package and itinerary CMS", icon: "fa-solid fa-map-location-dot" },
      { text: "Direct WhatsApp enquiry and booking", icon: "fa-brands fa-whatsapp" },
      { text: "Mobile-first for global travelers", icon: "fa-solid fa-mobile-screen-button" },
    ],
    miniCards: [
      {
        title: "New Tour Enquiry",
        subtitle: "Serengeti 7-Day Safari • WhatsApp",
        icon: "fa-brands fa-whatsapp",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        title: "Mobile PageSpeed",
        subtitle: "99/100 Core Web Vitals",
        icon: "fa-solid fa-bolt",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      },
    ],
  },
  {
    id: "healthcare-clinics",
    name: "Healthcare & Clinics",
    slug: "healthcare-clinics",
    iconClass: "fa-solid fa-stethoscope",
    // TODO: Replace with real case-study metric
    headlineMetric: "3.4x",
    metricLabel: "Appointment Bookings",
    resultDescription: "Frictionless patient scheduling with automated doctor calendar synchronization.",
    bullets: [
      { text: "Online appointment booking", icon: "fa-solid fa-calendar-check" },
      { text: "Doctor profiles and treatment pages", icon: "fa-solid fa-user-doctor" },
      { text: "Google reviews integration", icon: "fa-solid fa-star" },
    ],
    miniCards: [
      {
        title: "Appointment Booked",
        subtitle: "Dr. Consultation • Today 11:30 AM",
        icon: "fa-solid fa-circle-check",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        title: "Patient Trust Score",
        subtitle: "4.9★ Google Reviews (380+)",
        icon: "fa-solid fa-star",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    iconClass: "fa-solid fa-building",
    // TODO: Replace with real case-study metric
    headlineMetric: "+68%",
    metricLabel: "Site Visit Leads",
    resultDescription: "Filterable luxury property catalogs with instant brochure & visit booking.",
    bullets: [
      { text: "Property listings with filters", icon: "fa-solid fa-sliders" },
      { text: "Lead capture forms", icon: "fa-solid fa-file-signature" },
      { text: "Virtual tour embeds", icon: "fa-solid fa-vr-cardboard" },
    ],
    miniCards: [
      {
        title: "Brochure Downloaded",
        subtitle: "Luxury 3BHK Villa • Phone Verified",
        icon: "fa-solid fa-download",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      },
      {
        title: "3D Virtual Tour",
        subtitle: "Active Immersive Walkthrough",
        icon: "fa-solid fa-eye",
        badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      },
    ],
  },
  {
    id: "education",
    name: "Education",
    slug: "education",
    iconClass: "fa-solid fa-graduation-cap",
    // TODO: Replace with real case-study metric
    headlineMetric: "+55%",
    metricLabel: "Admission Enquiries",
    resultDescription: "Interactive curriculum discovery that simplifies the enrollment decision.",
    bullets: [
      { text: "Course and program pages", icon: "fa-solid fa-book-open" },
      { text: "Admission enquiry flow", icon: "fa-solid fa-user-graduate" },
      { text: "Student or parent portal", icon: "fa-solid fa-chalkboard-user" },
    ],
    miniCards: [
      {
        title: "New Admission Application",
        subtitle: "Batch 2026-27 • Verification Done",
        icon: "fa-solid fa-user-plus",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        title: "Curriculum Downloads",
        subtitle: "1,240+ Prospective Parents",
        icon: "fa-solid fa-file-pdf",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    slug: "ecommerce",
    iconClass: "fa-solid fa-cart-shopping",
    // TODO: Replace with real case-study metric
    headlineMetric: "0.8s",
    metricLabel: "Checkout Load Speed",
    resultDescription: "Ultra-fast Next.js storefronts with 1-click Razorpay, Stripe & WhatsApp cart.",
    bullets: [
      { text: "Fast product pages", icon: "fa-solid fa-bolt" },
      { text: "Payment gateway integration", icon: "fa-solid fa-credit-card" },
      { text: "Cart recovery and upsells", icon: "fa-solid fa-arrow-trend-up" },
    ],
    miniCards: [
      {
        title: "Order Confirmed",
        subtitle: "₹4,890 • Instant UPI Payment",
        icon: "fa-solid fa-bag-shopping",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        title: "Cart Recovery Engine",
        subtitle: "+28% Automated Recoveries",
        icon: "fa-solid fa-rotate-left",
        badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      },
    ],
  },
  {
    id: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    slug: "restaurants-hospitality",
    iconClass: "fa-solid fa-utensils",
    // TODO: Replace with real case-study metric
    headlineMetric: "+80%",
    metricLabel: "Direct Table Bookings",
    resultDescription: "Zero-commission direct dining reservation system with interactive digital menus.",
    bullets: [
      { text: "Menu and table booking", icon: "fa-solid fa-calendar-days" },
      { text: "Google Maps and reviews", icon: "fa-solid fa-location-dot" },
      { text: "WhatsApp ordering", icon: "fa-brands fa-whatsapp" },
    ],
    miniCards: [
      {
        title: "Table Reserved",
        subtitle: "Party of 4 • Tonight 7:30 PM",
        icon: "fa-solid fa-utensils",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        title: "Google Maps Footfall",
        subtitle: "#1 Local Dining Rank • +45% Visits",
        icon: "fa-solid fa-location-arrow",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      },
    ],
  },
];

export default function IndustrySpecializationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentIndustry = INDUSTRIES_DATA[activeTab];

  // Auto-rotate every 6s until user interacts, and pause on hover
  useEffect(() => {
    if (hasInteracted || isHovered) return;

    const timer = setInterval(() => {
      handleTabSwitch((prev) => (prev + 1) % INDUSTRIES_DATA.length, false);
    }, 6000);

    return () => clearInterval(timer);
  }, [hasInteracted, isHovered]);

  const handleTabSwitch = (newIndex: number | ((prev: number) => number), userTriggered = true) => {
    if (userTriggered) {
      setHasInteracted(true);
    }
    setIsAnimating(true);
    setActiveTab(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 250);
  };

  // Keyboard navigation handler for tabs (Arrows, Home, End)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % INDUSTRIES_DATA.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = INDUSTRIES_DATA.length - 1;
    } else {
      return;
    }

    handleTabSwitch(nextIndex, true);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="industry-specialization"
      className="py-16 lg:py-20 bg-white border-b border-[#E9E4F2] relative z-10 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-left">
          <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
            INDUSTRY SPECIALIZATION
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F1B2D] mb-4 leading-tight tracking-tight">
            Websites Built for How Your Industry Converts
          </h2>
          <p className="text-sm sm:text-base text-[#6B6478] font-medium leading-relaxed max-w-2xl">
            Every industry has different customers and different conversion triggers. We design websites around how your buyers actually decide.
          </p>
        </div>

        {/* Desktop & Mobile Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Vertical list of Industry Tabs (Desktop) / Scrollable chip row (Mobile) */}
          <div className="lg:col-span-4">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label="Industry Specializations"
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 gap-2 sm:gap-2.5 no-scrollbar scroll-smooth snap-x"
            >
              {INDUSTRIES_DATA.map((ind, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={ind.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    role="tab"
                    id={`tab-${ind.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${ind.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabSwitch(idx, true)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`group shrink-0 snap-start flex items-center justify-between text-left px-4 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-purple-600/20 translate-x-0 lg:translate-x-1"
                        : "bg-[#FAF9FF] hover:bg-[#F3F0FF] text-[#1F1B2D] border-[#E9E4F2] hover:border-[#7C3AED]/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm transition-colors ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white text-[#7C3AED] border border-[#E9E4F2] group-hover:border-[#7C3AED]/40"
                        }`}
                      >
                        <i className={ind.iconClass} />
                      </div>
                      <span className="whitespace-nowrap">{ind.name}</span>
                    </div>

                    {/* Active accent chevron (Desktop only) */}
                    <i
                      className={`fa-solid fa-chevron-right text-xs transition-transform hidden lg:block ${
                        isActive ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-1 text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Active Industry Content & Preview Card */}
          <div className="lg:col-span-8">
            <div
              role="tabpanel"
              id={`panel-${currentIndustry.id}`}
              aria-labelledby={`tab-${currentIndustry.id}`}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-250 ease-out ${
                isAnimating ? "opacity-40 scale-[0.99] translate-y-1" : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              {/* Feature Bullets & CTAs */}
              <div className="md:col-span-6 space-y-6 text-left">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] block mb-1">
                    Industry Feature Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1B2D] leading-snug">
                    {currentIndustry.name} Conversion Blueprint
                  </h3>
                </div>

                {/* 3 Specific Industry Bullets with custom icons */}
                <ul className="space-y-3.5" role="list">
                  {currentIndustry.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-3.5 bg-[#FAF9FF] border border-[#E9E4F2] p-3 sm:p-3.5 rounded-2xl hover:border-[#7C3AED]/40 transition-colors shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-100/80 text-[#7C3AED] flex items-center justify-center shrink-0 text-xs shadow-2xs">
                        <i className={bullet.icon} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#1F1B2D] leading-tight">
                        {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Below Content: Primary CTA & Secondary text link */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href={`/web-design-for-${currentIndustry.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-purple-600/20 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
                  >
                    <span>See {currentIndustry.name} Websites We Built</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>

                  <Link
                    href="/contact?service=audit"
                    className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] hover:underline px-2 py-2 text-center transition-colors cursor-pointer"
                  >
                    <span>Get a Free Website Audit</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* Dynamic Preview Card (Navy to Purple Gradient, 24px radius, soft shadow, subtle glow) */}
              <div className="md:col-span-6 relative">
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7C3AED]/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative bg-gradient-to-br from-[#160E2E] via-[#1E143E] to-[#120B24] rounded-[24px] p-6 sm:p-7 border border-[#352562]/70 shadow-2xl overflow-hidden text-left text-white">
                  
                  {/* Card Window Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[10px] font-mono font-bold tracking-wider text-purple-300/80 uppercase">
                      {currentIndustry.name} Engine
                    </div>
                  </div>

                  {/* Large Icon & Headline Metric */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-purple-900/50 border border-white/20 shrink-0">
                        <i className={currentIndustry.iconClass} />
                      </div>
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-emerald-400 tracking-tight leading-none">
                          {currentIndustry.headlineMetric}
                        </div>
                        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mt-1">
                          {currentIndustry.metricLabel}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[12.5px] text-slate-300 font-medium leading-relaxed">
                      {currentIndustry.resultDescription}
                    </p>
                  </div>

                  {/* 2 Small Floating Mini-Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {currentIndustry.miniCards.map((mini, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-2xl p-3 sm:p-3.5 transition-colors backdrop-blur-xs flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {mini.title}
                          </span>
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] border ${mini.badgeColor}`}>
                            <i className={mini.icon} />
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white tracking-tight leading-snug">
                          {mini.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS for custom scrollbar handling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
}
