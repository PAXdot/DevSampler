// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "eclipse"
  ],
  "tags": [
    "eclipse",
    "diamond",
    "corona",
    "logo"
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
    "sourceUrl": "21st first-party (Diamond Ring Eclipse Logo, 2026-10-09)"
  },
  "defaults": {
    "primary": "#D6A65A",
    "secondary": "#A85F41",
    "color": "#F3E6CB",
    "background": "#17252B",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "A moment worth revealing"
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
      "max": 34,
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
  "name": "Diamond Ring Eclipse Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "eclipse-diamond-logo",
    "bundleSha256": "25d5c9004b3468df7027e1d8e9d9b49d0ad5be0b8b7616033a0713288358c9a0",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:51:10.599Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-paper.png",
        "sha256": "cbb80ea055c509ccbb7e9eb069e01d8ed677c9dfc55adbaa603ef374112e6055"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-night.png",
        "sha256": "9e474c64bcd22d912c7e499202f6e7c1e344af076308f22231b4a1a40747be79"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-color.png",
        "sha256": "6bd7074e39449e3b88fb8c743ab4b05bb49678bc1246436441998738d230305b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-paper.png",
        "sha256": "76dc60d550647f6a589dfb45aa6f0a0be46a305228a0e550bfa79a5cca334bc2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-night.png",
        "sha256": "6d9b11217cc809e6803d53baf19faecc123c7016d4657062ead4290dec41753e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-color.png",
        "sha256": "752d50743211df5250ec90827dbe5676ea2563803687c37e389c24884c040de3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-paper.png",
        "sha256": "3e834299e97e766174cf9673011ea8a0ba2dc27b293203ac897fe7f0d45981b5"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-night.png",
        "sha256": "34cfd3054744edc61ad2155d6ca9034b491a79eb5c4c8a386125a1f10c5bf30a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-color.png",
        "sha256": "ad2646bbf494c01fe17a3467dfe4af6038a5ac16245eae7566aa0c1340ede140"
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
          "eclipse-diamond-logo--16x9",
          "eclipse-diamond-logo--9x16",
          "eclipse-diamond-logo--1x1"
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
            "paperNight": 14.324327256944445,
            "paperColor": 14.207166883680555,
            "region": {
              "left": 510,
              "top": 26,
              "width": 900,
              "height": 916
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 17.67263454861111,
            "paperColor": 13.23049587673611,
            "region": {
              "left": 65,
              "top": 350,
              "width": 950,
              "height": 1427
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.30740017361111,
            "paperColor": 14.183648003472221,
            "region": {
              "left": 90,
              "top": 26,
              "width": 900,
              "height": 916
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
            "occupancy": 0.5634487591332831,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5628336404006048,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.556067334341144,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9265396777280873,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9252410937368777,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8447288862818791,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0016866829036144,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.000593138489964,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9885641499398115,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.968967013888889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 4.028862847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-150-frame-18.png",
                "sha256": "34a35819203f43aa32f660dd151d5d0ed686ebcb15ddc48a6ccd59f191afa8a7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-150-frame-135.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-150-frame-132.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-150-frame-149.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.968967013888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-600-frame-20.png",
                "sha256": "69a59ba555a4a6abffeccdf64cad8d17d5f083bb455cfaac369db7594ce395c9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-600-frame-135.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-600-frame-528.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/16x9-duration-600-frame-599.png",
                "sha256": "22e69cab8c7c8336e06678bcbfa0184918f0bae43a407f645e8e648d7abaf6e5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 5.293619791666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-150-frame-18.png",
                "sha256": "6ae904441f0d37d45a2d6064732e25811c18f721d33cf0e8b8252458eaeda370",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-150-frame-135.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-150-frame-132.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-150-frame-149.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.232638888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-600-frame-20.png",
                "sha256": "b4ce4f34a460d7b0dc73c79117b29ba9af9723478280dd45bef098eb9a8e804a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-600-frame-135.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-600-frame-528.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/9x16-duration-600-frame-599.png",
                "sha256": "bf7efd3012f1b707f064f6c09656417356cab783ac1ea394da4fb7056e53ea07",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 7.153862847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-150-frame-18.png",
                "sha256": "209dd6eb336b42a6411f2769485f222e30d84ee8cba32b59bb4d26c28110f710",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-150-frame-135.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-150-frame-132.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-150-frame-149.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.033528645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-600-frame-20.png",
                "sha256": "cbb3a4e559c5c72ff9a39acfa8602732d91b5ffa0a8693e88b0de6af3581633b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-600-frame-135.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-600-frame-528.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/eclipse-diamond-logo/1x1-duration-600-frame-599.png",
                "sha256": "3f921618cca25bbf425899b625b86e6d658ad96ad405656a42d81f271c374297",
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
        "note": "1. TitleMatches: The subject is a circular form strongly resembling a solar eclipse's 'diamond ring' effect, supported by a glowing ring and a momentary bright spot in image 3. The composition and sampled motion (covering/revealing, brief flash) directly echo the claimed 'Diamond Ring Eclipse Logo'. The visuals authentically evoke the stated title, not relying on descriptive copy alone.\n\n2. noBakedHeading: There is no superimposed decorative block-title, category, or unexplained label. The only text ('A moment worth revealing') is caption content, aligning with named-slot evidence.\n\n3. BrandAdherence: The last three images show the same composition under three palettes: (1) off-white background with purple aura, (2) dark with blue accent, (3) light green with blue. Each palette uses supplied color roles (primary, secondary, text, background), and all text/logos remain crisp and legible. No unexplained fixed colors are present, and the shape/material is preserved.\n\n4. LanguageAdherence: In all palettes and frames, the material, type size/role, and soft-light aura effect are consistent with the supplied language card (soft gradients, sharp subject, sans-serif type, no blurred copy/UI skeletons, appropriate color assignment).\n\nThus, all four checks are met based on explicit visual evidence in these images."
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
      "bundleSha256": "25d5c9004b3468df7027e1d8e9d9b49d0ad5be0b8b7616033a0713288358c9a0",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.031Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "eclipse-diamond-logo",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "e54441c07995726f410e97a237b6dbbf9a059b805c9a77597155bd0fe976b088",
      "bundleSha256": "25d5c9004b3468df7027e1d8e9d9b49d0ad5be0b8b7616033a0713288358c9a0",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/16x9/detail.mp4",
      "bg": "#17252b",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a8d41d01310affa665e6cee9163792a8a1956772fd6f64937febd615f23a6d4b",
        "loop": "dc6002cabef6da52b968b27cd11af8b23b290055fa96040e7a84fa6a7f5ec610",
        "detail": "273390fd7b96e7beb0ac61cc2a37b24c29a7c8f50da359fba9192f2371165fd3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/9x16/detail.mp4",
      "bg": "#17252b",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "78b00f342850167a533c0adcbb2e14a70930d65ecbbac03e5fc77c500ab40541",
        "loop": "2893d15ab1be70ef084e4cb844824d555ada3e62b08d412d826ccc9f7e3e1dca",
        "detail": "b0b31cfb0365ee88836e3a45e7cbde27eeab1e3f5ebc020bf1bbceebafc9f999"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/eclipse-diamond-logo/1x1/detail.mp4",
      "bg": "#17252b",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b86a744f8e1920ca6b37728a21bd4fa0a61e089458e5b1f89fb7b61e9cd65545",
        "loop": "c75f3a8edcf20e2fdf4d22282382a4088fa3fa9baa53542dfc9d1f9f1892740e",
        "detail": "2718024cb44ab2e054fe8c80e91c2b6ff1e3343f4aea52bafcea4791db281dc7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/25d5c9004b3468df7027e1d8e9d9b49d0ad5be0b8b7616033a0713288358c9a0/index.mjs",
    "sha256": "25d5c9004b3468df7027e1d8e9d9b49d0ad5be0b8b7616033a0713288358c9a0",
    "bytes": 160656,
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
    "at": "2026-10-09T23:06:29.409Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
