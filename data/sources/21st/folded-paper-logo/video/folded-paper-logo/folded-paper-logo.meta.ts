// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "isometric",
  "mechanic": [
    "origami"
  ],
  "tags": [
    "origami",
    "paper",
    "fold",
    "frame"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      30,
      65,
      100,
      135
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "role": "caption"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [],
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
    "sourceUrl": "21st first-party (Folded Paper Logo Frame, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B64831",
    "secondary": "#C9A85D",
    "color": "#29362F",
    "background": "#F4F0E5",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "An idea taking shape"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 35,
      "role": "caption"
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "brand": "fonts.heading"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Folded Paper Logo Frame",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "folded-paper-logo",
    "bundleSha256": "7f805128295eef79aedbcf61c5744670de276a9a227936053b0f383a95d62484",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:47:44.550Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-paper.png",
        "sha256": "78cdb6507402000b176874e5b6e51b722eeeb73fc4b2c335745d1e27638f0e4d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-night.png",
        "sha256": "176fd441625e007b406cefdd32090233ed62992d69d75bae87c50ba1b3e07553"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-color.png",
        "sha256": "4161ad3a2050679332090f6ebecfd90090f37e6d8cadb803f368051aad245413"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-paper.png",
        "sha256": "4acd341959e45c9b80690273981c5902bcafe6fe3d18c91735c59e6aacdfc5c9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-night.png",
        "sha256": "d7eafb63699435a926c63c3e20fd0be90276c3c45e0e0db795324f2b8fe7a78c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-color.png",
        "sha256": "dd766dd628c30bfae91b448d4749f4c3c982b72a5610bf0b0afc0ccbe97d82be"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-paper.png",
        "sha256": "dfb71df1c864f04f051ed3e361e5ce5c906ea0b7979039101b56493f5cec4261"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-night.png",
        "sha256": "e45230c65bf1234b0b1123da8c6d5320e117b7ab1caf969fc76637ea5b27106f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-color.png",
        "sha256": "5c5cc1cda2667c0874a82c85e1c6905339c8483261db68d0065d84bbf71e66e0"
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
          "folded-paper-logo--16x9",
          "folded-paper-logo--9x16",
          "folded-paper-logo--1x1"
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
            "paperNight": 34.272433810763886,
            "paperColor": 18.88473849826389,
            "region": {
              "left": 581,
              "top": 96,
              "width": 766,
              "height": 867
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.461344401041668,
            "paperColor": 16.37234157986111,
            "region": {
              "left": 107,
              "top": 392,
              "width": 874,
              "height": 1322
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 34.27734375,
            "paperColor": 18.88628472222222,
            "region": {
              "left": 161,
              "top": 96,
              "width": 766,
              "height": 867
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
            "occupancy": 0.45390431442638796,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.45390431442638796,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4481454361580024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7896948967344141,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7879028508265448,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7765532267433725,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8069410034246897,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8069410034246897,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7967029976142265,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.971245659722221,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 14.86838107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-150-frame-18.png",
                "sha256": "b58e7fe88b7525ce9f45eee1ddf7034f544a53ff36878236b650b10db88c6f8c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-150-frame-135.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-150-frame-132.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-150-frame-149.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 14.971245659722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-600-frame-20.png",
                "sha256": "faa0996a3f50cff74100ed571ca295576b06880ab8f5a01cfe5f2dbb24ea12c2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-600-frame-135.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-600-frame-528.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/16x9-duration-600-frame-599.png",
                "sha256": "3d655bff2411afa31aebb7aa54f679907bd38ced03c3a8815e532ee59d78660d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 20.138780381944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-150-frame-18.png",
                "sha256": "419b7524ad1e219275111e4b7b040f73fb80b80039fb925ed881a7b6e507e09e",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-150-frame-135.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-150-frame-132.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-150-frame-149.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 20.27615017361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-600-frame-20.png",
                "sha256": "853fb3803fbfcb0753761df42ccb3f361e4d716fb1e44626c2843f696347e1ca",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-600-frame-135.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-600-frame-528.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/9x16-duration-600-frame-599.png",
                "sha256": "e811b228bbd69d17ef9507d235a25884a60639d818745ac38ef37e2fa8f072bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 26.38693576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-150-frame-18.png",
                "sha256": "7bb58a2a365353b79984c0b02d9973b865d5f9195bd60eda0030b5a98235f3ad",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-150-frame-135.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-150-frame-132.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-150-frame-149.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 26.569661458333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-600-frame-20.png",
                "sha256": "d181bec7cb68193b905ce32fe0bdf9d8c18794cc95f57ac89b520bdee6cb876f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-600-frame-135.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-600-frame-528.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/folded-paper-logo/1x1-duration-600-frame-599.png",
                "sha256": "e8221fe7999502eb13d209e624e7621c45009d26a7185b2818728ddd592c3641",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The claimed title 'Folded Paper Logo Frame' is supported because the imagery shows a ring formed from multiple folded, extruded polygonal planes, visually resembling folded paper. The motion samples (images 2-4) show these polygons rising, assembling, and completing the frame, literally 'an idea taking shape.' The structure and animation directly support the title's claim without merely relying on the title text. \nNoBakedHeading: No decorative or unexplained block-title, category, or language label is baked into any image. The text 'An idea taking shape' matches the provided named-slot content and functions as an editable caption, not a static decorative heading. \nBrandAdherence: All three rebrand palettes (images 5-7) are present, clearly distinct, and each logo frame and caption is redesigned to match the described palette colors. Legibility remains strong across light and dark backgrounds. The logo's geometry and material are preserved, with accent and background colors consistently applied and no unexplained fixed blocks. \nLanguageAdherence: Across all variants and throughout the depicted motion sequence, the visual language card criteria are followed: the forms are solid extruded planes with face shading derived from palette, on a shared ground. Camera perspective is fixed, and motion verbs 'rise' and 'assemble' are shown with some 'travel.' Typography is sans-serif and numerals (where present, here in text) are tabular. No forbidden elements like flat UI or floating labels are present. Thus, all four checks are validated by concrete, visible evidence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 48,
        "compared": 48,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7f805128295eef79aedbcf61c5744670de276a9a227936053b0f383a95d62484",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.202Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "folded-paper-logo",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "117bfec82e62c02fb154fcf38b35e0f304c7ab81bb1f24480cc4cc9a8cda732c",
      "bundleSha256": "7f805128295eef79aedbcf61c5744670de276a9a227936053b0f383a95d62484",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/folded-paper-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/folded-paper-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/folded-paper-logo/16x9/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a36056d3973b891e7b2dcc9f71d4c61bc0ff2795a069da508f7ad9b900e2015f",
        "loop": "f6265484d117367ee10bd68ceeff2528c57bf5ff1271124fce0c3adc35efd2fb",
        "detail": "967107363299d0b91bba1e331d2cf04716487b725c9d1687a928be7cbab65709"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/folded-paper-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/folded-paper-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/folded-paper-logo/9x16/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0905120ad9c4814394e2fa334e963c4593680f28e62c867a72826202de8b1e30",
        "loop": "e5f4f1c15b5a5b5cdd8c906c10f1beed316a57830cc2cada36bed957bde39724",
        "detail": "62aa537393d1184655706a2f73bc454556f301998762b9854b0bc0795b519cb6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/folded-paper-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/folded-paper-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/folded-paper-logo/1x1/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7ccfde571f5b99841819428491822acf2ae3ab6029152ac87734826a703cc4a9",
        "loop": "f67c3d0f4211599a84bf73f6d5fea7a5d7cb65952bc80e55e93a37dae504fa54",
        "detail": "1fefb068fbad60e988c5f9d2fbefab9e0b12479da83302638482cc752ef16b80"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7f805128295eef79aedbcf61c5744670de276a9a227936053b0f383a95d62484/index.mjs",
    "sha256": "7f805128295eef79aedbcf61c5744670de276a9a227936053b0f383a95d62484",
    "bytes": 160337,
    "externals": [
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
    "at": "2026-10-09T23:05:14.987Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
