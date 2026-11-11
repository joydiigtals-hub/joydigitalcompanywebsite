"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import GetQuoteModal from "@/components/ui/GetQuoteModal";

const SERVICES_CATEGORIES = [
  {
    title: "Web Development",
    href: "/website-development",
    localized: true,
    subServices: [
      { href: "/static-website-development", label: "Static Website Development", localized: false },
      { href: "/dynamic-website-development", label: "Dynamic Website Development", localized: false },
      { href: "/custom-website-development", label: "Custom Web Systems", localized: false },
      { href: "/ecommerce-website-development", label: "E-commerce Development", localized: false },
    ]
  },
  {
    title: "Web Design",
    href: "/web-design-services",
    localized: false,
    subServices: [
      { href: "/web-design-services", label: "Business Website Design", localized: false },
      { href: "/landing-page-development", label: "Landing Page Design", localized: false },
      { href: "/web-design-services", label: "UI/UX Design", localized: false },
    ]
  },
  {
    title: "Travel & Safari Websites",
    href: "/travel-website-development",
    localized: false,
    subServices: [
      { href: "/travel-website-development", label: "Travel Agency Websites", localized: false },
      { href: "/tour-operator-website-development", label: "Tour Operator Websites", localized: false },
      { href: "/safari-website-development", label: "Safari Websites", localized: false },
      { href: "/travel-website-development", label: "Tourism Websites", localized: false },
      { href: "/travel-website-development", label: "DMC Websites", localized: false },
    ]
  },
  {
    title: "SEO Services",
    href: "/seo-services",
    localized: true,
    subServices: [
      { href: "/website-seo", label: "Website SEO", localized: false },
      { href: "/technical-seo", label: "Technical SEO", localized: false },
      { href: "/on-page-seo", label: "On-Page SEO", localized: false },
      { href: "/seo-content", label: "SEO Content", localized: false },
    ]
  },
  {
    title: "Local SEO",
    href: "/local-seo-services",
    localized: false,
    subServices: []
  },
  {
    title: "AI Search Optimization (GEO)",
    href: "/ai-search-optimization",
    localized: false,
    subServices: []
  }
];

