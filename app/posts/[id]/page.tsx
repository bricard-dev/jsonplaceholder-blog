import PostArticle from '@/ui/posts/article';
import { Suspense } from 'react';

interface PostPageProps {
  params: { id: number };
}

export default function PostPage({ params: { id } }: PostPageProps) {
  return (
    <>
      <Suspense fallback={<div>Loading post article...</div>}>
        <PostArticle postId={id} />
      </Suspense>
    </>
  );
}
