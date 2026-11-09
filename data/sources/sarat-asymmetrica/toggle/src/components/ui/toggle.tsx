"use client";

import * as React from "react";

// ─────────────────────────────────────────────────────────────────────────
// Ported from susegad-ui's <sg-toggle> custom element
// (sarat-asymmetrica/susegad-ui, MIT License).
//
// The native <input type="checkbox" role="switch"> inside does the work:
// it submits with the form, takes Space, and a screen reader says "switch,
// on" or "off". This component adds the drawing on top of it.
//
// Three skins:
//  - quiet:   the native switch drawn as a plain CSS track + thumb.
//  - warm:    a brass tower-bolt latch (from a Goan door) laid over it.
//  - playful: a clay diya (lamp) whose flame flickers while lit.
// The native input stays underneath in every skin, at the size of the
// drawing, and takes every click and key.
// ─────────────────────────────────────────────────────────────────────────

export type ToggleSkin = "quiet" | "warm" | "playful";

export interface ToggleProps {
  /** Which register/skin this toggle is drawn in. @default "quiet" */
  skin?: ToggleSkin;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  id?: string;
  /** The label content, read by the native <label>. */
  label?: React.ReactNode;
  lang?: string;
  /** Seeds the playful skin's flame flicker so two lamps never flicker in step. */
  seed?: string;
  className?: string;
}