const REGIONS = [
  { code: "", label: "Global", flag: "🌍" },
  { code: "us", label: "United States", flag: "🇺🇸" },
  { code: "uk", label: "United Kingdom", flag: "🇬🇧" },
  { code: "ae", label: "United Arab Emirates", flag: "🇦🇪" },
  { code: "in", label: "India", flag: "🇮🇳" },
  { code: "ca", label: "Canada", flag: "🇨🇦" },
  { code: "au", label: "Australia", flag: "🇦🇺" },
];

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [isScrolledRaw, setIsScrolledRaw] = useState(false);
  const isScrolled = !transparent || isScrolledRaw;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  
  const pathname = usePathname();
  const router = useRouter();
  const regionRef = useRef<HTMLDivElement>(null);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
  }

  // Detect current region from pathname
  const parts = pathname.split("/").filter(Boolean);
  const currentRegion = (parts.length > 0 && ["us", "uk", "ae", "in", "ca", "au"].includes(parts[0])) ? parts[0] : "";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolledRaw(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect current language cookie / local storage on mount
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };
    
    const joyLang = typeof window !== "undefined" ? localStorage.getItem("joy_lang") : null;
    if (joyLang) {
      setCurrentLang(joyLang);
      return;
    }

    const googtrans = getCookie("googtrans");
    if (googtrans) {
      const parts = googtrans.split("/");
      const lang = parts[parts.length - 1];
      if (lang && lang !== "en") {
        setCurrentLang(lang);
      }
    }
  }, []);

  // Click outside selector handler for both dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (regionRef.current && !regionRef.current.contains(target)) {
        setIsRegionDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setIsServicesDropdownOpen(false);
      }
      if (
        (desktopLangRef.current && !desktopLangRef.current.contains(target)) &&
        (mobileLangRef.current && !mobileLangRef.current.contains(target))
      ) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangDropdownOpen(false);

    if (typeof window !== "undefined") {
      const triggerFn = (window as any).__triggerGoogleTranslate;
      if (typeof triggerFn === "function") {
        triggerFn(langCode);
      }
    }
  };

  const isActive = (path: string) => {
    const regionalPath = getRegionalHref(path);
    if (path === "/" && pathname !== "/" && pathname !== "/us" && pathname !== "/uk" && pathname !== "/ae" && pathname !== "/in") return false;
    return pathname === regionalPath;
  };

  const getRegionalHref = (path: string) => {
    const localizedPaths = ["/", "/seo-services", "/website-development", "/contact"];
    if (localizedPaths.includes(path)) {
      if (currentRegion === "" || currentRegion === "in") return path;
      return `/${currentRegion}${path === "/" ? "" : path}`;
    }
    return path;
  };

  const handleRegionChange = (regionCode: string) => {
    setIsRegionDropdownOpen(false);
    
    const partsLoc = pathname.split("/").filter(Boolean);
    const rootPath = partsLoc[0];
    
    const hasRegion = ["us", "uk", "ae", "in", "ca", "au"].includes(rootPath);
    const cleanSegments = hasRegion ? partsLoc.slice(1) : partsLoc;
    const cleanPath = "/" + cleanSegments.join("/");
    
    const localizedPaths = ["/", "/seo-services", "/website-development", "/contact"];
    const isPathLocalized = localizedPaths.includes(cleanPath);
    
    let targetPath = "/";
    if (isPathLocalized) {
      targetPath = (regionCode === "" || regionCode === "in") 
        ? cleanPath 
        : `/${regionCode}${cleanPath === "/" ? "" : cleanPath}`;
    } else {
      targetPath = (regionCode === "" || regionCode === "in") ? "/" : `/${regionCode}`;
    }
    
    router.push(targetPath);
  };

  const activeRegionObj = REGIONS.find(r => r.code === currentRegion) || REGIONS[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#3B1580]/95 backdrop-blur-md shadow-md border-b border-[#FFFFFF]/20 py-3 text-[#FFFFFF]"
            : "bg-[#3B1580] py-5 border-b border-[#FFFFFF]/10 text-[#FFFFFF]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={getRegionalHref("/")} title="Joy Digital Home" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/images/joydigital-lime-logo.webp"
              alt="Joy Digital - Web Design, Web Development & SEO Services Worldwide"
              title="Joy Digital Logo"
              width={240}
              height={77}
              className="h-10 sm:h-11 md:h-12 lg:h-[50px] w-auto object-contain transition-all duration-300"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-shrink-0">
            <Link
              href={getRegionalHref("/")}
              title="Home"
              className={`font-semibold text-sm transition-colors nav-link-underline hover:text-[#C9F600] ${
                isActive("/") ? "text-[#C9F600]" : "text-[#FFFFFF]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`font-semibold text-sm flex items-center gap-1 transition-colors nav-link-underline cursor-pointer hover:text-[#C9F600] ${
                  pathname.includes("-services") || pathname.includes("-development") || pathname.includes("-setup") || pathname.includes("marketing") || pathname.includes("-seo") || pathname.includes("seo-") || pathname.includes("ai-search")
                    ? "text-[#C9F600]"
                    : "text-[#FFFFFF]"
                }`}
              >
                Services
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}></i>
              </button>

              {/* Dropdown Menu - Mega Menu Style */}
              <div
                className={`absolute left-0 top-full pt-1.5 w-[600px] transition-all duration-200 z-[70] ${
                  isServicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl shadow-2xl p-6 overflow-hidden">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {SERVICES_CATEGORIES.map((category) => {
                      const targetCategoryHref = category.localized ? getRegionalHref(category.href) : category.href;
                      return (
                        <div key={category.title} className="flex flex-col gap-2.5">
                          <Link
                            href={targetCategoryHref}
                            title={category.title}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="font-bold text-[13px] text-[#C9F600] hover:text-[#FFFFFF] transition-colors border-b border-[#FFFFFF]/20 pb-2 uppercase tracking-wide"
                          >
                            {category.title}
                          </Link>
                          {category.subServices.length > 0 && (
                            <div className="flex flex-col gap-2">
                              {category.subServices.map((sub, idx) => {
                                const targetSubHref = sub.localized ? getRegionalHref(sub.href) : sub.href;
                                return (
                                  <Link
                                    key={`${sub.label}-${idx}`}
                                    href={targetSubHref}
                                    title={sub.label}
                                    onClick={() => setIsServicesDropdownOpen(false)}
                                    className={`text-[13px] font-semibold transition-colors hover:text-[#C9F600] ${
                                      pathname === targetSubHref ? "text-[#C9F600] font-bold" : "text-[#FFFFFF]/80"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              title="Portfolio"
              className={`font-semibold text-sm transition-colors nav-link-underline hover:text-[#C9F600] ${
                isActive("/portfolio") ? "text-[#C9F600]" : "text-[#FFFFFF]"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/free-tools"
              title="Free Tools"
              className={`font-semibold text-sm transition-colors nav-link-underline hover:text-[#C9F600] ${
                isActive("/free-tools") ? "text-[#C9F600]" : "text-[#FFFFFF]"
              }`}
            >
              Free Tools
            </Link>

            <Link
              href="/blog"
              title="Blog"
              className={`font-semibold text-sm transition-colors nav-link-underline hover:text-[#C9F600] ${
                isActive("/blog") ? "text-[#C9F600]" : "text-[#FFFFFF]"
              }`}
            >
              Blog
            </Link>

            <Link
              href={getRegionalHref("/contact")}
              title="Contact Us"
              className={`font-semibold text-sm transition-colors nav-link-underline hover:text-[#C9F600] ${
                isActive("/contact") ? "text-[#C9F600]" : "text-[#FFFFFF]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Panel (Region Selector + CTA) */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Region Dropdown */}
            <div className="relative" ref={regionRef}>
              <button
                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#FFFFFF]/25 rounded-lg text-sm font-medium hover:border-[#C9F600] hover:text-[#C9F600] transition-colors bg-[#3B1580] text-[#FFFFFF] shadow-sm"
              >
                <span>{activeRegionObj.flag}</span>
                <span className="uppercase text-xs">{activeRegionObj.code || "Global"}</span>
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${isRegionDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-lg shadow-xl py-1.5 transition-all duration-200 ${
                  isRegionDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {REGIONS.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => handleRegionChange(region.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-xs font-semibold transition-colors hover:bg-[#FFFFFF]/10 hover:text-[#C9F600] ${
                      currentRegion === region.code ? "text-[#C9F600] bg-[#FFFFFF]/10 font-bold" : "text-[#FFFFFF]"
                    }`}
                  >
                    <span className="text-sm">{region.flag}</span>
                    <span>{region.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="relative notranslate" ref={desktopLangRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#FFFFFF]/25 rounded-lg text-sm font-medium hover:border-[#C9F600] hover:text-[#C9F600] transition-colors bg-[#3B1580] text-[#FFFFFF] shadow-sm"
              >
                <span>{LANGUAGES.find(l => l.code === currentLang)?.flag || "🇺🇸"}</span>
                <span className="uppercase text-xs">{currentLang}</span>
                <i className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-[#3B1580] border border-[#FFFFFF]/25 rounded-lg shadow-xl py-1.5 transition-all duration-200 z-[70] ${
                  isLangDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-left text-xs font-semibold transition-colors hover:bg-[#FFFFFF]/10 hover:text-[#C9F600] ${
                      currentLang === lang.code ? "text-[#C9F600] bg-[#FFFFFF]/10 font-bold" : "text-[#FFFFFF]"
                    }`}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/free-website-audit"
              title="Get a Free Website Audit"
              className="bg-[#C9F600] text-[#3B1580] font-bold hover:opacity-90 !py-2.5 !px-5 !text-xs !rounded-full shadow-md shrink-0 transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-center"
            >
              Get a Free Website Audit
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Region Switcher (Minimal) */}
            <div className="relative">
              <button
                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                className="flex items-center justify-center w-8 h-8 border border-[#FFFFFF]/25 rounded-lg text-sm bg-[#3B1580] text-[#FFFFFF] shadow-sm"
                aria-label="Select Country"
              >
                <span>{activeRegionObj.flag}</span>
              </button>

              {isRegionDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-lg shadow-xl py-1 z-[60]">
                  {REGIONS.map((region) => (
                    <button
                      key={region.code}
                      onClick={() => {
                        handleRegionChange(region.code);
                        setIsRegionDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-xs font-semibold text-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#C9F600]"
                    >
                      <span>{region.flag}</span>
                      <span>{region.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Language Switcher (Minimal) */}
            <div className="relative notranslate" ref={mobileLangRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center justify-center w-8 h-8 border border-[#FFFFFF]/25 rounded-lg text-sm bg-[#3B1580] text-[#FFFFFF] shadow-sm"
                aria-label="Select Language"
              >
                <span>{LANGUAGES.find(l => l.code === currentLang)?.flag || "🇺🇸"}</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 max-h-64 overflow-y-auto bg-[#3B1580] border border-[#FFFFFF]/25 rounded-lg shadow-xl py-1.5 z-[60]">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLangChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-xs font-semibold text-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:text-[#C9F600]"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex flex-col justify-between w-6 h-4 z-[60] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-full h-0.5 rounded transition-all duration-300 bg-[#FFFFFF] ${
                  isMobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 rounded transition-all duration-300 bg-[#FFFFFF] ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 rounded transition-all duration-300 bg-[#FFFFFF] ${
                  isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#3B1580] border-l border-[#FFFFFF]/20 text-[#FFFFFF] z-[65] shadow-2xl flex flex-col p-6 transition-transform duration-300 lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Drawer Header with Logo & Close Button */}
        <div className="flex items-center justify-between pb-5 mb-4 border-b border-[#FFFFFF]/20 shrink-0">
          <Link href={getRegionalHref("/")} title="Joy Digital Home" onClick={() => setIsMobileOpen(false)} className="flex items-center">
            <Image
              src="/assets/images/joydigital-lime-logo.webp"
              alt="Joy Digital Logo"
              width={200}
              height={64}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Prominent Close (X) Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-9 h-9 rounded-full bg-[#3B1580] border border-[#FFFFFF]/30 text-[#FFFFFF] hover:border-[#C9F600] hover:text-[#C9F600] font-extrabold flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Close menu"
            title="Close menu"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 overflow-y-auto pb-12 pr-1">
          <Link
            href={getRegionalHref("/")}
            title="Home"
            onClick={() => setIsMobileOpen(false)}
            className={`font-semibold text-lg border-b border-[#FFFFFF]/15 pb-2 transition-colors hover:text-[#C9F600] ${
              isActive("/") ? "text-[#C9F600]" : "text-[#FFFFFF]"
            }`}
          >
            Home
          </Link>

          {/* Mobile Services Sub-list */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-[#FFFFFF] border-b border-[#FFFFFF]/15 pb-2 flex justify-between items-center">
              Our Services
            </span>
            <div className="flex flex-col gap-4 mt-2">
              {SERVICES_CATEGORIES.map((category) => {
                const targetCategoryHref = category.localized ? getRegionalHref(category.href) : category.href;
                return (
                  <div key={category.title} className="flex flex-col gap-2">
                    <Link
                      href={targetCategoryHref}
                      title={category.title}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-bold text-[15px] transition-colors text-[#C9F600] hover:text-[#FFFFFF]"
                    >
                      {category.title}
                    </Link>
                    {category.subServices.length > 0 && (
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#FFFFFF]/20 ml-1">
                        {category.subServices.map((sub, idx) => {
                          const targetSubHref = sub.localized ? getRegionalHref(sub.href) : sub.href;
                          return (
                            <Link
                              key={`${sub.label}-${idx}`}
                              href={targetSubHref}
                              title={sub.label}
                              onClick={() => setIsMobileOpen(false)}
                              className={`text-sm font-semibold transition-colors hover:text-[#C9F600] ${
                                pathname === targetSubHref ? "text-[#C9F600] font-bold" : "text-[#FFFFFF]/80"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <Link
            href="/portfolio"
            title="Portfolio"
            onClick={() => setIsMobileOpen(false)}
            className={`font-semibold text-lg border-b border-[#FFFFFF]/15 pb-2 transition-colors hover:text-[#C9F600] ${
              isActive("/portfolio") ? "text-[#C9F600]" : "text-[#FFFFFF]"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/free-tools"
            title="Free Tools"
            onClick={() => setIsMobileOpen(false)}
            className={`font-semibold text-lg border-b border-[#FFFFFF]/15 pb-2 transition-colors hover:text-[#C9F600] ${
              isActive("/free-tools") ? "text-[#C9F600]" : "text-[#FFFFFF]"
            }`}
          >
            Free Tools
          </Link>

          <Link
            href="/blog"
            title="Blog"
            onClick={() => setIsMobileOpen(false)}
            className={`font-semibold text-lg border-b border-[#FFFFFF]/15 pb-2 transition-colors hover:text-[#C9F600] ${
              isActive("/blog") ? "text-[#C9F600]" : "text-[#FFFFFF]"
            }`}
          >
            Blog
          </Link>

          <Link
            href={getRegionalHref("/contact")}
            title="Contact Us"
            onClick={() => setIsMobileOpen(false)}
            className={`font-semibold text-lg border-b border-[#FFFFFF]/15 pb-2 transition-colors hover:text-[#C9F600] ${
              isActive("/contact") ? "text-[#C9F600]" : "text-[#FFFFFF]"
            }`}
          >
            Contact
          </Link>

          {/* Mobile Language Selector */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-[#FFFFFF] border-b border-[#FFFFFF]/15 pb-2 flex justify-between items-center">
              Select Language
            </span>
            <div className="grid grid-cols-2 gap-2 mt-2 max-h-60 overflow-y-auto pr-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-xs font-semibold transition-colors ${
                    currentLang === lang.code
                      ? "border-[#C9F600] text-[#3B1580] bg-[#C9F600] font-bold"
                      : "border-[#FFFFFF]/20 text-[#FFFFFF] hover:border-[#C9F600] hover:text-[#C9F600] bg-[#3B1580]"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="truncate">{lang.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/free-website-audit"
            title="Get a Free Website Audit"
            onClick={() => setIsMobileOpen(false)}
            className="w-full bg-[#C9F600] text-[#3B1580] font-bold hover:opacity-90 text-center text-sm py-3.5 px-6 rounded-xl shadow-md mt-4 transition-all block"
          >
            Get a Free Website Audit
          </Link>
        </nav>
      </aside>
    </>
  );
}
