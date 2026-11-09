// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "adaptive", "ipad pointer", "tablet", "toolbar", "tool palette", "hover", "morph", "canvas"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 110, min: 70, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 76, click: 48 },
    beats: [0, 26, 48, 62],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "tools", type: "list", maxChars: 8, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "board", prop: "y", from: "below", settledBy: 24, easing: "spring" },
    { target: "cursor", prop: "path", from: "bottom", settledBy: 68, easing: "ease" },
    { target: "cursor", prop: "shape", from: "disc", settledBy: 74, easing: "ease" },
    { target: "tool", prop: "fill", settledBy: 58, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (iPad-style pointer melting into a tool palette, 2026-10-07)" },
});
