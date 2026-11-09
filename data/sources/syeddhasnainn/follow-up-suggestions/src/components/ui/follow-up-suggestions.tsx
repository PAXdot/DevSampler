'use client'

import * as React from 'react'
import { useId, useRef, useState } from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group'

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

function Card({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        'group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-[16px] bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-[16px] *:[img:last-child]:rounded-b-[16px]',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-[16px] px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'font-sans text-base leading-snug font-medium group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-content" className={cn('px-(--card-spacing)', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center rounded-b-[16px] border-t bg-muted/50 p-(--card-spacing)',
        className,
      )}
      {...props}
    />
  )
}

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'inline-flex min-h-5 min-w-5 items-center justify-center rounded-md bg-muted px-1.5 font-sans text-[12px] font-medium text-muted-foreground shadow-[inset_0_-1px_0_var(--border)]',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-muted',
      },
      size: {
        default:
          'h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
  }
>({
  size: 'default',
  variant: 'default',
  spacing: 2,
  orientation: 'horizontal',
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = 'horizontal',
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
  }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ '--gap': spacing } as React.CSSProperties}
      className={cn(
        'group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-md data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        'shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

interface FollowUpSuggestion {
  custom?: boolean
  id: string
  label: string
  placeholder?: string
}

interface FollowUpSuggestionsProps extends Omit<React.ComponentProps<'section'>, 'onSelect'> {
  defaultSelectedId?: string
  items: FollowUpSuggestion[]
  onDismiss?: () => void
  onSelect?: (id: string, value?: string) => void
  onSelectedIdChange?: (id: string) => void
  selectedId?: string
  title?: string
}

function FollowUpSuggestions({
  className,
  defaultSelectedId,
  items,
  onDismiss,
  onSelect,
  onSelectedIdChange,
  selectedId,
  title = 'What would you like to do?',
  ...props
}: FollowUpSuggestionsProps) {
  const titleId = useId()
  const itemElements = useRef(new Map<string, HTMLButtonElement>())
  const [uncontrolledSelectedId, setUncontrolledSelectedId] = useState(
    defaultSelectedId ?? items[0]?.id,
  )
  const currentSelectedId = selectedId ?? uncontrolledSelectedId
  const currentItem = items.find((item) => item.id === currentSelectedId)
  const [customValue, setCustomValue] = useState('')
  const customRef = useRef<HTMLInputElement>(null)

  function selectSuggestion(id: string, focus = false) {
    if (selectedId === undefined) setUncontrolledSelectedId(id)
    onSelectedIdChange?.(id)
    if (focus) itemElements.current.get(id)?.focus()
  }

  function moveSelection(direction: -1 | 1) {
    const currentIndex = Math.max(
      0,
      items.findIndex((item) => item.id === currentSelectedId),
    )
    const nextIndex = (currentIndex + direction + items.length) % items.length
    const nextItem = items[nextIndex]

    if (nextItem) selectSuggestion(nextItem.id, true)
  }

  function submitSelection() {
    if (!currentSelectedId) return
    if (currentItem?.custom) {
      if (!customValue.trim()) return customRef.current?.focus()
      onSelect?.(currentSelectedId, customValue.trim())
      return
    }
    onSelect?.(currentSelectedId)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      moveSelection(1)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      moveSelection(-1)
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      submitSelection()
      return
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      onDismiss?.()
      return
    }

    const shortcutIndex = Number(event.key) - 1
    const shortcutItem = items[shortcutIndex]
    if (shortcutItem && shortcutIndex >= 0 && shortcutIndex <= 8) {
      event.preventDefault()
      selectSuggestion(shortcutItem.id, true)
    }
  }

  return (
    <section
      aria-labelledby={titleId}
      className={cn('w-full tracking-[-0.05px]', className)}
      data-slot="follow-up-suggestions"
      {...props}
    >
      <Card
        className="gap-2 rounded-[16px] pt-5 shadow-[0_3px_6px_-2px_rgb(0_0_0/0.02),0_1px_1px_0_rgb(0_0_0/0.04)] ring-foreground/8"
        size="sm"
      >
        <CardHeader className="mb-2">
          <CardTitle
            className="pl-3 text-[15px] font-medium tracking-[-0.05px] leading-[19.25px] text-muted-foreground group-data-[size=sm]/card:text-[15px]"
            id={titleId}
          >
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="text-sm leading-5 font-[450]">
          <ToggleGroup
            aria-label={title}
            className="flex w-full flex-col items-stretch gap-1 bg-transparent p-0"
            onKeyDown={handleKeyDown}
            onValueChange={(value) => {
              const nextSelectedId = value[0]
              if (nextSelectedId) selectSuggestion(nextSelectedId)
            }}
            orientation="vertical"
            value={currentSelectedId ? [currentSelectedId] : []}
          >
            {items.map((item, index) => {
              const isSelected = item.id === currentSelectedId

              return (
                <ToggleGroupItem
                  key={item.id}
                  ref={(element) => {
                    if (element) itemElements.current.set(item.id, element)
                    else itemElements.current.delete(item.id)
                  }}
                  className="group/suggestion h-auto min-h-10 w-full justify-start gap-3 rounded-[10px] px-3 py-2 text-left text-sm leading-5 font-[450] text-muted-foreground hover:bg-muted/70 hover:text-muted-foreground data-pressed:bg-muted data-pressed:text-muted-foreground data-pressed:shadow-none"
                  value={item.id}
                >
                  {isSelected ? (
                    <span className="flex size-6 shrink-0 items-center justify-center text-[13px] text-muted-foreground">
                      {index + 1}
                    </span>
                  ) : (
                    <Kbd className="size-6 shrink-0 px-0 text-xs font-[450] shadow-none">
                      {index + 1}
                    </Kbd>
                  )}
                  <span className="truncate">{item.label}</span>
                </ToggleGroupItem>
              )
            })}
          </ToggleGroup>
          <div
            className={cn(
              'grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]',
              currentItem?.custom
                ? 'mt-1 grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0',
            )}
          >
            <div className="overflow-hidden">
              <label className="sr-only" htmlFor={`${titleId}-custom`}>
                {currentItem?.label ?? 'Your question'}
              </label>
              <input
                className="h-10 w-full rounded-[10px] bg-muted/70 px-3 text-sm leading-5 font-[450] text-muted-foreground outline-none placeholder:text-muted-foreground/60"
                id={`${titleId}-custom`}
                onChange={(event) => setCustomValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    submitSelection()
                  }
                  if (event.key === 'Escape') onDismiss?.()
                }}
                placeholder={currentItem?.placeholder ?? 'Type your question'}
                ref={customRef}
                tabIndex={currentItem?.custom ? 0 : -1}
                value={customValue}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-between gap-3 border-t-0 bg-transparent pt-1 pb-5">
          <div className="ml-auto flex items-center gap-1.5">
            {onDismiss && (
              <Button
                className="h-7 rounded-full px-3 text-muted-foreground hover:text-muted-foreground"
                onClick={onDismiss}
                size="sm"
                variant="ghost"
              >
                Dismiss
                <Kbd className="ml-1 shadow-none">Esc</Kbd>
              </Button>
            )}
            <Button
              className="h-7 rounded-full border-0 bg-primary bg-linear-to-b from-[color-mix(in_oklch,var(--primary),var(--primary-foreground)_30%)] to-primary px-3 text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(0,0,0,0.18)] shadow-none hover:brightness-110 dark:bg-none"
              disabled={!currentSelectedId || (currentItem?.custom && !customValue.trim())}
              onClick={submitSelection}
              size="sm"
              variant="default"
            >
              Submit
              <Kbd className="ml-0.5 size-4 min-h-4 min-w-4 bg-primary-foreground/10 p-0 leading-none text-primary-foreground shadow-none">
                <svg aria-hidden="true" className="size-3" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 5v10H4m5-5-5 5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">Enter</span>
              </Kbd>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export { FollowUpSuggestions }
export type { FollowUpSuggestion, FollowUpSuggestionsProps }
export default FollowUpSuggestions
