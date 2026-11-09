"use client";

import * as React from "react";
import { Bold, Check, Italic, Strikethrough, Underline, X } from "lucide-react";

import { cn } from "@/lib/utils";

/* Multi toggle group family: 5 decorative MULTI-select controls. The shared idea is
   options that turn on and off independently of each other: every button carries its
   own aria-pressed state, the selection is an array, and a click flips only that
   option. The variants change how the multi-selection reads (checked buttons, a
   counter, removable chips, select-all, a mix of icon+label). Color comes ONLY from
   semantic tokens; alpha via color-mix. This family is entirely static and carries
   no motion. The state is held at the root, so no subtree ever unmounts and loses
   the selection. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type Option = {
  value: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
};

type ToggleGroupProps = {
  className?: string;
  size?: StyledSize;
  options?: Option[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (v: string[]) => void;
};

const sizeBtn: Record<StyledSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-5 text-sm",
  xl: "h-11 px-6 text-base",
};

const sizeIconBtn: Record<StyledSize, string> = {
  sm: "size-8 text-xs",
  md: "size-9 text-sm",
  lg: "size-10 text-sm",
  xl: "size-11 text-base",
};

const btnBase =
  "relative z-10 inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

const FORMAT_OPTIONS: Option[] = [
  { value: "bold", label: "Bold", icon: <Bold /> },
  { value: "italic", label: "Italic", icon: <Italic /> },
  { value: "underline", label: "Underline", icon: <Underline /> },
  { value: "strike", label: "Strikethrough", icon: <Strikethrough /> },
];

function labelText(o: Option): string {
  return typeof o.label === "string" ? o.label : o.value;
}

/* The controlled/uncontrolled multi-selection state. When uncontrolled the first
   option is on by default, so that the on/off difference is visible in a render with
   no props. */
function useMultiToggleGroup(props: ToggleGroupProps, fallback: Option[]) {
  const { options, value, defaultValue, onValueChange } = props;
  const list = React.useMemo(
    () => (options && options.length ? options : fallback),
    [options, fallback],
  );
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState<string[]>(() => {
    if (defaultValue) return defaultValue;
    return list[0] ? [list[0].value] : [];
  });
  const selected = controlled ? value : internal;

  const emit = React.useCallback(
    (next: string[]) => {
      if (!controlled) setInternal(next);
      onValueChange?.(next);
    },
    [controlled, onValueChange],
  );

  const toggle = React.useCallback(
    (v: string) => {
      emit(
        selected.includes(v)
          ? selected.filter((s) => s !== v)
          : [...selected, v],
      );
    },
    [selected, emit],
  );

  const isOn = React.useCallback(
    (v: string) => selected.includes(v),
    [selected],
  );
  return { list, selected, isOn, toggle, emit };
}

/* Multi: a connected multi-select bar; an option that is on carries a primary tint
   and a marker. */
