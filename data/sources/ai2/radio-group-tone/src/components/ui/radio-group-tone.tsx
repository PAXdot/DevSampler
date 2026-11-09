"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Tone radio-group family: 5 semantically toned selection groups (info, success,
   warning, danger, muted). Each option is a row card; the selected one is marked
   with the tone's border, soft fill and toned dot. role="radiogroup" +
   role="radio", roving tabindex, arrow-key navigation and selection. The root
   carries data-tone. Color comes ONLY from tokens, via alpha color-mix. Under
   reduced-motion the dot appears instantly. A dot box under 24px carries an
   invisible touch area. Renders with no props too. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type RadioOption = { value: string; label: React.ReactNode };

interface RadioGroupProps {
  className?: string;
  size?: StyledSize;
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
}

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
  sm: "px-2.5 py-1.5",
  md: "px-3 py-2",
  lg: "px-4 py-2.5",
  xl: "px-5 py-3",
};

const ringSize: Record<StyledSize, string> = {
  sm: "size-4",
  md: "size-4",
  lg: "size-5",
  xl: "size-5",
};

const dotSize: Record<StyledSize, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
  xl: "size-2.5",
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
    : { type: "spring" as const, stiffness: 500, damping: 34 };
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

type ToneSkin = {
  /* Secili kartin kenarlik + dolgu + metin gorunumu. */
  card: string;
  /* Secili nokta halkasi. */
  ring: string;
  /* Secili nokta dolgusu. */
  dot: string;
  /* Secili olmayan kart hover kenarligi. */
  hover: string;
};

/* Shared shell: a toned row-card list. */
function ToneShell({
  props,
  tone,
  skin,
}: {
  props: RadioGroupProps;
  tone: string;
  skin: ToneSkin;
}) {
  const {
    className,
    size = "md",
    options,
    value,
    defaultValue,
    onValueChange,
  } = props;
  const { opts, selected, select, spring } = useRadioGroup({
    options,
    value,
    defaultValue,
    onValueChange,
  });
  const { setRef, onKeyDown } = useRadioKeys(opts, select);
  const activeIndex = opts.findIndex((o) => o.value === selected);

  return (
    <div
      data-slot="styled-radio-group"
      data-tone={tone}
      role="radiogroup"
      aria-label="Choose an option"
      className={cn("flex w-full flex-col gap-2", className)}
    >
      {opts.map((opt, i) => {
        const active = opt.value === selected;
        const roving = active || (activeIndex < 0 && i === 0);
        return (
          <button
            key={opt.value}
            ref={setRef(i)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={roving ? 0 : -1}
            onKeyDown={onKeyDown(i)}
            onClick={() => select(opt.value)}
            data-slot="styled-radio-item"
            className={cn(
              "group flex cursor-pointer items-center gap-2.5 rounded-lg border text-left font-medium transition-colors",
              focusRing,
              textSize[size],
              padSize[size],
              active
                ? skin.card
                : cn(
                    "border-field-border text-muted-foreground hover:text-foreground",
                    skin.hover,
                  ),
            )}
          >
            <span
              className={cn(
                "relative flex shrink-0 items-center justify-center rounded-full border transition-colors after:absolute after:-inset-1.5",
                ringSize[size],
                active ? skin.ring : "border-field-border",
              )}
            >
              <motion.span
                initial={false}
                animate={{ scale: active ? 1 : 0 }}
                transition={spring}
                className={cn("rounded-full", dotSize[size], skin.dot)}
              />
            </span>
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* Info: bilgi tonu. */
export function InfoRadio(props: RadioGroupProps) {
  return (
    <ToneShell
      props={props}
      tone="info"
      skin={{
        card: "border-info bg-info-soft text-info-soft-foreground",
        ring: "border-info",
        dot: "bg-info",
        hover:
          "hover:border-[color-mix(in_oklab,var(--color-info)_45%,transparent)]",
      }}
    />
  );
}

/* Success: onay tonu. */
export function SuccessRadio(props: RadioGroupProps) {
  return (
    <ToneShell
      props={props}
      tone="success"
      skin={{
        card: "border-success bg-success-soft text-success-soft-foreground",
        ring: "border-success",
        dot: "bg-success",
        hover:
          "hover:border-[color-mix(in_oklab,var(--color-success)_45%,transparent)]",
      }}
    />
  );
}

/* Warning: uyari tonu. */
export function WarningRadio(props: RadioGroupProps) {
  return (
    <ToneShell
      props={props}
      tone="warning"
      skin={{
        card: "border-warning bg-warning-soft text-warning-soft-foreground",
        ring: "border-warning",
        dot: "bg-warning",
        hover:
          "hover:border-[color-mix(in_oklab,var(--color-warning)_45%,transparent)]",
      }}
    />
  );
}

/* Danger: the destructive-choice tone (ai2 danger, not destructive). */
export function DangerRadio(props: RadioGroupProps) {
  return (
    <ToneShell
      props={props}
      tone="danger"
      skin={{
        card: "border-danger bg-danger-soft text-danger-soft-foreground",
        ring: "border-danger",
        dot: "bg-danger",
        hover:
          "hover:border-[color-mix(in_oklab,var(--color-danger)_45%,transparent)]",
      }}
    />
  );
}

/* Muted: notr, sessiz ton. */
export function MutedRadio(props: RadioGroupProps) {
  return (
    <ToneShell
      props={props}
      tone="neutral"
      skin={{
        card: "border-border bg-muted text-foreground",
        ring: "border-muted-foreground",
        dot: "bg-muted-foreground",
        hover:
          "hover:border-[color-mix(in_oklab,var(--color-foreground)_25%,transparent)]",
      }}
    />
  );
}

/* Default entry: dispatches to the toned variant above by a `tone` prop.
   Appended so the file (verbatim ai2 registry source) has a single default
   export, as required by the consuming registry; no markup was altered. */
export default function RadioGroupTone({
  tone = "info",
  ...props
}: RadioGroupProps & {
  tone?: "info" | "success" | "warning" | "danger" | "muted";
}) {
  switch (tone) {
    case "success":
      return <SuccessRadio {...props} />;
    case "warning":
      return <WarningRadio {...props} />;
    case "danger":
      return <DangerRadio {...props} />;
    case "muted":
      return <MutedRadio {...props} />;
    default:
      return <InfoRadio {...props} />;
  }
}
