import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer style={{ boxShadow: 'none' }}>
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between flex flex-col'>
          <p className='mb-12 text-xs text-gray-500'>
            Any tax advice contained in this website (including any attachments)
            is not intended or written to be used, and cannot be used, for the
            purpose of (i) avoiding penalties imposed under the Internal Revenue
            Code or applicable state or local tax law or (ii) promoting,
            marketing, or recommending to another party any transaction or
            matter addressed herein.
          </p>
          <ul className='justify-center'>
            <a href='/about'>About</a>
            <a href='/solutions'>Solutions</a>
            <a href='/contact-us'>Contact</a>
            <a
              href='http://youngcotax.clientportal.com/'
              target='_blank'>
              Login
            </a>
          </ul>
        </div>
        <hr />
        <div className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2024
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
