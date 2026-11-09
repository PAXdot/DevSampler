// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "cta/install",
  tags: ["cta", "end card", "install", "command", "copy", "npm", "cli", "developer", "get started"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80, copy: 50 },
    beats: [0, 12, 50, 64],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "tabs", type: "list", role: "label" },
    { key: "command", type: "text", maxChars: 48, lines: 2, role: "code" },
    { key: "copiedLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "hint", type: "text", maxChars: 48, lines: 2, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", monoFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "command", prop: "chars", from: "0", settledBy: 36, easing: "linear" },
    { target: "cursor", prop: "path", settledBy: 50, easing: "ease" },
    { target: "copy", prop: "icon", from: "copy", settledBy: 56, easing: "spring" },
    { target: "copiedLabel", prop: "scale", from: "0.6", settledBy: 60, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (install command copied by a click, 2026-10-06)" },
});
