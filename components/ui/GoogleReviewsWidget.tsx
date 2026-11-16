"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // Inject high-specificity style to document head to override Elfsight styled-components
    const styleId = "elfsight-custom-theme-style";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.textContent = `
        html body .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 [class*="WidgetTitle__Header"],
        html body .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 .es-widget-title-header,
        html body .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 [class*="WidgetTitle__Inner"] *,
        html body .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 .kQOgxs {
          color: #C9F600 !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 .es-widget-title-header,
            .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 [class*="WidgetTitle__Header"],
            .elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 .es-widget-title {
              color: #C9F600 !important;
            }
          `,
        }}
      />
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
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
        className="elfsight-app-4b72156c-4edb-4b41-aaaf-a6eee11d3478 w-full" 
        data-elfsight-app-lazy
      />
    </div>
  );
}
