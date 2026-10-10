import React from "react";
import PortfolioClient from "./PortfolioClient";
import { metadata } from "./metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export { metadata };

export default function PortfolioPage() {
  const canonicalUrl = "https://joydigital.in/portfolio";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Portfolio: You & Me Voyage Travel Platform | Joy Digital",
    description: "Explore our client work: You & Me Voyage. See how Joy Digital built a high-speed Next.js travel platform with sub-second loads and direct bookings.",
    breadcrumbs: [
      { name: "Home", item: "https://joydigital.in" },
      { name: "Portfolio", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <PortfolioClient />
    </>
  );
}
