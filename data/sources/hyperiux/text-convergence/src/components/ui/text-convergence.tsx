// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Scroll distance for the sweep, in viewport heights, scaled by word count so
// the sweep speed (text px travelled per px scrolled) stays roughly constant
// regardless of sentence length — tuned so each character is legible as it
// flies in and converges. It is the section's own height; the stage sticks
// inside it and releases exactly at the section's end, so there is no empty
// scroll after the sweep finishes.
const BASE_SCROLL_VH = 650;
const MIN_SCROLL_VH = 380;
const MAX_SCROLL_VH = 1000;
const BASE_WORD_COUNT = 20;

const CHARACTER_SPLIT_TYPE = "chars,words";
const CHARACTER_Y_PERCENT_MIN = -200;
const CHARACTER_Y_PERCENT_MAX = 200;
const CHARACTER_EASE = "elastic.out(1,0.8)";

// Reduced motion: keep the horizontal scroll-through (the functional mechanism)
// but weaken the decorative per-character fly-in to a quarter strength.
const REDUCED_MOTION_FACTOR = 0.25;

const DEFAULT_TEXT =
  "Create faster. Design sharper. Ship better. Turn ambitious ideas into polished, high-performance experiences.";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

const getScrollVh = (text: string) => {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const scale = words / BASE_WORD_COUNT;
  const calculated = BASE_SCROLL_VH * scale;
  return Math.max(MIN_SCROLL_VH, Math.min(calculated, MAX_SCROLL_VH));
};

export interface TextConvergenceProps {
  /** Sentence that flies in character-by-character and scrolls horizontally. */
  text?: string;
  /** Section background. Defaults to the theme's `background`. */
  backgroundColor?: string;
  /** Text color. Defaults to the theme's `foreground`. */
  textColor?: string;
  /** Max random rotation (degrees, ±) each character starts from. */
  charRotation?: number;
  className?: string;
}

export default function TextConvergence({
  text = DEFAULT_TEXT,
  backgroundColor,
  textColor,
  charRotation = 20,
  className = "",
}: TextConvergenceProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const scrollVh = useMemo(() => getScrollVh(text), [text]);

  useEffect(() => {
    const context = gsap.context(() => {
      const textElement = textRef.current;
      if (!textElement) return;

      const split = SplitText.create(textElement, {
        type: CHARACTER_SPLIT_TYPE,
      });

      const reduced = prefersReducedMotion();
      const charScale = reduced ? REDUCED_MOTION_FACTOR : 1;

      // Drive the line left across the viewport as the section scrolls. The
      // sticky stage holds the line in place (no GSAP `pin`, so no pin-spacer),
      // and `end: "bottom top"` finishes the sweep exactly as the section
      // scrolls past — nothing empty to scroll through afterwards.
      const scrollTween = gsap.to(textElement, {
        xPercent: -100,
        ease: "linear",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          pin: true,
        },
      });

      // Each character assembles from a random offset + rotation as it enters.
      split.chars.forEach((character) => {
        gsap.from(character, {
          yPercent:
            gsap.utils.random(
              CHARACTER_Y_PERCENT_MIN,
              CHARACTER_Y_PERCENT_MAX,
            ) * charScale,
          rotation: gsap.utils.random(-charRotation, charRotation) * charScale,
          ease: CHARACTER_EASE,
          scrollTrigger: {
            trigger: character,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: 0.4,
          },
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, [text, charRotation, scrollVh]);

  if (backgroundColor) rootStyle.backgroundColor = backgroundColor;

  return (
    <div
      ref={sectionRef}
      className={`relative bg-background ${className}`}
    >
      <div className="flex h-screen items-center">
        <p
          ref={textRef}
          role="presentation"
          className="flex w-max whitespace-nowrap gap-[4vw] pl-[100%] text-4xl font-bold leading-[1.1] tracking-tighter text-foreground sm:text-6xl lg:text-8xl xl:text-9xl"
          style={textColor ? { color: textColor } : undefined}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
