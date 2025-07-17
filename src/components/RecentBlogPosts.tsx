import Link from 'next/link';
import { getRecentPosts, formatDate } from '@/lib/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

export default function RecentBlogPosts() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Latest Insights
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Stay informed with our expert tax tips, business insights, and
              regulatory updates
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className='hover:shadow-lg transition-shadow group'>
                <div className='aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-3xl'>
                    {post.title.charAt(0)}
                  </span>
                </div>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
                    <div className='flex items-center gap-1'>
                      <CalendarDays className='w-4 h-4' />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Clock className='w-4 h-4' />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>

                  <h3 className='text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors'>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className='text-gray-700 mb-4 leading-relaxed'>
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
                      className='text-blue-600 hover:text-blue-700 font-medium text-sm'>
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className='text-center'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'>
              View All Articles
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
