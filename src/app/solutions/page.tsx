import { redirect } from 'next/navigation';
import { solutions } from '@/lib/constants';

export default function SolutionsPage() {
  // Redirect to the first solution
  redirect(`/solutions/${solutions[0].id}`);
}
