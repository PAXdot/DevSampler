// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "multiplayer", "comment", "cursor chat", "collaboration", "teammates", "pin", "typing", "landing page", "feedback"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 195, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    markers: { settled: 150, comment: 92, reply: 128 },
    beats: [0, 36, 92, 128],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 36, lines: 3, role: "headline" },
    { key: "subline", type: "text", maxChars: 56, lines: 3, role: "subline" },
    { key: "ctaLabel", type: "text", maxChars: 18, lines: 1, role: "cta" },
    { key: "firstName", type: "text", maxChars: 12, lines: 1, role: "name" },
    { key: "firstMessage", type: "text", maxChars: 32, lines: 2, role: "body" },
    { key: "secondName", type: "text", maxChars: 12, lines: 1, role: "name" },
    { key: "secondReply", type: "text", maxChars: 24, lines: 2, role: "body" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "firstCursor", prop: "path", from: "right", settledBy: 36, easing: "ease" },
    { target: "firstMessage", prop: "chars", from: "0", settledBy: 72, easing: "linear" },
    { target: "pin", prop: "scale", from: "0", settledBy: 112, easing: "spring" },
    { target: "secondCursor", prop: "path", from: "right", settledBy: 128, easing: "ease" },
    { target: "secondReply", prop: "chars", from: "0", settledBy: 146, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 195] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (teammate cursor types a comment, pins it, a second cursor replies, 2026-10-07)" },
});
