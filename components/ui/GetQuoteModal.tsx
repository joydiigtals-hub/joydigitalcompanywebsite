"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Layers,
  FileText,
  Loader2,
  ChevronDown,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import { getUtmParameters } from "@/lib/utmTracker";
import {
  ALL_COUNTRY_CODES,
  POPULAR_COUNTRY_CODES,
  getFilteredCountries,
  type CountryCode,
} from "@/lib/countryCodes";

// Service Dropdown Options matching requirements
export const QUOTE_SERVICES = [
  "Custom Next.js Development",
  "Travel & Safari Portal",
  "SEO & AI Search (GEO)",
  "Web Design & Landing Page",
  "Other",
] as const;

export type QuoteServiceType = (typeof QUOTE_SERVICES)[number];

export interface GetQuoteModalProps {
  /** Controlled open state (optional) */
  isOpen?: boolean;
  /** Close callback for controlled usage */
  onClose?: () => void;
  /** Whether to show the built-in trigger button (defaults to true if isOpen is omitted) */
  showTrigger?: boolean;
  /** Label for the trigger button */
  triggerText?: string;
  /** Extra Tailwind classes for trigger button */
  triggerClassName?: string;
  /** If true, triggerClassName completely replaces the default button classes */
  replaceClassName?: boolean;
  /** Whether to hide default sparkles and arrow icons in trigger */
  hideIcons?: boolean;
  /** Custom trigger children */
  children?: React.ReactNode;
  /** Source name for tracking and attribution */
  source?: string;
  /** Pre-selected service option */
  defaultService?: QuoteServiceType;
  /** Pre-filled project notes or tier description */
  initialNotes?: string;
  /** Optional specific package / tier name */
  packageName?: string;
}

export interface QuoteFormData {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  service: QuoteServiceType;
  notes: string;
  _honey: string; // Anti-bot honeypot field
}

