// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "neon", "glow", "prompt", "ai", "generate", "dark"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 115, min: 70, max: 600 },
    stretch: "hold",
    phases: { in: 92, out: 0 },
    markers: { settled: 92, typed: 34, hover: 47, click: 56 },
    beats: [0, 34, 56],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 28, lines: 1, role: "headline" },
    { key: "prompt", type: "text", maxChars: 56, lines: 3, role: "prompt" },
    { key: "options", type: "list", maxChars: 5, lines: 1, role: "label" },
    { key: "label", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", monoFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "bar edges", prop: "flicker", settledBy: 12, easing: "linear" },
    { target: "prompt", prop: "typing", settledBy: 34, easing: "linear" },
    { target: "cursor", prop: "path", from: "bottom-right", settledBy: 80, easing: "ease" },
    { target: "cursor", prop: "flash", settledBy: 72, easing: "ease" },
    { target: "bar edges", prop: "sweep", settledBy: 88, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 115] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (neon tube cursor clicks Generate on a glowing prompt bar, 2026-10-07)" },
});
