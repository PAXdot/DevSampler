"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

import { cn } from "@/lib/utils";

/* Ripple button family: 5 variations on a wave or ring spreading from the click. All are sized, use framer-motion, take colour ONLY from tokens (the wave colour is primary-foreground -> visible over the button in both themes) and have no wave under reduced-motion. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const sizes: Record<StyledSize, string> = {
  sm: "h-8 gap-1.5 rounded-md px-3 text-sm",
  md: "h-9 gap-2 rounded-lg px-4 text-sm",
  lg: "h-10 gap-2 rounded-lg px-5 text-sm",
  xl: "h-12 gap-2.5 rounded-xl px-6 text-base",
};

const base =
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-primary font-medium whitespace-nowrap text-primary-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none";

type Click = { id: number; x: number; y: number };

function useClicks(reduce: boolean, ttl: number) {
  const [clicks, setClicks] = React.useState<Click[]>([]);
  const idRef = React.useRef(0);
  const spawn = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const id = idRef.current++;
    setClicks((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(
      () => setClicks((prev) => prev.filter((c) => c.id !== id)),
      ttl,
    );
  };
  return { clicks, spawn };
}

type Props = React.ComponentProps<"button"> & { size?: StyledSize };

/* Ripple: tiklama noktasindan buyuyup sonen dolu daire (Material). */
export function RippleButton({
  className,
  size = "md",
  children,
  onPointerDown,
  ...props
}: Props) {
  const reduce = useReducedMotion();
  const { clicks, spawn } = useClicks(!!reduce, 620);
  return (
    <button
      data-slot="styled-button"
      onPointerDown={(e) => {
        spawn(e);
        onPointerDown?.(e);
      }}
      className={cn(base, sizes[size], className)}
      {...props}
    >
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.span
            key={c.id}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-primary-foreground/40"
            style={{ left: c.x, top: c.y }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
            animate={{ width: 260, height: 260, x: -130, y: -130, opacity: 0 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

/* Echo: a single thin ring spreading from the click (not filled). */
export function EchoButton({
  className,
  size = "md",
  children,
  onPointerDown,
  ...props
}: Props) {
  const reduce = useReducedMotion();
  const { clicks, spawn } = useClicks(!!reduce, 640);
  return (
    <button
      data-slot="styled-button"
      onPointerDown={(e) => {
        spawn(e);
        onPointerDown?.(e);
      }}
      className={cn(base, sizes[size], className)}
      {...props}
    >
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.span
            key={c.id}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full border-2 border-primary-foreground/60"
            style={{ left: c.x, top: c.y }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.7 }}
            animate={{ width: 220, height: 220, x: -110, y: -110, opacity: 0 }}
            transition={{ duration: 0.64, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

/* Sonar: tiklamada ust uste 3 halka kademeli yayilir. */
export function SonarButton({
  className,
  size = "md",
  children,
  onPointerDown,
  ...props
}: Props) {
  const reduce = useReducedMotion();
  const { clicks, spawn } = useClicks(!!reduce, 900);
  return (
    <button
      data-slot="styled-button"
      onPointerDown={(e) => {
        spawn(e);
        onPointerDown?.(e);
      }}
      className={cn(base, sizes[size], className)}
      {...props}
    >
      <AnimatePresence>
        {clicks.map((c) => (
          <span
            key={c.id}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{ left: c.x, top: c.y }}
          >
            {[0, 0.12, 0.24].map((delay) => (
              <motion.span
                key={delay}
                className="absolute rounded-full border border-primary-foreground/50"
                initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.6 }}
                animate={{
                  width: 200,
                  height: 200,
                  x: -100,
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay }}
              />
            ))}
          </span>
        ))}
      </AnimatePresence>
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

/* Ping: a token ring repeating continuously around the button (to draw attention). */
export function PingButton({
  className,
  size = "md",
  children,
  ...props
}: HTMLMotionProps<"button"> & { size?: StyledSize }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-flex">
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-primary"
          animate={{ scale: [1, 1.25], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
        />
      )}
      <motion.button
        data-slot="styled-button"
        whileTap={reduce ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(base, sizes[size], "overflow-visible", className)}
        {...props}
      >
        <span className="relative flex items-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    </span>
  );
}

/* Flash: tiklamada buton kisa sure parlar (foreground overlay). */
export function FlashButton({
  className,
  size = "md",
  children,
  onPointerDown,
  ...props
}: Props) {
  const reduce = useReducedMotion();
  const { clicks, spawn } = useClicks(!!reduce, 360);
  return (
    <button
      data-slot="styled-button"
      onPointerDown={(e) => {
        spawn(e);
        onPointerDown?.(e);
      }}
      className={cn(base, sizes[size], className)}
      {...props}
    >
      <AnimatePresence>
        {clicks.map((c) => (
          <motion.span
            key={c.id}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-primary-foreground/30"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.34, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

export default RippleButton;
