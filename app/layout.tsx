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
import { SITE_URL } from "@/lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Next.js Web Development & SEO Agency | Joy Digital",
    template: "%s",
  },
  description: "Joy Digital is a premier Digital Agency & Next.js Web Development company based in Chennai, India. We engineer sub-second web applications, custom software, SEO, and Generative Engine Optimization (GEO) for global brands.",
  keywords: [
    "website development company in chennai",
    "best website development company in chennai",
    "top website development company in india",
    "website development and seo service",
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
    languages: {
      "en-IN": SITE_URL,
      "en-US": `${SITE_URL}/us`,
      "en-GB": `${SITE_URL}/uk`,
      "en-AE": `${SITE_URL}/ae`,
      "en-CA": `${SITE_URL}/ca`,
      "en-AU": `${SITE_URL}/au`,
      "es-ES": `${SITE_URL}/es`,
      "de-DE": `${SITE_URL}/de`,
      "it-IT": `${SITE_URL}/it`,
      "en-SG": `${SITE_URL}/sg`,
      "es-MX": `${SITE_URL}/mx`,
      "pt-BR": `${SITE_URL}/br`,
      "x-default": SITE_URL,
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
    url: SITE_URL,
    siteName: "Joy Digital",
    title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",
    description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. We build high-converting, sub-second web applications and generative AI search-optimized systems.",
    images: [
      {
        url: `${SITE_URL}/assets/images/hero-banner.webp`,
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
    images: [`${SITE_URL}/assets/images/hero-banner.webp`],
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

