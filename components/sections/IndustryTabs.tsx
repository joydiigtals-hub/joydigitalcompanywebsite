"use client";

import React, { useState } from "react";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedWaLink from "@/components/ui/TrackedWaLink";

const INDUSTRIES = [
  {
    name: "Startups",
    desc: "Fast, custom landing pages and scalable web structures to establish brand presence, validate features, and collect early customer registrations."
  },
  {
    name: "Small Businesses",
    desc: "Affordable multipage platforms to present your services clearly, set up call-to-actions, and start ranking for local search queries."
  },
  {
    name: "Entrepreneurs",
    desc: "Clean digital portals and personal portfolios built quickly to showcase consultation models, book discovery slots, and accept details."
  },
  {
    name: "Professional Services",
    desc: "Highly-trustworthy consulting platforms for legal advisors, accountants, and finance professionals to generate qualified booking leads."
  },
  {
    name: "Real Estate",
    desc: "Clean layout properties directories featuring localized maps, structured specifications lists, and quick WhatsApp callback triggers."
  },
  {
    name: "Hotels & Hospitality",
    desc: "Responsive portal sites showcasing room configurations, amenity directories, and direct inquiry forms to reduce booking fees."
  },
  {
    name: "Healthcare",
    desc: "Fully responsive layouts for dental clinics, practitioners, and medical setups. Includes online scheduling details and mapping."
  },
  {
    name: "Insurance",
    desc: "Lead acquisition templates for independent agents to present policy features and capture structured advisor consultations."
  },
  {
    name: "Education",
    desc: "Professional portals for academies, tutor setups, and trainers featuring structured curricula maps and signup triggers."
  },
  {
    name: "Tours & Travel",
    desc: "Vibrant custom packages directories with pricing tiers, scheduling guides, and quick inquiry buttons for travel setups."
  },
  {
    name: "E-commerce",
    desc: "Next-gen storefronts pre-rendering static catalogs to load instantly on slow mobile connections, reducing checkout abandonment."
  },
  {
    name: "Local Businesses",
    desc: "Localized search optimization setups combined with maps directory syncs to guarantee exposure in nearby queries."
  }
];

export default function IndustryTabs() {
  const [selectedIndustry, setSelectedIndustry] = useState("Startups");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal-hidden">
      <div className="lg:col-span-4 flex flex-col gap-2.5 overflow-x-auto lg:overflow-visible flex-row lg:flex-col pb-4 lg:pb-0 scrollbar-thin">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.name}
            onClick={() => setSelectedIndustry(ind.name)}
            className={`text-xs px-5 py-3.5 rounded-xl font-bold border transition-all text-left whitespace-nowrap lg:whitespace-normal cursor-pointer ${
              selectedIndustry === ind.name
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/10"
                : "bg-white text-[#1F1B2D] border-[#E9E4F2] hover:bg-slate-50"
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      <div className="lg:col-span-8 bg-white border border-[#E9E4F2] p-8 sm:p-12 rounded-[24px] shadow-sm text-left h-full flex flex-col justify-center min-h-[300px] hover:border-[#7C3AED]/15 transition-colors">
        <span className="text-[10px] font-extrabold text-[#7C3AED] uppercase tracking-widest block mb-3">Target Industry Blueprint</span>
        <h3 className="text-2xl font-black text-[#1F1B2D] mb-4">Joy Digital for {selectedIndustry}</h3>
        <p className="text-sm text-[#6B6478] leading-relaxed font-semibold max-w-xl">
          {INDUSTRIES.find(i => i.name === selectedIndustry)?.desc}
        </p>
        <div className="mt-8 border-t border-[#E9E4F2] pt-6 flex flex-wrap gap-4 items-center">
          <TrackedLink
            href="#enquiry-section"
            eventName={`Start ${selectedIndustry} Project`}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.03] transition-all text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm"
          >
            Start {selectedIndustry} Project
          </TrackedLink>
          <TrackedWaLink
            href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I'd%20like%20to%20discuss%20our%20project."
            location="who_we_help"
            className="text-xs text-[#10b981] hover:text-[#059669] font-bold flex items-center gap-1.5 group"
          >
            <i className="fa-brands fa-whatsapp text-sm group-hover:scale-110 transition-transform" /> Chat on WhatsApp
          </TrackedWaLink>
        </div>
      </div>
    </div>
  );
}
