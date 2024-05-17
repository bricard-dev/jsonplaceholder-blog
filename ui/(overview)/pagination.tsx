'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface PostPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function PostPagination({
  currentPage,
  totalPages,
}: PostPaginationProps) {
  const router = useRouter();

  const handlePageChange = (value: string) => {
    const page = parseInt(value, 10);
    if (page !== currentPage) {
      router.push(`?page=${page}`);
    }
  };

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            aria-disabled={!hasPrevious}
            className={clsx('', {
              'opacity-50 pointer-events-none': !hasPrevious,
            })}
          />
        </PaginationItem>

        <PaginationItem className="flex items-center gap-2">
          <Select onValueChange={handlePageChange}>
            <SelectTrigger className="gap-1">
              <SelectValue placeholder={currentPage} />
            </SelectTrigger>
            <SelectContent className="min-w-full">
              {Array.from({ length: totalPages }).map((_, index) => (
                <SelectItem key={index} value={String(index + 1)}>
                  {index + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="pr-2 max-sm:hidden flex-shrink-0 text-sm font-medium">
            of {totalPages}
          </p>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            aria-disabled={!hasNext}
            className={clsx('', {
              'opacity-50 pointer-events-none': !hasNext,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
