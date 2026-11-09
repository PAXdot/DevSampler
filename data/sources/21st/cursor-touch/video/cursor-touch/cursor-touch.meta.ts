// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "touch",
    "hand",
    "tap",
    "mobile",
    "phone",
    "app demo",
    "onboarding",
    "ripple"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80,
      "tap": 27,
      "secondTap": 42,
      "cta": 58
    },
    "beats": [
      0,
      27,
      42,
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
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 28,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "options",
      "type": "list",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "phone",
      "prop": "y",
      "from": "below",
      "settledBy": 22,
      "easing": "spring"
    },
    {
      "target": "hand",
      "prop": "path",
      "from": "bottom-right",
      "settledBy": 74,
      "easing": "ease"
    },
    {
      "target": "options",
      "prop": "selected",
      "settledBy": 50,
      "easing": "spring"
    },
    {
      "target": "cta",
      "prop": "fill",
      "settledBy": 70,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (touch hand tapping through a phone onboarding screen, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "tap"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "What will you build?",
    "subtitle": "Pick all that apply",
    "options": [
      "Websites",
      "Mobile apps",
      "Dashboards",
      "Online stores"
    ],
    "cta": "Continue",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 32,
      "role": "subline"
    },
    {
      "key": "options",
      "label": "Options",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 14,
      "role": "label"
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Touch Hand Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-touch",
    "bundleSha256": "f35e649196b7d2a27a00d8db21432737eb568a4ededf2730376aa69896e88633",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:40.498Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-paper.png",
        "sha256": "6f988c619a889c14ccd93cfbb2c04664a1c0523962d8361dae83fdcafb0188b7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-night.png",
        "sha256": "d9fce18a2ffcd24ff5d3e53e85760cb0ec839e6f823ffb57151d33686afa11e9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-color.png",
        "sha256": "e5da216cadcd68ae68cb6d9f4dfe73bf91d1c2dc0e5d70ce26761ba1fa2abfd8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-paper.png",
        "sha256": "9db1f9beaa7ce0d54178be75979e4f937206b1f7e12eea9bf20e1312e995c437"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-night.png",
        "sha256": "7d569095806a492830f6e157c51668cfd1b6ba95d6439e2bc538708f61e10b90"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-color.png",
        "sha256": "9d72022f25c42884a23c4aa2601bd9600ae1724f6a45ad16d30873890eaa5078"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-paper.png",
        "sha256": "d312138135bf1087d8f26b8c5ed69c18e899af7e16969d8c526a44a11e8faf8f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-night.png",
        "sha256": "c2ea1fccc871bb6886d8e27d15efc01c997a40fea33f2ae7508f2675827d4c0b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-color.png",
        "sha256": "efc23241f67f09f773675c9089c9830fccafc0997666d8dc19e8393cdc8a1593"
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
          "cursor-touch--16x9",
          "cursor-touch--9x16",
          "cursor-touch--1x1"
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
            "paperNight": 94.46354166666667,
            "paperColor": 25.000352647569443,
            "region": {
              "left": 694,
              "top": 68,
              "width": 532,
              "height": 996
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 105.51247829861111,
            "paperColor": 23.998670789930557,
            "region": {
              "left": 33,
              "top": 98,
              "width": 1014,
              "height": 1776
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 94.55769856770833,
            "paperColor": 24.924072265625,
            "region": {
              "left": 266,
              "top": 56,
              "width": 548,
              "height": 1020
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
            "occupancy": 0.3277721678949358,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.362149103468548,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3277721678949358,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1705080694829375,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2308279793398844,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1705080694829375,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.617040940747584,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6791639838377053,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.617040940747584,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.475911458333333,
        "frames": [
          12,
          80,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 4.475911458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-75-frame-9.png",
                "sha256": "b7934616163e3c6baed331234d6edbcb7264433298233b9855ea23edb7837b99",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-75-frame-74.png",
                "sha256": "4c27cb0356156b6b576d8b937264275099e38b893795a02b222b3d07cf237b45",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-75-frame-66.png",
                "sha256": "4c27cb0356156b6b576d8b937264275099e38b893795a02b222b3d07cf237b45",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.475911458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-600-frame-12.png",
                "sha256": "b7934616163e3c6baed331234d6edbcb7264433298233b9855ea23edb7837b99",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-600-frame-80.png",
                "sha256": "4c27cb0356156b6b576d8b937264275099e38b893795a02b222b3d07cf237b45",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-600-frame-528.png",
                "sha256": "4c27cb0356156b6b576d8b937264275099e38b893795a02b222b3d07cf237b45",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/16x9-duration-600-frame-599.png",
                "sha256": "4c27cb0356156b6b576d8b937264275099e38b893795a02b222b3d07cf237b45",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 14.924479166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-75-frame-9.png",
                "sha256": "54a12ff5e0be65767ad41ed4721ccb5977d03684e0df823dcb33283ee0475a58",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-75-frame-74.png",
                "sha256": "94ff583581f69d4b19bb561e4d1670358868390f805d3b14c0cab5eeba2f4d7e",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-75-frame-66.png",
                "sha256": "94ff583581f69d4b19bb561e4d1670358868390f805d3b14c0cab5eeba2f4d7e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 14.924479166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-600-frame-12.png",
                "sha256": "54a12ff5e0be65767ad41ed4721ccb5977d03684e0df823dcb33283ee0475a58",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-600-frame-80.png",
                "sha256": "94ff583581f69d4b19bb561e4d1670358868390f805d3b14c0cab5eeba2f4d7e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-600-frame-528.png",
                "sha256": "94ff583581f69d4b19bb561e4d1670358868390f805d3b14c0cab5eeba2f4d7e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/9x16-duration-600-frame-599.png",
                "sha256": "94ff583581f69d4b19bb561e4d1670358868390f805d3b14c0cab5eeba2f4d7e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 8.35275607638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-75-frame-9.png",
                "sha256": "1c299a40173d244d318b4e2873c160a04617a5c6329c1090f9d3c41552381c1f",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-75-frame-74.png",
                "sha256": "0047d9fa6e5a02833624b24b495dcd3433b46019e23e92e60367896984115a12",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-75-frame-66.png",
                "sha256": "0047d9fa6e5a02833624b24b495dcd3433b46019e23e92e60367896984115a12",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.35275607638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-600-frame-12.png",
                "sha256": "9e2a2b1cf388ef3b03c7e86cbe27caff3455cf6b5cf9b66b0c231b977b3429b3",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-600-frame-80.png",
                "sha256": "0047d9fa6e5a02833624b24b495dcd3433b46019e23e92e60367896984115a12",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-600-frame-528.png",
                "sha256": "0047d9fa6e5a02833624b24b495dcd3433b46019e23e92e60367896984115a12",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/cursor-touch/1x1-duration-600-frame-599.png",
                "sha256": "0047d9fa6e5a02833624b24b495dcd3433b46019e23e92e60367896984115a12",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A big touch hand taps options on a phone onboarding screen and taps Continue with ripples."
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
      "bundleSha256": "f35e649196b7d2a27a00d8db21432737eb568a4ededf2730376aa69896e88633",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-touch/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-touch/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-touch/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "cccce01c1a1dae29d97e0d929d713a7579a38295eb4d00a2b2a26c576a5d6a67",
        "loop": "031f3e4b3a905ed7b475b1fc6d4f41c89f14b1af1eab17de89bea8643934f35b",
        "detail": "a79d10a2f8e96653c3a30e7ad6e989f06a9048bb91ad89647b27d85c493b84fc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-touch/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-touch/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-touch/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "b1ed8b242152d92c999aa1fff0accb3186ec287a27f0bfd61aac8d70be644b21",
        "loop": "7cb99197837ab9c0589f04c6f4f4bbb39aa1934d1ec09e9ebfcf369344a3e343",
        "detail": "757745cdbd11f98ed46220bcd1ece068b66a23e219daa4e103b821d61ce8b7ab"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-touch/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-touch/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-touch/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "93642a8c3d1717d328b46f167d0a699bda790d4d72c8094a6c2efba84972c62a",
        "loop": "92eeb0deaa67da5185316d6c61595445b5ad202a19e37593f19225d7880c2cf3",
        "detail": "3090ad8c8d193cadd6a27b47b6e183de16a1fb5fe1e1ca693b017cf9920c642a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f35e649196b7d2a27a00d8db21432737eb568a4ededf2730376aa69896e88633/index.mjs",
    "sha256": "f35e649196b7d2a27a00d8db21432737eb568a4ededf2730376aa69896e88633",
    "bytes": 172992,
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
    "at": "2026-10-09T03:13:29.297Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
