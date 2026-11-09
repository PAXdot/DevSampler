import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/components/ui/pareto-chart-utils/cn'

export type TextSize =
  | 'display'
  | 'title'
  | 'amount'
  | 'subtitle'
  | 'heading'
  | 'stat'
  | 'body'
  | 'label'
  | 'caption'
  | 'micro'

export type TextWeight = 'medium' | 'semibold' | 'bold' | 'extrabold'

export type TextTone =
  | 'default'
  | 'soft'
  | 'faint'
  | 'accent'
  | 'accent-ink'
  | 'success'
  | 'danger'
  | 'inverse'

const SIZES: Record<TextSize, string> = {
  display: 'text-[30px] tracking-[-0.035em]',
  title: 'text-[24px] tracking-[-0.03em]',
  amount: 'text-[22px] tracking-[-0.02em]',
  subtitle: 'text-[18px] tracking-[-0.02em]',
  heading: 'text-[15px] tracking-[-0.01em]',
  stat: 'text-[14px]',
  body: 'text-[13px]',
  label: 'text-[12px]',
  caption: 'text-[11px]',
  micro: 'text-[10px]',
}

const DEFAULT_WEIGHT: Record<TextSize, TextWeight> = {
  display: 'extrabold',
  title: 'extrabold',
  amount: 'extrabold',
  subtitle: 'extrabold',
  heading: 'bold',
  stat: 'extrabold',
  body: 'bold',
  label: 'medium',
  caption: 'medium',
  micro: 'bold',
}

export type TextLeading = 'none' | 'tight' | 'normal'

const DEFAULT_LEADING: Record<TextSize, TextLeading> = {
  display: 'none',
  title: 'none',
  amount: 'none',
  subtitle: 'none',
  heading: 'none',
  stat: 'tight',
  body: 'tight',
  label: 'none',
  caption: 'tight',
  micro: 'none',
}

const LEADINGS: Record<TextLeading, string> = {
  none: 'leading-none',
  tight: 'leading-tight',
  normal: 'leading-normal',
}

const WEIGHTS: Record<TextWeight, string> = {
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}

const TONES: Record<TextTone, string> = {
  default: 'text-ink',
  soft: 'text-ink-soft',
  faint: 'text-ink-faint',
  accent: 'text-[color-mix(in_oklab,var(--color-accent-strong)_45%,var(--color-ink))]',
  'accent-ink': 'text-accent-ink',
  success: 'text-success',
  danger: 'text-danger',
  inverse: 'text-ink-inverse',
}

export interface TextOwnProps {
  size?: TextSize
  weight?: TextWeight
  tone?: TextTone
  leading?: TextLeading
  tabular?: boolean
  truncate?: boolean
  children?: ReactNode
  className?: string
}

type TextProps<E extends ElementType> = TextOwnProps & {
  as?: E
} & Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps | 'as'>

/**
 * Every piece of text in the dashboard is one step of this scale.
 */
export function Text<E extends ElementType = 'p'>({
  as,
  size = 'body',
  weight,
  tone = 'default',
  leading,
  tabular = false,
  truncate = false,
  className,
  ...rest
}: TextProps<E>) {
  const Component = (as ?? 'p') as ElementType

  return (
    <Component
      className={cn(
        SIZES[size],
        WEIGHTS[weight ?? DEFAULT_WEIGHT[size]],
        LEADINGS[leading ?? DEFAULT_LEADING[size]],
        TONES[tone],
        tabular && 'tabular',
        truncate && 'truncate',
        className,
      )}
      {...rest}
    />
  )
}
