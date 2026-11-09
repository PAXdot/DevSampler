// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "text selection", "highlight", "toolbar", "ask ai", "editor", "i-beam", "ai assistant", "writing"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    markers: { settled: 120, select: 32, toolbar: 62, click: 98 },
    beats: [0, 32, 62, 98],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "lead", type: "text", maxChars: 14, lines: 1, role: "body" },
    { key: "phrase", type: "text", maxChars: 22, lines: 1, role: "body" },
    { key: "rest", type: "text", maxChars: 90, lines: 4, role: "body" },
    { key: "askLabel", type: "text", maxChars: 10, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "below", settledBy: 30, easing: "ease" },
    { target: "selection", prop: "width", from: "0", settledBy: 60, easing: "ease" },
    { target: "toolbar", prop: "scale", from: "0.9", settledBy: 90, easing: "spring" },
    { target: "cursor", prop: "path", settledBy: 92, easing: "ease" },
    { target: "askLabel", prop: "fill", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (I-beam selects a phrase and clicks Ask AI in the toolbar, 2026-10-07)" },
});
