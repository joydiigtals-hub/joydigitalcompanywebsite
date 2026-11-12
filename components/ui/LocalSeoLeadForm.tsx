"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getUtmParameters } from "@/lib/utmTracker";

const LOCATION_COUNT_OPTIONS = [
  { value: "1_location", label: "1 Location (Single Store / Clinic / Office)" },
  { value: "2_5_locations", label: "2 - 5 Locations (Regional Branch Network)" },
  { value: "6_20_locations", label: "6 - 20 Locations (Multi-Area Expansion)" },
  { value: "20_plus_franchise", label: "20+ Locations (Enterprise / Franchise)" },
];

const INDUSTRY_OPTIONS = [
  { value: "schools_education", label: "Schools & Educational Institutions" },
  { value: "pest_control_services", label: "Pest Control & Home Services" },
  { value: "construction_contractors", label: "Construction & Building Contractors" },
  { value: "healthcare_clinics", label: "Healthcare, Hospitals & Clinics" },
  { value: "real_estate_property", label: "Real Estate & Property Developers" },
  { value: "hotels_hospitality", label: "Hotels, Resorts & Hospitality" },
  { value: "professional_services", label: "Legal, Consulting & Financial Services" },
  { value: "other_local_business", label: "Other Local Business / Retail" },
];

const GOAL_OPTIONS = [
  { value: "rank_maps_3pack", label: "Rank #1 in Google Maps 3-Pack" },
  { value: "increase_phone_calls", label: "Get More Direct Phone Calls & Customer Leads" },
  { value: "outrank_local_competitor", label: "Outrank Specific Nearby Competitors" },
  { value: "fix_nap_and_reviews", label: "Fix Inconsistent NAP Citations & Build Reviews" },
  { value: "multi_location_scaling", label: "Scale Multi-Location / Franchise Visibility" },
];

