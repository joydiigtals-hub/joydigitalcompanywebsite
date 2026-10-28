"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Globe,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { getUtmParameters } from "@/lib/utmTracker";
import { ALL_COUNTRY_CODES, POPULAR_COUNTRY_CODES, getFilteredCountries } from "@/lib/countryCodes";
import GetQuoteModal from "@/components/ui/GetQuoteModal";
import DigitalNetworkBackground from "@/components/ui/DigitalNetworkBackground";

interface ModernHeroSectionProps {
  country?: string;
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919080026133";

const heroMainWords = ["Custom", "Website", "Development", "for", "Businesses"];
const heroGradientWords = ["Ready", "to", "Grow"];

// Framer Motion Variants for Staggered Orchestration (Optimized for Mobile Speed)
export default function ModernHeroSection({ country = "" }: ModernHeroSectionProps) {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    _honey: "",
  });
  const [submitError, setSubmitError] = useState("");

  const getDefaultCountryCode = (c: string) => {
    switch (c) {
      case "us": return "+1";
      case "uk": return "+44";
      case "ae": return "+971";
      case "ca": return "+1";
      case "au": return "+61";
      default: return "+91";
    }
  };

  const [selectedCountryCode, setSelectedCountryCode] = useState(() => getDefaultCountryCode(country));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Country Dropdown State
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = getFilteredCountries(countrySearch);
  const displayCountries = countrySearch.trim()
    ? filteredCountries
    : [...POPULAR_COUNTRY_CODES, ...ALL_COUNTRY_CODES.filter((c) => !POPULAR_COUNTRY_CODES.some((p) => p.name === c.name))];

  const selectedCountry = ALL_COUNTRY_CODES.find((c) => c.code === selectedCountryCode) || ALL_COUNTRY_CODES[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if ((name === "email" || name === "mobile") && (errors.email || errors.mobile)) {
      setErrors((prev) => ({ ...prev, email: "", mobile: "" }));
    }
    if (submitError) setSubmitError("");
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    const emailTrim = formData.email.trim();
    const mobileTrim = formData.mobile.trim();

    if (!emailTrim && !mobileTrim) {
      tempErrors.email = "Please provide an email or phone number.";
      tempErrors.mobile = "Please provide a phone number or email.";
    }

    if (emailTrim) {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(emailTrim)) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    if (mobileTrim) {
      const numbersOnly = mobileTrim.replace(/\D/g, "");
      if (numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number (at least 7 digits).";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData._honey) {
      router.push(`/thank-you?name=${encodeURIComponent(formData.name.trim())}`);
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    try {
      const utm = getUtmParameters();
      const payload = {
        Name: formData.name.trim(),
        Email: formData.email.trim() || "N/A",
        Mobile: formData.mobile.trim()
          ? (formData.mobile.trim().startsWith("+")
            ? formData.mobile.trim()
            : `${selectedCountryCode} ${formData.mobile.trim()}`)
          : "N/A",
        Website: formData.website.trim() || "N/A",
        Service: "Free Website Consultation & Audit + Strategy Proposal",
        Source: "Hero Booking Consultation Form",
        utmParams: utm || undefined,
        _honey: formData._honey,
        _subject: `⚡ Free Website Consultation & Audit Request - ${formData.name.trim()} [Joy Digital]`,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || "Failed to submit form");
      }

      // Unified Conversion Tracking
      if (typeof window !== "undefined") {
        const tracker = (window as any).trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("form_submit", {
            form_source: "Hero Booking Form",
            page_url: window.location.href,
          });
        }
      }

      const queryParams = new URLSearchParams({
        name: formData.name.trim(),
        service: "Free Website Consultation & Audit",
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
      }).toString();

      router.push(`/thank-you?${queryParams}`);
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || `Enquiry submission failed. Please contact ${contactEmail} directly.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExploreCaseStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("case-studies");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/case-studies");
    }
  };

  return (
    <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-[#0B0914] text-white border-b border-[#1E1838] select-none">

      {/* Lightweight Digital Network & Ambient Glow Background */}
      <DigitalNetworkBackground />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Staggered Hero Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Step 1: Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18132E] border border-[#2D244E] text-[#A78BFA] text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Custom Websites &amp; SEO-Friendly Solutions</span>
            </div>
          </div>

          {/* Step 2: Main Headline with Staggered Word Reveal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] flex flex-wrap gap-x-[0.28em] gap-y-1 sm:gap-y-2 select-none">
            {heroMainWords.map((word, idx) => (
              <span key={`main-w-${idx}`} className="inline-block">
                {word}
              </span>
            ))}
            {heroGradientWords.map((word, idx) => (
              <span key={`grad-w-${idx}`} className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 animate-gradient-shimmer">
                {word}
              </span>
            ))}
          </h1>

            {/* Step 3: Subtitle & Feature Bullet Points */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We build custom, mobile-friendly websites that help businesses showcase their services, reach more customers, and generate enquiries. From business websites to specialized travel platforms, our solutions are designed around your goals.
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Custom websites tailored to your business needs</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>Mobile-friendly design and performance-focused development</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-slate-200 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>SEO-friendly structure and clear enquiry pathways</span>
              </div>
            </div>
          </div>

          {/* Step 4: Left CTA Button & Social Proof */}
          <div className="space-y-6 pt-2 w-full max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <GetQuoteModal
                triggerText="Get a Free Quote"
                source="Hero Left CTA"
                triggerClassName="px-7 py-3.5 text-sm font-bold rounded-xl"
              />
              <a
                href="#case-studies"
                onClick={handleExploreCaseStudies}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#17122B] hover:bg-[#20193B] border border-[#2B2346] hover:border-[#7C3AED]/50 text-white text-sm font-bold transition-all shadow-lg group cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#A78BFA] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="pt-5 border-t border-[#1F1938] w-full">
              <p className="text-xs text-slate-400 font-medium">
                Trusted by fast-growing brands across USA, UK, UAE &amp; worldwide.
              </p>
            </div>
          </div>
        </div>
        <div id="enquiry-section" className="lg:col-span-5 flex justify-center lg:justify-end w-full scroll-mt-28">
          <div className="w-full max-w-md relative rounded-2xl p-[1px] overflow-hidden group">
            
            {/* Animated Conic Glowing Border Beam */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,#7C3AED_0%,#3B82F6_50%,#7C3AED_100%)] opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-border-beam pointer-events-none" />

            {/* Inner Glassmorphism Card */}
            <div className="w-full bg-[#130E26]/95 border border-[#29204A] rounded-2xl p-6 sm:p-7 shadow-2xl shadow-purple-950/40 backdrop-blur-xl relative z-10 overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full mb-2">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>Free Project Review</span>
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Request a Free Project Consultation &amp; Audit
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Share your project requirements or existing website to receive actionable recommendations and a transparent proposal.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                
                {/* Hidden Honeypot & UTM */}
                <input type="text" name="_honey" value={formData._honey} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="utm_source" value={getUtmParameters()?.source || ""} />
                
                {/* Field 1: Full Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-name" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className={`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] ${
                    errors.name ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                  }`}>
                    <User className="w-4 h-4 text-slate-400 shrink-0 transition-colors group-focus-within:text-[#A78BFA]" />
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-400 font-medium">{errors.name}</span>}
                </div>

                {/* Field 2: Work Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-email" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Work Email <span className="text-slate-400 font-normal text-[9px] lowercase">(or Phone below)</span>
                  </label>
                  <div className={`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] ${
                    errors.email ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                  }`}>
                    <Mail className="w-4 h-4 text-slate-400 shrink-0 transition-colors group-focus-within:text-[#A78BFA]" />
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-red-400 font-medium">{errors.email}</span>}
                </div>



                {/* Field 3: Phone / WhatsApp Number */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-mobile" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Phone / WhatsApp Number <span className="text-slate-400 font-normal text-[9px] lowercase">(optional)</span>
                  </label>
                  <div className="flex gap-2 relative">
                    {/* Country Selector Dropdown */}
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="w-[95px] text-xs py-2.5 px-2.5 bg-[#1A1433] border border-[#2D2352] hover:border-[#7C3AED]/50 text-white rounded-xl flex items-center justify-between outline-none cursor-pointer font-semibold transition-all h-full"
                      >
                        <span className="flex items-center gap-1">
                          <span>{selectedCountry?.flag}</span>
                          <span>{selectedCountryCode}</span>
                        </span>
                        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isCountryOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isCountryOpen && (
                        <div className="absolute z-50 left-0 top-[108%] w-72 sm:w-80 max-h-64 overflow-y-auto bg-[#150F2E] border border-[#3B2D6B] rounded-xl shadow-2xl py-1 text-white">
                          <div className="p-2 border-b border-[#2B2152] bg-[#0E0A21] sticky top-0 z-10">
                            <input
                              type="text"
                              placeholder="Search country or code..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full text-xs px-3 py-2 bg-[#1C153B] border border-[#3D306E] rounded-lg text-white placeholder:text-slate-400 outline-none focus:border-[#7C3AED]"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          {displayCountries.map((c) => (
                            <button
                              key={`${c.code}-${c.name}`}
                              type="button"
                              onClick={() => {
                                setSelectedCountryCode(c.code);
                                setIsCountryOpen(false);
                                setCountrySearch("");
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs hover:bg-[#281D54] transition-colors cursor-pointer ${
                                selectedCountryCode === c.code ? "bg-[#7C3AED]/30 text-white font-bold" : "text-slate-200"
                              }`}
                            >
                              <span className="flex items-center gap-2.5 min-w-0">
                                <span className="text-base select-none shrink-0">{c.flag}</span>
                                <span className="font-semibold text-slate-100 truncate max-w-[170px]">{c.name}</span>
                              </span>
                              <span className="text-[#A78BFA] font-bold text-xs shrink-0">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 flex-1 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] ${
                      errors.mobile ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                    }`}>
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="tel"
                        id="hero-mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Phone / WhatsApp"
                        className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                      />
                    </div>
                  </div>
                  {errors.mobile && <span className="text-[10px] text-red-400 font-medium">{errors.mobile}</span>}
                </div>

                {/* Field 4: Project Scope / Website URL (Optional) */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-website" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Project Scope / Website URL</span>
                    <span className="text-[9px] text-slate-500 font-normal">Optional</span>
                  </label>
                  <div className="flex items-center gap-2 bg-[#1A1433] border border-[#2D2352] focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] rounded-xl px-3 py-2.5 transition-all duration-300">
                    <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      id="hero-website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="e.g. acme.com or Web Design / SEO"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                </div>

                {/* Submission Error Banner */}
                {submitError && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs text-center font-medium">
                    {submitError}
                  </div>
                )}

                {/* Action Buttons Container */}
                <div className="flex flex-col gap-3 mt-2">
                  {/* Primary CTA Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#3B82F6] hover:from-[#6D28D9] hover:to-[#2563EB] text-white font-extrabold text-sm shadow-xl shadow-purple-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-1/3 h-full bg-white/25 blur-sm transform -skew-x-12 animate-shimmer-sweep pointer-events-none" />
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Consultation &amp; Proposal</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20Joy%20Digital,%20I'd%20like%20to%20discuss%20a%20website%20development%20project%20and%20request%20a%20free%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] border border-[#25D366] text-white font-bold text-xs shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
                      aria-label="Chat on WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp text-sm group-hover:scale-110 transition-transform duration-300" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${contactEmail}?subject=Website%20Development%20%26%20Consultation%20Inquiry`}
                      className="flex-1 py-3 px-3 rounded-xl bg-[#1A1433] hover:bg-[#20193B] border border-[#2D2352] text-slate-200 hover:text-white font-bold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
                      aria-label="Email Us"
                    >
                      <Mail className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>

                {/* Micro-trust footer */}
                <div className="pt-2 text-center flex flex-col gap-1.5">
                  <p className="text-[10px] font-medium text-slate-400 flex items-center justify-center gap-1.5 flex-wrap">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>No credit card required • Instant 15-min call • Zero commitment</span>
                  </p>
                  <p className="text-[9px] font-semibold text-slate-500 flex items-center justify-center gap-1">
                    <i className="fa-solid fa-lock text-emerald-500/70" /> We respect your privacy. No spam ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Step 6: Scroll Down Indicator Button (Centered at Bottom for Desktop & Mobile) */}
        <div className="lg:col-span-12 flex justify-center pt-8 sm:pt-10 z-20">
          <button
            type="button"
            onClick={() => {
              const target = document.getElementById("trust-overview") || document.getElementById("case-studies");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
              }
            }}
            aria-label="Scroll down to explore website features"
            className="group flex items-center gap-2.5 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer bg-[#140F2D]/90 hover:bg-[#1B143B] border border-[#2D2352] hover:border-[#7C3AED]/60 px-5 py-2.5 rounded-full shadow-lg hover:shadow-purple-900/30 hover:scale-105 active:scale-95"
          >
            <span className="uppercase tracking-widest text-[11px] font-bold text-slate-300 group-hover:text-white">Scroll Down</span>
            <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors">
              <ChevronDown className="w-3.5 h-3.5 text-[#A78BFA] group-hover:text-white animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

