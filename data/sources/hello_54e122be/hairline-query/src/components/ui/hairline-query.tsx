"use client";

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { create, type Figure, type HairlineOptions } from "./hairline-query-utils/mount";
import { mount as queryEngine } from "./hairline-query-utils/query-figure";

/**
 * Hairline — Query, as a standalone React component.
 *
 * Trimmed from @lucasmarkes/hairline (and its /react adapter) at commit
 * bc782244216620434b14736df1d74daed2d05046 to carry only the Query figure: a
 * question mark built as a solid on a small round plinth, its dot a loose
 * ball lying on the plinth under the hook's stem. The pointer turns the
 * hook about its stem toward it, on a spring; the ball rolls round after it,
 * later and softer, on a softer spring, and settles back under the stem.
 * `intensity` sets how far the hook turns, from 0 (subtle) to 1 (strong).
 *
 * This file is the only part not shipped byte-for-byte from the package: it
 * combines index.ts's `query()` wrapper and react.tsx's `make()` adapter,
 * narrowed to this one figure instead of all twenty-seven. mount.ts and
 * query-figure.ts below are the package's own files, unchanged but for their
 * relative import paths.
 */

/** Query's own vanilla mount: the package's `query()`, narrowed to this file. */
function query(el: HTMLElement, options?: HairlineOptions): Figure {
  return create(
    {
      id: "query",
      label:
        "A question mark built as a solid on a plinth, its dot a loose ball: the hook turns about its stem toward the pointer, and the ball rolls after it.",
      rest: "rest",
      engine: queryEngine,
    },
    el,
    options,
  );
}

/** The figure's options, plus every `<div>` attribute except `children`. */
export type HairlineQueryProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type HairlineQueryComponent = ForwardRefExoticComponent<HairlineQueryProps & RefAttributes<HTMLDivElement>>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders one empty `<div>` and mounts the Query figure on it in a layout
 * effect, so on the server the box is there and the drawing is not. It
 * mounts once: a changed option reaches the running figure as `update`, and
 * `onRead` is called through a ref, so an inline function never remounts.
 */
const HairlineQuery: HairlineQueryComponent = forwardRef<HTMLDivElement, HairlineQueryProps>(function Hairline(props, ref) {
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
    const f = query(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
    figure.current = f;
    return () => { f.destroy(); figure.current = null; };
    // mounts once; options reach the figure through the effect below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* every key is sent, so a prop that was removed goes back to its default */
  useIsoLayoutEffect(() => { figure.current?.update({ intensity, theme, label: named }); }, [intensity, theme, named]);

  return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
});
HairlineQuery.displayName = "HairlineQuery";

export default HairlineQuery;
