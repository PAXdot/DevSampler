// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../../ui/shared/icons";
import { ClickRing, Cursor, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./zoom-follow.meta";
import type { schema } from "./zoom-follow.schema";

const SETTLE = 120;
const MARK = meta.timing.markers;
const ZOOM_IN = MARK.zoom ?? 22;
const CLICK = MARK.click ?? 60;
const TOAST = MARK.toast ?? 70;
const PULL = MARK.pullBack ?? 86;
/** Cursor reaches the button. */
const ARRIVE = 44;

/** Exact lucide download nodes (ISC); the cursors icon set has no download glyph. */
const DOWNLOAD: [string, Record<string, string>][] = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
  ["polyline", { points: "7 10 12 15 17 10" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }],
];

const DownloadIcon: React.FC<{ size: number; color: string; strokeWidth: number }> = ({ size, color, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", overflow: "visible" }}>
    {DOWNLOAD.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

/** Revenue chart bar heights, oldest first. */
const BARS = [0.36, 0.5, 0.44, 0.58, 0.52, 0.66, 0.6, 0.74, 0.68, 0.82, 0.77, 0.95];

const chars = (s: string | undefined) => Array.from(s ?? "").length;
/** Scale snapped finer than px(): a 1/100 step would jump whole pixels at 2x. */
const sc = (v: number) => Math.round(v * 10000) / 10000;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, buttonLabel, nav, rows, amounts, statuses, toast, color, accent, secondary, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const land = aspect === "16:9";
  const sq = aspect === "1:1";
  const em = 0.58;

  // ---- Window (the camera's viewport) -------------------------------------------------
  const vw = land ? W * 0.8 : W * 0.88;
  const vh = H * 0.8;
  const vx = (W - vw) / 2;
  const vy = (H - vh) / 2 - (land ? u * 1.5 : 0);
  const radius = u * (portrait ? 3.4 : 2.4);
  const pad = portrait ? u * 5 : u * 4.2;

  // ---- Sidebar (not on the phone layout) ----------------------------------------------
  const showNav = !portrait && nav.length > 0;
  const sbW = showNav ? vw * (land ? 0.19 : 0.25) : 0;
  const sbPad = u * 1.5;
  const navPadX = u * 1.4;
  const navChars = Math.max(1, ...nav.map(chars));
  const navFs = Math.max(floor, Math.min(u * 2.3, (sbW - sbPad * 2 - navPadX * 2) / (navChars * em)));
  const navItemH = navFs * 2.05;
  const navTop = pad * 0.7 + u * 5.2;
  const active = Math.max(0, nav.findIndex((n) => n.trim().toLowerCase() === title.trim().toLowerCase()));

  // ---- Header: title on the left, the button on the right -------------------------------
  const mx = sbW + pad;
  const mw = vw - mx - pad;
  const btnFs = Math.max(floor, portrait ? u * 5.6 : u * 2.35);
  const iconS = btnFs * 1.05;
  const btnPadX = btnFs * (portrait ? 0.8 : 1.05);
  const btnW = Math.min(mw, btnPadX * 2 + iconS + btnFs * 0.5 + chars(buttonLabel) * btnFs * 0.58);
  const btnH = btnFs * (portrait ? 2.15 : 2.5);
  const titleMax = portrait ? u * 7.4 : land ? u * 4.2 : u * 4;
  const titleChars = Math.max(1, chars(title));
  const titleRoom = mw - btnW - u * 2.6;
  // The title shares the header row with the button unless that would shrink it a lot; then it stacks.
  const titleFit = titleRoom / (titleChars * 0.58);
  const stacked = titleFit < Math.max(floor, titleMax * 0.8);
  const titleFs = stacked ? Math.max(floor, Math.min(titleMax, mw / (titleChars * 0.58))) : Math.min(titleMax, titleFit);
  const headTop = pad * (portrait ? 1 : 0.8);
  const titleH = titleFs * 1.2;
  const btnX = stacked ? mx : mx + mw - btnW;
  const btnY = stacked ? headTop + titleH + u * 2 : headTop + Math.max(0, (titleH - btnH) / 2);
  const headBottom = stacked ? btnY + btnH : headTop + Math.max(titleH, btnH);
  const titleY = stacked ? headTop : headTop + Math.max(0, (btnH - titleH) / 2);
  // Quiet header controls left of the button (search field, date picker) when the row has room,
  // so the zoomed-in shot shows real UI around the click instead of empty header.
  const ctlGap = u * 1.4;
  const freeRow = stacked || portrait ? 0 : mw - btnW - titleChars * 0.58 * titleFs - u * 4;
  const showCal = freeRow >= btnH + ctlGap;
  const searchW = Math.min(u * 26, freeRow - btnH - ctlGap * 2);
  const showSearch = showCal && searchW >= u * 16;

  // ---- Toast (fixed to the screen); on the phone it sits over a free band at the window's foot ----
  const toastFs = Math.max(floor, portrait ? u * 5.6 : u * 2.4);
  const badge = toastFs * 1.55;
  const toastH = badge + toastFs * 1.1;
  const toastBand = portrait ? toastH * 0.62 : 0;

  // ---- Chart and table share the rest of the window ------------------------------------
  const contentTop = headBottom + u * (portrait ? 4.4 : 3.2);
  const avail = vh - pad * 0.9 - contentTop - toastBand;
  const chartGap = u * (portrait ? 3 : 2.6);
  const nameChars = Math.max(1, ...rows.map(chars));
  const amountChars = Math.max(0, ...amounts.map(chars));
  const statusChars = Math.max(0, ...statuses.map(chars));
  const rowPadX = u * (portrait ? 3 : 1.8);
  // Landscape: one table line per row. Portrait: name over amount + status.
  const rowFs = portrait
    ? Math.max(floor, Math.min(u * 5.6, (mw - rowPadX * 2) / (nameChars * em)))
    : Math.max(floor, Math.min(u * 2.3, (mw - rowPadX * 2 - u * 4) / ((nameChars + amountChars + statusChars) * em + 3.4)));
  const pillFs = Math.max(floor, rowFs * (portrait ? 0.96 : 0.9));
  const pillH = pillFs * 1.6;
  const rowGap = portrait ? u * 1.8 : 0;
  const rowH = portrait ? rowPadX * 1.6 + rowFs * 1.25 + u * 1.4 + pillH : Math.max(rowFs * 2.6, u * 7.2);
  const minChart = portrait ? u * 24 : u * 13;
  const fitRows = Math.max(1, Math.floor((avail - minChart - chartGap + rowGap) / (rowH + rowGap)));
  const shown = rows.slice(0, Math.min(rows.length, fitRows, portrait ? 3 : 6));
  const rowsH = shown.length * rowH + (shown.length - 1) * rowGap;
  const chartH = Math.max(0, avail - rowsH - chartGap);
  const rowsTop = contentTop + chartH + chartGap;
  const amountW = amountChars * pillFs * 0.62 + rowFs * 0.4;
  const pillW = statusChars ? statusChars * pillFs * 0.62 + pillFs * 1.9 : 0;
  const firstStatus = statuses[0]?.trim().toLowerCase();

  // ---- Camera ------------------------------------------------------------------------
  // Zoom in on the button as the cursor arrives, hold for the click, pull back out.
  const Z = land ? 2 : sq ? 1.85 : 1.6;
  const kIn = easeInOut(prog(f, ZOOM_IN, ZOOM_IN + 32));
  const kOut = easeInOut(prog(f, PULL, PULL + 30));
  const k = kIn * (1 - kOut);
  const zoom = 1 + (Z - 1) * k;
  // The visible world rect at full zoom: centered on the button, clamped inside the window.
  const btnCx = btnX + btnW / 2;
  const btnCy = btnY + btnH / 2;
  const ex = Math.max(0, Math.min(vw - vw / Z, btnCx - vw / (2 * Z)));
  const ey = Math.max(0, Math.min(vh - vh / Z, btnCy - vh / (2 * Z) + vh * 0.06));
  const share = (1 - 1 / zoom) / (1 - 1 / Z);
  const ox = ex * share;
  const oy = ey * share;
  const toScreen = (p: { x: number; y: number }) => ({ x: vx + (p.x - ox) * zoom, y: vy + (p.y - oy) * zoom });

  // ---- Cursor (world path, drawn at a constant screen size) -----------------------------
  // Hot spot just past the label, so the arrow never hides the text it clicks.
  const hit = { x: btnX + btnW * 0.9, y: btnY + btnH * 0.66 };
  // Afterwards it eases off the button, just below its corner, so the done state stays readable.
  const rest = { x: btnX + btnW * 0.94, y: btnY + btnH + u * 1.4 };
  const world = pathAt(f, [
    { f: 6, x: W * 0.6 - vx, y: H - vy + u * 6 },
    { f: ARRIVE, x: hit.x, y: hit.y },
    { f: PULL + 2, x: hit.x, y: hit.y },
    { f: PULL + 28, x: rest.x, y: rest.y },
  ]);
  const cur = toScreen(world);
  const cursorSize = Math.max(u * (portrait ? 7 : 4.6), 24);
  const down = press(f, CLICK);

  // ---- Button states ---------------------------------------------------------------------
  const hover = prog(f, ARRIVE - 4, ARRIVE + 4);
  const sweep = expoOut(prog(f, CLICK + 1, CLICK + 11));
  const sweepFade = 1 - prog(f, CLICK + 11, CLICK + 17);
  const done = springSnap(f, fps, CLICK + 10, { damping: 11, stiffness: 190, mass: 0.6 });
  const swap = prog(f, CLICK + 9, CLICK + 13);
  const btnInk = inkOn(accent);
  const toastIn = springSnap(f, fps, TOAST, { damping: 15, stiffness: 140, mass: 0.8 });

  // ---- Enter -------------------------------------------------------------------------------
  const enter = expoOut(prog(f, 0, 16));

  const text: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.2 };
  const pill = (status: string) => {
    const good = status.trim().toLowerCase() === firstStatus;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: pillFs * 0.45,
          height: pillH,
          padding: `0 ${px(pillFs * 0.62)}px`,
          borderRadius: pillH / 2,
          boxSizing: "border-box",
          background: good ? withAlpha(secondary, s.dark ? 0.16 : 0.14) : withAlpha(color, s.dark ? 0.08 : 0.06),
        }}
      >
        <div style={{ width: pillFs * 0.42, height: pillFs * 0.42, borderRadius: "50%", flexShrink: 0, background: good ? secondary : s.faint }} />
        <span data-21st-slot="statuses" style={{ ...text, fontSize: pillFs, fontWeight: 500, color: good ? `color-mix(in srgb, ${secondary} ${s.dark ? 78 : 58}%, ${color})` : s.muted }}>
          {status}
        </span>
      </div>
    );
  };

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.7} />

      {/* The window: a fixed viewport; the camera moves the app inside it. */}
      <div
        style={{
          position: "absolute",
          left: vx,
          top: vy,
          width: vw,
          height: vh,
          borderRadius: radius,
          overflow: "hidden",
          background: s.card,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 8),
          transform: enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px) scale(${sc(0.97 + 0.03 * enter)})` : undefined,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: vw,
            height: vh,
            transformOrigin: "0 0",
            transform: k > 0 ? `scale(${sc(zoom)}) translate(${px(-ox)}px, ${px(-oy)}px)` : undefined,
          }}
        >
          {/* Sidebar */}
          {showNav ? (
            <div style={{ position: "absolute", left: 0, top: 0, width: sbW, height: vh, background: `color-mix(in srgb, ${color} ${s.dark ? 3 : 2.5}%, ${s.card})`, borderRight: `1px solid ${s.line}` }}>
              <div style={{ position: "absolute", left: sbPad + navPadX * 0.4, top: pad * 0.7, display: "flex", gap: u * 0.9 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: u * 1.15, height: u * 1.15, borderRadius: "50%", background: withAlpha(color, s.dark ? 0.2 : 0.16) }} />
                ))}
              </div>
              {nav.map((item, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: sbPad,
                    right: sbPad,
                    top: navTop + i * (navItemH + u * 0.5),
                    height: navItemH,
                    display: "flex",
                    alignItems: "center",
                    padding: `0 ${navPadX}px`,
                    boxSizing: "border-box",
                    borderRadius: u * 1.1,
                    background: i === active ? withAlpha(color, s.dark ? 0.08 : 0.06) : "transparent",
                    opacity: prog(f, 4 + i * 2, 12 + i * 2),
                  }}
                >
                  <span data-21st-slot="nav" style={{ ...text, fontSize: navFs, fontWeight: i === active ? 600 : 500, color: i === active ? s.ink : s.muted, letterSpacing: "-0.01em" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          {/* Header */}
          {showCal ? (
            <div style={{ position: "absolute", left: btnX - ctlGap - btnH, top: btnY, width: btnH, height: btnH, borderRadius: btnH * 0.26, boxShadow: `inset 0 0 0 1px ${s.line}`, background: withAlpha(color, s.dark ? 0.03 : 0.02), display: "grid", placeItems: "center", opacity: prog(f, 4, 12) }}>
              <Icon name="calendar" size={btnFs * 1.05} color={s.muted} strokeWidth={2} />
            </div>
          ) : null}
          {showSearch ? (
            <div style={{ position: "absolute", left: btnX - ctlGap * 2 - btnH - searchW, top: btnY, width: searchW, height: btnH, borderRadius: btnH * 0.26, boxShadow: `inset 0 0 0 1px ${s.line}`, background: withAlpha(color, s.dark ? 0.03 : 0.02), display: "flex", alignItems: "center", gap: btnFs * 0.6, padding: `0 ${px(btnFs * 0.8)}px`, boxSizing: "border-box", opacity: prog(f, 4, 12) }}>
              <Icon name="search" size={btnFs * 0.95} color={s.faint} strokeWidth={2} />
              <div style={{ width: "46%", height: btnFs * 0.42, borderRadius: btnFs, background: withAlpha(color, s.dark ? 0.1 : 0.08) }} />
            </div>
          ) : null}
          <div style={{ position: "absolute", left: mx, top: titleY, width: stacked ? mw : titleRoom, height: titleH, display: "flex", alignItems: "center" }}>
            <span data-21st-slot="title" style={{ ...text, fontSize: titleFs, fontWeight: 600, color: s.ink, letterSpacing: "-0.025em" }}>
              {title}
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              left: btnX,
              top: btnY,
              width: btnW,
              height: btnH,
              borderRadius: btnH * 0.26,
              overflow: "hidden",
              background: `color-mix(in srgb, ${btnInk} ${px(hover * 6)}%, ${accent})`,
              boxShadow: `0 ${px(btnH * (0.08 + 0.1 * hover))}px ${px(btnH * (0.3 + 0.3 * hover))}px ${withAlpha(accent, 0.28 + 0.14 * hover)}`,
              transform: down > 0 ? `scale(${sc(1 - 0.06 * down)})` : undefined,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: btnFs * 0.5,
            }}
          >
            {sweep > 0 && sweepFade > 0 ? <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${px(sweep * 100)}%`, background: withAlpha(btnInk, 0.16 * sweepFade) }} /> : null}
            <div style={{ position: "relative", width: iconS, height: iconS, flexShrink: 0 }}>
              <div style={{ position: "absolute", inset: 0, opacity: 1 - swap, transform: `scale(${sc(1 - 0.4 * swap)})` }}>
                <DownloadIcon size={iconS} color={btnInk} strokeWidth={2.3} />
              </div>
              <div style={{ position: "absolute", inset: 0, opacity: swap, transform: `scale(${sc(Math.max(0, done))})` }}>
                <Glyph name="check" size={iconS} color={btnInk} strokeWidth={2.8} />
              </div>
            </div>
            <span data-21st-slot="buttonLabel" style={{ ...text, position: "relative", fontSize: btnFs, fontWeight: 600, color: btnInk, letterSpacing: "-0.01em" }}>
              {buttonLabel}
            </span>
          </div>

          {/* Chart */}
          {chartH > u * 6 ? (
            <div
              style={{
                position: "absolute",
                left: mx,
                top: contentTop,
                width: mw,
                height: chartH,
                borderRadius: u * 1.6,
                background: withAlpha(color, s.dark ? 0.03 : 0.025),
                boxShadow: `inset 0 0 0 1px ${s.line}`,
                display: "flex",
                alignItems: "flex-end",
                gap: u * (portrait ? 1.6 : 1.1),
                padding: `${px(u * 2.4)}px ${px(u * 2.4)}px ${px(u * 2)}px`,
                boxSizing: "border-box",
                opacity: prog(f, 4, 12),
              }}
            >
              {(portrait ? BARS.slice(4) : BARS).map((h, i, all) => {
                const grow = expoOut(prog(f, 6 + i * 1.5, 22 + i * 1.5));
                const last = i === all.length - 1;
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${px(h * 100 * grow)}%`,
                      borderRadius: `${px(u * 0.7)}px ${px(u * 0.7)}px ${px(u * 0.25)}px ${px(u * 0.25)}px`,
                      background: last ? accent : withAlpha(accent, s.dark ? 0.3 : 0.24),
                    }}
                  />
                );
              })}
            </div>
          ) : null}

          {/* Table */}
          {shown.map((name, i) => {
            const o = prog(f, 8 + i * 2, 16 + i * 2);
            const lift = (1 - expoOut(prog(f, 8 + i * 2, 22 + i * 2))) * u * 1.5;
            const amount = amounts[i];
            const status = statuses[i];
            return portrait ? (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: mx,
                  top: rowsTop + i * (rowH + rowGap),
                  width: mw,
                  height: rowH,
                  borderRadius: u * 2.2,
                  background: withAlpha(color, s.dark ? 0.04 : 0.03),
                  boxShadow: `inset 0 0 0 1px ${s.line}`,
                  padding: `${px(rowPadX * 0.8)}px ${px(rowPadX)}px`,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  opacity: o,
                  transform: lift > 0.01 ? `translateY(${px(lift)}px)` : undefined,
                }}
              >
                <span data-21st-slot="rows" style={{ ...text, fontSize: rowFs, fontWeight: 600, color: s.ink, letterSpacing: "-0.02em" }}>
                  {name}
                </span>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {amount ? (
                    <span data-21st-slot="amounts" style={{ ...text, fontSize: pillFs, fontWeight: 500, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
                      {amount}
                    </span>
                  ) : (
                    <span />
                  )}
                  {status ? pill(status) : null}
                </div>
              </div>
            ) : (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: mx,
                  top: rowsTop + i * rowH,
                  width: mw,
                  height: rowH,
                  borderRadius: u * 1.1,
                  background: i % 2 === 0 ? withAlpha(color, s.dark ? 0.035 : 0.03) : "transparent",
                  padding: `0 ${px(rowPadX)}px`,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: u * 2,
                  opacity: o,
                  transform: lift > 0.01 ? `translateY(${px(lift)}px)` : undefined,
                }}
              >
                <span data-21st-slot="rows" style={{ ...text, flex: "1 1 0", minWidth: 0, fontSize: rowFs, fontWeight: 500, color: s.ink }}>
                  {name}
                </span>
                {amountChars ? (
                  <div style={{ width: amountW, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
                    {amount ? (
                      <span data-21st-slot="amounts" style={{ ...text, fontSize: rowFs, fontWeight: 500, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
                        {amount}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                {pillW ? <div style={{ width: pillW, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>{status ? pill(status) : null}</div> : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast, fixed to the screen like the app's own overlay */}
      {f >= TOAST ? (
        <div
          style={{
            position: "absolute",
            ...(portrait ? { left: 0, right: 0, justifyContent: "center" } : { right: W - (vx + vw) - u * (land ? 2.6 : 1.4) }),
            bottom: H - (vy + vh) - (portrait ? toastH * 0.38 : u * (land ? 3.2 : 2.6)),
            display: "flex",
            opacity: clamp01(toastIn * 1.6),
            transform: `translateY(${px((1 - toastIn) * u * 5)}px) scale(${sc(0.94 + 0.06 * toastIn)})`,
            transformOrigin: portrait ? "50% 100%" : "100% 100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: toastFs * 0.6,
              padding: `${px(toastFs * 0.55)}px ${px(toastFs * 0.95)}px ${px(toastFs * 0.55)}px ${px(toastFs * 0.6)}px`,
              borderRadius: toastFs * 0.9,
              background: s.dark ? s.raised : s.card,
              boxShadow: s.shadow(u),
            }}
          >
            <div style={{ width: badge, height: badge, borderRadius: "50%", flexShrink: 0, display: "grid", placeItems: "center", background: accent }}>
              <Glyph name="check" size={badge * 0.56} color={btnInk} strokeWidth={3} />
            </div>
            <span data-21st-slot="toast" style={{ ...text, fontSize: toastFs, fontWeight: 500, color: s.ink, letterSpacing: "-0.01em" }}>
              {toast}
            </span>
          </div>
        </div>
      ) : null}

      <ClickRing x={cur.x} y={cur.y} size={btnH * zoom * (portrait ? 1.7 : 2.4)} t={prog(f, CLICK, CLICK + 22)} color={accent} width={Math.max(2, u * 0.45)} />
      {f >= 6 ? <Cursor x={cur.x} y={cur.y} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
