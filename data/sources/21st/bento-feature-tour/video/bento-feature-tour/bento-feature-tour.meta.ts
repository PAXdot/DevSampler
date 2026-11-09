// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "bento",
    "features",
    "tour",
    "workflow",
    "panels"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 129,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 118
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
      "key": "image1",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image3",
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
      "settledBy": 118,
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
    "headline": "One picture. Every part of the story.",
    "featureTitles": [
      "Find the starting point",
      "Shape the work",
      "Share the next step"
    ],
    "captions": [
      "Bring useful context together",
      "Make the important things clear",
      "Keep everyone moving together"
    ],
    "image1": "",
    "image2": "",
    "image3": "",
    "stepFrames": 24,
    "showProgress": true,
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
      "key": "featureTitles",
      "label": "Feature titles",
      "type": "list"
    },
    {
      "key": "captions",
      "label": "Captions",
      "type": "list"
    },
    {
      "key": "image1",
      "label": "Image 1",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "label": "Image 2",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image3",
      "label": "Image 3",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "stepFrames",
      "label": "Step frames",
      "type": "number",
      "step": 1,
      "min": 16,
      "max": 30
    },
    {
      "key": "showProgress",
      "label": "Show progress",
      "type": "boolean"
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
  "name": "Bento Feature Tour",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "bento-feature-tour",
    "bundleSha256": "21c4b7647809793d06e38542f957465ee3a58970abdb2d5933b75dfcffbe0987",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:58.502Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-paper.png",
        "sha256": "96366dd4b092fed4fb684b751f7c2abb518efdb15ecfb2a7cef3222492339c55"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-night.png",
        "sha256": "1ff1b76fdbcb166b4fd54e745b8a91f094969a8dba8598a1e51d3081dc64b7db"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-color.png",
        "sha256": "38150bdf1bc4c829b135f2b00cf10004d0fb6bf260324ec274b07f0241e05ce3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-paper.png",
        "sha256": "15a25d2af81ba83ebdfb057ae531c1f20e20eec760808eeea88f539ba1b50b1c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-night.png",
        "sha256": "cb5e3061fb12375dd89881f6ec18b12f3db2e233220bb506f00ed44240e93091"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-color.png",
        "sha256": "b2f9be075e51fde0c71da4cf409c959e93f3533cf4c9adf477e0bf786dbe8788"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-paper.png",
        "sha256": "b90ada550a399ffb2045ac458eb09887e5a9de78bfa46eee8962ae1057133ad0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-night.png",
        "sha256": "69be09b60baff9a25cb8604355c0d4be0e0e09d558e2ca15784ce9d391cd790b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-color.png",
        "sha256": "7353cfee8edf82a06a1d998f540ed44e074bf25062d271e4fac5d08e6a8561aa"
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
          "bento-feature-tour--16x9",
          "bento-feature-tour--9x16",
          "bento-feature-tour--1x1"
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
            "paperNight": 143.40614149305554,
            "paperColor": 13.28982204861111,
            "region": {
              "left": 57,
              "top": 139,
              "width": 1806,
              "height": 819
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.43527560763889,
            "paperColor": 17.97414822048611,
            "region": {
              "left": 23,
              "top": 247,
              "width": 1034,
              "height": 1442
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 144.714599609375,
            "paperColor": 14.580268012152779,
            "region": {
              "left": 23,
              "top": 139,
              "width": 1034,
              "height": 819
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
            "occupancy": 0.98844386005431,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0084543558935921,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9896522266313935,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9816146751910643,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0183591344202292,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9564276134836652,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9899347256049198,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0264469585273526,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9911449147560261,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 30.54155815972222,
        "frames": [
          17,
          118,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 129,
            "averageChannelDifference": 29.59841579861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-129-frame-15.png",
                "sha256": "5bbca2d4ee7a8a20ebf9e7c5846996761586a7bbd5ca02fb0873c3f81c9ec3d1",
                "alphaMass": 180918
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-129-frame-118.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              },
              {
                "frame": 113,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-129-frame-113.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-129-frame-128.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 30.54155815972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-900-frame-17.png",
                "sha256": "4ddf0254414bb559e7f9eff4c2683018fb2347d6ff6df0acd9f7e17c6fbf0c6c",
                "alphaMass": 175999
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-900-frame-118.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-900-frame-792.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/16x9-duration-900-frame-899.png",
                "sha256": "bcab9ab1098843b1fd65770d83c1a864e656254521bee754b05470ccbe96c0c9",
                "alphaMass": 343225
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 129,
            "averageChannelDifference": 32.65321180555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-129-frame-15.png",
                "sha256": "cd1cb0e7c7c0c57985bd3b82971b0ec9aceee52eb2164a6f2f65d0e481476a78",
                "alphaMass": 163325
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-129-frame-118.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              },
              {
                "frame": 113,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-129-frame-113.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-129-frame-128.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 33.2236328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-900-frame-17.png",
                "sha256": "22733a5be96cf55d0be9688625a044ebd0e50a7848be99e46b0560c33d0598d0",
                "alphaMass": 158973
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-900-frame-118.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-900-frame-792.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/9x16-duration-900-frame-899.png",
                "sha256": "76f926a94bc46e3940b30e90648ec749f63822a3fcccb63365e0f5d19392733e",
                "alphaMass": 345485
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 129,
            "averageChannelDifference": 34.863064236111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-129-frame-15.png",
                "sha256": "0805d91c62323b45a240d65c0660efd0f866c233f0fbfc75f59ef5a7f62f048c",
                "alphaMass": 183641
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-129-frame-118.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
              },
              {
                "frame": 113,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-129-frame-113.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-129-frame-128.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 35.496744791666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-900-frame-17.png",
                "sha256": "79f3e3e90497b3506736fcf1a6b81029159e5e1437a6c180824eff564b86629a",
                "alphaMass": 178724
              },
              {
                "frame": 118,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-900-frame-118.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-900-frame-792.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/bento-feature-tour/1x1-duration-900-frame-899.png",
                "sha256": "fdc5c3e84162757d715080815b4db7a3383f7ba1629f9dcceb7538545320120f",
                "alphaMass": 343599
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
        "note": "A bento of app panels builds up under a headline; feature tour of a product."
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
      "bundleSha256": "21c4b7647809793d06e38542f957465ee3a58970abdb2d5933b75dfcffbe0987",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.960995Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/bento-feature-tour/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bento-feature-tour/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bento-feature-tour/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 118,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4d068e861fa71f8d96fb98c4261821f6dd3fd41f52cf3faa82ef5083fec6f642",
        "loop": "8db3a7eb8ed04f3d21b8672d33127a9eeeb270ce1859b75a3d925148089e82ee",
        "detail": "ee21b39db1b9bc60d781acb5b52767491c35062e73a63fc7815c9a8ab98ea6ce"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/bento-feature-tour/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bento-feature-tour/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bento-feature-tour/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 118,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "cfa6dd733d8975ad70bca3c2bd05e12c6ea9ed4938a6d82c4d1540aeb53e0c91",
        "loop": "9a78dfee10e660b5346c08dbf6f6fa1e635476073668614bc69cbf7295a228fa",
        "detail": "116b3f4bde3a4d671be086a0550688515537d919bcdce98d09d65aaf1cb8ca4b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/bento-feature-tour/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bento-feature-tour/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bento-feature-tour/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 118,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "36000f07204975ae8a0929c2214a79595538d00096e7ed452ccb07b15468bb06",
        "loop": "150a248c068cc639bec5bfaac6092b756742d9ed1851927718930eeb4b661da7",
        "detail": "a407b07f6953204c687d967833cd317287683cd41014f9a6f45a28b2573914f3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/21c4b7647809793d06e38542f957465ee3a58970abdb2d5933b75dfcffbe0987/index.mjs",
    "sha256": "21c4b7647809793d06e38542f957465ee3a58970abdb2d5933b75dfcffbe0987",
    "bytes": 174130,
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
    "at": "2026-10-07T02:24:33.151Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
