// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "comet",
    "trail",
    "motion trail",
    "feature tour",
    "onboarding",
    "cards",
    "fast",
    "click"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 126,
      "min": 80,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102,
      "tour": 20,
      "land": 62,
      "click": 68
    },
    "beats": [
      0,
      20,
      33,
      46,
      62,
      68
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
      "key": "headline",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "titles",
      "type": "list",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "captions",
      "type": "list",
      "maxChars": 30,
      "lines": 2,
      "role": "body"
    },
    {
      "key": "buttonLabel",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "cta"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cards",
      "prop": "rise",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "left",
      "settledBy": 86,
      "easing": "ease"
    },
    {
      "target": "trail",
      "prop": "length",
      "settledBy": 96,
      "easing": "linear"
    },
    {
      "target": "icons",
      "prop": "fill",
      "settledBy": 68,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "fill",
      "settledBy": 80,
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
      126
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (comet cursor streaks across a feature tour and lands on Try it, 2026-10-07)"
  },
  "job": "cursors",
  "language": "kinetic-poster",
  "mechanic": [
    "trail"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "headline": "Tour it in ten seconds",
    "titles": [
      "Pick a block",
      "Drop your brand",
      "Tune the timing",
      "Export"
    ],
    "captions": [
      "Scenes for every launch",
      "Colors and fonts in one click",
      "Every beat lands on a grid",
      "MP4 or GIF in any format"
    ],
    "buttonLabel": "Try it",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "titles",
      "label": "Titles",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "captions",
      "label": "Captions",
      "type": "list",
      "max": 4,
      "role": "body"
    },
    {
      "key": "buttonLabel",
      "label": "Button label",
      "type": "text",
      "max": 12,
      "role": "cta"
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
    }
  ],
  "name": "Comet Trail Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-comet",
    "bundleSha256": "26932b565a5fda2794777711fe0dd9f812dfb011e0a7a48a6c2d75cbe7ae5346",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:22.096Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-paper.png",
        "sha256": "b883c7d52ffdbfe30a06d7a6de080621be2d72b0dbcd3272baac671c0fa860a6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-night.png",
        "sha256": "a4e5f13388b2fcf890cb49f75d494b2b2f1a335fa444bc5f612cd1bd4b4147a0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-color.png",
        "sha256": "883eac8cdb7fac7ad83482744a3f93d3050767ba317a935c76a8eb17f3653648"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-paper.png",
        "sha256": "063cb7ba4dcdf58488426782410f5450d35054e936f35189cbb0853b63e513b2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-night.png",
        "sha256": "d1a366d5a2dec6ed474cd456bd739ac5cd8018c2f670d89c9b4d6c6385adb8f5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-color.png",
        "sha256": "0a4c318253f40ad419412ca49a2c74f7d5bd1ee792e7eecd3d078d508de8dbb8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-paper.png",
        "sha256": "66baf325e954021f89f565b801bad14386b01701a1652e52a14b192c3156a454"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-night.png",
        "sha256": "2c5bd2a1604ae4e595ad67517cafdf6222410d39d78d66b1c349f9024a76103f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-color.png",
        "sha256": "e4a134c8e4b64e8e00798df839053574f1c639784d4457d1910cbe12a99789f9"
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
          "cursor-comet--16x9",
          "cursor-comet--9x16",
          "cursor-comet--1x1"
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
            "paperNight": 87.06906467013889,
            "paperColor": 15.45193142361111,
            "region": {
              "left": 66,
              "top": 232,
              "width": 1793,
              "height": 700
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 90.0517578125,
            "paperColor": 18.51852756076389,
            "region": {
              "left": 16,
              "top": 361,
              "width": 1055,
              "height": 1328
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 104.14553493923611,
            "paperColor": 17.2958984375,
            "region": {
              "left": 27,
              "top": 103,
              "width": 1031,
              "height": 952
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
            "occupancy": 0.8211131112038439,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8553663395656619,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8223153265936006,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9149344376382242,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9546779424218249,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9163259729045942,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1387199484274737,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.188827368510276,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1411427568283832,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.7132161458333335,
        "frames": [
          15,
          102,
          125
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 80,
            "averageChannelDifference": 2.7145182291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-80-frame-9.png",
                "sha256": "ad4111a632e0ec84261fd11d36e9fc11f66df509e437ea883c72499dcc17f750",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-80-frame-79.png",
                "sha256": "48a4b6405c646e31070f84d2fafa8000499fa3e45f6b8b0d386cc3ed7f43709b",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-80-frame-70.png",
                "sha256": "48a4b6405c646e31070f84d2fafa8000499fa3e45f6b8b0d386cc3ed7f43709b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.7137586805555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-600-frame-15.png",
                "sha256": "02ad95d5a65f5288efe5c2ce0cb4d2ca17c4856ca67c8d10005ea73b2baa262e",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-600-frame-102.png",
                "sha256": "48a4b6405c646e31070f84d2fafa8000499fa3e45f6b8b0d386cc3ed7f43709b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-600-frame-528.png",
                "sha256": "cfd127589b76af635a2a10801a2559c9622ed55370d8ea50cfa1d3363db614de",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/16x9-duration-600-frame-599.png",
                "sha256": "48a4b6405c646e31070f84d2fafa8000499fa3e45f6b8b0d386cc3ed7f43709b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 80,
            "averageChannelDifference": 7.519639756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-80-frame-9.png",
                "sha256": "2d18938f9812ed94954fa0d4e3b6cfc02fe35c5c3261f6f166b84c0b7b30bacd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-80-frame-79.png",
                "sha256": "e91c4a6bd1e437adef09e9ae80e17ca71ee7f4ccd52dcb8160e74446b49d1294",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-80-frame-70.png",
                "sha256": "e91c4a6bd1e437adef09e9ae80e17ca71ee7f4ccd52dcb8160e74446b49d1294",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.524305555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-600-frame-15.png",
                "sha256": "e527bda8abbaed49a9da34e2831b1cb1b75592dfc111246187028c344f6a07d6",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-600-frame-102.png",
                "sha256": "e91c4a6bd1e437adef09e9ae80e17ca71ee7f4ccd52dcb8160e74446b49d1294",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-600-frame-528.png",
                "sha256": "e91c4a6bd1e437adef09e9ae80e17ca71ee7f4ccd52dcb8160e74446b49d1294",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/9x16-duration-600-frame-599.png",
                "sha256": "e91c4a6bd1e437adef09e9ae80e17ca71ee7f4ccd52dcb8160e74446b49d1294",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 80,
            "averageChannelDifference": 4.918185763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-80-frame-9.png",
                "sha256": "9d35a84e8f0250e5e4806bf525624efa8232a569f241c5fd8b7f1537e3d95e88",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-80-frame-79.png",
                "sha256": "04e7199e3281b810344792951cd8885ebaccb207050c85bcb424d5701aceb794",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-80-frame-70.png",
                "sha256": "04e7199e3281b810344792951cd8885ebaccb207050c85bcb424d5701aceb794",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.920138888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-600-frame-15.png",
                "sha256": "f4190e7b2c95f55f149b0ea74295ecfd7b91e47fe9ec6ccf5abd1cc55200703e",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-600-frame-102.png",
                "sha256": "04e7199e3281b810344792951cd8885ebaccb207050c85bcb424d5701aceb794",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-600-frame-528.png",
                "sha256": "04e7199e3281b810344792951cd8885ebaccb207050c85bcb424d5701aceb794",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-comet/1x1-duration-600-frame-599.png",
                "sha256": "04e7199e3281b810344792951cd8885ebaccb207050c85bcb424d5701aceb794",
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
        "note": "The cursor streaks across four feature cards with a tapering trail and lands on Try it."
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
      "bundleSha256": "26932b565a5fda2794777711fe0dd9f812dfb011e0a7a48a6c2d75cbe7ae5346",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-comet/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-comet/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-comet/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 126,
      "sha256": {
        "poster": "431683508bb9d9dab71dd3d981c2489acdd9a90a89c8d37295f2d8860e4c0b0b",
        "loop": "41a907fe122c3fad30f5d1f6f8679362ebbc7e555ee50baa4a9e7c4e4e65679f",
        "detail": "06efca92377aa98f599cef7a4d7e967756b575184e6f46e075d459922638a6d9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-comet/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-comet/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-comet/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 126,
      "sha256": {
        "poster": "d2d0b95745385a1afbe109e255b19a74138f1a3abcd1a8a76153482ebab11694",
        "loop": "49f9554c74c78e4e5784b5050214a34d8b6ff9e1dab52dd02e779de7d08758ad",
        "detail": "cc25a40e3b84b246516d91ddabe244c36056a3004aba31d7c47de74459ba9489"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-comet/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-comet/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-comet/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 126,
      "sha256": {
        "poster": "c37532650a66de09f678db49cb71b5feed318f9e1da0d1ff956b5e3780d7d786",
        "loop": "4aead6401e411c660994c112a3f9bf5263e5f0f29296ff2c2823cf25c15ee1c2",
        "detail": "d56b5f9f17000ed3153c5a6e68d3588886b196c9441e2f0f8a2b298128560600"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/26932b565a5fda2794777711fe0dd9f812dfb011e0a7a48a6c2d75cbe7ae5346/index.mjs",
    "sha256": "26932b565a5fda2794777711fe0dd9f812dfb011e0a7a48a6c2d75cbe7ae5346",
    "bytes": 174182,
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
    "at": "2026-10-09T03:11:11.799Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
