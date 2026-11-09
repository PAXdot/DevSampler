// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/craft",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "halftone"
  ],
  "tags": [
    "halftone",
    "print",
    "dots",
    "photography",
    "wave"
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
      "key": "image",
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
    "sourceUrl": "21st first-party (Halftone Photo Wave, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A73E35",
    "secondary": "#D1AD68",
    "color": "#212A29",
    "background": "#F6F1E7",
    "fontFamily": "DM Sans",
    "seed": 31,
    "image": "",
    "caption": "Every dot tells the story"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "image"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 36,
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
  "name": "Halftone Photo Wave",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "halftone-dot-wave",
    "bundleSha256": "5d2f3ccbe755dd0bc0fd909fe1841ba95cc75db2fc683870f6b8259a5b5a4665",
    "sourceSnapshot": {
      "sha256": "3c8f9beca2d21af5776a406cc9ca7e375f382a45fef2346630c17a4221a87761",
      "files": 2046
    },
    "renderedAt": "2026-10-09T20:59:31.217Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-paper.png",
        "sha256": "b8e347ea1068025dc22c2ed21b7666c21a512c314d86bd73578f19d0e5826c5e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-night.png",
        "sha256": "fc83f9e3fddd5f59ba296941255063b35dffccc7fcdca1fe63518314fb43f97e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-color.png",
        "sha256": "c5da2741bdbc6c0982eef4db8a730e91c113d2152de03a5c8d60d87866976ab4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-paper.png",
        "sha256": "fd559fb068370de3126f20c7db59a6c3b6a95b6bf6e71a4cf19b0593b309d903"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-night.png",
        "sha256": "5bb386844bbb0557c1e029d047207509c7df66cc558c0cd7bbad0e8aab5e4e76"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-color.png",
        "sha256": "b885cea64cd4629311b98105697b278e546ff00399bcd113a27b1b90c9acad63"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-paper.png",
        "sha256": "e402bdc9afc87150ac2fbf19b3b83ff98c8bd84f46ce2ffc5ade97edba5ed331"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-night.png",
        "sha256": "f1954c4a2b2d496a39ac5837efeade176d474d50c92952d8ed091d57b37b9b03"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-color.png",
        "sha256": "57e2c973e9ab7ecaff4d915038584368f68ad9b62b42ccaa75d22425ee2e16e1"
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
          "halftone-dot-wave--16x9",
          "halftone-dot-wave--9x16",
          "halftone-dot-wave--1x1"
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
            "paperNight": 76.87348090277777,
            "paperColor": 25.947021484375,
            "region": {
              "left": 150,
              "top": 94,
              "width": 1620,
              "height": 859
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 78.55414496527777,
            "paperColor": 26.01193576388889,
            "region": {
              "left": 84,
              "top": 171,
              "width": 912,
              "height": 1633
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 80.16102430555556,
            "paperColor": 27.06301540798611,
            "region": {
              "left": 84,
              "top": 95,
              "width": 912,
              "height": 858
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
            "occupancy": 0.9510965844671204,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9510965844671204,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.93781001984127,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0178820756697744,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0178820756697744,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9374737549340726,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9507712550040595,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9507712550040595,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9374737549340726,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.077582465277779,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 11.07834201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-150-frame-18.png",
                "sha256": "479037540de87331c5bd4707befc3dc12ceaee2b7fde6f3315b871f09dde0593",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-150-frame-135.png",
                "sha256": "15a1fa9ecd6aac74d687312a120a6389f5dd36f7b4bf0a74f47063efbc294d40",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-150-frame-132.png",
                "sha256": "f8428d3754333f97681fa5764f45ee4a39c1e239668bfc482fb628b658ee7707",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-150-frame-149.png",
                "sha256": "15a1fa9ecd6aac74d687312a120a6389f5dd36f7b4bf0a74f47063efbc294d40",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 11.077582465277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-600-frame-20.png",
                "sha256": "863ecddfcb5d242f5738cf97d84c66d5cd02af89a2a70955b5d904d226944348",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-600-frame-135.png",
                "sha256": "15a1fa9ecd6aac74d687312a120a6389f5dd36f7b4bf0a74f47063efbc294d40",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-600-frame-528.png",
                "sha256": "15a1fa9ecd6aac74d687312a120a6389f5dd36f7b4bf0a74f47063efbc294d40",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/16x9-duration-600-frame-599.png",
                "sha256": "15a1fa9ecd6aac74d687312a120a6389f5dd36f7b4bf0a74f47063efbc294d40",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 9.264756944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-150-frame-18.png",
                "sha256": "0390b1b88dc49141b17c08b544c52e9c4c0fd321a6341e219afdd695b8959edb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-150-frame-135.png",
                "sha256": "15d3abacd3d645a0dc3bf5e4c6b41fd00c4a20bf527826dcbaf35ae175f4b9fb",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-150-frame-132.png",
                "sha256": "5664fcc94ed9c2a8647ebc731fbf0ca3920a7166e90ddd406cd8a10f8357ada1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-150-frame-149.png",
                "sha256": "15d3abacd3d645a0dc3bf5e4c6b41fd00c4a20bf527826dcbaf35ae175f4b9fb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.261176215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-600-frame-20.png",
                "sha256": "f86849681f7b52ace39a0414ebb7fe2b804698069b8a222de336171e7dd30c37",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-600-frame-135.png",
                "sha256": "15d3abacd3d645a0dc3bf5e4c6b41fd00c4a20bf527826dcbaf35ae175f4b9fb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-600-frame-528.png",
                "sha256": "15d3abacd3d645a0dc3bf5e4c6b41fd00c4a20bf527826dcbaf35ae175f4b9fb",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/9x16-duration-600-frame-599.png",
                "sha256": "15d3abacd3d645a0dc3bf5e4c6b41fd00c4a20bf527826dcbaf35ae175f4b9fb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 10.342447916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-150-frame-18.png",
                "sha256": "ddb4da367918b92071bc3e6f73bc652f2dc750ffbf80806591ddfa5433c5ae62",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-150-frame-135.png",
                "sha256": "67ffd64ac9aabc6822f895d800b17501d214ad3ed161be589e0ec1721fcdb1d6",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-150-frame-132.png",
                "sha256": "a8c8e262b02802258c794d962fc3ded09a5ae0e5471428b6dfed6c7e9ef48c12",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-150-frame-149.png",
                "sha256": "67ffd64ac9aabc6822f895d800b17501d214ad3ed161be589e0ec1721fcdb1d6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 10.337456597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-600-frame-20.png",
                "sha256": "ab7996440c4da2992f8a19c5e1e63fd046f0aba17f1d344c0f34a2365661a773",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-600-frame-135.png",
                "sha256": "67ffd64ac9aabc6822f895d800b17501d214ad3ed161be589e0ec1721fcdb1d6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-600-frame-528.png",
                "sha256": "67ffd64ac9aabc6822f895d800b17501d214ad3ed161be589e0ec1721fcdb1d6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/halftone-dot-wave/1x1-duration-600-frame-599.png",
                "sha256": "67ffd64ac9aabc6822f895d800b17501d214ad3ed161be589e0ec1721fcdb1d6",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The images clearly feature a halftone effect which resolves into the photographic image of a face and bars, supporting the 'Halftone Photo Wave' title. The motion samples chronologically show dots drawing/rising into shape, consistent with the claimed title and language-card verbs. \n2. noBakedHeading: There is no decorative category, language, or block title baked into the design; the only visible heading is the editable caption 'Every dot tells the story', matching the namedSlotContent and located below the main visual, not as a decorative overlay.\n3. brandAdherence: Images 5-7 present the poster under three palettes listed in the evidence, altering background/ink/accent colors, while the dot pattern and visual clarity are preserved each time. Shape and material are preserved, and no unexplained fixed block colors remain. Each palette uses the correct colors as listed and all text/dots remain legible.\n4. languageAdherence: The material is always paper-like, with fine rules, no glow or shadow or gradients. Static camera, consistent serif type, and dot/column motion match language card cues. Visual roles for background, text, and accent are held across palettes and sampled motion. Visibly consistent language card application is clear throughout."
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
      "bundleSha256": "5d2f3ccbe755dd0bc0fd909fe1841ba95cc75db2fc683870f6b8259a5b5a4665",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:14:18.565Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "halftone-dot-wave",
      "vsPositive": 1,
      "vsNegative": 1,
      "fakeVotes": 0.020833333333333332,
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
      "framesSha256": "091a9c80be577c3e3c9d21f420b8588e0e9e4247a09a7e90628f9c41c44e14c5",
      "bundleSha256": "5d2f3ccbe755dd0bc0fd909fe1841ba95cc75db2fc683870f6b8259a5b5a4665",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/halftone-dot-wave/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/halftone-dot-wave/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/halftone-dot-wave/16x9/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "73396c4a168db8f69b680a1d9eb98798aa375679fc0fb79522e9b8766f2e922b",
        "loop": "313032a2bde394095099ce08ce8d63abee6a687ab9d6ca43d189c5b5b865e1d9",
        "detail": "9246e257b8a776a7870c30604b596035edf6bac125b1b593d7a0415b4fa9534a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/halftone-dot-wave/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/halftone-dot-wave/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/halftone-dot-wave/9x16/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a7e022bff5fb76d078bafaed9d18bdd68788adfd7b347208b320ee18c74a51a5",
        "loop": "b9228d871481101a3a42e23deed83e1f9c0f8c07e2a349c87ab9e4ba54533b52",
        "detail": "d708503c3009e1748d2a3563ccd2fc22141eba7771f3a5b4c89d73106f558e1a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/halftone-dot-wave/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/halftone-dot-wave/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/halftone-dot-wave/1x1/detail.mp4",
      "bg": "#f6f1e7",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b5cc1badb756f566b5029ad62b7e90d55d9eeef44768350c023fb66c5c869f69",
        "loop": "462a56d671f9091fbf66750cab0617a9fd68d1320b2c1cc4fc043c50466df671",
        "detail": "6e6ba529cf1c774b00dde083dbbb5b07c804252e69eb9c06d7a470717dc76a4d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5d2f3ccbe755dd0bc0fd909fe1841ba95cc75db2fc683870f6b8259a5b5a4665/index.mjs",
    "sha256": "5d2f3ccbe755dd0bc0fd909fe1841ba95cc75db2fc683870f6b8259a5b5a4665",
    "bytes": 165004,
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
    "at": "2026-10-09T21:15:53.127Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
