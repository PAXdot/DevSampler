import type { LucideIcon } from 'lucide-react'
import { BarChart3, Calendar, FileText, Home, MessageSquare, Settings, Users } from 'lucide-react'

import type { ChartConfig } from '@/components/ui/chart'

/**
 * Portraits are served from the ShadcnStore CDN rather than a third-party avatar API, so a
 * shipped block never depends on someone else's host staying up. Every Avatar keeps an initials
 * fallback for when the image is blocked or offline.
 */
const CDN = 'https://assets.shadcnstore.com/shadcnstore.com/stock/marketing'

export interface App1Person {
  name: string
  initials: string
  avatar: string
}

export const app1People = {
  jordan: { name: 'Jordan Diaz', initials: 'JD', avatar: `${CDN}/robert-chen.400w.e979c2.avif` },
  john: { name: 'John Doe', initials: 'JD', avatar: `${CDN}/david-kim.400w.a3611d.avif` },
  sarah: { name: 'Sarah Kim', initials: 'SK', avatar: `${CDN}/alice-brian.400w.fa3d8c.avif` },
  mike: { name: 'Mike Taylor', initials: 'MT', avatar: `${CDN}/emily-chen.400w.8fb3cf.avif` },
  lisa: { name: 'Lisa Park', initials: 'LP', avatar: `${CDN}/jennifer-park.400w.d30794.avif` },
  ravi: { name: 'Ravi Singh', initials: 'RS', avatar: `${CDN}/john-david.400w.fde889.avif` },
  emily: { name: 'Emily Chen', initials: 'EC', avatar: `${CDN}/michael-rodriguez.400w.d8234b.avif` },
  alex: { name: 'Alex Moore', initials: 'AM', avatar: `${CDN}/susan-d-lunsford.400w.a3e5c2.avif` },
  ryan: { name: 'Ryan Wilson', initials: 'RW', avatar: `${CDN}/keneth-conroy.400w.c4ea19.avif` },
  priya: { name: 'Priya Shah', initials: 'PS', avatar: `${CDN}/sarah-johnson.400w.01a6ba.avif` },
} satisfies Record<string, App1Person>

export interface App1NavItem {
  name: string
  href: string
  icon: LucideIcon
  current: boolean
}

export interface App1Project {
  id: string
  name: string
  description: string
  progress: number
  status: 'In progress' | 'Planning' | 'In review'
  team: App1Person[]
  dueDate: string
}

export interface App1ActivityItem {
  id: string
  person: App1Person
  action: string
  time: string
}

export const app1User = { ...app1People.jordan, email: 'jordan@shadcnstore.com' }

/** Five teammates, so the sidebar carries presence instead of a column of dead space. */
export const app1Team: (App1Person & { role: string; online: boolean })[] = [
  { ...app1People.sarah, role: 'Design', online: true },
  { ...app1People.john, role: 'Engineering', online: true },
  { ...app1People.mike, role: 'Engineering', online: false },
  { ...app1People.lisa, role: 'Product', online: true },
  { ...app1People.ravi, role: 'Data', online: false },
]

export const app1Nav: App1NavItem[] = [
  { name: 'Dashboard', href: '#dashboard', icon: Home, current: true },
  { name: 'Analytics', href: '#analytics', icon: BarChart3, current: false },
  { name: 'Team', href: '#team', icon: Users, current: false },
  { name: 'Messages', href: '#messages', icon: MessageSquare, current: false },
  { name: 'Documents', href: '#documents', icon: FileText, current: false },
  { name: 'Calendar', href: '#calendar', icon: Calendar, current: false },
  { name: 'Settings', href: '#settings', icon: Settings, current: false },
]

/** Tasks opened against tasks closed, so the chart shows a backlog trend rather than one flat line. */
export const app1Chart = [
  { week: 'Wk 1', opened: 34, completed: 28 },
  { week: 'Wk 2', opened: 41, completed: 33 },
  { week: 'Wk 3', opened: 29, completed: 37 },
  { week: 'Wk 4', opened: 45, completed: 39 },
  { week: 'Wk 5', opened: 38, completed: 44 },
  { week: 'Wk 6', opened: 52, completed: 46 },
  { week: 'Wk 7', opened: 47, completed: 51 },
  { week: 'Wk 8', opened: 43, completed: 55 },
]

export const app1ChartConfig = {
  // Semantic tokens, not chart-N: the neutral palette's chart ramp has too little contrast to tell
  // two series apart, and these two flip correctly in both themes.
  completed: { label: 'Completed', color: 'var(--foreground)' },
  opened: { label: 'Opened', color: 'var(--muted-foreground)' },
} satisfies ChartConfig

export const app1Projects: App1Project[] = [
  {
    id: 'p-1',
    name: 'Mobile app redesign',
    description: 'Complete UI and UX overhaul',
    progress: 75,
    status: 'In progress',
    team: [app1People.jordan, app1People.alex, app1People.sarah],
    dueDate: 'Dec 15',
  },
  {
    id: 'p-2',
    name: 'Dashboard analytics',
    description: 'New reporting features',
    progress: 45,
    status: 'Planning',
    team: [app1People.ryan, app1People.mike],
    dueDate: 'Jan 20',
  },
  {
    id: 'p-3',
    name: 'API integration',
    description: 'Third-party services',
    progress: 90,
    status: 'In review',
    team: [app1People.john, app1People.lisa, app1People.priya],
    dueDate: 'Dec 10',
  },
  {
    id: 'p-4',
    name: 'Billing migration',
    description: 'Move invoices to the new provider',
    progress: 30,
    status: 'In progress',
    team: [app1People.emily, app1People.mike],
    dueDate: 'Feb 2',
  },
]

export const app1Activity: App1ActivityItem[] = [
  { id: 'a-1', person: app1People.john, action: 'completed task "User authentication"', time: '2 hours ago' },
  { id: 'a-2', person: app1People.sarah, action: 'commented on "Mobile design"', time: '4 hours ago' },
  { id: 'a-3', person: app1People.mike, action: 'uploaded 3 files to the project', time: '6 hours ago' },
  { id: 'a-4', person: app1People.lisa, action: 'updated the project timeline', time: '8 hours ago' },
  { id: 'a-5', person: app1People.ravi, action: 'created the project "Website revamp"', time: '10 hours ago' },
  { id: 'a-6', person: app1People.emily, action: 'assigned a task to Mike Taylor', time: '12 hours ago' },
]
