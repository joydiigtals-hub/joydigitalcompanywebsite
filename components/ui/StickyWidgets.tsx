"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Sticky Mobile Banner (Bottom-pinned for conversions, hidden on desktop) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 shadow-xl p-2.5 z-40 grid grid-cols-2 gap-2.5">
        <a
          href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'd%20like%20to%20get%20a%20free%20consultation%20and%20pricing%20quote%20for%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Joy Digital on WhatsApp"
          aria-label="Chat with Joy Digital on WhatsApp"
          onClick={() => {
            const tracker = (window as any).trackJoyDigitalEvent;
            if (typeof tracker === "function") {
              tracker("whatsapp_click", { location: "mobile sticky bar" });
            }
          }}
          className="bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
        >
          <i className="fa-brands fa-whatsapp text-sm" /> Chat WhatsApp
        </a>
        <Link
          href="/free-website-audit"
          title="Request a Free Website Audit and Quote"
          aria-label="Request a Free Website Audit and Quote"
          onClick={() => {
            const tracker = (window as any).trackJoyDigitalEvent;
            if (typeof tracker === "function") {
              tracker("cta_click", { button_text: "Get Quote", location: "mobile sticky bar" });
            }
          }}
          className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
        >
          <i className="fa-solid fa-file-invoice text-xs" /> Get Quote
        </Link>
      </div>

      {/* Floating WhatsApp Pulse Button (Bottom Right) */}
      <a
        href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I'd%20like%20to%20get%20a%20free%20consultation%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          const tracker = (window as any).trackJoyDigitalEvent;
          if (typeof tracker === "function") {
            tracker("whatsapp_click", { location: "floating button" });
          }
        }}
        className={`fixed bottom-20 lg:bottom-6 right-6 w-14 h-14 bg-whatsapp-green text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 hover:rotate-[5deg] transition-all duration-300 z-40 group`}
        aria-label="Chat on WhatsApp with Joy Digital"
        title="Chat on WhatsApp with Joy Digital"
        data-wa-location="floating button"
      >
        <span className="absolute top-0 left-0 w-full h-full bg-whatsapp-green rounded-full -z-1 opacity-70 animate-pulse-ring"></span>
        <i className="fa-brands fa-whatsapp relative z-10" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md whitespace-nowrap hidden lg:block border border-slate-800">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-36 lg:bottom-22 right-6 w-9 h-9 bg-primary-dark text-white rounded-full flex items-center justify-center text-xs shadow-md hover:bg-accent transition-all duration-300 z-40 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top of page"
        title="Scroll to top of page"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  );
}