export default function LocalSeoLeadForm() {
  const router = useRouter();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    businessName: "",
    industry: "",
    locationCount: "1_location",
    primaryGoal: "rank_maps_3pack",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    const mobileVal = formData.mobile.trim();
    if (!mobileVal) {
      tempErrors.mobile = "Contact phone or WhatsApp number is required.";
    } else {
      const numbersOnly = mobileVal.replace(/\D/g, "");
      if (numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number.";
      }
    }

    if (!formData.businessName.trim()) {
      tempErrors.businessName = "Business name or website/GBP link is required.";
    }

    if (!formData.industry) {
      tempErrors.industry = "Please select your business category.";
    }

    if (!formData.locationCount) {
      tempErrors.locationCount = "Please select the number of locations.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const utm = getUtmParameters();
      const payload = {
        Name: formData.name.trim(),
        CompanyName: formData.businessName.trim(),
        Website: formData.businessName.includes(".") ? formData.businessName.trim() : "N/A",
        Email: contactEmail,
        Mobile: formData.mobile.trim(),
        Service: `Local SEO & Google Maps Optimization (${formData.locationCount})`,
        Budget: "Tailored Retainer",
        Timeline: "Immediate",
        Message: `Industry: ${formData.industry} | Locations: ${formData.locationCount} | Primary Goal: ${formData.primaryGoal} | Business/GBP Name: ${formData.businessName.trim()}`,
        Source: "Local SEO Services Landing Page",
        TargetRegion: "LOCAL_AND_GLOBAL",
        utmParams: utm || undefined,
        _subject: `🔥 Qualified Local SEO Lead: ${formData.businessName.trim()} [${formData.locationCount}] - Joy Digital`,
        _captcha: "false",
        _template: "table",
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

      if (typeof window !== "undefined") {
        const tracker = (window as any).trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("contact_form_submission", {
            form_source: "Local SEO Services Landing Page",
            page_url: window.location.href,
            location_count: formData.locationCount,
            industry: formData.industry,
          });
        } else {
          const gtag = (window as any).gtag;
          if (typeof gtag === "function") {
            gtag("event", "contact_form_submission", {
              form_source: "Local SEO Services Landing Page",
              page_url: window.location.href,
              location_count: formData.locationCount,
            });
          }
        }
      }

      setFormData({
        name: "",
        mobile: "",
        businessName: "",
        industry: "",
        locationCount: "1_location",
        primaryGoal: "rank_maps_3pack",
      });
      setErrors({});
      setIsSuccess(true);
      
      const queryParams = new URLSearchParams({
        name: formData.name.trim(),
        service: "Local SEO Services",
        mobile: formData.mobile.trim()
      }).toString();

      router.push(`/thank-you?${queryParams}`);
    } catch (err) {
      console.error(err);
      alert(`Enquiry delivery failed. Please email us at ${contactEmail} directly.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#260B5E] border border-[#FFFFFF]/25 p-5 sm:p-7 rounded-2xl shadow-2xl w-full max-w-md relative transition-all duration-300 text-[#FFFFFF]">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C9F600] rounded-t-2xl" />

        <div className="mb-5 mt-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9F600]/15 text-[#C9F600] border border-[#C9F600]/30 text-[9px] font-black uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9F600] animate-pulse" />
            100% Free • No Obligation
          </div>
          <h3 className="text-xl font-extrabold text-[#FFFFFF] mb-1.5 leading-snug">
            Get Your Free Local SEO &amp; Google Maps Audit
          </h3>
          <p className="text-xs text-[#FFFFFF]/80 leading-relaxed">
            Discover exactly why competitors outrank you on Google Maps and how to claim the top-3 Local Pack positions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Full Name <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.name ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-user" /></span>
              <input
                type="text"
                placeholder="e.g. Rajesh Kumar"
                className="w-full text-xs sm:text-sm bg-transparent outline-none border-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 font-semibold"
                value={formData.name}
                onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: ""}); }}
              />
            </div>
            {errors.name && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.name}</span>}
          </div>

          {/* Contact Phone / WhatsApp */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Phone / WhatsApp Number <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.mobile ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#C9F600]"><i className="fa-brands fa-whatsapp text-sm" /></span>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full text-xs sm:text-sm bg-transparent outline-none border-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 font-semibold"
                value={formData.mobile}
                onChange={(e) => { setFormData({...formData, mobile: e.target.value}); setErrors({...errors, mobile: ""}); }}
              />
            </div>
            {errors.mobile && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.mobile}</span>}
          </div>

          {/* Business Name or Website / GBP */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Business Name or Website / GBP Listing <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.businessName ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-store" /></span>
              <input
                type="text"
                placeholder="e.g. Apex Academy or apexacademy.in"
                className="w-full text-xs sm:text-sm bg-transparent outline-none border-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 font-semibold"
                value={formData.businessName}
                onChange={(e) => { setFormData({...formData, businessName: e.target.value}); setErrors({...errors, businessName: ""}); }}
              />
            </div>
            {errors.businessName && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.businessName}</span>}
          </div>

          {/* Industry / Category */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Business Category <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.industry ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-briefcase" /></span>
              <select
                className="w-full text-xs sm:text-sm bg-transparent outline-none border-none text-[#FFFFFF] font-semibold cursor-pointer [&>option]:bg-[#260B5E] [&>option]:text-[#FFFFFF]"
                value={formData.industry}
                onChange={(e) => { setFormData({...formData, industry: e.target.value}); setErrors({...errors, industry: ""}); }}
              >
                <option value="" disabled className="bg-[#260B5E] text-[#FFFFFF]/60">Select Your Industry</option>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#260B5E] text-[#FFFFFF]">{opt.label}</option>
                ))}
              </select>
            </div>
            {errors.industry && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.industry}</span>}
          </div>

          {/* Number of Locations & Primary Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
                Locations <span className="text-[#C9F600]">*</span>
              </label>
              <div className="flex items-center gap-2 bg-[#3B1580] rounded-xl border border-[#FFFFFF]/25 px-3 py-2.5">
                <select
                  className="w-full text-xs bg-transparent outline-none border-none text-[#FFFFFF] font-semibold cursor-pointer [&>option]:bg-[#260B5E] [&>option]:text-[#FFFFFF]"
                  value={formData.locationCount}
                  onChange={(e) => setFormData({...formData, locationCount: e.target.value})}
                >
                  {LOCATION_COUNT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#260B5E] text-[#FFFFFF]">{opt.label.split(" (")[0]}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
                Primary Goal
              </label>
              <div className="flex items-center gap-2 bg-[#3B1580] rounded-xl border border-[#FFFFFF]/25 px-3 py-2.5">
                <select
                  className="w-full text-xs bg-transparent outline-none border-none text-[#FFFFFF] font-semibold cursor-pointer [&>option]:bg-[#260B5E] [&>option]:text-[#FFFFFF]"
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({...formData, primaryGoal: e.target.value})}
                >
                  {GOAL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#260B5E] text-[#FFFFFF]">{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#C9F600] hover:opacity-90 text-[#3B1580] font-black text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-[#C9F600]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
               <>
                 <i className="fa-solid fa-spinner animate-spin" /> Preparing Free Audit...
               </>
            ) : (
               <>
                 Get Free Local SEO Audit <i className="fa-solid fa-arrow-right text-xs" />
               </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-4 text-[10px] text-[#FFFFFF]/60 font-semibold mt-1">
            <span className="flex items-center gap-1"><i className="fa-solid fa-shield-halved text-[#C9F600]" /> 100% Privacy</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-clock text-[#C9F600]" /> Report within 4 hrs</span>
          </div>
        </form>
      </div>

      {isSuccess && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-[#3B1580] p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-[#FFFFFF]/25 flex flex-col items-center text-[#FFFFFF]">
            <div className="text-[#C9F600] text-6xl mb-4 leading-none animate-bounce">
              <i className="fa-solid fa-circle-check" />
            </div>
            <h4 className="text-xl font-extrabold text-[#FFFFFF] mb-2">Audit Request Submitted!</h4>
            <p className="text-sm text-[#FFFFFF]/80 mb-6 leading-relaxed">
              Thank you for submitting your details. Our Local SEO specialists are analyzing your Google Maps visibility and will deliver your customized audit roadmap shortly.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-[#C9F600] hover:opacity-90 text-[#3B1580] font-bold px-8 py-2.5 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
