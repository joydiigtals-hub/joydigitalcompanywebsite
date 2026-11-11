"use client";

import React from "react";
import Link from "next/link";

interface StrongCTAProps {
  location: string;
  title?: string;
  description?: string;
}

export default function StrongCTA({ location, title, description }: StrongCTAProps) {
  const displayTitle = title || "Ready to Grow Your Business Online?";
  const displayDesc = description || "Get a professional website and SEO strategy tailored to your business goals. Speak with our team today.";

  return (
    <section className="relative py-16 bg-[#3B1580] border border-[#FFFFFF]/20 overflow-hidden rounded-3xl mx-6 lg:mx-12 my-12 shadow-xl">
      {/* Subtle light background grid decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <span className="inline-block bg-[#C9F600]/15 text-[#C9F600] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C9F600]/30 mb-6">
          Grow Fast, Scale Smart
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-[#FFFFFF]">
          {displayTitle}
        </h2>
        <p className="text-sm md:text-base text-[#FFFFFF]/80 max-w-xl mx-auto mb-10 leading-relaxed">
          {displayDesc}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          {/* WhatsApp Button - Emerald Green Pill */}
          <a
            href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I'd%20like%20to%20discuss%20growing%20my%20business%20online."
            target="_blank"
            rel="noopener noreferrer"
            data-wa-location={location}
            className="w-full sm:w-auto bg-[#C9F600] hover:opacity-90 text-[#3B1580] font-bold text-xs px-8 py-4 rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-base" />
            WhatsApp Now
          </a>
          
          {/* Consultation Button - Electric Lime Accent */}
          <Link
            href="/contact"
            data-ga-event="free_consultation_click"
            data-ga-location={location}
            className="w-full sm:w-auto bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] border border-[#FFFFFF]/30 hover:border-[#C9F600] hover:text-[#C9F600] font-bold text-xs px-8 py-4 rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-calendar-check text-xs" />
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
