import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://joydigital.in"),
  title: "Website Development & SEO Company in India | Joy Digital",
  description: "Fast, conversion-driven website development and SEO services for businesses across India. Rank higher on Google Map packs and organic search. Get a free audit.",
  authors: [{ name: "Joy Digital", url: "https://joydigital.in" }],
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
    canonical: "https://joydigital.in/in",
    languages: {
      "x-default": "https://joydigital.in",
      "en-IN": "https://joydigital.in/in",
      "en-US": "https://joydigital.in/us",
      "en-GB": "https://joydigital.in/uk",
      "en-AE": "https://joydigital.in/ae",
      "en-CA": "https://joydigital.in/ca",
      "en-AU": "https://joydigital.in/au",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://joydigital.in/in",
    siteName: "Joy Digital",
    title: "Website Development & SEO Company in India | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India. Rank higher on Google Map packs and organic search. Get a free audit.",
    images: [
      {
        url: "https://joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Website Development & SEO Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development & SEO Company in India | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India. Rank higher on Google Map packs and organic search. Get a free audit.",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default async function IndiaHomePage() {
  const posts = await getAllPosts();
  const latestPosts = posts
    .filter((p) => p.status !== "Draft" && p.status !== "Archived")
    .slice(0, 3);

  const indiaGraph = buildPageGraphSchema({
    url: "https://joydigital.in/in",
    title: "Website Development & SEO Company in India | Joy Digital",
    description: "Fast, conversion-driven website development and SEO services for businesses across India. Rank higher on Google Map packs and organic search. Get a free audit.",
    isHomepage: false,
    includeLocalBusiness: true,
    faqs: HOME_FAQS,
  });

  return (
    <>
      <JsonLd schema={indiaGraph} />
      
      {/* TODO: Localized INR pricing table and Indian client case studies */}
      <div className="bg-[#171126] text-white text-xs py-2 px-4 text-center border-b border-[#2D244E]">
        <p>
          <span className="font-bold text-[#A78BFA]">India (INR) Edition:</span> Dedicated packages for Indian businesses starting from ₹25,000. {/* TODO: Full INR pricing table component coming soon */}
        </p>
      </div>

      <HomePageComponent country="in" latestPosts={latestPosts} />
    </>
  );
}
