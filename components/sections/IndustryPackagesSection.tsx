"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import {
  INDUSTRIES_DATA,
  IndustryData,
  IndustryPlan,
} from "@/data/industryPackages";

// Dynamically load the lead capture modal
const GetQuoteModal = dynamic(() => import("@/components/ui/GetQuoteModal"), {
  ssr: false,
});

interface IndustryPackagesSectionProps {
  initialIndustryId?: string;
  title?: string;
  subtitle?: string;
}

export default function IndustryPackagesSection({
  initialIndustryId = "travel-tourism",
  title = "Tailored Website Packages for Your Industry",
  subtitle = "Select your industry below to explore packages engineered specifically for your business model. Every solution includes transparent deliverables and dedicated engineering support.",
}: IndustryPackagesSectionProps) {
  // 1. Active Industry State
  const [selectedIndustryId, setSelectedIndustryId] =
    useState<string>(initialIndustryId);

  // 2. Modal Open State
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<{
    plan: IndustryPlan;
    industry: IndustryData;
  } | null>(null);

  const currentIndustry: IndustryData =
    INDUSTRIES_DATA.find((ind) => ind.id === selectedIndustryId) ||
    INDUSTRIES_DATA[0];

  const handleEnquire = (plan: IndustryPlan) => {
    setActivePlan({
      plan,
      industry: currentIndustry,
    });
    setIsQuoteOpen(true);
  };

  const planOrder: ("starter" | "growth" | "custom")[] = [
    "starter",
    "growth",
    "custom",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="packages">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industry-Specific Packages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Industry Selector Controls */}
        <div className="mb-10 lg:mb-14">
          {/* Mobile Dropdown Selector (visible on small screens) */}
          <div className="block lg:hidden mb-4">
            <label
              htmlFor="industry-mobile-select"
              className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2"
            >
              Choose Your Industry
            </label>
            <div className="relative">
              <select
                id="industry-mobile-select"
                value={selectedIndustryId}
                onChange={(e) => setSelectedIndustryId(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white border-2 border-primary/20 rounded-xl text-sm font-bold text-primary-dark shadow-sm focus:outline-none focus:border-primary appearance-none cursor-pointer"
              >
                {INDUSTRIES_DATA.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-primary">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Interactive Pill Tabs */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 max-w-6xl mx-auto p-2 bg-slate-50/80 border border-slate-200/80 rounded-2xl shadow-sm">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustryId(ind.id)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30 scale-[1.02]"
                      : "text-slate-600 hover:text-primary-dark hover:bg-white"
                  }`}
                >
                  <i className={`${ind.icon} text-xs`} />
                  <span>{ind.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Industry Focus Description Banner */}
          <div className="mt-4 text-center">
            <p className="inline-flex items-center gap-2 text-xs text-text-secondary bg-purple-50/70 border border-purple-100 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] shrink-0" />
              <span>
                Viewing tailored architecture for:{" "}
                <strong className="text-primary-dark">
                  {currentIndustry.name}
                </strong>
              </span>
            </p>
          </div>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {planOrder.map((planKey) => {
            const plan = currentIndustry.plans[planKey];
            const isGrowth = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`bg-white border rounded-[24px] p-7 sm:p-8 flex flex-col relative transition-all duration-300 ${
                  isGrowth
                    ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/15 shadow-xl lg:-translate-y-2 z-10"
                    : "border-[#E5E7EB] hover:border-purple-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Most Recommended Tag */}
                {isGrowth && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    ★ Most Recommended
                  </span>
                )}

                {/* Plan Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-dark tracking-tight">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Deliverables Scope Badge (Zero Price Display) */}
                <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                    <span>{plan.tierBadge}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                    Custom Quote
                  </span>
                </div>

                {/* Industry Specific Feature Deliverables List */}
                <div className="flex-grow border-t border-slate-100 pt-5 mb-8">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                    <i className="fa-solid fa-list-check text-[#7C3AED]" />
                    <span>Included Industry Features:</span>
                  </p>
                  <ul className="flex flex-col gap-3 text-xs text-text-primary">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Now CTA Trigger */}
                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    onClick={() => handleEnquire(plan)}
                    className={`w-full font-bold text-xs py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isGrowth
                        ? "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5 active:translate-y-0"
                        : "bg-slate-50 hover:bg-purple-50 text-primary-dark hover:text-[#7C3AED] border border-[#E5E7EB] hover:border-[#7C3AED]/30 hover:-translate-y-0.5 active:translate-y-0"
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 text-center text-xs text-text-muted flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-shield-check text-[#7C3AED]" />
            100% Custom Code Ownership
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-gauge-high text-emerald-500" />
            95+ Core Web Vitals Guaranteed
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-headset text-primary" />
            Direct Engineer Support &amp; SLA
          </span>
        </div>
      </div>

      {/* Lead Capture Modal Sync */}
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        showTrigger={false}
        source={`Website Development - ${activePlan?.industry.name} - ${activePlan?.plan.name}`}
        packageName={`${activePlan?.plan.name} (${activePlan?.industry.shortName})`}
        defaultService="Custom Next.js Development"
        initialNotes={
          activePlan
            ? `Interested in the "${activePlan.plan.name}" package tailored for ${activePlan.industry.name}.\n\nDeliverables needed: ${activePlan.plan.features
                .slice(0, 4)
                .join(", ")}.\n\nPlease share customized proposal and timeline.`
            : `Interested in website development package for ${currentIndustry.name}.`
        }
      />
    </section>
  );
}
