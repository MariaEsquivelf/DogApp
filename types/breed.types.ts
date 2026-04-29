// types/breed.types.ts

export type WeightRange = {
  min: number
  max: number
}

export type BreedAttributes = {
  name: string
  description: string
  hypoallergenic: boolean
  life: WeightRange
  male_weight: WeightRange
  female_weight: WeightRange
}

export type GroupRef = {
  id: string
  type: 'group'
}
export type Breed = {
  id: string
  type: 'breed'
  attributes: BreedAttributes
  relationships: {
    group: {
      data: GroupRef
    }
  }
}
export type BreedsResponse = {
  data: Breed[]
  meta: {
    pagination: {
      current: number
      next: number | null
      last: number      
      records: number
    }
  }
  links: {
    self: string
    current: string
    next: string | null
    last: string
  }
}
export type BreedResponse = {
  data: Breed
  links: {
    self: string
  }
}