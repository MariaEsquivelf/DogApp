import Link from 'next/link'
import type { Breed } from '@/types/breed.types'

type Props = {
  breeds: Breed[]
}

export function BreedTable({ breeds }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-app-border-soft bg-app-surface shadow-md">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-app-border text-xs uppercase tracking-wide text-app-muted">
            <th className="px-6 py-4 text-left font-semibold">Nombre</th>
            <th className="px-6 py-4 text-left font-semibold">
              Hipoalergénico
            </th>
            <th className="px-6 py-4 text-left font-semibold">Vida (años)</th>
            <th className="px-6 py-4 text-left font-semibold">Peso macho</th>
            <th className="px-6 py-4 text-left font-semibold">Peso hembra</th>
            <th className="px-6 py-4 text-left font-semibold">Grupo</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed) => {
            const { name, hypoallergenic, life, male_weight, female_weight } =
              breed.attributes
            const groupId = breed.relationships.group.data.id

            return (
              <tr
                className="border-b border-app-border-soft transition-colors hover:bg-app-accent-soft"
                key={breed.id}
              >
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-app-accent hover:underline"
                    href={`/breeds/${breed.id}`}
                  >
                    {name}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      hypoallergenic
                        ? 'bg-app-success-bg text-app-success-text'
                        : 'bg-app-neutral-bg text-app-neutral-text'
                    }`}
                  >
                    {hypoallergenic ? '✓ Sí' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4 text-app-muted">
                  {life.min} - {life.max}
                </td>
                <td className="px-6 py-4 text-app-muted">
                  {male_weight.min} - {male_weight.max} kg
                </td>
                <td className="px-6 py-4 text-app-muted">
                  {female_weight.min} - {female_weight.max} kg
                </td>
                <td className="px-6 py-4">
                  <Link
                    className="rounded-full bg-app-primary px-3 py-1 text-xs font-semibold text-app-primary-text transition-colors hover:bg-app-accent-hover"
                    href={`/groups/${groupId}`}
                  >
                    Ver grupo
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
