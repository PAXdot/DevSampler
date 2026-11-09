// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "keycap-press-to-palette"
  ],
  "energy": "punchy",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "keycap-press-to-palette",
    "keyboard",
    "shortcut",
    "command-menu"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "cta"
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
      "target": "keycap-press-to-palette",
      "prop": "transform",
      "from": "enter",
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#2643EC",
    "secondary": "#FF8A3D",
    "paper": "#2442E6",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Keyboard first",
    "headline": "Everything is one shortcut away",
    "cta": "Press ⌘K anywhere"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Shortcut Command Menu",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-shortcut",
    "bundleSha256": "52961748299ff3cbd95a41a82730c659a25b3454c9837c9250df62e7251e29c6",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:05.167Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-paper.png",
        "sha256": "d947eec0879c18034c3bb7f235ba178cb483f43f9e5c6332f318b43a59c87db5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-night.png",
        "sha256": "6df6def3bac77d9ac2eac585af371105fd9b720d706f794b8b024626ba015309"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-color.png",
        "sha256": "0a9eafaddba4965de501d1ab6c9ef53dd20d10e08e6755364ba9bfd623afec1c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-paper.png",
        "sha256": "08f732e663c8656d84c17bab2dc1a9f0ae488e7f300b3bf6af06712ea9b04f0d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-night.png",
        "sha256": "f8ead03e96585c68a10b58ab758c7507203989b9bc6afd939bdf8741a92cd2db"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-color.png",
        "sha256": "6ad7efc96eba7822909b5bad79328b3f846d7a8070f224f66c0e590fcbbaabc8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-paper.png",
        "sha256": "b35aa574bff95b2dbf076ece0bd348e662b4c2ba125dec4f922b84283e4bcefc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-night.png",
        "sha256": "0d5cffbb8cb9a93e5b052dbc13cf94cac11fb514c8990b69acc99d2307aa27be"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-color.png",
        "sha256": "2a8d227e6ebe8483e5529459a8785d6a727dacf1f1eb4e513df7856a13f12d42"
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
          "mg-pr-shortcut--16x9",
          "mg-pr-shortcut--9x16",
          "mg-pr-shortcut--1x1"
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
            "paperNight": 8.290093315972221,
            "paperColor": 2.9711100260416665,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 23.93633355034722,
            "paperColor": 8.378472222222221,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1571
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 13.386284722222221,
            "paperColor": 4.649359809027778,
            "region": {
              "left": 0,
              "top": 63,
              "width": 1080,
              "height": 956
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
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1596218348450493,
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
            "occupancy": 1.2545141513395484,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2545141513395484,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2545141513395484,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.892686631944445,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 15.91775173611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-90-frame-10.png",
                "sha256": "7848d53a02b1e9491defd1b4c3d86ffe062efe78c62d8e4060575d329c76b408",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-90-frame-89.png",
                "sha256": "c3cedfdb9e198580456d9753cb29665d3359b70d2a5f0df53a8bff33eb31911f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-90-frame-79.png",
                "sha256": "c3cedfdb9e198580456d9753cb29665d3359b70d2a5f0df53a8bff33eb31911f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 15.892686631944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-900-frame-19.png",
                "sha256": "8c8bc85e1cd112e08d4f97ee3b802aff44aa650e821ad12c8b4a3a9b6579468f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-900-frame-132.png",
                "sha256": "c3cedfdb9e198580456d9753cb29665d3359b70d2a5f0df53a8bff33eb31911f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-900-frame-792.png",
                "sha256": "c3cedfdb9e198580456d9753cb29665d3359b70d2a5f0df53a8bff33eb31911f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/16x9-duration-900-frame-899.png",
                "sha256": "c3cedfdb9e198580456d9753cb29665d3359b70d2a5f0df53a8bff33eb31911f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.280164930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-90-frame-10.png",
                "sha256": "6834881dc77517939e8ea419b01edc9a3e53e0c1d3713bfceef5f7a346733a9b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-90-frame-89.png",
                "sha256": "79da8025fbb87d950480db54e054907e0f8f896ca640d772ca1a52b0e60a2aff",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-90-frame-79.png",
                "sha256": "72ccf46de7737a6ea99badadd3116b7dda7791cdc64d291c35c353b21771b3f3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.186957465277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-900-frame-19.png",
                "sha256": "59487fd3f9d2f728ec603cecff5699bbf033dbfd2f0500f10cf7cfbbe26b6c90",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-900-frame-132.png",
                "sha256": "72ccf46de7737a6ea99badadd3116b7dda7791cdc64d291c35c353b21771b3f3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-900-frame-792.png",
                "sha256": "72ccf46de7737a6ea99badadd3116b7dda7791cdc64d291c35c353b21771b3f3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/9x16-duration-900-frame-899.png",
                "sha256": "72ccf46de7737a6ea99badadd3116b7dda7791cdc64d291c35c353b21771b3f3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.320855034722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-90-frame-10.png",
                "sha256": "32adc29eaccc2ed0cd3f9b50fdcdb6911683a46b121818a0257b08889166d43e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-90-frame-89.png",
                "sha256": "8557f21fa67b8975f9776f41c45ddd0b1814f3036c6b4ebdb07c8b4eeb799c6c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-90-frame-79.png",
                "sha256": "8557f21fa67b8975f9776f41c45ddd0b1814f3036c6b4ebdb07c8b4eeb799c6c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.271375868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-900-frame-19.png",
                "sha256": "f1e9afb43a54e61a32c5ad821f74939bdaaaa4c21fb6a639cad73e4e343898d5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-900-frame-132.png",
                "sha256": "8557f21fa67b8975f9776f41c45ddd0b1814f3036c6b4ebdb07c8b4eeb799c6c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-900-frame-792.png",
                "sha256": "8557f21fa67b8975f9776f41c45ddd0b1814f3036c6b4ebdb07c8b4eeb799c6c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-shortcut/1x1-duration-900-frame-899.png",
                "sha256": "8557f21fa67b8975f9776f41c45ddd0b1814f3036c6b4ebdb07c8b4eeb799c6c",
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
        "note": "Cmd+K keys open a command menu; headline readable, rebrands distinct."
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
      "bundleSha256": "52961748299ff3cbd95a41a82730c659a25b3454c9837c9250df62e7251e29c6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/16x9/detail.mp4",
      "bg": "#6479ec",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8c0880335ab2d118df77812a143ed6a52fefcf176b5f0a05248c170df72f6af8",
        "loop": "857e95bc76d6e9a3329a5d231548776131f40ac592c10c451fb5452d08f47938",
        "detail": "b6c264db3687b948ab73f4dc125f6270eb81725fb31e07b2f4b2db2b12c2fda9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/9x16/detail.mp4",
      "bg": "#6479ec",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "59c64b10b23bf147e324393384dae136c3d7c61ccb1cb50a5482c04356458e24",
        "loop": "a3c1cb84c93b9d25f913ff69eedef82289f97048d2a0cb675a6708a326543cc3",
        "detail": "7c428dc5f556b335205d44bda015aa9c4e8a38b93bb2fdd4c00266f37a32dd47"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-shortcut/1x1/detail.mp4",
      "bg": "#6479ec",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a746e5fe068185c551baffe889e7c8d96660851b72565f43d2c5447a55e3abdd",
        "loop": "502eb0a3dfd1aa4954540184411fcbbd87f15bf2aa8ac53d54eceb2c9396abf2",
        "detail": "a22db25b22afef67bba95c5b313f2bda21d9daf0554d63c3a35a471847ab1dde"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/52961748299ff3cbd95a41a82730c659a25b3454c9837c9250df62e7251e29c6/index.mjs",
    "sha256": "52961748299ff3cbd95a41a82730c659a25b3454c9837c9250df62e7251e29c6",
    "bytes": 183538,
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
    "at": "2026-10-09T04:05:21.425Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
