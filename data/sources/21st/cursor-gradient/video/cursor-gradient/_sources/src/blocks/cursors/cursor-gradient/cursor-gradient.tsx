// Built with Remotion - https://remotion.pro/license
import React, { useId } from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, luminance, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, ClickRing, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-gradient.meta";
import type { schema } from "./cursor-gradient.schema";

const SETTLE = 88;
const HOVER = meta.timing.markers.hover ?? 44;
const CLICK = meta.timing.markers.click ?? 55;

type Rect = { x: number; y: number; w: number; h: number };

/** Scales and angles snap to 1/10000 so held frames rerender bit-identically. */
const fine = (v: number) => Math.round(v * 10000) / 10000;

/** 1 with the point inside `r`, falling to 0 at `reach` px outside it. */
const near = (p: Pt, r: Rect, reach: number) => {
  const dx = Math.max(r.x - p.x, 0, p.x - (r.x + r.w));
  const dy = Math.max(r.y - p.y, 0, p.y - (r.y + r.h));
  return clamp01(1 - Math.hypot(dx, dy) / reach);
};

/**
 * The gradient cursor: the shared tailed arrow filled accent -> secondary, a
 * rim in the ink that reads on the accent, a soft sheen and a colored lift
 * that blooms on the click. Hot spot at (x, y).
 */
