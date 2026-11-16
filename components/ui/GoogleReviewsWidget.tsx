"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // If Elfsight platform script is already present in window, trigger initialization
    if (typeof window !== "undefined" && (window as unknown as { eapps?: { init?: () => void } }).eapps?.init) {
      try {
        (window as unknown as { eapps?: { init?: () => void } }).eapps?.init?.();
      } catch (err) {
        console.warn("Elfsight init error:", err);
      }
    }
  }, []);

  return (
    <div className="w-full relative my-6">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as unknown as { eapps?: { init?: () => void } }).eapps?.init) {
            try {
              (window as unknown as { eapps?: { init?: () => void } }).eapps?.init?.();
            } catch (err) {
              console.warn("Elfsight load init error:", err);
            }
          }
        }}
      />
      <div 
        className="elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 min-h-[300px] w-full" 
        data-elfsight-app-lazy
      />
    </div>
  );
}
