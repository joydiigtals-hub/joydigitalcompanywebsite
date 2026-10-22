import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "Pest Control Website Design & SEO Services | Joy Digital",
  },
  description: "High-converting website design & local SEO for pest control companies. Drive emergency calls, WhatsApp bookings & qualified leads. Get a free audit today!",
  keywords: [
    "pest control website design",
    "website for pest control companies",
    "exterminator website development",
    "pest control local seo",
    "pest control lead generation",
  ],
  alternates: {
    canonical: "https://www.joydigital.in/website-for-pest-control",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/website-for-pest-control",
    title: "Pest Control Website Design & SEO Services | Joy Digital",
    description: "High-converting website design & local SEO for pest control companies. Drive emergency calls, WhatsApp bookings & qualified leads. Get a free audit today!",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Pest Control Website Design & SEO Services Joy Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Website Design & SEO Services | Joy Digital",
    description: "High-converting website design & local SEO for pest control companies. Drive emergency calls, WhatsApp bookings & qualified leads. Get a free audit today!",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.joydigital.in/website-for-pest-control#service",
      "name": "Pest Control Website Design & SEO Services",
      "serviceType": "Pest Control Web Development & Local SEO Lead Marketing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Joy Digital",
        "image": "https://www.joydigital.in/assets/images/logo.webp",
        "telephone": "+919080026133",
        "url": "https://www.joydigital.in",
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Old Perungalathur",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600063",
          "addressCountry": "IN"
        }
      },
      "description": "Custom website design and local SEO for pest control companies, termite exterminators, bed bug specialists, and commercial pest managers. Features 1-tap emergency calling, WhatsApp lead capture, and Google Maps ranking.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "1200",
        "highPrice": "2800",
        "offerCount": "2"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.joydigital.in/website-for-pest-control#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does a custom website help pest control companies get more leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high-converting exterminator website provides instant 1-tap mobile calling, interactive service area coverage maps, and online inspection scheduling—turning high-intent emergency searches into direct client phone calls."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate emergency WhatsApp booking for exterminators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build custom lead generation hooks allowing residential and commercial clients to instantly send photos of pest damage (termite tubing, bed bug signs) straight to your WhatsApp support desk."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize local SEO for 'pest control near me' searches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We create location-specific service pages, implement LocalBusiness schema markup, and optimize Google Business Profile citations to help your extermination services rank on top of Google Maps."
          }
        }
      ]
    }
  ]
};

