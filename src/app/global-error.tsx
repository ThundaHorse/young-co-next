'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center'>
          <h1 className='text-6xl font-bold text-gray-800 mb-6'>Oops!</h1>
          <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
            Something went wrong
          </h2>
          <p className='text-lg text-gray-600 max-w-md mb-8'>
            We apologize for the inconvenience. Our team has been notified and
            is working to fix the issue.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button
              onClick={() => reset()}
              className='px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors'>
              Try Again
            </button>
            <Link
              href='/'
              className='px-6 py-2.5 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors'>
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
