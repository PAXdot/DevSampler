"use client";

/**
 * Hairline — Phosphor (Fig 9.4), standalone.
 *
 * A seven by seven dot matrix on a floating isometric tile. At idle it plays
 * a loop (a ripple from the centre, then a diagonal sweep); the pointer
 * paints it instead, and the loop fades back in 1.2s after the pointer
 * leaves. Each dot holds an intensity that decays with a persistence
 * constant set by `intensity` (0..1, default 0.5). Reduced motion settles on
 * a composed still; the shared frame loop sleeps whenever the host element
 * is off screen (via IntersectionObserver) and wakes on pointer input.
 *
 * This file is a trimmed, single-figure version of the upstream package's
 * generic `create()` wrapper (mount.ts) and generic React adapter
 * (react.tsx's `make()`), assembled to export only Phosphor — the rest of
 * the 27 hairline figures are intentionally not included.
 *
 * Source: @lucasmarkes/hairline (MIT) — https://github.com/lucasmarkes/hairline
 * Copyright (c) 2026 Lucas Marques
 */

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { create, type Figure, type HairlineOptions } from "./phosphor-utils/mount";
import { mount as phosphorEngine } from "./phosphor-utils/phosphor-engine";

/** The vanilla mount function for the Phosphor figure: an element in, `{ update, destroy }` out. */
function phosphor(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "phosphor",
    label: "A seven by seven dot matrix on a floating tile that plays a loop, and fades like phosphor where you paint it.",
    rest: "loop",
    engine: phosphorEngine,
  }, el, options);
}

/** The figure's options, plus every `<div>` attribute except `children`. */
export type HairlineProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type HairlineComponent = ForwardRefExoticComponent<HairlineProps & RefAttributes<HTMLDivElement>>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders one empty `<div>` and mounts the figure on it in a layout effect,
 * so on the server the box is there and the drawing is not. It mounts once:
 * a changed option reaches the running figure through `update`, and
 * `onRead` is called through a ref, so an inline function never remounts.
 */
function make(name: string, mount: (el: HTMLElement, options?: HairlineOptions) => Figure): HairlineComponent {
  const Component = forwardRef<HTMLDivElement, HairlineProps>(function Hairline(props, ref) {
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
      const f = mount(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
      figure.current = f;
      return () => { f.destroy(); figure.current = null; };
      // mounts once; options reach the figure through the effect below
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* every key is sent, so a prop that was removed goes back to its default */
    useIsoLayoutEffect(() => { figure.current?.update({ intensity, theme, label: named }); }, [intensity, theme, named]);

    return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
  });
  Component.displayName = name;
  return Component;
}

/** A seven by seven dot matrix that plays a loop, and fades like phosphor where the pointer paints it. `intensity` makes the trail linger longer. */
const Phosphor = make("Phosphor", phosphor);

export default Phosphor;
