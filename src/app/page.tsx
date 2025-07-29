import JumbotronComponent from '@/components/layout/Jumbotron';
import RecentBlogPosts from '@/components/RecentBlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Young Co Tax | Professional Tax Services & Solutions',
  description:
    'Young Co Tax offers comprehensive tax services, accounting solutions, and financial planning for individuals and businesses. Contact us today for a consultation.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Young Co Tax | Professional Tax Services & Solutions',
    description:
      'Professional tax services, accounting solutions, and financial planning for individuals and businesses.',
    url: 'https://www.youngcotax.com',
    images: [
      {
        url: 'https://www.youngcotax.com/images/landing-page.jpg',
        width: 1200,
        height: 630,
        alt: 'Young Co Tax Services'
      }
    ]
  }
};

export default function Home() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='h-full w-full text-center'>
        <JumbotronComponent />
      </div>
      <RecentBlogPosts />
    </section>
  );
}
