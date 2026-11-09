// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "release-card-cascade"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "release-card-cascade",
    "changelog",
    "releases",
    "versions"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "titleAccent",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 64,
      "role": "body"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "release-card-cascade",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#E8ECF1",
    "accent": "#46DCA0",
    "secondary": "#A7F3D0",
    "paper": "#0F1317",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "lumen.app/changelog",
    "title": "What's new",
    "titleAccent": "in Lumen",
    "sub": "Shipped every week. Here is the last month, from the newest."
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
      "brand": "fonts.serif"
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
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "titleAccent",
      "label": "Title accent",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 64,
      "role": "body"
    }
  ],
  "name": "Release Notes Cascade",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-changelog",
    "bundleSha256": "bbe463e0b102bc6e56e92b7527e527f56d13788810ac29f28cddb4ff9321c469",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:22.566Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-paper.png",
        "sha256": "f67af4b21eae5e4e2725d520bb2183d4ba84db2243fd21416ebfa8f802c8b9a6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-night.png",
        "sha256": "d11dcf9fc3d6791530783c0b916fac22860d10e656a595f8a394700dfe984380"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-color.png",
        "sha256": "68ebbb36e14f4632e17c2cc1bd5e627b757ed8db54edd7897ea082732abf98af"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-paper.png",
        "sha256": "ec772a1685c99d4a462ced8195bf8455bbb3aa234c5506f090d8ff44f617e860"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-night.png",
        "sha256": "1c577b0bc506f0bf1956fa63840b7c3fb7070af0415b72a68460ded49b98184d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-color.png",
        "sha256": "82159a3e3b89d91f1864cee34dc16df7cfe4d5204e6b6bde614434e58f8697ad"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-paper.png",
        "sha256": "7581fa1de190cdd454dbbf20e2ddd13f867b2e82f9c3c0ae3d1c1993281e468c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-night.png",
        "sha256": "1de4542b3590b072c4a025e31d0ef42da7c4718756c75e1c7a1c3ba8b256cafd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-color.png",
        "sha256": "8f5378f64771880b588a5f62dd69bdc243116fd41e72b14a9fab8568e0d86bef"
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
          "mg-wall-changelog--16x9",
          "mg-wall-changelog--9x16",
          "mg-wall-changelog--1x1"
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
            "paperNight": 16.305528428819443,
            "paperColor": 5.702202690972222,
            "region": {
              "left": 104,
              "top": 93,
              "width": 1769,
              "height": 906
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 35.489176432291664,
            "paperColor": 13.872721354166666,
            "region": {
              "left": 79,
              "top": 158,
              "width": 956,
              "height": 1602
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.014729817708332,
            "paperColor": 6.773057725694445,
            "region": {
              "left": 74,
              "top": 71,
              "width": 973,
              "height": 985
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
            "occupancy": 1.0953993383618883,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0953993383618883,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0953993383618883,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0447750666624678,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0460818522367796,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0441216738753116,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1621448848172102,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1645093708493917,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1645093708493917,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.3349609375,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.429144965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-90-frame-10.png",
                "sha256": "91d66f756cd9f19fa44050453b8cd1e57a5d6ea71af8396df5bfb0cf8efc7911",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-90-frame-89.png",
                "sha256": "e049cef16b5bfebf437be36444775cddf349d57ec5bbac5bb4e7587205cb799d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-90-frame-79.png",
                "sha256": "e049cef16b5bfebf437be36444775cddf349d57ec5bbac5bb4e7587205cb799d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.3349609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-900-frame-13.png",
                "sha256": "f168b8a1c15f425f83ebbc558c0fd2a29d6cbb16dbfe1b2d8203fe9893780904",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-900-frame-90.png",
                "sha256": "e049cef16b5bfebf437be36444775cddf349d57ec5bbac5bb4e7587205cb799d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-900-frame-792.png",
                "sha256": "e049cef16b5bfebf437be36444775cddf349d57ec5bbac5bb4e7587205cb799d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/16x9-duration-900-frame-899.png",
                "sha256": "e049cef16b5bfebf437be36444775cddf349d57ec5bbac5bb4e7587205cb799d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.757052951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-90-frame-10.png",
                "sha256": "e5eba80752f3f03db151e8fa382c26c9c4017c4008b53ebe03143b73e15ebdc5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-90-frame-89.png",
                "sha256": "a72bbdc5a94433b87a4295e9994d341d056c20b650ef2d04f11c0a4d0356b0ff",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-90-frame-79.png",
                "sha256": "a72bbdc5a94433b87a4295e9994d341d056c20b650ef2d04f11c0a4d0356b0ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.580837673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-900-frame-13.png",
                "sha256": "ce6d8ea14008cc6ffdcaedafd427bcb3a5759a4652280c2ae559cb1dc9af12b9",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-900-frame-90.png",
                "sha256": "a72bbdc5a94433b87a4295e9994d341d056c20b650ef2d04f11c0a4d0356b0ff",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-900-frame-792.png",
                "sha256": "a72bbdc5a94433b87a4295e9994d341d056c20b650ef2d04f11c0a4d0356b0ff",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/9x16-duration-900-frame-899.png",
                "sha256": "a72bbdc5a94433b87a4295e9994d341d056c20b650ef2d04f11c0a4d0356b0ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.461263020833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-90-frame-10.png",
                "sha256": "eabc28e6f3abc6981782a9973ff7d69ab9a3f8dcd0a88fb94e9278554c45114e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-90-frame-89.png",
                "sha256": "86d52d268aae1b0f7f73f43a095f4c1d457528c6455006d681453333a56410e2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-90-frame-79.png",
                "sha256": "86d52d268aae1b0f7f73f43a095f4c1d457528c6455006d681453333a56410e2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.255533854166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-900-frame-13.png",
                "sha256": "bba94cf8764d371bdaa04a4d40b1a3b33d29b86cddbc239328b17a15598bff0a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-900-frame-90.png",
                "sha256": "86d52d268aae1b0f7f73f43a095f4c1d457528c6455006d681453333a56410e2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-900-frame-792.png",
                "sha256": "86d52d268aae1b0f7f73f43a095f4c1d457528c6455006d681453333a56410e2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-changelog/1x1-duration-900-frame-899.png",
                "sha256": "86d52d268aae1b0f7f73f43a095f4c1d457528c6455006d681453333a56410e2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Release cards cascade beside a changelog title; readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "bbe463e0b102bc6e56e92b7527e527f56d13788810ac29f28cddb4ff9321c469",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-changelog/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-changelog/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-changelog/16x9/detail.mp4",
      "bg": "#0f1317",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "13edaa2e0762c1c676e12e916fbf8ea289fd731a49999fa7622b05c99a2e7342",
        "loop": "1fd797563b468b656bf88d37aafbad533446679dc055a099ed6c6f7ec9f9a0d9",
        "detail": "58d33d35a38b44c3f92d7732f06cb29504cd64774cacec3f72ef08cc70a634fe"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-changelog/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-changelog/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-changelog/9x16/detail.mp4",
      "bg": "#0f1317",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ec5776a14e1729f4a1c663f69620a39051de373a74e3a1d1f05da03623574f7a",
        "loop": "0e0171fe26c4f44ead28f66023dbe5d9109ba26deb966caa4dfe14b9b582f671",
        "detail": "97820cb6d18732f7a10f022f951f85b219331fb8287e3d4e79fb60c008910b89"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-changelog/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-changelog/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-changelog/1x1/detail.mp4",
      "bg": "#0f1317",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e9f2079bdd70e48f4cdfb48d93baf9b57f3896876bf68da25e3228f59ae4bd12",
        "loop": "973b42f94ed355bd2c9f71ecd3c7db7acd47ff80ae52295aedd60c66ebe45f3c",
        "detail": "263879071ed7da1d170f16b331044d6c841ccb0c7a1e8abe679677c8051dfc35"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bbe463e0b102bc6e56e92b7527e527f56d13788810ac29f28cddb4ff9321c469/index.mjs",
    "sha256": "bbe463e0b102bc6e56e92b7527e527f56d13788810ac29f28cddb4ff9321c469",
    "bytes": 175056,
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
    "at": "2026-10-09T04:10:09.259Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
