// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/logo-reveal",
  tags: ["logo", "lockup", "hexagon", "polygon", "reveal", "opener", "hype", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 84, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 76, lock: 38 },
    beats: [0, 6, 34, 38, 48],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "title", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "tagline", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", secondary: "colors.secondary", color: "colors.text", fontFamily: "fonts.heading", logo: "logos.light" },
  motionBeats: [
    { target: "outline", prop: "draw", settledBy: 34, easing: "linear" },
    { target: "mark", prop: "x", from: "sides", settledBy: 38, easing: "ease" },
    { target: "mark", prop: "scale", from: "1.15", settledBy: 46, easing: "ease" },
    { target: "title", prop: "type", settledBy: 68, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V02, research 2026-10-05)" },
});
