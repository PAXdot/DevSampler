// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "karaoke-word-fill"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "karaoke-word-fill",
    "captions",
    "subtitles",
    "karaoke",
    "voiceover"
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
      "in": 117,
      "out": 0
    },
    "markers": {
      "settled": 117
    },
    "beats": [
      0,
      29,
      59,
      88,
      117
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
      "key": "caption",
      "type": "text",
      "maxChars": 64,
      "role": "caption"
    },
    {
      "key": "source",
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
      "target": "karaoke-word-fill",
      "prop": "transform",
      "from": "enter",
      "settledBy": 117,
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
    "accent": "#D8FF4A",
    "secondary": "#808286",
    "paper": "#07080C",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "caption": "Meet Lumen. Your docs, your code, your team, in one place.",
    "source": "rec 00:04:12"
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
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 64,
      "role": "caption"
    },
    {
      "key": "source",
      "label": "Source",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Karaoke Captions",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-karaoke",
    "bundleSha256": "b11a745613143ba76f76f02a42808cccf4962545594a724027afa69635e2d232",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:52.377Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-paper.png",
        "sha256": "94f5e67b7b726c9633d5fb838b29203056f8459d2fb1a2798f4c9ad9dcf546d6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-night.png",
        "sha256": "9aaeb32589b3aed6dbb768cc5c914c1b547d0f18aace3ea881f20c88708863ae"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-color.png",
        "sha256": "8aacb5a8911dd8cc811e1b655a4b4e7075a02980f6e7a299db661a851104d8ac"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-paper.png",
        "sha256": "24adff806c436f3d2073f25b71ac6fa7560c7d0e17a912117af29addfbc725ca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-night.png",
        "sha256": "cb1522af0255ab2f32d54bad35608feff840896fff6955d9fc64cdc20f3504e0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-color.png",
        "sha256": "990f71a872fed807d1834a02eb2c2ad1d2f0eb476a6db8ce57f8553a7ffcb790"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-paper.png",
        "sha256": "82c93a40c35383d5b30057b3cd4a763e06ad2f6ed19efae375f4705356b3c07b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-night.png",
        "sha256": "ab7ba4f880159bb1a681afa6e500deb4211abcafadd49480839cf556987270ab"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-color.png",
        "sha256": "a55fc5fedd302f3f5d5210652c40723eac94047eed2e19e0680928c3a14f4af8"
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
          "mg-cap-karaoke--16x9",
          "mg-cap-karaoke--9x16",
          "mg-cap-karaoke--1x1"
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
            "paperNight": 10.56955295138889,
            "paperColor": 5.525770399305555,
            "region": {
              "left": 245,
              "top": 58,
              "width": 1610,
              "height": 924
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 24.00566948784722,
            "paperColor": 9.67209201388889,
            "region": {
              "left": 86,
              "top": 154,
              "width": 908,
              "height": 1554
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 15.917154947916666,
            "paperColor": 7.461480034722222,
            "region": {
              "left": 112,
              "top": 54,
              "width": 914,
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
            "occupancy": 0.8948200550796452,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8929719650205763,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0068468456055264,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9643913506760731,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9597902625556397,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9463020756785226,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0605801248254219,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.051411362441639,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9025022045855381,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.389431423611111,
        "frames": [
          17,
          117,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.389431423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-90-frame-10.png",
                "sha256": "224d7270eb947f1d2672555c4d7e731bcb5bdd99e2e980e77f94f3d33b79b75a",
                "alphaMass": 10029
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-90-frame-89.png",
                "sha256": "83fa170b90af2dcf5201dfd9871ac92f22ccc0c90d354c2cb9170334137c1152",
                "alphaMass": 18020
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-90-frame-79.png",
                "sha256": "83fa170b90af2dcf5201dfd9871ac92f22ccc0c90d354c2cb9170334137c1152",
                "alphaMass": 18020
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.389431423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-900-frame-17.png",
                "sha256": "224d7270eb947f1d2672555c4d7e731bcb5bdd99e2e980e77f94f3d33b79b75a",
                "alphaMass": 10029
              },
              {
                "frame": 117,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-900-frame-117.png",
                "sha256": "83fa170b90af2dcf5201dfd9871ac92f22ccc0c90d354c2cb9170334137c1152",
                "alphaMass": 18020
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-900-frame-792.png",
                "sha256": "83fa170b90af2dcf5201dfd9871ac92f22ccc0c90d354c2cb9170334137c1152",
                "alphaMass": 18020
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/16x9-duration-900-frame-899.png",
                "sha256": "83fa170b90af2dcf5201dfd9871ac92f22ccc0c90d354c2cb9170334137c1152",
                "alphaMass": 18020
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.983723958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-90-frame-10.png",
                "sha256": "3274e57164ccd7bd8e8a55e8f6f364542089e38c6f5a9b4ff820661c86634aa9",
                "alphaMass": 21404
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-90-frame-89.png",
                "sha256": "4674e06ea42d8f98b3c21e0081745a1a80f3b1984321e9b8ffcf73e00290ed17",
                "alphaMass": 32351
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-90-frame-79.png",
                "sha256": "4674e06ea42d8f98b3c21e0081745a1a80f3b1984321e9b8ffcf73e00290ed17",
                "alphaMass": 32351
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.983723958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-900-frame-17.png",
                "sha256": "3274e57164ccd7bd8e8a55e8f6f364542089e38c6f5a9b4ff820661c86634aa9",
                "alphaMass": 21404
              },
              {
                "frame": 117,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-900-frame-117.png",
                "sha256": "4674e06ea42d8f98b3c21e0081745a1a80f3b1984321e9b8ffcf73e00290ed17",
                "alphaMass": 32351
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-900-frame-792.png",
                "sha256": "4674e06ea42d8f98b3c21e0081745a1a80f3b1984321e9b8ffcf73e00290ed17",
                "alphaMass": 32351
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/9x16-duration-900-frame-899.png",
                "sha256": "4674e06ea42d8f98b3c21e0081745a1a80f3b1984321e9b8ffcf73e00290ed17",
                "alphaMass": 32351
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.6005859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-90-frame-10.png",
                "sha256": "6f7b8426ebd7eb0b3be687e08cb2bda875c956183532c5c7856656633f07b178",
                "alphaMass": 13016
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-90-frame-89.png",
                "sha256": "fff9cd629b6c43825db5c28325e2fb39b41d2f235c58614227c48c6d10d19594",
                "alphaMass": 22341
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-90-frame-79.png",
                "sha256": "fff9cd629b6c43825db5c28325e2fb39b41d2f235c58614227c48c6d10d19594",
                "alphaMass": 22341
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.6005859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-900-frame-17.png",
                "sha256": "6f7b8426ebd7eb0b3be687e08cb2bda875c956183532c5c7856656633f07b178",
                "alphaMass": 13016
              },
              {
                "frame": 117,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-900-frame-117.png",
                "sha256": "fff9cd629b6c43825db5c28325e2fb39b41d2f235c58614227c48c6d10d19594",
                "alphaMass": 22341
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-900-frame-792.png",
                "sha256": "fff9cd629b6c43825db5c28325e2fb39b41d2f235c58614227c48c6d10d19594",
                "alphaMass": 22341
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-cap-karaoke/1x1-duration-900-frame-899.png",
                "sha256": "fff9cd629b6c43825db5c28325e2fb39b41d2f235c58614227c48c6d10d19594",
                "alphaMass": 22341
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
        "note": "Karaoke caption highlights each word in the accent; transparent layer, rebrands distinct."
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
      "bundleSha256": "b11a745613143ba76f76f02a42808cccf4962545594a724027afa69635e2d232",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 117,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "310628f1ea3bf103779d45b621b50128f960625137e9989ff0319611458c044c",
        "loop": "8786c18d2a5bd2d441690b6a502a17abe147c1c090d60bce62c52cba0953e991",
        "detail": "0d033cf1ee2cae7dd3d6b1d8b72da9ad2735f2517eac599d760b257c5f423f1f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 117,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "471fc459746d0254cbff1ee9311f8a3b8baef55aead8baaef82218bc42766a35",
        "loop": "7368ed057c4fcf99e540477d7593c7bc783dfab9f829fd90764d8b1c6327d52e",
        "detail": "d109f7f9d1dc32ff5b06ef617122b069726b6800d9594d86cfa249d08b14f7c8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-karaoke/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 117,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "76b7f612af304174985321da3180bf089b553084647244e19c967b960f9ae0b1",
        "loop": "bcfb2020b865ee8c22809e2d2b4c83c05423e4aa2306b9a42d3f86275107fca3",
        "detail": "6861e41d2bcfbe35154a5a4116a779428ccd27236ca80c2cbbeb3fab408b0f51"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b11a745613143ba76f76f02a42808cccf4962545594a724027afa69635e2d232/index.mjs",
    "sha256": "b11a745613143ba76f76f02a42808cccf4962545594a724027afa69635e2d232",
    "bytes": 191160,
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
    "at": "2026-10-09T03:43:10.570Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
