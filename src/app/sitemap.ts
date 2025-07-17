import { MetadataRoute } from 'next';
import { solutions } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://www.youngcotax.com',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/about',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/contact-us',
      lastModified: new Date()
    }
  ];

  const solutionPages = solutions.map((solution) => ({
    url: `https://www.youngcotax.com/solutions/${solution.id}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...solutionPages];
}
