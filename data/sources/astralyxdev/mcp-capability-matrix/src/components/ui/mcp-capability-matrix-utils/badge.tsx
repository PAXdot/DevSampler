import type { ComponentProps, ReactNode } from 'react'
import {
  Children,
  cloneElement,
  isValidElement,
  type AnyActionArg,
  type CSSProperties,
  type ReactElement,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  badgeSize,
  colorSet,
  iconChild,
  tintStyle,
  type ColorSet,
} from '@/components/ui/mcp-capability-matrix-utils/styles'
import { cn } from '@/lib/utils'

/**
 * `Slot` and `mergeProps` are Astralyx UI's `primitive-slot` dependency,
 * folded in here verbatim (it is a small leaf primitive with no registry
 * dependencies of its own besides the free `@/lib/utils` import) so that
 * `Badge`'s `asChild` prop keeps working without shipping a second file.
 */
type AnyProps = Record<string, unknown>

function mergeProps(parent: AnyProps, child: AnyProps): AnyProps {
  const merged: AnyProps = { ...child }

  for (const key in parent) {
    const parentValue = parent[key]
    const childValue = child[key]

    if (/^on[A-Z]/.test(key)) {
      if (typeof parentValue === 'function' && typeof childValue === 'function') {
        merged[key] = (...args: AnyActionArg) => {
          childValue(...args)
          parentValue(...args)
        }
      } else {
        merged[key] = parentValue ?? childValue
      }
      continue
    }

    if (key === 'className') {
      merged[key] = cn(parentValue as string, childValue as string)
      continue
    }

    if (key === 'style') {
      merged[key] = {
        ...(parentValue as CSSProperties),
        ...(childValue as CSSProperties),
      }
      continue
    }

    if (parentValue !== undefined) merged[key] = parentValue
  }

  return merged
}

type SlotProps = AnyProps & { children?: ReactNode }

function Slot({ children, ...props }: SlotProps) {
  const child = Children.only(children)

  if (!isValidElement(child)) return null

  const element = child as ReactElement<AnyProps>

  return cloneElement(element, mergeProps(props, element.props))
}

/**
 * A short status or category marker.
 *
 * Unlike a field, a badge exists to be noticed, so it keeps the full colour
 * system — the same `--ui-*` sets and `tint` escape hatch a Button uses.
 *
 * `secondary` is the default because it is the right answer nearly every time:
 * tinted enough to read as a badge, quiet enough to sit in a table row or a
 * heading without shouting. Reach for `default` only when a badge has to be the
 * loudest thing on screen, and for `outline` only on an already-tinted surface
 * where a second fill would compete. Meaning belongs in `color`, not `variant`.
 */
const badgeVariants = cva(
  [
    'inline-flex w-fit shrink-0 items-center justify-center',
    'font-medium whitespace-nowrap',
    'transition-colors duration-150 ease-out motion-reduce:transition-none',
    iconChild,
  ].join(' '),
  {
    variants: {
      variant: {
        /** Solid fill in the current colour set. */
        default: 'bg-[var(--ui)] text-[var(--ui-fg)]',
        /** Tinted fill, saturated text — the quiet default for most labels. */
        secondary: 'bg-[var(--ui-soft)] text-[var(--ui-soft-fg)]',
        outline:
          'border border-[var(--ui-soft-fg)] text-[var(--ui-soft-fg)] bg-transparent',
        ghost: 'text-[var(--ui-soft-fg)] bg-transparent',
      },
      color: colorSet,
      size: {
        sm: badgeSize.sm,
        default: badgeSize.default,
        lg: badgeSize.lg,
      },
      shape: {
        pill: 'rounded-full [corner-shape:round]',
        rounded: 'rounded-[var(--radius-check-lg)]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      color: 'neutral',
      size: 'default',
      shape: 'pill',
    },
  },
)

type BadgeProps = Omit<ComponentProps<'span'>, 'color'> &
  VariantProps<typeof badgeVariants> & {
    /** Any CSS colour, used instead of a named `color` set. */
    tint?: string
    /** Rendered inside the badge, before or after the text. */
    icon?: ReactNode
    iconPosition?: 'start' | 'end'
    /** Render the child element instead of a `<span>`, keeping the styles. */
    asChild?: boolean
  }

function Badge({
  className,
  variant,
  color,
  size,
  shape,
  tint,
  icon,
  iconPosition = 'start',
  asChild = false,
  style,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  const content =
    icon && !asChild ? (
      <>
        {iconPosition === 'start' && icon}
        {children}
        {iconPosition === 'end' && icon}
      </>
    ) : (
      children
    )

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, color, size, shape }), className)}
      style={tint ? { ...tintStyle(tint), ...style } : style}
      {...props}
    >
      {content}
    </Comp>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps, ColorSet }
