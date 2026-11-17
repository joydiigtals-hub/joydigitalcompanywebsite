import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: "Web Development & SEO Company – Get More Leads | Joy Digital",
  description: "Fast, SEO-ready websites that bring organic enquiries. Joy Digital offers web development + SEO for businesses in India, USA, UK & UAE. Get a free audit.",
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
    canonical: "https://www.joydigital.in",
    languages: {
      "x-default": "https://www.joydigital.in",
      "en-US": "https://www.joydigital.in/us",
      "en-GB": "https://www.joydigital.in/uk",
      "en-AE": "https://www.joydigital.in/ae",
      "en-CA": "https://www.joydigital.in/ca",
      "en-AU": "https://www.joydigital.in/au",
      "en-IN": "https://www.joydigital.in/in",
    },
  },
  verification: {
    google: "yYfFlGYZPthQmXcw3V9yq2U2OlPPPxWBCtG7URIXDwQ",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.joydigital.in",
    siteName: "Joy Digital",
    title: "Web Development & SEO Company – Get More Leads | Joy Digital",
    description: "Fast, SEO-ready websites that bring organic enquiries. Joy Digital offers web development + SEO for businesses in India, USA, UK & UAE. Get a free audit.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Web Development & SEO Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & SEO Company – Get More Leads | Joy Digital",
    description: "Fast, SEO-ready websites that bring organic enquiries. Joy Digital offers web development + SEO for businesses in India, USA, UK & UAE. Get a free audit.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default async function HomePage() {
  const posts = await getAllPosts();
  const latestPosts = posts
    .filter((p) => p.status !== "Draft" && p.status !== "Archived")
    .slice(0, 3);

  const homeGraph = buildPageGraphSchema({
    url: "https://www.joydigital.in",
    title: "Web Development & SEO Company – Get More Leads | Joy Digital",
    description: "Fast, SEO-ready websites that bring organic enquiries. Joy Digital offers web development + SEO for businesses in India, USA, UK & UAE. Get a free audit.",
    isHomepage: true,
    faqs: HOME_FAQS,
  });

  return (
    <>
      <JsonLd schema={homeGraph} />
      <HomePageComponent country="" latestPosts={latestPosts} />
    </>
  );
}
