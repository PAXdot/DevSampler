// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/kinetic",
  tags: ["whip", "motion blur", "phrases", "ad", "vertical", "social", "kinetic-type"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 40, max: 600 },
    stretch: "hold",
    phases: { in: 72, out: 0 },
    markers: { settled: 72 },
    beats: [0, 22, 44, 66],
  },
  layout: { aspects: ["9:16", "1:1", "16:9"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [{ key: "phrases", type: "list", maxChars: 40, lines: 2, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "phrase", prop: "x", from: "right", settledBy: 6, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V12 (whip phrases with directional blur); own copy" },
});
