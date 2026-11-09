// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "context",
    "selection",
    "split",
    "pane",
    "chat"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 117,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 106
    },
    "beats": [
      16,
      40,
      72
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 64,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "context",
      "type": "text",
      "maxChars": 52,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "question",
      "type": "text",
      "maxChars": 90,
      "lines": 3,
      "role": "body"
    },
    {
      "key": "answer",
      "type": "text",
      "maxChars": 160,
      "lines": 5,
      "role": "body"
    },
    {
      "key": "mainImage",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "sideImage",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surfaceColor": "colors.background",
    "textColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 106,
      "easing": "ease"
    }
  ],
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "Keep the main idea in view",
    "context": "A detail worth exploring",
    "question": "How could this idea fit into the whole?",
    "answer": "Explore the detail here, while keeping your original work in context.",
    "mainImage": "",
    "sideImage": "",
    "sideWidth": 0.38,
    "revealFrame": 36,
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "context",
      "label": "Context",
      "type": "text",
      "max": 52,
      "role": "label"
    },
    {
      "key": "question",
      "label": "Question",
      "type": "text",
      "max": 90,
      "role": "body"
    },
    {
      "key": "answer",
      "label": "Answer",
      "type": "text",
      "max": 160,
      "role": "body"
    },
    {
      "key": "mainImage",
      "label": "Main image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "sideImage",
      "label": "Side image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "sideWidth",
      "label": "Side width",
      "type": "number",
      "min": 0.3,
      "max": 0.5
    },
    {
      "key": "revealFrame",
      "label": "Reveal frame",
      "type": "number",
      "step": 1,
      "min": 24,
      "max": 58
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    }
  ],
  "name": "Context Split Panel",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "context-split-panel",
    "bundleSha256": "95487681697e4dcb281819e18ddfd0c3dea18d23a5fb966b305624564349016f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:41.749Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-paper.png",
        "sha256": "6998f5101f4cd600b11180d0666fc1f13f499e034c6dda77eb9b87465f6902aa"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-night.png",
        "sha256": "e17f7e08825ebf356a1491c4eaa7e2f02085e38c02e11e19c503270109d1ae35"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-color.png",
        "sha256": "8d291a419c10f9c4eeb0d5cf4567e0b5dd8a5c22a11ab3811f4db9e3a59ede3e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-paper.png",
        "sha256": "682ec52b10c99fa1b3f7da22ebf4f67d2cb4e21d8ffa6ad9976fbade82ada554"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-night.png",
        "sha256": "192e1a52a031fbd8058e98c7f297528adc9c061768107ca79bbe7100ce8cfb4f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-color.png",
        "sha256": "d4e9b8cc5dbc42702e6e5738acac964bce1614c36d54b27a951217022ce15b6c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-paper.png",
        "sha256": "349f24e6542ec462c0af8a701d1058b2ab5999fb700f5eb2d322fc1e6689ec92"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-night.png",
        "sha256": "420266d8c4fe5cc96795b84d870811606c9ff1100f916d56ef9361a6bfec6b55"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-color.png",
        "sha256": "81af33460581aeb94a1c1546d28f983243c6571d151c12210d20deabdfc4302a"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "context-split-panel--16x9",
          "context-split-panel--9x16",
          "context-split-panel--1x1"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 48.13490125868056,
            "paperColor": 4.273600260416667,
            "region": {
              "left": 30,
              "top": 137,
              "width": 1860,
              "height": 897
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 52.535861545138886,
            "paperColor": 6.988416883680555,
            "region": {
              "left": 0,
              "top": 188,
              "width": 1080,
              "height": 1671
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.981716579861114,
            "paperColor": 4.786946614583333,
            "region": {
              "left": 0,
              "top": 137,
              "width": 1080,
              "height": 897
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0811572893046109,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1390358612580838,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0811572893046109,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1699831681643853,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2319597978080123,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.170693972033258,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103167604490356,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1757789535567316,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103167604490356,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.569986979166666,
        "frames": [
          15,
          106,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 117,
            "averageChannelDifference": 9.517469618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-117-frame-14.png",
                "sha256": "598fd6f6d25373b6bc3fa3cb78ddf96cda27871129fd4e000fd1cb6cb27fc068",
                "alphaMass": 378507
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-117-frame-106.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-117-frame-102.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-117-frame-116.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.569986979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-900-frame-15.png",
                "sha256": "068b0c0d0d7e5fab7341cc7fd36e999014d75bf4b550522c7a81536e6ee5bc26",
                "alphaMass": 378507
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-900-frame-106.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-900-frame-792.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/16x9-duration-900-frame-899.png",
                "sha256": "009ae0595ced3d0dca0ca8f9df1d16530dc8ac7e26f30361dbcfbd40888244d0",
                "alphaMass": 378507
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 117,
            "averageChannelDifference": 18.658203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-117-frame-14.png",
                "sha256": "a21d57ac5f6fe0da1feb98e647874e62825a43fa0e01991a29f001fb689411eb",
                "alphaMass": 422030
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-117-frame-106.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-117-frame-102.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-117-frame-116.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 18.55544704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-900-frame-15.png",
                "sha256": "1b9a85766c7dd33450be50d796cc6163b588ba31b17465e945675e192f69d70c",
                "alphaMass": 422030
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-900-frame-106.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-900-frame-792.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/9x16-duration-900-frame-899.png",
                "sha256": "b025837b30e2393d7e3576563b150296acddc4bc676f1f94408b05d806894b87",
                "alphaMass": 422030
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 117,
            "averageChannelDifference": 8.35427517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-117-frame-14.png",
                "sha256": "4d89ea635effe8ff2bad89460c5e6c4e766a84dbdecac3eefda3a95afdfa322d",
                "alphaMass": 381966
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-117-frame-106.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-117-frame-102.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-117-frame-116.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.380859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-900-frame-15.png",
                "sha256": "51ebe9559757b2eca661384dcc6808eef61fa2e58b08fca282fb498fe88ade28",
                "alphaMass": 381966
              },
              {
                "frame": 106,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-900-frame-106.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-900-frame-792.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/context-split-panel/1x1-duration-900-frame-899.png",
                "sha256": "041e30a33365cedf6d7218ccd298f2a6b13209097e6d166449d927b4548c6619",
                "alphaMass": 381966
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A detail is highlighted in an app and a side panel opens with context; product UI."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "95487681697e4dcb281819e18ddfd0c3dea18d23a5fb966b305624564349016f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.990012Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/context-split-panel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/context-split-panel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/context-split-panel/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 106,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "44ef8e10f0dfe99d2df4c3c88edea10bb61e2927e2c02f78875b306685f1765d",
        "loop": "757e6f6639816e96e32ff21a1da33c8a41f1184504478eb10e5b3aedb39168a7",
        "detail": "af2af932b4a45b9be1bf56dd7e432784eb7716462c1e405885613b6859ae9547"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/context-split-panel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/context-split-panel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/context-split-panel/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 106,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c1fa02337e1a48f9be2224b78678f3819e215440a3ba5a151bf33813091d12db",
        "loop": "de25bc2e419f66fe72bd7a0b81c46f98b28d37f990d6487290125a54cc2002ae",
        "detail": "e048d47f996dd602bbf6710cc9a8d71290685493b81d1ad84c67a50994ab4e12"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/context-split-panel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/context-split-panel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/context-split-panel/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 106,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "d7137dd216f6a5402d0d26b59aacd02ba18e1a4a8de36d0db14c8f4a4556797d",
        "loop": "836914db3b30a28fb71a52634d792ae204c8c7ea405e6f92c2cf4af7039b9cd8",
        "detail": "0992b2a31807b5ee5353fdb6b152e6beb8ee7aa11fa710f4e7318631b718e0cc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/95487681697e4dcb281819e18ddfd0c3dea18d23a5fb966b305624564349016f/index.mjs",
    "sha256": "95487681697e4dcb281819e18ddfd0c3dea18d23a5fb966b305624564349016f",
    "bytes": 209951,
    "externals": [
      "react",
      "react/jsx-runtime",
      "remotion",
      "remotion/no-react",
      "zod"
    ],
    "versions": {
      "kit": "0.1.0",
      "remotion": "4.0.533",
      "react": "19.2.1"
    }
  },
  "gates": {
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:28:41.397Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
