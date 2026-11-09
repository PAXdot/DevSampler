// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand-motion",
  "job": "titles",
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
    "ex-poster-grid",
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
    "title": "MOVE IDEAS",
    "subtitle": "A modular identity with room to grow.",
    "items": [
      "Shape",
      "Rhythm",
      "Possibility"
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
  "name": "Typographic poster grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-ex-poster-grid",
    "bundleSha256": "1fdbbe68308c214931f7b1f5da4d2ddcf54b37ac9e2f0016597cf069b9006778",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:07.932Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-paper.png",
        "sha256": "93ea5544769a2d5d822843e2361930085940bd2dcd1e1847b729a28c9cc40544"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-night.png",
        "sha256": "64f84f8a01be33df355a941c6a68369eb2ee9ab522303f601f1ff13c7a80127e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-color.png",
        "sha256": "aaff3c9ea3c22ef07864f60e1990c0dfc06f491ce93010324bb1a6d0c8aa0540"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-paper.png",
        "sha256": "54849bb847c23cdf80ffc27b9983a2015011651ef3c8f9d03071595a403c9a89"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-night.png",
        "sha256": "d483f245a10bfad2b6b5ef5970cebda1d11553aa017ef504a41979bd929822f1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-color.png",
        "sha256": "7d420369559b4b2a422955286a74c354a2ef24af2a78780f83cd92ace83e1a24"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-paper.png",
        "sha256": "53117a375f82bf79b4a8750ceca32232e594901d638263c8d201db576d4e2c17"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-night.png",
        "sha256": "4c0cdba42cc2082ec0b1fa27dd404327e37e88091b2ced5afcebd42fa37e3805"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-color.png",
        "sha256": "bea0892ff85e51abbd8a576a47a9b4b16098f0bc5862735ca5e800cace9ae097"
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
          "lp-ex-poster-grid--16x9",
          "lp-ex-poster-grid--9x16",
          "lp-ex-poster-grid--1x1"
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
            "paperNight": 142.68649631076389,
            "paperColor": 21.04709201388889,
            "region": {
              "left": 154,
              "top": 108,
              "width": 1612,
              "height": 904
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 131.15923394097223,
            "paperColor": 23.63888888888889,
            "region": {
              "left": 86,
              "top": 192,
              "width": 908,
              "height": 1603
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 140.84920247395834,
            "paperColor": 26.492350260416668,
            "region": {
              "left": 86,
              "top": 108,
              "width": 908,
              "height": 904
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
            "occupancy": 0.9959783810643601,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9959783810643601,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9948766350676075,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.994800086958652,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.994800086958652,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.994800086958652,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9973513868281654,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9973513868281654,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9962481220197271,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 162.91286892361111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 162.97319878472223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-150-frame-18.png",
                "sha256": "c5ff9c3872380f7336603e39527fe16151889aaa2659759f0cb1f05811e578d1",
                "alphaMass": 1082
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-150-frame-132.png",
                "sha256": "0502ea9442122c528b68ea3a84659bdd009b1ce46dd00b98a5d59ee943a5e949",
                "alphaMass": 381768
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-150-frame-149.png",
                "sha256": "d18bd2d5a1c78ede3735ab3201cda959b22d4ec21006580c3c88ee71cccdbae0",
                "alphaMass": 381768
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 162.91286892361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-900-frame-19.png",
                "sha256": "10dc2be718092737883f8a30ec2087aabdbc58cbc141f56aa7ceb200565e37d6",
                "alphaMass": 1933
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-900-frame-132.png",
                "sha256": "7c8b4730090523671b88777b3d4f9f97c34477c922cc0cf4f1601c156e13fb69",
                "alphaMass": 381768
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-900-frame-792.png",
                "sha256": "8cac96ff067e536c4cad81fe2c086374e15977d1cccb5c82e1e1436e1aa16a8f",
                "alphaMass": 381768
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/16x9-duration-900-frame-899.png",
                "sha256": "25fbea006f53c94c02f634ef897a74710a978725cd73473e0f679e73eeac63a9",
                "alphaMass": 381768
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 142.40787760416666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-150-frame-18.png",
                "sha256": "cdf6d7d5a696b894e37744111fedbfb9c55a4ca496184e6d9401bef3475c327c",
                "alphaMass": 2945
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-150-frame-132.png",
                "sha256": "105bcf6f11db25d24eca6b565452f6eefe9927667be475f349e39a40da92073b",
                "alphaMass": 342809
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-150-frame-149.png",
                "sha256": "702a15a4403e24668bdaa65235f519ff114ab84ac5b3f359ec4cf98bd7eeae62",
                "alphaMass": 342809
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 143.78190104166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-900-frame-19.png",
                "sha256": "1b48074db1d8781440342b06e3113acb025a8bd32894338203425471f8fa140f",
                "alphaMass": 3692
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-900-frame-132.png",
                "sha256": "5349286ea2d09462495a76aba1401e7d154c882767bdd3ed545f6f800c12f153",
                "alphaMass": 342809
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-900-frame-792.png",
                "sha256": "1cc25598f1800a19d3040818093d816e4f14ddf0643478c927713422094d8325",
                "alphaMass": 342809
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/9x16-duration-900-frame-899.png",
                "sha256": "76eb2283c298d13035be2f110a68d9dcfb2ef7470ccede06b21a93538eb28f6a",
                "alphaMass": 342809
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 157.78559027777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-150-frame-18.png",
                "sha256": "d2d26893aeb7fa2ebbbb776999b3cc523f269a76fe7fe407ef3bea2f9b6df0b1",
                "alphaMass": 1287
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-150-frame-132.png",
                "sha256": "cd2b6c276955faa537eacfc4d2ff628ea98c532aacd4450406787bf7c482b27b",
                "alphaMass": 379602
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-150-frame-149.png",
                "sha256": "3ceb949fdfd82f235b64c8fc7bc1fbcbb414428afaaf3b70c04fb493ca35d743",
                "alphaMass": 379602
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 157.92447916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-900-frame-19.png",
                "sha256": "25393500332155558d15bbab62e27ff9aea558894d54b2f6c6843ece11fe308b",
                "alphaMass": 2139
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-900-frame-132.png",
                "sha256": "39e63324aa18f9d0a59fe4d46bdf7a02f46c340f95d684ee8132a9b4a81abd44",
                "alphaMass": 379602
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-900-frame-792.png",
                "sha256": "30cd3fe74363ecf8dc8cd12a6cb760607bc085102995baba1b1668c19df5b139",
                "alphaMass": 379602
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-ex-poster-grid/1x1-duration-900-frame-899.png",
                "sha256": "9884d9de7c6c5f9a39a2d8ff0fb71231e15a29926851beb11cee874168a7e238",
                "alphaMass": 379602
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
        "note": "A typographic poster grid spells MOVE IDEAS with one brand-blue cell."
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
      "bundleSha256": "1fdbbe68308c214931f7b1f5da4d2ddcf54b37ac9e2f0016597cf069b9006778",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "06c7800345f08226bccbc8efc18ae916c97870391e0c6c59a180d3ebf2ad1940",
        "loop": "cf3be8d1186969def9470761812b1889d9e75818eddfba6f3fd61c2eb1a6faf6",
        "detail": "9d87cfdaeeeaaa86110da7f44364d16e13423faad721170fc739c1c7e1316810"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5c9855d743dfee9c411ee6fcc38db729f666e545b2e4f9ff10cfcb0fe92a2dae",
        "loop": "c98161d1141c8058d5cba0d120812cf12bd4f63878365769d74116d2b5be4033",
        "detail": "31e583c169206126ade683f503a192c477f9866fd1e0984937e890ef49c88c8e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-poster-grid/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "619df935a66f784103052172da1f86cb4d9d2e6a16356cf0c2e5f70e0017c613",
        "loop": "c10d13e981b72dfd00b87d6d016006b9a64fff188bef6f50fbe31f3f3fdf1125",
        "detail": "3e10d0ecaf5777972ad2ace2e83f116b2c839b1b7d5eda564209961e2074bc1c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1fdbbe68308c214931f7b1f5da4d2ddcf54b37ac9e2f0016597cf069b9006778/index.mjs",
    "sha256": "1fdbbe68308c214931f7b1f5da4d2ddcf54b37ac9e2f0016597cf069b9006778",
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
    "at": "2026-10-09T03:26:08.624Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
