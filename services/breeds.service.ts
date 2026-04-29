// services/breeds.service.ts
import type { BreedsResponse, BreedResponse } from '@/types/breed.types'

const BASE_URL = process.env.DOG_API_BASE_URL 

export async function getBreeds(page = 1): Promise<BreedsResponse> {
  const res = await fetch(
    `${BASE_URL}/breeds?page[number]=${page}&page[size]=20`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Error al obtener razas')
  return res.json()
}
export async function getBreedById(id: string): Promise<BreedResponse> {
  const res = await fetch(`${BASE_URL}/breeds/${id}`, {
    next: { revalidate: 3600 }
  })
  if (!res.ok) throw new Error('Raza no encontrada')
  return res.json()
}
export async function getBreedsByIds(ids: string[]): Promise<BreedResponse[]> {
  const promises = ids.map(id =>
    fetch(`${BASE_URL}/breeds/${id}`).then(res => res.json())
  )
  return Promise.all(promises)
}