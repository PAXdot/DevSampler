"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// LodestoneHero — full-bleed hero where the headline exists twice: crisp DOM
// type above, and beneath it a canvas field of iron-filing strokes solved from
// a two-pole dipole field (cursor pole + fixed anchor pole behind the primary
// CTA). Filings pack densely only inside the headline's letter-mask, so the
// type visibly "iron-files" into existence as the cursor approaches; hovering
// the CTA doubles its pole strength and bends the whole field toward the
// button. Vector-field solver rendering: each filing is a short line segment
// whose angle chases atan2 of the summed field vector with critically-damped
// easing. Canvas 2D, refs-only hot path, breath-cycle ambient drift with real
// sleep windows between breaths.
// ---------------------------------------------------------------------------

type Vec3 = [number, number, number];

function parseColor(raw: string): Vec3 | null {
  const s = raw.trim();
  if (s.startsWith("#")) {
    const hex = s.slice(1);
    if (hex.length === 3) {
      const r = parseInt(hex.slice(0, 1) + hex.slice(0, 1), 16);
      const g = parseInt(hex.slice(1, 2) + hex.slice(1, 2), 16);
      const b = parseInt(hex.slice(2, 3) + hex.slice(2, 3), 16);
      return Number.isNaN(r + g + b) ? null : [r, g, b];
    }
    if (hex.length >= 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return Number.isNaN(r + g + b) ? null : [r, g, b];
    }
    return null;
  }
  const m = s.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

function mix(a: Vec3, b: Vec3, t: number): Vec3 {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

// deterministic prng — filing placement is stable across re-renders
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 2-octave value noise — seeds each filing's ambient-drift character
function hash2(x: number, y: number) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}
function vnoise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi);
  const b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1);
  const d = hash2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function noise2(x: number, y: number) {
  return 0.65 * vnoise(x, y) + 0.35 * vnoise(x * 2.1 + 19.7, y * 2.1 + 7.3);
}

function easeOutExpo(p: number) {
  return p >= 1 ? 1 : 1 - Math.pow(2, -10 * p);
}

// time-based pole-strength tween — duration IS the forced-settle deadline
// (max 600ms < 800ms budget), so a spring can never hunt forever
type Tween = {
  from: number;
  to: number;
  t0: number;
  dur: number;
  value: number;
  active: boolean;
};
function retarget(tw: Tween, to: number, dur: number, now: number) {
  if (!tw.active && tw.value === to) return;
  tw.from = tw.value;
  tw.to = to;
  tw.t0 = now;
  tw.dur = dur;
  tw.active = true;
}
function tickTween(tw: Tween, now: number) {
  if (!tw.active) return;
  const p = (now - tw.t0) / tw.dur;
  if (p >= 1) {
    tw.value = tw.to;
    tw.active = false;
  } else {
    tw.value = tw.from + (tw.to - tw.from) * easeOutExpo(p);
  }
}

const POLE_RMIN = 48; // r clamp — field never blows up at the pole core
const MAG_SOFT = 5.5e-5; // soft-knee normalizer for magnitude → alpha
const IDLE_MS = 500; // pointer-idle threshold before ambient drift fades in
const DRIFT_HZ = 0.1; // ambient oscillation frequency
const DRIFT_AMP = (8 * Math.PI) / 180; // ±8°
const BREATH_S = 12; // ambient breath cycle length
const ACTIVE_FRAC = 0.72; // fraction of the cycle that drifts; rest = sleep
const SLEEP_EPS = 0.001; // max per-filing angular delta below which we sleep

