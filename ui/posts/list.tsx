import { Comment } from '@/lib/definitions';
import { capitalize, getUserAvatarImage } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  const avatarImage = getUserAvatarImage(comment.email);
  const initials = comment.email[0].toUpperCase();
  const formattedBody = capitalize(comment.body);
  return (
    <li key={comment.id} className="flex gap-3">
      <Avatar className="h-6 w-6">
        <AvatarImage src={avatarImage} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-1">
        <p className="h-6 flex items-center text-sm text-muted-foreground">
          {comment.email}
        </p>
        <p className="text-sm">{formattedBody}.</p>
      </div>
    </li>
  );
}
