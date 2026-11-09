// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "reframe-pan-wide-to-vertical"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "reframe-pan-wide-to-vertical",
    "vertical",
    "reframe",
    "social"
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
      "in": 139,
      "out": 0
    },
    "markers": {
      "settled": 139
    },
    "beats": [
      0,
      35,
      70,
      104,
      139
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
      "key": "c1",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "c2",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "c3",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 28,
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
      "target": "reframe-pan-wide-to-vertical",
      "prop": "transform",
      "from": "enter",
      "settledBy": 139,
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
    "ink": "#EEF3EC",
    "accent": "#C8F55A",
    "secondary": "#8FD624",
    "paper": "#070B09",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "c1": "Ask in plain English.",
    "c2": "Every answer, sourced.",
    "c3": "Share the proof.",
    "label": "auto-reframe 16:9 to 9:16"
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
      "key": "c1",
      "label": "C 1",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "c2",
      "label": "C 2",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "c3",
      "label": "C 3",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 28,
      "role": "label"
    }
  ],
  "name": "Wide To Vertical Reframe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-vertical-reframe",
    "bundleSha256": "16eb55c739b37823eade59d7dc69ba457fa7b7ee30bc777ef611d0108a685f9c",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:45:07.279Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-paper.png",
        "sha256": "66f77f4a04b0b6d5363df5dc5d117e6a1eb250112fc8a969d6d0a1fcccc3644d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-night.png",
        "sha256": "94aad67c91e67473cc964b89c584ebe4053fb25846d6317a5312b2f5b846eefe"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-color.png",
        "sha256": "73f9dde1829a1c877a1f3b083bc79ddbd3caf3c2e07c25d992d31a85282842ba"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-paper.png",
        "sha256": "bc21078a4a557fbc5ea4f8ab1e433d6f35e42e4e70a53736f63336c84f7d06f9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-night.png",
        "sha256": "0fd94773679c171481c63c6900d81b90626927e1d78f569c87d4891cb4965214"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-color.png",
        "sha256": "23c3d547d25cd0516486f4643cc8573727f7b0128851d12ab7e744bbafba52d2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-paper.png",
        "sha256": "91c4c291233a1b62bae11b23e4e94347dae9090c0a9214f7597ac6c63cd187e9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-night.png",
        "sha256": "828bc99acaff121de534d2d663564885d71efe99f6b196558a73fc8b8f9c8910"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-color.png",
        "sha256": "45aec466a2a2a5f56f980125041fd39b31e82ba6eae20fc431028d4865ca3fb6"
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
          "mg-pr-vertical-reframe--16x9",
          "mg-pr-vertical-reframe--9x16",
          "mg-pr-vertical-reframe--1x1"
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
            "paperNight": 6.876057942708333,
            "paperColor": 7.347927517361111,
            "region": {
              "left": 115,
              "top": 0,
              "width": 1740,
              "height": 1051
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 8.137044270833334,
            "paperColor": 10.74728732638889,
            "region": {
              "left": 0,
              "top": 245,
              "width": 1080,
              "height": 1619
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 6.902153862847222,
            "paperColor": 7.747911241319445,
            "region": {
              "left": 64,
              "top": 80,
              "width": 1016,
              "height": 869
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
            "occupancy": 1.2470069689398395,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2470069689398395,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2498802568867056,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1921001039304613,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1921001039304613,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.195052673847317,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0696042963367334,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0696042963367334,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0727719299882734,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.29372829861111,
        "frames": [
          20,
          139,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.29372829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-90-frame-10.png",
                "sha256": "02e9ca7cbd422d15265a9d252cb355cd7c7866d7139bf2c5a63bd65574f8e56c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-90-frame-89.png",
                "sha256": "68ae0fdbe72f28c67e0f244b25d4fdbe76c9acbfeea37390cb5591c0e77c91dc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-90-frame-79.png",
                "sha256": "68ae0fdbe72f28c67e0f244b25d4fdbe76c9acbfeea37390cb5591c0e77c91dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.29372829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-900-frame-20.png",
                "sha256": "03f66555cce171275ed249a211084ca2ad2aa805b249fccccb686031f7c42676",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-900-frame-139.png",
                "sha256": "68ae0fdbe72f28c67e0f244b25d4fdbe76c9acbfeea37390cb5591c0e77c91dc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-900-frame-792.png",
                "sha256": "68ae0fdbe72f28c67e0f244b25d4fdbe76c9acbfeea37390cb5591c0e77c91dc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/16x9-duration-900-frame-899.png",
                "sha256": "012232195d8d3d51bdd82a8e36b5a3e72f0e2a9b5bbd92bbf69a837151c66a58",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 13.415147569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-90-frame-10.png",
                "sha256": "30c1c2773765e291c11074979c8e17a6a28395e406c61572380ff671d75969ce",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-90-frame-89.png",
                "sha256": "23956d6bc6dff207dd99e9cd4700a96824ccfc004669da4126ef6d755d0af42b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-90-frame-79.png",
                "sha256": "23956d6bc6dff207dd99e9cd4700a96824ccfc004669da4126ef6d755d0af42b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.415147569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-900-frame-20.png",
                "sha256": "d3c8392473a1e7c458a0f2accc8131c5107e1fcb13e5d0d0fbce11d60c9dd1c5",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-900-frame-139.png",
                "sha256": "d7f7cf078862d8b73bc399aae65af2e31a9c0fd5a866fa1140bb2cc74439a411",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-900-frame-792.png",
                "sha256": "d7f7cf078862d8b73bc399aae65af2e31a9c0fd5a866fa1140bb2cc74439a411",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/9x16-duration-900-frame-899.png",
                "sha256": "23956d6bc6dff207dd99e9cd4700a96824ccfc004669da4126ef6d755d0af42b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.860243055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-90-frame-10.png",
                "sha256": "165530f8642e44e5c048e9e4ebe02ded861ded08d8ad63a2c176bca55e3f9b7b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-90-frame-89.png",
                "sha256": "27a1682def868216bac2cbd4c10d558e49e5c31a5b9c03bb88a60cb5fdb7b578",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-90-frame-79.png",
                "sha256": "27a1682def868216bac2cbd4c10d558e49e5c31a5b9c03bb88a60cb5fdb7b578",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.860243055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-900-frame-20.png",
                "sha256": "165530f8642e44e5c048e9e4ebe02ded861ded08d8ad63a2c176bca55e3f9b7b",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-900-frame-139.png",
                "sha256": "27a1682def868216bac2cbd4c10d558e49e5c31a5b9c03bb88a60cb5fdb7b578",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-900-frame-792.png",
                "sha256": "8f653c03f6b3962a153eaa79e8c96e4b8d348bbc23410bc014e2664567a444bf",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-vertical-reframe/1x1-duration-900-frame-899.png",
                "sha256": "27a1682def868216bac2cbd4c10d558e49e5c31a5b9c03bb88a60cb5fdb7b578",
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
        "note": "Wide app reframes to a vertical sources panel; headline readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "16eb55c739b37823eade59d7dc69ba457fa7b7ee30bc777ef611d0108a685f9c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/16x9/detail.mp4",
      "bg": "#202521",
      "posterFrame": 139,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dd28fbd278250c03e9642c282bfd46825e50acb98cd59833ff602b5829a3cb62",
        "loop": "7e8cc79cf5b801d6b269fc87c2c689d15dcc0e57007cc69d970846cd129e945a",
        "detail": "e307da5efc5bf59ff2de040d1bd19da81225b635c3277283d451ad80fefef26b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/9x16/detail.mp4",
      "bg": "#1f2321",
      "posterFrame": 139,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ed68962249bde98631646ba9c1e51f44614c11753a557b0a74d41534cd1172bf",
        "loop": "356304275a161d7c9cfe90105fb55036ca9ce61e02b488e7808133027bbc6e18",
        "detail": "df6fd6dd6352d616cd7968548f42f410001fc82df5a4e29e8a14822123fb43db"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-vertical-reframe/1x1/detail.mp4",
      "bg": "#1f2321",
      "posterFrame": 139,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1d4ec35a3b464d30c52731b2d28fbc8cb5b498a63e827e1c24d56d8e9c76ad7e",
        "loop": "9839dfa470e5990660936be6c57664741e1ce8a80ef1b8e5ad07aa494b4ae501",
        "detail": "00c580d61bc6752b0ec7e4717c4839c1989920b6a7d531615efad29b593b98ea"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/16eb55c739b37823eade59d7dc69ba457fa7b7ee30bc777ef611d0108a685f9c/index.mjs",
    "sha256": "16eb55c739b37823eade59d7dc69ba457fa7b7ee30bc777ef611d0108a685f9c",
    "bytes": 179470,
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
    "at": "2026-10-09T04:10:48.255Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
