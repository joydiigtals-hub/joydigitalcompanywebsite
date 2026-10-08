import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
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
        allow: '/',
        disallow: ['/api/', '/admin/', '/thank-you'],
      },
    ],
    sitemap: [
      'https://www.joydigital.in/sitemap.xml',
      'https://joydigital.in/sitemap.xml',
    ],
    host: 'https://www.joydigital.in',
  };
}

