// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "camera/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "focus",
    "zoom",
    "spotlight",
    "screenshot",
    "detail"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 111,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 100
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
      "key": "image",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 60,
      "lines": 1,
      "role": "headline"
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
      "settledBy": 100,
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
    "image": "",
    "label": "Bring the important detail into focus",
    "focusX": 0.68,
    "focusY": 0.46,
    "zoom": 2,
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 60,
      "role": "headline"
    },
    {
      "key": "focusX",
      "label": "Focus x",
      "type": "number",
      "min": 0.2,
      "max": 0.8
    },
    {
      "key": "focusY",
      "label": "Focus y",
      "type": "number",
      "min": 0.2,
      "max": 0.8
    },
    {
      "key": "zoom",
      "label": "Zoom",
      "type": "number",
      "min": 1.2,
      "max": 3
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
  "name": "Product Focus Zoom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "focus-zoom",
    "bundleSha256": "3b1576b118077a0cb1f4537cbbf2333872dabc312ae0cfcceef4bf1defc47a3e",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:51:25.923Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-paper.png",
        "sha256": "58062de0fe824433733474f5b934ac3a36e330520a09c6b9bdb84a4fa7c121b2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-night.png",
        "sha256": "84aabe751891b5aa45f70765d19e83bc684b5bce26cde5f2debac012e5d43de4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-color.png",
        "sha256": "c43a3e17e3fc749b93fcbd74293b4403821281b17f763151d1effa9094ad12f0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-paper.png",
        "sha256": "dd5dcd23ec7375790619588976cd69ccdcb672561ee9f922f3fa63ac078f6d5a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-night.png",
        "sha256": "ebbad5e837defc6c7ee583877499bc16eb26b1799e82fa27075c384681bd884b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-color.png",
        "sha256": "3e9a70d3b16a16c981834f56e8346e5e381c4ef16989a63165b27717bdf3e46c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-paper.png",
        "sha256": "598732c98b4153dd3b5927d5ded962a75120aed7274e6057fe2e01949d4d1fd4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-night.png",
        "sha256": "c681554ed375696ab70f1406fc6917da1dd05f6df20fce866c9d8436f6e3df10"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-color.png",
        "sha256": "bee3541ee4be006d3b1d23261cdffcf9425ce3b5533bbde8afc6f5e73eb31a68"
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
          "focus-zoom--16x9",
          "focus-zoom--9x16",
          "focus-zoom--1x1"
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
            "paperNight": 131.09475368923611,
            "paperColor": 11.56640625,
            "region": {
              "left": 49,
              "top": 92,
              "width": 1822,
              "height": 862
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 126.35172526041667,
            "paperColor": 13.051812065972221,
            "region": {
              "left": 5,
              "top": 185,
              "width": 1070,
              "height": 1509
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 126.22976345486111,
            "paperColor": 12.026231553819445,
            "region": {
              "left": 7,
              "top": 92,
              "width": 1066,
              "height": 862
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
            "occupancy": 1.0208975243904148,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.073425930300104,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0063479159667985,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0441394439720335,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1035435103825484,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0153887944066518,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0414868393630887,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1164991259421009,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0266437965218096,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.211805555555555,
        "frames": [
          15,
          100,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 111,
            "averageChannelDifference": 11.211805555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-111-frame-13.png",
                "sha256": "2a65ce1c8e36d790ce883682766ae6b2be49ad34f1dede398740d7e7696134cc",
                "alphaMass": 368916
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-111-frame-100.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-111-frame-97.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-111-frame-110.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.211805555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-900-frame-15.png",
                "sha256": "2a65ce1c8e36d790ce883682766ae6b2be49ad34f1dede398740d7e7696134cc",
                "alphaMass": 368916
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-900-frame-100.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-900-frame-792.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/16x9-duration-900-frame-899.png",
                "sha256": "8156feaefb1ad17fc16dfe4abf8a6a9abeb9b7d02d367ed76c342c20d6a643ee",
                "alphaMass": 371982
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 111,
            "averageChannelDifference": 17.58474392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-111-frame-13.png",
                "sha256": "4d0db3250cd83e2d2dba5de60f94a7d1d5dd44a44ee311f919137d63514e8fbe",
                "alphaMass": 366246
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-111-frame-100.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-111-frame-97.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-111-frame-110.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.58474392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-900-frame-15.png",
                "sha256": "4d0db3250cd83e2d2dba5de60f94a7d1d5dd44a44ee311f919137d63514e8fbe",
                "alphaMass": 366246
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-900-frame-100.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-900-frame-792.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/9x16-duration-900-frame-899.png",
                "sha256": "7f0c28b3400f2382a4723f6fd32c1aafb62951f58eda41d9f1e8dfc25733a64a",
                "alphaMass": 371692
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 111,
            "averageChannelDifference": 15.691297743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-111-frame-13.png",
                "sha256": "fb8808cefafa893bb59b6f3f722e048ef35a649fcd3bb4f0826dae3a3283a740",
                "alphaMass": 370102
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-111-frame-100.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-111-frame-97.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-111-frame-110.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.691297743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-900-frame-15.png",
                "sha256": "fb8808cefafa893bb59b6f3f722e048ef35a649fcd3bb4f0826dae3a3283a740",
                "alphaMass": 370102
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-900-frame-100.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-900-frame-792.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/focus-zoom/1x1-duration-900-frame-899.png",
                "sha256": "3d3fd9085555ad00a923e7688dcd7fadbf103c408216ae3649d4c812d1745436",
                "alphaMass": 375522
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
        "note": "The chart region grows into a framed loupe over the dimmed app and stays crisp; product UI focus."
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
      "bundleSha256": "3b1576b118077a0cb1f4537cbbf2333872dabc312ae0cfcceef4bf1defc47a3e",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.019596Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/focus-zoom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/focus-zoom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/focus-zoom/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7f3b6280c465b97ead3ca49d5637a295b5bf8852710fe152a956a4598265d33a",
        "loop": "6f07bd41a84319bc52c2f193f7f1b51524eed2baec5c55f2c367abf927b08b69",
        "detail": "21e72997a4ba2dff2b4348f510d03171664a86945eef589a3120227a978997c0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/focus-zoom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/focus-zoom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/focus-zoom/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "bbf006325079ee72f73c698b12b7472c654ca93ef6185a3f43d9bc22ddbb65f2",
        "loop": "4de9bb83cd506c557d0dfaf09e5ef8ee3e1eb469b86da0cddea4835e807adebb",
        "detail": "0efd5dce00dd411662e48aabaaa77b64bcf4e412b12fc0c17ad67188d8f49b81"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/focus-zoom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/focus-zoom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/focus-zoom/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9a312aca401955ddf56af154408688b488b0b5f4b73d9e6c8ec48d6f6538ef98",
        "loop": "c4ce9fe0455d6f1ea6c11a135a9313b6235c50ae59fbe3d6e4afc4cc4083243c",
        "detail": "38e9b4343f97b69c1ec19d0cc35f23d6d8d8777fcfda0c3bb328f317ee2dd0a0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3b1576b118077a0cb1f4537cbbf2333872dabc312ae0cfcceef4bf1defc47a3e/index.mjs",
    "sha256": "3b1576b118077a0cb1f4537cbbf2333872dabc312ae0cfcceef4bf1defc47a3e",
    "bytes": 173600,
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
    "at": "2026-10-07T04:55:39.978Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
