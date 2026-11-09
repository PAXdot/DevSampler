"use client";

import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { MinusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import Icon from "./icon";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  /** "Some but not all": shows a dash and is announced as mixed. */
  indeterminate?: boolean;
  /** Visible label. Without it, pass aria-label. */
  children?: ReactNode;
  hint?: string;
  error?: string;
  className?: string;
}

// Native checkbox: keyboard, forms, reset and label clicks with no extra code.
export default function Checkbox({
  indeterminate = false,
  children,
  hint,
  error,
  id,
  className,
  ...rest
}: CheckboxProps) {
  const uid = useId();
  const inputId = id ?? uid;
  return (
    <div className={cn("ck-checkbox", className)}>
      <span className="ck-control">
        <input
          type="checkbox"
          id={inputId}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hint && `${inputId}-hint`, error && `${inputId}-error`].filter(Boolean).join(" ") ||
            undefined
          }
          {...rest}
        />
        <span className="ck-box" aria-hidden="true">
          <span className="ck-mark ck-tick">
            <Icon icon={Tick02Icon} size={14} strokeWidth={2.5} />
          </span>
          <span className="ck-mark ck-dash">
            <Icon icon={MinusSignIcon} size={14} strokeWidth={2.5} />
          </span>
        </span>
      </span>
      {children || hint || error ? (
        <span className="ck-text">
          {children ? <label htmlFor={inputId}>{children}</label> : null}
          {hint ? (
            <span id={`${inputId}-hint`} className="ck-hint">
              {hint}
            </span>
          ) : null}
          {error ? (
            <span id={`${inputId}-error`} className="ck-error">
              {error}
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}
