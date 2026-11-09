"use client";

// Ported to React from Susegad UI's <sg-radio-group> web component.
// Source: https://github.com/sarat-asymmetrica/susegad-ui
// packages/components/radio/{radio.js,radio.core.js,radio.css,skins/*}
// packages/core/{component.js,register.js}, packages/engine/src/{rng,noise,math}.js
// Original author: Sarat Chandra Gnanamgari, Asymmetrica — MIT License.
//
// A real <fieldset> with a <legend> and native radios does the work: arrow
// keys move and choose, one `name` allows one choice, `required` and form
// submission are the browser's. This component only adds a hand-drawn
// decoration (aria-hidden) over every radio: a seeded pencil ring + ink
// circle + dot ("warm"), a kolam flower bloom ("playful"), or nothing at all
// ("quiet" — the native circle, drawn by CSS alone).

import * as React from "react";
import { cn } from "@/lib/utils";

// ───────────────────────── deterministic rng / noise ─────────────────────
// Ported verbatim (semantics) from engine/src/{math,rng,noise}.js — pure,
// seeded helpers: the same seed always draws the same line.

const TAU = Math.PI * 2;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function hashSeed(s: number | string): number {
  if (typeof s === "number") return Math.imul((s * 1000) | 0, 2654435761) >>> 0;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

type Rng = (() => number) & {
  range: (lo: number, hi: number) => number;
  int: (lo: number, hi: number) => number;
  pick: <T>(arr: T[]) => T;
  chance: (p: number) => boolean;
  sign: () => number;
  gauss: () => number;
};

function rng(seed: number | string = 1): Rng {
  let a = hashSeed(seed);
  const r = (() => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }) as Rng;
  r.range = (lo, hi) => lo + (hi - lo) * r();
  r.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * r());
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.chance = (p) => r() < p;
  r.sign = () => (r() < 0.5 ? -1 : 1);
  r.gauss = () => {
    let u = 0;
    while (!u) u = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * r());
  };
  return r;
}

type Noise = ((x: number, y?: number, z?: number) => number) & {
  fbm: (x: number, y?: number, z?: number, octaves?: number) => number;
};

function makeNoise(seed: number | string = 1): Noise {
  const r = rng(seed);
  const perm = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  const p = new Uint8Array(512);
  for (let i = 0; i < 512; i++) p[i] = perm[i & 255];
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const grad = (h: number, x: number, y: number, z: number) => {
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return (h & 1 ? -u : u) + (h & 2 ? -v : v);
  };
  function noise(x: number, y = 0, z = 0): number {
    const fx = Math.floor(x),
      fy = Math.floor(y),
      fz = Math.floor(z);
    const X = fx & 255,
      Y = fy & 255,
      Z = fz & 255;
    x -= fx;
    y -= fy;
    z -= fz;
    const u = fade(x),
      v = fade(y),
      w = fade(z);
    const A = p[X] + Y,
      AA = p[A] + Z,
      AB = p[A + 1] + Z;
    const B = p[X + 1] + Y,
      BA = p[B] + Z,
      BB = p[B + 1] + Z;
    return lerp(
      lerp(
        lerp(grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z), u),
        lerp(grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z), u),
        v,
      ),
      lerp(
        lerp(grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1), u),
        lerp(
          grad(p[AB + 1], x, y - 1, z - 1),
          grad(p[BB + 1], x - 1, y - 1, z - 1),
          u,
        ),
        v,
      ),
      w,
    );
  }
  (noise as Noise).fbm = (x, y = 0, z = 0, octaves = 4) => {
    let sum = 0,
      amp = 0.5,
      f2 = 1,
      norm = 0;
    for (let i = 0; i < octaves; i++) {
      sum += amp * noise(x * f2, y * f2, z * f2);
      norm += amp;
      amp *= 0.5;
      f2 *= 2;
    }
    return sum / norm;
  };
  return noise as Noise;
}

// ───────────────────────── hand-drawn geometry ────────────────────────────
// Ported verbatim from components/radio/radio.core.js — the pure core that
// the warm and playful skins draw over each native circle, on a 20×20 grid.

const f = (v: number) => +v.toFixed(2);

