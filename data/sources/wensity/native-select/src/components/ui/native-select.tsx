"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type NativeSelectSize = "sm" | "md" | "lg" | "inline";

export type NativeSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type NativeSelectGroup = {
  label: string;
  options: NativeSelectOption[];
};

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  placeholder?: string;
  options?: NativeSelectOption[];
  groups?: NativeSelectGroup[];
  selectSize?: NativeSelectSize;
  fullWidth?: boolean;
  containerClassName?: string;
  selectClassName?: string;
}

// Chevron: keep the inline SVG (ledgered), no @tabler/icons-react dependency
// needed on this primitive, and the SVG scales cleanly at every size.
const selectSizes: Record<NativeSelectSize, string> = {
  sm: "h-[var(--primitive-control-height-sm,2rem)] min-h-[var(--primitive-control-height-sm,2rem)] rounded-[var(--primitive-radius-control,0.875rem)] pr-8 pl-3 text-xs",
  md: "h-[var(--primitive-control-height-md,2.25rem)] min-h-[var(--primitive-control-height-md,2.25rem)] rounded-[var(--primitive-radius-control,0.875rem)] pr-9 pl-3.5 text-sm",
  lg: "h-[var(--primitive-control-height-lg,2.5rem)] min-h-[var(--primitive-control-height-lg,2.5rem)] rounded-[var(--primitive-radius-control,0.875rem)] pr-10 pl-4 text-[15px]",
  // Compact visual height with expanded hit target (PRIM-A11Y-004).
  inline:
    "relative h-7 min-h-7 rounded-[var(--primitive-radius-control-sm,0.625rem)] pr-7 pl-2.5 py-1 text-xs before:absolute before:inset-y-[-0.5rem] before:inset-x-[-0.25rem] before:content-['']",
};

const chevronSizes: Record<NativeSelectSize, string> = {
  sm: "right-2.5 size-3.5",
  md: "right-3 size-4",
  lg: "right-3.5 size-4",
  inline: "right-2 size-3",
};

const selectBase = cn(
  "native-select-control group/ns relative isolate w-full appearance-none",
  "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]",
  "shadow-[0_1px_1px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.28)]",
  "cursor-pointer",
  "transition-[border-color,background-color,box-shadow,color] duration-150 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "motion-reduce:transition-none",
  "hover:border-[color-mix(in_srgb,var(--foreground)_14%,transparent)]",
  "focus:border-[color-mix(in_srgb,var(--foreground)_24%,transparent)]",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  "disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-[var(--border)]",
);

const selectError = cn(
  "border-[color:var(--primitive-destructive-border,color-mix(in_srgb,var(--destructive)_45%,transparent))]",
  "hover:border-[color-mix(in_srgb,var(--primitive-destructive,var(--destructive))_65%,transparent)]",
  "focus:border-[color:var(--primitive-destructive,var(--destructive))]",
  "focus-visible:ring-[color-mix(in_srgb,var(--primitive-destructive,var(--destructive))_45%,transparent)]",
);

const selectPlaceholder = "text-[color:var(--primitive-text-placeholder,var(--muted-foreground))]";

const wrapperBase = cn(
  "native-select-wrapper relative isolate",
);

const chevronBase = cn(
  "pointer-events-none absolute top-1/2 -translate-y-1/2 text-[color-mix(in_srgb,var(--muted-foreground)_60%,transparent)]",
  "transition-transform duration-[320ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
  "motion-reduce:transition-none",
  "group-focus-within/ns:text-[var(--muted-foreground)]",
);

const messageBase = cn(
  "text-[13px] leading-[1.4] tracking-[-0.01em]",
  "transition-opacity duration-140 ease-[var(--primitive-ease,cubic-bezier(0.23,1,0.32,1))]",
  "motion-reduce:transition-none",
);

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="size-full"
    >
      <path
        d="m4.25 6.25 3.75 3.5 3.75-3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NativeSelect({
  options,
  groups,
  label,
  hint,
  error,
  placeholder,
  selectSize = "md",
  fullWidth = true,
  disabled,
  id,
  required,
  className,
  containerClassName,
  selectClassName,
  value,
  defaultValue,
  children,
  ...props
}: NativeSelectProps) {
  const reactId = React.useId();
  const selectId = id ?? `wensity-native-select-${reactId}`;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;

  const describedBy =
    [props["aria-describedby"], errorId, hintId]
      .filter(Boolean)
      .join(" ") || undefined;

  const hasPlaceholder = placeholder !== undefined && placeholder !== "";
  const hasValue =
    value !== undefined ||
    defaultValue !== undefined ||
    (props as { value?: string }).value !== undefined;

  const renderOptions = () => {
    if (groups) {
      return groups.map((group, gi) => (
        <optgroup key={gi} label={group.label}>
          {group.options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label}
            </option>
          ))}
        </optgroup>
      ));
    }

    if (options) {
      return options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
          disabled={opt.disabled}
        >
          {opt.label}
        </option>
      ));
    }

    return children;
  };

  return (
    <div data-wensity-primitive=""
      className={cn(
        "flex flex-col gap-1.5",
        fullWidth ? "w-full" : "w-fit",
        containerClassName,
      )}
    >
      {label ? (
        <label
          htmlFor={selectId}
          className={cn(
            "text-[13px] font-medium leading-none tracking-[-0.01em] text-[var(--foreground)]",
          )}
        >
          {label}
        </label>
      ) : null}

      <div className={cn(wrapperBase, fullWidth ? "w-full" : "w-fit")}>
        <select
          id={selectId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            selectBase,
            selectSizes[selectSize],
            error && selectError,
            hasPlaceholder && !hasValue && selectPlaceholder,
            fullWidth ? "w-full" : "w-fit",
            className,
            selectClassName,
          )}
          {...props}
        >
          {hasPlaceholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {renderOptions()}
        </select>
        <span className={cn(chevronBase, chevronSizes[selectSize])}>
          <ChevronDownIcon />
        </span>
      </div>

      {hint && !error ? (
        <span
          id={hintId}
          className={cn(messageBase, "text-[color:var(--primitive-text-secondary,color-mix(in_srgb,var(--foreground)_72%,transparent))]")}
        >
          {hint}
        </span>
      ) : null}

      {error ? (
        <span
          id={errorId}
          role="alert"
          className={cn(messageBase, "text-[color:var(--primitive-destructive,var(--destructive))]")}
        >
          {error}
        </span>
      ) : null}
    </div>
  );
}
