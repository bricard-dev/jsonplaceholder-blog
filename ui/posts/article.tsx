import { fetchPostWithUserById } from '@/lib/data';
import { capitalize, getUserAvatarImage, getUserLink } from '@/lib/utils';
import { noto_serif } from '@/styles/fonts';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface PostArticleProps {
  postId: number;
}

export default async function PostArticle({ postId }: PostArticleProps) {
  //
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //
  const post = await fetchPostWithUserById(postId);

  const avatarImage = getUserAvatarImage(post.user.id);
  const formattedTitle = capitalize(post.title);
  const formattedBody = capitalize(post.body);
  const userLink = getUserLink(post.user.id);

  return (
    <article>
      <h1
        className={`mb-4 sm:mb-6 text-3xl ${noto_serif.className} font-bold leading-10`}
      >
        {formattedTitle}
      </h1>

      <Link
        href={userLink}
        className="mb-6 sm:mb-8 pb-4 flex items-center gap-3 border-b"
      >
        <Avatar>
          <AvatarImage src={avatarImage} alt={post.user.name} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <p>{post.user.name}</p>
      </Link>

      <div>
        <p className={`text-lg ${noto_serif.className}`}>{formattedBody}.</p>
      </div>
    </article>
  );
}
