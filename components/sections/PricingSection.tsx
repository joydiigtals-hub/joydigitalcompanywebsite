"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const GetQuoteModal = dynamic(() => import("@/components/ui/GetQuoteModal"), {
  ssr: false,
});

interface PricingSectionProps {
  country?: string;
}

export default function PricingSection({ country = "in" }: PricingSectionProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    notes: string;
  } | null>(null);

  const handleOpenQuote = (name: string, notes: string) => {
    if (typeof window !== "undefined") {
      const tracker = (window as unknown as { trackJoyDigitalEvent?: (e: string, d: object) => void }).trackJoyDigitalEvent;
      if (typeof tracker === "function") {
        tracker("cta_click", { button_text: `Enquire Now - ${name}`, location: "homepage_packages" });
      }
    }
    setSelectedPlan({ name, notes });
    setIsQuoteOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Card 1: Starter Website */}
        <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-lg hover:border-[#7C3AED]/40 transition-all duration-300 reveal-hidden group">
          <div>
            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Standard Setup
            </span>
            <h3 className="text-xl font-bold text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors tracking-tight">
              Starter Website
            </h3>
            <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-medium min-h-[36px]">
              Perfect for new local service businesses wanting to establish professional authority online.
            </p>

            {/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Essential Presence</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-medium border-t border-[#E9E4F2] pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Custom responsive website layout</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Mobile-first speed optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> WhatsApp inquiry integration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Lead Contact &amp; routing form</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Basic On-page SEO setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Google Search Console sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> XML Sitemap generated</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Google Analytics integration</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() =>
              handleOpenQuote(
                "Starter Website",
                "Interested in Starter Website package. Please share custom quotation and deliverables."
              )
            }
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-white hover:bg-purple-50 text-primary-dark hover:text-[#7C3AED] border border-[#E9E4F2] hover:border-[#7C3AED]/40 font-bold text-xs py-3.5 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Business Growth Website (Recommended) */}
        <div className="bg-[#FAF9FF] border-2 border-[#7C3AED] p-8 rounded-[24px] shadow-lg flex flex-col justify-between text-left hover:shadow-xl transition-all duration-300 reveal-hidden group relative lg:-translate-y-2 z-10">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-bold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
              ★ Most Recommended
            </span>
          </div>
          <div>
            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Enterprise &amp; Growth
            </span>
            <h3 className="text-xl font-bold text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors tracking-tight">
              Business Growth Website
            </h3>
            <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-medium min-h-[36px]">
              Recommended for companies targeting local search rankings and active online client acquisition.
            </p>

            {/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Growth &amp; Conversion</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-medium border-t border-[#E9E4F2] pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Custom website layout with Next.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Conversion-focused UI/UX</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> SEO-ready architecture &amp; Schema</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Advanced multi-field contact forms</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> WhatsApp leads notification sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Search Console &amp; Analytics event tracking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Core Web Vitals speed tuning (&lt; 1.2s)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Admin panel / CMS option</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() =>
              handleOpenQuote(
                "Business Growth Website",
                "Interested in Business Growth Website package. Please share custom quotation and timeline."
              )
            }
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white font-bold text-xs py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: Custom Business Website */}
        <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-lg hover:border-[#7C3AED]/40 transition-all duration-300 reveal-hidden group">
          <div>
            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Enterprise &amp; Scale
            </span>
            <h3 className="text-xl font-bold text-[#1F1B2D] mb-2 group-hover:text-[#7C3AED] transition-colors tracking-tight">
              Custom Business Website
            </h3>
            <p className="text-xs text-[#6B6478] leading-relaxed mb-6 font-medium min-h-[36px]">
              Perfect for companies seeking persistent ranking growth, custom workflows, and high-scale architecture.
            </p>

            {/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Bespoke Engineering</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#6B6478] font-medium border-t border-[#E9E4F2] pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Scalable Next.js enterprise architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Complex database schema &amp; headless CMS</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Third-party CRM, ERP or payment gateway sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-intent keyword research &amp; SEO roadmap</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Multi-region global Edge CDN routing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Continuous automated CI/CD pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Dedicated developer support &amp; SLA</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 100% code ownership &amp; IP handover</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() =>
              handleOpenQuote(
                "Custom Business Website",
                "Interested in Custom Business Website package. Please connect me with an engineering lead for scoping."
              )
            }
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-white hover:bg-purple-50 text-primary-dark hover:text-[#7C3AED] border border-[#E9E4F2] hover:border-[#7C3AED]/40 font-bold text-xs py-3.5 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Integration */}
      <GetQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        showTrigger={false}
        source={`Homepage - ${selectedPlan?.name || "Website Package"}`}
        packageName={selectedPlan?.name}
        defaultService="Custom Next.js Development"
        initialNotes={selectedPlan?.notes}
      />
    </>
  );
}
