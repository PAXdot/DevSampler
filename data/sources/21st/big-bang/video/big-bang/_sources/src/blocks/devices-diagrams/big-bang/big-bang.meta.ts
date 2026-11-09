// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "device/phone",
  tags: ["phone", "3d", "burst", "reveal", "stickers", "launch", "device"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 450 },
    stretch: "hold",
    phases: { in: 20, out: 0 },
    markers: { settled: 30 },
    beats: [2, 11, 22],
  },
  layout: { aspects: ["1:1", "9:16", "16:9"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "label", type: "text", maxChars: 36, lines: 1, role: "label" },
    { key: "screen", type: "image", role: "screen" },
  ],
  brand: { secondary: "colors.secondary", frameColor: "colors.background", screenBackground: "colors.background", screenColor: "colors.text", accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "burst", prop: "scale", from: "0.02", settledBy: 18, easing: "ease" },
    { target: "phone", prop: "rotateY", from: "-40", settledBy: 60, easing: "ease" },
    { target: "label", prop: "y", from: "below", settledBy: 30, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 44 }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V07" },
});
