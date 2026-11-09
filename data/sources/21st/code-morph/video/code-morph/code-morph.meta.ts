// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "code/morph",
  "tags": [
    "code",
    "morph",
    "magic move",
    "refactor",
    "developer",
    "diff"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 50,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 62,
      "out": 0
    },
    "markers": {
      "settled": 62
    },
    "beats": [
      0,
      36,
      58
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
      "x": 0.05,
      "y": 0.06,
      "w": 0.9,
      "h": 0.88
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "before",
      "type": "text",
      "maxChars": 600,
      "lines": 20,
      "role": "code"
    },
    {
      "key": "after",
      "type": "text",
      "maxChars": 600,
      "lines": 20,
      "role": "code"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "monoFontFamily": "fonts.mono",
    "bodyFontFamily": "fonts.body",
    "accent": "colors.primary"
  },
  "motionBeats": [
    {
      "target": "tokens",
      "prop": "position",
      "settledBy": 62,
      "easing": "ease"
    },
    {
      "target": "removed",
      "prop": "opacity",
      "from": "1",
      "settledBy": 44,
      "easing": "linear"
    },
    {
      "target": "added",
      "prop": "scale",
      "from": "0.9",
      "settledBy": 62,
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
      "frame": 80
    },
    "hover": [
      0,
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V06, twitter-remotion-research)"
  },
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "surfaceColor": "#0E0E11",
    "textColor": "#E6E6E9",
    "secondaryColor": "#6FD6E6",
    "monoFontFamily": "Geist Mono",
    "bodyFontFamily": "Geist",
    "title": "button.tsx",
    "before": "export function Button() {\n  return <button>Save</button>;\n}",
    "after": "export function Button({ loading }: Props) {\n  return (\n    <button disabled={loading}>\n      {loading ? <Spinner /> : \"Save\"}\n    </button>\n  );\n}",
    "language": "tsx",
    "theme": "dark",
    "morphAt": 36,
    "morphFrames": 22,
    "accent": "#3D63FF"
  },
  "fields": [
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondaryColor",
      "label": "Secondary color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "before",
      "label": "Before",
      "type": "text",
      "max": 600,
      "role": "code"
    },
    {
      "key": "after",
      "label": "After",
      "type": "text",
      "max": 600,
      "role": "code"
    },
    {
      "key": "language",
      "label": "Language",
      "type": "select",
      "options": [
        "tsx",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "python",
        "plain"
      ]
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "dark",
        "light"
      ]
    },
    {
      "key": "morphAt",
      "label": "Morph at",
      "type": "number",
      "step": 1,
      "min": 12,
      "max": 300
    },
    {
      "key": "morphFrames",
      "label": "Morph frames",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 60
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    }
  ],
  "name": "Code Morph",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "code-morph",
    "bundleSha256": "c9f494521a9f3eddce6b5ede2550853674650aebbef1dd021916ae1b72051190",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:04.796Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-paper.png",
        "sha256": "5a137e81bf02a5c973a2c558f10b758c988bd37a7473f277e440347ae6915100"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-night.png",
        "sha256": "aaeeea47a79a38a64c2959c597b0022ad6a80dd6976f756645e4c34615dc79f2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-color.png",
        "sha256": "c66539c58c688a45b4cd2b81b7cf063773672fea997ae456ada70ac89bf710f8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-paper.png",
        "sha256": "801fdf80f9886747c7345fa2dd3f422ef2fc30651eb72aa0ac4e0146d23bf603"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-night.png",
        "sha256": "0251efc3baa8bccf4fb838d412e241352ac08ac012e0c06110a3f55a172fa3fe"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-color.png",
        "sha256": "6533e6498d51a13b3a6068366bf0b98f1351f4fe12476164e86d5e52087db118"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-paper.png",
        "sha256": "07c171fc919668ef3032925a1938f63c5fdfbf37c1f70bcd62fcbe7cd3260792"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-night.png",
        "sha256": "ef8c38282e96939427950eeb4deedc77fe5178831be7227342b040ae63dfbc09"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-color.png",
        "sha256": "9b79e8eaf0a21514acdf716fe80652f5cf46855d787db4a581de7f0f8a211153"
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
          "code-morph--16x9",
          "code-morph--9x16",
          "code-morph--1x1"
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
            "paperNight": 139.07736545138889,
            "paperColor": 14.72927517361111,
            "region": {
              "left": 321,
              "top": 213,
              "width": 1278,
              "height": 698
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.26180013020834,
            "paperColor": 14.96950954861111,
            "region": {
              "left": 17,
              "top": 358,
              "width": 1046,
              "height": 1256
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 132.54817708333334,
            "paperColor": 16.064317491319443,
            "region": {
              "left": 77,
              "top": 297,
              "width": 926,
              "height": 528
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
            "occupancy": 0.6096810830813808,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6096810830813808,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6096810830813808,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5940716478635351,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5940716478635351,
            "bad": [],
            "measured": 39
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5940716478635351,
            "bad": [],
            "measured": 39
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.6656901041666667,
        "frames": [
          12,
          80,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 50,
            "averageChannelDifference": 7.535373263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-50-frame-6.png",
                "sha256": "d31635648352e0b603ed5868fc816af5f7270be32ffbf9a75d8d93ea474bd59b",
                "alphaMass": 163488
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-50-frame-49.png",
                "sha256": "ed5c9d5a7cd175feb47c7c278ff4b06f29bab8817c9407a27fd1ce579c9fdb26",
                "alphaMass": 220824
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-50-frame-44.png",
                "sha256": "2d7abc681dcd4076171a6901ca7e4cc57c54f456766f0b2dfa186b3374345906",
                "alphaMass": 220824
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.6656901041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-600-frame-12.png",
                "sha256": "55a086b3a19c268cd90952bd61308b579132a07cfe04366851e4b6b2b15ac150",
                "alphaMass": 220992
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-600-frame-80.png",
                "sha256": "badafc4575af7d75968704b78dff9a09d470a5e1996597998551e5aa8afeb541",
                "alphaMass": 220824
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-600-frame-528.png",
                "sha256": "badafc4575af7d75968704b78dff9a09d470a5e1996597998551e5aa8afeb541",
                "alphaMass": 220824
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/16x9-duration-600-frame-599.png",
                "sha256": "badafc4575af7d75968704b78dff9a09d470a5e1996597998551e5aa8afeb541",
                "alphaMass": 220824
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 50,
            "averageChannelDifference": 12.401909722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-50-frame-6.png",
                "sha256": "75c8b931f32743d704bd38fe06fecaddba6340e2e222fadc5bea928ce00039e9",
                "alphaMass": 242420
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-50-frame-49.png",
                "sha256": "63c838564779834a8160c990701ad5828bf2daa0c7b7a0f6b38f30a92c18581f",
                "alphaMass": 328606
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-50-frame-44.png",
                "sha256": "896f7bc6d58530d114d2044dfba936b032cc109c163a8b601956be9687db7b48",
                "alphaMass": 328606
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.2848307291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-600-frame-12.png",
                "sha256": "69e318a66d85b4f0c43fdb1d5d5fcbfcd4b4852ba183c0d6f4c999fe07d48ce9",
                "alphaMass": 329250
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-600-frame-80.png",
                "sha256": "5b1b1f4803c9ce2c572e21207bf07855deb75aefe89717d2ff2e8f3b1674ecba",
                "alphaMass": 328606
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-600-frame-528.png",
                "sha256": "5b1b1f4803c9ce2c572e21207bf07855deb75aefe89717d2ff2e8f3b1674ecba",
                "alphaMass": 328606
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/9x16-duration-600-frame-599.png",
                "sha256": "5b1b1f4803c9ce2c572e21207bf07855deb75aefe89717d2ff2e8f3b1674ecba",
                "alphaMass": 328606
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 50,
            "averageChannelDifference": 6.899739583333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-50-frame-6.png",
                "sha256": "82e5982a5541ddd2ff1adaf451d315119a62efe5c02e9ded95ba3ae9518b8dfb",
                "alphaMass": 151850
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-50-frame-49.png",
                "sha256": "6081f523c46cb6eed04df5c73d806a627ed451aa268eedf51b92a69ae164a872",
                "alphaMass": 204587
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-50-frame-44.png",
                "sha256": "fc961f12f82527ed23753abbd72b6f2207fdbd12b5ff3b4de4effd5ec70e6085",
                "alphaMass": 204587
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.1207682291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-600-frame-12.png",
                "sha256": "c7c221e2eddc73f6e2197d1d2ffe71c7499d483fa09b9e9a61881594f5275bfb",
                "alphaMass": 204229
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-600-frame-80.png",
                "sha256": "2c442cec8ef356160ba13eb6d81755315c2ee1c43e627ea855cbf20d01ff8061",
                "alphaMass": 204587
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-600-frame-528.png",
                "sha256": "2c442cec8ef356160ba13eb6d81755315c2ee1c43e627ea855cbf20d01ff8061",
                "alphaMass": 204587
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/code-morph/1x1-duration-600-frame-599.png",
                "sha256": "2c442cec8ef356160ba13eb6d81755315c2ee1c43e627ea855cbf20d01ff8061",
                "alphaMass": 204587
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A Button component's code morphs from a plain version to a loading-state version; syntax colors are blue, teal and warm, no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c9f494521a9f3eddce6b5ede2550853674650aebbef1dd021916ae1b72051190",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/code-morph/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-morph/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-morph/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "faf4c66e5718f76d56264c34440555eae0fa536985c9a947199cf888f66ee3a2",
        "loop": "388440586de6650f0088faa3231d8153fe69adf15b190b3ff5faacb6db28c78c",
        "detail": "a7f7a636747094055db10362c9e6e916358cec2f0ecd3df6fd09d46677eba72f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/code-morph/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-morph/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-morph/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "1fd6d88992ae697392a9874fad16b24f1076e447e1c2eec9417a44e925ff1375",
        "loop": "d91de5053c3088943f198c66effe3e7c9e83626e427aa6a2ffdd5ec83a6d8bb7",
        "detail": "4ba1736840fe2f3dae2c1d646ccebf2f4d003fd1d15a103ff5e8e1fa248200f6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/code-morph/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-morph/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-morph/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "56b6ed4e74590da7b5c2a1e745580f08ffc336c1e836ee5d1dcd31d70a42aa79",
        "loop": "61a3f90396918478931978b0f4c47d6b949293c00fa4273ab47b55e1549b98b2",
        "detail": "10964ba538ba90d5c8e7f0a7f22b8837a746244ad4144d58374e3c7731e3c495"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c9f494521a9f3eddce6b5ede2550853674650aebbef1dd021916ae1b72051190/index.mjs",
    "sha256": "c9f494521a9f3eddce6b5ede2550853674650aebbef1dd021916ae1b72051190",
    "bytes": 170110,
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
    "at": "2026-10-09T03:09:56.133Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
