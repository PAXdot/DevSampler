// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "pixel",
    "8-bit",
    "retro",
    "game menu",
    "arcade",
    "pixel art",
    "click burst"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 72,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90,
      "hover": 28,
      "click": 58
    },
    "beats": [
      0,
      28,
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
      "maxChars": 16,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "items",
      "type": "list",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "hint",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "readyLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "screen",
      "prop": "scale",
      "from": "0.92",
      "settledBy": 14,
      "easing": "linear"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "right",
      "settledBy": 48,
      "easing": "linear"
    },
    {
      "target": "selection bar",
      "prop": "y",
      "settledBy": 48,
      "easing": "linear"
    },
    {
      "target": "pixel burst",
      "prop": "scale",
      "settledBy": 78,
      "easing": "ease"
    },
    {
      "target": "loading bar",
      "prop": "width",
      "settledBy": 84,
      "easing": "linear"
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
    "sourceUrl": "21st first-party (8-bit arrow cursor picks Start in a retro game menu, 2026-10-07)"
  },
  "job": "cursors",
  "language": "pixel-terminal",
  "mechanic": [
    "press"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Pixel Quest",
    "items": [
      "Start game",
      "Options",
      "Quit"
    ],
    "hint": "Press start",
    "readyLabel": "Get ready!",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#F5C542",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 3,
      "role": "label"
    },
    {
      "key": "hint",
      "label": "Hint",
      "type": "text",
      "max": 16,
      "role": "subline"
    },
    {
      "key": "readyLabel",
      "label": "Ready label",
      "type": "text",
      "max": 16,
      "role": "subline"
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
      "brand": "fonts.mono"
    }
  ],
  "name": "Pixel Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-pixel",
    "bundleSha256": "79416a873fd2f032c5e970d7a8f965cb5a3f4d8ea692bb3985f6a4d4e7056601",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:44:09.650Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-paper.png",
        "sha256": "c7153b87647191284d01a3dc9c284a1b285bc135381036f718c5b844d565f588"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-night.png",
        "sha256": "93ec5ddaa4d8d5b0a1408a3292753c9feb60dcf99fcbeb8c6e787a5dfe98ed0a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-color.png",
        "sha256": "ae785609497aa1b4f258d07c85f081d2bd8208d026bc55f312dd72d6a511f9d0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-paper.png",
        "sha256": "adaa449eedb3faf7149a4e7c258cfeecbedd6caafe7ddc2d99fce9335187a193"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-night.png",
        "sha256": "f528627a687be2573884ad9fc6593455c4b805c1b095bbf96b6335f986f9e41e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-color.png",
        "sha256": "e53a076e1438fa98a30c11a56f12b62a2fd89dbd2775b33e029c8d70343f07ff"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-paper.png",
        "sha256": "f02447e1fd294d9e2bb854a099dfc540ce011ed6a0f04df0c8115422e830fad1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-night.png",
        "sha256": "9ab732eb081476c518829eddf9556b089dc08589466be031de1641c9d65fa16d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-color.png",
        "sha256": "38eccfbb4611e8cee72077073126fbd6445ad925e7d6ff13365a168f9757bdae"
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
          "cursor-pixel--16x9",
          "cursor-pixel--9x16",
          "cursor-pixel--1x1"
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
            "paperNight": 86.57090928819444,
            "paperColor": 11.033094618055555,
            "region": {
              "left": 210,
              "top": 112,
              "width": 1484,
              "height": 875
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 105.97214084201389,
            "paperColor": 14.772135416666666,
            "region": {
              "left": 81,
              "top": 144,
              "width": 945,
              "height": 1629
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 115.54104275173611,
            "paperColor": 15.803466796875,
            "region": {
              "left": 63,
              "top": 112,
              "width": 973,
              "height": 875
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
            "occupancy": 0.887479638203018,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.887479638203018,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.887479638203018,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.052129836309524,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.052129836309524,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.052129836309524,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0344626390794087,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0344626390794087,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0344626390794087,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.7885199652777777,
        "frames": [
          13,
          90,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 72,
            "averageChannelDifference": 3.7885199652777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-72-frame-8.png",
                "sha256": "804c5aa94fab7cf6081523b115d61dd2996ed8d3b4702cffa7ba018dee71551f",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-72-frame-71.png",
                "sha256": "746349b4b712d31138e26c57a0840fab71da571a18a587b4a871ec414c285465",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-72-frame-63.png",
                "sha256": "746349b4b712d31138e26c57a0840fab71da571a18a587b4a871ec414c285465",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.7885199652777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-600-frame-13.png",
                "sha256": "804c5aa94fab7cf6081523b115d61dd2996ed8d3b4702cffa7ba018dee71551f",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-600-frame-90.png",
                "sha256": "746349b4b712d31138e26c57a0840fab71da571a18a587b4a871ec414c285465",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-600-frame-528.png",
                "sha256": "746349b4b712d31138e26c57a0840fab71da571a18a587b4a871ec414c285465",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/16x9-duration-600-frame-599.png",
                "sha256": "336d4705da304402fad6f133bebbac21db5bed0c4cff5bde1c93754b59e9a55e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 72,
            "averageChannelDifference": 6.164279513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-72-frame-8.png",
                "sha256": "21cf7ef1c3db07a01e7b94491a3312d521534888be61b7ade9373a5b37f1d868",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-72-frame-71.png",
                "sha256": "c028401ba84817f2b2922dcfc3f62f40982713a99762e89b3d11acedcbd0071c",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-72-frame-63.png",
                "sha256": "c028401ba84817f2b2922dcfc3f62f40982713a99762e89b3d11acedcbd0071c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 6.164279513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-600-frame-13.png",
                "sha256": "21cf7ef1c3db07a01e7b94491a3312d521534888be61b7ade9373a5b37f1d868",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-600-frame-90.png",
                "sha256": "c028401ba84817f2b2922dcfc3f62f40982713a99762e89b3d11acedcbd0071c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-600-frame-528.png",
                "sha256": "c028401ba84817f2b2922dcfc3f62f40982713a99762e89b3d11acedcbd0071c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/9x16-duration-600-frame-599.png",
                "sha256": "c028401ba84817f2b2922dcfc3f62f40982713a99762e89b3d11acedcbd0071c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 72,
            "averageChannelDifference": 6.506510416666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-72-frame-8.png",
                "sha256": "bf64542c2968f33a0429205e68f7940c14da12a16596b22b1fc072c199dee7af",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-72-frame-71.png",
                "sha256": "4ac518bbfbda91581a90f73254e74b709ac1cb33f09bc049a173b2b7780cb0fd",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-72-frame-63.png",
                "sha256": "4ac518bbfbda91581a90f73254e74b709ac1cb33f09bc049a173b2b7780cb0fd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 6.506510416666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-600-frame-13.png",
                "sha256": "bf64542c2968f33a0429205e68f7940c14da12a16596b22b1fc072c199dee7af",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-600-frame-90.png",
                "sha256": "4ac518bbfbda91581a90f73254e74b709ac1cb33f09bc049a173b2b7780cb0fd",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-600-frame-528.png",
                "sha256": "4ac518bbfbda91581a90f73254e74b709ac1cb33f09bc049a173b2b7780cb0fd",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-pixel/1x1-duration-600-frame-599.png",
                "sha256": "4ac518bbfbda91581a90f73254e74b709ac1cb33f09bc049a173b2b7780cb0fd",
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
        "note": "An 8-bit pixel cursor selects Start game in a retro menu with a pixel burst."
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
      "bundleSha256": "79416a873fd2f032c5e970d7a8f965cb5a3f4d8ea692bb3985f6a4d4e7056601",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.292Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-pixel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-pixel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-pixel/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "0d2ceb66b720ad0642157bc8fd3f019811eaef9490e47363bff5c4638c9f8ecc",
        "loop": "fa57c9239141a37b7ef13b31a12932e4dc0b95886bf0db7627215c71b8c2777e",
        "detail": "99b71528331b1c34c5b26cb310ac093690b554a8388b46d602dcd37298710cc3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-pixel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-pixel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-pixel/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "38af6bfd7130d496e469d735665c238c97760234954cee23c66863b06972a6af",
        "loop": "e75aa20fe9c8f0fa88edae7bc5a370f8b924fd82c24ff5affcdc798da85a6df0",
        "detail": "84dae381884d5ecaf0f46b6b791b29b9e9faffd564a4bd8a9d8fa03df198e701"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-pixel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-pixel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-pixel/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "a09753dd557f4cbc7c4769b94eca33babf46ab74c51c9f4c788b8cbda304821a",
        "loop": "ba5d02c5dd8cd54d89e45943b909339bf51b34c8c95e692f7b06e0899de3ea34",
        "detail": "0f5cd2c58905817dbec482ef70c557856f5ffbf154904a25904b7a5a72decc20"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/79416a873fd2f032c5e970d7a8f965cb5a3f4d8ea692bb3985f6a4d4e7056601/index.mjs",
    "sha256": "79416a873fd2f032c5e970d7a8f965cb5a3f4d8ea692bb3985f6a4d4e7056601",
    "bytes": 168836,
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
    "at": "2026-10-08T00:08:01.465Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
