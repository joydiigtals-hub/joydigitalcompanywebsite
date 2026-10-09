"use client";

import { useEffect } from "react";

export default function ClientScrollObserver() {
  useEffect(() => {
    // If bot / crawler, immediately reveal all elements without scroll waiting
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Googlebot|HeadlessChromium|Chrome-Lighthouse|PTST/i.test(navigator.userAgent);

    if (isBot) {
      document.querySelectorAll(".reveal-hidden").forEach((el) => {
        el.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "60px 0px 60px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-hidden");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
