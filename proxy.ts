import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/security/auth";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const rawHost = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  const host = rawHost.split(":")[0].toLowerCase();
  const proto = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "");

  const isLocal = host === "localhost" || host === "127.0.0.1" || host.endsWith(".local");

  // 1. Legacy Junk & Spam Cleanup (Strict 410 Gone status)
  // Ensures Googlebot, Bingbot, and crawlers permanently purge deleted/spam URLs from search index
  const isLegacySpamPath =
    pathname.startsWith("/nocev") ||
    pathname === "/fr" ||
    pathname.startsWith("/fr/") ||
    pathname === "/kr" ||
    pathname.startsWith("/kr/") ||
    pathname === "/cn" ||
    pathname.startsWith("/cn/") ||
    pathname === "/pages" ||
    pathname.startsWith("/pages/") ||
    pathname.endsWith(".php") ||
    pathname.includes("wp-admin") ||
    pathname.includes("wp-login") ||
    pathname.includes("wp-content") ||
    pathname.includes("wp-includes") ||
    pathname.includes("xmlrpc.php");

  if (isLegacySpamPath) {
    return new NextResponse("410 Gone - This resource has been permanently purged.", {
      status: 410,
      statusText: "Gone",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  // 2. Strict 301 Redirect to Canonical (https://www.joydigital.in)
  // Forces all variants (http, https, non-www, vercel/render staging) to canonical in a single 301 hop
  if (!isLocal) {
    const isNonCanonicalHost =
      host === "joydigital.in" ||
      host === "joydigital.vercel.app" ||
      host.endsWith(".onrender.com");

    const isHttp = proto === "http";

    if (isNonCanonicalHost || (host === "www.joydigital.in" && isHttp)) {
      return NextResponse.redirect(`https://www.joydigital.in${pathname}${search}`, 301);
    }

    // Trailing slash normalization to eliminate redirect hops (skip root "/")
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const cleanPath = pathname.replace(/\/+$/, "");
      return NextResponse.redirect(`https://www.joydigital.in${cleanPath}${search}`, 301);
    }
  }

  const response = NextResponse.next();

  // 3. Production Security Headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.clarity.ms https://scripts.clarity.ms https://www.googletagmanager.com https://*.google-analytics.com https://translate.google.com https://translate.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:; img-src 'self' data: https: blob:; frame-src 'self' https://www.google.com https://maps.google.com https://google.com; connect-src 'self' https:;"
  );

  // Enable Strict HSTS in Production
  if (process.env.NODE_ENV === "production" && !isLocal) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  // 4. Protect Admin API Routes at Edge Proxy Level
  const isProtectedAdminApi =
    pathname.startsWith("/api/admin/") &&
    !pathname.startsWith("/api/admin/auth/login");

  if (isProtectedAdminApi) {
    const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const session = verifySessionToken(sessionCookie);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized. Valid authentication session required." },
        { status: 401, headers: response.headers }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots\\.txt|sitemap\\.xml|sitemap\\.xsl|.*\\.(?:svg|png|jpg|jpeg|gif|webp|xsl)$).*)",
  ],
};
