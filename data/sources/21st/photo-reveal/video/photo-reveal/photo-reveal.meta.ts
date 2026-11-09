// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "media/photo",
  "tags": [
    "photo",
    "image",
    "screenshot",
    "reveal",
    "mask",
    "ken burns",
    "3d",
    "tilt"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 30,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 20,
      "out": 0
    },
    "markers": {
      "settled": 24
    },
    "beats": [
      0,
      14
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
      "9:16"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "image",
      "type": "image",
      "role": "media"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 3,
      "role": "label"
    }
  ],
  "brand": {
    "captionColor": "colors.text",
    "captionBackground": "colors.background",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "photo",
      "prop": "reveal",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
      "easing": "spring"
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; recipes from research V02 (Ken Burns), V09 (mask), V04 (scale-in), V15 (tilt)"
  },
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "image": "",
    "reveal": "mask-wipe",
    "caption": "Shot on location, golden hour",
    "radius": 2.4,
    "captionColor": "#FFFFFF",
    "captionBackground": "#0A0A0C",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "reveal",
      "label": "Reveal",
      "type": "select",
      "options": [
        "mask-wipe",
        "scale-shadow",
        "tilt-3d",
        "ken-burns"
      ]
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "radius",
      "label": "Radius",
      "type": "number",
      "min": 0,
      "max": 8
    },
    {
      "key": "captionColor",
      "label": "Caption color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "captionBackground",
      "label": "Caption background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Photo Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "photo-reveal",
    "bundleSha256": "c3c506cb9d8e9dbb4b65403b1757c47872180614489db9086b0b57de0d7b4686",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:54.303Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-paper.png",
        "sha256": "fb484109e8c21fc31c846f0d1d266e3451dd881537a0744372ca29988d0bd76c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-night.png",
        "sha256": "50000434eeea6fbf6fd5bfb59315c86c88daae1a366a9de3683c0954ff9b8a16"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-color.png",
        "sha256": "eb9b07adb3c88c62adcc5ec92d27e8a4eaddcbafaccb065581927fb12bb79d83"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-paper.png",
        "sha256": "44d6bb15760d9cb8cabe1d605e704d38bc1f03fc99dc0c17a936d446b9d06c1c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-night.png",
        "sha256": "f3211c3b77912ec799a712a4954055c4d5c2a01a947789697f4b2c11639b1445"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-color.png",
        "sha256": "3632195dc249cc690c46d325f3baad1bbedc5659e7a18340fc20ede720bde409"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-paper.png",
        "sha256": "cd07c1797086da12ebfeb8058e78669a909a99ecd28f8e1714da23821c5c8099"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-night.png",
        "sha256": "c2107f31df6516635d900ce5dba0035af78883b9b4b3e4e0009df439c9228dd6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-color.png",
        "sha256": "980a02de6e195e6907bdb1b8f3e156b5d2731815e8225489b54d87a157b9cf9d"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "photo-reveal--16x9",
          "photo-reveal--1x1",
          "photo-reveal--9x16"
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
            "paperNight": 10.57470703125,
            "paperColor": 4.514539930555555,
            "region": {
              "left": 523,
              "top": 248,
              "width": 874,
              "height": 584
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 10.719075520833334,
            "paperColor": 4.558430989583333,
            "region": {
              "left": 143,
              "top": 275,
              "width": 794,
              "height": 530
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.459120008680557,
            "paperColor": 11.49123806423611,
            "region": {
              "left": 143,
              "top": 568,
              "width": 794,
              "height": 784
            },
            "canvas": {
              "width": 1080,
              "height": 1920
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
            "occupancy": 0.7267741737470024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7267741737470024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7267741737470024,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0652438892414153,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0652438892414153,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0652438892414153,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8863633116140833,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8863633116140833,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8863633116140833,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 21.62575954861111,
        "frames": [
          3,
          24,
          104
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 21.62575954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-30-frame-3.png",
                "sha256": "1a26023a2aa1d34b49b54e4f8897fa5151531a3600de45c17716927e9fd0ebb9",
                "alphaMass": 1399
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-30-frame-24.png",
                "sha256": "0dbad74713c26acd5593994d1fca7cfb2e099272a2f71c44b7eb3bfa5605411a",
                "alphaMass": 143880
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-30-frame-26.png",
                "sha256": "8e6bf79825dae934bf4f43edf96c256dbda29ca42d6d7f6598e4b3f8935bd38d",
                "alphaMass": 143880
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-30-frame-29.png",
                "sha256": "e680f27c885c2e0676b38e8be45be0bea8b69b7cbca2867503ba23adb1535db3",
                "alphaMass": 143880
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 21.62575954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-900-frame-3.png",
                "sha256": "1a26023a2aa1d34b49b54e4f8897fa5151531a3600de45c17716927e9fd0ebb9",
                "alphaMass": 1399
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-900-frame-24.png",
                "sha256": "0dbad74713c26acd5593994d1fca7cfb2e099272a2f71c44b7eb3bfa5605411a",
                "alphaMass": 143880
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-900-frame-792.png",
                "sha256": "56891618525cc45b36ebddac7ddf4112a936fbca23dda6a3bdee3e8e936d4968",
                "alphaMass": 143880
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/16x9-duration-900-frame-899.png",
                "sha256": "56891618525cc45b36ebddac7ddf4112a936fbca23dda6a3bdee3e8e936d4968",
                "alphaMass": 143880
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 31.400499131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-30-frame-3.png",
                "sha256": "82434bc8b7e363125684271928d11477bfe54eabf91e99a284fb6ac24b1d555c",
                "alphaMass": 1959
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-30-frame-24.png",
                "sha256": "b8c81dac7cc14d7bcbc32a25fa14d9a470997face2c8886c76886ef16a0f503b",
                "alphaMass": 211100
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-30-frame-26.png",
                "sha256": "29f62b1c5560c497f88755921ed3eb8a4958f7d0eb074065323729c6f1224728",
                "alphaMass": 211100
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-30-frame-29.png",
                "sha256": "30316c557e5ae0f58273223a2ea9a8e8ab801d56ca944839afc36eeaec6ff8d3",
                "alphaMass": 211100
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 31.400499131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-900-frame-3.png",
                "sha256": "82434bc8b7e363125684271928d11477bfe54eabf91e99a284fb6ac24b1d555c",
                "alphaMass": 1959
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-900-frame-24.png",
                "sha256": "b8c81dac7cc14d7bcbc32a25fa14d9a470997face2c8886c76886ef16a0f503b",
                "alphaMass": 211100
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-900-frame-792.png",
                "sha256": "17491a5ca030609fd048c3660eef8e4fe9510f21691b632c99670c5b870bde58",
                "alphaMass": 211100
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/1x1-duration-900-frame-899.png",
                "sha256": "17491a5ca030609fd048c3660eef8e4fe9510f21691b632c99670c5b870bde58",
                "alphaMass": 211100
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 27.586805555555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-30-frame-3.png",
                "sha256": "cdabdd06af2880cccf3f2d9e675ca7d3755b5094ee7cbddc915efdd9b2325606",
                "alphaMass": 1715
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-30-frame-24.png",
                "sha256": "01ba9f086b62d070c795d94542595a79c26b134f5d9ec4cecbb6c37ff25c5211",
                "alphaMass": 176079
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-30-frame-26.png",
                "sha256": "3f1348d11fdac089078cde5948fe65844d7db57e371eb0bd5db531462013a96f",
                "alphaMass": 176079
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-30-frame-29.png",
                "sha256": "585fe012d8945263b7326e31f8147139f4385d896a38c3eeacbc1acbdb4acfa0",
                "alphaMass": 176079
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 27.586805555555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-900-frame-3.png",
                "sha256": "cdabdd06af2880cccf3f2d9e675ca7d3755b5094ee7cbddc915efdd9b2325606",
                "alphaMass": 1715
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-900-frame-24.png",
                "sha256": "01ba9f086b62d070c795d94542595a79c26b134f5d9ec4cecbb6c37ff25c5211",
                "alphaMass": 176079
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-900-frame-792.png",
                "sha256": "a1938a60f75f89c9c177e7443e2816a43d321839c384b6f10f1c6643f8d010c8",
                "alphaMass": 176079
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/photo-reveal/9x16-duration-900-frame-899.png",
                "sha256": "a1938a60f75f89c9c177e7443e2816a43d321839c384b6f10f1c6643f8d010c8",
                "alphaMass": 176079
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
        "note": "A photo is revealed by a sweep with a caption chip; photo."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 7,
        "compared": 7,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c3c506cb9d8e9dbb4b65403b1757c47872180614489db9086b0b57de0d7b4686",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.980864Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/photo-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-reveal/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "3831e9a1d750ffe821a473971ec10adc2a33c1f43ced9c869e6962ce8376a6d4",
        "loop": "63dc74bf95fbb643a736e2e71c79075032d06e9d6619ea04a43b9208f147e8dd",
        "detail": "4ccc7a7404a3c0cd712ba535a1c83bac9091e602d9a6ed7f10f2a0f743d147ec"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/photo-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-reveal/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "951dafcdd25639daeec1ad1d421675cca6b5b4cdcc6b74d8ba1f06808d24fe16",
        "loop": "263a59d9e16096a53fa735c2b9b0e739176e00258eccaea293911fdaa4551aaf",
        "detail": "33c004d80b497cdf15271138eed401b65cef2f5365baf8474740d27944f84d83"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/photo-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-reveal/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "59d69c2778f2280b4a5dfe2d6349007cf18aed1a2b637ef252ef235cc07e7df8",
        "loop": "44f426af7d1ebbdf9163992b188b5a67b6766e7a130d95d281d88d86a7a680e2",
        "detail": "f66748d77d5a707b02751a16b994a3992fbf04d133fe8201578d767a4fefc394"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c3c506cb9d8e9dbb4b65403b1757c47872180614489db9086b0b57de0d7b4686/index.mjs",
    "sha256": "c3c506cb9d8e9dbb4b65403b1757c47872180614489db9086b0b57de0d7b4686",
    "bytes": 792519,
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
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:27:26.885Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
