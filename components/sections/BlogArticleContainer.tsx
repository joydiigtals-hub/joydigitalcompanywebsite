"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ViewCounter from "@/components/ui/ViewCounter";
import BlogShareButtons from "@/components/ui/BlogShareButtons";
import { BlogPost } from "@/lib/blog";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

interface BlogArticleContainerProps {
  post: BlogPost;
  htmlContent: string;
  relatedPosts: BlogPost[];
  slug: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogArticleContainer({ post, htmlContent, relatedPosts, slug }: BlogArticleContainerProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Mappings for related post thumbnails
  const getThumbnail = (category: string) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("seo") || cat.includes("maps") || cat.includes("local")) {
      return "/assets/images/gbp-showcase.webp";
    } else if (cat.includes("dev") || cat.includes("nextjs") || cat.includes("code")) {
      return "/assets/images/hero-banner.webp";
    } else if (cat.includes("design") || cat.includes("logo")) {
      return "/assets/images/business-card-mockup.webp";
    }
    return "/assets/images/marketing-poster-mockup.webp";
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Compute Word Count & Reading Time
  const cleanText = (post.content || "").replace(/<[^>]+>/g, " ").replace(/[#*`_>-\[\]()]/g, " ").trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Split htmlContent at 2nd or 3rd H2 for High-Converting Mid-Article Conversion Callout
  const { beforeHtml, afterHtml } = React.useMemo(() => {
    if (!htmlContent) return { beforeHtml: "", afterHtml: "" };
    const h2Regex = /<h2[^>]*>/gi;
    const matches: number[] = [];
    let match;
    while ((match = h2Regex.exec(htmlContent)) !== null) {
      matches.push(match.index);
    }
    // Prefer splitting before 3rd H2 if available, or 2nd H2
    if (matches.length >= 2) {
      const splitAt = matches.length >= 3 ? matches[2] : matches[1];
      return {
        beforeHtml: htmlContent.slice(0, splitAt),
        afterHtml: htmlContent.slice(splitAt),
      };
    }
    // Fallback: split after 3rd paragraph </p>
    const pRegex = /<\/p>/gi;
    const pMatches: number[] = [];
    while ((match = pRegex.exec(htmlContent)) !== null) {
      pMatches.push(match.index + 4);
    }
    if (pMatches.length >= 3) {
      const splitAt = pMatches[2];
      return {
        beforeHtml: htmlContent.slice(0, splitAt),
        afterHtml: htmlContent.slice(splitAt),
      };
    }
    return { beforeHtml: htmlContent, afterHtml: "" };
  }, [htmlContent]);

  // Parse Headings to generate Table of Contents (TOC)
  useEffect(() => {
    const contentArea = document.querySelector(".prose-content");
    if (!contentArea) return;

    const headings = contentArea.querySelectorAll("h2, h3");
    const parsedToc: TocItem[] = [];

    headings.forEach((heading, idx) => {
      const cleanId = heading.id || heading.textContent
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || `section-${idx}`;

      heading.id = cleanId;

      parsedToc.push({
        id: cleanId,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
      });
    });

    setToc(parsedToc);

    const headingsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.2 }
    );

    headings.forEach((heading) => headingsObserver.observe(heading));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const revealables = contentArea.querySelectorAll("img, blockquote, table, ul, ol");
    revealables.forEach((el) => {
      el.classList.add("reveal-hidden");
      revealObserver.observe(el);
    });

    const relatedGrid = document.querySelector(".related-cards-grid");
    if (relatedGrid) revealObserver.observe(relatedGrid);

    return () => {
      headingsObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [htmlContent]);

  const handleTocClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActiveId(id);
    }
  };

