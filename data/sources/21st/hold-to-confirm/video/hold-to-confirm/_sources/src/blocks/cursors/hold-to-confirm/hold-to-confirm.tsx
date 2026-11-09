// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Glyph, Ground, clamp01, decel, pathAt, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./hold-to-confirm.meta";
import type { schema } from "./hold-to-confirm.schema";

const SETTLE = 112;
const HOLD = meta.timing.markers.hold ?? 30;
const DONE = meta.timing.markers.done ?? 84;
const SPARKS = 26;

/** Scales snap to 1/10000 (px() steps of 0.01 would jitter a wide button). */
const fine = (v: number) => Math.round(v * 10000) / 10000;

/** Stable 0..1 noise per spark, so every render bursts the same way. */
const rand = (i: number, k: number) => {
  const v = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return v - Math.floor(v);
};

export const Component: React.FC<z.infer<typeof schema>> = ({ context, label, doneLabel, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const ink = inkOn(accent);
  // Glows read twice as strong on a light ground; keep them softer there.
  const glow = s.dark ? 1 : 0.6;

  // Geometry: an app tile, the context line and a pill whose right cap is the hold target.
  // 16:9 sets the tile beside the context and pill (the group spans ~60% of the width);
  // 1:1 and 9:16 stack the tile above them.
  const side = aspect === "16:9";
  const tile = side ? u * 28 : portrait ? W * 0.4 : u * 27;
  const tileGap = u * (side ? 5.5 : portrait ? 7 : 6);
  const btnW = side ? W * 0.6 - tile - tileGap : W * (portrait ? 0.86 : 0.68);
  const btnH = u * (portrait ? 19 : 15);
  const cap = btnH;
  const longest = Math.max(Array.from(label).length, Array.from(doneLabel).length);
  const labelFs = Math.max(floor, fitFontSize({ chars: longest + 2, boxW: btnW - cap - btnH * 0.45, boxH: btnH * 0.5, charEm: 0.56, max: u * (side ? 5 : portrait ? 7.2 : 5.4) }));
  const ctxFs = Math.max(floor, labelFs * 0.62);
  const ctxGap = u * (portrait ? 5.5 : side ? 3.6 : 4.5);
  const ctxH = context ? ctxFs * 1.2 + ctxGap : 0;
  const stackTop = (H - (tile + tileGap + ctxH + btnH)) / 2 - u * (portrait ? 3 : 2);
  const groupLeft = (W - (tile + tileGap + btnW)) / 2;
  const tileLeft = side ? groupLeft : (W - tile) / 2;
  const tileTop = side ? (H - tile) / 2 - u * 1.5 : stackTop;
  const left = side ? groupLeft + tile + tileGap : (W - btnW) / 2;
  const top = side ? tileTop + tile / 2 - (ctxH + btnH) / 2 + ctxH : stackTop + tile + tileGap + ctxH;
  const cx = left + btnW / 2;
  const cy = top + btnH / 2;

  // Timeline: arrive, press and hold while the button charges, burst, release.
  const appear = expoOut(prog(f, 0, 14));
  const down = Math.min(ramp(f, [HOLD - 2, HOLD + 1], [0, 1]), ramp(f, [DONE + 6, DONE + 10], [1, 0]));
  const t = prog(f, HOLD + 2, DONE);
  const fill = f >= DONE ? 1 : 0.45 * t + 0.55 * easeInOut(t);
  const holding = f >= HOLD && f < DONE;
  const shake = holding ? Math.sin(f * 2.7) * u * 0.18 * fill : 0;
  const tilt = holding ? Math.sin(f * 3.3 + 1) * 0.35 * fill : 0;
  const bump = Math.sin(Math.PI * prog(f, DONE, DONE + 12));
  const scale = (1 - 0.035 * down + 0.05 * bump) * (0.96 + 0.04 * appear);
  const swapOut = expoOut(prog(f, DONE, DONE + 6));
  const swapIn = expoOut(prog(f, DONE + 3, DONE + 12));
  const done = expoOut(prog(f, DONE, DONE + 10));

  // The cursor holds the right cap, then backs off below the button.
  const hp = { x: left + btnW - cap / 2, y: cy };
  const rest = { x: left + btnW - cap * (portrait ? 0.3 : 0.1), y: top + btnH + u * (portrait ? 9 : 6.5) };
  const cur = pathAt(f, [
    { f: 2, x: W * 0.97, y: H * 1.06 },
    { f: HOLD - 4, x: hp.x, y: hp.y },
    { f: DONE + 8, x: hp.x, y: hp.y },
    { f: DONE + 24, x: rest.x, y: rest.y },
  ]);
  const cursorSize = Math.max(u * (portrait ? 7 : 5.2), 24);

  // Hold ring inside the cap, around the cursor. It turns to the fill's ink as the fill passes under it.
  const ringSW = Math.max(3, u * (portrait ? 1 : 0.8));
  const ringR = btnH / 2 - Math.max(u * 1.3, ringSW * 1.6);
  const ringIn = expoOut(prog(f, HOLD - 2, HOLD + 8));
  const ringOut = prog(f, DONE, DONE + 9);
  const ringScale = (0.55 + 0.45 * ringIn) * (1 + 0.4 * expoOut(ringOut));
  const ringO = ringIn * (1 - ringOut);
  const under = Math.round(clamp01((fill * btnW - (btnW - cap / 2 - ringR)) / (ringR * 2)) * 100);
  const C = 2 * Math.PI * ringR;
  const box = (ringR + ringSW) * 2;

  const wave = prog(f, DONE, DONE + 20);
  const waveE = u * (portrait ? 9 : 7) * decel(wave);

  // Tile: the rocket rumbles while the button charges, launches on done and leaves a check.
  const rumble = holding ? Math.sin(f * 3.9) * u * 0.35 * fill : 0;
  const launch = Math.pow(prog(f, DONE, DONE + 12), 2);
  const check = f >= SETTLE ? 1 : springSnap(f, fps, DONE + 5, { damping: 13, stiffness: 190, mass: 0.6 });

  const text: React.CSSProperties = { fontFamily: font, fontWeight: 600, fontSize: labelFs, lineHeight: 1.2, letterSpacing: "-0.02em", whiteSpace: "nowrap" };
  const row: React.CSSProperties = { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: labelFs * 0.42 };
  const waiting = (ink2: string, slot?: string) => (
    <div style={{ ...row, paddingRight: cap * 0.92 }}>
      <Glyph name="rocket" size={labelFs} color={ink2} strokeWidth={2.1} />
      <span data-21st-slot={slot} style={{ ...text, color: ink2 }}>
        {label}
      </span>
    </div>
  );

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={side ? 0.5 : cy / H} portrait={portrait} glow={0.5 + 0.5 * done} />
      {tile > 0 ? (
        <div style={{ position: "absolute", left: tileLeft, top: tileTop, width: tile, height: tile, opacity: prog(f, 0, 10), transform: `translateY(${px((1 - appear) * u * 3)}px)` }}>
          <div style={{ position: "absolute", inset: -u * 3, borderRadius: tile * 0.3, background: withAlpha(accent, (0.12 * fill + 0.24 * done) * glow), filter: `blur(${px(u * 5)}px)` }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: tile * 0.26,
              overflow: "hidden",
              background: s.card,
              boxShadow: `${s.shadow(u)}, 0 0 0 ${px(Math.max(2, u * 0.35))}px ${withAlpha(accent, 0.75 * done)}`,
            }}
          >
            <div style={{ position: "absolute", inset: 0, opacity: fill * (1 - 0.5 * done) * glow, background: `radial-gradient(circle at 50% 115%, ${withAlpha(accent, 0.5)}, transparent 68%)` }} />
            {launch < 1 ? (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", opacity: 1 - launch, transform: `translate(${px(rumble + launch * tile * 0.7)}px, ${px(-launch * tile * 0.7)}px)` }}>
                <Glyph name="rocket" size={tile * 0.42} color={s.ink} strokeWidth={1.6} />
              </div>
            ) : null}
            {check > 0 ? (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", opacity: clamp01(check * 2), transform: `scale(${fine(Math.max(0, check))})` }}>
                <Glyph name="check" size={tile * 0.42} color={accent} strokeWidth={2.4} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {context ? (
        <div
          style={{
            position: "absolute",
            left: side ? left + u * 0.6 : W * 0.06,
            right: side ? W - left - btnW : W * 0.06,
            bottom: H - (top - ctxGap),
            display: "flex",
            alignItems: "center",
            justifyContent: side ? "flex-start" : "center",
            gap: ctxFs * 0.5,
            opacity: prog(f, 2, 12),
            transform: `translateY(${px((1 - expoOut(prog(f, 2, 16))) * u * 2)}px)`,
          }}
        >
          <div
            style={{
              width: px(ctxFs * 0.42),
              height: px(ctxFs * 0.42),
              flexShrink: 0,
              borderRadius: "50%",
              background: `color-mix(in srgb, ${accent} ${Math.round(done * 100)}%, ${s.faint})`,
              boxShadow: `0 0 0 ${px(ctxFs * 0.2)}px ${withAlpha(accent, 0.22 * done)}`,
            }}
          />
          <span data-21st-slot="context" style={{ fontFamily: font, fontWeight: 500, fontSize: ctxFs, lineHeight: 1.2, letterSpacing: "-0.01em", color: s.muted, whiteSpace: "nowrap" }}>
            {context}
          </span>
        </div>
      ) : null}
      {wave > 0 && wave < 1 ? (
        <div
          style={{
            position: "absolute",
            left: px(left - waveE),
            top: px(top - waveE),
            width: px(btnW + waveE * 2),
            height: px(btnH + waveE * 2),
            borderRadius: btnH / 2 + waveE,
            border: `${px(Math.max(2, u * 0.35))}px solid ${withAlpha(accent, 0.7 * (1 - wave))}`,
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: btnW,
          height: btnH,
          opacity: prog(f, 0, 8),
          transform: `translate(${px(shake)}px, ${px((1 - appear) * u * 3)}px) rotate(${px(tilt)}deg) scale(${fine(scale)})`,
        }}
      >
        <div style={{ position: "absolute", inset: -u * 3, borderRadius: btnH, background: withAlpha(accent, (0.14 * fill + 0.26 * done) * glow), filter: `blur(${px(u * 4)}px)` }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: btnH / 2,
            overflow: "hidden",
            background: s.card,
            boxShadow: `${s.shadow(u)}, 0 ${px(u * 1.6)}px ${px(u * 5)}px ${withAlpha(s.deep, s.dark ? 0.5 : 0.1 * (1 - done))}`,
          }}
        >
          <div style={{ position: "absolute", right: cap * 0.08, top: btnH * 0.08, width: cap * 0.84, height: btnH * 0.84, borderRadius: "50%", background: s.raised, opacity: prog(f, 4, 14) * (1 - done) }} />
          <div style={{ position: "absolute", inset: 0, opacity: 1 - done }}>{waiting(s.ink, "label")}</div>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: px(btnW * fill), background: `linear-gradient(90deg, ${withAlpha(accent, 0.78 + 0.22 * done)}, ${accent})` }}>
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: u * 2.6, opacity: 1 - done, background: `linear-gradient(90deg, transparent, ${withAlpha(ink, 0.3)})` }} />
          </div>
          {swapOut < 1 ? (
            <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${px((1 - fill) * 100)}% 0 0)`, opacity: 1 - swapOut, transform: `translateY(${px(-swapOut * btnH * 0.5)}px)` }}>
              {waiting(ink)}
            </div>
          ) : null}
          {swapIn > 0 ? (
            <div style={{ ...row, gap: labelFs * 0.38, opacity: swapIn, transform: `translateY(${px((1 - swapIn) * btnH * 0.5)}px)` }}>
              <Glyph name="check" size={labelFs} color={ink} strokeWidth={2.8} />
              <span data-21st-slot="doneLabel" style={{ ...text, color: ink }}>
                {doneLabel}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {Array.from({ length: SPARKS }, (_, i) => {
        const delay = rand(i, 1) * 3;
        const life = 15 + rand(i, 2) * 9;
        const st = prog(f, DONE + delay, DONE + delay + life);
        if (st <= 0 || st >= 1) return null;
        const a = (i / SPARKS) * Math.PI * 2 + (rand(i, 3) - 0.5) * 0.45;
        const c = Math.cos(a);
        const sn = Math.sin(a);
        // Start on the button's edge (a superellipse close to the pill) and fly outward.
        const ex = cx + Math.sign(c) * Math.pow(Math.abs(c), 0.4) * (btnW / 2);
        const ey = cy + Math.sign(sn) * Math.pow(Math.abs(sn), 0.4) * (btnH / 2);
        // In 16:9 the tile sits just left of the pill: sparks heading that way stay short of it.
        const dist = u * (4 + 11 * rand(i, 4)) * decel(st) * (side && c < -0.3 ? 0.35 : 1);
        const size = u * (0.7 + 0.9 * rand(i, 5)) * (1 - 0.55 * st);
        const tone = [accent, secondary, color][i % 3]!;
        const streak = i % 2 === 0;
        const w = streak ? size * 3.4 : size;
        const h = streak ? size * 0.7 : size;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px(ex + c * dist - w / 2),
              top: px(ey + sn * dist - h / 2),
              width: px(w),
              height: px(h),
              borderRadius: size,
              background: tone,
              opacity: px(Math.pow(1 - st, 1.3)),
              transform: streak ? `rotate(${px((a * 180) / Math.PI)}deg)` : undefined,
            }}
          />
        );
      })}
      {ringO > 0 ? (
        <svg
          width={box}
          height={box}
          viewBox={`0 0 ${box} ${box}`}
          style={{ position: "absolute", left: px(hp.x + shake - box / 2), top: px(hp.y - box / 2), opacity: ringO, transform: `scale(${fine(ringScale)})`, overflow: "visible", zIndex: 15 }}
        >
          <circle cx={box / 2} cy={box / 2} r={ringR} fill="none" stroke={`color-mix(in srgb, ${withAlpha(ink, 0.32)} ${under}%, ${withAlpha(color, 0.18)})`} strokeWidth={ringSW} />
          <circle
            cx={box / 2}
            cy={box / 2}
            r={ringR}
            fill="none"
            stroke={`color-mix(in srgb, ${ink} ${under}%, ${accent})`}
            strokeWidth={ringSW}
            strokeLinecap="round"
            strokeDasharray={`${px(C)} ${px(C)}`}
            strokeDashoffset={px(C * (1 - fill))}
            transform={`rotate(-90 ${box / 2} ${box / 2})`}
          />
        </svg>
      ) : null}
      {f >= 2 ? <Cursor x={px(cur.x)} y={px(cur.y)} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
