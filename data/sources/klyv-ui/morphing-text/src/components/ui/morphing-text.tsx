"use client";

import { useEffect, useId, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The elevation tokens, written as `shadow-[var(--shadow-card)]`.
 *
 * tailwind-merge cannot tell from `var(…)` alone whether that is a shadow or a
 * shadow *colour*, and it guessed colour. So `shadow-[var(--shadow-card)]
 * shadow-none` kept both classes and the shadow stayed, while a colour tweak —
 * `shadow-black/20` — silently deleted the elevation. The token names settle
 * it: anything in the `--shadow-` family is a shadow.
 */
const isShadowToken = (value: string) =>
  /^\[var\(--shadow-[\w-]+\)\]$/.test(value);

const merge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [{ shadow: [isShadowToken] }],
    },
  },
});

/** Merge conditional class names, letting later Tailwind utilities win. */
function cn(...inputs: ClassValue[]): string {
  return merge(clsx(inputs));
}

/** Whether the user has asked for reduced motion. */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export type MorphingTextAccessibleText = "list" | "first";

export interface MorphingTextProps {
  /** The words to cycle through, in order. The first one is what reduced motion shows. */
  words: string[];
  /** Milliseconds each word rests before morphing into the next. */
  interval?: number;
  /** Milliseconds the morph itself takes. */
  morphDuration?: number;
  /**
   * What assistive tech reads in place of the animation: every word as one
   * list, or only the first. It is read once, where it sits, and never repeated.
   */
  accessibleText?: MorphingTextAccessibleText;
  /**
   * Also announce each new word through a polite live region. Off by default,
   * because a phrase that talks every two seconds is noise.
   */
  announce?: boolean;
  /** Merged last, so it wins. Size and weight come from here or the surrounding text. */
  className?: string;
}

/**
 * One word melting into the next, for a hero line that has more than one ending.
 *
 * The morph is the gooey-text trick: both words blur in opposite directions
 * and an SVG alpha-threshold filter on their shared parent snaps the blur back
 * to hard edges, so the letters appear to flow into each other rather than
 * cross-fade. It is driven by one animation frame loop writing styles straight
 * onto the two spans, so the page does not re-render sixty times a second.
 *
 * The moving text is hidden from assistive tech. In its place sits the full
 * list of words, read once, because a screen reader that announced every
 * change would talk over everything else on the page; `announce` turns that on
 * for the rare case where the current word is the information. Under reduced
 * motion the first word simply stays.
 */
export function MorphingText({
  words,
  interval = 2200,
  morphDuration = 900,
  accessibleText = "list",
  announce = false,
  className,
}: MorphingTextProps) {
  const filterId = `klyv-morph-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const reducedMotion = usePrefersReducedMotion();
  const firstRef = useRef<HTMLSpanElement>(null);
  const secondRef = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const key = words.join("\u0000");
  const animated = !reducedMotion && words.length > 1;

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;
    if (!animated || !first || !second) return;

    let index = 0;
    let morph = 0;
    let rest = interval;
    let last = performance.now();
    let frame = 0;

    const settle = () => {
      first.textContent = words[index % words.length]!;
      first.style.filter = "";
      first.style.opacity = "1";
      second.style.filter = "";
      second.style.opacity = "0";
    };

    const blend = (fraction: number) => {
      first.textContent = words[index % words.length]!;
      second.textContent = words[(index + 1) % words.length]!;
      const out = 1 - fraction;
      second.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      second.style.opacity = `${Math.pow(fraction, 0.4)}`;
      first.style.filter = `blur(${Math.min(8 / out - 8, 100)}px)`;
      first.style.opacity = `${Math.pow(out, 0.4)}`;
    };

    const step = (now: number) => {
      // A tab in the background delivers one huge delta when it returns.
      const delta = Math.min(now - last, 100);
      last = now;
      if (rest > 0) {
        rest -= delta;
      } else {
        morph += delta;
        const fraction = morph / morphDuration;
        if (fraction >= 1) {
          index = (index + 1) % words.length;
          morph = 0;
          rest = interval;
          settle();
          setCurrent(index);
        } else {
          blend(fraction);
        }
      }
      frame = requestAnimationFrame(step);
    };

    settle();
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      settle();
    };
    // `key` stands in for `words`, so a new array with the same words does not restart the loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated, interval, morphDuration, key]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const spoken =
    accessibleText === "list" ? words.join(", ") : (words[0] ?? "");

  return (
    <span
      className={cn(
        "relative inline-block whitespace-nowrap align-baseline",
        className,
      )}
    >
      <span className="sr-only">{spoken}</span>
      {announce && (
        <span className="sr-only" role="status" aria-live="polite">
          {words[current]}
        </span>
      )}
      <span aria-hidden="true" className="invisible">
        {reducedMotion ? words[0] : longest}
      </span>
      {animated ? (
        // Both spans are written to directly by the loop, so React never renders text into them.
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{ filter: `url(#${filterId}) blur(0.4px)` }}
        >
          <span
            ref={firstRef}
            className="absolute inset-x-0 top-0 text-center"
          />
          <span
            ref={secondRef}
            className="absolute inset-x-0 top-0 text-center opacity-0"
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 text-center"
        >
          {words[0]}
        </span>
      )}
      {animated && (
        <svg aria-hidden="true" className="absolute size-0">
          <defs>
            <filter id={filterId}>
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
      )}
    </span>
  );
}

export default MorphingText;
