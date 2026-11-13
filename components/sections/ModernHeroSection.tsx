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
import { COUNTRY_LANDING_DATA } from "@/data/countryLandingData";

interface ModernHeroSectionProps {
  country?: string;
  badge?: string;
  titleWordsMain?: string[];
  titleWordsGradient?: string[];
  subtitle?: string;
  bulletPoints?: string[];
  trustText?: string;
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919080026133";

const defaultHeroMainWords = ["Custom", "Website", "Development", "for", "Businesses"];
const defaultHeroGradientWords = ["Ready", "to", "Grow"];

// Framer Motion Variants for Staggered Orchestration (Optimized for Mobile Speed)
export default function ModernHeroSection({
  country = "",
  badge,
  titleWordsMain,
  titleWordsGradient,
  subtitle,
  bulletPoints,
  trustText,
}: ModernHeroSectionProps) {
  const router = useRouter();

  const countryLower = (country || "").toLowerCase();
  const localizedData = COUNTRY_LANDING_DATA[countryLower];

  const currentBadge = badge || localizedData?.hero.badge || "Custom Websites & SEO-Friendly Solutions";
  const heroMainWords = titleWordsMain || localizedData?.hero.headingWordsMain || defaultHeroMainWords;
  const heroGradientWords = titleWordsGradient || localizedData?.hero.headingWordsGradient || defaultHeroGradientWords;
  const currentSubtitle = subtitle || localizedData?.hero.subtitle || "We build custom, mobile-friendly websites that help businesses showcase their services, reach more customers, and generate enquiries. From business websites to specialized travel platforms, our solutions are designed around your goals.";
  const currentBulletPoints = bulletPoints || localizedData?.hero.bulletPoints || [
    "Custom websites tailored to your business needs",
    "Mobile-friendly design and performance-focused development",
    "SEO-friendly structure and clear enquiry pathways",
  ];
  const currentTrustText = trustText || localizedData?.hero.trustText || "Trusted by fast-growing brands across USA, UK, UAE & worldwide.";

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
    <section className="relative pt-24 lg:pt-32 pb-12 overflow-hidden bg-[#3B1580] text-[#FFFFFF] select-none">

      {/* Lightweight Digital Network & Ambient Glow Background */}
      <DigitalNetworkBackground />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Staggered Hero Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Step 1: Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B1580] border border-[#FFFFFF]/25 text-[#C9F600] text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C9F600]" />
              <span className="text-[#FFFFFF]">{currentBadge}</span>
            </div>
          </div>

          {/* Step 2: Main Headline with Staggered Word Reveal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.14] flex flex-wrap gap-x-[0.28em] gap-y-1 sm:gap-y-2 select-none">
            {heroMainWords.map((word, idx) => (
              <React.Fragment key={`main-w-${idx}`}>
                <span className="inline-block text-[#FFFFFF]">{word}</span>
                {" "}
              </React.Fragment>
            ))}
            {heroGradientWords.map((word, idx) => (
              <React.Fragment key={`grad-w-${idx}`}>
                <span className="inline-block text-[#C9F600]">
                  {word}
                </span>
                {idx < heroGradientWords.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </h1>

            {/* Step 3: Subtitle & Feature Bullet Points */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-base sm:text-lg text-[#FFFFFF]/90 leading-relaxed font-normal">
              {currentSubtitle}
            </p>

            <div className="space-y-2.5 pt-1">
              {currentBulletPoints.map((bp, bpIdx) => (
                <div key={`hero-bp-${bpIdx}`} className="flex items-center gap-2.5 text-sm text-[#FFFFFF] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#C9F600]/15 border border-[#C9F600]/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9F600]" />
                  </div>
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Left CTA Button & Social Proof */}
          <div className="space-y-6 pt-2 w-full max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <GetQuoteModal
                triggerText="Get a Free Quote"
                source={`Hero Left CTA ${country ? country.toUpperCase() : "Global"}`}
                triggerClassName="px-7 py-3.5 text-sm font-bold rounded-xl bg-[#C9F600] text-[#3B1580] hover:opacity-90 shadow-lg shadow-[#C9F600]/25 transition-all"
              />
              <a
                href="#case-studies"
                onClick={handleExploreCaseStudies}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/30 hover:border-[#C9F600] text-[#FFFFFF] hover:text-[#C9F600] text-sm font-bold transition-all shadow-lg group cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#C9F600] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="pt-5 border-t border-[#FFFFFF]/20 w-full">
              <p className="text-xs text-[#FFFFFF]/70 font-medium">
                {currentTrustText}
              </p>
            </div>
          </div>
        </div>
        <div id="enquiry-section" className="lg:col-span-5 flex justify-center lg:justify-end w-full scroll-mt-28">
          <div className="w-full max-w-md relative rounded-2xl p-[1px] overflow-hidden group">
            
            {/* Animated Conic Glowing Border Beam */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,#C9F600_0%,#3B1580_50%,#C9F600_100%)] opacity-35 group-hover:opacity-75 transition-opacity duration-500 animate-border-beam pointer-events-none" />

            {/* Inner Form Card */}
            <div className="w-full bg-[#260B5E]/95 backdrop-blur-xl border border-[#FFFFFF]/20 rounded-2xl p-6 sm:p-7 shadow-2xl relative z-10 overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#C9F600] bg-[#C9F600]/10 border border-[#C9F600]/30 px-2.5 py-0.5 rounded-full mb-2">
                  <Clock className="w-3 h-3 text-[#C9F600]" />
                  <span>Free Project Review</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#FFFFFF] tracking-tight">
                  Request a Free Project Consultation &amp; Audit
                </h3>
                <p className="text-xs text-[#FFFFFF]/80 mt-1.5 leading-relaxed font-normal">
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
                  <label htmlFor="hero-name" className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider block">
                    Full Name <span className="text-[#C9F600]">*</span>
                  </label>
                  <div className={`flex items-center gap-2 bg-[#3B1580] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${
                    errors.name ? "border-[#C9F600]" : "border-[#FFFFFF]/25"
                  }`}>
                    <User className="w-4 h-4 text-[#FFFFFF]/60 shrink-0 transition-colors group-focus-within:text-[#C9F600]" />
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-xs bg-transparent outline-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 font-medium"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-[#C9F600] font-medium">{errors.name}</span>}
                </div>

                {/* Field 2: Work Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-email" className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider block">
                    Work Email <span className="text-[#FFFFFF]/60 font-normal text-[9px] lowercase">(or Phone below)</span>
                  </label>
                  <div className={`flex items-center gap-2 bg-[#3B1580] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${
                    errors.email ? "border-[#C9F600]" : "border-[#FFFFFF]/25"
                  }`}>
                    <Mail className="w-4 h-4 text-[#FFFFFF]/60 shrink-0 transition-colors group-focus-within:text-[#C9F600]" />
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full text-xs bg-transparent outline-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 font-medium"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-[#C9F600] font-medium">{errors.email}</span>}
                </div>

                {/* Field 3: Phone / WhatsApp Number */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-mobile" className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider block">
                    Phone / WhatsApp Number <span className="text-[#FFFFFF]/60 font-normal text-[9px] lowercase">(optional)</span>
                  </label>
                  <div className="flex gap-2 relative">
                    {/* Country Selector Dropdown */}
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="w-[95px] text-xs py-2.5 px-2.5 bg-[#3B1580] border border-[#FFFFFF]/25 hover:border-[#C9F600] text-[#FFFFFF] rounded-xl flex items-center justify-between outline-none cursor-pointer font-semibold transition-all h-full"
                      >
                        <span className="flex items-center gap-1">
                          <span>{selectedCountry?.flag}</span>
                          <span>{selectedCountryCode}</span>
                        </span>
                        <ChevronDown className={`w-3 h-3 text-[#FFFFFF]/70 transition-transform ${isCountryOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isCountryOpen && (
                        <div className="absolute z-50 left-0 top-[108%] w-72 sm:w-80 max-h-64 overflow-y-auto bg-[#3B1580] border border-[#FFFFFF]/30 rounded-xl shadow-2xl py-1 text-[#FFFFFF]">
                          <div className="p-2 border-b border-[#FFFFFF]/20 bg-[#3B1580] sticky top-0 z-10">
                            <input
                              type="text"
                              placeholder="Search country or code..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full text-xs px-3 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-lg text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 outline-none focus:border-[#C9F600]"
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
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs hover:bg-[#FFFFFF]/10 transition-colors cursor-pointer ${
                                selectedCountryCode === c.code ? "bg-[#C9F600]/15 text-[#C9F600] font-bold" : "text-[#FFFFFF]"
                              }`}
                            >
                              <span className="flex items-center gap-2.5 min-w-0">
                                <span className="text-base select-none shrink-0">{c.flag}</span>
                                <span className="font-semibold text-[#FFFFFF] truncate max-w-[170px]">{c.name}</span>
                              </span>
                              <span className="text-[#C9F600] font-bold text-xs shrink-0">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={`flex items-center gap-2 bg-[#3B1580] border rounded-xl px-3 py-2.5 flex-1 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${
                      errors.mobile ? "border-[#C9F600]" : "border-[#FFFFFF]/25"
                    }`}>
                      <Phone className="w-4 h-4 text-[#FFFFFF]/60 shrink-0" />
                      <input
                        type="tel"
                        id="hero-mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Phone / WhatsApp"
                        className="w-full text-xs bg-transparent outline-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 font-medium"
                      />
                    </div>
                  </div>
                  {errors.mobile && <span className="text-[10px] text-[#C9F600] font-medium">{errors.mobile}</span>}
                </div>

                {/* Field 4: Project Scope / Website URL (Optional) */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-website" className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider flex items-center justify-between">
                    <span>Project Scope / Website URL</span>
                    <span className="text-[9px] text-[#FFFFFF]/60 font-normal">Optional</span>
                  </label>
                  <div className="flex items-center gap-2 bg-[#3B1580] border border-[#FFFFFF]/25 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 rounded-xl px-3 py-2.5 transition-all duration-300">
                    <Globe className="w-4 h-4 text-[#FFFFFF]/60 shrink-0" />
                    <input
                      type="text"
                      id="hero-website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="e.g. acme.com or Web Design / SEO"
                      className="w-full text-xs bg-transparent outline-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 font-medium"
                    />
                  </div>
                </div>

                {/* Submission Error Banner */}
                {submitError && (
                  <div className="p-3 rounded-xl bg-[#3B1580] border border-[#C9F600] text-[#C9F600] text-xs text-center font-medium">
                    {submitError}
                  </div>
                )}

                {/* Action Buttons Container */}
                <div className="flex flex-col gap-3 mt-2">
                  {/* Primary CTA Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#C9F600] text-[#3B1580] font-bold hover:opacity-90 text-sm shadow-xl shadow-[#C9F600]/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#3B1580]" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <span>Get a Free Website Audit</span>
                        <ArrowRight className="w-4 h-4 text-[#3B1580] group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20Joy%20Digital,%20I'd%20like%20to%20discuss%20a%20website%20development%20project%20and%20request%20a%20free%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-3 rounded-xl bg-[#C9F600] text-[#3B1580] hover:opacity-90 border border-[#C9F600] font-bold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                      aria-label="Chat on WhatsApp"
                    >
                      <i className="fa-brands fa-whatsapp text-sm text-[#3B1580]" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${contactEmail}?subject=Website%20Development%20%26%20Consultation%20Inquiry`}
                      className="flex-1 py-3 px-3 rounded-xl bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/30 text-[#FFFFFF] hover:border-[#C9F600] hover:text-[#C9F600] font-bold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                      aria-label="Email Us"
                    >
                      <Mail className="w-4 h-4 text-[#FFFFFF] group-hover:text-[#C9F600] transition-colors" />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>

                {/* Micro-trust footer */}
                <div className="pt-2 text-center flex flex-col gap-1.5">
                  <p className="text-[10px] font-medium text-[#FFFFFF]/70 flex items-center justify-center gap-1.5 flex-wrap">
                    <ShieldCheck className="w-3 h-3 text-[#C9F600] shrink-0" />
                    <span>No credit card required • Instant 15-min call • Zero commitment</span>
                  </p>
                  <p className="text-[9px] font-semibold text-[#FFFFFF]/60 flex items-center justify-center gap-1">
                    <i className="fa-solid fa-lock text-[#C9F600]" /> We respect your privacy. No spam ever.
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
              const target = document.getElementById("industry-specialization") || document.getElementById("trust-overview") || document.getElementById("case-studies");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
              }
            }}
            aria-label="Scroll down to explore website features"
            className="group flex items-center gap-2.5 text-xs font-bold text-[#FFFFFF] hover:text-[#C9F600] transition-all cursor-pointer bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/30 hover:border-[#C9F600] px-5 py-2.5 rounded-full shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="uppercase tracking-widest text-[11px] font-bold text-[#FFFFFF] group-hover:text-[#C9F600]">Scroll Down</span>
            <div className="w-6 h-6 rounded-full bg-[#C9F600]/15 group-hover:bg-[#C9F600] flex items-center justify-center transition-colors">
              <ChevronDown className="w-3.5 h-3.5 text-[#C9F600] group-hover:text-[#3B1580] animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

