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

    const trackVisit = async () => {
      try {
        let clientIp = "";
        try {
          const ipRes = await fetch("https://api.ipify.org?format=json");
          if (ipRes.ok) {
            const ipData = await ipRes.json();
            clientIp = ipData.ip;
          }
        } catch (e) {
          console.warn("Could not fetch client IP from frontend");
        }

        await fetch("/api/analytics/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: pathname,
            referrer: typeof document !== "undefined" ? document.referrer : "",
            clientIp,
          }),
        });
      } catch (err) {
        console.warn("Analytics ping skipped or database not connected yet.");
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
}

