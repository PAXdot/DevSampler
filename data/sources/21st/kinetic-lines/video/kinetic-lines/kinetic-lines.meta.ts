// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/kinetic",
  "tags": [
    "title",
    "headline",
    "launch",
    "kinetic-type"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 54
    },
    "beats": [
      0,
      14,
      28,
      42
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
      "key": "lines",
      "type": "list",
      "maxChars": 48,
      "lines": 4,
      "role": "headline"
    }
  ],
  "brand": {
    "serifFontFamily": "fonts.serif",
    "fontFamily": "fonts.heading",
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "line",
      "prop": "y",
      "from": "below",
      "settledBy": 54,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "factor-marketplace/remotion/components/kinetic.tsx"
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
    "serifFontFamily": "Instrument Serif",
    "fontFamily": "Geist",
    "lines": [
      "Ship the *component*,",
      "not the *screenshot.*"
    ],
    "color": "#f4f4f5",
    "accent": "#ffffff",
    "background": "#09090b",
    "stagger": 14,
    "align": "center"
  },
  "fields": [
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 4,
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
      "key": "stagger",
      "label": "Stagger",
      "type": "number",
      "step": 1,
      "min": 4,
      "max": 40
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "center",
        "left"
      ]
    }
  ],
  "name": "Kinetic Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "kinetic-lines",
    "bundleSha256": "45caf9deb2b86e92af73e8ed3d2d390dd90f2a71e2f75797c12a1c5a75104b6f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:09.211Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-paper.png",
        "sha256": "66755e6548a4ec6190d5a4c57dda174db74e04e0e99264a5e4f165c86b2dc8e9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-night.png",
        "sha256": "a2b5687428860869806898ea3e5314cedeb5f71541f251f49c203dd8d6eab37d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-color.png",
        "sha256": "72c1118081026f92780dc68fa247d47bf84f9a8db529b864cd090a924f80d1df"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-paper.png",
        "sha256": "f7b3fb5279ea3ea698f7176b8895d6021a1b169324d362d9a68216bc5909eee9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-night.png",
        "sha256": "42997246918011730076cb0883c5e65d589eb05968730f6e512c951f0dd1827a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-color.png",
        "sha256": "68d63ea7b8472e4b2cbb2dc45bef6b421011d06a6d066a779810d9967f3e5874"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-paper.png",
        "sha256": "f207724335170e5ecb78b018d305fb492eb3ab4b7fd1f3a5d9db4f88100f1892"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-night.png",
        "sha256": "f486cd66de7b1a12044f4d7656524f170f4fb8625bc5b54465316b0d83a83ad7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-color.png",
        "sha256": "4eba64504ffa744b495e38a50cd11daa11c23fa6a7da258985c7569570275778"
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
          "kinetic-lines--16x9",
          "kinetic-lines--9x16",
          "kinetic-lines--1x1"
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
            "paperNight": 66.24625651041667,
            "paperColor": 42.06049262152778,
            "region": {
              "left": 309,
              "top": 403,
              "width": 1304,
              "height": 266
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 56.59296332465278,
            "paperColor": 42.95496961805556,
            "region": {
              "left": 115,
              "top": 254,
              "width": 869,
              "height": 1401
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 53.618082682291664,
            "paperColor": 30.72610134548611,
            "region": {
              "left": 157,
              "top": 338,
              "width": 770,
              "height": 403
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
            "occupancy": 0.18390273097407692,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.23261329994960953,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18125635349304334,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7639610628201899,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8044967038384285,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8273463143616502,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18337524767565924,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28253664005611395,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18177138253563888,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.443576388888889,
        "frames": [
          8,
          54,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 4.516059027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-60-frame-7.png",
                "sha256": "bda2b789d129f8f996512d28248e9944284105a379b46914f7a027fb9b942e58",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-60-frame-54.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-60-frame-52.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-60-frame-59.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.443576388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-600-frame-8.png",
                "sha256": "cadb185a73337c8f1e5fba24875301a7b12e58ff516a9404fffd2450e5610967",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-600-frame-54.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-600-frame-528.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/16x9-duration-600-frame-599.png",
                "sha256": "c5e868d5e450928c1b946550610ee6a61bb3f02754cd4369a8ca675384e8b16e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 10.114908854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-60-frame-7.png",
                "sha256": "132ab44eaf91e67f8c18ca177f7301815483a7d13914a22c2d26671c6cd8ee7e",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-60-frame-54.png",
                "sha256": "27f87739234647473b4f6ad8851c888948d1bc289278505f27f410452272d62d",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-60-frame-52.png",
                "sha256": "33fbb263e1c6c30a17420089b49a04595b99206fa97a92633de177f8b8ff2eb1",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-60-frame-59.png",
                "sha256": "870b3919752c7eb06e86145b87d8f91cabe986d9a5a504f2b8b43d651ade025d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.008138020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-600-frame-8.png",
                "sha256": "9af91d29a0ffca726e973943a724b02ea116ac515918707169fd0f1718431d91",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-600-frame-54.png",
                "sha256": "a3e7dc9773fd2deb483e9d9de159d9a0c4ebbc376703652171ad99eae4574867",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-600-frame-528.png",
                "sha256": "5cd79ffa26e381b55e5d1d59a01b64f75dccc394ca2d6f52ec943df67ce888cc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/9x16-duration-600-frame-599.png",
                "sha256": "37b46436a63ee357b3008b097fd67e4a34c538e5158ef42343881cbae97540de",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 4.744466145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-60-frame-7.png",
                "sha256": "fe9055d44d3c4cc6b2e1cc798edfd30e5458edb105bf923ab4d6ffb9172a00ab",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-60-frame-54.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-60-frame-52.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-60-frame-59.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.656358506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-600-frame-8.png",
                "sha256": "207c8faa03d03bb4ff7087bc3b8c6f0fa9bb854fe666a93912fa34ee65dc032d",
                "alphaMass": 587520
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-600-frame-54.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-600-frame-528.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/kinetic-lines/1x1-duration-600-frame-599.png",
                "sha256": "267b952b471917f9c545a26eb628a4d981609fd0bfad3c3de35c5e9492404375",
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
        "note": "Two-line phrase rises line by line with an italic accent word; reads as a title card in all three brands."
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
      "bundleSha256": "45caf9deb2b86e92af73e8ed3d2d390dd90f2a71e2f75797c12a1c5a75104b6f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.955226Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-lines/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-lines/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-lines/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 54,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "567d2a38328926be5f09cf86e5bd3f98ee7afe668c6f165a927a7fc40a7b711b",
        "loop": "535ce3c4d21831059222acf5fa60c649e925d3aa0ff7a05266f86fe298130d97",
        "detail": "46dddde3ed230a1c7ba8c0be79ea759fd189fadf903d856ceab53b8f525f0531"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-lines/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-lines/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-lines/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 54,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "353eeeee20909da09e1351ee1ec86a2082f7809447e5621ee0bdb0c33de43d43",
        "loop": "55a1f9251abed9ec78d93613a8d86f032b53f71c138f7a950e307d9a5c42e761",
        "detail": "46502685edeeecc90cc5e25388523fc772f12b11a209263e136b8926aaca231d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-lines/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-lines/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-lines/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 54,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "71a0ead6dcc9e07d171f7ea63e031a8d025c11c0793f09eb4532d1b0223c7faf",
        "loop": "a6347b3a59ca4b8a163a724f8f91b06e68eb2ca6e0f1a512c1c324a7ab70033e",
        "detail": "68f0a25e20d33f6cc6e81abad550f83dd730bbe5ede7c87f10a8203cc14c45e4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/45caf9deb2b86e92af73e8ed3d2d390dd90f2a71e2f75797c12a1c5a75104b6f/index.mjs",
    "sha256": "45caf9deb2b86e92af73e8ed3d2d390dd90f2a71e2f75797c12a1c5a75104b6f",
    "bytes": 158139,
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
    "at": "2026-10-07T02:24:45.786Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
