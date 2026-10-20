import React from "react";
import { metadata } from "./metadata";
import ImageCompressorClient from "./ImageCompressorClient";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageGraphSchema } from "@/lib/seo/schema";

export { metadata };

export default function ImageCompressorPage() {
  const canonicalUrl = "https://www.joydigital.in/image-compressor";
  const graphSchema = buildPageGraphSchema({
    url: canonicalUrl,
    title: "Free Image Compressor Tool",
    description: "Compress PNG, JPEG, and WebP images quickly inside your browser without uploading to external servers.",
    breadcrumbs: [
      { name: "Home", item: "https://www.joydigital.in" },
      { name: "Image Compressor", item: canonicalUrl },
    ],
    webApp: {
      name: "Client-Side Image Compressor",
      description: "Compress PNG, JPEG, and WebP images quickly inside your browser without uploading to external servers.",
      applicationCategory: "MultimediaApplication",
    },
  });

  return (
    <>
      <JsonLd schema={graphSchema} />
      <ImageCompressorClient />
    </>
  );
}
