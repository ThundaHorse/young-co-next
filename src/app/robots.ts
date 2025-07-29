import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/error',
          '/global-error',
          '/not-found',
          '/_next/',
          '/api/',
          '/.well-known/',
          '/private/',
          '/*?*', // Block URLs with query parameters for cleaner crawling
          '/*.json$', // Block JSON files
          '/*.js$', // Block JavaScript files
          '/*.css$' // Block CSS files
        ]
      },
      // Specific rules for Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/error', '/global-error', '/not-found', '/_next/', '/api/']
      },
      // Specific rules for Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/error', '/global-error', '/not-found', '/_next/', '/api/']
      }
    ],
    sitemap: 'https://www.youngcotax.com/sitemap.xml',
    host: 'https://www.youngcotax.com'
  };
}
