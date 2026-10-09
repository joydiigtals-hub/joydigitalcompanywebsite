import React from "react";
import type { Metadata } from "next";
import EcommerceWebPage from "../website-for-ecommerce/page";

export const metadata: Metadata = {
  title: "Custom E-Commerce Website Development | Joy Digital",
  description: "Fast Next.js E-commerce websites built for high conversions, payment gateway integration, and SEO. Scale your online store today with Joy Digital!",
  alternates: {
    canonical: "https://www.joydigital.in/website-for-e-commerce-stores",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/website-for-e-commerce-stores",
    title: "Custom E-Commerce Website Development | Joy Digital",
    description: "Fast Next.js E-commerce websites built for high conversions, payment gateway integration, and SEO. Scale your online store today with Joy Digital!",
    images: [{ url: "https://joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Custom E-Commerce Website Development Joy Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom E-Commerce Website Development | Joy Digital",
    description: "Fast Next.js E-commerce websites built for high conversions, payment gateway integration, and SEO. Scale your online store today with Joy Digital!",
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
  },
};

export default function WebsiteForEcommerceStoresPage() {
  return <EcommerceWebPage />;
}
