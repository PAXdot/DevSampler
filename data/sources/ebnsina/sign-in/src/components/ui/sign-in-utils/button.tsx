"use client";

import { useEffect, useRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

let region: HTMLElement | undefined;
// Says something to screen readers without moving focus, through one shared live region.
function announce(text: string) {
  if (typeof document === "undefined") return;
  if (!region?.isConnected) {
    region = document.createElement("div");
    region.style.cssText =
      "position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap";
    document.body.append(region);
  }
  region.setAttribute("aria-live", "polite");
  region.textContent = "";
  setTimeout(() => region && (region.textContent = text), 50);
}

type Variant = "primary" | "secondary" | "ghost" | "danger" | "link";
type Size = "sm" | "md" | "lg";

type ButtonOnlyProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorOnlyProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = {
  variant?: Variant;
  /** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
  loading?: boolean;
  /** Square button for a lone icon. Give it an aria-label. */
  square?: boolean;
  size?: Size;
  children?: ReactNode;
  className?: string;
} & (ButtonOnlyProps | AnchorOnlyProps);

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  square = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const elRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  // Someone who pressed it and is still on it hears that it's busy; the spinner alone is silent.
  useEffect(() => {
    if (loading && elRef.current === document.activeElement) announce("Loading");
  }, [loading]);

  const classes = cn(
    "bn-btn",
    variant === "primary" && "bn-primary",
    variant === "secondary" && "bn-secondary",
    variant === "ghost" && "bn-ghost",
    variant === "danger" && "bn-danger",
    variant === "link" && "bn-link",
    size === "sm" && "bn-sm",
    size === "lg" && "bn-lg",
    square && "bn-square",
    loading && "bn-loading",
    className
  );

  if (rest.href !== undefined) {
    const anchorRest = rest as AnchorOnlyProps;
    return (
      <a ref={elRef} className={classes} onTouchStart={() => {}} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonOnlyProps;
  return (
    // aria-disabled, not disabled: a disabled button drops focus and screen readers lose their place.
    <button
      ref={elRef}
      type="button"
      className={classes}
      aria-disabled={loading || undefined}
      onTouchStart={() => {}}
      {...buttonRest}
      onClick={(e) => (loading ? e.preventDefault() : buttonRest.onClick?.(e))}
      onKeyDown={(e) => {
        // Holding Enter repeats clicks natively: one press, one action (no double submit).
        if (e.key === "Enter" && e.repeat) e.preventDefault();
        buttonRest.onKeyDown?.(e);
      }}
    >
      <span className="bn-label">{children}</span>
      {loading ? <span className="bn-spinner" aria-hidden="true" /> : null}
    </button>
  );
}
