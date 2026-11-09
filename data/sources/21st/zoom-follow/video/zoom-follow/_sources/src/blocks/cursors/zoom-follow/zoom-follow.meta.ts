// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "zoom", "camera", "click", "dashboard", "export", "toast", "screen recording", "product demo"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    markers: { settled: 120, zoom: 22, click: 60, toast: 70, pullBack: 86 },
    beats: [0, 22, 60, 86],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 16, lines: 1, role: "headline" },
    { key: "buttonLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "nav", type: "list", maxChars: 12, lines: 1, role: "label" },
    { key: "rows", type: "list", maxChars: 14, lines: 1, role: "label" },
    { key: "amounts", type: "list", maxChars: 10, lines: 1, role: "number" },
    { key: "statuses", type: "list", maxChars: 8, lines: 1, role: "label" },
    { key: "toast", type: "text", maxChars: 24, lines: 1, role: "label" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    secondary: "colors.secondary",
    surfaceColor: "colors.background",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "cursor", prop: "path", from: "bottom", settledBy: 44, easing: "ease" },
    { target: "camera", prop: "scale", from: "1", settledBy: 54, easing: "ease" },
    { target: "button", prop: "icon", from: "download", settledBy: 80, easing: "spring" },
    { target: "toast", prop: "y", settledBy: 100, easing: "spring" },
    { target: "camera", prop: "scale", from: "2", settledBy: 116, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (camera zooms in on a dashboard click and pulls back, 2026-10-07)" },
});
