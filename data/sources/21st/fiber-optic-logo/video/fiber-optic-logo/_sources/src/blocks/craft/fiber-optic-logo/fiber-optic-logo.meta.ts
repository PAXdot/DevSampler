// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["fibers"],
  tags: ["logo", "logo reveal", "fiber optic", "fibers", "strands", "light", "glow", "pulses", "dots", "cable", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 170, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    // rise: the bundle climbs out of the cable as one column; spread: it fans into the shape of the mark;
    // pulses: light is injected at the ferrule and races to every tip; lit: the last tip lights;
    // settled: strands dim, the mark fills solid, the caption is set, stray pulses keep twinkling.
    markers: { settled: 150, spread: 28, pulses: 56, lit: 118 },
    beats: [0, 28, 56, 118, 150],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "strands", prop: "length", from: "inside the cable", settledBy: 40, easing: "ease" },
    { target: "strands", prop: "shape", from: "one column", settledBy: 80, easing: "spring" },
    { target: "tips", prop: "glow", from: "dark", settledBy: 118, easing: "ease" },
    { target: "mark", prop: "fill", from: "dotted", settledBy: 150, easing: "ease" },
    { target: "caption", prop: "y", from: "below", settledBy: 150, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a fiber optic bundle fans out, light pulses race to the tips and the glowing tips form the logo, 2026-10-08)" },
});
