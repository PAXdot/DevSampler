'use client'

import { useState } from 'react'
import type { CSSProperties, FormEvent, ReactNode } from 'react'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

export type ThreadItem = {
  username: string
  date: string
  body: string
  image: string
}

export type WaitlistProps = {
  threads?: ThreadItem[]
  avatars?: AvatarItem[]
  brandName?: string
  threadIcon?: string
  headline?: string
  description?: string
  joinedCount?: string
  className?: string
  onSubmit?: (email: string) => void
}

const CDN = 'https://cdn.shadcnstudio.com/ss-assets'

const DEFAULT_THREADS: ThreadItem[] = [
  {
    username: 'milly',
    date: '03/08/2024',
    body: 'Easy to adopt, powerful in practice. It helped our team move faster without sacrificing quality.',
    image: `${CDN}/blocks/marketing/waitlist/image-05.png`
  },
  {
    username: 'carter',
    date: '23/04/2024',
    body: "This software streamlined my workflow and removed a lot of repetitive tasks. It's become part of my daily process.",
    image: `${CDN}/blocks/marketing/waitlist/image-06.png`
  },
  {
    username: 'mark',
    date: '12/06/2024',
    body: 'The level of precision and reliability is impressive. It feels like working with an intelligent assistant rather than just another tool.',
    image: `${CDN}/blocks/marketing/waitlist/image-07.png`
  },
  {
    username: 'daniel_wong',
    date: '06/09/2024',
    body: 'Thoughtfully built and incredibly smooth. Every detail shows care for the user experience.',
    image: `${CDN}/blocks/marketing/waitlist/image-08.png`
  },
  {
    username: 'sofia',
    date: '18/07/2024',
    body: 'Onboarding was seamless. The interface is intuitive and the results speak for themselves.',
    image: `${CDN}/blocks/marketing/waitlist/img-19.png`
  }
]

const DEFAULT_AVATARS: AvatarItem[] = [
  { src: `${CDN}/avatar/avatar-11.png`, name: 'Alice Monroe', fallback: 'AM' },
  { src: `${CDN}/avatar/avatar-12.png`, name: 'James Carter', fallback: 'JC' },
  { src: `${CDN}/avatar/avatar-13.png`, name: 'Sofia Patel', fallback: 'SP' },
  { src: `${CDN}/avatar/avatar-14.png`, name: 'Ryan Hughes', fallback: 'RH' }
]

const DEFAULT_THREAD_ICON = `${CDN}/brand-logo/thread-icon.png`

const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ')

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const MARQUEE_CSS = `
@keyframes waitlist01-marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--marquee-gap))); }
}
.waitlist01-marquee-track {
  animation: waitlist01-marquee-vertical var(--marquee-duration) linear infinite;
  animation-delay: var(--marquee-delay);
}
.waitlist01-marquee-track[data-reverse='true'] { animation-direction: reverse; }
.waitlist01-marquee:hover .waitlist01-marquee-track,
.waitlist01-marquee:focus-within .waitlist01-marquee-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .waitlist01-marquee-track { animation: none; }
}
`

type MarqueeProps = {
  children: ReactNode
  duration?: number
  gap?: number
  reverse?: boolean
  repeat?: number
  className?: string
}

function VerticalMarquee({ children, duration = 25, gap = 1.5, reverse = false, repeat = 4, className }: MarqueeProps) {
  const style = {
    '--marquee-duration': `${duration}s`,
    '--marquee-delay': '0s',
    '--marquee-gap': `${gap}rem`
  } as CSSProperties

  return (
    <div
      style={style}
      className={cn('waitlist01-marquee flex flex-col gap-(--marquee-gap) overflow-hidden p-3', className)}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          data-reverse={reverse}
          className='waitlist01-marquee-track flex shrink-0 flex-col justify-around gap-(--marquee-gap)'
        >
          {children}
        </div>
      ))}
    </div>
  )
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 328 329' fill='none' aria-hidden='true' className={className}>
      <rect y='0.5' width='328' height='328' rx='164' className='fill-foreground' />
      <g className='stroke-background' strokeWidth='20'>
        <path d='M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288' />
        <path d='M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771' />
        <line x1='238.136' y1='98.8184' x2='196.76' y2='139.707' />
        <line x1='135.688' y1='200.957' x2='94.3128' y2='241.845' />
        <line x1='133.689' y1='137.524' x2='92.5566' y2='96.3914' />
        <line x1='237.679' y1='241.803' x2='196.547' y2='200.671' />
      </g>
    </svg>
  )
}

function AvatarBubble({ avatar }: { avatar: AvatarItem }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      tabIndex={0}
      role='img'
      aria-label={avatar.name}
      className={cn(
        'group/avatar ring-background bg-muted text-muted-foreground relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs ring-2 transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-1 hover:shadow-md focus-visible:z-10 focus-visible:-translate-y-1',
        focusRing
      )}
    >
      {failed ? (
        avatar.fallback
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatar.src} alt='' className='size-full object-cover' onError={() => setFailed(true)} />
      )}
      <span
        role='tooltip'
        className='bg-foreground text-background pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap group-hover/avatar:block group-focus-visible/avatar:block'
      >
        {avatar.name}
      </span>
    </div>
  )
}

