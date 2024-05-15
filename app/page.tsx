import PostList from '@/ui/(overview)/list';
import SkeletonPostList from '@/ui/skeletons';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SkeletonPostList />}>
        <PostList />
      </Suspense>
    </>
  );
}
