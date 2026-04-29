// app/groups/[id]/page.tsx
import { getGroupById, getBreedsByIds } from '@/services/groups.service'
import { GroupDetail } from '@/components/groups/GroupDetail'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}

const PAGE_SIZE = 20

export default async function GroupPage({ params, searchParams }: Props) {
  const { id } = await params
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const groupRes = await getGroupById(id)

  const breedIds = groupRes.data.relationships.breeds.data.map(b => b.id)
  const totalPages = Math.max(1, Math.ceil(breedIds.length / PAGE_SIZE))
  const start = (currentPage - 1) * PAGE_SIZE
  const paginatedBreedIds = breedIds.slice(start, start + PAGE_SIZE)
  const breedsRes = await getBreedsByIds(paginatedBreedIds)
  const breeds = breedsRes.map(r => r.data)

  return (
    <GroupDetail
      group={groupRes.data}
      breeds={breeds}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
