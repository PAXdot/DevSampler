/**
 * A roadmap that commits to order, not to dates.
 *
 * Same workflow-automation product as the changelog blocks in this section, so a buyer can put
 * the two on one page and have them agree. The columns are Now / Next / Later rather than
 * quarters on purpose: a quarter is a promise a roadmap cannot keep, and the moment one slips the
 * whole board reads as stale. Order is a promise a team can keep.
 */
export type RoadmapColumn = 'now' | 'next' | 'later'

export interface RoadmapEntry {
  id: string
  title: string
  description: string
  column: RoadmapColumn
  /** The area of the product this lands in, for readers scanning for their own. */
  area: string
}

export const roadmapColumnOrder: RoadmapColumn[] = ['now', 'next', 'later']

export const roadmapColumnLabels: Record<RoadmapColumn, { title: string; hint: string }> = {
  now: { title: 'Now', hint: 'In build, shipping this quarter' },
  next: { title: 'Next', hint: 'Specced and queued behind Now' },
  later: { title: 'Later', hint: 'Agreed in principle, not yet specced' },
}

export const simpleRoadmapCopy = {
  eyebrow: 'Roadmap',
  heading: 'What we are building next',
  lede: 'Order we are confident about. Dates we are not, so we do not publish them.',
  updatedAt: '2026-07-24',
}

export const roadmapEntries: RoadmapEntry[] = [
  {
    id: 'branch-conditions',
    title: 'Branching on step output',
    description: 'Route a run down a different path based on what the previous step returned.',
    column: 'now',
    area: 'Editor',
  },
  {
    id: 'run-search',
    title: 'Search across runs',
    description: 'Find a run by input, error text or the step it failed on.',
    column: 'now',
    area: 'Runs',
  },
  {
    id: 'secrets-scoping',
    title: 'Per-environment secrets',
    description: 'Scope a secret to staging without duplicating the workflow that reads it.',
    column: 'now',
    area: 'Security',
  },
  {
    id: 'workflow-versions',
    title: 'Workflow version history',
    description: 'See what a workflow looked like on the day a run went through it, and restore it.',
    column: 'next',
    area: 'Editor',
  },
  {
    id: 'usage-alerts',
    title: 'Usage alerts',
    description: 'Warn a workspace before it reaches its plan ceiling rather than at it.',
    column: 'next',
    area: 'Billing',
  },
  {
    id: 'sdk-python',
    title: 'Python SDK',
    description: 'Trigger and inspect workflows from Python, matching the TypeScript client.',
    column: 'next',
    area: 'Developers',
  },
  {
    id: 'self-hosted-runners',
    title: 'Self-hosted runners',
    description: 'Run steps inside your own network for workloads that cannot leave it.',
    column: 'later',
    area: 'Platform',
  },
  {
    id: 'workflow-templates',
    title: 'Shared templates',
    description: 'Publish a workflow as a starting point for other teams in the workspace.',
    column: 'later',
    area: 'Collaboration',
  },
]
