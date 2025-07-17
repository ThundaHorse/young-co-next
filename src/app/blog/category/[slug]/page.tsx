import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getBlogPostsByCategory,
  getCategoryBySlug,
  blogCategories,
  formatDate
} from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found - Young Co Tax'
    };
  }

  return {
    title: `${category.name} - Young Co Tax Blog`,
    description: category.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(slug);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white border-b'>
        <div className='container mx-auto px-4 py-6'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4'>
            <ArrowLeft className='w-4 h-4' />
            Back to Blog
          </Link>

          <div className='max-w-4xl'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {category.name}
            </h1>
            <p className='text-lg text-gray-700 mb-4'>{category.description}</p>
            <p className='text-sm text-gray-600'>
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </div>
      </header>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {posts.length === 0 ? (
              <Card>
                <CardContent className='p-8 text-center'>
                  <h2 className='text-xl font-semibold mb-4'>
                    No articles found
                  </h2>
                  <p className='text-gray-600 mb-6'>
                    There are no articles in this category yet. Check back soon
                    for new content!
                  </p>
                  <Link
                    href='/blog'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                    Browse All Articles
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className='space-y-6'>
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className='hover:shadow-lg transition-shadow'>
                    <CardContent className='p-6'>
                      <div className='flex items-start gap-4'>
                        <div className='w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                          <span className='text-white font-bold text-2xl'>
                            {post.title.charAt(0)}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                            <Link
                              href={`/blog/${post.slug}`}
                              className='hover:text-blue-600 transition-colors'>
                              {post.title}
                            </Link>
                          </h3>
                          <div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
                            <div className='flex items-center gap-1'>
                              <CalendarDays className='w-4 h-4' />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <User className='w-4 h-4' />
                              <span>{post.author}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Clock className='w-4 h-4' />
                              <span>{post.readingTime} min read</span>
                            </div>
                          </div>
                          <p className='text-gray-700 mb-3 leading-relaxed'>
                            {post.excerpt}
                          </p>
                          <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant='secondary'
                                  className='text-xs'>
                                  {tag.replace('-', ' ')}
                                </Badge>
                              ))}
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className='text-blue-600 hover:text-blue-700 font-medium'>
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8 space-y-8'>
              {/* Other Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Other Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    {blogCategories
                      .filter((cat) => cat.slug !== slug)
                      .map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/blog/category/${cat.slug}`}
                          className='flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors'>
                          <span className='text-gray-700'>{cat.name}</span>
                          <span className='text-xs text-gray-500'>
                            {getBlogPostsByCategory(cat.slug).length}
                          </span>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 mb-4'>
                    Get the latest tax tips and business insights delivered to
                    your inbox.
                  </p>
                  <div className='space-y-3'>
                    <input
                      type='email'
                      placeholder='Your email address'
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'>
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className='bg-blue-50 border-blue-200'>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2 text-blue-800'>
                    Need Professional Help?
                  </h3>
                  <p className='text-blue-700 mb-4'>
                    Our team of tax professionals is ready to help you with your
                    specific needs.
                  </p>
                  <Link
                    href='/contact-us'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                    Get In Touch
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
