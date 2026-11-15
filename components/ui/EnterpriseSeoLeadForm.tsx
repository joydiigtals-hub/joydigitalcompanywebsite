"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getUtmParameters } from "@/lib/utmTracker";

const BUSINESS_TYPE_OPTIONS = [
  { value: "b2b_industrial", label: "B2B / Industrial" },
  { value: "saas_tech", label: "SaaS / Tech" },
  { value: "global_ecommerce", label: "Global E-commerce" },
  { value: "professional_services", label: "Professional Services" },
];

export default function EnterpriseSeoLeadForm() {
  const router = useRouter();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    businessType: "",
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
      tempErrors.mobile = "Contact number is required.";
    } else {
      const numbersOnly = mobileVal.replace(/\D/g, "");
      if (numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number.";
      }
    }

    if (!formData.businessType) {
      tempErrors.businessType = "Please select your business type.";
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
        CompanyName: "N/A",
        Website: "N/A",
        Email: contactEmail,
        Mobile: formData.mobile.trim(),
        Service: `Enterprise B2B SEO & GEO (${formData.businessType})`,
        Budget: "N/A",
        Timeline: "N/A",
        Message: `Business Type: ${formData.businessType}`,
        Source: "Enterprise SEO Landing Page",
        TargetRegion: "GLOBAL",
        utmParams: utm || undefined,
        _subject: `🔥 Enterprise SEO Lead [${formData.businessType}] - Joy Digital`,
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
            form_source: "Enterprise SEO Landing Page",
            page_url: window.location.href,
            business_type: formData.businessType,
          });
        } else {
          const gtag = (window as any).gtag;
          if (typeof gtag === "function") {
            gtag("event", "contact_form_submission", {
              form_source: "Enterprise SEO Landing Page",
              page_url: window.location.href,
              business_type: formData.businessType,
            });
          }
        }
      }

      setFormData({
        name: "",
        mobile: "",
        businessType: "",
      });
      setErrors({});
      setIsSuccess(true);
      
      const queryParams = new URLSearchParams({
        name: formData.name.trim(),
        service: "Enterprise B2B SEO & GEO",
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
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />

      <div className="bg-[#260B5E] border border-[#FFFFFF]/25 p-5 sm:p-6 rounded-2xl shadow-2xl w-full max-w-md relative transition-all duration-300 text-[#FFFFFF]">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#C9F600] rounded-t-2xl" />

        <div className="mb-6 mt-1 text-center lg:text-left">
          <h3 className="text-xl font-extrabold text-[#FFFFFF] mb-1.5 leading-snug">
            Request a Free Global B2B Technical SEO & AI Search Audit
          </h3>
          <p className="text-xs text-[#FFFFFF]/80 leading-relaxed">
            Enter your details below to discuss revenue-driven organic pipeline growth and GEO mapping.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Full Name <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-3 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.name ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-user" /></span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full text-sm bg-transparent outline-none border-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 font-semibold"
                value={formData.name}
                onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: ""}); }}
              />
            </div>
            {errors.name && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Contact Number <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-3 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.mobile ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-phone" /></span>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full text-sm bg-transparent outline-none border-none text-[#FFFFFF] placeholder:text-[#FFFFFF]/50 font-semibold"
                value={formData.mobile}
                onChange={(e) => { setFormData({...formData, mobile: e.target.value}); setErrors({...errors, mobile: ""}); }}
              />
            </div>
            {errors.mobile && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.mobile}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-extrabold text-[#FFFFFF] uppercase tracking-wider">
              Business Type <span className="text-[#C9F600]">*</span>
            </label>
            <div className={`flex items-center gap-2 bg-[#3B1580] rounded-xl border px-3.5 py-3 transition-all duration-300 focus-within:border-[#C9F600] focus-within:ring-2 focus-within:ring-[#C9F600]/25 ${errors.businessType ? "border-[#ef4444]" : "border-[#FFFFFF]/25"}`}>
              <span className="text-xs text-[#FFFFFF]/60"><i className="fa-solid fa-building" /></span>
              <select
                className="w-full text-sm bg-transparent outline-none border-none text-[#FFFFFF] font-semibold cursor-pointer [&>option]:bg-[#3B1580] [&>option]:text-[#FFFFFF]"
                value={formData.businessType}
                onChange={(e) => { setFormData({...formData, businessType: e.target.value}); setErrors({...errors, businessType: ""}); }}
              >
                <option value="" disabled className="bg-[#3B1580] text-[#FFFFFF]/60">Select Business Type</option>
                {BUSINESS_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#3B1580] text-[#FFFFFF]">{opt.label}</option>
                ))}
              </select>
            </div>
            {errors.businessType && <span className="text-[9px] font-semibold text-[#ef4444] mt-0.5">{errors.businessType}</span>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#C9F600] hover:opacity-90 text-[#3B1580] font-extrabold text-sm py-4 rounded-xl shadow-lg shadow-[#C9F600]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
               <>
                 <i className="fa-solid fa-spinner animate-spin" /> Processing...
               </>
            ) : (
               <>
                 Request Enterprise Audit <i className="fa-solid fa-arrow-right text-xs" />
               </>
            )}
          </button>
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
              Thank you for requesting an Enterprise SEO Audit. Our technical growth strategists will review your domain and reach out shortly.
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
