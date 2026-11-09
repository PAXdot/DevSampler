// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "pointer", "hover", "i-beam", "crosshair", "link", "button", "canvas", "states", "interaction"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 96, max: 600 },
    stretch: "hold",
    phases: { in: 144, out: 0 },
    markers: { settled: 144, link: 20, text: 54, button: 90, canvas: 124 },
    beats: [0, 20, 54, 90, 124],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "linkLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "paragraph", type: "text", maxChars: 64, lines: 3, role: "body" },
    { key: "buttonLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "cursorNames", type: "list", role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", monoFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "left", settledBy: 141, easing: "ease" },
    { target: "cursor", prop: "shape", from: "arrow", settledBy: 128, easing: "linear" },
    { target: "link", prop: "underline", settledBy: 32, easing: "ease" },
    { target: "button", prop: "fill", settledBy: 100, easing: "ease" },
    { target: "canvas", prop: "frame", settledBy: 143, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (one cursor turns into a hand, I-beam and crosshair as it crosses a page, 2026-10-07)" },
});
