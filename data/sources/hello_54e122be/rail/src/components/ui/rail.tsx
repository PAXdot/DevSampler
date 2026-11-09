"use client";

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { create, type Figure, type HairlineOptions } from "./rail-utils/hairline-mount";
import { mount as railEngine } from "./rail-utils/hairline-rail-figure";

/**
 * Rail: a garment rail on two uprights, with seven bare hangers. The pointer
 * brushes the hangers: each rocks on its hook away from it, the nearest
 * most, and settles. At rest they hang at uneven angles and one is bright.
 * `intensity` is how many hangers the brush reaches.
 *
 * Ported from @lucasmarkes/hairline (MIT) — https://hairline.lucasmarkes.com
 */
function rail(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "rail",
    label: "A garment rail with seven bare hangers: the pointer brushes them, and each rocks away from it, the nearest most, and settles.",
    rest: "rest",
    engine: railEngine,
  }, el, options);
}

/** The figure's options, plus every `<div>` attribute except `children`. */
export type RailProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type RailComponent = ForwardRefExoticComponent<RailProps & RefAttributes<HTMLDivElement>>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders one empty `<div>` and mounts the figure on it in a layout effect,
 * so on the server the box is there and the drawing is not. It mounts once:
 * a changed option reaches the running figure as `update`, and `onRead` is
 * called through a ref, so an inline function never remounts.
 */
const Rail: RailComponent = forwardRef<HTMLDivElement, RailProps>(function Rail(props, ref) {
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
    const f = rail(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
    figure.current = f;
    return () => { f.destroy(); figure.current = null; };
    // mounts once; options reach the figure through the effect below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* every key is sent, so a prop that was removed goes back to its default */
  useIsoLayoutEffect(() => { figure.current?.update({ intensity, theme, label: named }); }, [intensity, theme, named]);

  return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
});

export default Rail;
