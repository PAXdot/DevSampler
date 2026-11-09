"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

/* OTP and specialised input family: 5 segmented and formatted entries. Colour comes ONLY from tokens. The segment groups move focus with an internal state array plus refs; every box is a real <input> and carries an aria-label. The single-input variants pass native props straight through. No animation, motion/react is not needed. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const height: Record<StyledSize, string> = {
  sm: "h-8 text-sm",
  md: "h-9 text-sm",
  lg: "h-10 text-base",
  xl: "h-12 text-base",
};

const fieldBase =
  "w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50";

type Props = Omit<React.ComponentProps<"input">, "size"> & {
  size?: StyledSize;
};

/* Segmentli kutu grubu: kontrollu ic dizi + ref ile ileri/geri odak. */
function useOtp(length: number) {
  const [values, setValues] = React.useState<string[]>(() =>
    Array(length).fill(""),
  );
  const refs = React.useRef<Array<HTMLInputElement | null>>([]);
  const setAt = (i: number, raw: string) => {
    const ch = raw.slice(-1);
    setValues((prev) => {
      const next = [...prev];
      next[i] = ch;
      return next;
    });
    if (ch && i < length - 1) refs.current[i + 1]?.focus();
  };
  const onKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[i] && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < length - 1) {
      refs.current[i + 1]?.focus();
    }
  };
  return { values, refs, setAt, onKey };
}

function Segmented({
  length,
  className,
  size = "md",
  look = "box",
  ...props
}: Props & { length: number; look?: "box" | "underline" }) {
  const { values, refs, setAt, onKey } = useOtp(length);
  const box =
    look === "underline"
      ? "rounded-none border-0 border-b-2 border-field-border focus:border-primary"
      : "rounded-lg border border-field-border focus:border-ring focus:ring-[3px] focus:ring-ring/50";
  return (
    <span
      data-slot="styled-input"
      className={cn("inline-flex items-center gap-2", className)}
    >
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          {...(i === 0 ? props : {})}
          value={values[i]}
          onChange={(e) => setAt(i, e.target.value)}
          onKeyDown={(e) => onKey(i, e)}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          className={cn(
            fieldBase,
            box,
            height[size],
            "aspect-square text-center font-medium tabular-nums transition-colors",
          )}
        />
      ))}
    </span>
  );
}

/* Pin: 4 ayri tek-karakterli kutu. */
export function PinInput(props: Props) {
  return <Segmented length={4} {...props} />;
}

/* Segment: N kutulu (varsayilan 5), token alt-cizgili segment gorunumu. */
export function SegmentInput({
  length = 5,
  ...props
}: Props & { length?: number }) {
  return <Segmented length={length} look="underline" {...props} />;
}

/* Code: 6 kutulu dogrulama kodu girisi. */
export function CodeInput(props: Props) {
  return <Segmented length={6} {...props} />;
}

/* Masked: sabit token onek (varsayilan "@") + tek gercek input. */
export function MaskedInput({
  className,
  size = "md",
  prefix = "@",
  ...props
}: Props & { prefix?: string }) {
  return (
    <span
      data-slot="styled-input"
      className={cn(
        "relative inline-flex w-56 max-w-full items-center gap-1 rounded-lg border border-field-border px-3 transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        height[size],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="shrink-0 select-none font-medium text-muted-foreground"
      >
        {prefix}
      </span>
      <input {...props} className={cn(fieldBase, "h-full")} />
    </span>
  );
}

/* Stepper: token +/- butonlu sayi girisi. */
export function StepperInput({
  className,
  size = "md",
  min,
  max,
  step = 1,
  ...props
}: Props) {
  const [value, setValue] = React.useState<string>(
    props.defaultValue != null
      ? String(props.defaultValue)
      : props.value != null
        ? String(props.value)
        : "",
  );
  const current = props.value != null ? String(props.value) : value;
  const stepNum = typeof step === "number" ? step : Number(step) || 1;
  const minNum = min != null ? Number(min) : undefined;
  const maxNum = max != null ? Number(max) : undefined;

  const nudge = (dir: 1 | -1) => {
    const base = current === "" ? 0 : Number(current);
    let next = base + dir * stepNum;
    if (minNum != null) next = Math.max(minNum, next);
    if (maxNum != null) next = Math.min(maxNum, next);
    setValue(String(next));
  };

  const btn =
    "inline-flex h-full aspect-square shrink-0 items-center justify-center text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50 [&_svg]:size-4";

  return (
    <span
      data-slot="styled-input"
      className={cn(
        "relative inline-flex w-40 max-w-full items-center overflow-hidden rounded-lg border border-field-border transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        height[size],
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease"
        onClick={() => nudge(-1)}
        className={cn(btn, "border-r border-field-border")}
      >
        <Minus />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={step}
        {...props}
        value={current}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
        className={cn(
          fieldBase,
          "h-full min-w-0 flex-1 text-center tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        )}
      />
      <button
        type="button"
        aria-label="Increase"
        onClick={() => nudge(1)}
        className={cn(btn, "border-l border-field-border")}
      >
        <Plus />
      </button>
    </span>
  );
}

export default PinInput;
