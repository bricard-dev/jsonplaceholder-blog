import { fetchPostsByUserId } from '@/lib/data';
import List from './list';

interface UserPostsProps {
  userId: number;
}

export default async function UserPosts({ userId }: UserPostsProps) {
  //
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //
  const posts = await fetchPostsByUserId(userId);
  return (
    <div>
      <h2 className="mb-8 pb-2 font-semibold border-b">
        Posts ({posts.length})
      </h2>
      <List posts={posts} />
    </div>
  );
}
