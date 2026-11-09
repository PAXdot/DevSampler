"use client";

import * as React from "react";

/**
 * React port of PageProgress.vue (+ ProgressBar.vue) from vue-smart-loading-kit
 * by Navid Jaberi — https://github.com/navidjaberi/vue-smart-loading-kit
 * Licensed MIT. Faithful translation: same visual result, behaviour and
 * public options (Vue props -> React props). ProgressBar.vue's rendering is
 * inlined below as an internal helper since this component owns it.
 */

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ---------------------------- progress bar bits --------------------------- */

function clampProgress(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.min(100, Math.max(0, value))
    : null;
}

function progressA11y(label: string | undefined, progress: number | null) {
  if (!label) return { "aria-hidden": true } as const;
  if (progress !== null) {
    return {
      role: "progressbar" as const,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(progress),
      "aria-label": label,
    };
  }
  return {
    role: "status" as const,
    "aria-live": "polite" as const,
    "aria-busy": true,
  };
}

function resolveTrack(track: boolean | string | undefined) {
  if (!track) return null;
  return track === true
    ? {
        attr: "auto",
        color: "color-mix(in srgb, currentColor 20%, transparent)",
      }
    : { attr: track, color: track };
}

function ProgressBarInline({
  value,
  color,
  thickness = 4,
  track = true,
  label,
}: {
  value?: number;
  color?: string;
  thickness?: number;
  track?: boolean | string;
  label?: string;
}) {
  const progress = clampProgress(value);
  const trackInfo = resolveTrack(track);
  const a11y = progressA11y(label, progress);

  return (
    <div
      className={cx(
        "vslk-progress",
        progress === null && "vslk-progress--indeterminate",
      )}
      data-vslk-track={trackInfo?.attr}
      style={
        {
          height: `${thickness}px`,
          color,
          ["--vslk-progress-track" as string]:
            trackInfo?.color ?? "transparent",
        } as React.CSSProperties
      }
      {...a11y}
    >
      <div
        className="vslk-progress__bar"
        style={progress === null ? undefined : { width: `${progress}%` }}
      />
      {label && progress === null ? (
        <span className="vslk-sr-only">{label}</span>
      ) : null}
    </div>
  );
}

/* ------------------------------- controller -------------------------------- */

export interface RouterLike {
  beforeEach(guard: (...args: never[]) => unknown): () => void;
  afterEach(hook: (...args: never[]) => unknown): () => void;
  onError(handler: (...args: never[]) => unknown): () => void;
}

export interface PageProgress {
  readonly loading: boolean;
  subscribe(listener: () => void): () => void;
  start(): void;
  done(): void;
}

/** Counter-based controller: several parallel tasks keep the bar up until the last one finishes. */
export function createPageProgress(): PageProgress {
  let pending = 0;
  const listeners = new Set<() => void>();
  const emit = () => listeners.forEach((l) => l());
  return {
    get loading() {
      return pending > 0;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    start() {
      pending++;
      emit();
    },
    done() {
      pending = Math.max(0, pending - 1);
      emit();
    },
  };
}

/**
 * Starts the bar when a navigation begins and finishes it when it ends or
 * fails. A navigation holds exactly one slot however many times it is
 * redirected, and only releases its own slot, so it never ends a task that
 * was started manually.
 */
function bindRouter(progress: PageProgress, router: RouterLike): () => void {
  let navigating = false;
  const begin = () => {
    if (navigating) return;
    navigating = true;
    progress.start();
  };
  const end = () => {
    if (!navigating) return;
    navigating = false;
    progress.done();
  };
  const offs = [
    router.beforeEach(begin),
    router.afterEach(end),
    router.onError(end),
  ];
  return () => offs.forEach((off) => off());
}

const PageProgressContext = React.createContext<PageProgress | null>(null);

/** Access the nearest provider's controller, to wrap any task:
 *    const progress = usePageProgress();
 *    progress.start(); await fetchData(); progress.done();
 */
export function usePageProgress(): PageProgress {
  const ctx = React.useContext(PageProgressContext);
  const fallback = React.useRef<PageProgress>();
  if (!fallback.current) fallback.current = createPageProgress();
  if (ctx) return ctx;
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "[vue-smart-loading-kit] usePageProgress() needs an ancestor <PageProgressProvider>. Without it, start() and done() do nothing.",
    );
  }
  return fallback.current;
}

/** App-wide provider, equivalent to the Vue plugin's PAGE_PROGRESS injection. */
export function PageProgressProvider({
  value,
  children,
}: {
  value?: PageProgress;
  children: React.ReactNode;
}) {
  const own = React.useRef<PageProgress>();
  if (!own.current) own.current = createPageProgress();
  return (
    <PageProgressContext.Provider value={value ?? own.current}>
      {children}
    </PageProgressContext.Provider>
  );
}

/* ----------------------------- delayed loading ----------------------------- */

const DEFAULT_DELAY = 200;
const DEFAULT_MIN_DURATION = 500;

