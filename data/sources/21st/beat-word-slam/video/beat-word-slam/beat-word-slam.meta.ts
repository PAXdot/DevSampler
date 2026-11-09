// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/kinetic",
  "tags": [
    "beat",
    "music",
    "word slam",
    "flash",
    "hype",
    "launch",
    "kinetic-type"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 96,
      "min": 24,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 54,
      "out": 0
    },
    "markers": {
      "settled": 56
    },
    "beats": [
      2,
      14,
      26,
      38,
      50
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "words",
      "type": "list",
      "maxChars": 16,
      "lines": 1,
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
      "target": "word",
      "prop": "scale",
      "from": "1.06",
      "settledBy": 54,
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
      96
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V02 (one word per beat with flash frames); own copy"
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
    "words": [
      "Design.",
      "Animate.",
      "Export.",
      "Share.",
      "Ship."
    ],
    "bpm": 150,
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "background": "#09090B",
    "fontFamily": "Geist",
    "flash": true,
    "variation": "glow-shift"
  },
  "fields": [
    {
      "key": "words",
      "label": "Words",
      "type": "list",
      "max": 8,
      "role": "headline"
    },
    {
      "key": "bpm",
      "label": "Bpm",
      "type": "number",
      "step": 1,
      "min": 60,
      "max": 200
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
      "key": "flash",
      "label": "Flash",
      "type": "boolean"
    },
    {
      "key": "variation",
      "label": "Variation",
      "type": "select",
      "options": [
        "glow-shift",
        "invert",
        "none"
      ]
    }
  ],
  "name": "Beat Word Slam",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "beat-word-slam",
    "bundleSha256": "3c39fbbce80525d7d39c360ee73ef3492c134e25aaeaf756a552e426a1bc89b6",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:53:31.754Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-paper.png",
        "sha256": "67b8eb5183cefd39d667f0cdef4408b032c60080009f3a2a26a4b26853863798"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-night.png",
        "sha256": "4bde94b64f3a119c65bb2c3f20fba442529a3a1d6e390900a23fa6a90cfe194f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-color.png",
        "sha256": "0678981719eba94586fa4220bfaf935b9181921c8426c77b0ebc10289ddd3d5a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-paper.png",
        "sha256": "de0732395045e12a425edbe7632944b643f93cdc556a7d6ebbe36fb067c6f548"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-night.png",
        "sha256": "9f8364ea0de5a71e87a44a541611fc3eb5d9f7072369ca4dfd445ee895e684c8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-color.png",
        "sha256": "1cda6dff5a48d8ab4de8826d476691f86ef0b4dffaf58b2adf35cd67004f4f33"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-paper.png",
        "sha256": "ccfe028bdae54873b9fcfb37c6785e11e015ee3bfe29725a8af0d2635329d106"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-night.png",
        "sha256": "ffccf023050678c743fbd9c907b7eb0d5ec8aded541fb4f4eddceb73ba38f9e4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-color.png",
        "sha256": "8627ff14b709360e6c12e3e88b54ef572daef3c903bb5f17e171b3c63cf83e35"
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
          "beat-word-slam--16x9",
          "beat-word-slam--9x16",
          "beat-word-slam--1x1"
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
            "paperNight": 33.21137152777778,
            "paperColor": 71.49205186631944,
            "region": {
              "left": 734,
              "top": 447,
              "width": 459,
              "height": 215
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 56.83270941840278,
            "paperColor": 30.63327365451389,
            "region": {
              "left": 97,
              "top": 240,
              "width": 886,
              "height": 1469
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.378282335069443,
            "paperColor": 71.02365451388889,
            "region": {
              "left": 359,
              "top": 465,
              "width": 367,
              "height": 172
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
            "occupancy": 0.06324035690665156,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06274211073318217,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.029745091516544895,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.884103319825873,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8816811189496376,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8895532717974023,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.07157248187340781,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.07134769774393526,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.03406269343585629,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.733181423611111,
        "frames": [
          8,
          56,
          95
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 24,
            "averageChannelDifference": 124.20399305555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-24-frame-2.png",
                "sha256": "be6c9ac602b0110b71d4e9e1a2cb0b0986059a82e8e67c446a652cadf8e89888",
                "alphaMass": 587520
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-24-frame-23.png",
                "sha256": "9b07e09e1ef5afaa645d9e174904ce18f117a264b50e2bb9ec3b98e58b652edd",
                "alphaMass": 587520
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-24-frame-21.png",
                "sha256": "8957e0b1cd501e53918e16636c0d33210a542f39653c150d9734323c2b23e98f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.733181423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-600-frame-8.png",
                "sha256": "dc177015054ead7339fcd5bb46d9128c13591e8a3e79bf6b9a823eff68b7dac9",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-600-frame-56.png",
                "sha256": "16f5db9b2da6c041bac45e083dd1055b923bca5a60aa1db9acc4c4ceaa683eb2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-600-frame-528.png",
                "sha256": "16f5db9b2da6c041bac45e083dd1055b923bca5a60aa1db9acc4c4ceaa683eb2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/16x9-duration-600-frame-599.png",
                "sha256": "16f5db9b2da6c041bac45e083dd1055b923bca5a60aa1db9acc4c4ceaa683eb2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 24,
            "averageChannelDifference": 5.635199652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-24-frame-2.png",
                "sha256": "fd1fe56b0b70cacb60d2d33ae2bd5322325c9535d8b76bf00844ef087e624a10",
                "alphaMass": 587520
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-24-frame-23.png",
                "sha256": "06eb19b0955d524f14e20689f26cd7352bfafd609a49bcb365e7fb911b2ef039",
                "alphaMass": 587520
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-24-frame-21.png",
                "sha256": "7258dde7a44801d353b2c757ac17f1ba983690c1911cd9a1e573627e99dd532c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.839735243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-600-frame-8.png",
                "sha256": "dea106c0e61aa9c316ed71d5a22dd9ce86ba2e3c340c8c17ba1825d55557569a",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-600-frame-56.png",
                "sha256": "3df84bf8d932dd2a063823bf036f17ba52cd5fc48d4f8529ae04b7e1a226bb26",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-600-frame-528.png",
                "sha256": "e2a9563baa786b1f12010cc170e062abe4df77a2c83c84f6546d50c07451a5a8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/9x16-duration-600-frame-599.png",
                "sha256": "d5fad430ff377fa794e86e95850590c9cb0e66b7d38b0fe226d0ba00662c9798",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 24,
            "averageChannelDifference": 123.93619791666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-24-frame-2.png",
                "sha256": "ff5cb2dd6909dc687bf066e9532d318b27156c4f735af62126b2ca2f6af07edb",
                "alphaMass": 587520
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-24-frame-23.png",
                "sha256": "8e374968c6f02eec4646b989e8bf5e464a8c4b9b422cd6f98fe7851796b268b5",
                "alphaMass": 587520
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-24-frame-21.png",
                "sha256": "5c114066fa1b25cecc9258d234c6443d9f9f983e13d468701608e4e84d6a2af3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.2470703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-600-frame-8.png",
                "sha256": "bd1ca18e63ee8de0162db2e4333235d7808fc433cda110fd956bf0fba429490f",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-600-frame-56.png",
                "sha256": "81556f7b01cda7a13fe0a7976421d6989f3b42d067877f6a9ec1b0e4962951b5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-600-frame-528.png",
                "sha256": "ff9b1a03f657c4be6d011adf901cada12900ce91e08331390bb9f866857f9d00",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/beat-word-slam/1x1-duration-600-frame-599.png",
                "sha256": "e1dc1b3f05e354810e14802709ec9f2b221c17e063325e1a08e3151e4a1cb235",
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
        "note": "One word per beat slams in, ending on the payoff word."
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
      "bundleSha256": "3c39fbbce80525d7d39c360ee73ef3492c134e25aaeaf756a552e426a1bc89b6",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.920727Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/beat-word-slam/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/beat-word-slam/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/beat-word-slam/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 56,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "aed891dd4a5b748956a6524077da93c0ff10cde19b8a3b082da4c8fd86916d70",
        "loop": "fee88cf6110e58c33610c19eb9207c1dbf3512095f2abc69fe9079f16c838a27",
        "detail": "afad686414ac5690ad7693618e67f307b7016f7a627fdaa679a84fc380339d7d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/beat-word-slam/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/beat-word-slam/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/beat-word-slam/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 56,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "2aa483383076d840b78f1c05b248b9214eb22b552fd8b48ad4b4cc4836d66c45",
        "loop": "7757bb70f43b6f77736cb38c3c73db514b7e23563f1f25f4171c413ad7012d71",
        "detail": "faf3c40a7e75ab808f47c8d4ced31e4c9a983bb9038f5229bbe24a2aa84d6e8a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/beat-word-slam/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/beat-word-slam/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/beat-word-slam/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 56,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "e93a4b80ee6986b3518f6b2b6407d0f5e956b6d31eb236e71afe7696f185e16e",
        "loop": "8895e8be24aa6acef4c87c53eedba54d42ae1c577b0fd3bfbc6ee9a36a314b54",
        "detail": "b872d68e510558536054b1bb04508ac16613606da5ff6c2ca7e3c4268e07a8c7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3c39fbbce80525d7d39c360ee73ef3492c134e25aaeaf756a552e426a1bc89b6/index.mjs",
    "sha256": "3c39fbbce80525d7d39c360ee73ef3492c134e25aaeaf756a552e426a1bc89b6",
    "bytes": 160478,
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
    "at": "2026-10-07T02:20:03.201Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
