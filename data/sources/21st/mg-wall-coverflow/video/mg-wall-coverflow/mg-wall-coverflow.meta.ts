// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "glass",
  "mechanic": [
    "coverflow-rotate"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "coverflow-rotate",
    "coverflow",
    "carousel",
    "3d"
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
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 36,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "coverflow-rotate",
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
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#C6C8CC",
    "paper": "#17191C",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "lumen / templates",
    "title": "Start from something beautiful",
    "caption": "200+ templates for every kind of team"
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
      "brand": "fonts.display"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 36,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "caption"
    }
  ],
  "name": "3D Card Coverflow",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-coverflow",
    "bundleSha256": "746814dd1e3ae18d257f1489925f498511e6e023a5b2923aa2f4f1efa5ea2dc3",
    "sourceSnapshot": {
      "sha256": "bd0571795d45f9edea3553b2a58e602336f06e31959aac985acb5f770a91fdae",
      "files": 1757
    },
    "renderedAt": "2026-10-09T05:12:58.995Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-paper.png",
        "sha256": "c5393946dc91b40b44bb8a829b74efdf862307a854163030bf00489e06984809"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-night.png",
        "sha256": "949a845638bc3c449e226e210b4f0005c6e7b5a49bdb3a7f1f2eb41a4dbdc59c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-color.png",
        "sha256": "8dbd93c9a98c634bcba6beb4283ec737f63989175a135b4cb03c418885f00d7e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-paper.png",
        "sha256": "1e701ace3c614b1e7106cbf6ee3f00993a1249a74ba34301f1e15fff4945e4b1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-night.png",
        "sha256": "c1353160b69455870b6f6ea44de0dc4ad44b2cdf37de2294b740c1ba63af0329"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-color.png",
        "sha256": "fe55331621552c9ebc1d13536fd4830bf44185b32560058ed2bd934bf2969900"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-paper.png",
        "sha256": "4cb5c09e0c948141e0c445e7a354bf27b9241ed799af800b52f670d2c8eb9d23"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-night.png",
        "sha256": "888d0025ab5801e389d4ebf32c611af8595bf35b90e49a1cdc1bc840b3ddb4d3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-color.png",
        "sha256": "88587e11548e31c8c67100217c2ad4384c447f93518203b0df08cc6071e2c525"
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
          "mg-wall-coverflow--16x9",
          "mg-wall-coverflow--9x16",
          "mg-wall-coverflow--1x1"
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
            "paperNight": 10.461968315972221,
            "paperColor": 5.400037977430555,
            "region": {
              "left": 271,
              "top": 64,
              "width": 1377,
              "height": 965
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 27.704210069444443,
            "paperColor": 10.857259114583334,
            "region": {
              "left": 0,
              "top": 168,
              "width": 1080,
              "height": 1669
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.924886067708334,
            "paperColor": 6.954237196180555,
            "region": {
              "left": 0,
              "top": 75,
              "width": 1080,
              "height": 965
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
            "occupancy": 0.9063097895408165,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9072509212018143,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.908192052862812,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2297453703703707,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2312216553287985,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2319597978080123,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2650121777105907,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.266324431006971,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.266324431006971,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.800889756944445,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.801215277777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-90-frame-10.png",
                "sha256": "8fbb8d038b1f7e217b42b4e4767c2f4789995831fc5d6ef57ad2466c8ce76238",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-90-frame-89.png",
                "sha256": "a7ec135783e4c05d1848015f43948da1a478cde0c91d8396cb1a42709a1441f7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-90-frame-79.png",
                "sha256": "a7ec135783e4c05d1848015f43948da1a478cde0c91d8396cb1a42709a1441f7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.800889756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-900-frame-13.png",
                "sha256": "f1893b88da8675ab7e48308d9fa21966fda66288422a456966774ee215625f09",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-900-frame-90.png",
                "sha256": "f407345de1854ca5d75cbd78df4e88ac2104c7e4d4932c2c815851fd0b2152f4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-900-frame-792.png",
                "sha256": "a7ec135783e4c05d1848015f43948da1a478cde0c91d8396cb1a42709a1441f7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/16x9-duration-900-frame-899.png",
                "sha256": "a7ec135783e4c05d1848015f43948da1a478cde0c91d8396cb1a42709a1441f7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.986979166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-90-frame-10.png",
                "sha256": "23f2b677615b4debe30458e58c98f988f4e324086d5ffe6d899dd39256e4b974",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-90-frame-89.png",
                "sha256": "4bccfdc4d53c22bea9325b08da25285bbbead5a7102cb5b987610c40339afeae",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-90-frame-79.png",
                "sha256": "4bccfdc4d53c22bea9325b08da25285bbbead5a7102cb5b987610c40339afeae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 12.9853515625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-900-frame-13.png",
                "sha256": "4b54fb1c10748f232abf9a04a728346fc7fc7c94ac323dd1ca44e5e76b9ef0ed",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-900-frame-90.png",
                "sha256": "f2ff0a2521d991f162175f8083bd88dea8262352ede8a5b1617be1042f52f9a7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-900-frame-792.png",
                "sha256": "f2ff0a2521d991f162175f8083bd88dea8262352ede8a5b1617be1042f52f9a7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/9x16-duration-900-frame-899.png",
                "sha256": "f2ff0a2521d991f162175f8083bd88dea8262352ede8a5b1617be1042f52f9a7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 17.33572048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-90-frame-10.png",
                "sha256": "a5a636073302e073d7a4afeacccd585292ccf37a93573732de081a0b5976a95e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-90-frame-89.png",
                "sha256": "5dea598b5dd481227d7731eb7604fd2ee6f871a1a6d237746f3a2fe827e4ea13",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-90-frame-79.png",
                "sha256": "5dea598b5dd481227d7731eb7604fd2ee6f871a1a6d237746f3a2fe827e4ea13",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 17.33550347222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-900-frame-13.png",
                "sha256": "8ff7540a05ce565245bcba92d74088e04bfe38994113b8939ab0ed11c472d8a0",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-900-frame-90.png",
                "sha256": "7deda0e502d8436b0f2ae58c29019d7d7bca5507a035f06d88cbdb733d606cd9",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-900-frame-792.png",
                "sha256": "5dea598b5dd481227d7731eb7604fd2ee6f871a1a6d237746f3a2fe827e4ea13",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cf/mg-wall-coverflow/1x1-duration-900-frame-899.png",
                "sha256": "5dea598b5dd481227d7731eb7604fd2ee6f871a1a6d237746f3a2fe827e4ea13",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Template cards flow in 3D coverflow over a neutral graphite floor and spot; center card brand blue with a cyan orb, coral card reflection no longer turns purple."
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
      "bundleSha256": "746814dd1e3ae18d257f1489925f498511e6e023a5b2923aa2f4f1efa5ea2dc3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T05:13:20.981716Z",
      "basis": "Purple removal pass: neutral floor and spot glow"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/16x9/detail.mp4",
      "bg": "#131517",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "428d14cd9f0ea89fd4877060f891f516fb6ed706aadce7ddf8704e864186f27e",
        "loop": "e1c39ced178bcabf98ed7ff7662ec4016c3f2c4053a87d7a92cf95b5bcf6189a",
        "detail": "74096fb8d8aecebc0be43524fb71816ce286f0b6c8cca398dd8aeaf6a53de01c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/9x16/detail.mp4",
      "bg": "#131517",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a88ded323e1e4641c17eb6e5da224561ff4346e9bc7b5fb68421c0af903ab813",
        "loop": "c6864e754bc144a54f49ec2ee21048f447d83fc3d296b576640c404793406667",
        "detail": "9bb6ea67e033fd6265d3e815a9e01f3dfe7b7a053339dd6d66cff3af057e19ac"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-coverflow/1x1/detail.mp4",
      "bg": "#131517",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d5c31cdcfc387cb77047a0ee1ba7b14571a1364ee27019f7ebdbf49c0d161d03",
        "loop": "35986ed5604878a9475e4025c5fb9b1ef8db6f7e8ba380452c0bb6f685204de8",
        "detail": "3d29668524d6ecd3971702e066fb4f6b0072b8d42e17ed888544d5dfc1fb0e74"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/746814dd1e3ae18d257f1489925f498511e6e023a5b2923aa2f4f1efa5ea2dc3/index.mjs",
    "sha256": "746814dd1e3ae18d257f1489925f498511e6e023a5b2923aa2f4f1efa5ea2dc3",
    "bytes": 180529,
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
    "at": "2026-10-09T05:15:04.802Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
