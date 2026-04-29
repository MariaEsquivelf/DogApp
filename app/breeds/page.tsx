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
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="px-2 py-8 text-center sm:py-10">
          <span className="mx-auto mb-5 grid size-[70px] place-items-center rounded-full border border-app-primary bg-app-accent-soft text-3xl shadow-sm">
            🐾
          </span>
          <h1 className="text-4xl font-extrabold tracking-normal text-app-heading">
            Razas de perros
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-7 text-app-text">
            Explorá {meta.pagination.records} razas · hacé clic en cualquier
            nombre para ver el detalle
          </p>
        </div>

        <BreedTable breeds={data} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </main>
  )
}
