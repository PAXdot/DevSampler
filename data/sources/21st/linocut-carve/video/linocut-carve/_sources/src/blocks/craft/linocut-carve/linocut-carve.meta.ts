// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "hand-drawn",
  mechanic: ["carving"],
  tags: ["logo", "logo reveal", "linocut", "printmaking", "relief print", "carving", "ink", "handmade", "paper", "craft", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 222, min: 211, max: 600 },
    stretch: "hold",
    phases: { in: 209, out: 0 },
    // carve: gouges cut echo lines outward from the mark; roll: the brayer inks the relief;
    // paper: a sheet is laid on the block; burnish: a baren presses it and the print ghosts
    // through; pull: the sheet turns over to show the print;
    // settled: the print holds with its pencil caption.
    markers: { settled: 209, carve: 12, roll: 100, paper: 137, burnish: 150, pull: 167, caption: 193 },
    beats: [0, 12, 60, 100, 137, 150, 167, 193],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 32, lines: 2, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "lino block", prop: "scale", from: "1.05, faded", settledBy: 16, easing: "ease" },
    { target: "gouge strokes", prop: "carve", settledBy: 96, easing: "ease" },
    { target: "brayer", prop: "position", from: "block start", settledBy: 137, easing: "ease" },
    { target: "paper", prop: "rotateX", from: "0deg, face down", settledBy: 199, easing: "spring" },
    { target: "caption", prop: "write-on", settledBy: 209, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 222] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (gouges carve echo lines around the logo in a lino block, a brayer inks it, a print is pulled, 2026-10-08)" },
});
