"use client";

import * as React from "react";
import { Slider as BaseSlider } from "@base-ui/react/slider";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WENSITY_STYLE_ID = "wensity-slider-styles";
const WENSITY_STYLES = `
/* Slider bubble / thumb presence (Base UI data-dragging + keyboard focus-visible)
 *
 * Base UI positions the thumb with the CSS \`translate\` property
 * (\`translate: -50% -50%\`). Never add \`transform: translate(...)\` here ,
 * individual \`translate\` and \`transform\` compose, which double-offsets the
 * thumb and makes it ride above the track on press/focus/drag.
 *
 * Bubble only while dragging (or keyboard focus-visible). Do not use
 * \`:focus-within\` , mouse drag leaves focus on the thumb and would keep the
 * value number stuck after pointer-up.
 *
 * Grab feedback purpose: state indication , shrink + ring so the user can
 * tell the thumb is held. Press budget ~140ms, strong ease-out.
 */
[data-slot="wensity-slider-bubble"] {
  opacity: 0;
  /* Horizontal center comes from left-1/2 + Tailwind translate on the bubble;
     only nudge upward + scale here. */
  transform: translateY(calc(-100% - 6px)) scale(0.94);
  transition:
    opacity 140ms var(--primitive-ease, cubic-bezier(0.23, 1, 0.32, 1)),
    transform 140ms var(--primitive-ease, cubic-bezier(0.23, 1, 0.32, 1));
  pointer-events: none;
}
[data-slot="wensity-slider-thumb"][data-dragging] [data-slot="wensity-slider-bubble"],
[data-slot="wensity-slider-thumb"]:has(:focus-visible) [data-slot="wensity-slider-bubble"] {
  opacity: 1;
  transform: translateY(calc(-100% - 10px)) scale(1);
}
[data-slot="wensity-slider-thumb"] {
  transition:
    scale 140ms var(--primitive-ease, cubic-bezier(0.23, 1, 0.32, 1)),
    box-shadow 140ms var(--primitive-ease, cubic-bezier(0.23, 1, 0.32, 1));
}
/* Immediate press (:active) + confirmed drag , shrink into the rail + soft ring. */
[data-slot="wensity-slider-thumb"]:active,
[data-slot="wensity-slider-thumb"][data-dragging] {
  scale: 0.92;
  box-shadow:
    0 0 0 4px color-mix(in srgb, var(--primitive-ring, var(--foreground)) 28%, transparent),
    0 2px 10px rgba(0, 0, 0, 0.4);
}
@media (prefers-reduced-motion: reduce) {
  [data-slot="wensity-slider-thumb"],
  [data-slot="wensity-slider-bubble"] {
    transition-duration: 0ms !important;
  }
  [data-slot="wensity-slider-thumb"]:active,
  [data-slot="wensity-slider-thumb"][data-dragging] {
    /* Keep the ring (state), drop movement. */
    scale: 1;
  }
}

`;

if (typeof document !== "undefined" && !document.getElementById(WENSITY_STYLE_ID)) {
  const style = document.createElement("style");
  style.id = WENSITY_STYLE_ID;
  style.textContent = WENSITY_STYLES;
  document.head.appendChild(style);
}

export type SliderSize = "sm" | "md" | "lg";
export type SliderTone = "neutral" | "brand";

/** Control height matches the thumb so Base UI `top: 50%` + `translate: -50%` lands on the rail. */
const CONTROL_SIZES: Record<SliderSize, string> = {
  sm: "h-5",
  md: "h-6",
  lg: "h-7",
};

const TRACK_SIZES: Record<SliderSize, string> = {
  sm: "h-2",
  md: "h-2.5",
  lg: "h-3",
};

const THUMB_SIZES: Record<SliderSize, string> = {
  sm: "size-5",
  md: "size-6",
  lg: "size-7",
};

