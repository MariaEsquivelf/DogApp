import Link from 'next/link'
import type { Breed } from '@/types/breed.types'

type Props = {
  breeds: Breed[]
}

export function BreedTable({ breeds }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-app-border bg-app-surface shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-base">
          <thead>
            <tr className="border-b border-app-border-soft text-sm uppercase leading-4 tracking-wide text-app-muted">
              <th className="px-5 py-4 text-left font-extrabold">Nombre</th>
              <th className="px-5 py-4 text-left font-extrabold">
                Hipoalergénico
              </th>
              <th className="px-5 py-4 text-left font-extrabold">
                Vida
                <br />
                (años)
              </th>
              <th className="px-5 py-4 text-left font-extrabold">
                Peso
                <br />
                macho
              </th>
              <th className="px-5 py-4 text-left font-extrabold">
                Peso
                <br />
                hembra
              </th>
            </tr>
          </thead>
          <tbody>
            {breeds.map((breed) => {
              const { name, hypoallergenic, life, male_weight, female_weight } =
                breed.attributes

              return (
                <tr
                  className="border-b border-app-border-soft transition-colors last:border-b-0 hover:bg-app-accent-soft/45"
                  key={breed.id}
                >
                  <td className="px-5 py-4">
                    <Link
                      className="font-extrabold text-app-accent hover:underline"
                      href={`/breeds/${breed.id}`}
                    >
                      {name}
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-sm font-extrabold leading-none ${
                        hypoallergenic
                          ? 'bg-app-success-bg text-app-success-text'
                          : 'bg-app-neutral-bg text-app-neutral-text'
                      }`}
                    >
                      {hypoallergenic ? '✓ Sí' : 'No'}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-app-text">
                    {life.min} - {life.max}
                  </td>
                  <td className="px-5 py-4 font-semibold text-app-text">
                    {male_weight.min} - {male_weight.max} kg
                  </td>
                  <td className="px-5 py-4 font-semibold text-app-text">
                    {female_weight.min} - {female_weight.max} kg
                  </td>
                 
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
