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
    title: "Portfolio & Case Studies | Joy Digital Agency",
    description: "Explore real client projects built by Joy Digital — from travel portals and LIC advisor websites to SaaS landing pages and local SEO campaigns.",
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

