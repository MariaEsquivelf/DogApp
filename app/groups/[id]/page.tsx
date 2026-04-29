import { getGroupById } from '@/services/groups.service'
import { GroupDetail } from '@/components/groups/GroupDetail'
import Link from 'next/link'
import { getBreedsByIds } from '@/services/breeds.service'

type Props = {
  params: Promise<{ id: string }>
}

export default async function GroupPage({ params }: Props) {
  const { id } = await params
  const groupRes = await getGroupById(id)

  const breedIds = groupRes.data.relationships.breeds.data.map(b => b.id)
  const breedsRes = await getBreedsByIds(breedIds)
  const breeds = breedsRes.map(r => r.data)

  return (
    <main className="min-h-screen bg-app-bg px-4 py-8 text-app-text sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Link
          href="/breeds"
          className="w-fit rounded-full border border-app-primary bg-app-primary px-4 py-2 text-sm font-semibold text-app-primary-text shadow-sm transition hover:border-app-accent-hover hover:bg-app-accent-hover"
        >
          ← Volver a razas
        </Link>
        <GroupDetail group={groupRes.data} breeds={breeds} />
      </div>
    </main>
  )
}