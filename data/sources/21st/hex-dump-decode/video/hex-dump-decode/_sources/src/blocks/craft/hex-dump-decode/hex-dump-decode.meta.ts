// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
export const meta = defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/craft",
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "decode"
  ],
  "tags": [
    "code",
    "hex",
    "bytes",
    "decode",
    "terminal",
    "phosphor",
    "memory",
    "glitch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135,
      "decode": 65
    },
    "beats": [
      0,
      18,
      65,
      100,
      135
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
      "key": "code",
      "type": "text",
      "role": "code",
      "maxChars": 160,
      "lines": 10
    },
    {
      "key": "caption",
      "type": "text",
      "role": "subline",
      "maxChars": 40,
      "lines": 2
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (hexadecimal bytes decode through a phosphor scan into the user's code, 2026-10-09)"
  }
});
