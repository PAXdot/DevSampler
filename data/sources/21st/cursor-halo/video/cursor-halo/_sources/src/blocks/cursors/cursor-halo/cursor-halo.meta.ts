// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "halo", "glow", "spotlight cursor", "dashboard", "analytics", "kpi", "guide the eye", "click"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 110, min: 70, max: 600 },
    stretch: "hold",
    phases: { in: 86, out: 0 },
    markers: { settled: 86, scan: 26, hover: 48, click: 54 },
    beats: [0, 26, 48, 54],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 22, lines: 1, role: "headline" },
    { key: "range", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "metrics", type: "list", maxChars: 12, lines: 1, role: "label" },
    { key: "values", type: "list", maxChars: 8, lines: 1, role: "value" },
    { key: "deltas", type: "list", maxChars: 6, lines: 1, role: "label" },
    { key: "detailsLabel", type: "text", maxChars: 10, lines: 1, role: "cta" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "tiles", prop: "rise", settledBy: 18, easing: "ease" },
    { target: "values", prop: "count", settledBy: 32, easing: "ease" },
    { target: "cursor", prop: "path", from: "bottom", settledBy: 72, easing: "ease" },
    { target: "halo", prop: "scale", settledBy: 80, easing: "ease" },
    { target: "tiles", prop: "focus", settledBy: 72, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (halo cursor guides the eye across a KPI dashboard and opens one tile, 2026-10-07)" },
});
