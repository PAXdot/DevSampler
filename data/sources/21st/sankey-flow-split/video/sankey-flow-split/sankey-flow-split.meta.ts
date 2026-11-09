// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "neo-brutal",
  "mechanic": [
    "sankey"
  ],
  "tags": [
    "sankey",
    "flow",
    "split",
    "proportion"
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
      "key": "label1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "value1",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value2",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value3",
      "type": "text",
      "role": "metric"
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
    "sourceUrl": "21st first-party (Flow Split Numbers, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B8442D",
    "secondary": "#CBA753",
    "color": "#29312C",
    "background": "#F4F0E5",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "label1": "Explore",
    "label2": "Create",
    "label3": "Share",
    "value1": 55,
    "value2": 30,
    "value3": 15
  },
  "fields": [
    {
      "key": "label1",
      "label": "Label 1",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "label2",
      "label": "Label 2",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "label3",
      "label": "Label 3",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "value1",
      "label": "Value 1",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "value2",
      "label": "Value 2",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "value3",
      "label": "Value 3",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
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
  "name": "Flow Split Numbers",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "sankey-flow-split",
    "bundleSha256": "d7b1406042cf892addc0076350f758bb5dfe2bf39fbcb2867f13f29f7db746d6",
    "sourceSnapshot": {
      "sha256": "c47c5ab6a2d4c2ace1617a542efbf08f9b9f6ed2dd9c899fd982fbfc0b4c400e",
      "files": 2133
    },
    "renderedAt": "2026-10-09T21:57:24.050Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-paper.png",
        "sha256": "13e44acb725555e75527dc8c08496ca52c05a4cd1b2a94c82742552a40256900"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-night.png",
        "sha256": "4d7912566656af124fe8e52952a1548e371bb385e64db8100b830b63bc5a2aad"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-color.png",
        "sha256": "cefe2fe767683210428460ccb6d95d6cf14714845552d174cac0328c560a5c0b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-paper.png",
        "sha256": "b40a76fbd12528dd80969425fc597fb763cd01156e19a5a7b00894e817e89b2e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-night.png",
        "sha256": "d9e56fde68c55d94ecd65b117ebb80a3ec042905d896a26ed80e5347ee8fcb01"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-color.png",
        "sha256": "34c9d9872156d0d7ab8604a023a589d72249f167436f442d42f925acaa62e25f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-paper.png",
        "sha256": "3f6a1d039bdaed741f9ea284b1bfebdda3db33bf69eaf246dc665c8535bff92f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-night.png",
        "sha256": "d1e12043550a67b98221313e79b2b30f11ec1927f898c04b7c91168a494a5a6b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-color.png",
        "sha256": "9c233262b123af95cda19423c538a0faa39ce6aebbc5394ab5a70038277fd780"
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
          "sankey-flow-split--16x9",
          "sankey-flow-split--9x16",
          "sankey-flow-split--1x1"
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
            "paperNight": 37.88427734375,
            "paperColor": 34.93603515625,
            "region": {
              "left": 135,
              "top": 100,
              "width": 1602,
              "height": 852
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.09925672743056,
            "paperColor": 37.804714626736114,
            "region": {
              "left": 157,
              "top": 123,
              "width": 751,
              "height": 1620
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.08563910590278,
            "paperColor": 34.542154947916664,
            "region": {
              "left": 76,
              "top": 100,
              "width": 939,
              "height": 852
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
            "occupancy": 0.927905241314633,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.927905241314633,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9177243428235494,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8118911144704797,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7781361322821311,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7636001931636854,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9664794129814708,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9654490511339425,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.944122504969066,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 23.095377604166668,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 23.25368923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-150-frame-18.png",
                "sha256": "4577409c5df8db0e4091526d8e8b56f017321e715bb017b073c6fa9d2761166c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-150-frame-135.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-150-frame-132.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-150-frame-149.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 23.095377604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-600-frame-20.png",
                "sha256": "fdecc306335735f22e9b2901f18e855bd45ffd51af666e07a9a4cb55ede46c76",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-600-frame-135.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-600-frame-528.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/16x9-duration-600-frame-599.png",
                "sha256": "9192fc727a0f19ccfffeee138720e52daa7c4dcbf5ca48ab64f510d9ae51a5a2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 22.75444878472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-150-frame-18.png",
                "sha256": "261ba8eaf74c09b3ab500125474ba24e7b3a2e54b9cde990023abc94c7c571bc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-150-frame-135.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-150-frame-132.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-150-frame-149.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 22.646809895833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-600-frame-20.png",
                "sha256": "da3c89fce25e786b0ce9dc48402b7609103b3c4a1d20bb63b885259c11000d01",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-600-frame-135.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-600-frame-528.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/9x16-duration-600-frame-599.png",
                "sha256": "6528642bc314fd25a759933e8ff27697d98c799c45a7b227fb9f8b0e546ef033",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 24.11762152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-150-frame-18.png",
                "sha256": "e82fc680aee2bee1d67e09c0a1bc1ad514f375fa3083e7f3e541b451d2d56526",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-150-frame-135.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-150-frame-132.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-150-frame-149.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 23.92947048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-600-frame-20.png",
                "sha256": "8fc9725c2589aef039dde60c690526a26c4175aba928eac09d5be188151ce19c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-600-frame-135.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-600-frame-528.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/sankey-flow-split/1x1-duration-600-frame-599.png",
                "sha256": "bfd6f4bdd96f54ed52cf017d41809f7c2df17d179f458624edcd1bff60a2244a",
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
        "note": "TitleMatches: The subject is a flow diagram splitting a total (100) into three labeled and quantified bands (Explore 55, Create 30, Share 15). The sampled motion supports this with an initial single vertical bar (image 2) expanding horizontally to form three stacked flows (images 3-4), matching the concept of 'Flow Split Numbers.'\n\nnoBakedHeading: No extraneous decorative or block title is baked into the design; all large text (\"100\", 'Explore', 'Create', 'Share', and accompanying values) serves to label chart elements and matches the named slot content. No block label or unrelated heading appears.\n\nbrandAdherence: Images 5, 6, and 7 are clear rebrands of the main poster in three supplied palettes. Each one switches background, ink, and band colors in line with the palette definitions. Text and outlines are always legible, the forms and interplay of shapes remain consistent, and no unexplained block color persists.\n\nlanguageAdherence: The material across all variants and frames maintains hard outlined, solid, blocky geometry, as described. Color roles are appropriate (stock backgrounds, thick outlined text and bands, accent slabs). Presentation is static with visually clear, controlled motion (flow splitting and expanding), matching both the visual and motion language card. Type roles and numerals remain consistent. All required aspects are adhered to in visible frames."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 29,
        "compared": 29,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d7b1406042cf892addc0076350f758bb5dfe2bf39fbcb2867f13f29f7db746d6",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:37:02.680Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "sankey-flow-split",
      "vsPositive": 0.7083333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.10416666666666667,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.5,
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
      "framesSha256": "ed890f130610205c04cb3cc3b79f85ee828144fc283e84d69d873fd477b5170f",
      "bundleSha256": "d7b1406042cf892addc0076350f758bb5dfe2bf39fbcb2867f13f29f7db746d6",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/sankey-flow-split/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sankey-flow-split/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sankey-flow-split/16x9/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f2e8ed92d2952b2418e2f70cc069e721e7fb14eeabb6bc3690a277cc9f381352",
        "loop": "d00dab620764aaa895c05b340c7c240102dc06b1564e79575da217a4c3d697ab",
        "detail": "37c875c54fe1006bd7a2ba22f5051235a4539dc3a9c2c1d3ac76f9fa4d27ef5c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/sankey-flow-split/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sankey-flow-split/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sankey-flow-split/9x16/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ed01672316b80be63cc7d864f57b8832cc46666b8809f8338109a827efe846c4",
        "loop": "854ac4e7ef14b35f869b518f8625767f7c880bfec751f92a9b4159b013c54e73",
        "detail": "a469ed9b6929c838e5c24fadd55c2e3928568eecb74ee03cdaee88fc3999052d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/sankey-flow-split/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sankey-flow-split/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sankey-flow-split/1x1/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "32c0082e6c3e80a998bea097b4e90c27937c3538afa0d41edd123e156f8d266d",
        "loop": "25648169459a3aabacb0d6df7f2bc1343974dbebd1139acf89cad6dcfb6f2e6c",
        "detail": "9052bb3fb2a40b6c39cf6bd4fb4ddaf8e3c3608d187f8b4fe0d9728438feb830"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d7b1406042cf892addc0076350f758bb5dfe2bf39fbcb2867f13f29f7db746d6/index.mjs",
    "sha256": "d7b1406042cf892addc0076350f758bb5dfe2bf39fbcb2867f13f29f7db746d6",
    "bytes": 160439,
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
    "at": "2026-10-09T22:42:31.811Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
