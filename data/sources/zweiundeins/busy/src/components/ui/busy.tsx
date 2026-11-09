"use client";

import * as React from "react";

export type BusyVariant = "spinner" | "bar" | "skeleton";
export type BusySize = "sm" | "md" | "lg";

export interface BusyProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "hidden"
> {
  /**
   * The server/host forces the indicator on. It wins: while this is true the
   * indicator stays up whatever the watched requests do (busy={false} to clear it).
   */
  busy?: boolean;
  /** Shape: a spinner, a progress bar or skeleton lines. */
  variant?: BusyVariant;
  /** Bar only: 0-100 for a determinate bar. Empty/undefined means indeterminate. */
  value?: string | number;
  /** Skeleton only: how many placeholder lines (1-20). */
  lines?: number;
  /** What is being waited for, e.g. "Loading flight plan". Read out by the status region; visible with showLabel. */
  label?: string;
  /** Show the label next to the indicator instead of only reading it out. */
  showLabel?: boolean;
  /** Spinner box, bar height and skeleton line height. */
  size?: BusySize;
  /**
   * Which requests to watch: a CSS selector matching the element that triggers
   * them (or one of its ancestors), "*" for every request on the page, empty
   * for any request from inside the host's parent element.
   */
  for?: string;
  /** Milliseconds to wait before showing, so a fast request never flashes. Try 200. */
  delay?: number;
  /** Milliseconds to stay up once shown, so it does not flicker. Try 400. */
  min?: number;
  /** Fires when the visible state flips, after delay and min. e.g. to disable a form while it is up. */
  onBusyChange?: (busy: boolean) => void;
  hidden?: boolean;
}

export interface BusyHandle {
  /** Whether the indicator is currently visible (after delay/min). Read-only. */
  readonly visible: boolean;
}

/**
 * Busy - a spinner, bar or skeleton loading indicator that can watch
 * in-flight requests dispatched as `datastar-fetch` CustomEvents on
 * `document` (the event contract used by the Datastar hypermedia library),
 * in addition to being driven directly through the `busy` prop.
 *
 * Ported from the Starbase web component `sb-busy`
 * (https://starbase.zweiundeins.gmbh/components/busy) by zweiundeins, MIT
 * licensed - same shapes, same delay/min debouncing, same accessibility
 * contract (a visually-hidden status region, aria-hidden decoration, a
 * progressbar role for the determinate bar). The original's Shadow DOM
 * `:state(busy)` custom state (CSS `:state()` requires `attachInternals()`
 * on an autonomous custom element, which has no equivalent for a plain React
 * component) is exposed instead as a `data-busy` attribute on the root.
 *
 * MIT License
 * Copyright (c) 2026 zwei und eins gmbh and starbase contributors
 */
