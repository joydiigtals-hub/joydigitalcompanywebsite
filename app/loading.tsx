import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 py-12 select-none" aria-busy="true" aria-label="Loading page content">
      <div className="relative flex items-center justify-center">
        {/* Subtle rotating ring */}
        <div className="w-10 h-10 rounded-full border-2 border-slate-200 border-t-[#7C3AED] animate-spin" />
        {/* Inner brand dot */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] absolute inset-0 m-auto animate-pulse" />
      </div>
    </div>
  );
}
