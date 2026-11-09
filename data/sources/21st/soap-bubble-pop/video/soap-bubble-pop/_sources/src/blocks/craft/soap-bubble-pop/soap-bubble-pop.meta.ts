// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "glass",
  mechanic: ["pop"],
  tags: ["logo", "logo reveal", "soap bubble", "bubble", "iridescent", "thin film", "pop", "droplets", "playful", "physics", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 110, max: 600 },
    stretch: "hold",
    phases: { in: 100, out: 0 },
    // drift: the bubble rises in, wobbling, with the logo inside; bubble: it hovers at full size
    // (poster); thin: the film thins to a dark spot; pop: the film tears open from that spot;
    // settled: droplets have fallen, the logo and a fine mist hold.
    markers: { settled: 100, drift: 0, bubble: 32, thin: 30, pop: 44, release: 70 },
    beats: [0, 30, 44, 60, 76, 100],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "bubble", prop: "position", from: "below frame", settledBy: 40, easing: "ease" },
    { target: "bubble film", prop: "tear", settledBy: 60, easing: "ease" },
    { target: "droplets", prop: "position", settledBy: 96, easing: "linear" },
    { target: "logo", prop: "scale", from: "inside the bubble", settledBy: 80, easing: "spring" },
    { target: "caption", prop: "opacity", settledBy: 34, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "release" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (thin-film soap bubble carries the logo in, tears open from one point and sprays droplets, 2026-10-08)" },
});
