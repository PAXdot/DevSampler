// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "multiplayer",
    "comment",
    "cursor chat",
    "collaboration",
    "teammates",
    "pin",
    "typing",
    "landing page",
    "feedback"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 195,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "comment": 92,
      "reply": 128
    },
    "beats": [
      0,
      36,
      92,
      128
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
      "key": "headline",
      "type": "text",
      "maxChars": 36,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "subline",
      "type": "text",
      "maxChars": 56,
      "lines": 3,
      "role": "subline"
    },
    {
      "key": "ctaLabel",
      "type": "text",
      "maxChars": 18,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "firstName",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "firstMessage",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "body"
    },
    {
      "key": "secondName",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "secondReply",
      "type": "text",
      "maxChars": 24,
      "lines": 2,
      "role": "body"
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
      "target": "firstCursor",
      "prop": "path",
      "from": "right",
      "settledBy": 36,
      "easing": "ease"
    },
    {
      "target": "firstMessage",
      "prop": "chars",
      "from": "0",
      "settledBy": 72,
      "easing": "linear"
    },
    {
      "target": "pin",
      "prop": "scale",
      "from": "0",
      "settledBy": 112,
      "easing": "spring"
    },
    {
      "target": "secondCursor",
      "prop": "path",
      "from": "right",
      "settledBy": 128,
      "easing": "ease"
    },
    {
      "target": "secondReply",
      "prop": "chars",
      "from": "0",
      "settledBy": 146,
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
      195
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (teammate cursor types a comment, pins it, a second cursor replies, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "presence-chat"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "headline": "Launch videos in one afternoon",
    "subline": "Pick blocks, add your brand, export.",
    "ctaLabel": "Start free",
    "firstName": "Maya",
    "firstMessage": "Can we make this bigger?",
    "secondName": "Leo",
    "secondReply": "Good call, on it",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#10B981",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 36,
      "role": "headline"
    },
    {
      "key": "subline",
      "label": "Subline",
      "type": "text",
      "max": 56,
      "role": "subline"
    },
    {
      "key": "ctaLabel",
      "label": "Cta label",
      "type": "text",
      "max": 18,
      "role": "cta"
    },
    {
      "key": "firstName",
      "label": "First name",
      "type": "text",
      "max": 12,
      "role": "name"
    },
    {
      "key": "firstMessage",
      "label": "First message",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "secondName",
      "label": "Second name",
      "type": "text",
      "max": 12,
      "role": "name"
    },
    {
      "key": "secondReply",
      "label": "Second reply",
      "type": "text",
      "max": 24,
      "role": "body"
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
  "name": "Cursor Chat Comment",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-chat",
    "bundleSha256": "245b2178683218754624905f55ebbd469ee1a03323c85cd44be4b30ccc008a95",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:47:26.782Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-paper.png",
        "sha256": "97921384dd258dc5edf6810cb72f1cb5381a499ac5c3b31e4415b6f8806c6e77"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-night.png",
        "sha256": "1e37c7c3612cb203de0c5da9b96c267d7839a8a32420f4a2e7bf9f66fd13a882"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-color.png",
        "sha256": "de8c353699c81aed1c37b2adf4be89436f4032a63d98ce19b842ba548e45fa21"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-paper.png",
        "sha256": "34b19060b10cddf19b9b56c3a16dba826281a3a98ab6af99f788466aba2ecfb6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-night.png",
        "sha256": "f6b0a1de6ae71791aef64e77042ae34feb0daac6b5190a7b2bb395af8a167f6a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-color.png",
        "sha256": "d815ddae7a20ea77e6ff2c085e4164a232b993dc99dcd5232450602becd1d4be"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-paper.png",
        "sha256": "47081ffc6d1f88eba6a8e3fb4fa1da41324d62d0bb3121f4db3f17e199b8a9b1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-night.png",
        "sha256": "922a10eaee0cddd7f930dab59ad50c6c488369d987fea0f9afdf34bbafd033ca"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-color.png",
        "sha256": "169bce38480162254ec1eabac8444e09dfea670fd27c63a9197218ee8631ebba"
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
          "cursor-chat--16x9",
          "cursor-chat--9x16",
          "cursor-chat--1x1"
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
            "paperNight": 103.32663302951389,
            "paperColor": 20.32443576388889,
            "region": {
              "left": 297,
              "top": 130,
              "width": 1326,
              "height": 876
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 106.72273763020833,
            "paperColor": 26.4248046875,
            "region": {
              "left": 16,
              "top": 286,
              "width": 1048,
              "height": 1404
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 104.61404079861111,
            "paperColor": 22.73630099826389,
            "region": {
              "left": 37,
              "top": 98,
              "width": 1006,
              "height": 940
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
            "occupancy": 0.7287379972565159,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7938968411438652,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7287379972565159,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9320566092949527,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0056453136810282,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9320566092949527,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0463032949805438,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1489992659157857,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0463032949805438,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.2686631944444446,
        "frames": [
          22,
          150,
          194
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 2.6382378472222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-90-frame-10.png",
                "sha256": "1ce85fd7b999ce6582a43049f0808f9adabb401e04202def483ca3179e27245d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-90-frame-89.png",
                "sha256": "a5c95357befc5bc1eddb207063511596d1030dd946ad8e3afc1c3e22ceac25d9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-90-frame-79.png",
                "sha256": "a5c95357befc5bc1eddb207063511596d1030dd946ad8e3afc1c3e22ceac25d9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.2686631944444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-600-frame-22.png",
                "sha256": "f73f4a4604adc4f0cf0bef78b53524b18c5691fd9b1dd00d9165359410bc4b18",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-600-frame-150.png",
                "sha256": "a5c95357befc5bc1eddb207063511596d1030dd946ad8e3afc1c3e22ceac25d9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-600-frame-528.png",
                "sha256": "a5c95357befc5bc1eddb207063511596d1030dd946ad8e3afc1c3e22ceac25d9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/16x9-duration-600-frame-599.png",
                "sha256": "a5c95357befc5bc1eddb207063511596d1030dd946ad8e3afc1c3e22ceac25d9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.4267578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-90-frame-10.png",
                "sha256": "635ecce78219dfe6d16b39154e833a43fc125efa3caf6947a69ea3303a122da0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-90-frame-89.png",
                "sha256": "c778f6ef0ba848a631588b7f8018ffa49580e02bc4cec04ee44597790cdf0fe5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-90-frame-79.png",
                "sha256": "c778f6ef0ba848a631588b7f8018ffa49580e02bc4cec04ee44597790cdf0fe5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 6.112847222222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-600-frame-22.png",
                "sha256": "b96a5d5d097f2a95d26f81f155a95304fc7e93d58ee0f71226c0cf9962994193",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-600-frame-150.png",
                "sha256": "c778f6ef0ba848a631588b7f8018ffa49580e02bc4cec04ee44597790cdf0fe5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-600-frame-528.png",
                "sha256": "c778f6ef0ba848a631588b7f8018ffa49580e02bc4cec04ee44597790cdf0fe5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/9x16-duration-600-frame-599.png",
                "sha256": "c778f6ef0ba848a631588b7f8018ffa49580e02bc4cec04ee44597790cdf0fe5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.096245659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-90-frame-10.png",
                "sha256": "2098e64aebb1e7adfe4409dcca3bde73078978f8dd693fb278cbb5d9448049a2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-90-frame-89.png",
                "sha256": "30b81eaa3dd4fb290433e64137944b7e731e5bbf0bc3fc89d9f5fe765481b89e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-90-frame-79.png",
                "sha256": "30b81eaa3dd4fb290433e64137944b7e731e5bbf0bc3fc89d9f5fe765481b89e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.6744791666666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-600-frame-22.png",
                "sha256": "87a6daab491d60f7dadc3cbf41f20eb9430aa8bf8c622bc1c27334e96f94c1f9",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-600-frame-150.png",
                "sha256": "30b81eaa3dd4fb290433e64137944b7e731e5bbf0bc3fc89d9f5fe765481b89e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-600-frame-528.png",
                "sha256": "30b81eaa3dd4fb290433e64137944b7e731e5bbf0bc3fc89d9f5fe765481b89e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-chat/1x1-duration-600-frame-599.png",
                "sha256": "30b81eaa3dd4fb290433e64137944b7e731e5bbf0bc3fc89d9f5fe765481b89e",
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
        "note": "A teammate's named cursor types a chat bubble, drops a comment pin, and a second cursor replies."
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
      "bundleSha256": "245b2178683218754624905f55ebbd469ee1a03323c85cd44be4b30ccc008a95",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.242Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-chat/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-chat/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-chat/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 195,
      "sha256": {
        "poster": "4e840ffb12a8b8217932633df73cfdc2ba8c2367afad5c39fb7381d44eb22aa3",
        "loop": "0f5e54632b358138ef6fbb24ef2789f239b50c3c0f6191ad73e22d9ae9ed2f32",
        "detail": "328bf951e37d8192523a9a242d7dabb22303980338e21dfe0a96203e170e9897"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-chat/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-chat/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-chat/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 195,
      "sha256": {
        "poster": "52ab397ac95c7a5c3cc70be411b26de892a7e25c53b8fb9d1171a28d9cbed7a4",
        "loop": "931693337f693cf02680cce662b91b0b14a22e876e8d335d273b7341fa27579f",
        "detail": "b381506096ec5240a7078bef4ff4699f33e67ac7f8bb606751acf017eb34fc10"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-chat/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-chat/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-chat/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 195,
      "sha256": {
        "poster": "5970ff7ee95775123744b8c5c9463c3b22f7a57efc1acf5c3ce0a66e94879459",
        "loop": "acb2c754fdcade602c2235267660c380ccb808abcae7d203fcf8bf00a9fdbff5",
        "detail": "a4209680bce6181246d81217fa6cdd66697964d985ce879d86545dbac73769c9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/245b2178683218754624905f55ebbd469ee1a03323c85cd44be4b30ccc008a95/index.mjs",
    "sha256": "245b2178683218754624905f55ebbd469ee1a03323c85cd44be4b30ccc008a95",
    "bytes": 178917,
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
    "at": "2026-10-08T00:01:39.286Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
