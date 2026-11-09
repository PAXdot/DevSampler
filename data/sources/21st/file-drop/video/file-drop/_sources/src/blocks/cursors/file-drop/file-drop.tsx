// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Glyph, Ground, clamp01, pathAt, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key } from "../shared";
import { meta } from "./file-drop.meta";
import type { schema } from "./file-drop.schema";

const SETTLE = meta.timing.markers.settled ?? 120;
const DROP = meta.timing.markers.drop ?? 50;
const UP0 = meta.timing.markers.upload ?? 60;
const DONE = meta.timing.markers.done ?? 100;
/** The cursor reaches the drop point a few frames before it lets go. */
const ARRIVE = DROP - 4;
const UP1 = DONE - 2;
/** The cursor has backed off by here. */
const REST = 86;

/** Upload progress over 0..1 of its window: a quick start, a short stall near 70%, an eased finish. */
const uploadCurve = (t: number) => (t < 0.5 ? 0.68 * easeOut(t / 0.5) : t < 0.62 ? 0.68 + 0.02 * ((t - 0.5) / 0.12) : 0.7 + 0.3 * easeInOut((t - 0.62) / 0.38));

export const Component: React.FC<z.infer<typeof schema>> = ({ zoneTitle, zoneHint, fileName, fileSize, doneLabel, color, accent, surfaceColor, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const est = (t: string, fs: number) => Array.from(t).length * fs * 0.56;

  // Drop zone: wide in landscape, a tall panel filling the frame in portrait.
  const zoneW = W * (portrait ? 0.88 : aspect === "1:1" ? 0.84 : 0.5);
  const zoneH = H * (portrait ? 0.66 : aspect === "1:1" ? 0.72 : 0.62);
  const zoneX = (W - zoneW) / 2;
  const zoneY = (H - zoneH) / 2;
  const zp = u * (portrait ? 5 : 4);
  const zr = u * (portrait ? 5 : 3.6);
  const innerW = zoneW - zp * 2;

  // Empty state: icon tile, title, hint.
  const square = aspect === "1:1";
  const titleFs = Math.max(floor, fitFontSize({ chars: Array.from(zoneTitle).length + 1, boxW: innerW, boxH: u * 20, charEm: 0.56, max: portrait ? u * 6.6 : square ? u * 4.8 : u * 4.2 }));
  const hintFs = Math.max(floor, portrait ? floor : titleFs * 0.6);
  const hintLines = zoneHint ? (est(zoneHint, hintFs) > innerW * 0.92 ? 2 : 1) : 0;
  const iconTile = u * (portrait ? 16 : square ? 11 : 9.5);
  const g1 = u * (portrait ? 4 : 2.6);
  const g2 = u * (portrait ? 1.6 : 1.2);
  const titleLines = est(zoneTitle, titleFs) > innerW ? 2 : 1;
  const emptyH = iconTile + g1 + titleLines * titleFs * 1.2 + (hintLines ? g2 + hintLines * hintFs * 1.3 : 0);

  // Upload row: tile + name + size, the bar, and the status (beside the size, or under the bar in portrait).
  const baseFs = Math.max(floor, portrait ? u * 5.6 : square ? u * 3.3 : u * 2.9);
  const metaFs = Math.max(floor, portrait ? floor : baseFs * 0.8);
  const rowPad = u * (portrait ? 3.6 : square ? 2.7 : 2.4);
  const rowW = portrait ? innerW : Math.min(innerW, zoneW * (square ? 0.88 : 0.84));
  const lineGap = u * 0.6;
  const tile = baseFs * 1.25 + lineGap + metaFs * 1.25;
  const tileGap = u * (portrait ? 2.6 : 2);
  // A long file name shrinks to the text column instead of spilling out of the row.
  const nameFs = Math.min(baseFs, fitFontSize({ chars: Array.from(fileName).length + 1, boxW: rowW - rowPad * 2 - tile - tileGap, boxH: baseFs * 1.25, charEm: 0.58, max: baseFs }));
  const barGap = u * (portrait ? 2.6 : 1.8);
  const barH = Math.max(4, u * (portrait ? 1.5 : 1));
  const statusBelow = portrait;
  const statusH = statusBelow ? u * 1.8 + metaFs * 1.25 : 0;
  const rowH = rowPad * 2 + tile + barGap + barH + statusH;
  const rowR = u * (portrait ? 3.2 : 2);
  const groupGap = u * (portrait ? 7.5 : 4.4);
  const groupH = emptyH + groupGap + rowH;
  const groupTop = zoneY + (zoneH - groupH) / 2;
  const emptyStart = zoneY + (zoneH - emptyH) / 2;
  const rowX = (W - rowW) / 2;
  const rowY = groupTop + emptyH + groupGap;

  // The carried chip shows the same head as the row, so it lands exactly on it.
  const textW = Math.max(est(fileName, nameFs) * 1.04, est(fileSize, metaFs));
  const chipW = rowPad * 2.6 + tile + tileGap + textW;
  const chipH = rowPad * 2 + tile;
  const grab = { x: chipW - rowPad * 1.1, y: chipH * 0.62 };
  const dropAt = { x: rowX + grab.x, y: rowY + grab.y };

  // Cursor: in from the bottom-left carrying the chip, rests on the slot, lets go, backs off.
  const inKeys: Key[] = [
    { f: 4, x: -W * 0.05, y: portrait ? H * 0.94 : H * 1.02 },
    { f: ARRIVE, x: dropAt.x, y: dropAt.y },
  ];
  const rest = { x: rowX + rowW * (portrait ? 0.8 : 0.86), y: rowY + rowH + (zoneY + zoneH - rowY - rowH) * 0.42 };
  const cur =
    f <= DROP + 4
      ? pathAt(f, inKeys)
      : pathAt(f, [
          { f: DROP + 4, x: dropAt.x, y: dropAt.y },
          { f: DROP + 6, x: dropAt.x, y: dropAt.y },
          { f: REST, x: rest.x, y: rest.y },
        ]);
  // The zone lights the frame the cursor crosses into it (scanned once over whole frames).
  let enter = ARRIVE;
  for (let k = 4; k <= ARRIVE; k++) {
    const p = pathAt(k, inKeys);
    if (p.x > zoneX && p.x < zoneX + zoneW && p.y > zoneY && p.y < zoneY + zoneH) {
      enter = k;
      break;
    }
  }
  const lit = expoOut(prog(f, enter, enter + 8)) * (1 - easeInOut(prog(f, DROP + 6, DROP + 22)));
  const lift = expoOut(prog(f, enter, enter + 14));
  const emptyTop = emptyStart + (groupTop - emptyStart) * lift;
  const down = clamp01((f - 4) / 3) * (1 - clamp01((f - DROP) / 3));

  // Drop: the chip settles from its lifted pose, then hands over to the row.
  const land = f < DROP ? 0 : springSnap(f, fps, DROP, { damping: 16, stiffness: 220, mass: 0.8 });
  const chipPos = f < ARRIVE ? { x: cur.x - grab.x, y: cur.y - grab.y } : { x: rowX, y: rowY };
  const rowIn = prog(f, DROP + 2, DROP + 10);
  const chipO = prog(f, 4, 10) * (1 - prog(f, DROP + 10, DROP + 13));
  const ghost = lit * expoOut(prog(f, enter + 8, enter + 18)) * (1 - rowIn);

  // Upload and done.
  const p = uploadCurve(prog(f, UP0, UP1));
  const pctO = prog(f, UP0 - 2, UP0 + 2) * (1 - prog(f, DONE, DONE + 4));
  const check = springSnap(f, fps, DONE, { damping: 14, stiffness: 240, mass: 0.6 });
  const doneO = prog(f, DONE + 1, DONE + 7);

  const zoneIn = prog(f, 0, 10);
  const zoneScale = (0.97 + 0.03 * expoOut(prog(f, 0, 14))) * (1 + 0.012 * lit);
  const sw = Math.max(2, u * (portrait ? 0.42 : 0.3));
  const dash = `${px(u * (portrait ? 2.2 : 1.6))} ${px(u * (portrait ? 1.7 : 1.25))}`;
  const iconInk = `color-mix(in srgb, ${accent} 72%, ${color})`;
  const cursorSize = Math.max(u * (portrait ? 7 : 4.6), 24);
  const text: React.CSSProperties = { fontFamily: font, whiteSpace: "nowrap", lineHeight: 1.25 };

  const head = (
    <>
      <div style={{ position: "absolute", left: rowPad, top: rowPad, width: tile, height: tile, borderRadius: tile * 0.26, background: withAlpha(accent, s.dark ? 0.18 : 0.13), display: "grid", placeItems: "center" }}>
        <Glyph name="file-archive" size={tile * 0.54} color={iconInk} strokeWidth={1.9} />
      </div>
      <div style={{ position: "absolute", left: rowPad + tile + tileGap, top: rowPad, height: baseFs * 1.25, display: "flex", alignItems: "center" }}>
        <span data-21st-slot="fileName" style={{ ...text, fontSize: nameFs, fontWeight: 600, color: s.ink, letterSpacing: "-0.01em" }}>
          {fileName}
        </span>
      </div>
      <div style={{ position: "absolute", left: rowPad + tile + tileGap, top: rowPad + baseFs * 1.25 + lineGap, height: metaFs * 1.25, display: "flex", alignItems: "center" }}>
        <span data-21st-slot="fileSize" style={{ ...text, fontSize: metaFs, fontWeight: 500, color: s.muted, fontVariantNumeric: "tabular-nums" }}>
          {fileSize}
        </span>
      </div>
    </>
  );

  const statusTop = statusBelow ? rowPad + tile + barGap + barH + u * 1.8 : rowPad + baseFs * 1.25 + lineGap;
  const checkSize = metaFs * 1.05;

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.55 + 0.45 * lit} />
      <div style={{ position: "absolute", left: zoneX, top: zoneY, width: zoneW, height: zoneH, opacity: zoneIn, transform: `scale(${px(zoneScale * 1000) / 1000})` }}>
        <svg width={zoneW} height={zoneH} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <rect x={sw / 2} y={sw / 2} width={zoneW - sw} height={zoneH - sw} rx={zr} fill={withAlpha(color, s.dark ? 0.035 : 0.03)} stroke={withAlpha(color, s.dark ? 0.26 : 0.3)} strokeWidth={sw} strokeDasharray={dash} strokeLinecap="round" />
          {lit > 0 ? <rect x={sw / 2} y={sw / 2} width={zoneW - sw} height={zoneH - sw} rx={zr} fill={withAlpha(accent, 0.1 * lit)} stroke={withAlpha(accent, lit)} strokeWidth={sw} strokeDasharray={dash} strokeLinecap="round" /> : null}
        </svg>
      </div>
      {ghost > 0 ? <div style={{ position: "absolute", left: rowX, top: rowY, width: rowW, height: rowH, borderRadius: rowR, background: withAlpha(accent, 0.12 * ghost), boxShadow: `inset 0 0 0 ${px(Math.max(1, u * 0.16))}px ${withAlpha(accent, 0.4 * ghost)}` }} /> : null}
      <div style={{ position: "absolute", left: zoneX + zp, width: innerW, top: px(emptyTop), height: emptyH, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", opacity: zoneIn }}>
        <div
          style={{
            width: iconTile,
            height: iconTile,
            flexShrink: 0,
            borderRadius: iconTile * 0.28,
            background: `color-mix(in srgb, ${accent} ${Math.round(lit * 100)}%, ${s.raised})`,
            boxShadow: `0 0 0 1px ${s.line}`,
            display: "grid",
            placeItems: "center",
            transform: `translateY(${px(-lit * u * 0.8)}px)`,
          }}
        >
          <Glyph name="cloud-upload" size={iconTile * 0.5} color={lit > 0.5 ? inkOn(accent) : s.ink} strokeWidth={1.8} />
        </div>
        <div style={{ height: g1, flexShrink: 0 }} />
        <span data-21st-slot="zoneTitle" style={{ ...text, whiteSpace: titleLines > 1 ? "normal" : "nowrap", textAlign: "center", maxWidth: innerW, textWrap: "balance", lineHeight: 1.2, fontSize: titleFs, fontWeight: 600, color: s.ink, letterSpacing: "-0.02em" }}>
          {zoneTitle}
        </span>
        {zoneHint ? (
          <>
            <div style={{ height: g2, flexShrink: 0 }} />
            <span data-21st-slot="zoneHint" style={{ ...text, whiteSpace: hintLines > 1 ? "normal" : "nowrap", textAlign: "center", lineHeight: 1.3, maxWidth: innerW, fontSize: hintFs, fontWeight: 400, color: s.muted, textWrap: "balance" }}>
              {zoneHint}
            </span>
          </>
        ) : null}
      </div>
      {rowIn > 0 ? (
        <div style={{ position: "absolute", left: rowX, top: rowY, width: rowW, height: rowH, borderRadius: rowR, background: s.card, boxShadow: s.shadow(u), opacity: rowIn }}>
          {head}
          <div style={{ position: "absolute", left: rowPad, right: rowPad, top: rowPad + tile + barGap, height: barH, borderRadius: barH / 2, background: withAlpha(color, s.dark ? 0.12 : 0.09), overflow: "hidden" }}>
            <div style={{ width: `${px(p * 100)}%`, height: "100%", borderRadius: barH / 2, background: accent }} />
          </div>
          <div data-21st-slot="doneLabel" style={{ position: "absolute", right: rowPad, top: statusTop, height: metaFs * 1.25 }}>
            {pctO > 0 ? (
              <span style={{ ...text, position: "absolute", right: 0, top: 0, lineHeight: `${px(metaFs * 1.25)}px`, fontSize: metaFs, fontWeight: 500, color: s.muted, fontVariantNumeric: "tabular-nums", opacity: pctO }}>
                {`${Math.round(p * 100)}%`}
              </span>
            ) : null}
            {f >= DONE ? (
              <div style={{ position: "absolute", right: 0, top: 0, height: metaFs * 1.25, display: "flex", alignItems: "center", gap: metaFs * 0.36 }}>
                <div style={{ width: checkSize, height: checkSize, borderRadius: "50%", background: accent, display: "grid", placeItems: "center", transform: `scale(${px(check * 1000) / 1000})`, flexShrink: 0 }}>
                  <Glyph name="check" size={checkSize * 0.62} color={inkOn(accent)} strokeWidth={3} />
                </div>
                <span style={{ ...text, fontSize: metaFs, fontWeight: 600, color: s.ink, opacity: doneO, transform: `translateX(${px((1 - expoOut(doneO)) * u * 1.2)}px)` }}>{doneLabel}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {chipO > 0 ? (
        <div
          style={{
            position: "absolute",
            left: px(chipPos.x),
            top: px(chipPos.y),
            width: chipW,
            height: chipH,
            borderRadius: rowR,
            background: s.card,
            boxShadow: `0 ${px(u * 3 * (1 - land))}px ${px(u * 8 * (1 - land))}px ${withAlpha(s.deep, (s.dark ? 0.6 : 0.22) * (1 - land))}, ${s.shadow(u)}`,
            opacity: chipO,
            transformOrigin: `${px(grab.x)}px ${px(grab.y)}px`,
            transform: `rotate(${px(-4 * (1 - land))}deg) scale(${px((1 + 0.05 * (1 - land)) * 1000) / 1000})`,
          }}
        >
          {head}
        </div>
      ) : null}
      {f >= 4 ? <Cursor x={px(cur.x)} y={px(cur.y)} size={cursorSize} down={down} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} /> : null}
    </AbsoluteFill>
  );
};
