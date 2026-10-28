import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/siteConfig";

const PAGE_TITLE = "Custom Next.js Website Development & SEO Agency | Joy Digital";
const PAGE_DESC = "Joy Digital engineers custom Next.js websites and high-impact SEO strategies to help ambitious businesses capture organic search traffic and generate sales leads.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESC,
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
    canonical: SITE_URL,
    languages: {
      "x-default": SITE_URL,
      "en-us": `${SITE_URL}/us`,
      "en-gb": `${SITE_URL}/uk`,
      "en-ae": `${SITE_URL}/ae`,
      "en-in": SITE_URL,
      "en-ca": `${SITE_URL}/ca`,
      "en-au": `${SITE_URL}/au`,
    },
  },
  verification: {
    google: "yYfFlGYZPthQmXcw3V9yq2U2OlPPPxWBCtG7URIXDwQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Joy Digital",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [
      {
        url: `${SITE_URL}/assets/images/hero-banner.webp`,
        width: 1200,
        height: 630,
        alt: "Joy Digital - Custom Next.js Website Development & SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${SITE_URL}/assets/images/hero-banner.webp`],
    creator: "@joydigital",
  },
};

export default function HomePage() {
  const homeGraph = buildPageGraphSchema({
    url: SITE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESC,
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
