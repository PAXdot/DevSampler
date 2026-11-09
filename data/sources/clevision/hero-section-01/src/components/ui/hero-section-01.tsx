'use client'

import { useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'

type NavigationSection = {
  title: string
  href: string
}

const navigationData: NavigationSection[] = [
  { title: 'Home', href: '#' },
  { title: 'Products', href: '#' },
  { title: 'About Us', href: '#' },
  { title: 'Contact Us', href: '#' }
]

const buttonClass =
  'bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-9 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-medium whitespace-nowrap transition-all active:translate-y-px'

const Logo = () => (
  <div className='flex items-center gap-3'>
    <svg width='1em' height='1em' viewBox='0 0 328 329' fill='none' xmlns='http://www.w3.org/2000/svg' className='size-8.5'>
      <rect y='0.5' width='328' height='328' rx='164' className='fill-black dark:fill-white' />
      <g className='stroke-white dark:stroke-black' strokeWidth='20'>
        <path d='M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288' />
        <path d='M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771' />
        <line x1='238.136' y1='98.8184' x2='196.76' y2='139.707' />
        <line x1='135.688' y1='200.957' x2='94.3128' y2='241.845' />
        <line x1='133.689' y1='137.524' x2='92.5566' y2='96.3914' />
        <line x1='237.679' y1='241.803' x2='196.547' y2='200.671' />
      </g>
    </svg>
    <span className='text-xl font-bold'>shadcn/studio</span>
  </div>
)

const Header = ({ navigationData }: { navigationData: NavigationSection[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className='bg-background sticky top-0 z-50 h-16 border-b'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        <a href='#'>
          <Logo />
        </a>

        <nav className='flex max-md:hidden'>
          {navigationData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-muted-foreground hover:text-primary px-3 py-1.5 text-base font-medium transition-colors'
            >
              {item.title}
            </a>
          ))}
        </nav>

        <a href='#' className={`${buttonClass} max-md:hidden`}>
          Login
        </a>

        <div className='relative flex gap-4 md:hidden'>
          <a href='#' className={buttonClass}>
            Login
          </a>
          <button
            type='button'
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className='border-border bg-background hover:bg-muted inline-flex size-9 items-center justify-center rounded-lg border'
          >
            {open ? <XIcon className='size-4' /> : <MenuIcon className='size-4' />}
            <span className='sr-only'>Menu</span>
          </button>

          {open && (
            <div className='bg-popover text-popover-foreground absolute top-full right-0 mt-2 w-56 rounded-lg border p-1 shadow-md'>
              {navigationData.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='hover:bg-accent block rounded-md px-2 py-1.5 text-sm'
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

const HeroSection = () => {
  return (
    <section className='flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8'>
        <div className='bg-muted flex items-center gap-2.5 rounded-full border px-2 py-1 text-sm'>
          <span className='bg-primary text-primary-foreground inline-flex h-5 items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap'>
            AI-Powered Base
          </span>
          <span className='text-muted-foreground'>Solution for client-facing businesses</span>
        </div>

        <h1 className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'>
          Sizzling Summer Delights
          <br />
          <span className='relative'>
            Effortless
            <svg
              width='223'
              height='12'
              viewBox='0 0 223 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
            >
              <path
                d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                stroke='url(#hero-section-01-underline)'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id='hero-section-01-underline'
                  x1='18.8541'
                  y1='3.72033'
                  x2='42.6487'
                  y2='66.6308'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='var(--primary)' />
                  <stop offset='1' stopColor='var(--primary-foreground)' />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          Recipes for Parties!
        </h1>

        <p className='text-muted-foreground'>
          Dive into a world of flavor this summer with our collection of Sizzling Summer Delights!
          <br />
          From refreshing appetizers to delightful desserts
        </p>

        <a href='#' className={`${buttonClass} h-9`}>
          Try It Now
        </a>
      </div>

      <img
        src='https://cdn.21st.dev/assets/mirror/9e/9e4feb3e73be27027db03dffc4f83b48115d7c52af67a670e182ae5b7a308a11.png'
        alt='Dishes'
        className='min-h-67 w-full object-cover'
      />
    </section>
  )
}

export default function HeroSection01() {
  return (
    <div className='bg-background text-foreground'>
      <Header navigationData={navigationData} />
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}
