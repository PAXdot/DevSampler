// Built with Remotion - https://remotion.pro/license
import { defineLanguage } from "./types";

export default defineLanguage({
  "id": "editorial",
  "name": "Editorial",
  "material": "Paper grain, fine rules, wide margins and numbered notes",
  "light": "Flat; no reflections or glow",
  "camera": "Static; paper columns and marks move independently",
  "type": {
    "display": "serif",
    "body": "serif",
    "numerals": "oldstyle"
  },
  "motion": {
    "verbs": [
      "draw",
      "rise",
      "type"
    ],
    "easing": "easeInOut",
    "maxScale": 1.04
  },
  "never": [
    "glow",
    "glass",
    "drop shadow",
    "gradient background"
  ],
  "brandRoles": {
    "bg": "paper",
    "ink": "text and fine rules",
    "accent": "rules and marks only"
  },
  "references": [
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 0,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-1.jpg",
      "sha256": "adedb154ed9ba2c45248c10e88e133a949e21b14b67a5cf1bd6c1f56b1ee39a6",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 6,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-2.jpg",
      "sha256": "fc32299cee3ac2f6c1d2e3618aaae0eafe8eddbce7e6e4a75483a0874a29fa0e",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 19,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-3.jpg",
      "sha256": "d86869c14c8bf060b6bb823a3459f782b255c979de6bb026e9d32e3686621b4e",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 45,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-4.jpg",
      "sha256": "366189b0b359dc072d76111b5726f330a2da86d7988f208848d7dafb304bb19a",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 84,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-5.jpg",
      "sha256": "64200644de5d53f21458da0516ac37361e359e2dfd03bda4ef9f278f0cdc2980",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "1982842909235040731",
      "sourceUrl": "https://x.com/AnthropicAI/status/1982842909235040731",
      "seconds": 90,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/editorial-6.jpg",
      "sha256": "d9c75631be51da5f30c832301a90185713ba728662859fc1622194684fd6d01f",
      "observation": "Paper-toned interface, serif greeting and document hierarchy",
      "basis": "sampled-frame"
    }
  ]
});
