// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/cursor",
  tags: ["cursor", "click", "button", "cta", "ui", "interaction"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 56, out: 0 },
    markers: { settled: 60, click: 38 },
    beats: [0, 38, 44],
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
    { key: "label", type: "text", maxChars: 28, lines: 1, role: "headline" },
    { key: "doneLabel", type: "text", maxChars: 28, lines: 1, role: "subline" },
  ],
  brand: { accent: "colors.primary", fontFamily: "fonts.heading", buttonColor: "colors.background", color: "colors.text" },
  motionBeats: [
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 34, easing: "ease" },
    { target: "button", prop: "scale", settledBy: 46, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/showcase.tsx (Cursor, CopyPromptBeat), ui.tsx (CopyActions)" },
});
