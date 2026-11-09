// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "prompt-type-to-build"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "prompt-type-to-build",
    "prompt",
    "ai",
    "build"
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
      "key": "prompt",
      "type": "text",
      "maxChars": 56,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "cta"
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
      "target": "prompt-type-to-build",
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
    "ink": "#ECEEF2",
    "accent": "#3D63FF",
    "secondary": "#3BC8FF",
    "paper": "#050507",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen Build",
    "prompt": "Build a launch page for Lumen: hero, pricing, FAQ",
    "cta": "Built in 6.2 seconds"
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
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 56,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Prompt To Result",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-prompt-result",
    "bundleSha256": "14e9dbb1f6c750884b0bf529937a2d580c2089cef96e56e9af286341a5e0544e",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:41.819Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-paper.png",
        "sha256": "521de6e9291e591b395c9caca263f41d824f4f9d8e8b05233145c7a0429fa729"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-night.png",
        "sha256": "f15817fb7672b04f039d56d54398f85ebf85e3831ce9dcf7658b48ed256dde6c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-color.png",
        "sha256": "fc03c9924a2a636ce47c91c00b9fc409657744e19c875d14031099250f370c2a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-paper.png",
        "sha256": "a930bcd28b1d3b50a76a06962616ed05bcc51b423e0b5789dc374b55b3caceb8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-night.png",
        "sha256": "982bf2db3961e79388748afccdc153433ab16ac236c37a651623c7b3e2ba29cb"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-color.png",
        "sha256": "c1402c1c44622aacd56618b3641614d23bb80439469d8190d2546bc033922dc8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-paper.png",
        "sha256": "b78f39286ae476f27d9a142974074e9b350fb0bbd0c3c5d5b15dbb2caa5c1e83"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-night.png",
        "sha256": "ae1bc8ecd175d724a5b4c68418c3eaf327d69d5fe9961c6ee77ead9b058144de"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-color.png",
        "sha256": "cfd5b0cc0089f01134051799760a366690a8767001bf1981358838d6848089ac"
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
          "mg-pr-prompt-result--16x9",
          "mg-pr-prompt-result--9x16",
          "mg-pr-prompt-result--1x1"
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
            "paperNight": 3.001980251736111,
            "paperColor": 3.538547092013889,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 8.311143663194445,
            "paperColor": 5.299099392361111,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1558
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 4.051513671875,
            "paperColor": 4.815782335069445,
            "region": {
              "left": 0,
              "top": 63,
              "width": 1080,
              "height": 988
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
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1500259826152686,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1500259826152686,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1485496976568408,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965062568237173,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965062568237173,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965062568237173,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 66.48014322916667,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 66.4833984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-90-frame-10.png",
                "sha256": "b6c04ebfab08e1ce3bf4b3a710a3158984d4775e205256ae8e87c5bc2edf6493",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-90-frame-89.png",
                "sha256": "4e9d21dd4acff2b45dd019709967939ad77fae174c743b8f3b3d6d562f158db2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-90-frame-79.png",
                "sha256": "4e9d21dd4acff2b45dd019709967939ad77fae174c743b8f3b3d6d562f158db2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 66.48014322916667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-900-frame-13.png",
                "sha256": "0394b76a0285e3315b98d3e60ad6b8f8794b3918d6cd6c0fd0206746be7477a2",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-900-frame-90.png",
                "sha256": "4e9d21dd4acff2b45dd019709967939ad77fae174c743b8f3b3d6d562f158db2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-900-frame-792.png",
                "sha256": "4e9d21dd4acff2b45dd019709967939ad77fae174c743b8f3b3d6d562f158db2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/16x9-duration-900-frame-899.png",
                "sha256": "4e9d21dd4acff2b45dd019709967939ad77fae174c743b8f3b3d6d562f158db2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 43.955729166666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-90-frame-10.png",
                "sha256": "89fb1c92292d318d3c5be0bbb021741d30d0d703a18515b62401d582f60c51b5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-90-frame-89.png",
                "sha256": "b1548614c09f568b486e6a57f90d5f07beb91d0265fcd781c44373308dec4a3c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-90-frame-79.png",
                "sha256": "b1548614c09f568b486e6a57f90d5f07beb91d0265fcd781c44373308dec4a3c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 43.938151041666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-900-frame-13.png",
                "sha256": "2337191ac01177d047b7e64c8fc728b4d495027dedad15d521092e79f1ab1540",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-900-frame-90.png",
                "sha256": "b1548614c09f568b486e6a57f90d5f07beb91d0265fcd781c44373308dec4a3c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-900-frame-792.png",
                "sha256": "b1548614c09f568b486e6a57f90d5f07beb91d0265fcd781c44373308dec4a3c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/9x16-duration-900-frame-899.png",
                "sha256": "b1548614c09f568b486e6a57f90d5f07beb91d0265fcd781c44373308dec4a3c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 64.42730034722223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-90-frame-10.png",
                "sha256": "8b8a5bc4af70df97530f9abde4e9704a1b451bed460b923c504c6aae49cb4545",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-90-frame-89.png",
                "sha256": "bea7e9373951d3300e76c0d951d1af16c2793c64e66832ad2eb0b0760281a6d0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-90-frame-79.png",
                "sha256": "bea7e9373951d3300e76c0d951d1af16c2793c64e66832ad2eb0b0760281a6d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 64.41905381944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-900-frame-13.png",
                "sha256": "13b036eef5c9d7323b0f397c78b7102a124ae83963e89950208b62dd5404b810",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-900-frame-90.png",
                "sha256": "bea7e9373951d3300e76c0d951d1af16c2793c64e66832ad2eb0b0760281a6d0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-900-frame-792.png",
                "sha256": "bea7e9373951d3300e76c0d951d1af16c2793c64e66832ad2eb0b0760281a6d0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-pr-prompt-result/1x1-duration-900-frame-899.png",
                "sha256": "bea7e9373951d3300e76c0d951d1af16c2793c64e66832ad2eb0b0760281a6d0",
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
        "note": "A prompt is typed and becomes a built landing page; glows are blue and cyan, no purple blend."
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
      "bundleSha256": "14e9dbb1f6c750884b0bf529937a2d580c2089cef96e56e9af286341a5e0544e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/16x9/detail.mp4",
      "bg": "#050507",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fb1f72807472f679e3a227502aca00be7b57ef2cf4d8e4c1cee2c0f8cbeb3dff",
        "loop": "27c0c3bb0961e7a1996df06de62bbe4d0983bf9f5d84cd319299f765a59d458a",
        "detail": "1e57d13e7ecfd359f707afdbcfc942bdf1589130e0f2fe064853778f54f1df9b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/9x16/detail.mp4",
      "bg": "#050507",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "16e8dc766e8b9526617b687190083215a187f9e2a5b1bbf6397320d1b168c863",
        "loop": "9e7a0d25e808644422c6751d4d84aa9bebebaa45109a01deab9a989ced4d4c74",
        "detail": "a2873e28bd5e5cbc8d8eb7229f484ad487779cf8aed6d8d813d89f7c18b1bd16"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-prompt-result/1x1/detail.mp4",
      "bg": "#050507",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "41bcf2ba512f5e6581489cc88a05a752e02e6818c2c46f67bd0399853c9087d6",
        "loop": "9dce4207d0069c08c5289565dd3887e4bb48bbe607e590b074d0bee4ecc2853a",
        "detail": "982bfd141e7e95f346f4c8d8dab5faad75394fe289cbb91c1b4ede4818d34d19"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/14e9dbb1f6c750884b0bf529937a2d580c2089cef96e56e9af286341a5e0544e/index.mjs",
    "sha256": "14e9dbb1f6c750884b0bf529937a2d580c2089cef96e56e9af286341a5e0544e",
    "bytes": 180866,
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
    "at": "2026-10-09T04:05:50.108Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
