// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "coin"
  ],
  "tags": [
    "coin",
    "spin",
    "foil",
    "metric"
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
    "sourceUrl": "21st first-party (Metric Coin Spin, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B98E43",
    "secondary": "#E1C583",
    "color": "#28342D",
    "background": "#EFEADF",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "value": 12480,
    "label": "Every milestone matters"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 30,
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
  "name": "Metric Coin Spin",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "foil-seal-number",
    "bundleSha256": "a2c9c6a49d547807ddd73be50f48abb914bd10e07d8286be1080e14b6fee99d1",
    "sourceSnapshot": {
      "sha256": "164071b1a5988d5994e267df77bf41aa056a5031edcc7e28362fff0ca2d81fa3",
      "files": 2190
    },
    "renderedAt": "2026-10-09T23:15:09.353Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-paper.png",
        "sha256": "aea683141aa3ab092ddd71e619e27eb59d9d79964410e4cb9fda86653a13d602"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-night.png",
        "sha256": "c765fcfc41544cbd8b13c51cae99ed58d1758890a01c850a69807a48f6118b3f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-color.png",
        "sha256": "c5736c22ac314a2090aa2a2f33be5a38834f3db0b765070c91256040a761cb77"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-paper.png",
        "sha256": "c611ba8af1f9dda34d5de3f5f3bec265a7a1e746d7112190e55e613eac1f0af5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-night.png",
        "sha256": "8d12baf92ac9ac3b9775a0ea1a325a2b5e34346368a286a9115303c0a69b2968"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-color.png",
        "sha256": "4453d7cb87ac8cd18f62a9b3ac98ad6d7903cd8e60cab1cf41a97063592630c7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-paper.png",
        "sha256": "229f739d195ae9a2e86fc694d12135ab95149ec82eff8c0af7ff1ecdc2fc548b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-night.png",
        "sha256": "36e1d76e3a5fcca87e0505ced862ec2fe10f122062ef4e9b536f9f7025a20660"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-color.png",
        "sha256": "b3d6dd477bd792f9ee8685422c4fe1a992a3d061dff06b2e11993e15140c6b24"
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
          "foil-seal-number--16x9",
          "foil-seal-number--9x16",
          "foil-seal-number--1x1"
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
            "paperNight": 43.023763020833336,
            "paperColor": 24.999891493055557,
            "region": {
              "left": 565,
              "top": 70,
              "width": 809,
              "height": 882
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 35.59673394097222,
            "paperColor": 19.64333767361111,
            "region": {
              "left": 97,
              "top": 325,
              "width": 906,
              "height": 1422
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.02099609375,
            "paperColor": 24.99810112847222,
            "region": {
              "left": 145,
              "top": 70,
              "width": 809,
              "height": 882
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
            "occupancy": 0.48767843364197544,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.48767843364197544,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4815962763063045,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8297541624674563,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8805301634542708,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8173697719828674,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8669838820301785,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8669838820301785,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8561711578778747,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.46950954861111,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 14.543294270833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-150-frame-18.png",
                "sha256": "b7ce3d4c62f5f892792bc91c51d803e1a685ca5fb195ce1804b19064915db431",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-150-frame-135.png",
                "sha256": "b2e13041b0d8a43f0081d22b457d19c11fdd26bd25312f405c510e2f119b98bd",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-150-frame-132.png",
                "sha256": "d4ab741aa2fe90a5ad7e5b5ddd2bfb10cbf9adb631bc23f665254cb104905baa",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-150-frame-149.png",
                "sha256": "b2e13041b0d8a43f0081d22b457d19c11fdd26bd25312f405c510e2f119b98bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 14.46950954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-600-frame-20.png",
                "sha256": "da051b19d1bb252a931a63eaf3d556ac353aaa45416e97e1b16c664ba55e0f76",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-600-frame-135.png",
                "sha256": "b2e13041b0d8a43f0081d22b457d19c11fdd26bd25312f405c510e2f119b98bd",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-600-frame-528.png",
                "sha256": "b2e13041b0d8a43f0081d22b457d19c11fdd26bd25312f405c510e2f119b98bd",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/16x9-duration-600-frame-599.png",
                "sha256": "b2e13041b0d8a43f0081d22b457d19c11fdd26bd25312f405c510e2f119b98bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 18.85134548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-150-frame-18.png",
                "sha256": "fe3ebe71de1dadc187b8e96188b7b0e51c533b28095c5c37886b7250efbe55ff",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-150-frame-135.png",
                "sha256": "d802235af8bad328a27ff8354a418e4b977a7631e406739ed9d450c8d8f9c038",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-150-frame-132.png",
                "sha256": "ae349180972ddad0809bef95fda6d788a5349f659c0143e7662727ed1169efa2",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-150-frame-149.png",
                "sha256": "d9c95fe31321f0a1ad092e00ae788efd96b6cbf14ae87e0ad1a1a4b0fa784a82",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 18.76801215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-600-frame-20.png",
                "sha256": "1013d117ea65f3ee8651fb3fe502b4b753fc6e75f52d53d3c8a96779e70f84e6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-600-frame-135.png",
                "sha256": "425fbf107e4f9ce2420c62cc8672f2e80e173d9202144de2d5e02811dc0df562",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-600-frame-528.png",
                "sha256": "d9c95fe31321f0a1ad092e00ae788efd96b6cbf14ae87e0ad1a1a4b0fa784a82",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/9x16-duration-600-frame-599.png",
                "sha256": "1f7bad35d674d531247454829aaa28178fe096e6526508c0efbabe83eb6cf7dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 25.899088541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-150-frame-18.png",
                "sha256": "909a2002c34f670a52f94dda7534d0fe026d9e4dd5556d17656fae0f3d3d5da6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-150-frame-135.png",
                "sha256": "7ebcedd7ecddf93bee6b773621a4a893024ce1f42d2c670c05ec1a384b4556ea",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-150-frame-132.png",
                "sha256": "28273fc80b60cf2ce82676b966bcadf9e63297012f1d221fdd97e6ea6ad10b29",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-150-frame-149.png",
                "sha256": "7ebcedd7ecddf93bee6b773621a4a893024ce1f42d2c670c05ec1a384b4556ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 25.77734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-600-frame-20.png",
                "sha256": "499001c54b6d61611c8659c5c2d1dd21388afe4f3c0e432412db2da03e38047c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-600-frame-135.png",
                "sha256": "7ebcedd7ecddf93bee6b773621a4a893024ce1f42d2c670c05ec1a384b4556ea",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-600-frame-528.png",
                "sha256": "7ebcedd7ecddf93bee6b773621a4a893024ce1f42d2c670c05ec1a384b4556ea",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T231313Z/gates/foil-seal-number/1x1-duration-600-frame-599.png",
                "sha256": "7ebcedd7ecddf93bee6b773621a4a893024ce1f42d2c670c05ec1a384b4556ea",
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
        "note": "TitleMatches: The sequence of images clearly shows a coin as the subject, with the first image establishing a face-on coin with a metric (12,480) and the text 'Every milestone matters,' followed by images portraying the coin spinning around its vertical axis. The motion samples are consistent with the 'spin' in the title 'Metric Coin Spin.'\n\nNoBakedHeading: There are no decorative or unexplained baked-in category or language block titles visible in any composition; the only headings are the metric value and label, which are legitimate slot content.\n\nBrandAdherence: The final three images are clear recolors of the original coin in three supplied palettes: gold on cream, blue-gold on cream, green on dark, and purple on mint. In all three, the coin material, form, and the content remain legible. The palettes are used as described, and there are no unexplained fixed block colors. All variants preserve the coin's shape and lighting/edge definition.\n\nLanguageAdherence: There is a language card provided, and across all versions: the design uses layered depth on the coin (metallic effects with highlighting around edges), edge highlights that change with base luminance, consistent sans-serif tabular numerals and text. The coin persists clearly as a subject, matching the 'camera' and 'material' descriptions, and there are no prohibited effects (e.g., neon glows, blurred text, or opaque generic cards). The subject, type roles, and material/motion language are consistent throughout."
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
      "bundleSha256": "a2c9c6a49d547807ddd73be50f48abb914bd10e07d8286be1080e14b6fee99d1",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T23:20:06.636Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "foil-seal-number",
      "vsPositive": 0.875,
      "vsNegative": 1,
      "fakeVotes": 0.020833333333333332,
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
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "8f9729296ce7ff18d624e10f35a8df3c0a5404d4e44dc0817f8c7a7457328e6d",
      "bundleSha256": "a2c9c6a49d547807ddd73be50f48abb914bd10e07d8286be1080e14b6fee99d1",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/foil-seal-number/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/foil-seal-number/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/foil-seal-number/16x9/detail.mp4",
      "bg": "#efeadf",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "adcab034c072973ee090571fe3364bedc9882431c707ae31d17781952104193f",
        "loop": "8eb75431e08c62d4e394ed58b15a4b426618ebce99fb315ad2010e5c3b45ab8c",
        "detail": "5f14874c55a0e2f81ee97a6aa7703c2331fca3452fb815fcc882298fbddd6ebb"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/foil-seal-number/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/foil-seal-number/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/foil-seal-number/9x16/detail.mp4",
      "bg": "#efeadf",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5d20f32c7b876d8bde22b16828c9bb376797043d24803fe2387b995b679e805c",
        "loop": "33efc80960b93b8423d5a6c6304c9b7f72f11adc90e65858bfaae64622eebf61",
        "detail": "b0d9cdb478d4124be62fb222fd2fa8e8230072774239f61ef25a42dfbf0b221d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/foil-seal-number/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/foil-seal-number/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/foil-seal-number/1x1/detail.mp4",
      "bg": "#efeadf",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "98693d02c4f835e8ce285dc02ade655581e35d54cc1d5c96ca5cb6b4068b85ac",
        "loop": "9976cfeb39e8a908bdc394e2eff6f5a70424ce42321f803e3ff49d069403c83f",
        "detail": "7fbe8e6df865785a8af8cebd2219816814b485365d81b3d5f55e089856e8cc51"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a2c9c6a49d547807ddd73be50f48abb914bd10e07d8286be1080e14b6fee99d1/index.mjs",
    "sha256": "a2c9c6a49d547807ddd73be50f48abb914bd10e07d8286be1080e14b6fee99d1",
    "bytes": 160395,
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
    "at": "2026-10-09T23:21:10.039Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
