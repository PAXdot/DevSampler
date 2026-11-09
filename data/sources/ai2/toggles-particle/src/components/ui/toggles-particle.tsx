"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Particle toggle family: 5 decorative switches. role="switch", keyboard accessible.
   Color comes ONLY from tokens. The thumb slides with the framer-motion `layout`;
   under reduced-motion it switches instantly and the particle/trail effects are
   disabled. Used uncontrolled (defaultChecked) or controlled
   (checked/onCheckedChange). */

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

/* Deterministik tanecik yonleri (radyan). */
const BURST = [-1.1, -0.55, 0, 0.55, 1.1, Math.PI];

/* Particle: acilinca basparmaktan token tanecikleri fisikirir. */
export function ParticleToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const reduce = useReducedMotion();
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
        className={cn(
          thumbSize[size],
          "relative rounded-full bg-background shadow-sm",
        )}
      >
        <AnimatePresence>
          {on && !reduce && (
            <span className="pointer-events-none absolute inset-0" aria-hidden>
              {BURST.map((angle, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                  initial={{ opacity: 0.9, x: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    x: Math.cos(angle) * 12,
                    y: Math.sin(angle) * 12,
                    scale: 0.4,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}
            </span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}

/* Spark: the thumb leaves a spark trail behind it as it slides. */
export function SparkToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const reduce = useReducedMotion();
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
      <AnimatePresence>
        {on && !reduce && (
          <motion.span
            key="spark"
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-2 h-0.5 w-6 -translate-y-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, var(--info))",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <motion.span
        layout
        transition={spring}
        className={cn(
          thumbSize[size],
          "relative z-10 rounded-full bg-background shadow-sm",
        )}
      />
    </button>
  );
}

/* Trail: basparmagin arkasinda solan token izi. */
export function TrailToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const reduce = useReducedMotion();
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
        "overflow-hidden rounded-full transition-colors",
        on ? "justify-end bg-success" : "justify-start bg-input",
        props.className,
      )}
      {...stripToggleProps(props)}
    >
      <AnimatePresence>
        {on && !reduce && (
          <motion.span
            key="trail"
            aria-hidden
            className="pointer-events-none absolute inset-y-1 left-1 rounded-full"
            style={{
              background:
                "color-mix(in oklab, var(--success) 55%, transparent)",
            }}
            initial={{ opacity: 0.7, width: "80%" }}
            animate={{ opacity: 0, width: "18%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      <motion.span
        layout
        transition={spring}
        className={cn(
          thumbSize[size],
          "relative z-10 rounded-full bg-background shadow-sm",
        )}
      />
    </button>
  );
}

/* Deterministik konfeti ofsetleri. */
const CONFETTI = [
  { x: -10, y: -9, r: -30 },
  { x: -4, y: -12, r: 20 },
  { x: 3, y: -11, r: -12 },
  { x: 9, y: -8, r: 40 },
  { x: 12, y: -3, r: -20 },
];

/* Confetti: acilinca basparmaktan minik token konfetileri firlar. */
export function ConfettiToggle(props: ToggleProps) {
  const { on, toggle, spring } = useToggle(props);
  const reduce = useReducedMotion();
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
        className={cn(
          thumbSize[size],
          "relative rounded-full bg-background shadow-sm",
        )}
      >
        <AnimatePresence>
          {on && !reduce && (
            <span className="pointer-events-none absolute inset-0" aria-hidden>
              {CONFETTI.map((c, i) => (
                <motion.span
                  key={i}
                  className={cn(
                    "absolute top-1/2 left-1/2 h-1.5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-[1px]",
                    i % 2 === 0 ? "bg-primary" : "bg-success",
                  )}
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={{ opacity: 0, x: c.x, y: c.y, rotate: c.r }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}

/* Comet: the thumb, like a comet with a tail. */
export function CometToggle(props: ToggleProps) {
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
        "overflow-hidden rounded-full transition-colors",
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
          "relative rounded-full bg-background shadow-sm",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-1/2 right-full h-1 w-5 -translate-y-1/2 rounded-full transition-opacity duration-300",
            on ? "opacity-100" : "opacity-0",
          )}
          style={{
            background: "linear-gradient(90deg, transparent, var(--info))",
          }}
        />
      </motion.span>
    </button>
  );
}

export default ParticleToggle;
