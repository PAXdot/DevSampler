// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "chat-to-chart-sync"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "chat-to-chart-sync",
    "chat",
    "chart",
    "split-screen"
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
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
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
      "target": "chat-to-chart-sync",
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
    "ink": "#1A1C1F",
    "accent": "#3D63FF",
    "secondary": "#5CC8F5",
    "paper": "#EEF0F4",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Analytics agent",
    "headline": "Ask for a chart, get the proof",
    "cta": "Organic signups up 38%"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Chat Beside Chart",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-split-proof",
    "bundleSha256": "7f66bcfa32b6f2947bb0594873cb8db65ff3bf166e534a1db3510f3ff848c584",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:49:34.228Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-paper.png",
        "sha256": "2f0d030734248d8e43ba4a3318a01fee7b71494494bc246660a38e20db9f3472"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-night.png",
        "sha256": "5389381c7692c7a5598bdfa9e0efd290e8ac1bda502585b5f1d9097b85d6726c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-color.png",
        "sha256": "48bb16f3cbec56e8bc6fb0b0492693f96f0e2c9fb955eca8ee1b8f44e5fe6316"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-paper.png",
        "sha256": "018798b0cd1417130982d4aae12fd346b9f01f0bec6b328317cd51998356e46c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-night.png",
        "sha256": "604386784a61d2dd6db6dbe2eec3d8b5e59eec80a481f304a55b765f5a8d1462"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-color.png",
        "sha256": "5bf939767ee5b2e4192487fe2821bf137a23dc12bf0664d03ed598e1ed36fee5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-paper.png",
        "sha256": "f2d528b6430288c00c41a91bfa3430d4dfb19c0ee8047bae97e79de6f659af19"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-night.png",
        "sha256": "381f9660f22694560c07ace481ba0ebc3c73c2f5c5975e9f45a6551514eabd9f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-color.png",
        "sha256": "6a5f25b7d27f884cd167b6b1ba40486c38b5a81ebbada1d63e47d2976217c8ed"
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
          "mg-pr-split-proof--16x9",
          "mg-pr-split-proof--9x16",
          "mg-pr-split-proof--1x1"
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
            "paperNight": 9.744222005208334,
            "paperColor": 6.515190972222222,
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
            "paperNight": 27.37725151909722,
            "paperColor": 12.16506618923611,
            "region": {
              "left": 63,
              "top": 174,
              "width": 934,
              "height": 1571
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.33327907986111,
            "paperColor": 7.371690538194445,
            "region": {
              "left": 23,
              "top": 63,
              "width": 1034,
              "height": 956
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
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9652778051163883,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9652778051163883,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0022197858052688,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201081141189901,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201081141189901,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201081141189901,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.208441840277779,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.240885416666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-90-frame-10.png",
                "sha256": "fa57d7519810bf5aa4bf18befa5d9d710b4874e90b017b359690d220e8a201e7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-90-frame-89.png",
                "sha256": "46ac682135aeac1f87cef5856a99e2ebf54fe6253eb343fb81c0d72f6ad23a59",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-90-frame-79.png",
                "sha256": "46ac682135aeac1f87cef5856a99e2ebf54fe6253eb343fb81c0d72f6ad23a59",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.208441840277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-900-frame-13.png",
                "sha256": "c4c6b6f5704cf49528022abfbd8954ddca21e706dd40ac1fb01147d345107f71",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-900-frame-90.png",
                "sha256": "46ac682135aeac1f87cef5856a99e2ebf54fe6253eb343fb81c0d72f6ad23a59",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-900-frame-792.png",
                "sha256": "46ac682135aeac1f87cef5856a99e2ebf54fe6253eb343fb81c0d72f6ad23a59",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/16x9-duration-900-frame-899.png",
                "sha256": "46ac682135aeac1f87cef5856a99e2ebf54fe6253eb343fb81c0d72f6ad23a59",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.333550347222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-90-frame-10.png",
                "sha256": "20bbdf2262fc4d3ed31f9add537dd45418955f58961bb55846f74cc23b9f45cb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-90-frame-89.png",
                "sha256": "b1fe97612de2d5adcf413551d468f85e80a2bd41781043940304f8760ffa83de",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-90-frame-79.png",
                "sha256": "b1fe97612de2d5adcf413551d468f85e80a2bd41781043940304f8760ffa83de",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.239800347222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-900-frame-13.png",
                "sha256": "3ecb8a9c633c893f7ca570e2a1da52b08a43f5dfcd3aca8275309f26068933d6",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-900-frame-90.png",
                "sha256": "15899692bdb83a4b4c57012ec83d8ddcae94d331b8543877af33ba717dd41404",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-900-frame-792.png",
                "sha256": "15899692bdb83a4b4c57012ec83d8ddcae94d331b8543877af33ba717dd41404",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/9x16-duration-900-frame-899.png",
                "sha256": "15899692bdb83a4b4c57012ec83d8ddcae94d331b8543877af33ba717dd41404",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.552842881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-90-frame-10.png",
                "sha256": "0ad60247d2f65da936e2838d6014d08bc4b6366be52ae7daf1eaf52440235641",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-90-frame-89.png",
                "sha256": "281c897957eca3bc190c1ef0327880b3e2d2b43e4536fcb4c25a2ca625339f9a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-90-frame-79.png",
                "sha256": "281c897957eca3bc190c1ef0327880b3e2d2b43e4536fcb4c25a2ca625339f9a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.484917534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-900-frame-13.png",
                "sha256": "86bc82b27df7a49b018de75cc0a4998b987120281c195873c5cae0bcbcc5ea45",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-900-frame-90.png",
                "sha256": "281c897957eca3bc190c1ef0327880b3e2d2b43e4536fcb4c25a2ca625339f9a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-900-frame-792.png",
                "sha256": "281c897957eca3bc190c1ef0327880b3e2d2b43e4536fcb4c25a2ca625339f9a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-split-proof/1x1-duration-900-frame-899.png",
                "sha256": "281c897957eca3bc190c1ef0327880b3e2d2b43e4536fcb4c25a2ca625339f9a",
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
        "note": "A chat asks for a chart and the stacked chart appears beside it; bars blue, sky and orange, backdrop light blue and peach."
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
      "bundleSha256": "7f66bcfa32b6f2947bb0594873cb8db65ff3bf166e534a1db3510f3ff848c584",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/16x9/detail.mp4",
      "bg": "#cad3f6",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dd4491c1898f695da0c8430077c9c9430fab15ff831e78fc2ccf0798f715316f",
        "loop": "a720a17e737ec65f8341fb3f11729a290de3b50bbfc1d4cba241a78807dcae69",
        "detail": "d7d6f81877dd5af7becc5021f6bbaf2a1c5bf970038e82073d7a9c385bace41d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/9x16/detail.mp4",
      "bg": "#d5dcf5",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "df13ee70970eee84736c0d12aa6b8a51558da6d1b4b540e862dc77abf41dc750",
        "loop": "8e1746a058655efef9b72aa371461a145688e9188cbe9fe3080f34e93c3d49ee",
        "detail": "b396710fe67458976d210f65e9efce1994b583cdeb7c6a9c3be90921de8f80df"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-split-proof/1x1/detail.mp4",
      "bg": "#cdd6f6",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f0000373ad9c9eb9f2db7d842dec79e321a904c97cd8db16b0d0904735098895",
        "loop": "85875b4bed5d734819905d4d5241674f4e0dda2f2f04024cfd32a8954ac8744d",
        "detail": "62ca7f6acd09f0652b6df441ee30688ecd75960523d917aba549c5441185f58d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7f66bcfa32b6f2947bb0594873cb8db65ff3bf166e534a1db3510f3ff848c584/index.mjs",
    "sha256": "7f66bcfa32b6f2947bb0594873cb8db65ff3bf166e534a1db3510f3ff848c584",
    "bytes": 182570,
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
    "at": "2026-10-09T04:07:59.028Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
