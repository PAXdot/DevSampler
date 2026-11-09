export interface Platform {
  name: string
  id: string
}

export const supportedPlatforms: Platform[] = [
  { name: 'Next.js', id: 'nextdotjs' },
  { name: 'TypeScript', id: 'typescript' },
  { name: 'Tailwind CSS', id: 'tailwindcss' },
  { name: 'React', id: 'react' },
  { name: 'Prisma', id: 'prisma' },
  { name: 'GitHub', id: 'github' },
  { name: 'Vercel', id: 'vercel' },
  { name: 'Stripe', id: 'stripe' },
  { name: 'Figma', id: 'figma' },
]