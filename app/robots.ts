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
    sitemap: 'https://joydigital.in/sitemap.xml',
    host: 'https://joydigital.in',
  };
}

