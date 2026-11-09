// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["overprint"],
  energy: "default",
  tags: ["title", "headline", "risograph", "riso", "print", "two-color", "overprint", "misregistration", "halftone", "grain", "paper", "poster", "opener", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 96, max: 600 },
    stretch: "hold",
    phases: { in: 88, out: 0 },
    // pass1 = first drum feeds the sheet, pass2 = second drum slides across it, snap = both lock into register.
    markers: { settled: 88, pass1: 6, pass2: 24, snap: 58 },
    beats: [0, 6, 24, 48, 58, 88],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 40, lines: 3, role: "headline" },
    { key: "kicker", type: "text", maxChars: 32, lines: 1, role: "eyebrow" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "kicker", prop: "x", from: "left", settledBy: 18, easing: "ease" },
    { target: "inks", prop: "print", from: "top", settledBy: 48, easing: "ease" },
    { target: "inks", prop: "register", settledBy: 88, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (headline printed by two grainy riso ink drums that drift out of register, overprint, then lock, 2026-10-08)" },
});
