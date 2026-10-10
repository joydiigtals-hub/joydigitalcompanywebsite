import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import Link from "next/link";
import SolarLeadForm from "@/components/ui/SolarLeadForm";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "SEO & Website for Solar Installers India | Joy Digital",
  description: "Website design & local SEO for solar installers and EPC companies in India. Rank on Google, generate rooftop solar inquiries & C&I leads with Joy Digital.",
  alternates: {
    canonical: "https://joydigital.in/website-for-solar-companies",
  },
  openGraph: {
    type: "website",
    url: "https://joydigital.in/website-for-solar-companies",
    title: "SEO & Website for Solar Installers India | Joy Digital",
    description: "Website design & local SEO for solar installers and EPC companies in India. Rank on Google, generate rooftop solar inquiries & C&I leads with Joy Digital.",
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "SEO & Website for Solar Installers India Joy Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Website for Solar Installers India | Joy Digital",
    description: "Website design & local SEO for solar installers and EPC companies in India. Rank on Google, generate rooftop solar inquiries & C&I leads with Joy Digital.",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

const SOLAR_FAQS = [
  {
    question: "How does SEO help solar installers in India get more inquiries?",
    answer: "When homeowners and factory owners look to install rooftop solar in India, they search Google for 'solar rooftop installer near me', 'PM Surya Ghar registered solar vendor', or 'industrial solar EPC [City]'. By optimizing your Google Business Profile and ranking your city landing pages in the top 3 spots, you receive direct phone calls and site inspection requests without paying third-party lead aggregator fees.",
  },
  {
    question: "Why should solar EPCs target Commercial & Industrial (C&I) clients instead of residential?",
    answer: "C&I solar projects (50KW - 1MW+) offer significantly higher profit margins, long-term PPA contracts, and lower acquisition costs compared to selling multiple small 3KW residential systems.",
  },
  {
    question: "Can you build custom Solar ROI and PM Surya Ghar subsidy calculators?",
    answer: "Yes, we specialize in building dynamic Next.js React widgets that allow clients to calculate subsidy savings, net-metering returns, payback periods, and megawatt-scale yield directly on your portal.",
  },
  {
    question: "Do you offer global SEO for utility-scale developers and clean energy EPCs?",
    answer: "Absolutely. We engineer multi-region, high-speed architectures so your firm ranks in top domestic and international markets for high-value terms like 'Solar EPC Contractors' or 'Utility-Scale Solar Developers'.",
  },
];

export default function SolarWebPage() {
  const pageGraphSchema = buildPageGraphSchema({
    url: "https://joydigital.in/website-for-solar-companies",
    title: "SEO & Website for Solar Installers India | Joy Digital",
    description: "Website design & local SEO for solar installers and EPC companies in India. Rank on Google, generate rooftop solar inquiries & C&I leads with Joy Digital.",
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "Website for Solar Companies", item: "https://joydigital.in/website-for-solar-companies" },
    ],
    service: {
      name: "SEO and Website Development for Solar Installers in India",
      description: "Custom website design and search engine optimization for solar EPCs, rooftop installers, and renewable energy companies.",
      serviceType: "Solar Web Engineering & Local SEO",
    },
    faqs: SOLAR_FAQS,
  });

  return (
    <ServicePageTemplate
      serviceName="Commercial Solar EPC Web Development"
      heroTitle="SEO & Website Development for Solar Installers & EPCs in India"
      heroSubtitle="Dominate the clean energy market with sub-1.5s serverless Next.js speed, high-converting rooftop & C&I solar funnels, and targeted Google search rankings for solar installers and commercial EPCs across India and worldwide."
      leadSource="Global B2B Solar EPC Landing Page"
      customLeadForm={<SolarLeadForm />}
      overviewTitle="Why Traditional Solar Websites Fail to Convert Enterprise Buyers"
      overviewContent={
        <div className="space-y-6">
          <p>
            As clean energy adoption surges across India and global markets, utility developers, commercial factories, and residential homeowners look for trusted, credible solar contractors online. They demand clear payback numbers, subsidy assistance, and rapid site survey bookings.
          </p>
          <p>
            If your web presence suffers from slow loading speeds, generic messaging, or lacks robust <strong>SEO for Solar Installers in India</strong>, you are forfeiting high-value rooftop and commercial contracts to competitors with better digital visibility.
          </p>

          {/* DEDICATED SECTION: SEO for Solar Installers in India */}
          <div className="bg-[#FAF9FF] border-2 border-[#7C3AED]/20 rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Targeted Growth Strategy
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              SEO for Solar Installers in India: Dominate Local Rooftop &amp; Industrial Demand
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              India&apos;s solar market is expanding rapidly under initiatives like the <strong>PM Surya Ghar Muft Bijli Yojana</strong> and commercial decarbonization goals. Our specialized solar SEO and web development strategy helps Indian EPCs capture high-intent inquiries in their target cities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 font-medium pt-2">
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-map-location-dot text-[#7C3AED] text-base shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Google Maps 3-Pack Optimization</strong>
                  Rank #1 for &quot;solar rooftop installer near me&quot; and &quot;solar company in [City]&quot; to capture local commercial calls.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-calculator text-[#7C3AED] text-base shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Subsidy &amp; Net-Metering Calculators</strong>
                  Interactive PM Surya Ghar subsidy tables and DISCOM net-metering ROI estimators that convert clicks into leads.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-industry text-[#7C3AED] text-base shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">C&amp;I Industrial Lead Architecture</strong>
                  Landing pages crafted for textile mills, manufacturing plants, and cold storages seeking OPEX / CAPEX rooftop systems.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <i className="fa-brands fa-whatsapp text-emerald-600 text-base shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Direct WhatsApp Site Survey Routing</strong>
                  One-tap site inspection requests connected straight to your engineering team with pre-filled capacity requirements.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">How We Engineer C&amp;I Rooftop Solar Lead Generation</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Solar PPA &amp; ROI Estimator Widgets</strong>: Dynamic financial modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Utility-Scale Solar Project Portals</strong>: High-resolution case study architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Enterprise Local &amp; Global SEO</strong>: Dominating search terms for EPC contracts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Sub-1.5s Load Speeds</strong>: Ultra-fast serverless Next.js rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Tier-1 Equipment Catalogs</strong>: TOPCon &amp; Bifacial module databases</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Corporate ESG Integration</strong>: Streamlined global compliance guides</span>
              </li>
            </ul>
          </div>
        </div>
      }
      benefitsTitle="B2B Capabilities for Utility-Scale & Commercial Solar"
      benefitsSubtitle="Every component is engineered to build technical credibility, handle complex data, and drive C&I site audit requests."
      benefits={[
        {
          icon: "fa-solid fa-chart-pie",
          title: "1. Commercial ROI & Payback Calculators",
          description: "Deploy advanced Solar PPA & ROI Estimator Widgets that allow enterprise clients to calculate megawatt-scale yield, tax incentives, and capital payback periods.",
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "2. Technical Scope & Grid Architecture",
          description: "Interactive visual diagrams breaking down HT/LT substation connections, net-metering approvals, bi-directional meters, and transformer sync.",
        },
        {
          icon: "fa-solid fa-solar-panel",
          title: "3. Tier-1 Hardware Specification Index",
          description: "Engineered catalog filters for mono-PERC, TOPCon bifacial modules, string inverters, string combiners, and lightning protection hardware.",
        },
        {
          icon: "fa-solid fa-building-circle-check",
          title: "4. Multi-Megawatt Portfolio Showcase",
          description: "High-resolution case study layouts featuring generation charts, industrial rooftop imagery, client testimonials, and verified CO2 reduction statistics.",
        },
        {
          icon: "fa-solid fa-earth-americas",
          title: "5. Multi-City & Global Clean Energy SEO",
          description: "Target commercial keywords across industrial belts like 'Solar EPC Contractors Gujarat', 'Commercial Solar Tamil Nadu', or global B2B tender terms.",
        },
        {
          icon: "fa-solid fa-bolt-lightning",
          title: "6. Instant Site Audit & Quotation Funnel",
          description: "Convert high-value decision-makers with frictionless lead capture forms that collect roof area, monthly electricity bill, and sanction load.",
        },
      ]}
      processTitle="Our 6-Step Clean Energy Digital Engineering Roadmap"
      processSubtitle="A proven roadmap from technical asset audit to global pipeline generation."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-magnifying-glass",
          title: "Clean Energy Market & Keyword Audit",
          description: "We audit your project footprint, target geographies, and analyze search competition across commercial rooftop and utility sectors.",
        },
        {
          step: "2",
          icon: "fa-solid fa-sitemap",
          title: "B2B Information Architecture",
          description: "We design multi-level taxonomy for equipment specs, industrial sector solutions (textile, auto, pharma), and ROI calculators.",
        },
        {
          step: "3",
          icon: "fa-solid fa-pen-ruler",
          title: "High-Performance Clean Energy UI/UX",
          description: "We design authoritative, modern interfaces with interactive dark/light technical schemes that resonate with enterprise CFOs.",
        },
        {
          step: "4",
          icon: "fa-solid fa-code",
          title: "Next.js Static & Serverless Build",
          description: "We build your platform on serverless Next.js frameworks for sub-1.5s page load speeds across global networks.",
        },
        {
          step: "5",
          icon: "fa-solid fa-shield-halved",
          title: "Lead Capture & CRM Synchronization",
          description: "We connect form submissions directly to your sales pipeline, configure conversion tracking, and verify data security.",
        },
        {
          step: "6",
          icon: "fa-solid fa-rocket",
          title: "Deployment & Global Search Indexing",
          description: "We deploy to high-speed global edge networks, submit sitemaps to Google Search Console, and launch local map ranking workflows.",
        },
      ]}
      pricingTitle="Transparent Engineering Packages for Solar Companies"
      pricingSubtitle="Select the scale that matches your installation pipeline, from regional EPCs to multi-megawatt developers."
      pricingTiers={[
        {
          name: "Regional Solar EPC Lead Engine",
          price: "$750 USD",
          period: "one-time ($1,200 USD)",
          description: "Perfect for regional solar installers, rooftop contractors, and PM Surya Ghar vendors.",
          features: [
            "Up to 8 Custom Responsive Pages",
            "Solar Savings & Roof Area Lead Form",
            "Hardware & Inverter Catalog",
            "Google Maps Local SEO Setup",
            "WhatsApp Instant Lead Routing",
            "Sub-1.5s Serverless Next.js Speed",
            "1 Year Priority Technical Support",
          ],
          ctaText: "Start Regional Growth",
        },
        {
          name: "Global Commercial EPC & Utility Portal",
          price: "$1,600 USD",
          period: "one-time ($2,800 USD)",
          description: "The ultimate architecture for utility-scale developers and global EPC contractors.",
          isPopular: true,
          features: [
            "Unlimited Scalable Page Architecture",
            "Advanced Solar PPA & ROI Estimator Widgets",
            "Utility-Scale Solar Project Portals",
            "Corporate ESG Compliance Integrations",
            "Global B2B Clean Energy SEO Architecture",
            "Enterprise CRM & Analytics Synchronization",
            "1 Year Priority Technical Support & Maintenance",
          ],
          ctaText: "Deploy Global EPC Portal",
        },
      ]}
      faqs={SOLAR_FAQS}
      schemaMarkup={pageGraphSchema}
      crossLinks={[
        { href: "/custom-website-development", label: "Custom B2B Web Systems" },
        { href: "/seo-services", label: "Global Enterprise SEO" },
        { href: "/ai-search-optimization", label: "AI Search Optimization (GEO)" },
      ]}
    />
  );
}
