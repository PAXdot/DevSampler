// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "editorial",
  mechanic: ["construct"],
  tags: ["logo", "logo reveal", "logo construction", "construction lines", "guides", "golden ratio", "grid", "clear space", "technical drawing", "drafting", "fine rules", "measurements", "serif", "brand", "opener"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    // grid: sheet grid and axis lines are ruled out from the center; circles: compass circles and
    // diagonals are swung; measure: clear space, dimensions and notes; trace: the contour is traced in accent;
    // snap: the logo lands on the guides; settled: guides recede, the title is set on its baseline.
    markers: { settled: 150, grid: 2, circles: 18, measure: 44, trace: 56, snap: 86 },
    beats: [0, 18, 44, 56, 86, 150],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "eyebrow" },
    { key: "title", type: "text", maxChars: 48, lines: 3, role: "headline" },
  ],
  brand: {
    primary: "colors.primary",
    secondary: "colors.secondary",
    color: "colors.text",
    background: "colors.background",
    fontFamily: "fonts.serif",
    monoFamily: "fonts.mono",
  },
  motionBeats: [
    { target: "grid", prop: "draw", from: "center", settledBy: 50, easing: "ease" },
    { target: "circles", prop: "draw", from: "compass point", settledBy: 70, easing: "ease" },
    { target: "measurements", prop: "write", from: "left", settledBy: 84, easing: "ease" },
    { target: "logo", prop: "scale", from: "1.1", settledBy: 110, easing: "spring" },
    { target: "guides", prop: "opacity", from: "full", settledBy: 140, easing: "ease" },
    { target: "title", prop: "reveal", from: "below", settledBy: 150, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (ruled drafting sheet: grid, compass circles, clear space and dimensions draw on, then the logo snaps onto them, 2026-10-08)" },
});
