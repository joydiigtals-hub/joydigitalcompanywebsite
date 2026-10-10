"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getUtmParameters } from "@/lib/utmTracker";
import Image from "next/image";

interface LeadFormProps {
  layout?: "vertical" | "horizontal";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  source?: string;
}

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
];

export default function LeadForm({
  layout = "vertical",
  title = "Request a Free Proposal",
  subtitle = "Fill in your details below. Our experts will get back to you within 24 hours.",
  ctaText = "Get My Free Proposal →",
  source = "General Lead Funnel",
}: LeadFormProps) {
  const pathname = usePathname();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";

  // Detect current region from pathname
  const parts = pathname.split("/").filter(Boolean);
  const detectedRegion = (parts.length > 0 && ["us", "uk", "ae", "in"].includes(parts[0])) ? parts[0] : "";

  const getDefaultCountryCode = (region: string) => {
    switch (region) {
      case "us": return "+1";
      case "uk": return "+44";
      case "ae": return "+971";
      case "in": return "+91";
      default: return "+91";
    }
  };

  const [selectedCountryCode, setSelectedCountryCode] = useState(() => getDefaultCountryCode(detectedRegion));

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    mobile: "",
    message: "",
    _honey: "", // Honeypot
    utm_source: "", // Persistent UTM Source
    region: detectedRegion || "in",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dropdown States
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    
    // Capture UTM Source on load
    const utm = getUtmParameters();
    if (utm && utm.source) {
      setFormData(prev => ({ ...prev, utm_source: utm.source as string }));
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update region form data if pathname changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setFormData((prev) => ({
      ...prev,
      region: detectedRegion || "in"
    }));
    setSelectedCountryCode(getDefaultCountryCode(detectedRegion));
  }

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Work Email is required.";
    } else {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(formData.email.trim())) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    const mobileVal = formData.mobile.trim();
    if (mobileVal) {
      const numbersOnly = mobileVal.replace(/\D/g, "");
      if (numbersOnly.length > 0 && numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number.";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Honeypot check on client
    if (formData._honey) {
      // Act like it succeeded to fool bots
      setIsSuccess(true);
      return;
    }

    setIsLoading(true);
    try {
      const utm = getUtmParameters();
      const payload = {
        Name: formData.name.trim(),
        Email: formData.email.trim(),
        Website: formData.website.trim() || "N/A",
        Mobile: formData.mobile.trim() 
          ? (formData.mobile.trim().startsWith("+") ? formData.mobile.trim() : `${selectedCountryCode} ${formData.mobile.trim()}`)
          : "N/A",
        Message: formData.message.trim() || "No message provided.",
        Source: source,
        TargetRegion: formData.region.toUpperCase(),
        _honey: formData._honey,
        utmParams: utm || undefined,
        _subject: `🔥 Inbound Lead [${formData.region.toUpperCase()}] - ${formData.name}`,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Unified Conversion Tracking
      if (typeof window !== "undefined") {
        const tracker = (window as any).trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("form_submit", {
            form_source: source,
            page_url: window.location.href,
          });
        } else {
          const gtag = (window as any).gtag;
          if (typeof gtag === "function") {
            gtag("event", "form_submit", {
              form_source: source,
              page_url: window.location.href,
            });
          }
        }
      }

      // Show inline success
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      alert(`Enquiry delivery failed. Please email us at ${contactEmail} directly.`);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(c => c.code === selectedCountryCode) || COUNTRY_CODES[0];
  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  if (isSuccess) {
    return (
      <div className={`bg-white border border-[#E9E4F2] p-8 rounded-2xl shadow-xl w-full ${layout === "horizontal" ? "max-w-4xl" : "max-w-md"} text-center animate-fade-in`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          <i className="fa-solid fa-check" />
        </div>
        <h3 className="text-xl font-extrabold text-primary-dark mb-2">Message Sent!</h3>
        <p className="text-sm text-text-secondary mb-6">
          Thank you, {formData.name.split(" ")[0]}. We have received your request. Our team will review your details and send you a calendar link to discuss your project within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData(prev => ({ ...prev, name: "", email: "", website: "", mobile: "", message: "", _honey: "" }));
          }}
          className="text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />

      <div className={`bg-white border border-[#E9E4F2] p-5 sm:p-7 rounded-2xl shadow-xl w-full ${layout === "horizontal" ? "max-w-4xl" : "max-w-md"} relative transition-all duration-300 hover:shadow-2xl`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#F97316] rounded-t-2xl" />

        <div className="mb-6 mt-1 text-center sm:text-left">
          {title && <h3 className="text-xl font-extrabold text-primary-dark mb-1 leading-snug">{title}</h3>}
          {subtitle && <p className="text-xs text-text-secondary leading-relaxed">{subtitle}</p>}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot & UTM - hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="_honey" value={formData._honey} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="utm_source" value={formData.utm_source} />
          </div>

          <div className={`grid grid-cols-1 ${layout === "horizontal" ? "md:grid-cols-2" : ""} gap-4`}>
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">
                Full Name <span className="text-error-red">*</span>
              </label>
              <div className={`flex items-center gap-2 bg-[#FAF9FF] rounded-xl border px-3.5 py-3 group transition-all duration-300 focus-within:bg-white focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/10 ${errors.name ? "border-[#ef4444]" : "border-[#E9E4F2]"}`}>
                <i className={`fa-solid fa-user text-[13px] shrink-0 ${errors.name ? "text-error-red" : "text-slate-400 group-focus-within:text-[#7C3AED]"}`} />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full text-sm bg-transparent outline-none font-semibold text-primary-dark placeholder:font-normal placeholder:text-slate-400" />
              </div>
              {errors.name && <span className="text-[10px] font-semibold text-[#ef4444]">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">
                Work Email <span className="text-error-red">*</span>
              </label>
              <div className={`flex items-center gap-2 bg-[#FAF9FF] rounded-xl border px-3.5 py-3 group transition-all duration-300 focus-within:bg-white focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/10 ${errors.email ? "border-[#ef4444]" : "border-[#E9E4F2]"}`}>
                <i className={`fa-solid fa-envelope text-[13px] shrink-0 ${errors.email ? "text-error-red" : "text-slate-400 group-focus-within:text-[#7C3AED]"}`} />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full text-sm bg-transparent outline-none font-semibold text-primary-dark placeholder:font-normal placeholder:text-slate-400" />
              </div>
              {errors.email && <span className="text-[10px] font-semibold text-[#ef4444]">{errors.email}</span>}
            </div>
          </div>

          <div className={`grid grid-cols-1 ${layout === "horizontal" ? "md:grid-cols-2" : ""} gap-4`}>
            {/* Website/Project (Optional) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="website" className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">
                Website / Project (Optional)
              </label>
              <div className="flex items-center gap-2 bg-[#FAF9FF] rounded-xl border border-[#E9E4F2] px-3.5 py-3 group transition-all duration-300 focus-within:bg-white focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/10">
                <i className="fa-solid fa-link text-[13px] text-slate-400 group-focus-within:text-[#7C3AED] shrink-0" />
                <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="example.com" className="w-full text-sm bg-transparent outline-none font-semibold text-primary-dark placeholder:font-normal placeholder:text-slate-400" />
              </div>
            </div>

            {/* Mobile (Optional) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile" className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">
                Phone / WhatsApp (Optional)
              </label>
              <div className="flex gap-2 relative">
                <div className="relative shrink-0" ref={countryDropdownRef}>
                  <button type="button" onClick={() => setIsCountryOpen(!isCountryOpen)} className="w-[85px] h-full text-sm px-3 bg-[#FAF9FF] rounded-xl border border-[#E9E4F2] hover:bg-white text-left flex items-center justify-between outline-none font-semibold text-primary-dark transition-all focus:border-[#7C3AED] focus:bg-white focus:ring-4 focus:ring-[#7C3AED]/10">
                    <span className="flex items-center gap-1.5">
                      <span>{selectedCountry.flag}</span>
                    </span>
                    <i className={`fa-solid fa-chevron-down text-[9px] text-slate-400 ${isCountryOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isCountryOpen && (
                    <div className="absolute z-30 left-0 top-[108%] w-56 max-h-60 overflow-y-auto bg-white border border-[#E9E4F2] rounded-xl shadow-xl py-1" style={{ animation: "fadeInSlideDown 0.18s ease-out forwards" }}>
                      <div className="p-2 border-b border-[#E9E4F2] bg-[#FAF9FF] sticky top-0 z-10">
                        <input type="text" placeholder="Search country..." value={countrySearch} onChange={(e) => setCountrySearch(e.target.value)} onClick={(e) => e.stopPropagation()} className="w-full text-xs px-2.5 py-1.5 border border-[#E9E4F2] rounded-lg focus:border-[#7C3AED] outline-none" />
                      </div>
                      {filteredCountries.map((c) => (
                        <button key={c.code} type="button" onClick={() => { setSelectedCountryCode(c.code); setIsCountryOpen(false); setCountrySearch(""); }} className="w-full flex justify-between px-4 py-2.5 text-left text-xs hover:bg-[#FAF9FF] text-primary-dark">
                          <span className="flex items-center gap-2"><span className="text-base">{c.flag}</span> <span className="font-semibold">{c.name}</span></span>
                          <span className="text-slate-400">{c.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`flex items-center gap-2 bg-[#FAF9FF] rounded-xl border px-3.5 py-3 w-full group transition-all duration-300 focus-within:bg-white focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/10 ${errors.mobile ? "border-[#ef4444]" : "border-[#E9E4F2]"}`}>
                  <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone number" className="w-full text-sm bg-transparent outline-none font-semibold text-primary-dark placeholder:font-normal placeholder:text-slate-400" />
                </div>
              </div>
              {errors.mobile && <span className="text-[10px] font-semibold text-[#ef4444]">{errors.mobile}</span>}
            </div>
          </div>

          {/* Message (Optional) */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">
              Project Details (Optional)
            </label>
            <div className="bg-[#FAF9FF] rounded-xl border border-[#E9E4F2] p-3.5 group transition-all duration-300 focus-within:bg-white focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/10">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your goals, timeline, or current challenges..." className="w-full text-sm bg-transparent outline-none font-semibold text-primary-dark placeholder:font-normal placeholder:text-slate-400 resize-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm py-4 rounded-xl shadow-lg shadow-[#7C3AED]/20 hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <><i className="fa-solid fa-spinner animate-spin" /> Submitting...</>
            ) : (
              <><span>{ctaText}</span><i className="fa-solid fa-arrow-right text-[11px]" /></>
            )}
          </button>
          
          <div className="mt-3 flex flex-col items-center gap-3">
            <p className="text-[10px] text-slate-500 font-medium text-center leading-relaxed max-w-[280px]">
              <i className="fa-solid fa-lock text-emerald-500 mr-1" />
              <strong>What happens next?</strong> We'll review your details and send you a calendar link to discuss your project within 24 hours.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100 w-full justify-center opacity-85 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center h-6 px-2 py-0.5 rounded bg-slate-50 border border-slate-200">
                <Image
                  src="/assets/images/google-reviews.svg"
                  alt="Google Reviews"
                  width={80}
                  height={18}
                  unoptimized
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="flex items-center h-6 px-2 py-0.5 rounded bg-slate-50 border border-slate-200">
                <Image
                  src="/assets/images/clutch-logo.svg"
                  alt="Clutch Reviews"
                  width={75}
                  height={18}
                  unoptimized
                  className="h-4 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
