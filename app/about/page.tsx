import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import StrongCTA from "@/components/StrongCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

const Accordion = dynamic(() => import("@/components/ui/Accordion"));

export const metadata: Metadata = {
  title: "About Our Web Agency",
  description: "Learn about Joy Digital, a growth agency building custom Next.js websites, local SEO campaigns, and digital solutions for companies worldwide.",
  keywords: [
      "About Joy Digital",
      "Web Development Agency",
      "Next.js Specialists",
      "SEO Experts India",
      "Saravanan L Web Architect"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/about",
    siteName: "Joy Digital Agency",
    title: "About Our Digital Marketing Agency | Joy Digital",
    description: "Learn about Joy Digital's mission, values, and how our digital marketing agency helps businesses grow through web design, SEO, and local maps marketing.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "About Joy Digital Agency" }],
  },
};

const aboutFaqs = [
  {
    question: "What services does Joy Digital specialize in?",
    answer: "Joy Digital specializes in custom Next.js website development, Generative Engine Optimization (GEO/AI search optimization), local SEO, and performance web engineering for startups and expanding businesses."
  },
  {
    question: "Where is Joy Digital located and do you serve international clients?",
    answer: "Joy Digital is based in Perungalathur, Chennai, Tamil Nadu, India. We serve local businesses across Chennai and India, as well as global clients in the US, UK, UAE, Europe, and Australia."
  },
  {
    question: "Why choose custom web engineering over legacy CMS platforms like WordPress?",
    answer: "Custom Next.js web engineering delivers sub-second global page load speeds, 100% serverless security against SQL injections, 95+ Core Web Vitals scores, and full source code ownership."
  },
  {
    question: "What is your approach to project timelines and pricing?",
    answer: "We operate with 100% transparent flat-rate proposals, zero hidden recurring fees, 2-week sprint milestones, and direct founder-led communication throughout your project."
  },
  {
    question: "How can I request a quote or get started with Joy Digital?",
    answer: "You can request a free consultation or website audit using our contact forms, call us directly at +91 90800 26133, or message us on WhatsApp for an instant growth strategy."
  }
];

export default function AboutPage() {
  const canonicalUrl = "https://www.joydigital.in/about";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "About Our Web Agency | Joy Digital",
    description: "Learn about Joy Digital, a growth agency building custom Next.js websites, local SEO campaigns, and digital solutions for companies worldwide.",
    includeLocalBusiness: true,
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "About Us", item: canonicalUrl },
    ],
    faqs: aboutFaqs,
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <Header />
      <main className="pt-20 lg:pt-24 bg-[#3B1580] text-[#FFFFFF]">
        
        {/* Intro Hero */}
        <section className="pt-6 lg:pt-8 pb-16 lg:pb-20 bg-[#3B1580] relative overflow-hidden text-[#FFFFFF]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block bg-[#C9F600]/15 text-[#C9F600] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C9F600]/30 mb-6 animate-pulse-dot">
              Our Vision
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Driving Growth for <span className="text-[#C9F600]">Startups &amp; Regional Businesses</span>
            </h1>
            <p className="text-sm md:text-base text-[#FFFFFF]/80 max-w-2xl mx-auto leading-relaxed">
              Joy Digital Growth Agency provides professional website development, Local SEO, and branding solutions to help regional businesses build long-term search presence and grow customer inquiries.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-[#260B5E] border-y border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Stats */}
            <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-8 sm:p-12 rounded-3xl shadow-md relative overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C9F600]">100%</span>
                  <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider mt-1">Client Focus</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C9F600]">₹0</span>
                  <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider mt-1">Hidden Costs</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C9F600]">Under 1.5s</span>
                  <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider mt-1">Page Load Target</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C9F600]">24/7</span>
                  <span className="text-[10px] font-bold text-[#FFFFFF]/70 uppercase tracking-wider mt-1">Direct Support</span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col items-start justify-center text-left">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest mb-3">About Joy Digital</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF] mb-6">
                Our Core Mission
              </h2>
              <div className="text-sm text-[#FFFFFF]/85 leading-relaxed space-y-6">
                <p>
                  At Joy Digital Growth Agency, our core mission is to deliver professional digital marketing and web engineering solutions designed to fit startup and small-to-medium business budgets. Based in Chennai, Tamil Nadu, we understand how local search habits impact customer acquisition.
                </p>
                <p>
                  We avoid generic, bloated web designs that slow down page performance. Instead, we write clean, search-ready code and configure profiles to help local businesses rank on Google Maps and search results, building brand authority.
                </p>
                <p>
                  By structuring custom web layouts, optimizing metadata variables, and planning local SEO citation campaigns, we help our clients build online visibility that supports customer growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder profile */}
        <section className="py-16 lg:py-24 bg-[#3B1580] text-[#FFFFFF]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
              Leadership
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF] mb-12">
              Founder Profile &amp; Vision
            </h2>
            <div className="bg-[#260B5E] border border-[#FFFFFF]/20 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center text-[#FFFFFF]">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#C9F600]/40 shadow-md mb-4 group">
                <Image
                  src="/assets/images/founder.jpg"
                  alt="Saravanan L - Founder & Director of Joy Digital"
                  title="Saravanan L - Founder & Director"
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <h3 className="text-xl font-extrabold text-[#FFFFFF] mb-1">Saravanan L</h3>
              <span className="text-xs font-semibold text-[#C9F600] uppercase tracking-widest mb-3">Founder &amp; Director</span>
              
              <a
                href="https://www.linkedin.com/in/saravanan-l-34a861154/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FFFFFF]/70 hover:text-[#C9F600] transition-colors font-medium mb-6"
              >
                <i className="fa-brands fa-linkedin text-sm" /> View LinkedIn Profile
              </a>
              
              <p className="text-sm text-[#FFFFFF]/85 leading-relaxed max-w-xl mx-auto mb-6">
                &ldquo;We launched Joy Digital with a clear goal: to make professional web development and search engine optimization accessible to regional startups and small businesses. We focus on providing clean, fast-loading code and clear SEO strategies that deliver measurable results and support long-term growth.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://share.google/BSniheS2qnzwqUKXU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3B1580] flex items-center justify-center text-[#FFFFFF] hover:bg-[#4285F4] hover:text-white transition-all duration-300 border border-[#FFFFFF]/20"
                  aria-label="Google Business Profile"
                  title="Joy Digital Google Business Profile"
                >
                  <i className="fa-brands fa-google" />
                </a>
                <a
                  href="tel:+919080026133"
                  className="w-10 h-10 rounded-full bg-[#3B1580] flex items-center justify-center text-[#FFFFFF] hover:bg-[#C9F600] hover:text-[#3B1580] transition-all duration-300 border border-[#FFFFFF]/20"
                  aria-label="Call Direct"
                >
                  <i className="fa-solid fa-phone" />
                </a>
                <a
                  href="https://wa.me/919080026133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3B1580] flex items-center justify-center text-[#10b981] hover:bg-[#10b981] hover:text-white transition-all duration-300 border border-[#FFFFFF]/20"
                  aria-label="WhatsApp"
                  data-wa-location="contact page"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-[#260B5E] border-t border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C9F600] uppercase tracking-widest block mb-3">
                Common Questions
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#FFFFFF]/80">
                Have questions about Joy Digital, our web engineering process, or how we help businesses grow? Find answers below.
              </p>
            </div>

            <Accordion items={aboutFaqs} />
          </div>
        </section>

        <StrongCTA location="about page" />

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
