import { MetadataRoute } from 'next';
import { solutions } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://www.young-co-next.netlify.app',
      lastModified: new Date()
    },
    {
      url: 'https://www.young-co-next.netlify.app/about',
      lastModified: new Date()
    },
    {
      url: 'https://www.young-co-next.netlify.app/contact-us',
      lastModified: new Date()
    }
  ];

  const solutionPages = solutions.map((solution) => ({
    url: `https://www.young-co-next.netlify.app/solutions/${solution.id}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...solutionPages];
}
