// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/interaction",
  "tags": [
    "launch",
    "product",
    "introducing",
    "command",
    "palette",
    "search",
    "keyboard",
    "action"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 111,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 100
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
      "key": "query",
      "type": "text",
      "maxChars": 48,
      "role": "prompt"
    },
    {
      "key": "actions",
      "type": "list",
      "role": "items"
    },
    {
      "key": "result",
      "type": "text",
      "maxChars": 60,
      "role": "headline"
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
      "settledBy": 100,
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
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "query": "Create a project",
    "actions": [
      "Create a project",
      "Create a document",
      "Create a workspace"
    ],
    "selected": 0,
    "result": "Your new project is ready",
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "query",
      "label": "Query",
      "type": "text",
      "max": 48,
      "role": "prompt"
    },
    {
      "key": "actions",
      "label": "Actions",
      "type": "list",
      "max": 5,
      "role": "items"
    },
    {
      "key": "selected",
      "label": "Selected",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 4
    },
    {
      "key": "result",
      "label": "Result",
      "type": "text",
      "max": 60,
      "role": "headline"
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
  "name": "Command Palette Action",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "command-palette-action",
    "bundleSha256": "45fbbdc4508b136268c7ddc8e8231e342a803347e671ec3b65eb4bfd27e90a4f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:25.163Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-paper.png",
        "sha256": "cbedfc1c77ac2431ce0fe8b1e1683eaf40cf16d3bd65b2d196c2157ec7599ddb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-night.png",
        "sha256": "97b74aa5cde390608d29f732994d79bda0884bb69a6052c683248d347065c427"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-color.png",
        "sha256": "fb4f1e9dae1ab920e9ffb3d6f6c619dcf38b335d62dec258d982f4b2e9244d2a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-paper.png",
        "sha256": "d5cb66651789ac79b6c4e3ce261a73b756b4385f8986160aeb65fb0cec5b4110"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-night.png",
        "sha256": "6e5ff55f4313b1b2e5b5273248625dea3f0c060ef4e873454964285577eec1df"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-color.png",
        "sha256": "6ea5811d4847a15abadd159f39712593fc40541187b99715bc83a6117f91fb31"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-paper.png",
        "sha256": "5b73737f6f2f0e49d77b30d07709c5a1b82e0212168206833637ad349d1e007d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-night.png",
        "sha256": "70db36658c30c3fa4958c6ab56b6e0df8d5869fb5c293323d391507937cde242"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-color.png",
        "sha256": "4631da72e120f4e3c65c409a10b5fea9b86d281a8ddfff9dc51101293001f6f5"
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
          "command-palette-action--16x9",
          "command-palette-action--9x16",
          "command-palette-action--1x1"
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
            "paperNight": 142.63026258680554,
            "paperColor": 12.401529947916666,
            "region": {
              "left": 66,
              "top": 162,
              "width": 1788,
              "height": 808
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.12714301215277,
            "paperColor": 12.913004557291666,
            "region": {
              "left": 16,
              "top": 427,
              "width": 1048,
              "height": 1118
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 134.61946614583334,
            "paperColor": 12.401285807291666,
            "region": {
              "left": 16,
              "top": 162,
              "width": 1048,
              "height": 808
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
            "occupancy": 0.9063391785469334,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9874049928613423,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9039634533082782,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7318915059593798,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8007916386719298,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7305273093033511,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.925228487599887,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.028884347520444,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9228032491002804,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.0474175347222223,
        "frames": [
          15,
          100,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 111,
            "averageChannelDifference": 1.1115451388888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-111-frame-13.png",
                "sha256": "40c29822f073e015bf169a69c5b48ac2d8b5e780177dd95277b64475b29a4268",
                "alphaMass": 348986
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-111-frame-100.png",
                "sha256": "df778e86df252530b092eb59dc4f5470fe2e34b8c476dcbebe880307e508ac96",
                "alphaMass": 349790
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-111-frame-97.png",
                "sha256": "ff18d70ee5269247dbc72f6a288d568fe552c0cadf0f351ce8e9eb52d76ff773",
                "alphaMass": 349790
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-111-frame-110.png",
                "sha256": "ff18d70ee5269247dbc72f6a288d568fe552c0cadf0f351ce8e9eb52d76ff773",
                "alphaMass": 349790
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.0474175347222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-900-frame-15.png",
                "sha256": "8fe1f58936586457e7b8b3d183005c8429beb9684e16acee09d13b258b792567",
                "alphaMass": 349124
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-900-frame-100.png",
                "sha256": "df778e86df252530b092eb59dc4f5470fe2e34b8c476dcbebe880307e508ac96",
                "alphaMass": 349790
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-900-frame-792.png",
                "sha256": "ff18d70ee5269247dbc72f6a288d568fe552c0cadf0f351ce8e9eb52d76ff773",
                "alphaMass": 349790
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/16x9-duration-900-frame-899.png",
                "sha256": "ff18d70ee5269247dbc72f6a288d568fe552c0cadf0f351ce8e9eb52d76ff773",
                "alphaMass": 349790
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 111,
            "averageChannelDifference": 2.0973307291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-111-frame-13.png",
                "sha256": "47a574ceb8966b7bf2b43d6d173c64a0a366c367abe81d55d5b1b4b3880faa23",
                "alphaMass": 281070
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-111-frame-100.png",
                "sha256": "2d072260d2e679505dd5a0d5c697700614a0f9a0044aeee67092836747255aeb",
                "alphaMass": 281458
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-111-frame-97.png",
                "sha256": "5ba60e62c926cdecbadbabc3848ad608a05420620f6da42a3d9036473774ae7c",
                "alphaMass": 281458
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-111-frame-110.png",
                "sha256": "5ba60e62c926cdecbadbabc3848ad608a05420620f6da42a3d9036473774ae7c",
                "alphaMass": 281458
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 2.0834418402777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-900-frame-15.png",
                "sha256": "da1ef8d2e914b3aa3b6fa9e62417dda525c3a5cb6035a3cedfe74776abdc0435",
                "alphaMass": 281174
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-900-frame-100.png",
                "sha256": "2d072260d2e679505dd5a0d5c697700614a0f9a0044aeee67092836747255aeb",
                "alphaMass": 281458
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-900-frame-792.png",
                "sha256": "5ba60e62c926cdecbadbabc3848ad608a05420620f6da42a3d9036473774ae7c",
                "alphaMass": 281458
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/9x16-duration-900-frame-899.png",
                "sha256": "5ba60e62c926cdecbadbabc3848ad608a05420620f6da42a3d9036473774ae7c",
                "alphaMass": 281458
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 111,
            "averageChannelDifference": 1.7667100694444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-111-frame-13.png",
                "sha256": "b2a3789b22492e9276fcfaad67216cf07033a802bb35e7dc05a89f00680f127f",
                "alphaMass": 350146
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-111-frame-100.png",
                "sha256": "b5e88967fd01db6061b1d8e289b18691b5712951e1f673d6c8eaacbbd12d67a8",
                "alphaMass": 350873
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-111-frame-97.png",
                "sha256": "15b797137b7d462a46b4aab08ec51feda0f2dedd08b4ef8c1bc32126cfb956b2",
                "alphaMass": 350873
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-111-frame-110.png",
                "sha256": "15b797137b7d462a46b4aab08ec51feda0f2dedd08b4ef8c1bc32126cfb956b2",
                "alphaMass": 350873
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.7435980902777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-900-frame-15.png",
                "sha256": "d7ca9c62a8bad95215b1d90d71b2f3406dd185673c3ec180b659421ef9122dd0",
                "alphaMass": 350264
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-900-frame-100.png",
                "sha256": "b5e88967fd01db6061b1d8e289b18691b5712951e1f673d6c8eaacbbd12d67a8",
                "alphaMass": 350873
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-900-frame-792.png",
                "sha256": "15b797137b7d462a46b4aab08ec51feda0f2dedd08b4ef8c1bc32126cfb956b2",
                "alphaMass": 350873
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/command-palette-action/1x1-duration-900-frame-899.png",
                "sha256": "15b797137b7d462a46b4aab08ec51feda0f2dedd08b4ef8c1bc32126cfb956b2",
                "alphaMass": 350873
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
        "note": "A command palette takes a typed command and confirms the result."
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
      "bundleSha256": "45fbbdc4508b136268c7ddc8e8231e342a803347e671ec3b65eb4bfd27e90a4f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.948779Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/command-palette-action/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/command-palette-action/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/command-palette-action/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "a02929c61289f957aa2e31982aaa053ea3dcb3424d209c5d5ec0476230c30ee4",
        "loop": "74d9e23eef8524b500014146b71f9a36d1c341ee24a22b99c804f2f7a3eb87a5",
        "detail": "29635f4ab6ffd3c9a825ff43a95099caa8996ba27a09ba610515ea90c7c284db"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/command-palette-action/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/command-palette-action/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/command-palette-action/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4559ac3e2fe76ce6570e5203f72a11f7e9d6d73f3a9f80387ca2c7c23323a56b",
        "loop": "9c186849caf29eedf825b8bd735f34a5cb706c7fff83a532e426e1b00faf0850",
        "detail": "131580e9f8609cfc94534aa4a8c7ef83e5357e8106bbe69f427b7e0f9129a29f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/command-palette-action/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/command-palette-action/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/command-palette-action/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "66e5edc264a4be38352f2b1243fe0cec9aa1a60d8ebfc5eb800f0afc8188d799",
        "loop": "ff7cd8527a22ccf43a60f8ee18c9b73a0b12baa0f6d81c50ba904a3e5f7a3ad0",
        "detail": "029ab6adb05d2f692445467178fed3dada98193c58b0d74cbfbfff8afedb2fb7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/45fbbdc4508b136268c7ddc8e8231e342a803347e671ec3b65eb4bfd27e90a4f/index.mjs",
    "sha256": "45fbbdc4508b136268c7ddc8e8231e342a803347e671ec3b65eb4bfd27e90a4f",
    "bytes": 162583,
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
    "at": "2026-10-07T02:23:14.250Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
