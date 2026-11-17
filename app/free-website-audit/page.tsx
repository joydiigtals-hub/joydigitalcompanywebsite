import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import AuditForm from "@/components/ui/AuditForm";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Free Website & SEO Audit",
  description: "Claim your free website audit report from Joy Digital. Discover page speed bottlenecks, mobile layout errors, and SEO ranking opportunities.",
  keywords: [
      "Free Website Audit",
      "Website Speed Test",
      "Technical SEO Audit Tool",
      "Core Web Vitals Audit",
      "Free SEO Health Check"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/free-website-audit",
  },
};

const AUDIT_CHECKLIST = [
  {
    icon: "fa-solid fa-gauge-high",
    title: "Page Speed & Core Web Vitals",
    description: "We check Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) on slow mobile networks to ensure your site loads under 1.5 seconds.",
  },
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "On-Page & Technical SEO Scan",
    description: "We audit heading hierarchies, index tags, schema structures, meta tags, and check for crawl blocks in robots.txt and XML sitemaps.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile UX & Accessibility Check",
    description: "Over 65% of searches happen on smartphones. We test element sizes, navigability, and responsive layouts across common devices.",
  },
  {
    icon: "fa-solid fa-funnel-dollar",
    title: "Conversion Rate (CRO) Analysis",
    description: "We inspect your call-to-actions, form fields, phone/WhatsApp click integrations, and visitor journey flow to help boost enquiries.",
  },
];

export default function FreeWebsiteAuditPage() {
  const canonicalUrl = "https://www.joydigital.in/free-website-audit";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Free Website & SEO Audit | Joy Digital",
    description: "Claim your free website audit report from Joy Digital. Discover page speed bottlenecks, mobile layout errors, and SEO ranking opportunities.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Free Website Audit", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <Header />
      <main className="pt-20 lg:pt-24 bg-[#3B1580] text-[#FFFFFF]">
        
        {/* Split Hero / Form Section */}
        <section className="pt-4 sm:pt-6 lg:pt-8 pb-12 lg:pb-16 bg-[#3B1580] relative overflow-hidden text-[#FFFFFF]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#C9F600]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C9F600]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 bg-[#C9F600]/15 border border-[#C9F600]/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#C9F600] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#C9F600] uppercase tracking-wider">
                  No Cost • No Obligations • 100% Free
                </span>
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight mb-6 leading-tight">
                Get Your Free <span className="text-[#C9F600]">Website Growth Report</span>
              </h1>
              
              <p className="text-sm md:text-base text-[#FFFFFF]/80 mb-8 max-w-xl leading-relaxed">
                Find out what&apos;s stopping your website from getting more traffic, enquiries, and customers. Enter your details, and our technical developers and SEO strategists will compile a custom diagnostic report.
              </p>

              {/* Instant AI Scan Callout Card */}
              <div className="w-full max-w-xl mb-8 p-4 sm:p-5 rounded-2xl bg-[#260B5E] text-[#FFFFFF] border border-[#FFFFFF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F600]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3.5 relative z-10 text-left">
                  <div className="w-11 h-11 rounded-xl bg-[#3B1580] border border-[#FFFFFF]/20 flex items-center justify-center text-[#C9F600] text-lg shrink-0">
                    <i className="fa-solid fa-bolt" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C9F600]/20 text-[#C9F600] border border-[#C9F600]/30">
                        ⚡ Instant AI Scanner
                      </span>
                      <span className="text-xs font-black text-[#FFFFFF]">15-Sec Live Diagnostic</span>
                    </div>
                    <p className="text-[11.5px] text-[#FFFFFF]/80 font-medium">
                      Want instant results? Test server latency, SEO &amp; mobile score live right now.
                    </p>
                  </div>
                </div>
                <Link
                  href="/seo-audit-tool"
                  className="relative z-10 px-4 py-2.5 bg-[#C9F600] hover:bg-[#A9D100] text-[#3B1580] rounded-xl font-bold text-xs shrink-0 text-center shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Scan Live</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </Link>
              </div>

              {/* Checklist list */}
              <div className="flex flex-col gap-6 w-full max-w-lg mt-2">
                {AUDIT_CHECKLIST.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#260B5E] border border-[#FFFFFF]/20 flex items-center justify-center text-[#C9F600] text-sm flex-shrink-0">
                      <i className={item.icon} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xs font-extrabold text-[#FFFFFF] uppercase tracking-wider">{item.title}</h3>
                      <p className="text-[11px] sm:text-xs text-[#FFFFFF]/80 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <AuditForm />
            </div>

          </div>
        </section>

        {/* Informative / Trust Section */}
        <section className="py-20 bg-[#260B5E] border-t border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF] text-center mb-8">
              Why We Provide This Free Website Review
            </h2>
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#FFFFFF]/85 space-y-6 leading-relaxed font-semibold">
              <p>
                Many businesses invest heavily in online ads or digital campaigns without understanding why their site fails to rank or convert visitors. They waste advertising budget pointing traffic to slow-loading pages, bloated templates, or broken forms.
              </p>
              <p>
                We believe in proving value first. By highlighting the exact speed, code, and search obstacles holding your business back, we demonstrate our engineering and SEO capabilities. If you like our recommendations, you can hire us to implement the fixes. If not, the report is yours to keep and use with your team.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
