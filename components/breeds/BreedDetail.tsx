import Link from 'next/link'
import type { Breed } from '@/types/breed.types'
import type { Group } from '@/types/group.types'
import { BreedStatCard } from '@/components/breeds/BreedStatCard'

type Props = {
  breed: Breed
  group: Group
}

export function BreedDetail({ breed, group }: Props) {
  const { name, description, hypoallergenic, life, male_weight, female_weight } =
    breed.attributes
  const groupId = breed.relationships.group.data.id
  const groupName = group.attributes.name

  return (
    <main className="min-h-screen bg-app-bg px-4 py-8 text-app-text sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Link
          className="w-fit rounded-full border border-app-primary bg-app-primary px-4 py-2 text-sm font-semibold text-app-primary-text shadow-sm transition hover:border-app-accent-hover hover:bg-app-accent-hover"
          href="/breeds"
        >
          ← Volver a razas
        </Link>

        <section className="overflow-hidden rounded-2xl border border-app-border bg-app-surface shadow-sm">
          <div className="border-b border-app-border-soft px-6 py-8 sm:px-8">
            <span className="mb-4 grid size-14 place-items-center rounded-full bg-app-accent-soft text-3xl shadow-inner">
              🐕
            </span>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-app-heading sm:text-4xl">
                {name}
              </h1>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  hypoallergenic
                    ? 'bg-app-success-bg text-app-success-text'
                    : 'bg-app-neutral-bg text-app-neutral-text'
                }`}
              >
                {hypoallergenic ? '✓ Hipoalergénico' : '✕ No hipoalergénico'}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-app-muted">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-app-border-soft border-b border-app-border-soft">
            <BreedStatCard
              label="Esperanza de vida"
              min={life.min}
              max={life.max}
              unit="años"
            />
            <BreedStatCard
              label="Peso macho"
              min={male_weight.min}
              max={male_weight.max}
              unit="kg"
            />
            <BreedStatCard
              label="Peso hembra"
              min={female_weight.min}
              max={female_weight.max}
              unit="kg"
            />
          </div>

          <div className="flex justify-end px-6 py-4 sm:px-8">
            <Link
              className="rounded-full bg-app-primary px-5 py-2.5 text-sm font-semibold text-app-primary-text shadow-sm transition hover:bg-app-accent-hover"
              href={`/groups/${groupId}`}
            >
              {groupName} →
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
