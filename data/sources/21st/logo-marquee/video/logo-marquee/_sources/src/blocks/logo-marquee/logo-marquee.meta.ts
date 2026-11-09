// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/logos",
  tags: ["logos", "marquee", "social proof", "customers", "trusted by"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 20, out: 0 },
    markers: { settled: 24 },
    beats: [0, 8],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0.5, w: 1, h: 0.5 },
    safeArea: "action",
    transparent: true,
    preset: "lower-third",
    backdrop: [],
  },
  slots: [
    { key: "label", type: "text", maxChars: 40, lines: 1, role: "kicker" },
    { key: "names", type: "list", maxChars: 16 },
    { key: "logos", type: "list" },
  ],
  brand: { color: "colors.text", fontFamily: "fonts.heading", serifFontFamily: "fonts.serif", monoFontFamily: "fonts.mono" },
  motionBeats: [{ target: "row", prop: "x", easing: "linear" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "factor-marketplace/remotion/components/market-logos.tsx" },
});
