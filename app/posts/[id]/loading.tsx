import { SkeletonComments, SkeletonPostArticle } from '@/ui/skeletons';

export default function Loading() {
  return (
    <>
      <SkeletonPostArticle />
      <SkeletonComments />
    </>
  );
}
