"use client";

import * as React from "react";
import { Circle, Heart, Sparkles, Star, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Radio-group family: 5 decorative selection groups. role="radiogroup" plus role="radio". Colour comes ONLY from tokens. Size = the track scale. Used uncontrolled (defaultValue) or controlled (value/onValueChange). Keyboard navigation (arrow keys) plus roving tabindex. framer-motion switches instantly under reduced-motion. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type RadioOption = { value: string; label: React.ReactNode };

type RadioGroupProps = {
  className?: string;
  size?: StyledSize;
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
};

const DEFAULT_OPTIONS: RadioOption[] = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

const textSize: Record<StyledSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

const padSize: Record<StyledSize, string> = {
  sm: "px-2.5 py-1",
  md: "px-3 py-1.5",
  lg: "px-4 py-2",
  xl: "px-5 py-2.5",
};

function useRadioGroup(
  props: Pick<
    RadioGroupProps,
    "value" | "defaultValue" | "onValueChange" | "options"
  >,
) {
  const { value, defaultValue, onValueChange, options } = props;
  const opts = options && options.length > 0 ? options : DEFAULT_OPTIONS;
  const reduce = useReducedMotion();
  const [internal, setInternal] = React.useState(
    defaultValue ?? opts[0]?.value,
  );
  const selected = value ?? internal;
  const select = React.useCallback(
    (v: string) => {
      if (value === undefined) setInternal(v);
      onValueChange?.(v);
    },
    [value, onValueChange],
  );
  const spring = reduce
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 500, damping: 34 } as const);
  return { opts, selected, select, reduce, spring };
}

/* Arrow-key navigation + selection (together with the roving tabindex). */
function useRadioKeys(opts: RadioOption[], select: (v: string) => void) {
  const refs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const setRef = (i: number) => (el: HTMLButtonElement | null) => {
    refs.current[i] = el;
  };
  const onKeyDown = (i: number) => (e: React.KeyboardEvent) => {
    const last = opts.length - 1;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = i === 0 ? last : i - 1;
    if (next < 0) return;
    e.preventDefault();
    const target = opts[next];
    if (!target) return;
    select(target.value);
    refs.current[next]?.focus();
  };
  return { setRef, onKeyDown };
}

const focusRing =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/* Segmented: yatay segment kontrolu; aktif secenegin altinda token pill kayar. */
export function SegmentedRadio({
  className,
  size = "md",
  options,
  value,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  const { opts, selected, select, spring } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  const groupId = React.useId();
  return (
    <div
      data-slot="styled-radio-group"
      role="radiogroup"
      className={cn(
        "inline-flex items-center gap-1 rounded-lg bg-muted p-1",
        className,
      )}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "relative z-10 cursor-pointer rounded-md font-medium transition-colors",
              focusRing,
              textSize[size],
              padSize[size],
              active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId={`segmented-pill-${groupId}`}
                transition={spring}
                className="absolute inset-0 -z-10 rounded-md bg-primary shadow-sm"
              />
            )}
            <span className="relative">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* Card: every option is a selectable card; when selected it gets a token border + a
   marker. */
export function CardRadio({
  className,
  size = "md",
  options,
  value,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  const { opts, selected, select, spring } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  return (
    <div
      data-slot="styled-radio-group"
      role="radiogroup"
      className={cn("flex flex-col gap-2", className)}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "relative flex cursor-pointer items-center justify-between rounded-lg border text-left transition-colors",
              focusRing,
              textSize[size],
              padSize[size],
              active
                ? "border-primary bg-primary/10 text-foreground"
                : "border-field-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            <span className="font-medium">{opt.label}</span>
            <span
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-field-border text-transparent",
              )}
            >
              <motion.span
                initial={false}
                animate={{ scale: active ? 1 : 0 }}
                transition={spring}
                className="size-1.5 rounded-full bg-current"
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* Pill: every option is a pill; the selected one fills with the token. */
export function PillRadio({
  className,
  size = "md",
  options,
  value,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  const { opts, selected, select } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  return (
    <div
      data-slot="styled-radio-group"
      role="radiogroup"
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "cursor-pointer rounded-full border font-medium transition-colors",
              focusRing,
              textSize[size],
              padSize[size],
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-field-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

/* Dot: klasik radio noktalari; secili ic nokta token dolgu + yay ile buyur. */
export function DotRadio({
  className,
  size = "md",
  options,
  value,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  const { opts, selected, select, spring } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  const ringSize: Record<StyledSize, string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    xl: "size-7",
  };
  const dotSize: Record<StyledSize, string> = {
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-3",
  };
  return (
    <div
      data-slot="styled-radio-group"
      role="radiogroup"
      className={cn("flex flex-col gap-2.5", className)}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "group flex cursor-pointer items-center gap-2.5 rounded-md text-left transition-colors",
              focusRing,
              textSize[size],
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "relative flex shrink-0 items-center justify-center rounded-full border transition-colors after:absolute after:-inset-1.5",
                ringSize[size],
                active
                  ? "border-primary"
                  : "border-field-border group-hover:border-primary/40",
              )}
            >
              <motion.span
                initial={false}
                animate={{ scale: active ? 1 : 0 }}
                transition={spring}
                className={cn("rounded-full bg-primary", dotSize[size])}
              />
            </span>
            <span className="font-medium">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

const RADIO_ICONS = [Star, Heart, Zap, Sparkles, Circle];

/* Icon: ikon-onculu secenekler; secili olan token ring + tint alir. */
export function IconRadio({
  className,
  size = "md",
  options,
  value,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  const { opts, selected, select } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  const iconBox: Record<StyledSize, string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    xl: "size-7",
  };
  return (
    <div
      data-slot="styled-radio-group"
      role="radiogroup"
      className={cn("flex flex-wrap items-stretch gap-2", className)}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        const Icon = RADIO_ICONS[i % RADIO_ICONS.length];
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "flex cursor-pointer flex-col items-center gap-1.5 rounded-lg border font-medium transition-colors",
              focusRing,
              textSize[size],
              padSize[size],
              active
                ? "border-primary bg-primary/10 text-primary ring-1 ring-primary"
                : "border-field-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {Icon ? (
              <Icon
                className={cn(
                  iconBox[size],
                  active ? "text-primary" : "text-muted-foreground",
                )}
                aria-hidden="true"
              />
            ) : null}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedRadio;