  // Structured Data (JSON-LD)
  const canonicalUrl = post.canonicalUrl || `https://www.joydigital.in/blog/${slug}`;
  const articleGraph = buildPageGraphSchema({
    url: canonicalUrl,
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.description,
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Blog", item: "https://www.joydigital.in/blog" },
      { name: post.category || "General", item: `https://www.joydigital.in/blog?category=${encodeURIComponent(post.category || "General")}` },
      { name: post.title, item: canonicalUrl },
    ],
    blogPosting: {
      headline: post.seoTitle || post.title,
      description: post.metaDescription || post.description,
      image: post.ogImage || post.image || "https://www.joydigital.in/assets/images/hero-banner.webp",
      datePublished: post.date,
      dateModified: post.lastUpdatedDate || post.date,
      authorName: post.authorName || post.author,
      authorRole: post.authorRole || "Technical Web Specialist",
    },
    faqs: post.faqs && post.faqs.length > 0 ? post.faqs : undefined,
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 select-text">
      
      {/* Schema Injection */}
      <JsonLd schema={articleGraph} />

      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="text-[10px] sm:text-xs font-bold text-[#6B6478] uppercase tracking-wider mb-8 select-none animate-fade-in text-left">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2 text-slate-300">/</span>
        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-primary font-extrabold">{post.category}</span>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-900 truncate max-w-[220px] inline-block height-4 align-bottom">{post.title}</span>
      </nav>

      {/* Header Details */}
      <header className="mb-10 text-left max-w-4xl animate-slide-up">
        <div className="flex flex-wrap items-center gap-3.5 mb-5 select-none">
          <span className="bg-primary/10 text-primary border border-primary-light/20 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>

          {post.tags && post.tags.slice(0, 2).map((tag, idx) => (
            <Link
              key={idx}
              href={`/blog?search=${encodeURIComponent(tag)}`}
              className="hidden sm:inline-flex items-center gap-1 bg-slate-100 hover:bg-primary/10 text-slate-650 hover:text-primary border border-slate-200/80 hover:border-primary/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-colors"
            >
              <span className="text-primary font-black">#</span>
              <span>{tag}</span>
            </Link>
          ))}
          
          <span className="text-[11px] text-[#64748B] font-semibold flex items-center gap-1">
            <i className="fa-regular fa-calendar text-[10px]" />
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>

          {post.lastUpdatedDate && post.lastUpdatedDate !== post.date && (
            <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-0.5 rounded-full border border-slate-200">
              Updated: {new Date(post.lastUpdatedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          )}

          <span className="text-slate-300">&bull;</span>
          <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
            <i className="fa-regular fa-clock text-[10px]" /> {readingTime} min read ({wordCount} words)
          </span>

          <span className="text-slate-300">&bull;</span>
          <ViewCounter slug={slug} increment={true} />
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Author Header Bar & Share Options */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-b border-[#E9E4F2] py-4 select-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary-light/20 text-primary font-bold text-sm flex items-center justify-center overflow-hidden shrink-0">
              {post.authorImage && post.authorImage.startsWith("/") || post.authorImage?.startsWith("http") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.authorImage} alt={post.authorName || post.author} width={40} height={40} className="w-full h-full object-cover" />
              ) : (
                (post.authorName || post.author || "J").charAt(0)
              )}
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 block leading-none mb-1">
                By <Link href="/author/saravanan" className="hover:text-primary transition-colors">{post.authorName || post.author}</Link>
              </span>
              <span className="text-[10px] text-[#64748B] font-semibold block">
                {post.authorRole || "Technical Web & Search Marketing Specialist"}
              </span>
            </div>
          </div>

          <BlogShareButtons title={post.title} slug={slug} variant="compact" />
        </div>
      </header>

      {/* Featured Cover Image */}
      {post.showFeaturedImage !== false && post.image && (
        <div className="mb-12 max-w-4xl text-left select-none">
          <div className="relative w-full aspect-video max-h-[500px] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-sm bg-slate-100">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized
            />
          </div>
          {post.imageCaption && (
            <p className="text-center text-xs text-slate-500 italic mt-2.5 font-medium">
              {post.imageCaption}
            </p>
          )}
        </div>
      )}

      {/* 2-Column Desktop Grid (Table of Contents + Prose Reader) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Table of Contents sidebar */}
        {post.showTableOfContents !== false && toc.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start select-none border-l-2 border-slate-100/80 pr-2 max-h-[80vh] overflow-y-auto scrollbar-thin">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 pl-3.5">
              Table of Contents
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-[#64748B]">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`block border-l-2 border-transparent transition-all duration-250 cursor-pointer text-left pl-3.5 hover:text-primary hover:border-primary/45 ${
                      activeId === item.id ? "toc-item-active font-extrabold text-primary border-primary" : ""
                    } ${item.level === 3 ? "pl-6 text-[11px]" : ""}`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Share in Sidebar */}
            <div className="mt-8 pt-5 border-t border-slate-150 pl-3.5">
              <BlogShareButtons title={post.title} slug={slug} variant="sidebar" />
            </div>

            {/* Sticky Lead Generation Widget in Desktop Sidebar */}
            <div className="mt-8 p-5 bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-2xl shadow-md border border-purple-500/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Ready to Consult</span>
              </div>
              <h4 className="text-xs font-black leading-snug mb-1.5 text-white">
                Want a Website That Generates Real Inbound Leads?
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed mb-4 font-medium">
                Custom sub-second Next.js web systems built with built-in Google &amp; AI Search (GEO) rankings.
              </p>
              <a
                href={`https://wa.me/919080026133?text=${encodeURIComponent(`Hi Joy Digital, I was reading "${post.title}" and would like to discuss building a high-converting website.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] mb-2"
              >
                <i className="fa-brands fa-whatsapp text-sm" /> Chat on WhatsApp
              </a>
              <Link
                href="/free-website-audit"
                className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] rounded-xl flex items-center justify-center gap-1.5 transition-all text-center border border-white/10"
              >
                <i className="fa-solid fa-gauge-high text-[10px] text-purple-300" /> Free Performance Audit
              </Link>
            </div>
          </aside>
        )}

