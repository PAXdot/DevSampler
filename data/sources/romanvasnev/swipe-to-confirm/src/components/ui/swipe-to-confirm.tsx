"use client";

import * as React from "react";

/* ------------------------------------------------------------------ */
/*  SwipeToConfirm — slide the knob to the end to confirm.             */
/*  ConfirmPanel   — a ready review screen around it: card on desktop, */
/*                   bottom sheet on phones. Styled after Apple HIG.   */
/* ------------------------------------------------------------------ */

/* colours come from the shadcn theme, so light and dark mode work out of the box */
const T = {
  bg: "var(--color-background)",
  card: "var(--color-card)",
  label: "var(--color-card-foreground)",
  secondary: "var(--color-muted-foreground)",
  tertiary: "color-mix(in oklab, var(--color-muted-foreground) 55%, transparent)",
  fill: "var(--color-muted)",
  separator: "var(--color-border)",
  primary: "var(--color-primary)",
  primaryInk: "var(--color-primary-foreground)",
  green: "#22C55E",
  red: "var(--color-destructive)",
  avatar: "var(--color-muted)",
  avatarInk: "var(--color-muted-foreground)",
  grabber: "color-mix(in oklab, var(--color-muted-foreground) 40%, transparent)",
  shadow: "0 0 0 1px var(--color-border), 0 24px 60px rgb(0 0 0 / .12)",
};
type Theme = typeof T;


const FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', Inter, 'Segoe UI', Roboto, sans-serif";
const EASE = "cubic-bezier(.2,.9,.25,1)";
const SPRING = "cubic-bezier(.34,1.56,.64,1)";
const SHEET = "cubic-bezier(.32,.72,0,1)";

const CSS = `
@keyframes stc-shine{from{background-position:100% 0}to{background-position:-150% 0}}
@keyframes stc-spin{to{transform:rotate(360deg)}}
@keyframes stc-draw{to{stroke-dashoffset:0}}
@keyframes stc-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
`;

const buzz = (p: number | number[]) => {
  try {
    navigator.vibrate?.(p);
  } catch {
    /* not supported */
  }
};

/* ================================================================== */
/*  SwipeToConfirm                                                     */
/* ================================================================== */

export type SwipeState = "idle" | "loading" | "done" | "error";

export type SwipeToConfirmProps = {
  /** text on the track */
  label?: string;
  /** text after success */
  doneLabel?: string;
  /** fallback text when onConfirm throws without a message */
  errorLabel?: string;
  /** knob and fill colour. Defaults to the theme primary. */
  color?: string;
  /** how far (0–1) the knob must travel to confirm. Default 0.85. */
  threshold?: number;
  /** runs on confirm; keep the spinner while the promise is pending, throw to show an error */
  onConfirm?: () => Promise<unknown> | unknown;
  /** fires once the done state shows */
  onDone?: () => void;
  /** go back to idle this many ms after success; 0 keeps the done state */
  resetAfter?: number;
  disabled?: boolean;
  /** icon inside the knob */
  icon?: React.ReactNode;
  className?: string;
};

