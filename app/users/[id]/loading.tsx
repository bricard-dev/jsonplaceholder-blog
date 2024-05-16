import { SkeletonUserPosts, SkeletonUserProfile } from '@/ui/skeletons';

export default function Loading() {
  return (
    <>
      <SkeletonUserProfile />
      <SkeletonUserPosts />
    </>
  );
}
