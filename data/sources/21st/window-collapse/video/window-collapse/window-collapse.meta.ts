// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/cursor",
  "tags": [
    "window",
    "close",
    "collapse",
    "cursor",
    "gag",
    "minimize",
    "desktop",
    "transition"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 60,
      "max": 300
    },
    "stretch": "hold",
    "phases": {
      "in": 26,
      "out": 0
    },
    "markers": {
      "settled": 26,
      "click": 36
    },
    "beats": [
      0,
      36,
      48
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
      "key": "image",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "heading",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "body",
      "type": "text",
      "maxChars": 220,
      "lines": 6,
      "role": "body"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "xy",
      "from": "right",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "window",
      "prop": "scale",
      "from": "1 to dots",
      "settledBy": 48,
      "easing": "ease"
    },
    {
      "target": "dots",
      "prop": "opacity",
      "settledBy": 60,
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
      "frame": 33
    },
    "hover": [
      0,
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V12 window gag: close dot collapses the window)"
  },
  "job": "backgrounds",
  "language": "product-ui",
  "mechanic": [
    "collapse"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "image": "",
    "title": "Q3 planning notes.md",
    "heading": "Things we said we would do",
    "body": "Rewrite onboarding. Ship the mobile app. Clean up the settings page. Migrate billing. Answer every support ticket within an hour. Start a newsletter. Redesign the docs.",
    "collapseAt": 36,
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "heading",
      "label": "Heading",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "body",
      "label": "Body",
      "type": "text",
      "max": 220,
      "role": "body"
    },
    {
      "key": "collapseAt",
      "label": "Collapse at",
      "type": "number",
      "step": 1,
      "min": 20,
      "max": 300
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
    }
  ],
  "name": "Window Collapse",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "window-collapse",
    "bundleSha256": "d855ec395ace9ad7a7181407c1da621cd1c98412154251edf2bfbcc3e44ddb3c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:30.434Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-paper.png",
        "sha256": "bfde38cd04e80c62e425887dca9cd7486c5dc0c43fcf62439f3bb7057750e909"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-night.png",
        "sha256": "560205f6354f56527999d9ab55813aa95c2332b0891d8fb6b5f1c375bea7d7bf"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-color.png",
        "sha256": "47c73280e335a3f10ddcb4bc9807bf9a3971802d1795404e4250bb8c82d93857"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-paper.png",
        "sha256": "99e288807a7a3207eddfb1d6d69133cdc7cbe8adeaa3612d34426040509d133b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-night.png",
        "sha256": "9fd6bbdfd088d7279ac0a62f11100dfa023030b223f7e925f2b0fed2df2ab031"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-color.png",
        "sha256": "88286c139bb3cad19b23607ca90f373b2a7bd4152de5e2248bc6b0cfa56d603a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-paper.png",
        "sha256": "20378b9f7103870165f7b1322c82991796de5f666cd15729091a24795222fad4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-night.png",
        "sha256": "580a1f88f3dde894222aee4122e61f05b5e9af83001d166a8778fe33242e7fc5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-color.png",
        "sha256": "589180b2565b674f80d83d425612f4df81ea802fbbbb14cc063e02e2a130a6a5"
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
          "window-collapse--16x9",
          "window-collapse--9x16",
          "window-collapse--1x1"
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
            "paperNight": 145.07156032986111,
            "paperColor": 12.910210503472221,
            "region": {
              "left": 165,
              "top": 35,
              "width": 1590,
              "height": 1045
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.82473415798611,
            "paperColor": 14.411214192708334,
            "region": {
              "left": 12,
              "top": 96,
              "width": 1056,
              "height": 1775
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 136.15546332465277,
            "paperColor": 14.181559244791666,
            "region": {
              "left": 20,
              "top": 136,
              "width": 1040,
              "height": 846
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
            "occupancy": 1.0770482961703203,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1356117003128414,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0770482961703203,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.203106628453851,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2810872805912492,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.203106628453851,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9962068103418781,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0690490187844688,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9962068103418781,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 19.76171875,
        "frames": [
          4,
          33,
          74
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 19.76171875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-60-frame-4.png",
                "sha256": "81e8493d72e158a886c4a36e4ec30c9fa6c8610462e27d0be2f1f7542b730f19",
                "alphaMass": 276038
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-60-frame-33.png",
                "sha256": "538292f9f0667dca2229c23c44393abffac3fbe542c38dce962e290f6275f55c",
                "alphaMass": 417670
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-60-frame-52.png",
                "sha256": "e5ce6932c1451c4afd6eca7f4f50db90366f67bd3657ae3ce43e64adb7bcd794",
                "alphaMass": 710
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-60-frame-59.png",
                "sha256": "d683a3f8f4b95cd5519509a293202044fecc8d3a705c39f7697e694632a2823a",
                "alphaMass": 710
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 300,
            "averageChannelDifference": 19.76171875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-300-frame-4.png",
                "sha256": "81e8493d72e158a886c4a36e4ec30c9fa6c8610462e27d0be2f1f7542b730f19",
                "alphaMass": 276038
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-300-frame-33.png",
                "sha256": "538292f9f0667dca2229c23c44393abffac3fbe542c38dce962e290f6275f55c",
                "alphaMass": 417670
              },
              {
                "frame": 264,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-300-frame-264.png",
                "sha256": "e1872089abd9e0f3118f45de9c49b3985bc24514a3db8606b0d8046b6a443227",
                "alphaMass": 715
              },
              {
                "frame": 299,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/16x9-duration-300-frame-299.png",
                "sha256": "e1872089abd9e0f3118f45de9c49b3985bc24514a3db8606b0d8046b6a443227",
                "alphaMass": 715
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 29.74045138888889,
            "retainedAlpha": 0.9775357385976855,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-60-frame-4.png",
                "sha256": "883d0ed5f3f1c37f114d6a56fde4462c28782cf9eba23ba994017d9f7e409354",
                "alphaMass": 309262
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-60-frame-33.png",
                "sha256": "55ab49b24128a0e8109190e48cbc08760a386535d16bf6480ec902ba882f4586",
                "alphaMass": 466551
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-60-frame-52.png",
                "sha256": "5b46695f0d1af573e21755a1c1234d1574c3d2fd8faf95b15e5957853d9e8aaa",
                "alphaMass": 1469
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-60-frame-59.png",
                "sha256": "a0af7f42abe3f9049245bc8ce91e750859316572ead5f993a470ba1b15d70a79",
                "alphaMass": 1436
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 300,
            "averageChannelDifference": 29.74045138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-300-frame-4.png",
                "sha256": "883d0ed5f3f1c37f114d6a56fde4462c28782cf9eba23ba994017d9f7e409354",
                "alphaMass": 309262
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-300-frame-33.png",
                "sha256": "55ab49b24128a0e8109190e48cbc08760a386535d16bf6480ec902ba882f4586",
                "alphaMass": 466551
              },
              {
                "frame": 264,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-300-frame-264.png",
                "sha256": "d67073034558ff16ab03dce2fe4563aad596e40bb8b80e1116a530cad17a3011",
                "alphaMass": 1413
              },
              {
                "frame": 299,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/9x16-duration-300-frame-299.png",
                "sha256": "d67073034558ff16ab03dce2fe4563aad596e40bb8b80e1116a530cad17a3011",
                "alphaMass": 1413
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 24.273763020833332,
            "retainedAlpha": 0.9794344473007712,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-60-frame-4.png",
                "sha256": "c083c1c10165abe61d4ed28d390cce0b16daac5e419110f686992e74dd84549b",
                "alphaMass": 253484
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-60-frame-33.png",
                "sha256": "688387719dbf046e6d9c06b25e92aaa215d7108b42546c8d0b2f9e7136f8c901",
                "alphaMass": 382827
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-60-frame-52.png",
                "sha256": "0c234a8ec9235b047b7961db11312b6bba5818e7771f6a20c5c9502aca58f0de",
                "alphaMass": 778
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-60-frame-59.png",
                "sha256": "f881fcdef798d3a19b48b520e278e8c83a982ba1bef854cc3d9dd6775647c0a2",
                "alphaMass": 762
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 300,
            "averageChannelDifference": 24.273763020833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-300-frame-4.png",
                "sha256": "c083c1c10165abe61d4ed28d390cce0b16daac5e419110f686992e74dd84549b",
                "alphaMass": 253484
              },
              {
                "frame": 33,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-300-frame-33.png",
                "sha256": "688387719dbf046e6d9c06b25e92aaa215d7108b42546c8d0b2f9e7136f8c901",
                "alphaMass": 382827
              },
              {
                "frame": 264,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-300-frame-264.png",
                "sha256": "7fecdc5196010e5d52ef16845c773b9c6b3239c1a001b689677cf024347f5bba",
                "alphaMass": 777
              },
              {
                "frame": 299,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/window-collapse/1x1-duration-300-frame-299.png",
                "sha256": "7fecdc5196010e5d52ef16845c773b9c6b3239c1a001b689677cf024347f5bba",
                "alphaMass": 777
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A window collapses away to an empty stage; a transition."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d855ec395ace9ad7a7181407c1da621cd1c98412154251edf2bfbcc3e44ddb3c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.969693Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/window-collapse/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/window-collapse/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/window-collapse/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 33,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "7be720ed2d768197f1c7689341bfa67b9372bc1c46633ab2d3eb253d43a4fb2e",
        "loop": "49d46d7bb5ddc0429459e6fb4dad20355b401f155f82562eff79d3c3a7857202",
        "detail": "ca67254295b60211ef52d117e3337f21142b1c6363470cf9c7f49cdc67c42ead"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/window-collapse/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/window-collapse/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/window-collapse/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 33,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "b9742cec689f704bddc75f822e8a784360701af1219b1a45223f9e520ce70125",
        "loop": "7156fd8e9944b1be517b696dea4723674b96365ff6c047823fefc5ca2d18dccb",
        "detail": "10351248e160d07315a4b655d24bfe4df31f656714a69238e8dd69f71d2355fe"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/window-collapse/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/window-collapse/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/window-collapse/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 33,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "4f314050b485eddb40c2bb0236f2c6e370797974b266df3434087cc7a37d7307",
        "loop": "3cb4587d207265e49a8011ccf5a349da52b353d2956683cf162dcb900196f77f",
        "detail": "8e72f0a3744cb07f7607fa27b6f82329ce8b354ab466ae61e57640a395816b00"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d855ec395ace9ad7a7181407c1da621cd1c98412154251edf2bfbcc3e44ddb3c/index.mjs",
    "sha256": "d855ec395ace9ad7a7181407c1da621cd1c98412154251edf2bfbcc3e44ddb3c",
    "bytes": 172525,
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
    "at": "2026-10-07T02:25:38.950Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
