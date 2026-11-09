// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "isometric",
  "mechanic": [
    "tape"
  ],
  "tags": [
    "tape",
    "measurement",
    "reel",
    "count"
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
      "key": "value",
      "type": "number",
      "role": "heading"
    },
    {
      "key": "label",
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
    "sourceUrl": "21st first-party (Tape Measure Count, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C34B32",
    "secondary": "#E0B64D",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "value": 72,
    "label": "Measure what matters"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 99,
      "role": "heading"
    },
    {
      "key": "label",
      "label": "Label",
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
  "name": "Tape Measure Count",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "tape-measure-count",
    "bundleSha256": "5064afd2d7c5399b293c8e3a9a1c1b38b2accddff53a53cbe5aa6976b8c07b15",
    "sourceSnapshot": {
      "sha256": "de7e642bcc5aea77fca1b37a034278288bb6c3e6764a2876338cde9c7e59dadb",
      "files": 2190
    },
    "renderedAt": "2026-10-09T22:52:13.935Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-paper.png",
        "sha256": "54fb4fc3cff3befb632748e3945ff786ef357d4eb725f18ddd22f8bf6ec25795"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-night.png",
        "sha256": "da6c16ec9deeb6f9bb2f2ccf6b9a2dce4ff045ccb85a1f997a471963b149a2f8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-color.png",
        "sha256": "908a1cfe10932282694c6ec01696c37d621ec124057d82a42aa216c72c5ea117"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-paper.png",
        "sha256": "6262e66d9249a1170ecabe17fcf96acf7e1f795fe022a9046b65c1566945da81"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-night.png",
        "sha256": "531ebac34f0ee702f0a1e9eb4ef766e69100b43bc62f785135bda4c7fa36cb67"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-color.png",
        "sha256": "d9dd0b4ac316d38cd986905f5f9e1e3a2fb76683bdcb8c0eef9f9b4b0e0dfdcb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-paper.png",
        "sha256": "0eff4bbe30849c6495f732e31e3d0b65d39d261034733e2b33e3d909543fc889"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-night.png",
        "sha256": "7b91340e8a1bd509e74e26e910971264184be799b280f264a5b37f37d57642f9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-color.png",
        "sha256": "f44071e53e9ab77f5f18cc519dc4cf0c16cc11954dca5a4006143eaf82bda0c7"
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
          "tape-measure-count--16x9",
          "tape-measure-count--9x16",
          "tape-measure-count--1x1"
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
            "paperNight": 23.582194010416668,
            "paperColor": 12.995171440972221,
            "region": {
              "left": 263,
              "top": 384,
              "width": 1399,
              "height": 570
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.297688802083332,
            "paperColor": 10.290690104166666,
            "region": {
              "left": 108,
              "top": 263,
              "width": 866,
              "height": 1615
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.508544921875,
            "paperColor": 15.986083984375,
            "region": {
              "left": 78,
              "top": 384,
              "width": 862,
              "height": 570
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
            "occupancy": 0.5440595332140059,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5450157011106913,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5431033653173205,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8931482990572774,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6236449617784358,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6587511547829009,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5959549743537105,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5970023468921177,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5949076018153032,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.280598958333333,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 5.307834201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-150-frame-18.png",
                "sha256": "1b251e53183ce02be1d263086daba51f217e430fcac7251c63a94fe1f91890d5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-150-frame-135.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-150-frame-132.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-150-frame-149.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.280598958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-600-frame-20.png",
                "sha256": "aa7c6ac1d5b1563d9a7fc43dfa3b48ead96850dd576e3734819da0c1b061b6db",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-600-frame-135.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-600-frame-528.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/16x9-duration-600-frame-599.png",
                "sha256": "4d68412a78a448fb9562322dd2c44f99a6c685a541b6291597455a43ad1430b7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 5.547526041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-150-frame-18.png",
                "sha256": "9376b6fdb1662e97e42ec00ebc152681ee8e8b03aaeae59eebe5e039a128846f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-150-frame-135.png",
                "sha256": "e36920f77f2459e973128e376f72cbd3a01640cc7310771f9057fe6263b92015",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-150-frame-132.png",
                "sha256": "e36920f77f2459e973128e376f72cbd3a01640cc7310771f9057fe6263b92015",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-150-frame-149.png",
                "sha256": "ff6e5c52367f98fa720b2c07437607fe282648876631d17ca08403eddf092273",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.549479166666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-600-frame-20.png",
                "sha256": "fcbeb9fb8f3d6dd404718ceb298568c200a4764416b5541f2846b485fadd5fda",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-600-frame-135.png",
                "sha256": "6c9018e9c93e0754ea7b7b4e8bdb8b09bd29e350bbda0b833e56c6fcb9c3590d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-600-frame-528.png",
                "sha256": "39a6971d4a77136593a6255fa14774214adab8ab8336ee3de493b5731425aced",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/9x16-duration-600-frame-599.png",
                "sha256": "e36920f77f2459e973128e376f72cbd3a01640cc7310771f9057fe6263b92015",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 6.325737847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-150-frame-18.png",
                "sha256": "dbff9e2bf47564235136dbbb7ccaa252a0af55b36ce8742b4488b1343998af7b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-150-frame-135.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-150-frame-132.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-150-frame-149.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 6.304253472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-600-frame-20.png",
                "sha256": "1f570b47b5c40357ea6eb6ceab96ba034886c91cd133807a3489eb3d687b4d19",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-600-frame-135.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-600-frame-528.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/tape-measure-count/1x1-duration-600-frame-599.png",
                "sha256": "d29bbe4287edf84032b1d01b072a7eaa0034ff85af6dbe54b5e7050a22dfdc2e",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The sequence shows a tape measure being extended, a count increasing, and stops at 72, matching 'Tape Measure Count.' The imagery, structure and the sampled motion of assembly/travel directly correspond to the idea of measuring and counting with a tape. \nNoBakedHeading: There are no decorative or unexplained block titles or category labels present; all visible headings ('72' and 'Measure what matters') align to named-slot content and legitimate poster elements. \nBrandAdherence: Three brand palette variants are present; each applies the supplied palette's colors to the tape measure, labels, and background, with all text and markings remaining legible in all contexts. There are no unexplained static block colors, and shape/material are maintained. \nLanguageAdherence: The materials (extruded, solid), consistent camera (parallel, fixed angle), directional color shading, type roles (sans, tabular numerals), and motion verbs (assemble, travel, rise) observed in the tape's extension and label appearance all match the provided language card. No unauthorized flat UI, floating labels, or unrelated angles are present."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 32,
        "compared": 32,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5064afd2d7c5399b293c8e3a9a1c1b38b2accddff53a53cbe5aa6976b8c07b15",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:56:29.346Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "tape-measure-count",
      "vsPositive": 0.875,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "25a43304ba619c931e510b5172eb661909c6a336891ce2f538f4840780ff668e",
      "bundleSha256": "5064afd2d7c5399b293c8e3a9a1c1b38b2accddff53a53cbe5aa6976b8c07b15",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/tape-measure-count/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tape-measure-count/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tape-measure-count/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "daf91d1a2eac793af7146871bba886f43712c62a369bbe129777fcc64367b0eb",
        "loop": "a715ae313455eb2179fbe37633f2ecd2a0add3d5df83b9ed7b6a3f9a209ce56a",
        "detail": "92b289c77cdcaa036674ff1d5fcef77c3f31aebdb88f4952cdabee90cd120037"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/tape-measure-count/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tape-measure-count/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tape-measure-count/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4db6a632dd1a84a30938b3e5daca496f80a5d9362c6f6164f1aab7db7d0fe9b3",
        "loop": "4956e7851fc622971ff9cb16a52615ea2f9977057ea94d3d7c3441b8d8766621",
        "detail": "cebeb788f30ca8ff4b7c9630916a27ee169267e45cbeaea9b9e7847eaffd1ef7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/tape-measure-count/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tape-measure-count/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tape-measure-count/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f9b5d7559dc544b410ea9cf89c293b522a74a8f7ac527412070271e1d408986c",
        "loop": "829e2a61a55f130f9ba35ad3cbb51b4a7cd0e4a0e2b86d08aae32d0345e3e14a",
        "detail": "184e12872e2ad38fa5e7765ff5fcea9fc443596dc4f47d4ed7612c7a8e925dc5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5064afd2d7c5399b293c8e3a9a1c1b38b2accddff53a53cbe5aa6976b8c07b15/index.mjs",
    "sha256": "5064afd2d7c5399b293c8e3a9a1c1b38b2accddff53a53cbe5aa6976b8c07b15",
    "bytes": 160218,
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
    "at": "2026-10-09T23:01:57.446Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
