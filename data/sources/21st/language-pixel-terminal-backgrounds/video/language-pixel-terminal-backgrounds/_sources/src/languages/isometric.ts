// Built with Remotion - https://remotion.pro/license
import { defineLanguage } from "./types";

export default defineLanguage({
  "id": "isometric",
  "name": "Isometric",
  "material": "Extruded planes, solid blocks and a coherent shared ground",
  "light": "Directional face shading derived from brand colors",
  "camera": "Fixed parallel projection; never a random card tilt",
  "type": {
    "display": "sans",
    "body": "sans",
    "numerals": "tabular"
  },
  "motion": {
    "verbs": [
      "rise",
      "assemble",
      "travel"
    ],
    "easing": "easeOut",
    "maxScale": 1.06
  },
  "never": [
    "flat UI pretending to be depth",
    "unrelated perspective angles",
    "floating labels without anchors"
  ],
  "brandRoles": {
    "bg": "ground plane",
    "ink": "front faces and labels",
    "accent": "active volume or traveled path"
  },
  "references": [
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 42,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-1.jpg",
      "sha256": "63009b8e8bd54f0f66dfafc4d072a4ca650d172f00b93b8c84a4a9cf34503ea2",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 42.3,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-2.jpg",
      "sha256": "808f15bffecdd1a0cdfe5b34b649f2a97c028eddeae2245f0bed04c43e4bc87c",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 42.6,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-3.jpg",
      "sha256": "08c21e55a8b5921ae243fc24e6b4e56fd89ed5cc8f950bbe10e0fdce9ee7118a",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 43,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-4.jpg",
      "sha256": "b92c5365ad31b2b101d381782f0f258380ff2c37253fbe31d40b8a7a03f3fa90",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 43.4,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-5.jpg",
      "sha256": "5dec662e0ba6695d9eda441e918fbe62dd35128477d54b2f389742fae1cfc598",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2105341653468774723",
      "sourceUrl": "https://x.com/reflectnotes/status/2105341653468774723",
      "seconds": 43.8,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/isometric-6.jpg",
      "sha256": "7cab27a7d865ed034772c25d686710a22cef2f9ed5854f2173c1ace35a6404c6",
      "observation": "Extruded data grid rises on a shared tilted ground plane",
      "basis": "sampled-frame"
    }
  ]
});
