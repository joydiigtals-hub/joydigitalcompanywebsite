import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "Joy Digital Blog Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title || "Joy Digital Blog";
  const category = post?.category || "Web Engineering & SEO";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0D0820 0%, #1A1238 60%, #2A1758 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #7C3AED, #9333EA)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "900",
                color: "#FFFFFF",
              }}
            >
              J
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF" }}>Joy Digital</span>
              <span style={{ fontSize: "12px", color: "#A78BFA", fontWeight: "600" }}>Web Engineering &amp; SEO Agency</span>
            </div>
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              background: "rgba(124, 58, 237, 0.25)",
              border: "1px solid rgba(167, 139, 250, 0.4)",
              padding: "8px 18px",
              borderRadius: "999px",
              color: "#C4B5FD",
            }}
          >
            {category}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1050px" }}>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "800",
              lineHeight: 1.25,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#94A3B8", fontWeight: "500" }}>
            https://www.joydigital.in
          </span>
          <span style={{ fontSize: "16px", color: "#A78BFA", fontWeight: "700" }}>
            Next.js &amp; Technical SEO Insights
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
