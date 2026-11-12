import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import LocalSeoLeadForm from "@/components/ui/LocalSeoLeadForm";

export const metadata: Metadata = {
  title: "Local SEO Services & Google Maps Optimization Agency | Joy Digital",
  description: "Dominate Google Maps 3-Pack and attract nearby customers with professional Local SEO Services from Joy Digital. Profile optimization, citations & local leads.",
  keywords: [
    "Local SEO Services",
    "Local SEO Company",
    "Google Business Profile Optimization",
    "Google Maps SEO",
    "Local SEO Agency",
    "Local Search Marketing",
    "Google Maps 3-Pack Rankings",
    "Multi-Location SEO",
    "Joy Digital"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/local-seo-services",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Local SEO Services & Google Business Profile Optimization",
  "serviceType": "Local Search Engine Optimization & Google Maps SEO",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Joy Digital",
    "image": "https://www.joydigital.in/assets/images/logo.webp",
    "telephone": "+919080026133",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4/166 T, Thinamani Nagar",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625018",
      "addressCountry": "IN"
    }
  },
  "description": "Joy Digital is a results-driven Local SEO Company helping small businesses, contractors, regional providers, and multi-location franchises dominate Google Maps 3-Pack rankings and capture high-intent local customer calls.",
  "areaServed": [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Australia",
    "Canada"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Local SEO Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Local Business Starter Plan",
        "description": "Single-location Google Business Profile optimization, local citation audit, and 5 km geo-grid rank tracking."
      },
      {
        "@type": "Offer",
        "name": "Regional Growth Plan",
        "description": "Multi-area local search dominance for businesses serving wider city radiuses or operating 2-5 branch locations."
      },
      {
        "@type": "Offer",
        "name": "Enterprise & Multi-Location Franchise",
        "description": "Centralized GBP bulk management, enterprise store locators, automated citation syndication, and brand protection for 6 to 50+ locations."
      }
    ]
  }
};

