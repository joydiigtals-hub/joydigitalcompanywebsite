import React from "react";
import type { Metadata } from "next";
import ToursTravelsWebPage from "../travel-website-development/page";
import { getIndustryConfig } from "@/lib/industryPagesConfig";

const config = getIndustryConfig("website-for-tour-and-safari");

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.canonical,
  },
  openGraph: {
    type: "website",
    url: config.canonical,
    title: config.title,
    description: config.description,
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: config.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function WebsiteForTourAndSafariPage() {
  return <ToursTravelsWebPage />;
}
