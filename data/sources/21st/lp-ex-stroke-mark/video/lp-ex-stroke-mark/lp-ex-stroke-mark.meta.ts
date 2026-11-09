// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand-motion",
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "assemble"
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
    "ex-stroke-mark",
    "expression",
    "typography",
    "source-adaptation"
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
    "title": "An identity in motion",
    "subtitle": "A few precise lines, connected with purpose.",
    "items": [
      "Trace",
      "Connect",
      "Repeat"
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
  "name": "Mark drawn from strokes",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-ex-stroke-mark",
    "bundleSha256": "5a8f8a930a619574348b0a46d4cbec43081da9353579c5ea0f3564068f8879d7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:34.659Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-paper.png",
        "sha256": "d602daea1fc362c496bc6ae9832c49f842358e28c3e457a5ebe356698e4a52dc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-night.png",
        "sha256": "ec286f304ea296a745ad1757729dc17bdc96406c19a86a445cc939e63b62461c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-color.png",
        "sha256": "2d5d378dcc06cbe944a3f596cbe98183786fa882cb81b529e17acf1ff01ce8fc"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-paper.png",
        "sha256": "2d68fe1c28608c6fdc65eb9843c9b0c167d5670202298fc6e7ebb6d8d6344dab"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-night.png",
        "sha256": "ad31edd4bb6fd6d1f337422a489b8b77f482f381faa94ed6072369d6dd75569f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-color.png",
        "sha256": "93d5cadc4fec3f0bd3cb0820cd420c8d500232c054d9482d0ad0d4472204f8e7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-paper.png",
        "sha256": "6d6e821d00e082ce6193bec31df53508d7f1fd06ef6dfaf4cbb0e308994ce2c7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-night.png",
        "sha256": "04c262d4b399be69317df5632d82d5b864be8caef2109cf68c11bc0d14c76248"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-color.png",
        "sha256": "6bec34e7ed15bbb5e1727c6c236e44b4117cef4b532960f8242973f7ce24a089"
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
          "lp-ex-stroke-mark--16x9",
          "lp-ex-stroke-mark--9x16",
          "lp-ex-stroke-mark--1x1"
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
            "paperNight": 8.92141384548611,
            "paperColor": 5.256998697916667,
            "region": {
              "left": 154,
              "top": 153,
              "width": 1375,
              "height": 859
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 9.39645724826389,
            "paperColor": 3.8123101128472223,
            "region": {
              "left": 88,
              "top": 257,
              "width": 825,
              "height": 1538
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 6.683729383680555,
            "paperColor": 3.593722873263889,
            "region": {
              "left": 87,
              "top": 148,
              "width": 773,
              "height": 864
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
            "occupancy": 0.8072579034828954,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8072579034828954,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8063181387524148,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8661637237199409,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8661637237199409,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8619590454494557,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8114974384815656,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8114974384815656,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8105582053351749,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.0380859375,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 12.091688368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-150-frame-18.png",
                "sha256": "455c25b2e3f258933a7c978ffcf6dd5847ca21560bd09f60e6cd8f7e938b5032",
                "alphaMass": 219
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-150-frame-132.png",
                "sha256": "f70eb432d75445015777dae61afe205535c4b70180c066893f0ba16dfabdcee0",
                "alphaMass": 13104
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-150-frame-149.png",
                "sha256": "f70eb432d75445015777dae61afe205535c4b70180c066893f0ba16dfabdcee0",
                "alphaMass": 13104
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.0380859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-900-frame-19.png",
                "sha256": "18c7a8f791398f813287e951e3c87bebb58ba19d111dec2d4208adce7132d77b",
                "alphaMass": 235
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-900-frame-132.png",
                "sha256": "f70eb432d75445015777dae61afe205535c4b70180c066893f0ba16dfabdcee0",
                "alphaMass": 13104
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-900-frame-792.png",
                "sha256": "f70eb432d75445015777dae61afe205535c4b70180c066893f0ba16dfabdcee0",
                "alphaMass": 13104
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/16x9-duration-900-frame-899.png",
                "sha256": "f70eb432d75445015777dae61afe205535c4b70180c066893f0ba16dfabdcee0",
                "alphaMass": 13104
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 6.6455078125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-150-frame-18.png",
                "sha256": "03ae0cb5db14d1c395a38e45951c64daf8d8ecb2542fc18506da263e363b3eae",
                "alphaMass": 1912
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-150-frame-132.png",
                "sha256": "ccf18c760246011169da6a29beacb4bf42e41d948ee644ab5e4a0b63aa705298",
                "alphaMass": 5829
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-150-frame-149.png",
                "sha256": "ccf18c760246011169da6a29beacb4bf42e41d948ee644ab5e4a0b63aa705298",
                "alphaMass": 5829
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.684787326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-900-frame-19.png",
                "sha256": "bc476d1fda9ac5708da3e195a4e64c55082ffe05591729b8b6ae3e463a4f2c0a",
                "alphaMass": 1918
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-900-frame-132.png",
                "sha256": "ccf18c760246011169da6a29beacb4bf42e41d948ee644ab5e4a0b63aa705298",
                "alphaMass": 5829
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-900-frame-792.png",
                "sha256": "ccf18c760246011169da6a29beacb4bf42e41d948ee644ab5e4a0b63aa705298",
                "alphaMass": 5829
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/9x16-duration-900-frame-899.png",
                "sha256": "ccf18c760246011169da6a29beacb4bf42e41d948ee644ab5e4a0b63aa705298",
                "alphaMass": 5829
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 9.4150390625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-150-frame-18.png",
                "sha256": "f300e5d00d1c9353a61cb517447434e39b446d2d8a9d565a3d4a06cd3fea5c99",
                "alphaMass": 387
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-150-frame-132.png",
                "sha256": "a882c9077be8486110eb36468254a56a36ab162ba2d64315ca104603e90cc2fb",
                "alphaMass": 7532
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-150-frame-149.png",
                "sha256": "a882c9077be8486110eb36468254a56a36ab162ba2d64315ca104603e90cc2fb",
                "alphaMass": 7532
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.367296006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-900-frame-19.png",
                "sha256": "8136bd645e3ae73bf5d61e56ed82ae0e2caf459b8aff7e0d3d7dc988c907cd56",
                "alphaMass": 397
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-900-frame-132.png",
                "sha256": "a882c9077be8486110eb36468254a56a36ab162ba2d64315ca104603e90cc2fb",
                "alphaMass": 7532
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-900-frame-792.png",
                "sha256": "a882c9077be8486110eb36468254a56a36ab162ba2d64315ca104603e90cc2fb",
                "alphaMass": 7532
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-ex-stroke-mark/1x1-duration-900-frame-899.png",
                "sha256": "a882c9077be8486110eb36468254a56a36ab162ba2d64315ca104603e90cc2fb",
                "alphaMass": 7532
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A diamond mark is drawn from strokes among smaller marks in brand blue."
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
      "bundleSha256": "5a8f8a930a619574348b0a46d4cbec43081da9353579c5ea0f3564068f8879d7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "297c48c48fe39db92a38bf1975c78dd7da433a9fd3346861ada0bc9ad3c3959b",
        "loop": "fc4ce1c724abdfaf66e90d3bfb7ba1c847ec595f71a4ee8d0803ae0d6916cac0",
        "detail": "5357148df1b08b644c7f236a287447706d84d33bfd5a8d4e55965be8fac41a1a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5316fc6dceee0c671be9325876f47ba3890861d721edaadce8d4c1fdde4b8d5e",
        "loop": "0119317b81f0a450713713c3317ef5569091fc55d0948d0589289c6106d60940",
        "detail": "8510d5817282dee1b9011d28216f0c3bcd9b733617aca6dac4d4ff4f20a78368"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-stroke-mark/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ddc1f2315472b6dfd64777e93873dfecf81351a69fda9eca85fc65d7f89b8878",
        "loop": "3ae113f4ca0400bc4611fa69643b5fe15301d80e8961668495c53e61f2fe4132",
        "detail": "3fb8d0458ba75090613437a7d6db5f28b5f3728b1eb62c1cf49fd663643209ef"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5a8f8a930a619574348b0a46d4cbec43081da9353579c5ea0f3564068f8879d7/index.mjs",
    "sha256": "5a8f8a930a619574348b0a46d4cbec43081da9353579c5ea0f3564068f8879d7",
    "bytes": 298394,
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
    "at": "2026-10-09T03:25:56.912Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
