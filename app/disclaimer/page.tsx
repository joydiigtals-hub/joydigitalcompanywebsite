import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description: "Read the official website disclaimer, legal notices, and limitation of liability policy for Joy Digital web design & digital marketing services.",
  keywords: [
      "Disclaimer",
      "Disclaimer Services",
      "Web Development",
      "SEO Services",
      "Joy Digital"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/disclaimer",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/disclaimer",
    siteName: "Joy Digital Agency",
    title: "Disclaimer | Joy Digital",
    description: "Read the website disclaimer and limitation of liability policy for Joy Digital.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Joy Digital Disclaimer" }],
  },
};

export default function DisclaimerPage() {
  const canonicalUrl = "https://www.joydigital.in/disclaimer";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Website Disclaimer | Joy Digital",
    description: "Read the official website disclaimer, legal notices, and limitation of liability policy for Joy Digital web design & digital marketing services.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Disclaimer", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#3B1580] min-h-screen text-[#FFFFFF]">
        
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-[#3B1580] border-b border-[#FFFFFF]/15 relative overflow-hidden text-[#FFFFFF]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block bg-[#C9F600]/15 text-[#C9F600] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C9F600]/30 mb-4">
              Legal Info
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#FFFFFF] tracking-tight mb-4">
            Website Disclaimer &amp; Terms of Use
          </h1>
            <p className="text-xs sm:text-sm text-[#FFFFFF]/70 font-semibold">
              Last Updated: June 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-[#260B5E] border-b border-[#FFFFFF]/15">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-3xl p-8 sm:p-12 shadow-sm text-left text-[#FFFFFF]">
              <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-8">
                The information provided on this website is for general informational purposes only. By using our website and services, you agree to the terms outlined in this disclaimer.
              </p>

              <div className="space-y-8">
                {/* Service Information */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-circle-info" /></span>
                    Service Information
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    While we strive to keep information accurate and up to date, Joy Digital makes no warranties regarding the completeness, reliability, or accuracy of any information displayed on this website.
                  </p>
                </div>

                {/* Digital Marketing Results */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-chart-line" /></span>
                    Digital Marketing Results
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-4">
                    Digital marketing and SEO outcomes may vary depending on multiple factors including competition, industry trends, and search engine algorithms.
                  </p>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-2 font-semibold">
                    We do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-text-secondary">
                    <li>First-page Google rankings</li>
                    <li>Specific traffic increases</li>
                    <li>Guaranteed leads or sales</li>
                  </ul>
                </div>

                {/* External Links */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-link" /></span>
                    External Links
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those external websites.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div className="border-t border-[#FFFFFF]/15 pt-8 mt-8">
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-triangle-exclamation" /></span>
                    Limitation of Liability
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    Joy Digital shall not be held liable for any direct or indirect damages resulting from the use of this website or our services.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
