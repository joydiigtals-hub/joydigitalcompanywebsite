"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { trackToolUsage } from "@/lib/toolTracker";
import ToolFeedback from "@/components/ui/ToolFeedback";

type CalcMode = "exclusive" | "inclusive";
type TransType = "intra" | "inter";

export default function GstCalculatorClient() {
  const [calculationMode, setCalculationMode] = useState<CalcMode>("exclusive");
  const [transactionType, setTransactionType] = useState<TransType>("intra");
  const [gstPercentage, setGstPercentage] = useState<number>(18);
  
  // Amount Inputs
  const [inputValue, setInputValue] = useState<string>("10,000");
  const [amount, setAmount] = useState<number>(10000);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Results State
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [gstAmount, setGstAmount] = useState<number>(0);
  const [cgst, setCgst] = useState<number>(0);
  const [sgst, setSgst] = useState<number>(0);
  const [igst, setIgst] = useState<number>(0);
  const [finalAmount, setFinalAmount] = useState<number>(0);

  // Status Alerts
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<boolean>(false);

  // Trigger track event on page view
  useEffect(() => {
    trackToolUsage({ toolName: "GST Calculator", action: "tool_view" });
  }, []);

  // Sync calculation results whenever inputs change
  useEffect(() => {
    if (amount <= 0 || isNaN(amount)) {
      setBaseAmount(0);
      setGstAmount(0);
      setCgst(0);
      setSgst(0);
      setIgst(0);
      setFinalAmount(0);
      return;
    }

    const rate = gstPercentage;
    let calculatedBase = 0;
    let calculatedGst = 0;
    let calculatedFinal = 0;

    if (calculationMode === "inclusive") {
      calculatedGst = amount - (amount / (1 + rate / 100));
      calculatedBase = amount - calculatedGst;
      calculatedFinal = amount;
    } else {
      calculatedGst = amount * (rate / 100);
      calculatedBase = amount;
      calculatedFinal = amount + calculatedGst;
    }

    setBaseAmount(calculatedBase);
    setGstAmount(calculatedGst);
    setFinalAmount(calculatedFinal);

    if (transactionType === "intra") {
      setCgst(calculatedGst / 2);
      setSgst(calculatedGst / 2);
      setIgst(0);
    } else {
      setCgst(0);
      setSgst(0);
      setIgst(calculatedGst);
    }
  }, [calculationMode, transactionType, amount, gstPercentage]);

  // Clean INR currency formatting helper
  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: value % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const handleAmountChange = (val: string) => {
    let clean = val.replace(/[^0-9.]/g, "");
    
    const parts = clean.split(".");
    if (parts.length > 2) {
      clean = parts[0] + "." + parts.slice(1).join("");
    }

    setInputValue(clean);
    const parsed = parseFloat(clean);

    if (!clean) {
      setAmount(0);
      setErrorMsg("Amount is required");
      return;
    }

    if (isNaN(parsed) || parsed < 0) {
      setErrorMsg("Please enter a valid positive number");
      setAmount(0);
      return;
    }

    if (parsed > 1000000000) {
      setErrorMsg("Amount exceeds maximum limit (₹100 Cr)");
      return;
    }

    setErrorMsg("");
    setAmount(parsed);
    trackToolUsage({
      toolName: "GST Calculator",
      action: "amount_changed",
      metadata: { amount: parsed }
    });
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (amount > 0) {
      setInputValue(new Intl.NumberFormat("en-IN").format(amount));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (amount > 0) {
      setInputValue(amount.toString());
    } else {
      setInputValue("");
    }
  };

  const handleModeToggle = (mode: CalcMode) => {
    setCalculationMode(mode);
    trackToolUsage({
      toolName: "GST Calculator",
      action: "gst_calculator_used",
      metadata: { calculationMode: mode }
    });
  };

  const handleTransactionChange = (tType: TransType) => {
    setTransactionType(tType);
    trackToolUsage({
      toolName: "GST Calculator",
      action: "transaction_type_selected",
      metadata: { type: tType }
    });
  };

  const handleRateChange = (rate: number) => {
    setGstPercentage(rate);
    trackToolUsage({
      toolName: "GST Calculator",
      action: "gst_rate_selected",
      metadata: { rate }
    });
  };

  const handleReset = () => {
    setAmount(10000);
    setInputValue("10,000");
    setGstPercentage(18);
    setTransactionType("intra");
    setCalculationMode("exclusive");
    setErrorMsg("");
    trackToolUsage({ toolName: "GST Calculator", action: "reset_clicked" });
  };

  const buildShareText = () => {
    const cleanAmount = formatINR(amount);
    const cleanGst = formatINR(gstAmount);
    const cleanTotal = formatINR(finalAmount);

    return `GST Calculation - Joy Digital\n\nAmount: ${cleanAmount}\nGST Rate: ${gstPercentage}%\nTotal GST: ${cleanGst}\nGrand Total: ${cleanTotal}`;
  };

  const buildCopyText = () => {
    const cleanAmount = formatINR(amount);
    const cleanRate = `${gstPercentage}%`;
    const tType = transactionType === "intra" ? "Intra-State" : "Inter-State";
    const cleanGstTotal = formatINR(gstAmount);
    const cleanGrand = formatINR(finalAmount);

    if (transactionType === "intra") {
      const cleanCgst = formatINR(cgst);
      const cleanSgst = formatINR(sgst);
      return `GST Calculation - Joy Digital\n\nAmount: ${cleanAmount}\nGST Rate: ${cleanRate}\nTransaction Type: ${tType}\n\nCGST: ${cleanCgst}\nSGST: ${cleanSgst}\nTotal GST: ${cleanGstTotal}\n\nGrand Total: ${cleanGrand}`;
    } else {
      const cleanIgst = formatINR(igst);
      return `GST Calculation - Joy Digital\n\nAmount: ${cleanAmount}\nGST Rate: ${cleanRate}\nTransaction Type: ${tType}\n\nIGST: ${cleanIgst}\nTotal GST: ${cleanGstTotal}\n\nGrand Total: ${cleanGrand}`;
    }
  };

  const handleCopyResult = () => {
    if (amount <= 0) return;
    const text = buildCopyText();
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    trackToolUsage({ toolName: "GST Calculator", action: "copy_clicked", metadata: { amount } });
  };

  const handleShareResult = async () => {
    if (amount <= 0) return;
    const shareText = buildShareText();

    if (navigator.share) {
      try {
        await navigator.share({
          title: "GST Calculation - Joy Digital",
          text: shareText,
          url: window.location.href
        });
        trackToolUsage({ toolName: "GST Calculator", action: "share_clicked", metadata: { method: "native" } });
      } catch (err) {
        console.log("Sharing cancelled", err);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
      trackToolUsage({ toolName: "GST Calculator", action: "share_clicked", metadata: { method: "copy_fallback" } });
    }
  };

  const handleCtaClick = () => {
    trackToolUsage({ toolName: "GST Calculator", action: "cta_clicked" });
  };

  return (
    <>
      <Header />

      <main className="bg-[#3B1580] text-[#FFFFFF] min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <nav className="text-xs text-[#D9CCF5]/80 font-bold mb-6 flex items-center gap-1.5" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C9F600] transition-colors">Home</a>
            <i className="fa-solid fa-chevron-right text-[8px] text-[#D9CCF5]/50" aria-hidden="true" />
            <a href="/free-tools" className="hover:text-[#C9F600] transition-colors">Free Tools</a>
            <i className="fa-solid fa-chevron-right text-[8px] text-[#D9CCF5]/50" aria-hidden="true" />
            <span className="text-white" aria-current="page">GST Calculator</span>
          </nav>

          {/* H1 and supporting text */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-2">
              Free Financial Utility
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Online GST Calculator Tool
            </h1>
            <p className="text-xs sm:text-sm text-[#D9CCF5]/90 font-medium leading-relaxed">
              Calculate Goods and Services Tax (GST) instantly with our free tool. Easily estimate CGST, SGST, or IGST breakdowns for 5%, 12%, 18%, and 28% tax slabs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Input Configuration Column */}
            <div className="lg:col-span-7 bg-[#260B5E] border border-white/20 p-6 sm:p-8 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col gap-6">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C9F600]" />

              {/* 1. Product / Service Amount Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="gst-amount-input" className="text-xs font-bold text-white tracking-wide block">
                  Product / Service Amount
                </label>
                <div className={`flex items-center gap-2.5 bg-[#3B1580] border rounded-2xl px-4 py-3.5 focus-within:ring-4 focus-within:ring-[#C9F600]/20 transition-all ${
                  errorMsg ? "border-rose-450 focus-within:border-rose-450" : "border-white/20 focus-within:border-[#C9F600]"
                }`}>
                  <span className="text-sm font-extrabold text-[#C9F600]" aria-hidden="true">₹</span>
                  <input
                    type="text"
                    id="gst-amount-input"
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full text-xs sm:text-sm outline-none border-none bg-transparent font-bold text-white placeholder:text-white/40"
                  />
                </div>
                {errorMsg && <p className="text-xs font-bold text-rose-400 mt-1">{errorMsg}</p>}
              </div>

              {/* 2. GST Calculation Mode Exclusive/Inclusive */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-white tracking-wide block">GST Calculation Mode</span>
                <div className="flex gap-2 bg-[#1A0742] p-1.5 rounded-2xl border border-white/15">
                  <button
                    type="button"
                    onClick={() => handleModeToggle("exclusive")}
                    className={`flex-1 text-center py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      calculationMode === "exclusive"
                        ? "bg-[#C9F600] text-[#120526] shadow-md shadow-[#C9F600]/20"
                        : "text-[#D9CCF5] hover:text-white"
                    }`}
                  >
                    GST Exclusive (Add Tax)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeToggle("inclusive")}
                    className={`flex-1 text-center py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      calculationMode === "inclusive"
                        ? "bg-[#C9F600] text-[#120526] shadow-md shadow-[#C9F600]/20"
                        : "text-[#D9CCF5] hover:text-white"
                    }`}
                  >
                    GST Inclusive (Tax Included)
                  </button>
                </div>
              </div>

              {/* 3. GST Rate Selection */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-white tracking-wide block">GST Rate (%)</span>
                <div className="grid grid-cols-5 gap-2">
                  {[0, 5, 12, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => handleRateChange(rate)}
                      className={`py-3.5 text-xs font-black rounded-xl border transition-all cursor-pointer ${
                        gstPercentage === rate
                          ? "bg-[#C9F600] text-[#120526] border-[#C9F600] shadow-md shadow-[#C9F600]/20 scale-[1.02]"
                          : "bg-[#3B1580] text-white border-white/20 hover:border-white/40 hover:bg-[#431B8E]"
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Transaction Type */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-white tracking-wide block">Transaction Type</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "intra", label: "Intra-State", desc: "Local trade within same state" },
                    { value: "inter", label: "Inter-State", desc: "Interstate trade outside state" }
                  ].map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => handleTransactionChange(t.value as TransType)}
                      className={`p-4 rounded-[18px] border text-left flex flex-col justify-center gap-1.5 transition-all cursor-pointer ${
                        transactionType === t.value
                          ? "bg-[#C9F600]/15 text-[#C9F600] border-[#C9F600] shadow-sm"
                          : "bg-[#3B1580] text-[#D9CCF5] border-white/20 hover:border-white/40 hover:bg-[#431B8E]"
                      }`}
                    >
                      <span className={`text-xs font-black ${transactionType === t.value ? "text-[#C9F600]" : "text-white"}`}>{t.label}</span>
                      <span className="text-[10px] font-medium text-[#D9CCF5]/70">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results breakdown Column */}
            <div className="lg:col-span-5 bg-[#260B5E] border border-white/20 p-6 sm:p-8 rounded-[24px] shadow-2xl flex flex-col justify-between h-full min-h-[460px]">
              <div>
                <h2 className="text-sm font-black text-white mb-6 border-b border-white/15 pb-3" id="calc-result-title">
                  Calculation Breakdown
                </h2>
                
                {amount > 0 && !errorMsg ? (
                  <div className="flex flex-col gap-4" aria-labelledby="calc-result-title">
                    <div className="flex justify-between items-center text-xs font-bold py-1">
                      <span className="text-[#D9CCF5]/80">Base Amount</span>
                      <span className="text-white font-extrabold">{formatINR(baseAmount)}</span>
                    </div>

                    {transactionType === "intra" ? (
                      <>
                        <div className="flex justify-between items-center text-xs font-bold py-1 border-t border-white/10 pt-3">
                          <span className="text-[#D9CCF5]/80">CGST ({gstPercentage / 2}%)</span>
                          <span className="text-white font-bold">{formatINR(cgst)}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-bold py-1 border-t border-white/10 pt-3">
                          <span className="text-[#D9CCF5]/80">SGST ({gstPercentage / 2}%)</span>
                          <span className="text-white font-bold">{formatINR(sgst)}</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between items-center text-xs font-bold py-1 border-t border-white/10 pt-3">
                        <span className="text-[#D9CCF5]/80">IGST ({gstPercentage}%)</span>
                        <span className="text-white font-bold">{formatINR(igst)}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-xs font-bold py-1 border-t border-white/10 pt-3 text-[#C9F600]">
                      <span>Total GST Tax Amount</span>
                      <span className="font-extrabold">{formatINR(gstAmount)}</span>
                    </div>

                    <div className="flex justify-between items-center text-sm font-extrabold py-5 border-t border-white/15 mt-3 text-white">
                      <span>Grand Total</span>
                      <span className="text-2xl sm:text-3xl font-black text-[#C9F600]">{formatINR(finalAmount)}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#3B1580] border border-white/20 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                      <i className="fa-solid fa-calculator" />
                    </div>
                    <p className="text-xs text-[#D9CCF5]/70 font-medium leading-relaxed max-w-[200px]">
                      {errorMsg || "Enter an amount above to see the tax breakdown."}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions Box */}
              <div className="flex flex-col gap-3 mt-6 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={handleCopyResult}
                  disabled={amount <= 0 || !!errorMsg}
                  className="w-full bg-[#C9F600] hover:bg-[#b8f000] text-[#120526] font-black text-xs py-4 rounded-xl transition-all shadow-lg shadow-[#C9F600]/20 hover:scale-[1.015] flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {copySuccess ? (
                    <>
                      <i className="fa-solid fa-check" /> Copied!
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-copy" /> Copy Result
                    </>
                  )}
                </button>
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleShareResult}
                    disabled={amount <= 0 || !!errorMsg}
                    className="flex-1 bg-[#3B1580] border border-white/20 hover:bg-[#431B8E] text-white font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fa-solid fa-share-nodes" /> {shareSuccess ? "Copied Share Text" : "Share"}
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 bg-[#3B1580] border border-white/20 hover:bg-[#431B8E] text-white font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <i className="fa-solid fa-rotate-left" /> Reset
                  </button>
                </div>
              </div>

              {/* Pitch CTA Card */}
              <div className="bg-[#1A0742] border border-[#C9F600]/30 p-5 rounded-2xl mt-6 relative overflow-hidden text-left">
                <div className="absolute top-0 left-0 h-full w-1 bg-[#C9F600]" />
                <h3 className="text-xs font-black text-white mb-1">Automate Your Invoicing & Billing!</h3>
                <p className="text-[10px] text-[#D9CCF5]/80 font-medium leading-relaxed mb-4">
                  We design custom quotation engines, automated GST invoicing portals, and lead systems to save you 10+ hours per week.
                </p>
                <a
                  href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20am%20interested%20in%20building%20custom%20billing/invoicing%20software%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-1.5 bg-[#C9F600] hover:bg-[#b8f000] text-[#120526] font-black text-[10px] py-2.5 px-4.5 rounded-lg shadow-sm hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xs" /> Talk to an Automation Expert
                </a>
              </div>
            </div>
          </div>

          <ToolFeedback toolName="GST Calculator" />
        </div>
      </main>

      <Footer />
    </>
  );
}
