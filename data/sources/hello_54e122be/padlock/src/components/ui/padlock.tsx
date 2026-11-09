"use client";

import {
  forwardRef, useCallback, useEffect, useLayoutEffect, useRef,
  type ComponentPropsWithoutRef, type ComponentProps, type CSSProperties,
  type ForwardRefExoticComponent, type RefAttributes,
} from "react";
import { create, type Figure, type HairlineOptions } from "@/components/ui/padlock-utils/mount";
import { mount as padlockEngine } from "@/components/ui/padlock-utils/padlock-figure";

/**
 * Hairline — Padlock. Ported from @lucasmarkes/hairline (MIT, Lucas Marques),
 * commit bc782244216620434b14736df1d74daed2d05046. A padlock drawn in true
 * isometric: as the pointer nears, its shackle springs up out of the body on
 * a spring and swings open about its long leg, which never leaves the body.
 * `intensity` sets how far it swings. Shares hairline's single frame loop,
 * suspends offscreen, and honours prefers-reduced-motion.
 *
 * https://hairline.lucasmarkes.com
 */

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export type HairlinePadlockProps = HairlineOptions & Omit<ComponentPropsWithoutRef<"div">, "children" | keyof HairlineOptions>;

const HairlinePadlock: ForwardRefExoticComponent<HairlinePadlockProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, HairlinePadlockProps>(
  function HairlinePadlock(props, ref) {
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
      const f = create({
        id: "padlock",
        label: "A padlock: as the pointer nears, the shackle springs up out of the body and swings open about its long leg.",
        rest: "rest",
        engine: padlockEngine,
      }, el.current!, { intensity, theme, label: named, onRead: (text) => read.current?.(text) });
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
HairlinePadlock.displayName = "Padlock";

/** hairline, wearing your theme: maps the figure's palette to shadcn's tokens, so it follows light, dark and whatever you have made of them. A `style` you pass wins over the mapping. */
const tokens = {
  "--hairline-plate": "var(--background)",
  "--hairline-hi": "var(--foreground)",
  "--hairline-edge": "var(--muted-foreground)",
  "--hairline-mid": "color-mix(in oklab, var(--muted-foreground) 55%, var(--background))",
  "--hairline-lo": "var(--border)",
} as CSSProperties;

export default function Padlock({ style, ...props }: ComponentProps<typeof HairlinePadlock>) {
  return <HairlinePadlock style={{ ...tokens, ...style }} {...props} />;
}
