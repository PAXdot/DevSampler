"use client";

import * as React from "react";

/* ------------------------------------------------------------------ */
/*  TimeRuler — pick a duration on a draggable ruler.                  */
/*  Styled after Apple HIG: system fonts, system colours, materials.   */
/* ------------------------------------------------------------------ */

export type TimeRulerDetail = {
  /** duration in minutes */
  minutes: number;
  start: Date;
  end: Date;
  /** "HH:MM" 24h */
  startLabel: string;
  endLabel: string;
  /** end falls on a later day than start */
  nextDay: boolean;
};

export type BlockedRange = { from: string; to: string };

export type TimeRulerProps = {
  /** start time, "HH:MM" (24h) or "now" (follows the clock). Default "13:37". */
  start?: string;
  /** let people change the start in a popover picker. Default true. */
  startEditable?: boolean;
  onStartChange?: (start: string) => void;
  /** initial duration in minutes. Default 494 (8h 14m). */
  defaultValue?: number;
  /** controlled duration in minutes */
  value?: number;
  onChange?: (minutes: number, detail: TimeRulerDetail) => void;
  /** shortest allowed duration, minutes. Default 0. */
  min?: number;
  /** length of the ruler, hours. Default 24. */
  maxHours?: number;
  /** clock ranges the end can't cross, e.g. a booked room: [{ from: "17:00", to: "18:00" }] */
  blocked?: BlockedRange[];
  /** snap step in minutes. Default 1. */
  step?: number;
  /** quick chips under the ruler, in minutes. Pass [] to hide. */
  presets?: number[];
  /** show hour labels under the ruler. Default true. */
  labels?: boolean;
  format?: "24h" | "12h";
  theme?: "dark" | "light";
  /** tint for badge, cursor and active chips. Defaults to HIG systemRed. */
  accent?: string;
  /** replace the badge text, e.g. add a price */
  formatBadge?: (minutes: number, detail: TimeRulerDetail) => React.ReactNode;
  /** playful labels on 04:20, 13:37, 11:11 … */
  easterEggs?: boolean;
  /** sweep the cursor in on mount */
  intro?: boolean;
  /** form field name; submits the duration in minutes */
  name?: string;
  disabled?: boolean;
  className?: string;
};

/* HIG system colours */
const THEMES = {
  dark: {
    card: "#1C1C1E",
    fill: "rgba(118,118,128,.24)",
    fillHi: "rgba(118,118,128,.36)",
    label: "#FFFFFF",
    secondary: "rgba(235,235,245,.6)",
    tertiary: "rgba(235,235,245,.3)",
    separator: "rgba(84,84,88,.65)",
    tick: "rgba(235,235,245,.22)",
    tickHot: "rgba(235,235,245,.6)",
    material: "rgba(44,44,46,.8)",
    red: "#FF453A",
    blue: "#0A84FF",
    cardShadow: "0 0 0 .5px rgba(255,255,255,.06), 0 12px 40px rgba(0,0,0,.45)",
    popShadow: "0 0 0 .5px rgba(255,255,255,.1), 0 18px 50px rgba(0,0,0,.55)",
  },
  light: {
    card: "#FFFFFF",
    fill: "rgba(118,118,128,.12)",
    fillHi: "rgba(118,118,128,.2)",
    label: "#000000",
    secondary: "rgba(60,60,67,.6)",
    tertiary: "rgba(60,60,67,.3)",
    separator: "rgba(60,60,67,.29)",
    tick: "rgba(60,60,67,.2)",
    tickHot: "rgba(60,60,67,.55)",
    material: "rgba(250,250,252,.82)",
    red: "#FF3B30",
    blue: "#007AFF",
    cardShadow: "0 0 0 .5px rgba(0,0,0,.05), 0 10px 30px rgba(0,0,0,.08)",
    popShadow: "0 0 0 .5px rgba(0,0,0,.08), 0 18px 50px rgba(0,0,0,.18)",
  },
} as const;
type Theme = (typeof THEMES)[keyof typeof THEMES];

const FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', Inter, 'Segoe UI', Roboto, sans-serif";
const EASE = "cubic-bezier(.2,.9,.25,1)";

/* playful labels for the end time */
const EGGS: Record<string, string> = {
  "04:20": "blaze it",
  "16:20": "blaze it",
  "13:37": "leet",
  "11:11": "make a wish",
  "23:11": "make a wish",
  "03:14": "π o'clock",
  "15:14": "π o'clock",
  "04:04": "time not found",
  "12:34": "1-2-3-4",
  "00:00": "midnight",
  "12:00": "high noon",
  "07:47": "boarding",
  "10:10": "watch-ad time",
  "22:22": "déjà vu",
};

/* ---------- time helpers ---------- */

const pad = (n: number) => String(n).padStart(2, "0");
const wrap = (m: number) => ((m % 1440) + 1440) % 1440;
const parse = (s: string) => {
  const [h, m] = s.split(":").map(Number);
  return wrap((h || 0) * 60 + (m || 0));
};
const key24 = (mins: number) => `${pad(Math.floor(wrap(mins) / 60))}:${pad(wrap(mins) % 60)}`;
const nowMinutes = () => {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
};
/** "8h 14m", "45m", "2h" */
export const durLabel = (m: number) => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return h && mm ? `${h}h ${mm}m` : h ? `${h}h` : `${mm}m`;
};
const makeDetail = (startMin: number, v: number): TimeRulerDetail => {
  const s = new Date();
  s.setHours(Math.floor(startMin / 60), startMin % 60, 0, 0);
  const e = new Date(s.getTime() + v * 60000);
  return { minutes: v, start: s, end: e, startLabel: key24(startMin), endLabel: key24(startMin + v), nextDay: e.toDateString() !== s.toDateString() };
};

/* ---------- rolling digits ---------- */

function Digit({ d }: { d: number }) {
  return (
    <span
      className="relative inline-block h-[1.3em] overflow-hidden"
      style={{
        width: "0.6em",
        maskImage: "linear-gradient(transparent, #000 22%, #000 78%, transparent)",
        WebkitMaskImage: "linear-gradient(transparent, #000 22%, #000 78%, transparent)",
      }}
    >
      <span className="absolute inset-x-0 top-0 flex flex-col items-center" style={{ transform: `translateY(${-d * 1.3}em)`, transition: `transform .42s ${EASE}` }}>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="block h-[1.3em] leading-[1.3]">
            {i}
          </span>
        ))}
      </span>
    </span>
  );
}

function Roll({ text }: { text: string }) {
  const chars = text.split("");
  return (
    <span className="inline-flex items-center" aria-hidden="true">
      {chars.map((c, i) => {
        const k = chars.length - i;
        return /\d/.test(c) ? (
          <Digit key={`d${k}`} d={Number(c)} />
        ) : (
          <span key={`c${k}`} className="inline-block leading-[1.3]">
            {c}
          </span>
        );
      })}
    </span>
  );
}

function clockParts(mins: number, format: "24h" | "12h") {
  const t = wrap(mins);
  const h = Math.floor(t / 60);
  const m = t % 60;
  return format === "24h" ? { text: `${pad(h)}:${pad(m)}`, ampm: "" } : { text: `${h % 12 || 12}:${pad(m)}`, ampm: h < 12 ? "AM" : "PM" };
}

/* ---------- HIG wheel picker ---------- */

const ROW = 34;

