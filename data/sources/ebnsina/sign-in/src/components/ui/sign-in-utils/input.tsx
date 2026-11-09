"use client";

import { forwardRef, useId, useRef } from "react";
import type { InputHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "children"> {
  label: string;
  hint?: string;
  error?: string;
  /** Inside the box, before the text: an icon or a prefix like "https://". */
  start?: ReactNode;
  /** Inside the box, after the text: a suffix, or a button (show password, clear, copy). */
  end?: ReactNode;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, start, end, id, className, "aria-describedby": describedbyExtra, ...rest },
  ref
) {
  const uid = useId();
  const inputId = id ?? uid;
  const innerRef = useRef<HTMLInputElement | null>(null);

  const describedby =
    [describedbyExtra, hint && `${inputId}-hint`, error && `${inputId}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={cn("ip-field", className)}>
      <label htmlFor={inputId}>{label}</label>
      {/* The box is the border; start and end sit inside it with the text. */}
      <div
        className="ip-control"
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          // A click on a prefix or padding focuses the text, as it would in a plain input.
          const target = e.target as HTMLElement;
          if (target === e.currentTarget || target.closest(".ip-addon")) innerRef.current?.focus();
        }}
      >
        {start ? <span className="ip-addon ip-start">{start}</span> : null}
        <input
          id={inputId}
          ref={(el) => {
            innerRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) (ref as { current: HTMLInputElement | null }).current = el;
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedby}
          {...rest}
        />
        {end ? <span className="ip-addon ip-end">{end}</span> : null}
      </div>
      {hint ? (
        <p id={`${inputId}-hint`} className="ip-hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${inputId}-error`} className="ip-error">
          {error}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
