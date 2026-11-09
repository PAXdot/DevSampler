// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "device/phone",
  tags: ["phone", "mobile", "app", "device", "mockup", "scroll"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 165, min: 75, max: 900 },
    stretch: "hold",
    phases: { in: 36, out: 0 },
    markers: { settled: 40 },
    beats: [0, 10, 40],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "subline", type: "text", maxChars: 80, lines: 2, role: "subline" },
    { key: "screen", type: "video" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading", screenBackground: "colors.background", screenColor: "colors.text", frameColor: "colors.text", bodyFontFamily: "fonts.body" },
  motionBeats: [
    { target: "phone", prop: "y", from: "below", settledBy: 36, easing: "spring" },
    { target: "headline", prop: "y", from: "below", settledBy: 30, easing: "spring" },
    { target: "screen", prop: "scroll", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 80 }, hover: [0, 165] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/ui.tsx (Window, CardGrid)" },
});
