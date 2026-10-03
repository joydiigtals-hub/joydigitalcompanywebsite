import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Enterprise Web Solutions & Global SEO Agency | Joy Digital",
  description: "Accelerate your international growth with custom website development and generative engine optimization. Partner with a premier global SEO agency.",
  alternates: {
    canonical: "https://joydigital.in/enterprise-web-solutions",
  },
};

export default function EnterpriseWebSolutions() {
  const pageGraph = buildPageGraphSchema({
    url: "https://joydigital.in/enterprise-web-solutions",
    title: "Enterprise Web Solutions & Global SEO Agency | Joy Digital",
    description: "Accelerate your international growth with custom website development and generative engine optimization. Partner with a premier global SEO agency.",
  });

  return (
    <>
      <JsonLd schema={pageGraph} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Accelerate Your International Growth with <span className="text-[#EA580C]">Enterprise-Grade Digital Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Welcome to Joy Digital, your premier partner for dominating the global digital landscape. In today’s hyper-competitive international market, a standard template isn’t enough. You need an architecture designed for elite performance, robust security, and seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold rounded-lg transition-colors w-full sm:w-auto text-lg">
              Get Your Global Strategy
            </Link>
            <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors w-full sm:w-auto text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro & Pitch */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            We specialize in <strong className="text-slate-900">custom website development</strong> that transforms your online presence from a simple brochure into a high-converting, scalable business asset. 
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Whether you are a fast-growing tech startup or an established multinational brand, our <strong className="text-slate-900">enterprise website design</strong> solutions are specifically tailored to meet the complex demands of a global audience. We don't just build websites; we engineer state-of-the-art digital experiences that captivate users and drive measurable ROI across borders. 
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            However, a visually stunning website is only half the equation. As a specialized <strong className="text-slate-900">generative engine optimization agency</strong>, we ensure your brand achieves maximum visibility in the rapidly evolving landscape of AI-driven search engines (like ChatGPT, Perplexity, and AI Overviews). By combining technical excellence with advanced search strategies, we future-proof your digital footprint so that your business commands authority, no matter how your customers search.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            From headless commerce architectures to lightning-fast Next.js applications, our comprehensive <strong className="text-slate-900">full-stack web development services</strong> cover it all. We handle the heavy lifting of complex backend infrastructure and premium frontend aesthetics, allowing you to focus on scaling your business. Partner with Joy Digital today, and let’s build a powerful digital ecosystem that outpaces the competition worldwide.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Core Competencies for Global Brands</h2>
            <div className="w-24 h-1 bg-[#EA580C] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Website Development Engineered for Global Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                We build high-performance, scalable web applications that handle international traffic with sub-second load times. Our architectures are built for security, speed, and seamless global reach.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-50 text-[#EA580C] rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">A Generative Engine Optimization Agency for the AI Era</h3>
              <p className="text-slate-600 leading-relaxed">
                Traditional SEO isn't enough. We optimize your brand to dominate AI search engines like ChatGPT and Perplexity, establishing unmatched authority in the generative search landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Full-Stack Web Development Services That Drive Revenue</h3>
              <p className="text-slate-600 leading-relaxed">
                From headless eCommerce to robust SaaS platforms, our full-stack engineering team handles complex backend logic and stunning frontend UI to maximize your global conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Go Global?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Partner with Joy Digital to elevate your brand on the international stage with our premium custom web solutions.
        </p>
        <Link href="/contact" className="inline-block px-10 py-5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold rounded-lg transition-colors text-xl shadow-lg">
          Schedule a Strategy Call
        </Link>
      </section>
    </>
  );
}
