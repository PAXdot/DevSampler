// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/launch",
  "tags": [
    "launch",
    "intro",
    "title",
    "product",
    "announcement"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 44,
      "out": 0
    },
    "markers": {
      "settled": 48
    },
    "beats": [
      4,
      12,
      30
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "product",
      "type": "text",
      "maxChars": 28,
      "lines": 2,
      "role": "name"
    },
    {
      "key": "date",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "kicker",
      "prop": "y",
      "from": "below",
      "settledBy": 20,
      "easing": "spring"
    },
    {
      "target": "product",
      "prop": "y",
      "from": "below",
      "settledBy": 40,
      "easing": "spring"
    },
    {
      "target": "date",
      "prop": "opacity",
      "settledBy": 44,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/ui.tsx (Wordmark), factor-marketplace/remotion/components/kinetic.tsx"
  },
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "kicker": "Introducing",
    "product": "Acme Edge",
    "date": "Oct 20",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#09090B",
    "fontFamily": "Geist",
    "glow": true
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "product",
      "label": "Product",
      "type": "text",
      "max": 28,
      "role": "name"
    },
    {
      "key": "date",
      "label": "Date",
      "type": "text",
      "max": 24,
      "role": "subline"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "boolean"
    }
  ],
  "name": "Launch Intro",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "launch-intro",
    "bundleSha256": "408fd13fd207861939334c485e73c053406c2f4301677fcee0dde150b2311d84",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:53:21.284Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-paper.png",
        "sha256": "1dd08535e33fa1435ae7694fc88c5f5587b70f21e760e673e0a2214236205977"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-night.png",
        "sha256": "6faeadee4ad8602807eca656d7b995d4260952d593bd08f2a7574eb9a3ab23a7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-color.png",
        "sha256": "70d6d12ff30ad9b66f9f12944da4f4cb3fa786ae6ece6a4a345b94c95a31373b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-paper.png",
        "sha256": "391ea1675a62687dccf9e8915c30e92e76420e4b15a5f5ce64688a0857199f02"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-night.png",
        "sha256": "40e6925aef6af04799c987a247d223e9a926bb7a8b38d58163c54e993d9d6557"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-color.png",
        "sha256": "b65e89a1967d14d1e536b11b6f02a578937d9b679574950cbbe9d4fffdf38d74"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-paper.png",
        "sha256": "dafaf981c35041567a43c87775fc1b5cada56c2ba1c9f1d7c436fc7ed6c30f92"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-night.png",
        "sha256": "f32934ef5f7c83e6ef1f2bf6f0e226908bc0d784d1c6452bb3e69f49075951be"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-color.png",
        "sha256": "80aa76e5b4ba84554509490dbed27e6df1159b45e18ec120c4c9b4956dacc88d"
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
          "launch-intro--16x9",
          "launch-intro--9x16",
          "launch-intro--1x1"
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
            "paperNight": 46.23491753472222,
            "paperColor": 21.41555447048611,
            "region": {
              "left": 524,
              "top": 298,
              "width": 876,
              "height": 485
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 44.03746202256944,
            "paperColor": 17.554850260416668,
            "region": {
              "left": 282,
              "top": 96,
              "width": 516,
              "height": 1728
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 46.443088107638886,
            "paperColor": 21.58102756076389,
            "region": {
              "left": 116,
              "top": 302,
              "width": 852,
              "height": 477
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
            "occupancy": 0.290377049739649,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2827529947807313,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.17701066730704632,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6094104308390024,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6094104308390024,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6094104308390024,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.49380091542789967,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.48105018756473794,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.30138084040200447,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.42165798611111,
        "frames": [
          7,
          48,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 8.42165798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-60-frame-7.png",
                "sha256": "7dee534b9c6ebfb5f93a1266ad3cc08d8f0998b47b8b24c172371dd70a6e6276",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-60-frame-48.png",
                "sha256": "b5bd25de89242bd80bf0a8d1a4705bf389d8401069a146887bb33d5d9ae48204",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-60-frame-52.png",
                "sha256": "2fb50a1a5df2d8519c2be958348c272cbaaa5d83fb2b885d30426e24eb290e60",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-60-frame-59.png",
                "sha256": "0018cff081cf3a05f4b80024bfa7a7a02d3f9e3f2cf72ae6d59930df2dd3d572",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.42165798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-600-frame-7.png",
                "sha256": "7dee534b9c6ebfb5f93a1266ad3cc08d8f0998b47b8b24c172371dd70a6e6276",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-600-frame-48.png",
                "sha256": "1dde9a45e2e8c7bff6a0d252ecc849e7a49de127ede0aecddcec7497809fe863",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-600-frame-528.png",
                "sha256": "bd1624d0f3388615c3295bfff9c78f50b5eb8534402ba732a571fee23791f731",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/16x9-duration-600-frame-599.png",
                "sha256": "0a1322de93465587ef27f87294cee4a3b4f8f7b118a50b91cdefe50d66334a5a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 9.944444444444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-60-frame-7.png",
                "sha256": "fa3618ad808fae3e9384a2654da19f4f07bf9ac1fd11bcfd34ab183d147a2a1f",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-60-frame-48.png",
                "sha256": "9f177343295cb74d43cf6197c501876d4f1b288874b8ff2fa22054d57c574214",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-60-frame-52.png",
                "sha256": "6ec467e7942b17221b2f4aaeba4e27934b093e43bbfc8ad3283f21c15b94c138",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-60-frame-59.png",
                "sha256": "70f1104c580fe5f5fab8b9934f3cb5edf48a98a97684e0385b26890f564279f1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.944444444444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-600-frame-7.png",
                "sha256": "fa3618ad808fae3e9384a2654da19f4f07bf9ac1fd11bcfd34ab183d147a2a1f",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-600-frame-48.png",
                "sha256": "907e18dab10f9ca7e7b13af3e58ef65186395987949f5691e5dbde18d29cdc55",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-600-frame-528.png",
                "sha256": "258886df9fffef948beabb8241684f880515f6fd101734bd6e4693dbbda3a308",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/9x16-duration-600-frame-599.png",
                "sha256": "e2d3c67b31de75e9712f860855c4e08da9f037e2e8be3425af1ffd5f5b32081f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 11.638237847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-60-frame-7.png",
                "sha256": "056925168982bca52ead69f4ece070f82b9e5c04b6c998f77ca9bb408ae0daec",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-60-frame-48.png",
                "sha256": "862be676c3f890d7a8e9040daf3f468c53699772c07ee09d5c4a4888fb74a4aa",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-60-frame-52.png",
                "sha256": "47288362facd0b3fe45006dc435a9c7ebe7a408ce72d9286a13195b98ba4bf73",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-60-frame-59.png",
                "sha256": "39219996f34d37cda914a213541a9b876c401dba1d3c93819cf43ac74ff63dc9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.638346354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-600-frame-7.png",
                "sha256": "056925168982bca52ead69f4ece070f82b9e5c04b6c998f77ca9bb408ae0daec",
                "alphaMass": 587520
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-600-frame-48.png",
                "sha256": "a4893ed7d6389bab88edc7f4fd4854950629718bd53ed28a1f16984f76848b15",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-600-frame-528.png",
                "sha256": "2999a274c0356b482bb78fb04d39531288ebe497871b3da08f5ee2dcfaa9a1ea",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/launch-intro/1x1-duration-600-frame-599.png",
                "sha256": "705efdf83b6a75eee02d0aa90fd7a64824205f20e5b7fc0fd5e6c5d7a065dc5b",
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
        "note": "Product name lands under a soft glow with a date chip; an opening title."
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
      "bundleSha256": "408fd13fd207861939334c485e73c053406c2f4301677fcee0dde150b2311d84",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.919691Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/launch-intro/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/launch-intro/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/launch-intro/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "feb969ba892de7790ca494e7df64f96b6bf187e88533bca345cf5d99f12b1c71",
        "loop": "c3e0fb95d6bab36e882d023241c0279d705e1bac4b22527807a9b5bfe051369b",
        "detail": "2e3d41fa4aa9eb6f5a9067fed15db96892b95f418f1ca262655c72b8aa281ae1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/launch-intro/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/launch-intro/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/launch-intro/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "e75d1950e6b039beadcb2f8d6f2bbf9799442484c219001deedd20bd4bc849d8",
        "loop": "ce5fbe33073108b1c3d44c38b41409b0d3f6257a2f6023797bf497dd8b183f07",
        "detail": "d6e8f678e21de69055307e17db8532f7b9c6bb28a2540e2e9913db76a0a209af"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/launch-intro/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/launch-intro/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/launch-intro/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "19536ec12d65e792a1e21b023f6f30ba1019335c04e8defd154b74de4b26850a",
        "loop": "cf31157090b246fa5dc248c5295b4b55147927c58aef7e51b3e4dfc2f22071bf",
        "detail": "e7bfb6ea7862aae7a392145a21f40c301cc05f9044ecc6f83173ffbfd8e02d70"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/408fd13fd207861939334c485e73c053406c2f4301677fcee0dde150b2311d84/index.mjs",
    "sha256": "408fd13fd207861939334c485e73c053406c2f4301677fcee0dde150b2311d84",
    "bytes": 161206,
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
    "at": "2026-10-07T02:19:06.640Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
