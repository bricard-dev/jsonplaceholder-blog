import { SkeletonPostArticle } from '@/ui/skeletons';

export default function Loading() {
  return (
    <>
      <div className="mb-6 s:mb-10">
        <SkeletonPostArticle />
      </div>
      <div>Loading comments...</div>
    </>
  );
}
