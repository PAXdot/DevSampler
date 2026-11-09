"use client";

import * as React from "react";

export interface LighthouseItem {
  src: string;
  alt?: string;
  title?: string;
  /** Swatch shown while the tile is unlit. Extracted from the image when omitted. */
  color?: string;
}

export type BeamOrigin = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

export interface LighthouseGalleryProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  items: LighthouseItem[];
  columns?: number;
  /** CSS aspect-ratio of each tile, e.g. "4 / 3". */
  aspect?: string;
  gap?: number;
  /** Where the lighthouse stands. Corners sweep back and forth; center turns full circles. */
  origin?: BeamOrigin;
  /** Milliseconds for one pass of the beam. */
  sweepDuration?: number;
  /** Beam width in degrees. */
  beamWidth?: number;
  /** How long a tile keeps glowing after the beam has passed, in milliseconds. */
  afterglow?: number;
  /** How much of the photo shows through its swatch while unlit, 0–1. */
  peek?: number;
  /** Let the pointer act as a hand torch. */
  torch?: boolean;
  torchRadius?: number;
  autoSweep?: boolean;
  /** Selected tile index; clicking a tile selects it and parks the beam. */
  selected?: number | null;
  onSelectedChange?: (index: number | null) => void;
  onSelect?: (index: number, item: LighthouseItem) => void;
  /** React 19 passes `ref` as a regular prop. */
  ref?: React.Ref<HTMLDivElement>;
}

type Tile = { cx: number; cy: number };

const RISE_MS = 140;
const UNRESOLVED = "rgb(1, 2, 3)";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function clamp01(value: number) {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function angleDelta(a: number, b: number) {
  const d = Math.abs(((a - b + 540) % 360) - 180);
  return d;
}

function hashHue(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return (h >>> 0) % 360;
}

function fallbackColor(src: string) {
  return `hsl(${hashHue(src)} 45% 38%)`;
}

// Average color of a 16×16 downsample, nudged toward a readable swatch. Needs CORS;
// callers fall back to a hashed hue when the canvas is tainted or the image refuses.
function extractColor(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 16;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) throw new Error("no 2d context");
        context.drawImage(image, 0, 0, 16, 16);
        const { data } = context.getImageData(0, 0, 16, 16);
        let r = 0;
        let g = 0;
        let b = 0;
        let weight = 0;
        for (let i = 0; i < data.length; i += 4) {
          const max = Math.max(data[i]!, data[i + 1]!, data[i + 2]!);
          const min = Math.min(data[i]!, data[i + 1]!, data[i + 2]!);
          const w = 1 + (max - min) / 64;
          r += data[i]! * w;
          g += data[i + 1]! * w;
          b += data[i + 2]! * w;
          weight += w;
        }
        r /= weight;
        g /= weight;
        b /= weight;
        const max = Math.max(r, g, b) / 255;
        const min = Math.min(r, g, b) / 255;
        const l = (max + min) / 2;
        const d = max - min;
        const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
        let h = 0;
        if (d !== 0) {
          const rn = r / 255;
          const gn = g / 255;
          const bn = b / 255;
          if (max === rn) h = ((gn - bn) / d) % 6;
          else if (max === gn) h = (bn - rn) / d + 2;
          else h = (rn - gn) / d + 4;
          h = (h * 60 + 360) % 360;
        }
        resolve(`hsl(${h.toFixed(0)} ${Math.round(Math.min(0.85, s * 1.25 + 0.1) * 100)}% ${Math.round(Math.min(0.58, Math.max(0.28, l)) * 100)}%)`);
      } catch (error) {
        reject(error);
      }
    };
    image.onerror = () => reject(new Error(`could not load ${src}`));
    image.src = src;
  });
}

