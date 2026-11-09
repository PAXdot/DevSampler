// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "camera-pull-out-to-crop-marks"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "camera-pull-out-to-crop-marks",
    "launch",
    "product-card",
    "title"
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
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 18,
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
      "maxChars": 18,
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
      "target": "camera-pull-out-to-crop-marks",
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
    "ink": "#FFFFFF",
    "accent": "#FFB547",
    "secondary": "#7E8083",
    "paper": "#121316",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "New · out now",
    "title": "Lumen 2.0",
    "sub": "Your AI workspace",
    "cta": "Try it free →"
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 18,
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
      "max": 18,
      "role": "cta"
    }
  ],
  "name": "Auto-Reframe Launch Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fmt-reframe",
    "bundleSha256": "8013d503687be1a461e2d31f6aed8d51e41f7c44a072fdf665a3d3eb668002ba",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:46:15.864Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-paper.png",
        "sha256": "20b4a13aba4bd4fb67e4fe30eede4a3c40793df5fa861c9201f0371ee5a40b20"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-night.png",
        "sha256": "6ca476d6a36f57430b625df7278ba920e378a406fb03a004bff2b1ebd760dc90"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-color.png",
        "sha256": "704324170f34a040094fb4c66e7a6195f3ffd8d9db01ec8ccb8ef57c8039808d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-paper.png",
        "sha256": "8bf563c8e5f40a5b2a5e9cd4d60326cf136ac2bf4c9fba1c3a5fc8d5b23e66f9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-night.png",
        "sha256": "ed85d69cedd286ef4221aa1d5397e5517ddc1672920b6aabfae25c6642b6b47b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-color.png",
        "sha256": "ee4783cfc5c1d5b0e2d9c67dc7d026b9babcba9dcbb2e397eac2be3efe2e4264"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-paper.png",
        "sha256": "607367b41c5563c9f2ea9bf351f24108d24de2eee8c09a4f96d995226ada00c8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-night.png",
        "sha256": "31a97cc2c5c1f752fe52716371162ee99ae830d9cbdd8f207d9f14dac78473a6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-color.png",
        "sha256": "9de09af5336356016e35804cf9ae165383579d3e739fef23e19d25cd5dcb21e6"
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
          "mg-fmt-reframe--16x9",
          "mg-fmt-reframe--9x16",
          "mg-fmt-reframe--1x1"
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
            "paperNight": 14.614393446180555,
            "paperColor": 6.944037543402778,
            "region": {
              "left": 32,
              "top": 32,
              "width": 1856,
              "height": 1016
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 24.307291666666668,
            "paperColor": 12.183295355902779,
            "region": {
              "left": 15,
              "top": 32,
              "width": 1051,
              "height": 1856
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 16.462510850694443,
            "paperColor": 7.360432942708333,
            "region": {
              "left": 32,
              "top": 32,
              "width": 1016,
              "height": 1016
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
            "occupancy": 1.2888077041516197,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2888077041516197,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2888077041516197,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3332056073458192,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3332056073458192,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3332056073458192,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2542419802854843,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2542419802854843,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2542419802854843,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 40.30067274305556,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 41.261935763888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-90-frame-10.png",
                "sha256": "a4625f03c17f678b6b9d69723e04c01f3e12656e91bc4f98035933dbed50bc62",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-90-frame-89.png",
                "sha256": "4f2766262edb8cb605c5dd15abef64bd793f32e3779e301fa8a00b5882ae75fa",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-90-frame-79.png",
                "sha256": "4f2766262edb8cb605c5dd15abef64bd793f32e3779e301fa8a00b5882ae75fa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 40.30067274305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-900-frame-13.png",
                "sha256": "046ca680d502129f8d12e25fedbf8dd799470cb98237681b01a43eec72a31570",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-900-frame-90.png",
                "sha256": "4f2766262edb8cb605c5dd15abef64bd793f32e3779e301fa8a00b5882ae75fa",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-900-frame-792.png",
                "sha256": "4f2766262edb8cb605c5dd15abef64bd793f32e3779e301fa8a00b5882ae75fa",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/16x9-duration-900-frame-899.png",
                "sha256": "4f2766262edb8cb605c5dd15abef64bd793f32e3779e301fa8a00b5882ae75fa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 60.59754774305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-90-frame-10.png",
                "sha256": "77891a7c1647738d09b2d11dccc3a0278618cc0ca1844e243c38cb4bc2436059",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-90-frame-89.png",
                "sha256": "fe4cc3ebd8a7782ce3818f595e3bf70c2ae50dc0159c51979cba0712c79f0700",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-90-frame-79.png",
                "sha256": "3898a1083be4ba6f8f8bd402288170c9da3c4b141b686b58e60852f39029b94b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 59.9638671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-900-frame-13.png",
                "sha256": "cc65b2947a024c12ee8b9fddf4456c64e75ae75a6324b71b75ed01d45ac737d3",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-900-frame-90.png",
                "sha256": "fe4cc3ebd8a7782ce3818f595e3bf70c2ae50dc0159c51979cba0712c79f0700",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-900-frame-792.png",
                "sha256": "c4e7ea833ba8c29050621eb0768a26d9edb39fee8fbbd2f1594720b18d9ea810",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/9x16-duration-900-frame-899.png",
                "sha256": "fe4cc3ebd8a7782ce3818f595e3bf70c2ae50dc0159c51979cba0712c79f0700",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 37.04481336805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-90-frame-10.png",
                "sha256": "fc27b4544b390ac2e1eed9d909b4d08ef1b71ab53c294c6dfc2efc6a8fe9665d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-90-frame-89.png",
                "sha256": "9a23d8f8faaba48fe1ff78334349c6530e8d98d96b11220765fdeb38b7b130ce",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-90-frame-79.png",
                "sha256": "9a23d8f8faaba48fe1ff78334349c6530e8d98d96b11220765fdeb38b7b130ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 36.47938368055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-900-frame-13.png",
                "sha256": "78637fa0ee48124b6ac30c6e49916f79e2c007d3385e5c392c88e8e31693c647",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-900-frame-90.png",
                "sha256": "9a23d8f8faaba48fe1ff78334349c6530e8d98d96b11220765fdeb38b7b130ce",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-900-frame-792.png",
                "sha256": "9a23d8f8faaba48fe1ff78334349c6530e8d98d96b11220765fdeb38b7b130ce",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-fmt-reframe/1x1-duration-900-frame-899.png",
                "sha256": "9a23d8f8faaba48fe1ff78334349c6530e8d98d96b11220765fdeb38b7b130ce",
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
        "note": "A launch card auto-reframes between formats with an amber accent and weekly brief chart."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "8013d503687be1a461e2d31f6aed8d51e41f7c44a072fdf665a3d3eb668002ba",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/16x9/detail.mp4",
      "bg": "#404144",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0c83b41c8ce1d0369e61a2d33cd0afe94f839a66ef830a99d732c09b0ef41dd8",
        "loop": "63b03dbf79f0ce41c06c06e635344aae4627b6895600b0f6f97f75ae9a77c199",
        "detail": "35e81be9b7995e9505226dbd67484923eb6ec8acbfcc6cffe498eb784fea98f0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/9x16/detail.mp4",
      "bg": "#404245",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5addcd612a8549be219e9a69161f688a35c882bf64cd90cf6477e9daade71367",
        "loop": "0e00fd549876f4afb9c5a6708a1168ea40571734c0e8c3e5162005cab8cc0f57",
        "detail": "7e2a2acbc7918e92649a184e18db69e6420631d926a24c0c458ebe34987685cb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-reframe/1x1/detail.mp4",
      "bg": "#404245",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a1bcc0cc90f5c3019aa5dc0df3489d5363523c934fef97b1b7c4f6964c5f787b",
        "loop": "9c21e0fe9f1ac13dba47c5d5123a5e7d34b30e817e91d5bd77822bfe2937ea77",
        "detail": "7dafb1517344aa7a50a9ed66bdeec78bd19702dc4b78df3e4ac622fb1e48e255"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8013d503687be1a461e2d31f6aed8d51e41f7c44a072fdf665a3d3eb668002ba/index.mjs",
    "sha256": "8013d503687be1a461e2d31f6aed8d51e41f7c44a072fdf665a3d3eb668002ba",
    "bytes": 192719,
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
    "at": "2026-10-09T03:54:22.176Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
