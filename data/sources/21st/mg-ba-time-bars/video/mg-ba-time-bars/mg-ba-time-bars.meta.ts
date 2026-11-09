// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "race-bars-time-counters"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "race-bars-time-counters",
    "before-after",
    "comparison",
    "speed"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "task",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "oldLabel",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "newLabel",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "result",
      "type": "text",
      "maxChars": 14,
      "role": "headline"
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
      "target": "race-bars-time-counters",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#F4F4F5",
    "accent": "#C8FF3D",
    "secondary": "#5CFFB0",
    "paper": "#0A0A0B",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "task": "Monthly board report",
    "oldLabel": "By hand",
    "newLabel": "With Lumen",
    "result": "50× faster"
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
      "key": "task",
      "label": "Task",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "oldLabel",
      "label": "Old label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "newLabel",
      "label": "New label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "result",
      "label": "Result",
      "type": "text",
      "max": 14,
      "role": "headline"
    }
  ],
  "name": "Time Race Bars",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ba-time-bars",
    "bundleSha256": "8f531b91e40a92e6a0950637f27d4db19cc1685c0905a66cb069e2263747fc9d",
    "sourceSnapshot": {
      "sha256": "1d166e47db414cd89067fecf773b7174d2603285baa8ad9fbc91d210e107086e",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:06:19.753Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-paper.png",
        "sha256": "a1b5269a8e9e4feb3fd3157b64ef7b1ad75fe62ce7234f59379bf7bd470dca52"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-night.png",
        "sha256": "5a052635639ee52c18c88c8dc45ab3aaacb17513954fb76004ae57edf1007488"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-color.png",
        "sha256": "8df4b37560995e38d03220317e8488dfcbf059fbabe6f66dbdee778ddf4e105e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-paper.png",
        "sha256": "794b08f361da40b5877de590e38d1de933b9d05830f0f893c8bbd60f02de7a67"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-night.png",
        "sha256": "f88c7f93b7a0b1eb211508492f5f8c546df8b8d87337d5d1c13dd7b51b23fde5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-color.png",
        "sha256": "cd49aa38ad89d6debe0705ccc5ce8821d1514741ec1b9c20d1a972337a00a23c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-paper.png",
        "sha256": "f6a2034b093e94be036591b8b58cbd56a7340fd5eb7d33a13a250c2b7e3abfd2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-night.png",
        "sha256": "40a856c6dca4d52655282d6fd7d59ddd7d95122fc44de925c998b1df643b35f5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-color.png",
        "sha256": "71f31cf5009976ed9123a89f740accea07b03781536886333685992fc524dc78"
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
          "mg-ba-time-bars--16x9",
          "mg-ba-time-bars--9x16",
          "mg-ba-time-bars--1x1"
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
            "paperNight": 30.61911349826389,
            "paperColor": 12.50998263888889,
            "region": {
              "left": 101,
              "top": 89,
              "width": 1725,
              "height": 831
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 39.16929796006944,
            "paperColor": 24.499430338541668,
            "region": {
              "left": 78,
              "top": 168,
              "width": 931,
              "height": 1536
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 35.06879340277778,
            "paperColor": 17.685465494791668,
            "region": {
              "left": 68,
              "top": 82,
              "width": 951,
              "height": 879
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
            "occupancy": 0.9740131745856782,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9745804507502591,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9726564960474933,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9731670445956162,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9725334723009577,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9735484182098768,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.011422873333147,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0102722216001172,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.011072939120779,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.17892795138889,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.70822482638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-90-frame-10.png",
                "sha256": "cf89a6153cd1ec72cba997f50a4b82078006731bf7614309da04a97a149b4209",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-90-frame-89.png",
                "sha256": "56a30334e980a994c27da1f9e08f7bbcb30541ee4f64aad88deeb93aae25b6b3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-90-frame-79.png",
                "sha256": "56a30334e980a994c27da1f9e08f7bbcb30541ee4f64aad88deeb93aae25b6b3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.179253472222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-900-frame-14.png",
                "sha256": "f0a1100f746f9fccd4d75b1b1a558fc151569ff6034c28647c28f09a139d1b86",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-900-frame-96.png",
                "sha256": "d9b72165e3fbc64d70b486084da3339f82e0a1b55899298fb2c6f67edbdecb74",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-900-frame-792.png",
                "sha256": "56a30334e980a994c27da1f9e08f7bbcb30541ee4f64aad88deeb93aae25b6b3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/16x9-duration-900-frame-899.png",
                "sha256": "56a30334e980a994c27da1f9e08f7bbcb30541ee4f64aad88deeb93aae25b6b3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.230794270833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-90-frame-10.png",
                "sha256": "59dc7f6ec5005cde31a6251950d0166f227a25c142c4e8f50ec59b76bced2515",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-90-frame-89.png",
                "sha256": "258fd9e34d285b31f55b9ed17d7179aa11147c6cef26f62a256c385d28b41d8a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-90-frame-79.png",
                "sha256": "a56ba50e2b725476733ab2765c36fd86474d462fb7a0315a961c4533e0a963c9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.866861979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-900-frame-14.png",
                "sha256": "1b437644da10f46162a9bd20decf20a6a6a213b01f1f03eb0d7db1aed5f80b7e",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-900-frame-96.png",
                "sha256": "d6546188246db8db1f040826293f3b0f9afb855983df4e172600a66c4a3e9f4c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-900-frame-792.png",
                "sha256": "6ceafe877c9b531452c200e10d6570b3aaa25f740f91997c2f2f838ea96fb0a7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/9x16-duration-900-frame-899.png",
                "sha256": "7fc8023d8edda343c8481ddee6b92bc94392d6970715daf44ce7652a50390c44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.815755208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-90-frame-10.png",
                "sha256": "85c7fad15955af9b1fb8fab2c421dbf35fbd7d87370a94855f3d4ab9ec6e58c4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-90-frame-89.png",
                "sha256": "535742e73223cede4bb0f62eeb3c0691cd97aadfa0ee85d027cec4d872ffb80c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-90-frame-79.png",
                "sha256": "535742e73223cede4bb0f62eeb3c0691cd97aadfa0ee85d027cec4d872ffb80c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.339301215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-900-frame-14.png",
                "sha256": "4a1d868ac946bb40f65d385f9864c04200b0e23a1da3cebf498b2bec7b9d26d6",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-900-frame-96.png",
                "sha256": "535742e73223cede4bb0f62eeb3c0691cd97aadfa0ee85d027cec4d872ffb80c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-900-frame-792.png",
                "sha256": "535742e73223cede4bb0f62eeb3c0691cd97aadfa0ee85d027cec4d872ffb80c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s0/mg-ba-time-bars/1x1-duration-900-frame-899.png",
                "sha256": "535742e73223cede4bb0f62eeb3c0691cd97aadfa0ee85d027cec4d872ffb80c",
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
        "note": "Two timing bars race; the manual bar crawls and the product bar finishes with a speed-up stat."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "8f531b91e40a92e6a0950637f27d4db19cc1685c0905a66cb069e2263747fc9d",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.504Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/16x9/detail.mp4",
      "bg": "#0a0a0b",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d598e61747f890340c1acdf4ba63a138df6699064e135de414f37b9cae662487",
        "loop": "12bef529be72d54cb0d605ad42c80e85715204eb9fed207c8d4c3c8f63e47b07",
        "detail": "abead5132f546b74d3db97e3d59a033042f3e7b96cb8568fcfbd9019294ec66e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/9x16/detail.mp4",
      "bg": "#0a0a0b",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e33c906ab31c4d72aae8118a5cdcb89cabeec8a8e5254ceece4e37b08d422c91",
        "loop": "f14e8f5141d78d3adaee03af70ac54ecf9d5a040fd0f47d6e8ba05b784f8600a",
        "detail": "720c4b813e74f11e585bd586b20aafa269eb4f6003c09e8669810157541c3f0b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-time-bars/1x1/detail.mp4",
      "bg": "#0a0a0b",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b6b4a4c9d723872d08483e5a30e42870e1ad3b95836767a54bac14f601454a27",
        "loop": "c2aff133ffdef5ad3c5804abcfe4627bbaced737bd21480109d315fcf0ef9611",
        "detail": "4ce5d7c1eec0eede633f9c42fe98d43538a3649524948a84460e482b0545c1ae"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8f531b91e40a92e6a0950637f27d4db19cc1685c0905a66cb069e2263747fc9d/index.mjs",
    "sha256": "8f531b91e40a92e6a0950637f27d4db19cc1685c0905a66cb069e2263747fc9d",
    "bytes": 169367,
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
    "at": "2026-10-08T19:29:39.605Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
