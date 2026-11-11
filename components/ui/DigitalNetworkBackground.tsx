"use client";

import React from "react";

/**
 * DigitalNetworkBackground
 * Premium depth background with:
 * - Multi-stop rich violet & royal purple gradient
 * - Luminous ambient glow spheres (deep purple & subtle lime halo)
 * - Modern abstract tech grid with coordinate intersection markers
 * - Subtle tech connection paths with soft pulsing nodes
 * - Radial vignette mask to preserve high text contrast
 */
export default function DigitalNetworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Multi-Stop Deep Violet to Rich Purple Gradient Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% -15%, rgba(139, 92, 246, 0.22) 0%, rgba(53, 16, 123, 0) 70%),
            radial-gradient(circle 600px at 12% 25%, rgba(109, 40, 217, 0.28) 0%, transparent 65%),
            radial-gradient(circle 550px at 88% 75%, rgba(59, 17, 126, 0.45) 0%, transparent 60%),
            linear-gradient(160deg, #1F0742 0%, #3B1580 40%, #290C5D 75%, #180533 100%)
          `
        }}
      />

      {/* 2. Ambient Atmosphere Glow Blobs */}
      {/* Top-center rich purple illumination */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-purple-600/20 rounded-full blur-[130px]" />
      
      {/* Left-side vibrant violet accent */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-[#7C3AED]/18 rounded-full blur-[140px]" />
      
      {/* Right-side subtle deep glow behind form */}
      <div className="absolute top-1/3 -right-24 w-[560px] h-[560px] bg-[#4C1D95]/25 rounded-full blur-[140px]" />
      
      {/* Delicate Electric Lime signature glow (ambient, soft bridge with CTAs) */}
      <div className="absolute -top-16 right-1/4 w-[420px] h-[420px] bg-[#C9F600]/[0.055] rounded-full blur-[150px]" />

      {/* 3. Modern Technical Grid with Radial Vignette */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 85%)",
        }}
      >
        <defs>
          {/* 48px Precision Tech Grid */}
          <pattern
            id="premium-tech-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid line */}
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeOpacity="0.08"
            />
            {/* Subtle Grid Intersection Cross / Dot */}
            <circle
              cx="48"
              cy="0"
              r="1.2"
              fill="#FFFFFF"
              fillOpacity="0.2"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#premium-tech-grid)"
        />

        {/* 4. Elegant Abstract Tech Network Lines (Faint, Sophisticated) */}
        <g
          stroke="#FFFFFF"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
        >
          {/* Top-left circuit bridge */}
          <path d="M 48 96 L 144 96 L 240 192 L 384 192" />
          <path d="M 240 192 L 240 336 L 144 384" />
          
          {/* Top-right subtle balance lines */}
          <path d="M 816 144 L 960 144 L 1056 240 L 1200 240" />
          <path d="M 960 144 L 960 288 L 1056 336 L 1152 336" />
        </g>

        {/* 5. Electric Lime Micro Tech Nodes (Glow highlights) */}
        <g fill="#C9F600">
          <circle cx="144" cy="96" r="2.5" fillOpacity="0.5" />
          <circle cx="240" cy="192" r="3" fillOpacity="0.6" />
          <circle cx="384" cy="192" r="2.5" fillOpacity="0.45" />
          <circle cx="240" cy="336" r="2" fillOpacity="0.4" />
          <circle cx="960" cy="144" r="3" fillOpacity="0.55" />
          <circle cx="1056" cy="240" r="2.5" fillOpacity="0.5" />
          <circle cx="1056" cy="336" r="2" fillOpacity="0.4" />
        </g>
      </svg>

      {/* 6. Subtle Bottom Gradient Edge Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#3B1580] to-transparent pointer-events-none" />
    </div>
  );
}