function Wheel({ items, index, onChange, label, color, width }: { items: string[]; index: number; onChange: (i: number) => void; label: string; color: string; width: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const paint = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const c = el.scrollTop / ROW;
    const kids = el.children;
    for (let i = 1; i < kids.length - 1; i++) {
      const d = i - 1 - c;
      const a = Math.max(-1, Math.min(1, d / 2.6));
      const n = kids[i] as HTMLElement;
      n.style.transform = `perspective(400px) rotateX(${-a * 62}deg) scale(${1 - Math.abs(a) * 0.12})`;
      n.style.opacity = String(1 - Math.min(1, Math.abs(d) / 2.7) * 0.75);
    }
  }, []);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = index * ROW;
    paint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (i: number) => ref.current?.scrollTo({ top: Math.max(0, Math.min(items.length - 1, i)) * ROW, behavior: "smooth" });

  return (
    <div
      ref={ref}
      role="spinbutton"
      tabIndex={0}
      aria-label={label}
      aria-valuenow={index}
      aria-valuetext={items[index]}
      onScroll={() => {
        requestAnimationFrame(paint);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          const el = ref.current;
          if (el) onChange(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollTop / ROW))));
        }, 90);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") go(index - 1);
        else if (e.key === "ArrowDown") go(index + 1);
        else return;
        e.preventDefault();
      }}
      className="relative h-[170px] snap-y snap-mandatory overflow-y-scroll overscroll-contain outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ width, color }}
    >
      <div style={{ height: ROW * 2 }} />
      {items.map((it, i) => (
        <div key={it + i} onClick={() => go(i)} className="flex snap-center items-center justify-center text-[21px] tabular-nums" style={{ height: ROW }}>
          {it}
        </div>
      ))}
      <div style={{ height: ROW * 2 }} />
    </div>
  );
}

