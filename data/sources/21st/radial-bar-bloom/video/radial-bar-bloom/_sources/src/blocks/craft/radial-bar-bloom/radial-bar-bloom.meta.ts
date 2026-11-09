// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
export const meta = defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "bloom"
  ],
  "tags": [
    "data",
    "polar",
    "chart",
    "flower",
    "petals",
    "values",
    "total",
    "radial"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 125,
      "out": 0
    },
    "markers": {
      "settled": 125,
      "bloom": 50
    },
    "beats": [
      0,
      15,
      50,
      95,
      125
    ]
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "role": "headline",
      "maxChars": 40,
      "lines": 2
    },
    {
      "key": "values",
      "type": "list",
      "role": "chart"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.display"
  },
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "marker": "settled"
    },
    "hover": [
      0,
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (quantitative radial bars unfurl into a flower around their total, 2026-10-09)"
  }
});
