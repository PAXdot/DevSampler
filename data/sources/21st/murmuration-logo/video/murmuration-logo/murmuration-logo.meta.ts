// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "flocking"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "particles",
    "birds",
    "murmuration",
    "flock",
    "swarm",
    "sky",
    "nature",
    "cinematic",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 160,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "fold": 58,
      "converge": 84,
      "formed": 128
    },
    "beats": [
      0,
      58,
      84,
      128,
      150
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
      "maxChars": 40,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "flock",
      "prop": "position",
      "from": "sweeping across the sky",
      "settledBy": 84,
      "easing": "ease"
    },
    {
      "target": "flock",
      "prop": "shape",
      "from": "folding cloud",
      "settledBy": 128,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 150,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (a 3D starling murmuration folds through the sky and pours into the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Moving as one",
    "primary": "#2EE6B6",
    "secondary": "#7AD7FF",
    "color": "#E9FFF8",
    "background": "#071A1F",
    "density": 1,
    "grain": true,
    "fontFamily": "Geist"
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.5,
      "max": 1.5
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Murmuration",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "murmuration-logo",
    "bundleSha256": "c18b021b33f741222781d11e5abea09559923dda2434e9f19d643ffeff679a87",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T08:03:26.359Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-paper.png",
        "sha256": "e8ec5a2be256838838e11396812ec3bc2931097b063d934d3deb578da3066de4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-night.png",
        "sha256": "4190f648f89f179e03dd83bca52a701403058f10175ceaac70b92df6f23958f7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-color.png",
        "sha256": "db3bd6597da67b0e49c3b2b10d333516ff39ab5a976ba906ba7ef72c8ab53a35"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-paper.png",
        "sha256": "511d72bec96e0ae6dc843a9370c2afd2bf1da9728c0c789c3d2f0d92f7fb53a9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-night.png",
        "sha256": "a841957dbd5e706d468e1a4fb01b4df6b37f7d09f237a9ca514346d5b6981608"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-color.png",
        "sha256": "0ae650cecb9a2ff90276ac15e2c3320b0dea73b0a75e7800fa122c7e0f59d9cb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-paper.png",
        "sha256": "34fe89365243c53c0538161729912eba653c9436ca7abdd4a2c5005154a9207e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-night.png",
        "sha256": "23205662cbcf2bc8d219a555e12328667ed8d53383a8a604cb88ad1106bf5cdd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-color.png",
        "sha256": "da74a03167ac1ce80fc441107e90c38b03960710d74d4874451cb55f44994c80"
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
          "murmuration-logo--16x9",
          "murmuration-logo--9x16",
          "murmuration-logo--1x1"
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
            "paperNight": 45.22962782118056,
            "paperColor": 49.595621744791664,
            "region": {
              "left": 487,
              "top": 163,
              "width": 966,
              "height": 678
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 39.886203342013886,
            "paperColor": 54.283284505208336,
            "region": {
              "left": 23,
              "top": 380,
              "width": 1037,
              "height": 1000
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.718288845486114,
            "paperColor": 48.28358289930556,
            "region": {
              "left": 109,
              "top": 208,
              "width": 877,
              "height": 618
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
            "occupancy": 0.437730792548501,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4469739767048796,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.43046829071134635,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6785825827244479,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7073359661508638,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6668591031448589,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6457525568526451,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6574741379176272,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6350965740662978,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.312065972222221,
        "frames": [
          22,
          150,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 160,
            "averageChannelDifference": 10.738932291666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-160-frame-19.png",
                "sha256": "ea76c03d3c1c55aa52f8855fa98c408b8b3785f4d84f12c70fc369b393b4368f",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-160-frame-150.png",
                "sha256": "16941c17b10efad09a2073062e71c410651f5299474fde8d76704ff05ab9ac6d",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-160-frame-140.png",
                "sha256": "803969ebed0bfb693aec24f8f0cb970846295a7601526f51f9266c05595ebedd",
                "alphaMass": 587520
              },
              {
                "frame": 159,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-160-frame-159.png",
                "sha256": "ee54419d6f71faef111d2a88ff962636d1a2be37bbff388786802f1354275c1b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 10.312065972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-600-frame-22.png",
                "sha256": "07f3410453773544c6069e29a4b02bb6ab6f6be4fb2a38efe92f0cc1b1c7245e",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-600-frame-150.png",
                "sha256": "16941c17b10efad09a2073062e71c410651f5299474fde8d76704ff05ab9ac6d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-600-frame-528.png",
                "sha256": "3d5c882b346b8eca56d5beac467664a729db393707d2f4d9eb4ab56204ca1d8c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/16x9-duration-600-frame-599.png",
                "sha256": "0ba043f67941dfeca58c341dfbc88582966f93925755fc998e10de33697c23ad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 160,
            "averageChannelDifference": 17.365559895833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-160-frame-19.png",
                "sha256": "c475733a4052a3ffbc226dc35ab4ac3d603456711c115f4b2a517d43827cae47",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-160-frame-150.png",
                "sha256": "14d140d31be826bb1e10cf142fe89da38801ddc346fc711d4e6955abf99fe8d6",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-160-frame-140.png",
                "sha256": "1289efe6d96b7e66c0269d153aa5cf70f0a80e56762de50df22a79c7b3cfef1c",
                "alphaMass": 587520
              },
              {
                "frame": 159,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-160-frame-159.png",
                "sha256": "ffbf1a6d4501468b2d8c7d5026fd080aeca4f53d443e96c6cd0989082d98e7f1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 16.9892578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-600-frame-22.png",
                "sha256": "8e62be0abf2644eba4b617d0640c8dfb93da1d95fc09033077b5e3b58b0d694e",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-600-frame-150.png",
                "sha256": "14d140d31be826bb1e10cf142fe89da38801ddc346fc711d4e6955abf99fe8d6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-600-frame-528.png",
                "sha256": "33464741cc1494a8ba286aee7af2c035eb76403546b226abc40cace8e3ae77ad",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/9x16-duration-600-frame-599.png",
                "sha256": "174e7f8f32d632abc75520c69a8987f14bd530ef15bd1635de2c19ec7f74af47",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 160,
            "averageChannelDifference": 15.025499131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-160-frame-19.png",
                "sha256": "01b494dbc1bd38d58f11c146f655e7c284f7023bcb4b066a53440bae20ad4df0",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-160-frame-150.png",
                "sha256": "cc73e6046c6d241da203ef451cb81ccbe0d2f94b960e564e971930b142849511",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-160-frame-140.png",
                "sha256": "ad7c049dbf9f6abeae28669d0bdf80b60dfe228cdcef75f07facb543956b83be",
                "alphaMass": 587520
              },
              {
                "frame": 159,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-160-frame-159.png",
                "sha256": "b7e71541f105c8f0e4f80b70fe146f25bd02972d9fa07af6e0d0f6497831a0ec",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.692057291666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-600-frame-22.png",
                "sha256": "9d401d4b0b90f4a288eb5de12abb6656182e9d8891de43a9e2087ddefd8f59cf",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-600-frame-150.png",
                "sha256": "cc73e6046c6d241da203ef451cb81ccbe0d2f94b960e564e971930b142849511",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-600-frame-528.png",
                "sha256": "e5fc5ff23ac24f334ccec41b9d19ec8969e5b4175cb7440dc7b2cc84267b10d0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/murmuration-logo/1x1-duration-600-frame-599.png",
                "sha256": "551492e4466306315a4d0a87af3b767880db93fa33cfea751e9a7340f04e0da3",
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
        "note": "TitleMatches: The visible subject—a dense, coherent shape made of many small elements (birds or particles) that separate but reconvene through the motion samples—directly illustrates a 'murmuration' and 'moving as one'. Structure and the sampled motion (second image) show fluid reorganization but cohesion, matching both the title and the concept. \n\nNoBakedHeading: There are no prominent decorative or unexplained block-title or language/category labels; the only heading \"Moving as one\" matches slot content and is legitimate. No extra labeling is present in any version.\n\nBrandAdherence: The last three images visibly correspond to distinct color palettes (light, dark, and colored backgrounds). The main forms and legibility (subject, caption) are preserved. Each uses appropriate supplied palette hues (background, subject color, accent), with no persistent unexplained colors or loss of visibility.\n\nLanguageAdherence: Across all palette versions and motion samples, the subject remains sharp and well-isolated, with a diffused ambient field as described in the language card. The body and display text remain sans-serif and consistent. There are no forbidden elements (no UI skeletons as subject, no unrelated rainbow palette, no blurred foreground copy). Type roles and material remain consistent with the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 16,
        "compared": 16,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c18b021b33f741222781d11e5abea09559923dda2434e9f19d643ffeff679a87",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.549Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/murmuration-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/murmuration-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/murmuration-logo/16x9/detail.mp4",
      "bg": "#05161a",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "bfec611bd738eb0e7025b4e08a281ed9e5d2ef512f5d8d5ef9c52ec2df8298b4",
        "loop": "1a71b9a7fe361254cbaa381a6b837d41a6dbed12a34bde84cc75c5485ce99527",
        "detail": "85b4f1f0ad006979a7f00d46415666a1b6d7cfe20701f7ec44eb32a6fff41d1e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/murmuration-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/murmuration-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/murmuration-logo/9x16/detail.mp4",
      "bg": "#05161a",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "4d2c2b77c72b6b316157be1905e24fe2e71448ccd8f14e74f561cebd757f1d25",
        "loop": "b4b6b65fd56f6f309eb8e19d2afb63b0eb842fcc7c64fab931e2503c0bf543b8",
        "detail": "2ed65aaf0ed9ffd309ff9cc12b6e716538b8819ba27b74c3c9c206866b24f38d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/murmuration-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/murmuration-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/murmuration-logo/1x1/detail.mp4",
      "bg": "#05161a",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "ab7d382787a66d2cfb953bda48a74c37ed0bee9cf349359cc87629ddd300ff51",
        "loop": "7bef124fdf403d3bdbd796e0ea12ce24405ad2c2fa6824754390e0d3ddd4fbf0",
        "detail": "17494630d624c4ee6e249bd681ac51ef671a7a284b4be38458321b256f0a9022"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c18b021b33f741222781d11e5abea09559923dda2434e9f19d643ffeff679a87/index.mjs",
    "sha256": "c18b021b33f741222781d11e5abea09559923dda2434e9f19d643ffeff679a87",
    "bytes": 177222,
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
    "at": "2026-10-09T09:08:09.175Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
