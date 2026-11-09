// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/chat",
  tags: ["chat", "messages", "ai", "agent", "tool call", "conversation", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 90, max: 900 },
    stretch: "hold",
    phases: { in: 106, out: 0 },
    markers: { settled: 112 },
    beats: [10, 30, 50, 66, 70, 90],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 36, lines: 1, role: "headline" },
    { key: "messages", type: "list", role: "body" },
    { key: "toolLabel", type: "text", maxChars: 40, lines: 1, role: "label" },
    { key: "runningLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "placeholder", type: "text", maxChars: 36, lines: 1, role: "label" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", successColor: "colors.secondary", errorColor: "colors.primary", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "bubble", prop: "scale", from: "0.9", settledBy: 16, easing: "ease" },
    { target: "column", prop: "y", from: "below", easing: "ease" },
    { target: "status", prop: "label", easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V04 chat + tool card, V15 chat column)" },
});
