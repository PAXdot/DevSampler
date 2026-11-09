// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/craft",
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "decode"
  ],
  "tags": [
    "ascii",
    "characters",
    "image",
    "screenshot",
    "reveal",
    "pixels"
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
      "settled": 135,
      "characters": 45,
      "resolve": 95
    },
    "beats": [
      0,
      25,
      45,
      95,
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (the actual screenshot is sampled into luminous ASCII glyphs and resolves to its own pixels, 2026-10-09)"
  },
  "defaults": {
    "screenshot": "",
    "caption": "From characters to clarity",
    "primary": "#9DE0AD",
    "secondary": "#45ADA8",
    "color": "#E5FCC2",
    "background": "#0D201D",
    "fontFamily": "IBM Plex Mono",
    "seed": 47
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
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
      "brand": "fonts.mono"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "ASCII Screenshot Resolve",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "ascii-resolve",
    "bundleSha256": "0425d4c1a5d37fd4ccfcfb2142dcc4ae221dc908d5e7abc01e5d2309900c5f38",
    "sourceSnapshot": {
      "sha256": "40bd51d119bf7ee4ebdebf0c5a5cf3e861b724ade6d630e20d9914f0a4ce79bc",
      "files": 2022
    },
    "renderedAt": "2026-10-09T20:09:15.965Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-paper.png",
        "sha256": "c943714e9b9dd0dcb640b30e6ec7a682a96e138cb930db2332d016340b033967"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-night.png",
        "sha256": "924b6a6fd9a4000e8957a295e2a0c9f62e67f801f7daad656ddf18457f3fe1f2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-color.png",
        "sha256": "0abc694d0ce11ac6b9662ab1f4536e2726d84627654d4945f1332d5dafce1e7d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-paper.png",
        "sha256": "2805205a8f1fb4322c6eb22c0d3e36da1d93d345c6d0938208ff7d1ddcd417f8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-night.png",
        "sha256": "9a531b48306b0de0007f7f86c9cd61b1064530c9b6e8bb4645f06a6781924537"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-color.png",
        "sha256": "a2c9fe79a1b7323dbd9ff04d28672776da7baab7038d78f15a9b8ad75caae745"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-paper.png",
        "sha256": "61e51af6776df0695ffee341368aa487f465f97f3843a7bc4310b2d56ced376e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-night.png",
        "sha256": "a1657cccdeea940269482db42d967ea6dafbea39a8bc0d5ba4219388652cdd49"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-color.png",
        "sha256": "5e21f74889448a9248a85d0dedcc7468f24be9dbf52096f1a2bb84f9733a71d3"
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
          "ascii-resolve--16x9",
          "ascii-resolve--9x16",
          "ascii-resolve--1x1"
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
            "paperNight": 61.781331380208336,
            "paperColor": 21.094563802083332,
            "region": {
              "left": 378,
              "top": 90,
              "width": 1164,
              "height": 848
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 44.858317057291664,
            "paperColor": 14.36477322048611,
            "region": {
              "left": 59,
              "top": 519,
              "width": 962,
              "height": 1244
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 57.33314344618056,
            "paperColor": 18.32248263888889,
            "region": {
              "left": 59,
              "top": 158,
              "width": 962,
              "height": 780
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
            "occupancy": 0.6746294196691024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6746294196691024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6722427589863107,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8179220119117607,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8179220119117607,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8139770504395175,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9117244291406551,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9117244291406551,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9082177967208833,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.787000868055557,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 21.121202256944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-150-frame-18.png",
                "sha256": "384b1df5b590ff7aba044327d46c5465a6f3bd51713d0272498b65e32d16a334",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-150-frame-135.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-150-frame-132.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-150-frame-149.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.787000868055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-600-frame-20.png",
                "sha256": "aa8e2ddbf7dfcbe3717f65f9691f71f86a7464dbc94f8483d1d313421e81ad8f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-600-frame-135.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-600-frame-528.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/16x9-duration-600-frame-599.png",
                "sha256": "709563632099999de822c8fd7a7febcd088af37cead281fa87c7099a53975281",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 15.579427083333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-150-frame-18.png",
                "sha256": "2681ef367ec0d36da7fbedafbf09fe26cdff31747bf950d9de6ed2c7458665da",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-150-frame-135.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-150-frame-132.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-150-frame-149.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 15.27734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-600-frame-20.png",
                "sha256": "91c30c3c3c5571d823d675a862a5e9aa0b4f3a2237da6a94e1a960e86aff3ae5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-600-frame-135.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-600-frame-528.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/9x16-duration-600-frame-599.png",
                "sha256": "0c6b2860e0fc11e53361e16de9b901a7864646c05a5c9996d20edcf85f4a9e37",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 27.1015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-150-frame-18.png",
                "sha256": "6573b813bb6f6f83ef0818612bf29e18393ff60204bcb0b2463efc0794294c79",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-150-frame-135.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-150-frame-132.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-150-frame-149.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 26.6640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-600-frame-20.png",
                "sha256": "65c0dd0c7ff60c537c692ec807aa8f0fedb23f0c48e4bedbf97560c562fd954f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-600-frame-135.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-600-frame-528.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/ascii-resolve/1x1-duration-600-frame-599.png",
                "sha256": "4426c7c76654fa61f7fac093bad8c7cc7e301c566f62a9490a7e5dad453953b8",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The images visibly depict a transition from a noisy, chaotic ASCII character field (second image) to a more structured and clear ASCII grid resembling a terminal data panel (third and repeat of first/fourth images). The sequential motion samples affirm the claim of 'resolve' from disorder to orderly ASCII screenshot, supporting the 'ASCII Screenshot Resolve' title. No unrelated effects are present, and compositional logic matches the slot and title. \nnoBakedHeading: There is no decorative, unexplained, or fixed block-title/category/language label baked into the poster or motion scenes. The only prominent heading ('From characters to clarity') is slot caption content and thus permitted. No other unexplained headings are visible.\nbrandAdherence: All three brand palettes (images 5-7) show properly adapted versions of the main poster, where the terminal panel, ASCII forms, and caption switch colors to match each palette. Text and panel shapes remain legible and distinct, showing correct use and preservation of material across light, dark, and color themes. No fixed or out-of-place block coloring appears; all elements adapt as required.\nlanguageAdherence: Across all rebrands and motions, the compositions remain in mono-spaced type, maintain discrete cell grids, no lens/gloass/chrome effects are introduced, and movement is stepped and linear as described in the language card. The interface rightly avoids smooth arbitrary rotations or non-terminal chrome. Thus, visible type, material, and grid structure are consistent with the provided language card throughout."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0425d4c1a5d37fd4ccfcfb2142dcc4ae221dc908d5e7abc01e5d2309900c5f38",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:24:37.787Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "ascii-resolve",
      "vsPositive": 0.8333333333333334,
      "vsNegative": 0.875,
      "fakeVotes": 0.10416666666666667,
      "perModel": {
        "claude": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 0.75
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "626d39ec2a32aa5be32ba28acd37c80aef072bcc95aa9d3a1156debf7ebc2cb9",
      "bundleSha256": "0425d4c1a5d37fd4ccfcfb2142dcc4ae221dc908d5e7abc01e5d2309900c5f38",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/ascii-resolve/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ascii-resolve/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ascii-resolve/16x9/detail.mp4",
      "bg": "#0d201d",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cdaffe81df4d3d16c3de1c239ffafe7abbef0ecba60fb29c23fe39fe606d0a7b",
        "loop": "77be972859cdc115daba63351aded0c17edc8bd04d2ef2a692104f535932ef3c",
        "detail": "e2c42787922b874aaf5c58f394670dab523c8334f7080a58d7cb3c73d7b08823"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/ascii-resolve/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ascii-resolve/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ascii-resolve/9x16/detail.mp4",
      "bg": "#0d201d",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "07dbf249d21e0703580891f3692fc99718c0ba450b91988994feba5db624e31a",
        "loop": "ca072fdaa30dac7e6372e0673d8e4efb22c94cf3e28177616acb4f9bb71e2267",
        "detail": "ecd3a94a946552a4cb9234045e7dcdd367c6824c49bcee29567df865a898c80b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/ascii-resolve/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ascii-resolve/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ascii-resolve/1x1/detail.mp4",
      "bg": "#0d201d",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "aebfbf733a17d7eb55c3b55247b4a405d5b98876da82047d499f0e324d2c9b95",
        "loop": "f1e2379ee377a9488bd5b20a708a199697d21d2dd960bb7231c818b8bb6d246b",
        "detail": "8c9f52825f9b53fac1a61e800457b229bb6d9078cd0bed0f6a369b11283219e4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0425d4c1a5d37fd4ccfcfb2142dcc4ae221dc908d5e7abc01e5d2309900c5f38/index.mjs",
    "sha256": "0425d4c1a5d37fd4ccfcfb2142dcc4ae221dc908d5e7abc01e5d2309900c5f38",
    "bytes": 165767,
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
    "at": "2026-10-09T20:36:32.092Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
