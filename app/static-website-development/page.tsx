import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { generatePageSeo } from "@/lib/seoEngine";
import JamstackLeadForm from "@/components/ui/JamstackLeadForm";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await generatePageSeo(
    "/static-website-development",
    "Blazing-Fast Static Website Development | Next.js & React Solutions - Joy Digital",
    "Build high-speed, secure, and cost-effective static websites with sub-second load times, 100% serverless security, and zero database maintenance."
  );
  return {
    ...seoData.metadata,
    title: "Static Website Development",
    description: "Build high-speed, secure, and cost-effective static websites with sub-second load times, 100% serverless security, and zero database maintenance.",
    alternates: {
      canonical: "https://www.joydigital.in/static-website-development",
    },
    openGraph: {
      ...seoData.metadata.openGraph,
      title: "Static Website Development | Joy Digital",
      description: "Build high-speed, secure, and cost-effective static websites with sub-second load times, 100% serverless security, and zero database maintenance.",
      url: "https://www.joydigital.in/static-website-development",
      images: [
        {
          url: "https://www.joydigital.in/assets/images/hero-banner.webp",
          width: 1200,
          height: 630,
          alt: "Blazing-Fast Static Website Development - Joy Digital",
        },
      ],
    },
    twitter: {
      ...seoData.metadata.twitter,
      title: "Static Website Development | Joy Digital",
      description: "Build high-speed, secure, and cost-effective static websites with sub-second load times, 100% serverless security, and zero database maintenance.",
      images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
    },
  };
}

