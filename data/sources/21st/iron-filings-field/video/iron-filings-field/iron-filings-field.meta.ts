// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "magnetism"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "headline",
    "iron filings",
    "magnetic field",
    "physics",
    "field lines",
    "connect",
    "integration",
    "metallic",
    "generative"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 132,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 128,
      "out": 0
    },
    "markers": {
      "settled": 128,
      "tap": 26,
      "align": 30,
      "logo": 78,
      "headline": 94
    },
    "beats": [
      0,
      26,
      30,
      64,
      78,
      94,
      128
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
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "filings",
      "prop": "rotation",
      "from": "random",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "filings",
      "prop": "position",
      "from": "even grid",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "scale",
      "from": "0.82, blurred",
      "settledBy": 108,
      "easing": "spring"
    },
    {
      "target": "headline",
      "prop": "opacity",
      "from": "0, blurred",
      "settledBy": 128,
      "easing": "ease"
    }
  ],
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
    "sourceUrl": "21st first-party (iron filings snap into the magnetic field between logo and headline, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "headline": "Made to connect",
    "primary": "#B7E35A",
    "secondary": "#5AA9E6",
    "color": "#EAF4E4",
    "background": "#151E15",
    "density": 1,
    "fieldLines": 22,
    "grain": true,
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.6,
      "max": 1.5
    },
    {
      "key": "fieldLines",
      "label": "Field lines",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 40
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Magnetic Field Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "iron-filings-field",
    "bundleSha256": "b67a708c823a5032089c1a98dba4105028ba0cbd2f79d1b9384244f101be6e39",
    "sourceSnapshot": {
      "sha256": "c8715db50bf5f6e7adeda1c9cc3c7aaf7ceeb34bc8961bc41f1e021a1e367666",
      "files": 1845
    },
    "renderedAt": "2026-10-09T11:06:36.087Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-paper.png",
        "sha256": "65c5d3c9f367580cdf697a228798cb226b6de51c677130a3631fb0c9800a7ee6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-night.png",
        "sha256": "344c16a34e99aaf869d233c01ef47f31b6ad9dce85a247713e7629443b40c658"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-color.png",
        "sha256": "6a877d3acb3def61bc2193b65b35bd8858ff026e8cedf879410787be98ba1b32"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-paper.png",
        "sha256": "9fe3f891b2082f8b7b35786d2f31d8babfe46cc91c6b8e1b042c9b5b3f5e21fa"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-night.png",
        "sha256": "e834ce3f2374a214a6a3073849641683707f993dd7972bc35048067c453cc250"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-color.png",
        "sha256": "e7eb0757d7e5237e26da26fbd2c0397c519ea159c8e6106797b946d343b7e18b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-paper.png",
        "sha256": "0b8643abecf3be2ec0962141ab4a15302741dcaa26e395d9cfa37183a659e1b4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-night.png",
        "sha256": "a1d7442c70cb2a566f2810e31d71ddac52b44d30c53c5fa852122de2d87c0c60"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-color.png",
        "sha256": "610b6641b76d0c5dd76f39238b6651a48685f342678831a3ec37413e0e875522"
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
          "iron-filings-field--16x9",
          "iron-filings-field--9x16",
          "iron-filings-field--1x1"
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
            "paperNight": 74.80769856770833,
            "paperColor": 38.20849609375,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 50.73627387152778,
            "paperColor": 34.77647569444444,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.822482638888886,
            "paperColor": 36.39531792534722,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4157572751322753,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.07443576388889,
        "frames": [
          19,
          128,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 132,
            "averageChannelDifference": 10.07421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-132-frame-15.png",
                "sha256": "80868b50bf5bb31d66c649c64dca0f176eb395ddaf5aa2f70674b20cf248e65c",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-132-frame-128.png",
                "sha256": "255ff7a0a59778460fd8f6f7a02e82f94399974180e88410e6f5586f6834cff1",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-132-frame-116.png",
                "sha256": "cb3577b4e76667e87d7e8868d72820c3209f9a0ab0138be3097328c61b7f91a3",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-132-frame-131.png",
                "sha256": "35ce08de635589cadb791856cb83c9453a2f2b83083f0c0fe3c40677ac29ba3d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 10.07443576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-600-frame-19.png",
                "sha256": "1f1349f8452de74ed8d8d52f269814493f9133e5ad856a7486a547468c8bc168",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-600-frame-128.png",
                "sha256": "255ff7a0a59778460fd8f6f7a02e82f94399974180e88410e6f5586f6834cff1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-600-frame-528.png",
                "sha256": "59d1217bfca94a1adbd25faf17373caa088ab233604cd9930eae28971b83f4c4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/16x9-duration-600-frame-599.png",
                "sha256": "20905d0a3741a5017f889b3fab6efae6b556f6de09b3087cab82b81eebaecbd7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 132,
            "averageChannelDifference": 12.068793402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-132-frame-15.png",
                "sha256": "36299037f55b1fa537665874bb764cc0092a7ba3c934de82c5e4cffe506ee305",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-132-frame-128.png",
                "sha256": "e1aa4684e0b267929798ecc2b453eaf49ff09f93762d196a3835bd00e9284a75",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-132-frame-116.png",
                "sha256": "fcf6902cd31fc8c6c902591da3b672564cb9b56f35d50526b18fd467cf647e47",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-132-frame-131.png",
                "sha256": "fefd22be5e7d3c63054691932427273019e67b12e490564e1574967f6ef4788a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 12.05447048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-600-frame-19.png",
                "sha256": "79468b38e368f782e02350d0f49ee6888d0677df686de789ac8c944fc8dd404a",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-600-frame-128.png",
                "sha256": "e1aa4684e0b267929798ecc2b453eaf49ff09f93762d196a3835bd00e9284a75",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-600-frame-528.png",
                "sha256": "110e7f85a685969348a0b5a23a73da3cf7bdb40fa892687717ff9a0f29ff9265",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/9x16-duration-600-frame-599.png",
                "sha256": "319e92cd4fc13f96f689637537b781f6642ece576ed379a59d639fe2f1400d70",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 132,
            "averageChannelDifference": 12.988389756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-132-frame-15.png",
                "sha256": "ebd05aede26e38cbb1ca058981fc8687306a253e13769075beee5bb4df2e6d05",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-132-frame-128.png",
                "sha256": "7461e54f07820cc618f8404912380986fc94863d8e2574463be2d85798595451",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-132-frame-116.png",
                "sha256": "935f210dba3af0f913b070da7d0b0db662e30f40f8b2db9a3ae17948bbd0cc1d",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-132-frame-131.png",
                "sha256": "002cd59a1423c761ed8e1ed7db9f4d4e2a316e444251c54ab6b3e1e4e3de412a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.998914930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-600-frame-19.png",
                "sha256": "310c2878e1e2f88b9f357756d3c5105588696e655b63b0be055029516b80b13e",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-600-frame-128.png",
                "sha256": "7461e54f07820cc618f8404912380986fc94863d8e2574463be2d85798595451",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-600-frame-528.png",
                "sha256": "54f319f699c874ad2cceb63ed16186e6b591a720ab08129543dbcbd11e3d1108",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/iron-filings-field/1x1-duration-600-frame-599.png",
                "sha256": "1f9b02e88ea5446da824020add05c8daef36eeffa2b8706f6d2b7b2901ca177c",
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
        "note": "TitleMatches: The subject is a central logo emanating and surrounded by field lines and soft gradients, visually depicting a 'Magnetic Field Logo' as claimed by the title. The motion sample (images 2-4) shows the field resolving toward and revealing the logo, supporting the idea of field motion and connectivity. No unsupported effect or structure is present.\nNoBakedHeading: There are no decorative or unexplained block titles baked into the poster. The only text present is the editable headline 'Made to connect', which matches the named slot.\nBrandAdherence: The final three images (5-7) show the identical poster design adapted across three distinct palettes matching the supplied values. In all, the logo and headline remain legible, and the field lines adjust color appropriately. No unexplained fixed block colors remain, and all three palette roles are used as described.\nLanguageAdherence: Across all rebrands and in the motion samples, the poster maintains consistent material attributes: continuous soft light fields, a sharp isolated logo, atmospheric color gradients, and legible sans type. Type hierarchy and layout are preserved, matching the language card. No material or type roles are violated.\n\nAll four criteria are clearly supported by concrete visual evidence in the supplied images."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 20,
        "compared": 20,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b67a708c823a5032089c1a98dba4105028ba0cbd2f79d1b9384244f101be6e39",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:09:26.016Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/iron-filings-field/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iron-filings-field/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iron-filings-field/16x9/detail.mp4",
      "bg": "#192219",
      "posterFrame": 128,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "82d8aa9a6d857766170c5b8294e860eb548e5817a96aecd433d95f99d4c4aff4",
        "loop": "e4630e7a603370b519465c588499ba529168693fa00c9ca05276f65028ee6359",
        "detail": "b0451718e1b59b4142b4fffd25e2f851b4e701f36788c5a03056751805b4976c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/iron-filings-field/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iron-filings-field/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iron-filings-field/9x16/detail.mp4",
      "bg": "#151e15",
      "posterFrame": 128,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "98f79bdfd3ed65b6652de86ff8005189ddd112b0e77465129269b61f6f44b7a6",
        "loop": "6c40fb7d19c43d86492ebc7b33688345e7a31dfdce53a97b598ac98149eb51ec",
        "detail": "048d410f8a28a8e41e0f163cd309099f9c4ad05ae99476b2c21f515c2f903204"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/iron-filings-field/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iron-filings-field/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iron-filings-field/1x1/detail.mp4",
      "bg": "#192218",
      "posterFrame": 128,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "95a28b399d3f5c698360f50822b90cb977a9794ed1be3999ed32e608805ac92e",
        "loop": "1840b764aea760345fe750eab5814dc03239c511b272df0b907c1402a59f2998",
        "detail": "b45f89ee282a072913761c150aaaedca2947328704dd408ca6ea4f3c9761caf0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b67a708c823a5032089c1a98dba4105028ba0cbd2f79d1b9384244f101be6e39/index.mjs",
    "sha256": "b67a708c823a5032089c1a98dba4105028ba0cbd2f79d1b9384244f101be6e39",
    "bytes": 170635,
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
    "at": "2026-10-09T11:23:08.872Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
