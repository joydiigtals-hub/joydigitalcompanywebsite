"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import TrackedWaLink from "@/components/ui/TrackedWaLink";

export default function PortfolioSection() {
  const features = [
    "Next.js high-speed architecture with built-in SEO optimization.",
    "Custom UI/UX tailored with brand logo and color palette.",
    "Online booking system & dynamic package/itinerary showcase.",
    "In-built Admin Panel (client can update SEO keywords and content independently).",
    "Instant WhatsApp & Social Media integrations for high organic lead conversions.",
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0B0914] text-white border-b border-[#1E1838]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal-hidden text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-widest block mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Recent Global Launch
          </h2>
          <p className="text-slate-300 text-lg">
            We build high-performance platforms for forward-thinking brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Project Details */}
          <div className="flex flex-col space-y-8 reveal-hidden lg:sticky lg:top-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-6">
                <i className="fa-solid fa-sparkles text-indigo-400" /> Featured Travel Portal
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
                You & Me Voyage
              </h3>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                High-performance, mobile-responsive travel booking platform focused on Europe tours for couples and families.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-2 border-b border-[#1E1838] pb-2">Key Features Delivered</h4>
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#130E26] border border-[#2B2346] rounded-2xl p-6 relative">
              <i className="fa-solid fa-quote-left text-3xl text-[#7C3AED]/20 absolute top-4 right-4" />
              <p className="text-sm italic text-slate-300 relative z-10 leading-relaxed mb-4">
                "Joy Digital did an amazing job. The website looks premium, loads super fast, and we are getting great organic leads!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center font-bold text-[#A78BFA]">
                  YM
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Founder</span>
                  <span className="block text-[10px] font-bold text-slate-400">You & Me Voyage</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.youandmevoyage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold transition-all shadow-lg shadow-purple-900/20 group"
              >
                <span>Visit Live Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <TrackedWaLink
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20want%20a%20website%20like%20You%20and%20Me%20Voyage." location="portfolio_cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#17122B] hover:bg-[#20193B] border border-[#2B2346] hover:border-emerald-500/50 text-white text-sm font-bold transition-all group"
              >
                <i className="fa-brands fa-whatsapp text-emerald-400 text-lg group-hover:scale-110 transition-transform" />
                <span>I Want a Website Like This</span>
              </TrackedWaLink>
            </div>
          </div>

          {/* RIGHT: Images Grid */}
          <div className="flex flex-col gap-6 reveal-hidden">
            <div className="w-full rounded-2xl overflow-hidden border border-[#2B2346] shadow-2xl relative group bg-[#130E26]">
              <div className="absolute inset-0 bg-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
              <Image 
                src="/assets/images/portfolio/you-and-me-voyage-1.png" 
                alt="You & Me Voyage Homepage" 
                width={800} 
                height={450} 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="w-full rounded-2xl overflow-hidden border border-[#2B2346] shadow-lg relative group bg-[#130E26]">
                <Image 
                  src="/assets/images/portfolio/you-and-me-voyage-2.png" 
                  alt="Tour Packages List" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
              <div className="w-full rounded-2xl overflow-hidden border border-[#2B2346] shadow-lg relative group bg-[#130E26]">
                <Image 
                  src="/assets/images/portfolio/you-and-me-voyage-3.png" 
                  alt="Tour Itinerary Details" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
              <div className="w-full rounded-2xl overflow-hidden border border-[#2B2346] shadow-lg relative group bg-[#130E26]">
                <Image 
                  src="/assets/images/portfolio/you-and-me-voyage-4.png" 
                  alt="Blog and Articles" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
              <div className="w-full rounded-2xl overflow-hidden border border-[#2B2346] shadow-lg relative group bg-[#130E26]">
                <Image 
                  src="/assets/images/portfolio/you-and-me-voyage-5.png" 
                  alt="Footer and Map Integration" 
                  width={400} 
                  height={300} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
