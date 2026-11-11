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
        <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-xl hover:border-[#C9F600] transition-all duration-300 reveal-hidden group">
          <div>
            <span className="inline-block bg-[#3B1580] text-[#C9F600] border border-[#FFFFFF]/20 font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Standard Setup
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 transition-colors tracking-tight">
              Starter Website
            </h3>
            <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-6 font-medium min-h-[36px]">
              Perfect for new local service businesses wanting to establish professional authority online.
            </p>

            {/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-[#3B1580] border border-[#FFFFFF]/20 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#C9F600]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider bg-[#3B1580] px-2.5 py-1 rounded-md border border-[#FFFFFF]/20 shadow-xs">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#FFFFFF]/90 font-medium border-t border-[#FFFFFF]/15 pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Custom responsive website layout</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Mobile-first speed optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> WhatsApp inquiry integration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Lead Contact &amp; routing form</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Basic On-page SEO setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Google Search Console sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> XML Sitemap generated</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Google Analytics integration</li>
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
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] border border-[#FFFFFF]/30 hover:border-[#C9F600] hover:text-[#C9F600] font-bold text-xs py-3.5 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Business Growth Website (Recommended) */}
        <div className="bg-[#3B1580] border-2 border-[#C9F600] p-8 rounded-[24px] shadow-2xl flex flex-col justify-between text-left transition-all duration-300 reveal-hidden group relative lg:-translate-y-2 z-10">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-[#C9F600] text-[#3B1580] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              ★ Most Recommended
            </span>
          </div>
          <div>
            <span className="inline-block bg-[#3B1580] text-[#C9F600] border border-[#FFFFFF]/20 font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Enterprise &amp; Growth
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 transition-colors tracking-tight">
              Business Growth Website
            </h3>
            <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-6 font-medium min-h-[36px]">
              Recommended for companies targeting local search rankings and active online client acquisition.
            </p>

            {/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-[#3B1580] border border-[#FFFFFF]/20 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#C9F600]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider bg-[#3B1580] px-2.5 py-1 rounded-md border border-[#FFFFFF]/20 shadow-xs">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#FFFFFF]/90 font-medium border-t border-[#FFFFFF]/15 pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Custom website layout with Next.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Conversion-focused UI/UX</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> SEO-ready architecture &amp; Schema</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Advanced multi-field contact forms</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> WhatsApp leads notification sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Search Console &amp; Analytics event tracking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Core Web Vitals speed tuning (&lt; 1.2s)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Admin panel / CMS option</li>
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
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-[#C9F600] hover:opacity-90 text-[#3B1580] font-bold text-xs py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: Custom Business Website */}
        <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-8 rounded-[24px] shadow-sm flex flex-col justify-between text-left hover:shadow-xl hover:border-[#C9F600] transition-all duration-300 reveal-hidden group">
          <div>
            <span className="inline-block bg-[#3B1580] text-[#C9F600] border border-[#FFFFFF]/20 font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Enterprise &amp; Scale
            </span>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 transition-colors tracking-tight">
              Custom Business Website
            </h3>
            <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-6 font-medium min-h-[36px]">
              Perfect for companies seeking persistent ranking growth, custom workflows, and high-scale architecture.
            </p>

            {/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-[#3B1580] border border-[#FFFFFF]/20 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#C9F600]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#FFFFFF] uppercase tracking-wider bg-[#3B1580] px-2.5 py-1 rounded-md border border-[#FFFFFF]/20 shadow-xs">
                Custom Quote
              </span>
            </div>

            <ul className="flex flex-col gap-3 text-xs text-[#FFFFFF]/90 font-medium border-t border-[#FFFFFF]/15 pt-6 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Scalable Next.js enterprise architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Complex database schema &amp; headless CMS</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Third-party CRM, ERP or payment gateway sync</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> High-intent keyword research &amp; SEO roadmap</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Multi-region global Edge CDN routing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Continuous automated CI/CD pipelines</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> Dedicated developer support &amp; SLA</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C9F600] shrink-0" /> 100% code ownership &amp; IP handover</li>
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
            className="w-full inline-flex items-center justify-center gap-2 text-center bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] border border-[#FFFFFF]/30 hover:border-[#C9F600] hover:text-[#C9F600] font-bold text-xs py-3.5 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
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
