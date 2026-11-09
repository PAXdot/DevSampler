// Built with Remotion - https://remotion.pro/license
import { defineLanguage } from "./types";

export default defineLanguage({
  "id": "glass",
  "name": "Glass",
  "material": "Overlapping translucent lenses and panels with visible depth",
  "light": "Edge highlights controlled by brand luminance",
  "camera": "Shallow parallax; persistent subject through refractive layers",
  "type": {
    "display": "sans",
    "body": "sans",
    "numerals": "tabular"
  },
  "motion": {
    "verbs": [
      "focus",
      "float",
      "refract"
    ],
    "easing": "easeInOut",
    "maxScale": 1.05
  },
  "never": [
    "opaque generic cards",
    "unmotivated neon glow",
    "blurred primary text"
  ],
  "brandRoles": {
    "bg": "environment",
    "ink": "sharp foreground content",
    "accent": "lens edges and selected depth plane"
  },
  "references": [
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 35,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-1.jpg",
      "sha256": "6db328d695e8dc6c5875d8fced48eb8d86dee72a61877909ca9a34290816674a",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 39,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-2.jpg",
      "sha256": "2a1bc4792319cd2972bc496bc0cecaca704822c750a9bed5eca22be1e5d3d894",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 43,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-3.jpg",
      "sha256": "c57f9a0cddd05feb42325a9ac82c4a3486cfbbd65da5f572d33ab4afa32bd2ad",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 47,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-4.jpg",
      "sha256": "90967fe006655eba93bbb0aa00b0cf238adbcf527d16f56d6dba29aa99761080",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 51,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-5.jpg",
      "sha256": "9629ca7e8aae2153d18afa1c88815e59a157490d7e8da5929ffd5eb358678f22",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2059301066915631339",
      "sourceUrl": "https://x.com/kschlenker/status/2059301066915631339",
      "seconds": 55,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/glass-6.jpg",
      "sha256": "179445d73f4cb4f789e674810a57a8632ad7588cf0e63bb48a302dfbdc2a3df1",
      "observation": "Translucent calendar and task surfaces over filmed context",
      "basis": "sampled-frame"
    }
  ]
});
