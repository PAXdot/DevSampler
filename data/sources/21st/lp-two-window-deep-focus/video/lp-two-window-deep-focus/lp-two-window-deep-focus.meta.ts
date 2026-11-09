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
    "two-window-deep-focus",
    "product-proof",
    "two-window-deep-focus",
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
    },
    {
      "key": "from",
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
    "title": "Keep the right window in focus",
    "subtitle": "Trade focus between the source and its working result.",
    "items": [
      "Source workspace",
      "Focused result",
      "Detail preserved"
    ],
    "screenshot": "",
    "from": "",
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
    },
    {
      "key": "from",
      "label": "From",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Window-to-window focus rack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-two-window-deep-focus",
    "bundleSha256": "9a7c3578e9fbbfd0deff127aa1bdaacbc65c0a817d34bf6296a6a89e5a5f0870",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:21.847Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-paper.png",
        "sha256": "992b6c2054be9ea4dfb05aae7a004adcaa05af92f5b6f2e76729ea322f68a9c5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-night.png",
        "sha256": "d08f512835b777e0397e9ccd4e782e2f1cc30259d55c8d60c2e2ba6b47304323"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-color.png",
        "sha256": "89f6ff45e504ece2bb623cbad6d84773ad9304d66cc81d18a083f5244ba83166"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-paper.png",
        "sha256": "13346fc8ff6352a5ce686f8e22a3856ec0f3763c36f1a5b656965477ebd273d6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-night.png",
        "sha256": "4e55b82e129c9cf10b3bc5b827d24bcaffd06f5b61b66f307088378f305c29a8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-color.png",
        "sha256": "afe30e7ddbd92dacf8d1ad84f4c1024042e1a20d9640e2ff7579ca9b2ede51ca"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-paper.png",
        "sha256": "48a6478eef068390bab25a3a9f23e7967c655821a5f45b2b5845ef1aa25436a8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-night.png",
        "sha256": "96533c95f06beafb2ac5f5494c5878aa70d6057a2b58448b22c8a767532c0821"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-color.png",
        "sha256": "090067c43828c351a5c8f51f1a1a90ebf5fbefbdfd4d89a7ce92c733a8689d87"
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
          "lp-two-window-deep-focus--16x9",
          "lp-two-window-deep-focus--9x16",
          "lp-two-window-deep-focus--1x1"
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
            "paperNight": 111.84101019965277,
            "paperColor": 9.391465928819445,
            "region": {
              "left": 152,
              "top": 107,
              "width": 1623,
              "height": 860
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 123.53225368923611,
            "paperColor": 11.089952256944445,
            "region": {
              "left": 84,
              "top": 191,
              "width": 919,
              "height": 1512
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 108.45014105902777,
            "paperColor": 9.58327907986111,
            "region": {
              "left": 84,
              "top": 107,
              "width": 919,
              "height": 860
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
            "occupancy": 0.9539671385529522,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9539671385529522,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9539671385529522,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.949694113756614,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.949694113756614,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.949694113756614,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9603021020936955,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9603021020936955,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9603021020936955,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 54.055989583333336,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 55.32573784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-150-frame-18.png",
                "sha256": "3b173a034d301a9901c6a6936a29e37cb9b02e3d57749f141b2e87506df6f8c5",
                "alphaMass": 181488
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-150-frame-132.png",
                "sha256": "5ea44d7225070bc5b31d3b111a585fe06a43f32935fa06cec2c794893bc6e59c",
                "alphaMass": 225178
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-150-frame-149.png",
                "sha256": "5ea44d7225070bc5b31d3b111a585fe06a43f32935fa06cec2c794893bc6e59c",
                "alphaMass": 225178
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 54.055989583333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-900-frame-19.png",
                "sha256": "d21e552265eef3a2469e4becae410e17484374e7d8260e1a6621415c6ee8b9f3",
                "alphaMass": 181917
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-900-frame-132.png",
                "sha256": "5ea44d7225070bc5b31d3b111a585fe06a43f32935fa06cec2c794893bc6e59c",
                "alphaMass": 225178
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-900-frame-792.png",
                "sha256": "5ea44d7225070bc5b31d3b111a585fe06a43f32935fa06cec2c794893bc6e59c",
                "alphaMass": 225178
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/16x9-duration-900-frame-899.png",
                "sha256": "5ea44d7225070bc5b31d3b111a585fe06a43f32935fa06cec2c794893bc6e59c",
                "alphaMass": 225178
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 52.971028645833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-150-frame-18.png",
                "sha256": "71532321d71b6c95c8e50155f638d744de777b41f15bc6c4063d9809ce45345b",
                "alphaMass": 227010
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-150-frame-132.png",
                "sha256": "f9dc3359732b3a9de7f0e52d7f7d490994199991b73bbd82c81092428f333421",
                "alphaMass": 275501
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-150-frame-149.png",
                "sha256": "f9dc3359732b3a9de7f0e52d7f7d490994199991b73bbd82c81092428f333421",
                "alphaMass": 275501
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 52.88823784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-900-frame-19.png",
                "sha256": "69d99c07993a9f6d5329942e91a1046e9055caea2bb3908343b5205e509d9d2d",
                "alphaMass": 227426
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-900-frame-132.png",
                "sha256": "f9dc3359732b3a9de7f0e52d7f7d490994199991b73bbd82c81092428f333421",
                "alphaMass": 275501
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-900-frame-792.png",
                "sha256": "f9dc3359732b3a9de7f0e52d7f7d490994199991b73bbd82c81092428f333421",
                "alphaMass": 275501
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/9x16-duration-900-frame-899.png",
                "sha256": "f9dc3359732b3a9de7f0e52d7f7d490994199991b73bbd82c81092428f333421",
                "alphaMass": 275501
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 56.94140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-150-frame-18.png",
                "sha256": "398e9dca18f0ad7cf1e3c2d9fa0bc6377652813d38840acd506b0829cadc6eef",
                "alphaMass": 181775
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-150-frame-132.png",
                "sha256": "e10b97adf4a2958bc7cd517af4ec4eca6c759c830a0d07e36712463939ff2b73",
                "alphaMass": 225511
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-150-frame-149.png",
                "sha256": "e10b97adf4a2958bc7cd517af4ec4eca6c759c830a0d07e36712463939ff2b73",
                "alphaMass": 225511
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 55.77398003472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-900-frame-19.png",
                "sha256": "b1127a49919e31cb1e3c1a5217b445a247cd21f001b3ccb0beea1b246799c58c",
                "alphaMass": 182208
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-900-frame-132.png",
                "sha256": "e10b97adf4a2958bc7cd517af4ec4eca6c759c830a0d07e36712463939ff2b73",
                "alphaMass": 225511
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-900-frame-792.png",
                "sha256": "e10b97adf4a2958bc7cd517af4ec4eca6c759c830a0d07e36712463939ff2b73",
                "alphaMass": 225511
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-two-window-deep-focus/1x1-duration-900-frame-899.png",
                "sha256": "e10b97adf4a2958bc7cd517af4ec4eca6c759c830a0d07e36712463939ff2b73",
                "alphaMass": 225511
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
        "note": "A focused result window rises over its source workspace with a brand-blue Detail preserved bar."
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
      "bundleSha256": "9a7c3578e9fbbfd0deff127aa1bdaacbc65c0a817d34bf6296a6a89e5a5f0870",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "42bbf295f76b30e664dca850bf517eb2e96510d89eb02827477502160d7f9671",
        "loop": "fad4b127263720b2176c49cc40f44b40cb1eaac381d82d27f6ee9900270d85f4",
        "detail": "e19104e7907397e1f6a3ec461bc0a423238ae319a857bb6511724b2cc832ec8d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "48a29a12db833fd38bb84d04b3a3903c839b6be63aafa191f483276d5555f21f",
        "loop": "a639900578bb02102c1721cbb06e347dfa3a0e80cec520084c4fb5db18f94543",
        "detail": "8d63613e0d716e884743e4c00cb1ce61917ba36e97450c9b7a8fa1328f9c4676"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-two-window-deep-focus/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3a551c1ea43582c0ebfeaf1480d2eed9eb3f35cae8bb8738e4a3b6043d149a12",
        "loop": "4028e1f35350aaf55620a9872d3638b16ad69f03da90ac51acbcee3d1aee716c",
        "detail": "697f222eb0d86c3993f36058ceabd785de14218bbb4824c5c7e0a7e56c41afa1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9a7c3578e9fbbfd0deff127aa1bdaacbc65c0a817d34bf6296a6a89e5a5f0870/index.mjs",
    "sha256": "9a7c3578e9fbbfd0deff127aa1bdaacbc65c0a817d34bf6296a6a89e5a5f0870",
    "bytes": 298429,
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
    "at": "2026-10-09T03:37:07.985Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
