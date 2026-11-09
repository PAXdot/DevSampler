// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/chart",
  "tags": [
    "chart",
    "line chart",
    "growth",
    "trend",
    "data",
    "metric"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80
    },
    "beats": [
      0,
      10,
      70
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "value"
    },
    {
      "key": "points",
      "type": "list"
    },
    {
      "key": "labels",
      "type": "list",
      "maxChars": 8
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "line",
      "prop": "draw",
      "from": "0",
      "settledBy": 70,
      "easing": "ease"
    },
    {
      "target": "area",
      "prop": "opacity",
      "from": "0",
      "settledBy": 76,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V14, V12, twitter-remotion-research)"
  },
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "draw"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "title": "Weekly active builders",
    "value": "48.2k",
    "points": [
      4,
      6,
      5.5,
      9,
      8,
      13,
      12.5,
      19,
      24,
      23,
      33,
      48
    ],
    "labels": [
      "Jan",
      "Mar",
      "May",
      "Jul",
      "Sep",
      "Nov"
    ],
    "area": true,
    "grid": true,
    "drawFrames": 60,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 16,
      "role": "value"
    },
    {
      "key": "points",
      "label": "Points",
      "type": "list",
      "max": 24
    },
    {
      "key": "labels",
      "label": "Labels",
      "type": "list",
      "max": 12
    },
    {
      "key": "area",
      "label": "Area",
      "type": "boolean"
    },
    {
      "key": "grid",
      "label": "Grid",
      "type": "boolean"
    },
    {
      "key": "drawFrames",
      "label": "Draw frames",
      "type": "number",
      "step": 1,
      "min": 15,
      "max": 240
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Line Chart Draw",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "line-draw",
    "bundleSha256": "c43eb818419af6efe7f9d79f68c0ae6b11f0ce5e7dab48a2733f5181be5e8239",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:01.882Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-paper.png",
        "sha256": "c989c0c7598dd4c032fde0585128a5fbebea4d3b0b39df9d9f05fff74abb86a9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-night.png",
        "sha256": "89b885343162a396952df96ed18eebfad4b92d54670aee0ab318193f24957433"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-color.png",
        "sha256": "90f0468e0820a926058434d65b39b98d2fdc650135e5bd76c97aa9ed5aaa9980"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-paper.png",
        "sha256": "2e033d774a68ea41e31605a6c6c6ac4f2b6e0cf626da47b855e277f91da835dd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-night.png",
        "sha256": "3424cd946d74dfdc66ddfaabc235b3152bbbe8b6eca6fc2cbd9a3f68ed10515f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-color.png",
        "sha256": "b7e2475525262bb8f0f0eccc1b4b531744b5c267f636d917460098c7e7eed69b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-paper.png",
        "sha256": "54b4916c6d3a9a75fcb5117a731b2c0ea94609c2c2e7fa4e7772c590f3d7b927"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-night.png",
        "sha256": "f2ed32c4144e1eb92d8dc097d80b2b653df4a063a7a4a20cc49823bd419c89f1"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-color.png",
        "sha256": "7e3a785e0803660185677b39d5bd8ee3a0fbf31b97bf89da4c5bb87e449cb3a7"
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
          "line-draw--16x9",
          "line-draw--9x16",
          "line-draw--1x1"
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
            "paperNight": 24.121663411458332,
            "paperColor": 5.986626519097222,
            "region": {
              "left": 193,
              "top": 228,
              "width": 1558,
              "height": 622
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 27.14792209201389,
            "paperColor": 8.23727756076389,
            "region": {
              "left": 110,
              "top": 400,
              "width": 894,
              "height": 1104
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.027235243055557,
            "paperColor": 6.336398654513889,
            "region": {
              "left": 108,
              "top": 227,
              "width": 885,
              "height": 624
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
            "occupancy": 1.35599507292629,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3538079840989896,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3538079840989896,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3557216868228774,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3532612118921645,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3532612118921645,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3603692505808909,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3603692505808909,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3625563394081914,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.64822048611111,
        "frames": [
          12,
          80,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 21.59743923611111,
            "retainedAlpha": 0.9966525146962769,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-45-frame-5.png",
                "sha256": "269eac0cd76e7884cedb9cdbec3a08ee115e4f9c46d0c6f5392abb689ae13ba6",
                "alphaMass": 1602
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-45-frame-44.png",
                "sha256": "15d38745a9b9fb45c7ebec36ee9e1b22c30d23eab578ba49d7771a021df8d9db",
                "alphaMass": 12248
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-45-frame-39.png",
                "sha256": "a4582485eb5ac2a0dfbbdbaad6b6d3ab9e89b852e13f752ad8c4558ec743061d",
                "alphaMass": 12207
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 17.64822048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-600-frame-12.png",
                "sha256": "4724a03ec7a03fcbf80cc37deec44df2522ed8e8924ada54df236b3659fcc246",
                "alphaMass": 2884
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-600-frame-80.png",
                "sha256": "e08e86fd28b7d4990510d5a6fb5c05bacc27cf2be8a4e668a03b531f63096a9e",
                "alphaMass": 12243
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-600-frame-528.png",
                "sha256": "e08e86fd28b7d4990510d5a6fb5c05bacc27cf2be8a4e668a03b531f63096a9e",
                "alphaMass": 12243
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/16x9-duration-600-frame-599.png",
                "sha256": "e08e86fd28b7d4990510d5a6fb5c05bacc27cf2be8a4e668a03b531f63096a9e",
                "alphaMass": 12243
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 29.86501736111111,
            "retainedAlpha": 0.9930277329725792,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-45-frame-5.png",
                "sha256": "5f141987556220354a4c5d423016ac9b9e75c22fb1dd1439b984dc0a0e78ce8b",
                "alphaMass": 2579
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-45-frame-44.png",
                "sha256": "5820ca79469fa3d0926cb310b661cb2c399a7f885dfc1ad24d7274930cf4f492",
                "alphaMass": 19219
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-45-frame-39.png",
                "sha256": "273a7ff9e8438ec8253646a98e22bff66e904f8c299cfb6a60f0628fcca96e91",
                "alphaMass": 19085
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 25.142903645833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-600-frame-12.png",
                "sha256": "847399b6761241f3276d47da6ab76dab48037ed62bfe227b64b99a40184f4dc0",
                "alphaMass": 4997
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-600-frame-80.png",
                "sha256": "d972b1290cf4cde458f4bf77ff8bfeb1f701431111b2594d7e1558e42d8eedb3",
                "alphaMass": 19192
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-600-frame-528.png",
                "sha256": "d972b1290cf4cde458f4bf77ff8bfeb1f701431111b2594d7e1558e42d8eedb3",
                "alphaMass": 19192
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/9x16-duration-600-frame-599.png",
                "sha256": "d972b1290cf4cde458f4bf77ff8bfeb1f701431111b2594d7e1558e42d8eedb3",
                "alphaMass": 19192
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 25.27322048611111,
            "retainedAlpha": 0.9954157646759201,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-45-frame-5.png",
                "sha256": "96e60cb11b53a9e75ce39a381df62b17db1a3eab2081c7eada12b07ccd1d4a67",
                "alphaMass": 2241
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-45-frame-44.png",
                "sha256": "aa67a560015cefffc5cffaac3ee19919443ccb4af6e920d79a9e2d3ef157cdfa",
                "alphaMass": 15706
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-45-frame-39.png",
                "sha256": "da63d57d915f922f925aa6ed75b7f045a482002fc690cac4a825e5aebb5ca294",
                "alphaMass": 15634
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 20.398111979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-600-frame-12.png",
                "sha256": "658b4b640975af3417aa32f31016fbe06c18953d2334704ac1860e1c3f7bf15f",
                "alphaMass": 4193
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-600-frame-80.png",
                "sha256": "ae5a652ffd9fc1909aba9c7c349cc7b27cb48d90c41f1f6644255cdcdeaa9adb",
                "alphaMass": 15682
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-600-frame-528.png",
                "sha256": "ae5a652ffd9fc1909aba9c7c349cc7b27cb48d90c41f1f6644255cdcdeaa9adb",
                "alphaMass": 15682
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/line-draw/1x1-duration-600-frame-599.png",
                "sha256": "ae5a652ffd9fc1909aba9c7c349cc7b27cb48d90c41f1f6644255cdcdeaa9adb",
                "alphaMass": 15682
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
        "note": "A line chart draws to a labelled peak; data."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 11,
        "compared": 11,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c43eb818419af6efe7f9d79f68c0ae6b11f0ce5e7dab48a2733f5181be5e8239",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.979646Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/line-draw/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-draw/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-draw/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "02c2a2eeabd640c635fb9c4e6a3aeecefba1937d51542f2ccef6875859d7d2ac",
        "loop": "26ef3b95381e6a516d896573ca708e73ea98316904e0b93ef3ce041b21dcdea0",
        "detail": "769e35a50c931f82f22cb44bba637ee12ab62c1561d545a717ba930482f92d13"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/line-draw/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-draw/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-draw/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "de027267cb3b88e6afebdf7ba05a9cda8cb9e66f7ede9f05ca45ed9cf6c3c1cc",
        "loop": "c374e0712abfc4f5688aac37bb62719d9932b88374dadbf04b19f0acc2050eb6",
        "detail": "104ef04aae4e667aca39969b95ebbcb60dca6100df828d1b5ad58597defa95fe"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/line-draw/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-draw/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-draw/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "f6c87a2c5894772ba138c5c0871b663106263cd6241b1d04abeced9ed52e26b4",
        "loop": "17655bbdc50263e24968dff9d58a1fe2b4ad212557187050e661b5d0555ce74e",
        "detail": "8702ef7ebb3808939fc70e725fddd7651f34c0665f7e7cd157f03e90537b63b8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c43eb818419af6efe7f9d79f68c0ae6b11f0ce5e7dab48a2733f5181be5e8239/index.mjs",
    "sha256": "c43eb818419af6efe7f9d79f68c0ae6b11f0ce5e7dab48a2733f5181be5e8239",
    "bytes": 163557,
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
    "at": "2026-10-07T02:27:07.415Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
