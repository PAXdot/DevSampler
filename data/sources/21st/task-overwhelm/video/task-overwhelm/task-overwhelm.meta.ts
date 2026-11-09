// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/list",
  "tags": [
    "checklist",
    "tasks",
    "todo",
    "problem",
    "overwhelm",
    "scroll",
    "list",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 40
    },
    "beats": [
      0
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
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
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "items",
      "type": "list",
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
      "target": "rows",
      "prop": "y",
      "from": "scroll up",
      "easing": "linear"
    },
    {
      "target": "header",
      "prop": "opacity",
      "settledBy": 8,
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
    "sourceUrl": "docs/research/video-components-2026-10-05 (V12 overwhelm checklist)"
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
    "title": "Before you can launch",
    "items": [
      "Set up the custom domain",
      "Write the pricing page",
      "Configure the email provider",
      "Design the onboarding flow",
      "Add analytics events",
      "Fix the mobile navbar",
      "Write the docs",
      "Set up billing webhooks",
      "Draft the launch post",
      "Make the og image",
      "Add dark mode",
      "Test the signup flow again",
      "Reply to beta feedback",
      "Record the demo video"
    ],
    "speed": 0.45,
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
      "max": 32,
      "role": "headline"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 24,
      "role": "body"
    },
    {
      "key": "speed",
      "label": "Speed",
      "type": "number",
      "min": 0.05,
      "max": 1.5
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
  "name": "Task Overwhelm",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "task-overwhelm",
    "bundleSha256": "0dd0df6ecdec4053074c8a9ab198662ca5e1742dfc5c0b64609e48fc4d7cb25d",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:51.735Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-paper.png",
        "sha256": "3a2e1687aadf27c83231e1f51e35a99ace902c1f260661db8e44c4601cb34465"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-night.png",
        "sha256": "88f66a8054e81da475e11a604ba9d61bc66d8c3edaf6323eede6d599d74aa547"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-color.png",
        "sha256": "c8ece5b163159ca4e833d2da20df7c28f2125175775fbc9c04c41bbeee1a7679"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-paper.png",
        "sha256": "24b6578e57aba6adafb0c7d04931debd9e7b30620f56edc42d5fb98923f5b10d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-night.png",
        "sha256": "ac5afeff17412b41abb9abe4abaffd71311b7a40851e4b09430490cdf80195e9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-color.png",
        "sha256": "09fb88f4b2f8d021d2596ffb8d339408d94dcbf2c44e9e4096fc3f0f10ceef5a"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-paper.png",
        "sha256": "a84a743c817833a907ece281f6f39553db391238c468d9c0cd2eb1352b95f5fa"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-night.png",
        "sha256": "dd064b4d094efbed4218c01a7b213a5432999b27da1224899fa8f42d20e204fe"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-color.png",
        "sha256": "6930d4381f0830e7a910533ffda8ceda5c5f29e950d9b7e20a3ae3d3e7601041"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          },
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "task-overwhelm--9x16",
          "task-overwhelm--1x1",
          "task-overwhelm--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 130.63883463541666,
            "paperColor": 17.056396484375,
            "region": {
              "left": 15,
              "top": 83,
              "width": 1050,
              "height": 1637
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 128.87934027777777,
            "paperColor": 12.62619357638889,
            "region": {
              "left": 17,
              "top": 41,
              "width": 1046,
              "height": 1015
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 130.53957790798611,
            "paperColor": 12.42626953125,
            "region": {
              "left": 339,
              "top": 41,
              "width": 1242,
              "height": 1015
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.132969423623359,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1747742596266904,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.132969423623359,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2418290361412057,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.290005742809241,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2418290361412057,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8313862775048293,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8615968088624341,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8313862775048293,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 83.06477864583333,
        "frames": [
          6,
          40,
          119
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 112.91427951388889,
            "retainedAlpha": 0.9998432154080928,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-45-frame-5.png",
                "sha256": "fd0b1e157fa03e0c0c9ca1773d765806fb63952036ac28bb2c3f7eaddbed6ac3",
                "alphaMass": 61652
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-45-frame-40.png",
                "sha256": "cd1cae50cf06291900dd47e7d6e448703abb2e12013f79acb8fd7508a2d5d872",
                "alphaMass": 285918
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-45-frame-39.png",
                "sha256": "e687f5ffecea04280df31b6d6de9a646b2692539689836e2b208d27887fa0cdc",
                "alphaMass": 287018
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-45-frame-44.png",
                "sha256": "69b3473f44f6300aa1af6bcdb85dc9943c36d4f44ed7e8f4a9745d8541f0a1f0",
                "alphaMass": 286973
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 111.6357421875,
            "retainedAlpha": 1.0253552892394113,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-900-frame-6.png",
                "sha256": "1f92d640f5b6c775abe64f93fe7dbad3639a358abf3211b6e4361e4b3d8311b7",
                "alphaMass": 81321
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-900-frame-40.png",
                "sha256": "cd1cae50cf06291900dd47e7d6e448703abb2e12013f79acb8fd7508a2d5d872",
                "alphaMass": 285918
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-900-frame-792.png",
                "sha256": "3548583e7d8534e550aec6d61a70ff203fe9e1d58c8167f9279ce89b88dadf62",
                "alphaMass": 285542
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/9x16-duration-900-frame-899.png",
                "sha256": "2de41be80763855b647c5c4c242eb8b17a3216b99f8391a12b79410c4107d11d",
                "alphaMass": 292782
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 123.90690104166667,
            "retainedAlpha": 0.9992362400588586,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-45-frame-5.png",
                "sha256": "d6f7d4f79bdef1b13dc4ffad21f0f31cedf79d053d80ee676c935f5c2cea59dc",
                "alphaMass": 65435
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-45-frame-40.png",
                "sha256": "5d573df7dfa1141a746b25e786fae574ecc25a7c335e94db987d5bf52b7cabdd",
                "alphaMass": 285057
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-45-frame-39.png",
                "sha256": "70447063f2560bc1afdeb3b8d70167dcf0b9bf650f88830b23e216034f3bf54a",
                "alphaMass": 285430
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-45-frame-44.png",
                "sha256": "9fb5ae4aa2cb0a6adf6c6814b5b11986172ca95d870afc4bf0c7cb74f615c1e2",
                "alphaMass": 285212
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 121.46028645833333,
            "retainedAlpha": 0.9768627921732719,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-900-frame-6.png",
                "sha256": "f9bbf389c79ad1ad65658a57934e8474dbc192d898c9f0cf9b70b496f1352148",
                "alphaMass": 85831
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-900-frame-40.png",
                "sha256": "5d573df7dfa1141a746b25e786fae574ecc25a7c335e94db987d5bf52b7cabdd",
                "alphaMass": 285057
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-900-frame-792.png",
                "sha256": "648407ef3e8f87a4dd1f826feadddcbf44d63078aef0a3995c4ca7725464ec91",
                "alphaMass": 291565
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/1x1-duration-900-frame-899.png",
                "sha256": "2c1b963324c00bfa32b3cfce9c1f38ddf5bd3a2c3ed670bc5bbc46656850d1ab",
                "alphaMass": 284819
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 84.68077256944444,
            "retainedAlpha": 0.9993853430358846,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-45-frame-5.png",
                "sha256": "fea0956aa687ee46866a2baa7f9c19c67891eefa3ece625c26a1c628af2d37b2",
                "alphaMass": 44034
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-45-frame-40.png",
                "sha256": "a3d74ad42ff03a2daecf955464acbba966a6435d20b6c73a8dd757518a621438",
                "alphaMass": 191725
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-45-frame-39.png",
                "sha256": "3c6b71be6615bac4785fb5570c10e8240df94a291a3089c5c913d1e4da94ba59",
                "alphaMass": 191977
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-45-frame-44.png",
                "sha256": "8f6e674adac078ec7bd1b177c6730f9019510bf78f85b2d82fe35a253faa978e",
                "alphaMass": 191859
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 83.06477864583333,
            "retainedAlpha": 0.9772032986367879,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-900-frame-6.png",
                "sha256": "99104928c2c594fe74c3ee5369c176c213035f3c40db04fd86241b00e15ac0c0",
                "alphaMass": 57718
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-900-frame-40.png",
                "sha256": "a3d74ad42ff03a2daecf955464acbba966a6435d20b6c73a8dd757518a621438",
                "alphaMass": 191725
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-900-frame-792.png",
                "sha256": "82548d88ad71238c41e9f83049d938e43056e5951598d0fff32192dcbf64c4b9",
                "alphaMass": 196081
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/task-overwhelm/16x9-duration-900-frame-899.png",
                "sha256": "91ef5b46deaaebcf1cec1a3186257bde7f18cb4d0e657b91d18342631b7b7478",
                "alphaMass": 191611
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
        "note": "A launch checklist keeps filling and scrolling; a to-do UI showing too much work."
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
      "bundleSha256": "0dd0df6ecdec4053074c8a9ab198662ca5e1742dfc5c0b64609e48fc4d7cb25d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.950004Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/task-overwhelm/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/task-overwhelm/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/task-overwhelm/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "b4e078d9bc6722a2c98cf147ace69578db18db599458e436228c9fe9d4edd26f",
        "loop": "f96faf891085aa2f22756132707156db05fe5759d40a386b62121fee1156d8f3",
        "detail": "e332e6ad24dc30737782629ccc74466b260febb1d59f896f5325d9a2598e57f9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/task-overwhelm/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/task-overwhelm/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/task-overwhelm/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "2b4472f20b309310a32c1a0918e8ff620f5b64464cb7a08c976079963aad9313",
        "loop": "46edd690ae3b7952ab45e0fd699341762d84c135e6d9a4417099798700d9d516",
        "detail": "cdc15873fc7614f55c87d69ae7243876439f5e498203773a2df7b275ecc504a3"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/task-overwhelm/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/task-overwhelm/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/task-overwhelm/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "656a5822b3ebbfb72d7825ae37a27fd5a6ab7746812aee6cb7abd6af7b1995db",
        "loop": "f346cf3ab7d769897cd0bb72a6b712c26dfe0165cdefbe6fb8e1093d0f1f5f5d",
        "detail": "23c9a911439e43db058c2cb6764966e60ab0843d2f9d49888d82fb6a1a7e6cd0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0dd0df6ecdec4053074c8a9ab198662ca5e1742dfc5c0b64609e48fc4d7cb25d/index.mjs",
    "sha256": "0dd0df6ecdec4053074c8a9ab198662ca5e1742dfc5c0b64609e48fc4d7cb25d",
    "bytes": 167624,
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
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:23:16.059Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
