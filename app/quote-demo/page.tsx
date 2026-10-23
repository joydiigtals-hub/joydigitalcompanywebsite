import React from "react";
import type { Metadata } from "next";
import GetQuoteModal from "@/components/ui/GetQuoteModal";
import Link from "next/link";
import { Sparkles, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Quote Modal Demo",
  description: "Interactive demo and test sandbox for GetQuoteModal component.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuoteDemoPage() {
  return (
    <main className="min-h-screen bg-[#0C0A17] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>

        {/* Demo Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            Component Sandbox
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Get Quote Modal Preview
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Click the buttons below to test the modal interaction, responsive behavior, validation, submission, and direct WhatsApp handoff.
          </p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Default Trigger */}
          <div className="bg-[#141026] border border-[#2B2347] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#A78BFA] mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">
              Standard Primary Trigger
            </h2>
            <p className="text-xs text-slate-400 mb-6 max-w-xs">
              Default prominent button with purple glow, ideal for Header or Hero section CTAs.
            </p>
            <div className="mt-auto">
              <GetQuoteModal
                triggerText="Get Quote"
                source="Demo Page - Standard Trigger"
              />
            </div>
          </div>

          {/* Card 2: Pre-selected Service & Custom Label */}
          <div className="bg-[#141026] border border-[#2B2347] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">
              Pre-Selected Service Variant
            </h2>
            <p className="text-xs text-slate-400 mb-6 max-w-xs">
              Pre-selects "Travel & Safari Portal" and custom button copy for dedicated service landing pages.
            </p>
            <div className="mt-auto">
              <GetQuoteModal
                triggerText="Get Safari Portal Quote"
                defaultService="Travel & Safari Portal"
                source="Demo Page - Safari Variant"
                triggerClassName="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-emerald-600/30"
              />
            </div>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="bg-[#141026]/80 border border-[#2B2347] rounded-2xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
            Test Checklist:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Smooth scale & fade spring animation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Dark backdrop blur (bg-black/75)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Close on (X), backdrop click, or ESC key
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Searchable country dialing code dropdown
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Client-side validation & inline error alerts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Submit state with loading spinner
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Backend lead logging to /api/enquiry
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Success message with 1-click WhatsApp handoff
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
