// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/social",
  "tags": [
    "3d",
    "buttons",
    "isometric",
    "social",
    "handle",
    "end card",
    "press"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 60
    },
    "beats": [
      4,
      30,
      34,
      38,
      42,
      50
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "16:9",
      "9:16"
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
      "key": "handle",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "icons",
      "type": "list"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "faceColor": "colors.background",
    "ink": "colors.text"
  },
  "motionBeats": [
    {
      "target": "tiles",
      "prop": "z",
      "from": "0",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "tiles",
      "prop": "press",
      "settledBy": 56,
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
      "frame": 40
    },
    "hover": [
      0,
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V11"
  },
  "job": "logos",
  "language": "isometric",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "icons": [
      "play",
      "message",
      "globe",
      "heart"
    ],
    "handle": "@yourstudio",
    "iso": true,
    "faceColor": "#FFFFFF",
    "ink": "#0A0A0A",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "icons",
      "label": "Icons",
      "type": "list",
      "max": 6
    },
    {
      "key": "handle",
      "label": "Handle",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "iso",
      "label": "Iso",
      "type": "boolean"
    },
    {
      "key": "faceColor",
      "label": "Face color",
      "type": "color",
      "brand": "colors.background"
    },
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Extruded Buttons",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "extruded-buttons",
    "bundleSha256": "43936929cc0a2a9fc20198886ccfdd533673e8fa295f26369eba5f4dcd355617",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:59:24.014Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-paper.png",
        "sha256": "b5eb951d7253842820a0a71afea4e1319bf92450c8e85325e84e8f0a1add4663"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-night.png",
        "sha256": "d405a6c44a52068f7de6c0b695d792cd1aab8f979df1832616a7c6cbb0b29505"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-color.png",
        "sha256": "60a3ff203394b33b04fca568be6037666f94c4491c69e32034f5f93995cf05e6"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-paper.png",
        "sha256": "71d1216aa54ef4c6d1c7ecf68ea6516c4c91668c8a3274f689686a064dd6182a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-night.png",
        "sha256": "61ace5103cefd15a6cf4b5df68cbacc22b7779b0a7b9fdb10f07864e013767d4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-color.png",
        "sha256": "6068e6195303126e37feeda333ec9b8420d972706da08f83d2398534a3468627"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-paper.png",
        "sha256": "11381a9561719d2a9d4b37ff7d199660432c1ab2ac28a6cab9c61039cb20bed6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-night.png",
        "sha256": "a69928172a1819073f609856c9fe73297660dc99ed5afe888d3cc44452451aa2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-color.png",
        "sha256": "1a892a6a6264ebba2f505394bdc42d5dabde6ca46e948e2a3bdd77c0ad76698c"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          },
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "extruded-buttons--1x1",
          "extruded-buttons--16x9",
          "extruded-buttons--9x16"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 90.60856119791667,
            "paperColor": 17.460801866319443,
            "region": {
              "left": 164,
              "top": 273,
              "width": 774,
              "height": 530
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 90.60856119791667,
            "paperColor": 17.460801866319443,
            "region": {
              "left": 584,
              "top": 273,
              "width": 774,
              "height": 530
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 90.65481228298611,
            "paperColor": 17.553114149305557,
            "region": {
              "left": 88,
              "top": 636,
              "width": 898,
              "height": 616
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0384115494620345,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0384115494620345,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0384115494620345,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5841064965723944,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5841064965723944,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5841064965723944,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.757826278659612,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.757826278659612,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.757826278659612,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.365125868055557,
        "frames": [
          6,
          40,
          104
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 31.651041666666668,
            "retainedAlpha": 1.0290529616383324,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-60-frame-6.png",
                "sha256": "db2c525face760319196cbd5d84cacd838257e88bf8059330f076aec8460dac1",
                "alphaMass": 8239
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-60-frame-40.png",
                "sha256": "9c7dda278c9276819128395bd1eab70e27a78189b9808fc8746d1e7a40d301d9",
                "alphaMass": 102171
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-60-frame-52.png",
                "sha256": "1015a44fdb916fd6bae5b3c1ee9103477448e3a8c920b6268335155f9565fb41",
                "alphaMass": 102055
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-60-frame-59.png",
                "sha256": "c8caa7bd7108d415ef198b3ae68054994fc68e3f3c13f1bc77ac90f96d7ba606",
                "alphaMass": 105020
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 31.651041666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-600-frame-6.png",
                "sha256": "db2c525face760319196cbd5d84cacd838257e88bf8059330f076aec8460dac1",
                "alphaMass": 8239
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-600-frame-40.png",
                "sha256": "9c7dda278c9276819128395bd1eab70e27a78189b9808fc8746d1e7a40d301d9",
                "alphaMass": 102171
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-600-frame-528.png",
                "sha256": "c8caa7bd7108d415ef198b3ae68054994fc68e3f3c13f1bc77ac90f96d7ba606",
                "alphaMass": 105020
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/1x1-duration-600-frame-599.png",
                "sha256": "c8caa7bd7108d415ef198b3ae68054994fc68e3f3c13f1bc77ac90f96d7ba606",
                "alphaMass": 105020
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 18.365125868055557,
            "retainedAlpha": 1.0290317518439085,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-60-frame-6.png",
                "sha256": "6249c3b3a070825825e6a8b459cacb7bdfbfa46d1ca1d8354ae9a5e881162d91",
                "alphaMass": 4645
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-60-frame-40.png",
                "sha256": "e8d1e6b3280bc28e0b651b1770db64b9ad9587ba5a3526d2cafae403d26c85aa",
                "alphaMass": 57409
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-60-frame-52.png",
                "sha256": "310a3edb1b75cdaf27be85566f06266b010d18ebd9fde468c2448c46db1f9d38",
                "alphaMass": 57351
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-60-frame-59.png",
                "sha256": "8d840ba1234aaf2e5b0cd8dbb0ff6aca00731c1777dae5d6a5a4bd556e2cfbbf",
                "alphaMass": 59016
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.365125868055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-600-frame-6.png",
                "sha256": "6249c3b3a070825825e6a8b459cacb7bdfbfa46d1ca1d8354ae9a5e881162d91",
                "alphaMass": 4645
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-600-frame-40.png",
                "sha256": "e8d1e6b3280bc28e0b651b1770db64b9ad9587ba5a3526d2cafae403d26c85aa",
                "alphaMass": 57409
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-600-frame-528.png",
                "sha256": "8d840ba1234aaf2e5b0cd8dbb0ff6aca00731c1777dae5d6a5a4bd556e2cfbbf",
                "alphaMass": 59016
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/16x9-duration-600-frame-599.png",
                "sha256": "8d840ba1234aaf2e5b0cd8dbb0ff6aca00731c1777dae5d6a5a4bd556e2cfbbf",
                "alphaMass": 59016
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 25.869791666666668,
            "retainedAlpha": 1.0303507571552135,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-60-frame-6.png",
                "sha256": "cb2d5cea5db288cabe4a73511b65cabf40c5c0b78ccccc1f33410e8dbf96d78e",
                "alphaMass": 6348
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-60-frame-40.png",
                "sha256": "ee4094834ab54af0d4fa6ed7fba549d90e622404d10784e725c36055123c6454",
                "alphaMass": 77586
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-60-frame-52.png",
                "sha256": "959060817371f3169e7185d1177ebfd287652ada9a44b13c12b3be46efc61239",
                "alphaMass": 77461
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-60-frame-59.png",
                "sha256": "a8211187bbf7bd7e972cdcfcb8df4960a26e32ceec8003a967933d417c036130",
                "alphaMass": 79812
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 25.869791666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-600-frame-6.png",
                "sha256": "cb2d5cea5db288cabe4a73511b65cabf40c5c0b78ccccc1f33410e8dbf96d78e",
                "alphaMass": 6348
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-600-frame-40.png",
                "sha256": "ee4094834ab54af0d4fa6ed7fba549d90e622404d10784e725c36055123c6454",
                "alphaMass": 77586
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-600-frame-528.png",
                "sha256": "a8211187bbf7bd7e972cdcfcb8df4960a26e32ceec8003a967933d417c036130",
                "alphaMass": 79812
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/extruded-buttons/9x16-duration-600-frame-599.png",
                "sha256": "a8211187bbf7bd7e972cdcfcb8df4960a26e32ceec8003a967933d417c036130",
                "alphaMass": 79812
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Isometric social buttons extrude with a handle tag; logos and links."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "43936929cc0a2a9fc20198886ccfdd533673e8fa295f26369eba5f4dcd355617",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.962014Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/extruded-buttons/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/extruded-buttons/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/extruded-buttons/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "9303321024abbda5efbe5c004bec5246c5df8ffd48e3bb07f606d9d82aa4cf79",
        "loop": "5952e31b78a9aab7b70a5ae58372320ff6b328c220f01809a8c4bb640aeb7f06",
        "detail": "1ed5cb07663f1d420d85a95cf9416e177ad2ff91a25a3ecce34c834cebd1febf"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/extruded-buttons/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/extruded-buttons/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/extruded-buttons/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "e62f7a5eceb4ed78bf2f2e82ea3afb2190e4dd039561346acf2db7ee6a2d4ebd",
        "loop": "659a80a56a3ed2636021e2777ca8aab933ca9cd3d80111c51d57ace7eb4ee27d",
        "detail": "eb0ee8070503c313849e3e0b4d4726b43c85e224aef0be7ee2674bcdf441f156"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/extruded-buttons/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/extruded-buttons/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/extruded-buttons/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "dc8e36d01ae06b49d80aae7b08b808172e76d13f5973bd89eb7cf82ff45aa80b",
        "loop": "c8ad614d3057fbc93abb5d4b9cef44af83b59e9310d51c68d7a72747185345ea",
        "detail": "774184b73b33d10005b8b21fbef04818a14b0073f171c41db2bc5be7616c4567"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/43936929cc0a2a9fc20198886ccfdd533673e8fa295f26369eba5f4dcd355617/index.mjs",
    "sha256": "43936929cc0a2a9fc20198886ccfdd533673e8fa295f26369eba5f4dcd355617",
    "bytes": 162771,
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
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:24:30.050Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
