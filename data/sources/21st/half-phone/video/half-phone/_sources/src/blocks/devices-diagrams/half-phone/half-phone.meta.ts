// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "device/phone",
  tags: ["phone", "mobile", "demo", "gesture", "touch", "cropped", "device"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 14, out: 0 },
    markers: { settled: 16 },
    beats: [0, 10, 30],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: ["background"],
  },
  slots: [
    { key: "screen", type: "video", role: "screen" },
    { key: "label", type: "text", maxChars: 32, lines: 1, role: "label" },
  ],
  brand: { screenBackground: "colors.background", screenColor: "colors.text", accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", frameColor: "colors.background", background: "colors.background" },
  motionBeats: [
    { target: "phone", prop: "y", from: "below", settledBy: 12, easing: "ease" },
    { target: "touch", prop: "y", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 62 }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V09" },
});
