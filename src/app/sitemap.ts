import { MetadataRoute } from 'next';
import { solutions } from '@/lib/constants';
import { blogPosts, blogCategories } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://www.youngcotax.com/_not-found',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/about',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/blog',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/contact-us',
      lastModified: new Date()
    },
    {
      url: 'https://www.youngcotax.com/solutions',
      lastModified: new Date()
    }
  ];

  const solutionPages = solutions.map((solution) => ({
    url: `https://www.youngcotax.com/solutions/${solution.id}`,
    lastModified: new Date()
  }));

  const blogPostPages = blogPosts.map((post) => ({
    url: `https://www.youngcotax.com/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  const blogCategoryPages = blogCategories.map((category) => ({
    url: `https://www.youngcotax.com/blog/category/${category.slug}`,
    lastModified: new Date()
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...blogPostPages,
    ...blogCategoryPages
  ];
}
