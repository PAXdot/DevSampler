// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "wipe"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "screenshot",
    "reveal",
    "condensation",
    "fog",
    "foggy glass",
    "water droplets",
    "swipe",
    "wipe",
    "drips",
    "refraction",
    "glass",
    "rain",
    "product ui",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 172,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 170,
      "out": 0
    },
    "markers": {
      "settled": 170,
      "fogged": 50,
      "swipe": 56,
      "swiped": 84,
      "drips": 92,
      "lift": 110
    },
    "beats": [
      0,
      28,
      56,
      70,
      84,
      110,
      140,
      170
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
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "fog",
      "prop": "opacity",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "droplets",
      "prop": "scale",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "swipe",
      "prop": "wipe",
      "from": "left",
      "settledBy": 84,
      "easing": "ease"
    },
    {
      "target": "drips",
      "prop": "y",
      "settledBy": 164,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "blur",
      "settledBy": 160,
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
    "sourceUrl": "21st first-party (a fogged pane beads with droplets, one swipe clears a streak to the screenshot and drops run down its edge, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "title": "A clearer view",
    "color": "#22172E",
    "primary": "#6B3FA0",
    "secondary": "#FF7F50",
    "background": "#E9E4F2",
    "fontFamily": "Manrope",
    "fog": 0.94,
    "droplets": 0.7,
    "seed": 7
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "brand": "fonts.body"
    },
    {
      "key": "fog",
      "label": "Fog",
      "type": "number",
      "min": 0.4,
      "max": 1
    },
    {
      "key": "droplets",
      "label": "Droplets",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    }
  ],
  "name": "Condensation Swipe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "condensation-swipe",
    "bundleSha256": "430c38b5185484964f44a44aad41019840a90fcc9184054c7f1d0a85cf4583ba",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:48:24.274Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-paper.png",
        "sha256": "2f98378124b2de1ad526feec66d1de4adadd69e0652a5da2b28d7e972de92434"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-night.png",
        "sha256": "e56331a7be3a916541e0c4da29f5e0f9212cd9a6a5dfee2030fc44d80a9b5524"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-color.png",
        "sha256": "426344cb9df955edf4b8064d0a14df5f72d1f9829a99d4b4a7ad1546746e83e7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-paper.png",
        "sha256": "906ed524dc84cfa4b8d63948dd4c7bd6b53dc119f5542f92ffadb16bab7378eb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-night.png",
        "sha256": "4c4b1b18aa269bd37b9cb41d4e6bb94fdf4c75621ba2d702c60595bbccb05ded"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-color.png",
        "sha256": "1a1eb4bdc2673896c0543586cadbe528036efc6f7ea0e811bc1f04c439a3bdc2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-paper.png",
        "sha256": "fbef468ca24c2dfa5c5c35d639a995dab028415ce820cf3490948ea486f9393b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-night.png",
        "sha256": "70f12eca2ad7cc9e77f7fe59ed207f98034f97a72653fd02879fb144afad4fba"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-color.png",
        "sha256": "9f567516fca14d5a7084c1cfd45dce9376f75cb69a6a676d4838f51a78601129"
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
          "condensation-swipe--16x9",
          "condensation-swipe--9x16",
          "condensation-swipe--1x1"
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
            "paperNight": 31.86518012152778,
            "paperColor": 12.183946397569445,
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
            "paperNight": 41.159640842013886,
            "paperColor": 11.998589409722221,
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
            "paperNight": 33.70513237847222,
            "paperColor": 11.731363932291666,
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
            "occupancy": 1.4172335600907033,
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
        "averageChannelDifference": 6.994249131944445,
        "frames": [
          21,
          170,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 172,
            "averageChannelDifference": 6.788736979166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-172-frame-20.png",
                "sha256": "3a81f2709370d3b5eba4efc12e476dc70570f9015e417c722477498204e4ee7d",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-172-frame-170.png",
                "sha256": "e6a36571ca77c39e9f92318c2b3054432d09874860b62e582c9a1b60fde7c897",
                "alphaMass": 587520
              },
              {
                "frame": 151,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-172-frame-151.png",
                "sha256": "abc66c87eccc1c065562395ebdc0a1b36f610b0497894c53d584fd4de223c34f",
                "alphaMass": 587520
              },
              {
                "frame": 171,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-172-frame-171.png",
                "sha256": "e6a36571ca77c39e9f92318c2b3054432d09874860b62e582c9a1b60fde7c897",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.755316840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-600-frame-25.png",
                "sha256": "1360f3f81c4deac7c7c61b82b9b30c894dcda7d6007ad7324381293752ffccde",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-600-frame-170.png",
                "sha256": "e6a36571ca77c39e9f92318c2b3054432d09874860b62e582c9a1b60fde7c897",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-600-frame-528.png",
                "sha256": "e6a36571ca77c39e9f92318c2b3054432d09874860b62e582c9a1b60fde7c897",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/16x9-duration-600-frame-599.png",
                "sha256": "e6a36571ca77c39e9f92318c2b3054432d09874860b62e582c9a1b60fde7c897",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 172,
            "averageChannelDifference": 6.401909722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-172-frame-20.png",
                "sha256": "be105ebc11723864e532c072b267c05491690aa53f96e44fa15e59a0115534c6",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-172-frame-170.png",
                "sha256": "a641947405c4ab8c8965effa081887c986488ba27dcb48a43b1bc89fac6a13d0",
                "alphaMass": 587520
              },
              {
                "frame": 151,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-172-frame-151.png",
                "sha256": "591fe490e16173ac358842fce61fe515c78eadc188eed2a3acd5fa51e650e807",
                "alphaMass": 587520
              },
              {
                "frame": 171,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-172-frame-171.png",
                "sha256": "a641947405c4ab8c8965effa081887c986488ba27dcb48a43b1bc89fac6a13d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.268880208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-600-frame-25.png",
                "sha256": "784c7d0513ad63fe5b4b7a92d3cd829e335a73689561189ae73bcb4d5521ace6",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-600-frame-170.png",
                "sha256": "a641947405c4ab8c8965effa081887c986488ba27dcb48a43b1bc89fac6a13d0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-600-frame-528.png",
                "sha256": "a641947405c4ab8c8965effa081887c986488ba27dcb48a43b1bc89fac6a13d0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/9x16-duration-600-frame-599.png",
                "sha256": "a641947405c4ab8c8965effa081887c986488ba27dcb48a43b1bc89fac6a13d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 172,
            "averageChannelDifference": 7.695095486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-172-frame-20.png",
                "sha256": "b908a288b561dbf4e710244bfc1cd7d38dde280861419b33e93e7161b095a776",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-172-frame-170.png",
                "sha256": "3d284001ef27d0756f8e85c2ce98a214f84c9dc2171dbbec49cd6f4da15cc95e",
                "alphaMass": 587520
              },
              {
                "frame": 151,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-172-frame-151.png",
                "sha256": "d14adf01e5d1138c89df7311172775221d13bcfc290c8a65066f67e63760471c",
                "alphaMass": 587520
              },
              {
                "frame": 171,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-172-frame-171.png",
                "sha256": "3d284001ef27d0756f8e85c2ce98a214f84c9dc2171dbbec49cd6f4da15cc95e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.760850694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 25,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-600-frame-25.png",
                "sha256": "5498ac109b765adce621e37f304051153bf447ee8bada2c9ab6caebc69cfe04b",
                "alphaMass": 587520
              },
              {
                "frame": 170,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-600-frame-170.png",
                "sha256": "3d284001ef27d0756f8e85c2ce98a214f84c9dc2171dbbec49cd6f4da15cc95e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-600-frame-528.png",
                "sha256": "3d284001ef27d0756f8e85c2ce98a214f84c9dc2171dbbec49cd6f4da15cc95e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/condensation-swipe/1x1-duration-600-frame-599.png",
                "sha256": "3d284001ef27d0756f8e85c2ce98a214f84c9dc2171dbbec49cd6f4da15cc95e",
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
        "note": "1. TitleMatches: The sequence of images visually supports the title 'Condensation Swipe.' The first is a clear interface with condensation-like droplets, matching 'A clearer view.' The next two motion frames show the view becoming fogged/blurred, then being partially wiped clear by a swiping gesture, returning to clarity, which fulfills the condensation and clearing action, not just because the title claims it, but due to visible motion cues of condensation covering/uncovering the interface. 2. NoBakedHeading: The visible heading 'A clearer view' is in an editable-title slot, matching the named slot content, and there are no decorative category or language labels baked into the background or design. 3. BrandAdherence: The final three images clearly show the same poster under three different color palettes (subtle tan, dark plum, and soft green backgrounds) with the interface and droplets preserved. Each version has appropriately colored, stable, and legible text and UI, with interface colors adapting to the supplied palettes—no unexplained fixed brand block colors remain, and shape/material is consistent. 4. LanguageAdherence: The material remains as overlapping translucent panels with lens/droplet effects and visible depth in every rebrand and motion sample. Edge highlights and parallax are present. Type is consistent sans, with numerals in tabular style in UI. Contrast and visual hierarchy also remain appropriate and language-consistent; no opaque cards, neon glows, or blurry primary text are present. The roles of background, ink, and accent are consistent with the card. Language card is present, so this is assessed."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 64,
        "compared": 64,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "430c38b5185484964f44a44aad41019840a90fcc9184054c7f1d0a85cf4583ba",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.600Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "condensation-swipe",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 1,
      "fakeVotes": 0.0625,
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
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "c30112b547048cb6154d98bfef6dc0caaf4a86a5c07c38d3ebb12241996b3c02",
      "bundleSha256": "430c38b5185484964f44a44aad41019840a90fcc9184054c7f1d0a85cf4583ba",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/condensation-swipe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/condensation-swipe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/condensation-swipe/16x9/detail.mp4",
      "bg": "#dcd3e9",
      "posterFrame": 170,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e13cba6ba5d696161874b4e292ab9ea58ad71e83aa6fc5995210c481ec80e729",
        "loop": "206a9e97e196403ef6d04ed59a82799e579942826a825208a0d84af4f04b4bb4",
        "detail": "6f0f8ca3973c3a0374c925fde5697b80b1e93c01e1231066aba65014ea55f5ce"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/condensation-swipe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/condensation-swipe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/condensation-swipe/9x16/detail.mp4",
      "bg": "#e3ddee",
      "posterFrame": 170,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3a2caaccbe8ee75903f7e83c795bf5db7d38474c89809ea27568ca80186f8bb2",
        "loop": "048a28fb4f595aed7b24e33b2e1da68ecee455f7fe1405e6f1917642950b85e6",
        "detail": "f1e6b59bcb98490f21d14cfd29b4a541b22cb0d33b691c1f48c3cc331c90eec2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/condensation-swipe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/condensation-swipe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/condensation-swipe/1x1/detail.mp4",
      "bg": "#dbd2e8",
      "posterFrame": 170,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "32bf6e22a3773cabb6df3e78564f31ed63e5effa18d4396100952979fe2cf0fa",
        "loop": "0869cbdc009f37126ca56b764fc6116f4396684709a4e72a6f6cca06777001a6",
        "detail": "22b5cd40e43159c64ad968407aae24c8136fef26c62774a485ef6fdb95eb6730"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/430c38b5185484964f44a44aad41019840a90fcc9184054c7f1d0a85cf4583ba/index.mjs",
    "sha256": "430c38b5185484964f44a44aad41019840a90fcc9184054c7f1d0a85cf4583ba",
    "bytes": 184078,
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
    "at": "2026-10-09T19:20:31.975Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
