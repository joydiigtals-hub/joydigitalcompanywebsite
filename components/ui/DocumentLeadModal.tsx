"use client";

import React, { useState } from "react";

interface Props {
  documentId: string;
  documentTitle: string;
  onClose: () => void;
}

export default function DocumentLeadModal({ documentId, documentTitle, onClose }: Props) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      setError("Name and WhatsApp number are required.");
      return;
    }
    if (whatsapp.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/documents/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentId, name, whatsapp, email }),
      });

      if (res.ok) {
        const data = await res.json();
        // Open the file URL directly
        if (data.fileUrl) {
          window.open(data.fileUrl, "_blank");
        }
        onClose();
      } else {
        const err = await res.json();
        setError(err.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#6C2BD9] to-[#4F46E5] px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-bold text-lg">📄 Download Document</h2>
              <p className="text-purple-200 text-sm mt-0.5">{documentTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors text-xl font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-slate-600 text-sm mb-5">
            Please share your details to download the document. We'll send you updates about our services.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <i className="fa-solid fa-user text-sm"></i>
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </span>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#6C2BD9] to-[#4F46E5] hover:from-[#5B22C1] hover:to-[#4338CA] text-white font-bold rounded-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-cloud-arrow-down"></i> Download Now
                </>
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-xs mt-4">
            🔒 Your info is safe. We never spam.
          </p>
        </div>
      </div>
    </div>
  );
}
