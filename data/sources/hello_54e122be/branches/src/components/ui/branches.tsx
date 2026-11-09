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
import { create, type Figure, type HairlineOptions } from "./branches-utils/mount";
import { mount as branchesEngine } from "./branches-utils/figure-branches";

/**
 * Hairline — Branches: a git history as an object on a board. A main line of
 * commits runs along a rail, each commit a puck seated on a round pad; a
 * feature branch forks off it near the start and merges back late. The
 * pointer picks the commit under it: that puck rises off its pad, and its
 * first-parent ancestry rises after it, staggered back along its own branch
 * and through the fork, the farther back the less. Commits outside that
 * history stay seated. `intensity` widens how far back the history reaches.
 *
 * Ported from @lucasmarkes/hairline (figures/branches.ts, index.ts and
 * react.tsx) as a standalone component: one empty `<div>`, mounted with the
 * branches engine in a layout effect so the box exists on the server and the
 * drawing does not. It mounts once; a changed prop reaches the running
 * figure through `update`, and `onRead` is called through a ref so an inline
 * function never remounts.
 */

export type HairlineProps = HairlineOptions &
  Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type HairlineComponent = ForwardRefExoticComponent<HairlineProps & RefAttributes<HTMLDivElement>>;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function make(name: string, mount: (el: HTMLElement, options?: HairlineOptions) => Figure): HairlineComponent {
  const Component = forwardRef<HTMLDivElement, HairlineProps>(function Hairline(props, ref) {
    const { intensity, theme, label, onRead, style, ...attrs } = props;
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
      const f = mount(el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
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
      figure.current?.update({ intensity, theme, label: named });
    }, [intensity, theme, named]);

    return <div {...attrs} ref={set} style={{ aspectRatio: "5 / 4", ...style }} />;
  });
  Component.displayName = name;
  return Component;
}

/** A commit graph on a board: the commit under the pointer rises, and its history rises after it, the farther back the less. `intensity` raises more of the history. */
function branches(el: HTMLElement, options?: HairlineOptions): Figure {
  return create(
    {
      id: "branches",
      label:
        "A commit graph on a board: the commit under the pointer rises, and its history rises after it, the farther back the less.",
      rest: "rest",
      engine: branchesEngine,
    },
    el,
    options,
  );
}

const Branches = make("Branches", branches);

export default Branches;
