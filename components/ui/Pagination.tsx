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
      className="flex items-center justify-center gap-3"
    >
      <button
        className="inline-flex size-11 items-center justify-center rounded-xl border border-app-border bg-app-surface text-app-muted shadow-sm transition hover:border-app-primary hover:bg-app-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === 1}
        onClick={() => router.push(`${basePath}?page=${currentPage - 1}`)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>

      <span className="rounded-xl bg-app-primary px-5 py-3 text-base font-extrabold leading-none text-app-primary-text shadow-sm">
        {currentPage} / {totalPages}
      </span>

      <button
        className="inline-flex size-11 items-center justify-center rounded-xl border border-app-primary bg-app-primary text-app-primary-text shadow-sm transition hover:bg-app-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === totalPages}
        onClick={() => router.push(`${basePath}?page=${currentPage + 1}`)}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>
    </nav>
  )
}
