"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import {
  create,
  type Figure,
  type HairlineOptions,
} from "./settle-utils/mount";
import { mount as settleEngine } from "./settle-utils/settle-engine";

/**
 * @lucasmarkes/hairline — Settle, one of the library's thirty-three isometric
 * line figures that answer the pointer.
 *
 * Twelve tiles lie crooked round a hub; as the pointer nears it they slide
 * into a tree and the links draw in. `intensity` starts the tree from
 * further away.
 *
 * This file assembles, for Settle alone, the `settle()` wrapper that lives in
 * the package's `index.ts` (every figure beside its own) and the React
 * `make()` factory that lives in `react.tsx` (every figure's component beside
 * its own) — see hairline.lucasmarkes.com.
 */

/** Twelve tiles lie crooked round a hub; as the pointer nears it they slide into a tree and the links draw in. `intensity` starts the tree from further away. */
function settle(el: HTMLElement, options?: HairlineOptions): Figure {
  return create(
    {
      id: "settle",
      label:
        "Twelve tiles lie crooked round a hub; as the pointer nears it they slide into a tree and the links draw in.",
      rest: "rest",
      engine: settleEngine,
      tour: [[360, 40], [320, 120], [203, 155], null],
    },
    el,
    options,
  );
}

/** The figure's options, plus every `<div>` attribute except `children`. */
export type HairlineProps = HairlineOptions &
  Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Settle: a hub plate on a faint floor grid and twelve thin tiles lying
 * scattered and crooked around it. A component renders one empty `<div>`
 * and mounts the figure on it in a layout effect, so on the server the box
 * is there and the drawing is not. It mounts once: a changed option reaches
 * the running figure as `update`, and `onRead` is called through a ref, so
 * an inline function never remounts.
 */
const Settle: ForwardRefExoticComponent<
  HairlineProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, HairlineProps>(function Settle(props, ref) {
  const { intensity, theme, label, onRead, play, style, ...attrs } = props;
  /* aria-label stays on the div and is the figure's label too, so the two never disagree about the name */
  const named = label ?? props["aria-label"];

  const el = useRef<HTMLDivElement | null>(null);
  const figure = useRef<Figure | null>(null);
  const read = useRef(onRead);
  const set = useCallback(
    (node: HTMLDivElement | null) => {
      el.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref],
  );

  useIsoLayoutEffect(() => {
    read.current = onRead;
  });

  useIsoLayoutEffect(() => {
    const f = settle(el.current!, {
      intensity,
      theme,
      label: named,
      play,
      onRead: (text) => read.current?.(text),
    });
    figure.current = f;
    return () => {
      f.destroy();
      figure.current = null;
    };
    // mounts once; options reach the figure through the effect below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* every key is sent, so a prop that was removed goes back to its default */
  useIsoLayoutEffect(() => {
    figure.current?.update({ intensity, theme, label: named, play });
  }, [intensity, theme, named, play]);

  return (
    <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />
  );
});
Settle.displayName = "Settle";

export default Settle;
