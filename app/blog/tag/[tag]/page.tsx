import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWidgets from "@/components/ui/StickyWidgets";
import StrongCTA from "@/components/StrongCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { getAllTags, getPostsByTag } from "@/lib/blog";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((t) => ({
    tag: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const result = await getPostsByTag(resolvedParams.tag);
  if (!result) return {};

  const title = `${result.name} Insights & Articles | Joy Digital Blog`;
  const description = `Discover articles and actionable guides tagged under ${result.name}. Learn web development and SEO strategies with Joy Digital.`;
  const canonical = `https://joydigital.in/blog/tag/${resolvedParams.tag}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Joy Digital",
      title,
      description,
      images: [
        {
          url: "https://joydigital.in/assets/images/hero-banner.webp",
          width: 1200,
          height: 630,
          alt: `${result.name} Articles - Joy Digital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://joydigital.in/assets/images/hero-banner.webp"],
    },
  };
}

export default async function BlogTagPage({ params }: PageProps) {
  const resolvedParams = await params;
  const result = await getPostsByTag(resolvedParams.tag);

  if (!result) {
    notFound();
  }

  const canonicalUrl = `https://joydigital.in/blog/tag/${resolvedParams.tag}`;

  const schema = buildPageGraphSchema({
    url: canonicalUrl,
    title: `${result.name} Insights & Articles | Joy Digital Blog`,
    description: `Discover articles and actionable guides tagged under ${result.name}.`,
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "Blog", item: "https://joydigital.in/blog" },
      { name: `Tag: ${result.name}`, item: canonicalUrl },
    ],
  });

  const getThumbnail = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("seo") || cat.includes("maps") || cat.includes("local")) {
      return "/assets/images/gbp-showcase.webp";
    } else if (cat.includes("dev") || cat.includes("nextjs") || cat.includes("code")) {
      return "/assets/images/hero-banner.webp";
    } else if (cat.includes("design") || cat.includes("logo")) {
      return "/assets/images/business-card-mockup.webp";
    }
    return "/assets/images/marketing-poster-mockup.webp";
  };

  return (
    <>
      <JsonLd schema={schema} />
      <Header />
      <main className="pt-20 lg:pt-28 bg-[#F8FAFC]">
        {/* Tag Hero Header */}
        <section className="py-16 bg-white text-center relative border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-[11px] font-bold text-[#6B6478] uppercase tracking-wider mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2 text-slate-300">/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-primary font-extrabold">#{result.name}</span>
            </nav>

            <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              Topic Tag
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              #{result.name}
            </h1>

            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
              Browse our latest research, actionable tutorials, and industry guides tagged under #{result.name}.
            </p>

            <div className="mt-4 text-xs font-semibold text-slate-400">
              Showing {result.posts.length} {result.posts.length === 1 ? "article" : "articles"}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            {result.posts.length === 0 ? (
              <div className="text-center py-20 text-slate-500 font-medium">
                No articles found with this tag.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {result.posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                        <Image
                          src={post.image || getThumbnail(post.category)}
                          alt={`${post.title} preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-primary text-white font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 text-left">
                        <div className="text-[10px] text-slate-500 font-semibold mb-2">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <h2 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}`} title={post.title}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-medium">By {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-bold text-primary hover:text-primary-light flex items-center gap-1.5"
                      >
                        Read Article &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
              >
                &larr; View All Blog Articles
              </Link>
            </div>
          </div>
        </section>

        <StrongCTA location="blog tag page" />
      </main>
      <Footer />
      <StickyWidgets />
    </>
  );
}
