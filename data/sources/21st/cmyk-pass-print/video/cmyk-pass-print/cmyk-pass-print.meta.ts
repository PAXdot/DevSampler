// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "print"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "print",
    "cmyk",
    "halftone",
    "misregistration",
    "press",
    "separation",
    "screenshot",
    "image reveal",
    "editorial",
    "risograph"
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
      "in": 122,
      "out": 0
    },
    "markers": {
      "settled": 122,
      "cyan": 2,
      "magenta": 28,
      "yellow": 50,
      "key": 68,
      "register": 86,
      "resolve": 98
    },
    "beats": [
      2,
      28,
      50,
      68,
      86,
      122
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "plates",
      "prop": "print",
      "from": "left",
      "settledBy": 84,
      "easing": "ease"
    },
    {
      "target": "plates",
      "prop": "register",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "image",
      "prop": "resolve",
      "settledBy": 122,
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
    "sourceUrl": "21st first-party (image printed as four misregistered CMYK halftone passes that snap into register, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "primary": "#D7263D",
    "secondary": "#1B4965",
    "color": "#1C1C1C",
    "background": "#F2EEE3",
    "misregister": 0.7,
    "screen": 84,
    "marks": true
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
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
      "key": "misregister",
      "label": "Misregister",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "screen",
      "label": "Screen",
      "type": "number",
      "step": 1,
      "min": 40,
      "max": 140
    },
    {
      "key": "marks",
      "label": "Marks",
      "type": "boolean"
    }
  ],
  "name": "CMYK Pass",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cmyk-pass-print",
    "bundleSha256": "cbb2ca70b899a3ddf47d2bc1b3e5532b0c107d7a6b8c60fc3566bb2b3681d518",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:20:09.877Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-paper.png",
        "sha256": "aa1a71205c33bdd3963106d021b49e4d1ab031142395506c0991bd1a3128a5be"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-night.png",
        "sha256": "66912d0d64720d8aed1b7f5ea275bf2b05f7b2d28bcb3b189fd2a7a72f0ae12a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-color.png",
        "sha256": "07af9e92d3d592fe806d439a140f2995b6f15e25be366344228c6791a672e6fa"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-paper.png",
        "sha256": "1dda11c9654584e3d1fc30170b33eb7f4ae82806e262fcb93149b696507da09e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-night.png",
        "sha256": "90827122928a5565c19869feed74ed82f1f7b85cfd7608e71f6a0141faaf8b65"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-color.png",
        "sha256": "122630345f622d717aea0c0e24b205843f7b251dc26c480fb409d5afc6598db3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-paper.png",
        "sha256": "2a2ad77877732019a8609a51bdc45e63cee034814ec20242a926416965a3c19b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-night.png",
        "sha256": "74bc0cc0ee56dbe1fe4c5e83265681fa71740261b8509af0dc10322d1ed50380"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-color.png",
        "sha256": "c92032561adb19127aea87177fb130cce8795257915011d1b6ade7e55f6277bb"
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
          "cmyk-pass-print--16x9",
          "cmyk-pass-print--9x16",
          "cmyk-pass-print--1x1"
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
            "paperNight": 4.702880859375,
            "paperColor": 3.1364203559027777,
            "region": {
              "left": 309,
              "top": 101,
              "width": 1302,
              "height": 902
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 5.482421875,
            "paperColor": 3.10400390625,
            "region": {
              "left": 27,
              "top": 435,
              "width": 1026,
              "height": 1075
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 5.312852647569445,
            "paperColor": 3.0194769965277777,
            "region": {
              "left": 70,
              "top": 190,
              "width": 940,
              "height": 725
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
            "occupancy": 0.7639610628201899,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8026643334803059,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7639610628201899,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7169550561994347,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7538280068972035,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7169550561994347,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7762780180659371,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8280561310029272,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7762780180659371,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.091145833333334,
        "frames": [
          18,
          122,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 132,
            "averageChannelDifference": 8.681098090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-132-frame-15.png",
                "sha256": "6ea645221395972603205a891ae95ef43d7dabacf4e6faabf62bb4e3fc4647cf",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-132-frame-122.png",
                "sha256": "fc96090ad645c57c1da9917400e26556257e0c07478fb4c9bbd2e05a2f20d406",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-132-frame-116.png",
                "sha256": "63b267944ded54d6dbe144c9df3f1d78ac4a6db3b0c162e5b60eabf186d3d2b6",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-132-frame-131.png",
                "sha256": "affcd83f735314e8bc748bc01acb744d13e81860696d1585d43de5bd733c3271",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.091145833333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-600-frame-18.png",
                "sha256": "1204760a506fa1552cca9a8f1747edeb6621b45b732de762517e3ab7f58ddd42",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-600-frame-122.png",
                "sha256": "fc96090ad645c57c1da9917400e26556257e0c07478fb4c9bbd2e05a2f20d406",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-600-frame-528.png",
                "sha256": "eb8bbd47a8ee90fafd91f7c50f0c358da3fa1337a7b222da09c7c462110e39b8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/16x9-duration-600-frame-599.png",
                "sha256": "eb8bbd47a8ee90fafd91f7c50f0c358da3fa1337a7b222da09c7c462110e39b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 132,
            "averageChannelDifference": 8.59765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-132-frame-15.png",
                "sha256": "e4e389b8044fcb5e8a6c36ee75dded19b5d1d246de8e24718d5844a85e137d0e",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-132-frame-122.png",
                "sha256": "0f41e7d0ff6b02639c3a5d2960b5c9c08e6b789b91d7ab25716113bf1fc3fdeb",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-132-frame-116.png",
                "sha256": "841d879026d2fc56f59e0baacd007edb7340c91b281317cc2d357ff111d71fcc",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-132-frame-131.png",
                "sha256": "8666203184649c1fb53a7ca3d4a08d9213e407ff02ac22de447d9277ed38a75b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.197699652777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-600-frame-18.png",
                "sha256": "01964ee648b8a8990154830e6a9fa537dd7a168374639f5df820bae2fe63143b",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-600-frame-122.png",
                "sha256": "0f41e7d0ff6b02639c3a5d2960b5c9c08e6b789b91d7ab25716113bf1fc3fdeb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-600-frame-528.png",
                "sha256": "7c5faafbc12276faf654af914b43f469ba29b9120184a5292edb4ec481b080e8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/9x16-duration-600-frame-599.png",
                "sha256": "7c5faafbc12276faf654af914b43f469ba29b9120184a5292edb4ec481b080e8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 132,
            "averageChannelDifference": 9.714192708333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-132-frame-15.png",
                "sha256": "d761aa2db88372a438360e158cd0652d1b948bbdc90cb09ac61dd8048c278403",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-132-frame-122.png",
                "sha256": "ed9f3250615457d3306caaef7a66b79a88a3e3647c48c2cf3d2071ed02ceb807",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-132-frame-116.png",
                "sha256": "21176d42c4fce12797dea8b700e10d4fa0055f92e8dc2f32fe80c367ad557853",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-132-frame-131.png",
                "sha256": "fc60b2cd3ae43301e052c5934d2ede342e15e894c1edbb9fc80050c8d0f5b6ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.2265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-600-frame-18.png",
                "sha256": "7486f85694eca514fb77505e64d139574ea794ab6bd61a48e402ac9983824dbb",
                "alphaMass": 587520
              },
              {
                "frame": 122,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-600-frame-122.png",
                "sha256": "ed9f3250615457d3306caaef7a66b79a88a3e3647c48c2cf3d2071ed02ceb807",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-600-frame-528.png",
                "sha256": "382ee990ad3c4cb65265631f24a8a0b815f04d762c48fa3c447e4bda397985de",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/cmyk-pass-print/1x1-duration-600-frame-599.png",
                "sha256": "382ee990ad3c4cb65265631f24a8a0b815f04d762c48fa3c447e4bda397985de",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject is a poster layout with print registration marks, color bars, and content areas evocative of a print proof, consistent with 'CMYK Pass'. The second image shows distinctive cyan halftone dots and a scan/roller device simulating a plate pass, directly referencing the mechanical process of CMYK printing (motion: 'draw', 'rise', 'type' as outlined in the card are supported by the halftone plate drawing over the page). The following frames show a return to the composite image, implying a digital simulation of a CMYK plate pass.\n\nNoBakedHeading: There are no decorative, unexplained headings or block titles present in any of the images. All visible text elements are part of the poster mockup or embedded UI elements that function as legitimate layout content, not baked-in UI labels or extraneous titles.\n\nBrandAdherence: The last three images show the same layout under three distinct palette backgrounds (off-white, dark blue, and pale green), and all content remains fully legible. The shape, composition, and material of the subject is consistent, while color bar and poster canvas hues adjust to the supplied palettes. No unexplained fixed block colors persist. This confirms adherence to the expected brand palette and roles.\n\nLanguageAdherence: Throughout all images and palettes, the 'paper grain', 'fine rules', 'flat' (no glow/shadow), and 'serif' type treatments are maintained. The simulated print marks, registration crosses, and numbered color notes are visible as specified, and there is no evidence of forbidden effects like glow, gradients, reflection, or drop shadow. Throughout sampled motion and rebrands, the type roles, material, and accent usage are consistent with the supplied language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 58,
        "compared": 58,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "cbb2ca70b899a3ddf47d2bc1b3e5532b0c107d7a6b8c60fc3566bb2b3681d518",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.830Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cmyk-pass-print/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cmyk-pass-print/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cmyk-pass-print/16x9/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 122,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "539cbc882b06153fcd99441806500d76a3df067920b8754a5e79fb0e625eceeb",
        "loop": "45b7e46b900022e2f8bcd528be09c5216ecf321d6a7fa4befe841682cdf42626",
        "detail": "5f616f83942ea3c33d920e33ee1b2a415744133ebfe7d2e55b4846d7d7413c2c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cmyk-pass-print/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cmyk-pass-print/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cmyk-pass-print/9x16/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 122,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1e91f697fde2fdbd789731ae2c4085e2f58d45f4a930828cf9c5c174a6fad7b4",
        "loop": "fd4f1878054a77f0804d5fc80f3fd0c288c7c98c82329a886c35097c3575db30",
        "detail": "efeee7de6e1d8c35dd5051b1622545936084cdc9ab388caf204b35cdac76624c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cmyk-pass-print/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cmyk-pass-print/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cmyk-pass-print/1x1/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 122,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "88dfa123f9aceeb00ca202d43623a421442a23a1d3c143814ed84c6d94eb2bc9",
        "loop": "548310ece39ebdd8340a173776853cd5610c4a86c8dba8fdeec702a87b792abd",
        "detail": "383523a6a37c2912e53b98b53e236fc87979434d3a0199a91ec728680a3e0362"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/cbb2ca70b899a3ddf47d2bc1b3e5532b0c107d7a6b8c60fc3566bb2b3681d518/index.mjs",
    "sha256": "cbb2ca70b899a3ddf47d2bc1b3e5532b0c107d7a6b8c60fc3566bb2b3681d518",
    "bytes": 69853,
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
    "at": "2026-10-09T10:39:53.782Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
