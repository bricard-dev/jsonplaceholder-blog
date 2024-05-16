import { SkeletonPostArticle, SkeletonPostComments } from '@/ui/skeletons';

export default function Loading() {
  return (
    <>
      <SkeletonPostArticle />
      <SkeletonPostComments />
    </>
  );
}