const FILL_TONES: Record<SliderTone, string> = {
  neutral:
    "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--foreground)_72%,transparent),color-mix(in_srgb,var(--foreground)_92%,transparent))]",
  // Theme accent, follows `--primitive-control-solid` from create-preset / host theme.
  brand: "bg-[color:var(--primitive-control-solid,var(--primary))]",
};

function computeMinSteps(minDistance: number, step: number) {
  if (!minDistance || minDistance <= 0 || step <= 0) return 0;
  return Math.max(0, Math.round(minDistance / step));
}

function bubbleClasses() {
  return cn(
    // Horizontal centering only, vertical lift lives in globals.css so it can
    // animate on drag/focus without fighting Base UI’s thumb `translate`.
    "absolute left-1/2 top-0 -translate-x-1/2",
    "rounded-[var(--primitive-radius-control-sm,0.625rem)]",
    "border border-[var(--border)] bg-[color:var(--primitive-surface-overlay,var(--popover))]",
    "px-2 py-0.5 text-[11px] font-medium tabular-nums",
    "text-[var(--foreground)] shadow-[var(--primitive-shadow-overlay,0_1px_2px_rgba(0,0,0,0.08),0_18px_48px_-24px_rgba(0,0,0,0.4))]",
  );
}

function thumbClasses(size: SliderSize) {
  return cn(
    // Do not set top / translate here, Base UI owns cross-axis geometry via
    // inline `top: 50%` + CSS `translate: -50% -50%` against Slider.Control.
    // Grab scale/ring lives in globals.css ([data-dragging] / :active).
    // Thumb stays neutral white/black via foreground, only the fill follows theme color.
    "box-border shrink-0 rounded-full",
    "border-2 border-[var(--background)] bg-[var(--foreground)]",
    "shadow-[0_1px_4px_rgba(0,0,0,0.35)]",
    "outline-none",
    "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-[var(--background)]",
    "cursor-grab data-[dragging]:cursor-grabbing",
    "data-disabled:cursor-not-allowed",
    THUMB_SIZES[size],
  );
}

function trackClasses(size: SliderSize) {
  return cn(
    "relative w-full grow rounded-full",
    "bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]",
    "data-disabled:cursor-not-allowed",
    TRACK_SIZES[size],
  );
}

function controlClasses(size: SliderSize) {
  return cn(
    "relative flex w-full touch-none items-center select-none",
    CONTROL_SIZES[size],
  );
}

function rootClasses(disabled: boolean | undefined, className: string | undefined) {
  return cn(
    "relative w-full select-none touch-none",
    "focus-visible:outline-none",
    disabled && "opacity-45 pointer-events-none",
    className,
  );
}

function ThumbBubble({
  showValue,
  display,
  index,
}: {
  showValue: boolean;
  display: (v: number) => string;
  index?: number;
}) {
  if (!showValue) return null;
  return (
    <span data-slot="wensity-slider-bubble" className={bubbleClasses()}>
      <BaseSlider.Value className="text-inherit">
        {(_formatted, values) => display(values[index ?? 0] ?? 0)}
      </BaseSlider.Value>
    </span>
  );
}

/* ─── <Slider>, single thumb ───────────────────────────────── */

