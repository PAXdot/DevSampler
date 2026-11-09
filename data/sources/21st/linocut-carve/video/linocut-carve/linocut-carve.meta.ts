// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "hand-drawn",
  "mechanic": [
    "carving"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "linocut",
    "printmaking",
    "relief print",
    "carving",
    "ink",
    "handmade",
    "paper",
    "craft",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 222,
      "min": 211,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 209,
      "out": 0
    },
    "markers": {
      "settled": 209,
      "carve": 12,
      "roll": 100,
      "paper": 137,
      "burnish": 150,
      "pull": 167,
      "caption": 193
    },
    "beats": [
      0,
      12,
      60,
      100,
      137,
      150,
      167,
      193
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "lino block",
      "prop": "scale",
      "from": "1.05, faded",
      "settledBy": 16,
      "easing": "ease"
    },
    {
      "target": "gouge strokes",
      "prop": "carve",
      "settledBy": 96,
      "easing": "ease"
    },
    {
      "target": "brayer",
      "prop": "position",
      "from": "block start",
      "settledBy": 137,
      "easing": "ease"
    },
    {
      "target": "paper",
      "prop": "rotateX",
      "from": "0deg, face down",
      "settledBy": 199,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "write-on",
      "settledBy": 209,
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
      222
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (gouges carve echo lines around the logo in a lino block, a brayer inks it, a print is pulled, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Introducing",
    "primary": "#FFB703",
    "secondary": "#FB5607",
    "color": "#F5EEF8",
    "background": "#130B1A",
    "density": 1,
    "grain": true,
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 32,
      "role": "subline"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.7,
      "max": 1.4
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Linocut Carve",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "linocut-carve",
    "bundleSha256": "9beb57d1a57b0617a2dffa84972046e02fedd68903044ae9ddfab762a48a8d5b",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T08:04:15.273Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-paper.png",
        "sha256": "2a5b5b5a50a54fe42e10f3f7db1b6483fdf1ee267f2ad9cf37e74197365f3036"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-night.png",
        "sha256": "d0d731f87bfbd6c827d132b54dbad41c32ff2279912e4332d1e880678b64ef5f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-color.png",
        "sha256": "92a2b55a7d0dc1012960b23673eb75322bd0da23deff69db06c71ac465a3fde6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-paper.png",
        "sha256": "b287aad3c3387ec53fdf8bee4e309599f337c0c449f86444bc7cb508364c748c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-night.png",
        "sha256": "58ac60839f2230a3d33e63f7602c37b35704d39d92ccc2657ddbf20116507084"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-color.png",
        "sha256": "de9fbbb669d70317ae72f04107744e226d59707654ff45a77a63584d0cdaeac2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-paper.png",
        "sha256": "62f22e39ee5b98b2a0693098125ac93736524d0b882bb58cff4075982f1ca2e4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-night.png",
        "sha256": "0c83b724a943f66e2d9e6e1b810c9378d8aeb0350afb5c1ff7c7b6ce55811a45"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-color.png",
        "sha256": "47935ea94b97113619c47bb67d3825c777448d5c90be1a09fa8b5de1fefcb641"
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
          "linocut-carve--16x9",
          "linocut-carve--9x16",
          "linocut-carve--1x1"
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
            "paperNight": 106.27994791666667,
            "paperColor": 9.833197699652779,
            "region": {
              "left": 469,
              "top": 130,
              "width": 983,
              "height": 847
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 100.96443684895833,
            "paperColor": 11.830322265625,
            "region": {
              "left": 49,
              "top": 316,
              "width": 983,
              "height": 1320
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 103.20027669270833,
            "paperColor": 11.214545355902779,
            "region": {
              "left": 142,
              "top": 141,
              "width": 796,
              "height": 824
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
            "occupancy": 0.546761954846239,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.569053857718499,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.546761954846239,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8494543650793652,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8868371808599985,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8494543650793652,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.761918564865361,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7969557278787145,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.761918564865361,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.978624131944445,
        "frames": [
          26,
          209,
          221
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 211,
            "averageChannelDifference": 7.932725694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-211-frame-25.png",
                "sha256": "26c14fc89208fa780cc3235eeacf57d1005577f601bc13b9d3059857d33804a7",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-211-frame-209.png",
                "sha256": "a066651112ee54cbd1adacecc1397850409d61af66c16efafb3d98c500fb01c3",
                "alphaMass": 587520
              },
              {
                "frame": 185,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-211-frame-185.png",
                "sha256": "19fb7420e9e82f532756ab860ee1f2fafc3c0f5bda6c2982c8afd24af9de0e6b",
                "alphaMass": 587520
              },
              {
                "frame": 210,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-211-frame-210.png",
                "sha256": "a066651112ee54cbd1adacecc1397850409d61af66c16efafb3d98c500fb01c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.974500868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 31,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-600-frame-31.png",
                "sha256": "77775d3be8915dfd60f1f4f3571a6f262f259bac0ac9831d93504760cf880729",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-600-frame-209.png",
                "sha256": "a066651112ee54cbd1adacecc1397850409d61af66c16efafb3d98c500fb01c3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-600-frame-528.png",
                "sha256": "a066651112ee54cbd1adacecc1397850409d61af66c16efafb3d98c500fb01c3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/16x9-duration-600-frame-599.png",
                "sha256": "a066651112ee54cbd1adacecc1397850409d61af66c16efafb3d98c500fb01c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 211,
            "averageChannelDifference": 14.312391493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-211-frame-25.png",
                "sha256": "a2b60df942aad6aa3f70d3da8d06f276179efb1a3eb9cb074219e4f6178991c2",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-211-frame-209.png",
                "sha256": "2737c223ebc3bf598947eb8ee62711fb72b7632cf075a80c02f6256bcd621c56",
                "alphaMass": 587520
              },
              {
                "frame": 185,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-211-frame-185.png",
                "sha256": "b0098c470924e2193b69415f93064c8aadbb20c7dc7da1fde4aa9ce911d731f2",
                "alphaMass": 587520
              },
              {
                "frame": 210,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-211-frame-210.png",
                "sha256": "2737c223ebc3bf598947eb8ee62711fb72b7632cf075a80c02f6256bcd621c56",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 14.423394097222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 31,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-600-frame-31.png",
                "sha256": "966cdf5b69bb5e5e0556dc12e53dd9e95eeeea395fca66e49e088a55a60cf061",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-600-frame-209.png",
                "sha256": "2737c223ebc3bf598947eb8ee62711fb72b7632cf075a80c02f6256bcd621c56",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-600-frame-528.png",
                "sha256": "2737c223ebc3bf598947eb8ee62711fb72b7632cf075a80c02f6256bcd621c56",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/9x16-duration-600-frame-599.png",
                "sha256": "2737c223ebc3bf598947eb8ee62711fb72b7632cf075a80c02f6256bcd621c56",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 211,
            "averageChannelDifference": 11.75802951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-211-frame-25.png",
                "sha256": "56cf4b7cc672f9abbdc8e57689cbbca30c6635909a3a731fc4d154ff00c32ff0",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-211-frame-209.png",
                "sha256": "adb64e91e3914ca15f45574cffbd1937e6a17dbb8554cfc542534fb822e4a391",
                "alphaMass": 587520
              },
              {
                "frame": 185,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-211-frame-185.png",
                "sha256": "36e55d990652d7aa73ef66056ffc3e4ad041fd10cf9ecf53e5ae6813ae8c6258",
                "alphaMass": 587520
              },
              {
                "frame": 210,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-211-frame-210.png",
                "sha256": "adb64e91e3914ca15f45574cffbd1937e6a17dbb8554cfc542534fb822e4a391",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.996744791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 31,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-600-frame-31.png",
                "sha256": "63c915434b2e8ed4ed1e9d8b5ad62dbe81ab7a2ee4f327eb39fc21a86224520d",
                "alphaMass": 587520
              },
              {
                "frame": 209,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-600-frame-209.png",
                "sha256": "adb64e91e3914ca15f45574cffbd1937e6a17dbb8554cfc542534fb822e4a391",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-600-frame-528.png",
                "sha256": "adb64e91e3914ca15f45574cffbd1937e6a17dbb8554cfc542534fb822e4a391",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/linocut-carve/1x1-duration-600-frame-599.png",
                "sha256": "adb64e91e3914ca15f45574cffbd1937e6a17dbb8554cfc542534fb822e4a391",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The sequence directly supports the title 'Linocut Carve.' The first motion sample (second image) shows the carved-out pattern on a brown surface resembling a linoleum block, followed by the inked impression with expressive, irregular 'carved' lines, consistent with the look of linocut prints. The effect is visually explained, not just labeled.\n2. NoBakedHeading: There are no decorative or unexplained block titles/labels baked into the artwork. The only visible text, 'Introducing,' aligns with the named slot content and appears in a logical spot beneath the image as a caption, not as a decorative overlay or heading within the art.\n3. BrandAdherence: The last three images display the same design under three distinct palette conditions (light, dark, and color-accented). In each, the main carved/inked pattern and caption remain clear and visibly adapt to the specified backgrounds and ink colors, demonstrating palette compliance. No unexplained fixed colors remain; shapes and structure are properly preserved.\n4. LanguageAdherence: Across all palette variants, materials maintain a hand-drawn, irregular, linocut texture with expressive stroke work. The irregular linework and manual impression match the language card's notes on material, type, and motion. The caption's position, type role, and visual treatment persist consistently, as does the static, flat drawing surface. Therefore, all visible images effectively follow the language card's parameters."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 16,
        "compared": 16,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9beb57d1a57b0617a2dffa84972046e02fedd68903044ae9ddfab762a48a8d5b",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.549Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/linocut-carve/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/linocut-carve/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/linocut-carve/16x9/detail.mp4",
      "bg": "#0d0711",
      "posterFrame": 209,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 222,
      "sha256": {
        "poster": "30d94c73dd123301f965267dc235a7abfd87fb0adea3844fbead5f2d1f3bc54a",
        "loop": "a9f0744ed5b98893adf16c4d96cf5d10d4cdeed5c7951a5fc6b36f857682925f",
        "detail": "036fb811da2913d1d01847a4774b2f99cd7358cdd2c1341212ce8205f96af7fe"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/linocut-carve/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/linocut-carve/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/linocut-carve/9x16/detail.mp4",
      "bg": "#0d0711",
      "posterFrame": 209,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 222,
      "sha256": {
        "poster": "9860bbc953c1b363a13ed84af2f6ad89529add30fcb1223de42336b9ef4b570c",
        "loop": "30c6071690cd69ac6d87269d9af954a10a896d08843dc70e772bbdc8a9130d48",
        "detail": "9e94192b9db9c502c6e0507488fb2273ff49fa9d13dc0c72843ffc5bd7f921d5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/linocut-carve/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/linocut-carve/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/linocut-carve/1x1/detail.mp4",
      "bg": "#0d0711",
      "posterFrame": 209,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 222,
      "sha256": {
        "poster": "be65e0ad9371869b18be2357cc40a76e0f3763c9a5f5b6d5e6a411b59292b6eb",
        "loop": "86e0e0ea3d14562fd9b87c60ec997588ae9f9713f5b277c0258ae2d38c736585",
        "detail": "03e059c8502290f3038010c046ffcbcded246bffe869506ca5ba27c73513131d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9beb57d1a57b0617a2dffa84972046e02fedd68903044ae9ddfab762a48a8d5b/index.mjs",
    "sha256": "9beb57d1a57b0617a2dffa84972046e02fedd68903044ae9ddfab762a48a8d5b",
    "bytes": 187465,
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
    "at": "2026-10-09T09:08:40.578Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