export function LodestoneHero({
  eyebrow = "FIELD-ALIGNED INFRASTRUCTURE",
  headlineLines = ["Every signal bends", "toward your stack"],
  subcopy = "Lodestone routes traffic the way a magnet organizes iron filings: declare the pole, and every request, retry, and rollback aligns itself. No orchestration YAML, no drift.",
  primaryCta = { label: "Deploy the field", href: "#deploy" },
  secondaryCta = { label: "Read the docs", href: "#docs" },
  stats = [
    { value: "12ms", label: "p99 route solve" },
    { value: "99.98%", label: "field uptime" },
    { value: "4,200+", label: "clusters aligned" },
  ],
  maskFilings = 1800,
  ambientFilings = 600,
  className = "",
}: {
  /** mono eyebrow line above the headline */
  eyebrow?: string;
  /** display headline, one string per rendered line — this is the letter-mask source */
  headlineLines?: string[];
  /** muted supporting copy under the headline */
  subcopy?: string;
  /** primary accent CTA — its center is the fixed anchor pole */
  primaryCta?: { label: string; href: string };
  /** ghost secondary CTA */
  secondaryCta?: { label: string; href: string };
  /** three mono stats for the bordered strip below the CTAs */
  stats?: { value: string; label: string }[];
  /** filings rejection-sampled inside the headline letter-mask */
  maskFilings?: number;
  /** sparse ambient filings outside the mask */
  ambientFilings?: number;
  /** extra classes merged onto the rendered root element */
  className?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const linesKey = headlineLines.join("|");

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const headline = headlineRef.current;
    const cta = ctaRef.current;
    if (!root || !canvas || !headline || !cta) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const maskCanvas = document.createElement("canvas");
    const mctx = maskCanvas.getContext("2d", { willReadFrequently: true });
    if (!mctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const rand = mulberry32(0x10de);
    let disposed = false;

    // -- token-derived ink: read at mount, re-derived live on theme flips ----
    // 16 alpha-bucketed rgba strings per group so the draw loop batches
    // strokes instead of setting per-filing styles
    const styleFg: string[] = new Array(16).fill("");
    const styleAmb: string[] = new Array(16).fill("");
    const styleAcc: string[] = new Array(16).fill("");
    const derive = () => {
      const cs = getComputedStyle(document.documentElement);
      const bg = parseColor(cs.getPropertyValue("--background")) ?? [
        10, 10, 10,
      ];
      const fg = parseColor(cs.getPropertyValue("--foreground")) ?? [
        237, 237, 237,
      ];
      const accent = parseColor(cs.getPropertyValue("--ns-accent")) ?? [
        0, 107, 255,
      ];
      const border = parseColor(cs.getPropertyValue("--border")) ?? [
        46, 46, 46,
      ];
      const muted = parseColor(cs.getPropertyValue("--ns-muted")) ?? [
        143, 143, 143,
      ];
      // ambient ink leans toward --border on light themes so sparse filings
      // stay whisper-quiet against white instead of reading as dust
      const lum = (0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2]) / 255;
      const amb =
        lum < 0.5 ? mix(muted, border, 0.25) : mix(muted, border, 0.45);
      for (let l = 0; l < 16; l++) {
        const a = (l / 15).toFixed(3);
        styleFg[l] = `rgba(${fg[0]},${fg[1]},${fg[2]},${a})`;
        styleAmb[l] = `rgba(${amb[0]},${amb[1]},${amb[2]},${a})`;
        styleAcc[l] = `rgba(${accent[0]},${accent[1]},${accent[2]},${a})`;
      }
    };
    derive();

    // -- sizing: canvas is a replaced element — style.width/height set
    // explicitly from the measured rect, backing store scaled by dpr --------
    let w = 0;
    let h = 0;
    let dpr = 1;
    let sized = false;
    const resize = () => {
      const rect = root.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) {
        sized = false; // zero-size guard — loop no-ops until real
        return;
      }
      w = rect.width;
      h = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      sized = true;
    };

    // -- filing storage (structure-of-arrays, hot loop reads these only) ----
    let n = 0; // total filings
    let nMask = 0; // first nMask live inside the letter-mask
    let fx = new Float32Array(0);
    let fy = new Float32Array(0);
    let fa = new Float32Array(0); // current angle
    let flen = new Float32Array(0); // segment length 6–10px
    let fna = new Float32Array(0); // drift amplitude seed [-1,1] (value noise)
    let fph = new Float32Array(0); // drift phase seed
    let ex0 = new Float32Array(0); // per-frame segment endpoints
    let ey0 = new Float32Array(0);
    let ex1 = new Float32Array(0);
    let ey1 = new Float32Array(0);
    let bucket = new Uint8Array(0); // quantized alpha 0–15
    let group = new Uint8Array(0); // 0 = mask/fg, 1 = ambient, 2 = accent
    let faccent = new Uint8Array(0); // in the ~5% nearest the anchor pole
    let ax = 0; // anchor pole — offset from container origin, NEVER page coords
    let ay = 0;

    // letter-mask + rejection sampling. Rebuilt on ResizeObserver and after
    // webfonts finish loading (glyph metrics shift the mask).
    const buildField = () => {
      if (!sized) return;
      const rootRect = root.getBoundingClientRect();
      const mw = Math.max(1, Math.round(w));
      const mh = Math.max(1, Math.round(h));
      maskCanvas.width = mw;
      maskCanvas.height = mh;
      mctx.clearRect(0, 0, mw, mh);
      mctx.fillStyle = "#fff";

      // font shorthand read from the live DOM headline so canvas glyphs
      // match the crisp type above
      const hcs = getComputedStyle(headline);
      mctx.font = `${hcs.fontStyle} ${hcs.fontWeight} ${hcs.fontSize} ${hcs.fontFamily}`;
      if ("letterSpacing" in mctx) {
        (
          mctx as CanvasRenderingContext2D & { letterSpacing: string }
        ).letterSpacing =
          hcs.letterSpacing === "normal" ? "0px" : hcs.letterSpacing;
      }
      mctx.textAlign = "left";
      mctx.textBaseline = "alphabetic";

      let minX = mw;
      let minY = mh;
      let maxX = 0;
      let maxY = 0;
      for (let li = 0; li < headlineLines.length; li++) {
        const span = lineRefs.current[li];
        const text = headlineLines[li];
        if (!span || !text) continue;
        const r = span.getBoundingClientRect();
        const relL = r.left - rootRect.left;
        const relT = r.top - rootRect.top;
        const m = mctx.measureText(text);
        // center glyphs on the span's line box, x-scale to its measured
        // width so the mask tracks the DOM rendering
        const glyphMid =
          (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
        const sc = m.width > 1 ? r.width / m.width : 1;
        mctx.save();
        mctx.translate(relL, relT + r.height / 2 + glyphMid);
        mctx.scale(sc, 1);
        mctx.fillText(text, 0, 0);
        mctx.restore();
        minX = Math.min(minX, relL);
        minY = Math.min(minY, relT);
        maxX = Math.max(maxX, relL + r.width);
        maxY = Math.max(maxY, relT + r.height);
      }
      const data = mctx.getImageData(0, 0, mw, mh).data;
      const inMask = (x: number, y: number) => {
        const xi = x | 0;
        const yi = y | 0;
        if (xi < 0 || yi < 0 || xi >= mw || yi >= mh) return false;
        return (data[(yi * mw + xi) * 4 + 3] ?? 0) > 100;
      };

      // anchor pole = primary CTA center as an offset from the container
      const cr = cta.getBoundingClientRect();
      ax = cr.left - rootRect.left + cr.width / 2;
      ay = cr.top - rootRect.top + cr.height / 2;

      // halve counts on dense-DPR narrow viewports
      const small = dpr >= 2 && w < 900;
      const wantMask = Math.max(
        0,
        Math.round(small ? maskFilings / 2 : maskFilings),
      );
      const wantAmb = Math.max(
        0,
        Math.round(small ? ambientFilings / 2 : ambientFilings),
      );
      const cap = wantMask + wantAmb;
      fx = new Float32Array(cap);
      fy = new Float32Array(cap);
      fa = new Float32Array(cap);
      flen = new Float32Array(cap);
      fna = new Float32Array(cap);
      fph = new Float32Array(cap);
      ex0 = new Float32Array(cap);
      ey0 = new Float32Array(cap);
      ex1 = new Float32Array(cap);
      ey1 = new Float32Array(cap);
      bucket = new Uint8Array(cap);
      group = new Uint8Array(cap);
      faccent = new Uint8Array(cap);

      // rejection-sample dense filings inside the mask (bbox-bounded)
      const bx = Math.max(0, minX - 8);
      const by = Math.max(0, minY - 8);
      const bw = Math.max(1, Math.min(mw, maxX + 8) - bx);
      const bh = Math.max(1, Math.min(mh, maxY + 8) - by);
      let i = 0;
      let tries = 0;
      const maxTriesMask = wantMask * 80;
      while (i < wantMask && tries < maxTriesMask) {
        tries++;
        const x = bx + rand() * bw;
        const y = by + rand() * bh;
        if (!inMask(x, y)) continue;
        fx[i] = x;
        fy[i] = y;
        i++;
      }
      nMask = i;
      // sparse ambient filings anywhere outside the mask
      tries = 0;
      const maxTriesAmb = wantAmb * 20;
      let j = 0;
      while (j < wantAmb && tries < maxTriesAmb) {
        tries++;
        const x = rand() * w;
        const y = rand() * h;
        if (inMask(x, y)) continue;
        fx[i + j] = x;
        fy[i + j] = y;
        j++;
      }
      n = nMask + j;

      // per-filing constants: length, drift seeds, accent eligibility
      const dists = new Float32Array(n);
      for (let k = 0; k < n; k++) {
        flen[k] = 6 + rand() * 4;
        fna[k] = 2 * noise2((fx[k] ?? 0) * 0.012, (fy[k] ?? 0) * 0.012) - 1;
        fph[k] =
          noise2((fx[k] ?? 0) * 0.03 + 51.7, (fy[k] ?? 0) * 0.03) * Math.PI * 2;
        dists[k] = Math.hypot((fx[k] ?? 0) - ax, (fy[k] ?? 0) - ay);
      }
      // ~5% nearest the anchor pole may take --ns-accent while the CTA is hot
      const sorted = Array.from(dists).sort((a, b) => a - b);
      const thr = sorted[Math.floor(n * 0.05)] ?? 0;
      for (let k = 0; k < n; k++) faccent[k] = (dists[k] ?? 0) <= thr ? 1 : 0;
    };

    // -- pole state ----------------------------------------------------------
    const cursorT: Tween = {
      from: 0,
      to: 0,
      t0: 0,
      dur: 1,
      value: 0,
      active: false,
    };
    const anchorT: Tween = {
      from: 0.7,
      to: 0.7,
      t0: 0,
      dur: 1,
      value: 0.7,
      active: false,
    };
    let pcx = 0;
    let pcy = 0;
    let ctaHot = false; // accent gate — hover/focus only
    let lastMove = -1e9;

    // solve the dipole field into angles/endpoints/buckets for one frame.
    // k = angle chase gain this frame (1 - exp(-dt*10) → critically damped);
    // returns the max remaining per-filing angular delta (sleep signal).
    const solve = (
      nowS: number,
      cs: number,
      asV: number,
      driftAmp: number,
      k: number,
    ) => {
      let maxD = 0;
      const osc = Math.PI * 2 * DRIFT_HZ * nowS;
      for (let i = 0; i < n; i++) {
        const x = fx[i] ?? 0;
        const y = fy[i] ?? 0;
        let vx = 0;
        let vy = 0;
        // anchor pole — pure radial
        {
          const dx = x - ax;
          const dy = y - ay;
          const r = Math.hypot(dx, dy) || 1;
          const rc = Math.max(POLE_RMIN, r);
          const s = asV / (rc * rc);
          vx += (s * dx) / r;
          vy += (s * dy) / r;
        }
        // cursor pole — radial + mild tangential swirl
        if (cs > 1e-4) {
          const dx = x - pcx;
          const dy = y - pcy;
          const r = Math.hypot(dx, dy) || 1;
          const rc = Math.max(POLE_RMIN, r);
          const s = cs / (rc * rc);
          const ux = dx / r;
          const uy = dy / r;
          vx += s * (ux * 0.85 - uy * 0.35);
          vy += s * (uy * 0.85 + ux * 0.35);
        }
        const mag = Math.hypot(vx, vy);
        let target = Math.atan2(vy, vx);
        if (driftAmp > 1e-4) {
          target += driftAmp * (fna[i] ?? 0) * Math.sin(osc + (fph[i] ?? 0));
        }
        // shortest-path wrap, then critically-damped chase — no overshoot
        let d = target - (fa[i] ?? 0);
        d =
          ((((d + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) -
          Math.PI;
        const ad = Math.abs(d);
        if (ad > maxD) maxD = ad;
        const ang = (fa[i] ?? 0) + d * k;
        fa[i] = ang;
        const half = (flen[i] ?? 8) / 2;
        const c = Math.cos(ang);
        const sn = Math.sin(ang);
        ex0[i] = x - c * half;
        ey0[i] = y - sn * half;
        ex1[i] = x + c * half;
        ey1[i] = y + sn * half;
        // magnitude → ink: mask 0.25→0.9 in --foreground, ambient 0.06→0.18
        const nm = mag / (mag + MAG_SOFT);
        const alpha = i < nMask ? 0.25 + 0.65 * nm : 0.06 + 0.12 * nm;
        bucket[i] = Math.round(alpha * 15);
        group[i] = ctaHot && faccent[i] === 1 ? 2 : i < nMask ? 0 : 1;
      }
      return maxD;
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h); // full clear + redraw — no alpha accumulation
      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      const styles = [styleFg, styleAmb, styleAcc] as const;
      for (let g = 0; g < 3; g++) {
        const pal = styles[g]!;
        for (let l = 1; l < 16; l++) {
          let any = false;
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            if (group[i] !== g || bucket[i] !== l) continue;
            ctx.moveTo(ex0[i] ?? 0, ey0[i] ?? 0);
            ctx.lineTo(ex1[i] ?? 0, ey1[i] ?? 0);
            any = true;
          }
          if (any) {
            ctx.strokeStyle = pal[l] ?? "rgba(0,0,0,0)";
            ctx.stroke();
          }
        }
      }
    };

    // -- reduced motion: one static solved frame, anchor pole only ----------
    const renderStatic = () => {
      resize();
      if (!sized) return;
      buildField();
      solve(0, 0, 0.7, 0, 1); // k=1 snaps angles straight to target
      draw();
    };

    if (reduced) {
      renderStatic();
      const ro = new ResizeObserver(renderStatic);
      ro.observe(root);
      const mo = new MutationObserver(() => {
        derive();
        if (sized) draw(); // re-ink the solved frame for the new theme
      });
      mo.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      document.fonts.ready.then(() => {
        if (!disposed) renderStatic();
      });
      return () => {
        disposed = true;
        ro.disconnect();
        mo.disconnect();
      };
    }

    // -- animated path -------------------------------------------------------
    resize();
    buildField();
    solve(performance.now() / 1000, 0, 0.7, 0, 1); // settle initial pose

    let raf = 0;
    let last = 0;
    let visible = true;
    let wakeTimer = 0;

    const loop = (now: number) => {
      raf = 0;
      if (!visible || !sized) {
        last = 0;
        return; // paused offscreen / zero-size — observers wake us
      }
      const dt = last === 0 ? 1 / 60 : Math.min(0.05, (now - last) / 1000);
      last = now;
      tickTween(cursorT, now);
      tickTween(anchorT, now);

      // ambient drift breathes on a 12s cycle: ~8.6s of value-noise drift,
      // then a rest phase where the loop genuinely sleeps until the next
      // breath — ambient is the default look, sleep is still real
      const nowS = now / 1000;
      const ph = (nowS % BREATH_S) / BREATH_S;
      const env =
        ph < ACTIVE_FRAC
          ? Math.pow(Math.sin((Math.PI * ph) / ACTIVE_FRAC), 2)
          : 0;
      const idle = Math.min(1, Math.max(0, (now - lastMove - IDLE_MS) / 400));
      const driftAmp = DRIFT_AMP * env * idle;

      const k = 1 - Math.exp(-dt * 10);
      const maxD = solve(nowS, cursorT.value, anchorT.value, driftAmp, k);
      draw();

      // sleep: field settled AND no pole strength animating AND drift at
      // its rest phase — schedule the wake for the next breath
      if (
        maxD < SLEEP_EPS &&
        !cursorT.active &&
        !anchorT.active &&
        ph >= ACTIVE_FRAC
      ) {
        last = 0;
        window.clearTimeout(wakeTimer);
        wakeTimer = window.setTimeout(wake, (1 - ph) * BREATH_S * 1000 + 32);
        return; // raf stays 0 — genuinely asleep
      }
      raf = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (!raf && visible) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };

    // -- pointer: cursor pole ------------------------------------------------
    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      pcx = e.clientX - rect.left;
      pcy = e.clientY - rect.top;
      lastMove = performance.now();
      if (cursorT.to !== 1) retarget(cursorT, 1, 200, lastMove);
      wake();
    };
    const onLeave = () => {
      // cursor pole decays to 0 over 600ms (deadline-bounded tween)
      retarget(cursorT, 0, 600, performance.now());
      wake();
    };
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerdown", onMove);
    root.addEventListener("pointerleave", onLeave);

    // -- CTA pole: hover/focus springs 0.7 → 1.4 over 250ms ease-out-expo ---
    const ctaOn = () => {
      ctaHot = true;
      retarget(anchorT, 1.4, 250, performance.now());
      wake();
    };
    const ctaOff = () => {
      ctaHot = false;
      retarget(anchorT, 0.7, 250, performance.now());
      wake();
    };
    cta.addEventListener("pointerenter", ctaOn);
    cta.addEventListener("pointerleave", ctaOff);
    cta.addEventListener("focus", ctaOn);
    cta.addEventListener("blur", ctaOff);

    // -- observers -----------------------------------------------------------
    const ro = new ResizeObserver(() => {
      resize();
      buildField(); // letter-mask resampled on resize
      solve(performance.now() / 1000, cursorT.value, anchorT.value, 0, 1);
      if (sized) draw();
      wake();
    });
    ro.observe(root);
    const io = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
      if (visible) wake();
    });
    io.observe(root);
    const mo = new MutationObserver(() => {
      derive(); // live theme re-derive — next frame re-inks every filing
      if (sized) draw();
      wake();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    document.fonts.ready.then(() => {
      // webfont swap moves glyph outlines — rebuild the mask once settled
      if (disposed) return;
      resize();
      buildField();
      solve(performance.now() / 1000, cursorT.value, anchorT.value, 0, 1);
      if (sized) draw();
      wake();
    });

    wake();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      raf = 0;
      window.clearTimeout(wakeTimer);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerdown", onMove);
      root.removeEventListener("pointerleave", onLeave);
      cta.removeEventListener("pointerenter", ctaOn);
      cta.removeEventListener("pointerleave", ctaOff);
      cta.removeEventListener("focus", ctaOn);
      cta.removeEventListener("blur", ctaOff);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linesKey, maskFilings, ambientFilings]);

  return (
    <section
      ref={rootRef}
      className={`relative isolate overflow-hidden bg-background ${className}`}
    >
      {/* filing field — pointer-events none, DOM copy above stays interactive */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pb-24 sm:pt-32">
        <p className="mb-6 font-mono text-[11px] tracking-widest text-ns-muted">
          {eyebrow}
        </p>
        <h1
          ref={headlineRef}
          className="font-semibold text-foreground"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
          }}
        >
          {headlineLines.map((line, i) => (
            <span
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="block"
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ns-muted">
          {subcopy}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            ref={ctaRef}
            href={primaryCta.href}
            className="rounded-sm bg-ns-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ns-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ns-muted transition-colors duration-200 hover:border-foreground/20 hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent"
          >
            {secondaryCta.label}
          </a>
        </div>
        <div className="mt-16 grid w-full max-w-2xl grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.slice(0, 3).map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 px-6 py-4"
            >
              <span className="font-mono text-lg text-foreground">
                {s.value}
              </span>
              <span className="font-mono text-[11px] tracking-widest text-ns-muted">
                {s.label.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LodestoneHero;
