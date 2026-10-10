import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "SEO and Website for Insurance Agents in India | Joy Digital",
  description: "Custom website design & local SEO for insurance agents in India. Rank on Google, generate policy leads, and build client trust with Joy Digital.",
  alternates: {
    canonical: "https://joydigital.in/website-for-insurance-agents",
  },
  openGraph: {
    type: "website",
    url: "https://joydigital.in/website-for-insurance-agents",
    title: "SEO and Website for Insurance Agents in India | Joy Digital",
    description: "Custom website design & local SEO for insurance agents in India. Rank on Google, generate policy leads, and build client trust with Joy Digital.",
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "SEO and Website for Insurance Agents in India Joy Digital" }],
  },
};

const INSURANCE_FAQS = [
  {
    question: "Why do insurance agents in India need a dedicated website and SEO?",
    answer: "Most policy buyers in India search Google before purchasing health, term, or life policies. A dedicated website with local SEO establishes financial credibility, showcases your IRDAI credentials, and captures inbound leads directly instead of relying solely on cold calls or referral networks.",
  },
  {
    question: "How does local SEO help insurance advisors rank on Google Maps?",
    answer: "We optimize your Google Business Profile and local landing pages for high-intent keywords like 'Health insurance agent near me', 'LIC advisor in [City]', and 'Star Health consultant'. This puts your business directly in the Google Maps 3-Pack where local customers call you first.",
  },
  {
    question: "Can prospective clients calculate policy premiums and submit quotes online?",
    answer: "Yes. We build interactive premium quote estimators where clients select sum assured, age bracket, and policy type (health, life, motor) which delivers their inquiry directly to your phone and WhatsApp.",
  },
  {
    question: "Can the website help attract NRI clients for policies in India?",
    answer: "Yes. We engineer dedicated NRI insurance landing pages optimized for overseas searches by non-resident Indians looking for parents' health insurance, term plans, and tax savings under 80C/80D in India.",
  },
  {
    question: "What is the cost of website design and SEO for insurance agents in India?",
    answer: "Our website and SEO packages for Indian insurance advisors start from $1,200 USD for individual advisors up to $2,800 USD for multi-branch brokerages with full calculator workflows and local SEO setup.",
  },
];

