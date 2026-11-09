import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { IconComponent } from '@/components/ui/floating-panel-utils/icons';
import { Spinner } from '@/components/ui/floating-panel-utils/spinner';

export type IconButtonShape = 'circle' | 'square';
export type IconButtonTone = 'bare' | 'plain' | 'muted' | 'accent' | 'white';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';

const TONES: Record<IconButtonTone, string> = {
  bare: 'text-ink-soft hover:bg-surface-muted hover:text-ink',
  plain:
    'border border-line bg-surface text-ink-faint shadow-[var(--shadow-tile)] hover:border-line-strong hover:text-ink',
  muted: 'bg-surface-muted text-ink hover:bg-line-strong',
  accent: 'bg-accent text-accent-ink hover:bg-accent-strong',
  white: 'bg-shell text-ink shadow-[var(--shadow-float)] hover:bg-surface-muted',
};

const SIZES: Record<IconButtonSize, { box: string; glyph: number }> = {
  xs: { box: 'size-7', glyph: 15 },
  sm: { box: 'size-9', glyph: 17 },
  md: { box: 'size-10', glyph: 18 },
  lg: { box: 'size-11', glyph: 20 },
};

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  icon: IconComponent;
  /** Required — the control has no visible text. */
  label: string;
  shape?: IconButtonShape;
  tone?: IconButtonTone;
  size?: IconButtonSize;
  /** Applies the accent treatment, for toggles and current-page markers. */
  selected?: boolean;
  loading?: boolean;
};

/**
 * Square-format control carrying a single glyph. The label is mandatory: it
 * becomes both the accessible name and the tooltip.
 */
export function IconButton({
  className,
  icon: Icon,
  label,
  shape = 'circle',
  tone = 'bare',
  size = 'md',
  selected = false,
  loading = false,
  disabled,
  ...props
}: IconButtonProps) {
  const { box, glyph } = SIZES[size];

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={selected || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(
        'inline-flex shrink-0 items-center justify-center transition-colors',
        'disabled:pointer-events-none disabled:opacity-40',
        box,
        shape === 'circle' ? 'rounded-full' : 'rounded-[var(--radius-tile)]',
        TONES[tone],
        selected && 'border-transparent bg-accent text-accent-ink hover:bg-accent-strong',
        className,
      )}
      {...props}
    >
      {loading ? (
        <Spinner size={size === 'xs' || size === 'sm' ? 'sm' : 'md'} />
      ) : (
        <Icon size={glyph} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}

export default IconButton;
