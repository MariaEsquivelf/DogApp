import Link from 'next/link'
import { Pagination } from '@/components/ui/Pagination'
import type { Group } from '@/types/group.types'
import type { Breed } from '@/types/breed.types'

type Props = {
  group: Group
  breeds: Breed[]
  currentPage: number
  totalPages: number
}

export function GroupDetail({
  group,
  breeds,
  currentPage,
  totalPages,
}: Props) {
  return (
    <main className="min-h-screen bg-app-bg px-4 py-8 text-app-text sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Link
          className="w-fit rounded-full border border-app-border bg-app-surface px-4 py-2 text-sm font-semibold text-app-text shadow-sm transition hover:border-app-accent hover:bg-app-accent-soft"
          href="/breeds"
        >
          ← Volver a razas
        </Link>

        <section className="overflow-hidden rounded-2xl border border-app-border bg-app-surface shadow-sm">
          <div className="border-b border-app-border-soft px-6 py-8 sm:px-8">
            <span className="mb-4 grid size-14 place-items-center rounded-full bg-app-accent-soft text-3xl shadow-inner">
              🐕
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-app-heading sm:text-5xl">
              {group.attributes.name}
            </h1>
            <h2 className="mt-3 text-base font-medium text-app-muted sm:text-lg">
              Razas de este grupo
            </h2>
          </div>

          <ul className="divide-y divide-app-border-soft">
            {breeds.map((breed) => (
              <li key={breed.id}>
                <Link
                  className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-app-accent transition hover:bg-app-accent-soft sm:px-8"
                  href={`/breeds/${breed.id}`}
                >
                  <span>{breed.attributes.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Pagination
          basePath={`/groups/${group.id}`}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  )
}
