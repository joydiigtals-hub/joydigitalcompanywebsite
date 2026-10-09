"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application runtime error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0B0914] text-white font-sans">
        <div className="w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-2xl text-purple-400 mb-6 shadow-xl">
          ⚡
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white tracking-tight">
          Application Error
        </h2>
        <p className="text-sm text-slate-300 max-w-md mb-8 text-center leading-relaxed">
          A temporary error occurred while rendering the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-lg cursor-pointer"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
