// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "overprint"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "risograph",
    "riso",
    "print",
    "two-color",
    "overprint",
    "misregistration",
    "halftone",
    "grain",
    "paper",
    "poster",
    "opener",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 96,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 88,
      "out": 0
    },
    "markers": {
      "settled": 88,
      "pass1": 6,
      "pass2": 24,
      "snap": 58
    },
    "beats": [
      0,
      6,
      24,
      48,
      58,
      88
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "text",
      "type": "text",
      "maxChars": 40,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "eyebrow"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "kicker",
      "prop": "x",
      "from": "left",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "inks",
      "prop": "print",
      "from": "top",
      "settledBy": 48,
      "easing": "ease"
    },
    {
      "target": "inks",
      "prop": "register",
      "settledBy": 88,
      "easing": "spring"
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (headline printed by two grainy riso ink drums that drift out of register, overprint, then lock, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "kicker": "Introducing",
    "color": "#F2E9FF",
    "primary": "#C77DFF",
    "secondary": "#80FFDB",
    "background": "#170F1E",
    "fontFamily": "Bricolage Grotesque",
    "misregister": 0.75,
    "grain": true,
    "seed": 7
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "misregister",
      "label": "Misregister",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    }
  ],
  "name": "Two-Ink Riso Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "riso-misregister-title",
    "bundleSha256": "14f461853860f87e2577978a34fc4c87469c376b3d62b0f703abdb8cb8ea3d87",
    "sourceSnapshot": {
      "sha256": "a0bf921565e20b46119c2943b1bf56c893d63f6fe38bc741ab25e796006b7256",
      "files": 1866
    },
    "renderedAt": "2026-10-09T13:57:54.830Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-paper.png",
        "sha256": "3052ce0b8269569c51fee89cb4066e1866cd1f6696cd5ef33e1476f0a81e3a0f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-night.png",
        "sha256": "5ee0af2869dc776e879530f61a200a6b75e982bfd6360023f40db7ef55e8a68f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-color.png",
        "sha256": "c124e469c4bbe3e5b9aaa6301ebf73f1dd92413ba28b971995ba4641cf70e670"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-paper.png",
        "sha256": "28124b730e416febca89fc71582ab4f6ff6821e27fc112567090ea4bd75589cc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-night.png",
        "sha256": "ee7fe3c87ce7c8b5fbef3cb637aa808be4e336da3279db7126330fe8106b6faf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-color.png",
        "sha256": "1c7195ec02cf8499ceb431b497e3bd256a88d9a13a28409c258090f5bc222a2b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-paper.png",
        "sha256": "d83cbf52b4ca5b16260482dcd929edd61a2d93fa5695582cc9d9d692454c7a24"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-night.png",
        "sha256": "62c5f264e7400f0e0336674d255e63fb5c09ddecca2eb5d369e7e92bba47f53b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-color.png",
        "sha256": "3307318a54cb80b00a8b44d24bed92aa2c0d131415ce08bbf3e2c89380e087ce"
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
          "riso-misregister-title--16x9",
          "riso-misregister-title--9x16",
          "riso-misregister-title--1x1"
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
            "paperNight": 21.87619357638889,
            "paperColor": 14.366780598958334,
            "region": {
              "left": 38,
              "top": 39,
              "width": 1869,
              "height": 1002
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 26.287027994791668,
            "paperColor": 16.073323567708332,
            "region": {
              "left": 38,
              "top": 39,
              "width": 1035,
              "height": 1842
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.76803927951389,
            "paperColor": 14.683756510416666,
            "region": {
              "left": 38,
              "top": 39,
              "width": 1042,
              "height": 1002
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
            "occupancy": 1.2799513613315698,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2799513613315698,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2799513613315698,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.303006011432351,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.303006011432351,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.303006011432351,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2686135839795454,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2686135839795454,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2686135839795454,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 33.25151909722222,
        "frames": [
          13,
          88,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 96,
            "averageChannelDifference": 33.272677951388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-96-frame-11.png",
                "sha256": "a770e945260d2ba74db40f363fa36fa614f935081b69975309092ca4e3df4084",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-96-frame-88.png",
                "sha256": "728c6be428a1bc8a95b2e2f772e2466473a5817f3b27e6200c5836fe28a0d85f",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-96-frame-84.png",
                "sha256": "61ad9d93b96002bd395c7c9548f567c6178433b208289e04a32e5dafcb7a8a67",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-96-frame-95.png",
                "sha256": "687144566dfacf77668fd06e07ee623bcfcde7b7a20ec71b9c8947f47d850f3b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 33.25151909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-600-frame-13.png",
                "sha256": "304b8a51a70661df327f74226ca0609a49748dd6373e0b07ef7e03156d4b77df",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-600-frame-88.png",
                "sha256": "728c6be428a1bc8a95b2e2f772e2466473a5817f3b27e6200c5836fe28a0d85f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-600-frame-528.png",
                "sha256": "34752aa02afaa4889309bc418eaedc7d22382466fc9621b27e0e2ca5910114f0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/16x9-duration-600-frame-599.png",
                "sha256": "83d6fa8020dbb340befac0822651db1a3cae75359eb8c19167b055f2843b5db8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 96,
            "averageChannelDifference": 36.708224826388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-96-frame-11.png",
                "sha256": "f04809907163e0ac78b2560583869f23b8a5d319e02fad79bbfcc535e7de3973",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-96-frame-88.png",
                "sha256": "d67ed280ba94e740466ae6d666eece683faa492d9986248e9ec2688423fb4449",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-96-frame-84.png",
                "sha256": "9366f93318aef34daba7e7beefa626c177c0bacf8860d91926e30a3cd9f624aa",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-96-frame-95.png",
                "sha256": "0af60132139d6b28bc5dd2c02a0494fcf0bae473a4c935d6dfae043554f8355a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 36.63671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-600-frame-13.png",
                "sha256": "8d3e4c12716442e7bf11cc032ccd52ea6f10e4f4ce3ef4b17705802a5d6b777a",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-600-frame-88.png",
                "sha256": "dacd36cba869b3b9a280691e0794f2eb82281a184135508d89602c05b411fa9d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-600-frame-528.png",
                "sha256": "c2bf307ae0755d2e125686b66c7ab8d4a291c079474b4694c25c8ab53045cc1e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/9x16-duration-600-frame-599.png",
                "sha256": "f79a31616e7354bed25b566d51fde93e9ab134919b69ead4c1f0f10d33d15422",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 96,
            "averageChannelDifference": 36.107638888888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-96-frame-11.png",
                "sha256": "ccd7d129cee0a1b99e707e47526ce62c99e1a61f3c42fb16849bbd321fc496ac",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-96-frame-88.png",
                "sha256": "6b628aeae5f48a1bca850786deab25121e41672ed9899090cd18a16e0047ace3",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-96-frame-84.png",
                "sha256": "0b94abc6afdf23f3d5ee472bf9114116942e6f9076c7152f578ce41244b8f8f9",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-96-frame-95.png",
                "sha256": "351a4f3ed957bd6697a07dc734def2a5a76377f6ac4f3b3c7e3cb87ad54c4819",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 36.052734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-600-frame-13.png",
                "sha256": "655046f2c7443121ecc63bce53cda6bd78e94de28670696ef27490c814db22a1",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-600-frame-88.png",
                "sha256": "1111c1b65e8c1449cf889c1c8b90fd51419e9d099daef28cb22a4fe219a3b4f1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-600-frame-528.png",
                "sha256": "8964188ed3dbdef131ae010b9c846f7fa2abd40e545182083e59af5ac7849ada",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/riso-misregister-title/1x1-duration-600-frame-599.png",
                "sha256": "cc46281a6757dffd675927de82274aec2d0120d6708ed563921910bdf12291b1",
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
        "note": "TitleMatches: The claimed title 'Two-Ink Riso Title' is visually supported. The poster and its animated samples use a duotone/halftone ink effect for large display text and overlapping graphic ellipses, consistent with risograph style. Chronological motion frames (images 2–4) show an assembling/replacement entrance of the halftone graphics and type, matching the assembly and cut-mask movement described.\n\nNoBakedHeading: There is no visible extraneous block-title or decorative label baked into the composition; all text (\"Introducing Ship faster\") matches legit editable slot content. Crosshair and palette marks are in keeping with print art and not title blocks.\n\nBrandAdherence: Images 5–7 present three distinct palette rebrands. Each uses its respective supplied palette: blue/tan, gold/blue, green/purple. All elements—type, masks, background, and accent marks—remain legible and preserve ink/shape/material distinctiveness per swatches. No unexplained fixed block colors remain. All artwork (print marks, halftones) is consistently adapted.\n\nLanguageAdherence: Oversized sans display type, halftone dot fields, static layout, and all text roles (display, accent, numerals) remain consistent and analog across all palettes and motion samples. No evidence of frosted glass, browser chrome, or floating card elements; only the prescribed riso-style material and motions are present. The language card's instructions about roles and prohibitions are fully observed."
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
      "bundleSha256": "14f461853860f87e2577978a34fc4c87469c376b3d62b0f703abdb8cb8ea3d87",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T13:59:22.270Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/riso-misregister-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/riso-misregister-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/riso-misregister-title/16x9/detail.mp4",
      "bg": "#18111f",
      "posterFrame": 88,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "26615709e2f962dcc41138636e22e0bf5614a9761b5676707d4cd1ba27217578",
        "loop": "af983d0646477d9a0aaecd13715eff384c9d2bd7f0d2c9c9684cc42f2d40c026",
        "detail": "2c170f8bcf9849a990a94ff528d83e53fada28696cb09399d66a5a27ab668906"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/riso-misregister-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/riso-misregister-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/riso-misregister-title/9x16/detail.mp4",
      "bg": "#18111f",
      "posterFrame": 88,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "40d2820128792586b59ec145d09030f2420e9dba10e2b95c73fa4802ff33f638",
        "loop": "ed126bde6c17f5f4e819637141741576d1e467d5221ee5a8db6727f83b459b95",
        "detail": "1ba37342d818a37982ee90469028ccaf3fae1e28da03a66e1eedda84dadbe488"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/riso-misregister-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/riso-misregister-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/riso-misregister-title/1x1/detail.mp4",
      "bg": "#130d18",
      "posterFrame": 88,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3f0d060df6252c6f538debab142ea3cfd33d2ab26f67e25935de96b914ec85e1",
        "loop": "a72183746752a96853869e37d735d18b16a967ac75626f6d9d40fd07b3d15e03",
        "detail": "588701c0e9ba9b68f1fd6382a2e50a854ecd10d69bb3110e39a8ec9cdf2c07e4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/14f461853860f87e2577978a34fc4c87469c376b3d62b0f703abdb8cb8ea3d87/index.mjs",
    "sha256": "14f461853860f87e2577978a34fc4c87469c376b3d62b0f703abdb8cb8ea3d87",
    "bytes": 168943,
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
    "at": "2026-10-09T14:02:24.516Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
