// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { familyWidth, textEm, wordFitSize } from "../../text/shared";
import { Avatar, Ground, StarRow, clamp01, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./quote-wall.meta";
import type { schema } from "./quote-wall.schema";

type Props = z.infer<typeof schema>;
type Item = Props["items"][number];

const SETTLE = 80;
const STOP = 56;
const LIFT = 56;

/** Quintic ease-out: a long scroll that brakes hard and glides into place. */
const brake = (t: number) => 1 - Math.pow(1 - clamp01(t), 5);

export const Component: React.FC<Props> = ({ items, highlight, color, accent, surfaceColor, background, fontFamily, bodyFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const body = brandFontStack(bodyFontFamily ?? fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const n = items.length;
  const hi = Math.max(0, Math.min(n - 1, highlight));

  // Wall geometry.
  const cols = aspect === "16:9" ? 3 : aspect === "1:1" ? 2 : 1;
  const hiCol = aspect === "16:9" ? 1 : 0;
  const wallW = W * (portrait ? 0.86 : 0.9);
  const gap = u * (portrait ? 3 : 2.4);
  const colW = (wallW - gap * (cols - 1)) / cols;
  const pad = colW * (portrait ? 0.065 : 0.075);
  const inner = colW - pad * 2;
  const longest = items.reduce((a, b) => (b.quote.length > a.length ? b.quote : a), "");
  const maxQ = u * (aspect === "16:9" ? 2.9 : aspect === "1:1" ? 3.5 : 6.4);
  const qFs = Math.max(floor, Math.min(fitFontSize({ chars: longest.length + 2, boxW: inner, boxH: maxQ * 1.36 * 4, lines: 4, charEm: 0.5, lineHeight: 1.36, max: maxQ }), wordFitSize(items.map((i) => i.quote).join(" "), inner, { family: bodyFontFamily })));
  const nameFs = Math.max(floor, qFs * 0.86);
  const roleFs = Math.max(floor, qFs * 0.78);
  const star = qFs * 0.82;
  const avatar = (nameFs + roleFs) * 1.3;
  const lineCount = (text: string, fs: number, w: number) => Math.max(1, Math.ceil((textEm(text) * familyWidth(bodyFontFamily) * fs * 1.02) / (w * 0.98)));
  const qLines = Math.max(...items.map((i) => lineCount(`“${i.quote}”`, qFs, inner)));
  const metaW = inner - avatar - nameFs * 0.6;
  const metaLines = Math.max(...items.map((i) => lineCount(i.name, nameFs, metaW))) * nameFs * 1.22 + Math.max(...items.map((i) => lineCount(i.role, roleFs, metaW))) * roleFs * 1.22;
  const innerGap = qFs * 0.85;
  const cardH = pad * 2 + star + innerGap + qLines * qFs * 1.36 + innerGap + Math.max(avatar, metaLines);
  const step = cardH + gap;

  // Column scroll: alternate directions, one brake, the highlight lands mid-frame in its column.
  const base = (j: number) => H / 2 - cardH / 2 + (j === hiCol ? 0 : ((j - hiCol + 3) % 2 ? 0.48 : -0.36) * step);
  const dir = (j: number) => (j % 2 ? 1 : -1);
  const travel = (j: number) => H * (1.7 + 0.25 * j);
  const scrollP = (t: number) => brake(prog(t, 0, STOP));
  const drift = (j: number, t: number) => (j === hiCol ? 0 : dir(j) * Math.max(0, t - SETTLE) * u * 0.07);
  const offset = (j: number, t: number) => base(j) - dir(j) * travel(j) * (1 - scrollP(t)) + drift(j, t);
  const itemAt = (j: number, k: number) => (((k * cols + j - hiCol + hi) % n) + n) % n;

  const lift = springSnap(f, fps, LIFT, { damping: 15, stiffness: 120, mass: 0.9 });
  const dim = prog(f, LIFT, LIFT + 14);
  const wallIn = prog(f, 0, 8);
  const hiX = (W - wallW) / 2 + hiCol * (colW + gap);
  const hiY = base(hiCol);
  const scaleTo = aspect === "16:9" ? 1.42 : aspect === "1:1" ? 1.32 : 1.08;

  const card = (it: Item, key: React.Key, style: React.CSSProperties, slot: boolean, ring = 0) => (
    <div
      key={key}
      style={{
        position: "absolute",
        width: colW,
        height: cardH,
        boxSizing: "border-box",
        padding: pad,
        borderRadius: pad * 0.75,
        background: s.card,
        boxShadow: ring > 0 ? `${s.shadow(u * (1 + ring))}, 0 0 0 ${px(u * 0.22 * ring)}px ${withAlpha(accent, 0.9 * ring)}, 0 ${px(u * 2)}px ${px(u * 8)}px ${withAlpha(accent, 0.28 * ring)}` : s.shadow(u * 0.6),
        display: "flex",
        flexDirection: "column",
        gap: innerGap,
        ...style,
      }}
    >
      <StarRow value={5} size={star} gap={star * 0.16} color={accent} empty={s.line} />
      <div data-21st-slot={slot ? "items" : undefined} style={{ flex: 1, fontFamily: body, fontSize: qFs, lineHeight: 1.36, letterSpacing: "-0.01em", color: s.ink, textWrap: "pretty" }}>
        {`“${it.quote}”`}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: nameFs * 0.6 }}>
        <Avatar name={it.name} size={avatar} accent={accent} font={head} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span data-21st-slot={slot ? "items" : undefined} style={{ fontFamily: head, fontWeight: 600, fontSize: nameFs, lineHeight: 1.22, color: s.ink, letterSpacing: "-0.01em" }}>
            {it.name}
          </span>
          <span data-21st-slot={slot ? "items" : undefined} style={{ fontFamily: head, fontSize: roleFs, lineHeight: 1.22, color: s.muted }}>
            {it.role}
          </span>
        </div>
      </div>
    </div>
  );

  const columns = Array.from({ length: cols }, (_, j) => {
    const off = offset(j, f);
    const speed = Math.abs(off - offset(j, f - 1));
    const kMin = Math.floor(-off / step) - 1;
    const kMax = Math.ceil((H - off) / step) + 1;
    const x = (W - wallW) / 2 + j * (colW + gap);
    const blur = Math.min(u * 0.7, speed * 0.025);
    return (
      <div key={j} style={{ position: "absolute", inset: 0, filter: blur > 0.3 ? `blur(${px(blur)}px)` : undefined }}>
        {Array.from({ length: Math.max(0, kMax - kMin + 1) }, (_, r) => {
          const k = kMin + r;
          const y = off + k * step;
          if (y > H || y + cardH < 0) return null;
          const isHi = j === hiCol && k === 0;
          const inside = y >= H * 0.03 && y + cardH <= H * 0.97 && !isHi && dim < 1;
          return card(items[itemAt(j, k)]!, k, { left: x, top: px(y), opacity: isHi ? (lift > 0 ? 0 : 1) : 1 }, inside);
        })}
      </div>
    );
  });

  const hiLeft = hiX + (W / 2 - colW / 2 - hiX) * lift;
  const hiTop = hiY + (H / 2 - cardH / 2 - hiY) * lift;
  const fade = `linear-gradient(180deg, transparent 0%, #000 ${portrait ? 12 : 16}%, #000 ${portrait ? 88 : 84}%, transparent 100%)`;

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.5 + 0.5 * dim} />
      <AbsoluteFill
        style={{
          WebkitMaskImage: fade,
          maskImage: fade,
          opacity: wallIn * (1 - 0.62 * dim),
          filter: dim > 0 ? `blur(${px(dim * u * 0.22)}px) saturate(${px(1 - 0.4 * dim)})` : undefined,
          transform: dim > 0 ? `scale(${px(1 - 0.03 * dim)})` : undefined,
        }}
      >
        {columns}
      </AbsoluteFill>
      {lift > 0 ? (
        <AbsoluteFill>
          {card(items[hi]!, "hi", { left: px(hiLeft), top: px(hiTop), transform: `scale(${px(1 + (scaleTo - 1) * lift)})`, transformOrigin: "50% 50%" }, true, clamp01(lift))}
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
