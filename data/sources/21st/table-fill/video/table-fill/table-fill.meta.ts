// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/table",
  "tags": [
    "table",
    "spreadsheet",
    "data",
    "enrichment",
    "ai",
    "rows",
    "perspective",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 84
    },
    "beats": [
      0,
      18,
      30
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
      "key": "columns",
      "type": "list",
      "role": "label"
    },
    {
      "key": "rows",
      "type": "list",
      "role": "body"
    },
    {
      "key": "workingLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "yesLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "noLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "successColor": "colors.primary",
    "reviewColor": "colors.secondary",
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "table",
      "prop": "blur",
      "from": "8px",
      "settledBy": 12,
      "easing": "ease"
    },
    {
      "target": "cells",
      "prop": "state",
      "from": "empty",
      "settledBy": 76,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V15 perspective table fill)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "draw"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Design partners",
    "columns": [
      "Company",
      "Fit score",
      "Status"
    ],
    "rows": [
      "Northwind",
      "Lumen Labs",
      "Halcyon",
      "Brightpath",
      "Kestrel",
      "Oakline",
      "Ferro Studio"
    ],
    "workingLabel": "Researching",
    "yesLabel": "Qualified",
    "noLabel": "Review",
    "tilt": -12,
    "successColor": "#16A34A",
    "reviewColor": "#D97706",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "background": "#F3F4F7",
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
      "key": "columns",
      "label": "Columns",
      "type": "list",
      "role": "label"
    },
    {
      "key": "rows",
      "label": "Rows",
      "type": "list",
      "max": 8,
      "role": "body"
    },
    {
      "key": "workingLabel",
      "label": "Working label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "yesLabel",
      "label": "Yes label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "noLabel",
      "label": "No label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "type": "number",
      "min": -25,
      "max": 25
    },
    {
      "key": "successColor",
      "label": "Success color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "reviewColor",
      "label": "Review color",
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
  "name": "Table Fill",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "table-fill",
    "bundleSha256": "37673707095435f555faaea8455728b9d43c9a93e5046ae68ce22399d890ca77",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:52.489Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-paper.png",
        "sha256": "afe48fc3bb8f9b03e668d9c2bb4034d79b27e97c0f205eb8d0e8e981b03080ee"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-night.png",
        "sha256": "bdafd32f77d36eaad626fc583fb12ba646d7ff13cf80470ef7c7c05c224ff1bc"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-color.png",
        "sha256": "fa1e5fc43779c8d24613347e97757110947d0a768b2bc7a252cf5537569e59f0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-paper.png",
        "sha256": "02f16065dd8cf8cf14e52048f76bc98f1d79d436594e43535c02bc1c4ff797d2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-night.png",
        "sha256": "a1dda2f3793b18014264661ec104b110862ef30c9a41632504c2e7d0b526606f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-color.png",
        "sha256": "df0b9694d372f9c09062d712c1a7bffc6f721b748ac7e9035036cf63592913ee"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-paper.png",
        "sha256": "7dca0a34cdf443b878b8fcb5375a9723147dca525b9db965922703d3582cf964"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-night.png",
        "sha256": "e321518ce2d8d3b561752a373554289fe6139a97e11914b8cd2e075fbc771275"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-color.png",
        "sha256": "af4f4f5ed791c0540623e89db610060fae1c0e3d4c3e774bf4106bc9807a35f3"
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
          "table-fill--16x9",
          "table-fill--1x1",
          "table-fill--9x16"
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
            "paperNight": 108.77853732638889,
            "paperColor": 13.851752387152779,
            "region": {
              "left": 294,
              "top": 24,
              "width": 1626,
              "height": 1010
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 114.74934895833333,
            "paperColor": 13.255208333333334,
            "region": {
              "left": 81,
              "top": 24,
              "width": 999,
              "height": 1013
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 130.79361979166666,
            "paperColor": 14.47067599826389,
            "region": {
              "left": 7,
              "top": 29,
              "width": 1073,
              "height": 1868
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
            "occupancy": 1.0805073138437475,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1224276554757708,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0805073138437475,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1740584436792552,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2296141450407325,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1740584436792552,
            "bad": [],
            "measured": 32
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3120277528449655,
            "bad": [],
            "measured": 20
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3699131594510234,
            "bad": [],
            "measured": 20
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3120277528449655,
            "bad": [],
            "measured": 20
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.6156684027777777,
        "frames": [
          12,
          84,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.6430121527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-90-frame-10.png",
                "sha256": "f1dae0ae5c8d62278600565e24fa7da9db8a91424a2d2a14ca72be06dc789a37",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-90-frame-84.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-90-frame-79.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-90-frame-89.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.6156684027777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-900-frame-12.png",
                "sha256": "5a4cb16d835756607a714f73128b12c77667d3a041568623f54f7f90591a6cd1",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-900-frame-84.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-900-frame-792.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/16x9-duration-900-frame-899.png",
                "sha256": "1ba14e12e648632f6dc2410ae307585c4901e7f678b683fc11ef035e63747eef",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.5614149305555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-90-frame-10.png",
                "sha256": "7ff0fd86550fe0f8513780684b414344b9e63add19bf013ee5a31285435a12b1",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-90-frame-84.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-90-frame-79.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-90-frame-89.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.5184461805555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-900-frame-12.png",
                "sha256": "bd008eae04fe9579b176a17e77f474f8147cf85779bf8943a10fdcbeb8727ea3",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-900-frame-84.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-900-frame-792.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/1x1-duration-900-frame-899.png",
                "sha256": "d789bbf4630113e88268e63632f87f313fc0991bc14e12bc46289997599a1268",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.128038194444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-90-frame-10.png",
                "sha256": "b8f0c521de471868b87765098b6c17e3a81da2b8de2275e567741d21ce21a9c4",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-90-frame-84.png",
                "sha256": "14d4643001a998c2b9ee28b0e5638a108d2bf971b58406a7818ba0fbe1552573",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-90-frame-79.png",
                "sha256": "0bf2dcf7a320aa705472729478bb3179fa2625ec8454d3bd3aaf8f7ec75ad467",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-90-frame-89.png",
                "sha256": "14d4643001a998c2b9ee28b0e5638a108d2bf971b58406a7818ba0fbe1552573",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.09353298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-900-frame-12.png",
                "sha256": "9a97e046fa9586d563561383ff33428581c7d1cd86fb39835bdfe1dec2b303ca",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-900-frame-84.png",
                "sha256": "14d4643001a998c2b9ee28b0e5638a108d2bf971b58406a7818ba0fbe1552573",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-900-frame-792.png",
                "sha256": "14d4643001a998c2b9ee28b0e5638a108d2bf971b58406a7818ba0fbe1552573",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/table-fill/9x16-duration-900-frame-899.png",
                "sha256": "14d4643001a998c2b9ee28b0e5638a108d2bf971b58406a7818ba0fbe1552573",
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
        "note": "A table of partners fills with scores and statuses; data table UI."
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
      "bundleSha256": "37673707095435f555faaea8455728b9d43c9a93e5046ae68ce22399d890ca77",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.018850Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/table-fill/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/table-fill/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/table-fill/16x9/detail.mp4",
      "bg": "#f3f4f7",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3c3fc2bbff34327804f843d7cf64e86f5525b092a95d714f7fc581861a7e186c",
        "loop": "074a433adf658c8171c7b1e9d9c49a0bc9e1ea2245fded724d9eb55fa165e7cc",
        "detail": "33d37dedfabb534f98ccd761503614f446b7518dec7796ba1aa8daed41259780"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/table-fill/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/table-fill/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/table-fill/1x1/detail.mp4",
      "bg": "#f3f4f7",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "865303a64fadb62f218dd74acf82bc511ee815d9815988d0cf095a39b2323100",
        "loop": "c1f29d63d44d68d11f102f59c6a334eed501907f592364722e56051bcb6b2f12",
        "detail": "6ce31ade4d91456630e973003b2cc048f321e41320701be2b85f07131f5552c2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/table-fill/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/table-fill/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/table-fill/9x16/detail.mp4",
      "bg": "#f3f4f7",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e17ec7811a662b8bdb6c587a426b6a821cb59b2d469c7d175e3e0efd73d9a5b4",
        "loop": "640a10a1687017440e27a6d1769ca778530e3f54e5a8854b9542830824efec07",
        "detail": "c72d803358c4504d8ae808a436e2b181b62cda831abf0bd6434ed3272504f073"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/37673707095435f555faaea8455728b9d43c9a93e5046ae68ce22399d890ca77/index.mjs",
    "sha256": "37673707095435f555faaea8455728b9d43c9a93e5046ae68ce22399d890ca77",
    "bytes": 172609,
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
    "1:1": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:34:46.668Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
