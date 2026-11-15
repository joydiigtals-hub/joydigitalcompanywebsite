import React from "react";
import Link from "next/link";

interface MarqueeItem {
  title: string;
  href: string;
}

const SERVICES_ITEMS: MarqueeItem[] = [
  {
    title: "Custom Website Development",
    href: "/website-development",
  },
  {
    title: "Next.js & React Apps",
    href: "/nextjs-development-agency",
  },
  {
    title: "Global SEO & Organic Growth",
    href: "/seo-services",
  },
  {
    title: "Minimalist UI/UX Designs",
    href: "/web-design-services",
  },
  {
    title: "SaaS & Custom Software Solutions",
    href: "/contact",
  },
];

// Repeat items within each half-track to ensure full width on ultra-wide screens
const REPEATED_ITEMS = [...SERVICES_ITEMS, ...SERVICES_ITEMS];

export default function ServicesMarquee() {
  return (
    <section 
      aria-label="Key Services and Value Propositions"
      className="relative w-full overflow-hidden bg-[#C9F600] border-y border-[#120526]/15 py-2.5 sm:py-3 select-none z-20 shadow-sm"
    >
      {/* Left gradient fade mask */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#C9F600] to-transparent z-10" 
        aria-hidden="true" 
      />
      {/* Right gradient fade mask */}
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#C9F600] to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Infinite scrolling marquee track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Track 1 (Primary) */}
        <div className="flex items-center shrink-0">
          {REPEATED_ITEMS.map((item, index) => (
            <React.Fragment key={`track-1-${index}`}>
              <Link
                href={item.href}
                className="inline-block text-[#120526] hover:opacity-75 font-semibold sm:font-bold text-xs sm:text-sm tracking-wide transition-opacity duration-200 px-1 focus:outline-none focus:ring-1 focus:ring-[#120526]/50 rounded"
              >
                {item.title}
              </Link>
              <span 
                className="mx-5 sm:mx-8 inline-flex items-center justify-center select-none" 
                aria-hidden="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#120526] opacity-75" />
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Seamless loop duplicate - hidden from assistive tech) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {REPEATED_ITEMS.map((item, index) => (
            <React.Fragment key={`track-2-${index}`}>
              <Link
                href={item.href}
                tabIndex={-1}
                className="inline-block text-[#120526] hover:opacity-75 font-semibold sm:font-bold text-xs sm:text-sm tracking-wide transition-opacity duration-200 px-1"
              >
                {item.title}
              </Link>
              <span 
                className="mx-5 sm:mx-8 inline-flex items-center justify-center select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#120526] opacity-75" />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
