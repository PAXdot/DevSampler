// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "liquid"
  ],
  "tags": [
    "liquid",
    "gauge",
    "measure",
    "cylinder"
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
      "key": "value",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "label",
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
    "sourceUrl": "21st first-party (Liquid Level Gauge, 2026-10-09)"
  },
  "defaults": {
    "primary": "#317765",
    "secondary": "#D2AA5E",
    "color": "#26362F",
    "background": "#F2EFE3",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "value": 78,
    "label": "Progress made visible"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": 0,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
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
  "name": "Liquid Level Gauge",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "water-level-measure",
    "bundleSha256": "2bd2187ca88bd9cbea2180e444bd7dac09db94eac8f9ad0df7cc5a4a18b8dafc",
    "sourceSnapshot": {
      "sha256": "7e04305664cc81101bfac1320e704f427ab2f1d87465116705b9c85eaedc9cd8",
      "files": 2190
    },
    "renderedAt": "2026-10-09T23:08:18.217Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-paper.png",
        "sha256": "300fa53aa3362fd18b8a7322233d17a04b248b8d2fda40b12b45c46d8841a9d8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-night.png",
        "sha256": "2cdfbe636d1dfe5dea1f46b91b7c09fd7b561da634df329e1afe0af2aaa4bc90"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-color.png",
        "sha256": "ad33bfc37e0c97e813f536ba469e2cafc807aa92b2ce92bec80a68c649b0d51b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-paper.png",
        "sha256": "9934d345920585d70926ee41951ad4e1e2758724bad39476be338b86cd3a75b4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-night.png",
        "sha256": "fb7a842fd5dafdc3f026f6714d1ccb30bc4a21b946bc2b617d70d10ed466b2d8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-color.png",
        "sha256": "8f4e166403467054bd69729f248fa94f4e1ff0b0f8381ea52e48c64a517b5a6a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-paper.png",
        "sha256": "a7a2f293d1bf2dc94e686144669c7a1a9f7545ef90d492f4f56624ccc674254b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-night.png",
        "sha256": "03849ab247f124bfd62f875948928c1673fe66bb9661df1ade24c48ec23d8927"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-color.png",
        "sha256": "d728482aad9826157ebf1f5e855442ad83436b0ca0f3f1fe3ad8ce4ae51dc916"
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
          "water-level-measure--16x9",
          "water-level-measure--9x16",
          "water-level-measure--1x1"
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
            "paperNight": 33.53076171875,
            "paperColor": 15.284098307291666,
            "region": {
              "left": 286,
              "top": 68,
              "width": 1381,
              "height": 814
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.547200520833336,
            "paperColor": 23.51299370659722,
            "region": {
              "left": 204,
              "top": 161,
              "width": 674,
              "height": 1569
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.43109809027778,
            "paperColor": 17.810139973958332,
            "region": {
              "left": 160,
              "top": 68,
              "width": 814,
              "height": 814
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
            "occupancy": 0.7638558091703761,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7683065349339326,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7282500030619246,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6991767578945159,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7218473005200023,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6339126603573529,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8021196876098406,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7991525371008029,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8050868381188783,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.532660590277779,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 12.640516493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-150-frame-18.png",
                "sha256": "79bdec194bde4ff41949badec39ef4bbe93e18f44ef3eb34220a11c6ff6ffde6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-150-frame-135.png",
                "sha256": "b129802c5e94e695d1146d6d5b335f3e8557768a4c54fbf005fbec2334b80660",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-150-frame-132.png",
                "sha256": "ae280d4910438d71d2e0c408769d9e8d562260f05caadffefb6aec04a48e0d8f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-150-frame-149.png",
                "sha256": "0a7ddb814e87d0acf32f4d65bbf8ad840785aa582f0c45f909ff997afd368433",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 12.532660590277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-600-frame-20.png",
                "sha256": "307803d412808877a2a29cb225d7611e9b7d6b0a3d8aa0314111bd464ae767a2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-600-frame-135.png",
                "sha256": "f704e2c3f9336b393dac91b4cc86c7c934267f0ca15c3aa6a6ee6d04f9ea945d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-600-frame-528.png",
                "sha256": "ae280d4910438d71d2e0c408769d9e8d562260f05caadffefb6aec04a48e0d8f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/16x9-duration-600-frame-599.png",
                "sha256": "b129802c5e94e695d1146d6d5b335f3e8557768a4c54fbf005fbec2334b80660",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 19.465169270833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-150-frame-18.png",
                "sha256": "183535c8814c65c55865723327e99c269c888869a1b43f3059ad85af59b28105",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-150-frame-135.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-150-frame-132.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-150-frame-149.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 19.27712673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-600-frame-20.png",
                "sha256": "2f536be65dcd07cc94c020baf9c606ffff77c7e6287bccc86ad7ee5a3ad329e2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-600-frame-135.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-600-frame-528.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/9x16-duration-600-frame-599.png",
                "sha256": "72f265f62c311d2760e6e4eeb6633f12c13973c4f0886ebc10b84f3f966a1061",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 14.109375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-150-frame-18.png",
                "sha256": "e854f11626d779fdd8c53346e19a953a30e4161c5a87b97070e4f634420b0991",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-150-frame-135.png",
                "sha256": "fe860be36c0a33709d827e3570ae9798615533206a41ac75501a53c786c454dd",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-150-frame-132.png",
                "sha256": "fe860be36c0a33709d827e3570ae9798615533206a41ac75501a53c786c454dd",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-150-frame-149.png",
                "sha256": "fe860be36c0a33709d827e3570ae9798615533206a41ac75501a53c786c454dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 14.00271267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-600-frame-20.png",
                "sha256": "927f9554e52e35d051a373279237de476aaf0f02dff551d92c1018a2fee8eef5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-600-frame-135.png",
                "sha256": "126b27c0b3d4987c43facd3a1a708eaeb4d693b7570847b88ef4ebad6f3a7859",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-600-frame-528.png",
                "sha256": "d31ea8b2e19a2e2790e39f95a13e2a2b644c364ef341350780a102d07ae66815",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T230642Z/gates/water-level-measure/1x1-duration-600-frame-599.png",
                "sha256": "4075d97f602b330d745cfa7abef10ad657d3a44250fdc390988b4f0d56bc5637",
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
        "note": "The visible subject is a liquid in a transparent cylindrical gauge, with clearly marked measurement lines, supporting the 'Liquid Level Gauge' title. The three chronological images show a filling process, ending at 78%, aligning with the named-slot value and supporting the notion of 'progress made visible.' The composition does not display any decorative or unexplained baked-in heading; all large text matches editable named slots. In the three brand palettes, backgrounds, liquid color, gauge marks, and text all change appropriately while remaining legible and preserving the gauge’s material and shape, with no unexplained block colors. Language adherence is observed: all three rebrands and motion samples use sans type with clear numerals, consistent slot placement, and overlapping translucent/lens effects that create depth, visible parallax/highlights, and refractive properties in the liquid, matching the language card. No 'unmotivated neon glow,' 'opaque generic cards,' or 'blurred primary text' appear. Verification is possible visually for all points."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 32,
        "compared": 32,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2bd2187ca88bd9cbea2180e444bd7dac09db94eac8f9ad0df7cc5a4a18b8dafc",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T23:11:01.724Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "water-level-measure",
      "vsPositive": 0.8333333333333334,
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
          "vsPositive": 0.625,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "b974ad166e3caad5ae3e9598a8d0d011be4125db813084847b0d0ed3708709d6",
      "bundleSha256": "2bd2187ca88bd9cbea2180e444bd7dac09db94eac8f9ad0df7cc5a4a18b8dafc",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/water-level-measure/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/water-level-measure/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/water-level-measure/16x9/detail.mp4",
      "bg": "#f2efe3",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b482d53e2ccafe08c58f653098c102847d8bc8a8e291e5ccf477e867f0dfccae",
        "loop": "58295a563ba2bbe3d1dd1a9c37771e708520a2b98f92ab2f09e93b41fd9d3ba3",
        "detail": "855e8a98de877fc9cc3a5190f9cebacc568199c93421d95f8d1250908420996e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/water-level-measure/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/water-level-measure/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/water-level-measure/9x16/detail.mp4",
      "bg": "#f2efe3",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fbb3245b10cd5239691682df2394b1b01ef2a933b98e2afdbcae75d4cb6ea615",
        "loop": "f9a9fc807689b8b8b7200f093209aa3756f0c443d2a42e9f29d84062b6ffe155",
        "detail": "f493b61cac16fcf868f1035aa0ed5a73504b0ae387ae038030732582407af003"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/water-level-measure/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/water-level-measure/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/water-level-measure/1x1/detail.mp4",
      "bg": "#f2efe3",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8aba06584f8f878560633d82cd08fdf32835225b7c0712a0b045074fe3d59faa",
        "loop": "0a77c6308d7ce254130e3827193097dcab990349787c16df6585d050d01f77ce",
        "detail": "4af9569f8cb72c95605c923362e2a8b1cca01c2dbd5792ec360d359e62788d67"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2bd2187ca88bd9cbea2180e444bd7dac09db94eac8f9ad0df7cc5a4a18b8dafc/index.mjs",
    "sha256": "2bd2187ca88bd9cbea2180e444bd7dac09db94eac8f9ad0df7cc5a4a18b8dafc",
    "bytes": 160872,
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
    "at": "2026-10-09T23:14:08.085Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
