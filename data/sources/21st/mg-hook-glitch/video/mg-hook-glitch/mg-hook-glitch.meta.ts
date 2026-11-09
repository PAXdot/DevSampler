// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "rgb-glitch-collapse-to-logo"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "rgb-glitch-collapse-to-logo",
    "hook",
    "glitch",
    "logo",
    "error"
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
      "in": 114,
      "out": 0
    },
    "markers": {
      "settled": 114
    },
    "beats": [
      0,
      29,
      57,
      86,
      114
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
      "key": "error",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 10,
      "role": "name"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "rgb-glitch-collapse-to-logo",
      "prop": "transform",
      "from": "enter",
      "settledBy": 114,
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
    "ink": "#F4F4F6",
    "accent": "#FFAA6E",
    "secondary": "#FF4D5E",
    "paper": "#08080B",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "error": "Sync failed",
    "brand": "Lumen",
    "tagline": "Calm, connected work."
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
      "brand": "fonts.heading"
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
      "key": "error",
      "label": "Error",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 10,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Error Glitch To Calm",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-glitch",
    "bundleSha256": "37290f4a0d9f3a94d5f6a4c677c9e11ac3e59a31f461300335b6f2477a6a71c8",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:18.355Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-paper.png",
        "sha256": "f05b7daa9f9a6d68052396eaae9186083e326a981052162913fec5a04043a102"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-night.png",
        "sha256": "809c9822b74bcc1f2f7fcb68832f2f160ffc0775f58221eb88c80ad65ff4f074"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-color.png",
        "sha256": "8d6fb9a957472b7bb0edaf140c35581f9f7864162851ab289bece239cce5705a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-paper.png",
        "sha256": "c393c1673be12a0118cff004b6f23897cc0cac2d6e8ae98526f3572146ba0d44"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-night.png",
        "sha256": "12da8c4d2541c789a41c00b069d913fe868b63d8d686a694936bb58c7f1984a4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-color.png",
        "sha256": "f91e0523fe2ee2a77cfb8fce769e3a4515e649b43f9a8e76648397c8c2490994"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-paper.png",
        "sha256": "eabfad5185f75f3849760b4b4b2f3f311727d428246f39c078f3331353c86fa6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-night.png",
        "sha256": "73576bcb787d0c7c82650e5ad01438d90bdb95bac1d57b2c10459ffecfb96484"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-color.png",
        "sha256": "3f2993fef85f39d107e6421163530126c93c870c404a0e2047c907185fdc4348"
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
          "mg-hook-glitch--16x9",
          "mg-hook-glitch--9x16",
          "mg-hook-glitch--1x1"
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
            "paperNight": 42.568603515625,
            "paperColor": 61.64203559027778,
            "region": {
              "left": 746,
              "top": 195,
              "width": 433,
              "height": 576
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.09743923611111,
            "paperColor": 29.318929036458332,
            "region": {
              "left": 139,
              "top": 193,
              "width": 801,
              "height": 1548
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 42.71123589409722,
            "paperColor": 47.51329210069444,
            "region": {
              "left": 322,
              "top": 225,
              "width": 435,
              "height": 550
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
            "occupancy": 0.17046170319979848,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.16849332325522806,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1617413699661964,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8425342793367349,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8419868236646513,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8162502558893929,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2907005566286872,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2907005566286872,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2792985335423607,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 24.294270833333332,
        "frames": [
          17,
          114,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 24.23871527777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-90-frame-10.png",
                "sha256": "74461a0af4f22949a3f11b25966623aa286c46244d3713bbecf61ef1e888dcdc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-90-frame-89.png",
                "sha256": "58ab6bb551e0c67faea86d86259a7745049c27ded7d05649f1cc3734825ec3c5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-90-frame-79.png",
                "sha256": "58ab6bb551e0c67faea86d86259a7745049c27ded7d05649f1cc3734825ec3c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 24.294270833333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-900-frame-17.png",
                "sha256": "b6fde32c01a08e74899f9e95b09450c30f6e879f464b41147b8157219c14e7c8",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-900-frame-114.png",
                "sha256": "58ab6bb551e0c67faea86d86259a7745049c27ded7d05649f1cc3734825ec3c5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-900-frame-792.png",
                "sha256": "58ab6bb551e0c67faea86d86259a7745049c27ded7d05649f1cc3734825ec3c5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/16x9-duration-900-frame-899.png",
                "sha256": "58ab6bb551e0c67faea86d86259a7745049c27ded7d05649f1cc3734825ec3c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 34.902994791666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-90-frame-10.png",
                "sha256": "f25f6d0dd30b9e13979b3ce5e806c88bd0383eab03d7f498642ff31564b0e4a6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-90-frame-89.png",
                "sha256": "0329b57c77aea1059c01d874f88ffdf1ddd6aea5e92e9424d85bebb4eea9afb1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-90-frame-79.png",
                "sha256": "0329b57c77aea1059c01d874f88ffdf1ddd6aea5e92e9424d85bebb4eea9afb1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 35.085720486111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-900-frame-17.png",
                "sha256": "2e9658dd64cc3c8ce7bf81670ce384041db288783dc05cec1418fba0e02cdbfd",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-900-frame-114.png",
                "sha256": "0329b57c77aea1059c01d874f88ffdf1ddd6aea5e92e9424d85bebb4eea9afb1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-900-frame-792.png",
                "sha256": "0329b57c77aea1059c01d874f88ffdf1ddd6aea5e92e9424d85bebb4eea9afb1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/9x16-duration-900-frame-899.png",
                "sha256": "0329b57c77aea1059c01d874f88ffdf1ddd6aea5e92e9424d85bebb4eea9afb1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 27.001627604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-90-frame-10.png",
                "sha256": "46ca30c34af4f92b3f05051ca0e4c548b91d93eef6cc42bb45a0b174932f9b2b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-90-frame-89.png",
                "sha256": "b697f2b36c2b1009126aff1e543e5745e62d00fb443dc65a5c0d9ca3835e798a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-90-frame-79.png",
                "sha256": "b697f2b36c2b1009126aff1e543e5745e62d00fb443dc65a5c0d9ca3835e798a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 27.11252170138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-900-frame-17.png",
                "sha256": "589932b52a7beda3ef8a60305ca8070ae479b862402ffd001d94b35caf65eff2",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-900-frame-114.png",
                "sha256": "b697f2b36c2b1009126aff1e543e5745e62d00fb443dc65a5c0d9ca3835e798a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-900-frame-792.png",
                "sha256": "b697f2b36c2b1009126aff1e543e5745e62d00fb443dc65a5c0d9ca3835e798a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-hook-glitch/1x1-duration-900-frame-899.png",
                "sha256": "b697f2b36c2b1009126aff1e543e5745e62d00fb443dc65a5c0d9ca3835e798a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A sync-failed error glitches and resolves into a calm brand title over a warm coral glow on neutral dark; no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "37290f4a0d9f3a94d5f6a4c677c9e11ac3e59a31f461300335b6f2477a6a71c8",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-glitch/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-glitch/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-glitch/16x9/detail.mp4",
      "bg": "#0e0e11",
      "posterFrame": 114,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0cfff8127864090755e9e1bf7cf8d46e14a1031d8658b02d8d3ec6dcc73c3694",
        "loop": "1a32676a39c2a651e4e7aa09b707e39296132a7e0b2d6c53cefe29f38ee2c43f",
        "detail": "bdce5f9d758857f43b649237113c7b62d6412b8e13f365b8794b49528974e028"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-glitch/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-glitch/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-glitch/9x16/detail.mp4",
      "bg": "#101013",
      "posterFrame": 114,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d1efb4f495af339fc01172ea334f757097b39eec4163edeba9bb7328b2e57a2d",
        "loop": "bbdfaec163cff81ed34a76bf261489e1832c1e9345f1c00b3272d450aaa10fad",
        "detail": "6b27851bb8d438f31b01611097b6cb41d46d71a8bb0b249285f461331bf34d14"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-glitch/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-glitch/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-glitch/1x1/detail.mp4",
      "bg": "#0e0e11",
      "posterFrame": 114,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f73f14fe04cb1322cb7f53a8e689cfadd45676f213882edf11cff80740892e26",
        "loop": "1b9c972e6ab54e0ba8cd62b329852df21eebf733123b915bd8db93c4a7dbe929",
        "detail": "5ef21d2a6e8421baa18142635b5d72a02b0006f449117298a9bc68911be20765"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/37290f4a0d9f3a94d5f6a4c677c9e11ac3e59a31f461300335b6f2477a6a71c8/index.mjs",
    "sha256": "37290f4a0d9f3a94d5f6a4c677c9e11ac3e59a31f461300335b6f2477a6a71c8",
    "bytes": 207822,
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
    "at": "2026-10-09T03:57:56.745Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
