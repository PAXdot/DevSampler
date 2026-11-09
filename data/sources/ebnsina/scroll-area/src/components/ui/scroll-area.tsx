"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown02Icon } from "@hugeicons/core-free-icons";
import { scrollEdges } from "./scroll-area-utils/scroll-edges";

/** People who ask their system for less motion get none. */
const reduced = () =>
  typeof matchMedia !== "undefined" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

export interface ScrollAreaProps {
  /** Names the scrolling region: keyboard users focus it to scroll. */
  label: string;
  /** Tallest it grows before scrolling ("20rem"). */
  maxHeight: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollArea({
  label,
  maxHeight,
  children,
  className,
}: ScrollAreaProps) {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [more, setMore] = useState(false);
  // The overlay scrollbar: thumb size and offset as fractions of the track, shown while scrolling.
  const [size, setSize] = useState(1);
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(false);
  const hideRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const dragRef = useRef<{ y: number; top: number } | undefined>(undefined);

  const check = useCallback(() => {
    const area = areaRef.current;
    if (!area) return;
    const { scrollHeight: sh, clientHeight: ch, scrollTop: st } = area;
    setMore(sh - ch - st > 8);
    // Never shorter than a tenth of the track, so a very long page still has a thumb to grab.
    const nextSize = sh > ch ? Math.max(0.1, ch / sh) : 1;
    setSize(nextSize);
    setOffset(sh > ch ? (st / (sh - ch)) * (1 - nextSize) : 0);
  }, []);

  const scrolled = useCallback(() => {
    check();
    setActive(true);
    clearTimeout(hideRef.current);
    hideRef.current = setTimeout(() => setActive(false), 900);
  }, [check]);

  useEffect(() => () => clearTimeout(hideRef.current), []);

  // Dragging the thumb scrolls in proportion; pressing the track pages toward the pointer.
  const grab = (e: ReactPointerEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const area = areaRef.current;
    if (!area) return;
    dragRef.current = { y: e.clientY, top: area.scrollTop };
  };
  const move = (e: ReactPointerEvent<HTMLSpanElement>) => {
    const drag = dragRef.current;
    const area = areaRef.current;
    if (!drag || !area) return;
    const track = e.currentTarget.parentElement!.clientHeight;
    const ratio =
      (area.scrollHeight - area.clientHeight) / (track * (1 - size) || 1);
    area.scrollTop = drag.top + (e.clientY - drag.y) * ratio;
  };
  const pageClick = (e: ReactPointerEvent<HTMLSpanElement>) => {
    if (e.target !== e.currentTarget) return;
    const area = areaRef.current;
    if (!area) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const thumbMid = rect.top + rect.height * (offset + size / 2);
    const dir = e.clientY < thumbMid ? -1 : 1;
    area.scrollBy({
      top: dir * area.clientHeight * 0.9,
      behavior: reduced() ? "instant" : "smooth",
    });
  };

  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;
    check();
    const resized = new ResizeObserver(check);
    resized.observe(area);
    for (const child of Array.from(area.children)) resized.observe(child);
    return () => resized.disconnect();
  }, [check]);

  // The native bar is replaced by the thin overlay one below; scrollEdges drives the fade mask.
  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;
    return scrollEdges(area);
  }, []);

  const down = () => {
    const area = areaRef.current;
    if (!area) return;
    const reduce = reduced();
    // Most of a screenful, keeping a couple of lines in view so the reader doesn't lose their place.
    area.scrollBy({
      top: area.clientHeight * 0.8,
      behavior: reduce ? "instant" : "smooth",
    });
  };

  return (
    <div
      className={["wrap", "sinaui-scroll-area", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        ref={areaRef}
        className="area"
        role="region"
        aria-label={label}
        tabIndex={0}
        style={{ maxBlockSize: maxHeight } as CSSProperties}
        data-fade=""
        onScroll={scrolled}
      >
        {children}
      </div>
      {/* A thin scrollbar over the edge for pointers; the region itself still scrolls natively. */}
      {size < 1 && (
        <span
          className={["bar", active ? "active" : ""].filter(Boolean).join(" ")}
          aria-hidden="true"
          onPointerDown={pageClick}
        >
          <span
            className="thumb"
            style={{ "--size": size, "--offset": offset } as CSSProperties}
            onPointerDown={grab}
            onPointerMove={move}
            onPointerUp={() => (dragRef.current = undefined)}
            onPointerCancel={() => (dragRef.current = undefined)}
          />
        </span>
      )}
      {/* For pointers: the region itself scrolls with the keyboard, so the button stays out of the tab order. */}
      <button
        type="button"
        className={["more", more ? "shown" : ""].filter(Boolean).join(" ")}
        tabIndex={-1}
        aria-hidden="true"
        onClick={down}
      >
        <HugeiconsIcon icon={ArrowDown02Icon} size={20} />
      </button>
    </div>
  );
}
