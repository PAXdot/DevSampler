// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "glass",
  mechanic: ["crystallize"],
  tags: ["logo", "logo reveal", "frost", "ice", "snowflake", "crystal", "dendrite", "glass", "winter", "cold", "glint", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 160, out: 0 },
    // seed: the hexagonal ice plate forms around the mark; race: six dendrite arms shoot out from its corners;
    // bloom: side branches and smaller crystals frost the rest of the pane; glint: a sheen sweeps every edge;
    // settled: the frost holds, glints keep twinkling in the cold backlight.
    markers: { settled: 160, seed: 4, race: 14, bloom: 60, glint: 114 },
    beats: [0, 14, 60, 114, 160],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 2, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "plate", prop: "outline", from: "corners", settledBy: 18, easing: "ease" },
    { target: "mark", prop: "opacity", from: "hidden", settledBy: 26, easing: "ease" },
    { target: "dendrites", prop: "length", from: "plate corners", settledBy: 148, easing: "ease" },
    { target: "glint", prop: "x", from: "left", settledBy: 156, easing: "linear" },
    { target: "caption", prop: "y", from: "below", settledBy: 140, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (six-fold frost dendrites crystallize across a glass pane from the logo outward, 2026-10-08)" },
});
