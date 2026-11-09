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
} from "./format-utils/mount";
import { mount as formatEngine } from "./format-utils/format-engine";

/**
 * @lucasmarkes/hairline/react — Format, one of the library's thirty-three isometric figures, as a component.
 *
 * A component renders one empty `<div>` and mounts the figure on it in a
 * layout effect, so on the server the box is there and the drawing is not.
 * It mounts once: a changed option reaches the running figure as `update`,
 * and `onRead` is called through a ref, so an inline function never remounts.
 */

/** The figure's options, plus every `<div>` attribute except `children`. */
export type HairlineProps = HairlineOptions &
  Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;
type HairlineComponent = ForwardRefExoticComponent<
  HairlineProps & RefAttributes<HTMLDivElement>
>;

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function make(
  name: string,
  mount: (el: HTMLElement, options?: HairlineOptions) => Figure,
): HairlineComponent {
  const Component = forwardRef<HTMLDivElement, HairlineProps>(
    function Hairline(props, ref) {
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
        const f = mount(el.current!, {
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
    },
  );
  Component.displayName = name;
  return Component;
}

/**
 * Format: a file as a stack of ten thin slabs on a rounded board, one to a
 * line, indented like code. The pointer runs the formatter down the file:
 * every line above it snaps square to its indent on a spring, staggered line
 * by line. `intensity` starts the lines more crooked, in degrees of the
 * worst skew.
 */
function format(el: HTMLElement, options?: HairlineOptions): Figure {
  return create(
    {
      id: "format",
      label:
        "A file of ten crooked lines: the pointer runs the formatter down it, and every line above snaps square to its indent.",
      rest: "rest",
      engine: formatEngine,
      tour: [[290, 162], [199, 168], [135, 200], null],
    },
    el,
    options,
  );
}

/** A file of ten crooked lines: the pointer runs the formatter down it, and every line above snaps square to its indent. `intensity` starts the lines more crooked. */
const Format = make("Format", format);

export default Format;