const GradientArrow: React.FC<{ x: number; y: number; size: number; down: number; tilt: number; bloom: number; accent: string; secondary: string; rim: string; shade: string }> = ({ x, y, size, down, tilt, bloom, accent, secondary, rim, shade }) => {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const tip = ARROW_TAIL_TIP;
  const glow = [
    `drop-shadow(0 ${px(size * 0.04)}px ${px(size * 0.05)}px ${withAlpha(shade, 0.35)})`,
    `drop-shadow(0 ${px(size * 0.06)}px ${px(size * (0.12 + 0.08 * bloom))}px ${withAlpha(accent, 0.5 + 0.35 * bloom)})`,
    bloom > 0.005 ? `drop-shadow(0 0 ${px(size * (0.08 + 0.42 * bloom))}px ${withAlpha(secondary, 0.95 * bloom)})` : "",
  ].join(" ");
  const sheen = luminance(rim) > 0.5;
  return (
    <div
      style={{
        position: "absolute",
        left: px(x - size * tip.x),
        top: px(y - size * tip.y),
        width: size,
        height: size,
        transform: `rotate(${fine(tilt)}deg) scale(${fine(1 - 0.14 * down)})`,
        transformOrigin: `${tip.x * 100}% ${tip.y * 100}%`,
        filter: glow,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id={`${id}f`} x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0" style={{ stopColor: accent }} />
            <stop offset="0.5" style={{ stopColor: `color-mix(in oklch, ${accent}, ${secondary})` }} />
            <stop offset="1" style={{ stopColor: secondary }} />
          </linearGradient>
          <linearGradient id={`${id}s`} x1="0" y1="0" x2="0.5" y2="0.8">
            <stop offset="0" style={{ stopColor: rim, stopOpacity: 0.5 }} />
            <stop offset="0.55" style={{ stopColor: rim, stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path d={ARROW_TAIL_PATH} fill={`url(#${id}f)`} />
        {sheen ? <path d={ARROW_TAIL_PATH} fill={`url(#${id}s)`} /> : null}
        <path d={ARROW_TAIL_PATH} fill="none" stroke={rim} strokeWidth={1.45} strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ plans, period, badge, cta, doneLabel, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const wide = aspect === "16:9";
  // One ink that reads across the whole accent -> secondary gradient.
  const la = luminance(accent);
  const ls = luminance(secondary);
  const btnInk = (la + ls) / 2 > 0.45 ? inkOn(la > ls ? accent : secondary) : inkOn(la > ls ? secondary : accent);
  // Interpolated in oklch so two far-apart brand hues stay vivid instead of meeting in gray.
  const grad = (deg: number) => `linear-gradient(${deg}deg in oklch, ${accent}, ${secondary})`;
  // Glows read twice as strong on a light ground; keep them softer there.
  const glowK = s.dark ? 1 : 0.65;

  // Type: native sizes per format, never under the floor.
  const nameFs = Math.max(floor, portrait ? floor * 1.05 : u * (wide ? 2.5 : 2.3));
  const periodFs = Math.max(floor, portrait ? floor : u * (wide ? 2.2 : 2));
  const featFs = Math.max(floor, portrait ? floor : u * (wide ? 2.05 : 1.9));
  const badgeFs = Math.max(floor, portrait ? floor : u * 1.95);
  const btnH = u * (portrait ? 14 : wide ? 6.6 : 6.4);
  const pad = u * (portrait ? 5 : wide ? 3.4 : 2.6);
  const radius = u * (portrait ? 3.6 : 2.4);
  const badgeH = badge ? badgeFs * 1.75 : 0;
  const hair = Math.max(1, px(u * 0.12));

  const priceChars = (i: number) => Array.from(plans[i]!.price).length + Array.from(period).length * 0.5;
  const maxPriceChars = Math.max(priceChars(0), priceChars(1), priceChars(2));
  // 9:16 puts name and price on one row; long copy that cannot share a row at the
  // type floor stacks the price under the name instead (all three cards alike).
  const cwP = W * 0.86;
  const pricePFs = Math.max(floor, fitFontSize({ chars: maxPriceChars, boxW: cwP * 0.42, boxH: u * 9.6, charEm: 0.6, max: u * 8.4 }));
  const rowNeed = (i: number) => Array.from(plans[i]!.name).length * 0.56 * nameFs + Array.from(plans[i]!.price).length * 0.62 * pricePFs + Array.from(period).length * 0.52 * periodFs + u * 3;
  const stacked = portrait && Math.max(rowNeed(0), rowNeed(1), rowNeed(2)) > cwP - pad * 2;
  const rowH = stacked ? nameFs * 1.2 + u * 0.8 + pricePFs * 1.05 : u * 9.6;

  // Geometry. 16:9 and 1:1: three columns, the featured one taller in the middle.
  // 9:16: three stacked cards; the side plans are compact rows, the featured one is full.
  let cards: Rect[];
  if (!portrait) {
    const colW = wide ? Math.min(W * 0.2, u * 36) : W * 0.272;
    const featW = colW * 1.07;
    const gap = u * (wide ? 3 : 2.2);
    const cardH = H * (wide ? 0.42 : 0.4);
    const featH = cardH + u * 5;
    const x0 = (W - (colW * 2 + featW + gap * 2)) / 2;
    const cy = H / 2 + u * 1.2;
    cards = [
      { x: x0, y: cy - cardH / 2, w: colW, h: cardH },
      { x: x0 + colW + gap, y: cy - featH / 2, w: featW, h: featH },
      { x: x0 + colW + gap * 2 + featW, y: cy - cardH / 2, w: colW, h: cardH },
    ];
  } else {
    const cw = cwP;
    const sideH = pad * 2 + rowH;
    const featRows = plans[1]!.features.length;
    const featH = pad * 2 + badgeH * 0.3 + rowH + (featRows ? u * 3 + featRows * featFs * 1.45 : 0) + u * 4.5 + btnH;
    const gapA = Math.max(u * 5, badgeH * 0.5 + u * 2.6);
    const gapB = u * 4.5;
    const top = (H - (sideH * 2 + featH + gapA + gapB)) / 2 + u * 1.5;
    const x = (W - cw) / 2;
    cards = [
      { x, y: top, w: cw, h: sideH },
      { x, y: top + sideH + gapA, w: cw, h: featH },
      { x, y: top + sideH + gapA + featH + gapB, w: cw, h: sideH },
    ];
  }
  const contentW = (i: number) => cards[i]!.w - pad * 2;
  const btnOf = (i: number): Rect => ({ x: cards[i]!.x + pad, y: cards[i]!.y + cards[i]!.h - pad - btnH, w: cards[i]!.w - pad * 2, h: btnH });
  const fb = btnOf(1);

  const priceFs = portrait
    ? pricePFs
    : Math.max(floor, fitFontSize({ chars: maxPriceChars, boxW: contentW(0), boxH: u * 8, charEm: 0.62, max: u * 6.6 }));
  const ctaChars = Math.max(Array.from(cta).length, Array.from(doneLabel).length + 2);
  const ctaFs = Math.max(floor, fitFontSize({ chars: ctaChars, boxW: fb.w - btnH * 0.5, boxH: btnH * 0.5, charEm: 0.56, max: portrait ? floor * 1.1 : u * (wide ? 2.4 : 2.15) }));

  // The route: in from the lower left, a look at the cheaper plan, then the featured button.
  const starterPt: Pt = portrait ? { x: cards[0]!.x + cards[0]!.w * 0.62, y: cards[0]!.y + cards[0]!.h * 0.62 } : { x: btnOf(0).x + btnOf(0).w * 0.62, y: btnOf(0).y + btnH * 0.56 };
  const target: Pt = { x: fb.x + fb.w * (portrait ? 0.6 : 0.58), y: fb.y + btnH * 0.55 };
  const rest: Pt = { x: fb.x + fb.w * (portrait ? 0.84 : 0.86), y: fb.y + btnH * 0.78 };
  const keys: Key[] = [
    { f: 4, x: portrait ? W * 0.1 : W * 0.15, y: H * 1.08 },
    { f: 26, x: starterPt.x, y: starterPt.y },
    { f: 33, x: starterPt.x + u * 0.9, y: starterPt.y - u * 0.5 },
    { f: 49, x: target.x, y: target.y },
    { f: 61, x: target.x, y: target.y },
    { f: 76, x: rest.x, y: rest.y },
  ];
  const at = (fr: number) => pathAt(fr, keys);
  const cur = at(f);
  const back = at(f - 2);
  // Leans into its motion: the body swings behind the tip, back to upright at rest.
  const tilt = Math.max(-11, Math.min(11, ((cur.x - back.x) / 2 / u) * 3.2));
  const cursorSize = u * (portrait ? 17 : 11.5);

  // Reactions.
  const down = press(f, CLICK);
  const hoverA = portrait ? near(cur, cards[0]!, u * 3) : near(cur, btnOf(0), u * 2.5);
  const hoverB = near(cur, fb, u * 3);
  const sel = expoOut(prog(f, CLICK + 1, CLICK + 13));
  const swapOut = expoOut(prog(f, CLICK + 1, CLICK + 7));
  const swapIn = expoOut(prog(f, CLICK + 4, CLICK + 14));
  const bloomT = prog(f, CLICK, CLICK + 26);
  const bloom = f < CLICK ? 0 : prog(f, CLICK, CLICK + 3) * Math.pow(1 - bloomT, 1.5);
  const sheenT = prog(f, HOVER, HOVER + 16);
  const ringO = 0.42 + 0.18 * near(cur, cards[1]!, u * 6) + 0.4 * sel;

  const rowStyle: React.CSSProperties = stacked
    ? { display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: u * 0.8 }
    : { display: "flex", alignItems: "center", justifyContent: "space-between", gap: u * 2 };
  const enter = (i: number) => expoOut(prog(f, 1 + i * 3, 18 + i * 3));
  const textBase: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };

  const nameEl = (i: number, featured: boolean) => (
    <span data-21st-slot="plans" style={{ ...textBase, fontSize: nameFs, fontWeight: 600, letterSpacing: "-0.01em", color: featured ? s.ink : s.muted }}>
      {plans[i]!.name}
    </span>
  );
  const priceEl = (i: number) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: u * 0.5 }}>
      <span data-21st-slot="plans" style={{ ...textBase, lineHeight: 1.05, fontSize: priceFs, fontWeight: 700, letterSpacing: "-0.035em", color: s.ink, fontVariantNumeric: "tabular-nums" }}>
        {plans[i]!.price}
      </span>
      {period ? (
        <span data-21st-slot="period" style={{ ...textBase, fontSize: periodFs, fontWeight: 500, color: s.faint }}>
          {period}
        </span>
      ) : null}
    </div>
  );
  const featuresEl = (i: number, featured: boolean) =>
    plans[i]!.features.length ? (
      <div style={{ display: "flex", flexDirection: "column", gap: featFs * (portrait ? 0.45 : 0.62) }}>
        {plans[i]!.features.map((t, k) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: featFs * 0.5 }}>
            <Glyph name="check" size={featFs * 0.92} color={featured ? accent : s.faint} strokeWidth={2.8} />
            <span data-21st-slot="plans" style={{ ...textBase, fontSize: featFs, fontWeight: 450, color: featured ? s.ink : s.muted }}>
              {t}
            </span>
          </div>
        ))}
      </div>
    ) : null;

  // A side plan's button: quiet, it outlines in the accent while the cursor passes.
  const sideButton = (i: number, h: number) => {
    const b = btnOf(i);
    return (
      <div
        style={{
          position: "absolute",
          left: b.x - cards[i]!.x,
          top: b.y - cards[i]!.y,
          width: b.w,
          height: b.h,
          borderRadius: b.h / 2,
          background: `color-mix(in srgb, ${accent} ${Math.round(10 * h)}%, ${s.raised})`,
          boxShadow: `inset 0 0 0 ${px(Math.max(1, u * 0.14))}px ${h > 0.01 ? `color-mix(in srgb, ${accent} ${Math.round(70 * h)}%, ${s.line})` : s.line}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateY(${px(-h * u * 0.3)}px)`,
        }}
      >
        <span data-21st-slot="cta" style={{ ...textBase, fontSize: ctaFs, fontWeight: 600, letterSpacing: "-0.01em", color: s.ink }}>
          {cta}
        </span>
      </div>
    );
  };

  // The featured button: gradient fill, a sheen on hover, the label swaps to a check on the click.
  const lift = Math.max(hoverB, 0.6 * sel);
  const featuredButton = (
    <div
      style={{
        position: "absolute",
        left: fb.x - cards[1]!.x,
        top: fb.y - cards[1]!.y,
        width: fb.w,
        height: fb.h,
        transform: `translateY(${px(-lift * u * 0.35)}px) scale(${fine((1 + 0.03 * hoverB) * (1 - 0.05 * down))})`,
      }}
    >
      <div style={{ position: "absolute", inset: -u * 1.2, borderRadius: btnH, background: grad(90), opacity: (0.25 * hoverB + 0.3 * sel) * glowK, filter: `blur(${px(u * 2.2)}px)` }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: btnH / 2, overflow: "hidden", background: grad(100), boxShadow: `inset 0 ${px(Math.max(1, u * 0.12))}px 0 ${withAlpha(btnInk, 0.22)}` }}>
        {sheenT > 0 && sheenT < 1 ? (
          <div
            style={{
              position: "absolute",
              top: -btnH * 0.2,
              bottom: -btnH * 0.2,
              width: fb.w * 0.28,
              left: px(-fb.w * 0.35 + easeInOut(sheenT) * fb.w * 1.4),
              transform: "skewX(-22deg)",
              background: `linear-gradient(90deg, ${withAlpha(btnInk, 0)}, ${withAlpha(btnInk, 0.32)}, ${withAlpha(btnInk, 0)})`,
            }}
          />
        ) : null}
        {swapOut < 1 ? (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 1 - swapOut, transform: `translateY(${px(-swapOut * btnH * 0.4)}px)` }}>
            <span data-21st-slot="cta" style={{ ...textBase, fontSize: ctaFs, fontWeight: 600, letterSpacing: "-0.01em", color: btnInk }}>
              {cta}
            </span>
          </div>
        ) : null}
        {swapIn > 0 ? (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: ctaFs * 0.4, opacity: swapIn, transform: `translateY(${px((1 - swapIn) * btnH * 0.4)}px)` }}>
            <Glyph name="check" size={ctaFs * 1.05} color={btnInk} strokeWidth={3} />
            <span data-21st-slot="doneLabel" style={{ ...textBase, fontSize: ctaFs, fontWeight: 600, letterSpacing: "-0.01em", color: btnInk }}>
              {doneLabel}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );

  const badgeEl = badge ? (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: -badgeH / 2,
        display: "flex",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <div
        style={{
          height: badgeH,
          padding: `0 ${px(badgeFs * 0.85)}px`,
          borderRadius: badgeH / 2,
          background: grad(90),
          display: "flex",
          alignItems: "center",
          boxShadow: `0 ${px(u * 0.5)}px ${px(u * 1.6)}px ${withAlpha(accent, 0.35 * glowK)}`,
        }}
      >
        <span data-21st-slot="badge" style={{ ...textBase, fontSize: badgeFs, fontWeight: 600, letterSpacing: "-0.005em", color: btnInk }}>
          {badge}
        </span>
      </div>
    </div>
  ) : null;

  const sideCard = (i: number) => {
    const c = cards[i]!;
    const e = enter(i === 0 ? 0 : 2);
    const h = i === 0 ? hoverA : 0;
    const dim = 1 - 0.38 * sel;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: c.x,
          top: c.y,
          width: c.w,
          height: c.h,
          borderRadius: radius,
          background: s.card,
          boxShadow: `${s.shadow(u)}${portrait && h > 0.01 ? `, inset 0 0 0 ${px(Math.max(1.5, u * 0.22))}px ${withAlpha(accent, 0.6 * h)}` : ""}`,
          opacity: prog(f, 1 + i * 3, 10 + i * 3),
          transform: `translateY(${px((1 - e) * u * 4 - (portrait ? h * u * 0.4 : 0))}px) scale(${fine(1 - 0.015 * sel)})`,
        }}
      >
        {/* The card stays opaque (it may sit over footage); only its content steps back. */}
        <div style={{ position: "absolute", inset: 0, opacity: dim }}>
          {portrait ? (
            <div style={{ position: "absolute", inset: 0, padding: `0 ${px(pad)}px`, ...rowStyle }}>
              {nameEl(i, false)}
              {priceEl(i)}
            </div>
          ) : (
            <>
              <div style={{ position: "absolute", left: pad, right: pad, top: pad, display: "flex", flexDirection: "column" }}>
                {nameEl(i, false)}
                <div style={{ marginTop: u * 1.3 }}>{priceEl(i)}</div>
                <div style={{ height: hair, background: s.line, margin: `${px(u * 2.4)}px 0 ${px(u * 2.4)}px` }} />
                {featuresEl(i, false)}
              </div>
              {sideButton(i, h)}
            </>
          )}
        </div>
      </div>
    );
  };

  const fc = cards[1]!;
  const fe = enter(1);
  const ringW = Math.max(2, u * 0.32);
  const featuredCard = (
    <div
      style={{
        position: "absolute",
        left: fc.x,
        top: fc.y,
        width: fc.w,
        height: fc.h,
        opacity: prog(f, 4, 13),
        transform: `translateY(${px((1 - fe) * u * 4 - sel * u * 0.5)}px) scale(${fine(0.97 + 0.03 * fe)})`,
      }}
    >
      <div style={{ position: "absolute", inset: -u * 1.5, borderRadius: radius + u * 1.5, background: grad(135), opacity: (0.12 + 0.3 * sel + 0.25 * bloom) * glowK, filter: `blur(${px(u * 4)}px)` }} />
      <div style={{ position: "absolute", inset: -ringW, borderRadius: radius + ringW, background: grad(135), opacity: Math.min(1, ringO) }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: radius, background: s.card, boxShadow: s.shadow(u) }} />
      {portrait ? (
        <div style={{ position: "absolute", left: pad, right: pad, top: pad + badgeH * 0.3, display: "flex", flexDirection: "column" }}>
          <div style={{ height: rowH, ...rowStyle }}>
            {nameEl(1, true)}
            {priceEl(1)}
          </div>
          {plans[1]!.features.length ? <div style={{ marginTop: u * 3 }}>{featuresEl(1, true)}</div> : null}
        </div>
      ) : (
        <div style={{ position: "absolute", left: pad, right: pad, top: pad + badgeH * 0.42, display: "flex", flexDirection: "column" }}>
          {nameEl(1, true)}
          <div style={{ marginTop: u * 1.3 }}>{priceEl(1)}</div>
          <div style={{ height: hair, background: s.line, margin: `${px(u * 2.4)}px 0 ${px(u * 2.4)}px` }} />
          {featuresEl(1, true)}
        </div>
      )}
      {featuredButton}
      {badgeEl}
    </div>
  );

  const bt = prog(f, CLICK, CLICK + 24);
  const bloomR = u * (4 + 10 * expoOut(bt));

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={portrait ? (fc.y + fc.h / 2) / H : 0.5} portrait={portrait} glow={0.55 + 0.45 * sel} />
      {sideCard(0)}
      {sideCard(2)}
      {featuredCard}
      {bt > 0 && bt < 1 ? (
        <div
          style={{
            position: "absolute",
            left: px(target.x - bloomR),
            top: px(target.y - bloomR),
            width: px(bloomR * 2),
            height: px(bloomR * 2),
            borderRadius: "50%",
            background: `radial-gradient(circle, ${withAlpha(secondary, 0.62 * (1 - bt) * glowK)}, ${withAlpha(accent, 0.26 * (1 - bt) * glowK)} 42%, ${withAlpha(accent, 0)} 70%)`,
            zIndex: 15,
          }}
        />
      ) : null}
      <div style={{ position: "absolute", inset: 0, zIndex: 16 }}>
        <ClickRing x={target.x} y={target.y} size={u * (portrait ? 22 : 17)} t={prog(f, CLICK, CLICK + 22)} color={`color-mix(in srgb, ${accent} 50%, ${secondary})`} width={Math.max(2, u * 0.38)} />
      </div>
      {f >= 4 ? <GradientArrow x={cur.x} y={cur.y} size={cursorSize} down={down} tilt={tilt} bloom={bloom} accent={accent} secondary={secondary} rim={btnInk} shade={s.deep} /> : null}
    </AbsoluteFill>
  );
};
