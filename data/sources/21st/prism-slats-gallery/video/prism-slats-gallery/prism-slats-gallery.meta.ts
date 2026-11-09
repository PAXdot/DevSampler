// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "photo-collage",
  "mechanic": [
    "prism"
  ],
  "tags": [
    "prism",
    "slats",
    "screenshot",
    "rotation"
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
      "key": "screenshot",
      "type": "image",
      "role": "image"
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
    "sourceUrl": "21st first-party (Prism Screenshot Slats, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A74D37",
    "secondary": "#C9AE71",
    "color": "#29362F",
    "background": "#F2EEE2",
    "fontFamily": "DM Sans",
    "seed": 31,
    "screenshot": "",
    "caption": "See another side"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "image"
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
  "name": "Prism Screenshot Slats",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "prism-slats-gallery",
    "bundleSha256": "b6d0e5847bf2c41c2e2c3e3890cb7fe7fed857fd8c93ded5ddb1491c2b00c624",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:54:30.270Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-paper.png",
        "sha256": "9fec11ce605aa47efd929c1b776042fb5604912c3f7d8621b8c655fa6bccfa94"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-night.png",
        "sha256": "75752d21515eb9f837923d8b79150cf75cee51392dbb25f7166d09afe7f015b1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-color.png",
        "sha256": "bdc3a31184d574430b59168ed1d888eafd9389e3e64be221d3463a07d63e884e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-paper.png",
        "sha256": "c9f1716657a55f6b31910bdfb605207c7874f93e68456cd6ec7b93eff18172ca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-night.png",
        "sha256": "4e85521c51b6026730e93f8482f5fef6e7ee969c5d8a5816eba38c2751610fa0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-color.png",
        "sha256": "fb4da0483933e9e30e3152bf54a51a8f9ec06b8d2f26b18a81e78433df1d50ac"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-paper.png",
        "sha256": "b4f2e8ca98d07f55e417096b2c2bbad58b23b8fcb1d449c8c4c6d38cf75c2dd3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-night.png",
        "sha256": "451c11ee4a9b7132021d6d58b99f61edb0968afc87ea0af31c7e3fc4bc49af9e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-color.png",
        "sha256": "af86353df4054c380a7cf675f5d14f6777d6c71e8e9dc203b6545b122037f9a1"
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
          "prism-slats-gallery--16x9",
          "prism-slats-gallery--9x16",
          "prism-slats-gallery--1x1"
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
            "paperNight": 18.57427300347222,
            "paperColor": 4.911241319444445,
            "region": {
              "left": 158,
              "top": 86,
              "width": 1625,
              "height": 890
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 18.41010199652778,
            "paperColor": 6.024359809027778,
            "region": {
              "left": 90,
              "top": 154,
              "width": 921,
              "height": 1580
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 21.51226128472222,
            "paperColor": 6.327853732638889,
            "region": {
              "left": 89,
              "top": 86,
              "width": 923,
              "height": 890
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
            "occupancy": 0.9873509991059183,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9884616301510318,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9862403680608047,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9939355034066097,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9945649749097172,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9920470888972875,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9970050977638428,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9981265883125086,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9958836072151771,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.396484375,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 12.357855902777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-150-frame-18.png",
                "sha256": "00349ab3234efd107d6370a373b611af490a8d3a890383fc032352a0a4a581da",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-150-frame-135.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-150-frame-132.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-150-frame-149.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 12.396484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-600-frame-20.png",
                "sha256": "22183a1fdef3b3a3d3cd81b77c0e3cf88062a2c96f24474302fa38109448a9c4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-600-frame-135.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-600-frame-528.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/16x9-duration-600-frame-599.png",
                "sha256": "6b0f98c1a94e834d9046fd06d9ec5bb82f58518ebf64abbf5ef11c3ac4be52ca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 11.30740017361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-150-frame-18.png",
                "sha256": "e0d34f57c3fc61221d756ba9d64798ffdd7e66db94528f1699564eac2ed44d57",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-150-frame-135.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-150-frame-132.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-150-frame-149.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 11.561848958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-600-frame-20.png",
                "sha256": "edfa97baf0370ec0be6eebeb2a97248bf9bf5e17444c0dcbdbb58460d96509e6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-600-frame-135.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-600-frame-528.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/9x16-duration-600-frame-599.png",
                "sha256": "889612a1b04947e8b253248ed21a357e02ec00a5b69ee03e9a3ba5ee24e8dceb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 11.837239583333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-150-frame-18.png",
                "sha256": "bb77aaa72d4c4ae6c43b9e2030e51f43fe0bc6925b07a662371326c510e1a3c8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-150-frame-135.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-150-frame-132.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-150-frame-149.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.966471354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-600-frame-20.png",
                "sha256": "cb1b3c1f9b35f17b77fcf6e79abfd9db46433b83770690759187d72c03c09461",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-600-frame-135.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-600-frame-528.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/prism-slats-gallery/1x1-duration-600-frame-599.png",
                "sha256": "37b4406ae0e9649fea01a088797bcd714bcb717021e99276c93249fe37e1dd16",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The claimed title is 'Prism Screenshot Slats.' Across the poster and the motion samples, we see a screenshot composition divided into vertical slats. The motion samples (images 2 and 3) show these slats rotating and separating, visually supporting the idea of prism-like facets or panels, consistent with 'slats' and a 'prism' effect. The visible structure and movement fit the title claim without needing to infer from copy alone.\n\n2. noBakedHeading: No decorative, non-editable or unexplained headings or labels are present. The only significant textual element is the caption 'See another side,' which matches legitimate editable slot content. All visible text is part of the poster’s caption, not a fixed/baked design block.\n\n3. BrandAdherence: The last three images clearly show the same poster under three distinct palettes: a warm light, a dark, and a pale greenish background, each adapting text and background color for legibility while retaining shape and material. No unexplained rigid block colors persist. All three colorways keep the design coherent and visually accessible.\n\n4. LanguageAdherence: All samples and rebrands retain the material/structure, including photographic light simulation in the slats, consistent slat layering and cropping, and the same display/body type roles conforming to the language card’s description. Captions and slat structure remain unchanged across palettes and in motion.\n\nTherefore, all four criteria are satisfied according to visual evidence from these images."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 80,
        "compared": 80,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b6d0e5847bf2c41c2e2c3e3890cb7fe7fed857fd8c93ded5ddb1491c2b00c624",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:07.923Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "prism-slats-gallery",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 1,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "9a35e48c0d89efe8c1dd7618c732642d2c61f99357edc92448a157faa12ec677",
      "bundleSha256": "b6d0e5847bf2c41c2e2c3e3890cb7fe7fed857fd8c93ded5ddb1491c2b00c624",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/prism-slats-gallery/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-slats-gallery/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-slats-gallery/16x9/detail.mp4",
      "bg": "#f2eee2",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ed209f15b80a13da7788c22c8c67b87c674431a63edc9a1d1c6671a42d7ad53b",
        "loop": "085dd9b719d47065094b1c736bfb56331394b6f8a93d25905baeed96f5715a37",
        "detail": "7a68cb7a177aea965a07aa43ded47e5da16c5dbc41c6e84104b2e156927fe930"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/prism-slats-gallery/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-slats-gallery/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-slats-gallery/9x16/detail.mp4",
      "bg": "#f2eee2",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "78edecf6462d89cf2d05fbbbd0b82ae880902116398f36569e984f4528f19079",
        "loop": "1ad2754e762f5ea4e84481e74975b1e26e0247e099c22aa10618d6898c8fccb9",
        "detail": "63320a4f6f8f3ae9cb49583849566a00b074c8ed68453e57e0bc26f4d85053a1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/prism-slats-gallery/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-slats-gallery/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-slats-gallery/1x1/detail.mp4",
      "bg": "#f2eee2",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "10a7d67fa2e436861f93edbfc5c008e2b73053baabea7208ec1f7f6909b4208c",
        "loop": "94248be2f9a699fa2a5770c7f8c45582ec1f12df769873ba50e759d8bb463068",
        "detail": "984e2b7e2c018d4a6486fd9243c87fde8b79b1d08f01f5b4412d6b04661cd1e7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b6d0e5847bf2c41c2e2c3e3890cb7fe7fed857fd8c93ded5ddb1491c2b00c624/index.mjs",
    "sha256": "b6d0e5847bf2c41c2e2c3e3890cb7fe7fed857fd8c93ded5ddb1491c2b00c624",
    "bytes": 164070,
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
    "at": "2026-10-09T23:04:45.002Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
