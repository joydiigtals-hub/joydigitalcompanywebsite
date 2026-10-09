import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://joydigital.in"),
  title: "Next.js & Custom Web Development Agency | Joy Digital",
  description: "Joy Digital builds sub-second Next.js web applications and custom sites for global businesses in the US, UK & UAE. Get your free website audit today!",
  keywords: [
    "Next.js Development Agency",
    "Custom Web Development Company",
    "React Web Engineering",
    "Full-Stack Web Development",
    "High-Converting Landing Pages",
    "Offshore Web Development Partner",
    "Sub-Second Fast Websites",
    "Travel & Safari Website Platform",
    "Headless CMS Development",
    "WordPress to Next.js Migration",
    "B2B Web Development"
  ],
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
    canonical: "https://joydigital.in",
    languages: {
      "x-default": "https://joydigital.in",
      "en-us": "https://joydigital.in/us",
      "en-gb": "https://joydigital.in/uk",
      "en-ae": "https://joydigital.in/ae",
      "en-in": "https://joydigital.in/in",
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
    url: "https://joydigital.in",
    siteName: "Joy Digital",
    title: "Next.js & Custom Web Development Agency | Joy Digital",
    description: "Joy Digital builds sub-second Next.js web applications and custom sites for global businesses in the US, UK & UAE. Get your free website audit today!",
    images: [
      {
        url: "https://joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Next.js & Custom Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js & Custom Web Development Agency | Joy Digital",
    description: "Joy Digital builds sub-second Next.js web applications and custom sites for global businesses in the US, UK & UAE. Get your free website audit today!",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default function HomePage() {
  const homeGraph = buildPageGraphSchema({
    url: "https://joydigital.in/",
    title: "Next.js & Custom Web Development Agency | Joy Digital",
    description: "Joy Digital builds sub-second Next.js web applications and custom sites for global businesses in the US, UK & UAE. Get your free website audit today!",
    isHomepage: true,
    faqs: HOME_FAQS,
  });

  return (
    <>
      <JsonLd schema={homeGraph} />
      <HomePageComponent country="" />
    </>
  );
}
