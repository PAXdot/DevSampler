// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/chart",
  "tags": [
    "chart",
    "bar chart",
    "stats",
    "growth",
    "data",
    "metric"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 44,
      "out": 0
    },
    "markers": {
      "settled": 48
    },
    "beats": [
      0,
      8,
      44
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
      "key": "values",
      "type": "list"
    },
    {
      "key": "labels",
      "type": "list",
      "maxChars": 8
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "bars",
      "prop": "scaleY",
      "from": "0",
      "settledBy": 44,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party"
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
    "title": "Weekly installs",
    "values": [
      12,
      19,
      27,
      41,
      68
    ],
    "labels": [
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "highlight": -1,
    "suffix": "k",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
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
      "key": "values",
      "label": "Values",
      "type": "list",
      "max": 8
    },
    {
      "key": "labels",
      "label": "Labels",
      "type": "list",
      "max": 8
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "number",
      "step": 1,
      "min": -1,
      "max": 7
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 4
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
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Bar Chart Rise",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "bar-chart",
    "bundleSha256": "b1645e5c1acc1cc14fa1c16b44c403ba832149a1153d25209dfdb5a9e23f4ee1",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:07:22.639Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-paper.png",
        "sha256": "b4d2f8d147b24ee8b50a1cb215fa613aa3108099b1fc942af7992fed488b8639"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-night.png",
        "sha256": "78c09142b814002585a58e9be0828e237f4cbaa19dc4a1926ee8610aeb83697b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-color.png",
        "sha256": "e1938153ed9a95c7654b5b4fad11dcbf1d6c7e08ac7709ce02c974984cdf5f33"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-paper.png",
        "sha256": "8c60574e0971f67cf1ac1b32c128155edabbd37a758ebb2bc5e7fa7c1b3d8401"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-night.png",
        "sha256": "b4ccaeac8b38cac8c65bd67dc137532768a13e994546b49abe7b3a22fc000043"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-color.png",
        "sha256": "3c447a7d920b864f9432e7529d1603df7d3c6994cb5ba4c4295711f6156a838f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-paper.png",
        "sha256": "e85435854cb969ff924faf2423d7b000a87cdd350cca780195c4bd5749224dc0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-night.png",
        "sha256": "350c674fb95c4a458b43f72ddc44df0c2e633a137b021c3c35d40f3d9b7cd780"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-color.png",
        "sha256": "2d2e9618ed9a15430bac87103288e1afb6e33f8fefd92a519ce891518b17805f"
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
          "bar-chart--16x9",
          "bar-chart--9x16",
          "bar-chart--1x1"
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
            "paperNight": 44.221706814236114,
            "paperColor": 17.762803819444443,
            "region": {
              "left": 253,
              "top": 250,
              "width": 1414,
              "height": 553
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 52.228732638888886,
            "paperColor": 15.70486111111111,
            "region": {
              "left": 176,
              "top": 458,
              "width": 728,
              "height": 991
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.36707899305556,
            "paperColor": 18.22214084201389,
            "region": {
              "left": 142,
              "top": 248,
              "width": 795,
              "height": 555
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
            "occupancy": 1.1053427326756322,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0993026084533608,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1053427326756322,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0223700502899207,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0213363090863918,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0272596746603306,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1074516659849432,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1034318777236547,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1088464413829089,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 27.78949652777778,
        "frames": [
          7,
          48,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 27.78949652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-60-frame-7.png",
                "sha256": "e3950df3c768c77b4ee6d1f922a3fac9e154b6ca0caec1f7498e38b8a49d95b2",
                "alphaMass": 1325
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-60-frame-48.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-60-frame-52.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-60-frame-59.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 27.78949652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-600-frame-7.png",
                "sha256": "e3950df3c768c77b4ee6d1f922a3fac9e154b6ca0caec1f7498e38b8a49d95b2",
                "alphaMass": 1325
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-600-frame-48.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-600-frame-528.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/16x9-duration-600-frame-599.png",
                "sha256": "34b31f7c41c2ff15281c7c44d34cd1ba96eef6817bc513df264699b5ca8a71af",
                "alphaMass": 23849
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 18.689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-60-frame-7.png",
                "sha256": "a87e7b46c27f12cc73d5b2967d53136872f63a05c209c55e0a90845aa3e5f5b5",
                "alphaMass": 4543
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-60-frame-48.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-60-frame-52.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-60-frame-59.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 18.689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-600-frame-7.png",
                "sha256": "a87e7b46c27f12cc73d5b2967d53136872f63a05c209c55e0a90845aa3e5f5b5",
                "alphaMass": 4543
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-600-frame-48.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-600-frame-528.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/9x16-duration-600-frame-599.png",
                "sha256": "4239a32fc32334195fe40e421c831d761c4333d58967fff227af271428080ac2",
                "alphaMass": 18691
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 29.44585503472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-60-frame-7.png",
                "sha256": "af121f2e1684353433c9fd3d3bf99a9ee684ee0d2378e9d3602c68e40eb11f4e",
                "alphaMass": 1659
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-60-frame-48.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-60-frame-52.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-60-frame-59.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 29.44585503472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-600-frame-7.png",
                "sha256": "af121f2e1684353433c9fd3d3bf99a9ee684ee0d2378e9d3602c68e40eb11f4e",
                "alphaMass": 1659
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-600-frame-48.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-600-frame-528.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/bar-chart/1x1-duration-600-frame-599.png",
                "sha256": "a0f3ea4b8983f39663a7a4e2c6c2bf51f3cc4db774104f611fd1b9f7ef6a1ec9",
                "alphaMass": 24669
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
        "note": "Weekly bars rise and the last one is highlighted with its value."
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
      "bundleSha256": "b1645e5c1acc1cc14fa1c16b44c403ba832149a1153d25209dfdb5a9e23f4ee1",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.998775Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/bar-chart/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-chart/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-chart/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "c8ca8c847df7f6cedb55489bafbc8adb196b2bdfc71d5908d6680c4b5a44b044",
        "loop": "3dab4840e6979175eb819cb4766d8925e706887d12061aca1a46736b5b55800e",
        "detail": "5f98975710f64d1f7e7ba52bfc3ed34c3fcb49e3cefa0298b108c0ba063b0ef3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/bar-chart/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-chart/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-chart/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "248aa13c9520d2476f8d1472ada0592e75834a428f42c596fd7623f6389b9535",
        "loop": "714bfdf8e3e43fe4a2e36d669df60302a06b5c4c16ac908a3ebcfcf80f94b89d",
        "detail": "7b779f91e22f3fb3f3ed29df9bea37e671dc767057b128d11d00cf0f9b4a132c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/bar-chart/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-chart/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-chart/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "50e8be7b933e05585a67e5b70e7953313c81f302bfd77276ec2118200d621c0f",
        "loop": "bc8c3e804df6c5b1a6b4f386c441d5b8db3a45e9a194eb0d035507b422e6ddee",
        "detail": "5a01d98258683cb1ceb8e9644dcf51c47bec192d31b9e79e193f2116096e6265"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b1645e5c1acc1cc14fa1c16b44c403ba832149a1153d25209dfdb5a9e23f4ee1/index.mjs",
    "sha256": "b1645e5c1acc1cc14fa1c16b44c403ba832149a1153d25209dfdb5a9e23f4ee1",
    "bytes": 161057,
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
    "at": "2026-10-07T02:30:09.573Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
