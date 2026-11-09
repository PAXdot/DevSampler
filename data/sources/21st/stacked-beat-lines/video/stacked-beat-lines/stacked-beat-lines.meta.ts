// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "slogan",
    "three lines",
    "beat",
    "gradient",
    "headline",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 18,
      "out": 0
    },
    "markers": {
      "settled": 19
    },
    "beats": [
      2,
      9,
      16
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
      "x": 0.04,
      "y": 0.06,
      "w": 0.92,
      "h": 0.88
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "line1",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "line3",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "accent2": "colors.secondary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "line1",
      "prop": "color",
      "from": "grey",
      "settledBy": 4,
      "easing": "linear"
    },
    {
      "target": "line2",
      "prop": "scale",
      "from": "1.1",
      "settledBy": 12,
      "easing": "ease"
    },
    {
      "target": "line3",
      "prop": "color",
      "from": "grey",
      "settledBy": 18,
      "easing": "linear"
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
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V03 (stacked headline, one line per beat); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "line1": "Design it once.",
    "line2": "Animate it everywhere.",
    "line3": "Ship it today.",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "accent2": "#5EEAD4",
    "fontFamily": "Geist",
    "beatFrames": 7
  },
  "fields": [
    {
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "line3",
      "label": "Line 3",
      "type": "text",
      "max": 28,
      "role": "subline"
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
      "key": "accent2",
      "label": "Accent 2",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "beatFrames",
      "label": "Beat frames",
      "type": "number",
      "step": 1,
      "min": 4,
      "max": 15
    }
  ],
  "name": "Stacked Beat Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "stacked-beat-lines",
    "bundleSha256": "8ba5fc4caf8d5be02f90ed8413f8400d488f2681e1c88055ea4c2dd12e28566d",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:30.466Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-paper.png",
        "sha256": "bc639aee71fbb724f0dd56dead8d0fc5d7eb171a3e8163e46b1a81b7c699e969"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-night.png",
        "sha256": "24bd5623fc981e3810a33e7d259452cb2246c2901aef206508c677879aabc941"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-color.png",
        "sha256": "eff53fd166f457e9e3ce3c6817043cc5f6da34c808cbe0455bfa16873a0f4bf2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-paper.png",
        "sha256": "75f3d2e80a026d0d9588d6e1cdfc341defff3fccceb54bf2df7f257d58845cfc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-night.png",
        "sha256": "c06f92c7e6f18a513f04d8aa6e2194d6e610e6af9ac1dc6f82bbeeef7d59adff"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-color.png",
        "sha256": "71a4a3b07df3adee37e95fe72b84018222feacb947fb2fbb746b0c999550ad46"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-paper.png",
        "sha256": "be5463a4a16cb45dd923bffd0a554c8055044a06987481bcb6ded2570a2ace3d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-night.png",
        "sha256": "dda5fda45ac3dc51843d91b2cb06eb4941982c25617f190f4f96191ab1b77bb4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-color.png",
        "sha256": "138440363508db04b5ad649814dd6f252ce3c51f9990390abba8e152265140be"
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
          "stacked-beat-lines--16x9",
          "stacked-beat-lines--9x16",
          "stacked-beat-lines--1x1"
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
            "paperNight": 40.328206380208336,
            "paperColor": 36.564534505208336,
            "region": {
              "left": 168,
              "top": 326,
              "width": 1582,
              "height": 441
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.51874457465278,
            "paperColor": 31.15060763888889,
            "region": {
              "left": 61,
              "top": 243,
              "width": 965,
              "height": 1452
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.389322916666664,
            "paperColor": 36.694607204861114,
            "region": {
              "left": 97,
              "top": 419,
              "width": 885,
              "height": 248
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
            "occupancy": 0.4725027710415443,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4649224578591726,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3117954840115059,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.956998306974539,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9543601310766078,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7449135695301785,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2645283936619916,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2603024520279077,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.17417732410751227,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 30.9814453125,
        "frames": [
          2,
          19,
          74
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 30.9814453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-30-frame-2.png",
                "sha256": "38df16868470e045db1faa270b0c7c5ca766ac80a151b691afa6ea3a40c5a972",
                "alphaMass": 1897
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-30-frame-19.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-30-frame-26.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-30-frame-29.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 30.9814453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-600-frame-2.png",
                "sha256": "38df16868470e045db1faa270b0c7c5ca766ac80a151b691afa6ea3a40c5a972",
                "alphaMass": 1897
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-600-frame-19.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-600-frame-528.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/16x9-duration-600-frame-599.png",
                "sha256": "dbb0847894f079439b01144032eb3d1d7643a1d7d05278057eb12b00039842a5",
                "alphaMass": 30046
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 48.956271701388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-30-frame-2.png",
                "sha256": "0dcee950464e92c7cb06e1dce506a7cb92bd717b49d9f41acd76b6ee38a8a57f",
                "alphaMass": 2581
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-30-frame-19.png",
                "sha256": "9f7a5cecca88808cbbfa52a0e61b2449f81c7aa1d5864e2be592f97322585b6a",
                "alphaMass": 41871
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-30-frame-26.png",
                "sha256": "686b78897f60922b64441dec3072a71744dfd5a0cd4dafa8174e04e20860c360",
                "alphaMass": 41871
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-30-frame-29.png",
                "sha256": "b510dd004c6cec2cae64bac619f667c99d0e087e8889868adf419a955fd8c352",
                "alphaMass": 41871
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 48.956380208333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-600-frame-2.png",
                "sha256": "0dcee950464e92c7cb06e1dce506a7cb92bd717b49d9f41acd76b6ee38a8a57f",
                "alphaMass": 2581
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-600-frame-19.png",
                "sha256": "b7201a4a7121e8d7cbd91e349093f8ed7fe5d569e385c690118d097d364efa39",
                "alphaMass": 41871
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-600-frame-528.png",
                "sha256": "63ff2e79946f786f11a1384a99528d4f036b6a371b9091c1c888558623c29186",
                "alphaMass": 41871
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/9x16-duration-600-frame-599.png",
                "sha256": "c0d50de9afb736d93f75a05152aa114d9f26a44b09683117c4a2ae3e7d6bdcfb",
                "alphaMass": 41871
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 19.467881944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-30-frame-2.png",
                "sha256": "411959704db91df4d46e35dfa64aef09689820d3160ba919928bcf2b084c3b5a",
                "alphaMass": 1206
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-30-frame-19.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-30-frame-26.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-30-frame-29.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 19.467881944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-600-frame-2.png",
                "sha256": "411959704db91df4d46e35dfa64aef09689820d3160ba919928bcf2b084c3b5a",
                "alphaMass": 1206
              },
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-600-frame-19.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-600-frame-528.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/stacked-beat-lines/1x1-duration-600-frame-599.png",
                "sha256": "59f8df38458ff5d8711b59b96c865ffd1bff20bf0152a0f27ccc9f18d8458410",
                "alphaMass": 18303
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
        "note": "Three lines land on the beat, the middle one in accent; title card."
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
      "bundleSha256": "8ba5fc4caf8d5be02f90ed8413f8400d488f2681e1c88055ea4c2dd12e28566d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.000638Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/stacked-beat-lines/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stacked-beat-lines/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stacked-beat-lines/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 19,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "ddc40c83f3eb3b8c950100bb1fddc85c1d79bdcfc9d217d10843f2219b4be9fe",
        "loop": "bbc5239aef26f3f760820b2739cd2fc8c23c2aa54b657b3f0d22f006b3ad0714",
        "detail": "699c6c1e4790b214816bf946d891e7dd11c9d76a9107ec91720f3813d72bd3b0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/stacked-beat-lines/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stacked-beat-lines/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stacked-beat-lines/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 19,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "c4d8387c5922122157d72818114ee1d400f7e15a870abf3a82e5d4fffa6337d3",
        "loop": "f19d073c969de419cc103ac26c70c1f690bdaead03a620dd79344ef54888f56a",
        "detail": "d07378b666bd14e54c9281fc394c1bf91c51f779bc8f8437e538c5c6478ffb06"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/stacked-beat-lines/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stacked-beat-lines/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stacked-beat-lines/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 19,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "6414d4f478e1bcd152401fa7dd5c0d11e48e4827b049757269a60d93f414b61b",
        "loop": "19017df2cd9272c5b7269d60316f6eaa3f67f8392ec86ac64dc089107b80cb0e",
        "detail": "4720d5640eb73c6299ef6d743f297800ccdf76fde6e19d50e668cc38fa393057"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8ba5fc4caf8d5be02f90ed8413f8400d488f2681e1c88055ea4c2dd12e28566d/index.mjs",
    "sha256": "8ba5fc4caf8d5be02f90ed8413f8400d488f2681e1c88055ea4c2dd12e28566d",
    "bytes": 159997,
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
    "at": "2026-10-07T02:30:27.382Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
