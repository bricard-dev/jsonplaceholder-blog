import { fetchPostsWithUserByPage } from '@/lib/data';
import { PostWithUser } from '@/lib/definitions';
import {
  capitalize,
  getPostLink,
  getUserAvatarImage,
  getUserLink,
} from '@/lib/utils';
import { noto_serif } from '@/styles/fonts';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface PostListProps {
  currentPage: number;
}

export default async function PostList({ currentPage }: PostListProps) {
  //
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //
  const posts = await fetchPostsWithUserByPage(currentPage);
  return (
    <ul className="mb-4 flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

interface PostItemProps {
  post: PostWithUser;
}

function PostItem({ post }: PostItemProps) {
  const avatarImage = getUserAvatarImage(post.user.id);
  const formattedTitle = capitalize(post.title);
  const formattedBody = capitalize(post.body);
  const userLink = getUserLink(post.user.id);
  const postLink = getPostLink(post.id);

  return (
    <li className="pb-4 sm:pb-6 border-b">
      <div className="mb-1.5 sm:mb-2">
        <Link href={userLink} className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={avatarImage} alt={post.user.name} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <p className="text-sm">{post.user.name}</p>
        </Link>
      </div>
      <div className={`min-w-0 ${noto_serif.className}`}>
        <Link href={postLink}>
          <h2 className="sm:mb-1 sm:text-xl font-bold max-sm:line-clamp-2">
            {formattedTitle}
          </h2>
        </Link>
        <Link href={postLink}>
          <p className="max-sm:hidden text-sm line-clamp-1">{formattedBody}</p>
        </Link>
      </div>
    </li>
  );
}
