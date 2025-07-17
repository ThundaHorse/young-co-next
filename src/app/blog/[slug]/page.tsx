import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getRelatedPosts, formatDate } from '@/lib/blog';
import { parseMarkdown } from '@/lib/markdown';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Young Co Tax'
    };
  }

  return {
    title: `${post.title} - Young Co Tax Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

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
              {post.title}
            </h1>

            <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6'>
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

            <div className='flex flex-wrap gap-2 mb-6'>
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant='secondary'>
                  {tag.replace('-', ' ')}
                </Badge>
              ))}
            </div>

            <p className='text-lg text-gray-700 leading-relaxed'>
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <Card>
              <CardContent className='p-8'>
                <div className='prose prose-lg max-w-none'>
                  <div
                    className='blog-content text-gray-800 leading-relaxed'
                    dangerouslySetInnerHTML={{
                      __html: parseMarkdown(post.content)
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Share Section */}
            <Card className='mt-8'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>
                      Share this article
                    </h3>
                    <p className='text-gray-600'>
                      Help others discover this valuable information
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                      <Share2 className='w-4 h-4' />
                      Share
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className='mt-12'>
                <h2 className='text-2xl font-bold mb-6 text-gray-800'>
                  Related Articles
                </h2>
                <div className='grid gap-6'>
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className='hover:shadow-lg transition-shadow'>
                      <CardContent className='p-6'>
                        <div className='flex items-start gap-4'>
                          <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                            <span className='text-white font-bold text-lg'>
                              {relatedPost.title.charAt(0)}
                            </span>
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                              <Link
                                href={`/blog/${relatedPost.slug}`}
                                className='hover:text-blue-600 transition-colors'>
                                {relatedPost.title}
                              </Link>
                            </h3>
                            <div className='flex items-center gap-4 text-sm text-gray-600 mb-2'>
                              <span>{formatDate(relatedPost.publishedAt)}</span>
                              <span>{relatedPost.readingTime} min read</span>
                            </div>
                            <p className='text-gray-700 text-sm'>
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8 space-y-8'>
              {/* Author Info */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold'>
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className='font-semibold'>{post.author}</h4>
                      <p className='text-sm text-gray-600'>Tax Professional</p>
                    </div>
                  </div>
                  <p className='text-sm text-gray-700'>
                    Expert tax professional with years of experience helping
                    businesses and individuals navigate complex tax regulations.
                  </p>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className='bg-blue-50 border-blue-200'>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2 text-blue-800'>
                    Need Professional Help?
                  </h3>
                  <p className='text-blue-700 mb-4'>
                    Our team is ready to help you with your specific tax and
                    business needs.
                  </p>
                  <Link
                    href='/contact-us'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                    Get In Touch
                  </Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
