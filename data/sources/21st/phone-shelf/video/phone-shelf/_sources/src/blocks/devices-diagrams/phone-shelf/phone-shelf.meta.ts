// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "device/phone",
  tags: ["phone", "3d", "carousel", "shelf", "screens", "showcase", "device"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 26, out: 0 },
    markers: { settled: 32 },
    beats: [0, 12],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "screen1", type: "image", role: "screen" },
    { key: "screen2", type: "image", role: "screen" },
    { key: "screen3", type: "image", role: "screen" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body", frameColor: "colors.text", screenBackground: "colors.background", screenColor: "colors.text" },
  motionBeats: [
    { target: "phones", prop: "y", from: "below", settledBy: 26, easing: "ease" },
    { target: "shelf", prop: "x", easing: "linear" },
    { target: "headline", prop: "y", from: "below", settledBy: 30, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V07" },
});
