"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { trackToolUsage } from "@/lib/toolTracker";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ScanCategory {
  score: number;
  max: number;
  status: string;
}

interface ScanCheck {
  id: string;
  category: string;
  title: string;
  status: "pass" | "warning" | "fail";
  detail: string;
}

interface ScanResult {
  success: boolean;
  url: string;
  cleanDomain: string;
  healthScore: number;
  platform: string;
  responseTimeMs: number;
  hasSsl: boolean;
  summary: string;
  priorityFixes: string[];
  categories: {
    speed: ScanCategory;
    seo: ScanCategory;
    mobile: ScanCategory;
    conversion: ScanCategory;
  };
  checks: ScanCheck[];
}

const SCAN_ANIMATION_STEPS = [
  "Pinging server response time & SSL certificate...",
  "Analyzing Robots.txt and indexing status...",
  "Auditing Title Tag lengths and Meta Descriptions...",
  "Validating heading hierarchies (H1, H2 structure)...",
  "Checking image compression & missing alt attributes...",
  "Inspecting JSON-LD structured schema objects...",
  "Running AI diagnostic executive synthesis...",
];

export default function SeoAuditToolClient() {
  const router = useRouter();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [industry, setIndustry] = useState("Corporate / B2B");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepIdx, setScanStepIdx] = useState(0);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanError, setScanError] = useState("");

  // Filter for checks tab
  const [filterTab, setFilterTab] = useState<"all" | "fail" | "pass">("all");

  // Lead Capture Modal
  const [showModal, setShowModal] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    trackToolUsage({ toolName: "AI SEO Audit Tool", action: "tool_view" });
  }, []);

  // Animation ticker while scanning is in progress
  useEffect(() => {
    if (!isScanning) return;
    const interval = setInterval(() => {
      setScanStepIdx((prev) => (prev < SCAN_ANIMATION_STEPS.length - 1 ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(interval);
  }, [isScanning]);

  const handleStartScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) return;

    let cleanUrl = websiteUrl.trim();
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = "https://" + cleanUrl;
    }

    setWebsiteUrl(cleanUrl);
    setIsScanning(true);
    setScanStepIdx(0);
    setScanError("");
    setScanResult(null);

    trackToolUsage({
      toolName: "AI SEO Audit Tool",
      action: "tool_start",
      metadata: { websiteUrl: cleanUrl, industry },
    });

    try {
      const response = await fetch("/api/audit/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: cleanUrl, industry }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to scan website. Please verify domain name.");
      }

      setScanResult(data);
      trackToolUsage({
        toolName: "AI SEO Audit Tool",
        action: "tool_use_complete",
        metadata: {
          websiteUrl: cleanUrl,
          score: data.healthScore,
          platform: data.platform,
        },
      });
    } catch (err: any) {
      setScanError(err.message || "Unable to reach domain. Please verify your website is online.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: leadName.trim(),
        mobile: leadPhone.trim(),
        email: leadEmail.trim() || "N/A",
        website: scanResult?.cleanDomain || websiteUrl,
        service: "AI Website Audit & Speed Optimization",
        budget: "Standard / Growth",
        message: `Lead captured via AI Website Audit Tool.\nTarget URL: ${scanResult?.cleanDomain || websiteUrl}\nHealth Score: ${scanResult?.healthScore || 0}/100\nPlatform: ${scanResult?.platform || "Unknown"}\nLatency: ${scanResult?.responseTimeMs || 0}ms\nAI Summary: ${scanResult?.summary || "N/A"}`,
        source: "AI Website Audit Tool Result Page",
        _subject: `⚡ AI Website Audit Lead: ${scanResult?.cleanDomain} (${scanResult?.healthScore}/100)`,
        _captcha: "false",
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        if (typeof window !== "undefined") {
          const tracker = (window as any).trackJoyDigitalEvent;
          if (typeof tracker === "function") {
            tracker("contact_form_submission", {
              form_source: "AI Audit Tool Lead Modal",
              page_url: window.location.href,
              score: scanResult?.healthScore,
            });
          }
        }
        setTimeout(() => {
          setShowModal(false);
          setSubmitSuccess(false);
          const thankYouUrl = `/thank-you?name=${encodeURIComponent(leadName.trim())}&service=${encodeURIComponent("Free Website & SEO Audit")}`;
          router.push(thankYouUrl);
        }, 1500);
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Submission failed. Please connect with our team via WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Score Color Helper
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-500 border-emerald-500 bg-emerald-50";
    if (score >= 55) return "text-amber-500 border-amber-500 bg-amber-50";
    return "text-rose-500 border-rose-500 bg-rose-50";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return { label: "Good Health", bg: "bg-emerald-500" };
    if (score >= 55) return { label: "Needs Optimization", bg: "bg-amber-500" };
    return { label: "Critical Revenue Leak", bg: "bg-rose-500" };
  };

  const filteredChecks = scanResult?.checks.filter((check) => {
    if (filterTab === "fail") return check.status === "fail" || check.status === "warning";
    if (filterTab === "pass") return check.status === "pass";
    return true;
  });

  return (
    <>
      <Header />

      <main className="bg-[#FAF9FF] text-[#1F1B2D] min-h-screen pt-24 pb-20 select-text">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <nav className="text-xs text-[#6B6478] font-bold mb-6 flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#7C3AED]">Home</Link>
            <i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" />
            <Link href="/free-tools" className="hover:text-[#7C3AED]">Free Tools</Link>
            <i className="fa-solid fa-chevron-right text-[8px]" aria-hidden="true" />
            <span className="text-[#1F1B2D]" aria-current="page">AI Website Audit Engine</span>
          </nav>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
              <span className="text-[11px] font-black text-[#7C3AED] uppercase tracking-wider">
                Real-Time Domain Scanner • Powered by Gemini AI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F1B2D] tracking-tight mb-4 leading-tight">
              Instant AI Website <span className="text-[#7C3AED]">Speed & SEO Audit</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#6B6478] font-semibold leading-relaxed max-w-2xl mx-auto">
              Scan your live website in 15 seconds. Uncover server latency (TTFB), Core Web Vitals bottlenecks, missing SEO tags, and get an executive AI diagnostic report.
            </p>
          </div>

          {/* Core App Box */}
          <div className="bg-white border border-[#E9E4F2] p-6 sm:p-10 rounded-[28px] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7C3AED] via-purple-500 to-indigo-600" />

            {/* SCAN INPUT FORM */}
            {!isScanning && !scanResult && (
              <form onSubmit={handleStartScan} className="max-w-2xl mx-auto py-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Enter website URL (e.g. yourbusiness.com)"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      required
                      className="w-full bg-[#FAF9FF] border border-[#E9E4F2] rounded-2xl px-5 py-4 text-xs sm:text-sm font-bold outline-none focus:bg-white focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all text-[#1F1B2D] placeholder:text-[#A7A2B2] shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#7C3AED] to-indigo-600 hover:from-[#6D28D9] hover:to-indigo-700 text-white font-black text-xs sm:text-sm px-8 py-4 rounded-2xl transition-all shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-bolt text-amber-300" />
                    <span>Run AI Audit</span>
                  </button>
                </div>

                {scanError && (
                  <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold flex items-center gap-2">
                    <i className="fa-solid fa-triangle-exclamation" />
                    <span>{scanError}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-[11px] text-[#6B6478] font-bold">
                  <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500" /> No signup required</span>
                  <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500" /> Real-time server ping</span>
                  <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-500" /> Instant Gemini AI diagnosis</span>
                </div>
              </form>
            )}

            {/* SCANNING ACTIVE SCREEN */}
            {isScanning && (
              <div className="py-14 flex flex-col items-center gap-6 max-w-lg mx-auto text-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-100 border-t-[#7C3AED] animate-spin" />
                  <i className="fa-solid fa-microchip text-2xl text-[#7C3AED] animate-pulse" />
                </div>

                <div className="w-full">
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2">Analyzing Domain: {websiteUrl.replace(/https?:\/\//, "")}</h3>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-[#7C3AED] to-indigo-600 transition-all duration-700 rounded-full"
                      style={{ width: `${((scanStepIdx + 1) / SCAN_ANIMATION_STEPS.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs font-bold text-[#7C3AED] animate-pulse">
                    {SCAN_ANIMATION_STEPS[scanStepIdx]}
                  </p>
                </div>
              </div>
            )}

            {/* SCAN COMPLETE RESULTS DASHBOARD */}
            {scanResult && (
              <div className="text-left animate-fade-in py-2">
                
                {/* Top Header Bar */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#E9E4F2] pb-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {scanResult.platform}
                      </span>
                      {scanResult.hasSsl ? (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <i className="fa-solid fa-lock text-[8px]" /> SSL Secure
                        </span>
                      ) : (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                          <i className="fa-solid fa-lock-open text-[8px]" /> SSL Missing
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#1F1B2D]">
                      Audit Diagnosis for: <span className="text-[#7C3AED]">{scanResult.cleanDomain}</span>
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      setScanResult(null);
                      setWebsiteUrl("");
                    }}
                    className="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#6B6478] hover:text-[#1F1B2D] transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    🔄 Scan Another Site
                  </button>
                </div>

                {/* Score & AI Verdict Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                  
                  {/* Score Card */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-[#FAF9FF] to-white border border-[#E9E4F2] p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-xs">
                    <span className="text-[10px] font-extrabold text-[#6B6478] uppercase tracking-wider mb-2">Overall Health Score</span>
                    
                    <div className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center mb-3 ${getScoreColor(scanResult.healthScore)}`}>
                      <span className="text-3xl font-black leading-none">{scanResult.healthScore}</span>
                      <span className="text-[10px] font-bold text-slate-500 mt-0.5">/ 100</span>
                    </div>

                    <span className={`text-[10px] font-extrabold text-white uppercase tracking-wider px-3 py-1 rounded-full ${getScoreBadge(scanResult.healthScore).bg}`}>
                      {getScoreBadge(scanResult.healthScore).label}
                    </span>

                    <div className="mt-4 pt-4 border-t border-slate-100 w-full flex justify-around text-center">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-bold">Server TTFB</span>
                        <span className={`text-xs font-extrabold ${scanResult.responseTimeMs < 600 ? "text-emerald-600" : "text-amber-600"}`}>
                          {scanResult.responseTimeMs}ms
                        </span>
                      </div>
                      <div className="border-r border-slate-100" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-bold">Checks</span>
                        <span className="text-xs font-extrabold text-slate-700">
                          {scanResult.checks.filter(c => c.status === "pass").length} / {scanResult.checks.length} Pass
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Executive Summary Card */}
                  <div className="lg:col-span-8 bg-[#160D2E] text-white p-6 sm:p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-purple-500/20 shadow-xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[10px] font-black uppercase tracking-wider mb-3">
                        <i className="fa-solid fa-sparkles text-amber-300 text-[10px]" />
                        <span>Gemini AI Executive Diagnostic</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-3">
                        Strategic Findings for {scanResult.cleanDomain}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-purple-100/90 leading-relaxed font-medium mb-4">
                        {scanResult.summary}
                      </p>
                    </div>

                    {/* Top Fixes Pills */}
                    <div className="space-y-2 pt-3 border-t border-purple-500/20">
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 block">
                        🎯 Top 3 High-Impact Priority Fixes:
                      </span>
                      {scanResult.priorityFixes.map((fix, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-purple-200 font-semibold">
                          <span className="text-amber-400 text-xs mt-0.5">➔</span>
                          <span>{fix}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  
                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-slate-500 block mb-1">⚡ Speed & Latency</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">{scanResult.categories.speed.score}</span>
                      <span className="text-xs text-slate-400 font-bold">/{scanResult.categories.speed.max}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-600 mt-1 block">
                      Status: {scanResult.categories.speed.status}
                    </span>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-slate-500 block mb-1">🔍 Technical SEO</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">{scanResult.categories.seo.score}</span>
                      <span className="text-xs text-slate-400 font-bold">/{scanResult.categories.seo.max}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-600 mt-1 block">
                      Status: {scanResult.categories.seo.status}
                    </span>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-slate-500 block mb-1">📱 Mobile UX</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">{scanResult.categories.mobile.score}</span>
                      <span className="text-xs text-slate-400 font-bold">/{scanResult.categories.mobile.max}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-600 mt-1 block">
                      Status: {scanResult.categories.mobile.status}
                    </span>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-slate-500 block mb-1">💼 Conversion Funnel</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">{scanResult.categories.conversion.score}</span>
                      <span className="text-xs text-slate-400 font-bold">/{scanResult.categories.conversion.max}</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-600 mt-1 block">
                      Status: {scanResult.categories.conversion.status}
                    </span>
                  </div>

                </div>

                {/* Filter Tabs for Checks */}
                <div className="flex items-center justify-between border-b border-[#E9E4F2] pb-3 mb-6">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                    Diagnostic Checkpoints ({filteredChecks?.length})
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFilterTab("all")}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${filterTab === "all" ? "bg-[#7C3AED] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterTab("fail")}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${filterTab === "fail" ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      Issues & Warnings
                    </button>
                    <button
                      onClick={() => setFilterTab("pass")}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${filterTab === "pass" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      Passed
                    </button>
                  </div>
                </div>

                {/* Checkpoints List */}
                <div className="space-y-3 mb-10">
                  {filteredChecks?.map((check) => (
                    <div
                      key={check.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                        check.status === "pass"
                          ? "bg-emerald-50/30 border-emerald-100"
                          : check.status === "warning"
                          ? "bg-amber-50/30 border-amber-100"
                          : "bg-rose-50/30 border-rose-100"
                      }`}
                    >
                      <span className="text-base mt-0.5">
                        {check.status === "pass" ? (
                          <i className="fa-solid fa-circle-check text-emerald-500" />
                        ) : check.status === "warning" ? (
                          <i className="fa-solid fa-triangle-exclamation text-amber-500" />
                        ) : (
                          <i className="fa-solid fa-circle-xmark text-rose-500" />
                        )}
                      </span>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-xs font-black text-slate-900">{check.title}</h4>
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-600">
                            {check.category}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-slate-600 font-medium mt-1 leading-normal">
                          {check.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* HIGH-CONVERTING INBOUND ACTION CARD */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#160D2E] via-[#211442] to-[#0D0819] text-white p-8 rounded-3xl border border-purple-500/30 shadow-2xl text-center flex flex-col items-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-black uppercase tracking-wider mb-3">
                    ⚡ 100% Free • No Obligation
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 max-w-xl leading-tight">
                    Want Joy Digital to Fix These Bottlenecks & Scale Your Inquiries?
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-200 max-w-xl leading-relaxed mb-6 font-medium">
                    Our technical engineers build custom, sub-second Next.js web applications that eliminate server lag and double conversion rates. Get our line-by-line developer fixing roadmap.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                    >
                      <i className="fa-solid fa-file-pdf" />
                      <span>Get Detailed Developer Roadmap</span>
                    </button>

                    <a
                      href={`https://wa.me/919080026133?text=Hi%20Saravanan,%20I%20ran%20the%20AI%20Audit%20Tool%20for%20our%20website%20(${scanResult.cleanDomain})%20and%20it%20scored%20${scanResult.healthScore}/100.%20Can%20we%20discuss%20the%20fixes?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-[#10b981] hover:bg-[#059669] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <i className="fa-brands fa-whatsapp text-base" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Educational Trust Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-[#E9E4F2] p-6 rounded-2xl shadow-xs">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-gauge-high" />
              </span>
              <h3 className="text-sm font-black text-slate-900 mb-2">Sub-Second Core Web Vitals</h3>
              <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">
                Every 1-second delay cuts form conversions by up to 7%. We build custom architectures delivering sub-second speeds globally.
              </p>
            </div>

            <div className="bg-white border border-[#E9E4F2] p-6 rounded-2xl shadow-xs">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-magnifying-glass-chart" />
              </span>
              <h3 className="text-sm font-black text-slate-900 mb-2">Technical SEO Architecture</h3>
              <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">
                Deep JSON-LD schema injection, semantic HTML5 tags, and canonical mapping ensure Google indexes your high-intent services accurately.
              </p>
            </div>

            <div className="bg-white border border-[#E9E4F2] p-6 rounded-2xl shadow-xs">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-comments-dollar" />
              </span>
              <h3 className="text-sm font-black text-slate-900 mb-2">Frictionless Inbound Funnels</h3>
              <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">
                Direct WhatsApp Business triggers, automated CRM webhook syncing, and streamlined quotation forms that convert visitors into paying clients.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* LEAD CAPTURE MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-200">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-base" />
            </button>

            <div className="mb-6 text-center">
              <span className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mx-auto mb-3">
                <i className="fa-solid fa-file-waveform" />
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-1">Claim Detailed Developer Roadmap</h3>
              <p className="text-xs text-[#6B6478] font-semibold">
                We will email/WhatsApp the complete line-by-line fixing blueprint for <span className="text-[#7C3AED] font-black">{scanResult?.cleanDomain}</span>.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full bg-[#FAF9FF] border border-[#E9E4F2] rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:bg-white focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 text-slate-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  className="w-full bg-[#FAF9FF] border border-[#E9E4F2] rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:bg-white focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 text-slate-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block mb-1">
                  Work Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  className="w-full bg-[#FAF9FF] border border-[#E9E4F2] rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:bg-white focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 text-slate-900"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-black text-xs shadow-md shadow-purple-600/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Generating Roadmap...</span>
                ) : submitSuccess ? (
                  <span>✅ Queued Successfully!</span>
                ) : (
                  <span>Send My Detailed Report</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
