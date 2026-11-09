// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "cross",
    "scroll"
  ],
  "tags": [
    "ticker",
    "tape",
    "bands",
    "type",
    "diagonal",
    "poster",
    "headline"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135,
      "cross": 30,
      "scroll": 70
    },
    "beats": [
      0,
      20,
      30,
      70,
      110,
      135
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
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "secondaryText",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.display"
  },
  "motionBeats": [],
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
    "sourceUrl": "21st first-party (two diagonal typography tapes cross, scroll and brake, 2026-10-09)"
  },
  "defaults": {
    "text": "Make some noise",
    "secondaryText": "Made to stand out",
    "primary": "#FF8A3D",
    "secondary": "#FFD27A",
    "color": "#F3EEE6",
    "background": "#0E0F12",
    "fontFamily": "Bricolage Grotesque"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "secondaryText",
      "label": "Secondary text",
      "type": "text",
      "max": 28,
      "role": "subline"
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "brand": "fonts.display"
    }
  ],
  "name": "Crossing Tape Headlines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "crossing-tape-bands",
    "bundleSha256": "c7dfe8bcae137db57d8d88ba279d70e05befe7d5bca358e69c396b6f2d0a56c3",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:34:00.876Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-paper.png",
        "sha256": "3ae2dc38e2f1b03f5fcb36cebd879eb0c37ec5c8ee84082bf963b7bc798b5bfe"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-night.png",
        "sha256": "dba8043525a120f5d3b6011eef2877962679b8760dc2fe63264e8e162e22ec21"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-color.png",
        "sha256": "ab955a022edb7fcacb2039336d131fedc8250b083f98f4a7324f596cc6461d24"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-paper.png",
        "sha256": "bee427e0142ab8596f9f1c0a517adf40db09f12983bb866fea4205dc03bc9856"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-night.png",
        "sha256": "7c7ebd8c0904e38e99b64cb1d9f0a9283b65b10883874ba764319a9c4dd0a987"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-color.png",
        "sha256": "ed5bccbfeba47a217875af94782ff12b0aa9e9ef306394b4b1834b539b32e5bf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-paper.png",
        "sha256": "fa085f5ad8f96fab4329ca98b1a596529f196516b3d571a884580c75675ce70b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-night.png",
        "sha256": "814a456b44025de2dab8bc06a288f0183a077fa1acbc9b5f3572395a6b1e0402"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-color.png",
        "sha256": "98ef92fd54670e9bd42bff50c7fe1b0cde9c176c7e08b731607685426ca011d0"
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
          "crossing-tape-bands--16x9",
          "crossing-tape-bands--9x16",
          "crossing-tape-bands--1x1"
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
            "paperNight": 34.9267578125,
            "paperColor": 13.347737630208334,
            "region": {
              "left": 106,
              "top": 91,
              "width": 1708,
              "height": 925
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.549886067708336,
            "paperColor": 17.02606879340278,
            "region": {
              "left": 59,
              "top": 347,
              "width": 962,
              "height": 1281
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.33460828993056,
            "paperColor": 18.056993272569443,
            "region": {
              "left": 59,
              "top": 218,
              "width": 962,
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
            "occupancy": 1.079806761953753,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.079806761953753,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.079806761953753,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8422492743239273,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8422492743239273,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8422492743239273,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.785485662028872,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.785485662028872,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.785485662028872,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 48.96245659722222,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 44.96636284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-150-frame-18.png",
                "sha256": "bb3004300f18bf869ae3a08fdda190e0dcf39cf696c828703a65ae4c6b59c492",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-150-frame-135.png",
                "sha256": "7749430d95ac6cc80fb7cd5a40ab712fbd284f35d569427f08dca080cc32a110",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-150-frame-132.png",
                "sha256": "536793ec3a621db0e7acaabfacfa231a8018a470947cbc330a6f3ed5c4f0430a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-150-frame-149.png",
                "sha256": "7749430d95ac6cc80fb7cd5a40ab712fbd284f35d569427f08dca080cc32a110",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 48.96245659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-600-frame-20.png",
                "sha256": "02ccec135aa51e8d4767baf31fe40cd6d27b9c153a5081d06bb9d930da1f99c4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-600-frame-135.png",
                "sha256": "7749430d95ac6cc80fb7cd5a40ab712fbd284f35d569427f08dca080cc32a110",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-600-frame-528.png",
                "sha256": "7749430d95ac6cc80fb7cd5a40ab712fbd284f35d569427f08dca080cc32a110",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/16x9-duration-600-frame-599.png",
                "sha256": "7749430d95ac6cc80fb7cd5a40ab712fbd284f35d569427f08dca080cc32a110",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 35.144205729166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-150-frame-18.png",
                "sha256": "c8df071b2efee8cec44bcd2192812bc1a0279eb1394f4397948431583adb16f7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-150-frame-135.png",
                "sha256": "5bd8adaa7eeee62d4e7f4e5a3fd96aee67fc5286ca95040779f3fad5798f0c27",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-150-frame-132.png",
                "sha256": "d11c5b0bfbc69f6eefd0a104c2b854a1ffc7483ce6073dd7fb0b5972cf8b2961",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-150-frame-149.png",
                "sha256": "5bd8adaa7eeee62d4e7f4e5a3fd96aee67fc5286ca95040779f3fad5798f0c27",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 35.65234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-600-frame-20.png",
                "sha256": "f0b86a5d88169fbb5d7e8a1f7634a1fa8ecb8f4d1d2a1222995f605f4ec37f2f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-600-frame-135.png",
                "sha256": "5bd8adaa7eeee62d4e7f4e5a3fd96aee67fc5286ca95040779f3fad5798f0c27",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-600-frame-528.png",
                "sha256": "5bd8adaa7eeee62d4e7f4e5a3fd96aee67fc5286ca95040779f3fad5798f0c27",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/9x16-duration-600-frame-599.png",
                "sha256": "5bd8adaa7eeee62d4e7f4e5a3fd96aee67fc5286ca95040779f3fad5798f0c27",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 34.84765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-150-frame-18.png",
                "sha256": "0708c08dd103bc3593d224d5dae5ecb68d4df1e41582f1148ff19ff79e73ebf0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-150-frame-135.png",
                "sha256": "9575d010b78a6231ef47d03fe761fc26eda1dfcd99cf219caaf376dcd12a3bee",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-150-frame-132.png",
                "sha256": "3a089d2d9ec1adfa901e617fe3b09009fdb62556435b0669422ca04609e53e09",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-150-frame-149.png",
                "sha256": "9575d010b78a6231ef47d03fe761fc26eda1dfcd99cf219caaf376dcd12a3bee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 31.537760416666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-600-frame-20.png",
                "sha256": "fc27e879e377c3cfc67b65ef72134ff37ebd9d5139ec490bc02cb2f005d0b47f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-600-frame-135.png",
                "sha256": "9575d010b78a6231ef47d03fe761fc26eda1dfcd99cf219caaf376dcd12a3bee",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-600-frame-528.png",
                "sha256": "9575d010b78a6231ef47d03fe761fc26eda1dfcd99cf219caaf376dcd12a3bee",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crossing-tape-bands/1x1-duration-600-frame-599.png",
                "sha256": "9575d010b78a6231ef47d03fe761fc26eda1dfcd99cf219caaf376dcd12a3bee",
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
        "note": "TitleMatches: The visible subject shows two graphic tape-like strips intersecting diagonally with bold type, carrying the editable slot texts ('Make some noise', 'Made to stand out'). The three motion samples clearly show the tape strips sliding, assembling, and replacing one another in different positions, aligning with the title 'Crossing Tape Headlines'.\nNoBakedHeading: There is no decorative, non-slot heading or label present in any frame; all type is functional and follows named-slot content.\nBrandAdherence: Images five through seven show the same poster design rendered in three distinct brand palette combinations, corresponding to the supplied palettes. Each version is legible, visually matches the provided color specs, and tape/material shapes are preserved; there are no unexplained fixed colors that violate palette usage.\nLanguageAdherence: The layouts maintain the oversized type, flat color fields, sans-serif type, and bold single-weight numerals; the motion is static in each frame but implied through the tape's different positions, matching the language card's directives. Palettes are consistently applied, and roles for ink/accent/bg are evidenced as expected."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 62,
        "compared": 62,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c7dfe8bcae137db57d8d88ba279d70e05befe7d5bca358e69c396b6f2d0a56c3",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.619Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "crossing-tape-bands",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "846d05e1dc1142b4d407ecffee0443d76a50f0fa439817a99a5313453a4767b8",
      "bundleSha256": "c7dfe8bcae137db57d8d88ba279d70e05befe7d5bca358e69c396b6f2d0a56c3",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/crossing-tape-bands/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crossing-tape-bands/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crossing-tape-bands/16x9/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d452fed5a869958cbce3c22ee52754c0bb645f2cc71af63c8c7c0072384fa691",
        "loop": "ec593cd6013bca32361ffce47483d8d9e0276770cee9e9ada54b7f72ef26f8a1",
        "detail": "6c5cd7c640113d20d49f074d7c3dcccaa67f8d8958c0718c5e81ad203154d0d7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/crossing-tape-bands/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crossing-tape-bands/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crossing-tape-bands/9x16/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "abb08ec511dfb768412d7ef4d51e98832f9c4e42722ef03b25a5745ea0299bba",
        "loop": "6d5cbf7a47c1333414146f0ab2a3df9462a39907fde7fcc9191e3d0d2ae3d475",
        "detail": "2282c84730286feba633cfbed39e3546960667ad419419e8b1ab0662fb6cfd8c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/crossing-tape-bands/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crossing-tape-bands/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crossing-tape-bands/1x1/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4583769c239d3509cd1866e12e019af6ce35a268a3180d5feda1512425288e42",
        "loop": "f2063f8ca4853bfd4228bec11d31ed2dcd0fe7900ee3b0d4a3f218f37b934541",
        "detail": "fbb52d2752b4102987a9032183928eb2b87ad799f7653bd75b9ae6d08c3bc0d9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c7dfe8bcae137db57d8d88ba279d70e05befe7d5bca358e69c396b6f2d0a56c3/index.mjs",
    "sha256": "c7dfe8bcae137db57d8d88ba279d70e05befe7d5bca358e69c396b6f2d0a56c3",
    "bytes": 160715,
    "externals": [
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
    "at": "2026-10-09T19:52:53.965Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
