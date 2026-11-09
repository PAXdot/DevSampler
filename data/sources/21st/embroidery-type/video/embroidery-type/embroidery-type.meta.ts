// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "hand-drawn",
  "mechanic": [
    "embroidery"
  ],
  "tags": [
    "embroidery",
    "cross-stitch",
    "fabric",
    "typography"
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
    "sourceUrl": "21st first-party (Cross Stitch Headline, 2026-10-09)"
  },
  "defaults": {
    "primary": "#AC4430",
    "secondary": "#C8AC71",
    "color": "#29382E",
    "background": "#F0E9D9",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "text": "MAKE IT YOURS"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
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
  "name": "Cross Stitch Headline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "embroidery-type",
    "bundleSha256": "0ce217bb6a8cb2c15c066fc65ac1d7b5b00d13829312636dd6daa27a135116f4",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:47:06.081Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-paper.png",
        "sha256": "06f4f82162e12a18e77d3b0f640d79e7c97a98bae8bbe9aee315c0b3aa3b26af"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-night.png",
        "sha256": "61691ea9ece4e7db9220cf285afd5a7ced9a3e894bbfe5a7418645b80431e66b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-color.png",
        "sha256": "73aa25be390a887a67fd375817020fd1d071f600c1001894f42191ae5cfcf5e7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-paper.png",
        "sha256": "3c39c53a007f5c3d9a39e162c1ac479079ecbb5dcb0aa87572ec3c58f0aeedaa"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-night.png",
        "sha256": "0d899ab5f1dc37c8864d6eac08f45e1b548cd8a3cb4c447be21b18eb366ea357"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-color.png",
        "sha256": "cda14745e8f078e41219f535b9c8c11330433341cb6030892e67899725f18d4b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-paper.png",
        "sha256": "40bc53f3c6a84a5f932ba2e889b0d6dd579a73fcaa88bade75de8230f531b405"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-night.png",
        "sha256": "6eee86ee21bc8b827212763ce8e20964f6df4cebdae7ab3888f2c5adeb90ab2d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-color.png",
        "sha256": "2b67c025be2c9f82ff1892b12c73558439469ab8052e4bbbb3f83bb56cae75ce"
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
          "embroidery-type--16x9",
          "embroidery-type--9x16",
          "embroidery-type--1x1"
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
            "paperNight": 23.804606119791668,
            "paperColor": 57.736545138888886,
            "region": {
              "left": 103,
              "top": 73,
              "width": 1714,
              "height": 934
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.740397135416668,
            "paperColor": 58.87828233506944,
            "region": {
              "left": 57,
              "top": 132,
              "width": 966,
              "height": 1656
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.31911892361111,
            "paperColor": 58.459798177083336,
            "region": {
              "left": 57,
              "top": 73,
              "width": 966,
              "height": 934
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
            "occupancy": 1.0941431292167074,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0941431292167074,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0941431292167074,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0933366402116405,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0933366402116405,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0933366402116405,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0962709843882685,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0962709843882685,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0962709843882685,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7113715277777777,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.7140842013888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-150-frame-18.png",
                "sha256": "c69a04830aed4db7e73c97fe3262fb523364ad508ceb9dc622464dd182c2ce02",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-150-frame-135.png",
                "sha256": "e15897df46f548f6842926a8e779e71364f5748a0776b523cb86233f54370d1b",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-150-frame-132.png",
                "sha256": "77112858350f51de9c0ecdecce9de20e5e65386673e1c204a5cac38320cc36da",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-150-frame-149.png",
                "sha256": "df3318767f926f3a63387c239b478019a081001d2736a884fa82305394624532",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.7113715277777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-600-frame-20.png",
                "sha256": "a1cb8f5d34fd29612597306ed42b711bd3f9996dd10b0264389a695fc34a0c7e",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-600-frame-135.png",
                "sha256": "5deceabda3d1f79a8bbdc73a96ee0d0601d7ea79ce556d75f0d2782e4b04c3ec",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-600-frame-528.png",
                "sha256": "9494c888698e631658daa03fdd9b6e7891bf33da882ad50537f7a5d0d4be4d7f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/16x9-duration-600-frame-599.png",
                "sha256": "8f8baa1e8d60aff1bf8a0d6b1b3c9b38ce64bedd7c87079db89cfc3aa84131e4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.667751736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-150-frame-18.png",
                "sha256": "abad99d18ae29f61284b744c686f32eaec9f5a39df8e7eb5477c256932179f61",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-150-frame-135.png",
                "sha256": "bfe0c93a0b7148321e46484e9d138de7920154fd634cd9f33d29856388659303",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-150-frame-132.png",
                "sha256": "089426a5050f208ce7fb0b54688bc1da76c54a5a9584d3d22fe657109844e2b8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-150-frame-149.png",
                "sha256": "d05d8e277c9b79a4e0b1a8f6f01d5b67d79edf20d4e7725250bcd83c0648dea7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.6653645833333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-600-frame-20.png",
                "sha256": "bf48d5ebdf6ce7a3c020914eb1b9e70a311ef1abf606fa0850efe06941842526",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-600-frame-135.png",
                "sha256": "8028e8b8dcf1e4f78b5dcc72463f75f8fccf35c77f2f261570d46b810c77143c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-600-frame-528.png",
                "sha256": "d45fa5cb591e102617675766f182ed9ac19b761093e0622a42548987b30a0982",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/9x16-duration-600-frame-599.png",
                "sha256": "e2c88994ae9531fd6e27f61f76f152e0b956531085baa5902d28c937105021ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 1.1372612847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-150-frame-18.png",
                "sha256": "fe577f61442700a0a3a375016fcb3746b06e757ff6f3fe7387d7d351b0efb3e1",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-150-frame-135.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-150-frame-132.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-150-frame-149.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 1.1363932291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-600-frame-20.png",
                "sha256": "a1cf9955fd920a2adb634c64097da12219b39df02e19e96142c9ab582624aa11",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-600-frame-135.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-600-frame-528.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/embroidery-type/1x1-duration-600-frame-599.png",
                "sha256": "d41c5b788b753ef6611cb7ba072b7b8fd645904c2889b6604b3684a920fb7be9",
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
        "note": "TitleMatches: The images show the phrase 'MAKE IT YOURS' rendered in a grid via cross stitch-like Xs, with the motion samples illustrating the progressive 'drawing' or 'stitching' of these X-marks to form the text. This supports the title 'Cross Stitch Headline' both in visual structure and implied motion (drawing/tracing in cross stitch form).\n\nNoBakedHeading: There is no decorative or unrelated baked-in heading or category label in the composition. All visible text serves as the editable headline 'MAKE IT YOURS', matching the named slot content, and there are no extraneous UI labels, attributions, or logos present.\n\nBrandAdherence: The final three images are each rendered in visibly distinct palettes: the first with soft pink and black, the second with a dark mode and bright accents, the third in pale green with blue/green ink. In each variant, the 'cross stitch' text and the accent line are clearly visible and legible, with all content appropriately adopting the supplied color set. There is no unexplained fixed color; each palette shifts background, text, and accent elements as described.\n\nLanguageAdherence: The compositions consistently feature irregular, hand-rendered X strokes, matching the language card's call for 'irregular strokes' on a flat drawing surface, with no shadows or glass. The 'motion' samples visually construct the text using traced/drawn Xs, consistent across palettes, in a static grid/canvas. All type roles (display for headline, no body/numerals visible) remain consistent, and there is no evidence of disallowed effects. Therefore, language adherence is met."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0ce217bb6a8cb2c15c066fc65ac1d7b5b00d13829312636dd6daa27a135116f4",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:07.961Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "embroidery-type",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "faad74728136fcf132ae901cf6e66ea0c3839a2eb4436d5955be6a91a1ee017c",
      "bundleSha256": "0ce217bb6a8cb2c15c066fc65ac1d7b5b00d13829312636dd6daa27a135116f4",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/embroidery-type/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/embroidery-type/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/embroidery-type/16x9/detail.mp4",
      "bg": "#f0e9d9",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bae8d4e4972abb435985cbcb5a5b370db6b66e0de945dcbd0ca0b39322677350",
        "loop": "b67fd2ffaa0b0a605d2603f578f4f1997b6f6442695b9823efe9f9dd195d384e",
        "detail": "ee1d6355007c02182db456f3329b31609fa61afb063772f3c450cb58df5a77df"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/embroidery-type/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/embroidery-type/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/embroidery-type/9x16/detail.mp4",
      "bg": "#f0e9d9",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ab7b9e8135261e0d2a4ae6fa1a945860e020470cfa73610cf62bed83c0f2a825",
        "loop": "feb1ed54b8446d9c5c73b0309c5531b1e8811f489103c8b15848e452f7981662",
        "detail": "996482612d5c5181e3f742cb7a775e0256c219b2da02c8f7bde8464269d64bf5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/embroidery-type/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/embroidery-type/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/embroidery-type/1x1/detail.mp4",
      "bg": "#f0e9d9",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "186625f95f60a85bef288867b7c60f1fedfcdaff8e69f355927b8b39b4ce3bd0",
        "loop": "7d4dca3b0beb0d7a2a3f9255dac46dda037430051dfabf748570753108bc6bd1",
        "detail": "3c568a952946938d1f1a80fa35552426e80398eec422bdee120c6700598db022"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0ce217bb6a8cb2c15c066fc65ac1d7b5b00d13829312636dd6daa27a135116f4/index.mjs",
    "sha256": "0ce217bb6a8cb2c15c066fc65ac1d7b5b00d13829312636dd6daa27a135116f4",
    "bytes": 160787,
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
    "at": "2026-10-09T23:05:15.033Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
