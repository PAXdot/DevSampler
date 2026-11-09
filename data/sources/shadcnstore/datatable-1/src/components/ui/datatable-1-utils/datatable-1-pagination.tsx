'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

type Datatable1PaginationProps = {
  page: number
  pageSize: number
  total: number
  onPageChange: (page: number) => void
}

export function Datatable1Pagination({ page, pageSize, total, onPageChange }: Datatable1PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)

  return (
    <div className="flex items-center justify-between p-4 border-t border-border">
      <div className="text-sm text-muted-foreground">
        Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total} entries
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          aria-label="Go to previous page"
          className="size-9 cursor-pointer"
        >
          <ChevronLeft />
        </Button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
          <Button
            key={pageNumber}
            variant={page === pageNumber ? 'default' : 'outline'}
            size="icon"
            onClick={() => onPageChange(pageNumber)}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={page === pageNumber ? 'page' : undefined}
            className="size-9 cursor-pointer"
          >
            {pageNumber}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          aria-label="Go to next page"
          className="size-9 cursor-pointer"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
