// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data-output",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "count"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "rank-leaderboard-reveal",
    "systems",
    "data",
    "source-linked"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Move your work forward",
    "subtitle": "One highlighted result finds its place",
    "value": 240,
    "suffix": "pts",
    "items": [
      "Studio One",
      "Studio Two",
      "Studio Three",
      "Your studio"
    ],
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
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
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": 0,
      "max": 999999
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 12
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Leaderboard Rank Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-rank-leaderboard-reveal",
    "bundleSha256": "e88dd45464161c85f3b8eaca73b34deb96ef3ae43cf5dae79dd473c423dcdb32",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:47.605Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-paper.png",
        "sha256": "cc51001c51c6ad060778a192421eb0b90db2598e2af73fec3131ec962b7e0991"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-night.png",
        "sha256": "bc046028f1118bd6d92145703fcbe81057c29d3414eda79f17674a455534ec6a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-color.png",
        "sha256": "3713a1499f18b658833944fdc3ae27b7be4ef2366b7ef445995eb0767f278ee3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-paper.png",
        "sha256": "e282a010adf2f2312d97c66abe55c9cb0b87f8a135783e68edeea940defa732c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-night.png",
        "sha256": "d4b4325c953cd6339d0f88b78af6df5920236683fa7ce97f1af5d755dd0da3fc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-color.png",
        "sha256": "197f4b3ccb9b9cb3917f0c79467205af888f1ca4b9edca9f08b9c1fbf2c25168"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-paper.png",
        "sha256": "74e5abe45f8b8ae3f475fc0d0fc6171d4f200cb7c349710ad1eea0bf473ab0b0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-night.png",
        "sha256": "46dd118277c9715f27cb11dd329f888a960d92bfc5bd48b8665115a033a4b3ed"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-color.png",
        "sha256": "e8bf8d7fa40a37991ceeae6a52b97ed9b0c7f922e1dee9439b6f2fcfffc826e3"
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
          "lp-rank-leaderboard-reveal--16x9",
          "lp-rank-leaderboard-reveal--9x16",
          "lp-rank-leaderboard-reveal--1x1"
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
            "paperNight": 100.83387586805556,
            "paperColor": 17.497721354166668,
            "region": {
              "left": 319,
              "top": 147,
              "width": 1267,
              "height": 790
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 121.64344618055556,
            "paperColor": 22.055826822916668,
            "region": {
              "left": 107,
              "top": 198,
              "width": 855,
              "height": 1445
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 100.34486219618056,
            "paperColor": 17.41775173611111,
            "region": {
              "left": 176,
              "top": 317,
              "width": 718,
              "height": 449
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
            "occupancy": 0.6841008812218304,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6841008812218304,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6841008812218304,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8444042402840768,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8444042402840768,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8444042402840768,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3917100390682108,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3917100390682108,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3908376336359876,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 87.43240017361111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 88.31174045138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-150-frame-18.png",
                "sha256": "4a059166ffcbf1117d6602c9748624c0b8595119c6d95200d03302b2c35ffff4",
                "alphaMass": 645
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-150-frame-132.png",
                "sha256": "2b2d4e61b7bdcd657a5476d2ff6e7f6b242cf9452263860a9599db69069f5ebc",
                "alphaMass": 200112
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-150-frame-149.png",
                "sha256": "2b2d4e61b7bdcd657a5476d2ff6e7f6b242cf9452263860a9599db69069f5ebc",
                "alphaMass": 200112
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 87.43240017361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-900-frame-19.png",
                "sha256": "31e90af1a32665574dc15c24de69c264299e93612dabca73331ba48af3097c7c",
                "alphaMass": 801
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-900-frame-132.png",
                "sha256": "2b2d4e61b7bdcd657a5476d2ff6e7f6b242cf9452263860a9599db69069f5ebc",
                "alphaMass": 200112
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-900-frame-792.png",
                "sha256": "2b2d4e61b7bdcd657a5476d2ff6e7f6b242cf9452263860a9599db69069f5ebc",
                "alphaMass": 200112
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/16x9-duration-900-frame-899.png",
                "sha256": "2b2d4e61b7bdcd657a5476d2ff6e7f6b242cf9452263860a9599db69069f5ebc",
                "alphaMass": 200112
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 132.94976128472223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-150-frame-18.png",
                "sha256": "7ff2d3e9227e7a9aeade03460a843bfb2ca1983186601e4f7d02ca58087dc2cd",
                "alphaMass": 1508
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-150-frame-132.png",
                "sha256": "704ab065c8a608c26920e650387abf47f9e0351d15d24d05d8ed5f30b83d9b0b",
                "alphaMass": 313969
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-150-frame-149.png",
                "sha256": "704ab065c8a608c26920e650387abf47f9e0351d15d24d05d8ed5f30b83d9b0b",
                "alphaMass": 313969
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 130.65733506944446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-900-frame-19.png",
                "sha256": "ac4bd6455257a48b4593fbd2d8484d08e8bf434621a50659dc586a17259aba9d",
                "alphaMass": 1820
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-900-frame-132.png",
                "sha256": "704ab065c8a608c26920e650387abf47f9e0351d15d24d05d8ed5f30b83d9b0b",
                "alphaMass": 313969
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-900-frame-792.png",
                "sha256": "704ab065c8a608c26920e650387abf47f9e0351d15d24d05d8ed5f30b83d9b0b",
                "alphaMass": 313969
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/9x16-duration-900-frame-899.png",
                "sha256": "704ab065c8a608c26920e650387abf47f9e0351d15d24d05d8ed5f30b83d9b0b",
                "alphaMass": 313969
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 58.90440538194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-150-frame-18.png",
                "sha256": "ecc19826fcde186765b2dd06df52de352cc48a461ae55d1d56f31b8af3d4bf82",
                "alphaMass": 310
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-150-frame-132.png",
                "sha256": "95540a58a540c90781ea879d0fa3ccda7ae49925de85ad5dbcd7417226edda39",
                "alphaMass": 114367
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-150-frame-149.png",
                "sha256": "95540a58a540c90781ea879d0fa3ccda7ae49925de85ad5dbcd7417226edda39",
                "alphaMass": 114367
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 57.622721354166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-900-frame-19.png",
                "sha256": "3324185507a0b69e3e402e41c6de7b2af28e79de2134c307e41564e2fe2b68c0",
                "alphaMass": 467
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-900-frame-132.png",
                "sha256": "95540a58a540c90781ea879d0fa3ccda7ae49925de85ad5dbcd7417226edda39",
                "alphaMass": 114367
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-900-frame-792.png",
                "sha256": "95540a58a540c90781ea879d0fa3ccda7ae49925de85ad5dbcd7417226edda39",
                "alphaMass": 114367
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-rank-leaderboard-reveal/1x1-duration-900-frame-899.png",
                "sha256": "95540a58a540c90781ea879d0fa3ccda7ae49925de85ad5dbcd7417226edda39",
                "alphaMass": 114367
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
        "note": "A leaderboard reveals ranks with your studio on top in brand blue."
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
      "bundleSha256": "e88dd45464161c85f3b8eaca73b34deb96ef3ae43cf5dae79dd473c423dcdb32",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "799a5d1508e3ebeb8de707b254aaf30947ac4d47e92d66b859650901e35304b2",
        "loop": "9b086d7fbcc74e4baf474bb4437766e65ec56cf185ef7880df4d1202d87c7dc2",
        "detail": "4c8b2a39f635778c83bc6fdfe4aaa38b0d462c8e3055d987d71c69ad425e7667"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c21ae96b810e4ca97bd3a2cfa832f7c67757d36e549d26b722333695a48ad11f",
        "loop": "50a18c56f00e5ed56628bb795235c633697db15bf7dfe1819bf8951875ab0707",
        "detail": "2a42f351f181ee3c7234bff31ce3e50b214fe8c2b0835dc8d39985b2ba9aea99"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-rank-leaderboard-reveal/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "74449c51eed573ae3bd82169076f4fd782c555054b411452dd4ef61926284fb9",
        "loop": "67a419f8696ad4f46c8913c7d2002d58959410c0d74e79e406303ccde37b048a",
        "detail": "5f449c4a3dde21988235c05f38ead041a2319409f92a1a35ef59645359270579"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e88dd45464161c85f3b8eaca73b34deb96ef3ae43cf5dae79dd473c423dcdb32/index.mjs",
    "sha256": "e88dd45464161c85f3b8eaca73b34deb96ef3ae43cf5dae79dd473c423dcdb32",
    "bytes": 298439,
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
    "at": "2026-10-09T03:32:36.863Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
