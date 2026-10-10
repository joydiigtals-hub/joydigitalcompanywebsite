import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import LeadForm from "@/components/ui/LeadForm";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "WordPress to Next.js Migration | Headless Architecture",
  description: "Migrate legacy WordPress to high-speed Next.js. Retain 100% SEO rankings, eliminate plugin security vulnerabilities, and boost Core Web Vitals. Free audit.",
  alternates: {
    canonical: "https://joydigital.in/wordpress-to-nextjs-migration",
  },
  openGraph: {
    type: "website",
    url: "https://joydigital.in/wordpress-to-nextjs-migration",
    title: "WordPress to Next.js Migration Agency | Joy Digital",
    description: "Migrate legacy WordPress to high-speed Next.js. Retain 100% SEO rankings, eliminate plugin security vulnerabilities, and boost Core Web Vitals.",
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "WordPress to Next.js Migration" }],
  },
};

const FAQS = [
  {
    question: "Will migrating from WordPress to Next.js hurt my current Google SEO rankings?",
    answer: "No. In fact, most migrations see an organic search traffic boost. We perform a rigorous 1:1 URL mapping audit, implement exact 301 server redirects, replicate existing meta titles and descriptions, and maintain identical internal link structures while providing sub-second load speeds that drastically improve Google Core Web Vitals.",
  },
  {
    question: "How much does a WordPress to Next.js migration typically cost?",
    answer: "Our WordPress to Next.js migrations range from $1,500 to $4,500 USD for global projects (or starting from ₹45,000 to ₹1,20,000 INR in India). Exact pricing depends on your total page count, custom post types, WooCommerce checkout flows, third-party integrations, and headless CMS requirements.",
  },
  {
    question: "What is the expected project timeline for migration?",
    answer: "A typical WordPress to Next.js project is completed in 2 to 4 weeks. Week 1 is dedicated to architectural audit and database extraction, Weeks 2-3 to React frontend development and headless CMS linking, and Week 4 to quality assurance, SEO validation, and zero-downtime DNS deployment.",
  },
  {
    question: "Can our content team continue editing articles in WordPress?",
    answer: "Yes! We can configure a Headless WordPress setup where your content authors, marketers, and copywriters continue writing and publishing in the familiar WordPress Gutenberg editor, while Next.js automatically pulls content via the WP GraphQL or REST API to render ultra-fast static and ISR pages.",
  },
  {
    question: "What happens to WooCommerce products, inventory, and checkouts?",
    answer: "We decouple your storefront frontend using Next.js App Router for instant catalog browsing and product search, while preserving your existing WooCommerce backend, cart logic, payment gateways (Stripe/PayPal/Razorpay), and order management.",
  },
];

