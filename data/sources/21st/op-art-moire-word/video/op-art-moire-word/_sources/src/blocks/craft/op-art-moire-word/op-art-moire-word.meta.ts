// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["moire"],
  energy: "default",
  tags: ["title", "headline", "word", "moire", "op art", "interference", "line grating", "optical illusion", "stripes", "kinetic type", "poster", "reveal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 140, max: 600 },
    stretch: "hold",
    phases: { in: 130, out: 0 },
    // shimmer: free fringes flow; emerge: angles converge and the word appears; lock: gratings align, the word fuses solid.
    markers: { settled: 130, emerge: 78, lock: 100 },
    beats: [0, 46, 78, 100, 130],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "text", type: "text", maxChars: 24, lines: 2, role: "headline" }],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
  },
  motionBeats: [
    { target: "gratings", prop: "rotation", settledBy: 100, easing: "ease" },
    { target: "fringes", prop: "flow", settledBy: 100, easing: "ease" },
    { target: "text", prop: "opacity", from: "interference", settledBy: 114, easing: "ease" },
    { target: "lines", prop: "glint", settledBy: 130, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (two line gratings rotate into alignment and the word emerges from their moire interference, 2026-10-08)" },
});
