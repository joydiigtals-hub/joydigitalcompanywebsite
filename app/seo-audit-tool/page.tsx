import React from "react";
import { metadata } from "./metadata";
import SeoAuditToolClient from "./SeoAuditToolClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export { metadata };

export default function SeoAuditToolPage() {
  const canonicalUrl = "https://www.joydigital.in/seo-audit-tool";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Free SEO Audit Tool",
    description: "Scan your website for SEO ranking errors, schema tags, meta titles, image alt attributes, and Core Web Vitals speed issues instantly.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "SEO Audit Tool", item: canonicalUrl },
    ],
    webApp: {
      name: "Instant SEO Audit Scan",
      description: "Scan your website for SEO ranking errors, schema tags, meta titles, image alt attributes, and Core Web Vitals speed issues instantly.",
      applicationCategory: "BusinessApplication",
    },
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <SeoAuditToolClient />
    </>
  );
}