export default function LocalSEOPage() {
  return (
    <ServicePageTemplate
      serviceName="Local SEO Services"
      heroTitle="Local SEO Services That Put Your Business at the Top of Google Maps & Local Search"
      heroSubtitle="Connect with nearby customers actively searching for your services. As a specialized Local SEO Company, Joy Digital optimizes your Google Business Profile, scales Google Maps SEO rankings, and turns neighborhood searches into predictable phone calls, store visits, and qualified customer enquiries."
      leadSource="Local SEO Services Landing Page"
      customLeadForm={<LocalSeoLeadForm />}
      heroActions={
        <div className="flex flex-wrap items-center gap-3 w-full">
          <a
            href="https://wa.me/919080026133?text=Hi%20Joy%20Digital%2C%20I%20would%20like%20to%20improve%20my%20business%20rankings%20on%20Google%20Maps%20and%20Local%20Search."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
          >
            <i className="fa-brands fa-whatsapp text-base" /> Chat on WhatsApp Directly
          </a>
          <Link
            href="/free-website-audit"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
          >
            <i className="fa-solid fa-gauge-high text-xs text-[#C9F600]" /> Free Local SEO Audit
          </Link>
        </div>
      }

      /* ── Requirement 5: Dedicated Customer Problems Section with Strong Hooks ── */
      belowHeroSection={
        <section className="py-16 lg:py-20 bg-[#260B5E] border-y border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#C9F600] uppercase tracking-widest block mb-2.5">
                The Cost of Poor Visibility
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
                Why Most Local Businesses Lose 70%+ of Nearby Customers on Google
              </h2>
              <p className="text-sm text-[#FFFFFF]/80 leading-relaxed">
                When a customer in your neighborhood needs a school for their child, emergency pest control, a trusted builder, or a specialist doctor, they don&apos;t browse page 2 of Google. They call one of the top 3 businesses shown in the Google Maps 3-Pack. If your business isn&apos;t there, you lose high-ticket revenue directly to competitors every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#C9F600]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                    <i className="fa-solid fa-map-pin" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2">The &quot;Invisible on Maps&quot; Trap</h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    Your physical office or store exists, but Google shows competitors 5 km away because your Google Business Profile lacks localized categories, primary service geotags, and authority signals.
                  </p>
                </div>
                <span className="text-[10px] font-extrabold text-[#C9F600] mt-4 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation text-xs" /> Lost Daily Walk-ins &amp; Calls
                </span>
              </div>

              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#C9F600]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                    <i className="fa-solid fa-mobile-screen-button" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2">Missing High-Intent &quot;Near Me&quot; Searches</h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    Over 76% of smartphone users searching for local services call or visit a business within 24 hours. Without local SEO, customers ready to spend money hire competing providers instead.
                  </p>
                </div>
                <span className="text-[10px] font-extrabold text-[#C9F600] mt-4 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation text-xs" /> High-Urgency Revenue Lost
                </span>
              </div>

              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#C9F600]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                    <i className="fa-solid fa-arrows-split-up-and-left" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2">Inconsistent NAP &amp; Citation Confusion</h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    Different addresses, outdated phone numbers, or conflicting business names across Justdial, Sulekha, Facebook, and Google confuse Google&apos;s algorithm and quietly suppress your rankings.
                  </p>
                </div>
                <span className="text-[10px] font-extrabold text-[#C9F600] mt-4 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation text-xs" /> Algorithmic Ranking Penalty
                </span>
              </div>

              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#C9F600]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                    <i className="fa-solid fa-star-half-stroke" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2">Review Stagnation &amp; Competitor Trust</h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    When competing businesses consistently gather fresh 5-star Google reviews and respond to questions, undecided prospective customers choose them before they ever reach your contact page.
                  </p>
                </div>
                <span className="text-[10px] font-extrabold text-[#C9F600] mt-4 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation text-xs" /> Eroded Customer Confidence
                </span>
              </div>

              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#C9F600]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 flex items-center justify-center text-[#C9F600] text-lg mb-4">
                    <i className="fa-solid fa-globe" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF] mb-2">The Single-Page Website Handicap</h3>
                  <p className="text-xs text-[#FFFFFF]/75 leading-relaxed">
                    Having only one generic homepage means your website cannot rank across surrounding suburbs, residential clusters, or adjacent commercial zones where customers are actively searching.
                  </p>
                </div>
                <span className="text-[10px] font-extrabold text-[#C9F600] mt-4 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation text-xs" /> Restricted Catchment Radius
                </span>
              </div>

              <div className="bg-gradient-to-br from-[#3B1580] to-[#260B5E] border border-[#C9F600]/40 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C9F600] flex items-center justify-center text-[#3B1580] text-lg mb-4 font-black">
                    <i className="fa-solid fa-check" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#FFFFFF] mb-2">The Solution: Strategic Local SEO</h3>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed">
                    Joy Digital solves these bottlenecks with complete profile optimization, citation cleanup, radius geo-grid rank tracking, and dedicated local landing pages that capture customers.
                  </p>
                </div>
                <Link
                  href="/free-website-audit"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[#C9F600] hover:underline"
                >
                  Run Free Geo-Grid Audit on Your Business &rarr;
                </Link>
              </div>

            </div>
          </div>
        </section>
      }

      /* ── Requirement 6: Plain-English Local SEO Explanation ── */
      overviewTitle="What Are Local SEO Services and How Do They Bring Paying Customers to Your Door?"
      overviewContent={
        <div className="space-y-6">
          <p>
            When someone searches for a business on Google—whether it is an urgent pest control treatment, admissions for a CBSE school, a building contractor for a new home, or an emergency dental clinic—Google displays two types of search results:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-[#FFFFFF]/85 font-medium">
            <li><strong>The Google Maps 3-Pack:</strong> A prominent map block showcasing the top 3 verified local businesses with their ratings, operating hours, phone numbers, and directions.</li>
            <li><strong>Organic Local Search Results:</strong> Web pages ranking directly below the map block for localized search terms (e.g., <em>&quot;best CBSE school in Madurai&quot;</em> or <em>&quot;building contractors near me&quot;</em>).</li>
          </ul>
          <p>
            <strong>Local SEO Services</strong> are the exact search engine marketing processes used to ensure your business appears at the very top of both these sections. Unlike traditional global SEO which targets worldwide traffic, Local SEO focuses exclusively on capturing customers within your actual physical service area or store radius.
          </p>

          <h3 className="text-xl font-bold text-[#FFFFFF] mt-8 mb-4">
            The 4 Core Pillars of an Effective Local SEO Strategy
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-[#3B1580] p-5 rounded-xl border border-[#FFFFFF]/15">
              <span className="text-[#C9F600] font-black text-xs uppercase tracking-wider block mb-1">Pillar 1</span>
              <h4 className="text-sm font-extrabold text-white mb-1.5">Google Business Profile (GBP) Optimization</h4>
              <p className="text-xs text-[#FFFFFF]/80 leading-relaxed font-normal">
                Your GBP is your primary digital storefront on Google. We optimize your primary category, secondary categories, exact pin placement, operating hours, service menus, high-resolution photos, and weekly Google Posts.
              </p>
            </div>

            <div className="bg-[#3B1580] p-5 rounded-xl border border-[#FFFFFF]/15">
              <span className="text-[#C9F600] font-black text-xs uppercase tracking-wider block mb-1">Pillar 2</span>
              <h4 className="text-sm font-extrabold text-white mb-1.5">Google Maps SEO &amp; Proximity Optimization</h4>
              <p className="text-xs text-[#FFFFFF]/80 leading-relaxed font-normal">
                Google ranks local listings based on three factors: <strong>Relevance</strong>, <strong>Distance (Proximity)</strong>, and <strong>Prominence</strong>. We tune your entity data and local schema so Google trusts your business to serve customers across a 5 to 15 km radius.
              </p>
            </div>

            <div className="bg-[#3B1580] p-5 rounded-xl border border-[#FFFFFF]/15">
              <span className="text-[#C9F600] font-black text-xs uppercase tracking-wider block mb-1">Pillar 3</span>
              <h4 className="text-sm font-extrabold text-white mb-1.5">Localized On-Page Website Architecture</h4>
              <p className="text-xs text-[#FFFFFF]/80 leading-relaxed font-normal">
                Your website reinforces your map rankings. We create dedicated, fast-loading neighborhood and service landing pages built with localized H1/H2 tags, embedded directions, and <Link href="/technical-seo" className="text-[#C9F600] underline font-bold">LocalBusiness JSON-LD schema</Link>.
              </p>
            </div>

            <div className="bg-[#3B1580] p-5 rounded-xl border border-[#FFFFFF]/15">
              <span className="text-[#C9F600] font-black text-xs uppercase tracking-wider block mb-1">Pillar 4</span>
              <h4 className="text-sm font-extrabold text-white mb-1.5">NAP Citations &amp; Review Management</h4>
              <p className="text-xs text-[#FFFFFF]/80 leading-relaxed font-normal">
                We clean up and synchronize your Name, Address, and Phone (NAP) data across authoritative directories (Apple Maps, Bing Places, Justdial, Sulekha) and establish an ethical review collection system to build unshakeable local credibility.
              </p>
            </div>
          </div>

          <p>
            Whether you operate an independent single-location practice or manage a multi-location franchise network, our customized Local SEO services provide a predictable, sustainable pipeline of customer inquiries without requiring thousands of dollars in monthly pay-per-click ad spend.
          </p>
        </div>
      }

      /* ── Requirement 8: Improved GBP & Google Maps Optimization Benefits ── */
      benefitsTitle="Core Capabilities of Our Local SEO Services"
      benefitsSubtitle="Data-backed strategies to push your business into the top 3 Google Maps positions and keep you there."
      benefits={[
        {
          icon: "fa-solid fa-map-location-dot",
          title: "Google Maps 3-Pack Optimization",
          description: "We optimize your profile relevance, geo-coordinates, and local prominence signals to position your business in the high-converting top 3 Google Maps results.",
        },
        {
          icon: "fa-solid fa-store",
          title: "Comprehensive Google Business Profile Management",
          description: "Complete setup and ongoing management: primary & secondary category precision, geo-tagged photo uploads, product/service cataloging, and weekly promotional Google Posts.",
        },
        {
          icon: "fa-solid fa-satellite-dish",
          title: "Geo-Grid Rank Tracking & Heatmap Audits",
          description: "Visualize exactly where your business ranks mile-by-mile around your store. Our radius heatmaps pinpoint ranking drop-offs so we can target weak geographic zones.",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "NAP Citation Building & Duplicate Cleanup",
          description: "Audit, correct, and synchronize your Name, Address, and Phone details across 50+ authoritative directory platforms while suppressing duplicate and rogue listings.",
        },
        {
          icon: "fa-solid fa-star-half-stroke",
          title: "Review Velocity & Reputation Architecture",
          description: "Deploy automated SMS and WhatsApp review funnels to steadily generate authentic 5-star customer reviews, a primary ranking and conversion factor.",
        },
        {
          icon: "fa-solid fa-robot",
          title: "AI Search Optimization (GEO) for Local Intent",
          description: "Prepare your business for Google AI Overviews, Gemini, and conversational AI queries by structuring your FAQs, service data, and credentials in machine-readable schema.",
        },
      ]}

      /* ── Requirement 7: Industry-Specific Examples Section with Contextual Internal Links ── */
      afterBenefitsSection={
        <section className="py-16 lg:py-24 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black text-[#C9F600] uppercase tracking-widest block mb-2.5">
                Tailored Industry Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
                How Our Local SEO Agency Drives Growth Across Different Industries
              </h2>
              <p className="text-sm text-[#FFFFFF]/80 leading-relaxed">
                Local search intent varies dramatically depending on what you sell. Here is how our specialized Local SEO strategies deliver qualified leads and customer calls across key industry sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              
              {/* Schools & Education */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-graduation-cap" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Schools &amp; Academies</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">Admission Lead Generation</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    Parents searching <em>&quot;best CBSE school in [City]&quot;</em> or <em>&quot;nursery admission near me&quot;</em> need confidence. We optimize your GBP with campus photos, academic board affiliations, and direct admission enquiry forms to increase physical campus visits.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;CBSE schools near me with hostel&quot;, &quot;matriculation school admission [City]&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-for-schools" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    School Web Solutions &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/blog/school-website-development-seo" className="text-white hover:text-[#C9F600]">
                    School SEO Guide
                  </Link>
                </div>
              </div>

              {/* Pest Control & Home Services */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-shield-virus" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Pest Control Services</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">Emergency Lead Capture</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    When property owners discover termites or bed bugs, they need immediate inspection. We position your company in the Google Maps 3-Pack with click-to-call buttons, emergency service area radiuses, and odorless chemical certifications.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;Termite control near me&quot;, &quot;cockroach treatment in [Area]&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-for-pest-control" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    Pest Control Solutions &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/blog/pest-control-website-design-seo" className="text-white hover:text-[#C9F600]">
                    Pest Control SEO Guide
                  </Link>
                </div>
              </div>

              {/* Construction & Contractors */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-helmet-safety" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Construction &amp; Builders</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">High-Ticket Contracts</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    Clients investing millions in residential villas or commercial spaces demand verified proof. We geotag your completed building sites, showcase client video reviews on Maps, and create localized suburb project landing pages.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;Building contractors near me&quot;, &quot;villa construction company [Location]&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-development" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    Construction Web Dev &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/blog/construction-company-website-development-seo" className="text-white hover:text-[#C9F600]">
                    Builder SEO Strategy
                  </Link>
                </div>
              </div>

              {/* Healthcare & Specialized Clinics */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-hospital" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Healthcare &amp; Clinics</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">Patient Appointment Booking</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    Patients search for doctors based on proximity and reviews. We optimize Google Business Profiles for hospitals and multi-specialty clinics with direct appointment booking integrations, doctor credentials, and emergency opening hours.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;Pediatrician open today near me&quot;, &quot;dental clinic in [Area]&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-for-hospitals" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    Hospital Web Solutions &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/seo-services" className="text-white hover:text-[#C9F600]">
                    Healthcare SEO
                  </Link>
                </div>
              </div>

              {/* Real Estate & Property Developers */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-building-user" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Real Estate &amp; Builders</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">Site Visit Enquiries</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    Homebuyers search by neighborhood. We set up exact pin locations for gated communities, launch neighborhood-specific landing pages, and capture high-intent inquiries from NRI and domestic property buyers.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;Plots for sale in [Neighborhood]&quot;, &quot;luxury apartments near me&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-for-real-estate" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    Real Estate Solutions &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/seo-services-chennai" className="text-white hover:text-[#C9F600]">
                    City Property SEO
                  </Link>
                </div>
              </div>

              {/* Hotels, Resorts & Hospitality */}
              <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-6 hover:border-[#C9F600]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9F600]/15 text-[#C9F600] flex items-center justify-center text-lg">
                      <i className="fa-solid fa-hotel" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">Hotels &amp; Resorts</h3>
                      <span className="text-[10px] text-[#C9F600] font-bold uppercase tracking-wider">Zero-Commission Direct Bookings</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#FFFFFF]/80 leading-relaxed mb-3">
                    Stop paying 20-30% commissions to OTAs. We optimize your Google Hotel profile, enable direct booking links from Google Maps, and showcase 360-degree virtual photos to capture travelers researching local stays.
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/20 border border-white/10 text-[11px] text-[#FFFFFF]/70 mb-4">
                    <strong>Search Intent:</strong> &quot;Resorts with swimming pool near me&quot;, &quot;business hotels in [City]&quot;
                  </div>
                </div>
                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 text-xs font-bold">
                  <Link href="/website-for-hotels" className="text-[#C9F600] hover:underline flex items-center gap-1">
                    Hotel Web Solutions &rarr;
                  </Link>
                  <span className="text-white/30">•</span>
                  <Link href="/travel-website-development" className="text-white hover:text-[#C9F600]">
                    Hospitality Web Systems
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      }

      /* ── Process Steps ── */
      processTitle="Our 4-Step Local SEO Roadmap to Rank in the Google Maps 3-Pack"
      processSubtitle="A structured, transparent system designed to audit, optimize, and scale local search prominence."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-satellite-dish",
          title: "Geo-Grid Radius Audit",
          description: "We map your current Google Maps ranking across a 5 to 15 km radius, analyzing competitor prominence, category mismatches, and citation discrepancies.",
        },
        {
          step: "2",
          icon: "fa-solid fa-screwdriver-wrench",
          title: "Complete GBP Optimization",
          description: "We restructure primary and secondary categories, correct pin accuracy, upload geotagged images, add service menus, and seed authoritative Q&A.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Local Schema & Landing Pages",
          description: "We implement LocalBusiness JSON-LD schema on your website and build dedicated, fast-loading neighborhood landing pages for target search terms.",
        },
        {
          step: "4",
          icon: "fa-solid fa-chart-line",
          title: "Citation Sync & Review Velocity",
          description: "We syndicate your accurate NAP details across 50+ trusted directory networks and deploy automated review generation workflows to maintain authority.",
        },
      ]}

      /* ── Requirement 9: Restructure Pricing into 3 Plans WITHOUT Displaying Actual Prices ── */
      pricingTitle="Tailored Local SEO Packages"
      pricingSubtitle="Select the plan aligned with your business footprint. Every package is custom-scoped to maximize local inbound calls without unnecessary overhead."
      pricingTiers={[
        {
          name: "Local Business Starter",
          price: "Tailored Proposal",
          period: "Single Location",
          description: "Designed for independent medical clinics, single-campus schools, local contractors, and single storefronts seeking Google Maps 3-Pack supremacy.",
          features: [
            "Complete Google Business Profile Audit & Setup",
            "Primary & Secondary Category Precision Optimization",
            "5 km Geo-Grid Radius Heatmap Rank Tracking",
            "Top-Tier Local Citation Audit & NAP Consistency Cleanup",
            "LocalBusiness JSON-LD Schema Code for Your Website",
            "Customer Review Generation Funnel Strategy",
            "Monthly Local Ranking, Calls & Direction Request Reports",
          ],
          ctaText: "Enquire for Starter Plan",
        },
        {
          name: "Regional Growth Plan",
          price: "Growth Retainer",
          period: "2-5 Locations / Multi-Area",
          description: "Perfect for expanding businesses and service contractors serving multiple suburbs or operating 2-5 branch locations.",
          isPopular: true,
          features: [
            "Management of Up to 5 Google Business Profiles",
            "Multi-Area Local Landing Page SEO Architecture",
            "10-15 km Geo-Grid Radius Rank Tracking & Heatmap Audits",
            "Regional & Industry-Specific Citation Syndication",
            "Local Content & FAQ Optimization for AI Search (GEO)",
            "Weekly Google Posts, Q&A Seeding & Review Monitoring",
            "Competitor Spam Listing Fighting & Name Violation Reporting",
            "Bi-Weekly Local Performance & Inbound Lead Reports",
          ],
          ctaText: "Enquire for Regional Plan",
        },
        {
          name: "Enterprise & Multi-Location Franchise",
          price: "Enterprise Scope",
          period: "6+ Locations / Franchise",
          description: "Comprehensive Local SEO and reputation management infrastructure for regional chains and national franchise brands.",
          features: [
            "Centralized Bulk GBP Management & Verification Support",
            "Enterprise Store Locator Development with Schema Markup",
            "Automated Duplicate Listing & Spam Suppression",
            "High-Authority API Data Syndication (Apple, Bing, Yelp)",
            "Multi-City Geo-Targeted Content & Landing Page Strategy",
            "Centralized Review Monitoring & Sentiment Tracking Dashboard",
            "Dedicated Senior Local SEO Account Strategist",
            "Custom Executive Reporting & Bi-Weekly Strategy Consultations",
          ],
          ctaText: "Enquire for Enterprise Plan",
        },
      ]}

      /* ── Requirement 11: Replaced with 7 Authoritative Local SEO FAQs ── */
      faqs={[
        {
          question: "What is Local SEO and how is it different from traditional SEO?",
          answer: "Traditional SEO focuses on ranking web pages nationally or globally for broad keywords regardless of user location. Local SEO focuses specifically on optimizing your business to appear in Google Maps and local search results for users searching within your immediate geographic vicinity (e.g., 'pediatrician near me' or 'pest control in Madurai'). Local SEO prioritizes Google Business Profiles, geographic proximity, localized citations, and customer reviews.",
        },
        {
          question: "How long does it take to see ranking improvements on Google Maps?",
          answer: "Initial improvements often appear within 3 to 6 weeks as Google indexes category corrections, verified NAP citations, and complete profile attributes. Highly competitive markets (such as pest control or construction in major metropolitan areas) typically take 2 to 4 months of consistent review generation, citation authority building, and on-page optimization to secure and maintain a solid position in the Google Maps 3-Pack.",
        },
        {
          question: "Why is my competitor ranking higher on Google Maps even though my business is closer to the searcher?",
          answer: "While physical proximity is a major ranking factor, Google evaluates two other critical signals: Relevance and Prominence. A competitor who is slightly further away can outrank you if their primary category is more accurate, their Google Business Profile has more detailed service descriptions, they possess a higher volume of recent 5-star reviews with keywords, or their website has stronger local domain authority.",
        },
        {
          question: "Can Local SEO help my business if I don't have a physical walk-in storefront (Service Area Business)?",
          answer: "Yes, absolutely. Google allows businesses that visit or deliver to customers—such as pest control operators, building contractors, plumbers, and home repair services—to register as a Service Area Business (SAB). We hide your residential address for privacy while defining specific service radius zones, postal codes, and city territories so your business ranks across your entire operating market.",
        },
        {
          question: "How important are Google customer reviews for Google Maps 3-Pack rankings?",
          answer: "Reviews are among the top 3 ranking factors for local search. Google evaluates review volume, average star rating, review recency (review velocity), and whether customer reviews naturally mention specific services or location keywords. Furthermore, positive reviews directly influence conversion rates—customers almost always call the business with the highest number of credible, recent positive reviews.",
        },
        {
          question: "How do you manage Local SEO for businesses with multiple locations or franchises?",
          answer: "For multi-location businesses, we implement a centralized management structure. We establish verified Google Business Profiles for each physical location, ensure distinct local phone numbers and addresses, syndicate data to Tier-1 citation aggregators, and develop an SEO-friendly Store Locator on your website with unique, dedicated landing pages for each branch incorporating LocalBusiness schema.",
        },
        {
          question: "How does AI Search (Google AI Overviews, Gemini, ChatGPT) impact local search in 2026?",
          answer: "Conversational AI tools and Google AI Overviews increasingly summarize local recommendations directly in search results. To ensure AI platforms recommend your business, we implement Generative Engine Optimization (GEO) strategies—including structured FAQPage schema, verified business credentials, clear operating hours, and transparent service descriptions that AI models can easily crawl, understand, and reference.",
        },
      ]}
      schemaMarkup={pageSchema}

      /* ── Requirement 12: Relevant Internal Links to JoyDigital Services ── */
      crossLinks={[
        { href: "/google-business-profile-setup", label: "GBP Optimization" },
        { href: "/seo-services", label: "Enterprise B2B SEO" },
        { href: "/technical-seo", label: "Technical SEO & Speed" },
        { href: "/on-page-seo", label: "On-Page Content SEO" },
        { href: "/ai-search-optimization", label: "AI Search & GEO" },
        { href: "/website-development", label: "Custom Next.js Web Development" },
        { href: "/free-website-audit", label: "Free 20-Point SEO Audit" },
        { href: "/contact", label: "Contact Strategy Team" },
      ]}
    />
  );
}
