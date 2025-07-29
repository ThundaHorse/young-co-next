import fs from 'fs';
import { solutions } from '@/lib/constants';
import { blogPosts, blogCategories } from '@/lib/blog';

async function generateSitemap() {
  const baseUrl = 'https://www.youngcotax.com';

  // Define all your pages
  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    // Solutions pages
    ...solutions.map((solution) => ({
      url: `${baseUrl}/solutions/${solution.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7
    })),
    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6
    })),
    // Blog categories
    ...blogCategories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5
    }))
  ];

  // Generate the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
  `;

  // Write to public directory
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully');
}

// Uncomment to run the script directly with Node.js
// generateSitemap().catch(console.error);

export default generateSitemap;
