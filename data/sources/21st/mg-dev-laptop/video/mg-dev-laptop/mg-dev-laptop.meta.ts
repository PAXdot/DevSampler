// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "lid-open-screen-wake"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "lid-open-screen-wake",
    "laptop",
    "3d",
    "product-reveal"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 64,
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
      "target": "lid-open-screen-wake",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#1C1A17",
    "accent": "#3D63FF",
    "secondary": "#FF8A5C",
    "paper": "#F1ECE3",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen for teams",
    "headline": "Your whole launch on one screen",
    "caption": "Plans, numbers and AI summaries, live for everyone"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 64,
      "role": "caption"
    }
  ],
  "name": "Laptop Lid Opens",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-laptop",
    "bundleSha256": "73b7e7c1ca5f53d07ecf9bb74d4ebdd50f354a6c750537b2917f19416e6add03",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:09.444Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-paper.png",
        "sha256": "f39bd91d4a10482b0ae55a399b8daf5b5260ec1a2ed6b09ad1429b104cac588f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-night.png",
        "sha256": "dee35e152e5a0ce1204f0df4abfb2a8aca9474f69e1407a2752adeb40cf99ebc"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-color.png",
        "sha256": "c17378a2dcfb4bf907b46dce5de7b6405061da9e854c5f792b5d0a7dac6f1bc4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-paper.png",
        "sha256": "ea8aba531f44e0740555d14eef9365e8b3614084ab519bbf4b9d04610da3aabe"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-night.png",
        "sha256": "cf61734c48bc770cc14154eeca3f9b8b9af63b4443f3105bb34bcad227b45a6c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-color.png",
        "sha256": "e84c6edf8bd5d6b7a514b6c09a2b5addefd807ba872df46657e46c4f046675aa"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-paper.png",
        "sha256": "2b9a4c74e3cf70f2a9d89040ea218998b08bab48da69dba8f6db1060888c9fb9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-night.png",
        "sha256": "b916c0ad946d776653e855a07b6b8d3df31c6d35035196b0e393cc5d00f98f2f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-color.png",
        "sha256": "51c9de6447de63684da64b0db20bbd33e6d0c73d11a6b289417cce0b25622a30"
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
          "mg-dev-laptop--16x9",
          "mg-dev-laptop--9x16",
          "mg-dev-laptop--1x1"
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
            "paperNight": 19.10210503472222,
            "paperColor": 9.28567165798611,
            "region": {
              "left": 103,
              "top": 205,
              "width": 1686,
              "height": 648
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.11737738715278,
            "paperColor": 12.30246310763889,
            "region": {
              "left": 78,
              "top": 168,
              "width": 952,
              "height": 1603
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 20.761311848958332,
            "paperColor": 7.68896484375,
            "region": {
              "left": 68,
              "top": 71,
              "width": 838,
              "height": 940
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
            "occupancy": 0.7467049319727893,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7467049319727893,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7467049319727893,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0417049407211447,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0430062585733884,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0417049407211447,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9571186728006248,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9571186728006248,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9571186728006248,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.30837673611111,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 22.409505208333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-90-frame-10.png",
                "sha256": "17a965c90f0293d1f73d1010da121d3e34e3cfaa5a857dd9eb8b9a59d5ee73e0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-90-frame-89.png",
                "sha256": "abb1434e3c63acd082fed8b7499a361ee91c134be538cd9534662277728609a7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-90-frame-79.png",
                "sha256": "abb1434e3c63acd082fed8b7499a361ee91c134be538cd9534662277728609a7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 22.30837673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-900-frame-16.png",
                "sha256": "5a210f862d05026cdfdc9595531b1a29ec70aa6fd4be9f2cb5598236a0ff6a41",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-900-frame-108.png",
                "sha256": "abb1434e3c63acd082fed8b7499a361ee91c134be538cd9534662277728609a7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-900-frame-792.png",
                "sha256": "abb1434e3c63acd082fed8b7499a361ee91c134be538cd9534662277728609a7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/16x9-duration-900-frame-899.png",
                "sha256": "abb1434e3c63acd082fed8b7499a361ee91c134be538cd9534662277728609a7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 26.151692708333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-90-frame-10.png",
                "sha256": "06c5cfa5ebe6f84db02cfeda90131a89989bf5d297011a08829393603d7c9135",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-90-frame-89.png",
                "sha256": "c9525f0a48ce32eb54759706a585ea6116443edf17c800b446dde44a8e5fd70a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-90-frame-79.png",
                "sha256": "c9525f0a48ce32eb54759706a585ea6116443edf17c800b446dde44a8e5fd70a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.919813368055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-900-frame-16.png",
                "sha256": "e9f25272cf5e5a651dfcc6b4bbdaa49aa593952de6bd9f07e6143e154c6e0a59",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-900-frame-108.png",
                "sha256": "c9525f0a48ce32eb54759706a585ea6116443edf17c800b446dde44a8e5fd70a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-900-frame-792.png",
                "sha256": "c9525f0a48ce32eb54759706a585ea6116443edf17c800b446dde44a8e5fd70a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/9x16-duration-900-frame-899.png",
                "sha256": "c9525f0a48ce32eb54759706a585ea6116443edf17c800b446dde44a8e5fd70a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 25.018446180555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-90-frame-10.png",
                "sha256": "a18176f602f29305951521cc894ff2e96b896289f15dbdf745d4d3585c6809e7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-90-frame-89.png",
                "sha256": "b02f19b038972644dd7aaa458b61d11c1fdcf635939db92b4a0888080673aa14",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-90-frame-79.png",
                "sha256": "b02f19b038972644dd7aaa458b61d11c1fdcf635939db92b4a0888080673aa14",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 24.880533854166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-900-frame-16.png",
                "sha256": "621cd49719d1da8ecd3ef8ad288587bffbaad6703877e1adc3a06a5e350c8ccc",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-900-frame-108.png",
                "sha256": "b02f19b038972644dd7aaa458b61d11c1fdcf635939db92b4a0888080673aa14",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-900-frame-792.png",
                "sha256": "b02f19b038972644dd7aaa458b61d11c1fdcf635939db92b4a0888080673aa14",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-dev-laptop/1x1-duration-900-frame-899.png",
                "sha256": "b02f19b038972644dd7aaa458b61d11c1fdcf635939db92b4a0888080673aa14",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Laptop lid opens onto a dashboard; settled frame clean, rebrands recolor chart and type."
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
      "bundleSha256": "73b7e7c1ca5f53d07ecf9bb74d4ebdd50f354a6c750537b2917f19416e6add03",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-laptop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-laptop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-laptop/16x9/detail.mp4",
      "bg": "#e7e1d7",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "82bb611c836ea677c2af2f706dcdd860d23b809bdfc61ab48873ddd3cfa23046",
        "loop": "4a582ced886ee82c5dc248f3551edcf5287cd230f4170c14061176bc05a1f64a",
        "detail": "3154f60e92d93c6cf40e211eef885b5f19b52e30a73297dcc90fd484a77fc93f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-laptop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-laptop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-laptop/9x16/detail.mp4",
      "bg": "#e7e1d7",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "432ecefc4334033aec67ed71c88b73d6a0bd7a4cf887ac4edc6ac32395cfb797",
        "loop": "8e1f7463acd6ed01b647c7e4fe5daab494bc821eb1143737d89fa407a41ce50a",
        "detail": "71944cf49f43cd74815618660bff8180079aea99707d82ca363083948aa6dd9f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-laptop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-laptop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-laptop/1x1/detail.mp4",
      "bg": "#e7e1d7",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5dc9e4eb43c45456688b80e50f3091dfb719cc124d1d23f389d171231faf1ae6",
        "loop": "27c27eda815d5cdc24fb6ceeb80775d7371ab0e917c522f31f819d7864bb5895",
        "detail": "38a30a26ba2590cb3f7f42c08fe2475f475bdeefa3418e1b11e2fac0d749427d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/73b7e7c1ca5f53d07ecf9bb74d4ebdd50f354a6c750537b2917f19416e6add03/index.mjs",
    "sha256": "73b7e7c1ca5f53d07ecf9bb74d4ebdd50f354a6c750537b2917f19416e6add03",
    "bytes": 177231,
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
    "at": "2026-10-09T03:52:19.562Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
