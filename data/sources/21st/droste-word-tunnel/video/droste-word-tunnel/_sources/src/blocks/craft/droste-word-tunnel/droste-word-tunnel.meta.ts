// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["recursion", "zoom"],
  energy: "punchy",
  tags: ["title", "headline", "word", "droste", "recursive", "infinite zoom", "nested", "tunnel", "spiral", "kinetic type", "poster", "opener"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 110, max: 600 },
    stretch: "hold",
    phases: { in: 104, out: 0 },
    // rush = fastest dive, land = the camera passes the target level and eases back onto it.
    markers: { settled: 104, rush: 50, land: 88 },
    beats: [0, 20, 50, 88, 104],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "text", type: "text", maxChars: 24, lines: 2, role: "headline" }],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "camera", prop: "scale", from: "outside", settledBy: 104, easing: "ease" },
    { target: "camera", prop: "rotate", settledBy: 104, easing: "ease" },
    { target: "text", prop: "glint", settledBy: 138, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (the word nested inside itself, an infinite Droste dive that lands on one copy, 2026-10-08)" },
});
