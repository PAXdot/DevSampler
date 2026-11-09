"use client";

import * as React from "react";
import { flushSync } from "react-dom";

/** Spread onto the element people grab: a handle button, or the whole item. */
export type HandleProps = {
  "data-sortable-handle": string;
  "aria-label": string;
  "aria-describedby": string;
  "aria-pressed": boolean;
  onPointerDown: (e: React.PointerEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onClick: (e: React.MouseEvent) => void;
};

export interface SortableProps<T> {
  /** The ordered items. Controlled: pair with onItemsChange (the React equivalent of Svelte's bind:items). */
  items: T[];
  /** Called with the live order on every move (picking this up is like a two-way bind). */
  onItemsChange: (items: T[]) => void;
  /** A stable id for each item. Named itemKey (not `key`) because `key` is a reserved JSX prop. */
  itemKey: (item: T) => string | number;
  /** Names an item in announcements and on its handle ("Canon of Medicine"). */
  itemLabel: (item: T) => string;
  /** Names the list ("Reading list"). */
  label: string;
  /** list: one column. row: one line. grid: wraps; set its columns with --sortable-columns. */
  layout?: "list" | "row" | "grid";
  /** Called after a move is dropped, with the new order. */
  onReorder?: (items: T[]) => void;
  children: (
    item: T,
    handleProps: HandleProps,
    meta: { dragging: boolean; index: number },
  ) => React.ReactNode;
  className?: string;
}

/** The house curves, for the Web Animations API (same values as Sina UI's --ui-ease-* tokens). */
const ease = {
  standard: "cubic-bezier(0.22, 1, 0.36, 1)",
};

/** People who ask their system for less motion get none. */
const reduced = () =>
  typeof matchMedia !== "undefined" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

let announceRegion: HTMLDivElement | undefined;
/** Says something to screen readers without moving focus, through one shared live region. */
function announce(text: string, politeness: "polite" | "assertive" = "polite") {
  if (typeof document === "undefined") return;
  if (!announceRegion?.isConnected) {
    announceRegion = document.createElement("div");
    announceRegion.style.cssText =
      "position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap";
    document.body.append(announceRegion);
  }
  announceRegion.setAttribute("aria-live", politeness);
  // Cleared first, so saying the same thing twice is still announced.
  announceRegion.textContent = "";
  const region = announceRegion;
  setTimeout(() => {
    if (region) region.textContent = text;
  }, 50);
}

type Press = {
  id: string | number;
  x: number;
  y: number;
  timer?: ReturnType<typeof setTimeout>;
  el: HTMLElement;
};
type Drag = {
  grabX: number;
  grabY: number;
  x: number;
  y: number;
  frame: number;
};

function SortableInner<T>({
  items,
  onItemsChange,
  itemKey,
  itemLabel,
  label,
  layout = "list",
  onReorder,
  children,
  className,
}: SortableProps<T>) {
  const uid = React.useId();
  const listRef = React.useRef<HTMLUListElement>(null);

  // Mirrors of props/state so imperative pointer/keyboard handlers always read the latest value,
  // even though those handlers' own closures were created on an earlier render.
  const itemsRef = React.useRef(items);
  itemsRef.current = items;

  const [active, setActive] = React.useState<string | number | undefined>(
    undefined,
  );
  const [mode, setMode] = React.useState<"pointer" | "keyboard" | undefined>(
    undefined,
  );
  const activeRef = React.useRef(active);
  activeRef.current = active;
  const modeRef = React.useRef(mode);
  modeRef.current = mode;

  const beforeRef = React.useRef<T[]>([]);

  const indexOf = (id: string | number) =>
    itemsRef.current.findIndex((i) => itemKey(i) === id);
  const nodeOf = (id: string | number) =>
    listRef.current?.querySelector<HTMLElement>(
      `[data-sortable-key="${CSS.escape(String(id))}"]`,
    ) ?? null;
  const where = (i: number) =>
    `position ${i + 1} of ${itemsRef.current.length}`;

  function moveTo(from: number, to: number) {
    const current = itemsRef.current;
    if (from === to || to < 0 || to >= current.length) return;
    const next = [...current];
    next.splice(to, 0, ...next.splice(from, 1));
    itemsRef.current = next;
    onItemsChange(next);
  }

  function pickUp(id: string | number, how: "pointer" | "keyboard") {
    beforeRef.current = [...itemsRef.current];
    setActive(id);
    setMode(how);
    activeRef.current = id;
    modeRef.current = how;
    const i = indexOf(id);
    announce(
      how === "keyboard"
        ? `Picked up ${itemLabel(itemsRef.current[i])}, ${where(i)}. Arrow keys move it, Space drops it, Escape puts it back.`
        : `Picked up ${itemLabel(itemsRef.current[i])}.`,
      "assertive",
    );
  }

  function drop() {
    if (activeRef.current === undefined) return;
    const i = indexOf(activeRef.current);
    announce(
      `Dropped ${itemLabel(itemsRef.current[i])} at ${where(i)}.`,
      "assertive",
    );
    setActive(undefined);
    setMode(undefined);
    activeRef.current = undefined;
    modeRef.current = undefined;
    onReorder?.(itemsRef.current);
  }

  function cancel() {
    if (activeRef.current === undefined) return;
    const name = itemLabel(itemsRef.current[indexOf(activeRef.current)]);
    itemsRef.current = beforeRef.current;
    onItemsChange(beforeRef.current);
    setActive(undefined);
    setMode(undefined);
    activeRef.current = undefined;
    modeRef.current = undefined;
    announce(`${name} put back.`, "assertive");
  }

  // Columns in the current layout, for Up/Down in a grid: items sharing the first one's top.
  function columns() {
    const list = listRef.current;
    if (!list) return 1;
    const nodes = Array.from(list.children) as HTMLElement[];
    const top = nodes[0]?.offsetTop;
    return Math.max(1, nodes.filter((n) => n.offsetTop === top).length);
  }

  function keys(e: React.KeyboardEvent, id: string | number) {
    const picked = activeRef.current === id && modeRef.current === "keyboard";
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (picked) flushSync(() => drop());
      else if (activeRef.current === undefined)
        flushSync(() => pickUp(id, "keyboard"));
      return;
    }
    if (!picked) return;
    if (e.key === "Escape") {
      e.preventDefault();
      flushSync(() => cancel());
      nodeOf(id)?.querySelector<HTMLElement>("[data-sortable-handle]")?.focus();
      return;
    }
    const list = listRef.current;
    const rtl = list ? getComputedStyle(list).direction === "rtl" : false;
    const cols = layout === "grid" ? columns() : 1;
    const steps: Record<string, number> = {
      ArrowUp: layout === "row" ? 0 : -cols,
      ArrowDown: layout === "row" ? 0 : cols,
      ArrowLeft: layout === "list" ? 0 : rtl ? 1 : -1,
      ArrowRight: layout === "list" ? 0 : rtl ? -1 : 1,
      Home: -Infinity,
      End: Infinity,
    };
    if (!(e.key in steps) || !steps[e.key]) return;
    e.preventDefault();
    const from = indexOf(id);
    const to = Math.min(
      itemsRef.current.length - 1,
      Math.max(0, from + steps[e.key]),
    );
    if (to === from) return;
    // Applied at once and refocused at once, so a held or quickly repeated key never loses a press.
    flushSync(() => moveTo(from, to));
    nodeOf(id)?.querySelector<HTMLElement>("[data-sortable-handle]")?.focus();
    announce(`${where(to)}`, "assertive");
  }

  // Pointer: mouse and pen lift after a few pixels; touch on a whole-item handle waits for a
  // short press, so a swipe still scrolls the page. A dedicated handle lifts at once on touch.
  const pressRef = React.useRef<Press | undefined>(undefined);
  const dragRef = React.useRef<Drag | undefined>(undefined);
  const lastClickSuppressedRef = React.useRef(false);

  const local = (e: PointerEvent) => {
    const list = listRef.current!;
    const r = list.getBoundingClientRect();
    return {
      x: e.clientX - r.left + list.scrollLeft,
      y: e.clientY - r.top + list.scrollTop,
    };
  };

  function down(e: React.PointerEvent, id: string | number) {
    if (e.button !== 0 || activeRef.current !== undefined) return;
    const el = e.currentTarget as HTMLElement;
    const native = e.nativeEvent;
    pressRef.current = { id, x: native.clientX, y: native.clientY, el };
    const wholeItem = el.hasAttribute("data-sortable-item");
    if (native.pointerType === "touch" && wholeItem) {
      pressRef.current.timer = setTimeout(() => begin(native), 220);
      // Once lifted, a moving finger drags instead of scrolling the page.
      el.addEventListener("touchmove", hold, { passive: false });
    }
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  function begin(e: PointerEvent) {
    const press = pressRef.current;
    if (!press) return;
    if (press.timer) clearTimeout(press.timer);
    press.timer = undefined;
    const node = nodeOf(press.id);
    if (!node) return;
    try {
      press.el.setPointerCapture(e.pointerId);
    } catch {
      // The pointer is already gone: the drag still works without capture.
    }
    const p = local(e);
    dragRef.current = {
      grabX: p.x - node.offsetLeft,
      grabY: p.y - node.offsetTop,
      x: p.x,
      y: p.y,
      frame: 0,
    };
    pickUp(press.id, "pointer");
    if (typeof navigator !== "undefined" && "vibrate" in navigator)
      navigator.vibrate(8);
    follow();
  }

  function move(e: PointerEvent) {
    const press = pressRef.current;
    if (!press) return;
    if (!dragRef.current) {
      const far =
        Math.hypot(e.clientX - press.x, e.clientY - press.y) >
        (e.pointerType === "touch" ? 8 : 4);
      if (!far) return;
      // A touch that moves before the press completes was a scroll: let it go.
      if (press.timer) {
        release();
        return;
      }
      begin(e);
    }
    e.preventDefault();
    const p = local(e);
    const drag = dragRef.current!;
    drag.x = p.x;
    drag.y = p.y;
    autoscroll(e);
    // The slot whose center is nearest the dragged item's center is where it belongs.
    const node = nodeOf(press.id)!;
    const cx = p.x - drag.grabX + node.offsetWidth / 2;
    const cy = p.y - drag.grabY + node.offsetHeight / 2;
    let best = indexOf(press.id);
    let dist = Infinity;
    const list = listRef.current;
    if (list) {
      Array.from(list.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const d = Math.hypot(
          c.offsetLeft + c.offsetWidth / 2 - cx,
          c.offsetTop + c.offsetHeight / 2 - cy,
        );
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
    }
    moveTo(indexOf(press.id), best);
  }

  // Each frame, the lifted item sits under the pointer, wherever its slot has moved to.
  function follow() {
    const drag = dragRef.current;
    const press = pressRef.current;
    if (!drag || !press) return;
    const node = nodeOf(press.id);
    if (node) {
      const dx = drag.x - drag.grabX - node.offsetLeft;
      const dy = drag.y - drag.grabY - node.offsetTop;
      node.style.transform = `translate(${dx}px, ${dy}px)${reduced() ? "" : " scale(1.03)"}`;
    }
    drag.frame = requestAnimationFrame(follow);
  }

  // Near an edge of the list (or the window), it scrolls toward it.
  function autoscroll(e: PointerEvent) {
    const list = listRef.current;
    if (!list) return;
    const r = list.getBoundingClientRect();
    const edge = 40;
    const scrolls =
      list.scrollHeight > list.clientHeight ||
      list.scrollWidth > list.clientWidth;
    const box = scrolls
      ? r
      : { top: 0, bottom: innerHeight, left: 0, right: innerWidth };
    const dy =
      e.clientY < box.top + edge ? -8 : e.clientY > box.bottom - edge ? 8 : 0;
    const dx =
      e.clientX < box.left + edge ? -8 : e.clientX > box.right - edge ? 8 : 0;
    if (!dx && !dy) return;
    if (scrolls) list.scrollBy(dx, dy);
    else scrollBy(dx, dy);
  }

  function up(e: PointerEvent) {
    const drag = dragRef.current;
    const press = pressRef.current;
    if (drag && press) {
      cancelAnimationFrame(drag.frame);
      const node = nodeOf(press.id);
      lastClickSuppressedRef.current = true;
      if (e.type === "pointercancel") cancel();
      else drop();
      // Settles into its slot from wherever it was let go.
      if (node) {
        const from = node.style.transform;
        node.style.transform = "";
        if (from && !reduced()) {
          node.animate([{ transform: from }, { transform: "none" }], {
            duration: 220,
            easing: ease.standard,
          });
        }
      }
    }
    release();
  }

  const hold = (e: TouchEvent) => {
    if (dragRef.current) e.preventDefault();
  };

  function release() {
    const press = pressRef.current;
    if (press?.timer) clearTimeout(press.timer);
    press?.el.removeEventListener("touchmove", hold);
    pressRef.current = undefined;
    dragRef.current = undefined;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", up);
  }

  // Unmount safety: a drag in flight when the component goes away shouldn't leak listeners/rAF.
  React.useEffect(() => {
    return () => {
      if (dragRef.current) cancelAnimationFrame(dragRef.current.frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFor = (item: T): HandleProps => {
    const id = itemKey(item);
    return {
      "data-sortable-handle": "",
      "aria-label": `Move ${itemLabel(item)}`,
      "aria-describedby": `${uid}-how`,
      "aria-pressed": active === id && mode === "keyboard",
      onPointerDown: (e) => down(e, id),
      onKeyDown: (e) => keys(e, id),
      // A drag ends with a click on the handle; it shouldn't also count as one.
      onClick: (e) => {
        if (lastClickSuppressedRef.current) {
          e.preventDefault();
          e.stopPropagation();
          lastClickSuppressedRef.current = false;
        }
      },
    };
  };

  // `{@attach scrollEdges}`: measures how much of the list is hidden past each edge and sets
  // --scroll-start / --scroll-end so tokens.css's [data-fade] masks can fade that edge in or out.
  React.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const update = () => {
      let before: number;
      let after: number;
      if (el.dataset.fade === "x") {
        const max = el.scrollWidth - el.clientWidth;
        const left =
          getComputedStyle(el).direction === "rtl"
            ? max + el.scrollLeft
            : el.scrollLeft;
        before = left;
        after = max - left;
      } else {
        before = el.scrollTop;
        after = el.scrollHeight - el.clientHeight - el.scrollTop;
      }
      el.style.setProperty(
        "--scroll-start",
        `${Math.min(1, Math.max(0, before / 24))}`,
      );
      el.style.setProperty(
        "--scroll-end",
        `${Math.min(1, Math.max(0, after / 24))}`,
      );
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const resized = new ResizeObserver(update);
    resized.observe(el);
    for (const child of Array.from(el.children)) resized.observe(child);
    const changed = new MutationObserver(update);
    changed.observe(el, { childList: true, subtree: true });
    return () => {
      el.removeEventListener("scroll", update);
      resized.disconnect();
      changed.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // `animate:reflow`: list items glide to their new places as others come, go or move (a FLIP,
  // reimplemented with getBoundingClientRect + Element.animate since React has no animate:flip).
  const rectsRef = React.useRef<Map<string, DOMRect>>(new Map());
  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const nodes = Array.from(list.children) as HTMLElement[];
    nodes.forEach((node) => {
      const id = node.getAttribute("data-sortable-key");
      if (id === null) return;
      const rect = node.getBoundingClientRect();
      const prev = rectsRef.current.get(id);
      if (prev) {
        const dx = prev.left - rect.left;
        const dy = prev.top - rect.top;
        const liftedByPointer = String(active) === id && mode === "pointer";
        if ((dx || dy) && !liftedByPointer && !reduced()) {
          node.animate(
            [
              { transform: `translate(${dx}px, ${dy}px)` },
              { transform: "none" },
            ],
            {
              duration: 200,
              easing: ease.standard,
            },
          );
        }
      }
      rectsRef.current.set(id, rect);
    });
  }, [items, active, mode]);

  return (
    <>
      <ul
        ref={listRef}
        data-fade={layout === "row" ? "x" : undefined}
        className={[
          "sortable",
          layout,
          active !== undefined && "moving",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label={label}
      >
        {items.map((item, index) => {
          const id = itemKey(item);
          return (
            <li
              key={id}
              data-sortable-key={id}
              className={[
                "item",
                active === id && "active",
                active === id && mode === "pointer" && "lifted",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {children(item, handleFor(item), {
                dragging: active === id,
                index,
              })}
            </li>
          );
        })}
      </ul>
      <p id={`${uid}-how`} className="sr-only">
        Press Space to pick up, arrow keys to move, Space again to drop, Escape
        to cancel.
      </p>
    </>
  );
}

export default SortableInner;
