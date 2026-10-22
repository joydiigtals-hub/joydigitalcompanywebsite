import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: {
    absolute: "Custom Website Development Company | Joy Digital",
  },
  description: "Build custom business websites with modern design, SEO-friendly structure and performance-focused development. Joy Digital helps businesses reach customers worldwide.",
  authors: [{ name: "Joy Digital" }],
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
    canonical: "https://www.joydigital.in/",
    languages: {
      "x-default": "https://www.joydigital.in",
      "en-us": "https://www.joydigital.in/us",
      "en-gb": "https://www.joydigital.in/uk",
      "en-ae": "https://www.joydigital.in/ae",
      "en-in": "https://www.joydigital.in/in",
    },
  },
  verification: {
    google: "yYfFlGYZPthQmXcw3V9yq2U2OlPPPxWBCtG7URIXDwQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.joydigital.in",
    siteName: "Joy Digital",
    title: "Custom Website Development Company | Joy Digital",
    description: "Build custom business websites with modern design, SEO-friendly structure and performance-focused development. Joy Digital helps businesses reach customers worldwide.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Custom Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development Company | Joy Digital",
    description: "Build custom business websites with modern design, SEO-friendly structure and performance-focused development. Joy Digital helps businesses reach customers worldwide.",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default function HomePage() {
  const homeGraph = buildPageGraphSchema({
    url: "https://www.joydigital.in/",
    title: "Custom Website Development Company | Joy Digital",
    description: "Build custom business websites with modern design, SEO-friendly structure and performance-focused development. Joy Digital helps businesses reach customers worldwide.",
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
