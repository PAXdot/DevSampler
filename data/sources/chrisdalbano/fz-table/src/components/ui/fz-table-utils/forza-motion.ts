"use client";

// Ported verbatim (logic unchanged) from the Vue package's
// `packages/vue/src/composables/useForzaMotion.ts`. The underlying
// `@formkit/auto-animate` core API is framework agnostic -- it is called
// directly against a DOM node, exactly as the Vue composable does -- so the
// animation plugin itself did not need to change, only the lifecycle wrapper.
import { useEffect, useRef } from "react";
import autoAnimate, {
  getTransitionSizes,
  type AnimationController,
  type AutoAnimationPlugin,
} from "@formkit/auto-animate";

/** rise: lists and rows. slide: stacks that enter from an edge. pop: chips, avatars, small tokens. */
export type ForzaMotionPreset = "rise" | "slide" | "pop";

const settle = { opacity: 1, transform: "none", filter: "blur(0)" };
const ENTER: Record<ForzaMotionPreset, Keyframe[]> = {
  rise: [
    { opacity: 0, transform: "translateY(12px) scale(0.98)", filter: "blur(4px)" },
    settle,
  ],
  slide: [
    { opacity: 0, transform: "translateX(24px) scale(0.98)", filter: "blur(3px)" },
    settle,
  ],
  pop: [
    { opacity: 0, transform: "scale(0.6)" },
    { opacity: 1, transform: "scale(1.06)", offset: 0.6 },
    { opacity: 1, transform: "none" },
  ],
};
const EXIT: Record<ForzaMotionPreset, Keyframe[]> = {
  rise: [settle, { opacity: 0, transform: "translateY(-6px) scale(0.97)", filter: "blur(3px)" }],
  slide: [settle, { opacity: 0, transform: "translateX(32px)", filter: "blur(3px)" }],
  pop: [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(0.6)" }],
};
/** Slight overshoot so reorders read as physical moves rather than fades. */
const SPRING = "cubic-bezier(0.34, 1.32, 0.64, 1)";

function ms(style: CSSStyleDeclaration, name: string, fallback: number) {
  const value = parseFloat(style.getPropertyValue(name));
  return Number.isFinite(value) ? value : fallback;
}

/** Forza keyframes for AutoAnimate. Items added in the same frame cascade by `stagger` ms. */
export function forzaMotionPlugin(
  element: HTMLElement,
  options: { preset?: ForzaMotionPreset; duration?: number; stagger?: number } = {},
): AutoAnimationPlugin {
  const style = getComputedStyle(element);
  const preset = options.preset ?? "rise";
  const layout = options.duration ?? ms(style, "--fz-motion-layout", 260);
  const enter = options.duration ?? ms(style, "--fz-motion-enter", 320);
  const leave = ms(style, "--fz-motion-exit", 180);
  const easeOut = style.getPropertyValue("--fz-ease-out").trim() || "ease-out";
  const easeIn = style.getPropertyValue("--fz-ease-in").trim() || "ease-in";
  const step = options.stagger ?? 40;
  let batch = 0;
  let frame = 0;
  function delay() {
    if (!frame)
      frame = requestAnimationFrame(() => {
        batch = 0;
        frame = 0;
      });
    return Math.min(batch++, 8) * step;
  }
  return (el, action, oldCoords, newCoords) => {
    if (action === "add")
      return new KeyframeEffect(el, ENTER[preset], {
        duration: enter,
        easing: easeOut,
        delay: delay(),
        fill: "backwards",
      });
    if (action === "remove")
      return new KeyframeEffect(el, EXIT[preset], {
        duration: leave,
        easing: easeIn,
      });
    const from = oldCoords!;
    const to = newCoords!;
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const [wFrom, wTo, hFrom, hTo] = getTransitionSizes(el, from, to);
    const start: Keyframe = { transform: `translate(${dx}px, ${dy}px)` };
    const end: Keyframe = { transform: "translate(0, 0)" };
    if (wFrom !== wTo) {
      start.width = wFrom + "px";
      end.width = wTo + "px";
    }
    if (hFrom !== hTo) {
      start.height = hFrom + "px";
      end.height = hTo + "px";
    }
    return new KeyframeEffect(el, [start, end], {
      duration: layout,
      easing: SPRING,
    });
  };
}

/** Add/remove/reorder motion. OS reduced motion always wins. */
export function useForzaMotion<T extends HTMLElement = HTMLElement>(
  options: {
    disabled?: boolean;
    duration?: number;
    preset?: ForzaMotionPreset;
    stagger?: number;
  } = {},
) {
  const parent = useRef<T | null>(null);
  const controllerRef = useRef<AnimationController>();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function apply() {
      controllerRef.current?.destroy?.();
      controllerRef.current = undefined;
      if (parent.current && !options.disabled && !media.matches) {
        controllerRef.current = autoAnimate(
          parent.current,
          forzaMotionPlugin(parent.current, {
            preset: options.preset,
            duration: options.duration,
            stagger: options.stagger,
          }),
        );
      }
    }

    apply();
    media.addEventListener("change", apply);
    return () => {
      media.removeEventListener("change", apply);
      controllerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.disabled, options.duration, options.preset, options.stagger]);

  return { parent };
}
