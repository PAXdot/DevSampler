// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "aura",
  mechanic: ["oscilloscope"],
  tags: ["logo", "logo reveal", "oscilloscope", "lissajous", "signal", "phosphor", "scientific", "ring", "frame", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 140, max: 600 },
    stretch: "hold",
    phases: { in: 136, out: 0 },
    // power: the beam dot blooms into a many-lobed figure; converge: the two frequencies
    // slide to 1:1 while the phase spin slows; lock: the trace snaps into a ring (damped
    // phase overshoot) and the dial ticks sweep around it; logo: the mark focuses in inside.
    markers: { settled: 136, power: 0, converge: 38, lock: 100, logo: 104 },
    beats: [0, 12, 38, 100, 104, 122],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "beam", prop: "amplitude", from: "a single dot", settledBy: 24, easing: "spring" },
    { target: "lissajous figure", prop: "frequency ratio", from: "5:4", settledBy: 94, easing: "ease" },
    { target: "ring", prop: "phase", settledBy: 128, easing: "spring" },
    { target: "logo", prop: "focus", from: "blurred, small", settledBy: 128, easing: "spring" },
    { target: "caption", prop: "y", from: "below", settledBy: 136, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (oscilloscope Lissajous trace with phosphor persistence locks 1:1 into a ring around the logo, 2026-10-08)" },
});
