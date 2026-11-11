import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Client Case Studies & Results",
  description: "Explore real success stories from Joy Digital. Read how our web design, SEO, and local maps campaigns drove appointments, sales, and ranking growth.",
  alternates: {
    canonical: "https://www.joydigital.in/case-studies",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/case-studies",
    siteName: "Joy Digital Agency",
    title: "Client Case Studies & Results | Joy Digital",
    description: "Explore real success stories from Joy Digital. Read how our web design, SEO, and local maps campaigns drove appointments, sales, and ranking growth.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Joy Digital Case Studies" }],
  },
};

const CASE_STUDIES = [
  {
    slug: "you-and-me-voyage",
    category: "Custom Next.js & Travel Portal",
    title: "You & Me Voyage: Custom Next.js Platform & WhatsApp Lead Routing",
    metricValue: "Live",
    metricLabel: "Bespoke Platform",
    description: "Custom serverless Next.js website built for an Adyar, Chennai travel company with a 3-step inquiry planner and instant WhatsApp lead routing.",
  },
  {
    slug: "chennai-clinic-leads",
    category: "Local SEO & GBP Optimization",
    title: "How a Chennai Dental Clinic Increased Patient Appointments by 240%",
    metricValue: "240%",
    metricLabel: "Appointment Growth",
    description: "By optimizing their Google Business Profile, targeting local keywords, and cleaning up duplicate citations, we ranked the clinic in the Maps 3-Pack within 30 days.",
  },
  {
    slug: "ecommerce-sales-increase",
    category: "Web Development & CRO",
    title: "Rebuilding an E-commerce Store for 40% Higher Sales Conversions",
    metricValue: "40%",
    metricLabel: "Sales Conversion Growth",
    description: "Rebuilding a bloated WordPress shopping site using Next.js and Tailwind CSS reduced load speeds under 1.5s, resulting in a significant decrease in cart abandonment.",
  },
  {
    slug: "saas-landing-optimization",
    category: "Paid Ads & Landing Design",
    title: "180% More Lead Signups with SaaS Landing Page Rebuild",
    metricValue: "180%",
    metricLabel: "Lead Conversion Growth",
    description: "By building a dedicated high-converting landing page paired with targeted Meta Lead Generation ads, we lowered cost-per-lead for a startup client.",
  },
];

export default function CaseStudiesPage() {
  const canonicalUrl = "https://www.joydigital.in/case-studies";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Client Case Studies & Results | Joy Digital",
    description: "Explore real success stories from Joy Digital. Read how our web design, SEO, and local maps campaigns drove appointments, sales, and ranking growth.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Case Studies", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <Header />
      <main className="pt-20 lg:pt-24 bg-[#3B1580] text-[#FFFFFF]">
        
        {/* Intro */}
        <section className="pt-6 lg:pt-8 pb-12 bg-[#3B1580] text-center relative overflow-hidden border-b border-[#FFFFFF]/15">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block bg-[#C9F600]/15 text-[#C9F600] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C9F600]/30 mb-6">
              Our Results
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight mb-4">
              Client Success <span className="text-[#C9F600]">Case Studies</span>
            </h1>
            <p className="text-sm text-[#FFFFFF]/80 max-w-xl mx-auto leading-relaxed">
              We focus on delivering commercial results. Explore our success stories to see how our campaigns support business growth.
            </p>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-16 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
            {CASE_STUDIES.map((study, index) => (
              <article
                key={index}
                className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-3xl p-8 sm:p-12 shadow-sm hover:border-[#C9F600]/50 hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-[#FFFFFF]"
              >
                {/* Metric Box */}
                <div className="lg:col-span-4 bg-[#260B5E] text-[#FFFFFF] p-8 rounded-2xl text-center flex flex-col justify-center items-center h-full min-h-[180px] border border-[#C9F600]/30 shadow-inner relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C9F600]/10 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-5xl font-extrabold text-[#C9F600] mb-2 relative z-10">{study.metricValue}</span>
                  <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider relative z-10">{study.metricLabel}</span>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 flex flex-col items-start text-left">
                  <span className="text-[10px] font-bold text-[#C9F600] uppercase tracking-wider block mb-2">
                    {study.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-4 leading-tight">
                    {study.title}
                  </h2>
                  <p className="text-sm text-[#FFFFFF]/85 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="bg-[#260B5E] hover:bg-[#C9F600] hover:text-[#3B1580] text-[#FFFFFF] border border-[#FFFFFF]/20 font-bold text-xs px-6 py-3 rounded-lg transition-all"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
