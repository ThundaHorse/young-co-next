import { Button } from '@/components/ui/button';
import './styles.css';

const About = () => {
  return (
    <>
      <section
        id='about-intro'
        className='bg-gray-50 backdrop-filter backdrop-blur-lg'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='rounded-lg p-6 md:p-8'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-bold mb-4'>
                Young & Company
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Young & Company was founded with the mission statement of
                building long-term relationships with our clients to help save
                taxes for individual and businesses. We are a specialty tax firm
                dedicated to helping our clients through personalized tax
                services and strategies.
              </p>

              <br />

              <ul className='hero-intro'>
                <li>We Serve all 50 States and Puerto Rico.</li>
                <li>Experienced Team in Domestic and International Tax.</li>
                <li>10 Years of Excellence.</li>
                <li>Always Supporting Our Local Communities.</li>
              </ul>
            </div>
            {/* <div className='about-intro-right rounded-lg p-8 md:p-12'></div> */}
          </div>
        </div>
      </section>

      <hr />

      <section
        id='temp-holder'
        className='bg-stone-100 text-gray-500 backdrop-filter backdrop-blur-lg'>
        <div className='text-center'>
          <div className='p-16 call-to-action-about-us'>
            <h2 className='mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl lg:text-6xl'>
              Let&apos;s Work Together!
            </h2>
            <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48'>
              Optimize Your Tax Savings
            </p>

            <p className='mb-12'>
              Find out how much you can potentially save for the next tax
              season!
            </p>

            <div className='flex justify-center'>
              <Button className='call-to-action-button'>
                <a href='/contact-us'>Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr />
    </>
  );
};

export default About;
