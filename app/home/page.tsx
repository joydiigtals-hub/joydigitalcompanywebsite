import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema, buildFaqPageSchema } from "@/lib/seo/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: "Website Development & SEO Company | Joy Digital",
  description: "Fast, conversion-driven website development and SEO services for businesses across India and globally. Rank higher on Google Map packs and organic search.",
  keywords: [
    "Web Development Company",
    "SEO Agency",
    "Custom Website Development",
    "SEO Services",
    "Lead Generation Websites",
    "Web Design Company",
    "Joy Digital",
  ],
  authors: [{ name: "Joy Digital", url: "https://www.joydigital.in" }],
  publisher: "Joy Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.joydigital.in/home",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.joydigital.in/home",
    siteName: "Joy Digital",
    title: "Website Development & SEO Company | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India and globally. Rank higher on Google Map packs and organic search.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Website Development & SEO Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development & SEO Company | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India and globally. Rank higher on Google Map packs and organic search.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function HomePageRoute() {
  const posts = await getAllPosts();
  const latestPosts = posts
    .filter((p) => p.status !== "Draft" && p.status !== "Archived")
    .slice(0, 3);

  const homeGraph = buildPageGraphSchema({
    url: "https://www.joydigital.in/home",
    title: "Website Development & SEO Company | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India and globally. Rank higher on Google Map packs and organic search.",
    isHomepage: true,
    includeLocalBusiness: true,
  });

  const faqSchema = buildFaqPageSchema(HOME_FAQS, "https://www.joydigital.in/home");

  return (
    <>
      <JsonLd schema={homeGraph} />
      <JsonLd schema={faqSchema} />
      <HomePageComponent country="in" latestPosts={latestPosts} />
    </>
  );
}
