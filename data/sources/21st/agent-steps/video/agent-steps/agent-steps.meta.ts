// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/agent",
  "tags": [
    "agent",
    "steps",
    "progress",
    "checklist",
    "ai",
    "spinner",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 86
    },
    "beats": [
      12,
      26,
      40,
      54,
      68
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "query",
      "type": "text",
      "maxChars": 60,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "steps",
      "type": "list",
      "role": "body"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "step",
      "prop": "y",
      "from": "6px below",
      "settledBy": 6,
      "easing": "ease"
    },
    {
      "target": "check",
      "prop": "scale",
      "settledBy": 14,
      "easing": "spring"
    },
    {
      "target": "stack",
      "prop": "y",
      "from": "re-center",
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V15 agent steps, V13 checklist)"
  },
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "query": "Find teams hiring for design engineers",
    "steps": [
      "Searching 2,400 company pages",
      "Reading careers pages",
      "Matching roles to your brief",
      "Scoring 38 teams",
      "Drafting your shortlist"
    ],
    "interval": 14,
    "theme": "light",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "query",
      "label": "Query",
      "type": "text",
      "max": 60,
      "role": "headline"
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "list",
      "max": 7,
      "role": "body"
    },
    {
      "key": "interval",
      "label": "Interval",
      "type": "number",
      "step": 1,
      "min": 6,
      "max": 40
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Agent Steps",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "agent-steps",
    "bundleSha256": "239b30d1df2d60fa2eef9144f0ec52e09d31fd1f70f2dcee441edcd98ad30aed",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:12.733Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-paper.png",
        "sha256": "45585ab0d504c81f46e5339e45314548e527318354be7bfdbba8f2338af293f5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-night.png",
        "sha256": "efeab66c67afcb4820e4650a7b5759bf747b67e7560e207e549a5a13c59650eb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-color.png",
        "sha256": "0ee01763ae3314f92ad891cc57deec8dc4177b5f596accabfeec99ee098df125"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-paper.png",
        "sha256": "f1a958a0eddaed39acd71a621c77800190d18d61747dd344fb2ddc4e0becb7e4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-night.png",
        "sha256": "81777f36190871ed043c37f55206f04e901cc25ef700875e20ca83370fc43af6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-color.png",
        "sha256": "6b729c1106cea3edac730b1e4b6dd51f972b59edb1c63d4d503ed48176a121f9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-paper.png",
        "sha256": "d1ee67090d73543b6ece0cb42e9219d67727731fa642aeba5c53f4bd14908d0d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-night.png",
        "sha256": "adc7caa3fb7dd3d0aa058cf3afe0a610a7cd193ea0f6994c6687aaef8d7136ab"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-color.png",
        "sha256": "668a0a9fd130f70f7de36d4c69e410ec30a7c4ca491f323cc90eda2c1b8103ef"
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
          "agent-steps--16x9",
          "agent-steps--9x16",
          "agent-steps--1x1"
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
            "paperNight": 135.58070203993054,
            "paperColor": 13.070963541666666,
            "region": {
              "left": 239,
              "top": 94,
              "width": 1442,
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
            "paperNight": 126.85617404513889,
            "paperColor": 16.301676432291668,
            "region": {
              "left": 8,
              "top": 382,
              "width": 1064,
              "height": 1208
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 128.22615559895834,
            "paperColor": 12.67941623263889,
            "region": {
              "left": 8,
              "top": 115,
              "width": 1064,
              "height": 902
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
            "occupancy": 0.8584282639238825,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.930365716245346,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8584282639238825,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8089768186081019,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.878466098373506,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8089768186081019,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0604270286075108,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1661168811374574,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0604270286075108,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 105.99609375,
        "frames": [
          12,
          86,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 86.17220052083333,
            "retainedAlpha": 0.8471523905292988,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-60-frame-7.png",
                "sha256": "aaedefdb8d34b91c6f17f8ea4f99eca2a6149f928c7e6910444762f96d10f8ed",
                "alphaMass": 110284
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-60-frame-59.png",
                "sha256": "33cb896a1caf87ba66bd3f2676e9f7fed1d158838441000a73eb9c516cc9e48d",
                "alphaMass": 284414
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-60-frame-52.png",
                "sha256": "dcad84af9a7609d0eb69f077240f322612c629407bd34ce1fbe0588543bd41f4",
                "alphaMass": 240942
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 105.99609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-600-frame-12.png",
                "sha256": "9e2289bb2334c5e203a03467bb5f882987c8fc17f02c510ac60563e537a91adc",
                "alphaMass": 110278
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-600-frame-86.png",
                "sha256": "cbf1c030592751f57674d6403f4696a125bc8760c6d4c77bb9b6a41d8b61d321",
                "alphaMass": 328340
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-600-frame-528.png",
                "sha256": "c49ad7168c8e702aaf21626b4013c4a401803101ff63b182246038fce569a415",
                "alphaMass": 328340
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/16x9-duration-600-frame-599.png",
                "sha256": "c49ad7168c8e702aaf21626b4013c4a401803101ff63b182246038fce569a415",
                "alphaMass": 328340
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 76.49294704861111,
            "retainedAlpha": 0.8394937355982663,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-60-frame-7.png",
                "sha256": "9f35aba0f091f00c551e0ea7da6a52cb09022f71f976e2a5b57a61ae895aae7b",
                "alphaMass": 97444
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-60-frame-59.png",
                "sha256": "a80d10cc232b24b503c5893b4724c08a9f2f639dea7636dbfc3999031ff99d90",
                "alphaMass": 266027
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-60-frame-52.png",
                "sha256": "d4c2fb7c3fa7fb1422eecd39b6731984b9ac5e62a5dfc291906e0a66e4996d1e",
                "alphaMass": 223328
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 91.86414930555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-600-frame-12.png",
                "sha256": "5dac97d2abf2a58ec63689c0fb584d43e236442d2ed171fc0e637ced1a9cb88a",
                "alphaMass": 97527
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-600-frame-86.png",
                "sha256": "affca92329cea0182f182ee45ba822359f542b4bb5edbee04f788968a3e0de0e",
                "alphaMass": 308637
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-600-frame-528.png",
                "sha256": "42a1ae152adccb849d7e96781f2d53f2b111c7777dea6ecc9b229f5d1cbecd57",
                "alphaMass": 308637
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/9x16-duration-600-frame-599.png",
                "sha256": "42a1ae152adccb849d7e96781f2d53f2b111c7777dea6ecc9b229f5d1cbecd57",
                "alphaMass": 308637
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 96.56065538194444,
            "retainedAlpha": 0.8393866870052337,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-60-frame-7.png",
                "sha256": "55a6b5fbb00a4171b8c7579e1d586bc1be4a9e217cb81c9a129e5cd1007682da",
                "alphaMass": 121658
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-60-frame-59.png",
                "sha256": "2ad30d83b15a98197fbc290f4b7fafc30f0ee5eb4fb00a6bdb3fe123d7dfe49f",
                "alphaMass": 342207
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-60-frame-52.png",
                "sha256": "984debf3994dd8ea4bc1a8d28f5c99b7c4923f1a56c730909af61dea022052c6",
                "alphaMass": 287244
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 119.455078125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-600-frame-12.png",
                "sha256": "3d000a536e20a85591ca619bcda3d146d92c06f7367e75dd0338c981a58b2eb7",
                "alphaMass": 121759
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-600-frame-86.png",
                "sha256": "99d79bf710e37b9312d2e1b63718e84f48301b135e1a46476fcd571e5d6b9f90",
                "alphaMass": 398322
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-600-frame-528.png",
                "sha256": "3e78b8307ba431367f45633f03f1c5064f210323b9e9e08095bcca2194b57380",
                "alphaMass": 398322
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/agent-steps/1x1-duration-600-frame-599.png",
                "sha256": "3e78b8307ba431367f45633f03f1c5064f210323b9e9e08095bcca2194b57380",
                "alphaMass": 398322
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
        "note": "An agent task card checks off its steps one by one; process."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 12,
        "compared": 12,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "239b30d1df2d60fa2eef9144f0ec52e09d31fd1f70f2dcee441edcd98ad30aed",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.972835Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/agent-steps/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/agent-steps/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/agent-steps/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 86,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "ca7a9260d4340c552cf0975117b19c5c42afd4ffde333e83d054606e68e9ab97",
        "loop": "8d094929bd83932890efffec6d5e16fb84f7728f592fec1c2fe5c24d78061a4c",
        "detail": "4145b1048d4fca7ffa7d6bc12ad2d34dd4686668f08ba00008392e5da340d4c9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/agent-steps/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/agent-steps/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/agent-steps/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 86,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "802fe890a61d95574aee6172136f74eaccf729cddf42b05dfef611f15e4cd9dc",
        "loop": "64e5e6bc06469a29155b322a25dbc3ea162a488c86040d43d0ea348efae7e633",
        "detail": "6c63de2338b06096b4fc4ad0b75f2e9038f874fa6e5cf5926ed843c62bb47e7d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/agent-steps/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/agent-steps/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/agent-steps/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 86,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "bdd448d456a81d598de19920701b70a5c33b2f2d925a36f8825b44e9f38f84fb",
        "loop": "e95f9afe04a685660e81c7532908f6b9b4b306ce69b9a57938d27d5a4c24ec1c",
        "detail": "1d869cb6037d785b35210ddd90f5ac2c5c33a1d9174d8f19be484146a6cb86ef"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/239b30d1df2d60fa2eef9144f0ec52e09d31fd1f70f2dcee441edcd98ad30aed/index.mjs",
    "sha256": "239b30d1df2d60fa2eef9144f0ec52e09d31fd1f70f2dcee441edcd98ad30aed",
    "bytes": 168297,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:26:25.500Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
