// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/workflow",
  "tags": [
    "launch",
    "product",
    "introducing",
    "radial",
    "workflow",
    "cycle",
    "orbit",
    "instrument",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 127,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 116
    },
    "beats": [
      16,
      40,
      72
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
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "role": "headline"
    },
    {
      "key": "steps",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surfaceColor": "colors.background",
    "textColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 116,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "A workflow that keeps moving",
    "steps": [
      "Discover",
      "Build",
      "Review",
      "Deliver"
    ],
    "tilt": 28,
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "type": "number",
      "min": 0,
      "max": 45
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
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
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    }
  ],
  "name": "Radial Workflow Cycle",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "radial-workflow-cycle",
    "bundleSha256": "af8bdf802467e90c91d10f587b24b109be44bc0ca5076962179cd2fcd0bbc346",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:30.425Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-paper.png",
        "sha256": "791ce9927e57313319e6952e84ccc5abfa37b287db94330db87270dd1d6abd44"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-night.png",
        "sha256": "7442202b633577f8cbd6b77dd9da959c6358d2911d93ebcf95942ddaa4e638c1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-color.png",
        "sha256": "71cdcafe98587ed6f66c8924c30cba10624890433ba4f0052797bb843116661d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-paper.png",
        "sha256": "221d74502ea9084706e4a3d6f0661b584262d8f3e62006c35be8c6e7b2dd2615"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-night.png",
        "sha256": "8065a409d16705f044b04ee76113ad5f023235409799b468e997171d01f97764"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-color.png",
        "sha256": "f9776a442d99ff76f89e9080bc09adf2005da10961b8e5d6ac0d5f2754bdbb3a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-paper.png",
        "sha256": "4359e0560c3be2437ece2c4f761f726675971556825cb3ddb0a83215cd1bfb60"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-night.png",
        "sha256": "3ec8fe4ec1e91b14f2cddafcd4a2dfb15775061cb8a75199f668899266a65606"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-color.png",
        "sha256": "e307efbaa417242365babefec91d0db722503b1d49af6575e59d7c7afbef40d4"
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
          "radial-workflow-cycle--16x9",
          "radial-workflow-cycle--9x16",
          "radial-workflow-cycle--1x1"
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
            "paperNight": 32.91303168402778,
            "paperColor": 28.895372178819443,
            "region": {
              "left": 192,
              "top": 169,
              "width": 1175,
              "height": 840
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.647623697916664,
            "paperColor": 37.856038411458336,
            "region": {
              "left": 44,
              "top": 416,
              "width": 992,
              "height": 1179
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.56749131944444,
            "paperColor": 38.619222005208336,
            "region": {
              "left": 108,
              "top": 169,
              "width": 839,
              "height": 840
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
            "occupancy": 0.6740060993533217,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6745802101704881,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6657464217039698,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.799359095490048,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7980031004171217,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7878331373701746,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.855297537396303,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8563181788490432,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8451044884117344,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.095594618055555,
        "frames": [
          17,
          116,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 127,
            "averageChannelDifference": 14.09548611111111,
            "retainedAlpha": 1.0302632873208957,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-127-frame-15.png",
                "sha256": "74a232a7a7f053d56fba8bb0af63850fa9026d5f4265286bbe1ff156afa8c1db",
                "alphaMass": 17769
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-127-frame-116.png",
                "sha256": "573201a86871f35e3ea27d2ad44b0f2fa0b2e02de88f21051d61c3391a72b67c",
                "alphaMass": 31422
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-127-frame-111.png",
                "sha256": "a7cf43dc556f0484b9846e7dcadd84757ad3044236bde8ee337c9df37980eb59",
                "alphaMass": 30499
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-127-frame-126.png",
                "sha256": "573201a86871f35e3ea27d2ad44b0f2fa0b2e02de88f21051d61c3391a72b67c",
                "alphaMass": 31422
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 14.095594618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-900-frame-17.png",
                "sha256": "47a85ba93c1dd45beb0ffc2046ed48b33502ac776f64aa01294cbfb8a8b559ae",
                "alphaMass": 19089
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-900-frame-116.png",
                "sha256": "573201a86871f35e3ea27d2ad44b0f2fa0b2e02de88f21051d61c3391a72b67c",
                "alphaMass": 31422
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-900-frame-792.png",
                "sha256": "573201a86871f35e3ea27d2ad44b0f2fa0b2e02de88f21051d61c3391a72b67c",
                "alphaMass": 31422
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/16x9-duration-900-frame-899.png",
                "sha256": "573201a86871f35e3ea27d2ad44b0f2fa0b2e02de88f21051d61c3391a72b67c",
                "alphaMass": 31422
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 127,
            "averageChannelDifference": 32.62000868055556,
            "retainedAlpha": 1.0195814648729447,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-127-frame-15.png",
                "sha256": "b9392c2a554241f7c4f4d1994e71ce44f20a15ded7cae75ded1617b2b12cb142",
                "alphaMass": 35145
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-127-frame-116.png",
                "sha256": "a1dd93e592c285dc990a7899b720d5a96802164b554640f835d4202dd202e8d2",
                "alphaMass": 75031
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-127-frame-111.png",
                "sha256": "822f9ba7e65b3d919b2568d63afb0ce80b0521281c5a8fe0fb10c1ab4b685316",
                "alphaMass": 73590
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-127-frame-126.png",
                "sha256": "a1dd93e592c285dc990a7899b720d5a96802164b554640f835d4202dd202e8d2",
                "alphaMass": 75031
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 32.59809027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-900-frame-17.png",
                "sha256": "5749e4538c6f7adf44bf46f3d4efb8d78030ae5cac5f247b29a6cb8ace69c7da",
                "alphaMass": 41942
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-900-frame-116.png",
                "sha256": "a1dd93e592c285dc990a7899b720d5a96802164b554640f835d4202dd202e8d2",
                "alphaMass": 75031
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-900-frame-792.png",
                "sha256": "a1dd93e592c285dc990a7899b720d5a96802164b554640f835d4202dd202e8d2",
                "alphaMass": 75031
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/9x16-duration-900-frame-899.png",
                "sha256": "a1dd93e592c285dc990a7899b720d5a96802164b554640f835d4202dd202e8d2",
                "alphaMass": 75031
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 127,
            "averageChannelDifference": 21.89312065972222,
            "retainedAlpha": 1.0303130633116286,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-127-frame-15.png",
                "sha256": "c815d68eb8aa524faf4afb87f8f4b6b2e95698711b642394688d732b99a73d4b",
                "alphaMass": 31714
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-127-frame-116.png",
                "sha256": "1a4f74b9518a4856f0e080f37bf86c03a1d28a548796d0749c9983e78af4039a",
                "alphaMass": 56014
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-127-frame-111.png",
                "sha256": "25487b43e998d04a86c9d91b0f63d0807d69ab6e8ca2dcc8d9d56f0c3bc92c4c",
                "alphaMass": 54366
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-127-frame-126.png",
                "sha256": "1a4f74b9518a4856f0e080f37bf86c03a1d28a548796d0749c9983e78af4039a",
                "alphaMass": 56014
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 22.063368055555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-900-frame-17.png",
                "sha256": "973577ccbb9ba45b3e85bff3f3e5e76ba5f977dec1de95f03c98d722e1da60df",
                "alphaMass": 34026
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-900-frame-116.png",
                "sha256": "1a4f74b9518a4856f0e080f37bf86c03a1d28a548796d0749c9983e78af4039a",
                "alphaMass": 56014
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-900-frame-792.png",
                "sha256": "1a4f74b9518a4856f0e080f37bf86c03a1d28a548796d0749c9983e78af4039a",
                "alphaMass": 56014
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/radial-workflow-cycle/1x1-duration-900-frame-899.png",
                "sha256": "1a4f74b9518a4856f0e080f37bf86c03a1d28a548796d0749c9983e78af4039a",
                "alphaMass": 56014
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
        "note": "A ring of four workflow stages fills to 100%; it reads as a process cycle, not data: job tag should be process."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 12,
        "compared": 12,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "af8bdf802467e90c91d10f587b24b109be44bc0ca5076962179cd2fcd0bbc346",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.017993Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "35efb6c4157e4aa77a2c7a968ae670b4202296a5e218ec3034af3529c7c4525d",
        "loop": "7c6ffe4b345d1b91a7de28aba493de2b3e40fdee43e7f18bd506235ac70cf312",
        "detail": "08d971cade3239f53dffe97858805c857ce5c57d9d6386cfec7a8d412c1a3638"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "dc171c2e269827f23f2f2473efc4e209a7835471446c4dfc014d854d0e1eb21c",
        "loop": "16cbd3b772c6df1421ddd015ca77d00b9e5854b07d5d95b3ec393c4ae5816491",
        "detail": "c07db6ae3a040663fe114e94b7d32968a4bdd8b493e3fe4c45e4f7ce7bafbba1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-workflow-cycle/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4d833df44ab06ddde2e1719209ad83fd521de6365b30314cef31f2197d0a0385",
        "loop": "1568eaf4692efc4c388f12b278884d1acdb955279a38fcb51e1ba53de36cb7f8",
        "detail": "4083d5ae22daddcf34c80476b5ad4911ad9f4a2fb6a68f8fb508adea1f784f33"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/af8bdf802467e90c91d10f587b24b109be44bc0ca5076962179cd2fcd0bbc346/index.mjs",
    "sha256": "af8bdf802467e90c91d10f587b24b109be44bc0ca5076962179cd2fcd0bbc346",
    "bytes": 163194,
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
    "at": "2026-10-07T02:32:46.612Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
