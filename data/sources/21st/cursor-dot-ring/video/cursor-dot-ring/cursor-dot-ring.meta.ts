// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "dot ring",
    "dot and ring",
    "custom cursor",
    "portfolio",
    "hover",
    "project grid",
    "minimal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 72,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90,
      "hover": 34,
      "click": 62
    },
    "beats": [
      0,
      34,
      62
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
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "heading",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "titles",
      "type": "list",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "tags",
      "type": "list",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "viewLabel",
      "type": "text",
      "maxChars": 8,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "serifFontFamily": "fonts.serif"
  },
  "motionBeats": [
    {
      "target": "project tiles",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "right",
      "settledBy": 56,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "size",
      "settledBy": 44,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "scale",
      "settledBy": 70,
      "easing": "ease"
    },
    {
      "target": "other tiles",
      "prop": "opacity",
      "settledBy": 84,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (dot and lagging ring cursor opens a portfolio project, 2026-10-07)"
  },
  "job": "cursors",
  "language": "editorial",
  "mechanic": [
    "hover"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "heading": "Selected work",
    "note": "Index 2023-2026",
    "titles": [
      "Northwind",
      "Atlas",
      "Kiln",
      "Meridian"
    ],
    "tags": [
      "Identity",
      "Web",
      "Motion",
      "Print"
    ],
    "viewLabel": "View",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#F2A65A",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist",
    "serifFontFamily": "Instrument Serif"
  },
  "fields": [
    {
      "key": "heading",
      "label": "Heading",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "titles",
      "label": "Titles",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "tags",
      "label": "Tags",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "viewLabel",
      "label": "View label",
      "type": "text",
      "max": 8,
      "role": "label"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    }
  ],
  "name": "Dot and Ring Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-dot-ring",
    "bundleSha256": "fb4cbda2a892096e0ae2df506d1e319f7eb9efc5775ea55ecc4efb762e660848",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:43:16.977Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-paper.png",
        "sha256": "1688700cdb4c937525bfd11259755c33268c381f251caaba5aeca79a126db7c9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-night.png",
        "sha256": "c72ceef57b0516e2ddce29202ab59abba4840252e24029d4f591652111c142f9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-color.png",
        "sha256": "48b39c7ccf641b3c2b726d2f1928bb412e82e519e3391192ec132d9e67fbfb73"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-paper.png",
        "sha256": "e5fa6a546d9e14ba133e138a7d5dd701b72403f15935a431ec0f2c7d886d0099"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-night.png",
        "sha256": "4c2c2f5b80d7db48f32312af788938d60ff97c1a3391613285d06c6b146333c7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-color.png",
        "sha256": "97f7630937ac3f95062bb3901bbc67b6ab0d3209ea3f6101d65d43ff369b1c7e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-paper.png",
        "sha256": "45e2dcc046a112c417a94f676e6815191f72f5254547d53602c03b4fe29f33e8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-night.png",
        "sha256": "ff73199bd73abf1a402842fda11d9e4d01b1de7857059a959ed6b9b9fe5e4e9d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-color.png",
        "sha256": "dc283299d1e030929ed7ddef95dafc032877efdbdb795509c04065df1efc4a2d"
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
          "cursor-dot-ring--16x9",
          "cursor-dot-ring--9x16",
          "cursor-dot-ring--1x1"
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
            "paperNight": 67.982177734375,
            "paperColor": 27.295572916666668,
            "region": {
              "left": 154,
              "top": 182,
              "width": 1613,
              "height": 720
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 67.35205078125,
            "paperColor": 28.24970160590278,
            "region": {
              "left": 42,
              "top": 197,
              "width": 962,
              "height": 1532
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 67.66143120659723,
            "paperColor": 27.18359375,
            "region": {
              "left": 52,
              "top": 134,
              "width": 942,
              "height": 817
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
            "occupancy": 0.7866466416813641,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7932571176618798,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7827249180279109,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9871821831870611,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0072801625794352,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9832905320049833,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9154412650977174,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.935118989296679,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9109261417186904,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.049153645833332,
        "frames": [
          13,
          90,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 72,
            "averageChannelDifference": 19.318467881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-72-frame-8.png",
                "sha256": "1a3fa77c36ef5029df4e1368ebe6358c3259f20c29eb67c182709bbb0f8db12b",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-72-frame-71.png",
                "sha256": "79e05bbe030ed220afc9633811863cc79b2e19474619a53bb9e2aa22a099b45d",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-72-frame-63.png",
                "sha256": "79e05bbe030ed220afc9633811863cc79b2e19474619a53bb9e2aa22a099b45d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.049153645833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-600-frame-13.png",
                "sha256": "0ce13a153c9dbcf74ddfe1acde0a63ec5da18c231eda75c6de0b98ce3c4e0329",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-600-frame-90.png",
                "sha256": "15976ec388f73f4c510b82b60c6773b1ac6dd148b0b650afe61b188c23f6c185",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-600-frame-528.png",
                "sha256": "79e05bbe030ed220afc9633811863cc79b2e19474619a53bb9e2aa22a099b45d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/16x9-duration-600-frame-599.png",
                "sha256": "15976ec388f73f4c510b82b60c6773b1ac6dd148b0b650afe61b188c23f6c185",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 72,
            "averageChannelDifference": 22.38715277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-72-frame-8.png",
                "sha256": "17366e9aedad92c3d546e93eeb38c6d1fe0f44a8163eefc4ef7062603e624cc6",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-72-frame-71.png",
                "sha256": "f8cb7001c23f8912c79837e12d75d62efd82c933d4eceda34b83a1aab61d75ab",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-72-frame-63.png",
                "sha256": "0eb2cbfc22cad290a71318f0ad3a3130c29fdcf740a58de4d8e56981525b3702",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.10959201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-600-frame-13.png",
                "sha256": "5e3a3fc1ffe30097f16a0c5405a75e1b236e7bdf2d1491d69a20e68a7cbaa453",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-600-frame-90.png",
                "sha256": "f8cb7001c23f8912c79837e12d75d62efd82c933d4eceda34b83a1aab61d75ab",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-600-frame-528.png",
                "sha256": "f8cb7001c23f8912c79837e12d75d62efd82c933d4eceda34b83a1aab61d75ab",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/9x16-duration-600-frame-599.png",
                "sha256": "f8cb7001c23f8912c79837e12d75d62efd82c933d4eceda34b83a1aab61d75ab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 72,
            "averageChannelDifference": 20.149088541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-72-frame-8.png",
                "sha256": "1f5919ef2c7bd4cd18564827d1c1c2e6666423eafab058bfc1e44b13f7b91e7a",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-72-frame-71.png",
                "sha256": "dac0fd75f990af917aa966472cb26067d5bb5590fc03544acf8d3d6959ff4582",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-72-frame-63.png",
                "sha256": "dac0fd75f990af917aa966472cb26067d5bb5590fc03544acf8d3d6959ff4582",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.97341579861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-600-frame-13.png",
                "sha256": "40fa7971ab7790b98f180e67fe9d3030a1067ccca253f2b823aaf04bda419576",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-600-frame-90.png",
                "sha256": "dac0fd75f990af917aa966472cb26067d5bb5590fc03544acf8d3d6959ff4582",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-600-frame-528.png",
                "sha256": "dac0fd75f990af917aa966472cb26067d5bb5590fc03544acf8d3d6959ff4582",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-dot-ring/1x1-duration-600-frame-599.png",
                "sha256": "dac0fd75f990af917aa966472cb26067d5bb5590fc03544acf8d3d6959ff4582",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A dot with a trailing ring swells into a View disc over a portfolio cover and opens it."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "fb4cbda2a892096e0ae2df506d1e319f7eb9efc5775ea55ecc4efb762e660848",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.287Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-dot-ring/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-dot-ring/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-dot-ring/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "fba1c2cacfd5558131133ec03c7e5e7e7a297defb64534a0969cfb0c8a729600",
        "loop": "bc72c748348d8815bf2c5f75f83ca4a5e839719df843d3d517b83d8f123d6685",
        "detail": "642a92aa48b03c5bc332b7ff97c49fb774706795486bb66925a05d6a39ed117d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-dot-ring/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-dot-ring/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-dot-ring/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "78f8e065347dd972d2d9ebf23b3b128da444c6d26b9bb8a6d0532012731ee530",
        "loop": "b36403b67dad23146538f6a222cfe6eed9519c35f443b23da91d52f9102559b2",
        "detail": "204d3157d3643a5524332325a9f342191fc0a8a26ed3a73da39e70ce601f4aeb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-dot-ring/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-dot-ring/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-dot-ring/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "36e5217f1031a0ac5a7013fa1af0b67535710d2d20db084ea02e890596e008d7",
        "loop": "1c3097fcc521af70034f023afaf3156a35670cd00b793441cce20d74647d23fa",
        "detail": "68e25f22edc271116c6efa01fa18301f029a3f5ffb1435db4a70115a6dc682e6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/fb4cbda2a892096e0ae2df506d1e319f7eb9efc5775ea55ecc4efb762e660848/index.mjs",
    "sha256": "fb4cbda2a892096e0ae2df506d1e319f7eb9efc5775ea55ecc4efb762e660848",
    "bytes": 169515,
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
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-08T00:06:04.734Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
