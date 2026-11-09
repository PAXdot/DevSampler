// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/logo-reveal",
  tags: ["logo", "stroke", "line art", "draw on", "gradient", "reveal", "calm", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 84, max: 600 },
    stretch: "hold",
    phases: { in: 74, out: 0 },
    markers: { settled: 74, drawn: 66 },
    beats: [4, 14, 66],
  },
  layout: {
    aspects: ["1:1", "16:9", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "name", type: "text", maxChars: 24, lines: 1, role: "name" }],
  brand: { c1: "colors.primary", c3: "colors.secondary", color: "colors.text", fontFamily: "fonts.heading", c2: "colors.secondary" },
  motionBeats: [
    { target: "accentPath", prop: "draw", settledBy: 13, easing: "ease" },
    { target: "path", prop: "draw", settledBy: 66, easing: "ease" },
    { target: "name", prop: "color", from: "grey", settledBy: 74, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V17 and V13, research 2026-10-05)" },
});