/**
 * Turns a raw `loading` flag into "should a loader be visible":
 * - a load shorter than `delay` never shows a loader (no flash);
 * - once shown, the loader stays for at least `minDuration`;
 * - a load that restarts while the loader is still up keeps it up.
 */
function useDelayedLoading(
  loading: boolean,
  options: { delay?: number; minDuration?: number } = {},
): boolean {
  const [show, setShow] = React.useState(false);
  const shownAtRef = React.useRef(0);
  const delayTimer = React.useRef<ReturnType<typeof setTimeout>>();
  const hideTimer = React.useRef<ReturnType<typeof setTimeout>>();
  const showRef = React.useRef(show);
  showRef.current = show;

  React.useEffect(() => {
    const delay = Math.max(0, options.delay ?? DEFAULT_DELAY);
    const minDuration = Math.max(
      0,
      options.minDuration ?? DEFAULT_MIN_DURATION,
    );

    if (loading) {
      clearTimeout(hideTimer.current);
      hideTimer.current = undefined;
      if (showRef.current || delayTimer.current) return;

      if (delay === 0) {
        shownAtRef.current = Date.now();
        setShow(true);
      } else {
        delayTimer.current = setTimeout(() => {
          delayTimer.current = undefined;
          shownAtRef.current = Date.now();
          setShow(true);
        }, delay);
      }
      return;
    }

    clearTimeout(delayTimer.current);
    delayTimer.current = undefined;
    if (!showRef.current) return;

    const remaining = minDuration - (Date.now() - shownAtRef.current);
    if (remaining <= 0) {
      setShow(false);
    } else {
      hideTimer.current = setTimeout(() => {
        hideTimer.current = undefined;
        setShow(false);
      }, remaining);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  React.useEffect(() => {
    return () => {
      clearTimeout(delayTimer.current);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return show;
}

/* --------------------------------- the bar --------------------------------- */

/* Visuals. The real duration is unknown, so the bar starts at 10% and
   eases toward 90% (each step covers a tenth of the remaining distance);
   done() fills it to 100% and it fades out. A task shorter than `delay`
   never shows it at all. */
const START = 10;
const CEILING = 90;
const TRICKLE_MS = 200;
const FINISH_MS = 400;

export interface PageProgressProps {
  color?: string;
  /** Bar height in px. */
  thickness?: number;
  /** ms a task must last before the bar appears. */
  delay?: number;
  /** Announced to screen readers while the bar is visible. */
  label?: string;
  /** Follow this router's navigations (instead of using a provider). */
  router?: RouterLike;
  /** Drive the bar from a specific controller (defaults to the nearest provider's, else a private one). */
  progress?: PageProgress;
}

export default function PageProgress({
  color,
  thickness = 3,
  delay = 200,
  label,
  router,
  progress: progressProp,
}: PageProgressProps) {
  const injected = React.useContext(PageProgressContext);
  const privateProgress = React.useRef<PageProgress>();
  if (!privateProgress.current) privateProgress.current = createPageProgress();
  const progress = progressProp ?? injected ?? privateProgress.current;

  React.useEffect(() => {
    if (!router) return;
    return bindRouter(progress, router);
  }, [router, progress]);

  const [loading, setLoading] = React.useState(progress.loading);
  React.useEffect(() => {
    setLoading(progress.loading);
    return progress.subscribe(() => setLoading(progress.loading));
  }, [progress]);

  const shown = useDelayedLoading(loading, { delay, minDuration: 0 });

  const [visible, setVisible] = React.useState(false);
  const [finishing, setFinishing] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const visibleRef = React.useRef(visible);
  visibleRef.current = visible;
  const finishingRef = React.useRef(finishing);
  finishingRef.current = finishing;
  const trickleRef = React.useRef<ReturnType<typeof setInterval>>();
  const finishTimerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const begin = React.useCallback(() => {
    clearTimeout(finishTimerRef.current);
    clearInterval(trickleRef.current);
    setVisible(true);
    setFinishing(false);
    setValue(START);
    trickleRef.current = setInterval(() => {
      setValue((v) => v + (CEILING - v) * 0.1);
    }, TRICKLE_MS);
  }, []);

  React.useEffect(() => {
    if (shown && !visibleRef.current) begin();
  }, [shown, begin]);

  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (loading) {
      // a new task while the bar was fading out: pick up again, no flicker
      if (finishingRef.current) begin();
      return;
    }
    if (!visibleRef.current) return; // finished within the delay: never shown
    clearInterval(trickleRef.current);
    setValue(100);
    setFinishing(true);
    finishTimerRef.current = setTimeout(() => {
      setVisible(false);
      setFinishing(false);
      setValue(0);
    }, FINISH_MS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, begin]);

  React.useEffect(() => {
    return () => {
      clearInterval(trickleRef.current);
      clearTimeout(finishTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cx(
        "vslk-page-progress",
        finishing && "vslk-page-progress--done",
      )}
    >
      <ProgressBarInline
        value={value}
        color={color}
        thickness={thickness}
        track={false}
        label={label}
      />
    </div>
  );
}
