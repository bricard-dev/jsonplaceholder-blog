import { Post } from '@/lib/definitions';
import { capitalize, getPostLink } from '@/lib/utils';
import { noto_serif } from '@/styles/fonts';
import Link from 'next/link';

interface PostListProps {
  posts: Post[];
}

export default async function PostList({ posts }: PostListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  const formattedTitle = capitalize(post.title);
  const formattedBody = capitalize(post.body);
  const postLink = getPostLink(post.id);

  return (
    <li className="pb-4 sm:pb-6 border-b">
      <div className={`min-w-0 ${noto_serif.className}`}>
        <Link href={postLink}>
          <h2 className="mb-1 sm:text-xl font-bold max-sm:line-clamp-2">
            {formattedTitle}
          </h2>
        </Link>
        <Link href={postLink}>
          <p className="text-sm line-clamp-1">{formattedBody}</p>
        </Link>
      </div>
    </li>
  );
}
