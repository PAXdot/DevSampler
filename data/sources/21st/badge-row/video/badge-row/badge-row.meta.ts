// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/tags",
  "tags": [
    "badges",
    "tags",
    "pills",
    "methods",
    "features",
    "labels",
    "list"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 46,
      "out": 0
    },
    "markers": {
      "settled": 48
    },
    "beats": [
      4,
      12,
      20,
      28,
      36
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "badges",
      "type": "list",
      "maxChars": 16,
      "role": "label"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "badges",
      "prop": "scale",
      "from": "0.5",
      "settledBy": 46,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V13"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "label": "Every method, typed",
    "badges": [
      {
        "text": "get",
        "color": "#22C55E"
      },
      {
        "text": "post",
        "color": "#3D8BFF"
      },
      {
        "text": "put",
        "color": "#F59E0B"
      },
      {
        "text": "patch",
        "color": "#14B8A6"
      },
      {
        "text": "delete",
        "color": "#EF4444"
      }
    ],
    "look": "soft",
    "mono": true,
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "badges",
      "label": "Badges",
      "type": "list",
      "max": 8,
      "role": "label"
    },
    {
      "key": "look",
      "label": "Look",
      "type": "select",
      "options": [
        "soft",
        "solid",
        "outline"
      ]
    },
    {
      "key": "mono",
      "label": "Mono",
      "type": "boolean"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Badge Row",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "badge-row",
    "bundleSha256": "c7124437be167c62e1c0faf79911f2f6d1a585eae24702ad90f4d04901f332b2",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:03.133Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-paper.png",
        "sha256": "eaaff2076486859190ed5eb74a79ac23bc88f718b4057b9211e331b1554be312"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-night.png",
        "sha256": "4869b79149833b5bde9af1b21237e43b7a2be88df53869cfb22d1d36709276da"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-color.png",
        "sha256": "319f064e025147e2d25e43d5a53a10c91643959c00c76b20d2206df761559673"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-paper.png",
        "sha256": "19fc2fa1698e6961de6841cd8aff6e5e9c6375072e3f5a23e33d4986a13f37b7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-night.png",
        "sha256": "cadc6c74682f0aec9f236a035cc1a1a563917da9218f7b32059f12bd1b940fd9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-color.png",
        "sha256": "e63b8c1d8e87b0915cb050d423d9b8925c22e0ee90b6262e5b8c0cbd7e7dc68f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-paper.png",
        "sha256": "6f6d486030d79c2c1e13542469258dda27fff143afb002b4c5b66cbd848e9c1b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-night.png",
        "sha256": "2b69c61675b788b86f05a488ddf7802f887623391ee4d285f956df527a5c4b69"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-color.png",
        "sha256": "03dda25e38789bbcc71286de8ca1c1f253952099117fbb26fd03a397908f362e"
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
          "badge-row--16x9",
          "badge-row--9x16",
          "badge-row--1x1"
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
            "paperNight": 17.0595703125,
            "paperColor": 21.73578559027778,
            "region": {
              "left": 250,
              "top": 398,
              "width": 1424,
              "height": 284
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 11.79372829861111,
            "paperColor": 4.291395399305555,
            "region": {
              "left": 125,
              "top": 661,
              "width": 830,
              "height": 609
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 21.76760525173611,
            "paperColor": 21.61284722222222,
            "region": {
              "left": 136,
              "top": 443,
              "width": 810,
              "height": 194
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
            "occupancy": 0.572202809986306,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5758422624879856,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4917304713380552,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7161861577835867,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7150043324407096,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7197316338122184,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3938481209051217,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39777678046527254,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.32804307327259513,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.86501736111111,
        "frames": [
          7,
          48,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 12.318033854166666,
            "retainedAlpha": 0.9211907495489585,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-45-frame-5.png",
                "sha256": "fe7a9869dfa9847a4288d9426031220f9edfaf10fac796ce3fd57b5ca374fbe9",
                "alphaMass": 1580
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-45-frame-44.png",
                "sha256": "aa32239adb7927b05e1c2b773920d200c8c0653524a7a229c5f31769ed086721",
                "alphaMass": 12194
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-45-frame-39.png",
                "sha256": "cb8f158e9eb45ac1c3b4afde22782ca0bc9a5892bd32ff678f88807ce19edc55",
                "alphaMass": 11233
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.86501736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-900-frame-7.png",
                "sha256": "1738138bea8ec49f125afe46649bcc0ca1308b6b65ef30b6c3d046f4200b4304",
                "alphaMass": 3064
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-900-frame-48.png",
                "sha256": "1196abdc8811594c57ee6698713b92f23db8f0ff5d671e0df5fa2d7a4194223d",
                "alphaMass": 11987
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-900-frame-792.png",
                "sha256": "b53d10dc0dbdc0faa912bfd6ad4264c1ddd2695d4daf8115399132bb0b113f53",
                "alphaMass": 12003
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/16x9-duration-900-frame-899.png",
                "sha256": "b53d10dc0dbdc0faa912bfd6ad4264c1ddd2695d4daf8115399132bb0b113f53",
                "alphaMass": 12003
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 17.48904079861111,
            "retainedAlpha": 0.9326888862531135,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-45-frame-5.png",
                "sha256": "39e5c9ec0c105946716ba79be911e736a8486f66ef3208ec8ccc3245089c7c34",
                "alphaMass": 1822
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-45-frame-44.png",
                "sha256": "5c30d24acc675ffe92ffe4522a663d7eb8b3703304cafdb1d6bc70bb07d18849",
                "alphaMass": 16862
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-45-frame-39.png",
                "sha256": "7b8587736004c90aa105c05ff4ed8781e74a7f9a330d461d9979ca6ff7ce1c7f",
                "alphaMass": 15727
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.757921006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-900-frame-7.png",
                "sha256": "2d9886c87a56a03353895252036aa97bdf701d68bbfecafc682457018aeb989e",
                "alphaMass": 4047
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-900-frame-48.png",
                "sha256": "290b146d69775331ef95cfc83f554beae8f0137a1a6c3bd6d4719c3fe5a657d8",
                "alphaMass": 16619
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-900-frame-792.png",
                "sha256": "cfd8905af7308f67d29370596e738c9dc73f27eae3777d60620c53acd63ae0d6",
                "alphaMass": 16628
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/9x16-duration-900-frame-899.png",
                "sha256": "cfd8905af7308f67d29370596e738c9dc73f27eae3777d60620c53acd63ae0d6",
                "alphaMass": 16628
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 11.034288194444445,
            "retainedAlpha": 0.923842614329984,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-45-frame-5.png",
                "sha256": "df36c719ee096b7d7073b39bdd6db6a163bc418307b2a50c3605f0a07f59bbe4",
                "alphaMass": 1449
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-45-frame-44.png",
                "sha256": "17866c95e21047535a209d03f422820306aca47297cc59e0f4a78081d59f18d3",
                "alphaMass": 10649
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-45-frame-39.png",
                "sha256": "e01fa29a674382f98d7458a3e04f724af63832592b426c0cea93de2c4826e747",
                "alphaMass": 9838
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.974175347222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-900-frame-7.png",
                "sha256": "4690b6a23e59695b91c6c38d51b87b416cc6954ffa51b2eb3cc8b200437c140d",
                "alphaMass": 2747
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-900-frame-48.png",
                "sha256": "0c8d1b1fe13f6b2af9e23457f660c04f62d2de205fa74a6578f051c29d7e85f3",
                "alphaMass": 10467
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-900-frame-792.png",
                "sha256": "034f77187c1842e608a5026de8df5d7fcb54c55bf58fe4282e71e458eafff19e",
                "alphaMass": 10486
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/badge-row/1x1-duration-900-frame-899.png",
                "sha256": "034f77187c1842e608a5026de8df5d7fcb54c55bf58fe4282e71e458eafff19e",
                "alphaMass": 10486
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
        "note": "HTTP method badges pop in a row under a label; patch is now teal, no purple; brands recolor label and badges."
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
      "bundleSha256": "c7124437be167c62e1c0faf79911f2f6d1a585eae24702ad90f4d04901f332b2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/badge-row/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/badge-row/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/badge-row/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "78620b674562beb057405fefe9bd8946ed2a285b5a0c88e6304d8c13b1475f9d",
        "loop": "5db5f6612759bdca1c008dcda8d28a28c2eb9e95464111369baf6f8660245883",
        "detail": "4e5a5fad00686c5115fe0932a776d04aba7ab830888c86e663f4df5c006cb503"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/badge-row/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/badge-row/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/badge-row/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "eff2d9ab5ac000c4a0ea0880ed9020ecc34892d6b2c342ba9269da24b8b5f053",
        "loop": "bd71eaefa4150719c206f0bedf72d11813fbc503c378b684ba67471f3dc951e8",
        "detail": "e01b7868d14f82882a5923011a7789f782b754f38ce725c1bb6ff0e3e5b84bfb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/badge-row/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/badge-row/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/badge-row/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "2df17769b86d9dedb4a82646f180e108ed3f9b5f21c2a91ef7f27e43bfd5fc20",
        "loop": "2bd31b707fc17c578f11ee3dd7443c13c80e30938885f6bcafafba4f84140ce1",
        "detail": "1bfba9c99000bb68ab881f8a3c27cf783cfd9aedf54be8c51a0c20201918066f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c7124437be167c62e1c0faf79911f2f6d1a585eae24702ad90f4d04901f332b2/index.mjs",
    "sha256": "c7124437be167c62e1c0faf79911f2f6d1a585eae24702ad90f4d04901f332b2",
    "bytes": 161535,
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
    "at": "2026-10-09T03:08:28.115Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
