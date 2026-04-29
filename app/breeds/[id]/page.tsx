// app/breeds/[id]/page.tsx
import { getBreedById } from '@/services/breeds.service'
import { getGroupById } from '@/services/groups.service'
import { BreedDetail } from '@/components/breeds/BreedDetail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function BreedPage({ params }: Props) {
  const { id } = await params
  const { data } = await getBreedById(id)
  const groupId = data.relationships.group.data.id
  const groupRes = await getGroupById(groupId)

  return <BreedDetail breed={data} group={groupRes.data} />
}