export default async function PestControlWebPage() {
  const post1 = await getPostBySlug("5-website-features-pest-control-companies-leads");
  const relatedBlogPosts = [post1].filter((p): p is NonNullable<typeof p> => p !== null);

  const comparisonTable = (
    <section className="py-16 lg:py-24 bg-[#FAF9FF] border-b border-[#E9E4F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            Performance &amp; Conversion Comparison
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Why Choose Joy Digital for Pest Control Web Design?
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-normal">
            Compare generic web templates with our custom high-converting Next.js architecture.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] bg-slate-50/80">
                  <th className="py-4 px-6 text-xs font-extrabold text-primary-dark uppercase tracking-wider w-1/4">
                    Features
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider w-3/8">
                    Generic Website
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold text-accent uppercase tracking-wider w-3/8 bg-purple-50/60 border-l border-[#E5E7EB]">
                    <div className="flex items-center gap-1.5">
                      <span>Joy Digital Pest Control Solution</span>
                      <span className="bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-primary-dark">
                    Mobile Speed
                  </td>
                  <td className="py-4 px-6 text-rose-500 font-medium">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-xmark text-rose-400 shrink-0" />
                      <span>Slow (3s+ load delay)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-purple-50/20 border-l border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-500 shrink-0" />
                      <span>Sub-1.5s Ultra-Fast Next.js</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-primary-dark">
                    Emergency CTAs
                  </td>
                  <td className="py-4 px-6 text-rose-500 font-medium">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-xmark text-rose-400 shrink-0" />
                      <span>Basic email forms</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-purple-50/20 border-l border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-500 shrink-0" />
                      <span>1-Tap Mobile Call &amp; WhatsApp Sticky Hooks</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-primary-dark">
                    Search Engine SEO
                  </td>
                  <td className="py-4 px-6 text-rose-500 font-medium">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-xmark text-rose-400 shrink-0" />
                      <span>Basic meta tags only</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-purple-50/20 border-l border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-500 shrink-0" />
                      <span>Local Schema Markup &amp; Google Maps Integration</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-primary-dark">
                    Lead Capture
                  </td>
                  <td className="py-4 px-6 text-rose-500 font-medium">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-xmark text-rose-400 shrink-0" />
                      <span>Standard contact box</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-purple-50/20 border-l border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-500 shrink-0" />
                      <span>3-Step Pest Inspection Booking Funnel</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ServicePageTemplate
      serviceName="Website for Pest Control"
      heroTitle="High-Converting Website Design & SEO for Pest Control Companies"
      heroSubtitle="Turn urgent pest infestations into direct phone calls, instant WhatsApp bookings, and emergency inspection requests. We engineer ultra-fast, mobile-friendly Next.js websites for residential & commercial pest exterminators."
      leadSource="Website for Pest Control Landing Page"
      heroCtaText="Get Free Pest Control Web Quote"
      canonicalUrl="https://www.joydigital.in/website-for-pest-control"
      overviewTitle="Why Most Pest Control Websites Fail to Convert Emergency Calls (And How We Fix It)"
      overviewContent={
        <div className="space-y-6">
          <p>
            When homeowners or restaurant managers discover termites, bed bugs, cockroaches, or rodents, they act with extreme urgency. They search Google for immediate exterminators and choose the website that loads instantly, displays clear treatment packages, and offers 1-tap WhatsApp or phone contact.
          </p>
          <p>
            Unfortunately, many pest control websites suffer from slow mobile speeds, missing service area breakdowns, unorganized treatment packages, and lack of immediate emergency contact buttons—causing high-intent leads to bounce to competitors.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">How Joy Digital Builds High-Converting Pest Control Websites</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>1-Tap Emergency Call & WhatsApp Button</strong>: Connect instantly on mobile</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Free Inspection Request Form</strong>: Simple 3-step property inspection booking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Google Business Profile & Maps SEO</strong>: Rank top for &apos;Pest control near me&apos;</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Sub-1.5s Load Speeds</strong>: Ultra-fast serverless Next.js architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Eco-Friendly & Safe Certification Badges</strong>: Build instant customer trust</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Commercial B2B Maintenance Plans</strong>: Contracts for hotels, restaurants & offices</span>
              </li>
            </ul>
          </div>
          <p>
            At Joy Digital, we combine expert <Link href="/website-development" className="text-primary font-bold hover:underline">custom web development</Link> with localized <Link href="/local-seo-services" className="text-primary font-bold hover:underline">pest control SEO</Link> and <Link href="/google-business-profile-setup" className="text-primary font-bold hover:underline">Google Maps local citation setups</Link> to help exterminators generate daily customer inquiries.
          </p>
        </div>
      }
      benefitsTitle="10 Essential Features We Build for Pest Control Websites"
      benefitsSubtitle="Engineered to handle urgent service requests, build chemical-safety trust, and capture daily extermination leads."
      benefits={[
        {
          icon: "fa-solid fa-phone-flip",
          title: "1. 1-Tap Emergency Mobile Call Hook",
          description: "Sticky click-to-call and WhatsApp buttons on mobile devices so urgent customers can reach your desk in 1 click.",
        },
        {
          icon: "fa-solid fa-clipboard-list",
          title: "2. Free Property Inspection Form",
          description: "Interactive quote form capturing pest type (Termites, Bed Bugs, Cockroaches, Rodents), property type (Residential/Commercial), and city.",
        },
        {
          icon: "fa-solid fa-bug",
          title: "3. Specialized Treatment Service Pages",
          description: "Dedicated landing pages for Anti-Termite Piping, Herbal Cockroach Gel, Thermal Bed Bug Treatment, and Mosquito Control.",
        },
        {
          icon: "fa-solid fa-building-shield",
          title: "4. Commercial AMC Contract Showcase",
          description: "B2B service package sections for restaurants, food processing plants, IT parks, warehouses, and hotel chains.",
        },
        {
          icon: "fa-solid fa-leaf",
          title: "5. Eco-Friendly & Odorless Badges",
          description: "Highlight child-safe, pet-friendly, non-toxic, and odorless chemical certifications to reassure residential families.",
        },
        {
          icon: "fa-solid fa-map-location-dot",
          title: "6. Neighborhood Service Area Maps",
          description: "Interactive coverage map and city list helping customers verify you service their specific locality.",
        },
        {
          icon: "fa-solid fa-star",
          title: "7. Customer Testimonials & Case Photos",
          description: "Showcase verified Google customer reviews and before-and-after inspection photos to build credibility.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "8. Sub-1.5s Mobile Load Speed",
          description: "Ultra-fast Next.js architecture ensuring zero mobile lag when visitors search in urgent pest situations.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-location",
          title: "9. Local 'Pest Control Near Me' SEO",
          description: "Target high-intent search terms like 'Best termite treatment company near me' and 'Bed bug exterminator'.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "10. Warranty & Service Guarantee Showcase",
          description: "Highlight 1-Year to 5-Year Termite Service Warranties and Free Retreatment Guarantees clearly.",
        },
      ]}
      afterBenefitsSection={comparisonTable}
      processTitle="Our 6-Step Pest Control Website Engineering Process"
      processSubtitle="A smooth roadmap from initial consultation to active lead generation on Google."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Service & Target Area Audit",
          description: "We analyze your extermination services, chemical certifications, target cities, and sales inquiry workflow.",
        },
        {
          step: "2",
          icon: "fa-solid fa-sitemap",
          title: "Funnel & Local SEO Mapping",
          description: "We map treatment category layouts, inspection booking forms, and high-intent local search keywords.",
        },
        {
          step: "3",
          icon: "fa-solid fa-paintbrush",
          title: "Custom Responsive UI/UX Design",
          description: "We design clean desktop and mobile interface mockups with emergency CTAs and brand colors.",
        },
        {
          step: "4",
          icon: "fa-solid fa-code",
          title: "Next.js Serverless Build",
          description: "We build your website on serverless Next.js frameworks for sub-1.5s page load speed and smooth mobile performance.",
        },
        {
          step: "5",
          icon: "fa-solid fa-chart-line",
          title: "Local Schema & Maps Setup",
          description: "We implement LocalBusiness and Service schema markup, optimize Google Business Profile, and sync lead forms.",
        },
        {
          step: "6",
          icon: "fa-solid fa-rocket",
          title: "Launch & Google Indexing",
          description: "We launch live on your custom domain, submit XML sitemaps to Google Search Console, and verify local map presence.",
        },
      ]}
      pricingTitle="Transparent Pricing Packages for Pest Control Companies"
      pricingSubtitle="Get a modern, fast exterminator website with zero hidden monthly platform fees."
      pricingTiers={[
        {
          name: "Local Exterminator Plan",
          price: "$1,200",
          period: "one-time ($600 USD)",
          description: "Perfect for local pest control contractors, termite experts, and city service teams.",
          features: [
            "1-5 Custom Responsive Pages",
            "Free Inspection Lead Capture Form",
            "Emergency WhatsApp & Direct Call Buttons",
            "Termite, Cockroach & Rodent Service Sections",
            "Google Maps Local Citation & Area Map Setup",
            "Basic On-Page SEO & Schema Markup",
            "1 Year Priority Technical Support",
          ],
          ctaText: "Choose Exterminator Plan",
        },
        {
          name: "Enterprise Commercial Portal",
          price: "$2,400",
          period: "one-time ($1,400 USD)",
          description: "Recommended for commercial pest control companies, multi-city franchises, and B2B AMC vendors.",
          isPopular: true,
          features: [
            "Up to 12 Advanced Pages & Locality Landing Pages",
            "Commercial AMC Package & Corporate Inquiry Forms",
            "Eco-Safe & Government Certification Showcase",
            "Interactive Service Coverage Area Map",
            "Full Local & Regional SEO Architecture",
            "Google Analytics 4 & Search Console Sync",
            "1 Year Technical Support & Maintenance",
          ],
          ctaText: "Choose Commercial Plan",
        },
      ]}
      faqs={[
        {
          question: "How does a custom website help pest control companies get more leads?",
          answer: "A high-converting exterminator website provides instant 1-tap mobile calling, interactive service area coverage maps, and online inspection scheduling—turning high-intent emergency searches into direct client phone calls.",
        },
        {
          question: "Can you integrate emergency WhatsApp booking for exterminators?",
          answer: "Yes, we build custom lead generation hooks allowing residential and commercial clients to instantly send photos of pest damage (termite tubing, bed bug signs) straight to your WhatsApp support desk.",
        },
        {
          question: "How do you optimize local SEO for 'pest control near me' searches?",
          answer: "We create location-specific service pages, implement LocalBusiness schema markup, and optimize Google Business Profile citations to help your extermination services rank on top of Google Maps.",
        },
        {
          question: "How much does a website for a pest control company cost?",
          answer: "Our pest control website packages start from $1,200 USD for local exterminators up to $2,800 USD for multi-city commercial pest management portals.",
        },
        {
          question: "Can customers request emergency inspections directly through the website?",
          answer: "Yes! We build emergency inspection forms and sticky WhatsApp/call buttons where customers submit pest details and location, routed directly to your mobile phone.",
        },
        {
          question: "Will the website help our pest control agency rank on Google Maps?",
          answer: "Yes. Every website we build includes LocalBusiness schema markup, geotagged content tags, sub-1.5s page load speed, and local SEO setup to help you rank in Google Maps.",
        },
        {
          question: "Can we list commercial B2B annual maintenance contracts (AMC)?",
          answer: "Yes! We design dedicated B2B commercial sections for hotels, restaurants, factories, and offices with custom corporate quote request forms.",
        },
        {
          question: "Are there any hidden monthly hosting or maintenance fees?",
          answer: "No. You own 100% of your website code and custom domain. There are zero hidden monthly platform charges.",
        },
      ]}
      schemaMarkup={pageSchema}
      crossLinks={[
        { href: "/custom-website-development", label: "Custom Website Development" },
        { href: "/website-development", label: "Web Development Services" },
        { href: "/local-seo-services", label: "Local SEO Solutions" },
        { href: "/google-business-profile-setup", label: "Google Business Setup" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact Sales Team" },
      ]}
      relatedBlogPosts={relatedBlogPosts}
    />
  );
}
