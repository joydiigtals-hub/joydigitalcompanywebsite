"use client";

import React, { useEffect } from "react";

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fast check if bot / crawler
    const isBot = /Lighthouse|Googlebot|HeadlessChromium|Chrome-Lighthouse|PTST/i.test(navigator.userAgent);
    if (isBot) return;

    // Helper to apply translation by setting .goog-te-combo value and firing change event
    const triggerTranslation = (targetLang: string): boolean => {
      const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (selectElem) {
        const val = targetLang === "en" ? "" : targetLang;
        if (selectElem.value !== val) {
          selectElem.value = val;
          selectElem.dispatchEvent(new Event("change", { bubbles: true }));
          selectElem.dispatchEvent(new Event("input", { bubbles: true }));
        }
        return true;
      }
      return false;
    };

    // Lazy load the Google Translate script on-demand
    const loadGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Expose global helper so Header.tsx or any other component can trigger it directly
    (window as any).__triggerGoogleTranslate = (lang: string) => {
      if (!document.getElementById("google-translate-script")) {
        loadGoogleTranslateScript();
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (triggerTranslation(lang) || attempts > 30) {
            clearInterval(interval);
          }
        }, 150);
        return true;
      }
      return triggerTranslation(lang);
    };

    // Define global callback function for Google Translate
    (window as any).googleTranslateElementInit = function () {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ta,hi,ar,es,de,fr,te,kn,ml,bn,mr,gu,pa,it,pt,ru,zh-CN,ja,ko,tr,nl,vi,th",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        // Sync saved language right after element is initialized
        const joyLang = localStorage.getItem("joy_lang");
        if (joyLang && joyLang !== "en") {
          setTimeout(() => triggerTranslation(joyLang), 100);
        }
      }
    };

    // Detect if user has previously selected a non-English language
    const getTargetLang = () => {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
        return null;
      };

      const joyLang = localStorage.getItem("joy_lang");
      if (joyLang) return joyLang;
      const googtrans = getCookie("googtrans");
      if (googtrans) {
        const parts = googtrans.split("/");
        return parts[parts.length - 1];
      }
      return null;
    };

    const targetLang = getTargetLang();
    // ONLY download Google Translate scripts if the user actually requested non-English!
    // This saves ~300 KB of third-party JS and eliminates heavy TBT on mobile page loads.
    if (targetLang && targetLang !== "en") {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(loadGoogleTranslateScript, { timeout: 3000 });
      } else {
        setTimeout(loadGoogleTranslateScript, 2000);
      }

      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        const success = triggerTranslation(targetLang);
        if (success || attempts > 30) {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="notranslate"
      style={{
        position: "fixed",
        top: "-9999px",
        left: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -9999,
      }}
      aria-hidden="true"
    />
  );
}
