import Article from '@/ui/posts/article';
import { SkeletonPostArticle } from '@/ui/skeletons';
import { Suspense } from 'react';

interface PostPageProps {
  params: { id: number };
}

export default function PostPage({ params: { id } }: PostPageProps) {
  return (
    <>
      <Suspense fallback={<SkeletonPostArticle />}>
        <Article postId={id} />
      </Suspense>
    </>
  );
}
