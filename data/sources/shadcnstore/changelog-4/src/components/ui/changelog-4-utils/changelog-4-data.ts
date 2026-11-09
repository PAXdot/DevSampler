/**
 * The simplest useful changelog: a date, a version, and what changed under it.
 *
 * Same product as the rest of this section — a workflow automation platform — so the four
 * changelog blocks read as alternative treatments of one company's releases rather than four
 * unrelated demos. The shape is deliberately narrower than `changelog-1`'s: no prose blocks, no
 * screenshots, no anchors. A buyer who wants those is one block over; this one is for a team
 * that ships weekly and wants the list to stay a list.
 */
export type ChangeKind = 'Added' | 'Improved' | 'Fixed'

export interface ChangeEntry {
  kind: ChangeKind
  text: string
}

export interface SimpleRelease {
  version: string
  /** ISO date, rendered through `<time dateTime>`. */
  date: string
  title: string
  changes: ChangeEntry[]
}

export const simpleChangelogCopy = {
  eyebrow: 'Changelog',
  heading: 'What shipped',
  lede: 'Every release, newest first. Subscribe to the feed if you would rather not check.',
  feedLabel: 'RSS feed',
  feedHref: '#changelog-feed',
}

export const simpleReleases: SimpleRelease[] = [
  {
    version: 'v2.14',
    date: '2026-07-21',
    title: 'Scheduled runs and retry policies',
    changes: [
      { kind: 'Added', text: 'Cron and interval schedules, with per-environment overrides' },
      { kind: 'Added', text: 'Exponential backoff with a ceiling you set per step' },
      { kind: 'Improved', text: 'Failed steps now say which attempt they are on' },
      { kind: 'Fixed', text: 'A schedule saved in one environment no longer appears in another' },
    ],
  },
  {
    version: 'v2.13',
    date: '2026-07-09',
    title: 'Faster environment switching',
    changes: [
      { kind: 'Improved', text: 'Switching environments no longer refetches the whole project tree' },
      { kind: 'Improved', text: 'Environment metadata is cached for the session' },
      { kind: 'Fixed', text: 'A race that briefly showed the previous environment’s run history' },
    ],
  },
  {
    version: 'v2.12',
    date: '2026-06-24',
    title: 'Audit log export',
    changes: [
      { kind: 'Added', text: 'Twelve months of audit events as CSV, on demand' },
      { kind: 'Added', text: 'Continuous delivery of the same events to an S3 bucket' },
    ],
  },
  {
    version: 'v2.11',
    date: '2026-06-11',
    title: 'Editor accessibility pass',
    changes: [
      { kind: 'Improved', text: 'The canvas is fully operable from the keyboard' },
      { kind: 'Improved', text: 'Node status is announced on change rather than shown in colour alone' },
      { kind: 'Fixed', text: 'Focus rings restored on the connector handles' },
    ],
  },
]
