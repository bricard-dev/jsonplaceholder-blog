import PostList from '@/ui/(overview)/list';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading post list...</div>}>
        <PostList />
      </Suspense>
    </>
  );
}
