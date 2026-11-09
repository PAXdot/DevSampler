"use client"

// glimm by Noman Ijaz (https://glimm.dev), MIT licensed.
// WebGL sweep transitions: a colour band crosses the viewport and reveals the
// next view behind it while the outgoing view stays ahead of it.
import { GlimmProvider, useGlimm, PALETTES, EASINGS } from "glimm/react"

export type {
  Direction,
  EasingName,
  GlimmDefaults,
  Palette,
  PaletteName,
  SweepFn,
  SweepHandle,
  SweepOptions,
} from "glimm/react"

export { GlimmProvider, useGlimm, PALETTES, EASINGS }

export default GlimmProvider
