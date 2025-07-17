import JumbotronComponent from '@/components/layout/Jumbotron';
import RecentBlogPosts from '@/components/RecentBlogPosts';

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
