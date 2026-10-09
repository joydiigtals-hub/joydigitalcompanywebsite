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
    description: "Explore our featured client project: You & Me Voyage. Discover how Joy Digital engineered a high-performance Next.js travel platform with sub-second speeds and direct conversion funnels.",
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
