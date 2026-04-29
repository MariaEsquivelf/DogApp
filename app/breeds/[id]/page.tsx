// app/breeds/[id]/page.tsx
import { getBreedById } from '@/services/breeds.service'
import { BreedDetail } from '@/components/breeds/BreedDetail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function BreedPage({ params }: Props) {
  const { id } = await params
  const { data } = await getBreedById(id)
  return <BreedDetail breed={data} />
}