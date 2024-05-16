import { fetchUserById } from '@/lib/data';
import { getUserAvatarImage } from '@/lib/utils';
import { noto_serif } from '@/styles/fonts';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface UserProfileProps {
  userId: number;
}

export default async function UserProfile({ userId }: UserProfileProps) {
  const user = await fetchUserById(userId);

  const avatarImage = getUserAvatarImage(user.id);
  const initials = user.name[0].toUpperCase();

  return (
    <div className="mb-8 sm:mb-10">
      <div className="mb-6 flex max-sm:flex-col gap-3 sm:gap-6">
        <Avatar className="h-20 sm:h-28 w-20 sm:w-28 max-sm:mx-auto mb-2">
          <AvatarImage src={avatarImage} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col max-sm:items-center sm:justify-center gap-1">
          <h1
            className={`text-2xl sm:text-3xl ${noto_serif.className} font-bold`}
          >
            {user.name}
          </h1>
          <p className="text-muted-foreground">@{user.username}</p>
        </div>
      </div>

      <p className="text-sm">
        Work at <span className="font-bold">{user.company.name}</span>,{' '}
        {user.company.catchPhrase}.
      </p>
    </div>
  );
}
