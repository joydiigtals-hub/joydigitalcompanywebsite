import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: {
    absolute: "Professional Website Development Services | Grow Fast",
  },
  description: "Transform your business with stunning, high-converting website development services. Boost sales & dominate your market. Get a free quote!",
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
    title: "Professional Website Development Services | Grow Fast",
    description: "Transform your business with stunning, high-converting website development services. Boost sales & dominate your market. Get a free quote!",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Professional Website Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Website Development Services | Grow Fast",
    description: "Transform your business with stunning, high-converting website development services. Boost sales & dominate your market. Get a free quote!",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default function HomePage() {
  const homeGraph = buildPageGraphSchema({
    url: "https://www.joydigital.in/",
    title: "Professional Website Development Services | Grow Fast",
    description: "Transform your business with stunning, high-converting website development services. Boost sales & dominate your market. Get a free quote!",
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
