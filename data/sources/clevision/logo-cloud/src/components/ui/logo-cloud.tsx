'use client'

import * as React from 'react'

import { Tooltip } from '@base-ui/react/tooltip'

export type BrandLogo = {
  image: string
  name: string
}

export type LogoCloudProps = {
  brandLogos?: BrandLogo[]
  username?: string
  summary?: string
  /** Seconds for one full marquee loop */
  duration?: number
  className?: string
}

const CONTRIBUTION_LEVEL_STYLES = [
  'bg-primary/10 dark:bg-primary',
  'bg-primary/30 dark:bg-primary/70',
  'bg-primary/50 dark:bg-primary/50',
  'bg-primary/70 dark:bg-primary/30',
  'bg-primary dark:bg-primary/10'
]

const CONTRIBUTION_LEVEL_COUNTS = [0, 1, 3, 5, 8]
const CONTRIBUTION_ROWS = 6
const CONTRIBUTION_COLUMNS = 39
const TOTAL_CONTRIBUTION_CELLS = CONTRIBUTION_ROWS * CONTRIBUTION_COLUMNS
const LATEST_CONTRIBUTION_DATE = new Date(2024, 3, 30)

// Weighted so most cells stay empty, like a real contribution graph
const CONTRIBUTION_LEVEL_WEIGHTS = [40, 25, 20, 10, 5]

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')

// Seeded PRNG so server and client render the same grid (no hydration mismatch)
const createRandom = (seed: number) => {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

const buildContributionGrid = () => {
  const random = createRandom(2024)

  return Array.from({ length: CONTRIBUTION_ROWS }, (_, rowIndex) =>
    Array.from({ length: CONTRIBUTION_COLUMNS }, (_, columnIndex) => {
      const roll = random() * 100
      let cumulative = 0
      let level = CONTRIBUTION_LEVEL_WEIGHTS.length - 1

      for (let i = 0; i < CONTRIBUTION_LEVEL_WEIGHTS.length; i++) {
        cumulative += CONTRIBUTION_LEVEL_WEIGHTS[i]
        if (roll < cumulative) {
          level = i
          break
        }
      }

      const daysAgo = TOTAL_CONTRIBUTION_CELLS - 1 - (columnIndex * CONTRIBUTION_ROWS + rowIndex)
      const date = new Date(LATEST_CONTRIBUTION_DATE)

      date.setDate(date.getDate() - daysAgo)

      return { level, count: CONTRIBUTION_LEVEL_COUNTS[level], date }
    })
  )
}

const CONTRIBUTION_GRID = buildContributionGrid()

const MARQUEE_CSS = `
@keyframes logo-cloud-10-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--marquee-gap))); }
}
.logo-cloud-10-track { animation: logo-cloud-10-marquee var(--marquee-duration) linear infinite; }
.logo-cloud-10-track[data-reverse='true'] { animation-direction: reverse; }
.logo-cloud-10-marquee:hover .logo-cloud-10-track,
.logo-cloud-10-marquee:focus-within .logo-cloud-10-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .logo-cloud-10-track { animation: none; }
}
`

type MarqueeRowProps = {
  logos: BrandLogo[]
  duration: number
  reverse?: boolean
  label: string
}

const MarqueeRow = ({ logos, duration, reverse = false, label }: MarqueeRowProps) => (
  <div
    role='group'
    aria-label={label}
    style={{ '--marquee-duration': `${duration}s`, '--marquee-gap': '0.5rem' } as React.CSSProperties}
    className='logo-cloud-10-marquee flex gap-(--marquee-gap) overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]'
  >
    {Array.from({ length: 4 }, (_, copy) => (
      <div
        key={copy}
        aria-hidden={copy > 0 ? true : undefined}
        data-reverse={reverse}
        className='logo-cloud-10-track flex shrink-0 justify-around gap-(--marquee-gap)'
      >
        {logos.map((logo, logoIndex) => (
          <div
            key={`${logo.image}-${logoIndex}`}
            className='bg-muted flex size-16 shrink-0 items-center justify-center rounded-md'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.image} alt={copy > 0 ? '' : logo.name} loading='lazy' className='size-10 grayscale' />
          </div>
        ))}
      </div>
    ))}
  </div>
)

const LogoCloud = ({
  brandLogos = [],
  username = '@zolt_mercer',
  summary = '864 contributions in the template timeline',
  duration = 25,
  className
}: LogoCloudProps) => {
  const half = Math.ceil(brandLogos.length / 2)
  const logoRows = [brandLogos.slice(0, half), brandLogos.slice(half)]

  return (
    <section className={cx('bg-background text-foreground py-8 sm:py-16 lg:py-24', className)}>
      <style>{MARQUEE_CSS}</style>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <div className='bg-card text-card-foreground ring-foreground/10 flex flex-col gap-6 overflow-hidden rounded-3xl p-6 text-sm shadow-lg ring-1'>
          <div className='space-y-4'>
            <div>
              <p className='text-sm font-semibold'>{username}</p>
              <p className='text-muted-foreground text-xs'>{summary}</p>
            </div>

            <Tooltip.Provider delay={0}>
              <div
                tabIndex={0}
                role='group'
                aria-label={`Contribution graph for ${username}`}
                className='focus-visible:ring-ring overflow-x-auto rounded-sm outline-none focus-visible:ring-2 max-md:pr-6'
              >
                <div className='space-y-1'>
                  {CONTRIBUTION_GRID.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex gap-1'>
                      {row.map((cell, columnIndex) => {
                        const dateLabel = cell.date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
                        const text = `${cell.count} contribution${cell.count === 1 ? '' : 's'} on ${dateLabel}`

                        return (
                          <Tooltip.Root key={columnIndex}>
                            <Tooltip.Trigger
                              render={
                                <span
                                  role='img'
                                  aria-label={text}
                                  className={cx(
                                    'size-3.5 rounded-xs transition-transform duration-150 hover:scale-125 max-lg:shrink-0 sm:size-5',
                                    CONTRIBUTION_LEVEL_STYLES[cell.level]
                                  )}
                                />
                              }
                            />
                            <Tooltip.Portal>
                              <Tooltip.Positioner sideOffset={4} className='isolate z-50'>
                                <Tooltip.Popup className='bg-foreground text-background z-50 rounded-md px-3 py-1.5 text-xs font-medium'>
                                  <span className='font-semibold'>
                                    {cell.count} contribution{cell.count === 1 ? '' : 's'}
                                  </span>{' '}
                                  on {dateLabel}
                                </Tooltip.Popup>
                              </Tooltip.Positioner>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </Tooltip.Provider>
          </div>

          <div className='border-border -mx-6 border-t' />

          <div className='min-w-0 space-y-8'>
            {logoRows.map((row, rowIndex) => (
              <MarqueeRow
                key={rowIndex}
                logos={row}
                duration={duration}
                reverse={rowIndex === 1}
                label={`Technology logos, row ${rowIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
