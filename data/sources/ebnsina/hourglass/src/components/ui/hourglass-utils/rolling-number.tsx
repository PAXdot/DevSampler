"use client";

import { useEffect, useRef, useState } from "react";

interface RollingNumberProps {
  /** A number, or text you've already formatted ("18px", "40 days"): its digits roll either way. */
  value: number | string;
  /** Intl.NumberFormat options for a number value: percent, currency, units, decimals. */
  format?: Intl.NumberFormatOptions;
  locales?: Intl.LocalesArgument;
  className?: string;
}

export default function RollingNumber({ value, format, locales, className }: RollingNumberProps) {
  const text = typeof value === "string" ? value : new Intl.NumberFormat(locales, format).format(value);
  // Keyed from the right, so the ones stay the ones when 99 becomes 100 and only the new digit enters.
  const all = [...text];
  const chars = all.map((c, i) => ({ c, key: all.length - i, digit: /[0-9]/.test(c) ? +c : -1 }));

  // Digits that appear later roll up from 0; the ones in the first render stay still.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  // Always rolls, at the pace values arrive: a lone change takes the full 600ms, quick repeats roll
  // quicker (picking up mid-roll), and a timer's rapid ticks are near-instant rather than churning.
  const changedAtRef = useRef(-Infinity);
  const prevTextRef = useRef<string | null>(null);
  const rollRef = useRef(600);
  if (prevTextRef.current !== text) {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    const gap = now - changedAtRef.current;
    rollRef.current = gap < 120 ? 0 : Math.min(600, Math.round(gap * 0.8));
    changedAtRef.current = now;
    prevTextRef.current = text;
  }
  const roll = rollRef.current;

  return (
    // Every visible character is CSS generated content, so the only real text is the value itself:
    // copying, find-in-page and screen readers all get the actual value, never the digit strips.
    <span
      className={["rolling", ready && "ready", className].filter(Boolean).join(" ")}
      style={{ "--roll": `${roll}ms` } as React.CSSProperties}
    >
      <span className="sr-only">{text}</span>
      <span className="chars" aria-hidden="true">
        {chars.map(({ c, key, digit }) =>
          digit >= 0 ? (
            <span className="digit" data-c={c} key={key}>
              <span className="strip" style={{ "--d": digit } as React.CSSProperties}></span>
            </span>
          ) : (
            <span data-c={c} key={key}></span>
          )
        )}
      </span>
    </span>
  );
}
