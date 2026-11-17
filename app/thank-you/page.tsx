import React from "react";
import { metadata } from "./metadata";
import ThankYouClient from "./ThankYouClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export { metadata };

export default function ThankYouPage() {
  const canonicalUrl = "https://www.joydigital.in/thank-you";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Thank You",
    description: "Thank you for contacting Joy Digital. Your inquiry has been received.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Thank You", item: canonicalUrl },
    ],
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <ThankYouClient />
    </>
  );
}
