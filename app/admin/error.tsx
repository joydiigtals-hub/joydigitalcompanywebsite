"use client";

import React, { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin dashboard runtime error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-3xl mb-4 shadow-lg">
        ⚠️
      </div>
      <h2 className="text-xl font-extrabold mb-2 text-white">Dashboard Encountered an Issue</h2>
      <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
        A temporary error occurred while rendering the admin panel. Your data is secure and untouched.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/admin")}
          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
        >
          Reload Admin
        </button>
      </div>
    </div>
  );
}
