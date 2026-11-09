export interface Agent {
  id: number
  name: string
  image: string
  title: string
  properties: number
  languages: string[]
}

export const agents: Agent[] = [
  {
    id: 1,
    name: 'Michelle Ramirez',
    title: 'Company Agent',
    properties: 9,
    languages: ['English', 'Spanish', 'French'],
    image: 'https://cdn.21st.dev/assets/localized/1f470a3b98be28d8c06ab3a449d26a42f3a918781917fe3affd1244c623eee48.mp4',
  },
  {
    id: 2,
    name: 'Brittany Watkins',
    title: 'Company Agent',
    properties: 19,
    languages: ['English', 'Spanish', 'French'],
    image: 'https://cdn.21st.dev/assets/localized/dd4046a19523a64a0a8021c924aa59b8027ec16fb9c6884e3a53beeb7faba21d.mp4',
  },
  {
    id: 3,
    name: 'Vincent Fuller',
    title: 'Company Agent',
    properties: 5,
    languages: ['English', 'Spanish', 'French'],
    image: 'https://cdn.21st.dev/assets/localized/d4ec88dd6acbb5d1cbb990f4fbf0274a2770b67f7e637a1d485735507ba32193.mp4',
  },
  {
    id: 4,
    name: 'Samuel Palmer',
    title: 'Company Agent',
    properties: 4,
    languages: ['English', 'Spanish', 'French'],
    image: 'https://cdn.21st.dev/assets/localized/cdfa348287a9087ef9249fe87eb8121365e9574d86f321184e9830b44f1186b4.mp4',
  },
]