function ThreadCard({ thread, threadIcon }: { thread: ThreadItem; threadIcon: string }) {
  return (
    <article className='bg-card text-card-foreground border-border relative h-auto w-75 overflow-hidden rounded-xl border'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thread.image} alt='' className='h-auto w-full' />
      <div className='bg-card absolute bottom-0 w-full p-6'>
        <div className='mb-2 flex items-center gap-2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={threadIcon} alt='' className='size-5.5 rounded-sm' />
          <p className='grow text-lg font-medium'>{thread.username}</p>
          <span className='text-muted-foreground text-xs'>{thread.date}</span>
        </div>
        <p className='text-muted-foreground text-base'>{thread.body}</p>
      </div>
    </article>
  )
}

export function Waitlist01({
  threads = DEFAULT_THREADS,
  avatars = DEFAULT_AVATARS,
  brandName = 'shadcn/studio',
  threadIcon = DEFAULT_THREAD_ICON,
  headline = 'Connect & Grow with our community',
  description = "We're onboarding users gradually to maintain reliability, and a high-quality experience for everyone.",
  joinedCount = '25,000+',
  className,
  onSubmit
}: WaitlistProps) {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const first = threads.slice(0, 3)
  const second = threads.slice(3, 5)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(email)
    setJoined(true)
  }

  const renderCards = (items: ThreadItem[]) =>
    items.map((item, index) => <ThreadCard key={`${item.username}-${index}`} thread={item} threadIcon={threadIcon} />)

  return (
    <div className={cn('bg-background text-foreground w-full', className)}>
      <style>{MARQUEE_CSS}</style>

      <header className='bg-background border-border sticky top-0 z-50 w-full border-b'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-8'>
          <a href='#' className={cn('flex items-center gap-3 rounded-md', focusRing)}>
            <LogoMark className='size-8.5' />
            <span className='text-xl font-bold'>{brandName}</span>
          </a>
          <a
            href='#waitlist-email'
            className={cn(
              'bg-primary text-primary-foreground inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors hover:bg-primary/90 max-md:hidden',
              focusRing
            )}
          >
            Early access
          </a>
        </div>
      </header>

      <div className='relative flex h-full flex-col overflow-hidden'>
        <div className='from-background absolute inset-y-0 right-0 z-1 w-20.5 bg-linear-to-l to-transparent max-lg:hidden' />
        <div className='from-background absolute inset-x-0 top-0 z-1 h-20.5 bg-linear-to-b to-transparent max-lg:hidden' />
        <div className='from-background absolute inset-x-0 bottom-0 z-1 h-20.5 bg-linear-to-t to-transparent max-lg:hidden' />

        <div className='bg-background mx-auto grid max-w-7xl gap-20 lg:grid-cols-2'>
          <div className='col-span-1 max-lg:mt-24'>
            <div className='flex h-full flex-col gap-6 px-4 md:max-xl:px-8 lg:w-lg lg:justify-center xl:pl-8'>
              <div className='space-y-4'>
                <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl xl:text-5xl'>{headline}</h1>
                <p className='text-muted-foreground text-lg lg:text-xl'>{description}</p>
              </div>

              <form onSubmit={handleSubmit} className='flex gap-2.5 max-sm:flex-col'>
                <label htmlFor='waitlist-email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='waitlist-email'
                  type='email'
                  required
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                    setJoined(false)
                  }}
                  placeholder='Enter your email address'
                  autoComplete='email'
                  className={cn(
                    'border-input bg-background text-foreground placeholder:text-muted-foreground h-10 rounded-lg border px-3 text-sm max-sm:w-full sm:max-w-72 sm:flex-1',
                    focusRing
                  )}
                />
                <button
                  type='submit'
                  className={cn(
                    'bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors',
                    focusRing
                  )}
                >
                  {joined ? 'You are on the list' : 'Join Waitlist'}
                  {joined ? <CheckIcon className='size-4' aria-hidden='true' /> : <ArrowRightIcon className='size-4' aria-hidden='true' />}
                </button>
              </form>
              <p role='status' aria-live='polite' className='sr-only'>
                {joined ? 'Thanks, you have joined the waitlist.' : ''}
              </p>

              <div className='flex items-center gap-2'>
                <div className='flex -space-x-4'>
                  {avatars.map(avatar => (
                    <AvatarBubble key={avatar.name} avatar={avatar} />
                  ))}
                </div>
                <p className='text-muted-foreground max-w-65 text-sm'>
                  Over <span className='text-foreground font-medium'>{joinedCount}</span> people have already joined you
                  could be next.
                </p>
              </div>
            </div>
          </div>

          <div className='relative col-span-1 max-lg:overflow-hidden'>
            <div className='from-background absolute inset-x-0 top-0 z-1 h-10 bg-linear-to-b to-transparent lg:hidden' />
            <div className='from-background absolute inset-x-0 bottom-0 z-1 h-10 bg-linear-to-t to-transparent lg:hidden' />

            <div className='flex max-h-95 sm:rotate-z-16 sm:max-lg:ml-25 md:max-h-121 lg:max-h-dvh'>
              <div className='w-full max-sm:-mt-10'>
                <VerticalMarquee className='mx-auto px-1 max-sm:w-77'>{renderCards(first)}</VerticalMarquee>
              </div>
              <div className='-mt-20 w-full max-sm:hidden'>
                <VerticalMarquee reverse>{renderCards(second)}</VerticalMarquee>
              </div>
              <div className='w-full max-lg:hidden lg:-mt-20'>
                <VerticalMarquee>{renderCards(first)}</VerticalMarquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Waitlist01Demo() {
  return <Waitlist01 />
}

export default Waitlist01
