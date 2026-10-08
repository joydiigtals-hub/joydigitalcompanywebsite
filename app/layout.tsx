import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joydigital.in"),
  title: {
    default: "Joy Digital | Digital Agency & Next.js Web Development Chennai",
    template: "%s | Joy Digital",
  },
  description: "Joy Digital is a premier Digital Agency & Next.js Web Development company based in Chennai, India. We engineer sub-second web applications, custom software, SEO, and Generative Engine Optimization (GEO) for global brands.",
  keywords: [
    "Joy Digital",
    "Digital Agency Chennai",
    "Next.js Web Development",
    "Next.js Solutions",
    "SEO & GEO Optimization",
    "Generative Engine Optimization",
    "AI Search Optimization",
    "Custom Web Apps",
    "Web Development Agency India",
    "Fast Next.js Websites",
    "Headless CMS Development",
    "Core Web Vitals Optimization",
    "ChatGPT Search Optimization",
    "Perplexity AI SEO",
    "Google Gemini Search SEO"
  ],
  authors: [{ name: "Joy Digital", url: "https://joydigital.in" }],
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
    canonical: "https://joydigital.in",
    languages: {
      "en-IN": "https://joydigital.in",
      "en-US": "https://joydigital.in/us",
      "en-GB": "https://joydigital.in/uk",
      "en-AE": "https://joydigital.in/ae",
      "en-CA": "https://joydigital.in/ca",
      "en-AU": "https://joydigital.in/au",
      "es-ES": "https://joydigital.in/es",
      "de-DE": "https://joydigital.in/de",
      "fr-FR": "https://joydigital.in/fr",
      "it-IT": "https://joydigital.in/it",
      "en-SG": "https://joydigital.in/sg",
      "es-MX": "https://joydigital.in/mx",
      "pt-BR": "https://joydigital.in/br",
      "x-default": "https://joydigital.in",
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
    url: "https://joydigital.in",
    siteName: "Joy Digital",
    title: "Joy Digital | Digital Agency & Next.js Web Development Chennai",
    description: "Premier Digital Agency & Next.js Web Development company based in Chennai, India. We build high-converting, sub-second web applications and generative AI search-optimized systems.",
    images: [
      {
        url: "https://joydigital.in/assets/images/hero-banner.webp",
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
    images: ["https://joydigital.in/assets/images/hero-banner.webp"],
    creator: "@joydigital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <FontAwesomeLoader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRootLayoutSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-bg text-text-primary">
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

