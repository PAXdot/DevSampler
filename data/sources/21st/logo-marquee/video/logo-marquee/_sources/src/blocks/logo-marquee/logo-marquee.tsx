// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef, useState } from "react";
import { AbsoluteFill, Img, cancelRender, continueRender, delayRender, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./logo-marquee.meta";
import type { schema } from "./logo-marquee.schema";
import { waitForBrandFonts } from "../../kit/brand-fonts";

type Mark = "dot" | "square" | "ring" | "none";
type RowMeasure = { width: number; cells: { x: number; width: number }[] };
/** A rotating set of wordmark treatments so a list of names reads as a wall of distinct logos. */
const STYLES: { css: (font: string, serif: string, mono: string) => React.CSSProperties; mark: Mark }[] = [
  { css: (f) => ({ fontFamily: f, fontWeight: 700, letterSpacing: "-0.05em" }), mark: "square" },
  { css: (_f, serif) => ({ fontFamily: serif, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em", fontSize: "1.22em" }), mark: "none" },
  { css: (_f, _serif, mono) => ({ fontFamily: mono, fontWeight: 500, letterSpacing: "-0.04em", fontSize: "0.88em" }), mark: "ring" },
  { css: (f) => ({ fontFamily: f, fontWeight: 500, letterSpacing: "0.04em" }), mark: "none" },
  { css: (f) => ({ fontFamily: f, fontWeight: 600, letterSpacing: "-0.03em" }), mark: "dot" },
];

export const Component: React.FC<z.infer<typeof schema>> = ({ label, names, logos, color, fontFamily, serifFontFamily, monoFontFamily, loopSeconds }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h, portrait, aspect } = useLayout();
  const square = aspect === "1:1";
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const serif = brandFontStack(serifFontFamily ?? "Instrument Serif"), mono = brandFontStack(monoFontFamily ?? "Geist Mono");

  const stacked = portrait || square;
  const rowH = stacked ? Math.max(h * 0.06, w * 0.11) : Math.max(Math.min(h * 0.16, w * 0.04), h * 0.09);
  const gap = rowH * (stacked ? 0.8 : 2.2);
  const labelSize = stacked ? Math.max(h * 0.03125, w * 0.056) : fitFontSize({ chars: label.length, boxW: w * 0.8, boxH: rowH * 0.6, charEm: 0.52, max: rowH * 0.44 });
  const shift = ((frame / fps / loopSeconds) % 1) * 50;
  const ink = withAlpha(color, 0.72);
  const items = logos.length ? logos : names;
  const lIn = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const rowRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [measurements, setMeasurements] = useState<Record<number, RowMeasure>>({});
  const [measurementHandle] = useState(() => delayRender("Measure whole marquee wordmarks"));
  const measurementKey = JSON.stringify([items, logos.length > 0, font, serif, mono, rowH, stacked]);
  useLayoutEffect(() => {
    let active = true;
    waitForBrandFonts().then(() => document.fonts.ready).then(async () => {
      const rows = Object.values(rowRefs.current).filter((row): row is HTMLDivElement => Boolean(row));
      await Promise.all(rows.flatMap(row => Array.from(row.querySelectorAll("img")).map(img => img.decode())));
      if (!active) return;
      setMeasurements(Object.fromEntries(Object.entries(rowRefs.current).filter(([, row]) => Boolean(row)).map(([index, row]) => {
        const rect = row!.getBoundingClientRect();
        const snapped = (value: number) => Math.round(value * 64) / 64;
        return [index, { width: snapped(rect.width), cells: Array.from(row!.children).map(cell => {
          const c = cell.getBoundingClientRect();
          return { x: snapped(c.left - rect.left), width: Math.max(0, snapped(c.width - gap)) };
        }) }];
      })));
    }).catch(cancelRender);
    return () => { active = false; };
  }, [measurementKey, gap]);
  useLayoutEffect(() => { if (Object.keys(measurements).length) continueRender(measurementHandle); }, [measurements, measurementHandle]);

  // Fade the complete visible mark before its glyphs would cross the viewport.
  // Geometry is measured once after real fonts/images load; motion stays frame-pure.
  const cellOpacity = (track: number, index: number) => {
    const row = measurements[track], cell = row?.cells[index];
    if (!row || !cell) return 0;
    const amount = stacked && track === 1 ? 50 - shift : shift;
    const x = cell.x - amount * row.width / 100;
    const room = Math.min(x, w - x - cell.width);
    return Math.max(0, Math.min(1, (room - rowH * 0.12) / (rowH * 0.45)));
  };

  const item = (x: string, i: number, copy: number, track = 0, position = i) => {
    const opacity = cellOpacity(track, position + (copy % 2) * items.length);
    if (logos.length) {
      return (
        <div key={`${copy}-${i}`} style={{ paddingRight: gap, display: "flex", alignItems: "center", flex: "0 0 auto", opacity }}>
          <Img src={x} style={{ height: rowH * 0.8, objectFit: "contain", opacity: 0.8 }} />
        </div>
      );
    }
    const st = STYLES[i % STYLES.length]!;
    const m = rowH * 0.42;
    return (
      <div key={`${copy}-${i}`} style={{ paddingRight: gap, display: "flex", alignItems: "center", gap: rowH * 0.24, flex: "0 0 auto", color: ink, opacity }}>
        {st.mark === "square" ? <span style={{ width: m, height: m, borderRadius: m * 0.22, background: ink }} /> : null}
        {st.mark === "dot" ? <span style={{ width: m * 0.8, height: m * 0.8, borderRadius: 999, background: ink }} /> : null}
        {st.mark === "ring" ? <span style={{ width: m, height: m, borderRadius: 999, border: `${m * 0.2}px solid ${ink}` }} /> : null}
        <span style={{ fontSize: rowH * 0.62, lineHeight: 1, display: "flex" }}>
          <span data-21st-slot={copy === 0 ? "names" : undefined} style={{ ...st.css(font, serif, mono), whiteSpace: "nowrap", lineHeight: 1 }}>
            {x}
          </span>
        </span>
      </div>
    );
  };

  if (stacked) return <AbsoluteFill style={{ opacity: leave }}>
    {label && <div data-21st-slot="label" style={{ position: "absolute", left: w * 0.08, top: h * 0.1, width: w * 0.84, fontFamily: font, fontWeight: 500, fontSize: labelSize, lineHeight: 1.25, overflowWrap: "anywhere", color: withAlpha(color, 0.65), opacity: band(frame, 0, 12), transform: `translateY(${(1 - lIn) * labelSize * 0.6}px)` }}>{label}</div>}
    {[0, 1, 2].map(track => <div key={track} style={{ position: "absolute", left: 0, top: h * (0.32 + track * 0.22), width: w, height: rowH * 1.4, overflow: "hidden", opacity: band(frame, 4 + track * 3, 18 + track * 3) }}>
      <div ref={el => { rowRefs.current[track] = el; }} style={{ display: "flex", width: "max-content", height: "100%", alignItems: "center", transform: `translateX(-${track === 1 ? 50 - shift : shift}%)` }}>{[0, 1].map(copy => items.map((x, i) => item(x, (i + track * 2) % items.length, copy + track * 2, track, i)))}</div>
    </div>)}
  </AbsoluteFill>;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: rowH * 0.7, opacity: leave }}>
      {label ? (
        <div
          data-21st-slot="label"
          style={{
            fontFamily: font,
            fontWeight: 500,
            fontSize: labelSize,
            color: withAlpha(color, 0.5),
            whiteSpace: "nowrap",
            opacity: band(frame, 0, 12),
            transform: `translateY(${(1 - lIn) * labelSize * 0.6}px)`,
          }}
        >
          {label}
        </div>
      ) : null}
      <div
        style={{
          width: "100%",
          height: rowH * 1.4,
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)",
          opacity: band(frame, 4, 18),
        }}
      >
        <div ref={el => { rowRefs.current[0] = el; }} style={{ display: "flex", width: "max-content", height: "100%", alignItems: "center", transform: `translateX(-${shift}%)` }}>
          {[0, 1].map((copy) => items.map((x, i) => item(x, i, copy)))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
