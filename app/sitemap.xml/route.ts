import { getAllPosts } from '@/lib/blog';

// Force dynamic execution so new blog posts or updates appear dynamically in sitemap.xml
export const revalidate = 86400; // Revalidate daily

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: {
    [key: string]: string;
  };
}

export async function GET() {
  try {
    const baseUrl = 'https://joydigital.in';
    const todayStr = new Date().toISOString().split('T')[0];

    // Target country codes for localized routes
    const countries = ['us', 'uk', 'ae', 'ca', 'au', 'sg'];

    // Localized route paths
    const localizedPaths = ['', '/seo-services', '/website-development', '/contact'];

    // Global static routes (unified, non-country specific)
    const unifiedStaticPaths = [
      '/about',
      '/ai-search-optimization',
      '/author/saravanan',
      '/portfolio',
      '/portfolio-website-development',
      '/nextjs-development-agency',
      '/custom-website-development',
      '/dynamic-website-development',
      '/static-website-development',
      '/landing-page-development',
      '/enterprise-web-solutions',
      '/custom-software-development',
      '/ecommerce-website-development',
      '/web-design-services',
      '/wordpress-to-nextjs-migration',
      '/shopify-vs-headless-nextjs',
      '/offshore-web-development-partner',
      '/social-media-marketing',
      '/logo-design-services',
      '/google-business-profile-setup',
      '/google-business-profile-optimization',
      '/safari-website-development',
      '/tour-operator-website-development',
      '/travel-website-development',
      '/africa/tourism-website-development',
      '/website-for-consulting-companies',
      '/website-for-ecommerce',
      '/website-for-export-and-import',
      '/local-seo-services',
      '/seo-services-chennai',
      '/digital-marketing-agency-in-chennai',
      '/website-development-company-madurai',
      '/website-design-company-madurai',
      '/seo-services-madurai',
      '/website-design-company-coimbatore',
      '/seo-company-coimbatore',
      '/website-for-hospitals',
      '/website-for-hotels',
      '/website-for-insurance-agents',
      '/website-for-law-firms',
      '/website-for-logistics-and-shipping',
      '/website-for-luxury-brands',
      '/website-for-manufacturing-companies',
      '/website-for-marketing-agencies',
      '/website-for-pest-control',
      '/website-for-real-estate',
      '/website-for-schools',
      '/website-for-small-business',
      '/website-for-solar-companies',
      '/website-for-textile-manufacturers',
      '/website-for-tour-and-safari',
      '/case-studies',
      '/case-studies/chennai-clinic-leads',
      '/case-studies/ecommerce-sales-increase',
      '/case-studies/saas-landing-optimization',
      '/blog',
      '/free-website-audit',
      '/free-tools',
      '/gst-calculator',
      '/invoice-generator',
      '/quotation-generator',
      '/qr-code-generator',
      '/whatsapp-link-generator',
      '/seo-audit-tool',
      '/image-compressor',
      '/sitemap',
      '/privacy-policy',
      '/terms-and-conditions',
      '/cookie-policy',
      '/disclaimer',
      '/refund-policy',
    ];

    const entries: SitemapEntry[] = [];

    // Helper to generate hreflang map for localized route paths
    const getAlternates = (routePath: string) => ({
      'x-default': `${baseUrl}${routePath}`,
      'en-in': `${baseUrl}${routePath}`,
      'en-us': `${baseUrl}/us${routePath}`,
      'en-gb': `${baseUrl}/uk${routePath}`,
      'en-ae': `${baseUrl}/ae${routePath}`,
      'en-ca': `${baseUrl}/ca${routePath}`,
      'en-au': `${baseUrl}/au${routePath}`,
      'en-sg': `${baseUrl}/sg${routePath}`,
    });

    // Helper for granular static route priorities & change frequencies
    const getRouteConfig = (route: string): { priority: number; changefreq: SitemapEntry['changefreq'] } => {
      if (route === '/blog') return { priority: 0.8, changefreq: 'daily' };
      if (
        route === '/nextjs-development-agency' ||
        route === '/custom-website-development' ||
        route === '/ai-search-optimization' ||
        route === '/enterprise-web-solutions'
      ) {
        return { priority: 0.9, changefreq: 'weekly' };
      }
      if (
        route.startsWith('/website-for-') ||
        route.endsWith('-website-development') ||
        route === '/portfolio' ||
        route === '/about'
      ) {
        return { priority: 0.8, changefreq: 'weekly' };
      }
      if (
        route.startsWith('/free-tools') ||
        route.endsWith('-calculator') ||
        route.endsWith('-generator') ||
        route === '/free-website-audit' ||
        route === '/seo-audit-tool' ||
        route === '/image-compressor'
      ) {
        return { priority: 0.7, changefreq: 'monthly' };
      }
      if (route.startsWith('/case-studies')) {
        return { priority: 0.7, changefreq: 'monthly' };
      }
      if (
        route === '/privacy-policy' ||
        route === '/terms-and-conditions' ||
        route === '/cookie-policy' ||
        route === '/disclaimer' ||
        route === '/refund-policy' ||
        route === '/sitemap'
      ) {
        return { priority: 0.3, changefreq: 'monthly' };
      }
      return { priority: 0.7, changefreq: 'weekly' };
    };

    // 1. Regional & Localized Routes (Homepage + Core Services across countries)
    localizedPaths.forEach((routePath) => {
      // Default / Global route
      entries.push({
        url: `${baseUrl}${routePath}`,
        lastmod: todayStr,
        changefreq: 'weekly',
        priority: routePath === '' ? 1.0 : 0.8,
        alternates: getAlternates(routePath),
      });

      // Country-specific subfolder routes
      countries.forEach((country) => {
        entries.push({
          url: `${baseUrl}/${country}${routePath}`,
          lastmod: todayStr,
          changefreq: 'weekly',
          priority: routePath === '' ? 0.9 : 0.8,
          alternates: getAlternates(routePath),
        });
      });
    });

    // 2. Unified Static Routes
    unifiedStaticPaths.forEach((route) => {
      const config = getRouteConfig(route);
      entries.push({
        url: `${baseUrl}${route}`,
        lastmod: todayStr,
        changefreq: config.changefreq,
        priority: config.priority,
      });
    });

    // 3. Dynamic Indexable Blog Posts
    try {
      const blogPosts = await getAllPosts();
      const indexablePosts = blogPosts.filter(
        (post) =>
          post.status !== 'Draft' &&
          post.status !== 'Archived' &&
          !post.robots?.toLowerCase().includes('noindex')
      );

      indexablePosts.forEach((post) => {
        const postDate = post.lastUpdatedDate || post.date || todayStr;
        // Format to YYYY-MM-DD if ISO string
        const formattedDate = postDate.includes('T') ? postDate.split('T')[0] : postDate;

        entries.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastmod: formattedDate,
          changefreq: 'weekly',
          priority: 0.6,
        });
      });
    } catch (err) {
      console.error('Error fetching blog posts for sitemap.xml:', err);
    }

    // Generate XML Output
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

    entries.forEach((entry) => {
      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;
      if (entry.lastmod) {
        xml += `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>\n`;
      }
      if (entry.changefreq) {
        xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
      }
      if (typeof entry.priority === 'number') {
        xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
      }
      if (entry.alternates) {
        Object.entries(entry.alternates).forEach(([lang, href]) => {
          xml += `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}"/>\n`;
        });
      }
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    const xmlBuffer = Buffer.from(xml, 'utf-8');

    return new Response(xmlBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Content-Length': xmlBuffer.length.toString(),
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Critical error generating dynamic sitemap.xml:', error);
    
    // Fallback minimal XML to prevent crashing and 500 errors
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://joydigital.in/</loc>
    <priority>1.0</priority>
  </url>
</urlset>`;

    const fallbackBuffer = Buffer.from(fallbackXml, 'utf-8');

    return new Response(fallbackBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Content-Length': fallbackBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=1800',
      },
    });
  }
}
