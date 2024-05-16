import { fetchCommentsByPostId } from '@/lib/data';
import CommentList from './list';

interface CommentsProps {
  postId: number;
}

export default async function Comments({ postId }: CommentsProps) {
  //
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //
  const comments = await fetchCommentsByPostId(postId);

  return (
    <section>
      <h2 className="mb-4 pb-2 font-semibold border-b">
        Comments ({comments.length})
      </h2>
      <CommentList comments={comments} />
    </section>
  );
}
