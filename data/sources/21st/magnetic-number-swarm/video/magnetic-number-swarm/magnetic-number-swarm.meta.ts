// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "attract"
  ],
  "tags": [
    "number",
    "metric",
    "digits",
    "magnetism",
    "particles",
    "swarm"
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
      "attract": 64
    },
    "beats": [
      0,
      24,
      64,
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
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.display"
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
    "sourceUrl": "21st first-party (seeded digit particles arc into the exact user metric silhouette, 2026-10-09)"
  },
  "defaults": {
    "value": 12480,
    "label": "Every digit finds its place",
    "primary": "#E84A27",
    "secondary": "#EFA943",
    "color": "#1D2423",
    "background": "#F6F1E7",
    "fontFamily": "Bricolage Grotesque",
    "seed": 41
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999999,
      "role": "value"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
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
      "brand": "fonts.display"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Magnetic Digit Swarm",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "magnetic-number-swarm",
    "bundleSha256": "ee059bb1aea54c8a0756a0b241f0d0330f1f621d91faf228959f32759f1ec52e",
    "sourceSnapshot": {
      "sha256": "380231fb2fdd78399e0d2fdba550087ac492a21dcf3b4339f6900174d4b37b75",
      "files": 2025
    },
    "renderedAt": "2026-10-09T20:35:01.461Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-paper.png",
        "sha256": "34d3e567ffe89f9412fa4beac90967a5571dd193fb5c45b29f46376adf81d730"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-night.png",
        "sha256": "2f3c96bdf71518e510e08c9c58feb5254d811b8773ecb30d7e2132c13ca70f88"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-color.png",
        "sha256": "40fa649655ba249161a62b5308b2a182dda1e47351d46bb89512aff4d4a85c33"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-paper.png",
        "sha256": "6cee5ac29bee7ad0b36a8306037a54d735d9394dff3d211dcec861c8eb3e0a9f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-night.png",
        "sha256": "81c207793a2a42d82bc6d6917d894e3ea771f7cdf4064ea1c8385472410db64e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-color.png",
        "sha256": "5533a9910398053f20083a75e3fb970e23e3fc15c57eeec5f8a3a93c1761a257"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-paper.png",
        "sha256": "83ccbd525f9136e46af6985081a784a1b0cfbc5e7760ad4077c10a93c5c8b2cc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-night.png",
        "sha256": "a2c7eda6dfd637b4985d6c819b85cab2b005da89b81e505ac37f12de92d1fef4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-color.png",
        "sha256": "50c84104489582fd1cee20ff6c7dc9f800e51e96881ce7bf9195406906067c2a"
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
          "magnetic-number-swarm--16x9",
          "magnetic-number-swarm--9x16",
          "magnetic-number-swarm--1x1"
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
            "paperNight": 65.63471137152777,
            "paperColor": 31.19333224826389,
            "region": {
              "left": 288,
              "top": 285,
              "width": 1344,
              "height": 663
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 67.82755533854167,
            "paperColor": 30.65668402777778,
            "region": {
              "left": 100,
              "top": 396,
              "width": 877,
              "height": 1417
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 50.676540798611114,
            "paperColor": 22.299153645833332,
            "region": {
              "left": 162,
              "top": 363,
              "width": 756,
              "height": 585
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
            "occupancy": 0.5869708994708996,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.575029394473839,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5989124044679601,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8315093012513649,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8151225382128162,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6781807051524315,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5254262198706644,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5180776014109348,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5272633744855968,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.205512152777779,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 15.19140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-150-frame-18.png",
                "sha256": "40188ec350b0308b46d82e9ce33c397e20de06daba387df5336af65476406c85",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-150-frame-135.png",
                "sha256": "4690f5017d6b01f98a0c91739a66af35ff2e06112d1746cd338e4e6ec89e4b0b",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-150-frame-132.png",
                "sha256": "867c6b514629d2b99315eab8711c8abd19cba464d1dae12a07f8be52f50e3114",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-150-frame-149.png",
                "sha256": "4690f5017d6b01f98a0c91739a66af35ff2e06112d1746cd338e4e6ec89e4b0b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.205512152777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-600-frame-20.png",
                "sha256": "0066ea0f69e022e6efb183226a979bc8800391eb60d86244c469e92500d7df11",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-600-frame-135.png",
                "sha256": "4690f5017d6b01f98a0c91739a66af35ff2e06112d1746cd338e4e6ec89e4b0b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-600-frame-528.png",
                "sha256": "4690f5017d6b01f98a0c91739a66af35ff2e06112d1746cd338e4e6ec89e4b0b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/16x9-duration-600-frame-599.png",
                "sha256": "4690f5017d6b01f98a0c91739a66af35ff2e06112d1746cd338e4e6ec89e4b0b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 19.554361979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-150-frame-18.png",
                "sha256": "45644eec45e82e933512d01a21e42ecd5f012434d455358959d5936ae2e14a6d",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-150-frame-135.png",
                "sha256": "d24837676d34459a9b8c587b846b066bb4dcb22d3b63464bd27a5aa1d5e98ae8",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-150-frame-132.png",
                "sha256": "90f39ac8bedc13ac48be4877197a055a3d014ebce72cec826907b4fe76a5ea30",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-150-frame-149.png",
                "sha256": "d24837676d34459a9b8c587b846b066bb4dcb22d3b63464bd27a5aa1d5e98ae8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 19.55881076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-600-frame-20.png",
                "sha256": "b44891dc259fcaeb2b771ee61a0ea71cfac434497c29e5589a65e65a67c6e0d0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-600-frame-135.png",
                "sha256": "d24837676d34459a9b8c587b846b066bb4dcb22d3b63464bd27a5aa1d5e98ae8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-600-frame-528.png",
                "sha256": "d24837676d34459a9b8c587b846b066bb4dcb22d3b63464bd27a5aa1d5e98ae8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/9x16-duration-600-frame-599.png",
                "sha256": "d24837676d34459a9b8c587b846b066bb4dcb22d3b63464bd27a5aa1d5e98ae8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 9.670355902777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-150-frame-18.png",
                "sha256": "a138bc10e64a8d713e235202e040bfc218d08e3b9e33c7089b9391d0b7b3d207",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-150-frame-135.png",
                "sha256": "bf8e2741ce0b839c1b909bf047889b61ecd5392b88f34e69cb7c2f68e0816944",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-150-frame-132.png",
                "sha256": "604a98f29df04fa08a84d7192d1d3949f3ebb0a3fc549c428a6187987e9eaff1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-150-frame-149.png",
                "sha256": "3065bc2f62aea8a90bae657d2d4b275f085c9faad65d97f03fc77cf40eb47fc2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.674370659722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-600-frame-20.png",
                "sha256": "9d169466505385e99cd70f77644c02c8d6cd3f2715338c2444e30ae51f0bb1a0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-600-frame-135.png",
                "sha256": "7bc5713ce950146001f33d06f60e29f4c47c538bfe6cc192bcf160f44f638b02",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-600-frame-528.png",
                "sha256": "22784161548b4e7968ab5ca17a1d2f643e777cf1764f0d4cfee4118a9a399aa5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/magnetic-number-swarm/1x1-duration-600-frame-599.png",
                "sha256": "6145adfe425beaa9543008ad0911d88be2df1dd5e560692ec18cfa0900659841",
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
        "note": "1. TitleMatches: The sequence of motion samples (images 2–4) show small digits dispersed in a swarm, which then appear to collapse into the final large number display seen in the poster bookends (images 1 and 4). This directly supports the title 'Magnetic Digit Swarm' and matches the concept that 'every digit finds its place.' The effect is not just in the naming — the visual animation itself illustrates digits moving and assembling into a number.\n\n2. noBakedHeading: There is no prominent decorative or block-title baked into the visual design. The only heading present is the editable 'Every digit finds its place' label placed under the main numerical content. There are no category, block, or language labels outside functional content.\n\n3. BrandAdherence: In images 5, 6, and 7, the same layout and numerical/label content are presented in three distinct supplied brand palettes. All are clearly legible, have appropriate palette changes for background and numerals, and do not retain unexplained fixed block colors. Consistency of material and clarity are maintained in each.\n\n4. LanguageAdherence: The visible posters and motion samples consistently use oversized tabular numerals, sans-serif body, and strong graphic simplicity across all versions. The visual composition and type hierarchy remain intact across all palette and motion stages. The role and style of material, ink, and accent all follow the language card, with no use of forbidden effects (e.g., no frosted glass, browser chrome, or floating cards). The verbs 'assemble' and 'slide' are directly illustrated by the swarming/arranging digits in the motion samples."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ee059bb1aea54c8a0756a0b241f0d0330f1f621d91faf228959f32759f1ec52e",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:46:26.641Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "magnetic-number-swarm",
      "vsPositive": 1,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
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
      "framesSha256": "07306dbe08358a8540cd938adbeb95ab82a5f74b8ee5d13af9df7fc0b173b30a",
      "bundleSha256": "ee059bb1aea54c8a0756a0b241f0d0330f1f621d91faf228959f32759f1ec52e",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/16x9/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "955a4821af2d7acc4a2e5ad1d4d17fe7fd868359876f3f1da4365edc9feade56",
        "loop": "becadc09c26ed4eda357e4f41713a4c8038f2b9d775b175989cb617985649c34",
        "detail": "fb7aa4d7cffe578c2908d7d7afe9c55e3a441e048c59d80ccd9aba940a67be99"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/9x16/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "35a2a85f9327c92cdd2140f33ad6568e5e47e2929d250b641991486c197fc163",
        "loop": "f6027dfb7007d74c590327306be23d3be242c642edce79ce451c753899d4a733",
        "detail": "6662938c97305137da75f52ce99c700ec3e04430b5b41b8cb94fa61194cc6771"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-number-swarm/1x1/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3bb7a82f707921d25f186fc0e17cfc4105b2d6b8769b78f8024166ceb84c878a",
        "loop": "0701de1cbc3912cba25c0877e8ef064b9fcb0ba5660d8481f377c9f37aa9a761",
        "detail": "1454d2129ce9600cf1d311e7caac38c17bcb411b217b93f9107cb854295662a0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ee059bb1aea54c8a0756a0b241f0d0330f1f621d91faf228959f32759f1ec52e/index.mjs",
    "sha256": "ee059bb1aea54c8a0756a0b241f0d0330f1f621d91faf228959f32759f1ec52e",
    "bytes": 161749,
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
    "at": "2026-10-09T20:56:47.779Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
