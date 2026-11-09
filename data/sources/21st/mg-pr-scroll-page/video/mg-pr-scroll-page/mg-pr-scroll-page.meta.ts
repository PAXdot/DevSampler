// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "page-scroll-to-feature"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "page-scroll-to-feature",
    "landing-page",
    "scroll",
    "website"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 81,
      "out": 0
    },
    "markers": {
      "settled": 81
    },
    "beats": [
      0,
      20,
      41,
      61,
      81
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
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "feature",
      "type": "text",
      "maxChars": 28,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "page-scroll-to-feature",
      "prop": "transform",
      "from": "enter",
      "settledBy": 81,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#151619",
    "accent": "#FF5A2B",
    "secondary": "#787A7E",
    "paper": "#F6D9C4",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "lumen.app",
    "headline": "Scroll straight to what is new",
    "feature": "Live canvas, new in 2.0",
    "cta": "Try Lumen free"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "feature",
      "label": "Feature",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Landing Page Scroll",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-scroll-page",
    "bundleSha256": "1b2270e7859f9c0d40cb73049a8bd6c018f654260bc4c106c7cec0abbf90a3b0",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:51:42.153Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-paper.png",
        "sha256": "a28a2668c422c95396ba344adaa401261f0fba56344ce142bbc60fc2ddb97d03"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-night.png",
        "sha256": "e0edc0ea4b09175f868cf28124e3e53845776b9a1ae550fcedffad93d1d110af"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-color.png",
        "sha256": "34c916311763ceff06fa781ede17e2982d07b1738ea5814e11a0ebc3ba4a2d69"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-paper.png",
        "sha256": "2387782d66ea60f201a089cf08a412a98454f66d0c2c2907ebebf432864a0d96"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-night.png",
        "sha256": "81232e3d507b08660aeb89584daaaf5e96408183272294791aea25aae4dc88d1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-color.png",
        "sha256": "cc9cebcc5208bf6893e1c71e00b8a2262d55cc3a4396ae2682a01b0c686b1504"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-paper.png",
        "sha256": "6d334438b3cc25299aa46300945eee4a0ead8200eead8df74b4477c4c7d05ca8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-night.png",
        "sha256": "b7bb46d5ff4a5ad59e1d5a639e578d11da8a682bb3919763b0d0e98c70c7e780"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-color.png",
        "sha256": "e19bdcd426420b5737b0f0da14afaf0cc64b5cff89eef5a8a5f1689a6a894a3f"
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
          "mg-pr-scroll-page--16x9",
          "mg-pr-scroll-page--9x16",
          "mg-pr-scroll-page--1x1"
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
            "paperNight": 7.968587239583333,
            "paperColor": 3.8121744791666665,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.81979709201389,
            "paperColor": 11.090196397569445,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1570
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 13.77587890625,
            "paperColor": 6.744113498263889,
            "region": {
              "left": 35,
              "top": 63,
              "width": 1010,
              "height": 996
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
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1581455498866216,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2222910426173215,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2222910426173215,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2222910426173215,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 59.62315538194444,
        "frames": [
          12,
          81,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 59.708224826388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-90-frame-10.png",
                "sha256": "f4b5cf50aca0cf0cafe5ef60bbe1b079711713d99bfb87fe498ac6f0c2e0afe2",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-90-frame-81.png",
                "sha256": "77cb81cb05a195bc5f2206d0574a22b6ed730f79ad0d8576a17ed2ed819000ff",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-90-frame-79.png",
                "sha256": "a457bd721359e4e08347647ef2029774c252642d7ce2537e1ba8c8ff0d4e65b8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-90-frame-89.png",
                "sha256": "77cb81cb05a195bc5f2206d0574a22b6ed730f79ad0d8576a17ed2ed819000ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 59.62315538194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-900-frame-12.png",
                "sha256": "6e0f3df3a82036c5d5c6cca66ff7a31df451fc796770fe1132bef81432529804",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-900-frame-81.png",
                "sha256": "a457bd721359e4e08347647ef2029774c252642d7ce2537e1ba8c8ff0d4e65b8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-900-frame-792.png",
                "sha256": "77cb81cb05a195bc5f2206d0574a22b6ed730f79ad0d8576a17ed2ed819000ff",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/16x9-duration-900-frame-899.png",
                "sha256": "77cb81cb05a195bc5f2206d0574a22b6ed730f79ad0d8576a17ed2ed819000ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 54.152994791666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-90-frame-10.png",
                "sha256": "f5290b9628e0a19efa7fd5f66557f7844f0ea5a3555744e8513889068c459409",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-90-frame-81.png",
                "sha256": "cb3f258a0381fbd223204cbdcb03a7e5e208b115cf1d7925edf29cf7149c1ad2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-90-frame-79.png",
                "sha256": "65c20b96d9bc9af1629d93a2453fee6ae71dc4755dca48ba4d357c7ea067b94c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-90-frame-89.png",
                "sha256": "65c20b96d9bc9af1629d93a2453fee6ae71dc4755dca48ba4d357c7ea067b94c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 53.988606770833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-900-frame-12.png",
                "sha256": "9814787d804d1ff91253f2e7294344e7e2ece6084fdace401f9f7aa7c7561afb",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-900-frame-81.png",
                "sha256": "65c20b96d9bc9af1629d93a2453fee6ae71dc4755dca48ba4d357c7ea067b94c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-900-frame-792.png",
                "sha256": "cb3f258a0381fbd223204cbdcb03a7e5e208b115cf1d7925edf29cf7149c1ad2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/9x16-duration-900-frame-899.png",
                "sha256": "65c20b96d9bc9af1629d93a2453fee6ae71dc4755dca48ba4d357c7ea067b94c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 69.95442708333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-90-frame-10.png",
                "sha256": "2c47d12343561ff1feb44b0a5d1a8f210b535043002bb89bedbf57c2a04d4171",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-90-frame-81.png",
                "sha256": "0605afc09f335a68e8ea12ee3b67aee8c27697d63d520fb1b630a4f60fd960f8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-90-frame-79.png",
                "sha256": "0605afc09f335a68e8ea12ee3b67aee8c27697d63d520fb1b630a4f60fd960f8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-90-frame-89.png",
                "sha256": "81efabc4d7336a7c69c6253122507cacdd22bb4e432a2de27dd1a493b4eaf602",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 69.79926215277777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-900-frame-12.png",
                "sha256": "efc608a2f48bc99e2ba305c40341fa750af5173530c0b767fce087d5e9c968e7",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-900-frame-81.png",
                "sha256": "0605afc09f335a68e8ea12ee3b67aee8c27697d63d520fb1b630a4f60fd960f8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-900-frame-792.png",
                "sha256": "0605afc09f335a68e8ea12ee3b67aee8c27697d63d520fb1b630a4f60fd960f8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-scroll-page/1x1-duration-900-frame-899.png",
                "sha256": "0605afc09f335a68e8ea12ee3b67aee8c27697d63d520fb1b630a4f60fd960f8",
                "alphaMass": 587520
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
        "note": "A landing page scrolls to a Live canvas section highlighted in coral on a peach backdrop."
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
      "bundleSha256": "1b2270e7859f9c0d40cb73049a8bd6c018f654260bc4c106c7cec0abbf90a3b0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/16x9/detail.mp4",
      "bg": "#f9e8db",
      "posterFrame": 81,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2570da93e4ee1ac0c7e3c7c0815e8d780513e58de8a23c440594b457f1da5ba5",
        "loop": "3d9e18777a90d808780fcd1c1ae007be66b6a2be04a4d90f9e025c30fd14294c",
        "detail": "bd93cb9943a28cba6d5d2052cc8f978fd6eafbea0b5f694fc7c636096f75b93a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/9x16/detail.mp4",
      "bg": "#f9e8db",
      "posterFrame": 81,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0c40337459026eaf7e2785b4e74be1dd5672dbf0e84298ca1c9e7f31438fe993",
        "loop": "1928401df3fbae22f9ce423f2b8e1a029ab50cf75dccfa670745e9abc9268a33",
        "detail": "c500d555129670d48ad11508bc267b542cff0b29416bbdb485dd793bcf4e6438"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-scroll-page/1x1/detail.mp4",
      "bg": "#f9e8db",
      "posterFrame": 81,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ee6a8bebc20d7c2d5e62596b81d510f6d2369339f6df206708a4d15efdacedba",
        "loop": "61c8df196390201c36331529f298e43e35309cf83e0c8a3ba7ce834cdfd28c92",
        "detail": "cf186998eb76e238cd02b944430df37284248276e111571696fae7b2a2a18cf0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1b2270e7859f9c0d40cb73049a8bd6c018f654260bc4c106c7cec0abbf90a3b0/index.mjs",
    "sha256": "1b2270e7859f9c0d40cb73049a8bd6c018f654260bc4c106c7cec0abbf90a3b0",
    "bytes": 180098,
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
    "at": "2026-10-09T04:06:43.154Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
