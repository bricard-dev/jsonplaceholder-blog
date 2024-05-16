import Posts from '@/ui/users/posts';
import Profile from '@/ui/users/profile';

interface UserPageProps {
  params: { id: number };
}

export default function UserPage({ params: { id } }: UserPageProps) {
  return (
    <>
      <Profile userId={id} />
      <Posts userId={id} />
    </>
  );
}
