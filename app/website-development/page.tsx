import React from "react";
import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Company | Professional Website Services | Joy Digital",
  description: "Joy Digital is a professional web development company building high-speed, SEO-ready websites that bring in organic leads. Request a free project audit today.",
  alternates: {
    canonical: "https://www.joydigital.in/website-development",
    languages: {
      "x-default": "https://www.joydigital.in/website-development",
      "en-us": "https://www.joydigital.in/us/website-development",
      "en-gb": "https://www.joydigital.in/uk/website-development",
      "en-ae": "https://www.joydigital.in/ae/website-development",
      "en-in": "https://www.joydigital.in/in/website-development",
    },
  },
  openGraph: {
    title: "Web Development Company | Professional Website Services | Joy Digital",
    description: "Joy Digital is a professional web development company building high-speed, SEO-ready websites that bring in organic leads. Request a free project audit today.",
    url: "https://www.joydigital.in/website-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | Professional Website Services | Joy Digital",
    description: "Joy Digital is a professional web development company building high-speed, SEO-ready websites that bring in organic leads. Request a free project audit today.",
  },
};

export default function WebDevPage() {
  return (
    <ServicePageTemplate
      serviceName="Website Development"
      heroTitle="Web Development Company for High-Performing Business Websites"
      heroSubtitle="We engineer clean, secure, and conversion-optimized websites that turn visitors into customers. Fast performance, technical SEO, and scalable code."
      leadSource="Website Development Landing Page"
      heroCtaText="Get My Website Quote"
      overviewTitle="Professional Services from a Top Website Development Company"
      overviewContent={
        <div className="space-y-6">
          <p>
            In today&apos;s digital economy, partnering with an experienced web engineering agency is essential to scale your online presence. Joy Digital provides end-to-end web development services, custom React/Next.js architecture, and technical search engine optimization designed to generate recurring client inquiries globally.
          </p>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between my-4 text-xs">
            <span className="font-semibold text-slate-800">Need a ground-up bespoke architecture or dedicated framework team?</span>
            <div className="flex gap-3 shrink-0">
              <Link href="/custom-website-development" className="text-accent underline font-bold hover:text-purple-700">Custom Website Development</Link>
              <span className="text-slate-300">|</span>
              <Link href="/nextjs-development-agency" className="text-accent underline font-bold hover:text-purple-700">Next.js Development Agency</Link>
            </div>
          </div>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">What is Website Design and Development?</h3>
          <p>
            Web design handles the visual and user experience (UI/UX) layout of your site, while web development covers the underlying front-end and back-end code engineering (HTML, CSS, JavaScript, Next.js) that makes the platform responsive, interactive, and fast.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Why Website Development is Important for Business Growth</h3>
          <p>
            Your website serves as your 24/7 digital storefront. Without a fast, modern, mobile-friendly platform, potential clients will choose your competitors. High-quality web development improves Google search indexing, satisfies Core Web Vitals, reduces bounce rates, and turns passive traffic into paying customers. For tailored solutions, see our <Link href="/custom-website-development" className="text-accent underline font-semibold">custom website development services</Link>.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">What is the Cost of Website Development in India?</h3>
          <p>
            Custom web platforms scale based on complexity. Starter setups begin at $1,200, while advanced enterprise web apps or online stores require bespoke milestone proposals. Joy Digital offers transparent flat-rate pricing with no hidden maintenance fees for our global clients.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">Which Language and Frameworks are Best for Modern Websites?</h3>
          <p>
            JavaScript and TypeScript paired with Next.js/React are the industry standard for modern architecture due to server-side rendering, SEO efficiency, and blazing speed. To explore dedicated React builds, consult our specialized <Link href="/nextjs-development-agency" className="text-accent underline font-semibold">Next.js development agency</Link> team.
          </p>
          <h3 className="text-lg font-bold text-primary-dark mt-8 mb-4">How to Find Clients and Leads for Website Development</h3>
          <p>
            To capture global B2B projects, companies must combine high-speed technical SEO landing pages, targeted direct outreach, and robust digital trust signals. We build the exact infrastructure you need to support these acquisition strategies.
          </p>
        </div>
      }
      benefitsTitle="Why Choose Our Custom Web Engineering Team?"
      benefitsSubtitle="We construct fast loading websites designed to capture enterprise leads."
      benefits={[
        {
          icon: "fa-solid fa-code",
          title: "Custom React/Next.js Architecture",
          description: "Clean, modular front-end component engineering with zero layout shifts or bloated page builder dependencies.",
        },
        {
          icon: "fa-solid fa-gauge-high",
          title: "Sub-Second Load Times",
          description: "Serverless static generation ensuring site speeds under 1.5 seconds for instant user engagement.",
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          title: "100% Mobile Responsiveness",
          description: "Fluid design tested across smart devices, ensuring grids and forms scale on all screen viewports.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-chart",
          title: "Built-In Technical SEO",
          description: "Pre-configured sitemaps, dynamic metadata, alt properties, canonical tags, and JSON-LD schema markup.",
        },
        {
          icon: "fa-solid fa-lock",
          title: "Enterprise Web Security",
          description: "Static pre-rendering protecting customer datasets from traditional database attack vectors.",
        },
        {
          icon: "fa-solid fa-file-contract",
          title: "Full Code & IP Ownership",
          description: "Clean TypeScript codebase handed over directly to your team upon launch with zero vendor lock-in.",
        },
      ]}
      processTitle="Our Agile Development Workflow"
      processSubtitle="How we systematically plan, design, code, and deploy your custom web platform."
      processSteps={[
        {
          step: "1",
          icon: "fa-solid fa-clipboard-list",
          title: "Discovery & Blueprint",
          description: "We analyze your business goals, target keywords, user journeys, and competitive landscape to draft a site blueprint.",
        },
        {
          step: "2",
          icon: "fa-solid fa-border-all",
          title: "UI/UX & Wireframing",
          description: "We build intuitive Figma layout wireframes for mobile and desktop screens to align visual hierarchy before coding.",
        },
        {
          step: "3",
          icon: "fa-solid fa-code",
          title: "Next.js Engineering",
          description: "We write clean, modular React/TypeScript code, integrating components, APIs, and optimizing image assets.",
        },
        {
          step: "4",
          icon: "fa-solid fa-rocket",
          title: "QA & Global Deployment",
          description: "We run browser compatibility tests, check speed performance scores, verify sitemaps, and deploy your site on global CDNs for maximum performance.",
        },
      ]}
      pricingTitle="Economical Website Development Tiers"
      pricingSubtitle="Select a package designed to scale your business profile. Zero hidden costs, transparent milestones."
      pricingTiers={[
        {
          name: "Starter Website",
          price: "₹25,000",
          description: "Perfect for new local service businesses wanting to establish professional authority online.",
          features: [
            "Custom responsive website",
            "Mobile optimization",
            "WhatsApp integration",
            "Lead Contact form",
            "Basic SEO setup",
            "Google Search Console sync",
            "XML Sitemap generated",
            "Google Analytics integration",
          ],
          ctaText: "Get Started",
        },
        {
          name: "Business Growth Website",
          price: "₹45,000",
          description: "Recommended for growing companies targeting local search rankings and active online client acquisition.",
          isPopular: true,
          features: [
            "Custom website layout",
            "Conversion-focused UI/UX",
            "SEO-ready architecture",
            "Advanced contact forms",
            "WhatsApp leads sync",
            "Search Console configuration",
            "Google Analytics event tracking",
            "Core Web Vitals speed tuning",
            "Basic content copywriting check",
            "Admin panel / CMS option",
          ],
          ctaText: "Request a Quote",
        },
        {
          name: "Website + SEO Growth",
          price: "Custom Quote",
          description: "Perfect for companies seeking persistent ranking growth, organic pipelines, and local lead dominance.",
          features: [
            "Custom website layout",
            "Technical SEO code audits",
            "Advanced On-page SEO setup",
            "High-intent keyword research",
            "Local SEO & maps optimizations",
            "Google Business Profile setups",
            "Comprehensive content strategy",
            "Monthly SEO retainer campaigns",
            "Index monitoring & audit fixes",
            "Google Search Console reporting",
          ],
          ctaText: "Talk to an SEO Expert",
        },
      ]}
      faqs={[
        {
          question: "What is the difference between web design and development?",
          answer: "Web design encompasses visual aesthetics, UI layout, and user experience. Web development is the technical engineering phase using code (Next.js, React) to turn designs into high-speed, dynamic web applications.",
        },
        {
          question: "Why is web development critical for business growth?",
          answer: "Your website is your central digital sales hub. A custom-developed website builds immediate brand authority, ranks globally on Google, operates 24/7, and generates consistent inquiries.",
        },
        {
          question: "What is the typical cost for custom web development?",
          answer: "The cost of web development with Joy Digital starts at $1,200 for standard business sites. Complex enterprise platforms or e-commerce stores are quoted based on specific feature requirements.",
        },
        {
          question: "Which language is best for website development?",
          answer: "JavaScript/TypeScript coupled with Next.js and React is considered the best language combination for modern web development. It delivers fast page rendering, server-side pre-rendering for SEO, and scalable component architecture.",
        },
        {
          question: "Which AI is best for website development?",
          answer: "The best AI tools for website development in 2026 include ChatGPT (GPT-4o) for logic and copy, Claude 3.5 Sonnet for complex code refactoring, Cursor AI for IDE auto-complete, and v0.dev for rapid UI component generation.",
        },
        {
          question: "How can businesses acquire global web clients?",
          answer: "To secure B2B projects globally, combine fast-loading Next.js architecture, targeted SEO landing pages, and proactive LinkedIn B2B networking.",
        },
        {
          question: "Why choose Joy Digital as your web engineering partner?",
          answer: "Joy Digital builds bespoke Next.js websites that load in under 1.5s, achieve 90+ Core Web Vitals scores, and include full Google Search Console indexing configuration to ensure your brand ranks globally.",
        },
      ]}
      crossLinks={[
        { href: "/web-design-services", label: "Web Design" },
        { href: "/seo-services", label: "SEO Services" },
        { href: "/local-seo-services", label: "Local SEO" },
      ]}
    />
  );
}