        {/* Prose Reader Content Column */}
        <article className={`${post.showTableOfContents !== false && toc.length > 0 ? "lg:col-span-9" : "lg:col-span-12 max-w-4xl mx-auto"} bg-white border border-[#E2E8F0] p-8 sm:p-12 rounded-[32px] shadow-sm relative overflow-hidden w-full`}>
          
          <div 
            className="prose prose-blue max-w-none text-[#334155] leading-relaxed text-sm sm:text-base space-y-6.5
                       prose-content
                       prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight 
                       prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#E2E8F0] prose-h2:pb-2
                       prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 
                       prose-p:mb-5 prose-p:leading-relaxed
                       prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5 prose-ul:space-y-2
                       prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-5 prose-ol:space-y-2
                       prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:py-4.5 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:font-semibold prose-blockquote:text-slate-700
                       prose-img:rounded-2xl prose-img:shadow-md prose-img:border prose-img:border-[#E9E4F2] prose-img:mx-auto prose-img:my-8
                       prose-table:w-full prose-table:border-collapse prose-table:my-6
                       prose-th:bg-slate-50 prose-th:border prose-th:border-[#E2E8F0] prose-th:p-3.5 prose-th:text-xs prose-th:font-extrabold prose-th:text-slate-900
                       prose-td:border prose-td:border-[#E2E8F0] prose-td:p-3.5 prose-td:text-xs prose-td:font-semibold"
          >
            {afterHtml ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: beforeHtml }} />

                {/* High-Converting Mid-Article Conversion Callout Box */}
                <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl border border-purple-500/30 shadow-xl relative overflow-hidden not-prose select-none">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Turn Search Traffic into Inbound Leads
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold hidden sm:inline">&bull; Joy Digital Growth Architecture</span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug mb-2.5">
                      Need a Website That Converts Visitors into Direct Paying Clients?
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-6 max-w-2xl">
                      Most websites fail to generate sales because they are slow and lack conversion funnels. 
                      <strong className="text-white font-bold"> Joy Digital</strong> builds custom, sub-second Next.js web applications with 95+ PageSpeed, built-in SEO, and frictionless 1-click WhatsApp lead captures.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-slate-200 font-semibold">
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                        <i className="fa-solid fa-bolt text-yellow-400 text-sm" />
                        <span>Sub-second Load (&lt;800ms)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                        <i className="fa-solid fa-comments text-emerald-400 text-sm" />
                        <span>1-Click WhatsApp Funnel</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                        <i className="fa-solid fa-chart-line text-purple-400 text-sm" />
                        <span>Built-in Google &amp; GEO Rank</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={`https://wa.me/919080026133?text=${encodeURIComponent(`Hi Joy Digital, I was reading your article "${post.title}" and would like to consult on my website project.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                      >
                        <i className="fa-brands fa-whatsapp text-base" />
                        <span>Chat on WhatsApp (Instant Reply)</span>
                      </a>

                      <Link
                        href="/free-website-audit"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all text-center"
                      >
                        <i className="fa-solid fa-magnifying-glass-chart text-xs text-purple-300" />
                        <span>Get Free 20-Point Audit</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: afterHtml }} />
              </>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            )}
          </div>

          {/* Clean Topic Badges (Modern Semantic Tags) */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-200 select-none">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5 shrink-0">
                  <i className="fa-solid fa-tags text-primary text-xs" /> Related Topics:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.slice(0, 6).map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/blog?search=${encodeURIComponent(tag)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-primary/10 text-slate-700 hover:text-primary border border-slate-200 hover:border-primary/30 transition-all duration-200 shadow-2xs hover:scale-[1.02]"
                    >
                      <span className="text-primary font-black">#</span>
                      <span>{tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Internal Links Box (Recommended Related Services & Resources) */}
          {post.internalLinks && post.internalLinks.length > 0 && (
            <div className="mt-10 p-6 bg-gradient-to-br from-slate-50 to-purple-50/40 border border-primary/20 rounded-2xl select-none shadow-sm">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <i className="fa-solid fa-compass text-primary" /> Recommended Services &amp; Solutions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold">
                {post.internalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.targetUrl}
                      className="text-slate-800 hover:text-primary flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                    >
                      <span className="truncate pr-2 font-bold">{link.anchorText}</span>
                      <i className="fa-solid fa-arrow-right text-[10px] text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ Accordion Section (if present) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-10 border-t border-slate-200 select-none">
              <div className="mb-6">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-1">Knowledge Base</span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-3">
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all">
                      <button
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full p-4.5 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-100/60"
                      >
                        <span>{faq.question}</span>
                        <i className={`fa-solid fa-chevron-down text-xs text-slate-400 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4.5 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold bg-white border-t border-slate-150">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Share Article Callout Banner */}
          <div className="mt-12">
            <BlogShareButtons title={post.title} slug={slug} variant="box" />
          </div>

          {/* Author E-E-A-T Profile Card */}
          {post.showAuthorInfo !== false && (
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl select-none flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary-light/20 text-primary font-black text-xl flex items-center justify-center overflow-hidden shrink-0">
                {post.authorImage && (post.authorImage.startsWith("/") || post.authorImage.startsWith("http")) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.authorImage} alt={post.authorName || post.author} width={56} height={56} className="w-full h-full object-cover" />
                ) : (
                  (post.authorName || post.author || "J").charAt(0)
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-slate-900">{post.authorName || post.author}</span>
                  <span className="bg-primary/10 text-primary border border-primary/20 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                    {post.authorRole || "Technical Web Specialist"}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {post.authorBio || "Digital marketing strategist and Next.js web developer focusing on search optimization and conversion rate growth."}
                </p>
              </div>
            </div>
          )}

          {/* Link Back to Blog */}
          <div className="border-t border-[#E9E4F2] mt-10 pt-6 text-center select-none">
            <Link
              href="/blog"
              className="text-xs font-bold text-primary hover:text-primary-light flex items-center justify-center gap-2 group"
            >
              <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1.5 transition-transform" /> Back to Blog Articles
            </Link>
          </div>
        </article>

      </div>

      {/* Conversion CTA */}
      <section className="mt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border border-purple-500/30 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden select-none reveal-hidden blog-card-reveal text-center shadow-2xl">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase mb-4 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Direct Founder Consultation
          </span>
          <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight leading-snug">
            Ready to Build a Website That Actually Brings High-Ticket Clients?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-8">
            Don&apos;t let another month pass with zero organic inquiries. Talk directly with Joy Digital to engineer a sub-second Next.js platform optimized for Google Page 1 and Generative AI search.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/919080026133?text=${encodeURIComponent(`Hello Saravanan (Joy Digital), I was reading your blog "${post.title}" and want to discuss a new website project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.025] flex items-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-base" /> Chat on WhatsApp Directly
            </a>
            <Link
              href="/free-website-audit"
              className="bg-primary hover:bg-[#6D28D9] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.025] flex items-center gap-2"
            >
              <i className="fa-solid fa-gauge-high text-xs text-purple-200" /> Get Free 20-Point Audit
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/15 transition-all"
            >
              Request Custom Quote
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-400 text-xs" /> Response within 2 hours</span>
            <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-emerald-400 text-xs" /> No pushy sales pitch</span>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 border-t border-[#E9E4F2] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 select-none gap-4">
            <div className="text-left">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-2">Related Articles</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Further Reading & Case Insights</h3>
            </div>
            {(() => {
              const cat = (post.category || "").toLowerCase();
              let service = { href: "/website-development", label: "Custom Next.js Web Development" };
              if (cat.includes("travel") || cat.includes("safari")) {
                service = { href: "/travel-website-development", label: "Travel & Safari Web Development" };
              } else if (cat.includes("speed") || cat.includes("migration")) {
                service = { href: "/wordpress-to-nextjs-migration", label: "WordPress to Next.js Migration" };
              } else if (cat.includes("local") || cat.includes("map")) {
                service = { href: "/local-seo-services", label: "Local SEO & Google Maps Optimization" };
              } else if (cat.includes("seo") || cat.includes("geo")) {
                service = { href: "/seo-services", label: "Enterprise SEO & GEO Optimization" };
              } else if (cat.includes("commerce") || cat.includes("store")) {
                service = { href: "/website-for-ecommerce", label: "Headless Next.js E-Commerce" };
              } else if (cat.includes("design") || cat.includes("ui")) {
                service = { href: "/web-design-services", label: "Custom UI/UX & Web Design" };
              } else if (cat.includes("real estate")) {
                service = { href: "/website-for-real-estate", label: "Real Estate Web Development & SEO" };
              }
              return (
                <Link
                  href={service.href}
                  className="text-xs font-bold text-primary hover:text-primary-light flex items-center gap-1.5 self-start sm:self-auto bg-primary/5 hover:bg-primary/10 border border-primary/15 px-4 py-2 rounded-xl transition-all"
                >
                  <span>Explore Service: <strong>{service.label}</strong></span>
                  <i className="fa-solid fa-arrow-right-long text-[10px]" />
                </Link>
              );
            })()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left related-cards-grid reveal-hidden">
            {relatedPosts.map((rPost, idx) => (
              <div
                key={rPost.slug}
                style={{ transitionDelay: prefersReducedMotion ? "0ms" : `${idx * 100}ms` }}
                className="bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-video bg-slate-100 border-b border-[#E9E4F2] overflow-hidden">
                    <Image
                      src={rPost.image || getThumbnail(rPost.category)}
                      alt={`${rPost.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary text-white font-extrabold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm border border-primary-light/20">
                        {rPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      <Link href={`/blog/${rPost.slug}`} title={rPost.title}>
                        {rPost.title}
                      </Link>
                    </h4>
                    <p className="text-[10px] text-[#64748B] leading-relaxed line-clamp-2 font-semibold">
                      {rPost.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 border-t border-[#E9E4F2] bg-slate-50/50 flex items-center justify-between">
                  <span className="text-[9px] text-[#6B6478] font-bold">
                    By {rPost.authorName || rPost.author}
                  </span>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="text-[11px] font-bold text-primary hover:text-primary-light flex items-center gap-1.5"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
