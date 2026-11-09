"use client";

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { sieve, type Figure, type HairlineOptions } from "./sieve-utils/sieve-engine";

/**
 * @lucasmarkes/hairline/react — Sieve as a standalone component.
 *
 * Renders one empty `<div>` and mounts the figure on it in a layout effect,
 * so on the server the box is there and the drawing is not. It mounts once:
 * a changed option reaches the running figure as `update`, and `onRead` is
 * called through a ref, so an inline function never remounts.
 *
 * Three test sieves stacked over a pan: the pointer's height picks one, it
 * rises clear of the stack, and every mesh is bare. `intensity` opens the
 * gap further.
 */
export type HairlineProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type HairlineComponent = ForwardRefExoticComponent<HairlineProps & RefAttributes<HTMLDivElement>>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const Sieve: HairlineComponent = forwardRef<HTMLDivElement, HairlineProps>(function Sieve(props, ref) {
  const { intensity, theme, label, onRead, style, ...attrs } = props;
  /* aria-label stays on the div and is the figure's label too, so the two never disagree about the name */
  const named = label ?? props["aria-label"];

  const el = useRef<HTMLDivElement | null>(null);
  const figure = useRef<Figure | null>(null);
  const read = useRef(onRead);
  const set = useCallback((node: HTMLDivElement | null) => {
    el.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  }, [ref]);

  useIsoLayoutEffect(() => { read.current = onRead; });

  useIsoLayoutEffect(() => {
    const f = sieve(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
    figure.current = f;
    return () => { f.destroy(); figure.current = null; };
    // mounts once; options reach the figure through the effect below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* every key is sent, so a prop that was removed goes back to its default */
  useIsoLayoutEffect(() => { figure.current?.update({ intensity, theme, label: named }); }, [intensity, theme, named]);

  return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
});
Sieve.displayName = "Sieve";

export default Sieve;
