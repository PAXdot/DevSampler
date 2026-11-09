"use client";

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { create, type Figure, type HairlineOptions } from "./turntable-utils/mount";
import { mount as turntableEngine } from "./turntable-utils/turntable-figure";

/**
 * Hairline Turntable — blocks on a turntable. A flick across it spins it; it
 * settles on the nearest quarter turn. `intensity` makes the spin coast longer.
 *
 * Ported from @lucasmarkes/hairline (packages/hairline/src/figures/turntable.ts,
 * src/index.ts and src/react.tsx), scoped to this one figure so the shipped
 * component only pulls in the turntable engine.
 */
function turntable(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "turntable",
    label: "Blocks on a turntable. Flick across it to spin it; it settles on the nearest quarter turn.",
    rest: "az 045° · el 30°",
    engine: turntableEngine,
  }, el, options);
}

/** The figure's options, plus every `<div>` attribute except `children`. */
export type HairlineTurntableProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders one empty `<div>` and mounts the turntable figure on it in a layout
 * effect, so on the server the box is there and the drawing is not. It mounts
 * once: a changed option reaches the running figure through `update`, and
 * `onRead` is called through a ref, so an inline function never remounts.
 */
const HairlineTurntable: ForwardRefExoticComponent<HairlineTurntableProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, HairlineTurntableProps>(
  function HairlineTurntable(props, ref) {
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
      const f = turntable(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
      figure.current = f;
      return () => { f.destroy(); figure.current = null; };
      // mounts once; options reach the figure through the effect below
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* every key is sent, so a prop that was removed goes back to its default */
    useIsoLayoutEffect(() => { figure.current?.update({ intensity, theme, label: named }); }, [intensity, theme, named]);

    return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
  },
);
HairlineTurntable.displayName = "HairlineTurntable";

export default HairlineTurntable;
