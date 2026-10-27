"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CompanyProfileDownload from "@/components/ui/CompanyProfileDownload";

const REGIONAL_SITES = [
  { code: "", label: "Global (USD)", flag: "🌐" },
  { code: "us", label: "United States (USD)", flag: "🇺🇸" },
  { code: "uk", label: "United Kingdom (GBP)", flag: "🇬🇧" },
  { code: "ae", label: "United Arab Emirates (AED)", flag: "🇦🇪" },
  { code: "in", label: "India (INR)", flag: "🇮🇳" },
  { code: "ca", label: "Canada (CAD)", flag: "🇨🇦" },
  { code: "au", label: "Australia (AUD)", flag: "🇦🇺" },
];

export default function Footer() {
  const pathname = usePathname();

  // Detect current region from pathname
  const parts = pathname.split("/").filter(Boolean);
  const currentRegion = (parts.length > 0 && ["us", "uk", "ae", "in", "ca", "au"].includes(parts[0])) ? parts[0] : "";

  const getRegionalHref = (path: string) => {
    const localizedPaths = ["/", "/seo-services", "/website-development", "/contact"];
    if (localizedPaths.includes(path)) {
      if (currentRegion === "") return path;
      return `/${currentRegion}${path === "/" ? "" : path}`;
    }
    return path;
  };

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";

  return (
    <footer className="bg-[#FAFAFA] text-text-primary border-t border-[#E5E7EB] pt-20 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-[#E5E7EB] pb-16">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-5 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
          <Link href={getRegionalHref("/")} title="Joy Digital Home" className="inline-block flex-shrink-0">
            <Image
              src="/assets/images/logo.webp"
              alt="Joy Digital - Web Design & Digital Marketing Agency Logo"
              title="Joy Digital Logo"
              width={240}
              height={77}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
          <div className="text-text-secondary text-xs leading-relaxed flex flex-col gap-3">
            <p className="font-bold text-[#0F172A]">Websites, SEO & Digital Marketing for Businesses Worldwide</p>
            <p>Based in India, serving startups, small businesses, and growing companies globally. Delivering premium web solutions and conversion-focused search optimizations through direct remote collaboration.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919080026133"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 hover:scale-110 transition-all duration-200"
              aria-label="WhatsApp"
              title="Chat with Joy Digital on WhatsApp"
              data-wa-location="footer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
                <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd" d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.02 14.47 13.85 14.67C13.68 14.87 13.5 14.9 13.2 14.75C12.9 14.6 11.94 14.28 10.81 13.28C9.92 12.49 9.32 11.51 9.15 11.21C8.98 10.91 9.13 10.75 9.28 10.6C9.42 10.46 9.58 10.25 9.73 10.07C9.88 9.9 9.93 9.77 10.03 9.57C10.13 9.37 10.08 9.2 10 9.05C9.93 8.9 9.35 7.48 9.11 6.9C8.88 6.34 8.64 6.42 8.46 6.41C8.29 6.4 8.1 6.4 7.9 6.4C7.7 6.4 7.38 6.47 7.11 6.77C6.83 7.07 6.06 7.79 6.06 9.26C6.06 10.73 7.13 12.15 7.28 12.35C7.43 12.55 9.38 15.55 12.38 16.84C13.09 17.15 13.65 17.34 14.09 17.48C14.81 17.71 15.46 17.67 15.98 17.6C16.56 17.51 17.76 16.87 18.01 16.16C18.26 15.45 18.26 14.85 18.18 14.72C18.11 14.6 17.91 14.52 17.61 14.37L17.5 14.33Z" />
              </svg>
            </a>
            <a
              href="https://share.google/BSniheS2qnzwqUKXU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#4285F4] hover:bg-[#4285F4]/10 hover:scale-110 transition-all duration-200"
              aria-label="Google Business Profile"
              title="Joy Digital Google Business Profile & Reviews"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590372457559"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:scale-110 transition-all duration-200"
              aria-label="Facebook"
              title="Visit Joy Digital Facebook Page"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="#1877F2" />
                <path fill="#FFFFFF" d="M15.12 12.87L15.6 9.75H12.6V7.72C12.6 6.87 13.02 6.04 14.35 6.04H15.71V3.38C15.71 3.38 14.47 3.17 13.29 3.17C10.84 3.17 9.24 4.65 9.24 7.34V9.75H6.5V12.87H9.24V20.42C9.79 20.51 10.35 20.55 10.92 20.55C11.49 20.55 12.05 20.51 12.6 20.42V12.87H15.12Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Joydigital2026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#FF0000] hover:bg-[#FF0000]/10 hover:scale-110 transition-all duration-200"
              aria-label="YouTube"
              title="Subscribe to Joy Digital YouTube Channel"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path fill="#FF0000" d="M21.58 7.19C21.36 6.37 20.71 5.72 19.89 5.5C18.4 5.1 12 5.1 12 5.1C12 5.1 5.6 5.1 4.11 5.5C3.29 5.72 2.64 6.37 2.42 7.19C2.02 8.68 2.02 12 2.02 12C2.02 12 2.02 15.32 2.42 16.81C2.64 17.63 3.29 18.28 4.11 18.5C5.6 18.9 12 18.9 12 18.9C12 18.9 18.4 18.9 19.89 18.5C20.71 18.28 21.36 17.63 21.58 16.81C21.98 15.32 21.98 12 21.98 12C21.98 12 21.98 8.68 21.58 7.19Z" />
                <path fill="#FFFFFF" d="M10 15.5L15.5 12L10 8.5V15.5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/joydigital-solution/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
              title="Follow Joy Digital on LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path fill="#FFFFFF" d="M7.12 9.47H4.44V18H7.12V9.47ZM5.78 8.3C6.64 8.3 7.33 7.6 7.33 6.74C7.33 5.88 6.64 5.18 5.78 5.18C4.92 5.18 4.23 5.88 4.23 6.74C4.23 7.6 4.92 8.3 5.78 8.3ZM19.56 18H16.89V13.82C16.89 12.82 16.87 11.54 15.5 11.54C14.11 11.54 13.9 12.63 13.9 13.75V18H11.23V9.47H13.79V10.64H13.83C14.19 9.96 15.06 9.25 16.36 9.25C19.06 9.25 19.56 11.03 19.56 13.34V18Z" />
              </svg>
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center hover:border-[#EA4335] hover:bg-[#EA4335]/10 hover:scale-110 transition-all duration-200"
              aria-label="Email"
              title="Send Email to Joy Digital"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path fill="#4285F4" d="M4 19H7V10.5L3.5 8C2.58 7.35 2 6.29 2 5.16V17C2 18.1 2.9 19 4 19Z"/>
                <path fill="#34A853" d="M20 19H17V10.5L20.5 8C21.42 7.35 22 6.29 22 5.16V17C22 18.1 21.1 19 20 19Z"/>
                <path fill="#EA4335" d="M17 6.5V10.5L12 14.25L7 10.5V6.5L12 10.25L17 6.5Z"/>
                <path fill="#EA4335" d="M20.5 8L17 10.5V6.5L18.67 5.25C19.49 4.63 20.65 4.8 21.27 5.62C21.74 6.25 21.74 7.12 21.27 7.75L20.5 8Z"/>
                <path fill="#C5221F" d="M3.5 8L7 10.5V6.5L5.33 5.25C4.51 4.63 3.35 4.8 2.73 5.62C2.26 6.25 2.26 7.12 2.73 7.75L3.5 8Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Service Locations Sitemap Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
            Global & Regional
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-text-secondary">
            {REGIONAL_SITES.map((site) => (
              <li key={site.code}>
                <Link
                  href={site.code === "" ? "/" : `/${site.code}`}
                  title={`Joy Digital ${site.label} Regional Page`}
                  className="flex items-center gap-2 hover:text-accent hover:pl-1 transition-all"
                >
                  <span className="text-sm">{site.flag}</span>
                  <span>{site.label}</span>
                </Link>
              </li>
            ))}
            <li className="border-t border-[#E5E7EB] pt-2 mt-1 font-bold text-[#111827]">
              Regional Hubs (Tamil Nadu)
            </li>
            <li>
              <Link href="/website-design-company-madurai" className="hover:text-accent hover:pl-1 transition-all block">Web Design Madurai</Link>
            </li>
            <li>
              <Link href="/website-development-company-madurai" className="hover:text-accent hover:pl-1 transition-all block">Web Development Madurai</Link>
            </li>
            <li>
              <Link href="/seo-services-madurai" className="hover:text-accent hover:pl-1 transition-all block">SEO Services Madurai</Link>
            </li>
            <li>
              <Link href="/seo-services-chennai" className="hover:text-accent hover:pl-1 transition-all block">SEO Services in Chennai</Link>
            </li>
            <li>
              <Link href="/website-development-company-chennai" className="hover:text-accent hover:pl-1 transition-all block">Web Development Chennai</Link>
            </li>
            <li>
              <Link href="/digital-marketing-agency-in-chennai" className="hover:text-accent hover:pl-1 transition-all block">Digital Marketing Chennai</Link>
            </li>
            <li>
              <Link href="/website-design-company-coimbatore" className="hover:text-accent hover:pl-1 transition-all block">Web Design Coimbatore</Link>
            </li>
            <li>
              <Link href="/seo-company-coimbatore" className="hover:text-accent hover:pl-1 transition-all block">SEO Company Coimbatore</Link>
            </li>
          </ul>
        </div>

        {/* Featured Services column */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
            Featured Services
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-text-secondary">
            <li>
              <Link href={getRegionalHref("/website-development")} className="hover:text-accent hover:pl-1 transition-all">
                Next.js Web Development
              </Link>
            </li>
            <li>
              <Link href="/enterprise-web-solutions" className="hover:text-accent hover:pl-1 transition-all font-semibold text-accent">
                Enterprise Web Solutions
              </Link>
            </li>
            <li>
              <Link href="/ai-search-optimization" className="hover:text-accent hover:pl-1 transition-all font-semibold text-accent">
                AI Search Optimization (GEO)
              </Link>
            </li>
            <li>
              <Link href="/web-design-services" className="hover:text-accent hover:pl-1 transition-all">
                Website Design Services
              </Link>
            </li>
            <li>
              <Link href="/local-seo-services" className="hover:text-accent hover:pl-1 transition-all">
                Local SEO Services
              </Link>
            </li>
            <li>
              <Link href="/google-business-profile-setup" className="hover:text-accent hover:pl-1 transition-all">
                Google Business Profile Setup
              </Link>
            </li>
            <li>
              <Link href="/google-business-profile-optimization" className="hover:text-accent hover:pl-1 transition-all">
                Google Business Profile Audit
              </Link>
            </li>
            <li>
              <Link href="/social-media-marketing" className="hover:text-accent hover:pl-1 transition-all">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link href="/logo-design-services" className="hover:text-accent hover:pl-1 transition-all">
                Logo & Branding Design
              </Link>
            </li>
            <li>
              <Link href="/ecommerce-website-development" className="hover:text-accent hover:pl-1 transition-all">
                Headless E-commerce Web Dev
              </Link>
            </li>
            <li>
              <Link href="/custom-software-development" className="hover:text-accent hover:pl-1 transition-all">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link href="/custom-website-development" className="hover:text-accent hover:pl-1 transition-all">
                Custom Next.js Web Systems
              </Link>
            </li>
            <li>
              <Link href="/dynamic-website-development" className="hover:text-accent hover:pl-1 transition-all">
                Dynamic Web Applications
              </Link>
            </li>
            <li>
              <Link href="/static-website-development" className="hover:text-accent hover:pl-1 transition-all">
                Static Website Development
              </Link>
            </li>
            <li>
              <Link href="/portfolio-website-development" className="hover:text-accent hover:pl-1 transition-all">
                Portfolio Website Development
              </Link>
            </li>
            <li>
              <Link href="/landing-page-development" className="hover:text-accent hover:pl-1 transition-all">
                Landing Page Development
              </Link>
            </li>
            <li>
              <Link href="/wordpress-to-nextjs-migration" className="hover:text-accent hover:pl-1 transition-all">
                WordPress to Next.js Migration
              </Link>
            </li>
            <li>
              <Link href="/shopify-vs-headless-nextjs" className="hover:text-accent hover:pl-1 transition-all">
                Shopify vs Headless Next.js
              </Link>
            </li>
            <li>
              <Link href="/offshore-web-development-partner" className="hover:text-accent hover:pl-1 transition-all">
                Offshore Web Dev Partner
              </Link>
            </li>
            <li className="border-t border-[#E5E7EB] pt-2 mt-1 font-bold text-[#111827]">
              Industry Solutions
            </li>
            <li>
              <Link href="/website-for-insurance-agents" className="hover:text-accent hover:pl-1 transition-all">Website for Insurance Agents</Link>
            </li>
            <li>
              <Link href="/website-for-hotels" className="hover:text-accent hover:pl-1 transition-all">Website for Hotels</Link>
            </li>
            <li>
              <Link href="/website-for-hospitals" className="hover:text-accent hover:pl-1 transition-all">Website for Hospitals</Link>
            </li>
            <li>
              <Link href="/website-for-real-estate" className="hover:text-accent hover:pl-1 transition-all">Website for Real Estate</Link>
            </li>
            <li>
              <Link href="/travel-website-development" className="hover:text-accent hover:pl-1 transition-all">Website for Tours & Travels</Link>
            </li>
            <li>
              <Link href="/website-for-schools" className="hover:text-accent hover:pl-1 transition-all">Website for Schools</Link>
            </li>
            <li>
              <Link href="/website-for-small-business" className="hover:text-accent hover:pl-1 transition-all">Website for Small Business</Link>
            </li>
            <li>
              <Link href="/website-for-ecommerce" className="hover:text-accent hover:pl-1 transition-all">Website for E-commerce Stores</Link>
            </li>
            <li>
              <Link href="/website-for-solar-companies" className="hover:text-accent hover:pl-1 transition-all">Website for Solar Companies</Link>
            </li>
            <li>
              <Link href="/website-for-textile-manufacturers" className="hover:text-accent hover:pl-1 transition-all">Website for Textile Manufacturers</Link>
            </li>
            <li>
              <Link href="/website-for-manufacturing-companies" className="hover:text-accent hover:pl-1 transition-all">Website for Manufacturing</Link>
            </li>
            <li>
              <Link href="/website-for-law-firms" className="hover:text-accent hover:pl-1 transition-all">Website for Law Firms</Link>
            </li>
            <li>
              <Link href="/website-for-consulting-companies" className="hover:text-accent hover:pl-1 transition-all">Website for Consulting</Link>
            </li>
            <li>
              <Link href="/website-for-logistics-and-shipping" className="hover:text-accent hover:pl-1 transition-all">Website for Logistics & Shipping</Link>
            </li>
            <li>
              <Link href="/website-for-export-and-import" className="hover:text-accent hover:pl-1 transition-all">Website for Export & Import</Link>
            </li>
            <li>
              <Link href="/website-for-marketing-agencies" className="hover:text-accent hover:pl-1 transition-all">Website for Marketing Agencies</Link>
            </li>
            <li>
              <Link href="/website-for-luxury-brands" className="hover:text-accent hover:pl-1 transition-all font-semibold text-accent">Website for Luxury Brands</Link>
            </li>
            <li>
              <Link href="/website-for-pest-control" className="hover:text-accent hover:pl-1 transition-all">Website for Pest Control</Link>
            </li>
          </ul>
        </div>

        {/* Legal Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
            Tools & Company
          </h4>
          <ul className="flex flex-col gap-3.5 text-xs text-text-secondary">
            <li>
              <Link href="/about" className="hover:text-accent hover:pl-1 transition-all">About Our Agency</Link>
            </li>
            <li>
              <Link href="/author/saravanan" className="hover:text-accent hover:pl-1 transition-all font-semibold text-accent">Author: Saravanan L</Link>
            </li>
            <li>
              <Link href={getRegionalHref("/contact")} className="hover:text-accent hover:pl-1 transition-all">Contact Us</Link>
            </li>

            <li>
              <Link href="/portfolio" className="hover:text-accent hover:pl-1 transition-all">Portfolio</Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-accent hover:pl-1 transition-all">Case Studies</Link>
            </li>
            <CompanyProfileDownload />
            <li>
              <Link href="/privacy-policy" className="hover:text-accent hover:pl-1 transition-all">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-accent hover:pl-1 transition-all">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-accent hover:pl-1 transition-all">Disclaimer</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-accent hover:pl-1 transition-all">Refund Policy</Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-accent hover:pl-1 transition-all">Cookie Policy</Link>
            </li>
            <li className="border-t border-[#E5E7EB] pt-2 mt-1 font-bold text-[#111827]">
              Free Online Tools
            </li>
            <li>
              <Link href="/free-tools" className="hover:text-accent hover:pl-1 transition-all">All Free Business Tools</Link>
            </li>
            <li>
              <Link href="/gst-calculator" className="hover:text-accent hover:pl-1 transition-all">GST Calculator</Link>
            </li>
            <li>
              <Link href="/invoice-generator" className="hover:text-accent hover:pl-1 transition-all">Invoice Generator</Link>
            </li>
            <li>
              <Link href="/quotation-generator" className="hover:text-accent hover:pl-1 transition-all">Quotation Generator</Link>
            </li>
            <li>
              <Link href="/qr-code-generator" className="hover:text-accent hover:pl-1 transition-all">QR Code Generator</Link>
            </li>
            <li>
              <Link href="/whatsapp-link-generator" className="hover:text-accent hover:pl-1 transition-all">WhatsApp Link Generator</Link>
            </li>
            <li>
              <Link href="/seo-audit-tool" className="hover:text-accent hover:pl-1 transition-all">Free SEO Audit Tool</Link>
            </li>
            <li>
              <Link href="/image-compressor" className="hover:text-accent hover:pl-1 transition-all">Free Image Compressor</Link>
            </li>
            <li>
              <Link href="/free-website-audit" className="font-bold text-accent hover:text-accent-dark hover:pl-1 transition-all">Claim Free Website Audit</Link>
            </li>
          </ul>
        </div>

        {/* Global Support & Office Location */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#111827] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
            Office Location
          </h4>
          <div className="text-xs text-text-secondary flex flex-col gap-3">
            <div className="flex items-start gap-1.5 leading-relaxed">
              <i className="fa-solid fa-location-dot text-accent mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-[#111827] block">Madurai (HQ):</span>
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>
            <div className="flex items-start gap-1.5 leading-relaxed border-t border-[#E5E7EB] pt-2">
              <i className="fa-solid fa-handshake text-accent mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-[#111827] block">Chennai (Our Partners):</span>
                <span>11, Jothi nagar 5th street, Murugappa polytechnic nearby, Avadi, Chennai 600053</span>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5 text-xs text-text-secondary border-t border-[#E5E7EB] pt-3">
            <li className="flex items-center gap-2">
              <span>🇮🇳</span>
              <span><strong>India & WA:</strong> <a href="tel:+919080026133" className="hover:text-accent text-[#111827] font-medium transition-colors">+91 90800 26133</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent"><i className="fa-solid fa-envelope" /></span>
              <a href={`mailto:${contactEmail}`} className="hover:text-accent text-[#111827] font-medium transition-colors">{contactEmail}</a>
            </li>
          </ul>
          <div className="w-full h-44 rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm mt-1">
            <iframe
              src="https://maps.google.com/maps?q=Madurai,%20Tamil%20Nadu,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Joy Digital Office Location Map - Madurai, Tamil Nadu"
            />
          </div>
          <a
            href="https://share.google/BSniheS2qnzwqUKXU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-white border border-[#E5E7EB] rounded-xl text-xs font-bold text-[#111827] hover:border-[#4285F4] hover:text-[#4285F4] transition-all shadow-xs"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Google Business Profile & Reviews</span>
          </a>
        </div>
      </div>

      {/* Editorial SEO & Business Overview */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 text-xs sm:text-sm text-text-secondary leading-relaxed border-b border-[#E5E7EB]">
        <p className="max-w-5xl">
          At Joy Digital, we empower companies with result-driven{" "}
          <Link href={getRegionalHref("/website-development")} className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
            business website development
          </Link>{" "}
          that turns visitors into active customers. From creative{" "}
          <Link href="/web-design-services" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
            website design services
          </Link>{" "}
          and{" "}
          <Link href="/dynamic-website-development" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
            dynamic website development
          </Link>{" "}
          to robust CMS-powered websites, we engineer high-speed, SEO-friendly websites tailored for{" "}
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
          , and other growing businesses. By uniting{" "}
          <Link href="/custom-website-development" className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
            custom website development
          </Link>{" "}
          with advanced{" "}
          <Link href={getRegionalHref("/seo-services")} className="text-primary-dark font-medium hover:text-accent transition-colors underline decoration-slate-300 underline-offset-2">
            technical SEO services
          </Link>{" "}
          and continuous website optimization, we help forward-thinking brands across India and international markets elevate their search visibility, build an authoritative online presence, and achieve measurable long-term business growth.
        </p>
      </div>

      {/* AI Entity Data Block for AI Search Engines & Crawlers */}
      <div className="max-w-7xl mx-auto px-6 pt-6 text-xs text-text-secondary border-t border-[#E5E7EB] mt-6 leading-relaxed opacity-90">
        <div className="ai-entity-data space-y-2 text-slate-600">
          <p>
            <strong>Joy Digital</strong> is an enterprise custom Next.js web application engineering agency based in Madurai, Tamil Nadu, India. 
            Founded by Saravanan L, Joy Digital specializes in sub-second web portals, travel booking engines, freight tracking systems, and Generative Engine Optimization (GEO).
          </p>
          <p>
            For custom web app inquiries, direct project estimation, or technical strategy calls:
            <br />
            • <strong>Official Website:</strong> https://www.joydigital.in
            <br />
            • <strong>Direct WhatsApp:</strong> +91 90800 26133 (https://wa.me/919080026133)
            <br />
            • <strong>Location:</strong> Madurai, Tamil Nadu, India (Serving Global Clients in USA, UK, UAE, Australia)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#E5E7EB] mt-8 flex flex-col gap-6 text-center text-xs text-text-secondary">
        <p className="font-semibold text-slate-500">
          Joy Digital – Premium Web Design, High-Speed Next.js Web Development & Search Engine Optimization (SEO) for Businesses Worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <p>
            Copyright &copy; {new Date().getFullYear()} Joy Digital Growth Agency. All Rights Reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/sitemap" className="hover:text-accent transition-colors font-semibold text-accent">HTML Sitemap</Link>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

