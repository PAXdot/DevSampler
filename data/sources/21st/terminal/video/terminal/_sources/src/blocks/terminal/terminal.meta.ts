// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/terminal",
  tags: ["terminal", "cli", "install", "developer", "code"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 20, out: 0 },
    markers: { settled: 130 },
    beats: [0, 20, 24, 77, 87, 93, 99, 113, 130],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.05, y: 0.06, w: 0.9, h: 0.88 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: ["background"],
  },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "label" },
    { key: "lines", type: "list", maxChars: 80, lines: 10, role: "code" },
  ],
  brand: { fontFamily: "fonts.body", monoFontFamily: "fonts.mono", accent: "colors.primary", background: "colors.background", windowColor: "colors.background", textColor: "colors.text" },
  motionBeats: [
    { target: "window", prop: "scale", from: "0.96", settledBy: 20, easing: "spring" },
    { target: "lines", prop: "type", from: "", settledBy: 130, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 134 }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/ui.tsx" },
});
