// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "tower-bars-rise-counter"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "tower-bars-rise-counter",
    "real-estate",
    "stats",
    "chart"
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
      "key": "eye",
      "type": "text",
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "big",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "cap",
      "type": "text",
      "maxChars": 28,
      "role": "body"
    },
    {
      "key": "trend",
      "type": "text",
      "maxChars": 18,
      "role": "label"
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
      "target": "tower-bars-rise-counter",
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
    "ink": "#F4F1EA",
    "accent": "#FF5B1F",
    "secondary": "#FFCF86",
    "paper": "#121212",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "eye": "Halden in numbers",
    "big": "1,240",
    "cap": "homes sold since 2019",
    "trend": "+23% this year"
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
      "key": "eye",
      "label": "Eye",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "big",
      "label": "Big",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "cap",
      "label": "Cap",
      "type": "text",
      "max": 28,
      "role": "body"
    },
    {
      "key": "trend",
      "label": "Trend",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Skyline Sales Chart",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-skyline",
    "bundleSha256": "0c8ec36e2f9850bf7093bb1b1cbe1929a11ed93210b52920fb1762761d8be800",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:05:21.546Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-paper.png",
        "sha256": "3b63c186dd51c49921fafa30d42ffa51d08904954190c0966eebd59b031aabb3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-night.png",
        "sha256": "baf8cf80b4cc0c27092e53d42644e66fe62e2d5050563ff315c6a03f301ff0a8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-color.png",
        "sha256": "224f5993f9d049aede7ca9215a357e8f48bb64e2b149756c37e2792cb5e00c2f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-paper.png",
        "sha256": "3ef1065b913a203724f77e682598d7f534d988951f5356d881261508d0288c76"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-night.png",
        "sha256": "d6113913854b9247896831576da73d83300cd59316d92ddb67e0bd4899ede3d4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-color.png",
        "sha256": "02b3cd61e4b8149edecae7e13eb62c68e27b66fc60bcf82d107b471655cb91f4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-paper.png",
        "sha256": "830965c7ac1022ca052751d49bd3e95b20c0af26e374deb52dccf148e1bd3e89"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-night.png",
        "sha256": "cd38d7145033ae7a3854bc5f2f9e57a67a524cbb228998e9343801d5922f3dfd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-color.png",
        "sha256": "1bf98d58e1c60a81fcb356a205ae0cd7533ddf617c782dd759e70057bbe6ea1e"
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
          "mg-realty-skyline--16x9",
          "mg-realty-skyline--9x16",
          "mg-realty-skyline--1x1"
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
            "paperNight": 52.694580078125,
            "paperColor": 15.482421875,
            "region": {
              "left": 114,
              "top": 129,
              "width": 1710,
              "height": 839
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 72.16826714409723,
            "paperColor": 23.64450412326389,
            "region": {
              "left": 86,
              "top": 128,
              "width": 907,
              "height": 1672
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 48.88636610243056,
            "paperColor": 14.40768771701389,
            "region": {
              "left": 63,
              "top": 69,
              "width": 952,
              "height": 955
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
            "occupancy": 0.9805607717624089,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9805607717624089,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9799873444105011,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0364777984238964,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0339981864659447,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.025319544613113,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1000473577634073,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1046742656824964,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1023583816242548,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.605360243055555,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.629340277777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-90-frame-10.png",
                "sha256": "ebd020be08bd4dc96c4c8ec118ec4289ecc991b809f01189ef50f927562ff6f3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-90-frame-89.png",
                "sha256": "aa9ed5d7d6ea4adb99a1cbb73b79d0e3ef0f6095bb32ce2e54990acacd2be9f9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-90-frame-79.png",
                "sha256": "b4320c7dcef5d4189fba0b50c22a7d70214753d3169c7cf95818081a97b4d83d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.605360243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-900-frame-13.png",
                "sha256": "76713c803e900a6018fe8d073c67e690536c86fb1e5cfdad0012b4ed846eb9cb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-900-frame-90.png",
                "sha256": "0113ec1aeb2a288cc108f1005c4125a8d77781ebc9b9e477558bd8e73e5f7e79",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-900-frame-792.png",
                "sha256": "b4320c7dcef5d4189fba0b50c22a7d70214753d3169c7cf95818081a97b4d83d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/16x9-duration-900-frame-899.png",
                "sha256": "bb000fe14cedfd9e2cbe43e0bb91de1c5d774f59c146e41dba2c541dedf7b856",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.1865234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-90-frame-10.png",
                "sha256": "1dcf9572f9c8ae8da9faee33421c351f561467b643531d9574377986c8014c3a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-90-frame-89.png",
                "sha256": "96ec534db6f2c8779c916e375e53207b9dfc568d17c536a832d8e44935bd67d7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-90-frame-79.png",
                "sha256": "96ec534db6f2c8779c916e375e53207b9dfc568d17c536a832d8e44935bd67d7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.189453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-900-frame-13.png",
                "sha256": "a0fa014a4ca203a2f9217e3417c388500a057ec623e993492a788a3ea46903cb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-900-frame-90.png",
                "sha256": "96ec534db6f2c8779c916e375e53207b9dfc568d17c536a832d8e44935bd67d7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-900-frame-792.png",
                "sha256": "96ec534db6f2c8779c916e375e53207b9dfc568d17c536a832d8e44935bd67d7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/9x16-duration-900-frame-899.png",
                "sha256": "96ec534db6f2c8779c916e375e53207b9dfc568d17c536a832d8e44935bd67d7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.4208984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-90-frame-10.png",
                "sha256": "42add6607374b5fcee06f17492b959d5e831626987497626ab7223b73452cbb3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-90-frame-89.png",
                "sha256": "c7bea4c8de0af60076f46d441ca23ed0f50bfbdf63e77f1488def4f15be0c69d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-90-frame-79.png",
                "sha256": "38ef5c3cfb2e98e4b8f08cb3a8a5f7daac29ad285e56d46ed89dbee2a3bfd6c0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.393880208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-900-frame-13.png",
                "sha256": "87551d42c899172aca4fca35560c01946986b0d8be5518202cb1333e945534ad",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-900-frame-90.png",
                "sha256": "556b3c0f73a7edf0799b4e530b0241b12f1f9d88cca19c278652e5745a654e48",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-900-frame-792.png",
                "sha256": "86870ff3255e75649fb6095e7f671eee0f135421273dc0d8f648b5cf7651a310",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-realty-skyline/1x1-duration-900-frame-899.png",
                "sha256": "ad49af52f70adcbc3d15bffe9827bd45ff6f1e02782413e1534e27d735891060",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Building-shaped bars rise into a skyline beside a homes-sold counter; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0c8ec36e2f9850bf7093bb1b1cbe1929a11ed93210b52920fb1762761d8be800",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.080Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-skyline/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-skyline/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-skyline/16x9/detail.mp4",
      "bg": "#232222",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d086fcb4eb6e8b05c551d3ca5c9326515fa5fcd17fee434de64393f540425b78",
        "loop": "fa346d096ace06fd9e17167721f1d4d3125e840844ee2ad6c495dacf1dc74394",
        "detail": "b406c848a25aab1601f9597d574a0c006471ea82e8c9d34c9f5f325d7e35253a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-skyline/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-skyline/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-skyline/9x16/detail.mp4",
      "bg": "#252524",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0ad5dcbe41dace93cfc28ab38192d01eafe2ab3b5907bab564d883570558524b",
        "loop": "bdd18e5f3e3908eebff91a8c64b19d2d9b254a538c906bc38d7e04a285c7a906",
        "detail": "542c9b34bb4de6beaa1dfab2cc8076f9be1f80ac2472ca666a65e0eef5348e23"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-skyline/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-skyline/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-skyline/1x1/detail.mp4",
      "bg": "#252524",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dca3e7d3edd215f0c3a40102ad563e75ecc27233f5746d0a8dc2fe4a1ad4148e",
        "loop": "ddf5b7a8c8ffe072281f17faabedd1a3c7666f4fff8d11c37fc4af15fea0c4e5",
        "detail": "c893fb07f87c74bb61e5ac0fbb403bdf94916c36a5bdf08c3cb45c73a232d091"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0c8ec36e2f9850bf7093bb1b1cbe1929a11ed93210b52920fb1762761d8be800/index.mjs",
    "sha256": "0c8ec36e2f9850bf7093bb1b1cbe1929a11ed93210b52920fb1762761d8be800",
    "bytes": 173557,
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
    "at": "2026-10-09T07:08:15.651Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
