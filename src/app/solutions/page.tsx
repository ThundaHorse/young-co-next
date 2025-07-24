import { redirect } from 'next/navigation';
import { solutions } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Young Co Tax',
  description: 'Explore our full range of tax and financial solutions',
  alternates: {
    canonical: `https://www.youngcotax.com/solutions/${solutions[0].id}`
  }
};

export default function SolutionsPage() {
  // Redirect to the first solution
  redirect(`/solutions/${solutions[0].id}`);
}
