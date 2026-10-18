import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/'],
        disallow: ['/api/', '/admin/', '/thank-you'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/blog/'],
        disallow: ['/api/', '/admin/', '/thank-you'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'bingbot',
          'Applebot-Extended',
          'Meta-ExternalAgent',
        ],
        allow: ['/', '/blog/'],
        disallow: ['/api/', '/admin/', '/thank-you'],
      },
    ],
    sitemap: 'https://www.joydigital.in/sitemap.xml',
  };
}

