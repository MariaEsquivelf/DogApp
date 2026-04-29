import { getBreeds } from '@/services/breeds.service'
import { BreedTable } from '@/components/breeds/BreedTable'
import { Pagination } from '@/components/ui/Pagination'

type Props = {
  searchParams: Promise<{ page?: string }>
}

export default async function BreedsPage({ searchParams }: Props) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const { data, meta } = await getBreeds(currentPage)
  const totalPages = meta.pagination.last

  return (
    <main className="min-h-screen bg-app-bg text-app-text">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="px-2 py-8 text-center sm:px-10">
          <span className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-app-accent-soft text-4xl shadow-inner">
            🐶
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-app-heading sm:text-5xl">
            Razas de Perros
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-app-muted sm:text-lg">
            Explora todas las razas de perros, sus características y detalles.
            Haz clic en cualquier raza para obtener más información sobre ella.
          </p>
        </div>

        <BreedTable breeds={data} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </main>
  )
}
