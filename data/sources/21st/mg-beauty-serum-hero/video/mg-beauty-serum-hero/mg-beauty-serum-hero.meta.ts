// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "bottle-rise-onto-podium"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "bottle-rise-onto-podium",
    "beauty",
    "skincare",
    "product",
    "hero"
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
      "in": 144,
      "out": 0
    },
    "markers": {
      "settled": 144
    },
    "beats": [
      0,
      36,
      72,
      108,
      144
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
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 30,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "bottle-rise-onto-podium",
      "prop": "transform",
      "from": "enter",
      "settledBy": 144,
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
    "ink": "#3B2219",
    "accent": "#D17834",
    "secondary": "#984C3E",
    "paper": "#F5CDB4",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "velline skin",
    "headline": "Dew Serum.",
    "sub": "glass skin in 14 days",
    "cta": "Shop the serum · $48"
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
      "brand": "fonts.serif"
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 30,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Serum Bottle Hero",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-serum-hero",
    "bundleSha256": "f6745b3896413d335bf63a8fd132fa96d9bc4a42077c94cc20fef6780e35bceb",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:07:07.076Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-paper.png",
        "sha256": "73724a23b6777611290f42345948cf5271f727c97e1c7e7d97ec2742132fcecd"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-night.png",
        "sha256": "9d984c4bc556c380cc75e39edb616a9865f21c24960610d2f24772c39f165b86"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-color.png",
        "sha256": "e81ff89dd0df782e8ae32a6085d5a613a16e3c78de51edaaae4355e29a65e12a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-paper.png",
        "sha256": "b80acc5e2171b7ffa1abce6931a1e1a2d7784c2ef7867ed5b37e585ff7b31ad0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-night.png",
        "sha256": "9d4bb96f30b3d0750be013b4cf06ed5b5bb843d793b55860c013f49e4e0642c5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-color.png",
        "sha256": "a4fcd2ddb7606e86e1cbf778318587d8759d964608bf69fcb00ae50ea56dac54"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-paper.png",
        "sha256": "183437c684d9ce370cbdc07beadbe18bb8c209a87989a733ad256c00e9eced35"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-night.png",
        "sha256": "ee228a52343ccc0b3665405273236dd20f806bf64c93be4e062b9e61ad4baa1e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-color.png",
        "sha256": "f2b450f0f01fbeee01e9ad0d7d0482175a66cae925c4d99a1bdee1d61a5d4b50"
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
          "mg-beauty-serum-hero--16x9",
          "mg-beauty-serum-hero--9x16",
          "mg-beauty-serum-hero--1x1"
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
            "paperNight": 32.657443576388886,
            "paperColor": 11.11984592013889,
            "region": {
              "left": 113,
              "top": 114,
              "width": 1708,
              "height": 966
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.34442816840278,
            "paperColor": 17.212320963541668,
            "region": {
              "left": 86,
              "top": 155,
              "width": 890,
              "height": 1675
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 30.747884114583332,
            "paperColor": 12.040147569444445,
            "region": {
              "left": 63,
              "top": 91,
              "width": 953,
              "height": 947
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
            "occupancy": 1.1270082396384482,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1270082396384482,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1276684670781896,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.018875834155679,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.018875834155679,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.018875834155679,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.096571101577348,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.096571101577348,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.096571101577348,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.801432291666667,
        "frames": [
          21,
          144,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.104817708333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-90-frame-10.png",
                "sha256": "7aec84a1c82a423c846c2e13ae09ac4dd56a561c37b57011baed688944bad715",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-90-frame-89.png",
                "sha256": "a5b80852fe4b1bf27a18bafcac55177bbe3c5a4d255cca29955a9ad504e2cd63",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-90-frame-79.png",
                "sha256": "a5b80852fe4b1bf27a18bafcac55177bbe3c5a4d255cca29955a9ad504e2cd63",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.801432291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-900-frame-21.png",
                "sha256": "a4d47ee8a01c7aee21ec8cbeebd266cc7063da2d40f868000c4a8d994d4e3d64",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-900-frame-144.png",
                "sha256": "a5b80852fe4b1bf27a18bafcac55177bbe3c5a4d255cca29955a9ad504e2cd63",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-900-frame-792.png",
                "sha256": "a5b80852fe4b1bf27a18bafcac55177bbe3c5a4d255cca29955a9ad504e2cd63",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/16x9-duration-900-frame-899.png",
                "sha256": "a5b80852fe4b1bf27a18bafcac55177bbe3c5a4d255cca29955a9ad504e2cd63",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.88205295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-90-frame-10.png",
                "sha256": "b61a979a2d6bd771bc9add454385806da1f8860d5f3e87e2dddcf0a15a7e0770",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-90-frame-89.png",
                "sha256": "34d9cf722a98fe60530090ec6e7721d9015a49de68233df59ae9e809bd9cdbed",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-90-frame-79.png",
                "sha256": "34d9cf722a98fe60530090ec6e7721d9015a49de68233df59ae9e809bd9cdbed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.706705729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-900-frame-21.png",
                "sha256": "e53c832c8b8ff34af3b37bf816e2cd29d4de1c524c27253d4eb1d4bad7c51973",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-900-frame-144.png",
                "sha256": "34d9cf722a98fe60530090ec6e7721d9015a49de68233df59ae9e809bd9cdbed",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-900-frame-792.png",
                "sha256": "34d9cf722a98fe60530090ec6e7721d9015a49de68233df59ae9e809bd9cdbed",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/9x16-duration-900-frame-899.png",
                "sha256": "34d9cf722a98fe60530090ec6e7721d9015a49de68233df59ae9e809bd9cdbed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.978841145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-90-frame-10.png",
                "sha256": "d85088a909cc9e26b22e5b0188d7d1b71a8b2a89bc23830b2fb2587fb5e3f7db",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-90-frame-89.png",
                "sha256": "8050c7a944f6d48ed39b3294afef506b8018b2f597dcdeabc2965e4cfbc2c531",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-90-frame-79.png",
                "sha256": "8050c7a944f6d48ed39b3294afef506b8018b2f597dcdeabc2965e4cfbc2c531",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.805881076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-900-frame-21.png",
                "sha256": "91f68e364c51455333e1afc8af6f6a6886ccfafb0df96275d718e0819e52a490",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-900-frame-144.png",
                "sha256": "4259a13430303840b27af04a4e75219f41c271f57895fcd50c1aedfab5fb6293",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-900-frame-792.png",
                "sha256": "8050c7a944f6d48ed39b3294afef506b8018b2f597dcdeabc2965e4cfbc2c531",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-beauty-serum-hero/1x1-duration-900-frame-899.png",
                "sha256": "8050c7a944f6d48ed39b3294afef506b8018b2f597dcdeabc2965e4cfbc2c531",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Serum bottle on a plinth beside a flowing serif title, subline and CTA; no overlaps in any brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "f6745b3896413d335bf63a8fd132fa96d9bc4a42077c94cc20fef6780e35bceb",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.083Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/16x9/detail.mp4",
      "bg": "#ebbfa7",
      "posterFrame": 144,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3d6f1b6dcb42680d5b5897e72b4729340a84a02c25a1ec2642f8b17f03f65a86",
        "loop": "2e59766938dd93e3fa56ba9702cf0520190689a45ff4b527b64d0e5ea8037432",
        "detail": "04a99bff4f7ac538c503b7de3e571e30d9e2f09e17c8850e7ca6b7c278485ca1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/9x16/detail.mp4",
      "bg": "#ebbfa7",
      "posterFrame": 144,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3983d89ac84654e752d80ec8c4694f46ab896870698079e09a8cbd48dacbd31a",
        "loop": "4c0992e1be1f792072d6fe6fe3d7688efaf5e1c4864b5faa41b41b760b641a20",
        "detail": "52123fcfa19b086771cef795296534b5332a00e6176512b69940833608126a32"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-serum-hero/1x1/detail.mp4",
      "bg": "#ebbfa7",
      "posterFrame": 144,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "468de31e2be60678a582b023eeeb796176405253e0a8c7cd4c77dd263eca55c4",
        "loop": "709cd8532831c19bcf9f9e3c72f33e3a9477b0bcca300b0c59c832df4a02282c",
        "detail": "68ca27f09d0e3a571e7d0c2b6523b6ad86cac3d17f7b561e1ab93dd30f3d2da9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f6745b3896413d335bf63a8fd132fa96d9bc4a42077c94cc20fef6780e35bceb/index.mjs",
    "sha256": "f6745b3896413d335bf63a8fd132fa96d9bc4a42077c94cc20fef6780e35bceb",
    "bytes": 268307,
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
    "at": "2026-10-09T07:10:10.328Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
