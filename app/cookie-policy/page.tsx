import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Read the official Cookie Policy for Joy Digital to understand how we use cookies and tracking technologies to optimize your browsing experience.",
  keywords: [
      "Cookie Policy",
      "Cookie Policy Services",
      "Web Development",
      "SEO Services",
      "Joy Digital"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/cookie-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/cookie-policy",
    siteName: "Joy Digital Agency",
    title: "Cookie Policy & Data Tracking Terms | Joy Digital",
    description: "Read the Cookie Policy for Joy Digital to understand how we use cookies to improve your user experience.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Joy Digital Cookie Policy" }],
  },
};

export default function CookiePolicyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";
  const canonicalUrl = "https://www.joydigital.in/cookie-policy";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Cookie Policy | Joy Digital",
    description: "Read the official Cookie Policy for Joy Digital to understand how we use cookies and tracking technologies to optimize your browsing experience.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Cookie Policy", item: canonicalUrl },
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
            Joy Digital Cookie Policy &amp; Data Rules
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
                This Cookie Policy explains how Joy Digital uses cookies and similar technologies. By continuing to browse our website, you agree to our use of cookies as described here.
              </p>

              <div className="space-y-8">
                {/* What Are Cookies? */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-cookie" /></span>
                    What Are Cookies?
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    Cookies are small text files stored on your device that help improve your browsing experience. They allow the website to remember your actions and preferences over a period of time.
                  </p>
                </div>

                {/* How We Use Cookies */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-gears" /></span>
                    How We Use Cookies
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-2">
                    We may use cookies to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-text-secondary">
                    <li>Analyze website traffic</li>
                    <li>Improve website performance</li>
                    <li>Enhance user experience</li>
                    <li>Remember user preferences</li>
                  </ul>
                </div>

                {/* Third-Party Cookies */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-users-gears" /></span>
                    Third-Party Cookies
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    Third-party services such as Google Analytics may place cookies on your device to collect anonymous usage information. This helps us understand how visitors interact with our site so we can make improvements.
                  </p>
                </div>

                {/* Managing Cookies */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-sliders" /></span>
                    Managing Cookies
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed">
                    You can disable or delete cookies through your browser settings. However, please note that some website features may not function properly if cookies are disabled.
                  </p>
                </div>

                {/* Contact Us */}
                <div className="border-t border-[#FFFFFF]/15 pt-8 mt-8">
                  <h2 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-4 flex items-center gap-2">
                    <span className="text-[#C9F600]"><i className="fa-solid fa-envelope" /></span>
                    Contact Us
                  </h2>
                  <p className="text-sm sm:text-base text-[#FFFFFF]/85 leading-relaxed mb-4">
                    For questions regarding this Cookie Policy:
                  </p>
                  <div className="bg-[#260B5E] rounded-2xl p-6 border border-[#FFFFFF]/20 space-y-2 max-w-md text-[#FFFFFF]">
                    <h3 className="font-bold text-[#FFFFFF]">Joy Digital</h3>
                    <p className="text-sm flex items-center gap-2 text-text-secondary">
                      <span className="text-[#C9F600]"><i className="fa-solid fa-phone" /></span>
                      <a href="tel:+919080026133" className="hover:text-accent font-semibold transition-colors">9080026133</a>
                    </p>
                    <p className="text-sm flex items-center gap-2 text-text-secondary">
                      <span className="text-[#C9F600]"><i className="fa-solid fa-envelope" /></span>
                      <a href={`mailto:${contactEmail}`} className="hover:text-accent font-semibold transition-colors">{contactEmail}</a>
                    </p>
                  </div>
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
