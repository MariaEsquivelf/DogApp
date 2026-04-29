'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = '/breeds',
}: Props) {
  const router = useRouter()

  return (
    <nav
      aria-label="Paginación"
      className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
    >
      <button
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-app-primary bg-app-primary px-5 py-2.5 text-sm font-semibold text-app-primary-text shadow-sm transition hover:border-app-accent-hover hover:bg-app-accent-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-app-primary disabled:hover:bg-app-primary sm:w-auto"
        disabled={currentPage === 1}
        onClick={() => router.push(`${basePath}?page=${currentPage - 1}`)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-4" />
        
      </button>

      <span className="rounded-full bg-app-primary px-4 py-2 text-sm font-medium text-app-primary-text shadow-sm">
         {currentPage} / {totalPages}
      </span>

      <button
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-app-primary bg-app-primary px-5 py-2.5 text-sm font-semibold text-app-primary-text shadow-sm transition hover:border-app-accent-hover hover:bg-app-accent-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-app-primary disabled:hover:bg-app-primary sm:w-auto"
        disabled={currentPage === totalPages}
        onClick={() => router.push(`${basePath}?page=${currentPage + 1}`)}
        type="button"
      >
        
        <ChevronRight aria-hidden="true" className="size-4" />
      </button>
    </nav>
  )
}
