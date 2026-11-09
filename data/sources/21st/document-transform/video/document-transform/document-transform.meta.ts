// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "document",
    "brief",
    "transform",
    "workspace",
    "result"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 115,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 104
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
      "key": "headline",
      "type": "text",
      "maxChars": 64,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "sourceTitle",
      "type": "text",
      "maxChars": 42,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "resultTitle",
      "type": "text",
      "maxChars": 42,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "sourceImage",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "resultImage",
      "type": "image",
      "role": "screenshot"
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
      "settledBy": 104,
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
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "From a brief to a workspace",
    "sourceTitle": "A simple starting point",
    "resultTitle": "A place to make it happen",
    "lines": [
      "Gather the useful context",
      "Give every idea a place",
      "Connect the work ahead",
      "Make room for the next step"
    ],
    "sourceImage": "",
    "resultImage": "",
    "transformFrame": 44,
    "resultVariant": "dashboard",
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "sourceTitle",
      "label": "Source title",
      "type": "text",
      "max": 42,
      "role": "label"
    },
    {
      "key": "resultTitle",
      "label": "Result title",
      "type": "text",
      "max": 42,
      "role": "label"
    },
    {
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 6
    },
    {
      "key": "sourceImage",
      "label": "Source image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "resultImage",
      "label": "Result image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "transformFrame",
      "label": "Transform frame",
      "type": "number",
      "step": 1,
      "min": 28,
      "max": 58
    },
    {
      "key": "resultVariant",
      "label": "Result variant",
      "type": "select",
      "options": [
        "dashboard",
        "article",
        "list"
      ]
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
  "name": "Document to Workspace",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "document-transform",
    "bundleSha256": "2f9454172e9702778a7d3cac3dc545649554cba6bf914545e4135b70dbe51d9b",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:57.005Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-paper.png",
        "sha256": "b85df94082e5cd9e9e238633a06a66983b302d613bd427082dd3610eeb9a62e2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-night.png",
        "sha256": "10c3e731670ce6f21e663820314183478ce1ceb365eb0593c7705ff55707fa99"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-color.png",
        "sha256": "00b583081387e58a0f510db8924c85f599b0595be63cdd6828199cce4441e4d6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-paper.png",
        "sha256": "f0d08770040c6f4532de9f62665ed67f857cadb97e9487c4721210bd0a302448"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-night.png",
        "sha256": "83e463c76c3cb688bdae9128cfb157ba36c25e5a2b7de5f92a2eca307d47d4cf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-color.png",
        "sha256": "f02e813a9509863a681b217aef73463347ec66d8ce33396e2125c6ed6ff01e7f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-paper.png",
        "sha256": "da5b61d5c239ae77b903eee6528ff396280ea94f4599143a8ec7bc1d07a07b03"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-night.png",
        "sha256": "417700960667404c0720b2f91db0e54090bf6119a6e75809c67bc847e251bfde"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-color.png",
        "sha256": "23bb8e06ebf367b84603c246114e1b7f2e12fe1e2f7df3418988cc4f54cffb88"
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
          "document-transform--16x9",
          "document-transform--9x16",
          "document-transform--1x1"
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
            "paperNight": 118.30192057291667,
            "paperColor": 11.71066623263889,
            "region": {
              "left": 28,
              "top": 136,
              "width": 1864,
              "height": 815
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 114.25027126736111,
            "paperColor": 19.078531901041668,
            "region": {
              "left": 0,
              "top": 244,
              "width": 1080,
              "height": 1439
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 116.87660047743056,
            "paperColor": 12.45166015625,
            "region": {
              "left": 0,
              "top": 136,
              "width": 1080,
              "height": 815
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
            "occupancy": 1.0092020668864257,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.035745123666751,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.000523425033594,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0233894387230202,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.059234457671958,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0134190475315643,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0305902768057384,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0668619299571682,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0217277068577777,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 28.338758680555557,
        "frames": [
          15,
          104,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 115,
            "averageChannelDifference": 28.328776041666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-115-frame-13.png",
                "sha256": "ce2e7f7f3e3154d92b0a3dc741b20689a9a75d425e31ac93c700a902a034767f",
                "alphaMass": 209982
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-115-frame-104.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-115-frame-101.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-115-frame-114.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 28.338758680555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-900-frame-15.png",
                "sha256": "cb9e92caf9728feec68f794dfed3de00947a8a400937b9a9ba506d9bf39c5d5f",
                "alphaMass": 209982
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-900-frame-104.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-900-frame-792.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/16x9-duration-900-frame-899.png",
                "sha256": "aba722f45676fb5888c062c1ae2006ad6443e0462d97269cd97dcc00e1d0bcf6",
                "alphaMass": 336456
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 115,
            "averageChannelDifference": 28.58257378472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-115-frame-13.png",
                "sha256": "837d6cfe4a213f0158f28c084ca55d91af565855e7295d60e3923dbf224d9c53",
                "alphaMass": 282085
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-115-frame-104.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-115-frame-101.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-115-frame-114.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 28.47146267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-900-frame-15.png",
                "sha256": "66b1ecd448e8d4cf1565864adb38ed058fe00d8817226799dbb30d95f40adeae",
                "alphaMass": 282085
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-900-frame-104.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-900-frame-792.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/9x16-duration-900-frame-899.png",
                "sha256": "bdd4834170b1f25cf40f2d06a741fac42c5c95baac83c7510688e0caf7511871",
                "alphaMass": 337685
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 115,
            "averageChannelDifference": 29.98491753472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-115-frame-13.png",
                "sha256": "1385c3f1c096c1c59ab69c6449019782abf92426031d964ff8f4be2cff3a5fd7",
                "alphaMass": 213293
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-115-frame-104.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-115-frame-101.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-115-frame-114.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 29.99359809027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-900-frame-15.png",
                "sha256": "69ad2637e45d3cbc37174ae0e2f93f1a6a380d5b95f40a14939946cc62ab7a8f",
                "alphaMass": 213293
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-900-frame-104.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-900-frame-792.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/document-transform/1x1-duration-900-frame-899.png",
                "sha256": "7d0b47d2801a2bd5246f09c7a3457e66bd697c109a036d58927fcc3081952af7",
                "alphaMass": 340253
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
        "note": "A brief card turns into a workspace with progress, a chart and a task table."
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
      "bundleSha256": "2f9454172e9702778a7d3cac3dc545649554cba6bf914545e4135b70dbe51d9b",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.931083Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/document-transform/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/document-transform/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/document-transform/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "87693d75240fe2dd47074b274ffb348e4e9682d980ce9c276936f2a854be8425",
        "loop": "dbbc7267792155ea87574aca2bea31b331d16de65949e4375b1e7f25ce25b520",
        "detail": "5f6eb83996f1671def86893ea6dde19ec269ab591cc0dc329c8a1789e1bbed80"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/document-transform/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/document-transform/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/document-transform/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "eae9669abd64f59887d7578ad4d7f5abb93869e1f09ce1d2ddc7bbeec5e66611",
        "loop": "59e2362e4fe3532cd6764edd2d7846821fb5226a91eb34548ddc1521793201e0",
        "detail": "b35aaca589034fafc1999c8a35d215509742a11f67988d32a95016bff1f67896"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/document-transform/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/document-transform/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/document-transform/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "28bc26f9d70999dcaa140917371f532475a4ef1f846759e72f3deb93e193406a",
        "loop": "e2761bcc24a843c2ddfc8af9dbf5daf96e3f5d0ee0a0a3fa43524dadda30f4c4",
        "detail": "79a192b8aae6cec4fd5b106ab702a4e8abdbf6d6416c6c5a215df054e3ae0cd0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2f9454172e9702778a7d3cac3dc545649554cba6bf914545e4135b70dbe51d9b/index.mjs",
    "sha256": "2f9454172e9702778a7d3cac3dc545649554cba6bf914545e4135b70dbe51d9b",
    "bytes": 177877,
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
    "at": "2026-10-07T02:20:37.754Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