function StartPicker({
  value,
  format,
  theme,
  onPick,
  onNow,
  onClose,
}: {
  value: number;
  format: "24h" | "12h";
  theme: Theme;
  onPick: (mins: number) => void;
  onNow: () => void;
  onClose: () => void;
}) {
  const h = Math.floor(value / 60);
  const m = value % 60;
  const hours = format === "24h" ? Array.from({ length: 24 }, (_, i) => pad(i)) : Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) => pad(i));
  const hIndex = format === "24h" ? h : (h % 12 || 12) - 1;
  const pm = h >= 12;

  const setH = (i: number) => onPick((format === "24h" ? i : ((i + 1) % 12) + (pm ? 12 : 0)) * 60 + m);
  const setM = (i: number) => onPick(h * 60 + i);
  const setAP = (i: number) => onPick(((h % 12) + (i ? 12 : 0)) * 60 + m);

  const ref = React.useRef<HTMLDivElement>(null);
  /* open upwards when there is no room below */
  const [up, setUp] = React.useState(false);
  React.useLayoutEffect(() => {
    const el = ref.current;
    const anchor = el?.parentElement;
    if (!el || !anchor) return;
    const r = anchor.getBoundingClientRect();
    const h = el.getBoundingClientRect().height;
    setUp(r.bottom + h + 8 > window.innerHeight && r.top - h - 8 > 0);
  }, []);
  React.useEffect(() => {
    const anchor = ref.current?.parentElement;
    const onDown = (e: PointerEvent) => !anchor?.contains(e.target as Node) && onClose();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    (ref.current?.querySelector("[role=spinbutton]") as HTMLElement | null)?.focus({ preventScroll: true });
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Start time"
      className={`absolute left-0 z-50 rounded-[14px] p-2 [animation:tr-pop_.24s_cubic-bezier(.2,.9,.25,1)] ${up ? "bottom-[calc(100%+8px)] origin-bottom-left" : "top-[calc(100%+8px)] origin-top-left"}`}
      style={{
        width: format === "12h" ? 268 : 220,
        background: theme.material,
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        boxShadow: theme.popShadow,
      }}
    >
      <style>{`@keyframes tr-pop{from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
      <div className="flex items-center justify-between px-2 pb-1 pt-0.5">
        <span className="text-[13px]" style={{ color: theme.secondary }}>
          Starts at
        </span>
        <button type="button" onClick={onNow} className="rounded-full px-2.5 py-1 text-[13px] font-medium" style={{ color: theme.blue, background: `${theme.blue}1f` }}>
          Now
        </button>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="pointer-events-none absolute inset-x-1 top-1/2 -translate-y-1/2 rounded-[8px]" style={{ height: ROW, background: theme.fill }} />
        <Wheel items={hours} index={hIndex} onChange={setH} label="Hours" color={theme.label} width={62} />
        <span className="relative pb-0.5 text-[21px]" style={{ color: theme.label }}>
          :
        </span>
        <Wheel items={minutes} index={m} onChange={setM} label="Minutes" color={theme.label} width={62} />
        {format === "12h" && <Wheel items={["AM", "PM"]} index={pm ? 1 : 0} onChange={setAP} label="AM or PM" color={theme.label} width={58} />}
      </div>
      <div className="mt-1 border-t pt-1" style={{ borderColor: theme.separator, borderTopWidth: 0.5 }}>
        <button type="button" onClick={onClose} className="h-9 w-full rounded-[10px] text-[15px] font-semibold" style={{ color: theme.blue }}>
          Done
        </button>
      </div>
    </div>
  );
}

/* ---------- main ---------- */

export function TimeRuler({
  start = "13:37",
  startEditable = true,
  onStartChange,
  defaultValue = 494,
  value: controlled,
  onChange,
  min = 0,
  maxHours = 24,
  blocked = [],
  step = 1,
  presets = [15, 30, 60, 480],
  labels = true,
  format = "24h",
  theme = "dark",
  accent,
  formatBadge,
  easterEggs = true,
  intro = true,
  name,
  disabled = false,
  className = "",
}: TimeRulerProps) {
  const t = THEMES[theme];
  const tint = accent ?? t.red;
  const max = Math.max(1, maxHours) * 60;

  /* ---- start time: fixed or live "now" ---- */
  const [startState, setStartState] = React.useState(start);
  React.useEffect(() => setStartState(start), [start]);
  const live = startState === "now";
  const [clock, setClock] = React.useState(() => nowMinutes());
  React.useEffect(() => {
    if (!live) return;
    setClock(nowMinutes());
    const id = setInterval(() => setClock(nowMinutes()), 1000);
    return () => clearInterval(id);
  }, [live]);
  const startMin = live ? clock : parse(startState);
  const [picking, setPicking] = React.useState(false);
  const changeStart = (s: string) => {
    setStartState(s);
    onStartChange?.(s);
  };
  const closePicker = React.useCallback(() => setPicking(false), []);

  /* ---- allowed range: min … first blocked range ahead ---- */
  const zones = blocked
    .map((b) => ({ off: wrap(parse(b.from) - startMin), len: wrap(parse(b.to) - parse(b.from)) || 1440 }))
    .filter((z) => z.off < max);
  const hardMax = Math.min(max, ...zones.filter((z) => z.off > 0).map((z) => z.off));
  const lo = Math.min(Math.max(0, min), hardMax);
  const clamp = React.useCallback((v: number) => Math.min(hardMax, Math.max(lo, v)), [hardMax, lo]);

  const [inner, setInner] = React.useState(defaultValue);
  const value = clamp(controlled ?? inner);
  const end = startMin + value;
  const detail = React.useMemo(() => makeDetail(startMin, value), [startMin, value]);

  const set = React.useCallback(
    (raw: number) => {
      if (disabled) return;
      const v = clamp(Math.round(raw / step) * step);
      if (controlled === undefined) setInner(v);
      onChange?.(v, makeDetail(startMin, v));
    },
    [clamp, controlled, disabled, onChange, startMin, step],
  );

  /* ---- easter egg, revealed only once the value rests there ---- */
  const eggNow = easterEggs && !formatBadge ? EGGS[key24(end)] : undefined;
  const [egg, setEgg] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    if (!eggNow) {
      setEgg(undefined);
      return;
    }
    const id = setTimeout(() => setEgg(eggNow), 320);
    return () => clearTimeout(id);
  }, [eggNow]);

  /* ---- ruler geometry ---- */
  const tickEvery = [5, 10, 15, 30, 60, 120, 180].find((s) => max / s <= 24) ?? 240;
  const labelEvery = [15, 30, 60, 120, 180, 240, 360, 480, 720].find((s) => max / s <= 4 && s % tickEvery === 0) ?? max;
  const ticks = React.useMemo(() => Array.from({ length: Math.floor(max / tickEvery) + 1 }, (_, i) => i * tickEvery), [max, tickEvery]);
  const INSET = 4;
  const pct = (v: number) => `calc(${INSET}px + ${v / max} * (100% - ${INSET * 2}px))`;

  const rootRef = React.useRef<HTMLDivElement>(null);
  const rulerRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const tickRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const sim = React.useRef({ target: intro ? 0 : value, pos: intro ? 0 : value, vel: 0, bpos: intro ? 0 : value, bvel: 0, raf: 0 });

  const kick = React.useCallback(() => {
    const s = sim.current;
    if (s.raf) return;
    const loop = () => {
      const ruler = rulerRef.current;
      const root = rootRef.current;
      if (!ruler || !root) {
        s.raf = 0;
        return;
      }
      s.vel = (s.vel + (s.target - s.pos) * 0.2) * 0.68;
      s.pos += s.vel;
      s.bvel = (s.bvel + (s.pos - s.bpos) * 0.11) * 0.74;
      s.bpos += s.bvel;

      const span = ruler.offsetWidth - INSET * 2;
      const toX = (v: number) => INSET + (v / max) * span;
      const cx = toX(s.pos);
      if (cursorRef.current) cursorRef.current.style.transform = `translateX(${cx - 1}px)`;
      tickRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = Math.abs(toX(ticks[i] ?? 0) - cx) / 24;
        const g = Math.max(0, 1 - d * d);
        el.style.transform = `scaleY(${0.6 + g * 0.4})`;
        el.style.opacity = String(0.6 + g * 0.4);
      });
      const b = badgeRef.current;
      if (b) {
        const bw = b.offsetWidth;
        const rw = root.offsetWidth;
        const bx = Math.min(rw - bw / 2 - 6, Math.max(bw / 2 + 6, ruler.offsetLeft + toX(s.bpos)));
        const tilt = Math.max(-7, Math.min(7, s.bvel * (360 / max) * 2.4));
        b.style.transform = `translateX(${bx - bw / 2}px) rotate(${tilt}deg)`;
      }
      const settled = Math.abs(s.vel) < 0.01 && Math.abs(s.target - s.pos) < 0.01 && Math.abs(s.bvel) < 0.01 && Math.abs(s.pos - s.bpos) < 0.01;
      if (settled) {
        s.pos = s.bpos = s.target;
        s.raf = 0;
        return;
      }
      s.raf = requestAnimationFrame(loop);
    };
    s.raf = requestAnimationFrame(loop);
  }, [max, ticks]);

  React.useEffect(() => {
    sim.current.target = value;
    kick();
  }, [value, kick]);
  React.useEffect(() => {
    sim.current.bvel += 0.0001; // re-centre the badge when its width changes
    kick();
  }, [egg, value, startMin, kick]);
  React.useEffect(() => {
    const ro = new ResizeObserver(() => kick());
    if (rootRef.current) ro.observe(rootRef.current);
    const s = sim.current;
    return () => {
      ro.disconnect();
      cancelAnimationFrame(s.raf);
      s.raf = 0;
    };
  }, [kick]);

  const fromX = (clientX: number) => {
    const el = rulerRef.current!;
    const r = el.getBoundingClientRect();
    const k = r.width / el.offsetWidth; // handles CSS scale
    return ((clientX - r.left - INSET * k) / (r.width - INSET * 2 * k)) * max;
  };
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    const el = rulerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (disabled) return;
      e.preventDefault();
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      set(sim.current.target + Math.sign(d) * Math.max(step, Math.min(30, Math.abs(d) * 0.5)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [set, step, disabled]);

  const sp = clockParts(startMin, format);
  const ep = clockParts(end, format);
  const chip = "flex h-11 shrink-0 items-center justify-center gap-1 rounded-[12px] px-3 text-[15px] font-semibold tabular-nums";
  const badge = formatBadge?.(value, detail);
  const ring = { ["--tw-ring-color" as string]: t.blue } as React.CSSProperties;

  return (
    <div
      ref={rootRef}
      className={`relative w-full max-w-[380px] rounded-[20px] px-3.5 pb-3.5 pt-4 ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`}
      style={{ background: t.card, boxShadow: t.cardShadow, fontFamily: FONT, letterSpacing: "-0.01em", WebkitFontSmoothing: "antialiased" }}
    >
      {name && <input type="hidden" name={name} value={value} />}

      <div className="flex items-center gap-2.5">
        {/* start */}
        <div className="relative">
          <button
            type="button"
            disabled={!startEditable}
            aria-haspopup="dialog"
            aria-expanded={picking}
            onClick={() => setPicking((p) => !p)}
            className={`${chip} outline-none transition-colors focus-visible:ring-2`}
            style={{ ...ring, background: picking ? t.fillHi : t.fill, color: t.label, cursor: startEditable ? "pointer" : "default" }}
          >
            <span className="sr-only">{`Starts ${sp.text} ${sp.ampm}`}</span>
            <Roll text={sp.text} />
            {sp.ampm && (
              <span className="text-[13px] font-medium" style={{ color: t.secondary }}>
                {sp.ampm}
              </span>
            )}
            {live && <span className="ml-0.5 h-1.5 w-1.5 rounded-full" style={{ background: t.blue }} aria-hidden="true" />}
          </button>
          {picking && <StartPicker value={startMin} format={format} theme={t} onPick={(m) => changeStart(key24(m))} onNow={() => changeStart("now")} onClose={closePicker} />}
        </div>

        {/* ruler */}
        <div
          ref={rulerRef}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-label="Duration"
          aria-valuemin={lo}
          aria-valuemax={hardMax}
          aria-valuenow={value}
          aria-valuetext={`${durLabel(value)}, ends at ${key24(end)}${detail.nextDay ? " tomorrow" : ""}`}
          aria-disabled={disabled}
          onPointerDown={(e) => {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            setDragging(true);
            set(fromX(e.clientX));
          }}
          onPointerMove={(e) => dragging && set(fromX(e.clientX))}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
          onKeyDown={(e) => {
            const big = e.shiftKey ? 15 : step;
            if (e.key === "ArrowRight" || e.key === "ArrowUp") set(value + big);
            else if (e.key === "ArrowLeft" || e.key === "ArrowDown") set(value - big);
            else if (e.key === "Home") set(lo);
            else if (e.key === "End") set(hardMax);
            else return;
            e.preventDefault();
          }}
          className="relative h-11 min-w-0 flex-1 touch-none select-none rounded-lg outline-none focus-visible:ring-2"
          style={{ ...ring, cursor: dragging ? "grabbing" : "grab" }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[28px] -translate-y-1/2">
            {/* out-of-range areas and blocked zones */}
            {lo > 0 && <div className="absolute inset-y-[-3px] left-0 rounded-[4px]" style={{ width: pct(lo), background: t.fill }} />}
            {hardMax < max && <div className="absolute inset-y-[-3px] right-0 rounded-[4px]" style={{ left: pct(hardMax), background: t.fill }} />}
            {zones.map((z, i) => (
              <div
                key={i}
                className="absolute inset-y-[-3px] rounded-[4px]"
                style={{
                  left: pct(z.off),
                  width: `calc(${Math.min(z.len, max - z.off) / max} * (100% - ${INSET * 2}px))`,
                  background: `repeating-linear-gradient(135deg, ${t.tertiary} 0 1.5px, transparent 1.5px 5px)`,
                }}
              />
            ))}
            {ticks.map((v, i) => (
              <span
                key={v}
                ref={(el) => {
                  tickRefs.current[i] = el;
                }}
                className="absolute top-0 h-full w-px origin-center rounded-full"
                style={{ left: pct(v), background: v % labelEvery === 0 ? t.tickHot : t.tick, transform: "scaleY(.6)" }}
              />
            ))}
            <div ref={cursorRef} className="absolute left-0 top-[-3px] h-[34px] w-[2px] rounded-full" style={{ background: tint, boxShadow: `0 0 10px ${tint}` }} />
          </div>
          {labels && (
            <div className="pointer-events-none absolute inset-x-0 -bottom-3.5 h-3 text-[10px] font-medium tabular-nums" style={{ color: t.tertiary }} aria-hidden="true">
              {ticks
                .filter((v) => v % labelEvery === 0)
                .map((v) => (
                  <span key={v} className="absolute -translate-x-1/2 leading-3" style={{ left: pct(v) }}>
                    {v % 60 ? `${v}m` : `${v / 60}h`}
                  </span>
                ))}
            </div>
          )}
        </div>

        {/* end */}
        <div className={`${chip} relative`} style={{ background: t.fill, color: t.label }}>
          <span className="sr-only">{`Ends ${ep.text} ${ep.ampm}${detail.nextDay ? ", next day" : ""}`}</span>
          <Roll text={ep.text} />
          {ep.ampm && (
            <span className="text-[13px] font-medium" style={{ color: t.secondary }}>
              {ep.ampm}
            </span>
          )}
          <span
            className="absolute right-1 top-0.5 text-[10px] font-semibold transition-[opacity,transform] duration-300"
            style={{ color: t.secondary, opacity: detail.nextDay ? 1 : 0, transform: detail.nextDay ? "none" : "translateY(3px)" }}
            aria-hidden="true"
          >
            +1
          </span>
        </div>
      </div>

      {/* presets */}
      {presets.length > 0 && (
        <div className={`flex flex-wrap gap-1.5 ${labels ? "mt-6" : "mt-3"}`}>
          {presets.map((p) => {
            const on = p === value;
            const off = p < lo || p > hardMax;
            return (
              <button
                key={p}
                type="button"
                disabled={off}
                aria-pressed={on}
                onClick={() => set(p)}
                className="h-7 rounded-full px-3 text-[13px] font-medium tabular-nums outline-none transition-colors duration-200 focus-visible:ring-2 disabled:opacity-35"
                style={{ ...ring, background: on ? `${tint}26` : t.fill, color: on ? tint : t.label }}
              >
                {durLabel(p)}
              </button>
            );
          })}
        </div>
      )}

      {/* floating badge */}
      <div
        ref={badgeRef}
        aria-live="polite"
        className="pointer-events-none absolute left-0 top-[-12px] flex h-[26px] items-center whitespace-nowrap rounded-full px-2.5 text-[13px] font-semibold tabular-nums text-white will-change-transform"
        style={{ background: tint, boxShadow: `0 4px 14px ${tint}59` }}
      >
        <span className="relative flex items-center justify-center">
          <span
            className="inset-0 flex items-center justify-center gap-1 transition-[opacity,filter,transform] duration-300"
            style={{ position: egg ? "absolute" : "relative", opacity: egg ? 0 : 1, filter: egg ? "blur(4px)" : "none", transform: egg ? "translateY(-7px)" : "none" }}
          >
            {badge ?? (
              <>
                <span className="sr-only">{durLabel(value)}</span>
                {(value >= 60 || value === 0) && <Roll text={`${Math.floor(value / 60)}h`} />}
                {value % 60 > 0 && <Roll text={`${value % 60}m`} />}
              </>
            )}
          </span>
          <span
            className="inset-0 flex items-center justify-center leading-[1.3] transition-[opacity,filter,transform] duration-300"
            style={{ position: egg ? "relative" : "absolute", opacity: egg ? 1 : 0, filter: egg ? "none" : "blur(4px)", transform: egg ? "none" : "translateY(7px)" }}
          >
            {egg ?? ""}
          </span>
        </span>
      </div>
    </div>
  );
}

export default TimeRuler;
