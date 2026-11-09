"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextCycleProps {
  /** Words to cycle through. */
  words?: string[];
  /** Hold time per word before advancing, in milliseconds. */
  interval?: number;
  /** Outer layout class (size, weight, tracking, color). */
  className?: string;
  /** Class applied to each character. */
  charClassName?: string;
  /** Pause the cycle. */
  paused?: boolean;
}

const DEFAULT_WORDS = ["engineer", "developer", "designer"] as const;

let graphemeSegmenter: Intl.Segmenter | null = null;

function getGraphemeSegmenter(): Intl.Segmenter | null {
  if (typeof Intl === "undefined" || !("Segmenter" in Intl)) return null;
  graphemeSegmenter ??= new Intl.Segmenter("en", { granularity: "grapheme" });
  return graphemeSegmenter;
}

function splitIntoCharacters(value: string): string[] {
  const segmenter = getGraphemeSegmenter();
  if (segmenter) {
    return Array.from(segmenter.segment(value), ({ segment }) => segment);
  }
  return Array.from(value);
}

/**
 * TextCycle
 *
 * Cycles words on an interval with a per-character blur + slide stagger on
 * enter and exit. Reduced-motion safe: shows the current word statically.
 */
export function TextCycle({
  words: wordsProp,
  interval = 2500,
  className,
  charClassName,
  paused = false,
}: TextCycleProps) {
  const words = React.useMemo(() => {
    const cleaned = (wordsProp ?? [...DEFAULT_WORDS])
      .map((word) => word.trim())
      .filter(Boolean);
    return cleaned.length > 0 ? cleaned : [...DEFAULT_WORDS];
  }, [wordsProp]);

  const [index, setIndex] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  React.useEffect(() => {
    if (paused || reduceMotion || words.length <= 1) return;

    const hold = Math.max(400, interval);
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, hold);

    return () => window.clearInterval(timer);
  }, [interval, paused, reduceMotion, words.length]);

  const safeIndex = index % words.length;
  const current = words[safeIndex] ?? "";
  const chars = splitIntoCharacters(current);

  if (reduceMotion) {
    return (
      <span className={cn("inline-flex", className)} aria-live="polite" aria-atomic="true">
        {current}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex", className)}>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {current}
      </span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={safeIndex}
          className="inline-flex gap-[0.5px] py-[0.12em] leading-none"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          {chars.map((char, i) => (
            <motion.span
              key={`${safeIndex}-${i}`}
              className={cn("inline-block", charClassName)}
              initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -5, filter: "blur(5px)" }}
              transition={{
                delay: i * 0.03,
                duration: 0.3,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
