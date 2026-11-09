// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "workflow",
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "route"
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
    "notification-cascade",
    "systems",
    "workflow",
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
    "title": "Stay in the loop",
    "subtitle": "Small status signals form a readable story",
    "items": [
      "Draft saved",
      "Review complete",
      "Assets ready",
      "Shared with team"
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
  "name": "Status Notification Cascade",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-notification-cascade",
    "bundleSha256": "4125559d4fb448ae16cc65ffe67c7c607bfeecf13dd82ad8047dd56984004d51",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:33.253Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-paper.png",
        "sha256": "7fec55df8fd99c05bf7a3e59098aa7979806459a1bb6eba231b25d59e46844b5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-night.png",
        "sha256": "2849300fa83970c2781efc3ccd48c41836ff0dabf8f71450faa9b22741192e05"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-color.png",
        "sha256": "e763252f955aad882e7bbead4ca257fb82de6b16c07f2890aa897b3160ce113d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-paper.png",
        "sha256": "a118107e2191e946da9fc99888b91cb9d61c3e94d0bdd59b37d9f07982bf9a8a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-night.png",
        "sha256": "dddf7085b0c804042eb55a88d8dd0594dc580a7a04ba4fe2dff54f4fa9ffaf93"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-color.png",
        "sha256": "5e9ebb00b17090b35decdfc4d517bcd8266c101c571d2cae990412a192b923c0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-paper.png",
        "sha256": "ecec2fc35595485541b7032322c68f71fdee2fdc41dac18fa238af2404e3a7b6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-night.png",
        "sha256": "04cdccf79bbb2530b32a5cd94ebc0c712a06cb3f9037a5556a3d7a99fcbdbb9d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-color.png",
        "sha256": "26091975d885548995904b19675e127db9f5bcbc6dff1c367aea3cff94f97013"
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
          "lp-notification-cascade--16x9",
          "lp-notification-cascade--9x16",
          "lp-notification-cascade--1x1"
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
            "paperNight": 50.42119683159722,
            "paperColor": 6.320041232638889,
            "region": {
              "left": 263,
              "top": 219,
              "width": 1395,
              "height": 729
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 60.95301649305556,
            "paperColor": 6.268120659722222,
            "region": {
              "left": 126,
              "top": 263,
              "width": 818,
              "height": 1444
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.520670572916664,
            "paperColor": 7.208604600694445,
            "region": {
              "left": 144,
              "top": 358,
              "width": 791,
              "height": 413
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
            "occupancy": 0.6950534119897961,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6950534119897961,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6950534119897961,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.807303695655217,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.807303695655217,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.807303695655217,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39693596631611044,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39693596631611044,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39693596631611044,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 57.1484375,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 57.1484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-150-frame-18.png",
                "sha256": "ff4af1a46528ccee81838756b0141504186853f2d2122b930f2328b3ff6a63af",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-150-frame-132.png",
                "sha256": "1c762b5a3521222e1df2ee75e9a4a57bb045356311c4330d57319f6ca7a8368c",
                "alphaMass": 105337
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-150-frame-149.png",
                "sha256": "1c762b5a3521222e1df2ee75e9a4a57bb045356311c4330d57319f6ca7a8368c",
                "alphaMass": 105337
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 57.1484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-900-frame-19.png",
                "sha256": "ff4af1a46528ccee81838756b0141504186853f2d2122b930f2328b3ff6a63af",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-900-frame-132.png",
                "sha256": "1c762b5a3521222e1df2ee75e9a4a57bb045356311c4330d57319f6ca7a8368c",
                "alphaMass": 105337
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-900-frame-792.png",
                "sha256": "1c762b5a3521222e1df2ee75e9a4a57bb045356311c4330d57319f6ca7a8368c",
                "alphaMass": 105337
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/16x9-duration-900-frame-899.png",
                "sha256": "1c762b5a3521222e1df2ee75e9a4a57bb045356311c4330d57319f6ca7a8368c",
                "alphaMass": 105337
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 73.2412109375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-150-frame-18.png",
                "sha256": "30ebc9497faa64f41120cbd82ae4714e048e41c1753cc2dfebbeeab85768491e",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-150-frame-132.png",
                "sha256": "f0b4bdaf29f7f57e1c1349efc3d57b40cd3c3d981d9bc05d10e3afdc2a1fce53",
                "alphaMass": 94956
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-150-frame-149.png",
                "sha256": "f0b4bdaf29f7f57e1c1349efc3d57b40cd3c3d981d9bc05d10e3afdc2a1fce53",
                "alphaMass": 94956
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 73.2412109375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-900-frame-19.png",
                "sha256": "30ebc9497faa64f41120cbd82ae4714e048e41c1753cc2dfebbeeab85768491e",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-900-frame-132.png",
                "sha256": "f0b4bdaf29f7f57e1c1349efc3d57b40cd3c3d981d9bc05d10e3afdc2a1fce53",
                "alphaMass": 94956
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-900-frame-792.png",
                "sha256": "f0b4bdaf29f7f57e1c1349efc3d57b40cd3c3d981d9bc05d10e3afdc2a1fce53",
                "alphaMass": 94956
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/9x16-duration-900-frame-899.png",
                "sha256": "f0b4bdaf29f7f57e1c1349efc3d57b40cd3c3d981d9bc05d10e3afdc2a1fce53",
                "alphaMass": 94956
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 41.12391493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-150-frame-18.png",
                "sha256": "b513f4ae6edd1e8e86d76ed568bc819cbdd500307b2b4b0c8e39012f1ca22140",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-150-frame-132.png",
                "sha256": "da50db74f0adb38312261f24c5ba390a15aab78b915f8fb459cce03fb3dbdc5b",
                "alphaMass": 64878
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-150-frame-149.png",
                "sha256": "da50db74f0adb38312261f24c5ba390a15aab78b915f8fb459cce03fb3dbdc5b",
                "alphaMass": 64878
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 41.12391493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-900-frame-19.png",
                "sha256": "b513f4ae6edd1e8e86d76ed568bc819cbdd500307b2b4b0c8e39012f1ca22140",
                "alphaMass": 0
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-900-frame-132.png",
                "sha256": "da50db74f0adb38312261f24c5ba390a15aab78b915f8fb459cce03fb3dbdc5b",
                "alphaMass": 64878
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-900-frame-792.png",
                "sha256": "da50db74f0adb38312261f24c5ba390a15aab78b915f8fb459cce03fb3dbdc5b",
                "alphaMass": 64878
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-notification-cascade/1x1-duration-900-frame-899.png",
                "sha256": "da50db74f0adb38312261f24c5ba390a15aab78b915f8fb459cce03fb3dbdc5b",
                "alphaMass": 64878
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Status notifications cascade into a stack above a brand-blue summary bar."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4125559d4fb448ae16cc65ffe67c7c607bfeecf13dd82ad8047dd56984004d51",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-notification-cascade/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-notification-cascade/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-notification-cascade/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "16f45ca100db3af56622da9fa2e33b7c78f1ea4a73ed8f62fe41813c30911990",
        "loop": "abc6b66400a44c37708bd2811c6113527a800cf80c71eb0b796f861c1f1017ee",
        "detail": "de993edb2f7b1a5b93303cb148d494185e4d2d83280034795633ae32e53129d0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-notification-cascade/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-notification-cascade/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-notification-cascade/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "581a2dc9c7ba2838f94400a8110a0c7b2e34e7aec21e21c395fc0e7c74e224f3",
        "loop": "e1bd49c956a2c46d5e288f0649f485e35d894590be3e12d488f3e2caec58020c",
        "detail": "4274c74d73722a6da263b2e09e7b5b096f59e2dc2c2223aa29cc8f785c74cc74"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-notification-cascade/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-notification-cascade/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-notification-cascade/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a6b0358f7ecd5ab5fba3809ef4644da62581e3dd1c4d54ecc999a85b79eb5ee1",
        "loop": "697e0e3af387c7179edc316d830667d64a082067a19f627ab3da7b65dfdafaa1",
        "detail": "9359adc6ffa1f6c34b45eb50f0047651613e1ce861131ba8c96f25b98723f511"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4125559d4fb448ae16cc65ffe67c7c607bfeecf13dd82ad8047dd56984004d51/index.mjs",
    "sha256": "4125559d4fb448ae16cc65ffe67c7c607bfeecf13dd82ad8047dd56984004d51",
    "bytes": 298424,
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
    "at": "2026-10-09T03:28:33.630Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
