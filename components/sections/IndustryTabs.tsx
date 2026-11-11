"use client";

import React, { useState } from "react";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedWaLink from "@/components/ui/TrackedWaLink";
import GetQuoteModal, { QUOTE_SERVICES, type QuoteServiceType } from "@/components/ui/GetQuoteModal";

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
                ? "bg-[#C9F600] text-[#3B1580] font-extrabold border-[#C9F600] shadow-md shadow-[#C9F600]/10"
                : "bg-[#3B1580] text-[#FFFFFF] border-[#FFFFFF]/20 hover:border-[#C9F600]/50"
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      <div className="lg:col-span-8 bg-[#3B1580] border border-[#FFFFFF]/20 p-8 sm:p-12 rounded-[24px] shadow-sm text-left h-full flex flex-col justify-center min-h-[300px] hover:border-[#7C3AED]/15 transition-colors">
        <span className="text-[10px] font-extrabold text-[#C9F600] uppercase tracking-widest block mb-3">Target Industry Blueprint</span>
        <h3 className="text-2xl font-black text-[#FFFFFF] mb-4">Joy Digital for {selectedIndustry}</h3>
        <p className="text-sm text-[#FFFFFF]/80 leading-relaxed font-normal max-w-xl">
          {currentIndustry?.desc}
        </p>
        <div className="mt-8 border-t border-[#FFFFFF]/20 pt-6 flex flex-wrap gap-4 items-center">
          {currentIndustry?.pageUrl && (
            <TrackedLink
              href={currentIndustry.pageUrl}
              eventName={`View ${selectedIndustry} Page`}
              className="bg-[#C9F600] hover:bg-[#b8f000] hover:scale-[1.03] transition-all text-[#3B1580] font-extrabold text-xs px-6 py-3 rounded-lg shadow-sm"
            >
              Explore {selectedIndustry} Blueprint &rarr;
            </TrackedLink>
          )}
          <GetQuoteModal
            triggerText="Request Proposal"
            source={`Industry Blueprint - ${selectedIndustry}`}
            defaultService={
              (QUOTE_SERVICES.includes(selectedIndustry as any)
                ? selectedIndustry
                : "Custom Next.js Development") as QuoteServiceType
            }
            triggerClassName="bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] hover:border-[#C9F600] font-bold text-xs px-6 py-3 rounded-lg border border-[#FFFFFF]/25 transition-colors inline-flex items-center justify-center cursor-pointer shadow-none"
            replaceClassName
            hideIcons
          />
          <TrackedWaLink
            href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I'd%20like%20to%20discuss%20our%20project."
            location="who_we_help"
            className="text-xs text-[#C9F600] hover:underline font-bold flex items-center gap-1.5 group"
          >
            <i className="fa-brands fa-whatsapp text-sm group-hover:scale-110 transition-transform" /> Chat on WhatsApp
          </TrackedWaLink>
        </div>
      </div>
    </div>
  );
}