function resolveBackgroundLuminance(node: HTMLElement) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;color:${UNRESOLVED};background-color:var(--background, var(--color-background, ${UNRESOLVED}))`;
  node.appendChild(probe);
  const color = getComputedStyle(probe).backgroundColor;
  probe.remove();
  if (color === UNRESOLVED) return null;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
  return (0.2126 * r! + 0.7152 * g! + 0.0722 * b!) / 255;
}

function originPoint(origin: BeamOrigin, width: number, height: number) {
  switch (origin) {
    case "top-right":
      return { x: width, y: 0, from: 90, to: 180 };
    case "bottom-left":
      return { x: 0, y: height, from: -90, to: 0 };
    case "bottom-right":
      return { x: width, y: height, from: 180, to: 270 };
    case "center":
      return { x: width / 2, y: height / 2, from: 0, to: 360 };
    default:
      return { x: 0, y: 0, from: 0, to: 90 };
  }
}

export function LighthouseGallery({
  items,
  columns = 5,
  aspect = "1 / 1",
  gap = 12,
  origin = "top-left",
  sweepDuration = 9000,
  beamWidth = 26,
  afterglow = 2200,
  peek = 0.25,
  torch = true,
  torchRadius = 180,
  autoSweep = true,
  selected: controlledSelected,
  onSelectedChange,
  onSelect,
  ref,
  className,
  style,
  ...rest
}: LighthouseGalleryProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const beamRef = React.useRef<HTMLDivElement>(null);
  const tileRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const [internalSelected, setInternalSelected] = React.useState<number | null>(null);
  const selected = controlledSelected === undefined ? internalSelected : controlledSelected;
  const [colors, setColors] = React.useState<Record<string, string>>({});
  const [dark, setDark] = React.useState(true);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const requested = React.useRef(new Set<string>());
  const kickRef = React.useRef<() => void>(() => undefined);
  const live = React.useRef({
    phase: 0,
    angle: 0,
    tiles: [] as Tile[],
    glow: [] as number[],
    written: [] as number[],
    pointer: null as { x: number; y: number } | null,
    focused: -1,
    selected: null as number | null,
    onScreen: true,
    width: 0,
    height: 0,
    raf: 0,
    last: 0,
  });

  const setRootRef = (node: HTMLDivElement | null) => {
    stageRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  live.current.selected = selected;

  const select = React.useCallback(
    (index: number | null) => {
      if (controlledSelected === undefined) setInternalSelected(index);
      onSelectedChange?.(index);
      if (index !== null) {
        const item = items[index];
        if (item) onSelect?.(index, item);
      }
    },
    [controlledSelected, onSelectedChange, onSelect, items],
  );

  React.useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(motion.matches);
    onMotion();
    motion.addEventListener("change", onMotion);
    return () => motion.removeEventListener("change", onMotion);
  }, []);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const probe = () => {
      const luminance = resolveBackgroundLuminance(stage);
      setDark(luminance === null ? true : luminance < 0.5);
    };
    probe();
    const observer = new MutationObserver(probe);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style", "data-theme"] });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    for (const item of items) {
      if (item.color || requested.current.has(item.src)) continue;
      requested.current.add(item.src);
      extractColor(item.src)
        .catch(() => fallbackColor(item.src))
        .then((color) => setColors((prev) => (prev[item.src] ? prev : { ...prev, [item.src]: color })));
    }
  }, [items]);

  React.useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => {
      const s = live.current;
      const rect = stage.getBoundingClientRect();
      s.width = rect.width;
      s.height = rect.height;
      s.tiles = tileRefs.current.slice(0, items.length).map((tile) => {
        if (!tile) return { cx: 0, cy: 0 };
        const r = tile.getBoundingClientRect();
        return { cx: r.left - rect.left + r.width / 2, cy: r.top - rect.top + r.height / 2 };
      });
      s.glow.length = items.length;
      s.written.length = items.length;
      for (let i = 0; i < items.length; i++) {
        s.glow[i] ??= 0;
        s.written[i] ??= -1;
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [items.length, columns, gap, aspect]);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const s = live.current;
    const half = beamWidth / 2;
    const inner = half * 0.45;

    const frame = (now: number) => {
      s.raf = 0;
      const dt = s.last ? Math.min(now - s.last, 100) : 16;
      s.last = now;
      const { x: ox, y: oy, from, to } = originPoint(origin, s.width, s.height);
      const sweeping = autoSweep && !reducedMotion && s.selected === null;
      if (sweeping) {
        s.phase = (s.phase + dt / sweepDuration) % 2;
        s.angle =
          origin === "center" ? (s.phase / 2) * 360 : from + (to - from) * easeInOut(s.phase < 1 ? s.phase : 2 - s.phase);
      }
      const beam = beamRef.current;
      if (beam) beam.style.transform = `translate(-50%, -50%) rotate(${s.angle}deg)`;

      for (let i = 0; i < s.tiles.length; i++) {
        const tile = s.tiles[i]!;
        let target = 0;
        if (reducedMotion) target = 1;
        else {
          if (sweeping || s.selected === null) {
            const toTile = (Math.atan2(tile.cy - oy, tile.cx - ox) * 180) / Math.PI;
            const d = angleDelta(toTile, s.angle);
            target = clamp01(1 - (d - inner) / (half - inner));
          }
          if (torch && s.pointer) {
            const dist = Math.hypot(tile.cx - s.pointer.x, tile.cy - s.pointer.y);
            target = Math.max(target, clamp01(1 - (dist - torchRadius * 0.35) / (torchRadius * 0.65)));
          }
          if (s.focused === i || s.selected === i) target = 1;
        }
        const glow = s.glow[i] ?? 0;
        const next =
          target > glow ? glow + (target - glow) * (1 - Math.exp(-dt / RISE_MS)) : glow * Math.exp(-dt / (afterglow / 3));
        s.glow[i] = next < 0.002 ? 0 : next;
        const rounded = Math.round(s.glow[i]! * 200) / 200;
        if (rounded !== s.written[i]) {
          s.written[i] = rounded;
          tileRefs.current[i]?.style.setProperty("--lit", String(rounded));
        }
      }

      const settling = s.glow.some((g, i) => g > 0 && g !== (s.focused === i || s.selected === i ? 1 : 0));
      if ((sweeping || s.pointer || settling) && s.onScreen && !document.hidden) s.raf = requestAnimationFrame(frame);
      else s.last = 0;
    };
    const kick = () => {
      if (!s.raf) s.raf = requestAnimationFrame(frame);
    };
    kickRef.current = kick;

    const onPointerMove = (event: PointerEvent) => {
      if (!torch || event.pointerType === "touch") return;
      const rect = stage.getBoundingClientRect();
      s.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      kick();
    };
    const onPointerLeave = () => {
      s.pointer = null;
      kick();
    };
    const onVisibility = () => kick();
    const observer = new IntersectionObserver((entries) => {
      s.onScreen = entries[entries.length - 1]?.isIntersecting ?? true;
      kick();
    });
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    observer.observe(stage);
    kick();
    return () => {
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      cancelAnimationFrame(s.raf);
      s.raf = 0;
      s.last = 0;
    };
  }, [origin, sweepDuration, beamWidth, afterglow, torch, torchRadius, autoSweep, reducedMotion]);

  React.useEffect(() => {
    kickRef.current();
  }, [selected]);

  React.useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") select(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, select]);

  const beamColor = dark ? "rgba(255, 244, 214, 0.26)" : "rgba(251, 191, 36, 0.24)";
  const beamWedge = `conic-gradient(from ${90 - beamWidth / 2}deg at 50% 50%, transparent 0deg, ${beamColor} ${beamWidth / 2}deg, transparent ${beamWidth}deg)`;
  const { x: ox, y: oy } = originPoint(origin, live.current.width, live.current.height);
  const diameter = Math.hypot(live.current.width, live.current.height) * 2 || 2000;

  return (
    <div
      ref={setRootRef}
      data-slot="lighthouse-gallery"
      data-origin={origin}
      className={cx("relative isolate overflow-hidden rounded-2xl border border-border bg-card p-4 text-card-foreground", className)}
      style={style}
      {...rest}
    >
      <div
        ref={beamRef}
        aria-hidden
        data-beam
        className="pointer-events-none absolute z-0 rounded-full"
        style={{
          left: ox,
          top: oy,
          width: diameter,
          height: diameter,
          background: reducedMotion ? "none" : beamWedge,
          transform: "translate(-50%, -50%) rotate(0deg)",
          mixBlendMode: dark ? "screen" : "multiply",
        }}
      />
      <div
        role="list"
        className="relative z-10 grid"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap }}
      >
        {items.map((item, index) => {
          const swatch = item.color ?? colors[item.src];
          const isSelected = selected === index;
          return (
            <div key={`${item.src}-${index}`} role="listitem" className="relative" style={{ aspectRatio: aspect }}>
              <button
                ref={(node) => {
                  tileRefs.current[index] = node;
                }}
                type="button"
                data-tile
                data-selected={isSelected || undefined}
                aria-label={item.title ?? item.alt ?? `Image ${index + 1}`}
                aria-pressed={isSelected}
                onClick={() => select(isSelected ? null : index)}
                onFocus={() => {
                  live.current.focused = index;
                  kickRef.current();
                }}
                onBlur={() => {
                  live.current.focused = -1;
                  kickRef.current();
                }}
                className={cx(
                  "absolute inset-0 overflow-hidden rounded-xl bg-muted text-left transition-[transform,box-shadow] duration-300",
                  "focus-visible:[outline:2px_solid_transparent] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  isSelected && "z-20 scale-[1.12] shadow-2xl ring-1 ring-white/30",
                )}
                style={{ "--lit": 0, "--swatch": swatch ?? "transparent" } as React.CSSProperties}
              >
                <span aria-hidden className="absolute inset-0" style={{ background: "var(--swatch)" }} />
                <img
                  src={item.src}
                  alt={item.alt ?? ""}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 size-full object-cover"
                  style={{
                    opacity: `calc(${peek} + var(--lit) * ${1 - peek})`,
                    transform: "scale(calc(1.08 - var(--lit) * 0.08))",
                    filter: dark ? "none" : "saturate(calc(0.6 + var(--lit) * 0.4))",
                  }}
                />
                {item.title && (
                  <span
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2 pt-6 text-[11px] font-medium text-white"
                    style={{ opacity: "var(--lit)" }}
                  >
                    {item.title}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LighthouseGallery;
