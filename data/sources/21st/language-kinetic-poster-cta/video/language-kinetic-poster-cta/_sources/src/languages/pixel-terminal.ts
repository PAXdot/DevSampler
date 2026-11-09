// Built with Remotion - https://remotion.pro/license
import { defineLanguage } from "./types";

export default defineLanguage({
  "id": "pixel-terminal",
  "name": "Pixel / terminal",
  "material": "Discrete cells, character grid and orthogonal terminal panels",
  "light": "Flat self-lit text, no lens reflections",
  "camera": "Fixed raster; stepped movement respects the cell grid",
  "type": {
    "display": "mono",
    "body": "mono",
    "numerals": "mono"
  },
  "motion": {
    "verbs": [
      "type",
      "step",
      "scan"
    ],
    "easing": "linear",
    "maxScale": 1.0
  },
  "never": [
    "smooth arbitrary rotations",
    "serif interface chrome",
    "glossy floating cards"
  ],
  "brandRoles": {
    "bg": "terminal field",
    "ink": "characters and cell borders",
    "accent": "active cursor and changed cells"
  },
  "references": [
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 1.981,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-1.jpg",
      "sha256": "1959144d9ef8b5556b681f27606d0a0ebbe92c82799b2516ba5f068e3df692ad",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 4.953,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-2.jpg",
      "sha256": "abaff43cf8d1d0421bac1d289289eed0fd2f2485e08732ed07336a9d26b9e0d9",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 9.906,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-3.jpg",
      "sha256": "d04b97087f8a218da06a89075a541d487795ab9c4186f6a477361e9f1d1ea353",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 10.897,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-4.jpg",
      "sha256": "eaac552f3ee25b7eaa414dbacd95b98103373c47fdeb3c5df25b9cb1ddfef47c",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 11.888,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-5.jpg",
      "sha256": "7145e17c075b16ce56dd3c29268785bb01b21d2c52053dce820e983d89d6ff3a",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2054625030970220834",
      "sourceUrl": "https://x.com/NotionHQ/status/2054625030970220834",
      "seconds": 12.879,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/pixel-terminal-6.jpg",
      "sha256": "b91b51a00cbe8ebecf491f283570e4ad635b7c5b908c28516dfaca7972d8dac0",
      "observation": "Outlined monospace tools and large stacked pixel-like lettering",
      "basis": "sampled-frame"
    }
  ]
});
