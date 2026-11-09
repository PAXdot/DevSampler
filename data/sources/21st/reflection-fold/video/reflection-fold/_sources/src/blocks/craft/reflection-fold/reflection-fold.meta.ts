// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["fold"],
  energy: "default",
  tags: ["title", "headline", "reflection", "water", "lake", "ripple", "mirror", "fold", "flip", "horizon", "sunset", "glow", "opener", "launch", "kinetic type"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 100, max: 600 },
    stretch: "hold",
    phases: { in: 96, out: 0 },
    // reflection = only the rippling reflection shows, fold = it starts folding up, flat = it lies flat on the
    // waterline, upright = the title stands, settled = the swing and the wake have calmed.
    markers: { settled: 96, reflection: 0, fold: 36, flat: 48, upright: 57 },
    beats: [0, 36, 48, 57, 70, 96],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "text", type: "text", maxChars: 40, lines: 3, role: "headline" }],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
  },
  motionBeats: [
    { target: "reflection", prop: "opacity", settledBy: 26, easing: "ease" },
    { target: "text", prop: "rotateX", from: "below", settledBy: 96, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a title rises out of its rippling water reflection and stands on the waterline, 2026-10-08)" },
});
