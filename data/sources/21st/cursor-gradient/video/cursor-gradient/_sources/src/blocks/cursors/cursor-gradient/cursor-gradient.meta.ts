// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "gradient", "pricing", "plans", "click", "brand", "glow"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 110, min: 66, max: 600 },
    stretch: "hold",
    phases: { in: 88, out: 0 },
    markers: { settled: 88, hover: 44, click: 55 },
    beats: [0, 26, 55],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "plans", type: "list", maxChars: 20, lines: 1, role: "body" },
    { key: "period", type: "text", maxChars: 5, lines: 1, role: "label" },
    { key: "badge", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "cta", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "plans", prop: "y", from: "below", settledBy: 22, easing: "ease" },
    { target: "cursor", prop: "path", from: "bottom-left", settledBy: 76, easing: "ease" },
    { target: "featured button", prop: "scale", settledBy: 62, easing: "ease" },
    { target: "cursor", prop: "bloom", settledBy: 80, easing: "ease" },
    { target: "featured ring", prop: "opacity", settledBy: 70, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (gradient brand cursor picks the featured pricing plan, 2026-10-07)" },
});
