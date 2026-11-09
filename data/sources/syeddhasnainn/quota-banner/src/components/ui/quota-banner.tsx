'use client'

import { ArrowRightUpIcon as ArrowUpRightIcon } from '@solar-icons/react/linear/arrow-right-up'
import { SpeedometerMiddleIcon as GaugeIcon } from '@solar-icons/react/linear/speedometer-middle'
import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 pb-0.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 pb-0.5 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 pb-0.5 text-[0.8rem] in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 pb-0.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-md',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

interface QuotaBannerProps extends React.ComponentProps<'aside'> {
  label?: string
  limit: number
  onUpgrade?: () => void
  resetsAt: string
  unit?: string
  used: number
}

function QuotaBanner({
  className,
  label = 'Monthly agent usage',
  limit,
  onUpgrade,
  resetsAt,
  unit = 'runs',
  used,
  ...props
}: QuotaBannerProps) {
  const remaining = Math.max(limit - used, 0)
  const percentage = limit > 0 ? Math.min((used / limit) * 100, 100) : 0
  const tone =
    percentage > 95 ? 'bg-red-500' : percentage >= 80 ? 'bg-amber-500' : 'bg-foreground/85'

  return (
    <aside
      data-slot="quota-banner"
      className={cn(
        'rounded-[16px] bg-card p-4 font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground shadow-card dark:shadow-none',
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-foreground/6 text-muted-foreground">
          <GaugeIcon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm leading-5 font-medium text-muted-foreground">{label}</h3>
          <p className="mt-1 text-[22px] leading-7 font-medium tracking-[-0.02em] text-foreground tabular-nums">
            {used.toLocaleString()} / {limit.toLocaleString()} {unit}
          </p>
          <meter
            aria-label={`${label}: ${used.toLocaleString()} of ${limit.toLocaleString()} ${unit} used`}
            className="sr-only"
            max={limit}
            min={0}
            value={Math.min(used, limit)}
          />
          <div
            aria-hidden="true"
            className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/8"
          >
            <div
              className={cn('h-full rounded-full transition-colors duration-200 ease-out', tone)}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground tabular-nums">
            {remaining.toLocaleString()} left · Resets {resetsAt}
          </p>
        </div>
        {onUpgrade && (
          <Button
            className="h-7 rounded-full border-0 bg-primary px-3 text-sm font-[450] text-primary-foreground shadow-none hover:bg-primary/90"
            onClick={onUpgrade}
            size="sm"
            type="button"
          >
            Upgrade{' '}
            <ArrowUpRightIcon
              data-icon="inline-end"
              className="transition-[translate] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/button:translate-x-px group-hover/button:-translate-y-px motion-reduce:transition-none"
            />
          </Button>
        )}
      </div>
    </aside>
  )
}

export { QuotaBanner }
export type { QuotaBannerProps }
export default QuotaBanner
