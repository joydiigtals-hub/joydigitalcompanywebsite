"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("joydigital_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("joydigital_cookie_consent", "granted");
    setShowBanner(false);
    
    // Update GA4 Consent Mode
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("joydigital_cookie_consent", "denied");
    setShowBanner(false);
    
    // GA4 is initialized with 'denied' by default, so we just maintain that state.
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#130E26] border-t border-[#2D2352] p-4 md:p-6 z-[9999] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-left flex-1 max-w-4xl">
        <h4 className="text-white text-sm font-bold mb-1">We Value Your Privacy</h4>
        <p className="text-slate-300 text-xs leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
        <button
          onClick={handleDecline}
          className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-[#2D2352] text-slate-300 hover:text-white hover:bg-[#1A1433] text-xs font-bold transition-colors"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold shadow-lg shadow-purple-900/20 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