export default function GetQuoteModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  showTrigger,
  triggerText = "Get Quote",
  triggerClassName = "",
  replaceClassName = false,
  hideIcons = false,
  children,
  source = "Get Quote Modal",
  defaultService = "Custom Next.js Development",
  initialNotes = "",
  packageName = "",
}: GetQuoteModalProps) {
  // Mount state for safe client-side Portal rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Support both uncontrolled (internal trigger) and controlled modes
  const isControlled = controlledIsOpen !== undefined;
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isModalOpen = isControlled ? controlledIsOpen : internalIsOpen;

  // Form State
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: defaultService,
    notes: initialNotes,
    _honey: "",
  });

  // Keep notes & service synced when modal opens or props change
  useEffect(() => {
    if (isModalOpen) {
      setFormData((prev) => ({
        ...prev,
        service: defaultService || prev.service,
        notes: initialNotes !== undefined && initialNotes !== "" ? initialNotes : prev.notes,
      }));
    }
  }, [isModalOpen, initialNotes, defaultService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>("");

  // Country Code Dropdown State
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Modal Dialog Reference for Focus Management
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  // Primary WhatsApp number from environment
  const targetWhatsAppNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919080026133";

  // Handle open/close
  const handleOpenModal = () => {
    setIsSuccess(false);
    setErrors({});
    if (!isControlled) {
      setInternalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    // Clean up country dropdown on close
    setIsCountryDropdownOpen(false);
    setCountrySearch("");
  };

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCountryDropdownOpen) {
          setIsCountryDropdownOpen(false);
        } else {
          handleCloseModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isCountryDropdownOpen]);

  // Click outside listener for country dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(e.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCountryDropdownOpen]);

  // Filter country codes list
  const filteredCountries = getFilteredCountries(countrySearch);
  const displayCountries = countrySearch.trim()
    ? filteredCountries
    : [
        ...POPULAR_COUNTRY_CODES,
        ...ALL_COUNTRY_CODES.filter(
          (c) => !POPULAR_COUNTRY_CODES.some((p) => p.name === c.name)
        ),
      ];

  const currentCountry: CountryCode =
    ALL_COUNTRY_CODES.find((c) => c.code === formData.countryCode) ||
    POPULAR_COUNTRY_CODES[0];

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required.";
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      newErrors.phone = "Please enter a valid phone number (6-15 digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const utm = getUtmParameters();
      const fullMobile = `${formData.countryCode} ${formData.phone.trim()}`;

      // 1. Backend storage via /api/enquiry (saves to DB & triggers email/alerts)
      const payload = {
        Name: formData.fullName.trim(),
        Email: formData.email.trim(),
        Mobile: fullMobile,
        Service: formData.service,
        Message:
          formData.notes.trim() ||
          `Quote requested for service: ${formData.service}`,
        Source: source,
        TargetRegion: "GLOBAL",
        utmParams: utm || undefined,
        _honey: formData._honey || undefined,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote enquiry. Please try again.");
      }

      // 2. Track Analytics Event if configured
      if (typeof window !== "undefined") {
        const tracker = (window as unknown as { trackJoyDigitalEvent?: (name: string, data: object) => void })
          .trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("quote_modal_submitted", {
            service: formData.service,
            source,
            countryCode: formData.countryCode,
          });
        }
      }

      // 3. Pre-format WhatsApp Message (Approach A)
      const waLines = [
        `*New Quote Request - JoyDigital*`,
        `👤 *Name:* ${formData.fullName.trim()}`,
        `📧 *Email:* ${formData.email.trim()}`,
        `📱 *Contact:* ${fullMobile}`,
        `🛠️ *Service:* ${formData.service}`,
      ];

      if (formData.notes.trim()) {
        waLines.push(`📝 *Project Notes:* ${formData.notes.trim()}`);
      }

      const generatedWaLink = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(
        waLines.join("\n")
      )}`;

      setWhatsAppUrl(generatedWaLink);
      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Quote submission error:", err);
      setErrors({
        form:
          err instanceof Error
            ? err.message
            : "An unexpected error occurred. Please contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const shouldRenderTrigger =
    showTrigger ?? (controlledIsOpen === undefined);

  const defaultTriggerClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#8B5CF6] hover:to-[#7C3AED] shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:ring-offset-2";

  const triggerClasses = replaceClassName
    ? triggerClassName
    : `${defaultTriggerClasses} ${triggerClassName}`;

  const modalDialogMarkup = (
    <AnimatePresence>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          {/* Dark Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer -z-10"
            aria-hidden="true"
          />

          {/* Modal Container Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-[#110E20] border border-[#2B2347] rounded-2xl shadow-2xl text-white overflow-hidden z-20 my-auto"
          >
            {/* Close Button (X) */}
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close quote modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1D1833] hover:bg-[#2B244D] text-slate-300 hover:text-white flex items-center justify-center border border-[#352B5C] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7C3AED] z-20"
            >
              <X className="w-4 h-4" />
            </button>

              {/* Success View */}
              {isSuccess ? (
                <div className="p-6 sm:p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3
                    id={titleId}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    Thank you! We will get back to you shortly.
                  </h3>
                  <p
                    id={descId}
                    className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed"
                  >
                    Your project details have been successfully received. Our
                    solutions team will review your requirements and provide a
                    tailored quote within a few hours.
                  </p>

                  {/* Immediate WhatsApp Action (Approach A) */}
                  <div className="w-full bg-[#16122B] border border-[#2B2347] rounded-xl p-4 mb-6 text-left">
                    <p className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Want an Instant Response?
                    </p>
                    <p className="text-xs text-slate-300 mb-3">
                      Skip the email queue and connect directly with our
                      technical leads on WhatsApp with your pre-filled inquiry.
                    </p>
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-white bg-[#10b981] hover:bg-[#059669] shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer text-sm"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Continue on WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors underline cursor-pointer"
                  >
                    Done & Close Window
                  </button>
                </div>
              ) : (
                /* Form View */
                <div className="p-5 sm:p-7">
                  {/* Header Title */}
                  <div className="mb-5 pr-8">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#A78BFA] text-[11px] font-semibold tracking-wide uppercase mb-2">
                      <Sparkles className="w-3 h-3 text-[#A78BFA]" />
                      Fast Turnaround
                    </span>
                    <h2
                      id={titleId}
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    >
                      {packageName ? `Get Quote: ${packageName}` : "Request a Project Quote"}
                    </h2>
                    <p
                      id={descId}
                      className="text-xs sm:text-sm text-slate-300 mt-1"
                    >
                      Fill in your project requirements below. We will analyze
                      your scope and provide an accurate cost estimate.
                    </p>
                  </div>

                  {/* Form Submission Error Alert */}
                  {errors.form && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                      {errors.form}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Bot Honeypot field (hidden from humans) */}
                    <input
                      type="text"
                      name="_honey"
                      value={formData._honey}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          _honey: e.target.value,
                        }))
                      }
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {/* 1. Full Name */}
                    <div>
                      <label
                        htmlFor="quote-fullName"
                        className="block text-xs font-medium text-slate-200 mb-1.5"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="quote-fullName"
                          type="text"
                          required
                          placeholder="e.g. Alex Johnson"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }));
                            if (errors.fullName) {
                              setErrors((prev) => ({ ...prev, fullName: "" }));
                            }
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 bg-[#17132B] border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-colors ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#2E264E] hover:border-[#423770]"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* 2. Contact Number / WhatsApp with Country Code */}
                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs font-medium text-slate-200 mb-1.5"
                      >
                        WhatsApp / Phone Number{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="relative flex rounded-xl border border-[#2E264E] focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-[#7C3AED]/40 bg-[#17132B] transition-all">
                        {/* Country Code Trigger */}
                        <div
                          ref={countryDropdownRef}
                          className="relative flex items-center"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setIsCountryDropdownOpen((prev) => !prev)
                            }
                            aria-label="Select country code"
                            aria-expanded={isCountryDropdownOpen}
                            className="flex items-center gap-1 pl-3 pr-2 py-2.5 text-xs text-slate-200 hover:text-white bg-[#1D1836] border-r border-[#2E264E] rounded-l-xl transition-colors cursor-pointer"
                          >
                            <span className="text-base leading-none">
                              {currentCountry.flag}
                            </span>
                            <span className="font-medium">
                              {currentCountry.code}
                            </span>
                            <ChevronDown className="w-3 h-3 text-slate-400" />
                          </button>

                          {/* Country Code Popup List */}
                          {isCountryDropdownOpen && (
                            <div className="absolute left-0 top-full mt-1.5 w-64 max-h-64 bg-[#16122C] border border-[#352B5C] rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col">
                              {/* Search Filter */}
                              <div className="p-2 border-b border-[#2E264E] bg-[#110E23]">
                                <div className="relative">
                                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400 pointer-events-none" />
                                  <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={countrySearch}
                                    onChange={(e) =>
                                      setCountrySearch(e.target.value)
                                    }
                                    className="w-full pl-8 pr-2 py-1.5 bg-[#1B1636] border border-[#2B234C] rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#7C3AED]"
                                    autoFocus
                                  />
                                </div>
                              </div>

                              {/* Countries Scrollable List */}
                              <div className="overflow-y-auto divide-y divide-[#231B3D]">
                                {displayCountries.length > 0 ? (
                                  displayCountries.map((c) => (
                                    <button
                                      key={`${c.code}-${c.iso || c.name}`}
                                      type="button"
                                      onClick={() => {
                                        setFormData((prev) => ({
                                          ...prev,
                                          countryCode: c.code,
                                        }));
                                        setIsCountryDropdownOpen(false);
                                        setCountrySearch("");
                                      }}
                                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left hover:bg-[#231B40] transition-colors cursor-pointer ${
                                        c.code === formData.countryCode
                                          ? "bg-[#7C3AED]/20 text-[#A78BFA] font-medium"
                                          : "text-slate-200"
                                      }`}
                                    >
                                      <span className="flex items-center gap-2 truncate">
                                        <span className="text-sm">
                                          {c.flag}
                                        </span>
                                        <span className="truncate">
                                          {c.name}
                                        </span>
                                      </span>
                                      <span className="text-slate-400 ml-2 font-mono">
                                        {c.code}
                                      </span>
                                    </button>
                                  ))
                                ) : (
                                  <div className="p-3 text-center text-xs text-slate-400">
                                    No country found
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phone Number Input */}
                        <div className="relative flex-1">
                          <input
                            id="quote-phone"
                            type="tel"
                            required
                            placeholder="98765 43210"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }));
                              if (errors.phone) {
                                setErrors((prev) => ({ ...prev, phone: "" }));
                              }
                            }}
                            className="w-full px-3 py-2.5 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* 3. Email Address */}
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs font-medium text-slate-200 mb-1.5"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="quote-email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }));
                            if (errors.email) {
                              setErrors((prev) => ({ ...prev, email: "" }));
                            }
                          }}
                          className={`w-full pl-9 pr-3 py-2.5 bg-[#17132B] border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-colors ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#2E264E] hover:border-[#423770]"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* 4. Service Needed */}
                    <div>
                      <label
                        htmlFor="quote-service"
                        className="block text-xs font-medium text-slate-200 mb-1.5"
                      >
                        Service Needed <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          id="quote-service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              service: e.target.value as QuoteServiceType,
                            }))
                          }
                          className="w-full pl-9 pr-8 py-2.5 bg-[#17132B] border border-[#2E264E] hover:border-[#423770] rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] appearance-none cursor-pointer transition-colors"
                        >
                          {QUOTE_SERVICES.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="bg-[#17132B] text-white py-1"
                            >
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* 5. Project Notes / Requirements */}
                    <div>
                      <label
                        htmlFor="quote-notes"
                        className="block text-xs font-medium text-slate-200 mb-1.5 flex justify-between"
                      >
                        <span>Project Notes / Scope</span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          Optional
                        </span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="quote-notes"
                          rows={3}
                          placeholder="Briefly describe your goals, timeline, reference websites, or special requirements..."
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              notes: e.target.value,
                            }))
                          }
                          className="w-full p-3 bg-[#17132B] border border-[#2E264E] hover:border-[#423770] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#8B5CF6] hover:to-[#7C3AED] shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/60 focus:ring-offset-2 focus:ring-offset-[#110E20]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Submitting Quote Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy & Guarantee note */}
                    <p className="text-[11px] text-center text-slate-400 pt-1">
                      🔒 100% Privacy Guaranteed. No spam. Direct response
                      from engineering leads.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );

    return (
      <>
        {/* 1. Prominent Trigger Button */}
        {shouldRenderTrigger && (
          <button
            type="button"
            onClick={handleOpenModal}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            className={triggerClasses}
          >
            {children ? (
              children
            ) : hideIcons ? (
              <span>{triggerText}</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#C4B5FD] animate-pulse" />
                <span>{triggerText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        )}

        {/* 2. Modal Overlay & Dialog via Portal directly to body */}
        {mounted && typeof document !== "undefined"
          ? createPortal(modalDialogMarkup, document.body)
          : null}
      </>
    );
  }
