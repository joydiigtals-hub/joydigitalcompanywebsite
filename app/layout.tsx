import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import FontAwesomeLoader from "@/components/layout/FontAwesomeLoader";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import ClarityTracker from "@/components/ClarityTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import { getRootLayoutSchema } from "@/lib/seo/schema";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";
import ClientWidgets from "@/components/ui/ClientWidgets";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import CookieConsent from "@/components/ui/CookieConsent";
import NavigationLoadingBar from "@/components/ui/NavigationLoadingBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydigital.in"),
  title: {
    default: "Next.js Web Development & SEO Agency | Joy Digital",
    template: "%s | Joy Digital",
  },
  description: "Joy Digital is a premier Digital Agency & Next.js Web Development company based in Chennai, India. We engineer sub-second web applications, custom software, SEO, and Generative Engine Optimization (GEO) for global brands.",
  keywords: [
    "Next.js development company",
    "custom web development",
    "global B2B web agency",
    "enterprise web apps",
    "travel website development",
    "best website for travel agency",
    "travel agency website builder",
    "headless cms seo",
    "headless wordpress nextjs",
    "high converting landing page",
    "landing page for google ads",
    "full stack web engineering",
    "Best Seo company in chennai",
    "SEO Consultant in chennai",
    "SEO freelancer in chennai",
    "Dynamic website company in chennai",
    "Best dynamic website company",
    "website development AI",
    "Dynamic website development cost in india",
  ],
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
      "en-IN": "https://www.joydigital.in",
      "en-US": "https://www.joydigital.in/us",
      "en-GB": "https://www.joydigital.in/uk",
      "en-AE": "https://www.joydigital.in/ae",
      "en-CA": "https://www.joydigital.in/ca",
      "en-AU": "https://www.joydigital.in/au",
      "es-ES": "https://www.joydigital.in/es",
      "de-DE": "https://www.joydigital.in/de",
      "it-IT": "https://www.joydigital.in/it",
      "en-SG": "https://www.joydigital.in/sg",
      "es-MX": "https://www.joydigital.in/mx",
      "pt-BR": "https://www.joydigital.in/br",
      "x-default": "https://www.joydigital.in",
    },
  },
  verification: {
    google: "yYfFlGYZPthQmXcw3V9yq2U2OlPPPxWBCtG7URIXDwQ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.joydigital.in",
    siteName: "Joy Digital",
    title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",
    description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. We build high-converting, sub-second web applications and generative AI search-optimized systems.",
    images: [
      {
        url: "https://www.joydigital.in/assets/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Joy Digital - Digital Agency & Next.js Web Development Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",
    description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. High-performance Next.js apps, SEO, and Generative Engine Optimization (GEO).",
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
            __html: JSON.stringify(getRootLayoutSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-bg text-text-primary">
        <NavigationLoadingBar />
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