export default async function InsuranceWebPage() {
  const post1 = await getPostBySlug("insurance-agent-website-ai-lead-generation");
  const post2 = await getPostBySlug("digital-marketing-strategy-small-businesses");
  const post3 = await getPostBySlug("local-seo-tips-for-small-businesses");
  const relatedBlogPosts = [post1, post2, post3].filter((p): p is NonNullable<typeof p> => p !== null);

  const pageGraphSchema = buildPageGraphSchema({
    url: "https://joydigital.in/website-for-insurance-agents",
    title: "SEO and Website for Insurance Agents in India | Joy Digital",
    description: "Custom website design & local SEO for insurance agents in India. Rank on Google, generate policy leads, and build client trust with Joy Digital.",
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "Website for Insurance Agents", item: "https://joydigital.in/website-for-insurance-agents" },
    ],
    service: {
      name: "SEO and Website for Insurance Agents in India",
      description: "Custom website design & local SEO for insurance agents, LIC advisors, and brokers in India.",
      serviceType: "Insurance Web Development & SEO",
    },
    faqs: INSURANCE_FAQS,
  });

  return (
    <ServicePageTemplate
      serviceName="Website for Insurance Agents"
      heroTitle="SEO and Website for Insurance Agents in India"
      heroSubtitle="Generate qualified health, term, vehicle, and NRI insurance leads across India. We engineer fast, trustworthy Next.js websites and high-ranking local SEO for insurance agents, LIC advisors, and brokerages."
      leadSource="Website for Insurance Agents Landing Page"
      heroCtaText="Get Free Insurance Web Quote"
      overviewTitle="Why Most Insurance Agent Websites Fail to Capture Quality Policy Leads (And How We Fix It)"
      overviewContent={
        <div className="space-y-6">
          <p>
            When families, business owners, or overseas NRIs search for insurance policies, they look for clarity, financial trust, policy comparisons, tax benefits, and easy consultation scheduling.
          </p>
          <p>
            Unfortunately, many insurance agent websites look untrustworthy, load slowly, hide policy benefits, and lack interactive premium quote forms or instant WhatsApp inquiry buttons.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 my-6">
            <h3 className="text-lg font-bold text-primary-dark">How Joy Digital Builds High-Converting Insurance Agent Websites</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Instant Policy Premium Quote Estimator</strong>: Health, life & vehicle inputs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>NRI & Expat Insurance Portal</strong>: Specialized term & health policy advisories</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Policy Comparison Matrix</strong>: Coverage, sum assured & rider options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Local & Global Financial SEO Strategy</strong>: Rank for high-value policy keywords</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Sub-1.5s Load Speeds</strong>: Ultra-fast serverless Next.js architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold"><i className="fa-solid fa-check-circle" /></span>
                <span><strong>Advisor WhatsApp Routing</strong>: Instant client policy consultation</span>
              </li>
            </ul>
          </div>
          <p>
            At Joy Digital, we combine financial branding with <Link href="/website-development" className="text-primary font-bold hover:underline">custom web engineering</Link>, <Link href="/seo-services" className="text-primary font-bold hover:underline">insurance search optimization</Link>, and <Link href="/google-business-profile-setup" className="text-primary font-bold hover:underline">Google Business Profile setup</Link> to help agents scale policy sales.
          </p>
        </div>
      }
      benefitsTitle="10 Essential Features We Build for Insurance Agent Websites"
      benefitsSubtitle="Designed to build financial credibility, explain policy benefits, and capture qualified policy leads."
      benefits={[
        {
          icon: "fa-solid fa-calculator",
          title: "1. Policy Premium Quote Form",
          description: "Allow clients to enter age, sum assured, coverage type, and city for instant customized policy recommendations.",
        },
        {
          icon: "fa-solid fa-plane-departure",
          title: "2. NRI & Overseas Expat Insurance Section",
          description: "Target non-resident Indians with specialized term insurance, parents health insurance, and global travel policies.",
        },
        {
          icon: "fa-solid fa-heart-pulse",
          title: "3. Health, Term & Family Policy Hubs",
          description: "Dedicated pages detailing cashless hospital networks, critical illness coverage, tax savings (80C/80D), and maturity benefits.",
        },
        {
          icon: "fa-solid fa-car-burst",
          title: "4. Vehicle, Commercial & Business Insurance",
          description: "Showcase motor insurance, zero-depreciation coverage, shopkeeper policies, and marine/transit risk protection.",
        },
        {
          icon: "fa-solid fa-hand-holding-dollar",
          title: "5. Claims Settlement Support & Assistance Hub",
          description: "Reassure policyholders with a clear 24/7 claims assistance guide and dedicated helpline contact details.",
        },
        {
          icon: "fa-solid fa-user-shield",
          title: "6. Advisor Credentials & MDRT Achievement Showcase",
          description: "Highlight advisor experience, IRDAI license details, total claims settled, and industry recognitions.",
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: "7. Interactive Policy Comparison Table",
          description: "Help clients compare premium rates, waiting periods, room rent capping, and co-payment clauses clearly.",
        },
        {
          icon: "fa-brands fa-whatsapp",
          title: "8. One-Tap Advisor WhatsApp Link",
          description: "Instant button connecting clients to your desk pre-filled with: 'Hi, I need a consultation for health/term insurance policy.'",
        },
        {
          icon: "fa-solid fa-magnifying-glass-location",
          title: "9. Financial SEO Keyword Strategy",
          description: "Target high-intent terms like 'Best health insurance agent Chennai', 'NRI term insurance advisor', and 'LIC agent near me'.",
        },
        {
          icon: "fa-solid fa-calendar-check",
          title: "10. Online Policy Renewal Reminder Workflow",
          description: "Simple lead capture forms allowing existing clients to request policy renewal assistance or coverage upgrades.",
        },
      ]}
      processTitle="Our 6-Step Insurance Web Engineering Roadmap"
      processSubtitle="A proven roadmap from policy audit to live client lead acquisition."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-clipboard-user",
          title: "Advisor & Target Audit",
          description: "We audit your insurance portfolio, preferred tie-ups (Star Health, HDFC Ergo, LIC, ICICI Prudential), and lead workflow.",
        },
        {
          step: "2",
          icon: "fa-solid fa-sitemap",
          title: "Taxonomy & Keyword Structure",
          description: "We structure policy category hubs, quote calculators, NRI expat pages, and financial SEO term maps.",
        },
        {
          step: "3",
          icon: "fa-solid fa-pen-ruler",
          title: "Trustworthy UI/UX Design",
          description: "We design clean, authoritative desktop and mobile interface mockups with clear call-to-action buttons.",
        },
        {
          step: "4",
          icon: "fa-solid fa-code",
          title: "Next.js High-Speed Build",
          description: "We build your platform on serverless Next.js frameworks for sub-1.5s page load speeds across global networks.",
        },
        {
          step: "5",
          icon: "fa-solid fa-chart-line",
          title: "Financial Schema & Lead Sync",
          description: "We implement FinancialService schema markup, configure GA4 event tracking, and sync quote leads to your email.",
        },
        {
          step: "6",
          icon: "fa-solid fa-rocket",
          title: "Launch & Google Indexing",
          description: "We launch live on your custom domain, submit XML sitemaps to Google Search Console, and verify search engine indexing.",
        },
      ]}
      pricingTitle="Transparent Pricing Packages for Insurance Agents"
      pricingSubtitle="Get a modern, high-converting insurance portal with zero ongoing monthly software commissions."
      pricingTiers={[
        {
          name: "Individual Advisor Plan",
          price: "$1,200",
          period: "one-time ($1,200 USD)",
          description: "Ideal for individual insurance agents, LIC advisors, and independent health insurance consultants.",
          features: [
            "1-5 Custom Responsive Pages",
            "Policy Quote Request Form",
            "Health & Term Insurance Showcase",
            "WhatsApp & Phone Direct Links",
            "Advisor Bio & License Display",
            "Google Maps Local Citation Setup",
            "Basic Financial SEO & Schema Markup",
            "1 Year Priority Technical Support",
          ],
          ctaText: "Choose Individual Advisor Plan",
        },
        {
          name: "Enterprise Agency Portal",
          price: "$1,800",
          period: "one-time ($1,800 USD)",
          description: "Recommended for insurance brokerages, financial planning firms, and NRI policy advisories.",
          isPopular: true,
          features: [
            "Up to 15 Custom Policy & Service Pages",
            "Interactive Policy Premium Calculator",
            "NRI & Overseas Expat Dedicated Section",
            "Claims Assistance & Download Hub",
            "Policy Comparison Matrix Widget",
            "Full Financial SEO & Search Architecture",
            "Google Analytics 4 & Search Console Sync",
            "1 Year Technical Support & Maintenance",
          ],
          ctaText: "Choose Enterprise Agency Plan",
        },
      ]}
      faqs={INSURANCE_FAQS}
      schemaMarkup={pageGraphSchema}
      crossLinks={[
        { href: "/website-development", label: "Custom Web Development" },
        { href: "/seo-services", label: "Financial SEO Services" },
        { href: "/local-seo-services", label: "Local Map SEO" },
        { href: "/google-business-profile-setup", label: "Google Business Setup" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/contact", label: "Contact Us" },
      ]}
      relatedBlogPosts={relatedBlogPosts}
    />
  );
}

