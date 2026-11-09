export interface ContactAgent {
  id: number
  name: string
  phone: string
  email: string
  image: string
  properties: number
}

export const contactAgents: ContactAgent[] = [
  {
    id: 1,
    name: 'Nathan James',
    phone: '1-234-456-7893',
    email: 'nathan@realhomes.io',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    properties: 3,
  },
  {
    id: 2,
    name: 'Melissa William',
    phone: '1-234-456-7892',
    email: 'melissa@realhomes.io',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    properties: 5,
  },
  {
    id: 3,
    name: 'Alice Brian',
    phone: '1-234-456-7891',
    email: 'alice@realhomes.io',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    properties: 5,
  },
  {
    id: 4,
    name: 'John David',
    phone: '1-234-456-7890',
    email: 'john@realhomes.io',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    properties: 6,
  },
]