// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/craft",
  "job": "process",
  "language": "kinetic-poster",
  "mechanic": [
    "mobile"
  ],
  "tags": [
    "mobile",
    "balance",
    "sculpture",
    "hanging",
    "words"
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
      "key": "step1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step4",
      "type": "text",
      "role": "body"
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
    "sourceUrl": "21st first-party (Hanging Process Mobile, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C13E2B",
    "secondary": "#C5AA5E",
    "color": "#26312D",
    "background": "#F4F1E6",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "step1": "DISCOVER",
    "step2": "DESIGN",
    "step3": "BUILD",
    "step4": "SHIP"
  },
  "fields": [
    {
      "key": "step1",
      "label": "Step 1",
      "type": "text",
      "max": 12,
      "role": "body"
    },
    {
      "key": "step2",
      "label": "Step 2",
      "type": "text",
      "max": 12,
      "role": "body"
    },
    {
      "key": "step3",
      "label": "Step 3",
      "type": "text",
      "max": 12,
      "role": "body"
    },
    {
      "key": "step4",
      "label": "Step 4",
      "type": "text",
      "max": 12,
      "role": "body"
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
  "name": "Hanging Process Mobile",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "kinetic-mobile-words",
    "bundleSha256": "74e43d12acdadfbeac3cfb0c38e3a001f8d55c6b4878a9130471e1672f5fcb05",
    "sourceSnapshot": {
      "sha256": "c47c5ab6a2d4c2ace1617a542efbf08f9b9f6ed2dd9c899fd982fbfc0b4c400e",
      "files": 2133
    },
    "renderedAt": "2026-10-09T21:55:58.965Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-paper.png",
        "sha256": "2ecf5434122c7ba400f0a973b5f95c258de1e838881a0621e332025d4054ab2c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-night.png",
        "sha256": "b2ac87b9f3c315cc0b5eb2f64b1a361e32f0f5d3ada2568c185468371d09aca9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-color.png",
        "sha256": "efac32fb9c312ca7076467d620ab5648a604bac18e0a9253c287bcd152ecfb72"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-paper.png",
        "sha256": "aeeba3d39d2ef58e90a16c777e5aff9cf88b331c3400a6363292f4b128b0a290"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-night.png",
        "sha256": "4d64fb5549e97b917e7d2c537a424d9e6c36367984254f20c81ce384c0af325f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-color.png",
        "sha256": "8de9ce4b41f2d584b863dda96888017dfc2ff240a930f3b1a4916d733851929d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-paper.png",
        "sha256": "207d2d93951f7ce4f742259570d37e9c4d58605e9c0c0be1023519dc5ff727aa"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-night.png",
        "sha256": "ac610965447639d2cfcda1e9720fac8700a03c9f60671f02ba6806d516543eef"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-color.png",
        "sha256": "fd2b208b348869ec8d9934b5ef10bcabe900648ec97b7d33147a02a0cff82546"
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
          "kinetic-mobile-words--16x9",
          "kinetic-mobile-words--9x16",
          "kinetic-mobile-words--1x1"
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
            "paperNight": 54.428059895833336,
            "paperColor": 15.721381293402779,
            "region": {
              "left": 288,
              "top": 59,
              "width": 1344,
              "height": 962
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 58.095865885416664,
            "paperColor": 17.345865885416668,
            "region": {
              "left": 162,
              "top": 105,
              "width": 756,
              "height": 1693
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 60.0556640625,
            "paperColor": 19.771131727430557,
            "region": {
              "left": 114,
              "top": 59,
              "width": 812,
              "height": 962
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
            "occupancy": 0.8836713697824811,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8836713697824811,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8809156378600825,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8742559523809526,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8747726521164023,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8716724537037039,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.949128508284887,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9222443263999703,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8809156378600824,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.054578993055555,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 7.599392361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-150-frame-18.png",
                "sha256": "1fbd21bf596594178248576bd69339829019b5a5ea9f6df9fc1da97891702b66",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-150-frame-135.png",
                "sha256": "b1df0e648815513c1fef903786b4e79e3bf388064dc11e108ef675b8630ce73f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-150-frame-132.png",
                "sha256": "8b8999c42702e8f3af09f4d32b5443c18db6c6b41d38d3c2f2aa95e8fec70cda",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-150-frame-149.png",
                "sha256": "b1df0e648815513c1fef903786b4e79e3bf388064dc11e108ef675b8630ce73f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.054578993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-600-frame-20.png",
                "sha256": "7c4b67d430a9425bd226c3d3ae547ee2458b4ddfa18a1622bcf6f9b7e5dc4ad7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-600-frame-135.png",
                "sha256": "b1df0e648815513c1fef903786b4e79e3bf388064dc11e108ef675b8630ce73f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-600-frame-528.png",
                "sha256": "b1df0e648815513c1fef903786b4e79e3bf388064dc11e108ef675b8630ce73f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/16x9-duration-600-frame-599.png",
                "sha256": "b1df0e648815513c1fef903786b4e79e3bf388064dc11e108ef675b8630ce73f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.575303819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-150-frame-18.png",
                "sha256": "e79f8e4d75fd19bb4bab6484ca07eb931e53c299c5295d952606bd3c1c0249f3",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-150-frame-135.png",
                "sha256": "6b0a11ecdda063834112f3e9f98c37c1cb1db31f0a103c8bda40a2f7afcc9635",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-150-frame-132.png",
                "sha256": "41399ba370993fafa322beafa7797d60fbc73e1cae90a39d8910271352b9775c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-150-frame-149.png",
                "sha256": "c0d0ef77e91f08f13fac6f766e56f88bfb41cb07b0d44a582f7448ddd68ca6f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.751519097222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-600-frame-20.png",
                "sha256": "3703350f57052dea1984c71afbde3757bd3f90aae1f2b3125bb39bbfecf2425b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-600-frame-135.png",
                "sha256": "f2f049358f3cacb08d928c722724de908e08d68ccbdb9849a8271fb366a2531d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-600-frame-528.png",
                "sha256": "fb1c910ee0b77a7fabada96f3f67e10e591ab33610119b1d773e58564cd86c8b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/9x16-duration-600-frame-599.png",
                "sha256": "c0d0ef77e91f08f13fac6f766e56f88bfb41cb07b0d44a582f7448ddd68ca6f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 10.768012152777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-150-frame-18.png",
                "sha256": "7ee6977fb36e893f64d7b1d98b195422a135b7042d045ec5c7aefd5018a777ce",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-150-frame-135.png",
                "sha256": "283c00df0e5857c296d37806f7085fe52dd012435d36790773135530f08f652f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-150-frame-132.png",
                "sha256": "72badd2621402a4913b98c989855796f5f025b94d80df837574940d384525934",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-150-frame-149.png",
                "sha256": "283c00df0e5857c296d37806f7085fe52dd012435d36790773135530f08f652f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.068033854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-600-frame-20.png",
                "sha256": "f352cde454ca0d8a8bba468e75aa319dfab708ede4ed106c13712139a6026fca",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-600-frame-135.png",
                "sha256": "283c00df0e5857c296d37806f7085fe52dd012435d36790773135530f08f652f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-600-frame-528.png",
                "sha256": "283c00df0e5857c296d37806f7085fe52dd012435d36790773135530f08f652f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/kinetic-mobile-words/1x1-duration-600-frame-599.png",
                "sha256": "283c00df0e5857c296d37806f7085fe52dd012435d36790773135530f08f652f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The sequence of images visually supports the claimed title 'Hanging Process Mobile.' The design features a grid with step labels ('DISCOVER,' 'DESIGN,' 'BUILD,' 'SHIP') and colored hanging circles reminiscent of a kinetic mobile or process chart. In the motion samples, the grid tilts and the step headers move/scale in a manner evocative of mobile movement (verb evidence: 'assemble,' 'replace,' 'slide'). This demonstrates a process visualized as a mobile, underpinning the title beyond just copy.\n\n2. NoBakedHeading: There are no decorative or unexplained headings embedded. All large text is legitimate slot content ('DISCOVER,' etc.) and relates directly to process steps, not superfluous categories, languages, or labels.\n\n3. BrandAdherence: The last three images show legitimate palette and role swaps per the supplied palettes: all roles (background, primary, secondary, text) are swapped accordingly. Colored balls and type contrast remain functional and legible in all cases, with no unexplained fixed block colors. The grid and shapes retain full structure/material integrity.\n\n4. LanguageAdherence: Across all images and states, oversized display type and sans/tabular numerals are preserved, in line with the specified type roles. The material effect (oversized type, cut masks, compressed shapes) and palette uses remain consistent. Flat color fields and the absence of forbidden elements (no frosted glass, chrome, nor ambient floating cards) match the card strictly. Motion is visually delivered through type and mask movement, as described.\n\nAll checks pass with clear direct supporting visual evidence in the images provided."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "74e43d12acdadfbeac3cfb0c38e3a001f8d55c6b4878a9130471e1672f5fcb05",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:37:02.646Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "kinetic-mobile-words",
      "vsPositive": 0.7083333333333334,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.16666666666666666,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.25,
          "vsNegative": 0.75
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "9f008809ae35cfaaa4f179e2fb14bce94d12944504e27c4dbf4a358901e4fbc5",
      "bundleSha256": "74e43d12acdadfbeac3cfb0c38e3a001f8d55c6b4878a9130471e1672f5fcb05",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/16x9/detail.mp4",
      "bg": "#f4f1e6",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0e584401bbe7f690e42a2ac49c3a46d7953101a0b060f714e76f4a99b26ee8ee",
        "loop": "6691060794a2f91170a5574a4321b892411a6495b0723ffc40d891a683311b3b",
        "detail": "cc2480e5aa0fa5286b25b525f1fb3cf45b12951377f2d95caee8169d2857bf56"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/9x16/detail.mp4",
      "bg": "#f4f1e6",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5c59c95d0795c3ab7573eee60b4d7d2800e0abd5380232eb67d63df69c91f1f6",
        "loop": "14bb041175c90dc387f585e4fbf4e16074709e91836dac04bf69f3ebe7cd56fd",
        "detail": "676f08270e9287a48f8c5044cc2d18a96be748c44dd052a3a5833f5f7683f1f6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-mobile-words/1x1/detail.mp4",
      "bg": "#f4f1e6",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b016533b6811e5cde4eed86d5be58236e1fe4b4cda7935bfa575cb0eeddae577",
        "loop": "823f12a1a1c45d1625ddd946c39dde7b9c2736fb74c0d2de4074d3e9589261d7",
        "detail": "cc0c80d3cc381ad0ec1599e15e1fbf20c2b4bcbb1fa157f6702fb89608cd382d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/74e43d12acdadfbeac3cfb0c38e3a001f8d55c6b4878a9130471e1672f5fcb05/index.mjs",
    "sha256": "74e43d12acdadfbeac3cfb0c38e3a001f8d55c6b4878a9130471e1672f5fcb05",
    "bytes": 159919,
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
    "at": "2026-10-09T22:42:02.279Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
