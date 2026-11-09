"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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

/** True once the element has entered the viewport. Never flips back. */
function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    // Content that is already on screen is shown at once rather than on the
    // observer's first callback. Two reasons: above-the-fold content should
    // not wait on an async hop to become visible, and where
    // IntersectionObserver is missing or its delivery is starved, waiting
    // means the content never appears at all.
    const box = node.getBoundingClientRect();
    const onScreen =
      box.top < window.innerHeight &&
      box.bottom > 0 &&
      box.width + box.height > 0;
    if (onScreen || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
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

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

const HIDDEN: Record<RevealDirection, string> = {
  up: "translate-y-4",
  down: "-translate-y-4",
  left: "translate-x-4",
  right: "-translate-x-4",
  none: "",
};

export interface RevealProps {
  /** Content that fades in once it is on screen. */
  children: ReactNode;
  direction?: RevealDirection;
  /** Milliseconds to wait after entering the viewport. */
  delay?: number;
  /** Milliseconds the fade takes. */
  duration?: number;
  /** Merged last, so it wins. */
  className?: string;
}

/**
 * Fades and slides content in as it scrolls into view, once.
 *
 * Under prefers-reduced-motion the content is simply present from the start —
 * not merely faster, but absent of movement, which is the whole point of the
 * preference. Content is never hidden from assistive tech while waiting.
 */
function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const shown = inView || reduced;

  return (
    <div
      ref={ref}
      style={
        reduced
          ? undefined
          : {
              transitionDuration: `${duration}ms`,
              transitionDelay: `${delay}ms`,
            }
      }
      className={cn(
        "transition-all ease-out",
        shown
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn("opacity-0", HIDDEN[direction]),
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Reveal;
