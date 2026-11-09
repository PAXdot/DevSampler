// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "process/craft",
  job: "process",
  language: "aura",
  mechanic: ["refraction"],
  energy: "calm",
  tags: ["list", "steps", "process", "prism", "spectrum", "light", "refraction", "optics", "glow", "craft"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 130, out: 0 },
    markers: { settled: 130, impact: 26, bands: 34, dim: 106 },
    beats: [0, 26, 34, 106, 130],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "items", type: "list", maxChars: 32, lines: 1, role: "label" }],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.heading",
    monoFontFamily: "fonts.mono",
  },
  motionBeats: [
    { target: "beam", prop: "length", from: "left", settledBy: 26, easing: "ease" },
    { target: "band", prop: "sweep", settledBy: 100, easing: "spring" },
    { target: "label", prop: "x", from: "slit", settledBy: 110, easing: "spring" },
    { target: "prism", prop: "opacity", settledBy: 130, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a beam refracts through a prism into one brand-colored band per list item, 2026-10-08)" },
});
