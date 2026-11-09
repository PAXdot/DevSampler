// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "drag",
    "drop",
    "kanban",
    "board",
    "card",
    "move",
    "interaction"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 68,
      "out": 0
    },
    "markers": {
      "settled": 72,
      "grab": 26,
      "drop": 58
    },
    "beats": [
      26,
      58
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
      "9:16"
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
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "fromLabel",
      "type": "text",
      "maxChars": 18,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "toLabel",
      "type": "text",
      "maxChars": 18,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "card",
      "type": "text",
      "maxChars": 36,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "others",
      "type": "list",
      "role": "body"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "pendingColor": "colors.secondary",
    "doneColor": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 24,
      "easing": "ease"
    },
    {
      "target": "card",
      "prop": "lift",
      "from": "1",
      "settledBy": 32,
      "easing": "ease"
    },
    {
      "target": "card",
      "prop": "xy",
      "from": "source",
      "settledBy": 66,
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
      "frame": 48
    },
    "hover": [
      0,
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "own (cursor family per research G5; drag pattern, expo-out settles)"
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
    "fromLabel": "In review",
    "toLabel": "Shipped",
    "card": "Yearly pricing toggle",
    "others": [
      "Empty states for search",
      "Faster image uploads",
      "Team invites by link"
    ],
    "theme": "light",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "pendingColor": "#F59E0B",
    "doneColor": "#22C55E",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "fromLabel",
      "label": "From label",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "toLabel",
      "label": "To label",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "card",
      "label": "Card",
      "type": "text",
      "max": 36,
      "role": "headline"
    },
    {
      "key": "others",
      "label": "Others",
      "type": "list",
      "role": "body"
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
      "key": "pendingColor",
      "label": "Pending color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "doneColor",
      "label": "Done color",
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
  "name": "Cursor Drag",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-drag",
    "bundleSha256": "b09c86b1569dfd25e8a2dc990f598d4379145801e12de836a3763efb0849c8d1",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:53:42.961Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-paper.png",
        "sha256": "0ede48ade48577603a3ad9224cc72de1b95cedd8c7da43e17d011f00b1f849ca"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-night.png",
        "sha256": "b4f092dcdfff71205b50b18b0b41ab88574384937296be65150c326ee11a1060"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-color.png",
        "sha256": "5cda134a916adc4db031a50fbe15f0fcbf5a318d8060668565a1683d56623560"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-paper.png",
        "sha256": "7953199494ffaa8a7f33134451ea685017ea5c45f5a2f92e72f71d79d5c5e436"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-night.png",
        "sha256": "78a11611b52223306a2fd66fcd1463ec2b6f5f1a0fe1d7166ad0f2432a4a710f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-color.png",
        "sha256": "6f9aebbe7fadcde9cd4921290ed2662966336933056700f324e9bfa77db5c9b2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-paper.png",
        "sha256": "f47703df874a101c0cc0d4dcd58ce97a8310e5488a6db969764d22db37ae860b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-night.png",
        "sha256": "4e30de97af09a03fa34763909ab0bc59464b43f53e4e7deab50d60c12f073af8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-color.png",
        "sha256": "b6dc8c2eca87d3cb28eb3849509d215110da4833bd149708abd486f67fd31a55"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "cursor-drag--16x9",
          "cursor-drag--1x1",
          "cursor-drag--9x16"
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
            "paperNight": 139.46538628472223,
            "paperColor": 12.342339409722221,
            "region": {
              "left": 57,
              "top": 195,
              "width": 1808,
              "height": 511
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 137.94661458333334,
            "paperColor": 12.507080078125,
            "region": {
              "left": 31,
              "top": 195,
              "width": 1020,
              "height": 511
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 115.15212673611111,
            "paperColor": 11.528564453125,
            "region": {
              "left": 0,
              "top": 255,
              "width": 1051,
              "height": 1233
            },
            "canvas": {
              "width": 1080,
              "height": 1920
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
            "occupancy": 0.6314453507740546,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6314453507740546,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6314453507740546,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6333080214253055,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6333080214253055,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6333080214253055,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8856910096214413,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8856910096214413,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8856910096214413,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 41.704752604166664,
        "frames": [
          7,
          48,
          104
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 41.704752604166664,
            "retainedAlpha": 0.9993541824757415,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-75-frame-7.png",
                "sha256": "fb57e87ebb0e64d795a940af1e232ff6dcd701064a15a1cfd6edd9ea0fdd82ea",
                "alphaMass": 247756
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-75-frame-48.png",
                "sha256": "bde502d1e2b615c0a49d1bcbd3f83f8cb7844f12f7d08527b1f2b119fc09054d",
                "alphaMass": 251398
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-75-frame-66.png",
                "sha256": "70466eeb09fe8735fd1d67ca38a622db3e84f386c639825eecf54387a51398d0",
                "alphaMass": 247748
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-75-frame-74.png",
                "sha256": "423acf349ac71d1c6352386ca99695cc22122833b7c586a277e6dc13adb582ae",
                "alphaMass": 247588
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 41.704752604166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-600-frame-7.png",
                "sha256": "fb57e87ebb0e64d795a940af1e232ff6dcd701064a15a1cfd6edd9ea0fdd82ea",
                "alphaMass": 247756
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-600-frame-48.png",
                "sha256": "bde502d1e2b615c0a49d1bcbd3f83f8cb7844f12f7d08527b1f2b119fc09054d",
                "alphaMass": 251398
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-600-frame-528.png",
                "sha256": "5b2a8d9a442d0344f649b2f91d888781da34bf097fa5430157b275886b5f697e",
                "alphaMass": 247588
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/16x9-duration-600-frame-599.png",
                "sha256": "5b2a8d9a442d0344f649b2f91d888781da34bf097fa5430157b275886b5f697e",
                "alphaMass": 247588
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 42.18739149305556,
            "retainedAlpha": 0.9991736503291291,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-75-frame-7.png",
                "sha256": "5ce281bda5b2f2abceed0b4b7c1a67fa33f9d952ff46ac7f063c68c67edb13f0",
                "alphaMass": 248109
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-75-frame-48.png",
                "sha256": "a6f13b5ca535cf83aa8530b1d372b589800e17215bf36458ef8b08bfe03575e7",
                "alphaMass": 251605
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-75-frame-66.png",
                "sha256": "642bed601dfeb53ac9af96b5c881941e4545f2e23de430fa903f16dc5451003f",
                "alphaMass": 248079
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-75-frame-74.png",
                "sha256": "dbc35d40b1261998a2f65924b0f303e31350a6e7b2e5ccb28421efdee54f88aa",
                "alphaMass": 247874
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 42.18739149305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-600-frame-7.png",
                "sha256": "5ce281bda5b2f2abceed0b4b7c1a67fa33f9d952ff46ac7f063c68c67edb13f0",
                "alphaMass": 248109
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-600-frame-48.png",
                "sha256": "a6f13b5ca535cf83aa8530b1d372b589800e17215bf36458ef8b08bfe03575e7",
                "alphaMass": 251605
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-600-frame-528.png",
                "sha256": "743fc5f27f48233d86f24a9a20674d9347a9ae715adec2669bcafa0e62022f19",
                "alphaMass": 247874
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/1x1-duration-600-frame-599.png",
                "sha256": "743fc5f27f48233d86f24a9a20674d9347a9ae715adec2669bcafa0e62022f19",
                "alphaMass": 247874
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 35.32562934027778,
            "retainedAlpha": 0.9995317272035507,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-75-frame-7.png",
                "sha256": "e7bb34ecc0a679679a7fbd44bb887b840967b9fd6bbfcb4e879ab2b39f190b71",
                "alphaMass": 288565
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-75-frame-48.png",
                "sha256": "8bac4b956d03004719b6d18464ef1b5b28196c48a9a582938bdce06582929334",
                "alphaMass": 292044
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-75-frame-66.png",
                "sha256": "eb2dcd546b09b7cce26cc06ab1226f01d28ecb8bd4eac3a71da380e17264b413",
                "alphaMass": 290429
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-75-frame-74.png",
                "sha256": "1ad728736d4437314bfb6617147e911dfaacdf6ed3110bef8c95d7f84c3938b7",
                "alphaMass": 290293
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 35.32562934027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-600-frame-7.png",
                "sha256": "e7bb34ecc0a679679a7fbd44bb887b840967b9fd6bbfcb4e879ab2b39f190b71",
                "alphaMass": 288565
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-600-frame-48.png",
                "sha256": "8bac4b956d03004719b6d18464ef1b5b28196c48a9a582938bdce06582929334",
                "alphaMass": 292044
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-600-frame-528.png",
                "sha256": "2f1ab54e9a9b457331dd75c0a5618bab7700376f26f40cc32bace99d0fd73e4f",
                "alphaMass": 290293
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-drag/9x16-duration-600-frame-599.png",
                "sha256": "2f1ab54e9a9b457331dd75c0a5618bab7700376f26f40cc32bace99d0fd73e4f",
                "alphaMass": 290293
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
        "note": "A cursor drags a card from In review to Shipped on a board."
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
      "bundleSha256": "b09c86b1569dfd25e8a2dc990f598d4379145801e12de836a3763efb0849c8d1",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.921527Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-drag/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-drag/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-drag/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "b0ea8fb5715b85766e41199512b050b4cf445ba52548369f267d3fb81d189f5f",
        "loop": "a441b32fc1d8090f43b648d709bd04e9d9c27396957a4be0b1cf34cc8ca2183d",
        "detail": "0478089b4739de5b7fda23b297c3c8ef4cbc666cd2e00eb5f39398daa165bae1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-drag/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-drag/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-drag/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "131bf977c8172547e10e2debd1f5f059b27d6e687f45eba5e8e3d4af4a9f607f",
        "loop": "ac3eb2ef30c684bec18473cc1802ac7b3def2349f8db36996e97d38c2581a998",
        "detail": "d39bfb509f425cf386088525663838bd1c6bae1e2c5ab5901d1086037947f7a0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-drag/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-drag/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-drag/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "f696a19cb0b5c80741fd764382465561e9d9a35c3da21a7e757c2998a0564f35",
        "loop": "26e19ef2d9fb2f29afab28fa7a7fa3cc79d59ba7e9633dc1eef86a6a6371df61",
        "detail": "b030282b102d1f1c215dcfa1d8042686a52d0ad9aef9e8afffb56c0397a7f02a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b09c86b1569dfd25e8a2dc990f598d4379145801e12de836a3763efb0849c8d1/index.mjs",
    "sha256": "b09c86b1569dfd25e8a2dc990f598d4379145801e12de836a3763efb0849c8d1",
    "bytes": 171353,
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
    "1:1": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:19:26.687Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
