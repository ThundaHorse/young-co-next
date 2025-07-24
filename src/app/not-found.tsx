import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Young Co Tax',
  description: 'Sorry, the page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center'>
      <h1 className='text-6xl font-bold text-gray-800 mb-6'>404</h1>
      <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
        Page Not Found
      </h2>
      <p className='text-lg text-gray-600 max-w-md mb-8'>
        We couldn&apos;t find the page you were looking for. It might have been
        moved, deleted, or never existed.
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link
          href='/'
          className='px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors'>
          Return Home
        </Link>
        <Link
          href='/contact-us'
          className='px-6 py-2.5 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors'>
          Contact Support
        </Link>
      </div>
    </div>
  );
}
