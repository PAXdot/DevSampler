import * as React from 'react';
import { cn } from '@/lib/utils';
import { announce } from './announce';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
  loading?: boolean;
  /** Square button for a lone icon. Give it an aria-label. */
  square?: boolean;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const noop = () => {};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  square = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const elRef = React.useRef<HTMLButtonElement | null>(null);

  // Someone who pressed it and is still on it hears that it's busy; the spinner alone is silent.
  React.useEffect(() => {
    if (loading && elRef.current === document.activeElement) announce('Loading');
  }, [loading]);

  if ('href' in rest && rest.href !== undefined) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={cn('btn', variant, size, square && 'square', className)}
        {...anchorProps}
        onTouchStart={noop}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    // aria-disabled, not disabled: a disabled button drops focus and screen readers lose their place.
    <button
      ref={elRef}
      type="button"
      className={cn('btn', variant, size, square && 'square', loading && 'loading', className)}
      aria-disabled={loading || undefined}
      {...buttonProps}
      onTouchStart={noop}
      onClick={(e) => (loading ? e.preventDefault() : buttonProps.onClick?.(e))}
      onKeyDown={(e) => {
        // Holding Enter repeats clicks natively: one press, one action (no double submit).
        if (e.key === 'Enter' && e.repeat) e.preventDefault();
        buttonProps.onKeyDown?.(e);
      }}
    >
      {/* Label stays in place (transparent) under the spinner: same width, same accessible name. */}
      <span className="label">{children}</span>
      {loading && <span className="spinner" aria-hidden="true" />}
    </button>
  );
}
