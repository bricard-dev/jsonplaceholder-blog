import Article from '@/ui/posts/article';
import Comments from '@/ui/posts/comments';

interface PostPageProps {
  params: { id: number };
}

export default function PostPage({ params: { id } }: PostPageProps) {
  return (
    <>
      <Article postId={id} />
      <Comments postId={id} />
    </>
  );
}
