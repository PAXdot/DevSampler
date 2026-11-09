// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "editorial",
  mechanic: ["print"],
  energy: "default",
  requiresScreenshot: true,
  tags: ["print", "cmyk", "halftone", "misregistration", "press", "separation", "screenshot", "image reveal", "editorial", "risograph"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 132, max: 600 },
    stretch: "hold",
    phases: { in: 122, out: 0 },
    markers: { settled: 122, cyan: 2, magenta: 28, yellow: 50, key: 68, register: 86, resolve: 98 },
    beats: [2, 28, 50, 68, 86, 122],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "screenshot", type: "image", role: "screenshot" }],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background" },
  motionBeats: [
    { target: "plates", prop: "print", from: "left", settledBy: 84, easing: "ease" },
    { target: "plates", prop: "register", settledBy: 100, easing: "spring" },
    { target: "image", prop: "resolve", settledBy: 122, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (image printed as four misregistered CMYK halftone passes that snap into register, 2026-10-08)" },
});
