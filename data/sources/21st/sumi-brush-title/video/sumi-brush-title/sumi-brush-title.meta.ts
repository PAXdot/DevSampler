// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "hand-drawn",
  "mechanic": [
    "stroke"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "brush",
    "brush stroke",
    "sumi",
    "ink",
    "calligraphy",
    "painted",
    "dry brush",
    "hand-drawn",
    "seal",
    "stamp",
    "opener",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 72,
      "out": 0
    },
    "markers": {
      "settled": 72,
      "stroke": 4,
      "tail": 32,
      "seal": 46
    },
    "beats": [
      0,
      4,
      14,
      32,
      46,
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
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "text",
      "type": "text",
      "maxChars": 40,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "eyebrow"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "brush",
      "prop": "stroke",
      "from": "left",
      "settledBy": 32,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "scale",
      "settledBy": 40,
      "easing": "spring"
    },
    {
      "target": "kicker",
      "prop": "y",
      "from": "below",
      "settledBy": 48,
      "easing": "spring"
    },
    {
      "target": "seal",
      "prop": "scale",
      "settledBy": 56,
      "easing": "spring"
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
    "sourceUrl": "21st first-party (one sumi ink brush stroke with dry bristle streaks paints in behind the title, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "kicker": "Introducing",
    "color": "#E8F1F2",
    "primary": "#FF9F1C",
    "secondary": "#2EC4B6",
    "background": "#0B1D2A",
    "fontFamily": "DM Serif Display",
    "titleInk": "auto",
    "seal": true,
    "grain": true,
    "seed": 3
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "titleInk",
      "label": "Title ink",
      "type": "select",
      "options": [
        "auto",
        "text",
        "background"
      ]
    },
    {
      "key": "seal",
      "label": "Seal",
      "type": "boolean"
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    }
  ],
  "name": "Sumi Brush Stroke",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "sumi-brush-title",
    "bundleSha256": "3c78aaae01c8d9973e23d6a3dd2ac6824f189436e00ce1173736e17430298354",
    "sourceSnapshot": {
      "sha256": "c8715db50bf5f6e7adeda1c9cc3c7aaf7ceeb34bc8961bc41f1e021a1e367666",
      "files": 1845
    },
    "renderedAt": "2026-10-09T11:07:14.867Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-paper.png",
        "sha256": "bed78b4e01acb0bc8a079dfa72250b3cbc98d3980dc42a845305f9c13ddfcd00"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-night.png",
        "sha256": "1b44f452803e3e152363e6ebfdd186d3c29a18717c12e17a80c6744ad4605883"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-color.png",
        "sha256": "6587939153ced27b5ae04d5c21401dd8976e0866226e360c9ac20cb80872a349"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-paper.png",
        "sha256": "2de4c065218f03b7b9f5f1ed024f21bff0604282ce93bcf49a895aeb1f6a4b3b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-night.png",
        "sha256": "6a2ace64e9ebf6c2ac14f0b4cc458309e0109e2247b738eb9ed69c949f9695b1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-color.png",
        "sha256": "0d86a6eb71b5ee90dbc7ac40d487b4fe7e42d01fa93950cc5a8373de87dbaec3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-paper.png",
        "sha256": "3d095645b60956b0d48c7c96e5ee7dbe576322cd584ba6999cc812cf1343fab1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-night.png",
        "sha256": "a8df4406c6d7852a6fc820bf89f834a1c619939edd262320bd68d9d3b123ab78"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-color.png",
        "sha256": "7af7dc290d92e9ed223f72fbf6776bf6e2518d3c0ec84162680e960233ee5e75"
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
          "sumi-brush-title--16x9",
          "sumi-brush-title--9x16",
          "sumi-brush-title--1x1"
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
            "paperNight": 40.045735677083336,
            "paperColor": 47.190700954861114,
            "region": {
              "left": 270,
              "top": 232,
              "width": 1598,
              "height": 680
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.26641167534722,
            "paperColor": 50.82538519965278,
            "region": {
              "left": 0,
              "top": 398,
              "width": 1080,
              "height": 1090
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 44.25355360243056,
            "paperColor": 45.15367296006944,
            "region": {
              "left": 46,
              "top": 242,
              "width": 1034,
              "height": 672
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
            "occupancy": 0.6547077743134292,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6618048775580192,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7361276236317574,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6909013605442178,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6901632180650039,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8045753023431597,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7604459250549787,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7739183922311496,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7952838199751782,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.85177951388889,
        "frames": [
          10,
          72,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.85177951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-90-frame-10.png",
                "sha256": "b16ecd6d0207dff0c58568befcc14273744aafe93f9320f9ec6701862c7d8e64",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-90-frame-72.png",
                "sha256": "686cb838c23a9bebe2668b1393125460fc132aae9f361be661f8c3708bc56750",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-90-frame-79.png",
                "sha256": "061ddfe97ed49169f565160a88de66be9bb18c43ddfa6540e67f62f098d5dc6e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-90-frame-89.png",
                "sha256": "061ddfe97ed49169f565160a88de66be9bb18c43ddfa6540e67f62f098d5dc6e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.85177951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-600-frame-10.png",
                "sha256": "b16ecd6d0207dff0c58568befcc14273744aafe93f9320f9ec6701862c7d8e64",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-600-frame-72.png",
                "sha256": "686cb838c23a9bebe2668b1393125460fc132aae9f361be661f8c3708bc56750",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-600-frame-528.png",
                "sha256": "061ddfe97ed49169f565160a88de66be9bb18c43ddfa6540e67f62f098d5dc6e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/16x9-duration-600-frame-599.png",
                "sha256": "061ddfe97ed49169f565160a88de66be9bb18c43ddfa6540e67f62f098d5dc6e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 21.539713541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-90-frame-10.png",
                "sha256": "7b67a16907337c52afac10f03fc2d676a0ea77c2df1e4debcf5439c68c03544f",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-90-frame-72.png",
                "sha256": "4e8a93033910711974e4e757ed80e20a6137b17e575b41c45f381ec99ac1f9e8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-90-frame-79.png",
                "sha256": "41bc824c9e68ce6fea014c485009d46b995175f595eaee7ae3ad9cd668c40f81",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-90-frame-89.png",
                "sha256": "03e3a40072a75ab1da86de342ee3fee1ffe08175156d9f54de5035a826f96570",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.539713541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-600-frame-10.png",
                "sha256": "7b67a16907337c52afac10f03fc2d676a0ea77c2df1e4debcf5439c68c03544f",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-600-frame-72.png",
                "sha256": "34c681ffc1cdd6ea04ed8fd5e0efb0a1d9ad458ba4b03b67817774394ac0fd23",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-600-frame-528.png",
                "sha256": "022ff7f47339bf3e2b890e4311fc86d8bb28a3e20e83db203193c8da9939c4c1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/9x16-duration-600-frame-599.png",
                "sha256": "020bf03e76c83e8b3e089e2119abad2ea3d5fc0309460248adfd2632a4b3376a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 21.762803819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-90-frame-10.png",
                "sha256": "dbe311b164819ce57dd5c0b51ddf8c8bf381b685a2694c4a9fc0efb1fb553078",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-90-frame-72.png",
                "sha256": "4f6240403a082c109d318516f5f6d7552a213b4633865c4a7da5e212c867aa9a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-90-frame-79.png",
                "sha256": "c9b666e0d40d1e0b6911083604408d080149b95b78fa0a174690a7c5d23b9fac",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-90-frame-89.png",
                "sha256": "c412fd0622041d60cc5291d37c9501fe7630bae09d15fc2e98d5b1c2fa229706",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 21.762803819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-600-frame-10.png",
                "sha256": "dbe311b164819ce57dd5c0b51ddf8c8bf381b685a2694c4a9fc0efb1fb553078",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-600-frame-72.png",
                "sha256": "4f6240403a082c109d318516f5f6d7552a213b4633865c4a7da5e212c867aa9a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-600-frame-528.png",
                "sha256": "c412fd0622041d60cc5291d37c9501fe7630bae09d15fc2e98d5b1c2fa229706",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/sumi-brush-title/1x1-duration-600-frame-599.png",
                "sha256": "c412fd0622041d60cc5291d37c9501fe7630bae09d15fc2e98d5b1c2fa229706",
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
        "note": "TitleMatches: The visible subject—a broad, irregular paint stroke being 'drawn' on a flat, dark background, forming the backdrop for editable text—fits the claimed title 'Sumi Brush Stroke.' The chronological images (2-4) show the brush stroke's appearance changing as though being drawn or revealed, supporting the motion language (draw, trace) and matching the title. There are no visual effects merely suggested by text alone.\n\nNoBakedHeading: All prominent headings visible ('Introducing', 'Ship faster') match named slot content, appear stylized but editable, not decorative block titles or unexplained baked labels. No fixed category or language-label is present outside editable slots, so this passes.\n\nBrandAdherence: Images 5-7 show the same composition under three different brand palettes. Each version is clearly adjusted to match its palette: brush, text, accent colors, and backgrounds update as specified; shape and details remain. No unexplained retained block color is visible—the layouts adapt as required, and all elements are legible across palette changes.\n\nLanguageAdherence: The visual presentation (irregular, hand-painted strokes, sans or handwritten style for supporting text, tabular numerals if present, static flat drawing surface, no shadows or unnecessary effects) aligns fully with the supplied language card. The motion samples suggest drawing/tracing, and all rebranded versions keep consistent material, type roles, and palette logic. Thus, language adherence is observed."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 51,
        "compared": 51,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3c78aaae01c8d9973e23d6a3dd2ac6824f189436e00ce1173736e17430298354",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:09:26.019Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/sumi-brush-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sumi-brush-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sumi-brush-title/16x9/detail.mp4",
      "bg": "#07131c",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "ac4a9b9cf20a65801f204005e155614023363840c082a4d2b8daebfb749f23af",
        "loop": "bf2bb6cd6e928c417bdf46fdbeb5d225fd031975d233ea360caefd75edd55760",
        "detail": "c8805ea600a11e75a1e359709e957cdb973bb45eeb95c79f657fceb7adc1392a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/sumi-brush-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sumi-brush-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sumi-brush-title/9x16/detail.mp4",
      "bg": "#07131c",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "65cad26b7e3adca36a3c65e99b17eacee50287287120f2a109d552612127c129",
        "loop": "44d6515b39808fb7c59d5aedb19846f9a01ce2b066f32372416ec4ffbf28b752",
        "detail": "04ffdc46c5e7e8b23cfe16d8b4e524975faf5de0783c8dfec05f586bf1ec2b57"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/sumi-brush-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sumi-brush-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sumi-brush-title/1x1/detail.mp4",
      "bg": "#07131c",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3d751befda2903a45c37ac84df7d7c5c652e5d6531217535ed7bd47b104325ef",
        "loop": "196d87aace2110a28ea893c41769aedc9c2ada91476255fea2d0c51a0f3da226",
        "detail": "e997348b8e3b06f2909b4f639ab411df19be6843fea705579ee23c8623e156aa"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3c78aaae01c8d9973e23d6a3dd2ac6824f189436e00ce1173736e17430298354/index.mjs",
    "sha256": "3c78aaae01c8d9973e23d6a3dd2ac6824f189436e00ce1173736e17430298354",
    "bytes": 174096,
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
    "at": "2026-10-09T11:24:19.889Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
