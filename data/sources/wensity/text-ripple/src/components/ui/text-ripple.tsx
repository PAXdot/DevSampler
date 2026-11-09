"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextRippleProps {
  /** The string to render. */
  text: string;
  /** Tag rendered as the outer element. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Crest travel duration for one character, in seconds. Default: 1 */
  duration?: number;
  /** Forward depth of the crest in CSS pixels. Default: 10 */
  zDistance?: number;
  /** Lateral nudge of the crest in CSS pixels. Default: 2 */
  xDistance?: number;
  /** Vertical nudge of the crest in CSS pixels. Default: -2 */
  yDistance?: number;
  /**
   * How tightly the crest packs across characters (0.4–3).
   * Higher = faster stagger + shorter hold between loops.
   */
  spread?: number;
  /** Peak scale at the crest. Default: 1.1 */
  scaleDistance?: number;
  /** Peak Y rotation at the crest, in degrees. Default: 10 */
  rotateYDistance?: number;
  /** Resting fill color. Omit for theme-aware muted zinc. */
  baseColor?: string;
  /** Crest highlight color. Omit for theme-aware foreground. */
  rippleColor?: string;
  /**
   * Force the infinite loop paused. When omitted, auto-pauses off-screen
   * or when the tab is hidden.
   */
  paused?: boolean;
  /** Optional Tailwind class for size, weight, tracking, etc. */
  className?: string;
}

const BASE_STYLE_ID = "wensity-text-ripple-base";
const registeredCycles = new Set<string>();

function isCombiningMark(codePoint: number): boolean {
  return (
    (codePoint >= 0x0300 && codePoint <= 0x036f) ||
    (codePoint >= 0x1ab0 && codePoint <= 0x1aff) ||
    (codePoint >= 0x1dc0 && codePoint <= 0x1dff) ||
    (codePoint >= 0x20d0 && codePoint <= 0x20ff) ||
    (codePoint >= 0xfe20 && codePoint <= 0xfe2f)
  );
}

function isGraphemeExtender(codePoint: number): boolean {
  return (
    isCombiningMark(codePoint) ||
    (codePoint >= 0xfe00 && codePoint <= 0xfe0f) ||
    (codePoint >= 0xe0100 && codePoint <= 0xe01ef) ||
    (codePoint >= 0x1f3fb && codePoint <= 0x1f3ff)
  );
}

function isRegionalIndicator(codePoint: number): boolean {
  return codePoint >= 0x1f1e6 && codePoint <= 0x1f1ff;
}

/**
 * Keep the initial server and client trees identical without relying on
 * environment-specific Intl.Segmenter support. This covers the grapheme
 * sequences headlines commonly contain while keeping the shipped source
 * dependency-free.
 */
function splitIntoCharacters(value: string): string[] {
  const codePoints = Array.from(value);
  const characters: string[] = [];
  let regionalIndicatorCount = 0;

  for (const character of codePoints) {
    const codePoint = character.codePointAt(0) ?? 0;
    const previous = characters.at(-1);
    const followsJoiner = previous?.endsWith("\u200d") ?? false;
    const joinsPrevious =
      previous !== undefined &&
      (codePoint === 0x200d ||
        followsJoiner ||
        isGraphemeExtender(codePoint) ||
        (isRegionalIndicator(codePoint) && regionalIndicatorCount % 2 === 1));

    if (joinsPrevious) {
      characters[characters.length - 1] += character;
    } else {
      characters.push(character);
    }

    regionalIndicatorCount = isRegionalIndicator(codePoint)
      ? regionalIndicatorCount + 1
      : 0;
  }

  return characters;
}

type WordChars = {
  characters: string[];
  needsSpace: boolean;
};

function buildWords(text: string): WordChars[] {
  const words = text.length > 0 ? text.split(" ") : [""];
  return words.map((word, i) => ({
    characters: splitIntoCharacters(word.length > 0 ? word : "\u00A0"),
    needsSpace: i !== words.length - 1,
  }));
}

function cycleKey(peakAt: number, activeEnd: number): string {
  return `${peakAt}_${activeEnd}`.replace(/\./g, "_");
}

/**
 * TextRipple
 *
 * Per-character 3D crest that travels through a headline — lift, slight
 * yaw, and a color flash. CSS keyframes only (no Motion / rAF). Stagger
 * is pure `animation-delay`; the hold between loops is baked into the
 * keyframe table so every glyph shares one compositor timeline.
 *
 * Motion contract:
 * - Animates `transform` + `color` only (GPU-friendly).
 * - Auto-pauses off-screen / hidden tabs via `animation-play-state`.
 * - Honours `prefers-reduced-motion` with a static highlight fill.
 */
