import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 select-none">
      <div className="relative flex items-center justify-center">
        {/* Subtle glowing outer halo */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 animate-ping absolute inset-0 m-auto" />
        {/* Modern rotating gradient ring */}
        <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-primary border-r-primary-light animate-spin" />
        {/* Inner brand dot */}
        <div className="w-3 h-3 rounded-full bg-primary absolute inset-0 m-auto animate-pulse" />
      </div>
      <p className="mt-5 text-sm font-semibold tracking-wide text-text-secondary animate-pulse">
        Loading Joy Digital...
      </p>
    </div>
  );
}
