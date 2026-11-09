// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, luminance, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { wordFitSize } from "../../text/shared";
import { Glyph, Ground, clamp01, initials, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./qr-end-card.meta";
import type { schema } from "./qr-end-card.schema";
import { finderOf, qrMatrix } from "./qr";

const SETTLE = 66;
const MODULES_AT = 10;
const SPREAD = 24;
const FOCUS = 36;
const SCAN_AT = 44;
const SCAN_LEN = 20;
const SCAN_EVERY = 90;

export const Component: React.FC<z.infer<typeof schema>> = ({ url, label, eyebrow, handle, logo, color, accent, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const wide = aspect === "16:9";
  const m = useMemo(() => qrMatrix(url), [url]);
  const n = m.length;

  // The code always prints dark on light, whatever the brand: scanners need it.
  const light = luminance(color) > luminance(surfaceColor) ? color : surfaceColor;
  const dark = light === color ? surfaceColor : color;

  // Geometry.
  const P = wide ? H * 0.54 : aspect === "1:1" ? H * 0.5 : W * 0.72;
  const quiet = P * 0.075;
  const cell = (P - quiet * 2) / n;
  const textW = wide ? W * 0.36 : W * (portrait ? 0.86 : 0.8);
  const labelFs = Math.max(floor, Math.min(fitFontSize({ chars: label.length + 1, boxW: textW, boxH: u * 12, charEm: 0.56, max: u * (wide ? 9.5 : portrait ? 9 : 7.4) }), wordFitSize(label, textW, { family: fontFamily })));
  const smallFs = Math.max(floor, u * (wide ? 3.4 : portrait ? 5.6 : 3.6));

  // Motion.
  const plate = springSnap(f, fps, 0, { damping: 15, stiffness: 120, mass: 0.9 });
  const focus = springSnap(f, fps, FOCUS, { damping: 11, stiffness: 170, mass: 0.7 });
  const since = f - SETTLE;
  const scanT = f < SETTLE ? prog(f, SCAN_AT, SCAN_AT + SCAN_LEN) : since % SCAN_EVERY < SCAN_LEN ? (since % SCAN_EVERY) / SCAN_LEN : 0;
  const scanOn = scanT > 0 && scanT < 1;
  const textStep = (i: number) => expoOut(prog(f, 16 + i * 7, 30 + i * 7));
  const sweep = expoOut(prog(f, 22, 40));

  const c = (n - 1) / 2;
  const maxD = Math.hypot(c, c);
  const rects: React.ReactNode[] = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      if (!m[y]![x] || finderOf(x, y, n) >= 0) continue;
      const d = Math.hypot(x - c, y - c) / maxD;
      const at = MODULES_AT + d * SPREAD;
      const p = expoOut(prog(f, at, at + 7));
      if (p <= 0) continue;
      const size = p >= 1 ? 1.02 : p;
      rects.push(<rect key={`${x}-${y}`} x={px(x + (1 - size) / 2)} y={px(y + (1 - size) / 2)} width={px(size)} height={px(size)} rx={px(0.16 * size)} />);
    }
  const finder = (i: number) => {
    const fx = i === 1 ? n - 7 : 0;
    const fy = i === 2 ? n - 7 : 0;
    const p = springSnap(f, fps, 4 + i * 3, { damping: 12, stiffness: 160, mass: 0.7 });
    if (f < 4 + i * 3) return null;
    return (
      <g key={`f${i}`} transform={`translate(${fx + 3.5} ${fy + 3.5}) rotate(${px((1 - p) * -90)}) scale(${px(1.3 - 0.3 * p)}) translate(-3.5 -3.5)`} opacity={clamp01(p * 1.5)}>
        <path d="M1.2 0h4.6a1.2 1.2 0 0 1 1.2 1.2v4.6a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 5.8V1.2A1.2 1.2 0 0 1 1.2 0ZM1.6 1a.6.6 0 0 0-.6.6v3.8a.6.6 0 0 0 .6.6h3.8a.6.6 0 0 0 .6-.6V1.6a.6.6 0 0 0-.6-.6Z" fillRule="evenodd" />
        <rect x={2} y={2} width={3} height={3} rx={0.55} />
      </g>
    );
  };

  const arm = P * 0.15;
  const gapIn = P * 0.055 + (1 - focus) * P * 0.12;
  const stroke = Math.max(3, u * 0.7);
  const corner = (k: number) => {
    const right = k === 1 || k === 2;
    const bottom = k >= 2;
    return (
      <div
        key={k}
        style={{
          position: "absolute",
          width: arm,
          height: arm,
          left: right ? undefined : -gapIn,
          right: right ? -gapIn : undefined,
          top: bottom ? undefined : -gapIn,
          bottom: bottom ? -gapIn : undefined,
          borderStyle: "solid",
          borderColor: accent,
          borderWidth: `${bottom ? 0 : stroke}px ${right ? stroke : 0}px ${bottom ? stroke : 0}px ${right ? 0 : stroke}px`,
          borderTopLeftRadius: !right && !bottom ? arm * 0.45 : 0,
          borderTopRightRadius: right && !bottom ? arm * 0.45 : 0,
          borderBottomRightRadius: right && bottom ? arm * 0.45 : 0,
          borderBottomLeftRadius: !right && bottom ? arm * 0.45 : 0,
          opacity: prog(f, FOCUS - 2, FOCUS + 3),
        }}
      />
    );
  };

  const code = (
    <div style={{ position: "relative", width: P, height: P, flexShrink: 0, opacity: prog(f, 0, 6), transform: plate < 1 ? `scale(${px(0.86 + 0.14 * plate)}) rotate(${px((1 - plate) * -6)}deg)` : undefined }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: P * 0.07, background: light, boxShadow: `0 ${px(u * 2.4)}px ${px(u * 7)}px -${px(u * 1.2)}px ${withAlpha(s.deep, s.dark ? 0.8 : 0.28)}, 0 0 0 1px ${withAlpha(dark, 0.08)}, 0 0 ${px(u * 10)}px ${withAlpha(accent, s.dark ? 0.22 : 0.12)}` }} />
      <svg width={P - quiet * 2} height={P - quiet * 2} viewBox={`0 0 ${n} ${n}`} style={{ position: "absolute", left: quiet, top: quiet, display: "block" }} fill={dark} shapeRendering="geometricPrecision">
        {rects}
        {[0, 1, 2].map(finder)}
      </svg>
      {scanOn ? (
        <div style={{ position: "absolute", left: quiet * 0.5, right: quiet * 0.5, top: px(quiet + (P - quiet * 2) * scanT - cell * 0.5), height: Math.max(3, cell * 0.5), borderRadius: 99, background: accent, boxShadow: `0 0 ${px(cell * 2)}px ${px(cell * 0.6)}px ${withAlpha(accent, 0.55)}`, opacity: Math.sin(scanT * Math.PI) }} />
      ) : null}
      {[0, 1, 2, 3].map(corner)}
    </div>
  );

  const mark = (size: number) =>
    logo ? (
      <Img src={logo} style={{ width: size, height: size, objectFit: "contain", display: "block", flexShrink: 0 }} />
    ) : (
      <div style={{ width: size, height: size, borderRadius: "50%", background: accent, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: head, fontWeight: 700, fontSize: size * 0.5, lineHeight: 1, color: inkOn(accent) }}>{initials(handle.replace(/^@/, "")).slice(0, 1)}</span>
      </div>
    );

  const align = wide ? "flex-start" : "center";
  const textNodes = [
    eyebrow ? (
      <div key="e" style={{ display: "flex", alignItems: "center", gap: smallFs * 0.45 }}>
        <Glyph name="scan-line" size={smallFs * 1.1} color={accent} strokeWidth={2.2} />
        <span data-21st-slot="eyebrow" style={{ fontFamily: head, fontWeight: 500, fontSize: smallFs, lineHeight: 1.2, color: s.muted, letterSpacing: "0.01em" }}>
          {eyebrow}
        </span>
      </div>
    ) : null,
    <div key="l" style={{ position: "relative", clipPath: sweep < 1 ? `inset(-20% ${px((1 - sweep) * 100)}% -20% 0)` : undefined }}>
      <span data-21st-slot="label" style={{ display: "block", fontFamily: head, fontWeight: 650, fontSize: labelFs, lineHeight: 1.08, letterSpacing: "-0.04em", color: s.ink, textAlign: wide ? "left" : "center", maxWidth: textW }}>
        {label}
      </span>
    </div>,
    handle ? (
      <div key="h" style={{ display: "flex", alignItems: "center", gap: smallFs * 0.5, marginTop: u * 0.6 }}>
        {mark(smallFs * 1.5)}
        <span data-21st-slot="handle" style={{ fontFamily: head, fontWeight: 600, fontSize: smallFs, lineHeight: 1.2, color: s.ink }}>
          {handle}
        </span>
      </div>
    ) : null,
  ];

  const text = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap: u * (portrait ? 2.6 : 1.8), width: wide ? textW : undefined }}>
      {textNodes.map((node, i) =>
        node ? (
          <div key={i} style={{ opacity: i === 1 ? prog(f, 22, 26) : textStep(i), transform: i === 1 ? undefined : `translateY(${px((1 - textStep(i)) * u * 2)}px)` }}>
            {node}
          </div>
        ) : null,
      )}
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Ground background={background} color={color} accent={accent} x={wide ? 0.32 : 0.5} y={wide ? 0.5 : 0.42} portrait={portrait} />
      <div style={{ position: "relative", display: "flex", flexDirection: wide ? "row" : "column", alignItems: "center", gap: wide ? W * 0.065 : u * (portrait ? 10 : 6.5) }}>
        {code}
        {text}
      </div>
    </AbsoluteFill>
  );
};
