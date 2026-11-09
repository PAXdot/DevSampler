// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "letters-bounce-over-equalizer"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "letters-bounce-over-equalizer",
    "music",
    "title",
    "equalizer"
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
      "in": 99,
      "out": 0
    },
    "markers": {
      "settled": 99
    },
    "beats": [
      0,
      25,
      50,
      74,
      99
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
      "key": "title",
      "type": "text",
      "maxChars": 12,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
    },
    {
      "key": "pill",
      "type": "text",
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "track",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
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
      "target": "letters-bounce-over-equalizer",
      "prop": "transform",
      "from": "enter",
      "settledBy": 99,
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
    "ink": "#FFFFFF",
    "accent": "#FF4F1F",
    "secondary": "#FFD166",
    "paper": "#07080A",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Lumen 2.0",
    "sub": "Now with sound.",
    "pill": "sound on",
    "track": "track 01 · 120 bpm"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 12,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "pill",
      "label": "Pill",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "track",
      "label": "Track",
      "type": "text",
      "max": 22,
      "role": "kicker"
    }
  ],
  "name": "Equalizer Bounce Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beat-eq-title",
    "bundleSha256": "c848ccae74844cadb0dc2abba3b00792a78d2cb0c9015ce829ec562060dba117",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:19.182Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-paper.png",
        "sha256": "88550ce30d3552b0188568d07ea15a42ebf20d0bbf323b769ebd5ad731277edb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-night.png",
        "sha256": "0c2f296b72ac6f881d8b9d9983a0e0840f30d163052257d8b2d8e3ac31e0e7f0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-color.png",
        "sha256": "5f5fe834d663e0f815f106b6f656cb9965fb5a586e4ab05fde8388a76626d91e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-paper.png",
        "sha256": "c46fc4e1720fdd1c99d554a1cb36d9c022dd9130ffe0a89cc4ca9a29898ea530"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-night.png",
        "sha256": "36d594d5e42bad6a8d33a875b271da6a27f1fbd8fb6e14d51d10977dc9732e09"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-color.png",
        "sha256": "13ba0ba213980c86b493c9e0ee3bbd730ddd012f840b31892e5062afed3680ce"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-paper.png",
        "sha256": "d39f6136f0ccd7539e556aaeb77dca37920c6e8f575f52094b85e9ca323a3022"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-night.png",
        "sha256": "3918459d4f02e08acd8610d2f22e044db17a953b91e380483127a49c7415421b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-color.png",
        "sha256": "6dcbb4007e132521356913190be645ce8fcb9359ee8921b948edcc3645b85476"
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
          "mg-beat-eq-title--16x9",
          "mg-beat-eq-title--9x16",
          "mg-beat-eq-title--1x1"
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
            "paperNight": 24.04269748263889,
            "paperColor": 12.38815646701389,
            "region": {
              "left": 77,
              "top": 77,
              "width": 1766,
              "height": 852
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.51405164930556,
            "paperColor": 15.7509765625,
            "region": {
              "left": 62,
              "top": 154,
              "width": 957,
              "height": 1593
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.922119140625,
            "paperColor": 16.921956380208332,
            "region": {
              "left": 64,
              "top": 65,
              "width": 952,
              "height": 844
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
            "occupancy": 1.0283636988746119,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0265750702930352,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0247426999349125,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0419434700963721,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0412893938439576,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0386730888342994,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9762775709277769,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9751208439480046,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9728073899884602,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.129557291666667,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.293294270833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-90-frame-10.png",
                "sha256": "6494a9aed1c7a7d2e33d2c97a9018b7591dfdf8b17d1891abcfd92d7bf6a0227",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-90-frame-89.png",
                "sha256": "1d374846ead99021fe3e1d61b617a4dc1d561e1e954e5a6471f008f246246c46",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-90-frame-79.png",
                "sha256": "81c2225ca87f9cdcd1b3613988381f804094e80b971fcbc156bc8ac90164b6c7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.129557291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-900-frame-14.png",
                "sha256": "b414728936a3fb91c447be7b0cd3a34405737e3d616ef2c2f04f27eaaf289e3a",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-900-frame-99.png",
                "sha256": "1d374846ead99021fe3e1d61b617a4dc1d561e1e954e5a6471f008f246246c46",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-900-frame-792.png",
                "sha256": "81c2225ca87f9cdcd1b3613988381f804094e80b971fcbc156bc8ac90164b6c7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/16x9-duration-900-frame-899.png",
                "sha256": "03add10b4310f542d00457a6779b169fae35416cee6f646eb1389eb23e41d693",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.465711805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-90-frame-10.png",
                "sha256": "a7a0f983eb4f555c5b09ef85c62e321230c28e73246b824b003ce7de93139ab1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-90-frame-89.png",
                "sha256": "79816f40080dd3f6f586cbd4f1afa569d5a15ad6a77b2f3f5fb3428558838251",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-90-frame-79.png",
                "sha256": "cc5f43ce1ed7b7e8de2c855f0c3af2a3a92ea9cee52a23e18e4bc6cedb735eb1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.339084201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-900-frame-14.png",
                "sha256": "e2b9cb4116278456da1ae189ecbcd93e482daf403120906ec9481fa989aed6c6",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-900-frame-99.png",
                "sha256": "79816f40080dd3f6f586cbd4f1afa569d5a15ad6a77b2f3f5fb3428558838251",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-900-frame-792.png",
                "sha256": "829794ddcdaaae26bca513a3ef657111336f795e878473ea30d168c38990a563",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/9x16-duration-900-frame-899.png",
                "sha256": "2d8c6325f9314569efb3b0ea0b0b54b9586bdf1a87d3284ec41d5b72bbe53113",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.647677951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-90-frame-10.png",
                "sha256": "d9cd5be82c09fbdf09209ad54cb378722934a23157a7d10294fae472c38e4ecb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-90-frame-89.png",
                "sha256": "aec11768df0e03f141a187e9b2732d56a2745c7e91265c3b05f0402117311ea8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-90-frame-79.png",
                "sha256": "aec11768df0e03f141a187e9b2732d56a2745c7e91265c3b05f0402117311ea8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.501519097222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-900-frame-14.png",
                "sha256": "9838d13a3471f78eaab16bbbb7d80adc6bb1615c947c0b0747b6a5ba9a3628bd",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-900-frame-99.png",
                "sha256": "aec11768df0e03f141a187e9b2732d56a2745c7e91265c3b05f0402117311ea8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-900-frame-792.png",
                "sha256": "aec11768df0e03f141a187e9b2732d56a2745c7e91265c3b05f0402117311ea8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-beat-eq-title/1x1-duration-900-frame-899.png",
                "sha256": "aec11768df0e03f141a187e9b2732d56a2745c7e91265c3b05f0402117311ea8",
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
        "note": "A product title bounces over an orange-to-yellow equalizer with a warm glow; no magenta or purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c848ccae74844cadb0dc2abba3b00792a78d2cb0c9015ce829ec562060dba117",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/16x9/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e2b895c91d256a0da8709bda51b7255e9f4d9610455d9e7dadbf1266db78b9a1",
        "loop": "6b58a0f496c99e8dec566c4ee9dd3b0c1af8e5216b2dd4d3dd43420fd5039664",
        "detail": "7125b0c22dd973fec36bfc559fabd77bb9d565b10cd9fcc3cfe0970f00201e06"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/9x16/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "54f1c6320e3ff51209acf6c8e5ceab178e6de1687a0a173220d67471674b6e4f",
        "loop": "6b140baf43e3f448f4692944563e69aeb3f8bda5bb72239ecb7e3797d6b7ae26",
        "detail": "03fb791d04380a3f2f41504e1318242d35a1b64877be3bfcfc26541817dfcec6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-eq-title/1x1/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "35242c350146e202a3b1b2752b74fe3d62bd3827acd61e2183f987899bc5ae46",
        "loop": "4bc6d7d1037392aa3175bf58163ca08fd1d62685885f87c64a22df320c21a185",
        "detail": "e4dc86a8bf56ce8d8d0eecc0dbac968763cee74e3bc453f5564a152220ba9888"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c848ccae74844cadb0dc2abba3b00792a78d2cb0c9015ce829ec562060dba117/index.mjs",
    "sha256": "c848ccae74844cadb0dc2abba3b00792a78d2cb0c9015ce829ec562060dba117",
    "bytes": 196885,
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
    "at": "2026-10-09T03:41:02.953Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
