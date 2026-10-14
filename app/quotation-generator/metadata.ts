import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: "Free PDF Quotation Generator | Joy Digital",
  description: "Create professional business quotations in seconds with our free online quotation generator. Add your logo, itemized pricing, and download as PDF instantly.",
  alternates: {
    canonical: "https://www.joydigital.in/quotation-generator",
  },
  openGraph: {
    type: "website",
    url: "https://www.joydigital.in/quotation-generator",
    siteName: "Joy Digital Agency",
    title: "Free Quotation Generator | Professional PDF Quotes | Joy Digital",
    description: "Create professional business quotations in seconds with our free online quotation generator. Add your logo, itemized pricing, and download as PDF instantly.",
    images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp", width: 1200, height: 630, alt: "Free Quotation Generator - Joy Digital" }],
  },
};
