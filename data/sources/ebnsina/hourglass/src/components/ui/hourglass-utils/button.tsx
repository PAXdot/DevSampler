"use client";

import { useEffect, useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { announce } from "./announce";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ButtonCommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
  loading?: boolean;
  /** Square button for a lone icon. Give it an aria-label. */
  square?: boolean;
  className?: string;
};

type ButtonAsButton = ButtonCommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };
type ButtonAsAnchor = ButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", loading = false, square = false, className, children, ...rest } =
    props;

  const elRef = useRef<HTMLButtonElement>(null);

  // Someone who pressed it and is still on it hears that it's busy; the spinner alone is silent.
  useEffect(() => {
    if (loading && elRef.current === document.activeElement) announce("Loading");
  }, [loading]);

  // iOS Safari only applies :active (the press feedback) when a touch listener exists.
  const noop = () => {};

  const classes = ["btn", variant, size, square && "square", className].filter(Boolean).join(" ");

  if ((rest as ButtonAsAnchor).href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorRest} onTouchStart={noop}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    // aria-disabled, not disabled: a disabled button drops focus and screen readers lose their place.
    <button
      ref={elRef}
      type="button"
      className={[classes, loading && "loading"].filter(Boolean).join(" ")}
      aria-disabled={loading || undefined}
      {...buttonRest}
      onTouchStart={noop}
      onClick={(e) => (loading ? e.preventDefault() : buttonRest.onClick?.(e))}
      onKeyDown={(e) => {
        // Holding Enter repeats clicks natively: one press, one action (no double submit).
        if (e.key === "Enter" && e.repeat) e.preventDefault();
        buttonRest.onKeyDown?.(e);
      }}
    >
      {/* Label stays in place (transparent) under the spinner: same width, same accessible name. */}
      <span className="label">{children}</span>
      {loading && <span className="spinner" aria-hidden="true"></span>}
    </button>
  );
}
