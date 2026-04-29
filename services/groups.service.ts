// services/groups.service.ts
import type { GroupResponse } from '@/types/group.types'
import type { BreedResponse } from '@/types/breed.types'

const BASE_URL = process.env.DOG_API_BASE_URL ?? 'https://dogapi.dog/api/v2'

export async function getGroupById(id: string): Promise<GroupResponse> {
  const res = await fetch(`${BASE_URL}/groups/${id}`)
  if (!res.ok) throw new Error('Grupo no encontrado')
  return res.json()
}

export async function getBreedsByIds(ids: string[]): Promise<BreedResponse[]> {
  const promises = ids.map(id =>
    fetch(`${BASE_URL}/breeds/${id}`).then(res => res.json())
  )
  return Promise.all(promises)
}