// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/cursor",
  tags: ["cursor", "cta", "button", "click", "press", "ripple", "signup", "hover"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 54, max: 600 },
    stretch: "hold",
    phases: { in: 46, out: 0 },
    markers: { settled: 52, click: 32 },
    beats: [0, 32],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "label", type: "text", maxChars: 26, lines: 1, role: "cta" },
    { key: "doneLabel", type: "text", maxChars: 26, lines: 1, role: "subline" },
  ],
  brand: { accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 28, easing: "ease" },
    { target: "button", prop: "scale", from: "0.96 press", settledBy: 38, easing: "ease" },
    { target: "label", prop: "swap", settledBy: 44, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V02 CTA click ripple, V12 send click)" },
});
