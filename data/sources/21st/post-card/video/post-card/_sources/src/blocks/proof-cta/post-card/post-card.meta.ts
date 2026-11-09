// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "testimonial/post",
  tags: ["testimonial", "social proof", "post", "tweet", "review", "likes", "customer quote"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 108, out: 0 },
    markers: { settled: 108, liked: 80 },
    beats: [0, 14, 64, 80],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "name", type: "text", maxChars: 32, lines: 1, role: "name" },
    { key: "handle", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "time", type: "text", maxChars: 10, lines: 1, role: "label" },
    { key: "post", type: "text", maxChars: 220, lines: 6, role: "quote" },
    { key: "avatar", type: "image", role: "avatar" },
    { key: "replies", type: "number", role: "value" },
    { key: "reposts", type: "number", role: "value" },
    { key: "likes", type: "number", role: "value" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body" },
  motionBeats: [
    { target: "card", prop: "y", from: "below", settledBy: 14, easing: "spring" },
    { target: "post", prop: "words", settledBy: 62, easing: "linear" },
    { target: "post", prop: "highlight", settledBy: 76, easing: "ease" },
    { target: "likes", prop: "value", from: "0", settledBy: 108, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (social post testimonial, 2026-10-06)" },
});
