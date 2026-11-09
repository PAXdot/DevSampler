// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/reveal",
  "tags": [
    "typewriter",
    "typing",
    "caret",
    "cursor",
    "command",
    "text",
    "terminal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 40,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 44,
      "out": 0
    },
    "markers": {
      "settled": 48,
      "typed": 42
    },
    "beats": [
      4,
      42,
      46
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
      "key": "text",
      "type": "text",
      "maxChars": 80,
      "lines": 3,
      "role": "headline"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "text",
      "prop": "chars",
      "settledBy": 42,
      "easing": "linear"
    },
    {
      "target": "accentWord",
      "prop": "highlight",
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V01, V04, V15 (typed lines with caret); own copy"
  },
  "job": "titles",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "text": "npx 21st add motion",
    "accentWord": "motion",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "framesPerChar": 2,
    "caret": "block",
    "typeface": "mono",
    "align": "center"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 80,
      "role": "headline"
    },
    {
      "key": "accentWord",
      "label": "Accent word",
      "type": "text",
      "max": 24
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
      "key": "framesPerChar",
      "label": "Frames per char",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 3
    },
    {
      "key": "caret",
      "label": "Caret",
      "type": "select",
      "options": [
        "block",
        "bar",
        "none"
      ]
    },
    {
      "key": "typeface",
      "label": "Typeface",
      "type": "select",
      "options": [
        "mono",
        "sans"
      ]
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
  "name": "Typewriter Caret",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "typewriter-caret",
    "bundleSha256": "2fc75ea48904651bc44d83baa84903b8023a03d0981e55c3b255b95e0e09734b",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:03.208Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-paper.png",
        "sha256": "7f3cb49fa1eecde714766dd79eecc9e1633aeec142c32c16b6bc939121dceffa"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-night.png",
        "sha256": "3674415588ef558b70f24d936c4b8b692709d3289a17f3bb0119caa818e5163a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-color.png",
        "sha256": "5326513f215b839916208a7a41ff976f5646df5df869e6cbe554f54a50820b18"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-paper.png",
        "sha256": "9ab87635f80d949fcaaf2c48973435f76fdf6f7e73d03d904f186c1b6a2bca17"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-night.png",
        "sha256": "7790d87e2a3a333b3871246ade66becb29cb4e56ce2a581fa3b1adccbbb3a61e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-color.png",
        "sha256": "fda6b7a35310496d1b625142757bd92a4989219d7c191bb7bb32b8e43f6b1f54"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-paper.png",
        "sha256": "b50e6e38767254c78db6a816678c0243692655c7623ff88ed447cbaea5d36e67"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-night.png",
        "sha256": "ec8a2eda92785c5cb75821a2a9f293166a08db8964de237b1c8288d228d3b7d6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-color.png",
        "sha256": "3f133c1fc3bc9567602590bd0b9e4883440f5f6f5128e40d33c654c78b901acf"
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
          "typewriter-caret--16x9",
          "typewriter-caret--9x16",
          "typewriter-caret--1x1"
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
            "paperNight": 62.59941948784722,
            "paperColor": 29.433430989583332,
            "region": {
              "left": 149,
              "top": 446,
              "width": 1723,
              "height": 188
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.814453125,
            "paperColor": 18.595594618055557,
            "region": {
              "left": 51,
              "top": 315,
              "width": 1029,
              "height": 1410
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 63.51372612847222,
            "paperColor": 30.065565321180557,
            "region": {
              "left": 83,
              "top": 487,
              "width": 970,
              "height": 106
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
            "occupancy": 0.221390800404524,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21805002222082254,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21805002222082254,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9810836226851855,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9757279889193333,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9819960488053248,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.12493137401279673,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.12287065031774029,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.12299944554868132,
            "bad": [],
            "measured": 16
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 26.928385416666668,
        "frames": [
          7,
          48,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 40,
            "averageChannelDifference": 23.864583333333332,
            "retainedAlpha": 0.9036996735582155,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-40-frame-4.png",
                "sha256": "4b323329ec0bbc54043f2a70237f42899a7cbb98fc39cba2bee00e3eec6b13bd",
                "alphaMass": 3733
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-40-frame-39.png",
                "sha256": "704751437cf91cd2a4c106c3f30aef80595eea383b1e407617bc6ad8216c02c9",
                "alphaMass": 16542
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-40-frame-35.png",
                "sha256": "1f1b577585c5837dc74b7d25320d05bea514b79ea563a399ded41c3932ea069e",
                "alphaMass": 14949
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 26.928385416666668,
            "retainedAlpha": 0.8853449990057666,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-600-frame-7.png",
                "sha256": "6af8f3b5e389081241b07014541d47828b56e7aba99bfc941df4c749351fab0f",
                "alphaMass": 4780
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-600-frame-48.png",
                "sha256": "740e990a75cdf2f75b95a6910d315ceaf45f934f83abe0474e6d3a4dd743c22c",
                "alphaMass": 25145
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-600-frame-528.png",
                "sha256": "740e990a75cdf2f75b95a6910d315ceaf45f934f83abe0474e6d3a4dd743c22c",
                "alphaMass": 25145
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/16x9-duration-600-frame-599.png",
                "sha256": "70ad9bca37b63aa12eb36a25835a9c1bcadc8f69637f919eba25ca3c50a9fdaf",
                "alphaMass": 22262
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 40,
            "averageChannelDifference": 61.63856336805556,
            "retainedAlpha": 0.9033492822966507,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-40-frame-4.png",
                "sha256": "ee392931106e50cbabc731d29340c50aa97d21f5fbe401a3e1eac9278bd321a4",
                "alphaMass": 12030
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-40-frame-39.png",
                "sha256": "2de1bbbe6e55838427fd8f31486107ddf55616f3d178d1943c96b5e1e4e1ad66",
                "alphaMass": 52250
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-40-frame-35.png",
                "sha256": "45501687997ba82b3bc0ecfc055c9fa312793e0065862c4964447d7e46062acb",
                "alphaMass": 47200
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 71.90907118055556,
            "retainedAlpha": 0.9482093444018731,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-600-frame-7.png",
                "sha256": "8248ae2282670881650dd35e946e02e783f23190e22f16ed21382a2e10185730",
                "alphaMass": 15519
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-600-frame-48.png",
                "sha256": "40f48a0ab06816295569cf3543d217e74f4b546e09969386e3cb14c61f52b011",
                "alphaMass": 75168
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-600-frame-528.png",
                "sha256": "40f48a0ab06816295569cf3543d217e74f4b546e09969386e3cb14c61f52b011",
                "alphaMass": 75168
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/9x16-duration-600-frame-599.png",
                "sha256": "d775c4d4a955e0ed04a3e753c22fbf2961b512911e57d0db4a554733194f3561",
                "alphaMass": 71275
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 40,
            "averageChannelDifference": 17.887586805555557,
            "retainedAlpha": 0.8987025948103793,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-40-frame-4.png",
                "sha256": "ddb6be209e7329053e9b3e7a7a21a44e501df55732d2c63ceef036060053c5b9",
                "alphaMass": 2172
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-40-frame-39.png",
                "sha256": "dcd1b5a717ba5b4eb4ee76a97f115ebfdbc5ffd0151065a528ce61a10ae390f0",
                "alphaMass": 10020
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-40-frame-35.png",
                "sha256": "03cad2924cd802eda19b8036cf1f72610f97b9ea4e550c48c8eceb2f8634c955",
                "alphaMass": 9005
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.74142795138889,
            "retainedAlpha": 0.8899531281842266,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-600-frame-7.png",
                "sha256": "f9605d7c3c7e6b4e4a89ae1076c9dfaacb08e0eba84bcd0bc48bb3fc5c124e55",
                "alphaMass": 2850
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-600-frame-48.png",
                "sha256": "0b2d1cf61039a5b01a3cf531534f4c2a317a3430c9f5c9a02bde460fffe02897",
                "alphaMass": 14721
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-600-frame-528.png",
                "sha256": "0b2d1cf61039a5b01a3cf531534f4c2a317a3430c9f5c9a02bde460fffe02897",
                "alphaMass": 14721
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/typewriter-caret/1x1-duration-600-frame-599.png",
                "sha256": "9356def7dad28b01ff2edab03710780718b328f0181ba3730087457038061aa1",
                "alphaMass": 13101
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
        "note": "A command types out with a caret and the last word selected."
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
      "bundleSha256": "2fc75ea48904651bc44d83baa84903b8023a03d0981e55c3b255b95e0e09734b",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.982707Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/typewriter-caret/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/typewriter-caret/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/typewriter-caret/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "b4232a8bef9c7d1c16e29896c2bf1b933129cabeac0ecea14d589e6f269830a8",
        "loop": "ae0bb63c7f75809c27f47132e36c9075ca97c32b5de697030866b9cc60aa607a",
        "detail": "5b2ea57fe6a9ba504f8174dd606cef548e9563b407c19426e12c4f26b88d88bf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/typewriter-caret/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/typewriter-caret/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/typewriter-caret/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "557ce2cddad9c73c4321e67b863eb44c9190547124041d977fc3cd382ff30702",
        "loop": "10d332b4f83c2027de55f3132707498a5b163f6e8666405d42ae0b3f0c704af8",
        "detail": "c2707eb365eac447cbda787781e108a46ac1ac271e58a0bf9b8aede63f2b0f61"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/typewriter-caret/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/typewriter-caret/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/typewriter-caret/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "a6daefd2285516a01a1f47461a69d8a6398761fd74b8762f23e4b8ca74ced5fe",
        "loop": "c9e9a00eb21f20488962e38ea9bc5ca63f815c46e1165d7b24f855e4d9fb3b9a",
        "detail": "835676c09adabc7c446a3d77ce19de880245a4907e7c70bde664dbd93618ef5a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2fc75ea48904651bc44d83baa84903b8023a03d0981e55c3b255b95e0e09734b/index.mjs",
    "sha256": "2fc75ea48904651bc44d83baa84903b8023a03d0981e55c3b255b95e0e09734b",
    "bytes": 160794,
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
    "at": "2026-10-07T02:27:43.301Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
