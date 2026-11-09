// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "spotlight-cutout-tour"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "spotlight-cutout-tour",
    "spotlight",
    "tour",
    "features"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      34,
      68,
      101,
      135
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
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "p1",
      "type": "text",
      "maxChars": 28,
      "role": "label"
    },
    {
      "key": "p2",
      "type": "text",
      "maxChars": 28,
      "role": "label"
    },
    {
      "key": "p3",
      "type": "text",
      "maxChars": 28,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "spotlight-cutout-tour",
      "prop": "transform",
      "from": "enter",
      "settledBy": 135,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#1C1712",
    "accent": "#FF5A3C",
    "secondary": "#FFD27A",
    "paper": "#FF9A4D",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Research that shows its work",
    "p1": "Answers with real numbers",
    "p2": "Every claim, cited",
    "p3": "Share in one click"
  },
  "fields": [
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "p1",
      "label": "P 1",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "p2",
      "label": "P 2",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "p3",
      "label": "P 3",
      "type": "text",
      "max": 28,
      "role": "label"
    }
  ],
  "name": "Spotlight Feature Tour",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-spotlight",
    "bundleSha256": "aeaebd3cc903740d64e32ef3ed4d308ad15dc648f74186cce28ea62492029e0a",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:01.530Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-paper.png",
        "sha256": "8ab0cf7d2c99b0668022c8cd14f53fabb04b0448b96ddd73aa0e62416a99fc60"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-night.png",
        "sha256": "fa3d6933c63c3b1e61a22aa2dddb34cf80473afd4bbae9eaf52610d95214d9d0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-color.png",
        "sha256": "0abcf82c6d6b271a8856d9dc17a980ad2329d9a07b80b2113b6c248dc1a19df3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-paper.png",
        "sha256": "edd8b95fe43b8332221a7250301e904d7ad0e2d0cb10c33b5e89dc62475e77ea"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-night.png",
        "sha256": "365da85b9b874db5254fc2e44ab1cdb58ebbcc61d9c84b9dd544ecbe8d778a68"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-color.png",
        "sha256": "5118d0cd0966b9c2f2a68b17797deca90495ad7219003ae844ceacd56a83b3ab"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-paper.png",
        "sha256": "af2931466a930153868d3c13a8d5612cf58354bf94ea0ad75c468521a2cd769d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-night.png",
        "sha256": "fb0751df2c70c9da5c147fae6a38ebfb8fc486bfc881cca68a23201ea83176cb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-color.png",
        "sha256": "6c2d8f033233339f3870ab4df4d35e970e1769ed8912522b855d32e7fc5682cd"
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
          "mg-pr-spotlight--16x9",
          "mg-pr-spotlight--9x16",
          "mg-pr-spotlight--1x1"
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
            "paperNight": 5.672770182291667,
            "paperColor": 2.5377875434027777,
            "region": {
              "left": 116,
              "top": 65,
              "width": 1625,
              "height": 1015
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 13.911268446180555,
            "paperColor": 9.8154296875,
            "region": {
              "left": 0,
              "top": 207,
              "width": 1080,
              "height": 1569
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 8.409505208333334,
            "paperColor": 4.611002604166667,
            "region": {
              "left": 4,
              "top": 77,
              "width": 1072,
              "height": 979
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
            "occupancy": 1.12368454808621,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1252093590779937,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1261798797451081,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.154454837490552,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.155192979969766,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1581455498866216,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.271272111954064,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2751797106588407,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2751797106588407,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 24.299696180555557,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 29.39594184027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-90-frame-10.png",
                "sha256": "28ebeaea7813b006b53a185e65e74161370ee4a028bad1ac6c5b977dc573cbd9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-90-frame-89.png",
                "sha256": "af9ca620654a2542f46b3a3db2a17a7fb6089540a667876b10ba49f394d1559a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-90-frame-79.png",
                "sha256": "af9ca620654a2542f46b3a3db2a17a7fb6089540a667876b10ba49f394d1559a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 24.299696180555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-900-frame-20.png",
                "sha256": "1974a96a07689444e56022e46c50cd2ddeb01455bcd3ab5cf0cff72add2103f4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-900-frame-135.png",
                "sha256": "af9ca620654a2542f46b3a3db2a17a7fb6089540a667876b10ba49f394d1559a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-900-frame-792.png",
                "sha256": "af9ca620654a2542f46b3a3db2a17a7fb6089540a667876b10ba49f394d1559a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/16x9-duration-900-frame-899.png",
                "sha256": "af9ca620654a2542f46b3a3db2a17a7fb6089540a667876b10ba49f394d1559a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.79448784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-90-frame-10.png",
                "sha256": "1ab90ddcd521f52fd6746e073b4640b9a528a179b8b50dd8851c590ffebfa0f8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-90-frame-89.png",
                "sha256": "17c93645fb3aaa7cfd600ca868eed2f8986ab984f9b8333edfca73420206095e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-90-frame-79.png",
                "sha256": "17c93645fb3aaa7cfd600ca868eed2f8986ab984f9b8333edfca73420206095e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 15.181640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-900-frame-20.png",
                "sha256": "668281af3451f342320c112c94ec7117fa23196dafb110734ee87fd1d1aff87a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-900-frame-135.png",
                "sha256": "17c93645fb3aaa7cfd600ca868eed2f8986ab984f9b8333edfca73420206095e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-900-frame-792.png",
                "sha256": "17c93645fb3aaa7cfd600ca868eed2f8986ab984f9b8333edfca73420206095e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/9x16-duration-900-frame-899.png",
                "sha256": "17c93645fb3aaa7cfd600ca868eed2f8986ab984f9b8333edfca73420206095e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 24.93706597222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-90-frame-10.png",
                "sha256": "0aefe8d651e9de753487e46e36b47faed3c9f910d995981d9b492c21bcbaa8d9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-90-frame-89.png",
                "sha256": "2acd8b05779b5b0b075945c85f5b85282b3003fa4d3d4cad250553465ba4bf2f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-90-frame-79.png",
                "sha256": "2acd8b05779b5b0b075945c85f5b85282b3003fa4d3d4cad250553465ba4bf2f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 20.26801215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-900-frame-20.png",
                "sha256": "adc267882fca070ac5a82aa96142b875e050098df4cb443123bd5aac139ca23a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-900-frame-135.png",
                "sha256": "2acd8b05779b5b0b075945c85f5b85282b3003fa4d3d4cad250553465ba4bf2f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-900-frame-792.png",
                "sha256": "2acd8b05779b5b0b075945c85f5b85282b3003fa4d3d4cad250553465ba4bf2f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-spotlight/1x1-duration-900-frame-899.png",
                "sha256": "2acd8b05779b5b0b075945c85f5b85282b3003fa4d3d4cad250553465ba4bf2f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Spotlight steps through app features with labeled callouts; readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "aeaebd3cc903740d64e32ef3ed4d308ad15dc648f74186cce28ea62492029e0a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/16x9/detail.mp4",
      "bg": "#ffc16d",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0eaf83a6c918ac6f5e855613ee2ce7a4004059bf37e60734f3b1e210db9232c8",
        "loop": "ae09260f5d0e58adb54f7fb3d18ccec0e757d7676823cfefb43e4bbd644dcaf6",
        "detail": "68523e8507cbb19a84cba0f02ca8d354d383afd2506d5eb1adbd63321b7e0162"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/9x16/detail.mp4",
      "bg": "#ffc16d",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c053297494579270b14b556f96eceab48deac7147dbea25aa567925ce1f20236",
        "loop": "3004b8a67c937bf75580d8eba059f953fd0d9db95c004177b9687b5c9d2d3d42",
        "detail": "df88b00ff51738dd9adfd35bac8b251775cb0acbdadc3131812026310a9656d5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-spotlight/1x1/detail.mp4",
      "bg": "#ffc16d",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e92e75c5908ccf140b22833801b9167c54b3fa448b1894e8a8d006cbb201f562",
        "loop": "479053bf36d963ad0d76c225b93724603c7bc7da7ca2ce94c90f9d95de1544c0",
        "detail": "645981c1a7861b0e5bd90ce9d2f90fa5ed6a28de33adf32c5309dc6d64ff0646"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/aeaebd3cc903740d64e32ef3ed4d308ad15dc648f74186cce28ea62492029e0a/index.mjs",
    "sha256": "aeaebd3cc903740d64e32ef3ed4d308ad15dc648f74186cce28ea62492029e0a",
    "bytes": 181525,
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
    "at": "2026-10-09T04:08:48.375Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
