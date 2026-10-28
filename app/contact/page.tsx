import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import LeadForm from "@/components/ui/LeadForm";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { SITE_URL, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation",
  description: "Get in touch with our digital specialists. Request a free SEO audit, custom website quotes, or logo design consulting from our office.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      "x-default": `${SITE_URL}/contact`,
      "en-us": `${SITE_URL}/us/contact`,
      "en-gb": `${SITE_URL}/uk/contact`,
      "en-ae": `${SITE_URL}/ae/contact`,
      "en-in": `${SITE_URL}/contact`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: "Joy Digital Agency",
    title: "Contact Us & Free Consultation | Joy Digital",
    description: "Get in touch with our digital specialists. Request a free SEO audit, custom website quotes, or logo design consulting from our office.",
    images: [{ url: `${SITE_URL}/assets/images/hero-banner.webp`, width: 1200, height: 630, alt: "Contact Joy Digital Agency" }],
  },
};

export default function ContactPage() {
  const contactEmail = siteConfig.email;
  const canonicalUrl = `${SITE_URL}/contact`;
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Contact Us & Free Consultation | Joy Digital",
    description: "Get in touch with our digital specialists. Request a free SEO audit, custom website quotes, or logo design consulting from our office.",
    includeLocalBusiness: true,
    breadcrumbs: [
      { name: "Home", item: SITE_URL },
      { name: "Contact Us", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <Header />
      <main className="pt-20 lg:pt-24">
        
        {/* Intro */}
        <section className="pt-6 lg:pt-8 pb-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block bg-accent-glow text-accent font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-accent/20 mb-6">
              Connect With Us
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark tracking-tight mb-4">
              Let&apos;s Grow Your <span className="text-gradient">Digital Presence</span>
            </h1>
            <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
              Ready to grow your search visibility and customer leads? Contact us today. Our consulting team is based in Madurai, Tamil Nadu, India.
            </p>
          </div>
        </section>

        {/* Contact Body split */}
        <section className="py-12 bg-light-bg">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Columns */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="text-2xl font-bold text-primary-dark relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
                Direct Contact Channels
              </h2>
              
              <div className="flex flex-col gap-4">
                {/* Office Address (HQ) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7C3AED] text-xl flex-shrink-0 shadow-sm border border-purple-100">
                    <i className="fa-solid fa-map-location-dot" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-purple-100 text-[#6D28D9] text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                      HQ Office
                    </span>
                    <span className="text-[15px] font-bold text-slate-900 leading-snug">
                      Joy Digital Growth Agency, Madurai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* Chennai Partner Office */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 text-xl flex-shrink-0 shadow-sm border border-slate-200">
                    <i className="fa-solid fa-handshake" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                      Chennai (Partner Office)
                    </span>
                    <span className="text-[13px] text-slate-700 leading-snug">
                      11, Jothi nagar 5th street, Murugappa polytechnic nearby, Avadi, Chennai 600053
                    </span>
                  </div>
                </div>

                {/* Call Card */}
                <a
                  href="tel:+919080026133"
                  className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md flex items-center justify-between group transition-all duration-300"
                  title="Call Us Directly"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl flex-shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="flex flex-col">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                        Call Support
                      </span>
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        +91 90800 26133
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1.5 transition-all text-sm">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I'd%20like%20to%20get%20more%20details%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200/90 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md flex items-center justify-between group transition-all duration-300"
                  title="WhatsApp Us"
                  data-wa-location="contact page"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl flex-shrink-0 shadow-sm border border-emerald-100 group-hover:scale-105 transition-transform">
                      <i className="fa-brands fa-whatsapp" />
                    </div>
                    <div className="flex flex-col">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                        WhatsApp Chat
                      </span>
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        +91 90800 26133
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all text-sm">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${contactEmail}`}
                  className="bg-white border border-slate-200/90 hover:border-purple-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md flex items-center justify-between group transition-all duration-300"
                  title="Email Us"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-xl flex-shrink-0 shadow-sm border border-purple-100 group-hover:scale-105 transition-transform">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="flex flex-col">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                        Send Email
                      </span>
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                        {contactEmail}
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1.5 transition-all text-sm">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>

                {/* Google Business Profile Card */}
                <a
                  href="https://share.google/BSniheS2qnzwqUKXU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md flex items-center justify-between group transition-all duration-300"
                  title="Google Business Profile & Reviews"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#4285F4] text-xl flex-shrink-0 shadow-sm border border-blue-100 group-hover:scale-105 transition-transform">
                      <i className="fa-brands fa-google" />
                    </div>
                    <div className="flex flex-col">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                        Google Business Profile
                      </span>
                      <span className="text-[15px] font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors">
                        View Profile & Customer Reviews
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1.5 transition-all text-sm">
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </a>
              </div>

              {/* Map Embed card */}
              <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-100 mt-2">
                <iframe
                  src="https://maps.google.com/maps?q=Madurai,%20Tamil%20Nadu,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Joy Digital Growth Agency Location Map"
                />
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <LeadForm
                layout="vertical"
                title="Send An Enquiry"
                subtitle="Fill in the fields below, and our local business consulting experts will contact you within 24 hours."
                ctaText="Send Message"
                source="Contact Page Form"
              />
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
