// types/group.types.ts

export type BreedRef = {
  id: string
  type: 'breed'
}

export type GroupAttributes = {
  name: string
}

export type Group = {
  id: string
  type: 'group'
  attributes: GroupAttributes
  relationships: {
    breeds: {
      data: BreedRef[]
    }
  }
}

export type GroupsResponse = {
  data: Group[]
  links: {
    self: string
    current: string
    next: string | null
    last: string
  }
}

export type GroupResponse = {
  data: Group
  links: {
    self: string
  }
}