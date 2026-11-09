'use client';

/*
 * Ported from Sina UI's Spinner.svelte (https://github.com/ebnsina/sinaui, MIT License).
 * Copyright (c) the Sina UI authors. See upstream LICENSE for the full MIT text.
 */
export interface SpinnerProps {
  /** Diameter in px. */
  size?: number;
  /** What's loading ("Loading manuscripts"). Without it the spinner is decoration beside your own text. */
  label?: string;
  /** ms before it appears, so quick loads never flash it. */
  delay?: number;
  className?: string;
}

export default function Spinner({ size = 16, label, delay = 0, className }: SpinnerProps) {
  return (
    <span
      className={['ie-spinner', className].filter(Boolean).join(' ')}
      role={label ? 'progressbar' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      style={{ '--size': `${size}px`, '--delay': `${delay}ms` } as React.CSSProperties}
    />
  );
}
