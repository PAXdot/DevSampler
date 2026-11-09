// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "zoom",
    "camera",
    "click",
    "dashboard",
    "export",
    "toast",
    "screen recording",
    "product demo"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "zoom": 22,
      "click": 60,
      "toast": 70,
      "pullBack": 86
    },
    "beats": [
      0,
      22,
      60,
      86
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
      "maxChars": 16,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "buttonLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "nav",
      "type": "list",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "rows",
      "type": "list",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "amounts",
      "type": "list",
      "maxChars": 10,
      "lines": 1,
      "role": "number"
    },
    {
      "key": "statuses",
      "type": "list",
      "maxChars": 8,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "toast",
      "type": "text",
      "maxChars": 24,
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
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom",
      "settledBy": 44,
      "easing": "ease"
    },
    {
      "target": "camera",
      "prop": "scale",
      "from": "1",
      "settledBy": 54,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "icon",
      "from": "download",
      "settledBy": 80,
      "easing": "spring"
    },
    {
      "target": "toast",
      "prop": "y",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "camera",
      "prop": "scale",
      "from": "2",
      "settledBy": 116,
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
    "sourceUrl": "21st first-party (camera zooms in on a dashboard click and pulls back, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "camera-follow"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Revenue",
    "buttonLabel": "Export CSV",
    "nav": [
      "Overview",
      "Revenue",
      "Customers",
      "Reports",
      "Settings"
    ],
    "rows": [
      "Acme Inc",
      "Northwind",
      "Globex",
      "Initech",
      "Umbrella",
      "Hooli"
    ],
    "amounts": [
      "$12,400",
      "$8,250",
      "$21,900",
      "$4,120",
      "$16,780",
      "$9,300"
    ],
    "statuses": [
      "Paid",
      "Paid",
      "Due",
      "Paid",
      "Paid",
      "Due"
    ],
    "toast": "revenue.csv exported",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#34D399",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "buttonLabel",
      "label": "Button label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "nav",
      "label": "Nav",
      "type": "list",
      "max": 6,
      "role": "label"
    },
    {
      "key": "rows",
      "label": "Rows",
      "type": "list",
      "max": 6,
      "role": "label"
    },
    {
      "key": "amounts",
      "label": "Amounts",
      "type": "list",
      "max": 6,
      "role": "number"
    },
    {
      "key": "statuses",
      "label": "Statuses",
      "type": "list",
      "max": 6,
      "role": "label"
    },
    {
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 24,
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Zoom Follows the Click",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "zoom-follow",
    "bundleSha256": "6845444f2e263189578ca3058ea6434a536ba9daae9927bf23f713d88008bb68",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:43:16.978Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-paper.png",
        "sha256": "d38d749af0274e75b016ef8ed823a8979b990a8e95fca4768902c84ef750fe50"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-night.png",
        "sha256": "12794ae83a9d9b12aace78153102853629c57de288fd413e301248bbc12cd2f4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-color.png",
        "sha256": "b487dd6abd771bcd6393fbcd10ddf38d2ef15af7d35cfc1a8259d444b03b9870"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-paper.png",
        "sha256": "4f51cd262196c73279a3e978c85e8a2961b4b81063d8db982cf9ad0ac1b5a1bc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-night.png",
        "sha256": "bd39c9cfcd50f54c6d6fec7f2a7422fb8cbdcdd41e10771296758473d115cc5d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-color.png",
        "sha256": "008dfba3c6fe62aaaeaf32a996b76c53aca08a7cebd63b11c50c26b99bce6262"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-paper.png",
        "sha256": "10ade4b0da0cb1c284cbea390c85c411c9fab35699b63ac5629e34bf65353dba"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-night.png",
        "sha256": "ceef15359d84d3ce3e6549eb5e757ed3a252d238fe007418471bcf88e52dfeda"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-color.png",
        "sha256": "f4223bdf21e4fcdaf1665a97e1769fd6f2af6d3f7ac1c7a70abc717bf59815d3"
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
          "zoom-follow--16x9",
          "zoom-follow--9x16",
          "zoom-follow--1x1"
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
            "paperNight": 121.06797960069444,
            "paperColor": 16.51996527777778,
            "region": {
              "left": 141,
              "top": 69,
              "width": 1650,
              "height": 1000
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 114.92835828993056,
            "paperColor": 17.39678276909722,
            "region": {
              "left": 16,
              "top": 171,
              "width": 1048,
              "height": 1695
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 115.41642252604167,
            "paperColor": 18.04644097222222,
            "region": {
              "left": 14,
              "top": 85,
              "width": 1057,
              "height": 994
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
            "occupancy": 1.0427991686000535,
            "bad": [],
            "measured": 26
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1277176765768038,
            "bad": [],
            "measured": 26
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0427991686000535,
            "bad": [],
            "measured": 26
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1313427763080544,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.214080346644831,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1313427763080544,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1682225616584083,
            "bad": [],
            "measured": 26
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.276601318396586,
            "bad": [],
            "measured": 26
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1682225616584083,
            "bad": [],
            "measured": 26
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.9967447916666667,
        "frames": [
          18,
          120,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 1.9967447916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-75-frame-9.png",
                "sha256": "0ec56da03cb85dc14ea23675369bce18030e4d5a263899f30d992d3d19122152",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-75-frame-74.png",
                "sha256": "39ce1bb90b793ad8af5ca47d1c64bc6d4c4473a8e481433c8acee9c7e9081bce",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-75-frame-66.png",
                "sha256": "e78fecdcc716b36948008f9d2d86f490c2cc9b25623088636eddcbff1bd3342f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.9967447916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-600-frame-18.png",
                "sha256": "0ec56da03cb85dc14ea23675369bce18030e4d5a263899f30d992d3d19122152",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-600-frame-120.png",
                "sha256": "39ce1bb90b793ad8af5ca47d1c64bc6d4c4473a8e481433c8acee9c7e9081bce",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-600-frame-528.png",
                "sha256": "39ce1bb90b793ad8af5ca47d1c64bc6d4c4473a8e481433c8acee9c7e9081bce",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/16x9-duration-600-frame-599.png",
                "sha256": "39ce1bb90b793ad8af5ca47d1c64bc6d4c4473a8e481433c8acee9c7e9081bce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 3.3740234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-75-frame-9.png",
                "sha256": "61141e5ec8ae6a4b64da92da51c4700337932f6549556c997ac4bf655a3eea37",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-75-frame-74.png",
                "sha256": "5222b9e33b16be48886c055fbbf266121a9e757ca6a7e54e9349fb411ca76246",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-75-frame-66.png",
                "sha256": "5222b9e33b16be48886c055fbbf266121a9e757ca6a7e54e9349fb411ca76246",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.3740234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-600-frame-18.png",
                "sha256": "61141e5ec8ae6a4b64da92da51c4700337932f6549556c997ac4bf655a3eea37",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-600-frame-120.png",
                "sha256": "5222b9e33b16be48886c055fbbf266121a9e757ca6a7e54e9349fb411ca76246",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-600-frame-528.png",
                "sha256": "5222b9e33b16be48886c055fbbf266121a9e757ca6a7e54e9349fb411ca76246",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/9x16-duration-600-frame-599.png",
                "sha256": "5222b9e33b16be48886c055fbbf266121a9e757ca6a7e54e9349fb411ca76246",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 2.419162326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-75-frame-9.png",
                "sha256": "93b9976e8d9631e3991b80b79f8be158081e4c366610a6f8cd87d9ce92ce21b7",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-75-frame-74.png",
                "sha256": "45e07caa44bac7dc4bab9df923f03d57ae2854bb6929349ccac9bcfdfcf457d5",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-75-frame-66.png",
                "sha256": "45e07caa44bac7dc4bab9df923f03d57ae2854bb6929349ccac9bcfdfcf457d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.419162326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-600-frame-18.png",
                "sha256": "93b9976e8d9631e3991b80b79f8be158081e4c366610a6f8cd87d9ce92ce21b7",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-600-frame-120.png",
                "sha256": "45e07caa44bac7dc4bab9df923f03d57ae2854bb6929349ccac9bcfdfcf457d5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-600-frame-528.png",
                "sha256": "45e07caa44bac7dc4bab9df923f03d57ae2854bb6929349ccac9bcfdfcf457d5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/zoom-follow/1x1-duration-600-frame-599.png",
                "sha256": "45e07caa44bac7dc4bab9df923f03d57ae2854bb6929349ccac9bcfdfcf457d5",
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
        "note": "The camera follows the cursor into a dashboard Export click, a toast confirms, then it pulls back."
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
      "bundleSha256": "6845444f2e263189578ca3058ea6434a536ba9daae9927bf23f713d88008bb68",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.284Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-follow/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-follow/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-follow/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6684a5cbd72a21fd7b5a5848c5e7b2cb3ca3e67040423b466a757805f1e8cfaa",
        "loop": "c41fa22c5732379101e4bda424614d94f2de5586b86aaf71e41b5520f9325f8a",
        "detail": "0e3f1eebc4bd4c8bcb091c5bb0569062f49fb1fd1205b2c671142f17a2874da7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-follow/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-follow/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-follow/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3bc944301903f9816b6a22c30a89674cb18f315c4a50edf756b62bff76da0424",
        "loop": "0f2ac4c1de31418095680af0c10fd51f1d31a6d7cbf459af08d8dce02ab8de3e",
        "detail": "dc0233dce1e8240433a06ed584f9631aa4411d6ad9b5597d69b3811fc1f7f584"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-follow/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-follow/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-follow/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7fbe2694da6e4b18242f565a35b378e25329cbd6016586fe589a2ee81ece9a86",
        "loop": "49ea3a3c27cb8f3279422f8fea4fa36a23f979f068f9806ae5f7dedf29e02a83",
        "detail": "e639a97c734748d0fe03a14c3eb31488384f676dd8a09728100f2749f409e93d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6845444f2e263189578ca3058ea6434a536ba9daae9927bf23f713d88008bb68/index.mjs",
    "sha256": "6845444f2e263189578ca3058ea6434a536ba9daae9927bf23f713d88008bb68",
    "bytes": 183036,
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
    "at": "2026-10-08T00:05:05.149Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