const Busy = React.forwardRef<BusyHandle, BusyProps>(function Busy(
  {
    busy = false,
    variant = "spinner",
    value = "",
    lines = 3,
    label = "Loading",
    showLabel = false,
    size = "md",
    for: forSelector = "",
    delay = 0,
    min = 0,
    onBusyChange,
    className,
    hidden,
    style,
    ...rest
  },
  ref,
) {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const [on, setOn] = React.useState(false);
  const uid = React.useId();

  const flight = React.useRef<Map<EventTarget | null, number>>(new Map());
  const bailed = React.useRef(false);
  const shownAt = React.useRef(0);
  const showTimer = React.useRef<ReturnType<typeof setTimeout> | 0>(0);
  const hideTimer = React.useRef<ReturnType<typeof setTimeout> | 0>(0);
  const readyRef = React.useRef(false);
  const onRef = React.useRef(false);

  const busyRef = React.useRef(busy);
  const delayRef = React.useRef(delay);
  const minRef = React.useRef(min);
  const forRef = React.useRef(forSelector);
  const onBusyChangeRef = React.useRef(onBusyChange);
  busyRef.current = busy;
  delayRef.current = delay;
  minRef.current = min;
  forRef.current = forSelector;
  onBusyChangeRef.current = onBusyChange;

  React.useImperativeHandle(ref, () => ({
    get visible() {
      return onRef.current;
    },
  }));

  const wanted = React.useCallback(
    () => busyRef.current || flight.current.size > 0,
    [],
  );

  const paint = React.useCallback((v: boolean) => {
    if (onRef.current === v) return;
    onRef.current = v;
    setOn(v);
    if (v) shownAt.current = performance.now();
    const fire = () => onBusyChangeRef.current?.(v);
    if (readyRef.current) fire();
    else queueMicrotask(() => onRef.current === v && fire());
  }, []);

  const settle = React.useCallback(() => {
    if (wanted()) {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = 0;
      if (onRef.current || showTimer.current) return;
      if (delayRef.current > 0) {
        showTimer.current = setTimeout(() => {
          showTimer.current = 0;
          paint(true);
        }, delayRef.current);
      } else {
        paint(true);
      }
      return;
    }
    if (showTimer.current) clearTimeout(showTimer.current);
    showTimer.current = 0;
    if (!onRef.current) return;
    const left = bailed.current
      ? 0
      : minRef.current - (performance.now() - shownAt.current);
    if (left > 0) {
      if (!hideTimer.current) {
        hideTimer.current = setTimeout(() => {
          hideTimer.current = 0;
          settle();
        }, left);
      }
      return;
    }
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = 0;
    bailed.current = false;
    paint(false);
  }, [paint, wanted]);

  // The server/host-forced `busy` prop (or delay/min changing) re-evaluates
  // the visible state.
  React.useEffect(() => {
    settle();
  }, [busy, delay, min, settle]);

  // Watch Datastar's `datastar-fetch` CustomEvents dispatched on `document`
  // for requests triggered by elements this instance watches.
  React.useEffect(() => {
    settle();
    readyRef.current = true;

    const mine = (el: Element | null) => {
      if (!el) return false;
      const sel = forRef.current;
      if (sel === "*") return true;
      if (sel) {
        try {
          return el === hostRef.current || !!el.closest(sel);
        } catch {
          return false;
        }
      }
      return (
        el === hostRef.current || !!hostRef.current?.parentElement?.contains(el)
      );
    };

    const onFetch = (e: Event) => {
      const { type, el } = (e as CustomEvent).detail || {};
      const n = flight.current.get(el);
      if (type === "started") {
        if (!mine(el)) return;
        flight.current.set(el, (n || 0) + 1);
        bailed.current = false;
      } else if (!n) {
        return;
      } else if (type === "finished") {
        n > 1 ? flight.current.set(el, n - 1) : flight.current.delete(el);
      } else {
        bailed.current =
          bailed.current || type === "error" || type === "retries-failed";
        return;
      }
      settle();
    };

    document.addEventListener("datastar-fetch", onFetch);
    return () => {
      document.removeEventListener("datastar-fetch", onFetch);
      if (showTimer.current) clearTimeout(showTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const raw = String(value ?? "").trim();
  const num = Number(raw);
  const v: number | false =
    raw !== "" && isFinite(num) ? Math.min(100, Math.max(0, num)) : false;
  const safeLines = Math.min(20, Math.max(1, Math.round(lines) || 1));
  const labelId = `sb-busy-label-${uid}`;

  const barStyle: React.CSSProperties =
    v !== false ? ({ ["--_p" as any]: `${v}%` } as React.CSSProperties) : {};

  return (
    <div
      ref={hostRef}
      className={["sb-busy", className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-size={size !== "md" ? size : undefined}
      data-busy={on ? "true" : undefined}
      hidden={hidden}
      style={style}
      {...rest}
    >
      <span className="vh" role="status">
        {on ? label : ""}
      </span>
      <div
        className={["wrap", showLabel ? "labelled" : ""]
          .filter(Boolean)
          .join(" ")}
        style={{ display: on ? undefined : "none" }}
      >
        {variant === "skeleton" ? (
          <div className="skel" aria-hidden="true">
            {Array.from({ length: safeLines }, (_, i) => (
              <span
                key={i}
                style={{ ["--i" as any]: i } as React.CSSProperties}
              />
            ))}
          </div>
        ) : null}
        {variant === "bar" ? (
          <div
            className={["bar", v === false ? "sweeping" : ""]
              .filter(Boolean)
              .join(" ")}
            role="progressbar"
            aria-labelledby={labelId}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={v === false ? undefined : v}
            aria-valuetext={v === false ? undefined : `${v}%`}
            style={barStyle}
          >
            <span className="fill" />
          </div>
        ) : null}
        <div className="row">
          {variant === "spinner" ? (
            <span className="spinner" aria-hidden="true">
              {Array.from({ length: 8 }, (_, i) => (
                <span
                  key={i}
                  style={{ ["--i" as any]: i } as React.CSSProperties}
                />
              ))}
            </span>
          ) : null}
          <span
            className="label"
            id={labelId}
            aria-hidden="true"
            style={{ display: showLabel ? undefined : "none" }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
});

Busy.displayName = "Busy";

export default Busy;