export function SwipeToConfirm({
  label = "Slide to confirm",
  doneLabel = "Done",
  errorLabel = "Something went wrong",
  color,
  threshold = 0.85,
  onConfirm,
  onDone,
  resetAfter = 0,
  disabled = false,
  icon,
  className = "",
}: SwipeToConfirmProps) {
  const t = T;
  const tint = color ?? t.primary;
  const knobInk = color ? "#fff" : t.primaryInk;
  const [state, setState] = React.useState<SwipeState>("idle");
  const [error, setError] = React.useState("");

  const trackRef = React.useRef<HTMLDivElement>(null);
  const knobRef = React.useRef<HTMLDivElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const s = React.useRef({ x: 0, v: 0, max: 0, drag: false, start: 0, base: 0, raf: 0, tick: 0 });

  const paint = React.useCallback(() => {
    const { x, max } = s.current;
    const p = max > 0 ? Math.max(0, Math.min(1, x / max)) : 0;
    if (knobRef.current) {
      knobRef.current.style.transform = `translateX(${x}px)`;
      knobRef.current.setAttribute("aria-valuenow", String(Math.round(p * 100)));
    }
    if (fillRef.current) {
      fillRef.current.style.width = `${Math.max(64, x + 64)}px`;
      fillRef.current.style.opacity = String(0.22 + p * 0.33);
    }
    // the label fades out as the knob moves over it, like slide to unlock
    if (labelRef.current) labelRef.current.style.setProperty("--fade", String(Math.max(0, 1 - p * 1.8)));
  }, []);

  const measure = () => {
    const tr = trackRef.current;
    const kn = knobRef.current;
    if (tr && kn) s.current.max = tr.offsetWidth - kn.offsetWidth - 8;
  };

  const animateTo = (target: number, after?: () => void) => {
    cancelAnimationFrame(s.current.raf);
    const step = () => {
      const st = s.current;
      st.v = (st.v + (target - st.x) * 0.18) * 0.62;
      st.x += st.v;
      if (Math.abs(target - st.x) < 0.3 && Math.abs(st.v) < 0.3) {
        st.x = target;
        paint();
        after?.();
        return;
      }
      paint();
      st.raf = requestAnimationFrame(step);
    };
    s.current.raf = requestAnimationFrame(step);
  };

  React.useEffect(() => {
    const ro = new ResizeObserver(() => {
      measure();
      if (state === "loading" || state === "done") s.current.x = s.current.max;
      paint();
    });
    if (trackRef.current) ro.observe(trackRef.current);
    const st = s.current;
    return () => {
      ro.disconnect();
      cancelAnimationFrame(st.raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const confirm = async () => {
    setState("loading");
    setError("");
    animateTo(s.current.max);
    buzz([10, 40, 10]);
    try {
      await onConfirm?.();
      setState("done");
      buzz(30);
      onDone?.();
      if (resetAfter > 0) setTimeout(reset, resetAfter);
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : errorLabel);
      setState("error");
      buzz([30, 60, 30]);
      // shake, then slide home
      knobRef.current?.parentElement?.animate(
        [0, -8, 7, -5, 3, 0].map((x) => ({ transform: `translateX(${x}px)` })),
        { duration: 420, easing: "ease-out" },
      );
      setTimeout(() => {
        animateTo(0, () => setState((x) => (x === "error" ? "idle" : x)));
      }, 450);
    }
  };

  const reset = () => {
    setState("idle");
    setError("");
    s.current.x = 0;
    s.current.v = 0;
    paint();
  };

  const busy = state === "loading" || state === "done";
  const off = disabled || busy;

  return (
    <div className={className} style={{ fontFamily: FONT }}>
      <style>{CSS}</style>
      <div
        ref={trackRef}
        className="relative h-16 select-none overflow-hidden rounded-full"
        style={{
          background: state === "done" ? t.green : t.fill,
          transition: "background-color .35s",
          touchAction: "none",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {/* fill that ends right behind the knob */}
        <div className="absolute inset-0" style={{ opacity: state === "done" || state === "error" ? 0 : 1, transition: "opacity .3s" }}>
          <div ref={fillRef} className="absolute bottom-0 left-0 top-0 w-16 rounded-full" style={{ background: tint, opacity: 0.22 }} />
        </div>

        {/* label, centred on the whole track */}
        <div
          ref={labelRef}
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center text-[17px] font-semibold"
          style={{
            opacity: state === "idle" ? "var(--fade, 1)" : 0,
            transition: "opacity .2s",
            background: `linear-gradient(90deg, ${t.tertiary} 0%, ${t.tertiary} 40%, ${t.label} 50%, ${t.tertiary} 60%, ${t.tertiary} 100%) 0 0/250% 100%`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: disabled ? "none" : "stc-shine 2.4s linear infinite",
          }}
        >
          {label}
        </div>

        {/* error text */}
        <div
          role="alert"
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap pl-16 pr-4 text-[15px] font-semibold"
          style={{ color: t.red, opacity: state === "error" ? 1 : 0, transition: "opacity .2s" }}
        >
          {state === "error" ? error : ""}
        </div>

        {/* success */}
        <div
          aria-live="polite"
          className="absolute inset-0 flex items-center justify-center gap-2 text-[17px] font-semibold text-white"
          style={{
            opacity: state === "done" ? 1 : 0,
            transform: state === "done" ? "none" : "scale(.9)",
            transition: `opacity .35s ${SPRING} .12s, transform .4s ${SPRING} .12s`,
          }}
        >
          {state === "done" && (
            <>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: `stc-draw .4s ${EASE} .25s forwards` }} />
              </svg>
              {doneLabel}
            </>
          )}
        </div>

        {/* knob */}
        <div
          ref={knobRef}
          role="slider"
          tabIndex={off ? -1 : 0}
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
          aria-disabled={off}
          onPointerDown={(e) => {
            if (off || state === "error") return;
            measure();
            const st = s.current;
            st.drag = true;
            st.start = e.clientX;
            st.base = st.x;
            cancelAnimationFrame(st.raf);
            e.currentTarget.setPointerCapture(e.pointerId);
            buzz(8);
          }}
          onPointerMove={(e) => {
            const st = s.current;
            if (!st.drag) return;
            let nx = st.base + e.clientX - st.start;
            if (nx > st.max) nx = st.max + (nx - st.max) * 0.15; // rubber band at the end
            if (nx < 0) nx *= 0.2;
            st.x = nx;
            paint();
            const tick = Math.floor((Math.max(0, nx) / st.max) * 5);
            if (tick !== st.tick) {
              st.tick = tick;
              buzz(4);
            }
          }}
          onPointerUp={() => {
            const st = s.current;
            if (!st.drag) return;
            st.drag = false;
            if (st.x >= st.max * threshold) confirm();
            else animateTo(0);
          }}
          onPointerCancel={() => {
            s.current.drag = false;
            animateTo(0);
          }}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !off && state !== "error") {
              e.preventDefault();
              measure();
              confirm();
            }
          }}
          className="absolute left-1 top-1 grid h-14 w-14 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            background: state === "error" ? t.red : tint,
            boxShadow: `0 4px 14px color-mix(in srgb, ${tint} 40%, transparent)`,
            cursor: off ? "default" : "grab",
            touchAction: "none",
            opacity: state === "done" ? 0 : 1,
            scale: state === "done" ? "0.5" : "1",
            transition: "opacity .3s, scale .3s, background-color .25s",
            ["--tw-ring-color" as string]: tint,
            ["--tw-ring-offset-color" as string]: t.card,
          }}
        >
          <span className="relative grid h-[26px] w-[26px] place-items-center" style={{ color: state === "error" ? "#fff" : knobInk }}>
            <span style={{ opacity: state === "loading" ? 0 : 1, transform: state === "loading" ? "scale(.4)" : "none", transition: `opacity .2s, transform .3s ${SPRING}` }}>
              {icon ?? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              )}
            </span>
            {state === "loading" && (
              <svg className="absolute" width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ animation: "stc-spin .8s linear infinite" }} aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="2.6" />
                <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ConfirmPanel                                                       */
