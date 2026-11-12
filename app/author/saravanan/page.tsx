import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Saravanan L - Technical Web Specialist & Author",
  description: "Read technical articles, web performance breakdowns, and SEO architectures written by Saravanan L, Founder and Technical Web Specialist at Joy Digital.",
  keywords: [
      "Author/saravanan",
      "Author/saravanan Services",
      "Web Development",
      "SEO Services",
      "Joy Digital"
  ],
  alternates: {
    canonical: "https://www.joydigital.in/author/saravanan",
  },
  openGraph: {
    type: "profile",
    url: "https://www.joydigital.in/author/saravanan",
    title: "Saravanan L - Technical Web Specialist & Author | Joy Digital",
    description: "Read technical articles, web performance breakdowns, and SEO architectures written by Saravanan L, Founder and Technical Web Specialist at Joy Digital.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Saravanan L - Joy Digital" }],
  },
};

export default async function AuthorProfilePage() {
  const posts = await getAllPosts();
  const authorPosts = posts.filter(
    (post) => post.author?.toLowerCase().includes("saravanan") || !post.author
  );

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://www.joydigital.in/author/saravanan#webpage",
        "url": "https://www.joydigital.in/author/saravanan",
        "name": "Saravanan L - Technical Web Specialist & Author | Joy Digital",
        "description": "Author archive and professional engineering background for Saravanan L, Technical Web Specialist at Joy Digital.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.joydigital.in/#website",
          "name": "Joy Digital",
          "url": "https://www.joydigital.in"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.joydigital.in/author/saravanan#author",
        "name": "Saravanan L",
        "jobTitle": "Founder & Technical Web Specialist",
        "worksFor": {
          "@type": "Organization",
          "name": "Joy Digital",
          "url": "https://www.joydigital.in"
        },
        "description": "Technical web specialist, search engineer, and author of comprehensive Next.js, SEO, and Core Web Vitals guides at Joy Digital.",
        "sameAs": [
          "https://www.linkedin.com/in/saravanan-l-34a861154/"
        ]
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold text-[#FFFFFF]/60 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-[#C9F600] transition-colors">Home</Link>
              <span className="text-[#FFFFFF]/40">/</span>
              <Link href="/blog" className="hover:text-[#C9F600] transition-colors">Blog</Link>
              <span className="text-[#FFFFFF]/40">/</span>
              <span className="text-[#C9F600]">Saravanan L</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Profile Avatar / Badge */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative w-36 h-36 rounded-full bg-[#3B1580] border-4 border-[#C9F600]/40 shadow-xl overflow-hidden mb-6 flex items-center justify-center text-[#FFFFFF] text-5xl font-black">
                  <Image
                    src="/assets/images/logo.webp"
                    alt="Saravanan L - Technical Web Specialist"
                    fill
                    sizes="144px"
                    className="object-cover p-2"
                  />
                </div>
                <div className="inline-flex items-center gap-2 bg-[#C9F600]/15 border border-[#C9F600]/30 px-3.5 py-1 rounded-full mb-3">
                  <span className="w-2 h-2 bg-[#C9F600] rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-[#C9F600] uppercase tracking-wider">
                    Verified Technical Author &amp; Specialist
                  </span>
                </div>
                <h1 className="text-3xl font-extrabold text-[#FFFFFF] tracking-tight mb-2">
                  Saravanan L
                </h1>
                <p className="text-sm font-semibold text-[#C9F600] mb-4">
                  Founder &amp; Technical Web Specialist at Joy Digital
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/saravanan-l-34a861154/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#3B1580] hover:bg-[#C9F600] hover:text-[#3B1580] border border-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="Connect on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-base" />
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="w-10 h-10 rounded-full bg-[#3B1580] hover:bg-[#C9F600] hover:text-[#3B1580] border border-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shadow-sm"
                    title="Send Direct Email"
                  >
                    <i className="fa-solid fa-envelope text-base" />
                  </a>
                </div>
              </div>

              {/* Bio & Expertise details */}
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-xl font-bold text-[#FFFFFF] border-b border-[#FFFFFF]/15 pb-3">
                  About &amp; Technical Background
                </h2>
                <p className="text-sm text-[#FFFFFF]/85 leading-relaxed">
                  Saravanan L is a technical web specialist, search engineer, and the founder of <strong>Joy Digital</strong>. With expertise in Next.js, React, Tailwind CSS, TypeScript, and modern search engine optimization, Saravanan specializes in engineering sub-second web platforms that rank highly on Google and scale organic client acquisition.
                </p>
                <p className="text-sm text-[#FFFFFF]/85 leading-relaxed">
                  He leads the technical research at Joy Digital around <strong>Generative Engine Optimization (GEO)</strong>, structured JSON-LD schemas, mobile Core Web Vitals optimization, and conversion-focused web architecture across diverse industries including insurance, tourism, real estate, healthcare, and e-commerce.
                </p>

                {/* Core Expertise Tags */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#FFFFFF] block mb-3 uppercase tracking-wider">
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
                        className="text-xs font-medium bg-[#3B1580] border border-[#FFFFFF]/20 text-[#FFFFFF] px-3 py-1.5 rounded-lg shadow-sm"
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
                <p className="text-xs text-[#FFFFFF]/70 mt-1">
                  Showing {authorPosts.length} expert articles published by Saravanan L on Joy Digital.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#C9F600] hover:text-white flex items-center gap-1.5"
              >
                View All Blog Posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#260B5E] border border-[#FFFFFF]/20 rounded-[24px] overflow-hidden shadow-sm hover:border-[#C9F600]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-[#FFFFFF]"
                >
                  <div>
                    <div className="relative w-full h-48 bg-[#3B1580] overflow-hidden border-b border-[#FFFFFF]/15">
                      <Image
                        src={post.image || "/assets/images/hero-banner.webp"}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#C9F600] text-[#3B1580] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                          {post.category || "Article"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-[11px] font-semibold text-[#FFFFFF]/60 mb-2">
                        Published {post.date}
                      </div>
                      <h3 className="text-base font-extrabold text-[#FFFFFF] leading-snug group-hover:text-[#C9F600] transition-colors mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs text-[#FFFFFF]/80 leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[#FFFFFF]/15 bg-[#260B5E]/80 flex items-center justify-between">
                    <span className="text-[10px] text-[#FFFFFF]/60 font-bold">
                      Saravanan L
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#C9F600] hover:text-white flex items-center gap-1"
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
