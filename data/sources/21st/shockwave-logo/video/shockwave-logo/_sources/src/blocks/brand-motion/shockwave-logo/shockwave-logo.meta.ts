// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/logo-reveal",
  tags: ["logo", "shockwave", "rings", "flash", "pop", "hype", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 72, max: 600 },
    stretch: "hold",
    phases: { in: 52, out: 0 },
    markers: { settled: 52, impact: 8 },
    beats: [0, 8, 12, 18, 24],
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
    { key: "name", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "tagline", type: "text", maxChars: 48, lines: 1, role: "subline" },
  ],
  brand: { accent: "colors.primary", secondary: "colors.secondary", color: "colors.text", fontFamily: "fonts.heading", logo: "logos.light" },
  motionBeats: [
    { target: "mark", prop: "scale", from: "1.3", settledBy: 18, easing: "ease" },
    { target: "rings", prop: "radius", settledBy: 26, easing: "ease" },
    { target: "name", prop: "y", from: "below", settledBy: 36, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V03, research 2026-10-05)" },
});
