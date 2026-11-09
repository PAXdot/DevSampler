// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "sketch",
    "hand-drawn",
    "pencil",
    "doodle",
    "wireframe",
    "whiteboard",
    "click",
    "explainer"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 80,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96,
      "doodle": 30,
      "click": 66
    },
    "beats": [
      0,
      30,
      66
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
      "maxChars": 24,
      "lines": 1,
      "role": "title"
    },
    {
      "key": "steps",
      "type": "list",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "handFontFamily": "fonts.accent"
  },
  "motionBeats": [
    {
      "target": "flow",
      "prop": "stroke",
      "from": "0",
      "settledBy": 41,
      "easing": "linear"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-left",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "fill",
      "from": "left",
      "settledBy": 78,
      "easing": "ease"
    },
    {
      "target": "tick",
      "prop": "stroke",
      "from": "0",
      "settledBy": 86,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "outline",
      "settledBy": 96,
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
    "sourceUrl": "21st first-party (pencil-drawn cursor clicks a button on a sketchbook wireframe, 2026-10-07)"
  },
  "job": "cursors",
  "language": "hand-drawn",
  "mechanic": [
    "press"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Launch plan",
    "steps": [
      "Idea",
      "Prototype",
      "Launch"
    ],
    "label": "Ship it",
    "doneLabel": "Shipped!",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#FDE68A",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "handFontFamily": "Caveat"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "title"
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "list",
      "max": 3,
      "role": "label"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 14,
      "role": "label"
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
      "key": "handFontFamily",
      "label": "Hand font family",
      "type": "font",
      "brand": "fonts.accent"
    }
  ],
  "name": "Sketch Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-sketch",
    "bundleSha256": "bff9136e4171e02a1deefbcea60443d62dd057fee9de4b2c63857c56f2b64523",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:44:59.452Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-paper.png",
        "sha256": "bd5393261072e347897c9317c09f27b880b63c91408a20e4f7985f81d6cbc2a9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-night.png",
        "sha256": "5d796f31cf63823af7789cc4f0b0c8347023ceb70215599582fb3630369a833b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-color.png",
        "sha256": "71ab3966853448bdd33efaebfc1ec8830318f5d9484ba5b0368fea8e50e4ef2e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-paper.png",
        "sha256": "3bf4522686540fc5bbd39e34b9e15641843f602c99af0b5106864da7ef7a8f10"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-night.png",
        "sha256": "20d81982edb891549aba81124b8a7bc11b047d568900c2aed7419db028a9e15a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-color.png",
        "sha256": "5f46608faf5af1818683280d46d799f2df7f3b73197d3753efb6c969484c97df"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-paper.png",
        "sha256": "42fed93291a8a33308e8cb301feb62d9e066bfdfcaab84643d3a8a832f1019f6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-night.png",
        "sha256": "8d4d13f7b95e1b91e3a63e6a6a841a0028d6531ab2f9ad608df3fb9d0f65c228"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-color.png",
        "sha256": "4ec0c37818f73f09cce2c037946c1153f69e01079f9cfab0669af8ad8a2b8250"
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
          "cursor-sketch--16x9",
          "cursor-sketch--9x16",
          "cursor-sketch--1x1"
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
            "paperNight": 121.95912000868056,
            "paperColor": 16.530517578125,
            "region": {
              "left": 296,
              "top": 106,
              "width": 1328,
              "height": 944
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 121.05555555555556,
            "paperColor": 15.855767144097221,
            "region": {
              "left": 15,
              "top": 179,
              "width": 1050,
              "height": 1638
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 117.27951388888889,
            "paperColor": 17.78740776909722,
            "region": {
              "left": 15,
              "top": 85,
              "width": 1050,
              "height": 987
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
            "occupancy": 0.8069824669837072,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8568139189832313,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8069824669837072,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1082115780983177,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1754918981481484,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1082115780983177,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1759928022420676,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2592163923182444,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1759928022420676,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.7763671875,
        "frames": [
          14,
          96,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 80,
            "averageChannelDifference": 4.840277777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-80-frame-9.png",
                "sha256": "891d2e10e68f634de112c3f59e14d58370ce603fc4f0faf78f79c083e1f7201b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-80-frame-79.png",
                "sha256": "130809e6cf33afab39636b1f4510493ed5b6170b8508840a3f692ac75edfe27c",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-80-frame-70.png",
                "sha256": "130809e6cf33afab39636b1f4510493ed5b6170b8508840a3f692ac75edfe27c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.7763671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-600-frame-14.png",
                "sha256": "bfe4bb4cf7daa3e0612c9f6b12e00d68663017841942670918607386f2b4e3b5",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-600-frame-96.png",
                "sha256": "130809e6cf33afab39636b1f4510493ed5b6170b8508840a3f692ac75edfe27c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-600-frame-528.png",
                "sha256": "130809e6cf33afab39636b1f4510493ed5b6170b8508840a3f692ac75edfe27c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/16x9-duration-600-frame-599.png",
                "sha256": "130809e6cf33afab39636b1f4510493ed5b6170b8508840a3f692ac75edfe27c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 80,
            "averageChannelDifference": 7.815321180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-80-frame-9.png",
                "sha256": "12127e84b8a6bbc5d08b06fbeabd2afd79135c67f34439bdbb754294aed4ae03",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-80-frame-79.png",
                "sha256": "65ae54925661480fa38549065bbe15cdad91b113c42a62e62fe0ab77c92039ee",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-80-frame-70.png",
                "sha256": "65ae54925661480fa38549065bbe15cdad91b113c42a62e62fe0ab77c92039ee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.732421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-600-frame-14.png",
                "sha256": "1b8bb20206a6543ae264f0f89ec29ac0a390079a03ca02355043c3edb9357523",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-600-frame-96.png",
                "sha256": "65ae54925661480fa38549065bbe15cdad91b113c42a62e62fe0ab77c92039ee",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-600-frame-528.png",
                "sha256": "65ae54925661480fa38549065bbe15cdad91b113c42a62e62fe0ab77c92039ee",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/9x16-duration-600-frame-599.png",
                "sha256": "65ae54925661480fa38549065bbe15cdad91b113c42a62e62fe0ab77c92039ee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 80,
            "averageChannelDifference": 8.47341579861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-80-frame-9.png",
                "sha256": "e3dd1a8fc1c4581e6050813a3366f1fc3ce7a7382b693994f36da3c54d246f12",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-80-frame-79.png",
                "sha256": "d9a7264eb8af1d093bf484632c7d5d5d123b02f808c7128806fb92ad977225a3",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-80-frame-70.png",
                "sha256": "d9a7264eb8af1d093bf484632c7d5d5d123b02f808c7128806fb92ad977225a3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.378255208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-600-frame-14.png",
                "sha256": "c363048a0c900ce2b839b6e9bd6378ec3d1c39d72dd655f7cbfa22aae94336e9",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-600-frame-96.png",
                "sha256": "d9a7264eb8af1d093bf484632c7d5d5d123b02f808c7128806fb92ad977225a3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-600-frame-528.png",
                "sha256": "d9a7264eb8af1d093bf484632c7d5d5d123b02f808c7128806fb92ad977225a3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-sketch/1x1-duration-600-frame-599.png",
                "sha256": "d9a7264eb8af1d093bf484632c7d5d5d123b02f808c7128806fb92ad977225a3",
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
        "note": "A pencil-drawn wobbly cursor clicks a sketchy Shipped button on a hand-drawn launch plan."
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
      "bundleSha256": "bff9136e4171e02a1deefbcea60443d62dd057fee9de4b2c63857c56f2b64523",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.292Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-sketch/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-sketch/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-sketch/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "252e6e7987a3defaeafba410a117643215f583bebc073780c2746a8756261cce",
        "loop": "61d2d68f97da2fd785a1e33c73247f01813ecf399d74c38710ace1cba3f23e1c",
        "detail": "7640d5bdd0d3496330bf2a996ca4a3888b6973ac82fffd98de35003124b270dc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-sketch/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-sketch/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-sketch/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "84c411d5c69fcb55dc20d785a288c093ec1be5049d30e3d04e85a6ba92f0ea0d",
        "loop": "9d7a37eae2eb7a5f07f761463cd5162809dbfb016a92d09ffd63a49281d279c3",
        "detail": "b14654cf48315a8c40370111dff2340cb3e2ea141065ddb00f70e4b6161d0050"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-sketch/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-sketch/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-sketch/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "13b09bf5438e480368a2811d5207986210637c8e5b1dc266e5e2076777880e6c",
        "loop": "d21411fee3509d2ba426f19d0cd080718c33ab5c381f0f8381a632c4d4b9d3d6",
        "detail": "7ba779a73175100ea21c437f98e2df57d0f6393dac78970d3a3113b98d5307f3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bff9136e4171e02a1deefbcea60443d62dd057fee9de4b2c63857c56f2b64523/index.mjs",
    "sha256": "bff9136e4171e02a1deefbcea60443d62dd057fee9de4b2c63857c56f2b64523",
    "bytes": 172343,
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
    "at": "2026-10-08T00:08:22.093Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
