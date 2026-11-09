// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "aura",
  "mechanic": [
    "physics",
    "accumulate",
    "count-up"
  ],
  "energy": "default",
  "tags": [
    "data",
    "chart",
    "bar chart",
    "distribution",
    "galton board",
    "physics",
    "particles",
    "balls",
    "counter",
    "stats"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 220,
      "min": 190,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 186,
      "out": 0
    },
    "markers": {
      "settled": 186,
      "drop": 8,
      "fill": 60,
      "landed": 154
    },
    "beats": [
      0,
      8,
      60,
      154,
      186
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
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "total",
      "type": "number",
      "maxChars": 12,
      "lines": 1,
      "role": "stat"
    },
    {
      "key": "totalLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "items",
      "type": "list",
      "maxChars": 10,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "pegs",
      "prop": "scale",
      "settledBy": 14,
      "easing": "spring"
    },
    {
      "target": "balls",
      "prop": "path",
      "from": "top",
      "settledBy": 154,
      "easing": "linear"
    },
    {
      "target": "values",
      "prop": "scale",
      "settledBy": 178,
      "easing": "spring"
    },
    {
      "target": "curve",
      "prop": "draw",
      "settledBy": 182,
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
      220
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (seeded Galton board whose bins fill into the user's bar chart, 2026-10-08)"
  },
  "defaults": {
    "title": "Where it all lands",
    "total": 15410,
    "totalLabel": "in total",
    "items": [
      {
        "label": "Mon",
        "value": 1240
      },
      {
        "label": "Tue",
        "value": 2860
      },
      {
        "label": "Wed",
        "value": 4120
      },
      {
        "label": "Thu",
        "value": 3380
      },
      {
        "label": "Fri",
        "value": 2210
      },
      {
        "label": "Sat",
        "value": 980
      },
      {
        "label": "Sun",
        "value": 620
      }
    ],
    "color": "#1E1B18",
    "primary": "#E4572E",
    "secondary": "#F3A712",
    "background": "#F4EFE6",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono",
    "curve": true,
    "seed": 7,
    "grain": true
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "total",
      "label": "Total",
      "type": "number",
      "min": 0,
      "role": "stat",
      "max": 12
    },
    {
      "key": "totalLabel",
      "label": "Total label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
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
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "curve",
      "label": "Curve",
      "type": "boolean"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 9999
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Galton Board Chart",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "galton-board-chart",
    "bundleSha256": "4c30477a6fce87b42f2035a4300ce357fb52686de84e6b978a38ae3bdc036338",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T08:02:05.802Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-paper.png",
        "sha256": "0e123daaa2665461cb8eadc447debe11e005e6fc23b6fbe3290ba2562830be91"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-night.png",
        "sha256": "31a87b65201ed086ea85d30599cacbb57148461824283a138e8bdb32c159974e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-color.png",
        "sha256": "8f0d23c7a87723b1b1c5761092a51f8fc95b9ebeb65a10f94201ffbf6b43cd17"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-paper.png",
        "sha256": "9f9f4227e90656860b5877217aecea003be54cde965f1dbadba5327fd62373ff"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-night.png",
        "sha256": "63b11ddb61d656d6c1edcb885788e28854c860af1bd8c3c23ecfe13d9aede0a8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-color.png",
        "sha256": "5b94fb596b2c588ebe783acba3be27a528d9b741c7a39128b46c911ce638c310"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-paper.png",
        "sha256": "a4fde8c01732970f7f3af4bef1c5316497d289490b3bf8d33f90abdf12d82cf1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-night.png",
        "sha256": "8163bb62a6daeb02073e10ace894fae3d77859ec9fae9cb6407170b32da78130"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-color.png",
        "sha256": "b32f6a00b1f16fd76928d7c67313ee61497f7213c561e029d4e6dc008d3847ff"
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
          "galton-board-chart--16x9",
          "galton-board-chart--9x16",
          "galton-board-chart--1x1"
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
            "paperNight": 35.366482204861114,
            "paperColor": 10.652153862847221,
            "region": {
              "left": 135,
              "top": 56,
              "width": 1588,
              "height": 904
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.691569010416664,
            "paperColor": 13.692816840277779,
            "region": {
              "left": 43,
              "top": 106,
              "width": 994,
              "height": 1700
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.865804036458336,
            "paperColor": 11.818440755208334,
            "region": {
              "left": 76,
              "top": 85,
              "width": 930,
              "height": 897
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
            "occupancy": 0.9811499188152629,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9792963610341258,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9800645759847151,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.153560864932393,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.145922457203046,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1542402293993732,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0069162552995594,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.004704865485289,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0124763211182966,
            "bad": [],
            "measured": 17
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.888129340277778,
        "frames": [
          26,
          186,
          219
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 190,
            "averageChannelDifference": 4.730902777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-190-frame-22.png",
                "sha256": "2ebbdb6bbd36679610d7f725842345ac136b54c010cfba02751a6c4422841bf6",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-190-frame-186.png",
                "sha256": "086bc3f5e80678aa0703fa767c61c5ae6390822a839f71704d82436f52ebb86a",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-190-frame-167.png",
                "sha256": "be2af6b3d2cf32c98101c999382c5d7333522d025bfb12f6be4af5663902f5e8",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-190-frame-189.png",
                "sha256": "fe9d091a0c2951834a69a5417da323af97dfc8d2144349cdc343a70bf7669e97",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.924587673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 27,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-600-frame-27.png",
                "sha256": "c1ee451507c2189e3e99622b02fe3c61fea841d100a9ab0491655fc8dfe22476",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-600-frame-186.png",
                "sha256": "086bc3f5e80678aa0703fa767c61c5ae6390822a839f71704d82436f52ebb86a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-600-frame-528.png",
                "sha256": "308d5d9f60d2f58b3b498a037ce63a7985d60e924c39139149817d3ec7e0145e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/16x9-duration-600-frame-599.png",
                "sha256": "7f082138500cddeddc55c6bd0c8b8d9959fc317c42bda41e98ca9f2937e850ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 190,
            "averageChannelDifference": 7.180230034722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-190-frame-22.png",
                "sha256": "7a33d9a7ef1d08420e510cb5f49df021835434191128fb30750dd8ddf5634832",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-190-frame-186.png",
                "sha256": "f75efe5953e6397a741bb4f35f5fcb7ffd39af8c489ed805954f8a62d09139b2",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-190-frame-167.png",
                "sha256": "97a37cfa8edc9ac3cc3cf1a74aa2a94b1abf8602ca10b6ba328b347f4ea86568",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-190-frame-189.png",
                "sha256": "539196d48f7c411333a1a2727e95d41136533ee220cabd4b2265843c66f93894",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.228190104166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 27,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-600-frame-27.png",
                "sha256": "95ad91e50b9516e48763681bae6622029fb8e3c5a4a83c6fd479ef1576407a74",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-600-frame-186.png",
                "sha256": "f75efe5953e6397a741bb4f35f5fcb7ffd39af8c489ed805954f8a62d09139b2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-600-frame-528.png",
                "sha256": "fc693d01a27400557a2c03e05df14b32e8b0533b2001eeeb7b0f3e324ea712f5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/9x16-duration-600-frame-599.png",
                "sha256": "010d418037dbb00ddb4030c0190958d4f0c6df28384881cd46d90b2ee08ff077",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 190,
            "averageChannelDifference": 5.281684027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-190-frame-22.png",
                "sha256": "72f68d0280034577320ddf17a46eea8c01329802d2428fdabd1a147e1eb7dc3b",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-190-frame-186.png",
                "sha256": "b0cec3102fd78549fb4335e2078bd65329d09383ec701e492734c2f689451215",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-190-frame-167.png",
                "sha256": "0b654dd950ba402a14c225d31528c660b3da5ee884affc042ae0a77c4356a5fb",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-190-frame-189.png",
                "sha256": "6bed20ee458b1c541782c815e09f457ec2e22bdd61663ace8e56523c026ec65d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.48828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 27,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-600-frame-27.png",
                "sha256": "101e05751a3c007e37602532329fefd42972a3b1f28760c0210153d63918fa41",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-600-frame-186.png",
                "sha256": "b0cec3102fd78549fb4335e2078bd65329d09383ec701e492734c2f689451215",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-600-frame-528.png",
                "sha256": "3e2b4bfc0c421a3f2f44083cf8cc56d04a424ac20ba28fe689f6c300c580749a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/galton-board-chart/1x1-duration-600-frame-599.png",
                "sha256": "d9e074b68ba53e460219d8ebe2bc00973a236aa4599427fb8d3fe17267744792",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The subject of the poster and the three sampled motion frames show a Galton board visualization (dots flowing through pins and collecting into a histogram by weekday), matching the claimed 'Galton Board Chart.' Both the structure of a Galton board and the charting of data as balls falling/collecting into bins are visible in both static and motion frames, directly supporting the title. \n\n2. noBakedHeading: There is no decorative block title or unexplained label baked into the image—'Where it all lands' and data labels are part of the editable named slot content; nothing extraneous is visible. All typography is either data or heading asserted by the namedSlotContent; none appears to be an ornamental, category, or language mark unrelated to the editable slots or actual data.\n\n3. brandAdherence: The last three images are the Galton Board Chart each under a clearly different palette, matching the hexadecimal color values and roles from the evidence (green on light, purple on dark, blue on pale green). Each version preserves all shapes, gradients and numbers, adapts accent colors and backgrounds to palette, and keeps the composition/visual hierarchy intact. No unexplained fixed block colors persist, and contrast and legibility remain strong in all palettes.\n\n4. languageAdherence: The language card prescribes soft fields, sharp subject, sans type, tabular numerals, continuous gradients, and consistent roles for type and color. All three rebrands and the motion samples maintain soft light/field effects, tabular numerals, consistent sans type, no style changes between states, and clear role assignment for ink/accent/bg per palette. The motion frames depict slow, legible buildup and are visually consistent with the 'breathe/focus/reveal' verbs from the card. All points are evidenced visually across the provided images."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4c30477a6fce87b42f2035a4300ce357fb52686de84e6b978a38ae3bdc036338",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.548Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/galton-board-chart/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/galton-board-chart/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/galton-board-chart/16x9/detail.mp4",
      "bg": "#f4efe6",
      "posterFrame": 186,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 220,
      "sha256": {
        "poster": "5d2d1b0cebe7d191c71fab2b288438d59bdc58088a1f3653b08714b937abcb39",
        "loop": "18c302c8a35b44f4ab0ebc0ad0754083b97047daf6c006e5e1f03821cb6dda10",
        "detail": "993aaa1bd56a19dda9954368d06e7460bbe9926db332a7b27deaf378dd30248e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/galton-board-chart/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/galton-board-chart/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/galton-board-chart/9x16/detail.mp4",
      "bg": "#f4efe6",
      "posterFrame": 186,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 220,
      "sha256": {
        "poster": "73bf6bd1106c99c880c6545fdc0cd3799e82d22e6600a12165c8e788b3747e01",
        "loop": "3d7bd18767eade122329fc4a006089b74902a7f24f13a396b341c6690db2a5f7",
        "detail": "6fb80d87ee01074bce72ea03cd0b945dfb0fa499b02dc7a35a2d5ec5f9d36279"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/galton-board-chart/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/galton-board-chart/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/galton-board-chart/1x1/detail.mp4",
      "bg": "#f4efe6",
      "posterFrame": 186,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 220,
      "sha256": {
        "poster": "e1f26e0d1ef16c9bb9564f2c99c551678afec39291bf958bc3b95cc0e4771a58",
        "loop": "f64c73aa200518544a6ae0e1938a41d6769be516393743c7415730be9ffb3d14",
        "detail": "b08915b6161e1d45b783a8cde7a59a77aa24dd410b638365e91eb618b4bbddb5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4c30477a6fce87b42f2035a4300ce357fb52686de84e6b978a38ae3bdc036338/index.mjs",
    "sha256": "4c30477a6fce87b42f2035a4300ce357fb52686de84e6b978a38ae3bdc036338",
    "bytes": 179481,
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
    "at": "2026-10-09T09:06:27.053Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
