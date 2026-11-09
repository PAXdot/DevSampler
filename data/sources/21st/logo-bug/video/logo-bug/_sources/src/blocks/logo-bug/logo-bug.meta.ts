// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "overlay-fx",
  category: "brand/logo-bug",
  tags: ["logo", "bug", "watermark", "brand", "corner", "overlay"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 30, max: 1800 },
    stretch: "hold",
    phases: { in: 16, out: 0 },
    markers: { settled: 18 },
    beats: [0],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.03, y: 0.04, w: 0.2, h: 0.12 },
    safeArea: "action",
    transparent: true,
    preset: "corner-tl",
    backdrop: [],
  },
  slots: [
    { key: "name", type: "text", maxChars: 18, lines: 1, role: "name" },
    { key: "logo", type: "image" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", logo: "logos.light" },
  motionBeats: [{ target: "bug", prop: "opacity", settledBy: 16, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party" },
});
