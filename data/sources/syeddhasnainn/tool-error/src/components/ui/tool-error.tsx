'use client'

import { DangerTriangleIcon as DangerIcon } from '@solar-icons/react/bold/danger-triangle'
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

interface ToolErrorProps extends React.ComponentProps<'section'> {
  attempts?: number
  code?: string
  title?: string
  message: string
  onFix?: () => void
  onRetry?: () => void
  fixLabel?: string
  tool: string
}

function ToolError({
  attempts,
  className,
  code,
  title,
  message,
  onFix,
  onRetry,
  fixLabel = 'Fix connection',
  tool,
  ...props
}: ToolErrorProps) {
  return (
    <section
      data-slot="tool-error"
      className={cn(
        'font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground transition-[opacity,translate] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] starting:translate-y-1 starting:opacity-0 motion-reduce:starting:translate-y-0',
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center gap-2 px-1 text-destructive" role="alert">
        <DangerIcon aria-hidden="true" className="size-3.5 shrink-0" />
        <span>Needs a fix</span>
      </div>
      <div className="rounded-[16px] bg-muted/40 p-4 shadow-card">
        <h3 className="text-sm leading-5 font-[450]">
          {title ?? `${tool} connection lost partway through`}
        </h3>
        <p className="mt-1 text-sm leading-5 text-foreground">{message}</p>
        {(code || attempts !== undefined) && (
          <p className="mt-2 metadata-label break-words">
            {code && <code>{code}</code>}
            {code && attempts !== undefined && ' · '}
            {attempts !== undefined && `Attempt ${attempts}`}
          </p>
        )}
        {(onFix || onRetry) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {onFix && (
              <Button
                onClick={onFix}
                size="sm"
                variant="default"
                className="h-7 rounded-md border-0 bg-primary bg-linear-to-b from-[color-mix(in_oklch,var(--primary),var(--primary-foreground)_30%)] to-primary px-3 text-sm font-[450] text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(0,0,0,0.18)] shadow-none hover:brightness-110 dark:bg-none"
              >
                {fixLabel}
              </Button>
            )}
            {onRetry && (
              <Button
                onClick={onRetry}
                size="sm"
                variant="outline"
                className="h-7 rounded-md bg-card px-3 text-sm font-[450]"
              >
                Retry
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export { ToolError }
export type { ToolErrorProps }
export default ToolError
