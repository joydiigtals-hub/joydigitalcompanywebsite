"use client";

import React from "react";

/**
 * DigitalNetworkBackground
 *
 * Lightweight, accessible hero background for Joy Digital.
 * Combines subtle radial purple/blue gradient glows with a delicate
 * SVG digital grid and connecting geometric nodes.
 *
 * Designed to zero-out CPU load (no canvas loops), maintain high contrast
 * for readability, and honor `prefers-reduced-motion`.
 */
export default function DigitalNetworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Deep Navy/Purple Base Gradient Layer */}
      <div className="absolute inset-0 bg-[#0B0914]" />

      {/* 2. Soft Ambient Radial Glows (Purple & Blue) */}
      <div
        className="absolute -top-20 right-1/4 w-[650px] lg:w-[800px] h-[650px] lg:h-[800px] rounded-full bg-gradient-to-tr from-purple-700/20 via-violet-600/15 to-indigo-600/10 blur-[140px] motion-safe:animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute -bottom-28 -left-20 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] rounded-full bg-gradient-to-br from-blue-700/15 via-indigo-900/20 to-purple-900/10 blur-[130px] motion-safe:animate-pulse"
        style={{ animationDuration: "14s" }}
      />
      <div className="absolute top-1/3 left-1/3 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* 3. Subtle Digital Grid Pattern with Vignette Fade */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 48px Coordinate Grid Pattern */}
          <pattern
            id="digital-network-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#A78BFA"
              strokeWidth="0.6"
              strokeOpacity="0.08"
            />
            {/* Subtle Intersection Node */}
            <circle
              cx="48"
              cy="0"
              r="1.2"
              fill="#A78BFA"
              fillOpacity="0.22"
            />
          </pattern>

          {/* Vignette Mask: Keeps background soft and ensures high contrast behind text */}
          <radialGradient id="network-vignette" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
          </radialGradient>

          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#network-vignette)" />
          </mask>
        </defs>

        {/* Pattern applied with mask */}
        <rect
          width="100%"
          height="100%"
          fill="url(#digital-network-grid)"
          mask="url(#grid-mask)"
        />

        {/* 4. Restrained Geometric Network Connecting Lines & Nodes */}
        <g stroke="#C4B5FD" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 4" fill="none">
          {/* Left Hero Area Network Accent */}
          <path d="M 96 144 L 192 192 L 288 144 L 384 240" />
          <path d="M 192 192 L 192 288 L 96 336" />
          {/* Right Form Backing Geometric Accent */}
          <path d="M 864 192 L 960 144 L 1056 240 L 1152 192" />
          <path d="M 960 144 L 960 288 L 1056 336" />
        </g>

        {/* Glowing Geometric Accent Nodes */}
        <g fill="#A78BFA">
          <circle cx="192" cy="192" r="2.5" fillOpacity="0.35" />
          <circle cx="288" cy="144" r="2" fillOpacity="0.3" />
          <circle cx="384" cy="240" r="2.5" fillOpacity="0.35" />
          <circle cx="960" cy="144" r="2.5" fillOpacity="0.35" />
          <circle cx="1056" cy="240" r="2" fillOpacity="0.3" />
          <circle cx="1152" cy="192" r="2.5" fillOpacity="0.35" />
        </g>
      </svg>

      {/* 5. Soft Bottom Vignette for Seamless Transition into Content */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0914] to-transparent pointer-events-none" />
    </div>
  );
}
