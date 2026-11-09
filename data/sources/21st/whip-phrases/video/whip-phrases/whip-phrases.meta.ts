// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/kinetic",
  "tags": [
    "whip",
    "motion blur",
    "phrases",
    "ad",
    "vertical",
    "social",
    "kinetic-type"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 40,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 72,
      "out": 0
    },
    "markers": {
      "settled": 72
    },
    "beats": [
      0,
      22,
      44,
      66
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "phrases",
      "type": "list",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "phrase",
      "prop": "x",
      "from": "right",
      "settledBy": 6,
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V12 (whip phrases with directional blur); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "slam"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "phrases": [
      "Too slow.",
      "Too stiff.",
      "Too generic.",
      "Make it move."
    ],
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "background": "#09090B",
    "fontFamily": "Geist",
    "holdFrames": 16,
    "direction": "left",
    "accentLast": true,
    "glow": true
  },
  "fields": [
    {
      "key": "phrases",
      "label": "Phrases",
      "type": "list",
      "max": 6,
      "role": "headline"
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
      "key": "holdFrames",
      "label": "Hold frames",
      "type": "number",
      "step": 1,
      "min": 6,
      "max": 60
    },
    {
      "key": "direction",
      "label": "Direction",
      "type": "select",
      "options": [
        "left",
        "right"
      ]
    },
    {
      "key": "accentLast",
      "label": "Accent last",
      "type": "boolean"
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "boolean"
    }
  ],
  "name": "Whip Phrases",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "whip-phrases",
    "bundleSha256": "e65a507ea157b241029d7298b3680da5509c8e79b2d089d3ea7201181f5f49e9",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:04.995Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-paper.png",
        "sha256": "6d856a54b30fe7885ac94d6e9d9d9d6e7addde443689c73daf9468bead801253"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-night.png",
        "sha256": "317b2aba4b28e48b0d8dc1f4719369df04dcd0d6793f5d24798a3334ff5930e2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-color.png",
        "sha256": "af14d6a74dff4c03b93e1d5f4445fa8f2d6893a11048b8224f2249a158ffbaaf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-paper.png",
        "sha256": "defdef5ebb096101abd53551c9d7161317be16a8094c924ed0eaa999d4e3f57e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-night.png",
        "sha256": "20964485ca9d368cbb2e552156c11e6c649e4fb1cbc1fe5d47a891922167fdb7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-color.png",
        "sha256": "64b1e25087cb4df4a45aa28b237cb4407d500fa14c68dee3d9d7409d07fc6609"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-paper.png",
        "sha256": "a780f0746525f5ee3fba175348e61a31197eef2e5abf49f5493691f0248b4835"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-night.png",
        "sha256": "600dc952b33eb2f658f53d3027a2a1f672f291abe34ac222f25e7cfed6d175d9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-color.png",
        "sha256": "be12cbb8a3045dbad436e1cf07be8ea398905320787e57fd67b15ddcff6b1ac0"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "whip-phrases--9x16",
          "whip-phrases--1x1",
          "whip-phrases--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.537733289930557,
            "paperColor": 64.48375108506944,
            "region": {
              "left": 108,
              "top": 240,
              "width": 888,
              "height": 1398
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.455810546875,
            "paperColor": 92.26969401041667,
            "region": {
              "left": 220,
              "top": 493,
              "width": 647,
              "height": 86
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 44.10291883680556,
            "paperColor": 91.86678059895833,
            "region": {
              "left": 448,
              "top": 465,
              "width": 1034,
              "height": 137
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6457598471487361,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6319948568419138,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7070584792559,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06328341521793904,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06210481734989379,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.04194593360892598,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.09063569486436551,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.08904458774250443,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06007727969016826,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.049587673611111,
        "frames": [
          10,
          72,
          104
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 40,
            "averageChannelDifference": 23.51095920138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-40-frame-4.png",
                "sha256": "5277f6d3c7b2d863662bbafedf6b4437244e48484684edc300fb24e0b3eccb79",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-40-frame-39.png",
                "sha256": "2a0eb6f82fe8c31d9975e88d0cb246818f2abec432bb273616c2a5da417f0f1c",
                "alphaMass": 587520
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-40-frame-35.png",
                "sha256": "2a0eb6f82fe8c31d9975e88d0cb246818f2abec432bb273616c2a5da417f0f1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 23.46799045138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-600-frame-10.png",
                "sha256": "8fc3a51253b3e6b76deb882c73868ace4a8bfea8065fd22d086953e6de1943ff",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-600-frame-72.png",
                "sha256": "2a0eb6f82fe8c31d9975e88d0cb246818f2abec432bb273616c2a5da417f0f1c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-600-frame-528.png",
                "sha256": "2a0eb6f82fe8c31d9975e88d0cb246818f2abec432bb273616c2a5da417f0f1c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/9x16-duration-600-frame-599.png",
                "sha256": "2a0eb6f82fe8c31d9975e88d0cb246818f2abec432bb273616c2a5da417f0f1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 40,
            "averageChannelDifference": 2.3394097222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-40-frame-4.png",
                "sha256": "5a51ae826de5d23c2e519d87eed4bc54d45b44d275cc386d16b192fb1e288870",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-40-frame-39.png",
                "sha256": "165a70171ec10270ba4949dc759a2a7f284b133ae9160cbd9f2657e4452a9c16",
                "alphaMass": 587520
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-40-frame-35.png",
                "sha256": "165a70171ec10270ba4949dc759a2a7f284b133ae9160cbd9f2657e4452a9c16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.2948133680555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-600-frame-10.png",
                "sha256": "ffdb02cab9fe4be96ee2ac58f3132252598473780c395c0aa34ccc4fc62122e5",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-600-frame-72.png",
                "sha256": "165a70171ec10270ba4949dc759a2a7f284b133ae9160cbd9f2657e4452a9c16",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-600-frame-528.png",
                "sha256": "165a70171ec10270ba4949dc759a2a7f284b133ae9160cbd9f2657e4452a9c16",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/1x1-duration-600-frame-599.png",
                "sha256": "165a70171ec10270ba4949dc759a2a7f284b133ae9160cbd9f2657e4452a9c16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 40,
            "averageChannelDifference": 3.0660807291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-40-frame-4.png",
                "sha256": "1f2101183a705185c5559311f2ff29d9ba1474c74169a1a6baf5bf80feb48859",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-40-frame-39.png",
                "sha256": "645956bc980b2060d2fd142217cb224b2d53c1ee3884e402d132c53f855142de",
                "alphaMass": 587520
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-40-frame-35.png",
                "sha256": "a479371f20e4c03db110d25b5f3c546ca56305fa37df8dc901fafa3f12161964",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.049587673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-600-frame-10.png",
                "sha256": "ed478e05cf2edad25fc17c57fcd3e727d59af6e30eb76eb35a9a975cb8a9b106",
                "alphaMass": 587520
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-600-frame-72.png",
                "sha256": "8264243820be13fb387213b1e51c19fe220db06412c7fdb009da2d5891abe4e9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-600-frame-528.png",
                "sha256": "4006aa78951bd4a26edc4526cf23cff5a4ca0d8088a05b648eadddcf5f7397af",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/whip-phrases/16x9-duration-600-frame-599.png",
                "sha256": "17b32d8fa5e016c859f03e15d39b1dbe6b0745ab8c97e8ef2d0090942e366d97",
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
        "note": "Short phrases whip in one after another and end on the payoff line."
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
      "bundleSha256": "e65a507ea157b241029d7298b3680da5509c8e79b2d089d3ea7201181f5f49e9",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.963404Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/whip-phrases/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/whip-phrases/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/whip-phrases/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "a1602aad773fb23683214919ad09f94b2e5f25109912cc424daff7e8a4b961d6",
        "loop": "7782efa8346382bb0ddc09da8cbf9771f96c671499a2b0e9607875ef056317b5",
        "detail": "d9598dde7c047e36a2725c3ae954b3bae84a8101101648b14ab08e60bbf29e02"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/whip-phrases/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/whip-phrases/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/whip-phrases/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "6a424cf5ed85a6c3ab8610ec9c060eb8315cc9a6eaf3276b2a8ced4be5124e89",
        "loop": "c3b8505fcb48b5c4ccf8d89a65664360db9071d7ef19426a8193f18de284dc37",
        "detail": "2b5d9a12c14a78d2d14de0d50117fb78a9f022e55cfb7d0f021a80e59dadb94f"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/whip-phrases/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/whip-phrases/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/whip-phrases/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "59f3a58a679fb9d69330b8b84024eb0dda0d74297caf0b7de4ab4a4583c0e9b2",
        "loop": "accfd5fbefa6fc967f2af865c2175e0835f7825083b6e6b8d156535198654fab",
        "detail": "e37e24a748425f3b02fdef6407089fae3b44ebb126363f63ed16221a1cef68f5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e65a507ea157b241029d7298b3680da5509c8e79b2d089d3ea7201181f5f49e9/index.mjs",
    "sha256": "e65a507ea157b241029d7298b3680da5509c8e79b2d089d3ea7201181f5f49e9",
    "bytes": 160824,
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
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:24:56.819Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
