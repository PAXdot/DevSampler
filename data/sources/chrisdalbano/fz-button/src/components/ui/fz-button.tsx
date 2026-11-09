import * as React from "react";
import { LoaderCircle } from "lucide-react";

export interface FzButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  loading?: boolean;
  /** Rendered after the default children, mirrors the Vue component's `trailing` slot. */
  trailing?: React.ReactNode;
}

export default function FzButton({
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  loading,
  trailing,
  className,
  children,
  ...rest
}: FzButtonProps) {
  const classes = ["fz-button", variant, size, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && (
        <LoaderCircle
          aria-hidden="true"
          focusable="false"
          size={16}
          strokeWidth={1.75}
          className="spinner"
        />
      )}
      {children}
      {trailing}
    </button>
  );
}