function handRing(
  seed: string,
  {
    r = 7.6,
    wobble = 0.45,
    overlap = 0.12,
    cx = 10,
    cy = 10,
    spread = 0.25,
    squash = 1,
    tilt = 0,
  }: {
    r?: number;
    wobble?: number;
    overlap?: number;
    cx?: number;
    cy?: number;
    spread?: number;
    squash?: number;
    tilt?: number;
  } = {},
) {
  const R = rng(`radio-ring:${seed}`);
  const noise = makeNoise(`radio-ring:${seed}`);
  const start = R.range(0, Math.PI * 2);
  const turns = 1 + overlap;
  const n = Math.round(48 * turns);
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n,
      a = start + t * turns * Math.PI * 2;
    const rr =
      r +
      noise(t * 3.2, 1.7) * wobble * 1.6 +
      spread * Math.max(0, Math.min(1, (t * turns - 0.85) / 0.3));
    const x = (Math.cos(a) * rr) / Math.sqrt(squash),
      y = Math.sin(a) * rr * Math.sqrt(squash),
      k = (tilt * Math.PI) / 180;
    pts.push([
      cx + x * Math.cos(k) - y * Math.sin(k),
      cy + x * Math.sin(k) + y * Math.cos(k),
    ]);
  }
  let len = 0;
  for (let i = 1; i < pts.length; i++)
    len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  return {
    d: `M${pts.map(([x, y]) => `${f(x)} ${f(y)}`).join("L")}`,
    length: f(len),
    points: pts,
  };
}

function inkDot(seed: string, r = 3.6) {
  const noise = makeNoise(`radio-dot:${seed}`);
  const pts: [number, number][] = [];
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2,
      rr = r * (1 + noise(i * 0.4, 5.3) * 0.12);
    pts.push([10 + Math.cos(a) * rr, 10 + Math.sin(a) * rr]);
  }
  return `M${pts.map(([x, y]) => `${f(x)} ${f(y)}`).join("L")}Z`;
}

const KOLAM = {
  dot: { cx: 10, cy: 10, r: 1.7 },
  petals: [0, 90, 180, 270].map((deg) => {
    const a = (deg * Math.PI) / 180,
      ux = Math.cos(a),
      uy = Math.sin(a),
      nx = -uy,
      ny = ux;
    const at = (u: number, n: number) =>
      `${f(10 + ux * u + nx * n)} ${f(10 + uy * u + ny * n)}`;
    return `M10 10C${at(1.1, 5)} ${at(9, 3.9)} ${at(8.4, 0)}C${at(9, -3.9)} ${at(1.1, -5)} 10 10`;
  }),
};

type RingArrival = { timing: { duration: number; easing: string } };
type BloomArrival = {
  frames: Keyframe[];
  timing: { duration: number; easing: string };
};

function arrival(
  motion: string,
  kind: "ring" | "bloom",
): RingArrival | BloomArrival | null {
  if (motion === "still" || motion === "state") return null;
  if (kind === "ring")
    return {
      timing: { duration: 280, easing: "cubic-bezier(0.45, 0.05, 0.25, 1)" },
    };
  return {
    frames: [
      { transform: "scale(0.2) rotate(-45deg)", opacity: 0 },
      { transform: "scale(1.12) rotate(6deg)", opacity: 1, offset: 0.65 },
      { transform: "scale(1) rotate(0deg)", opacity: 1 },
    ],
    timing: { duration: 320, easing: "cubic-bezier(0.3, 0.7, 0.4, 1)" },
  };
}

// ───────────────────────── per-radio art (warm / playful) ─────────────────
// Mirrors skins/warm.js and skins/playful.js: one aria-hidden drawing per
// radio. Draws the ring in / blooms the kolam only when the radio becomes
// checked after the first render (never animates the initial state).

function WarmArt({
  pencilD,
  inkD,
  inkLength,
  dotD,
  checked,
  motion,
}: {
  pencilD: string;
  inkD: string;
  inkLength: number;
  dotD: string;
  checked: boolean;
  motion: string;
}) {
  const inkRef = React.useRef<SVGPathElement>(null);
  const wasRef = React.useRef<boolean | null>(null);
  const animRef = React.useRef<Animation | null>(null);

  React.useEffect(() => {
    const was = wasRef.current;
    wasRef.current = checked;
    if (was === null) return;
    if (checked && !was) {
      const tm = arrival(motion, "ring");
      if (tm && "timing" in tm && inkRef.current) {
        animRef.current?.cancel();
        const anim = inkRef.current.animate(
          [{ strokeDashoffset: inkLength }, { strokeDashoffset: 0 }],
          tm.timing,
        );
        animRef.current = anim;
        anim.finished.then(
          (a) => a.cancel(),
          () => {},
        );
      }
    }
  }, [checked, motion, inkLength]);

  return (
    <svg
      className="sg-radio-art"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path className="sg-radio-pencil" d={pencilD} />
      <path
        ref={inkRef}
        className="sg-radio-ink"
        d={inkD}
        style={{
          display: checked ? undefined : "none",
          strokeDasharray: inkLength,
        }}
      />
      <path
        className="sg-radio-dot"
        d={dotD}
        style={{ display: checked ? undefined : "none" }}
      />
    </svg>
  );
}

