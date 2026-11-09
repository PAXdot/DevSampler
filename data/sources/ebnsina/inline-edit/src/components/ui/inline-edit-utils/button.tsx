'use client';

/*
 * Ported from Sina UI's Button.svelte (https://github.com/ebnsina/sinaui, MIT License).
 * Copyright (c) the Sina UI authors. See upstream LICENSE for the full MIT text.
 * Styles live in global.css (.ie-btn and friends) since this is a plain CSS port, not Tailwind.
 */
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
  loading?: boolean;
  /** Square button for a lone icon. Give it an aria-label. */
  square?: boolean;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined };
type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };

export type InlineEditButtonProps = ButtonProps | AnchorProps;

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ');
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, InlineEditButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', loading = false, square = false, className, children, ...rest },
    ref
  ) {
    const classes = cx('ie-btn', variant, size, square && 'square', loading && 'loading', className);

    if ('href' in rest && rest.href !== undefined) {
      const { href, ...anchorRest } = rest as AnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          href={href}
          {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonRest.type ?? 'button'}
        className={classes}
        aria-disabled={loading || undefined}
        {...buttonRest}
        onClick={(e) => (loading ? e.preventDefault() : buttonRest.onClick?.(e))}
        onKeyDown={(e) => {
          // Holding Enter repeats clicks natively: one press, one action (no double submit).
          if (e.key === 'Enter' && e.repeat) e.preventDefault();
          buttonRest.onKeyDown?.(e);
        }}
      >
        <span className="label">{children}</span>
        {loading && <span className="ie-btn-spinner" aria-hidden="true" />}
      </button>
    );
  }
);

export default Button;
