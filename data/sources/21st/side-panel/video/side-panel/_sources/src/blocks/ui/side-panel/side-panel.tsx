// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Ripple, pathAt, press } from "../shared/cursor";
import { Icon, type IconName } from "../shared/icons";
import { SampleScreen } from "../shared/sample-ui";
import { Media, palette, tint } from "../shared/theme";
import { WindowFrame, barHeight } from "../shared/window";
import { meta } from "./side-panel.meta";
import type { schema } from "./side-panel.schema";

const CLICK = meta.timing.markers.click ?? 52;
const ROW_ICONS: IconName[] = ["users", "layout-grid", "file-text", "mail", "calendar"];

export const Component: React.FC<z.infer<typeof schema>> = ({ image, panelTitle, items, cta, doneLabel, toast, theme, accent, fontFamily, doneColor, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const ratio = aspect === "16:9" ? 1.6 : aspect === "9:16" ? 0.78 : 1.25;
  let pageW = Math.min(w * 0.94, h * 0.92 * ratio);
  let pageH = portraitLayout ? h * 0.76 : pageW / ratio;
  if (pageH > h * 0.92) {
    pageH = h * 0.92;
    pageW = pageH * ratio;
  }
  const px = (w - pageW) / 2;
  const py = (h - pageH) / 2;
  const bar = barHeight("browser", pageW, pageH);
  const m = Math.min(pageW, pageH) * 0.03;
  const panelW = pageW * (aspect === "16:9" ? 0.38 : aspect === "9:16" ? 0.93 : 0.52);
  const panelH = pageH - bar - m * 2;
  const panelX = px + pageW - m - panelW;
  const panelY = py + bar + m;
  const pad = portraitLayout ? u * 3 : panelW * 0.07;
  const rowH = portraitLayout ? nativeFont * 2.55 : Math.max(nativeFont * 2.1, Math.min(panelH * 0.13, u * 9));
  const ctaH = Math.max(nativeFont * 2.5, rowH * 0.95);
  const fs = Math.max(nativeFont, fitFontSize({ chars: Math.max(...items.map((s) => s.length)) + 2, boxW: panelW - pad * 2 - rowH * 2.2, boxH: rowH * 0.4, charEm: 0.54, max: rowH * 0.3 }));
  const tFs = Math.max(nativeFont, fitFontSize({ chars: panelTitle.length + 4, boxW: panelW - pad * 2 - rowH * 1.2, boxH: rowH * 0.45, charEm: 0.55, max: rowH * 0.34 }));
  const cFs = Math.max(nativeFont, fitFontSize({ chars: Math.max(cta.length, doneLabel.length) + 4, boxW: panelW - pad * 2, boxH: ctaH * 0.42, charEm: 0.55, max: ctaH * 0.33 }));

  const pIn = expoOut(frame / 12);
  const slide = expoOut((frame - 14) / 12);
  const leave = 1 - exit;

  const ctaY = panelY + panelH - pad - ctaH;
  const target = { x: panelX + panelW * 0.6, y: ctaY + ctaH * 0.58 };
  const keys = [
    { f: CLICK - 22, x: w * 1.03, y: h * 1.06 },
    { f: CLICK - 3, x: target.x, y: target.y },
    { f: CLICK + 30, x: target.x - u * 6, y: target.y + u * 3 },
  ];
  const cur = pathAt(frame, keys, 0.16);
  const dip = press(frame, CLICK);
  const spin = frame >= CLICK && frame < CLICK + 12;
  const done = ramp(frame, [CLICK + 12, CLICK + 16], [0, 1]);
  const toastIn = expoOut((frame - CLICK - 16) / 6);
  const wideToast = aspect === "16:9";
  const tsFs = Math.max(nativeFont, fitFontSize({ chars: toast.length + 4, boxW: (wideToast ? pageW - panelW : panelW) * 0.8, boxH: rowH * 0.5, charEm: 0.55, max: rowH * 0.32 }));

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `scale(${1 - 0.04 * exit})` }}>
      <div style={{ position: "absolute", left: px, top: py, opacity: band(frame, 0, 6), transform: `translateY(${(1 - pIn) * u * 3}px) scale(${0.96 + 0.04 * pIn})` }}>
        <WindowFrame w={pageW} h={pageH} chrome="browser" title="" titleSlot="page" p={p} font={font} radius={u * 1.8}>
          {({ w: cw, h: ch }) => (
            <>
              {image ? <Media src={image} /> : <SampleScreen kind="dashboard" w={cw} h={ch} p={p} accent={accent} frame={frame} seed="side" />}
              <div style={{ position: "absolute", inset: 0, background: withAlpha(p.dark ? p.surface : p.ink, 0.18 * slide) }} />
            </>
          )}
        </WindowFrame>
      </div>
      <div
        style={{
          position: "absolute",
          left: panelX,
          top: panelY,
          width: panelW,
          height: panelH,
          borderRadius: u * 1.6,
          background: p.surface,
          boxShadow: p.shadow(u),
          padding: pad,
          display: "flex",
          flexDirection: "column",
          gap: portraitLayout ? nativeFont * 0.3 : rowH * 0.18,
          opacity: band(frame, 14, 18),
          transform: `translateX(${(1 - slide) * (panelW + m * 2)}px)`,
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: tFs * 0.5, height: portraitLayout ? nativeFont * 2.5 : rowH * 0.8, flexShrink: 0, marginBottom: rowH * 0.1 }}>
          <Icon name="zap" size={tFs * 1.1} color={accent} />
          <span data-21st-slot="panelTitle" style={{ fontFamily: font, fontSize: tFs, fontWeight: 600, letterSpacing: "-0.015em", color: p.ink, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
            {panelTitle}
          </span>
          <div style={{ flex: 1 }} />
          <Icon name="x" size={tFs * 0.95} color={p.faint} />
        </div>
        {items.map((it, i) => {
          const t = 22 + i * 3;
          const on = i < items.length - 1 || done > 0.5;
          const knob = i < items.length - 1 ? 1 : done;
          return (
            <div
              key={i}
              style={{
                height: portraitLayout ? undefined : rowH,
                minHeight: rowH,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: fs * 0.7,
                padding: `${portraitLayout ? nativeFont * 0.25 : 0}px ${rowH * 0.22}px`,
                borderRadius: rowH * 0.24,
                background: p.raised,
                opacity: band(frame, t, t + 5),
                transform: `translateX(${(1 - expoOut((frame - t) / 6)) * rowH * 0.4}px)`,
              }}
            >
              <div style={{ flexShrink: 0, width: rowH * 0.56, height: rowH * 0.56, borderRadius: rowH * 0.16, background: p.surface, display: "grid", placeItems: "center", boxShadow: `0 0 0 1px ${p.line}` }}>
                <Icon name={ROW_ICONS[i % ROW_ICONS.length]!} size={rowH * 0.3} color={p.muted} />
              </div>
              <span data-21st-slot="items" style={{ fontFamily: font, fontSize: fs, fontWeight: 500, color: p.ink, lineHeight: 1.25, minWidth: 0, flex: 1, whiteSpace: aspect !== "16:9" ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {it}
              </span>
              <div style={{ width: rowH * 0.62, height: rowH * 0.36, borderRadius: 99, background: on ? accent : p.bone, position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: rowH * 0.04, left: rowH * 0.04 + knob * rowH * 0.26, width: rowH * 0.28, height: rowH * 0.28, borderRadius: "50%", background: inkOn(on ? accent : p.bone), boxShadow: `0 1px 2px ${withAlpha(accent, 0.25)}` }} />
              </div>
            </div>
          );
        })}
        <div style={{ flex: 1 }} />
        <div
          style={{
            height: ctaH,
            flexShrink: 0,
            borderRadius: ctaH * 0.28,
            background: done > 0 ? `linear-gradient(0deg, ${withAlpha(doneColor, done)}, ${withAlpha(doneColor, done)}), ${accent}` : accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: cFs * 0.5,
            opacity: band(frame, 30, 36),
            transform: `scale(${1 - 0.04 * dip})`,
            boxShadow: `0 ${u * 0.6}px ${u * 2}px -${u * 0.5}px ${withAlpha(accent, 0.5)}`,
          }}
        >
          {spin ? (
            <div style={{ transform: `rotate(${(frame - CLICK) * 24}deg)` }}>
              <Icon name="loader-circle" size={cFs * 1.1} color={inkOn(accent)} strokeWidth={2.4} />
            </div>
          ) : (
            <Icon name={done > 0.5 ? "check" : "rotate-cw"} size={cFs * 1.05} color={inkOn(accent)} strokeWidth={2.4} />
          )}
          <span data-21st-slot={done > 0.5 ? "doneLabel" : "cta"} style={{ fontFamily: font, fontSize: cFs, fontWeight: 600, color: inkOn(accent), lineHeight: 1.25, maxWidth: panelW * 0.75, textAlign: "center", whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
            {done > 0.5 ? doneLabel : cta}
          </span>
        </div>
      </div>
      {toast && frame >= CLICK + 16 ? (
        <div
          style={{
            position: "absolute",
            left: wideToast ? px : panelX,
            width: wideToast ? pageW - panelW - m * 2 : panelW,
            top: portraitLayout ? h * 0.86 : wideToast ? py + bar + m * 2 : panelY + pad + rowH * (1.1 + items.length * 1.18) + rowH * 0.3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: tsFs * 0.6,
              padding: `${tsFs * 0.55}px ${tsFs * 1}px`,
              borderRadius: 99,
              background: p.surface,
              boxShadow: p.shadow(u * 0.7),
              opacity: band(frame, CLICK + 16, CLICK + 22),
              transform: `translateY(${(1 - toastIn) * -u * 2}px) scale(${0.95 + 0.05 * toastIn})`,
            }}
          >
            <div style={{ position: "relative", width: tsFs * 0.6, height: tsFs * 0.6 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: doneColor }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: `2px solid ${doneColor}`,
                  transform: `scale(${1 + 1.6 * ramp(frame, [CLICK + 20, CLICK + 36], [0, 1])})`,
                  opacity: 1 - ramp(frame, [CLICK + 20, CLICK + 36], [0, 1]),
                }}
              />
            </div>
            <span data-21st-slot="toast" style={{ fontFamily: font, fontSize: tsFs, fontWeight: 500, color: p.ink, lineHeight: 1.25, maxWidth: panelW * 0.75, textAlign: "center", whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
              {toast}
            </span>
          </div>
        </div>
      ) : null}
      <Ripple x={target.x} y={target.y} t={ramp(frame, [CLICK, CLICK + 10], [0, 1])} radius={ctaH} color={accent} />
      <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={u * 4.8} kind={frame > CLICK - 6 && frame < CLICK + 16 ? "hand" : "arrow"} down={dip} opacity={band(frame, keys[0]!.f + 2, keys[0]!.f + 6)} />
    </AbsoluteFill>
  );
};
