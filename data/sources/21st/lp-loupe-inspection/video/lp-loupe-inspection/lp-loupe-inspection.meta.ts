// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "loupe-inspection",
    "product-proof",
    "loupe-inspection",
    "interface"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
    "preset": "full",
    "backdrop": [
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "The detail tells the story",
    "subtitle": "A moving lens keeps the whole interface in view.",
    "items": [
      "Overview",
      "Inspect detail",
      "Verified"
    ],
    "screenshot": "",
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
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
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Circular moving crop lens",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-loupe-inspection",
    "bundleSha256": "25cf6657eea76dae335a70c3b53158b8fea1abdf99765206ab7478e41e7d4672",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:52.571Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-paper.png",
        "sha256": "766c173000732e8d02c33b7aade0b81a078c897401ddd0fff75e5a0bc0923428"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-night.png",
        "sha256": "5c0251f35cba93cde072e898727921d9fb485d5782333e026611738f2685a033"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-color.png",
        "sha256": "81412225e0cc4204cd37e1f5b23e002bf4a3c5c36b4eef7a4192b590f4c6a937"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-paper.png",
        "sha256": "330458e8f5f1a2008ea867b10a3043cebc9a563964daf8a8d0290e56ae5798be"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-night.png",
        "sha256": "6421bd369f39b016beb6a07ce3c2891cf3983e3aa0f6f1dff3b31c50a293ee4d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-color.png",
        "sha256": "46a139e52b3f19973f6c6b741a508a852a97e7470031333ad25907a64541e678"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-paper.png",
        "sha256": "b0742b866a05141ac68e57e6231079f9cddb79eedaf755f20eaec16fcbe290a7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-night.png",
        "sha256": "e439a090f6ce0a191018d15a7adb0ee36032f455945c1af44db26683d9f9845a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-color.png",
        "sha256": "3e6767dfc3fe9cc5fe60844a81ece585e33c6d80ceff4378d367d0ca6b481fe8"
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
          "lp-loupe-inspection--16x9",
          "lp-loupe-inspection--9x16",
          "lp-loupe-inspection--1x1"
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
            "paperNight": 138.32370334201389,
            "paperColor": 11.773193359375,
            "region": {
              "left": 145,
              "top": 104,
              "width": 1630,
              "height": 848
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 141.29055447048611,
            "paperColor": 13.27609592013889,
            "region": {
              "left": 77,
              "top": 192,
              "width": 926,
              "height": 1495
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 139.94368489583334,
            "paperColor": 12.648328993055555,
            "region": {
              "left": 77,
              "top": 108,
              "width": 926,
              "height": 844
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
            "occupancy": 0.9447130189524372,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9447130189524372,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9447130189524372,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9455359111237089,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9455359111237089,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.946168799953109,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9496145280242871,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9496145280242871,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9496145280242871,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7495659722222223,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.7427300347222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-150-frame-18.png",
                "sha256": "4bd0ab2c5189b001deca331188cad8d49a9a04bba9bec0d3bfc72a39f4109136",
                "alphaMass": 349213
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-150-frame-132.png",
                "sha256": "9b04521f5cf7c2cf39b757449f8c6c70cdaa479ec946aa4f61025812a6238bb8",
                "alphaMass": 349090
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-150-frame-149.png",
                "sha256": "9b04521f5cf7c2cf39b757449f8c6c70cdaa479ec946aa4f61025812a6238bb8",
                "alphaMass": 349090
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.7495659722222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-900-frame-19.png",
                "sha256": "cc1374094eda146f70ffcdf34100925357a08836b4418b8d810c82bd097a9fb0",
                "alphaMass": 349213
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-900-frame-132.png",
                "sha256": "9b04521f5cf7c2cf39b757449f8c6c70cdaa479ec946aa4f61025812a6238bb8",
                "alphaMass": 349090
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-900-frame-792.png",
                "sha256": "9b04521f5cf7c2cf39b757449f8c6c70cdaa479ec946aa4f61025812a6238bb8",
                "alphaMass": 349090
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/16x9-duration-900-frame-899.png",
                "sha256": "9b04521f5cf7c2cf39b757449f8c6c70cdaa479ec946aa4f61025812a6238bb8",
                "alphaMass": 349090
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 0.5487196180555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-150-frame-18.png",
                "sha256": "10d7f5ee2a2a92cc59217c48472552e57ba3ab0a85bdac6e46360fc02566932c",
                "alphaMass": 351298
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-150-frame-132.png",
                "sha256": "7b737a7046243a969d9741640314a19f928830bc5c806799d2e815465edffb16",
                "alphaMass": 351298
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-150-frame-149.png",
                "sha256": "7b737a7046243a969d9741640314a19f928830bc5c806799d2e815465edffb16",
                "alphaMass": 351298
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 0.5502387152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-900-frame-19.png",
                "sha256": "3f1eb6853b0aebae2cc644961f778d8a4b67f05965ec4cdf090b6566e1c01521",
                "alphaMass": 351298
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-900-frame-132.png",
                "sha256": "7b737a7046243a969d9741640314a19f928830bc5c806799d2e815465edffb16",
                "alphaMass": 351298
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-900-frame-792.png",
                "sha256": "7b737a7046243a969d9741640314a19f928830bc5c806799d2e815465edffb16",
                "alphaMass": 351298
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/9x16-duration-900-frame-899.png",
                "sha256": "7b737a7046243a969d9741640314a19f928830bc5c806799d2e815465edffb16",
                "alphaMass": 351298
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 0.8289930555555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-150-frame-18.png",
                "sha256": "645df0317ee2da06fecda7dde7b6fdd2703febe86967b93b6dc8488f790abef1",
                "alphaMass": 350549
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-150-frame-132.png",
                "sha256": "8eb3c1bc60e51e10d95501edede3c41b0465041872d155c31eb3eac7d2b9e626",
                "alphaMass": 350549
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-150-frame-149.png",
                "sha256": "8eb3c1bc60e51e10d95501edede3c41b0465041872d155c31eb3eac7d2b9e626",
                "alphaMass": 350549
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 0.8333333333333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-900-frame-19.png",
                "sha256": "8e1889fe9d082a9ce71d6b1578435a1c31b135bbeea92d42058cf451f1b2c8dc",
                "alphaMass": 350549
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-900-frame-132.png",
                "sha256": "8eb3c1bc60e51e10d95501edede3c41b0465041872d155c31eb3eac7d2b9e626",
                "alphaMass": 350549
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-900-frame-792.png",
                "sha256": "8eb3c1bc60e51e10d95501edede3c41b0465041872d155c31eb3eac7d2b9e626",
                "alphaMass": 350549
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-loupe-inspection/1x1-duration-900-frame-899.png",
                "sha256": "8eb3c1bc60e51e10d95501edede3c41b0465041872d155c31eb3eac7d2b9e626",
                "alphaMass": 350549
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
        "note": "A circular loupe moves across a dashboard chart to inspect a detail; chart in brand blue."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "25cf6657eea76dae335a70c3b53158b8fea1abdf99765206ab7478e41e7d4672",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ff5435422e7f5fdc142aa85f29c3f67d042ea5e00336e58ab478c5e9bdb83344",
        "loop": "6f85fb4b4c27fc300ab9a17559f087c87ee7eee60134611959087eb24d38fa15",
        "detail": "2daa59ca576b589936becd282d60233b3fe1d81f564b74c9a81f1b59755ba86d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cc3391f27e30f132961118bfa5321b11b4ef9246b059d7a7dbb086b31860cfab",
        "loop": "a61fa0037e1f2a93040988b8982a9931544bdb48e4109c79d6c78fbe58897e9b",
        "detail": "78a2a1cf5b4ece2a08866ad5e7c616358b89f21ac7a8bd03587b215746c5d57f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-loupe-inspection/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3c4b56656148e7e0319c90b4eaf7dc25eb0b8436ce6564d1642e6e987e92e912",
        "loop": "b74158ea42a8df94e9857ebca1ed02fde42ccf55dad83c1f583a4ea2ec1b370a",
        "detail": "96adbdaa74e5081bb75a57ca540a33ffb6acf151b4dd5059e3dae355d6b00284"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/25cf6657eea76dae335a70c3b53158b8fea1abdf99765206ab7478e41e7d4672/index.mjs",
    "sha256": "25cf6657eea76dae335a70c3b53158b8fea1abdf99765206ab7478e41e7d4672",
    "bytes": 298404,
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
    "at": "2026-10-09T03:28:30.547Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
