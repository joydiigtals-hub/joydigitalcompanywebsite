"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationLoadingBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Complete progress bar when pathname or searchParams finish updating
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Stepped progress animation when loading is triggered
  useEffect(() => {
    if (!loading) return;

    const timer1 = setTimeout(() => {
      setProgress((prev) => (prev < 65 ? 65 : prev));
    }, 150);

    const timer2 = setTimeout(() => {
      setProgress((prev) => (prev < 85 ? 85 : prev));
    }, 400);

    const timer3 = setTimeout(() => {
      setProgress((prev) => (prev < 92 ? 92 : prev));
    }, 800);

    // Safety fallback: if navigation takes too long or is cancelled, reset
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(safetyTimer);
    };
  }, [loading]);

  // Intercept click on internal links to start progress bar instantly
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Don't intercept clicks with modifiers (Cmd/Ctrl/Shift/Alt) or non-left clicks
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = (e.target as Element)?.closest?.("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore download, external target, anchors, tel, mailto
      if (
        target.hasAttribute("download") ||
        (target.target && target.target !== "_self") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      let isInternal = false;
      let targetPath = href;

      if (href.startsWith("/")) {
        isInternal = true;
      } else {
        try {
          const parsed = new URL(href, window.location.origin);
          if (
            parsed.origin === window.location.origin ||
            parsed.hostname.includes("joydigital.in")
          ) {
            isInternal = true;
            targetPath = parsed.pathname + parsed.search;
          }
        } catch {
          // not a valid URL
        }
      }

      if (!isInternal) return;

      // Don't trigger if clicking the exact current page URL
      const currentFull = window.location.pathname + window.location.search;
      if (targetPath === currentFull || href === window.location.pathname) {
        return;
      }

      setLoading(true);
      setProgress(30);
    };

    const handlePopState = () => {
      setLoading(true);
      setProgress(30);
    };

    document.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <>
      {/* Top Navigation Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #7C3AED 0%, #A78BFA 50%, #38BDF8 100%)",
          boxShadow: "0 0 14px rgba(124, 58, 237, 0.8), 0 0 6px rgba(56, 189, 248, 0.6)",
          opacity: loading || progress > 0 ? 1 : 0,
        }}
      />

      {/* Floating Loading Indicator Badge */}
      {loading && (
        <div className="fixed top-4 right-4 z-[99999] pointer-events-none flex items-center gap-2 bg-[#171126]/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-2xl border border-white/10 animate-fade-in transition-all">
          <svg
            className="animate-spin h-3.5 w-3.5 text-primary-light"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="tracking-wide">Loading...</span>
        </div>
      )}
    </>
  );
}

export default function NavigationLoadingBar() {
  return (
    <Suspense fallback={null}>
      <NavigationLoadingBarContent />
    </Suspense>
  );
}
