"use client";

import React from "react";
import TrackedWaLink from "@/components/ui/TrackedWaLink";

interface PricingSectionProps {
  country: string;
}

export default function PricingSection({ country }: PricingSectionProps) {
  const handleCtaEvent = (ctaName: string) => {
    if (typeof window !== "undefined") {
      const tracker = (window as any).trackJoyDigitalEvent;
      if (typeof tracker === "function") {
        tracker("cta_click", { button_text: ctaName, location: "homepage" });
      }
    }
  };

  const handleWaEvent = (location: string) => {
    if (typeof window !== "undefined") {
      const tracker = (window as any).trackJoyDigitalEvent;
      if (typeof tracker === "function") {
        tracker("whatsapp_click", { location });
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
      {/* Card 1: Starter Website */}
      <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-lg hover:border-[#7C3AED]/40 transition-all duration-300 reveal-hidden group">
        <div>
          <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">Standard Setup</span>
          <h3 className="text-lg font-black text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors">Starter Website</h3>
          <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-semibold">Perfect for new local service businesses wanting to establish professional authority online.</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-3xl font-black text-[#171126]">
              {country === "in" ? "₹25,000" : "$1,200"}
            </span>
            <span className="text-xs text-[#6B6478] font-semibold">
              {country === "in" ? "One-time" : "One-time ($1,200 USD)"}
            </span>
          </div>

          <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-semibold border-t border-[#E9E4F2] pt-6 mb-8">
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Custom responsive website</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Mobile optimization</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> WhatsApp integration</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Lead Contact form</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Basic SEO setup</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Google Search Console sync</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> XML Sitemap generated</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Google Analytics integration</li>
          </ul>
        </div>
        <a
          href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%2520am%2520interested%2520in%2520the%2520Starter%2520Website%2520package.%2520Please%2520share%2520the%2520details."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleWaEvent("pricing_starter");
            handleCtaEvent("Get Started - Starter");
          }}
          className="w-full inline-block text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs py-3.5 rounded-xl shadow-sm transition-all"
        >
          Get Started
        </a>
      </div>

      {/* Card 2: Business Growth Website (Recommended) */}
      <div className="bg-[#FAF9FF] border border-[#7C3AED] p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-lg hover:border-[#7C3AED]/60 transition-all duration-300 reveal-hidden group relative">
        <div className="absolute top-4 right-4">
          <span className="bg-[#7C3AED] text-white font-black text-[8px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">Recommended</span>
        </div>
        <div>
          <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">Enterprise & Growth</span>
          <h3 className="text-lg font-black text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors">Business Growth Website</h3>
          <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-semibold">Recommended for companies targeting local search rankings and active online client acquisition.</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-3xl font-black text-[#171126]">
              {country === "in" ? "₹45,000" : "$2,800"}
            </span>
            <span className="text-xs text-[#6B6478] font-semibold">
              {country === "in" ? "Starting rate" : "Starting rate ($2,800 USD)"}
            </span>
          </div>

          <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-semibold border-t border-[#E9E4F2] pt-6 mb-8">
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Custom website layout</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Conversion-focused UI/UX</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> SEO-ready architecture</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Advanced contact forms</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> WhatsApp leads sync</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Search Console configuration</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Google Analytics event tracking</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Core Web Vitals speed tuning</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Basic content copywriting check</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Admin panel / CMS option</li>
          </ul>
        </div>
        <a
          href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%2520need%2520a%2520quote%252520for%252520the%252520Business%252520Growth%252520Website%252520package.%252520Please%252520share%252520details."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleWaEvent("pricing_growth");
            handleCtaEvent("Request a Quote - Business");
          }}
          className="w-full inline-block text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs py-3.5 rounded-xl shadow-sm transition-all"
        >
          Request a Quote
        </a>
      </div>

      {/* Card 3: Website + SEO Growth */}
      <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-lg hover:border-[#7C3AED]/40 transition-all duration-300 reveal-hidden group">
        <div>
          <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">Complete SEO Solution</span>
          <h3 className="text-lg font-black text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors">Website + SEO Growth</h3>
          <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-semibold">Perfect for companies seeking persistent ranking growth, organic pipelines, and local lead dominance.</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-3xl font-black text-[#171126]">Custom Quote</span>
            <span className="text-xs text-[#6B6478] font-semibold">Monthly SEO retainer campaigns</span>
          </div>

          <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-semibold border-t border-[#E9E4F2] pt-6 mb-8">
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Custom website layout</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Technical SEO code audits</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Advanced On-page SEO setup</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> High-intent keyword research</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Local SEO & maps optimizations</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Google Business Profile setups</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Comprehensive content strategy</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Monthly SEO retainer campaigns</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Index monitoring & audit fixes</li>
            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500" /> Google Search Console reporting</li>
          </ul>
        </div>
        <a
          href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%2520am%2520interested%2520in%2520the%2520Website%2520%2B%2520SEO%2520Growth%2520package.%2520Please%2520connect%2520me%2520with%2520an%2520SEO%2520expert."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleWaEvent("pricing_seo");
            handleCtaEvent("Talk to an SEO Expert");
          }}
          className="w-full inline-block text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs py-3.5 rounded-xl shadow-sm transition-all"
        >
          Talk to an SEO Expert
        </a>
      </div>
    </div>
  );
}
