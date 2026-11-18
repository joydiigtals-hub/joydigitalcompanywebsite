import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import FontAwesomeLoader from "@/components/layout/FontAwesomeLoader";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import ClarityTracker from "@/components/ClarityTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";
import ClientWidgets from "@/components/ui/ClientWidgets";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import CookieConsent from "@/components/ui/CookieConsent";
import { getRootOrganizationSchema } from "@/lib/seo/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: {
    default: "Web Development & SEO Company – Get More Leads | Joy Digital",
    template: "%s | Joy Digital",
  },
  description: "Fast, SEO-ready websites that bring organic enquiries. Joy Digital offers web development + SEO for businesses in India, USA, UK & UAE. Get a free audit.",

  authors: [{ name: "Joy Digital", url: "https://www.joydigital.in" }],
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
    canonical: "https://www.joydigital.in",
    languages: {
      "en-IN": "https://www.joydigital.in/in",
      "en-US": "https://www.joydigital.in/us",
      "en-GB": "https://www.joydigital.in/uk",
      "en-AE": "https://www.joydigital.in/ae",
      "en-CA": "https://www.joydigital.in/ca",
      "en-AU": "https://www.joydigital.in/au",
      "x-default": "https://www.joydigital.in",
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
    url: "https://www.joydigital.in",
    siteName: "Joy Digital",
    title: "Joy Digital | Web Development & SEO Agency Madurai",
    description: "Joy Digital is a web development and SEO agency headquartered in Madurai, Tamil Nadu, India. We build fast, mobile-friendly websites and search-optimized systems.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Web Development & SEO Agency Madurai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Digital | Web Development & SEO Agency Madurai",
    description: "Joy Digital is a web development and SEO agency headquartered in Madurai, Tamil Nadu, India. High-performance Next.js apps, SEO, and Generative Engine Optimization (GEO).",
    images: ["https://www.joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} h-full antialiased font-sans`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRootOrganizationSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-bg text-text-primary">
        <FontAwesomeLoader />
        <GoogleAnalytics />
        <AnalyticsTracker />
        <ClarityTracker />
        <GoogleTranslateLoader />
        {children}
        <ClientWidgets />
        <StickyMobileCTA />
        <CookieConsent />
      </body>
    </html>
  );
}

