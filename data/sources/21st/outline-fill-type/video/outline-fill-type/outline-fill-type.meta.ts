// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/reveal",
  "tags": [
    "outline",
    "stroke",
    "typing",
    "camera",
    "zoom",
    "title",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 100,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 50,
      "pullback": 40
    },
    "beats": [
      4,
      40,
      48
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
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "line1",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "letters",
      "prop": "fill",
      "from": "outline",
      "settledBy": 40,
      "easing": "linear"
    },
    {
      "target": "camera",
      "prop": "scale",
      "from": "3",
      "settledBy": 48,
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
      100
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V16 (outline to fill type, pull-back camera); own copy"
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
    "line1": "Motion",
    "line2": "for every UI",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "cameraZoom": 3,
    "charFrames": 2,
    "strokeWidth": 1.6
  },
  "fields": [
    {
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 24,
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "cameraZoom",
      "label": "Camera zoom",
      "type": "number",
      "min": 1,
      "max": 4
    },
    {
      "key": "charFrames",
      "label": "Char frames",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    },
    {
      "key": "strokeWidth",
      "label": "Stroke width",
      "type": "number",
      "min": 1,
      "max": 6
    }
  ],
  "name": "Outline Fill Type",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "outline-fill-type",
    "bundleSha256": "d50209cfc409f37ef857c242005c818a078208a8ce55b585224a1e4f33a496e9",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:57:38.365Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-paper.png",
        "sha256": "e47ae6a10bd068d55f4e1f644847ee74996738be02d74284654e3c0325a235c4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-night.png",
        "sha256": "5b8757bdc8718f3f2663bc23028b9a4922b1b8349e92da819bb9e5c2ed77d632"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-color.png",
        "sha256": "fb37272a38724fd11c3f4d1115c1da6d58307b21953cd9c3367ece3bf7a7d7d6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-paper.png",
        "sha256": "310c859d7216f5b910db65c2020e3e9f486efe57915ecbf0d9c4b82528ed7e9e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-night.png",
        "sha256": "84c05c1882a17745d5eb8db1e7b7025e5b02d56140b9214b83307c2ac61d9387"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-color.png",
        "sha256": "331630386d069e0ff0817244832b55e99f351499b7157a2ac57ecf01c005f566"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-paper.png",
        "sha256": "340909a48f3b43a931c361581ddf89f49e085563524b462b52f3767d69a85c9e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-night.png",
        "sha256": "22695687627fa9e638c8cb2c0a8a7bf511f2542b05cf3f135930295547242cb4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-color.png",
        "sha256": "6582df2ad70cccffd7881e9ccfd2991e447502d105fb29effcb18d1572e06dee"
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
          "outline-fill-type--16x9",
          "outline-fill-type--9x16",
          "outline-fill-type--1x1"
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
            "paperNight": 76.542236328125,
            "paperColor": 43.14189995659722,
            "region": {
              "left": 447,
              "top": 349,
              "width": 1024,
              "height": 407
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 64.950927734375,
            "paperColor": 35.08832465277778,
            "region": {
              "left": 171,
              "top": 486,
              "width": 746,
              "height": 931
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 76.82318793402777,
            "paperColor": 42.24297417534722,
            "region": {
              "left": 251,
              "top": 432,
              "width": 577,
              "height": 229
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
            "occupancy": 0.5732436706196111,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5701011543163219,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36240745333627283,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9602117327984007,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.974054752055572,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6578353113364688,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.32206908064246886,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3213299256221312,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20351064046255601,
            "bad": [],
            "measured": 16
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 39.16417100694444,
        "frames": [
          7,
          50,
          99
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 39.16417100694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-60-frame-7.png",
                "sha256": "aff9b72e37939e04a897049942cd9ed96ed91b2686512256bf1b2dc1fd8299d4",
                "alphaMass": 38514
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-60-frame-50.png",
                "sha256": "83d8c05092282f342d2346b62b1c61eac138cc13167d98651a40787bb0937db9",
                "alphaMass": 28655
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-60-frame-52.png",
                "sha256": "0983d60963994f4e4762e524bca656169dec76680ceba38c800e8055195d4cb6",
                "alphaMass": 28655
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-60-frame-59.png",
                "sha256": "b4a7a1f4690763cc0148a0767d4fd3fef7e53eac89171cdaf0f3991980a8e606",
                "alphaMass": 28655
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 39.16417100694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-600-frame-7.png",
                "sha256": "aff9b72e37939e04a897049942cd9ed96ed91b2686512256bf1b2dc1fd8299d4",
                "alphaMass": 38514
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-600-frame-50.png",
                "sha256": "9519758bee4db238e2a58dad3e730aed5ab4f7b255a0b9955251d16720664485",
                "alphaMass": 28655
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-600-frame-528.png",
                "sha256": "bb06d410a69aea154e47abd9f52814cb012c6292d5434ec13b82ef9f6c307659",
                "alphaMass": 28655
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/16x9-duration-600-frame-599.png",
                "sha256": "49fc69172d01f652d45170fbffff3439cc38a75a62bcba46c9090ff710428c23",
                "alphaMass": 28655
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 46.26844618055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-60-frame-7.png",
                "sha256": "72d3bbe9add1ec487a9557c93593302835cd0613dcab79522ae8847a9d08be06",
                "alphaMass": 25405
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-60-frame-50.png",
                "sha256": "6ae7be8d37ea997c1684b871ac955395575be7e30775b214267dddf644bd2707",
                "alphaMass": 40860
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-60-frame-52.png",
                "sha256": "6edcb8d89adb3011a0452ed19dbb35cac582daeb754229bb578aca297e537133",
                "alphaMass": 40860
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-60-frame-59.png",
                "sha256": "00beee80a4f41b89306b36f112440b7fc4e229769de2c3d26e045182372a6fd2",
                "alphaMass": 40860
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 46.26844618055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-600-frame-7.png",
                "sha256": "72d3bbe9add1ec487a9557c93593302835cd0613dcab79522ae8847a9d08be06",
                "alphaMass": 25405
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-600-frame-50.png",
                "sha256": "577b18db48bdefd28f512d48a883f75f8b0646b48d460456f9332183903e4314",
                "alphaMass": 40860
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-600-frame-528.png",
                "sha256": "7da973f1bc4563c77f81282b481f79c85815bde0f8a3d49dcfb3ea715b262d2a",
                "alphaMass": 40860
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/9x16-duration-600-frame-599.png",
                "sha256": "59f2c203a40435bc64bfc4f97e1361e6096743348c38dae3e0608f0490213d1b",
                "alphaMass": 40860
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 26.4423828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-60-frame-7.png",
                "sha256": "10d76dc16e28eb5d6a5f55a0b4b6166688d6d6116714f31263f73ebc30e41330",
                "alphaMass": 21671
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-60-frame-50.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-60-frame-52.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-60-frame-59.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 26.4423828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-600-frame-7.png",
                "sha256": "10d76dc16e28eb5d6a5f55a0b4b6166688d6d6116714f31263f73ebc30e41330",
                "alphaMass": 21671
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-600-frame-50.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-600-frame-528.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/outline-fill-type/1x1-duration-600-frame-599.png",
                "sha256": "b8e5b7a641345dc1099a2197533962748fae8bb311c2b20d5c6345c46847ee31",
                "alphaMass": 17186
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
        "note": "Giant outlined letters fill and settle into a two-line title."
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
      "bundleSha256": "d50209cfc409f37ef857c242005c818a078208a8ce55b585224a1e4f33a496e9",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.982063Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/outline-fill-type/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/outline-fill-type/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/outline-fill-type/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "7da951c72b807215f2cbbf3dc4fb83fce82466668b039bd58f5dee77e98b8863",
        "loop": "73e847849c514d36fa0201023550aa809cc9191474666e84126e68402c4174a0",
        "detail": "2db2004347b4a22b5827676a6d2c54fc7f787f509f971ad0e264348c7d5d1ab0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/outline-fill-type/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/outline-fill-type/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/outline-fill-type/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "cc1e8f5810c057471262f7053f9e8e5fd3ec7722e6a6a7f82a06a2d76defcd6e",
        "loop": "34dd8a6e5af53bf123f00d96dffb98eed4276b124ad84fcfc501b032d6ba8e3e",
        "detail": "82a635f8547be4e66dfb9f539a954287d7ca8a6e5b112471a07984da793a51d6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/outline-fill-type/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/outline-fill-type/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/outline-fill-type/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "1c826db7141b10e4387a16d70be341827f18c683ee0715eb8bb2cdc70dab6c32",
        "loop": "666bd93c513f037e7ba45d2bd032fbc6c0fa30eba8592f8bf13dcda73d45dfb6",
        "detail": "4886e2ebe24a4511528e3936f7e6aa1d7b8bb9cf801f97cae87207c823683dce"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d50209cfc409f37ef857c242005c818a078208a8ce55b585224a1e4f33a496e9/index.mjs",
    "sha256": "d50209cfc409f37ef857c242005c818a078208a8ce55b585224a1e4f33a496e9",
    "bytes": 159393,
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
    "at": "2026-10-07T02:28:54.661Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
