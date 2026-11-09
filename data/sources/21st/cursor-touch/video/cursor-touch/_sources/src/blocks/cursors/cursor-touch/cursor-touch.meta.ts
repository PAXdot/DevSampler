// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "touch", "hand", "tap", "mobile", "phone", "app demo", "onboarding", "ripple"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80, tap: 27, secondTap: 42, cta: 58 },
    beats: [0, 27, 42, 58],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 28, lines: 2, role: "headline" },
    { key: "subtitle", type: "text", maxChars: 32, lines: 1, role: "subline" },
    { key: "options", type: "list", maxChars: 14, lines: 1, role: "label" },
    { key: "cta", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "phone", prop: "y", from: "below", settledBy: 22, easing: "spring" },
    { target: "hand", prop: "path", from: "bottom-right", settledBy: 74, easing: "ease" },
    { target: "options", prop: "selected", settledBy: 50, easing: "spring" },
    { target: "cta", prop: "fill", settledBy: 70, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (touch hand tapping through a phone onboarding screen, 2026-10-07)" },
});
