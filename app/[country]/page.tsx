import React from "react";
import HomePageComponent, { HOME_FAQS } from "@/components/sections/HomePageComponent";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/siteConfig";
import { COUNTRY_LANDING_DATA, getCountryLandingData } from "@/data/countryLandingData";

interface PageProps {
  params: Promise<{ country: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { country: "us" },
    { country: "uk" },
    { country: "ae" },
    { country: "ca" },
    { country: "au" },
    { country: "sg" },
    { country: "es" },
    { country: "de" },
    { country: "it" },
    { country: "mx" },
    { country: "br" },
    { country: "my" },
    { country: "za" },
    { country: "ng" },
    { country: "ke" },
  ];
}

const FALLBACK_METADATA_MAP: Record<string, { title: string; description: string; ogLocale: string }> = {
  in: {
    title: "Top Website Design & SEO Company India | Joy Digital",
    description: "Boost your customer conversions. Joy Digital is India's leading SEO & custom web design agency, delivering search marketing and Map pack ranking systems.",
    ogLocale: "en_IN",
  },
  es: {
    title: "Agencia de Desarrollo Web Next.js y SEO España | Joy Digital",
    description: "Impulsa tu negocio con Joy Digital. Diseñamos sitios web rápidos en Next.js y estrategias SEO orientadas a resultados para clientes en España y Latinoamérica.",
    ogLocale: "es_ES",
  },
  de: {
    title: "Webdesign & Next.js Entwicklung Agentur Deutschland | Joy Digital",
    description: "Wachsen Sie online mit Joy Digital. Wir entwickeln erstklassige Next.js Websites und datengesteuerte SEO-Lösungen für Unternehmen in Deutschland.",
    ogLocale: "de_DE",
  },
  fr: {
    title: "Agence de Création Web Next.js & Référencement SEO France | Joy Digital",
    description: "Développez votre entreprise avec Joy Digital. Nous créons des sites web Next.js ultra-rapides et des solutions SEO sur mesure pour le marché français.",
    ogLocale: "fr_FR",
  },
  it: {
    title: "Sviluppo Web Next.js e Agenzia SEO Italia | Joy Digital",
    description: "Siti web ultra-veloci e posizionamento SEO per aziende in Italia. Aumenta il tuo fatturato con la presenza digitale di Joy Digital.",
    ogLocale: "it_IT",
  },
  sg: {
    title: "Next.js Web Dev & SEO Agency Singapore | Joy Digital",
    description: "Scale organic revenue. Joy Digital builds high-performance Next.js websites and data-driven SEO campaigns for businesses in Singapore.",
    ogLocale: "en_SG",
  },
  mx: {
    title: "Agencia de Desarrollo Web Next.js y SEO México | Joy Digital",
    description: "Diseño web moderno en Next.js y estrategias de SEO enfocadas en resultados para empresas en México y Latinoamérica.",
    ogLocale: "es_MX",
  },
  br: {
    title: "Desenvolvimento Web Next.js e Agência de SEO Brasil | Joy Digital",
    description: "Desenvolvimento de sites ultra-rápidos e otimização SEO para empresas no Brasil com a Joy Digital.",
    ogLocale: "pt_BR",
  },
  my: {
    title: "Next.js Web Development & B2B SEO Malaysia | Joy Digital",
    description: "Scale your Kuala Lumpur business with high-performance Next.js web applications and organic SEO. Get 50% faster speeds and higher B2B lead conversion.",
    ogLocale: "en_MY",
  },
  za: {
    title: "High-Speed Web Dev & B2B SEO South Africa | Joy Digital",
    description: "Build ultra-fast Next.js websites for South African enterprises. Scale B2B leads across Johannesburg, Cape Town, and global export markets.",
    ogLocale: "en_ZA",
  },
  ng: {
    title: "High-Speed Web Applications & B2B Lead Gen Nigeria | Joy Digital",
    description: "Ultra-fast, low-bandwidth Next.js web apps and B2B SEO engineered for Nigerian businesses in Lagos, Abuja, and West Africa.",
    ogLocale: "en_NG",
  },
  ke: {
    title: "Next.js Web Engineering & B2B SEO Growth Kenya | Joy Digital",
    description: "High-converting web development and search engine optimization engineered for Kenyan businesses in Nairobi and East Africa.",
    ogLocale: "en_KE",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const countryLower = country.toLowerCase();
  
  const landingData = COUNTRY_LANDING_DATA[countryLower];
  const fallbackData = FALLBACK_METADATA_MAP[countryLower];

  if (!landingData && !fallbackData) {
    return {};
  }

  const pageTitle = landingData ? landingData.metadata.title : fallbackData.title;
  const pageDesc = landingData ? landingData.metadata.description : fallbackData.description;
  const pageKeywords = landingData ? landingData.metadata.keywords : [
    `Web Development ${countryLower.toUpperCase()}`,
    `SEO Agency ${countryLower.toUpperCase()}`,
    "Next.js Web Development",
    "Enterprise SEO Services",
    "Joy Digital"
  ];
  const pageLocale = landingData ? landingData.metadata.ogLocale : (fallbackData?.ogLocale || "en_US");
  const countryUrl = `${SITE_URL}/${countryLower}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      absolute: pageTitle,
    },
    description: pageDesc,
    keywords: pageKeywords,
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
      canonical: countryUrl, // Strictly self-referencing canonical tag
      languages: {
        "x-default": SITE_URL,
        "en-in": SITE_URL,
        "en-us": `${SITE_URL}/us`,
        "en-gb": `${SITE_URL}/uk`,
        "en-ae": `${SITE_URL}/ae`,
        "en-ca": `${SITE_URL}/ca`,
        "en-au": `${SITE_URL}/au`,
      },
    },
    openGraph: {
      type: "website",
      locale: pageLocale,
      url: countryUrl,
      siteName: "Joy Digital",
      title: pageTitle,
      description: pageDesc,
      images: [
        {
          url: `${SITE_URL}/assets/images/hero-banner.webp`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [`${SITE_URL}/assets/images/hero-banner.webp`],
      creator: "@joydigital",
    },
  };
}

export default async function CountryHomePage({ params }: PageProps) {
  const { country } = await params;
  const countryLower = country.toLowerCase();
  
  const landingData = COUNTRY_LANDING_DATA[countryLower];
  const fallbackData = FALLBACK_METADATA_MAP[countryLower];

  if (!landingData && !fallbackData) {
    notFound();
  }

  const pageTitle = landingData ? landingData.metadata.title : fallbackData.title;
  const pageDesc = landingData ? landingData.metadata.description : fallbackData.description;
  const countryFaqs = landingData?.faqs || HOME_FAQS;
  const countryUrl = `${SITE_URL}/${countryLower}`;

  const graphSchema = buildPageGraphSchema({
    url: countryUrl,
    title: pageTitle,
    description: pageDesc,
    includeLocalBusiness: true,
    faqs: countryFaqs,
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <HomePageComponent country={countryLower} />
    </>
  );
}