export function MultiToggleGroup({
  className,
  size = "md",
  ...props
}: ToggleGroupProps) {
  const { list, isOn, toggle } = useMultiToggleGroup(props, FORMAT_OPTIONS);
  return (
    <div
      data-slot="styled-toggle-group-viewport"
      className="-m-1 flex max-w-full overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        data-slot="styled-toggle-group"
        role="group"
        aria-label="Text formatting, multi select"
        className={cn(
          "inline-flex flex-wrap items-center gap-1 rounded-lg border border-border bg-background p-1",
          className,
        )}
      >
        {list.map((o) => {
          const on = isOn(o.value);
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={on}
              data-slot="styled-toggle-group-item"
              onClick={() => toggle(o.value)}
              className={cn(
                btnBase,
                sizeBtn[size],
                "rounded-md",
                on
                  ? "bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {on ? <Check /> : o.icon}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Count: coklu-secim cubugu + secili sayisini okuyan canli bir sayac rozeti. */
export function CountToggleGroup({
  className,
  size = "md",
  ...props
}: ToggleGroupProps) {
  const { list, selected, isOn, toggle } = useMultiToggleGroup(
    props,
    FORMAT_OPTIONS,
  );
  const countId = React.useId();
  return (
    <div
      data-slot="styled-toggle-group-viewport"
      className="-m-1 flex max-w-full overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        data-slot="styled-toggle-group"
        role="group"
        aria-label="Text formatting, with a selected counter"
        aria-describedby={countId}
        className={cn("inline-flex flex-wrap items-center gap-2", className)}
      >
        <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-background p-1">
          {list.map((o) => {
            const on = isOn(o.value);
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                aria-label={labelText(o)}
                data-slot="styled-toggle-group-item"
                onClick={() => toggle(o.value)}
                className={cn(
                  btnBase,
                  sizeIconBtn[size],
                  "rounded-md",
                  on
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {o.icon ?? o.label}
              </button>
            );
          })}
        </div>
        <span
          id={countId}
          aria-live="polite"
          className="inline-flex h-6 items-center rounded-full bg-muted px-2 text-xs font-medium tabular-nums text-muted-foreground"
        >
          {selected.length} of {list.length} selected
        </span>
      </div>
    </div>
  );
}

/* Chips: a chip series; a selected chip shows a primary fill and a remove marker. */
export function ChipsToggleGroup({
  className,
  size = "md",
  ...props
}: ToggleGroupProps) {
  const { list, isOn, toggle } = useMultiToggleGroup(props, FORMAT_OPTIONS);
  return (
    <div
      data-slot="styled-toggle-group-viewport"
      className="-m-1 flex max-w-full overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        data-slot="styled-toggle-group"
        role="group"
        aria-label="Text formatting, removable chips"
        className={cn("inline-flex flex-wrap items-center gap-2", className)}
      >
        {list.map((o) => {
          const on = isOn(o.value);
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={on}
              data-slot="styled-toggle-group-item"
              onClick={() => toggle(o.value)}
              className={cn(
                btnBase,
                sizeBtn[size],
                "rounded-full border",
                on
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {o.label}
              {on ? <X /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* All: multi-select + a select-all/clear button. The all button is not a toggle but
   a bulk action; that is why it states the real state in its text rather than using
   aria-pressed. */
export function AllToggleGroup({
  className,
  size = "md",
  ...props
}: ToggleGroupProps) {
  const { list, selected, isOn, toggle, emit } = useMultiToggleGroup(
    props,
    FORMAT_OPTIONS,
  );
  const allOn = selected.length === list.length;
  return (
    <div
      data-slot="styled-toggle-group-viewport"
      className="-m-1 flex max-w-full overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        data-slot="styled-toggle-group"
        role="group"
        aria-label="Text formatting, with a select all action"
        className={cn(
          "inline-flex flex-wrap items-center gap-1 rounded-lg border border-border bg-muted p-1",
          className,
        )}
      >
        <button
          type="button"
          data-slot="styled-toggle-group-action"
          onClick={() => emit(allOn ? [] : list.map((o) => o.value))}
          className={cn(
            btnBase,
            sizeBtn[size],
            "rounded-md border border-border bg-background text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
          )}
        >
          {allOn ? "Clear all" : "Select all"}
        </button>
        <span aria-hidden="true" className="mx-1 h-5 w-px shrink-0 bg-border" />
        {list.map((o) => {
          const on = isOn(o.value);
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={on}
              data-slot="styled-toggle-group-item"
              onClick={() => toggle(o.value)}
              className={cn(
                btnBase,
                sizeBtn[size],
                "rounded-md",
                on
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {o.icon}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Mixed: icon-only and icon+label buttons in the same bar; a selected one moves to
   the filled tone. For multi-select bars of mixed width. */
export function MixedToggleGroup({
  className,
  size = "md",
  ...props
}: ToggleGroupProps) {
  const { list, isOn, toggle } = useMultiToggleGroup(props, FORMAT_OPTIONS);
  return (
    <div
      data-slot="styled-toggle-group-viewport"
      className="-m-1 flex max-w-full overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        data-slot="styled-toggle-group"
        role="group"
        aria-label="Text formatting, mixed icon and label buttons"
        className={cn("inline-flex flex-wrap items-center gap-1", className)}
      >
        {list.map((o, i) => {
          const on = isOn(o.value);
          const iconOnly = i % 2 === 1;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={on}
              aria-label={iconOnly ? labelText(o) : undefined}
              data-slot="styled-toggle-group-item"
              onClick={() => toggle(o.value)}
              className={cn(
                btnBase,
                iconOnly ? sizeIconBtn[size] : sizeBtn[size],
                "rounded-md border",
                on
                  ? "border-transparent bg-success text-success-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {o.icon}
              {iconOnly ? null : o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MultiToggleGroup;
