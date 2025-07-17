import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer
      style={{ boxShadow: 'none' }}
      className='mt-8'>
      <div className='w-full text-center px-4'>
        <div className='container mx-auto w-full justify-between sm:flex sm:items-center sm:justify-between flex flex-col mb-6'>
          <p className='mb-6 text-muted-foreground text-sm'>
            Any tax advice contained in this website (including any attachments)
            is not intended or written to be used, and cannot be used, for the
            purpose of (i) avoiding penalties imposed under the Internal Revenue
            Code or applicable state or local tax law or (ii) promoting,
            marketing, or recommending to another party any transaction or
            matter addressed herein.
          </p>

          <ul className='grid grid-cols-[1fr] gap-x-0 lg:gap-x-8 gap-y-4 sm:grid-cols-[repeat(1,1fr)] xl:grid-cols-[repeat(3,1fr)]'>
            <Link
              href='/about'
              className='text-muted-foreground text-sm font-normal'>
              About
            </Link>

            <Link
              href='/solutions'
              className='text-muted-foreground text-sm font-normal'>
              Solutions
            </Link>

            <Link
              href='/contact-us'
              className='text-muted-foreground text-sm font-normal'>
              Contact
            </Link>
          </ul>
        </div>

        <hr />

        <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-center my-6'>
          © 2025
          <Link
            href='/'
            className='ml-1 hover:underline'>
            Young &amp; Company
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