function PlayfulArt({
  ringD,
  checked,
  motion,
}: {
  ringD: string;
  checked: boolean;
  motion: string;
}) {
  const kolamRef = React.useRef<SVGGElement>(null);
  const wasRef = React.useRef<boolean | null>(null);
  const animRef = React.useRef<Animation | null>(null);

  React.useEffect(() => {
    const was = wasRef.current;
    wasRef.current = checked;
    if (was === null) return;
    if (checked && !was) {
      const tm = arrival(motion, "bloom");
      if (tm && "frames" in tm && kolamRef.current) {
        animRef.current?.cancel();
        const anim = kolamRef.current.animate(tm.frames, tm.timing);
        animRef.current = anim;
        anim.finished.then(
          (a) => a.cancel(),
          () => {},
        );
      }
    }
  }, [checked, motion]);

  return (
    <svg
      className="sg-radio-art"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="sg-radio-ring"
        d={ringD}
        style={{ display: checked ? "none" : undefined }}
      />
      <g
        ref={kolamRef}
        className="sg-radio-kolam"
        style={{ display: checked ? undefined : "none" }}
      >
        {KOLAM.petals.map((d, i) => (
          <path key={i} d={d} />
        ))}
        <circle cx={KOLAM.dot.cx} cy={KOLAM.dot.cy} r={KOLAM.dot.r} />
      </g>
    </svg>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return reduced;
}

// ───────────────────────── public component ────────────────────────────────
// Attributes/property of the original <sg-radio-group> become props:
//   orientation, seed, register (attributes) and value (property) map
//   straight across; the fieldset/legend/labelled-radios "slot" becomes the
//   legend + options props.

export interface RadioOption {
  /** The radio's value. */
  value: string;
  /** The label text next to the radio. */
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Shared `name` for every native radio in the group. */
  name: string;
  /** The <legend>: what the group asks. */
  legend: React.ReactNode;
  /** The choices. */
  options: RadioOption[];
  /** Controlled value (the chosen radio's value). */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** column (default) or row. */
  orientation?: "column" | "row";
  /** quiet | warm (default) | playful — the hand-drawn register. */
  register?: "quiet" | "warm" | "playful";
  /** Seeds the hand-drawn rings; defaults to the legend's text. */
  seed?: string;
  required?: boolean;
  className?: string;
}

export default function RadioGroup({
  name,
  legend,
  options,
  value,
  defaultValue,
  onChange,
  orientation = "column",
  register = "warm",
  seed,
  required,
  className,
}: RadioGroupProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const checkedValue = value !== undefined ? value : internal;
  const reducedMotion = useReducedMotion();
  // Mirrors core/register.js resolveMotion(register, { forScene:false }).
  const motion = reducedMotion
    ? "still"
    : register === "quiet"
      ? "state"
      : register === "playful"
        ? "full"
        : "ambient";

  const groupSeed = seed || (typeof legend === "string" ? legend.trim() : "");

  const geometry = React.useMemo(() => {
    return options.map((opt, i) => {
      const s = `${groupSeed}:${opt.value || i}`;
      if (register === "playful") {
        return {
          ring: handRing(`${s}:ring`, { r: 7.6, wobble: 0.3, overlap: 0.05 }),
        };
      }
      if (register === "warm") {
        const pencil = handRing(`${s}:pencil`, {
          r: 7.4,
          wobble: 0.35,
          overlap: 0.12,
          spread: 0.6,
        });
        const ink = handRing(`${s}:ink`, {
          r: 10.4,
          wobble: 0.5,
          overlap: 0.3,
          spread: 1.5,
          squash: 0.8,
          tilt: -14,
        });
        const dot = inkDot(s);
        return { pencil, ink, dot };
      }
      return null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.map((o) => o.value).join("|"), groupSeed, register]);

  const handleChange = (v: string) => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };

  return (
    // The native <fieldset> does the work: arrow keys, one choice per name,
    // `required` and submission are the browser's. This wrapper only adds
    // the hand-drawn decoration — exactly as the original custom element did.
    <sg-radio-group
      className={cn(className)}
      orientation={orientation}
      data-skin={register}
    >
      <fieldset>
        <legend>{legend}</legend>
        {options.map((opt, i) => {
          const checked = opt.value === checkedValue;
          const g = geometry[i] as any;
          return (
            <label key={opt.value}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                disabled={opt.disabled}
                required={required}
                onChange={() => handleChange(opt.value)}
              />
              {register === "warm" && g && (
                <WarmArt
                  pencilD={g.pencil.d}
                  inkD={g.ink.d}
                  inkLength={g.ink.length}
                  dotD={g.dot}
                  checked={checked}
                  motion={motion}
                />
              )}
              {register === "playful" && g && (
                <PlayfulArt
                  ringD={g.ring.d}
                  checked={checked}
                  motion={motion}
                />
              )}
              {opt.label}
            </label>
          );
        })}
      </fieldset>
    </sg-radio-group>
  );
}
