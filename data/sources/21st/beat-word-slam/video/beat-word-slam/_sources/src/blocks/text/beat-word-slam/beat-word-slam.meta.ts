// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/kinetic",
  tags: ["beat", "music", "word slam", "flash", "hype", "launch", "kinetic-type"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 96, min: 24, max: 600 },
    stretch: "hold",
    phases: { in: 54, out: 0 },
    markers: { settled: 56 },
    beats: [2, 14, 26, 38, 50],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [{ key: "words", type: "list", maxChars: 16, lines: 1, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "word", prop: "scale", from: "1.06", settledBy: 54, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 96] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V02 (one word per beat with flash frames); own copy" },
});
