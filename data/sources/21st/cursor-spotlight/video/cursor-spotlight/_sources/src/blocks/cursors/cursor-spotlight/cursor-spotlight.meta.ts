// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "spotlight", "torch", "flashlight", "reveal", "glow", "landing page", "hover", "dark mode"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 160, min: 80, max: 600 },
    stretch: "hold",
    phases: { in: 128, out: 0 },
    markers: { settled: 128, sweep: 22, cards: 58, reveal: 98 },
    beats: [0, 22, 58, 98],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 44, lines: 2, role: "headline" },
    { key: "cards", type: "list", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "bottom-right", settledBy: 100, easing: "ease" },
    { target: "spotlight", prop: "radius", settledBy: 124, easing: "ease" },
    { target: "card", prop: "lift", settledBy: 100, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 160] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (cursor torch sweeps a dark page, then the light opens, 2026-10-07)" },
});
