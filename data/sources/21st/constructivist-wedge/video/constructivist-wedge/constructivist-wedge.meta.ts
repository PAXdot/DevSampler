// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "wedge"
  ],
  "tags": [
    "wedge",
    "diagonal",
    "constructivist",
    "typography",
    "print"
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
      "key": "text",
      "type": "text",
      "role": "heading"
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
    "sourceUrl": "21st first-party (Diagonal Wedge Headline, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C83D26",
    "secondary": "#D5B16D",
    "color": "#202823",
    "background": "#F3EEE3",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "text": "MAKE YOUR NEXT MOVE"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 38,
      "role": "heading"
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
  "name": "Diagonal Wedge Headline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "constructivist-wedge",
    "bundleSha256": "d8e4f0267d1abaf4b22984a37050452fcb247aaebbedabd423c830aeaaedbe3a",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:09:04.414Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-paper.png",
        "sha256": "0613b0edb88505ecbfdb004bde9a55ea0119c79cea85ae4673ddf62fc6d251fe"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-night.png",
        "sha256": "a80e056e8fe8a591b83dcd7409c7061fe1f7f3a4c00b8ed0817a477efb0ea2e9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-color.png",
        "sha256": "a6fd6c70bb2f81fafd6f6392d51ae896b06b5fa7d20dc7f8dd50166b3321ecaa"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-paper.png",
        "sha256": "957f341aaaee3d2e691170e29ba20d54f367281ba4b9bc83d49bf90992d5efae"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-night.png",
        "sha256": "536dcf5d5595fc59e83d6b58ca6fd64af4438a994cec2ac6bb358e326cd483b1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-color.png",
        "sha256": "4250e32b4ddef059e2dfba994312e2374e84f18473fca3f8b777c0635aace701"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-paper.png",
        "sha256": "ae6c63ac2207767d99ec5084f2e6bd021c8ae50cd9df09494036e4d2620aee46"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-night.png",
        "sha256": "822de905ac13922e5bc5305fcd74fa35b277db950cebc5f3f2335b1c30cf9a9e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-color.png",
        "sha256": "c913bb3462e38a2a73f1b348e294bc1fd29b9e79498d22c9fb74e1ff9ddec933"
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
          "constructivist-wedge--16x9",
          "constructivist-wedge--9x16",
          "constructivist-wedge--1x1"
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
            "paperNight": 51.011637369791664,
            "paperColor": 33.49009874131944,
            "region": {
              "left": 103,
              "top": 64,
              "width": 1700,
              "height": 952
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.71595594618056,
            "paperColor": 32.296549479166664,
            "region": {
              "left": 58,
              "top": 115,
              "width": 974,
              "height": 1690
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.26117621527778,
            "paperColor": 33.127712673611114,
            "region": {
              "left": 58,
              "top": 64,
              "width": 974,
              "height": 952
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
            "occupancy": 1.1061201744072118,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1061201744072118,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1061201744072118,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.12502482345819,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.12502482345819,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.12502482345819,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.126652078298169,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.126652078298169,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.126652078298169,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 37.593532986111114,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 37.68999565972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-150-frame-18.png",
                "sha256": "e14e524c277314f51c49d9b8e9544975617f1e70d9c7a73e8d5bf9f03d7e4a83",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-150-frame-135.png",
                "sha256": "332e1e011cde4c52321228c8f3314a6fd64b04cab75d012afe1accd35d8c73c2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-150-frame-132.png",
                "sha256": "415f0c4b9c9b15019fd6c4342b0540cabbaba942caabfc454ee1f6399abff938",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-150-frame-149.png",
                "sha256": "553626a8afc940669096589b5aafdd1e4b6c1296be1e1d90606b7a4a7180b185",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 37.593424479166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-600-frame-20.png",
                "sha256": "43c7d8842f2caaccaefe9d9bf9a7147ed95ab5435191913b4b0a2c78ee223261",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-600-frame-135.png",
                "sha256": "cb8745a986e53a2cc7afda0cf60776508d10e4fbbe6b2e78909e3b75e6fab4c8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-600-frame-528.png",
                "sha256": "3a24bfcbfdf6a97887a47bed3f5b029021bca6f015bd14bd5b342e0cd3591bd1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/16x9-duration-600-frame-599.png",
                "sha256": "2f53377c38c7d47b21b218225dc0f1afa9be44353da4e7b576046a82bfc9a80e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 39.68023003472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-150-frame-18.png",
                "sha256": "38243f2319bdd183e0fb4b8535ff7fe8212c7d2d04c9c5d80d474f04d6a6f762",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-150-frame-135.png",
                "sha256": "c36a563185e2038bcb2fba3cca229f355d308ef9ecd7cc737cac2dc5bb18f2d7",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-150-frame-132.png",
                "sha256": "c2700fb1e2c66af0852015b807c72c432b3f639cf488b4b158e75f4150737a81",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-150-frame-149.png",
                "sha256": "a5da4f90299e0fd65cd0eac540056d58710dcd78e37327268b30eb6248d71a5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 39.588216145833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-600-frame-20.png",
                "sha256": "ed6d3e7f6353ee4d0b82227ce40897603201483de4be1ff7ae0aed21eb8e333e",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-600-frame-135.png",
                "sha256": "9fbfe68a8b2bf11992457868149a423641b92baf04758013026a69bd35b4b8ae",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-600-frame-528.png",
                "sha256": "121631cf687b307057cfa189e468c4e6ab0027176f5fccc7aa31c2fbbe5b2762",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/9x16-duration-600-frame-599.png",
                "sha256": "edc76a8c556c0e0b2d3f651131f4c3f7fd310726582ed0ffcd6470c2ca4929d2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 39.30034722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-150-frame-18.png",
                "sha256": "e3d883c819b39318bb7c7250befe6270172b4c92491a18f913eb498ce3246e68",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-150-frame-135.png",
                "sha256": "1630f0917eea412a38863726709c6e66634d7e5f2905e6740e1fe8725579082a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-150-frame-132.png",
                "sha256": "684521a9d66c77c2865a710cd31d0d2cff9ca2e939904327636b0b5707b673d7",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-150-frame-149.png",
                "sha256": "feb33c02bf84ca938cf7387b2580c590e2ebe6d814a5505badb57fef38c02509",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 39.18641493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-600-frame-20.png",
                "sha256": "4ef89822e6d17f6fe10cb14225bfcd771501ccedaf7e37550f2a8796c5ae8b42",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-600-frame-135.png",
                "sha256": "072c7386f3b22f7b1621a284510d441bc8323142f7fa34507953f49cc95a86c7",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-600-frame-528.png",
                "sha256": "6859f4b18021c31f3334daacf2b0b925b230a7c0ecb999ce87f1c8270fe9ebe4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/constructivist-wedge/1x1-duration-600-frame-599.png",
                "sha256": "4c3bb737fb8efaed3158cf3c76aca667f11c7e59b5b0eb9ada9f225deb3799b5",
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
        "note": "Evidence for each check as follows:\n\n- titleMatches: The claimed title is 'Diagonal Wedge Headline'. The main poster and the three sampled motion frames all clearly feature a large diagonal wedge shape (red/green/purple/tan) behind oversized headline text ('MAKE YOUR NEXT MOVE') positioned diagonally. The sampled motion frames chronologically illustrate the assembly and sliding-in of elements, with the wedge shape and text moving into position. The subject and structure fit the claim, and the motion supports movement and compositional assembly as described in the language card. There is no unsupported effect present.\n\n- noBakedHeading: Nowhere in the poster or its motion samples does a non-slot decorative block title; all prominent text is part of the editable headline ('MAKE YOUR NEXT MOVE'), not a baked-in label or category. No unexplained headings or extraneous type roles are visible.\n\n- brandAdherence: All three rebrand posters (images 5-7) display clear, legible visible differences in palette, matching the expected palette order from evidence. The wedge and circular accent both update to the correct supplied primary and secondary colors in the palette order. The headline and underline also update correctly for visibility against the background. No unexplained block color remains constant, and all palette roles remain differentiated and visually accessible in light and dark versions.\n\n- languageAdherence: The supplied language card describes oversized type, flat color fields, compressed geometric shapes, and graphic mask-driven assembly and sliding motion, without ambient effects or browser chrome. Across all versions, these consistencies are visually present: large accent sans-serif type, use of tabular numerals (where applicable), simple masked geometric background, and motion based on assembling/positioning type and shapes. There is no deviation in type roles or introduction of unapproved effects. All visual material and structure comply across brands and motion samples."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 70,
        "compared": 70,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d8e4f0267d1abaf4b22984a37050452fcb247aaebbedabd423c830aeaaedbe3a",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:26:49.218Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "constructivist-wedge",
      "vsPositive": 0.625,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 0.5,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "3ebf7a0a292a9aeff408ba66f8b85fc7f49668018fc892f178ea5893fb91ccdd",
      "bundleSha256": "d8e4f0267d1abaf4b22984a37050452fcb247aaebbedabd423c830aeaaedbe3a",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/constructivist-wedge/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constructivist-wedge/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constructivist-wedge/16x9/detail.mp4",
      "bg": "#f3eee3",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7e8d19a59c3afbd30cacecef708d02ff0d821af803956e0fe0889ac3e60bf2d9",
        "loop": "1ab1c79621a7005d57d477309221e57a847fbfd529d8aec3a829cbce9860c9db",
        "detail": "23da97efdd5623a29bd164c207eb243f94226d9a80415321e9e932233e0dd8f0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/constructivist-wedge/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constructivist-wedge/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constructivist-wedge/9x16/detail.mp4",
      "bg": "#f3eee3",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4e8de020b33b6e82f14f72d00c8e122426de991ecedda92a2c1b580db1581381",
        "loop": "ba4bd5cd79b24a8d295547491321ff94cb572dcaab923c0858044300eb078572",
        "detail": "c3b073cf196f4223cedcf05a857901f1a750f08ecfa4126da8fe889bf7d1df10"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/constructivist-wedge/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constructivist-wedge/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constructivist-wedge/1x1/detail.mp4",
      "bg": "#f3eee3",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d9b868ef8dbc643c83c4b495bf5105c99df2f6dcf50d04e4d6632e0568504139",
        "loop": "aa00a5fe0062b11475e6f840b629d414c358ec77f3cbb183b2640bcc3287038c",
        "detail": "0b22cf55789639be4cd15503ecd32f8ae97a309cdb18048d09059afd995336d3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d8e4f0267d1abaf4b22984a37050452fcb247aaebbedabd423c830aeaaedbe3a/index.mjs",
    "sha256": "d8e4f0267d1abaf4b22984a37050452fcb247aaebbedabd423c830aeaaedbe3a",
    "bytes": 160067,
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
    "at": "2026-10-09T21:42:05.651Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
