import { spring } from "./spring";

/** The house curves, for the Web Animations API (same as the --ui-ease-* tokens). */
export const ease = {
  enter: "cubic-bezier(0.16, 1, 0.3, 1)",
  standard: "cubic-bezier(0.22, 1, 0.36, 1)",
  exit: "cubic-bezier(0.7, 0, 0.84, 0)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: spring(0.12),
};

/** People who ask their system for less motion get none. */
export const reduced = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A duration, or 0 for reduced motion. */
export const ms = (n: number) => (reduced() ? 0 : n);