export function TextRipple({
  text,
  as = "span",
  duration = 1,
  zDistance = 10,
  xDistance = 2,
  yDistance = -2,
  spread = 1,
  scaleDistance = 1.1,
  rotateYDistance = 10,
  baseColor,
  rippleColor,
  paused,
  className,
}: TextRippleProps) {
  const nodeRef = React.useRef<HTMLElement | null>(null);
  const pausedPropRef = React.useRef(paused);
  const inViewRef = React.useRef(true);
  pausedPropRef.current = paused;

  const safeDuration = Math.max(0.35, duration);
  const safeSpread = Math.min(3, Math.max(0.4, spread));
  const words = buildWords(text);
  const count = Math.max(
    1,
    words.reduce((sum, word) => sum + word.characters.length, 0),
  );

  // Match the reference timing model, but encode the hold in keyframes
  // so CSS can loop without Motion's per-instance repeatDelay.
  const stagger = (safeDuration * (1 / safeSpread)) / count;
  const hold = (count * 0.05) / safeSpread;
  const staggerWindow = (count - 1) * stagger;
  const cycle = staggerWindow + safeDuration + hold;
  const activeEnd = Math.round((safeDuration / cycle) * 1000) / 10;
  const peakAt = Math.max(1, Math.round((activeEnd / 2) * 10) / 10);
  const key = cycleKey(peakAt, activeEnd);

  React.useLayoutEffect(() => {
    ensureBaseStyles();
    ensureCycleKeyframes(key, peakAt, activeEnd);
  }, [key, peakAt, activeEnd]);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let pageVisible = document.visibilityState !== "hidden";

    const syncPlayState = () => {
      const forced = pausedPropRef.current;
      const autoPause = !(inViewRef.current && pageVisible);
      const shouldPause =
        forced === true || (forced !== false && autoPause);
      node.dataset.ripplePaused = shouldPause ? "true" : "false";
    };

    if (paused === true) {
      syncPlayState();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries.some((entry) => entry.isIntersecting);
        syncPlayState();
      },
      { threshold: 0.01 },
    );

    const onVisibility = () => {
      pageVisible = document.visibilityState !== "hidden";
      syncPlayState();
    };

    if (paused !== false) {
      io.observe(node);
      document.addEventListener("visibilitychange", onVisibility);
    }

    syncPlayState();

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused]);

  const Tag = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & {
      ref?: React.RefCallback<HTMLElement | null>;
      "data-ripple-paused"?: "true" | "false";
      "data-ripple-cycle"?: string;
      "aria-label"?: string;
    }
  >;

  let charIndex = 0;

  return (
    <Tag
      ref={(node) => {
        nodeRef.current = node;
      }}
      aria-label={text}
      data-ripple-paused={paused === true ? "true" : "false"}
      data-ripple-cycle={key}
      className={cn(
        "wensity-text-ripple relative inline-block",
        "[perspective:500px] [transform:translateZ(0)] [text-wrap:balance]",
        "[--wensity-ripple-base:#a1a1aa] [--wensity-ripple-hi:#09090b]",
        "dark:[--wensity-ripple-base:#71717a] dark:[--wensity-ripple-hi:#ffffff]",
        className,
      )}
      style={
        {
          color: "var(--wensity-ripple-base)",
          "--wensity-ripple-duration": `${cycle}s`,
          "--wensity-ripple-z": `${zDistance}px`,
          "--wensity-ripple-x": `${xDistance}px`,
          "--wensity-ripple-y": `${yDistance}px`,
          "--wensity-ripple-scale": String(scaleDistance),
          "--wensity-ripple-rotate": `${rotateYDistance}deg`,
          ...(baseColor ? { "--wensity-ripple-base": baseColor } : null),
          ...(rippleColor ? { "--wensity-ripple-hi": rippleColor } : null),
        } as React.CSSProperties
      }
    >
      {words.map((word, wordIndex) => (
        <span key={`w-${wordIndex}`} className="inline-block whitespace-pre">
          {word.characters.map((char) => {
            const i = charIndex;
            charIndex += 1;
            return (
              <span
                key={`c-${wordIndex}-${i}`}
                aria-hidden="true"
                className="wensity-text-ripple-char inline-block whitespace-pre [transform-style:preserve-3d]"
                style={{ animationDelay: `${i * stagger}s` }}
              >
                {char}
              </span>
            );
          })}
          {word.needsSpace ? (
            <span aria-hidden="true" className="inline-block whitespace-pre">
              {" "}
            </span>
          ) : null}
        </span>
      ))}
    </Tag>
  );
}

function ensureBaseStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(BASE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = BASE_STYLE_ID;
  style.textContent = BASE_STYLES;
  document.head.appendChild(style);
}

function ensureCycleKeyframes(key: string, peakAt: number, activeEnd: number) {
  if (typeof document === "undefined") return;
  if (registeredCycles.has(key)) return;
  registeredCycles.add(key);

  const id = `wensity-text-ripple-cycle-${key}`;
  if (document.getElementById(id)) return;

  const style = document.createElement("style");
  style.id = id;
  style.textContent = `
.wensity-text-ripple[data-ripple-cycle="${key}"] .wensity-text-ripple-char {
  animation-name: wensity-text-ripple-${key};
}
@keyframes wensity-text-ripple-${key} {
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotateY(0deg);
    color: var(--wensity-ripple-base);
  }
  ${peakAt}% {
    transform: translate3d(
        var(--wensity-ripple-x, 2px),
        var(--wensity-ripple-y, -2px),
        var(--wensity-ripple-z, 10px)
      )
      scale(var(--wensity-ripple-scale, 1.1))
      rotateY(var(--wensity-ripple-rotate, 10deg));
    color: var(--wensity-ripple-hi);
  }
  ${activeEnd}% {
    transform: translate3d(0, 0, 0) scale(1) rotateY(0deg);
    color: var(--wensity-ripple-base);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1) rotateY(0deg);
    color: var(--wensity-ripple-base);
  }
}
`;
  document.head.appendChild(style);
}

const BASE_STYLES = `
.wensity-text-ripple-char {
  color: var(--wensity-ripple-base);
  animation-duration: var(--wensity-ripple-duration, 1.5s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-play-state: running;
}
.wensity-text-ripple[data-ripple-paused="true"] .wensity-text-ripple-char {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .wensity-text-ripple-char {
    animation: none !important;
    transform: none !important;
    color: var(--wensity-ripple-hi) !important;
  }
}
`;
