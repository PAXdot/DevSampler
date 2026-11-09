// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/code",
  "tags": [
    "launch",
    "product",
    "introducing",
    "code",
    "console",
    "split",
    "editorial",
    "developer"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 125,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 114
    },
    "beats": [
      16,
      40,
      72
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
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 64,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "codeTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "outputTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "code",
      "type": "text",
      "maxChars": 900,
      "lines": 16,
      "role": "body"
    },
    {
      "key": "output",
      "type": "text",
      "maxChars": 650,
      "lines": 16,
      "role": "body"
    },
    {
      "key": "codeImage",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "outputImage",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 114,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "Write the idea. See it take shape.",
    "codeTitle": "Your example",
    "outputTitle": "Preview output",
    "code": "const scene = {\n  title: \"A new perspective\",\n  theme: \"light\",\n  layout: \"responsive\",\n};\n\npreview(scene);",
    "output": "Example preview\n\nTitle: A new perspective\nTheme: light\nLayout: responsive\n\nReady for your own content.",
    "codeImage": "",
    "outputImage": "",
    "highlightLine": 3,
    "split": 0.54,
    "monoFontFamily": "Geist Mono",
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "codeTitle",
      "label": "Code title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "outputTitle",
      "label": "Output title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "code",
      "label": "Code",
      "type": "text",
      "max": 900,
      "role": "body"
    },
    {
      "key": "output",
      "label": "Output",
      "type": "text",
      "max": 650,
      "role": "body"
    },
    {
      "key": "codeImage",
      "label": "Code image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "outputImage",
      "label": "Output image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "highlightLine",
      "label": "Highlight line",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 30
    },
    {
      "key": "split",
      "label": "Split",
      "type": "number",
      "min": 0.4,
      "max": 0.6
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
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
    }
  ],
  "name": "Code and Output Split",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "code-output-split",
    "bundleSha256": "9b51dfba3c8bec8eabbb83722c656187a7b2fca0fe9fac08cb56bd58e83e83b0",
    "sourceSnapshot": {
      "sha256": "d82dc49babfcf9e3cd97f56c51eae20da3260835b8dea70b159d17488f7e1bbb",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:30:50.825Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-paper.png",
        "sha256": "36b5128360ae0eec8b7a9d7e228ee70374fa6f5dd790cb8dc9aeb780d62852f6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-night.png",
        "sha256": "baf34d52a501d17630d2c9d083834decbc34dcb06314f95da357af476a2a131c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-color.png",
        "sha256": "8d8dfec0dba19a7bd923e1d8f459e369abe9b16f2a0fbfe25ba328f3a14c2230"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-paper.png",
        "sha256": "f4994e66fdfa02a3a0c978b0958950ba26cc34022faa8d117103b04bbc7a9797"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-night.png",
        "sha256": "cd0d748f2fcfa6dc4e88db0a55deb74cd1a8de4f6ffc682c9294b3dba424b7a9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-color.png",
        "sha256": "3dac686189a3f83bf2e02c1c0dbbbdbc3ea73a8599173e315f887407c3ed1b75"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-paper.png",
        "sha256": "bb87226e11e09b8335e0221427e9e789582bc4e2d758146d897557f20ca940e1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-night.png",
        "sha256": "a4f8d881b3b843f7d07476c3329ddfe37cf483e834f250031bbbc1ac525f0877"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-color.png",
        "sha256": "4e9b66e8517cceabf7722a5a7c39be7e8c3c1e7f404afb9d98f8faa0aa1a5d5d"
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
          "code-output-split--16x9",
          "code-output-split--9x16",
          "code-output-split--1x1"
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
            "paperNight": 131.96674262152777,
            "paperColor": 11.335205078125,
            "region": {
              "left": 30,
              "top": 131,
              "width": 1860,
              "height": 909
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 127.82204861111111,
            "paperColor": 13.707845052083334,
            "region": {
              "left": 0,
              "top": 148,
              "width": 1080,
              "height": 1749
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 128.16685655381946,
            "paperColor": 11.47140842013889,
            "region": {
              "left": 0,
              "top": 131,
              "width": 1080,
              "height": 909
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
            "occupancy": 1.0972282913937181,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.153019560447636,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0984680973726941,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2277824581478685,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2887967687074833,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2292067997466478,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1204820577064847,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1902137398169146,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.121748139127622,
            "bad": [],
            "measured": 17
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.176540798611111,
        "frames": [
          17,
          114,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 125,
            "averageChannelDifference": 4.152886284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-125-frame-15.png",
                "sha256": "8fcc650aefed8cd7c83cf67d155fb52a3b461bbdb96bb3f5da39da89e351a2de",
                "alphaMass": 385023
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-125-frame-114.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-125-frame-110.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              },
              {
                "frame": 124,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-125-frame-124.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.176540798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-900-frame-17.png",
                "sha256": "496686c7a837d9045b6a338ceea422c201ee66422e855b27c99b853cc8f1e556",
                "alphaMass": 385023
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-900-frame-114.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-900-frame-792.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/16x9-duration-900-frame-899.png",
                "sha256": "3b005efd62287fc21f4151eb536e031ee35439b563a0d202a1aac83346d30ff3",
                "alphaMass": 385024
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 125,
            "averageChannelDifference": 9.80740017361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-125-frame-15.png",
                "sha256": "48ee82d894015a98ed47478f856bd342030deea5f388bbd0fb7096446b5df6b4",
                "alphaMass": 445281
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-125-frame-114.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-125-frame-110.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              },
              {
                "frame": 124,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-125-frame-124.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.967230902777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-900-frame-17.png",
                "sha256": "584f845b83137ef30862cb5a0cf7ce0993df7c081bde371dac68d4f6b155b0f0",
                "alphaMass": 445281
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-900-frame-114.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-900-frame-792.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/9x16-duration-900-frame-899.png",
                "sha256": "5dd3320ab569267db923f30842b88ab3767facfca48c205ae867324e51787057",
                "alphaMass": 445285
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 125,
            "averageChannelDifference": 4.947591145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-125-frame-15.png",
                "sha256": "5dc4ae51d57ffdb8c2871fda2fe2a82cd213f6f051bce8dfd6dc8ed19b0a7238",
                "alphaMass": 389251
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-125-frame-114.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-125-frame-110.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
              },
              {
                "frame": 124,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-125-frame-124.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.899848090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-900-frame-17.png",
                "sha256": "bb2a3a4656c0a71dcc7c4f7e0a4026ff32fb76a92fef504c5fd157323c5caa17",
                "alphaMass": 389251
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-900-frame-114.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-900-frame-792.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-x/code-output-split/1x1-duration-900-frame-899.png",
                "sha256": "2c56c28d5c8dbeea3b100702a32cf1a25eca8ba8dd3b80164b92c15828057dcd",
                "alphaMass": 389253
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
        "note": "Code on the left, its rendered output on the right; code and result."
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
      "bundleSha256": "9b51dfba3c8bec8eabbb83722c656187a7b2fca0fe9fac08cb56bd58e83e83b0",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.965569Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/code-output-split/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-output-split/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-output-split/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "80f30c66f2a4072b5c9116015e1b9f76ba533cc76b30e115121bd9ce503cb898",
        "loop": "5ca5d5916192ec53b3d1cb4e15d3e9dacd109e9562a950ad0f918483cd3bb561",
        "detail": "c9151043270e0b553875b54f3bda162194b0f68d5462c79a1bc5bb1a354427e7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/code-output-split/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-output-split/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-output-split/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6dcf5b13f5a181442384b6362c413696505a16f759bc85f6a9a46d44132f512b",
        "loop": "d78c658dcdb6ec3bdc05d79db35ab12ac4af596f5bbfd51f702cc0849f9d7740",
        "detail": "03cdc90f90386017eab2a611f83da1e3841ecefc1398f1ecdb9ab97aef4bdcfe"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/code-output-split/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/code-output-split/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/code-output-split/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "5edb8790cdd4142c748c5334b439cf2440cfb2f6886b679925b6fa4803ac05e1",
        "loop": "72b3e23992392b4441ce825c0f1489237b5ba42508a525bdfa747fd577b10a2a",
        "detail": "78f2581a9ef9f515a28adaab466ab362a4bb8962430727ff5fae62a3ef01cc74"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9b51dfba3c8bec8eabbb83722c656187a7b2fca0fe9fac08cb56bd58e83e83b0/index.mjs",
    "sha256": "9b51dfba3c8bec8eabbb83722c656187a7b2fca0fe9fac08cb56bd58e83e83b0",
    "bytes": 175060,
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
    "at": "2026-10-07T02:25:15.182Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
