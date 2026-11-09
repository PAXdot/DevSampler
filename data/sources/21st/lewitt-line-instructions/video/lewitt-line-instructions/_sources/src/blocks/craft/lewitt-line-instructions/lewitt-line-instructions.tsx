// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { FONT_READY, brandFontStack, easeInOut, easeOut, luminance, ramp, springSnap, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import type { schema } from "./lewitt-line-instructions.schema";

type Props = z.infer<typeof schema>;
type Rect = { x: number; y: number; w: number; h: number };
type Line = { x0: number; y0: number; x1: number; y1: number; start: number; dur: number; bucket: number };

/** Quadrants in reading order. LeWitt's four directions: vertical, horizontal, and the two diagonals. */
const QUADS = ["top-left", "top-right", "bottom-left", "bottom-right"] as const;
const DIRS: Array<[number, number]> = [
  [0, 1],
  [1, 0],
  [Math.SQRT1_2, -Math.SQRT1_2],
  [Math.SQRT1_2, Math.SQRT1_2],
];

// Timing (frames at 30 fps).
const Q_START = 6;
const Q_STAGGER = 16;
const SWEEP = 32;
const HERO = 98;
const CAPTION_AT = 104;
/** Raking light: a sheen crosses the finished wall once, then rests. */
const SHEEN_AT = 92;
const SHEEN_LEN = 34;
/** Resting tone per quadrant: the light comes from the top left, so each direction catches it differently. */
const QUAD_TONE = [1, 0.8, 0.9, 1];

const WORD_WEIGHT = 700;
const WORD_LH = 1.16;
const WORD_TRACK = -0.025;
const CAP_LH = 1.38;
const BUCKET_ALPHA = [0.62, 0.76, 0.88];

let measureCtx: CanvasRenderingContext2D | null = null;
function measurer(): CanvasRenderingContext2D | null {
  if (!measureCtx && typeof document !== "undefined") measureCtx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  return measureCtx;
}

/** Every way to break `words` into `k` consecutive lines. */
function partitions(words: string[], k: number): string[][] {
  if (k === 1) return [[words.join(" ")]];
  const out: string[][] = [];
  for (let i = 1; i <= words.length - k + 1; i++) {
    for (const rest of partitions(words.slice(i), k - 1)) out.push([words.slice(0, i).join(" "), ...rest]);
  }
  return out;
}

/** Greedy wrap by measured width; returns the lines. */
function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (cur && ctx.measureText(next).width > maxW) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

/** Hatch lines of one direction clipped to a rect, sorted so the sweep runs from the outer edge toward the word. */
function hatch(r: Rect, dir: [number, number], spacing: number, cx: number, cy: number, seed: string, qStart: number): Line[] {
  const [dx, dy] = dir;
  const nx = -dy, ny = dx;
  const Cx = r.x + r.w / 2, Cy = r.y + r.h / 2;
  const e = Math.abs(nx) * r.w / 2 + Math.abs(ny) * r.h / 2;
  const count = Math.max(1, Math.floor((2 * e) / spacing));
  const first = -((count - 1) * spacing) / 2;
  const raw: Array<{ x0: number; y0: number; x1: number; y1: number; d: number; len: number }> = [];
  for (let k = 0; k < count; k++) {
    const t = first + k * spacing;
    const px = Cx + nx * t, py = Cy + ny * t;
    let s0 = -Infinity, s1 = Infinity;
    let ok = true;
    for (const [p, d, lo, hi] of [[px, dx, r.x, r.x + r.w], [py, dy, r.y, r.y + r.h]] as const) {
      if (Math.abs(d) < 1e-6) {
        if (p < lo || p > hi) ok = false;
      } else {
        const a = (lo - p) / d, b = (hi - p) / d;
        s0 = Math.max(s0, Math.min(a, b));
        s1 = Math.min(s1, Math.max(a, b));
      }
    }
    if (!ok || s1 - s0 < spacing * 0.6) continue;
    let x0 = px + dx * s0, y0 = py + dy * s0, x1 = px + dx * s1, y1 = py + dy * s1;
    // Boustrophedon: every other stroke runs back, like a plotter pen.
    if (k % 2 === 1) [x0, y0, x1, y1] = [x1, y1, x0, y0];
    raw.push({ x0, y0, x1, y1, d: Math.hypot((x0 + x1) / 2 - cx, (y0 + y1) / 2 - cy), len: Math.hypot(x1 - x0, y1 - y0) });
  }
  raw.sort((a, b) => b.d - a.d);
  const maxLen = Math.max(1, ...raw.map((l) => l.len));
  const r01 = rng(seed);
  return raw.map((l, i) => {
    const rank = raw.length > 1 ? i / (raw.length - 1) : 0;
    const jitter = (r01() - 0.5) * 3;
    return {
      x0: l.x0, y0: l.y0, x1: l.x1, y1: l.y1,
      start: qStart + SWEEP * rank + jitter,
      dur: 9 + 11 * (l.len / maxLen),
      bucket: Math.min(2, Math.floor(r01() * 3)),
    };
  });
}

