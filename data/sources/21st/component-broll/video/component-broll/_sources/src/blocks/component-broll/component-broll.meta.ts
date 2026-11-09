// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "media/component-demo",
  tags: ["component", "demo", "b-roll", "showcase", "ui", "21st"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 28, out: 0 },
    markers: { settled: 32 },
    beats: [0, 14],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "video", type: "video" },
    { key: "demoHeadline", type: "text", role: "demo-headline" },
    { key: "demoDetail", type: "text", role: "demo-detail" },
    { key: "primaryAction", type: "text", role: "demo-action" },
    { key: "secondaryAction", type: "text", role: "demo-action" },
    { key: "caption", type: "text", maxChars: 48, lines: 1, role: "headline" },
    { key: "author", type: "text", maxChars: 32, lines: 1, role: "subline" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading", cardColor: "colors.background", demoColor: "colors.text", secondaryColor: "colors.secondary", bodyFontFamily: "fonts.body", serifFontFamily: "fonts.serif", monoFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "card", prop: "scale", from: "0.94", settledBy: 28, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 32, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 70 }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/showcase.tsx (Frame, Label)" },
});
