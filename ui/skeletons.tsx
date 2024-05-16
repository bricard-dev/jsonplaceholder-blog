import { Skeleton } from './ui/skeleton';

export function SkeletonPostList() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i} className="pb-4 sm:pb-6 border-b">
          <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <div className="min-w-0 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function SkeletonPostArticle() {
  return (
    <article className="mb-10 sm:mb-20">
      <div className="mb-4 sm:mb-6 flex flex-col gap-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-1/3" />
      </div>
      <div className="mb-6 sm:mb-8 pb-4 flex items-center gap-3 border-b">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-4 w-1/3" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-2/3" />
      </div>
    </article>
  );
}

export function SkeletonComments() {
  return (
    <section>
      <div className="mb-4 pb-3 border-b">
        <Skeleton className="h-4 w-1/3" />
      </div>
      <SkeletonCommentList />
    </section>
  );
}

export function SkeletonCommentList() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="flex gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <div className="flex-1 flex flex-col space-y-3">
            <div className="h-6 flex items-center">
              <Skeleton className="h-4 w-1/3" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
