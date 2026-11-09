// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/card",
  tags: ["screenshot", "app", "card", "window", "browser", "pop", "ui", "mockup"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 30, max: 900 },
    stretch: "hold",
    phases: { in: 14, out: 0 },
    markers: { settled: 30 },
    beats: [0],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "image", type: "image", role: "screenshot" },
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "label" },
  ],
  brand: { accent: "colors.primary", fontFamily: "fonts.heading", surfaceColor: "colors.background", textColor: "colors.text" },
  motionBeats: [{ target: "card", prop: "scale", from: "0.92", settledBy: 12, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V04 UI card enter)" },
});
