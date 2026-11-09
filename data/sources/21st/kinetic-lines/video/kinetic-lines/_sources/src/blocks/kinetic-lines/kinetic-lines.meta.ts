// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/kinetic",
  tags: ["title", "headline", "launch", "kinetic-type"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 54 },
    beats: [0, 14, 28, 42],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [{ key: "lines", type: "list", maxChars: 48, lines: 4, role: "headline" }],
  brand: { serifFontFamily: "fonts.serif", fontFamily: "fonts.heading",  color: "colors.text", accent: "colors.primary", background: "colors.background" },
  motionBeats: [{ target: "line", prop: "y", from: "below", settledBy: 54, easing: "spring" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "factor-marketplace/remotion/components/kinetic.tsx" },
});
