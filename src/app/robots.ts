import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/error', '/global-error']
    },
    sitemap: 'https://www.youngcotax.com/sitemap.xml'
  };
}
