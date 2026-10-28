import React from "react";
import type { Metadata } from "next";
import AfricaTourismClientPage from "./AfricaTourismClientPage";

export const metadata: Metadata = {
  title: "Tourism Web Development Africa",
  description: "Custom tourism and safari websites for African tour operators and lodges. Fast Next.js platforms to drive direct international bookings.",
  alternates: {
    canonical: "https://www.joydigital.in/africa/tourism-website-development",
  },
  openGraph: {
    title: "Custom Tourism Website Development for African Businesses",
    description: "Build a high-converting website for your African tour operator, safari company, hotel, or lodge targeting international travellers in Europe, UK, USA, Canada, Australia & worldwide.",
    url: "https://www.joydigital.in/africa/tourism-website-development",
    siteName: "Joy Digital",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/african-safari-hero.png",
        width: 1200,
        height: 630,
        alt: "Custom Tourism Website Development for African Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AfricaTourismWebsiteDevelopmentPage() {
  return <AfricaTourismClientPage />;
}
