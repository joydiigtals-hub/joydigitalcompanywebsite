"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error locally for debugging without crashing the page shell
    console.error("Client runtime error caught by root boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#0B0914] text-white">
      <div className="w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-2xl text-purple-400 mb-6 shadow-xl">
        ⚡
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white tracking-tight">
        Something went wrong
      </h2>
      <p className="text-sm text-slate-300 max-w-md mb-8 leading-relaxed">
        We encountered a temporary loading error. Please refresh the page or try reloading below.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-lg cursor-pointer"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-xl bg-[#1A1433] hover:bg-[#251B47] border border-[#2D2352] text-white text-xs font-bold transition-all cursor-pointer"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
