"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Zap, LayoutDashboard, ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function CaseStudyTravelVoyage() {
  const scrollToForm = () => {
    const el = document.getElementById("name") || document.getElementById("service-overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (document.getElementById("name")) {
        (document.getElementById("name") as HTMLInputElement)?.focus();
      }
    }
  };

  return (
    <section 
      aria-label="Case Study: You & Me Voyage"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#FAF9FF] via-white to-[#FAF9FF] border-y border-[#E9E4F2] overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#7C3AED]/10 via-[#F97316]/10 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            Wix Migration → Custom Next.js &amp; Custom Admin Panel
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1B2D] tracking-tight leading-tight mb-4">
            Real Client Success:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#F97316]">
              You &amp; Me Voyage
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed">
            How Joy Digital engineered a custom Next.js travel engine and bespoke tour operator admin panel to replace a rigid, sluggish Wix template with a high-converting direct booking portal.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Persuasive Case Study Copy & Impact Metrics */}
          <article className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* The Problem */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-rose-200/70 shadow-sm relative overflow-hidden group hover:border-rose-300 transition-all">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#1F1B2D] tracking-tight">
                  The Problem
                </h3>
              </div>
              <p className="text-sm text-[#4A4458] leading-relaxed font-normal">
                Initially running on Wix, <strong>You &amp; Me Voyage</strong> faced rigid design limitations, slow mobile speed, and restricted SEO features that hindered direct package bookings. Heavy script bloat caused international tourists on 4G networks to abandon itinerary pages before inquiring.
              </p>
            </div>

            {/* The Joy Digital Transformation */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#7C3AED]/30 shadow-md shadow-[#7C3AED]/5 relative overflow-hidden group hover:border-[#7C3AED] transition-all">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#7C3AED] to-[#F97316]" />
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#1F1B2D] tracking-tight">
                  The Joy Digital Transformation
                </h3>
              </div>
              <p className="text-sm text-[#4A4458] leading-relaxed font-normal mb-3">
                Re-engineered into a sub-second <strong>Next.js web application</strong> with a bespoke <strong>Admin Panel</strong>, enabling seamless package management, dynamic SEO routes, and instant WhatsApp inquiry routing.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9FF] text-[#7C3AED] border border-[#E9E4F2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Custom Travel Agency Website Development
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9FF] text-[#7C3AED] border border-[#E9E4F2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Tour Operator Admin Panel
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9FF] text-[#7C3AED] border border-[#E9E4F2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Next.js Travel Engine
                </span>
              </div>
            </div>

            {/* Impact Metrics (3-Column Grid) */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B6478] block mb-3">
                Key Performance Impact
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                
                {/* Metric 1 */}
                <div className="bg-white rounded-xl p-4 border border-[#E9E4F2] shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6478]">Page Speed</span>
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-black text-[#1F1B2D] tracking-tight">
                    &lt; 1.2s
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Instant mobile load
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white rounded-xl p-4 border border-[#E9E4F2] shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6478]">Infrastructure</span>
                    <LayoutDashboard className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div className="text-lg font-black text-[#1F1B2D] tracking-tight leading-tight">
                    Custom Admin
                  </div>
                  <div className="text-[11px] font-semibold text-[#6B6478] mt-1">
                    Dynamic tour package dashboard
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white rounded-xl p-4 border border-[#E9E4F2] shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6478]">SEO Status</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-lg font-black text-[#1F1B2D] tracking-tight leading-tight">
                    Clean Indexing
                  </div>
                  <div className="text-[11px] font-semibold text-[#6B6478] mt-1">
                    Custom Schema architecture
                  </div>
                </div>

              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://www.youandmevoyage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border-2 border-[#7C3AED] text-[#7C3AED] hover:text-[#6D28D9] font-extrabold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                aria-label="View Live Portal of You and Me Voyage (opens in a new tab)"
              >
                <span>View Live Portal →</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm transition-all shadow-md shadow-[#7C3AED]/25 hover:shadow-lg hover:shadow-[#7C3AED]/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Build a Travel Website Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </article>

          {/* RIGHT: Fetched Site Screenshot with Browser Frame Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Browser Mockup Window */}
            <div className="w-full bg-[#17122B] rounded-2xl overflow-hidden border border-[#2B2346] shadow-2xl shadow-[#7C3AED]/20 relative group transition-all duration-300 hover:border-[#7C3AED]/60">
              
              {/* Browser Top Navigation Chrome */}
              <div className="px-4 py-3 bg-[#0D0B18] border-b border-[#2B2346] flex items-center justify-between text-xs">
                {/* 3 macOS Control Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
                </div>

                {/* Simulated Address Bar */}
                <div className="flex items-center gap-1.5 bg-[#1F1838] border border-[#332A54] px-3.5 py-1 rounded-full text-[11px] font-mono text-slate-300 max-w-[240px] truncate shadow-inner">
                  <span className="text-emerald-400 text-xs">🔒</span>
                  <span className="text-slate-400">https://</span>
                  <span className="text-white font-semibold">youandmevoyage.com</span>
                </div>

                {/* Live Indicator */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Site</span>
                </div>
              </div>

              {/* Screenshot Container */}
              <div className="relative w-full overflow-hidden bg-slate-900 aspect-[16/10]">
                <Image
                  src="/images/case-studies/youandmevoyage-preview.webp"
                  alt="You & Me Voyage custom Next.js travel portal and custom admin panel preview"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  priority={false}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Floating Achievement Badges */}
                <div className="absolute bottom-3 left-3 bg-[#0D0B18]/90 backdrop-blur-md border border-[#2B2346] px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-white">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold tracking-tight">Under 1.2s Page Load</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#7C3AED]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-extrabold shadow-md border border-white/20">
                  Wix → Next.js 16
                </div>
              </div>

            </div>

            {/* Testimonial Quote Pill below mockup */}
            <div className="mt-4 w-full bg-white border border-[#E9E4F2] rounded-xl p-3.5 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7C3AED]/15 text-[#7C3AED] font-black text-xs flex items-center justify-center shrink-0">
                YM
              </div>
              <div className="text-xs text-[#1F1B2D]">
                <p className="font-semibold italic leading-tight text-[#4A4458]">
                  &ldquo;Joy Digital did an amazing job. The website looks premium, loads super fast, and we are getting great organic leads!&rdquo;
                </p>
                <span className="text-[10px] text-[#6B6478] font-bold mt-0.5 block">
                  — Founder, You &amp; Me Voyage
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
