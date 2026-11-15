"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { captureUtmParameters } from "@/lib/utmTracker";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Capture UTM search parameters on load/navigation
    captureUtmParameters();

    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    // Defer analytics ping so it never competes with Largest Contentful Paint (LCP)
    const sendPing = () => {
      fetch("/api/analytics/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: pathname,
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      }).catch(() => {
        // Silently catch background analytics errors
      });
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(sendPing, { timeout: 3500 });
      } else {
        setTimeout(sendPing, 3000);
      }
    }
  }, [pathname]);

  // Global click event listener for CTAs
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = target.textContent?.toLowerCase() || "";
      const tracker = (window as any).trackJoyDigitalEvent;

      if (!tracker) return;

      if (href.includes("wa.me")) {
        tracker("whatsapp_click", { url: href, page: pathname });
      } else if (href.includes("calendly.com")) {
        tracker("book_call_click", { url: href, page: pathname });
      } else if (href.startsWith("mailto:")) {
        tracker("email_click", { url: href, page: pathname });
      } else if (href.startsWith("tel:")) {
        tracker("phone_click", { url: href, page: pathname });
      } else if (href.includes("free-website-audit") || text.includes("free audit")) {
        tracker("free_audit_start", { url: href, page: pathname });
      }
    };

    document.addEventListener("click", handleGlobalClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [pathname]);

  return null;
}
