import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { getPersonEntity, getOrganizationEntity, SITE_URL } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Saravanan L | Web Specialist & Founder | Joy Digital",
  description: "Technical web development and SEO guides written by Saravanan L, Founder & Technical Web Specialist at Joy Digital.",
  alternates: {
    canonical: "https://www.joydigital.in/author/saravanan",
  },
  openGraph: {
    title: "Saravanan L | Web Specialist & Founder | Joy Digital",
    description: "Technical web specialist focusing on sub-second Next.js web applications, Generative Engine Optimization (GEO), and data-driven organic search marketing.",
    url: "https://www.joydigital.in/author/saravanan",
  },
};

export default async function AuthorSaravananPage() {
  const allPosts = await getAllPosts();
  const authorPosts = allPosts.filter(
    (post) =>
      post.status !== "Draft" &&
      post.status !== "Archived" &&
      (post.author?.toLowerCase().includes("saravanan") ||
        post.authorName?.toLowerCase().includes("saravanan") ||
        !post.author)
  );

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationEntity(),
      getPersonEntity(),
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/author/saravanan#profilepage`,
        "url": `${SITE_URL}/author/saravanan`,
        "name": "Saravanan L Author Profile",
        "description": "Official author profile and published technical articles by Saravanan L, Founder of Joy Digital.",
        "mainEntity": { "@id": `${SITE_URL}/author/saravanan#person` }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={profilePageSchema} />
      <Header />
      <main className="pt-24 lg:pt-32 bg-[#3B1580] min-h-screen text-[#FFFFFF]">
        {/* Author Header Profile */}
        <section className="py-12 lg:py-16 bg-[#260B5E] border-b border-[#FFFFFF]/15 text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-bold text-[#D9CCF5] mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-[#C9F600] transition-colors">Home</Link>
              <span className="text-[#FFFFFF]/30">/</span>
              <Link href="/blog" className="hover:text-[#C9F600] transition-colors">Blog</Link>
              <span className="text-[#FFFFFF]/30">/</span>
              <span className="text-[#C9F600]">Saravanan L</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Profile Avatar / Badge */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#C9F600] shadow-2xl mb-6 bg-[#1F084E] ring-4 ring-[#C9F600]/20">
                  <Image
                    src="/assets/images/founder.jpg"
                    alt="Saravanan L - Founder & Technical Web Specialist at Joy Digital"
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="inline-flex items-center gap-2 bg-[#C9F600]/15 border border-[#C9F600]/30 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
                  <span className="w-2 h-2 bg-[#C9F600] rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-[#C9F600] uppercase tracking-wider">
                    Verified Technical Author &amp; Specialist
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-2">
                  Saravanan L
                </h1>
                <p className="text-sm font-semibold text-[#C9F600] mb-5">
                  Founder &amp; Technical Web Specialist at Joy Digital
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/saravanan-l-34a861154/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#3B1580] hover:bg-[#C9F600] hover:text-[#260B5E] border border-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shadow-md"
                    title="Connect on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-base" />
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="w-10 h-10 rounded-full bg-[#3B1580] hover:bg-[#C9F600] hover:text-[#260B5E] border border-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shadow-md"
                    title="Send Direct Email"
                  >
                    <i className="fa-solid fa-envelope text-base" />
                  </a>
                </div>
              </div>

              {/* Bio & Expertise details */}
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-xl lg:text-2xl font-bold text-[#FFFFFF] border-b border-[#FFFFFF]/15 pb-3">
                  About &amp; Technical Background
                </h2>
                <p className="text-sm text-[#FFFFFF]/90 leading-relaxed font-normal">
                  Saravanan L is a technical web specialist, search engineer, and the founder of <strong className="text-[#C9F600] font-bold">Joy Digital</strong>. With expertise in Next.js, React, Tailwind CSS, TypeScript, and modern search engine optimization, Saravanan specializes in engineering sub-second web platforms that rank highly on Google and scale organic client acquisition.
                </p>
                <p className="text-sm text-[#FFFFFF]/90 leading-relaxed font-normal">
                  He leads the technical research at Joy Digital around <strong className="text-[#C9F600] font-bold">Generative Engine Optimization (GEO)</strong>, structured JSON-LD schemas, mobile Core Web Vitals optimization, and conversion-focused web architecture across diverse industries including insurance, tourism, real estate, healthcare, and e-commerce.
                </p>

                {/* Core Expertise Tags */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#D9CCF5] block mb-3 uppercase tracking-wider">
                    Core Technical Domains:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js & React Web Engineering",
                      "Generative Engine Optimization (GEO)",
                      "Technical SEO & Core Web Vitals",
                      "Semantic JSON-LD Schemas",
                      "E-Commerce & Headless Systems",
                      "Lead Conversion Rate Optimization"
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-[#3B1580] border border-[#FFFFFF]/20 text-[#FFFFFF] px-3.5 py-1.5 rounded-lg shadow-sm hover:border-[#C9F600] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Published Articles List */}
        <section className="py-16 lg:py-24 bg-[#3B1580] text-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-[#FFFFFF]/15 pb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFFFFF]">
                  Published Articles &amp; Technical Guides
                </h2>
                <p className="text-xs text-[#D9CCF5] mt-1">
                  Showing {authorPosts.length} expert articles published by Saravanan L on Joy Digital.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#C9F600] hover:text-[#FFFFFF] flex items-center gap-1.5 transition-colors"
              >
                View All Blog Posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#260B5E] border border-[#FFFFFF]/15 rounded-[24px] overflow-hidden shadow-lg hover:border-[#C9F600]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 bg-[#1F084E] overflow-hidden border-b border-[#FFFFFF]/10">
                      <Image
                        src={post.image || "/assets/images/hero-banner.webp"}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#C9F600] text-[#260B5E] font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                          {post.category || "Article"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-[11px] font-semibold text-[#D9CCF5]/80 mb-2">
                        Published {post.date}
                      </div>
                      <h3 className="text-base font-extrabold text-[#FFFFFF] leading-snug group-hover:text-[#C9F600] transition-colors mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs text-[#D9CCF5] leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[#FFFFFF]/10 bg-[#1F084E] flex items-center justify-between">
                    <span className="text-[11px] text-[#D9CCF5] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9F600]" />
                      Saravanan L
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#C9F600] hover:text-[#FFFFFF] flex items-center gap-1 transition-colors"
                    >
                      Read Guide &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
