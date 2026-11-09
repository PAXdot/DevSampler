"use client";

import * as React from "react";
import { Check, Moon, Sun, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Toggle family: 5 decorative switches. role="switch", keyboard accessible. Color
   comes ONLY from tokens. Size = the track scale. The thumb slides with the
   framer-motion `layout`; it switches instantly under reduced-motion. Used
   uncontrolled (defaultChecked) or controlled. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const trackSize: Record<StyledSize, string> = {
  sm: "h-5 w-9 p-0.5",
  md: "h-6 w-11 p-0.5",
  lg: "h-7 w-[52px] p-1",
  xl: "h-8 w-[60px] p-1",
};
const thumbSize: Record<StyledSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
};

const trackBase =
  "relative inline-flex shrink-0 cursor-pointer items-center outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50";

interface ToggleProps extends Omit<React.ComponentProps<"button">, "onChange"> {
  size?: StyledSize;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function useToggle(props: ToggleProps) {
  const { checked, defaultChecked, onCheckedChange } = props;
  const reduce = useReducedMotion();
  const [internal, setInternal] = React.useState(defaultChecked ?? false);
  const on = checked ?? internal;
  const toggle = () => {
    if (checked === undefined) setInternal((v) => !v);
    onCheckedChange?.(!on);
  };
  const spring = reduce
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 500, damping: 30 } as const);
  return { on, toggle, spring };
}

function stripToggleProps(props: ToggleProps) {
  const {
    checked,
    defaultChecked,
    onCheckedChange,
    size,
    className,
    children,
    ...rest
  } = props;
  return rest;
}

/* iOS: klasik pill + yuvarlak basparmak. */
export function IOSToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const size = props.size ?? "md";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="styled-toggle"
      onClick={toggle}
      className={cn(
        trackBase,
        trackSize[size],
        "rounded-full transition-colors",
        on ? "justify-end bg-primary" : "justify-start bg-input",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      <motion.span
        layout
        transition={spring}
        className={cn(thumbSize[size], "rounded-full bg-background shadow-sm")}
      />
    </button>
  );
}

/* Square: koseli iz + kare basparmak. */
export function SquareToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const size = props.size ?? "md";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="styled-toggle"
      onClick={toggle}
      className={cn(
        trackBase,
        trackSize[size],
        "rounded-md transition-colors",
        on ? "justify-end bg-primary" : "justify-start bg-input",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      <motion.span
        layout
        transition={spring}
        className={cn(thumbSize[size], "rounded-[3px] bg-background shadow-sm")}
      />
    </button>
  );
}

/* Icon: basparmakta gunes/ay ikonu (tema anahtari hissi). */
export function IconToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const size = props.size ?? "md";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="styled-toggle"
      onClick={toggle}
      className={cn(
        trackBase,
        trackSize[size],
        "rounded-full transition-colors",
        on ? "justify-end bg-info" : "justify-start bg-input",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      <motion.span
        layout
        transition={spring}
        className={cn(
          thumbSize[size],
          "flex items-center justify-center rounded-full bg-background text-foreground [&_svg]:size-2/3",
        )}
      >
        {on ? <Moon /> : <Sun />}
      </motion.span>
    </button>
  );
}

/* Glow: acikken basparmak token isima yayar. */
export function GlowToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const size = props.size ?? "md";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="styled-toggle"
      onClick={toggle}
      className={cn(
        trackBase,
        trackSize[size],
        "rounded-full transition-colors",
        on ? "justify-end bg-success" : "justify-start bg-input",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      <motion.span
        layout
        transition={spring}
        className={cn(
          thumbSize[size],
          "rounded-full bg-background",
          on && "shadow-[0_0_10px_1px_var(--success)]",
        )}
      />
    </button>
  );
}

/* Labeled: iz icinde ON/OFF + isaret ikonu. */
export function LabeledToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const size = props.size ?? "lg";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="styled-toggle"
      onClick={toggle}
      className={cn(
        trackBase,
        "h-7 w-16 p-1 text-[10px] font-semibold lg:text-xs",
        "rounded-full transition-colors",
        on
          ? "justify-end bg-primary text-primary-foreground"
          : "justify-start bg-input text-muted-foreground",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      {on && <span className="absolute left-2 tracking-wide">ON</span>}
      {!on && <span className="absolute right-2 tracking-wide">OFF</span>}
      <motion.span
        layout
        transition={spring}
        className="relative flex size-5 items-center justify-center rounded-full bg-background text-foreground [&_svg]:size-3"
      >
        {on ? <Check /> : <X />}
      </motion.span>
    </button>
  );
}

export default IOSToggle;
