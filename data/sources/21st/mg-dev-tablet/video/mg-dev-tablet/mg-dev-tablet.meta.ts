// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "hand-drawn",
  "mechanic": [
    "stylus-circle-annotate"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "stylus-circle-annotate",
    "tablet",
    "stylus",
    "annotation"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
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
      "in": 129,
      "out": 0
    },
    "markers": {
      "settled": 129
    },
    "beats": [
      0,
      32,
      65,
      97,
      129
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
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "role": "headline"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 60,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "stylus-circle-annotate",
      "prop": "transform",
      "from": "enter",
      "settledBy": 129,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#F3EFE6",
    "accent": "#FF5A36",
    "secondary": "#4F6BFF",
    "paper": "#1A2A20",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Launch retro",
    "headline": "Circle what matters, right on the board",
    "note": "best week yet!",
    "caption": "Sketch, mark up and share in one canvas"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.accent"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 60,
      "role": "caption"
    }
  ],
  "name": "Tablet Stylus Markup",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-tablet",
    "bundleSha256": "25f643648caa8f8336a766a7b548c43803e0932498bb32584d395fde593f0da5",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:42:20.119Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-paper.png",
        "sha256": "7db74ec6375ff8bef7b2e642f4815eb0d22f6322f5fde1dc917cdcf7f2daa418"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-night.png",
        "sha256": "8294d271693438b2f9493c6c659eb730a57259f1f39bcb09a09ddcc64792972a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-color.png",
        "sha256": "1417b2882ec301d25ef6ec9d4537b5b36e82143f5d9816274edf73d040c44517"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-paper.png",
        "sha256": "af1a5d15fe5be69b107a0f0447b535e48f288f4c41d8b4b95b6e673d46c869f7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-night.png",
        "sha256": "11810c70defec1b9810b48ee2428b6a7ce75edd9869df23da09f80f7b41b0204"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-color.png",
        "sha256": "2a19311691f9787cc0c52bfefdffbb3108f5b885c0aee204dc206a4e74323383"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-paper.png",
        "sha256": "7f62c5eb6e3d78cb29ac14816e3c67bc7bfac82abc7e9eac5e8ea36b9889ffc2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-night.png",
        "sha256": "eaba75302ac979d84ec1669cc6ad46f874a6f7f151ce2ff1ba4c8d187f1ec12e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-color.png",
        "sha256": "a5492759cd9dcd892a9772bd727d4a5b3b5c014239a0f32ce03277b8b1f6b9cc"
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
          "mg-dev-tablet--16x9",
          "mg-dev-tablet--9x16",
          "mg-dev-tablet--1x1"
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
            "paperNight": 18.68706597222222,
            "paperColor": 5.892225477430555,
            "region": {
              "left": 103,
              "top": 232,
              "width": 1473,
              "height": 689
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.18478732638889,
            "paperColor": 9.419596354166666,
            "region": {
              "left": 34,
              "top": 168,
              "width": 990,
              "height": 1591
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.22881401909722,
            "paperColor": 6.396131727430555,
            "region": {
              "left": 68,
              "top": 71,
              "width": 906,
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
            "occupancy": 0.6936468404877385,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6936468404877385,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6936468404877385,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0751660328483248,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0765192940602168,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0744894022423788,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0347846271567613,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0347846271567613,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0347846271567613,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.2314453125,
        "frames": [
          19,
          129,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.186414930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-90-frame-10.png",
                "sha256": "d85788125eb2c449f721ae9509d79f386546b300b2697fa63f8ff616ab7d68d1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-90-frame-89.png",
                "sha256": "5bafdbfcfd979f290e5354aa6f2864de8a1d2aaa99f659577566032ce8e86bcb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-90-frame-79.png",
                "sha256": "829c7c239de4922848b66a25b17912979c11817c717583f94cc15ee6de43d580",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.2314453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-900-frame-19.png",
                "sha256": "d694b4c9431862475d7a0b213b5538bb6ee0c32af84242a21b10eed616ed6d5c",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-900-frame-129.png",
                "sha256": "f989c698645107dc512b19d1a56403a0ad52166342a09610ff6837133774d81d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-900-frame-792.png",
                "sha256": "829c7c239de4922848b66a25b17912979c11817c717583f94cc15ee6de43d580",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/16x9-duration-900-frame-899.png",
                "sha256": "5bafdbfcfd979f290e5354aa6f2864de8a1d2aaa99f659577566032ce8e86bcb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.755859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-90-frame-10.png",
                "sha256": "e5f0d5657fea7986b68129a24e3f68f443eaa99965da3b36f7dbe7a4d716c3f2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-90-frame-89.png",
                "sha256": "4840989be7f35ff1756c81ea33b93274f987a8bb09696f9c26127fa4f6bc10fa",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-90-frame-79.png",
                "sha256": "1633feaa975674bf90938bd841e1439d7f8b5a8e70edf495581a9344c939f1b6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.373914930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-900-frame-19.png",
                "sha256": "738ad198fcb6751f645a0b977ef279b5b41870905e6329cd85126f18121165b3",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-900-frame-129.png",
                "sha256": "4840989be7f35ff1756c81ea33b93274f987a8bb09696f9c26127fa4f6bc10fa",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-900-frame-792.png",
                "sha256": "1633feaa975674bf90938bd841e1439d7f8b5a8e70edf495581a9344c939f1b6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/9x16-duration-900-frame-899.png",
                "sha256": "1633feaa975674bf90938bd841e1439d7f8b5a8e70edf495581a9344c939f1b6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 18.22482638888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-90-frame-10.png",
                "sha256": "79e2fd37627e099e72c726d8501f38c20f488fdc80c44911a56957f1f4184471",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-90-frame-89.png",
                "sha256": "8ea432aa15bfbc55561c87e0489fc8f65f9d30780c61ae546a0d919836c691b2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-90-frame-79.png",
                "sha256": "dd1d8fac46b66d2425cc8fd3bec3c3bcaaacd447b189e4862f6f372ca7a3968e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.65277777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-900-frame-19.png",
                "sha256": "f494ddac1f951d078678238bc4ca17216af10d73474f53a31bc6b37853fce313",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-900-frame-129.png",
                "sha256": "acbb363fbaa6402315f63d68ccb4e759f4800dbcae5a448b0e50359426466e13",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-900-frame-792.png",
                "sha256": "8ea432aa15bfbc55561c87e0489fc8f65f9d30780c61ae546a0d919836c691b2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-dev-tablet/1x1-duration-900-frame-899.png",
                "sha256": "8ea432aa15bfbc55561c87e0489fc8f65f9d30780c61ae546a0d919836c691b2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Tablet markup with stylus circling a stat; settled frame complete, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "25f643648caa8f8336a766a7b548c43803e0932498bb32584d395fde593f0da5",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-tablet/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-tablet/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-tablet/16x9/detail.mp4",
      "bg": "#0f1812",
      "posterFrame": 129,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8ab7d06da682b02f818e7a01099844937fdd339e37c1eff9fae02ae879b826eb",
        "loop": "fb55702f6499c41f0bfb94a55c4b62152162c7ba876eaafe959174e06ea50055",
        "detail": "c660c66493a65660f97b824e225374eeb6ca075de3cabd66f9bde7767f77f660"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-tablet/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-tablet/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-tablet/9x16/detail.mp4",
      "bg": "#0f1812",
      "posterFrame": 129,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0efdc8af747ca76673565006629806339475989119b87cec67a32bcfe5e271cf",
        "loop": "cf6aa639bbc7b037b2874c8bf472023b3e9b35a4f2f45ae04396480bf5e84440",
        "detail": "5a92b4b50ab75fd54c7d1c3c555082fdf59dea528a6248abb34b8b9a30581ef9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-tablet/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-tablet/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-tablet/1x1/detail.mp4",
      "bg": "#0f1812",
      "posterFrame": 129,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "be4c7e2175b5b018c105a13e58b21ae114107f6ad1c078e9426a56f17dcdbcb8",
        "loop": "a1f461eb19e4a27637af18f3d977c88ed8764481acb33f303dd70757dc398845",
        "detail": "7aebfac41741468f9fa013b0692848641a6a6104314a863b192396eba3a21af6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/25f643648caa8f8336a766a7b548c43803e0932498bb32584d395fde593f0da5/index.mjs",
    "sha256": "25f643648caa8f8336a766a7b548c43803e0932498bb32584d395fde593f0da5",
    "bytes": 178512,
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
    "at": "2026-10-09T03:55:27.267Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
