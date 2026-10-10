"use client";

import React, { useState } from "react";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedWaLink from "@/components/ui/TrackedWaLink";

const INDUSTRIES = [
  {
    name: "Startups",
    desc: "Fast, custom landing pages and scalable web structures to establish brand presence, validate features, and collect early customer registrations.",
    pageUrl: "/landing-page-development",
  },
  {
    name: "Small Businesses",
    desc: "Affordable multipage platforms to present your services clearly, set up call-to-actions, and start ranking for local search queries.",
    pageUrl: "/website-for-small-business",
  },
  {
    name: "Clean Energy & Solar",
    desc: "High-speed B2B portals and local SEO for solar installers, EPC contractors, and clean energy developers across India and worldwide.",
    pageUrl: "/website-for-solar-companies",
  },
  {
    name: "Professional Services",
    desc: "Highly-trustworthy consulting platforms for legal advisors, accountants, and finance professionals to generate qualified booking leads.",
    pageUrl: "/website-for-consulting-companies",
  },
  {
    name: "Real Estate",
    desc: "Clean layout properties directories featuring localized maps, structured specifications lists, and quick WhatsApp callback triggers.",
    pageUrl: "/website-for-real-estate",
  },
  {
    name: "Hotels & Hospitality",
    desc: "Responsive portal sites showcasing room configurations, amenity directories, and direct inquiry forms to reduce booking fees.",
    pageUrl: "/website-for-hotels",
  },
  {
    name: "Healthcare & Clinics",
    desc: "Fully responsive layouts for dental clinics, practitioners, and medical setups. Includes online scheduling details and mapping.",
    pageUrl: "/website-for-hospitals",
  },
  {
    name: "Insurance Advisors",
    desc: "Dedicated website design & local SEO for insurance agents and LIC advisors in India to capture health, term, and NRI expat policy leads.",
    pageUrl: "/website-for-insurance-agents",
  },
  {
    name: "Education & Academies",
    desc: "Professional portals for academies, tutor setups, and trainers featuring structured curricula maps and signup triggers.",
    pageUrl: "/website-for-schools",
  },
  {
    name: "Tours & Safaris",
    desc: "Vibrant custom packages directories with pricing tiers, scheduling guides, and quick inquiry buttons for global tour and safari setups.",
    pageUrl: "/travel-website-development",
  },
  {
    name: "Headless E-commerce",
    desc: "Next-gen storefronts pre-rendering static catalogs to load instantly on slow mobile connections, reducing checkout abandonment.",
    pageUrl: "/website-for-ecommerce",
  },
  {
    name: "WordPress Migrations",
    desc: "Zero-downtime migrations from slow WordPress PHP setups to high-speed serverless Next.js with 100% SEO redirect preservation.",
    pageUrl: "/wordpress-to-nextjs-migration",
  },
];

export default function IndustryTabs() {
  const [selectedIndustry, setSelectedIndustry] = useState("Startups");
  const currentIndustry = INDUSTRIES.find(i => i.name === selectedIndustry);

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
          {currentIndustry?.desc}
        </p>
        <div className="mt-8 border-t border-[#E9E4F2] pt-6 flex flex-wrap gap-4 items-center">
          {currentIndustry?.pageUrl && (
            <TrackedLink
              href={currentIndustry.pageUrl}
              eventName={`View ${selectedIndustry} Page`}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.03] transition-all text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm"
            >
              Explore {selectedIndustry} Blueprint &rarr;
            </TrackedLink>
          )}
          <TrackedLink
            href="#enquiry-section"
            eventName={`Start ${selectedIndustry} Project`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3 rounded-lg border border-slate-200 transition-colors"
          >
            Request Proposal
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
