import './styles.css';
import { solutions } from '@/lib/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface SolutionsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: SolutionsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((sol) => sol.id === slug);
  const previousSolution = (await parent).title || 'Solutions';

  if (!solution) {
    return {
      title: 'Solution Not Found',
      description: 'The requested solution does not exist.',
      openGraph: {
        title: `${previousSolution} | Young Co Tax`,
        description: `${previousSolution}`
      }
    };
  }

  return {
    title: `${solution.title} | Young Co Tax`,
    description: solution.intro,
    alternates: {
      canonical: `https://www.youngcotax.com/solutions/${slug}`
    },
    openGraph: {
      title: `${solution.title} | Young Co Tax`,
      description: solution.intro,
      url: `https://www.youngcotax.com/solutions/${slug}`
    }
  };
}

const Solutions = async ({ params }: SolutionsPageProps) => {
  const { slug } = await params;

  // Find the solution that matches the slug
  const currentSolution = solutions.find((solution) => solution.id === slug);

  // If the slug doesn't match any solution, show 404
  if (!currentSolution) {
    notFound();
  }

  return (
    <>
      <section id='solutions-intro'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
          <div
            className='p-4 rounded-lg'
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <h2 className='mb-4 text-5xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-5xl'>
              Solutions
            </h2>
            <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48'>
              <b>We believe that your success is our success.</b>
            </p>

            <p className='text-white'>
              We serve the needs of every single client, whether they are a
              large, multi-national corporation, a small to medium sized
              company, or an individual.
            </p>
          </div>
        </div>
      </section>

      <section id='solutions-tabs'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-8'>
          <Tabs
            defaultValue={slug}
            className='justify-center p-4'
            aria-label='Solutions Offered'>
            <TabsList className='w-full flex flex-col sm:flex-row sm:flex-wrap justify-center mb-4 h-auto p-2 bg-muted rounded-md gap-1'>
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className='w-full sm:w-auto sm:flex-1 px-3 py-2 text-sm md:text-base data-[state=active]:bg-background data-[state=active]:text-foreground'>
                  <Link
                    scroll={false}
                    href={`/solutions/${solution.id}`}>
                    {solution.title}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((item, index) => {
              return (
                <TabsContent
                  value={item.id}
                  key={`${item.id + index}`}
                  title={item.title}>
                  <div className='grid md:grid-cols-2 gap-8'>
                    <div className='tab-left text-left'>
                      <h2 className='text-3xl font-bold dark:text-white'>
                        {item.title}
                      </h2>

                      <br />

                      <h2 className='text-2xl font-bold dark:text-white'>
                        {item.intro}
                      </h2>

                      <br />

                      <span className='font-medium text-gray-800 dark:text-white'>
                        {item.desc}
                      </span>

                      {item.subDesc ? (
                        <>
                          <br />
                          <br />
                          {item.subDesc}
                        </>
                      ) : (
                        <></>
                      )}

                      <br />
                      <br />

                      <h2 className='text-2xl font-bold dark:text-white'>
                        {item.intro2}
                      </h2>

                      <br />

                      <span className='font-medium text-gray-800 dark:text-white'>
                        <ul>
                          {item.desc2.map((desc, idx) => (
                            <li
                              style={{ listStyle: 'inside' }}
                              key={idx}>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </span>
                    </div>

                    <div className='tab-right flex justify-center'>
                      <Image
                        width={600}
                        height={600}
                        className='rounded-xl'
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <hr />
    </>
  );
};

export default Solutions;
