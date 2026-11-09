// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "hand-drawn",
  mechanic: ["bleed"],
  tags: ["logo", "logo reveal", "watercolor", "paint", "pigment", "bleed", "bloom", "granulation", "wet-in-wet", "paper", "hand-made", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 156, out: 0 },
    // water: clear water lays the logo shape on the paper; drop: pigment drops hit the wet shape and flood it;
    // bloom: backruns push pigment outward into cauliflower blooms and the edges feather; dry: the drying front
    // moves inward, rims darken and pigment granulates; settled: a faint clean logo glaze and the caption.
    markers: { settled: 156, water: 1, drop: 10, bloom: 80, dry: 104 },
    beats: [1, 10, 80, 104, 128, 156],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 2, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "pigment", prop: "fill", from: "clear water", settledBy: 64, easing: "ease" },
    { target: "edges", prop: "rim", from: "wet", settledBy: 150, easing: "ease" },
    { target: "caption", prop: "opacity", from: "0", settledBy: 156, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (logo painted in wet watercolor: blooms, granulation and dark drying rims on cold-press paper, 2026-10-08)" },
});
