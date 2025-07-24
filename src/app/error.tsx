'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500 - Server Error | Young Co Tax',
  description: 'Something went wrong on our server.',
  robots: {
    index: false,
    follow: false
  }
};

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center'>
      <h1 className='text-6xl font-bold text-gray-800 mb-6'>500</h1>
      <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
        Server Error
      </h2>
      <p className='text-lg text-gray-600 max-w-md mb-8'>
        Sorry, something went wrong on our servers. We&apos;re working to fix
        the issue.
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
