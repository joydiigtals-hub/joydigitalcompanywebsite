import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://joydigital.in"),
  title: "Custom Website Development Company | Travel & Safari Specialists",
  description: "We build high-converting custom websites for businesses globally. Specialized in travel, tourism, and safari website development designed to generate qualified leads.",
  keywords: [
    "Custom Website Development Company",
    "Professional Website Design",
    "Business Website Development",
    "Travel Website Development Company",
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
    title: "Custom Website Development Company | Travel & Safari Specialists",
    description: "We build high-converting custom websites for businesses globally. Specialized in travel, tourism, and safari website development designed to generate qualified leads.",
    images: [
      {
        url: "https://joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Custom Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development Company | Travel & Safari Specialists",
    description: "We build high-converting custom websites for businesses globally. Specialized in travel, tourism, and safari website development designed to generate qualified leads.",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default function HomePage() {
  const homeGraph = buildPageGraphSchema({
    url: "https://joydigital.in/",
    title: "Custom Website Development Company | Travel & Safari Specialists",
    description: "We build high-converting custom websites for businesses globally. Specialized in travel, tourism, and safari website development designed to generate qualified leads.",
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
