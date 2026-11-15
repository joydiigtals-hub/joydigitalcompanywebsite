"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import ViewCounter from "@/components/ui/ViewCounter";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  tags?: string[];
  content?: string;
}

interface BlogListingContainerProps {
  posts: BlogPost[];
}

export default function BlogListingContainer({ posts }: BlogListingContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Unique categories list
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  }, [posts]);

  // Category post counts map
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    posts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [posts]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get("search") || params.get("tag");
      const categoryParam = params.get("category");
      if (queryParam) {
        setSearchQuery(queryParam);
      }
      if (categoryParam && categories.includes(categoryParam)) {
        setActiveCategory(categoryParam);
      }
    }
  }, [categories]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Estimated reading time calculation helper
  const getReadingTime = (content?: string, description?: string) => {
    if (content && content.length > 50) {
      const words = content.trim().split(/\s+/).length;
      return `${Math.max(2, Math.ceil(words / 220))} min read`;
    }
    const words = (description || "").trim().split(/\s+/).length;
    return `${Math.max(3, Math.ceil(words / 18))} min read`;
  };

  // Filter posts based on category, search text, and tags
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const lowerQuery = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !lowerQuery ||
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.category.toLowerCase().includes(lowerQuery) ||
        Boolean(post.tags && post.tags.some((t) => t.toLowerCase().includes(lowerQuery)));
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Map post categories to local project images for thumbnails
  const getThumbnail = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("seo") || cat.includes("maps") || cat.includes("local")) {
      return "/assets/images/gbp-showcase.webp";
    } else if (cat.includes("dev") || cat.includes("nextjs") || cat.includes("code")) {
      return "/assets/images/hero-banner.webp";
    } else if (cat.includes("design") || cat.includes("logo")) {
      return "/assets/images/business-card-mockup.webp";
    } else if (cat.includes("market") || cat.includes("strategy") || cat.includes("ad")) {
      return "/assets/images/marketing-poster-mockup.webp";
    }
    return "/assets/images/hero-banner.webp";
  };

  // Reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const cards = document.querySelectorAll(".blog-card-reveal");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [filteredPosts, activeCategory, searchQuery, currentPage]);

  // Determine whether to display the Hero / Featured story
  const showFeaturedStory = activeCategory === "All" && !searchQuery && currentPage === 1 && filteredPosts.length > 0;
  const featuredPost = showFeaturedStory ? filteredPosts[0] : null;

  // The posts available for the grid
  const availablePosts = showFeaturedStory ? filteredPosts.slice(1) : filteredPosts;
  const totalPages = Math.ceil(availablePosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedGridPosts = availablePosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="w-full bg-[#0D051E] text-white">
      {/* Blog Hero Section */}
      <section className="pt-8 sm:pt-12 pb-14 bg-gradient-to-b from-[#14082B] via-[#0D051E] to-[#0D051E] text-center relative overflow-hidden border-b border-white/10 select-none">
        {/* Subtle radial glow */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,246,0,0.06),transparent)] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(59,21,128,0.25),transparent)] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#C9F600]/10 text-[#C9F600] font-bold text-xs uppercase tracking-widest px-4.5 py-1.5 rounded-full border border-[#C9F600]/30 mb-5 shadow-[0_0_20px_rgba(201,246,0,0.15)] animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9F600] animate-pulse" />
            Knowledge Base
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight animate-slide-up">
            Our Digital Growth <span className="text-[#C9F600]">Blog Hub</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#D9CCF5]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Actionable Next.js engineering guides, technical SEO teardowns, Google Maps local rankings, and conversion rate optimization strategies to grow your organic visibility.
          </p>

          {/* Search bar & Categories filter */}
          <div className="max-w-2xl mx-auto mt-10 flex flex-col gap-6 px-2">
            {/* Search Input */}
            <div className="relative group/search">
              <input
                type="text"
                placeholder="Search actionable articles, frameworks, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#160B30] border border-white/15 focus:border-[#C9F600] focus:ring-4 focus:ring-[#C9F600]/10 text-xs sm:text-sm text-white placeholder-[#D9CCF5]/40 px-11 py-3.5 rounded-2xl outline-none transition-all font-medium shadow-lg"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-[#D9CCF5]/50 group-focus-within/search:text-[#C9F600] transition-colors text-sm" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D9CCF5]/50 hover:text-white text-xs cursor-pointer p-1"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark text-sm" />
                </button>
              )}
            </div>

            {/* Category Chips with Horizontal Scroll and Edge Fade */}
            <div className="relative w-full">
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none select-none max-w-full justify-start md:justify-center px-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs font-bold px-4 py-2 rounded-xl border whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? "bg-[#C9F600] text-[#120526] border-[#C9F600] shadow-md shadow-[#C9F600]/25 scale-[1.02]"
                          : "bg-[#160B30] text-[#D9CCF5] border-white/10 hover:border-[#C9F600]/40 hover:text-white"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                          isActive
                            ? "bg-[#120526]/20 text-[#120526]"
                            : "bg-white/10 text-[#D9CCF5]/70"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Topic / Keyword Filter Indicator */}
            {searchQuery && (
              <div className="flex items-center justify-center gap-2 animate-fade-in select-none">
                <span className="text-xs font-medium text-[#D9CCF5]/60">
                  Filtering results by:
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-[#C9F600]/15 text-[#C9F600] border border-[#C9F600]/30 px-3.5 py-1 rounded-full shadow-sm">
                  #{searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="cursor-pointer ml-1 text-[#C9F600]/70 hover:text-white transition-colors"
                    title="Clear filter"
                    aria-label="Clear filter"
                  >
                    <i className="fa-solid fa-xmark text-xs" />
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-[#0D051E]">
        <div className="max-w-7xl mx-auto px-6">
          {/* No Articles Found State */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 select-none bg-[#14082B] border border-white/10 rounded-3xl max-w-xl mx-auto p-8 shadow-xl">
              <div className="text-[#C9F600] text-5xl mb-4">
                <i className="fa-solid fa-folder-open" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-xs sm:text-sm text-[#D9CCF5]/70 font-normal mb-6">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another keyword or browse all topics.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#C9F600] text-[#120526] font-bold text-xs hover:opacity-90 transition-opacity"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {/* 🌟 1. FEATURED / HERO ARTICLE CARD (Only on Page 1 with All Categories) */}
              {featuredPost && (
                <div className="p-6 sm:p-8 lg:p-10 rounded-[28px] bg-gradient-to-br from-[#180A38] via-[#1D0C44] to-[#12062B] border border-white/15 hover:border-[#C9F600]/60 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 bg-[#C9F600]/5 rounded-full blur-3xl pointer-events-none" 
                    aria-hidden="true" 
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                    {/* Left: Featured Image */}
                    <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                      <Image
                        src={featuredPost.image || getThumbnail(featuredPost.category)}
                        alt={featuredPost.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                        <span className="bg-[#C9F600] text-[#120526] font-black text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                          ★ Featured Guide
                        </span>
                        <span className="bg-[#120526]/85 backdrop-blur-md text-white border border-white/15 font-bold text-[10px] tracking-wider px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: Rich Metadata & CTA */}
                    <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#D9CCF5]/70 font-medium mb-3">
                          <span>
                            {new Date(featuredPost.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span>•</span>
                          <span className="text-[#C9F600] font-bold">
                            {getReadingTime(featuredPost.content, featuredPost.description)}
                          </span>
                          <span>•</span>
                          <ViewCounter slug={featuredPost.slug} increment={false} />
                        </div>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-[#C9F600] transition-colors leading-tight mb-4">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-[#D9CCF5]/80 leading-relaxed line-clamp-3 mb-6 font-normal">
                          {featuredPost.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#3B1580] to-[#C9F600] p-[1.5px] shrink-0">
                            <div className="w-full h-full rounded-full bg-[#120526] flex items-center justify-center text-[10px] font-bold text-[#C9F600]">
                              JD
                            </div>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">
                              By {featuredPost.author || "Joy Digital"}
                            </span>
                            <span className="text-[10px] text-[#D9CCF5]/60 font-medium">
                              Engineering & SEO Team
                            </span>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9F600] text-[#120526] font-bold text-xs hover:opacity-90 transition-opacity shadow-lg shadow-[#C9F600]/20"
                        >
                          <span>Read Full Guide</span>
                          <i className="fa-solid fa-arrow-right text-[10px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3-COLUMN ARTICLES GRID */}
              <div
                key={`${activeCategory}-${searchQuery}-${currentPage}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedGridPosts.map((post, idx) => (
                  <React.Fragment key={post.slug}>
                    {/* Mid-Grid Conversion Banner (Inserted after 3rd article on Page 1) */}
                    {idx === 3 && currentPage === 1 && (
                      <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 sm:p-10 rounded-[28px] bg-gradient-to-r from-[#1E0942] via-[#2A0E5C] to-[#1E0942] border border-[#C9F600]/30 shadow-2xl relative overflow-hidden my-2 group">
                        <div 
                          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,246,0,0.08),transparent)] pointer-events-none" 
                          aria-hidden="true" 
                        />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                          <div className="max-w-2xl">
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C9F600] block mb-2">
                              ★ Free Technical Consultation
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                              Curious how your site scores on Core Web Vitals and Google Maps?
                            </h3>
                            <p className="text-xs sm:text-sm text-[#D9CCF5]/80 font-normal">
                              We analyze your site architecture, technical SEO tags, and conversion bottlenecks — completely free in 24 hours.
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#C9F600] text-[#120526] font-bold text-xs sm:text-sm hover:opacity-90 shadow-xl shadow-[#C9F600]/20 transition-all flex items-center gap-2"
                          >
                            <span>Request Free Audit</span>
                            <i className="fa-solid fa-arrow-right text-xs" />
                          </Link>
                        </div>
                      </div>
                    )}

                    <article
                      style={{ transitionDelay: prefersReducedMotion ? "0ms" : `${(idx % 3) * 80}ms` }}
                      className="bg-[#14082B] border border-white/10 rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#C9F600]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between reveal-hidden blog-card-reveal group"
                    >
                      <div>
                        {/* Thumbnail */}
                        <div className="relative w-full aspect-video bg-[#0A0418] overflow-hidden border-b border-white/10">
                          <Image
                            src={post.image || getThumbnail(post.category)}
                            alt={`${post.title} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            loading="lazy"
                            unoptimized
                          />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-[#120526]/85 backdrop-blur-md text-[#C9F600] border border-[#C9F600]/30 font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Article Info */}
                        <div className="p-6 sm:p-7 text-left">
                          <div className="flex items-center gap-2 mb-3 text-[10px] text-[#D9CCF5]/60 font-medium">
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span>•</span>
                            <span className="text-[#C9F600] font-semibold">
                              {getReadingTime(post.content, post.description)}
                            </span>
                            <span>•</span>
                            <ViewCounter slug={post.slug} increment={false} />
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-[#C9F600] transition-colors line-clamp-2">
                            <Link href={`/blog/${post.slug}`} title={post.title}>
                              {post.title}
                            </Link>
                          </h3>

                          <p className="text-xs text-[#D9CCF5]/75 leading-relaxed line-clamp-3 font-normal">
                            {post.description}
                          </p>

                          {/* Topic Badges on Card */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-4 border-t border-white/10 select-none">
                              {post.tags.slice(0, 2).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setSearchQuery(tag);
                                  }}
                                  className="text-[9px] font-bold text-[#D9CCF5] bg-[#1E0C3D] hover:bg-[#C9F600]/20 hover:text-[#C9F600] hover:border-[#C9F600]/40 border border-white/10 px-2 py-0.5 rounded-md cursor-pointer transition-colors"
                                >
                                  #{tag}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="text-[9px] font-bold text-[#D9CCF5]/50">
                                  +{post.tags.length - 2}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 sm:px-7 py-4 border-t border-white/10 bg-[#100624]/70 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#C9F600]/20 border border-[#C9F600]/40 flex items-center justify-center text-[8px] font-bold text-[#C9F600]">
                            JD
                          </div>
                          <span className="text-[10px] text-[#D9CCF5]/70 font-bold">
                            By {post.author}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold text-[#C9F600] hover:text-white flex items-center gap-1.5 group/link"
                        >
                          Read Article{" "}
                          <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </article>
                  </React.Fragment>
                ))}
              </div>

              {/* Public Blog Pagination Bar */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs font-bold text-[#D9CCF5]/70 select-none">
                  <div>
                    Showing{" "}
                    <span className="text-white font-extrabold">{startIndex + 1}</span> to{" "}
                    <span className="text-white font-extrabold">
                      {Math.min(startIndex + postsPerPage, availablePosts.length)}
                    </span>{" "}
                    of <span className="text-white font-extrabold">{availablePosts.length}</span> growth articles
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                        window.scrollTo({ top: 380, behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-[#160B30] hover:bg-[#200F42] text-white border border-white/15 rounded-xl text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-chevron-left text-[10px]" /> Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 380, behavior: "smooth" });
                        }}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? "bg-[#C9F600] text-[#120526] font-black shadow-lg shadow-[#C9F600]/25"
                            : "bg-[#160B30] hover:bg-[#200F42] text-white border border-white/15"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    <button
                      onClick={() => {
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: 380, behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-[#160B30] hover:bg-[#200F42] text-white border border-white/15 rounded-xl text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      Next <i className="fa-solid fa-chevron-right text-[10px]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
