import Link from 'next/link'
import type { Group } from '@/types/group.types'
import type { Breed } from '@/types/breed.types'

type Props = {
  group: Group
  breeds: Breed[]
}

export function GroupDetail({ group, breeds }: Props) {
  return (
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
  )
}