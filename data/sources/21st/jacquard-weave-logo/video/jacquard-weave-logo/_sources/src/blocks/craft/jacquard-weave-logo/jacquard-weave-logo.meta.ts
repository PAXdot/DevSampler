// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
export const meta = defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "editorial",
  "mechanic": [
    "weave"
  ],
  "tags": [
    "textile",
    "jacquard",
    "weaving",
    "logo",
    "thread",
    "fabric",
    "shuttle",
    "material"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 155,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 145,
      "out": 0
    },
    "markers": {
      "settled": 145,
      "shuttle": 70
    },
    "beats": [
      0,
      16,
      70,
      130,
      145
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
      "key": "logo",
      "type": "image",
      "role": "logo"
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
    "fontFamily": "fonts.body"
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
    "sourceUrl": "21st first-party (warp and weft interlace the user's logo into a physical textile, 2026-10-09)"
  }
});