export default async function StaticWebDevPage() {
  const seoData = await generatePageSeo(
    "/static-website-development",
    "Blazing-Fast Static Website Development | Next.js & React Solutions - Joy Digital",
    "Build high-speed, secure, and cost-effective static websites with sub-second load times, 100% serverless security, and zero database maintenance."
  );

  const heroActions = (
    <div className="flex flex-wrap items-center gap-3.5 my-2">
      <a
        href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Static%20Website%20Development%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        aria-label="Get a Free Quote on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-lg" />
        <span>Get a Free Quote on WhatsApp</span>
      </a>
      <Link
        href="/free-website-audit"
        className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <span>Book Free Web Audit</span>
        <i className="fa-solid fa-arrow-right text-xs" />
      </Link>
    </div>
  );

  const bottomCta = (
    <section className="relative py-16 sm:py-20 bg-[#171126] border border-[#2A203F] overflow-hidden rounded-[24px] mx-6 lg:mx-12 my-16 shadow-xl text-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10 flex flex-col items-center">
        <span className="inline-block bg-[#7C3AED]/20 text-[#A78BFA] font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#7C3AED]/40 mb-6">
          Zero Database Maintenance • 100% Serverless Speed
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-white max-w-2xl">
          Ready to Upgrade to a Blazing-Fast Static Website?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Eliminate WordPress plugin vulnerabilities, prevent costly database downtime, and give your customers instant sub-second page loads on every mobile and desktop device worldwide.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20interested%20in%20Static%20Website%20Development%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            aria-label="Get a Free Quote on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-lg animate-pulse" />
            <span>Get a Free Quote on WhatsApp</span>
          </a>
          <Link
            href="/free-website-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            <span>Book Free Web Audit</span>
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10 text-xs text-slate-400 font-semibold">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-bolt text-emerald-400" /> 100/100 Core Web Vitals
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-shield-halved text-emerald-400" /> 100% Serverless Security
          </span>
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-comments text-emerald-400" /> Direct Senior Developer Support
          </span>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <ServicePageTemplate
        serviceName="Static Website Development"
        heroTitle="Blazing-Fast Static Website Development Services"
        heroSubtitle="Supercharge your online presence with sub-second page loads, 100% serverless security, and zero monthly database maintenance costs."
        heroActions={heroActions}
        leadSource="Static Website Development Landing Page"
        customLeadForm={<JamstackLeadForm />}
        customCtaBanner={bottomCta}
        canonicalUrl="https://www.joydigital.in/static-website-development"
        overviewTitle="Transitioning to High-Performance Pre-Rendered Architecture"
        overviewContent={
          <div className="space-y-8">
            <div className="space-y-4">
              <p>
                In today&apos;s competitive digital landscape, every millisecond of page load latency directly impacts visitor trust and conversion rates. Legacy monolithic platforms (such as traditional WordPress or PHP templates) rely on continuous database querying, leading to bloated load times, frequent server downtime, and persistent plugin vulnerabilities.
              </p>
              <p>
                At Joy Digital, we build <strong>blazing-fast static websites</strong> with Next.js, React, and Edge CDN architectures. We decouple your frontend from complex backend servers, pre-compiling your entire website as ultra-lightweight static HTML, CSS, and JavaScript. This approach delivers instantaneous load speeds, unbreakable security, and a 100% Core Web Vitals performance guarantee.
              </p>
            </div>

            {/* 3. STATIC VS TRADITIONAL WORDPRESS COMPARISON TABLE */}
            <div className="my-8 pt-4">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-1">
                  Architecture Comparison
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary-dark">
                  Static / Next.js vs. Traditional WordPress
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-1">
                  See why forward-thinking businesses are migrating from legacy CMS bloat to modern static builds.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm bg-white not-prose">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E7EB] bg-slate-50/80">
                      <th className="py-4 px-5 font-extrabold text-primary-dark text-xs uppercase tracking-wider w-1/3">
                        Key Metric / Feature
                      </th>
                      <th className="py-4 px-5 font-extrabold text-[#7C3AED] bg-[#7C3AED]/10 text-xs uppercase tracking-wider w-1/3 border-x border-[#E5E7EB]">
                        <div className="flex items-center gap-1.5">
                          <span>Next.js Static Build</span>
                          <span className="bg-[#7C3AED] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                            Joy Digital
                          </span>
                        </div>
                      </th>
                      <th className="py-4 px-5 font-extrabold text-rose-700 bg-rose-50/60 text-xs uppercase tracking-wider w-1/3">
                        Traditional WordPress
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] font-medium text-slate-700">
                    {/* Speed Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5 font-bold text-primary-dark">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-gauge-high text-[#7C3AED]" />
                          <span>Speed</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-emerald-700 font-bold bg-[#7C3AED]/5 border-x border-[#E5E7EB]">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-extrabold block text-emerald-800">100/100 Core Web Vitals</span>
                            <span className="text-[11px] text-emerald-600 font-normal">Sub-second load times (&lt; 0.8s) from Global Edge CDNs</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-rose-700 bg-rose-50/20">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-xmark text-rose-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-bold block text-rose-800">Slow / Plugin Overhead</span>
                            <span className="text-[11px] text-rose-600 font-normal">3.5s to 7+ seconds delay caused by heavy database queries</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Security Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5 font-bold text-primary-dark">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-shield-halved text-[#7C3AED]" />
                          <span>Security</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-emerald-700 font-bold bg-[#7C3AED]/5 border-x border-[#E5E7EB]">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-extrabold block text-emerald-800">100% Serverless &amp; Hacker-proof</span>
                            <span className="text-[11px] text-emerald-600 font-normal">Zero database or unpatched plugin attack surfaces</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-rose-700 bg-rose-50/20">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-xmark text-rose-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-bold block text-rose-800">Vulnerable to Database Hacks</span>
                            <span className="text-[11px] text-rose-600 font-normal">Frequent SQL injections, brute-force logins &amp; plugin exploits</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Maintenance Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5 font-bold text-primary-dark">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-screwdriver-wrench text-[#7C3AED]" />
                          <span>Maintenance</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-emerald-700 font-bold bg-[#7C3AED]/5 border-x border-[#E5E7EB]">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-extrabold block text-emerald-800">Zero Database Maintenance</span>
                            <span className="text-[11px] text-emerald-600 font-normal">No database crashes, PHP errors, or weekly patch panics</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-rose-700 bg-rose-50/20">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-xmark text-rose-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-bold block text-rose-800">High Monthly Upkeep &amp; Updates</span>
                            <span className="text-[11px] text-rose-600 font-normal">Constant plugin updates break site designs, requiring active IT repair</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Hosting Cost Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5 font-bold text-primary-dark">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-wallet text-[#7C3AED]" />
                          <span>Hosting Cost</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-emerald-700 font-bold bg-[#7C3AED]/5 border-x border-[#E5E7EB]">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-extrabold block text-emerald-800">Highly Cost-Effective</span>
                            <span className="text-[11px] text-emerald-600 font-normal">Served on global Edge CDNs for minimal hosting costs</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-rose-700 bg-rose-50/20">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-xmark text-rose-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-bold block text-rose-800">Expensive Dedicated Servers Needed</span>
                            <span className="text-[11px] text-rose-600 font-normal">High RAM/CPU server specs needed to avoid downtime spikes</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Scalability Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5 font-bold text-primary-dark">
                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-arrow-trend-up text-[#7C3AED]" />
                          <span>Traffic Scalability</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-emerald-700 font-bold bg-[#7C3AED]/5 border-x border-[#E5E7EB]">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-extrabold block text-emerald-800">Infinite Edge Auto-Scale</span>
                            <span className="text-[11px] text-emerald-600 font-normal">Handles 100k+ concurrent visits without a hiccup</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-rose-700 bg-rose-50/20">
                        <div className="flex items-start gap-2">
                          <i className="fa-solid fa-circle-xmark text-rose-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-bold block text-rose-800">Frequent 502/504 Timeouts</span>
                            <span className="text-[11px] text-rose-600 font-normal">Database bottleneck crashes under sudden viral traffic</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. TARGET AUDIENCE / IDEAL USE CASES */}
            <div className="my-10 pt-4">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-1">
                  Target Audience
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary-dark">
                  Who Is Static Website Development Ideal For?
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-1">
                  Our custom Next.js static builds are purpose-engineered for businesses where speed, reliability, and security drive client acquisition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {/* 1. Corporate Business Websites */}
                <div className="bg-white border border-[#E5E7EB] hover:border-[#7C3AED]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                      <i className="fa-solid fa-building" />
                    </div>
                    <h4 className="text-base font-bold text-primary-dark mb-2 group-hover:text-[#7C3AED] transition-colors">
                      Corporate Business Websites
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      Mid-sized companies and enterprise brands that require 100% serverless security, high brand authority, and instant loading pages for international clients, partners, and investors.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Zero database attack vectors &amp; 99.99% uptime</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Sub-100ms global Edge CDN delivery</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Local Service Providers & Consultants */}
                <div className="bg-white border border-[#E5E7EB] hover:border-[#7C3AED]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                      <i className="fa-solid fa-user-tie" />
                    </div>
                    <h4 className="text-base font-bold text-primary-dark mb-2 group-hover:text-[#7C3AED] transition-colors">
                      Local Service Providers &amp; Consultants
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      Clinics, medical professionals, financial advisors, legal consultants, and local agencies who rely on high Google Maps visibility and quick mobile enquiries.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Direct WhatsApp &amp; click-to-call integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>LocalBusiness JSON-LD schema &amp; fast indexation</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Landing Pages & Product Showcases */}
                <div className="bg-white border border-[#E5E7EB] hover:border-[#7C3AED]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                      <i className="fa-solid fa-rocket" />
                    </div>
                    <h4 className="text-base font-bold text-primary-dark mb-2 group-hover:text-[#7C3AED] transition-colors">
                      Landing Pages &amp; Product Showcases
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      SaaS platforms and performance marketers running Google Ads or Meta Ads who cannot afford slow load times causing expensive ad click bounces.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Instant first viewport render (&lt; 0.6s)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>High-converting, frictionless lead forms</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Portfolio & Agency Sites */}
                <div className="bg-white border border-[#E5E7EB] hover:border-[#7C3AED]/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                      <i className="fa-solid fa-briefcase" />
                    </div>
                    <h4 className="text-base font-bold text-primary-dark mb-2 group-hover:text-[#7C3AED] transition-colors">
                      Portfolio &amp; Agency Sites
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      Creative professionals, architects, designers, and boutique agencies wanting to present work samples, case studies, and imagery with silky-smooth frame rates.
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-semibold border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Next-gen WebP/AVIF asset compression</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-500 text-[10px]" />
                      <span>Zero image jitter or Cumulative Layout Shift (CLS)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Summary */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6 not-prose">
              <h3 className="text-lg font-bold text-primary-dark">
                Why Modern Brands Choose Next.js Static Site Generation (SSG)
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>Sub-100ms Global Edge CDN Delivery</strong> (Vercel / Cloudflare)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>Zero-Downtime Serverless Security</strong> (No DB Vulnerabilities)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>Headless CMS Integration</strong> (Sanity, Strapi, Contentful)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>WordPress to Next.js SSG Migration</strong> with 100% SEO Preservation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>100% Core Web Vitals Performance Guarantee</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                  <span><strong>Zero Monthly Database Maintenance Fees</strong></span>
                </li>
              </ul>
            </div>
          </div>
        }
        benefitsTitle="Enterprise Benefits of Static Next.js Architecture"
        benefitsSubtitle="Empower your technical and business teams with modern infrastructure, unbreakable security, and sub-second load times."
        benefits={[
          {
            icon: "fa-solid fa-bolt",
            title: "Sub-100ms Global Edge Delivery",
            description: "Pre-rendered assets cached across Vercel and Cloudflare global edge networks load instantaneously, dominating Core Web Vitals.",
          },
          {
            icon: "fa-solid fa-shield-halved",
            title: "Zero-Downtime Serverless Security",
            description: "No backend databases or vulnerable CMS plugins means zero risk of SQL injections, DDoS attacks, or brute force entries.",
          },
          {
            icon: "fa-solid fa-database",
            title: "Optional Headless CMS Integration",
            description: "Seamlessly integrate with API-first content platforms like Sanity, Strapi, or Contentful whenever marketing teams need self-service editing.",
          },
          {
            icon: "fa-solid fa-arrow-right-arrow-left",
            title: "WordPress to Next.js SSG Migration",
            description: "Safely transition from slow, vulnerable legacy monoliths to a clean Next.js React ecosystem with 100% URL redirect preservation.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "100% Core Web Vitals Guarantee",
            description: "Achieve 95+ Lighthouse scores to maximize search engine indexing and significantly cut mobile bounce rates.",
          },
          {
            icon: "fa-solid fa-coins",
            title: "Zero Infrastructure Overhead",
            description: "Eliminate expensive dedicated servers and database hosting fees; serve high-speed static assets for virtually zero monthly cost.",
          },
        ]}
        processTitle="Our Static Web Engineering Workflow"
        processSubtitle="A meticulous technical transition from concept or legacy infrastructure to the modern Edge."
        processSteps={[
          {
            step: "1",
            icon: "fa-solid fa-magnifying-glass-chart",
            title: "Architecture & Vitals Audit",
            description: "We analyze your current site structure, conversion funnels, and Core Web Vitals bottlenecks.",
          },
          {
            step: "2",
            icon: "fa-solid fa-network-wired",
            title: "UI/UX & Content Modeling",
            description: "We design clean, conversion-focused wireframes and structure your static content modules for maximum readability.",
          },
          {
            step: "3",
            icon: "fa-solid fa-code",
            title: "Next.js Static Compilation",
            description: "We engineer modular React components and configure Next.js Static Site Generation (SSG) with strict semantic HTML.",
          },
          {
            step: "4",
            icon: "fa-solid fa-rocket",
            title: "Global Edge CDN Deployment",
            description: "We automate CI/CD pipelines, configure DNS, and deploy globally on Vercel or Cloudflare for sub-second page delivery.",
          },
        ]}
        pricingTitle="Transparent Static Web Development Packages"
        pricingSubtitle="Flat-rate proposals with zero hidden maintenance fees or expensive monthly server retainers."
        pricingTiers={[
          {
            name: "Startup Static Showcase",
            price: "Starts from ₹15,000",
            period: "flat rate",
            description: "Ideal for small businesses, consultants, and service providers requiring a lightning-fast, professional online presence.",
            features: [
              "Up to 5 Custom Pre-rendered Pages",
              "Next.js Static Site Generation (SSG)",
              "Global Edge CDN Deployment",
              "100% Core Web Vitals Guarantee",
              "Click-to-Call & WhatsApp Lead Triggers",
              "1 Year Technical Codebase Warranty",
            ],
            ctaText: "Start Static Build",
          },
          {
            name: "Business Growth Static Platform",
            price: "Starts from ₹35,000",
            period: "flat rate",
            isPopular: true,
            description: "A comprehensive high-speed static system for corporate businesses, agencies, and high-traffic landing pages.",
            features: [
              "Up to 15 Scalable Custom Pages",
              "WordPress to Next.js SSG Migration Option",
              "Headless CMS Integration (Optional)",
              "Zero-Downtime Serverless Security Setup",
              "Advanced Local JSON-LD Schema Code",
              "Monthly Analytics & GSC Verification",
            ],
            ctaText: "Deploy Business Static Platform",
          },
          {
            name: "Enterprise Jamstack System",
            price: "Custom Quote",
            period: "bespoke quote",
            description: "Engineered for international tech brands, SaaS portfolios, and multi-region landing page networks.",
            features: [
              "Unlimited Scalable Component Architecture",
              "Multi-Region Edge CDN Routing",
              "Continuous Automated CI/CD Pipelines",
              "Custom Dynamic Forms & API Integrations",
              "Dedicated Developer Slack / WhatsApp Sync",
              "Enterprise Core Web Vitals SLA",
            ],
            ctaText: "Get Enterprise Quote",
          },
        ]}
        faqs={seoData.pageMapping?.faq_schema || [
          {
            question: "What is a static website and why is it faster than WordPress?",
            answer: "A static website is pre-compiled into lightweight HTML, CSS, and JavaScript files during build time. Unlike WordPress, which must query a MySQL database and execute server PHP code on every visitor request, static websites are served directly from global Edge CDNs in under 0.8 seconds without server processing delays."
          },
          {
            question: "Can a static website handle lead forms and customer inquiries?",
            answer: "Yes, absolutely. While the page layouts are statically pre-rendered for instant speed, interactive elements like contact forms, quotation calculators, and direct WhatsApp click-to-chat widgets connect seamlessly via serverless APIs."
          },
          {
            question: "How does static website development improve Google SEO rankings?",
            answer: "Google prioritizes websites that deliver fast Core Web Vitals scores (LCP, CLS, and INP). Static Next.js websites achieve 95+ scores on mobile devices, eliminate layout shifts, and provide clean semantic HTML that Google crawlers index with maximum efficiency."
          },
          {
            question: "What are the ongoing monthly maintenance costs for a static website?",
            answer: "Ongoing maintenance is virtually zero. Because static websites don't require database servers, security patch monitoring, or daily plugin update backups, hosting on modern edge platforms (like Vercel or Cloudflare) costs a fraction of traditional WordPress dedicated hosting."
          },
          {
            question: "Can you migrate our existing WordPress site to a Next.js static build?",
            answer: "Yes! We specialize in WordPress to Next.js migrations. We export your content, configure 301 redirects to protect 100% of your existing Google rankings, and deploy a blazing-fast static version of your site."
          }
        ]}
        crossLinks={[
          { href: "/custom-website-development", label: "Custom Website Development" },
          { href: "/dynamic-website-development", label: "Dynamic Web Applications" },
          { href: "/wordpress-to-nextjs-migration", label: "WordPress to Next.js Migration" },
          { href: "/landing-page-development", label: "Landing Page Development" },
          { href: "/seo-services", label: "Enterprise SEO Services" },
        ]}
      />
    </>
  );
}
