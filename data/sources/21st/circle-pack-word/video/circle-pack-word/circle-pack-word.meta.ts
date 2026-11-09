// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "packing"
  ],
  "tags": [
    "packing",
    "circles",
    "typography",
    "particles"
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
    "sourceUrl": "21st first-party (Circle Packed Letters, 2026-10-09)"
  },
  "defaults": {
    "primary": "#D03F2F",
    "secondary": "#D8AA32",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "text": "MAKE IT BIG"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 28,
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
  "name": "Circle Packed Letters",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "circle-pack-word",
    "bundleSha256": "3a2c0aa48b0a26e411d28378dfb3fa7439430f9181de5e678a5c1f6cd814aeb0",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:07:52.136Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-paper.png",
        "sha256": "5b24a14a1b12cb1d8a8ce591f12beee239133226f54a87afbd596dd074a0b647"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-night.png",
        "sha256": "9b8e80099637cf17d15f20ce0bb4de1e8b3bf18788f477344b3c18772d63217c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-color.png",
        "sha256": "05a06d94fb0e75a82ee192d5a7d654be5b011774400100f74865c188bc5a0688"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-paper.png",
        "sha256": "bbdc7070681376c849e4525bf5f03703930863a70e020e6a982d243db1b6d245"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-night.png",
        "sha256": "e44f21b3a598c2c5dc2ac38bec8a68a33e666d026aa4dacdcacdb4731a5c276d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-color.png",
        "sha256": "5525e808f0e6a28c7d2b7f1cd5ab68c4c9769a2d063886c91c5f9c15e0e696cf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-paper.png",
        "sha256": "fad91622a03703f68eeeb35a385cdc3e680f922e55c85e162d70154bf00b356d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-night.png",
        "sha256": "13703e829deee1244108da0c9249da6a15e1314c224d3edd3731e26d6de4ed7f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-color.png",
        "sha256": "e6294fc570b6e02bd87f5741d3b142e79d3b1a9373fd2f4b7155118dc8de967c"
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
          "circle-pack-word--16x9",
          "circle-pack-word--9x16",
          "circle-pack-word--1x1"
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
            "paperNight": 99.95255533854167,
            "paperColor": 58.323269314236114,
            "region": {
              "left": 187,
              "top": 372,
              "width": 1550,
              "height": 295
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 54.255099826388886,
            "paperColor": 24.77761501736111,
            "region": {
              "left": 114,
              "top": 250,
              "width": 864,
              "height": 1385
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 89.21910264756944,
            "paperColor": 62.796359592013886,
            "region": {
              "left": 105,
              "top": 433,
              "width": 873,
              "height": 187
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
            "occupancy": 0.21081485899400917,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21436887833837243,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.27803708449686465,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6437313222614149,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6979875283446714,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6181293971420874,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11839440851786533,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11898492250123646,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19835802119201593,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.342013888888889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 6.326280381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-150-frame-18.png",
                "sha256": "613d4db37594369507b70dbd4946c90b291c49235edf96166c275a1d8a781501",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-150-frame-135.png",
                "sha256": "0115cae8df7c6814ef2714f622c3c816dd00c8c0bf725a4149b66dbd988cf624",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-150-frame-132.png",
                "sha256": "9a1869893daf6c3ebeadbde2b24561f0b4caab9eb4000f9de61b82d76bf2cd03",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-150-frame-149.png",
                "sha256": "76dce894b048216a0a95fc4e62b6434810f5208cd5ab0631a6f25a5e963227ec",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 6.342013888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-600-frame-20.png",
                "sha256": "ab6476e462d1884350f808cfaf989ad2820d22a54375f9f477d00004fee584d3",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-600-frame-135.png",
                "sha256": "8088eb8a1a671591414d40ff16b5d942ff1ad0dbcffd776a9572e01d496aee3b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-600-frame-528.png",
                "sha256": "0dba1279098725b6f09a7cc885fd060ee2d978fa439de5cc366a20188f40b08d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/16x9-duration-600-frame-599.png",
                "sha256": "da6ff72c71e581f336025149eb12b4da7ec980acc76b69480ec75df4649c325b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.054144965277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-150-frame-18.png",
                "sha256": "3ea727f8834ca190f6e044a929f9bcf9ca7099f1577b90c715a93316d9c0ce78",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-150-frame-135.png",
                "sha256": "efa6858a29030eef44ed66b42f268a6c447fa316dcf4b9a22c82f5b85d8e39fe",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-150-frame-132.png",
                "sha256": "55582fd9ce1614d9119e67bd1291f9e6a58f17b7cb2e46d464319527e11c8126",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-150-frame-149.png",
                "sha256": "efa6858a29030eef44ed66b42f268a6c447fa316dcf4b9a22c82f5b85d8e39fe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.056098090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-600-frame-20.png",
                "sha256": "967a4ba1a25507b0a461b1dc766cee8f0fd49d13caa72c9bd2e2ddc5cc992c76",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-600-frame-135.png",
                "sha256": "efa6858a29030eef44ed66b42f268a6c447fa316dcf4b9a22c82f5b85d8e39fe",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-600-frame-528.png",
                "sha256": "efa6858a29030eef44ed66b42f268a6c447fa316dcf4b9a22c82f5b85d8e39fe",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/9x16-duration-600-frame-599.png",
                "sha256": "efa6858a29030eef44ed66b42f268a6c447fa316dcf4b9a22c82f5b85d8e39fe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 3.4225260416666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-150-frame-18.png",
                "sha256": "70b0d70b482ce2340e06347a8d4d22c2cba47a4d498e94a8475a77fb117d91e7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-150-frame-135.png",
                "sha256": "85193ae12a8286053532c911fc52ea4dc8c1e4f351aebc4766605f5040d54d5e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-150-frame-132.png",
                "sha256": "d9bfc918e7ffd25835380cd1fec9a816a6f4660cb3b9ace7d9a982206082e4f5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-150-frame-149.png",
                "sha256": "85193ae12a8286053532c911fc52ea4dc8c1e4f351aebc4766605f5040d54d5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.4219835069444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-600-frame-20.png",
                "sha256": "893eb20d853e8c72a73da9ea40c81d59ee8a7bbb383a849ef78fdc291e5c4fa8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-600-frame-135.png",
                "sha256": "85193ae12a8286053532c911fc52ea4dc8c1e4f351aebc4766605f5040d54d5e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-600-frame-528.png",
                "sha256": "85193ae12a8286053532c911fc52ea4dc8c1e4f351aebc4766605f5040d54d5e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/circle-pack-word/1x1-duration-600-frame-599.png",
                "sha256": "85193ae12a8286053532c911fc52ea4dc8c1e4f351aebc4766605f5040d54d5e",
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
        "note": "TitleMatches: The claimed title is 'Circle Packed Letters.' The settled poster prominently features the text 'MAKE IT BIG' constructed entirely from tightly arranged circles, clearly supporting 'circle packed letters.' The motion sequence (images 2-4) shows circles initially scattered, gradually converging into denser clusters, and finally assembling to form the letter shapes, demonstrating the process of forming letters by circle packing rather than a mere effect label. \n\nNoBakedHeading: No extra decorative block title, category, or language label is visible in the layout; only the editable headline 'MAKE IT BIG' appears. No unexplained headings are present.\n\nBrandAdherence: The final three images (5-7) display the poster under three distinct palette revisions. In each, the letter shapes remain legible and their circular packing treatment is preserved. The background and letterform (ink) colors visibly change in accordance with the supplied palettes. No unexpected fixed background or ink colors persist, and legibility is maintained.\n\nLanguageAdherence: The language card calls for oversized type, masked by graphic shapes (circles), static framing, flat color fields, accent type, and sans body—all visible and maintained across the three brand rebrands, with no language deviations present throughout the sampled motion or palette iterations. The type remains display/accent, sans body style, and tabular numerals (though no numerals are present). Thus, visible material and roles are consistent throughout."
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
      "bundleSha256": "3a2c0aa48b0a26e411d28378dfb3fa7439430f9181de5e678a5c1f6cd814aeb0",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:26:48.986Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "circle-pack-word",
      "vsPositive": 0.9166666666666666,
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
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "475657610759f6d36a16d92bb9b099524b674405b55e18bf0c6714976f9310a0",
      "bundleSha256": "3a2c0aa48b0a26e411d28378dfb3fa7439430f9181de5e678a5c1f6cd814aeb0",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/circle-pack-word/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/circle-pack-word/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/circle-pack-word/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "804a4531cc2d209c576587c7f25399018fff4cbb244d36099372714c123d75bb",
        "loop": "63fff4e4cec1a0dca26492b8cc078c69418ea6acbeb17d4718bad2d8e51c51dd",
        "detail": "9de6719363a6f522b5d19d2e81f2b058caa7f65fa638fc2f02755bb97006fc89"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/circle-pack-word/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/circle-pack-word/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/circle-pack-word/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "298b6eb6c8ca494829f5d917798cee5fe745bb658548be6565034114e161eb5c",
        "loop": "81f578d2e78a9a03e5bd7c3352be99621f9828e9b6d01c3285e2f123d1149c91",
        "detail": "9682de631e092820ea96a3b39c0e7eb6cf6a93737deebe4066f385a791fbb65a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/circle-pack-word/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/circle-pack-word/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/circle-pack-word/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d6e3ce73ccf42e72cae8d682f1d1d5b2c2997a779a715f287225f5232fbe51ac",
        "loop": "82b8dba9799777cb020b5296dbf1b5bd36d3410e7da28d1910d7e680caf61655",
        "detail": "665f3761ce4e089e6889cd40987f74979534eb40fe013b74784b66dd835ea3ff"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3a2c0aa48b0a26e411d28378dfb3fa7439430f9181de5e678a5c1f6cd814aeb0/index.mjs",
    "sha256": "3a2c0aa48b0a26e411d28378dfb3fa7439430f9181de5e678a5c1f6cd814aeb0",
    "bytes": 160830,
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
    "at": "2026-10-09T21:40:28.902Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
