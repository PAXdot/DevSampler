// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "comet", "trail", "motion trail", "feature tour", "onboarding", "cards", "fast", "click"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 126, min: 80, max: 600 },
    stretch: "hold",
    phases: { in: 102, out: 0 },
    markers: { settled: 102, tour: 20, land: 62, click: 68 },
    beats: [0, 20, 33, 46, 62, 68],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 32, lines: 2, role: "headline" },
    { key: "titles", type: "list", maxChars: 16, lines: 1, role: "label" },
    { key: "captions", type: "list", maxChars: 30, lines: 2, role: "body" },
    { key: "buttonLabel", type: "text", maxChars: 12, lines: 1, role: "cta" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cards", prop: "rise", settledBy: 22, easing: "ease" },
    { target: "cursor", prop: "path", from: "left", settledBy: 86, easing: "ease" },
    { target: "trail", prop: "length", settledBy: 96, easing: "linear" },
    { target: "icons", prop: "fill", settledBy: 68, easing: "ease" },
    { target: "button", prop: "fill", settledBy: 80, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 126] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (comet cursor streaks across a feature tour and lands on Try it, 2026-10-07)" },
});