export interface SliderProps {
  className?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderSize;
  tone?: SliderTone;
  disabled?: boolean;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  onValueChange?: (value: number) => void;
  onValueCommit?: (value: number) => void;
  /** Alias of `onValueCommit` matching Base UI's naming. */
  onValueCommitted?: (value: number) => void;
  label?: string;
  name?: string;
  id?: string;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      value,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      size = "md",
      // Match Progress / Switch / Button primary, theme color drives the fill.
      tone = "brand",
      disabled = false,
      showValue = true,
      formatValue,
      onValueChange,
      onValueCommit,
      onValueCommitted,
      label = "Slider",
      name,
      id,
    },
    ref,
  ) => {
    const display = (v: number) => (formatValue ? formatValue(v) : `${Math.round(v)}`);

    return (
      <BaseSlider.Root
        data-wensity-primitive=""
        ref={ref}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        name={name}
        id={id}
        onValueChange={(next) => onValueChange?.(next as number)}
        onValueCommitted={(next) => {
          const numeric = next as number;
          onValueCommit?.(numeric);
          onValueCommitted?.(numeric);
        }}
        className={rootClasses(disabled, className)}
      >
        {/*
          Control height === thumb size. Thumb is a sibling of Track so its
          containing block is Control (not the thin rail). Base UI then centers
          the thumb on the control midline, which coincides with the track.
        */}
        <BaseSlider.Control className={controlClasses(size)}>
          <BaseSlider.Track className={trackClasses(size)}>
            <BaseSlider.Indicator
              className={cn("absolute inset-y-0 left-0 rounded-full", FILL_TONES[tone])}
            />
          </BaseSlider.Track>
          <BaseSlider.Thumb
            data-slot="wensity-slider-thumb"
            getAriaLabel={() => label}
            className={thumbClasses(size)}
          >
            <ThumbBubble showValue={showValue} display={display} />
          </BaseSlider.Thumb>
        </BaseSlider.Control>
      </BaseSlider.Root>
    );
  },
);
Slider.displayName = "Slider";

/* ─── <SliderRange>, dual thumb ────────────────────────────── */

export interface SliderRangeProps {
  className?: string;
  value?: [number, number];
  defaultValue?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  minDistance?: number;
  size?: SliderSize;
  tone?: SliderTone;
  disabled?: boolean;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  onValueChange?: (value: [number, number]) => void;
  onValueCommit?: (value: [number, number]) => void;
  /** Alias of `onValueCommit` matching Base UI's naming. */
  onValueCommitted?: (value: [number, number]) => void;
  label?: string;
  name?: string;
  id?: string;
}

export const SliderRange = React.forwardRef<HTMLDivElement, SliderRangeProps>(
  (
    {
      className,
      value,
      defaultValue = [25, 75],
      min = 0,
      max = 100,
      step = 1,
      minDistance = 0,
      size = "md",
      tone = "brand",
      disabled = false,
      showValue = true,
      formatValue,
      onValueChange,
      onValueCommit,
      onValueCommitted,
      label = "Range slider",
      name,
      id,
    },
    ref,
  ) => {
    const minStepsBetweenValues = computeMinSteps(minDistance, step);
    const display = (v: number) => (formatValue ? formatValue(v) : `${Math.round(v)}`);

    return (
      <BaseSlider.Root
        data-wensity-primitive=""
        ref={ref}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        min={min}
        max={max}
        step={step}
        minStepsBetweenValues={minStepsBetweenValues}
        disabled={disabled}
        name={name}
        id={id}
        onValueChange={(next) => onValueChange?.(next as [number, number])}
        onValueCommitted={(next) => {
          const range = next as [number, number];
          onValueCommit?.(range);
          onValueCommitted?.(range);
        }}
        className={rootClasses(disabled, className)}
      >
        <BaseSlider.Control className={controlClasses(size)}>
          <BaseSlider.Track className={trackClasses(size)}>
            <BaseSlider.Indicator
              className={cn("absolute inset-y-0 rounded-full", FILL_TONES[tone])}
            />
          </BaseSlider.Track>
          <BaseSlider.Thumb
            index={0}
            data-slot="wensity-slider-thumb"
            getAriaLabel={() => `${label} minimum`}
            className={thumbClasses(size)}
          >
            <ThumbBubble showValue={showValue} display={display} index={0} />
          </BaseSlider.Thumb>
          <BaseSlider.Thumb
            index={1}
            data-slot="wensity-slider-thumb"
            getAriaLabel={() => `${label} maximum`}
            className={thumbClasses(size)}
          >
            <ThumbBubble showValue={showValue} display={display} index={1} />
          </BaseSlider.Thumb>
        </BaseSlider.Control>
      </BaseSlider.Root>
    );
  },
);
SliderRange.displayName = "SliderRange";
