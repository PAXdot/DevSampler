import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { scrollForRow, visibleWindow } from "./virtual";
import type { RowWindow } from "./virtual";

export interface VirtualOptions {
  rowHeight: number;
  overscan?: number;
}

export interface VirtualRows {
  scrollRef: RefObject<HTMLDivElement | null>;
  from: number;
  to: number;
  fillerBefore: number;
  fillerAfter: number;
  count: number;
  showRow: (index: number) => void;
  onScroll: () => void;
}

export function useVirtual(count: number, options: VirtualOptions): VirtualRows {
  const { rowHeight: expected, overscan = 4 } = options;

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [rowHeight, setRowHeight] = useState(expected);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (el) setScrollTop(el.scrollTop);
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => setViewportHeight(el.clientHeight);
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const row = el.querySelector<HTMLElement>("[data-row]");
    if (!row) return;
    const measured = row.getBoundingClientRect().height;
    if (measured > 0 && Math.abs(measured - rowHeight) > 0.01) setRowHeight(measured);
  }, [count, viewportHeight, rowHeight]);

  const rowWindow: RowWindow = visibleWindow({ count, rowHeight, scrollTop, viewportHeight, overscan });

  const showRow = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const header = el.querySelector<HTMLElement>("thead");
      const target = scrollForRow(index, {
        rowHeight,
        scrollTop: el.scrollTop,
        viewportHeight: el.clientHeight,
        headerHeight: header?.getBoundingClientRect().height ?? 0,
      });
      if (target === null) return;
      el.scrollTop = target;
      setScrollTop(target);
    },
    [rowHeight],
  );

  return {
    scrollRef,
    from: rowWindow.from,
    to: rowWindow.to,
    fillerBefore: rowWindow.before,
    fillerAfter: rowWindow.after,
    count,
    showRow,
    onScroll,
  };
}
