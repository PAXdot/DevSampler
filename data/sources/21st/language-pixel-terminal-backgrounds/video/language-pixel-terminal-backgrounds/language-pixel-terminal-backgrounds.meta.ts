// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "backgrounds/language",
  "job": "backgrounds",
  "language": "pixel-terminal",
  "mechanic": [
    "cell-scan"
  ],
  "looks": [
    {
      "id": "default",
      "name": "Product research example",
      "props": {}
    },
    {
      "id": "alternate",
      "name": "Compact layout",
      "description": "Content or composition changes; palette remains owned by the brand.",
      "props": {
        "density": 4
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "catalog-language",
    "pixel-terminal",
    "backgrounds",
    "cell-scan"
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
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 72
    },
    "beats": [
      0,
      18,
      36,
      54,
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
      "key": "density",
      "type": "number",
      "role": "density"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.mono",
    "bodyFont": "fonts.mono",
    "numeralsFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "cell-scan",
      "prop": "transform",
      "from": "enter",
      "settledBy": 72,
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
    "sourceUrl": "docs/research/video-catalog-2026-10-06/plan.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#898B8F",
    "paper": "#0B0B10",
    "displayFont": "IBM Plex Mono",
    "bodyFont": "IBM Plex Mono",
    "numeralsFont": "IBM Plex Mono",
    "paintBackground": false,
    "motion": "default",
    "density": 7
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
      "brand": "fonts.mono"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "numeralsFont",
      "label": "Numerals font",
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
      "key": "motion",
      "label": "Motion",
      "type": "select",
      "options": [
        "calm",
        "default",
        "punchy"
      ]
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 12,
      "role": "density"
    }
  ],
  "name": "Discrete raster cells step across a terminal grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "language-pixel-terminal-backgrounds",
    "bundleSha256": "382e4ec210635f6ed595ad818e563c05d0f2e7da27019cb1654f7a93af3eb07d",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:37:29.292Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-paper.png",
        "sha256": "778191a185e5eb0227352d1d56f54467f06c79cf9553c20996e26755dc220276"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-night.png",
        "sha256": "81ff1bce45c921a2123644ff5425b3c4413b9c21296096047e8f9a3e995858f5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-color.png",
        "sha256": "159104bb79e97d8cd304276e0db6c684a0d062fc1463c267f475829a9f69e69c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-paper.png",
        "sha256": "6654fe8ea7a3109b3d76dd1fd94a39272e71cfad951bae2a110043f0d59ad6cf"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-night.png",
        "sha256": "7a69163ae31f5ac1a72659f0d9c0977edcdb0eae8367646626fb94d48bad768d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-color.png",
        "sha256": "fd18a35a60730afdf58ea207daa49b936c75be0ba02f18e04463856a0111bd60"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-paper.png",
        "sha256": "53db1b7e6fb1b3c9267f6145fb07f511e4d0e16f2845a3e1fdf3f236404a79ac"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-night.png",
        "sha256": "837b6a8787bff3ddb01ae121b089d1820e29da30ab989d13955dd369d68193cd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-color.png",
        "sha256": "bba24ce708a1a8407c057959420444fd8cde52109e7fa1c9a96555e4ef7a6520"
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
          "language-pixel-terminal-backgrounds--16x9",
          "language-pixel-terminal-backgrounds--9x16",
          "language-pixel-terminal-backgrounds--1x1"
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
            "paperNight": 48.243381076388886,
            "paperColor": 38.130154079861114,
            "region": {
              "left": 154,
              "top": 97,
              "width": 1548,
              "height": 744
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.417453342013886,
            "paperColor": 37.799479166666664,
            "region": {
              "left": 86,
              "top": 173,
              "width": 871,
              "height": 1322
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 53.194797092013886,
            "paperColor": 37.513644748263886,
            "region": {
              "left": 86,
              "top": 97,
              "width": 871,
              "height": 744
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
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 50.875759548611114,
        "frames": [
          10,
          72,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 48.922200520833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-90-frame-10.png",
                "sha256": "3a5296673bf2e188e9e65eb23f64eb424905006762da5e22507d7f134ecb4654",
                "alphaMass": 22097
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-90-frame-72.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-90-frame-79.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-90-frame-89.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 50.875759548611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-900-frame-10.png",
                "sha256": "2d44f7e8641ea0ef0f8904583873c258cbcfe25984e9317ecf390f002e771200",
                "alphaMass": 21037
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-900-frame-72.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-900-frame-792.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/16x9-duration-900-frame-899.png",
                "sha256": "9abba4d8aa202ba985cc91902a966a7281482fb6de419395f3e2836c81f987f8",
                "alphaMass": 86545
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 51.106770833333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-90-frame-10.png",
                "sha256": "8447f87bee4c6de62a0919912d30443e41a8087b0004a6d96df092ee7232c51a",
                "alphaMass": 22491
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-90-frame-72.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-90-frame-79.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-90-frame-89.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 52.66688368055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-900-frame-10.png",
                "sha256": "345c801e7ee037d277f83fdb0421bcb0d99e6697872146edcee948e1700a9f86",
                "alphaMass": 21480
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-900-frame-72.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-900-frame-792.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/9x16-duration-900-frame-899.png",
                "sha256": "3a75d701abef65c58cfaed9b1cbe8d96c8cb10a7cb4ba91eb911a51bc4617542",
                "alphaMass": 86780
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 48.661458333333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-90-frame-10.png",
                "sha256": "43164e2f5da9d914b8b506761e901192983b0f7efc85afc87e18e9162c73614c",
                "alphaMass": 24987
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-90-frame-72.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-90-frame-79.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-90-frame-89.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 50.35687934027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-900-frame-10.png",
                "sha256": "377d867e6b0bef698c4f95f42b773b0d2940ecaf269be5d3f81f0158779d85cb",
                "alphaMass": 24030
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-900-frame-72.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-900-frame-792.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/language-pixel-terminal-backgrounds/1x1-duration-900-frame-899.png",
                "sha256": "8cf1ec3aee676ceeeb26f590a454467e5621f9a744fb4dbaaa206ec10cb84a71",
                "alphaMass": 86726
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Raster cells step across a terminal grid in brand blue on dark."
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
      "bundleSha256": "382e4ec210635f6ed595ad818e563c05d0f2e7da27019cb1654f7a93af3eb07d",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "36011f44c8b0df44c1727dd4201a73bac4ea2612473a369596367234a1ce5d59",
        "loop": "6230c0647030049e2eb7b8e34c06d5ac820d796a5936c56e8d1c058aaf0caf13",
        "detail": "69b625d9f32bd931ada4c715270227868a67394073cf41ceeb15dc0cf43809a1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ea2332b09ac96d343c032c77b991f0ded0e4f217ca7bf774dfb7606a4fe4f01f",
        "loop": "82ae5ebc685867a9ede41208da40600834c43ca55a840b5422489658027f94c2",
        "detail": "d1da408618df335b1e5983299d386b8bce2ca0d626e9f69a05f053ed9b9064d1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-pixel-terminal-backgrounds/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "eae06b5b8f09be10d02e0333589d18af403cc4c7006021bbe091194ea78b629a",
        "loop": "eb98e072d2ceb21bac0e647c945ce9d2d8d9f4dff5acbdd45f943353bd4a9ebe",
        "detail": "eedce81eece774f30f1da52f9dfc59af06030be14b9dc888023bcf03e26d9b32"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/382e4ec210635f6ed595ad818e563c05d0f2e7da27019cb1654f7a93af3eb07d/index.mjs",
    "sha256": "382e4ec210635f6ed595ad818e563c05d0f2e7da27019cb1654f7a93af3eb07d",
    "bytes": 908523,
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
    "at": "2026-10-09T03:18:57.808Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
