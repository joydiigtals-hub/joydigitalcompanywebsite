
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import ClientScrollObserver from "@/components/ui/ClientScrollObserver";
import CountUpNumber from "@/components/ui/CountUpNumber";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedWaLink from "@/components/ui/TrackedWaLink";
import Header from "@/components/layout/Header";
import { Code2, SearchCheck, Target, Smartphone, PanelsTopLeft, Globe, Headset, ArrowRight } from "lucide-react";
import ModernHeroSection from "@/components/sections/ModernHeroSection";

const DigitalNetworkBackground = dynamic(() => import("@/components/ui/DigitalNetworkBackground"));
const IndustryTabs = dynamic(() => import("@/components/sections/IndustryTabs"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection"));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"));
const WorldwideServiceNetwork = dynamic(() => import("@/components/ui/WorldwideServiceNetwork"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const LeadForm = dynamic(() => import("@/components/ui/LeadForm"));
const Accordion = dynamic(() => import("@/components/ui/Accordion"));

export const HOME_FAQS = [
  {
    question: "How much does a custom website or web application cost?",
    answer: "Our web applications and business portals are quoted transparently based on project scope, starting at $1,200. Enterprise platforms and complex SaaS workflows receive bespoke milestone proposals."
  },
  {
    question: "How long does website development take?",
    answer: "A standard landing page or corporate profile website takes 7 to 14 business days. Complex e-commerce systems, database directories, or custom web portals average 3 to 6 weeks."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, our primary focus is global. We support growing companies, startups, and enterprises in the US, the UK, the UAE, Australia, and worldwide through our remote engineering desk."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes. Basic technical onsite SEO (correct title formats, descriptions, clean tag hierarchy, and structured JSON-LD schemas) is pre-configured on all our sites. We also offer dedicated global SEO campaigns and Map pack optimization."
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we support our clients post-launch. We provide security configurations, hosting setups (Vercel/Netlify), backup schedules, content updates, and continuous speed tuning."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We migrate slow, legacy templates (like bloated WordPress builds) into high-performance, responsive Next.js storefronts or corporate profiles to increase page speed and capture conversions."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, startups are a core focus. We help early-stage ventures launch conversion-ready digital pages, configure lead capture fields, and connect trackers to validate their offerings."
  },
  {
    question: "Can you build e-commerce websites?",
    answer: "Yes. We build responsive e-commerce storefronts using Next.js. We integrate checkout funnels, secure payment links, catalog displays, and order management."
  },
  {
    question: "How do I choose the right custom website development company for my business?",
    answer: "When selecting a custom website development company, look for an agency that delivers custom, high-speed, and search-optimized Next.js/React solutions rather than rigid off-the-shelf templates. At Joy Digital, we act as your dedicated web engineering team, building bespoke web platforms engineered for fast load speeds, mobile responsiveness, and clean search visibility."
  },
  {
    question: "Why should I hire a bespoke web development team rather than using rigid templates?",
    answer: "Partnering with a dedicated web engineering team ensures your website is custom-engineered to achieve strong Core Web Vitals performance, maintain full code ownership, and capture organic leads."
  },
  {
    question: "Why choose Joy Digital as your web development and SEO partner?",
    answer: "Joy Digital stands out by combining modern Next.js web development with technical SEO foundations and conversion-focused design. We help businesses attract and convert qualified enquiries."
  },
  {
    question: "What should businesses look for when partnering with a digital agency?",
    answer: "Prioritize agencies with proven Core Web Vitals performance, transparent conversion tracking, and custom strategy execution. Joy Digital provides end-to-end web development, technical search optimization, and lead funnels tailored to your growth goals."
  },
  {
    question: "Why is Joy Digital considered a top choice for web development services?",
    answer: "We specialize in custom Next.js and React architecture. We engineer fast, responsive platforms designed to rank on search engines, deliver smooth user experiences on mobile and desktop, and generate consistent customer enquiries."
  },
  {
    question: "What is the difference between web design and web development?",
    answer: "Web design focuses on the visual layout, typography, UI/UX structure, and brand aesthetics. Web development involves writing clean, semantic code (Next.js, React) to turn designs into dynamic, fast-loading platforms."
  },
  {
    question: "What is the typical cost of custom web development?",
    answer: "The cost of bespoke web platforms ranges from $1,200 to $5,000+ for global B2B projects, depending on the complexity of the SaaS or headless e-commerce integration. We provide transparent milestone pricing with zero hidden fees."
  },
  {
    question: "Which languages and frameworks are best for modern web applications?",
    answer: "JavaScript and TypeScript powered by Next.js and React are currently the best choices due to their unmatched speed, SEO capabilities, and scalability."
  },
  {
    question: "How can businesses capture more global B2B leads?",
    answer: "To secure B2B projects from the US, UK, or UAE, companies should combine technical SEO landing pages, targeted LinkedIn outreach, and fast, responsive website performance to retain visitor trust."
  },
  {
    question: "How do I start a project with Joy Digital?",
    answer: "The easiest way is to fill out our Free Website Audit form on the homepage, or message us directly on WhatsApp at +91 90800 26133. We will analyze your inputs and present a flat-rate proposal."
  }
];

interface HomePageComponentProps {
  country: string; // "us", "uk", "ae", "in", or "" (Global default)
}

export default function HomePageComponent({ country }: HomePageComponentProps) {
  
  



  // Dynamic localized copy overrides
  const getHeroContent = () => {
    switch (country) {
      case "us":
        return {
          badge: "Premium Web Engineering Partner",
          h1: "Websites, SEO & Digital Marketing for US Businesses",
          subtitle: "Joy Digital helps startups, growing companies, and enterprises across the USA build fast, search-optimized Next.js web systems to capture organic pipelines.",
        };
      case "uk":
        return {
          badge: "High-Performance Web Agency",
          h1: "Websites, SEO & Digital Marketing for UK Companies",
          subtitle: "Convert search traffic into loyal clients. Joy Digital builds high-speed corporate platforms and implements conversion-optimized user journeys across the United Kingdom.",
        };
      case "ae":
        return {
          badge: "Premium Web Development Dubai",
          h1: "Websites, SEO & Digital Marketing for UAE Enterprises",
          subtitle: "Build ultra-fast, responsive corporate portals and headless storefronts tailored for the Dubai and Gulf market to accelerate your digital performance.",
        };
      case "in":
        return {
          badge: "Premium Custom Web & SEO",
          h1: "Websites, SEO & Digital Marketing for Indian Businesses",
          subtitle: "Grow your business online. Joy Digital designs high-speed business sites, Google Maps ranking systems, and lead-generation setups for companies across India.",
        };
      case "ca":
        return {
          badge: "Canada Web Engineering Partner",
          h1: "Websites, SEO & Digital Marketing for Canadian Businesses",
          subtitle: "Joy Digital helps startups and enterprise teams across Canada build high-speed Next.js platforms and capture organic search pipelines.",
        };
      case "au":
        return {
          badge: "Australia Custom Web & SEO",
          h1: "Websites, SEO & Digital Marketing for Australian Businesses",
          subtitle: "Empower your business with fast, search-compliant Next.js websites and Google ranking strategies engineered for Australian companies.",
        };
      default:
        return {
          badge: "Your Digital Growth Partner",
          h1: "Websites, SEO & Digital Marketing for Businesses Worldwide",
          subtitle: "Joy Digital helps startups, small businesses, and growing companies build professional websites, improve search engine visibility, and generate more customers through digital marketing.",
        };
    }
  };

  const hero = getHeroContent();

  // 2. TRUST / VALUE ITEMS (Purple themed icons)
  const VALUE_ITEMS = [
    {
      icon: "fa-solid fa-earth-americas text-[#7C3AED]",
      title: "Global Service Support",
      description: "Collaborating remotely with startups and corporate teams worldwide, backed by our efficient development base in India."
    },
    {
      icon: "fa-solid fa-tags text-[#7C3AED]",
      title: "Transparent Flat Pricing",
      description: country === "in" ? "Get detailed, flat-rate proposals starting from ₹25,000. Absolute clarity on hosting setup and maintainer retainers." : "Get detailed, flat-rate proposals starting from $1,200 USD. Absolute clarity on hosting setup and maintainer retainers."
    },
    {
      icon: "fa-solid fa-sliders text-[#7C3AED]",
      title: "Custom Tailored Solutions",
      description: "Tailored design and development built around your business goals without relying on rigid, bloated templates."
    },
    {
      icon: "fa-solid fa-comments text-[#7C3AED]",
      title: "Direct Specialist Sync",
      description: "No administrative filters. Communicate directly with the system developers and search specialists executing your project."
    },
    {
      icon: "fa-solid fa-bolt text-[#7C3AED]",
      title: "Fast Iterative Launching",
      description: "Agile delivery sprints. We launch standard multipage company profiles and lead funnels within 7 to 14 business days."
    },
    {
      icon: "fa-solid fa-headset text-[#7C3AED]",
      title: "Long-Term Technical Care",
      description: "Post-launch maintenance covering server deployment, security configurations, index monitoring, and speed tuning."
    }
  ];

  // 3. SERVICES LIST
  const SERVICES = [
    {
      icon: "fa-solid fa-[#7C3AED] fa-cubes",
      title: "Custom Website Development",
      description: "Bespoke Next.js and React websites built for high performance, responsive design, and full code ownership.",
      benefits: ["Fast performance & Core Web Vitals", "Clean and secure code architecture", "Full code and IP ownership"],
      href: "/custom-website-development",
      cta: "Explore Custom Web Dev"
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Website Design",
      description: "Clean, responsive user interfaces custom-designed to match your brand identity and optimize visitor engagement flow.",
      benefits: ["Mobile-first user flows", "Frictionless navigations", "High-impact layouts"],
      href: "/web-design-services",
      cta: "Explore Web Design"
    },
    {
      icon: "fa-brands fa-react text-[#7C3AED]",
      title: "Next.js Development Agency",
      description: "Next.js web development delivering modern, fast, and scalable web solutions for growing businesses.",
      benefits: ["Fast page rendering", "Server-side and static optimization", "Scalable component architecture"],
      href: "/nextjs-development-agency",
      cta: "Explore Next.js Agency"
    },
    {
      icon: "fa-solid fa-arrows-rotate text-[#7C3AED]",
      title: "WordPress to Next.js Migration",
      description: "Smooth migration of slow WordPress sites to modern Next.js architecture with full 301 redirect mapping to protect your SEO.",
      benefits: ["Faster loading times", "Careful SEO structure preservation", "Reduced plugin dependencies"],
      href: "/wordpress-to-nextjs-migration",
      cta: "Explore WP Migration"
    },
    {
      icon: "fa-solid fa-brain text-[#7C3AED]",
      title: "AI Search Optimization (GEO)",
      description: "Generative Engine Optimization (GEO) to get your business cited across ChatGPT Search, Perplexity, Google Gemini, and Claude.",
      benefits: ["LLM entity citation", "AI search authority", "Knowledge graph sync"],
      href: "/ai-search-optimization",
      cta: "Explore AI Search (GEO)"
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Static Website Development",
      description: "Pre-rendered static websites built with Next.js & React for fast loading, high reliability, and minimal hosting overhead.",
      benefits: ["Fast page delivery", "Minimal server maintenance", "Secure and reliable setup"],
      href: "/static-website-development",
      cta: "Explore Static Web Dev"
    },
    {
      icon: "fa-solid fa-id-card",
      title: "Portfolio Website Development",
      description: "High-impact custom portfolio websites for consultants, executives, agency owners, architects, and creative professionals.",
      benefits: ["Personal brand authority", "Filterable work galleries", "Direct WhatsApp triggers"],
      href: "/portfolio-website-development",
      cta: "Explore Portfolio Web Dev"
    },
    {
      icon: "fa-solid fa-[#7C3AED] fa-bullseye",
      title: "Landing Page Development",
      description: "Distraction-free PPC & campaign landing pages engineered to convert Google/Meta ad clicks into qualified leads.",
      benefits: ["High ROAS conversion funnels", "Frictionless form fields", "A/B test ready layouts"],
      href: "/landing-page-development",
      cta: "Explore Landing Page Dev"
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Premium Next.js, React, and TypeScript development. We compile semantic, light, and modular code structures.",
      benefits: ["Blazing fast CDN pre-renders", "Serverless cloud setup", "Clean reusable components"],
      href: "/website-development",
      cta: "Explore Web Dev"
    },
    {
      icon: "fa-solid fa-plane-departure text-[#7C3AED]",
      title: "Tour Operator Website Dev",
      description: "Custom booking portals and high-converting websites specifically designed for global Tour Operators and DMCs.",
      benefits: ["Dynamic day-by-day itineraries", "Direct WhatsApp booking", "Seasonal pricing CMS"],
      href: "/tour-operator-website-development",
      cta: "Explore Tour Operator Dev"
    },
    {
      icon: "fa-solid fa-cart-shopping",
      title: "E-commerce Development",
      description: "Highly performant storefront checkouts using modern engines to support cart speeds and checkout conversion rates.",
      benefits: ["Speedy headless stores", "Secure checkout checkouts", "Seamless catalog syncs"],
      href: "/ecommerce-website-development",
      cta: "Explore E-commerce"
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "SEO Services",
      description: "Technical, structural, and semantic SEO audits to get your content indexed and ranked on Google search rankings.",
      benefits: ["Lighthouse speed setups", "Canonical mapping audits", "Rich schema structures"],
      href: "/seo-services",
      cta: "Explore SEO"
    },
    {
      icon: "fa-solid fa-map-location-dot",
      title: "Local SEO",
      description: "Proximity keyword optimizations to secure map pack exposure for high-intent nearby commercial searches.",
      benefits: ["Maps citation syncs", "Geo-targeted landings", "Review acquisition funnels"],
      href: "/local-seo-services",
      cta: "Explore Local SEO"
    },
    {
      icon: "fa-solid fa-circle-nodes",
      title: "Google Business Profile Optimization",
      description: "GMB parameters configuration, category optimizations, and geotag updates to capture phone calls.",
      benefits: ["Maps pack optimizations", "Category audits", "Directory alignments"],
      href: "/google-business-profile-setup",
      cta: "Explore GBP Setup"
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Digital Marketing",
      description: "ROI-focused pay-per-click (PPC) strategies and landing pages designed to drive inbound lead registrations.",
      benefits: ["Google/Meta ad configurations", "Distraction-free landers", "Conversion pixel setups"],
      href: "/contact",
      cta: "Inquire Now"
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Logo & Brand Design",
      description: "Corporate identity kits including scalable vector SVG marks, custom color guidelines, and media assets.",
      benefits: ["Scalable vector SVG marks", "Palette definitions", "Identity asset packs"],
      href: "/logo-design-services",
      cta: "Explore Brand Design"
    }
  ];

  // 5. PORTFOLIO / REAL PROJECTS ONLY
  const PORTFOLIO_PROJECTS = [
    {
      client: "Ganesan Associates",
      industry: "Financial & Insurance Services",
      service: "Website Design, Web Development & Local SEO",
      desc: "A highly-responsive, clean portal built for LIC and Star Health advisors. Features responsive lead submission pipelines, WhatsApp integration, and optimized maps rankings.",
      image: "/assets/images/ganesan-associates.webp",
      link: "https://ganeshmuruganlic.com"
    },
    {
      client: "Chithra Insurance Agent Portal",
      industry: "Insurance Advisory",
      service: "Next.js Web Development & Mobile Optimization",
      desc: "Rebuilt client presence into a clean, mobile-first consultation funnel. Optimized images and static assets to load in under 1.2 seconds, securing over 50 monthly WhatsApp leads.",
      image: "/assets/images/hero-banner.webp",
      link: "https://chithrainsurance.com"
    }
  ];

  // 8. CASE STUDIES (VERIFIED PROBLEM/SOLUTION/RESULT)
  const CASE_STUDIES = [
    {
      slug: "chennai-clinic-leads",
      category: "Local SEO & maps rankings",
      title: "Patient Generation Pipeline Optimization",
      problem: "A clinical setup lacked digital leads due to name address inconsistencies and an unoptimized Maps listing for core queries.",
      solution: "We restructured categories, synched directory records, built schemas, and launched geotagged location pages.",
      result: "Maps pack rankings reached the top 3 spots within 30 days, generating a 240% monthly growth in appointment calls.",
      targetNum: 240,
      metricSuffix: "% Appointment growth"
    },
    {
      slug: "ecommerce-sales-increase",
      category: "Web Development & CRO",
      title: "Headless E-commerce Portal Speed Rebuild",
      problem: "A legacy shop site took over 5.5s to load, creating massive cart abandonment and poor checkouts.",
      solution: "Rebuilt the store using serverless Next.js, optimized images to WebP, and removed heavy scripts.",
      result: "Mobile loading speed dropped under 1.5s, reducing checkout shifts and driving a 40% growth in transactions.",
      targetNum: 40,
      metricSuffix: "% Sales growth"
    },
    {
      slug: "saas-landing-optimization",
      category: "Paid Ads & Landing Design",
      title: "SaaS Product Demo Request Landers",
      problem: "Paid ads campaigns were landing on cluttered multipage headers, leaking prospects and wasting budget.",
      solution: "Engineered single-purpose, fast demo landers featuring prefilled inputs and no external nav headers.",
      result: "Lowered overall client acquisition cost, generating an 180% demo lead signup spike.",
      targetNum: 180,
      metricSuffix: "% Lead signup growth"
    }
  ];

  // 9. TESTIMONIALS (REAL CUSTOMERS)
  const TESTIMONIALS = [
    {
      quote: "Joy Digital optimized our map search visibility. We now rank at the top of Google Maps in our city, and our weekly incoming calls and advisory enquiries have doubled!",
      name: "Ganesh Murugan",
      role: "LIC Financial Advisor",
      company: "Ganesan Associates",
      initials: "GM"
    },
    {
      quote: "We rebuilt our insurance portfolio using their Next.js template. The website loads instantly on mobile networks, and we captured over 50+ policy leads via WhatsApp in the first month.",
      name: "Chithra",
      role: "Star Health Advisor",
      company: "Independent Consultancy",
      initials: "C"
    },
    {
      quote: "Their team combined custom layouts with technical SEO. We now rank for competitive terms in our sector, bringing in continuous qualified sales leads across our target markets.",
      name: "R. Rajesh Kumar",
      role: "Retail Director",
      company: "Rajesh Retail Group",
      initials: "RK"
    }
  ];

  // 11. FAQ LIST (uses HOME_FAQS from top level)

  return (
    <>
      <ClientScrollObserver />
      <Header transparent={true} />
      
      <main className="bg-[#FAF9FF] text-[#1F1B2D] min-h-screen overflow-hidden">
        
        {/* 1. MODERNIZED INTERNATIONAL HERO SECTION */}
        <ModernHeroSection country={country} />
        
        {/* TRAVEL, TOURISM & SAFARI SECTION */}
        <section className="py-20 bg-white border-b border-[#E9E4F2] relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Industry Specialization
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1F1B2D] mb-6 leading-tight">
                High-Converting Websites for Travel, Tourism &amp; Safari
              </h2>
              <p className="text-sm text-[#6B6478] font-semibold leading-relaxed mb-8">
                We build custom, high-speed websites tailored specifically for Travel Agencies, Tour Operators, DMCs, and Safari Operators worldwide. Generate more qualified tour enquiries with layouts designed for the tourism industry.
              </p>
              
              <ul className="space-y-4 mb-10 text-sm font-bold text-[#1F1B2D]">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-emerald-500 mt-1" />
                  <span>Dynamic Tour Package &amp; Itinerary Management (CMS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-emerald-500 mt-1" />
                  <span>Direct WhatsApp Enquiry &amp; Booking Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-emerald-500 mt-1" />
                  <span>Mobile-First Design for Global Travelers on the go</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/travel-website-development" className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5">
                  Explore Travel Web Dev <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/safari-website-development" className="inline-flex items-center gap-2 bg-[#FAF9FF] hover:bg-[#F3F0FF] border border-[#E9E4F2] hover:border-[#7C3AED]/40 text-[#1F1B2D] font-bold text-xs px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5">
                  Safari Web Dev <i className="fa-solid fa-compass text-[#7C3AED]" />
                </Link>
              </div>
            </div>
            
            <div className="relative reveal-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-emerald-500/10 rounded-[32px] blur-3xl transform -rotate-6" />
              <div className="relative bg-[#1A1433] rounded-[32px] p-8 border border-[#2D244E] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#2D244E] pb-4 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 font-mono">Safari Operator Dashboard</div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl bg-slate-800 shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 bg-slate-700 rounded-full w-3/4" />
                      <div className="h-2 bg-slate-800 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2D244E]">
                    <div className="bg-[#211942] rounded-xl p-4 border border-[#3A2D70]">
                      <div className="text-[10px] text-slate-400 mb-1 uppercase font-bold">New Leads</div>
                      <div className="text-2xl font-extrabold text-emerald-400">+42%</div>
                    </div>
                    <div className="bg-[#211942] rounded-xl p-4 border border-[#3A2D70]">
                      <div className="text-[10px] text-slate-400 mb-1 uppercase font-bold">Mobile Speed</div>
                      <div className="text-2xl font-extrabold text-white">Fast</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2. TRUST / VALUE SECTION WITH SCROLL REVEALS (Soft background alternates) */}
        <section id="value-proposition" className="py-20 bg-white border-b border-[#E9E4F2] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Value Proposition
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Designed for Growing Businesses Worldwide
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Transparent processes, specialized technical engineers, and conversion-first workflows. No fake claims.
              </p>
            </div>

            {/* Staggered card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUE_ITEMS.map((item, index) => (
                <div 
                  key={index}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start text-left reveal-hidden group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <i className={item.icon} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-3">{item.title}</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BUSINESS PROBLEMS SECTION */}
        <section className="py-20 bg-[#FAF9FF] border-b border-[#E9E4F2] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-3">
                Common Bottlenecks
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Is Your Website Actually Generating Leads?
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Most websites look decent but fail to achieve actual business results. Here are the core problems holding your online visibility back.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-eye-slash" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">Low Google Visibility</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Your site is buried on Page 2 or 3 of Google search results for key buying keywords, causing you to lose traffic to local competitors.</p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-palette" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">Poor Website Design</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Outdated layouts or generic agency templates that look unprofessional and fail to establish trust within the first 3 seconds.</p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-circle-question" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">Low Enquiries</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Visitors click onto your site, browse around, but leave without filling out forms, sending emails, or making phone calls.</p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">No WhatsApp Conversion</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Absence of direct WhatsApp click-to-chat widgets makes it difficult for mobile users to quickly ask about your pricing and services.</p>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-gauge-simple" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">Slow Website</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Bloated page builders take 5+ seconds to load, triggering high bounce rates and causing search engines to devalue your page rank.</p>
                </div>
              </div>

              {/* Problem 6 */}
              <div className="p-8 bg-white border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 flex gap-5 items-start text-left reveal-hidden group">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center text-xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-mobile-screen-button" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1B2D] mb-2">Poor Mobile Experience</h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">Cluttered mobile layouts, microscopic buttons, and poorly aligned input fields block smartphone users from converting.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/free-website-audit"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs px-8 py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                Find Out Your Website Bottlenecks Now
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION WITH PREMIUM HOVER STATES */}
        <section className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Our Services
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Modern Services Built to Generate Qualified Leads
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Custom layouts designed for search engine exposure, mobile responsive compatibility, and client actions.
              </p>
            </div>

            {/* Staggered Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((s, idx) => (
                <article
                  key={idx}
                  style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
                  className="bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] p-7 shadow-sm hover:shadow-lg hover:border-[#7C3AED]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative reveal-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] text-lg mb-5 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                      <i className={s.icon} />
                    </div>
                    <h3 className="text-xs font-bold text-[#1F1B2D] mb-3 uppercase tracking-wider group-hover:text-[#7C3AED] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-[#6B6478] leading-relaxed mb-6 font-semibold">
                      {s.description}
                    </p>
                    
                    {/* Benefits list */}
                    <ul className="flex flex-col gap-2.5 mb-6 text-[10px] text-[#6B6478] font-bold border-t border-[#E9E4F2] pt-4">
                      {s.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <i className="fa-solid fa-circle-check text-emerald-500 text-[11px]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={s.href}
                    className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 mt-2 transition-colors hover:text-[#A78BFA] border-t border-[#E9E4F2] pt-3"
                  >
                    {s.cta} <i className="fa-solid fa-chevron-right text-[9px] group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Regional Local SEO Quick Links */}
            <div className="mt-12 p-6 bg-[#FAF9FF] border border-[#E9E4F2] rounded-2xl flex flex-wrap items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs font-extrabold text-[#1F1B2D] block mb-1">Looking for Local SEO &amp; Google Maps Rankings?</span>
                <p className="text-[11px] text-[#6B6478]">Dominate search results and local pack queries in Chennai with our sub-second Next.js optimization.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/seo-services-chennai"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#7C3AED]/30 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <i className="fa-solid fa-location-dot text-xs" />
                  SEO Services in Chennai
                </Link>
                <Link
                  href="/seo-services-madurai"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#E9E4F2] text-[#6B6478] hover:text-[#7C3AED] px-4 py-2 rounded-xl text-xs font-bold transition-all"
                >
                  SEO Services Madurai
                </Link>
                <Link
                  href="/website-design-company-coimbatore"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#E9E4F2] text-[#6B6478] hover:text-[#7C3AED] px-4 py-2 rounded-xl text-xs font-bold transition-all"
                >
                  SEO Company Coimbatore
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHO WE HELP SECTION (Hidden per request) */}
        {/*
        <section className="py-20 bg-[#FAF9FF] border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Target Industries
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Who We Help Globally
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                We craft specialized, fast-loading interfaces for startups and small business sectors across the globe.
              </p>
            </div>

            <IndustryTabs />
          </div>
        </section>
        */}

        {/* FREE ONLINE BUSINESS TOOLS SECTION */}
        




        {/* 6. HOW WE WORK PROCESS WITH AN ANIMATED CONNECTING LINE */}
        <section id="process-section" className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Process Workflow
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                How we take project parameters from discovery draft into search engine launch.
              </p>
            </div>

            <ProcessSection />
          </div>
        </section>

                {/* 7. WHY CHOOSE JOY DIGITAL SECTION */}
        <section id="why-choose-us" className="py-20 lg:py-24 bg-[#FAF9FF] border-b border-[#E9E4F2] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                The Joy Digital Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1B2D] tracking-tight mb-4">
                Why Choose Joy Digital?
              </h2>
              <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed font-normal">
                We build websites that combine thoughtful design, modern technology, and SEO-friendly foundations to help businesses strengthen their online presence, attract relevant visitors, and generate valuable customer enquiries.
              </p>
            </div>

            {/* Seven Core Benefits (Balanced 4 + 3 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7 text-left">
              
              {/* Benefit 1: Custom-Built Websites */}
              <div 
                style={{ transitionDelay: "0ms" }}
                className="lg:col-span-3 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <Code2 className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Custom-Built Websites
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    Get a website designed around your business goals, brand identity, target audience, and specific requirements. We focus on creating{" "}
                    <Link href="/custom-website-development" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      professional digital experiences
                    </Link>{" "}
                    rather than relying on generic designs.
                  </p>
                </div>
              </div>

              {/* Benefit 2: SEO-Friendly Development */}
              <div 
                style={{ transitionDelay: "80ms" }}
                className="lg:col-span-3 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <SearchCheck className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    SEO-Friendly Development
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    We build websites with search engine-friendly structures, relevant metadata, clean page organization, and{" "}
                    <Link href="/seo-services" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      technical SEO foundations
                    </Link>{" "}
                    to help search engines understand your content.
                  </p>
                </div>
              </div>

              {/* Benefit 3: Designed to Generate Quality Leads */}
              <div 
                style={{ transitionDelay: "160ms" }}
                className="lg:col-span-3 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <Target className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Designed to Generate Quality Leads
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    We create conversion-focused websites with clear calls to action, enquiry forms, WhatsApp integration, and user-friendly layouts to help businesses attract relevant visitors and turn them into potential customers.
                  </p>
                </div>
              </div>

              {/* Benefit 4: Mobile-First Experience */}
              <div 
                style={{ transitionDelay: "240ms" }}
                className="lg:col-span-3 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <Smartphone className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Mobile-First Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    Our{" "}
                    <Link href="/web-design-services" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      responsive website designs
                    </Link>{" "}
                    provide a smooth browsing experience across mobile phones, tablets, laptops, and desktop devices.
                  </p>
                </div>
              </div>

              {/* Benefit 5: Dynamic Websites and CMS Solutions */}
              <div 
                style={{ transitionDelay: "320ms" }}
                className="lg:col-span-4 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <PanelsTopLeft className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Dynamic Websites and CMS Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    We develop{" "}
                    <Link href="/dynamic-website-development" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      dynamic websites
                    </Link>{" "}
                    and content management solutions that help businesses manage website content, publish blogs, update information, and expand their online presence as their needs grow.
                  </p>
                </div>
              </div>

              {/* Benefit 6: Solutions for Indian and Global Businesses */}
              <div 
                style={{ transitionDelay: "400ms" }}
                className="lg:col-span-4 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <Globe className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Solutions for Indian and Global Businesses
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    We work towards serving businesses across different industries and markets, including{" "}
                    <Link href="/travel-website-development" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      tourism
                    </Link>
                    ,{" "}
                    <Link href="/website-for-manufacturing-companies" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      manufacturing
                    </Link>
                    ,{" "}
                    <Link href="/website-for-export-and-import" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
                      export businesses
                    </Link>
                    , and other growing companies looking for a professional online presence.
                  </p>
                </div>
              </div>

              {/* Benefit 7: Ongoing Website Support */}
              <div 
                style={{ transitionDelay: "480ms" }}
                className="md:col-span-2 lg:col-span-4 bg-white border border-[#E9E4F2] p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-md hover:border-[#7C3AED]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FF] border border-[#E9E4F2] text-[#7C3AED] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:border-[#7C3AED]/30 group-hover:bg-[#7C3AED]/10 transition-all duration-300">
                    <Headset className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-2.5 tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    Ongoing Website Support
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-normal">
                    We help businesses maintain and improve their websites through content updates, technical improvements, troubleshooting, and maintenance based on the agreed project scope.
                  </p>
                </div>
              </div>

            </div>

            {/* Call-to-Action Card */}
            <div className="mt-14 sm:mt-16 bg-white border border-[#E9E4F2] rounded-[28px] p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden reveal-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2D] tracking-tight mb-3">
                Ready to Build a Website That Grows Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6478] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
                Tell us about your business goals, and let's explore the right website solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm transition-all shadow-md shadow-[#7C3AED]/20 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get a Free Website Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FAF9FF] hover:bg-white border border-[#E9E4F2] hover:border-[#7C3AED]/40 text-[#1F1B2D] font-extrabold text-sm transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Contact Joy Digital</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 8. GLOBAL CONNECTIONS NETWORK WIDGET (Deep Dark background #0D0B18) (Hidden per request) */}
        {/*
        <section className="py-20 bg-[#0D0B18] border-b border-[#231C3D] text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <WorldwideServiceNetwork />
          </div>
        </section>
        */}

        <PortfolioSection />

        {/* 9. CASE STUDIES WITH COUNT-UP NUMERICAL COUNTERS */}
        <section id="case-studies" className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Verified Outcomes
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Real Problems. Real Solutions. Real Results.
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Technical diagnostics and outcomes from genuine client partnerships. No manufactured stats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <div 
                  key={idx}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className="bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] p-8 flex flex-col justify-between text-left hover:shadow-md hover:border-[#7C3AED]/15 transition-all duration-300 reveal-hidden group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="text-[10px] font-extrabold text-[#7C3AED] uppercase tracking-wider bg-white border border-[#7C3AED]/25 px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                      <span className="text-sm font-black text-emerald-600 flex items-center gap-1">
                        <i className="fa-solid fa-arrow-trend-up text-xs animate-bounce" />
                        <CountUpNumber target={study.targetNum} suffix="%" />
                      </span>
                    </div>

                    <h3 className="text-base font-black text-[#1F1B2D] mb-4 leading-tight group-hover:text-[#7C3AED] transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex flex-col gap-4 text-xs font-semibold text-[#6B6478]">
                      <p>
                        <strong className="text-[#1F1B2D] block mb-1">Challenge:</strong> {study.problem}
                      </p>
                      <p>
                        <strong className="text-[#1F1B2D] block mb-1">Execution:</strong> {study.solution}
                      </p>
                      <p>
                        <strong className="text-emerald-700 block mb-1">Result:</strong> {study.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E9E4F2]">
                    <Link
                      href={`/case-studies`}
                      className="text-xs font-bold text-[#7C3AED] hover:text-[#A78BFA] flex items-center gap-1.5 group/case"
                    >
                      Read Case Narrative <i className="fa-solid fa-chevron-right text-[8px] group-hover/case:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. TESTIMONIALS */}
        <section className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Client Reviews
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Feedback from local financial advisors, store directors, and corporate partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 rounded-[20px] shadow-sm flex flex-col justify-between text-left hover:shadow-md hover:border-[#7C3AED]/15 transition-all duration-300 reveal-hidden"
                >
                  <div>
                    <div className="flex gap-1 text-[#7C3AED] mb-4 text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="text-xs text-[#6B6478] italic leading-relaxed mb-6 font-semibold">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 border-t border-[#E9E4F2] pt-4 mt-2">
                    <div className="w-9 h-9 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {t.initials}
                    </div>
                    <div className="flex-grow">
                      <span className="text-xs font-bold text-[#1F1B2D] block leading-tight">{t.name}</span>
                      <span className="text-[10px] text-[#6B6478] block mt-0.5 font-bold">{t.role} — {t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promotion card inviting new reviews */}
            <div className="bg-white border border-[#E9E4F2] p-8 rounded-[24px] shadow-sm max-w-xl mx-auto text-center reveal-hidden">
              <h3 className="text-sm font-extrabold text-[#1F1B2D] uppercase tracking-wider mb-2">Are you our next success story?</h3>
              <p className="text-xs text-[#6B6478] font-semibold leading-relaxed mb-4">
                We work closely with startup founders and local operators worldwide. Start a campaign with us and share your review when we deploy!
              </p>
              <a
                href="#enquiry-section"
                className="text-xs font-bold text-[#7C3AED] hover:text-[#A78BFA]"
              >
                Inquire About a Project Now &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 11. PRICING SECTION */}
        <section className="py-20 bg-white border-b border-[#E9E4F2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Tailored Packages
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Website Development Packages
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Engineered for speed, brand authority, and consistent lead generation. Zero hidden fees.
              </p>
            </div>

            <PricingSection country={country} />
            
            <p className="text-[10px] text-[#6B6478] font-bold uppercase tracking-wider text-center mt-8">
              Need a custom layout or dedicated corporate contract? <a href="https://wa.me/919080026133" className="text-[#7C3AED] underline hover:text-[#A78BFA]">Chat with our engineers</a>.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-[#E9E4F2] relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Heading area */}
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                Free Resources
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Free Online Business Tools & Calculators
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold leading-relaxed">
                Free, fast and easy-to-use online tools for businesses, freelancers, students and professionals. Calculate GST, create invoices and quotations, generate QR codes, improve website SEO and simplify everyday business tasks — completely online.
              </p>
            </div>

            {/* Grid layout - 3 cols desktop, 2 cols tablet, 1 col mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* GST Calculator */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-calculator" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    GST Calculator
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Calculate GST inclusive and exclusive prices instantly with our free GST calculator.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">GST Calculator</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">GST Online</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">India</span>
                  </div>
                  <Link href="/gst-calculator" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Use GST Calculator &rarr;
                  </Link>
                </div>
              </div>

              {/* Invoice Generator */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-file-invoice-dollar" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    Invoice Generator
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Create professional invoices online quickly and easily.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Invoice Generator</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Free Maker</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">GST Invoice</span>
                  </div>
                  <Link href="/invoice-generator" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Create Invoice &rarr;
                  </Link>
                </div>
              </div>

              {/* Quotation Generator */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-file-signature" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    Quotation Generator
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Create professional business quotations online in minutes.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Quotation Generator</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Quotation Maker</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Online</span>
                  </div>
                  <Link href="/quotation-generator" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Create Quotation &rarr;
                  </Link>
                </div>
              </div>

              {/* QR Code Generator */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-qrcode" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    QR Code Generator
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Generate free QR codes for websites, WhatsApp, contact details and business use.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">QR Code Generator</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Free QR</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">WhatsApp QR</span>
                  </div>
                  <Link href="/qr-code-generator" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Generate QR Code &rarr;
                  </Link>
                </div>
              </div>

              {/* SEO Audit Tool */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-chart-line" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    SEO Audit Tool
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Check your website&apos;s basic SEO performance and discover opportunities to improve search visibility.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">SEO Checker</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Free Audit</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">SEO Tool</span>
                  </div>
                  <Link href="/free-tools" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Check SEO &rarr;
                  </Link>
                </div>
              </div>

              {/* Image Compressor */}
              <div className="p-8 bg-[#FAF9FF] border border-[#E9E4F2] rounded-[24px] shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left reveal-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E4F2] flex items-center justify-center text-[#7C3AED] text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-file-image" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    Image Compressor
                  </h3>
                  <p className="text-xs text-[#6B6478] leading-relaxed font-semibold mb-6">
                    Compress images online and reduce file size while maintaining good image quality.
                  </p>
                </div>
                <div className="border-t border-[#E9E4F2] pt-4 mt-2 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Compress Image</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">JPG / PNG</span>
                    <span className="text-[9px] font-bold text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">Compress Online</span>
                  </div>
                  <Link href="/free-tools" className="text-xs font-bold text-[#7C3AED] flex items-center gap-1.5 group-hover:text-[#A78BFA] transition-colors">
                    Compress Image &rarr;
                  </Link>
                </div>
              </div>

            </div>

            {/* View All Tools CTA Button */}
            <div className="text-center mb-16 reveal-hidden">
              <Link
                href="/free-tools"
                className="inline-flex items-center gap-2 bg-[#171126] hover:bg-slate-800 hover:scale-[1.025] text-white font-bold text-xs px-8 py-4 rounded-xl transition-all group"
              >
                Explore All Free Tools <i className="fa-solid fa-arrow-right-long text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Homepage SEO Paragraph Content block */}
            <div className="max-w-4xl mx-auto border-t border-[#E9E4F2] pt-12 pb-6 text-left reveal-hidden">
              <h3 className="text-sm font-bold text-[#1F1B2D] uppercase tracking-wider mb-3">Free Online Tools for Businesses</h3>
              <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">
                Joy Digital provides a growing collection of free online business tools designed to make everyday tasks faster and easier. Use our GST calculator, invoice generator, quotation generator, QR code generator, SEO audit tool and image compressor directly from your browser. These tools are designed for businesses, freelancers, professionals and individuals who want simple solutions without complicated software.
              </p>
            </div>

            

            {/* Lead Gen block */}
            <div className="bg-[#FAF9FF] border border-[#E9E4F2] p-8 sm:p-12 rounded-[24px] shadow-sm text-left flex flex-col justify-between hover:border-[#7C3AED]/15 transition-colors max-w-5xl mx-auto mt-8 reveal-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h3 className="text-lg sm:text-xl font-black text-[#1F1B2D] mb-3">Need a Website or Digital Solution for Your Business?</h3>
                  <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed font-semibold">
                    From professional websites and e-commerce solutions to SEO and digital marketing, Joy Digital helps businesses build a stronger online presence.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-end">
                  <TrackedLink
                    href="#enquiry-section"
                    eventName="Free Tools Lead Consultation"
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Get a Free Consultation
                  </TrackedLink>
                  <TrackedWaLink
                    href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I%20saw%20your%20free%20business%20tools%20and%20I'd%20like%2520to%2520get%2520a%2520free%2520consultation%2520for%2520my%2520business."
                    location="free_tools_cta"
                    className="bg-[#10b981] hover:bg-[#059669] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-sm" /> Chat on WhatsApp
                  </TrackedWaLink>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 12. FAQ SECTION */}
        <section className="py-20 bg-[#FAF9FF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
              <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest block mb-3">
                FAQ
              </span>
              <h2 className="text-3xl font-extrabold text-[#1F1B2D] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6478] font-semibold">
                Quick answers regarding site pricing plans, delivery timelines, maps optimizations, and global services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-left reveal-hidden">
              <Accordion items={HOME_FAQS} />
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA WITH MICRO INTERACTIONS (Deep Purple background #171126) */}
        <section className="relative py-20 bg-[#171126] border-t border-[#2A203F] overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 max-w-3xl mx-auto flex flex-col items-center reveal-hidden">
            <span className="inline-block bg-[#7C3AED]/10 text-[#A78BFA] font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#7C3AED]/35 mb-6">
              Start Scaling Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-sm md:text-base text-[#D8D2E6] max-w-xl mx-auto mb-10 leading-relaxed font-semibold">
              Let&apos;s build a website and digital strategy designed around your business goals.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <TrackedLink
                href="/free-website-audit"
                eventName="Get Free Website Audit - Final"
                className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] hover:scale-[1.025] hover:shadow-lg transition-all text-white font-bold text-xs px-8 py-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 group"
              >
                Get Free Website Audit
                <i className="fa-solid fa-arrow-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </TrackedLink>
              
              <TrackedWaLink
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I%20need%20a%20website%20for%20my%20business.%20I%20would%20like%20to%20know%20the%20pricing%20and%20process."
                location="final_cta"
                className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] hover:scale-[1.025] hover:shadow-lg transition-all text-white font-bold text-xs px-8 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg animate-pulse" />
                Chat with an Expert
              </TrackedWaLink>
            </div>
          </div>
        </section>

      </main>

      {/* 14. FOOTER */}
      <Footer />
    </>
  );
}
