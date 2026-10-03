"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show after scrolling down a bit so it doesn't overlap the hero completely
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[100] lg:hidden animate-fade-in pb-safe">
      <div className="flex items-center justify-between px-2 py-2 gap-2">
        <a
          href="https://wa.me/919176391494?text=Hi%20Joy%20Digital,%20I%20want%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] bg-[#25D366] hover:bg-[#128C7E] text-white flex flex-col items-center justify-center py-2 rounded-xl shadow-md transition-colors"
        >
          <span className="text-[13px] font-extrabold flex items-center gap-1.5"><i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp</span>
          <span className="text-[9px] opacity-90">Instant Reply</span>
        </a>

        <a
          href="mailto:saravanan061193@gmail.com"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <i className="fa-solid fa-envelope text-xl"></i>
          <span className="text-[10px] font-bold">Email Us</span>
        </a>
      </div>
    </div>
  );
}
