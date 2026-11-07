import { NextResponse } from "next/server";
import dns from "dns";
import { checkRateLimit, getClientIp } from "@/lib/security/rateLimit";

// Ensure DNS resolves in all environments
if (process.platform === "win32") {
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  } catch {}
}

export const maxDuration = 15; // 15 seconds max execution

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimitResult = checkRateLimit(`audit_scan:${ip}`, {
    windowMs: 60 * 1000,
    max: 15,
  });

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many scan attempts. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    let { url, industry } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Please provide a valid website URL." }, { status: 400 });
    }

    url = url.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL format." }, { status: 400 });
    }

    const cleanDomain = parsedUrl.hostname.replace(/^www\./, "");

    // 1. Live Fetch & Latency Measurement
    const startTime = Date.now();
    let res: Response;
    let html = "";
    let responseTimeMs = 0;
    let hasSsl = url.startsWith("https://");

    try {
      res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) JoyDigitalAuditor/2.0 (compatible; Googlebot/2.1)",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(8000),
      });
      responseTimeMs = Date.now() - startTime;
      html = await res.text();
    } catch (fetchErr: any) {
      // Fallback: If https failed or timed out, attempt with http once
      if (url.startsWith("https://")) {
        try {
          const fallbackUrl = url.replace("https://", "http://");
          const fallbackStart = Date.now();
          res = await fetch(fallbackUrl, {
            headers: { "User-Agent": "JoyDigitalAuditor/2.0" },
            signal: AbortSignal.timeout(5000),
          });
          responseTimeMs = Date.now() - fallbackStart;
          html = await res.text();
          hasSsl = false;
        } catch {
          return NextResponse.json(
            { error: `Unable to connect to ${cleanDomain}. Please check if the domain is active and publicly accessible.` },
            { status: 400 }
          );
        }
      } else {
        return NextResponse.json(
          { error: `Unable to connect to ${cleanDomain}. Domain timed out.` },
          { status: 400 }
        );
      }
    }

    // 2. Parse Technical HTML Metrics
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].trim() : "";
    const titleLength = titleText.length;
    const hasValidTitle = titleLength >= 30 && titleLength <= 65;

    const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const metaDesc = metaMatch ? metaMatch[1].trim() : "";
    const metaDescLength = metaDesc.length;
    const hasValidMetaDesc = metaDescLength >= 90 && metaDescLength <= 165;

    const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    const h1Count = h1Matches.length;

    const hasCanonical = /<link[^>]*rel=["']canonical["']/i.test(html);
    const hasViewport = /<meta[^>]*name=["']viewport["']/i.test(html);
    const hasOgTitle = /<meta[^>]*property=["']og:title["']/i.test(html);
    const hasOgImage = /<meta[^>]*property=["']og:image["']/i.test(html);
    const hasSchema = /<script[^>]*type=["']application\/ld\+json["']/i.test(html);

    // Image Alt Audit
    const imgMatches = html.match(/<img[^>]*>/gi) || [];
    const totalImages = imgMatches.length;
    let missingAltCount = 0;
    imgMatches.forEach((img) => {
      if (!/alt=["'][^"']+["']/i.test(img)) {
        missingAltCount++;
      }
    });

    // Script & Bloat Analysis
    const scriptMatches = html.match(/<script[^>]*>/gi) || [];
    const scriptCount = scriptMatches.length;

    // Platform Detection
    let platform = "Custom Web Stack";
    if (/wp-content|wp-includes|elementor|divi/i.test(html)) {
      platform = "WordPress CMS";
    } else if (/cdn\.shopify\.com|Shopify\.theme/i.test(html)) {
      platform = "Shopify";
    } else if (/wix\.com|parastorage/i.test(html)) {
      platform = "Wix Site Builder";
    } else if (/_next\/static|__NEXT_DATA__/i.test(html)) {
      platform = "Next.js Modern Architecture";
    } else if (/squarespace\.com/i.test(html)) {
      platform = "Squarespace";
    }

    // Lead & Conversion Signals
    const hasWhatsApp = /wa\.me|api\.whatsapp\.com|whatsapp/i.test(html);
    const hasPhone = /href=["']tel:[^"']+["']/i.test(html);
    const hasForm = /<form[^>]*>/i.test(html);

    // 3. Score Calculations
    // Speed Pillar (Max 25)
    let speedScore = 25;
    if (responseTimeMs > 1800) speedScore -= 15;
    else if (responseTimeMs > 1000) speedScore -= 10;
    else if (responseTimeMs > 600) speedScore -= 5;
    if (scriptCount > 30) speedScore -= 5;
    else if (scriptCount > 20) speedScore -= 3;
    speedScore = Math.max(5, speedScore);

    // Technical SEO Pillar (Max 35)
    let seoScore = 35;
    if (!hasValidTitle) seoScore -= titleLength === 0 ? 10 : 5;
    if (!hasValidMetaDesc) seoScore -= metaDescLength === 0 ? 10 : 4;
    if (h1Count === 0) seoScore -= 8;
    else if (h1Count > 2) seoScore -= 4;
    if (!hasCanonical) seoScore -= 4;
    if (missingAltCount > 3) seoScore -= 5;
    if (!hasSchema) seoScore -= 5;
    seoScore = Math.max(5, seoScore);

    // Mobile UX (Max 20)
    let mobileScore = 20;
    if (!hasViewport) mobileScore -= 15;
    if (responseTimeMs > 1500) mobileScore -= 5;
    mobileScore = Math.max(5, mobileScore);

    // Conversion Readiness (Max 20)
    let conversionScore = 20;
    if (!hasWhatsApp) conversionScore -= 6;
    if (!hasPhone) conversionScore -= 4;
    if (!hasForm) conversionScore -= 6;
    if (!hasSsl) conversionScore -= 6;
    if (!hasOgImage) conversionScore -= 2;
    conversionScore = Math.max(4, conversionScore);

    const overallScore = Math.min(99, Math.max(15, speedScore + seoScore + mobileScore + conversionScore));

    // 4. Checkpoints Item List
    const checks = [
      {
        id: "ttfb",
        category: "Speed & Performance",
        title: "Server Response Latency (TTFB)",
        status: responseTimeMs < 600 ? "pass" : responseTimeMs < 1200 ? "warning" : "fail",
        detail: `${responseTimeMs}ms measured (Google benchmark: <400ms for optimal Core Web Vitals).`,
      },
      {
        id: "title",
        category: "SEO Architecture",
        title: "Page Title Tag Optimization",
        status: hasValidTitle ? "pass" : titleLength > 0 ? "warning" : "fail",
        detail: titleLength > 0
          ? `Length: ${titleLength} characters. ${titleLength > 65 ? "Too long (Google truncates after 60 chars)." : titleLength < 30 ? "Too short to carry keyword intent." : "Optimal length."}`
          : "Missing `<title>` tag! Search engines cannot index your main keywords.",
      },
      {
        id: "meta_desc",
        category: "SEO Architecture",
        title: "Meta Description Snippet",
        status: hasValidMetaDesc ? "pass" : metaDescLength > 0 ? "warning" : "fail",
        detail: metaDescLength > 0
          ? `Length: ${metaDescLength} characters. ${metaDescLength > 165 ? "Too long for mobile SERPs." : metaDescLength < 80 ? "Too brief for high click-through rates." : "Optimal length."}`
          : "Missing meta description. Google will pick random page fragments.",
      },
      {
        id: "h1",
        category: "Content Structure",
        title: "Primary H1 Heading Structure",
        status: h1Count === 1 ? "pass" : h1Count === 0 ? "fail" : "warning",
        detail: h1Count === 1
          ? "Single authoritative H1 tag identified."
          : h1Count === 0
          ? "No H1 tag detected. Search engines cannot confirm page topic hierarchy."
          : `Multiple H1 tags (${h1Count} found). Multiple H1s dilute topic authority.`,
      },
      {
        id: "images",
        category: "Image Optimization",
        title: "Image Alt Accessibility Tags",
        status: missingAltCount === 0 ? "pass" : missingAltCount > 5 ? "fail" : "warning",
        detail: missingAltCount > 0
          ? `${missingAltCount} out of ${totalImages} images are missing descriptive alt tags.`
          : `All ${totalImages} images have valid alt descriptions.`,
      },
      {
        id: "scripts",
        category: "Code Quality",
        title: "Script Weight & Third-Party Bloat",
        status: scriptCount <= 18 ? "pass" : scriptCount <= 32 ? "warning" : "fail",
        detail: `${scriptCount} script tags loaded. ${scriptCount > 25 ? "Heavy third-party JS slows mobile CPU rendering." : "Clean script payload."}`,
      },
      {
        id: "schema",
        category: "Rich Results",
        title: "JSON-LD Structured Schema",
        status: hasSchema ? "pass" : "warning",
        detail: hasSchema
          ? "Structured data schema detected for Google rich snippets."
          : "Missing JSON-LD schema (Organization / LocalBusiness / Service).",
      },
      {
        id: "conversion_funnel",
        category: "Lead Conversion",
        title: "Mobile Inbound Funnel (WhatsApp / Phone)",
        status: hasWhatsApp && (hasPhone || hasForm) ? "pass" : hasWhatsApp || hasPhone ? "warning" : "fail",
        detail: hasWhatsApp
          ? "Direct WhatsApp inquiry channel active."
          : "Missing direct WhatsApp or quick mobile contact button! High-intent visitors bounce without inquiring.",
      },
    ];

    // 5. Generate AI Executive Summary
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    let aiSummary = "";
    let priorityFixes: string[] = [];

    if (GEMINI_API_KEY) {
      try {
        const prompt = `You are a Senior Technical SEO Architect and Conversion Engineer at Joy Digital.
Review these live audit scan metrics for website: ${cleanDomain} (Industry: ${industry || "General Business"}):
- Overall Score: ${overallScore}/100
- Platform: ${platform}
- Server Response Time (TTFB): ${responseTimeMs}ms
- Title Tag: ${titleText || "Missing"} (${titleLength} chars)
- Meta Description: ${metaDesc ? "Present" : "Missing"} (${metaDescLength} chars)
- H1 Count: ${h1Count}
- Images Missing Alt Tags: ${missingAltCount} of ${totalImages}
- Script Tags: ${scriptCount}
- Has WhatsApp Inquiry: ${hasWhatsApp}
- Has Lead Form: ${hasForm}
- Has Schema: ${hasSchema}

Respond strictly in valid JSON format:
{
  "summary": "2 concise, authoritative sentences explaining the biggest operational and conversion bottleneck of this site, and estimated revenue/lead impact.",
  "priorityFixes": [
    "Fix 1: high-impact technical speed/code fix",
    "Fix 2: high-impact SEO indexing/schema fix",
    "Fix 3: high-impact conversion/lead capture fix"
  ]
}`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ role: "user", parts: [{ text: prompt }] }],
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "";
          const jsonMatch = rawText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            aiSummary = parsed.summary;
            priorityFixes = parsed.priorityFixes || [];
          }
        }
      } catch (err) {
        console.warn("Gemini audit generation error, falling back to heuristic synthesizer:", err);
      }
    }

    // Heuristic Fallback Synthesizer if Gemini didn't execute
    if (!aiSummary || priorityFixes.length === 0) {
      if (platform.includes("WordPress") && responseTimeMs > 900) {
        aiSummary = `${cleanDomain} is throttled by a ${responseTimeMs}ms server response time and heavy CMS plugin scripts, creating noticeable mobile latency. In competitive search results, this delay increases bounce rates by an estimated 30-40% before visitors view your services.`;
        priorityFixes = [
          `Eliminate plugin render-blocking scripts or migrate to a sub-second Next.js decoupled architecture.`,
          `${missingAltCount > 0 ? `Add descriptive image alt tags to ${missingAltCount} graphics` : "Inject JSON-LD structured schema"} to help Google index key service pages.`,
          `Integrate a direct, high-contrast WhatsApp Business inquiry trigger to convert mobile traffic instantly.`,
        ];
      } else if (overallScore < 60) {
        aiSummary = `Audit diagnostics for ${cleanDomain} reveal critical indexing and mobile conversion gaps that restrict organic search ranking. Sluggish asset delivery (${responseTimeMs}ms) and missing structural metadata are silently causing high-intent prospects to bounce to competitors.`;
        priorityFixes = [
          `Optimize initial server response (TTFB) to achieve sub-400ms Core Web Vitals compliance.`,
          `Implement proper H1 topic hierarchies and JSON-LD structured schema for Google 3-Pack indexing.`,
          `Deploy a sticky mobile conversion funnel with frictionless inquiry forms and 1-click WhatsApp.`,
        ];
      } else {
        aiSummary = `${cleanDomain} demonstrates a solid foundational baseline with a ${responseTimeMs}ms response time, but lacks advanced schema data and conversion hooks needed to dominate Google Page 1. Fine-tuning Core Web Vitals and inquiry funnels will maximize organic client acquisition.`;
        priorityFixes = [
          `Compress and convert hero media into WebP/AVIF to shave load time below 0.6 seconds.`,
          `Enrich heading tags and metadata with high-commercial transactional keywords.`,
          `Add high-contrast call-to-actions and interactive inquiry forms across key service pages.`,
        ];
      }
    }

    return NextResponse.json({
      success: true,
      url,
      cleanDomain,
      healthScore: overallScore,
      platform,
      responseTimeMs,
      hasSsl,
      summary: aiSummary,
      priorityFixes,
      categories: {
        speed: { score: speedScore, max: 25, status: speedScore > 18 ? "Good" : speedScore > 12 ? "Average" : "Poor" },
        seo: { score: seoScore, max: 35, status: seoScore > 26 ? "Good" : seoScore > 18 ? "Average" : "Needs Fix" },
        mobile: { score: mobileScore, max: 20, status: mobileScore > 15 ? "Good" : "Average" },
        conversion: { score: conversionScore, max: 20, status: conversionScore > 14 ? "Good" : "Poor" },
      },
      checks,
    });
  } catch (err: any) {
    console.error("Audit API Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred during the audit scan. Please try again." },
      { status: 500 }
    );
  }
}