/**
 * Sol LeWitt style wall drawing: four quadrants hatched in four directions,
 * drawn stroke by stroke. The pen lifts wherever the word sits, so the title
 * is made only of the lines that were never drawn.
 */
export const Component: React.FC<Props> = ({ word, caption, color, accent, background, accentQuadrant, density, fontFamily, captionFontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit, aspect } = useLayout();
  const ref = useRef<HTMLCanvasElement>(null);
  const bloomRef = useRef<HTMLCanvasElement>(null);
  const bw = Math.max(2, Math.round(W / 2));
  const bh = Math.max(2, Math.round(H / 2));
  const wordStack = brandFontStack(fontFamily);
  const capStack = brandFontStack(captionFontFamily);

  // Canvas text needs the real font bytes before measuring or knocking out.
  const [handle] = useState(() => delayRender("lewitt-line-instructions fonts"));
  const [ready, setReady] = useState(0);
  useEffect(() => {
    let alive = true;
    Promise.all([FONT_READY, waitForBrandFonts()])
      .then(() => Promise.all([document.fonts.load(`${WORD_WEIGHT} 100px ${wordStack}`), document.fonts.load(`400 100px ${capStack}`)]))
      .then(() => document.fonts.ready)
      .then(() => {
        if (alive) setReady((n) => n + 1);
        continueRender(handle);
      })
      .catch(() => continueRender(handle));
    return () => {
      alive = false;
    };
  }, [handle, wordStack, capStack]);

  const dark = background === "transparent" || luminance(background) < 0.4;

  // ---- Layout (frame independent) ------------------------------------------
  const L = useMemo(() => {
    const portrait = aspect === "9:16";
    const square = aspect === "1:1";
    const mx = W * (portrait ? 0.075 : square ? 0.065 : 0.045);
    const top = H * (portrait ? 0.07 : square ? 0.065 : 0.075);
    const bottom = H * (portrait ? 0.06 : square ? 0.06 : 0.065);
    const cf = Math.round(H * (portrait ? 0.031 : square ? 0.022 : 0.0215));
    const legend = Math.round(portrait ? cf * 1.5 : cf * 2.1);
    const gapC = Math.round(cf * 1.1);
    const capW = W - 2 * mx - legend - gapC;
    const ctx = measurer();

    let capLines = [caption];
    if (ctx && caption.trim()) {
      ctx.font = `400 ${cf}px ${capStack}`;
      ctx.letterSpacing = "0px";
      capLines = wrap(ctx, caption, capW * 0.98);
    }
    const capH = caption.trim() ? capLines.length * cf * CAP_LH : 0;
    const rowH = Math.max(legend, capH);
    const rowTop = H - bottom - rowH;
    const gapRow = unit * (portrait ? 4 : 3.2);
    const D: Rect = { x: mx, y: top, w: W - 2 * mx, h: rowTop - gapRow - top };
    const cx = D.x + D.w / 2, cy = D.y + D.h / 2;

    // Word: the line break that gives the largest type, preferring fewer lines.
    const boxW = D.w * (portrait ? 0.9 : 0.86);
    const boxH = D.h * (portrait ? 0.74 : 0.8);
    const words = word.trim().split(/\s+/).filter(Boolean);
    let best = { lines: [word.trim() || " "], size: Math.min(boxH / WORD_LH, D.h * 0.5), widths: [0] };
    if (ctx) {
      ctx.font = `${WORD_WEIGHT} 100px ${wordStack}`;
      ctx.letterSpacing = `${WORD_TRACK * 100}px`;
      let bestScore = 0;
      for (let k = 1; k <= Math.min(3, Math.max(1, words.length)); k++) {
        for (const lines of partitions(words.length ? words : [" "], k)) {
          const widths = lines.map((l) => ctx.measureText(l).width);
          const size = Math.min((boxW / Math.max(1, ...widths)) * 100, boxH / (k * WORD_LH), D.h * 0.62);
          // A second line has to earn its place: 18% bigger type per extra line.
          const score = size / Math.pow(1.18, k - 1);
          if (score > bestScore) {
            bestScore = score;
            best = { lines, size, widths: widths.map((w) => (w * size) / 100) };
          }
        }
      }
    }
    const F = best.size;
    let asc = F * 0.9, desc = F * 0.22;
    if (ctx) {
      ctx.font = `${WORD_WEIGHT} ${F}px ${wordStack}`;
      const m = ctx.measureText("Hg");
      if (m.fontBoundingBoxAscent) asc = m.fontBoundingBoxAscent;
      if (m.fontBoundingBoxDescent) desc = m.fontBoundingBoxDescent;
    }
    const lineBox = F * WORD_LH;
    const blockTop = cy - (lineBox * best.lines.length) / 2;
    const wordLines = best.lines.map((text, i) => {
      const t = blockTop + i * lineBox;
      return { text, top: t, baseline: t + (lineBox - (asc + desc)) / 2 + asc, width: best.widths[i] ?? 0 };
    });

    const spacing = Math.max(5, unit / density);
    // Graphite reads lighter on a pale wall, so the pen presses a little harder there.
    const lw = Math.max(1.3, unit * (dark ? 0.19 : 0.215));
    const gutter = spacing * 1.1;
    const hw = (D.w - gutter) / 2, hh = (D.h - gutter) / 2;
    const rects: Rect[] = [
      { x: D.x, y: D.y, w: hw, h: hh },
      { x: D.x + hw + gutter, y: D.y, w: hw, h: hh },
      { x: D.x, y: D.y + hh + gutter, w: hw, h: hh },
      { x: D.x + hw + gutter, y: D.y + hh + gutter, w: hw, h: hh },
    ];
    const lines = rects.map((r, q) => hatch(r, DIRS[q]!, spacing, cx, cy, `lewitt-${q}`, Q_START + q * Q_STAGGER));
    return { D, cx, cy, rects, lines, spacing, lw, F, wordLines, cf, capLines, capW, capX: mx + legend + gapC, rowTop, rowH, legend, mx, portrait };
    // `ready` re-measures once the fonts are in.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [W, H, unit, aspect, word, caption, density, wordStack, capStack, ready, dark]);

  // Paper grain: a fixed seeded alpha noise tile, punched out of the graphite.
  const grain = useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 192;
    c.height = 192;
    const g = c.getContext("2d", { willReadFrequently: true });
    if (!g) return null;
    const img = g.createImageData(192, 192);
    const r = rng("lewitt-grain");
    for (let i = 0; i < img.data.length; i += 4) {
      const v = r();
      img.data[i] = 0;
      img.data[i + 1] = 0;
      img.data[i + 2] = 0;
      img.data[i + 3] = Math.round(Math.pow(v, 2.2) * 150);
    }
    g.putImageData(img, 0, 0);
    return c;
  }, []);

  const accentIdx = QUADS.indexOf(accentQuadrant);
  const glow = dark;
  // Hero: once the last stroke lands, the word takes a breath of margin (spring with a touch of overshoot).
  const breath = springSnap(frame, fps, HERO, { damping: 11, stiffness: 140, mass: 0.8 });
  const pad = L.spacing * (0.12 + 0.5 * breath);

  useLayoutEffect(() => {
    // Software canvas (willReadFrequently) keeps every worker bit-identical.
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const { D, rects, lines, lw, F, wordLines, legend, rowTop } = L;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = "butt";

    // Sheen band position along the drawing's diagonal (0 = top-left corner, 1 = bottom-right).
    const sweep = ramp(frame, [SHEEN_AT, SHEEN_AT + SHEEN_LEN], [0, 1]);
    const bandAt = -0.3 + 1.6 * easeInOut(sweep);
    const bandOn = sweep > 0 && sweep < 1;
    const toneIn = easeInOut(ramp(frame, [SHEEN_AT, SHEEN_AT + SHEEN_LEN], [0, 1]));
    const strokeFor = (ink: string, a: number) => {
      if (!bandOn) return withAlpha(ink, a);
      const g = ctx.createLinearGradient(D.x, D.y, D.x + D.w, D.y + D.h);
      for (let i = 0; i <= 12; i++) {
        const s = i / 12;
        const band = Math.exp(-Math.pow((s - bandAt) / 0.12, 2));
        g.addColorStop(s, withAlpha(ink, a + (1 - a) * band));
      }
      return g;
    };

    // 1. Graphite: every stroke at its own progress.
    for (let q = 0; q < 4; q++) {
      const ink = q === accentIdx ? accent : color;
      // Before the light arrives every quadrant reads the same; after, each direction keeps its own tone.
      const tone = 1 - (1 - QUAD_TONE[q]!) * toneIn;
      ctx.save();
      const r = rects[q]!;
      ctx.beginPath();
      ctx.rect(r.x, r.y, r.w, r.h);
      ctx.clip();
      for (let b = 0; b < 3; b++) {
        ctx.beginPath();
        let any = false;
        for (const l of lines[q]!) {
          if (l.bucket !== b) continue;
          const p = easeInOut((frame - l.start) / l.dur);
          if (p <= 0) continue;
          any = true;
          ctx.moveTo(l.x0, l.y0);
          ctx.lineTo(l.x0 + (l.x1 - l.x0) * p, l.y0 + (l.y1 - l.y0) * p);
        }
        if (!any) continue;
        ctx.strokeStyle = strokeFor(ink, Math.min(1, BUCKET_ALPHA[b]! * tone * (dark ? 1 : 1.12)));
        ctx.lineWidth = lw;
        ctx.stroke();
      }
      // Pen tips: a bright bead rides the head of every live stroke.
      ctx.beginPath();
      let tips = false;
      for (const l of lines[q]!) {
        const raw = (frame - l.start) / l.dur;
        if (raw <= 0 || raw >= 1) continue;
        const p = easeInOut(raw);
        const x = l.x0 + (l.x1 - l.x0) * p, y = l.y0 + (l.y1 - l.y0) * p;
        ctx.moveTo(x + lw * 1.5, y);
        ctx.arc(x, y, lw * 1.5, 0, Math.PI * 2);
        tips = true;
      }
      if (tips) {
        ctx.fillStyle = ink;
        ctx.fill();
      }
      ctx.restore();
    }

    // 2. Pencil tooth: punch seeded grain out of the strokes.
    if (grain) {
      const pat = ctx.createPattern(grain, "repeat");
      if (pat) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = pat;
        ctx.fillRect(D.x - 2, D.y - 2, D.w + 4, D.h + 4);
      }
    }

    // 3. The word: the pen never touches it.
    ctx.globalCompositeOperation = "destination-out";
    ctx.font = `${WORD_WEIGHT} ${F}px ${wordStack}`;
    ctx.letterSpacing = `${WORD_TRACK * F}px`;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineJoin = "round";
    ctx.lineWidth = pad * 2;
    for (const wl of wordLines) {
      ctx.fillText(wl.text, L.cx, wl.baseline);
      if (pad > 0.2) ctx.strokeText(wl.text, L.cx, wl.baseline);
    }
    ctx.letterSpacing = "0px";
    ctx.globalCompositeOperation = "source-over";

    // 3b. Bloom (dark walls only): a half-res blurred copy of the graphite glows underneath.
    const bctx = bloomRef.current?.getContext("2d", { willReadFrequently: true });
    if (bctx) {
      bctx.setTransform(1, 0, 0, 1, 0, 0);
      bctx.globalCompositeOperation = "source-over";
      bctx.filter = "none";
      bctx.clearRect(0, 0, bw, bh);
      if (glow) {
        bctx.filter = `blur(${Math.max(1, Math.round(unit * 0.9))}px)`;
        bctx.drawImage(ctx.canvas, 0, 0, bw, bh);
        bctx.filter = "none";
        // The glow rests low and swells where the raking light passes.
        bctx.globalCompositeOperation = "destination-in";
        const k = bw / W;
        const g = bctx.createLinearGradient(D.x * k, D.y * k, (D.x + D.w) * k, (D.y + D.h) * k);
        for (let i = 0; i <= 12; i++) {
          const s = i / 12;
          const band = bandOn ? Math.exp(-Math.pow((s - bandAt) / 0.16, 2)) : 0;
          g.addColorStop(s, `rgba(0,0,0,${(0.3 + 0.7 * band).toFixed(3)})`);
        }
        bctx.fillStyle = g;
        bctx.fillRect(0, 0, bw, bh);
        // Keep the blank word clean: no haze bleeds into the letters.
        bctx.globalCompositeOperation = "destination-out";
        bctx.setTransform(k, 0, 0, k, 0, 0);
        bctx.font = `${WORD_WEIGHT} ${F}px ${wordStack}`;
        bctx.letterSpacing = `${WORD_TRACK * F}px`;
        bctx.textAlign = "center";
        bctx.textBaseline = "alphabetic";
        bctx.fillStyle = "#000";
        bctx.strokeStyle = "#000";
        bctx.lineJoin = "round";
        bctx.lineWidth = pad * 2;
        for (const wl of wordLines) {
          bctx.fillText(wl.text, L.cx, wl.baseline);
          bctx.strokeText(wl.text, L.cx, wl.baseline);
        }
        bctx.letterSpacing = "0px";
        bctx.setTransform(1, 0, 0, 1, 0, 0);
        bctx.globalCompositeOperation = "source-over";
      }
    }

    // 4. Drafting furniture: registration marks, the label rule and the legend.
    const hair = Math.max(1, unit * 0.11);
    const marks = easeOut(ramp(frame, [0, 14], [0, 1]));
    if (marks > 0) {
      const m = unit * 1.7 * marks, o = unit * 0.9;
      ctx.strokeStyle = withAlpha(color, 0.42 * marks);
      ctx.lineWidth = hair;
      ctx.beginPath();
      for (const [x, y, sx, sy] of [[D.x, D.y, -1, -1], [D.x + D.w, D.y, 1, -1], [D.x, D.y + D.h, -1, 1], [D.x + D.w, D.y + D.h, 1, 1]] as const) {
        ctx.moveTo(x + sx * o, y);
        ctx.lineTo(x + sx * (o + m), y);
        ctx.moveTo(x, y + sy * o);
        ctx.lineTo(x, y + sy * (o + m));
      }
      ctx.stroke();
    }
    const rule = easeOut(ramp(frame, [4, 44], [0, 1]));
    if (rule > 0) {
      const ry = Math.round(rowTop - unit * (L.portrait ? 2 : 1.6)) + 0.5;
      ctx.strokeStyle = withAlpha(color, 0.2);
      ctx.lineWidth = hair;
      ctx.beginPath();
      ctx.moveTo(D.x, ry);
      ctx.lineTo(D.x + D.w * rule, ry);
      ctx.stroke();
    }

    // Legend: a 2x2 key of the four instructions, each cell hatching as its quadrant does.
    const lgap = Math.max(2, legend * 0.08);
    const cell = (legend - lgap) / 2;
    for (let q = 0; q < 4; q++) {
      const qs = Q_START + q * Q_STAGGER;
      const qp = ramp(frame, [qs, qs + SWEEP + 12], [0, 1]);
      const show = ramp(frame, [qs - 4, qs + 4], [0, 1]);
      if (show <= 0) continue;
      const ink = q === accentIdx ? accent : color;
      const x = L.mx + (q % 2) * (cell + lgap);
      const y = rowTop + Math.floor(q / 2) * (cell + lgap);
      ctx.save();
      ctx.strokeStyle = withAlpha(color, 0.3 * show);
      ctx.lineWidth = hair;
      ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);
      ctx.beginPath();
      ctx.rect(x + hair * 2, y + hair * 2, cell - hair * 4, cell - hair * 4);
      ctx.clip();
      const sub = hatch({ x, y, w: cell, h: cell }, DIRS[q]!, cell / 5.5, x + cell / 2, y + cell / 2, "legend", 0);
      ctx.beginPath();
      sub.forEach((l, i) => {
        const p = easeInOut(qp * sub.length - (sub.length - 1 - i));
        if (p <= 0) return;
        ctx.moveTo(l.x0, l.y0);
        ctx.lineTo(l.x0 + (l.x1 - l.x0) * p, l.y0 + (l.y1 - l.y0) * p);
      });
      ctx.strokeStyle = withAlpha(ink, 0.9 * show);
      ctx.lineWidth = Math.max(1, hair * 1.2);
      ctx.stroke();
      ctx.restore();
    }
  }, [frame, L, W, H, bw, bh, glow, unit, color, accent, accentIdx, pad, grain, wordStack]);

  const capIn = springSnap(frame, fps, CAPTION_AT, { damping: 20, stiffness: 110, mass: 0.9 });
  const capOpacity = ramp(frame, [CAPTION_AT, CAPTION_AT + 14], [0, 1]);
  const capY = (1 - capIn) * L.cf * 0.8;

  return (
    <AbsoluteFill style={{ background }}>
      <canvas ref={bloomRef} width={bw} height={bh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", opacity: 0.9 }} />
      <canvas ref={ref} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {L.wordLines.map((wl, i) => (
        <div
          key={i}
          data-21st-slot="word"
          style={{
            position: "absolute",
            left: Math.max(0, L.cx - wl.width / 2 - L.F * 0.06),
            width: Math.min(W, wl.width + L.F * 0.12),
            top: wl.top,
            height: L.F * WORD_LH,
            fontFamily: wordStack,
            fontWeight: WORD_WEIGHT,
            fontSize: L.F,
            lineHeight: WORD_LH,
            letterSpacing: `${WORD_TRACK}em`,
            textAlign: "center",
            whiteSpace: "nowrap",
            // The letters are the lines that were never drawn, so the type itself stays clear.
            color: withAlpha(color, 0),
          }}
        >
          {wl.text}
        </div>
      ))}
      {caption.trim() ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: L.capX,
            top: L.rowTop + Math.max(0, (L.legend - L.capLines.length * L.cf * CAP_LH) / 2) * (L.capLines.length === 1 ? 1 : 0),
            width: L.capW,
            fontFamily: capStack,
            fontWeight: 400,
            fontSize: L.cf,
            lineHeight: CAP_LH,
            letterSpacing: "-0.01em",
            color: withAlpha(color, 0.74),
            opacity: capOpacity,
            transform: capY > 0.05 ? `translateY(${capY}px)` : undefined,
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