// ── seeded noise, ported verbatim from packages/engine/src/{rng,math,noise}.js ──
function hashSeed(s: string | number): number {
  if (typeof s === "number") return Math.imul((s * 1000) | 0, 2654435761) >>> 0;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed: string | number = 1) {
  let a = hashSeed(seed);
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function makeNoise(seed: string | number = 1) {
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
  return function noise(x: number, y = 0, z = 0) {
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
  };
}
/** The flame's flicker at time t (seconds): scale and lean, always small, from seeded noise. */
function flicker(t: number, seed = "lamp") {
  const n = makeNoise(`toggle-flame:${seed}`);
  return {
    sy: +(1 + n(t * 2.2, 0.3) * 0.12).toFixed(3),
    sx: +(1 + n(t * 1.7, 4.1) * 0.06).toFixed(3),
    lean: +(n(t * 1.3, 9.2) * 6).toFixed(2),
  };
}
/** Flicker keyframes for Web Animations, or null when the flame should hold still. */
function flameAnimation(
  motion: "still" | "state" | "ambient" | "full",
  on: boolean,
  seed?: string,
) {
  if (!on || motion === "still" || motion === "state") return null;
  const frames: Keyframe[] = [];
  for (let i = 0; i <= 12; i++) {
    const { sx, sy, lean } = flicker(i * 0.25, seed);
    frames.push({ transform: `rotate(${lean}deg) scale(${sx}, ${sy})` });
  }
  frames[12] = frames[0]; // loop without a jump
  return {
    frames,
    timing: { duration: 3000, iterations: Infinity, easing: "ease-in-out" },
  };
}

// ── the drawings, ported verbatim from toggle.core.js ──
const LATCH = {
  plate: { x: 2, y: 6.5, w: 27, h: 11, r: 2 },
  screws: [
    { cx: 6, cy: 12 },
    { cx: 25, cy: 12 },
  ],
  keeper: "M33 6.5H40.5V17.5H33V14.6H37.6V9.4H33Z",
  shaft: { x: 8, y: 10.2, w: 21, h: 3.6, r: 1.2 },
  handle: { off: "M13 10.2V4.6", on: "M13 13.8V19.4" },
  knob: { off: { cx: 13, cy: 4.2 }, on: { cx: 13, cy: 19.8 } },
};
const LAMP = {
  bowl: "M1.5 17.5C3 24.8 8 28.5 13.5 28.5C18.6 28.5 22 25.8 24 21.8C25.4 20.8 26.8 19 27.6 16.8C24.8 18.8 21.8 19.8 19.2 20.3C17.4 20.7 15.5 20.9 13.5 20.9C8.8 20.9 4.8 19.6 1.5 17.5Z",
  rim: "M1.5 17.5C4.8 19.8 8.8 21.2 13.5 21.2C15.8 21.2 17.9 20.9 19.8 20.5",
  wick: { x1: 26.4, y1: 17.4, x2: 27.2, y2: 14.8 },
  flame:
    "M27.1 14.6C23.7 12.8 23.4 8.2 26.6 2.8C27.4 6.6 30.8 8.8 29.8 12C29.3 13.6 28.4 14.4 27.1 14.6Z",
  flameCore:
    "M27.1 13.4C25.8 12.4 25.9 10.4 26.9 8.6C27.4 10.2 28.6 11 28.2 12.4C28 13 27.6 13.3 27.1 13.4Z",
  glow: { cx: 26.8, cy: 9, r: 8 },
};

export default function Toggle({
  skin = "quiet",
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  value,
  id,
  label,
  lang,
  seed,
  className,
}: ToggleProps) {
  const reactId = React.useId();
  const inputId = id ?? `sg-toggle-${reactId}`;
  const fireRef = React.useRef<SVGGElement>(null);
  const artRef = React.useRef<SVGSVGElement>(null);
  const [uncontrolled, setUncontrolled] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : uncontrolled;

  const [visible, setVisible] = React.useState(true);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    const el = artRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [skin]);

  const motion: "still" | "state" | "ambient" | "full" = reducedMotion
    ? "still"
    : skin === "quiet"
      ? "state"
      : skin === "playful"
        ? "full"
        : "ambient";

  // the flame's flicker (Web Animations), only for the playful skin
  React.useEffect(() => {
    if (skin !== "playful") return;
    const fire = fireRef.current;
    if (!fire) return;
    const want = flameAnimation(motion, !!on, seed);
    if (!want) return;
    const anim = (
      fire as unknown as { animate: (f: Keyframe[], o: unknown) => Animation }
    ).animate(want.frames, want.timing);
    if (!visible) anim.pause();
    return () => anim.cancel();
  }, [skin, motion, on, seed, visible]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = e.target.checked;
    if (!isControlled) setUncontrolled(next);
    onCheckedChange?.(next);
  }

  return (
    <div
      className={["sg-toggle", className].filter(Boolean).join(" ")}
      data-skin={skin}
      lang={lang}
    >
      <label htmlFor={inputId}>
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          {...{ switch: "" }}
          name={name}
          value={value}
          disabled={disabled}
          checked={!!on}
          onChange={handleChange}
        />
        {skin !== "quiet" && (
          <svg
            ref={artRef}
            className="sg-toggle-art"
            viewBox={skin === "warm" ? "0 0 44 24" : "0 0 32 32"}
            aria-hidden="true"
            focusable="false"
            data-on={on || undefined}
          >
            {skin === "warm" && (
              <>
                <rect
                  className="sg-toggle-plate"
                  x={LATCH.plate.x}
                  y={LATCH.plate.y}
                  width={LATCH.plate.w}
                  height={LATCH.plate.h}
                  rx={LATCH.plate.r}
                />
                {LATCH.screws.map((s, i) => (
                  <circle
                    key={i}
                    className="sg-toggle-screw"
                    cx={s.cx}
                    cy={s.cy}
                    r={1.3}
                  />
                ))}
                <g className="sg-toggle-bolt">
                  <rect
                    className="sg-toggle-shaft"
                    x={LATCH.shaft.x}
                    y={LATCH.shaft.y}
                    width={LATCH.shaft.w}
                    height={LATCH.shaft.h}
                    rx={LATCH.shaft.r}
                  />
                  <path
                    className="sg-toggle-handle sg-toggle-when-off"
                    d={LATCH.handle.off}
                  />
                  <circle
                    className="sg-toggle-knob sg-toggle-when-off"
                    cx={LATCH.knob.off.cx}
                    cy={LATCH.knob.off.cy}
                    r={1.9}
                  />
                  <path
                    className="sg-toggle-handle sg-toggle-when-on"
                    d={LATCH.handle.on}
                  />
                  <circle
                    className="sg-toggle-knob sg-toggle-when-on"
                    cx={LATCH.knob.on.cx}
                    cy={LATCH.knob.on.cy}
                    r={1.9}
                  />
                </g>
                <path className="sg-toggle-keeper" d={LATCH.keeper} />
              </>
            )}
            {skin === "playful" && (
              <>
                <g className="sg-toggle-light">
                  <circle
                    className="sg-toggle-glow"
                    cx={LAMP.glow.cx}
                    cy={LAMP.glow.cy}
                    r={LAMP.glow.r}
                  />
                  <g ref={fireRef} className="sg-toggle-fire">
                    <path className="sg-toggle-flame" d={LAMP.flame} />
                    <path className="sg-toggle-flame-core" d={LAMP.flameCore} />
                  </g>
                </g>
                <path className="sg-toggle-bowl" d={LAMP.bowl} />
                <path className="sg-toggle-rim" d={LAMP.rim} />
                <line
                  className="sg-toggle-wick"
                  x1={LAMP.wick.x1}
                  y1={LAMP.wick.y1}
                  x2={LAMP.wick.x2}
                  y2={LAMP.wick.y2}
                />
              </>
            )}
          </svg>
        )}
        {label}
      </label>
    </div>
  );
}