/* ================================================================== */

export type ConfirmRow = { label: string; value: React.ReactNode };

export type ConfirmPanelProps = {
  title: string;
  /** small line under the title, e.g. the balance */
  caption?: React.ReactNode;
  /** who or what the action is for */
  party?: { name: string; detail?: string; avatar?: React.ReactNode };
  /** big amount with a token pill */
  amount?: { value: string; token?: { symbol: string; icon?: React.ReactNode }; fiat?: string };
  /** custom content instead of the amount, e.g. a warning */
  hero?: React.ReactNode;
  rows?: ConfirmRow[];
  /** props for the slider */
  swipe?: SwipeToConfirmProps;
  /** "auto" shows a card on wide screens and a bottom sheet on phones */
  presentation?: "auto" | "card" | "sheet";
  /** sheet only */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** sheet only: cover the viewport (default) or the nearest positioned parent */
  sheetContainer?: "viewport" | "parent";
  /** sheet only: close this many ms after success */
  closeAfter?: number;
  className?: string;
};

function useIsPhone() {
  const [phone, setPhone] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const on = () => setPhone(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return phone;
}

function PanelBody({ p, t, inSheet, onClose }: { p: ConfirmPanelProps; t: Theme; inSheet: boolean; onClose?: () => void }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className={inSheet ? "flex flex-col gap-[3px]" : "flex w-full items-baseline justify-between gap-4"}>
          <span className={inSheet ? "text-[20px] font-bold leading-6" : "text-[17px] font-semibold"} style={{ color: t.label }}>
            {p.title}
          </span>
          {p.caption && (
            <span className={`${inSheet ? "text-[13px]" : "text-[15px]"} tabular-nums`} style={{ color: t.secondary }}>
              {p.caption}
            </span>
          )}
        </div>
        {inSheet && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-0.5 grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full outline-none focus-visible:ring-2"
            style={{ background: t.fill, color: t.secondary, ["--tw-ring-color" as string]: t.primary }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>

      {p.party && (
        <div className="mt-5 flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full text-[17px] font-semibold" style={{ background: t.avatar, color: t.avatarInk }}>
            {p.party.avatar ?? p.party.name.trim().charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="truncate text-[17px] font-semibold" style={{ color: t.label }}>
              {p.party.name}
            </div>
            {p.party.detail && (
              <div className="truncate text-[13px]" style={{ color: t.secondary }}>
                {p.party.detail}
              </div>
            )}
          </div>
        </div>
      )}

      {p.amount && (
        <div className="mb-1.5 mt-[26px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[56px] font-bold leading-none tabular-nums tracking-[-0.035em]" style={{ color: t.label }}>
              {p.amount.value}
            </span>
            {p.amount.token && (
              <span className="mt-1 inline-flex h-[34px] items-center gap-1.5 rounded-full pl-[5px] pr-3 text-[17px] font-semibold tracking-[-0.01em]" style={{ background: t.fill, color: t.label }}>
                {p.amount.token.icon && <span className="grid h-6 w-6 place-items-center">{p.amount.token.icon}</span>}
                {p.amount.token.symbol}
              </span>
            )}
          </div>
          {p.amount.fiat && (
            <div className="mt-1.5 text-[15px] tabular-nums" style={{ color: t.secondary }}>
              {p.amount.fiat}
            </div>
          )}
        </div>
      )}

      {p.hero && <div className="mt-5">{p.hero}</div>}

      {p.rows && p.rows.length > 0 && (
        <div className="mb-[18px] mt-5 rounded-[14px] px-3.5 py-0.5" style={{ background: t.fill }}>
          {p.rows.map((r, i) => (
            <div key={r.label} className="flex justify-between gap-4 py-[11px] text-[15px]" style={{ borderTop: i ? `.5px solid ${t.separator}` : "none" }}>
              <span style={{ color: t.secondary }}>{r.label}</span>
              <span className="text-right tabular-nums" style={{ color: t.label }}>
                {r.value}
              </span>
            </div>
          ))}
        </div>
      )}
      {(!p.rows || p.rows.length === 0) && <div className="h-5" />}
    </>
  );
}

export function ConfirmPanel(props: ConfirmPanelProps) {
  const { presentation = "auto", open = true, onOpenChange, sheetContainer = "viewport", closeAfter = 1300, swipe, className = "" } = props;
  const t = T;
  const phone = useIsPhone();
  const asSheet = presentation === "sheet" || (presentation === "auto" && phone);

  const close = React.useCallback(() => onOpenChange?.(false), [onOpenChange]);

  /* sheet: drag down to dismiss, Escape to close */
  const sheetRef = React.useRef<HTMLDivElement>(null);
  const d = React.useRef({ on: false, y: 0, dy: 0, t: 0 });
  React.useEffect(() => {
    if (!asSheet || !open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const first = sheetRef.current?.querySelector<HTMLElement>("[role=slider]");
    const id = setTimeout(() => first?.focus({ preventScroll: true }), 420);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(id);
    };
  }, [asSheet, open, close]);

  const slider = (
    <SwipeToConfirm
      {...swipe}
      onDone={() => {
        swipe?.onDone?.();
        if (asSheet && closeAfter > 0) setTimeout(close, closeAfter);
      }}
    />
  );

  if (!asSheet) {
    return (
      <div className={`w-full max-w-[380px] rounded-[28px] px-5 pb-5 pt-[22px] ${className}`} style={{ background: t.card, boxShadow: t.shadow, fontFamily: FONT, WebkitFontSmoothing: "antialiased" }}>
        <PanelBody p={props} t={t} inSheet={false} />
        {slider}
      </div>
    );
  }

  const pos = sheetContainer === "parent" ? "absolute" : "fixed";
  return (
    <div className={`${pos} inset-0 z-50 ${open ? "" : "pointer-events-none"}`} style={{ fontFamily: FONT, WebkitFontSmoothing: "antialiased" }} aria-hidden={!open}>
      <div className="absolute inset-0" onClick={close} style={{ background: "rgba(0,0,0,.4)", opacity: open ? 1 : 0, transition: "opacity .45s" }} />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={props.title}
        className={`absolute inset-x-0 bottom-0 rounded-t-[22px] px-5 pb-[max(30px,env(safe-area-inset-bottom))] pt-2 ${className}`}
        style={{
          background: t.card,
          boxShadow: "0 -10px 40px rgba(0,0,0,.18)",
          transform: open ? "translateY(0)" : "translateY(105%)",
          transition: `transform .5s ${SHEET}`,
          touchAction: "none",
        }}
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("[role=slider],button")) return;
          d.current = { on: true, y: e.clientY, dy: 0, t: performance.now() };
          e.currentTarget.setPointerCapture(e.pointerId);
          e.currentTarget.style.transition = "none";
        }}
        onPointerMove={(e) => {
          if (!d.current.on) return;
          const dy = e.clientY - d.current.y;
          d.current.dy = dy;
          e.currentTarget.style.transform = `translateY(${dy > 0 ? dy : dy * 0.15}px)`;
        }}
        onPointerUp={(e) => {
          if (!d.current.on) return;
          d.current.on = false;
          const el = e.currentTarget;
          el.style.transition = `transform .5s ${SHEET}`;
          const vel = d.current.dy / (performance.now() - d.current.t);
          el.style.transform = "";
          if (d.current.dy > 120 || vel > 0.6) close();
        }}
      >
        <span className="mx-auto mb-[18px] block h-[5px] w-9 rounded-full" style={{ background: t.grabber }} aria-hidden="true" />
        <PanelBody p={props} t={t} inSheet onClose={close} />
        {slider}
      </div>
    </div>
  );
}

export default ConfirmPanel;
