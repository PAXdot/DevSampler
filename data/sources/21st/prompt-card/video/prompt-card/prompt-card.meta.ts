// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/input",
  "tags": [
    "prompt",
    "input",
    "ai",
    "typing",
    "chat",
    "card",
    "caret",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 80,
      "typing": 16,
      "send": 70
    },
    "beats": [
      0,
      16,
      70
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
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "placeholder",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "prompt",
      "type": "text",
      "maxChars": 140,
      "lines": 3,
      "role": "body"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "height",
      "from": "hairline",
      "settledBy": 14,
      "easing": "ease"
    },
    {
      "target": "prompt",
      "prop": "text",
      "settledBy": 56,
      "easing": "linear"
    },
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 68,
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
    "sourceUrl": "docs/research/video-components-2026-10-05 (V15 line-to-card, V04 prompt typing)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "What should we build?",
    "placeholder": "Describe a page, a flow or a component",
    "prompt": "A pricing page with three tiers, a yearly toggle and a calm gradient hero",
    "typingSpeed": 1.6,
    "caretCam": false,
    "cursor": true,
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "placeholder",
      "label": "Placeholder",
      "type": "text",
      "max": 48,
      "role": "label"
    },
    {
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 140,
      "role": "body"
    },
    {
      "key": "typingSpeed",
      "label": "Typing speed",
      "type": "number",
      "min": 0.5,
      "max": 4
    },
    {
      "key": "caretCam",
      "label": "Caret cam",
      "type": "boolean"
    },
    {
      "key": "cursor",
      "label": "Cursor",
      "type": "boolean"
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
    }
  ],
  "name": "Prompt Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "prompt-card",
    "bundleSha256": "4fccba748c79a4e630a90b03f10a1b84c0138b990148622c22d6e278f1120b04",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:25.713Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-paper.png",
        "sha256": "8ccf377bbfb1e7699831f248199abea592f948cdd722ed4f786f03e251c7751e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-night.png",
        "sha256": "b92f09b27c049be3551c995ed3e4eaa7e85b05a4c3f9ef9ffaa236b54c488a79"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-color.png",
        "sha256": "6fa4b525f78ab41613a3d48d9dbed05af344a9f8d94de9fa030f2c428027cc41"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-paper.png",
        "sha256": "40bc8cbaa508f7d318d0c679a1aff2b35c091c8ea97774b2e8adc355fcd636df"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-night.png",
        "sha256": "5eaa1c27b72404906d3fd6abad268b169d1313c3aa8df188c4c0b21f8bc04fda"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-color.png",
        "sha256": "309bc4e7c121ca4731717891e7822555a7a237cb307ec99cbeddb77a7e6e1baf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-paper.png",
        "sha256": "631582085e2781a79a8b268b09ffe9a89104f1d858a58291fd9a2d9be6d99532"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-night.png",
        "sha256": "c3d0327e2fd2edacd90c96254a1472fbbd6ab31d7c3cad8e7d4657c0a693a405"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-color.png",
        "sha256": "40062ebb337b6f81e098e846b1f625d04e82c01e70f09641915b79354ee303a7"
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
          "prompt-card--16x9",
          "prompt-card--9x16",
          "prompt-card--1x1"
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
            "paperNight": 138.44322374131946,
            "paperColor": 14.010009765625,
            "region": {
              "left": 31,
              "top": 184,
              "width": 1858,
              "height": 764
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 138.29532877604166,
            "paperColor": 14.393880208333334,
            "region": {
              "left": 0,
              "top": 210,
              "width": 1080,
              "height": 1552
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 119.14998372395833,
            "paperColor": 13.297715928819445,
            "region": {
              "left": 0,
              "top": 331,
              "width": 1080,
              "height": 470
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
            "occupancy": 0.9030626460975338,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9701871360684193,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9030626460975338,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0769252724237846,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1455971277399852,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0769252724237846,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5498924535520656,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6167590492987319,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5498924535520656,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.711154513888889,
        "frames": [
          12,
          80,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.431640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-90-frame-10.png",
                "sha256": "5dcd5d813b4f7aefaade27be4499f7e9c576e455276f7171f4d9b42a3c14e8e4",
                "alphaMass": 332844
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-90-frame-80.png",
                "sha256": "610b86153a21bf373634d35cf4c775a29262382088b8adafbe7bbd10efa7817e",
                "alphaMass": 342542
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-90-frame-79.png",
                "sha256": "8c2ce04eac6b9dcec8b0a83f38f127f340b4a31903753c40930d7112a56cb8cd",
                "alphaMass": 342542
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-90-frame-89.png",
                "sha256": "5ba86099d13c55304056f2860dac7c1f1957be212fd36bb40d911ed323d2244a",
                "alphaMass": 342542
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.711154513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-600-frame-12.png",
                "sha256": "8933460d6b6e350ebc00f19ab6738dfe74176d58af697f5926654b50f425307e",
                "alphaMass": 337324
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-600-frame-80.png",
                "sha256": "610b86153a21bf373634d35cf4c775a29262382088b8adafbe7bbd10efa7817e",
                "alphaMass": 342542
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-600-frame-528.png",
                "sha256": "5953dad7c46c6dc8769e9a2892a9dea58b82e84ac5b9177816abcd739f23394f",
                "alphaMass": 342542
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/16x9-duration-600-frame-599.png",
                "sha256": "36627796c30ef898bf0a4556a580ffa1019346eafd47274ec38a5a557439d6e6",
                "alphaMass": 342542
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.237955729166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-90-frame-10.png",
                "sha256": "7d1ad1cf67f93addbef185d08a29d15ed63a2b9c56a3d3b710281270ff14654c",
                "alphaMass": 405790
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-90-frame-80.png",
                "sha256": "870fad8a64c702663c22f7b570a04653622630da1ee2653522867847b24080b7",
                "alphaMass": 415514
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-90-frame-79.png",
                "sha256": "5ca217586de0e8d6bad751fe31fc9bf065eadb337a953615c263b60f255f0211",
                "alphaMass": 415514
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-90-frame-89.png",
                "sha256": "1ed16672deb6d1b83672bdd68d8ecc114bf23fe20edafbfab15490bdffd4e5d2",
                "alphaMass": 415514
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.142035590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-600-frame-12.png",
                "sha256": "575e2650b8d1262749ddd90f08f940529a97b20ac15287d520dd1cce51c01911",
                "alphaMass": 410290
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-600-frame-80.png",
                "sha256": "870fad8a64c702663c22f7b570a04653622630da1ee2653522867847b24080b7",
                "alphaMass": 415514
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-600-frame-528.png",
                "sha256": "f1f312150edc14c4fa6f5197c8339271fcb5957e9ef50e4039d83c7b3a11732c",
                "alphaMass": 415620
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/9x16-duration-600-frame-599.png",
                "sha256": "98cdc7ae9923363d7361a335f1896711bc601a410c8ed3a6324f38a5fdef14c1",
                "alphaMass": 415620
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.205512152777778,
            "retainedAlpha": 1.0000308022444568,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-90-frame-10.png",
                "sha256": "44a7b419aa0de938e9fa431c81df3dc86b2a887f171157523c2c91252a70e5b9",
                "alphaMass": 188061
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-90-frame-80.png",
                "sha256": "4714a2d250eca6b7224f9b019568158fdcb50cddef3862e71553adddb12c4646",
                "alphaMass": 194791
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-90-frame-79.png",
                "sha256": "3027ac23c0daf9416d552bf1244e3d3f65e923a3bdf8d24996d47d3c39923987",
                "alphaMass": 194791
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-90-frame-89.png",
                "sha256": "91945e725d4983f23579d7a2ab704ccb10476a4d8953cc9259faa4792a0122bf",
                "alphaMass": 194797
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.5914713541666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-600-frame-12.png",
                "sha256": "c139c37e97d345a12a179f37764eb9211dc5610139234457dcb0a9e4737a67af",
                "alphaMass": 190855
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-600-frame-80.png",
                "sha256": "4714a2d250eca6b7224f9b019568158fdcb50cddef3862e71553adddb12c4646",
                "alphaMass": 194791
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-600-frame-528.png",
                "sha256": "eb6bdec08d45975b825b25fbfb7416480f6c13df8309a2e1956f3cecff4cce6b",
                "alphaMass": 194952
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/prompt-card/1x1-duration-600-frame-599.png",
                "sha256": "cf21891c4aed3724b993732ba16996ffe1f2a34da915cec5d51eaddb1d9a1fbf",
                "alphaMass": 194952
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
        "note": "A prompt types into an input card and is sent; interface in action (re-reviewed after the shadow fix)."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4fccba748c79a4e630a90b03f10a1b84c0138b990148622c22d6e278f1120b04",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.995948Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/prompt-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prompt-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prompt-card/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "27a28da212b0a9631d1f8a16ab064bf66a69f0470ae86e84d13426bda3b0c88c",
        "loop": "01b5575340d888562ff657cbd5e19854ce1b620a69ecf8d18e861d559a91756b",
        "detail": "810fd4c2b7f6be7334da45d94c38ebf2b784c7c7ce98fbc58065e8f0692f71e2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/prompt-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prompt-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prompt-card/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "0682b8e788422dbac82108b67961702c03d2466745d82e2bd32b448e4163f92f",
        "loop": "975992a2abae8f72bd4a15125e6a60f1114da3baa1dd5d3b356adb92f13a0d90",
        "detail": "8b872259923fd7dbd82fe711a82c3aeb745489968dc1019252a2c8a268008199"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/prompt-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prompt-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prompt-card/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "43e38b05f0cf7bd4bfb93f1ba7bba365f2c06d41a4ccee5c573e48276c7459d3",
        "loop": "59bda4cce4e07d610be7eac753f62219d68e4380bcc7d5bc0a0b3a39971f4626",
        "detail": "577a092fa016d05bd2fa5a9b90d56d43465b8b4b2ad68762fdb38be922c7f27e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4fccba748c79a4e630a90b03f10a1b84c0138b990148622c22d6e278f1120b04/index.mjs",
    "sha256": "4fccba748c79a4e630a90b03f10a1b84c0138b990148622c22d6e278f1120b04",
    "bytes": 171758,
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
    "at": "2026-10-07T02:42:08.272Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
