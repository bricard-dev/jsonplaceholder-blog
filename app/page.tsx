import { fetchAllPostPages } from '@/lib/data';
import List from '@/ui/(overview)/list';
import Pagination from '@/ui/(overview)/pagination';
import { SkeletonPostList } from '@/ui/skeletons';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

interface HomePageProps {
  searchParams: { page?: string };
}

export default async function HomePage({
  searchParams: { page },
}: HomePageProps) {
  const currentPage = Number(page) || 1;

  const totalPages = await fetchAllPostPages();

  if (currentPage > totalPages) {
    redirect('/');
  }

  return (
    <>
      <Suspense key={currentPage} fallback={<SkeletonPostList />}>
        <List currentPage={currentPage} />
      </Suspense>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
