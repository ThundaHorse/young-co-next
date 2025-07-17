import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, blogCategories, formatDate } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Young Co Tax | Tax Tips & Business Insights',
  description:
    'Stay updated with the latest tax tips, business insights, and regulatory changes. Expert advice from Young Co Tax professionals.'
};

export default function BlogPage() {
  const sortedPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Tax & Business Insights
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 mb-8'>
              Stay informed with expert advice, tips, and updates from Young Co
              Tax professionals
            </p>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {/* Featured Post */}
            {featuredPost && (
              <div className='mb-12'>
                <h2 className='text-2xl font-bold mb-6 text-gray-800'>
                  Featured Article
                </h2>
                <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
                  <div className='aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
                    <h3 className='text-white text-xl font-semibold px-4 text-center'>
                      {featuredPost.title}
                    </h3>
                  </div>
                  <CardContent className='p-6'>
                    <div className='flex items-center gap-4 text-sm text-gray-600 mb-4'>
                      <div className='flex items-center gap-1'>
                        <CalendarDays className='w-4 h-4' />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <User className='w-4 h-4' />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                      {featuredPost.excerpt}
                    </p>
                    <div className='flex items-center justify-between'>
                      <div className='flex gap-2'>
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant='secondary'
                            className='text-xs'>
                            {tag.replace('-', ' ')}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other Posts */}
            <div>
              <h2 className='text-2xl font-bold mb-6 text-gray-800'>
                Recent Articles
              </h2>
              <div className='space-y-6'>
                {otherPosts.map((post) => (
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
                              {post.tags.slice(0, 2).map((tag) => (
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
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8 space-y-8'>
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    {blogCategories.map((category) => {
                      const postCount = blogPosts.filter(
                        (post) => post.category === category.slug
                      ).length;
                      return (
                        <Link
                          key={category.id}
                          href={`/blog/category/${category.slug}`}
                          className='flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors'>
                          <span className='text-gray-700'>{category.name}</span>
                          <Badge
                            variant='outline'
                            className='text-xs'>
                            {postCount}
                          </Badge>
                        </Link>
                      );
                    })}
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
