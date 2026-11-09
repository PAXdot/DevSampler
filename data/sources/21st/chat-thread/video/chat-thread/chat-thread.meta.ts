// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/chat",
  "tags": [
    "chat",
    "messages",
    "ai",
    "agent",
    "tool call",
    "conversation",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
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
      "in": 106,
      "out": 0
    },
    "markers": {
      "settled": 112
    },
    "beats": [
      10,
      30,
      50,
      66,
      70,
      90
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
      "maxChars": 36,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "messages",
      "type": "list",
      "role": "body"
    },
    {
      "key": "toolLabel",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "runningLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "placeholder",
      "type": "text",
      "maxChars": 36,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "successColor": "colors.secondary",
    "errorColor": "colors.primary",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "bubble",
      "prop": "scale",
      "from": "0.9",
      "settledBy": 16,
      "easing": "ease"
    },
    {
      "target": "column",
      "prop": "y",
      "from": "below",
      "easing": "ease"
    },
    {
      "target": "status",
      "prop": "label",
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V04 chat + tool card, V15 chat column)"
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
    "title": "Pricing page",
    "messages": [
      {
        "role": "user",
        "text": "Make the yearly toggle default and show the savings next to each plan."
      },
      {
        "role": "assistant",
        "text": "On it. I'll flip the default and add a savings badge to all three tiers."
      },
      {
        "role": "assistant",
        "text": "Done. Yearly is now the default and each plan shows how much you save."
      },
      {
        "role": "user",
        "text": "Perfect, ship it."
      }
    ],
    "toolLabel": "Edited pricing-table.tsx",
    "runningLabel": "Running",
    "doneLabel": "Done",
    "placeholder": "Ask a follow-up",
    "interval": 20,
    "theme": "light",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "successColor": "#16A34A",
    "errorColor": "#EF4444",
    "background": "#EEF0F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 36,
      "role": "headline"
    },
    {
      "key": "messages",
      "label": "Messages",
      "type": "list",
      "max": 6,
      "role": "body"
    },
    {
      "key": "toolLabel",
      "label": "Tool label",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "runningLabel",
      "label": "Running label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "placeholder",
      "label": "Placeholder",
      "type": "text",
      "max": 36,
      "role": "label"
    },
    {
      "key": "interval",
      "label": "Interval",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 60
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
      "key": "successColor",
      "label": "Success color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "errorColor",
      "label": "Error color",
      "type": "color",
      "brand": "colors.primary"
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
  "name": "Chat Thread",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "chat-thread",
    "bundleSha256": "1e48d35bb7029ebc5d22a4d4f760d39adf8a82947ec7600621fe3724bdf56154",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:59:24.209Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-paper.png",
        "sha256": "333af351807b39cebd1ec938d15a91ecfabb407d6ebb85d88295a8f434d573fd"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-night.png",
        "sha256": "143167f7b95e89d0ac61d0d160c841217736bd930c42e9f36e8091f223a5a523"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-color.png",
        "sha256": "2125e7cc9b33485cd713efdd7ee3485b63ee22d2d6ef302f211016e3bb999bc9"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-paper.png",
        "sha256": "f17a59005e6c1a532f20b7189fd6baf425127a3720a13cf27bd11078bcf6675f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-night.png",
        "sha256": "683aa2a6849ff068e42af86f74bc1e6199e3ced8941c080ab7d167c92e1c413e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-color.png",
        "sha256": "ee14dbb4d34dd2b935f6d65f3e3afd78d02a976752ee2b37734d69ec32956117"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-paper.png",
        "sha256": "67ede697844bbca199e98ec7a0ef9da3bb3e5a00ef27c6188e7ec5a2119dfb87"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-night.png",
        "sha256": "3b449ceb165b3fcf2691a2d0553a4245c356b60213314c5636efa7d1f2545709"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-color.png",
        "sha256": "578c7ee091badbb951494fe55bfdd8ef36f14950fd09d110c9c76390254ff3d0"
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
          "chat-thread--16x9",
          "chat-thread--9x16",
          "chat-thread--1x1"
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
            "paperNight": 124.95754665798611,
            "paperColor": 12.160970052083334,
            "region": {
              "left": 431,
              "top": 63,
              "width": 1058,
              "height": 1006
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 128.45350477430554,
            "paperColor": 13.74245876736111,
            "region": {
              "left": 16,
              "top": 92,
              "width": 1048,
              "height": 1788
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 122.12627495659723,
            "paperColor": 12.163438585069445,
            "region": {
              "left": 70,
              "top": 63,
              "width": 940,
              "height": 1006
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
            "occupancy": 0.6606867283950618,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7274448809873745,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6606867283950618,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1875331890729546,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.280693604602335,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1875331890729546,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037056769438457,
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
            "occupancy": 1.037056769438457,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.999565972222222,
        "frames": [
          16,
          112,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 2.8999565972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-90-frame-10.png",
                "sha256": "d52455e9f8d0a711df282b2093afd64aa49a0c6faeab1cc75fcf78cb8e3eda00",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-90-frame-89.png",
                "sha256": "ba55e58cbe08c5d18bf0062725062bf121f5bab000d6bab1e4641f35d18f7e1c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-90-frame-79.png",
                "sha256": "ba55e58cbe08c5d18bf0062725062bf121f5bab000d6bab1e4641f35d18f7e1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.999565972222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-900-frame-16.png",
                "sha256": "c10af4044226eba0eaf59d5d4ff6966a5b73a9e77394302faace89790bf2bbda",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-900-frame-112.png",
                "sha256": "4d60ffbfc4a5ed501c5a36afa1a6b39c4d57f761ae1d764cc1360f454ebdfdce",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-900-frame-792.png",
                "sha256": "4d60ffbfc4a5ed501c5a36afa1a6b39c4d57f761ae1d764cc1360f454ebdfdce",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/16x9-duration-900-frame-899.png",
                "sha256": "4d60ffbfc4a5ed501c5a36afa1a6b39c4d57f761ae1d764cc1360f454ebdfdce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 3.9975043402777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-90-frame-10.png",
                "sha256": "897c7aba3a0fb85f17911cb50b6c695632a064beb334565111b829f6590b78ad",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-90-frame-89.png",
                "sha256": "851b64ee386050c418c19cab2bb7bf6ef56bc79e3a824a969a898cbc3cc8ff04",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-90-frame-79.png",
                "sha256": "851b64ee386050c418c19cab2bb7bf6ef56bc79e3a824a969a898cbc3cc8ff04",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.007921006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-900-frame-16.png",
                "sha256": "fbe09589d15043c1fc68330318dc87f87ecc00da2e3e9bf7a709e20fd1ddd922",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-900-frame-112.png",
                "sha256": "35bbdba75de8955077ee664e444828761154991960c3eb2e7cd0dd04d9c73eb3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-900-frame-792.png",
                "sha256": "35bbdba75de8955077ee664e444828761154991960c3eb2e7cd0dd04d9c73eb3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/9x16-duration-900-frame-899.png",
                "sha256": "35bbdba75de8955077ee664e444828761154991960c3eb2e7cd0dd04d9c73eb3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.788411458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-90-frame-10.png",
                "sha256": "e391d5a9f2bef47f4a1fb0c84b2dd1363de3230a142fccc17ed577cb6acc0a1c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-90-frame-89.png",
                "sha256": "cebf1eb96517a03e10803aa460e5540faf6412336d52fa8a46a75b2aefe8911f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-90-frame-79.png",
                "sha256": "cebf1eb96517a03e10803aa460e5540faf6412336d52fa8a46a75b2aefe8911f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.802951388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-900-frame-16.png",
                "sha256": "d0f82c749579b4e6d8d617e5fa50fe328ab56ea64913e93e491ccbab80ccf28a",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-900-frame-112.png",
                "sha256": "e4ab3d2a80ea184486bdc873b9e13d05765ad5bebb3d3b573caac1609301e32e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-900-frame-792.png",
                "sha256": "e4ab3d2a80ea184486bdc873b9e13d05765ad5bebb3d3b573caac1609301e32e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chat-thread/1x1-duration-900-frame-899.png",
                "sha256": "e4ab3d2a80ea184486bdc873b9e13d05765ad5bebb3d3b573caac1609301e32e",
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
        "note": "A chat thread: request, agent edits a file with running/done pill, reply; product UI in action."
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
      "bundleSha256": "1e48d35bb7029ebc5d22a4d4f760d39adf8a82947ec7600621fe3724bdf56154",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.009351Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/chat-thread/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chat-thread/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chat-thread/16x9/detail.mp4",
      "bg": "#eef0f5",
      "posterFrame": 112,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7ded26be777a8c83e2c30e55fdccbaa7b2cd22a728697632ae0bdf86be3f5b3a",
        "loop": "824bd840f5da265d7944e35dae18a47e359e20e6bb8c6c9c0359cb5db4a598de",
        "detail": "36e36cdf532b3c8d46f14f6b61d6b4fab24ee111decf20dfabaa526724f42250"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/chat-thread/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chat-thread/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chat-thread/9x16/detail.mp4",
      "bg": "#eef0f5",
      "posterFrame": 112,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "21a431761155ac8c27db7c026b509a58e62b4844bdbc30d61c90bed32a846847",
        "loop": "0e254cfaf2014b32d90fa7ae2613b1c52864e13dedc08b301e05288dbf60d183",
        "detail": "5575eb618e594dee7fcbbd07c1bd252bd1d7ce074fc11856ae6399f739570495"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/chat-thread/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chat-thread/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chat-thread/1x1/detail.mp4",
      "bg": "#eef0f5",
      "posterFrame": 112,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "332b862ea8a18ec8f77895be9d9fee32c3ea73b783039f577308dd6ecdc8913a",
        "loop": "f1d8475982161fdf9bef003e79c86b93d6e673df6db12e661203a1ab896d980f",
        "detail": "54b5514f91af9afcb9ffe1bf5ba1b48ed1fb0331d556af197e3c6be8a34a1eac"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1e48d35bb7029ebc5d22a4d4f760d39adf8a82947ec7600621fe3724bdf56154/index.mjs",
    "sha256": "1e48d35bb7029ebc5d22a4d4f760d39adf8a82947ec7600621fe3724bdf56154",
    "bytes": 173120,
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
    "at": "2026-10-07T02:43:50.589Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