export default function WordPressToNextjsMigrationPage() {
  const canonicalUrl = "https://joydigital.in/wordpress-to-nextjs-migration";
  const pageGraphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "WordPress to Next.js Migration Agency | Joy Digital",
    description: "Migrate your slow WordPress website to high-speed serverless Next.js. Pass Core Web Vitals (95+ score), prevent plugin hacks, and preserve your 100% SEO rankings.",
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "WordPress to Next.js Migration", item: canonicalUrl },
    ],
    service: {
      name: "WordPress to Next.js Migration",
      description: "Professional migration of legacy WordPress websites to high-performance, serverless Next.js and React architectures with 100% SEO redirect preservation.",
      serviceType: "Web Development & Speed Optimization",
    },
    faqs: FAQS,
  });

  return (
    <>
      <JsonLd schema={pageGraphSchema} />
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#FAF9FF] text-[#1F1B2D]">
        
        {/* HERO SECTION */}
        <section className="bg-[#171126] text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-block bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A78BFA] font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                WordPress Migration Specialists
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Migrate <span className="text-[#A78BFA]">WordPress to Next.js</span> for 95+ PageSpeed &amp; 100% SEO Safety
              </h1>
              <p className="text-sm md:text-base text-[#D8D2E6] mb-8 max-w-2xl leading-relaxed">
                Is your WordPress site slow, vulnerable to plugin exploits, or failing Google&apos;s Core Web Vitals? We rebuild your frontend with serverless Next.js, boosting mobile conversion rates while strictly preserving your Google search rankings.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-[#2A203F] pt-6 mb-8 text-center sm:text-left">
                <div>
                  <span className="text-2xl font-black text-[#A78BFA] block">&lt; 1.0s</span>
                  <span className="text-[10px] text-[#D8D2E6] uppercase font-bold tracking-wider">Load Speed</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-[#A78BFA] block">100%</span>
                  <span className="text-[10px] text-[#D8D2E6] uppercase font-bold tracking-wider">SEO Preserved</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-[#A78BFA] block">0</span>
                  <span className="text-[10px] text-[#D8D2E6] uppercase font-bold tracking-wider">Plugin Exploits</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#migration-form"
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  Get Free Migration Proposal
                </a>
                <a
                  href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'm%20looking%20to%20migrate%20my%20WordPress%20site%20to%20Next.js."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs px-8 py-4 rounded-xl shadow-lg flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-lg" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5" id="migration-form">
              <LeadForm
                layout="vertical"
                title="Migrate Your Website"
                subtitle="Submit your WordPress URL to get a complete migration plan and flat-rate quote."
                ctaText="Request Migration Plan"
                source="WordPress to Next.js Landing Page"
              />
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER PERFORMANCE COMPARISON */}
        <section className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">Real-World Speed Impact</span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">Before vs After Migration Benchmarks</h2>
              <p className="text-xs sm:text-sm text-[#6B6478]">
                Real performance metrics achieved when replacing heavy WordPress PHP themes and bloated plugins with static React Server Components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-6 rounded-2xl text-center">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Google PageSpeed Mobile</span>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-black text-rose-500 line-through">34/100</span>
                  <span className="text-slate-400">&rarr;</span>
                  <span className="text-3xl font-black text-emerald-600">98/100</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold mt-2 block">+188% Speed Improvement</span>
              </div>

              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-6 rounded-2xl text-center">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Largest Contentful Paint (LCP)</span>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-black text-rose-500 line-through">4.2s</span>
                  <span className="text-slate-400">&rarr;</span>
                  <span className="text-3xl font-black text-emerald-600">0.8s</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold mt-2 block">Instant First Viewport Render</span>
              </div>

              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-6 rounded-2xl text-center">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Cumulative Layout Shift (CLS)</span>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-black text-rose-500 line-through">0.38</span>
                  <span className="text-slate-400">&rarr;</span>
                  <span className="text-3xl font-black text-emerald-600">0.00</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold mt-2 block">Zero Visual Layout Jitter</span>
              </div>

              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-6 rounded-2xl text-center">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Time to First Byte (TTFB)</span>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-black text-rose-500 line-through">1.4s</span>
                  <span className="text-slate-400">&rarr;</span>
                  <span className="text-3xl font-black text-emerald-600">85ms</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold mt-2 block">Served From Edge CDN</span>
              </div>
            </div>

            {/* Feature comparison table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 uppercase font-black tracking-wider text-[10px]">
                    <th className="py-4 px-6 bg-slate-50">Feature / Metric</th>
                    <th className="py-4 px-6 bg-rose-50/50 text-rose-700">Legacy WordPress</th>
                    <th className="py-4 px-6 bg-emerald-50/50 text-emerald-700 font-extrabold">Serverless Next.js (Joy Digital)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold">
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Average Mobile Page Load Speed</td>
                    <td className="py-4 px-6 text-rose-600 bg-rose-50/30">3.5s – 7.0s (Slow)</td>
                    <td className="py-4 px-6 text-emerald-600 font-extrabold bg-emerald-50/30">0.8s – 1.2s (Lightning)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Google Core Web Vitals Pass Rate</td>
                    <td className="py-4 px-6 text-rose-600 bg-rose-50/30">Fails LCP &amp; CLS tests frequently</td>
                    <td className="py-4 px-6 text-emerald-600 font-extrabold bg-emerald-50/30">100% Guaranteed Pass (95+ score)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Security &amp; Vulnerability Entry Points</td>
                    <td className="py-4 px-6 text-rose-600 bg-rose-50/30">High risk (Plugin updates, SQL leaks)</td>
                    <td className="py-4 px-6 text-emerald-600 font-extrabold bg-emerald-50/30">Zero static attack vector (Serverless CDN)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Database &amp; Server Crashes</td>
                    <td className="py-4 px-6 text-rose-600 bg-rose-50/30">Crashes under high traffic spikes</td>
                    <td className="py-4 px-6 text-emerald-600 font-extrabold bg-emerald-50/30">Auto-scaling edge CDN infrastructure</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Google SEO Indexing Efficiency</td>
                    <td className="py-4 px-6 text-rose-600 bg-rose-50/30">Bloated PHP code delays crawlers</td>
                    <td className="py-4 px-6 text-emerald-600 font-extrabold bg-emerald-50/30">Clean pre-rendered HTML for Instant Crawls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5-STEP MIGRATION PROCESS */}
        <section className="py-20 bg-[#FAF9FF] border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">Structured Methodology</span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">Our 5-Step Zero-Downtime Migration Process</h2>
              <p className="text-xs sm:text-sm text-[#6B6478]">
                Every migration is managed end-to-end with mathematical precision to prevent broken links or ranking loss.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] font-black flex items-center justify-center mb-4">01</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">1. URL &amp; SEO Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Full crawl of your existing WordPress website to catalog every URL, canonical tag, meta description, and 301 redirect map.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] font-black flex items-center justify-center mb-4">02</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">2. CMS Architecture</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Choose between Headless WordPress (keep WP dashboard) or modern headless CMS solutions like Sanity, Strapi, or Git Markdown.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] font-black flex items-center justify-center mb-4">03</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">3. Next.js Rebuild</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Re-architect the frontend with React Server Components, Tailwind CSS, TypeScript, and optimized dynamic caching.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] font-black flex items-center justify-center mb-4">04</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">4. Quality &amp; SEO QA</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify all 301 redirects, JSON-LD Schema integration, OpenGraph social cards, form submissions, and Google PageSpeed 95+ score.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] font-black flex items-center justify-center mb-4">05</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">5. Zero-Downtime Launch</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seamless DNS cutover on edge CDN, automated SSL certificates, and Google Search Console sitemap resubmission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE & PRICING SECTION */}
        <section className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">Clear Scope &amp; Estimates</span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">Timeline &amp; Cost Range</h2>
              <p className="text-xs sm:text-sm text-[#6B6478]">
                Transparent delivery schedules and fixed project pricing without hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Timeline Card */}
              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-4">
                  <i className="fa-solid fa-calendar-days text-base" /> Project Timeline: 2 to 4 Weeks
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Typical Sprint Schedule</h3>
                <ul className="space-y-4 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold flex items-center justify-center shrink-0 mt-0.5">W1</span>
                    <div>
                      <strong className="text-slate-900 block">Discovery, Content Scraping &amp; Redirect Map</strong>
                      Full database export, asset inventory, and canonical URL schema audit.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold flex items-center justify-center shrink-0 mt-0.5">W2</span>
                    <div>
                      <strong className="text-slate-900 block">Next.js Frontend Engineering</strong>
                      Component creation, Tailwind CSS styling, responsive layout checks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold flex items-center justify-center shrink-0 mt-0.5">W3</span>
                    <div>
                      <strong className="text-slate-900 block">CMS Integration &amp; Dynamic Routing</strong>
                      Connecting headless CMS API, search engine sitemaps, and forms.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold flex items-center justify-center shrink-0 mt-0.5">W4</span>
                    <div>
                      <strong className="text-slate-900 block">Staging QA, Speed Optimization &amp; Go-Live</strong>
                      Lighthouse audit (95+ score), 301 redirect validation, and DNS cutover.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Cost Card */}
              <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-tag text-base" /> Fixed-Fee Investment
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Cost Range: $1,500 – $4,500 USD</h3>
                  <p className="text-xs text-slate-500 mb-6 font-medium">Fixed-price milestone delivery with zero surprise fees</p>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Standard Corporate Site ($1,500 – $2,500)</strong>
                      Up to 15 pages + blog, zero-downtime 301 redirects, lead forms, and 95+ PageSpeed guarantee.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Large Publication / Custom CMS ($2,500 – $4,500)</strong>
                      High-volume blog archives, custom post types, dynamic filtering, headless WP GraphQL or Sanity integration.
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a href="#migration-form" className="w-full text-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md block transition-all">
                    Get Custom Quote For Your Site
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study Feature Link */}
            <div className="bg-gradient-to-r from-[#171126] to-[#2B1B47] text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#A78BFA] block mb-1">Verified Case Study</span>
                <h3 className="text-xl font-black">See How We Cut Load Times by 76% and Boosted Organic Leads</h3>
                <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  Discover how our client transformed an aging WordPress setup into a sub-second Next.js web application, achieving an instant PageSpeed leap from 34 to 98 and a 42% lift in qualified inquiries.
                </p>
              </div>
              <Link
                href="/case-studies/saas-landing-optimization"
                className="shrink-0 bg-white text-[#171126] hover:bg-[#FAF9FF] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Read Case Study</span>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 bg-[#FAF9FF] border-b border-[#E9E4F2]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">Frequently Asked Questions</span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">WordPress to Next.js Migration FAQs</h2>
              <p className="text-xs sm:text-sm text-[#6B6478]">
                Everything you need to know about preserving SEO equity, managing content, and cutover logistics.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="bg-white border border-[#E9E4F2] rounded-2xl p-6 shadow-xs">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2.5 flex items-start gap-2.5">
                    <span className="text-[#7C3AED] font-black">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/website-development" className="text-xs font-bold text-[#7C3AED] hover:underline">
                Explore Custom Web Development Services &rarr;
              </Link>
              <span className="hidden sm:inline text-slate-300">•</span>
              <Link href="/free-website-audit" className="text-xs font-bold text-slate-600 hover:text-slate-900">
                Get a Free 20-Point Performance Audit &rarr;
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
