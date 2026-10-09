import React from "react";
import type { Metadata } from "next";
import ToursTravelsWebPage from "../travel-website-development/page";

export const metadata: Metadata = {
  title: "Tour & Travel Agency Website Design | Joy Digital",
  description: "Custom travel websites with itinerary builders, WhatsApp booking & multi-currency options. Boost direct travel bookings with Joy Digital!",
  alternates: {
    canonical: "https://www.joydigital.in/website-for-tour-and-safari",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/website-for-tour-and-safari",
    title: "Tour & Travel Agency Website Design | Joy Digital",
    description: "Custom travel websites with itinerary builders, WhatsApp booking & multi-currency options. Boost direct travel bookings with Joy Digital!",
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Tour & Travel Agency Website Design Joy Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour & Travel Agency Website Design | Joy Digital",
    description: "Custom travel websites with itinerary builders, WhatsApp booking & multi-currency options. Boost direct travel bookings with Joy Digital!",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function WebsiteForTourAndSafariPage() {
  return <ToursTravelsWebPage />;
}
