// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "pullback"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "screenshot",
    "led wall",
    "big screen",
    "stage",
    "diodes",
    "pixels",
    "zoom out",
    "pullback",
    "macro",
    "bloom",
    "keynote",
    "launch",
    "product ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 130,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "macro": 0,
      "refresh": 1,
      "pullback": 0,
      "readable": 48,
      "hero": 72
    },
    "beats": [
      0,
      9,
      48,
      72,
      90,
      106,
      120
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
      "role": "caption"
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
      "target": "diodes",
      "prop": "power-on",
      "settledBy": 8,
      "easing": "linear"
    },
    {
      "target": "screenshot",
      "prop": "refresh",
      "settledBy": 9,
      "easing": "ease"
    },
    {
      "target": "camera",
      "prop": "scale",
      "settledBy": 106,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "y",
      "from": "bottom",
      "settledBy": 112,
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
    "sourceUrl": "21st first-party (close-up on LED diodes pulling back to a screenshot on a stage screen, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "title": "Now on the big screen",
    "color": "#002033",
    "primary": "#0077B6",
    "secondary": "#FB8500",
    "background": "#E8F6FF",
    "fontFamily": "DM Sans",
    "pitch": 0.8,
    "focusX": 0.3,
    "focusY": 0.3,
    "glow": 0.75,
    "reflection": true
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
      "role": "caption"
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
      "key": "pitch",
      "label": "Pitch",
      "type": "number",
      "min": 0.5,
      "max": 1.6
    },
    {
      "key": "focusX",
      "label": "Focus x",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "focusY",
      "label": "Focus y",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "reflection",
      "label": "Reflection",
      "type": "boolean"
    }
  ],
  "name": "Stage Screen Product Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "led-wall-pullback",
    "bundleSha256": "19fc388ecb2c126e8d7688150966542c8b57131f5cc880c5acae1b6701aa1b85",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:52:24.369Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-paper.png",
        "sha256": "636930ebaca0697b215864a3b1faea628364fec3ec300001118368c5ea1fe250"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-night.png",
        "sha256": "b990b924779c0db8e389d8379f9b5858a1865e020593950405283db955b868a8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-color.png",
        "sha256": "df0b18a1559d424ee66478585137a842377a9718ddcea4b4bd9e021ab4eb4e5a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-paper.png",
        "sha256": "e66ce1ca8ae6a43e2d4e478678eec0309d3c78fed6f722200f9902bcc6b12ad1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-night.png",
        "sha256": "b0bf113b3a5ce6952f0393311cf0091042ddbab15cb364eb9cd7f58e2007f0e3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-color.png",
        "sha256": "3bc4ac158bd879be2fb0084ea8ee1e2c72fe770f28896d7f1f1aa94c43a892c9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-paper.png",
        "sha256": "1ee6e19927cfb1e67b819508756bff748f60c08fadcd0b351e7e02e87c7f475b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-night.png",
        "sha256": "abddf2694471bcf9c9c37d182ca106c0ce60dc0668030ec13dff5803e8ff599b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-color.png",
        "sha256": "c7ed7b67bce5c5a4544a10d1c3b241839ff90752bbf0a138e2a041addab8f2e4"
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
          "led-wall-pullback--16x9",
          "led-wall-pullback--9x16",
          "led-wall-pullback--1x1"
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
            "paperNight": 20.688340928819443,
            "paperColor": 6.729437934027778,
            "region": {
              "left": 17,
              "top": 88,
              "width": 1903,
              "height": 992
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 21.03339301215278,
            "paperColor": 8.709364149305555,
            "region": {
              "left": 0,
              "top": 246,
              "width": 1080,
              "height": 1674
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.483995225694443,
            "paperColor": 8.694091796875,
            "region": {
              "left": 7,
              "top": 105,
              "width": 1073,
              "height": 975
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
            "occupancy": 1.290229311889365,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.290229311889365,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2889286775023798,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.235650510204082,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.235650510204082,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.234912367724868,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2711542521672594,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2711542521672594,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2698505042163186,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 73.03461371527777,
        "frames": [
          18,
          120,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 130,
            "averageChannelDifference": 73.61729600694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-130-frame-15.png",
                "sha256": "bf36f74751c1c645bad67eda87c694234cfa14a9e9008a4ebaa39ac69c7c6462",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-130-frame-120.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-130-frame-114.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-130-frame-129.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 73.03461371527777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-600-frame-18.png",
                "sha256": "c5314bf222b539cc86413826ca1d01d3b2d42614182d9f5afe138ca0031672ea",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-600-frame-120.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-600-frame-528.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/16x9-duration-600-frame-599.png",
                "sha256": "0a4e67b775208bed050675ae0894f4a079447d58fb49c56dd4cf4a7609e5099e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 130,
            "averageChannelDifference": 67.57465277777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-130-frame-15.png",
                "sha256": "3cecba8eab26e9919c88001a18385a78165743f6061af888a9b80215eb611ca6",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-130-frame-120.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-130-frame-114.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-130-frame-129.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 66.22819010416667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-600-frame-18.png",
                "sha256": "d4c8f7ba088bd9da771c35001fc4e79a566ce4566f04089565af04e71f760848",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-600-frame-120.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-600-frame-528.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/9x16-duration-600-frame-599.png",
                "sha256": "2b8eba3da5d7205e483a9c180579356d3d522d22ba1bb12feea0c28e40a3d926",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 130,
            "averageChannelDifference": 70.09657118055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-130-frame-15.png",
                "sha256": "6af7fdea272bffb744fb195b349e8ab975f12849805b789634b7a39513ca64f4",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-130-frame-120.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-130-frame-114.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-130-frame-129.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 69.21213107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-600-frame-18.png",
                "sha256": "ee30fddd0eed7225b98cb6e2e2246eac5b537fda33e703628afc0c7085dd65f0",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-600-frame-120.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-600-frame-528.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/led-wall-pullback/1x1-duration-600-frame-599.png",
                "sha256": "7249bebfd4ace5ada3aa2cadb7f001b1b5163647b9a9ccd98d2ae0b9bb3eabc0",
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
        "note": "The scene clearly depicts a large projected/conference screen with an interface shown to an audience, visually consistent with 'Stage Screen Product Reveal' (titleMatches: true). The evolving close-up (image 2), then wider shots (images 3 and 4) make clear the transition from detail to whole, supporting a motion sequence. The only heading is 'Now on the big screen', matching the editable named-slot content, and there are no decorative (non-content) labels or block titles visible (noBakedHeading: true). Images five, six, and seven re-render the poster in three distinct palettes supplied, adapting all interface and audience elements legibly with new background, accent, and text hues each time, without unexplained fixed block colors; all three rebrands are present and functionally sound (brandAdherence: true). The interface uses flat surfaces, consistent sans typography for both display and body, and the basic color/material/contrast logic adheres to the language card across palettes and states. There are no non-card language or material violations, and the overall approach matches the provided card regarding brand roles and interface hierarchy (languageAdherence: true)."
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
      "bundleSha256": "19fc388ecb2c126e8d7688150966542c8b57131f5cc880c5acae1b6701aa1b85",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.718Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "led-wall-pullback",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.125,
      "perModel": {
        "claude": {
          "vsPositive": 0.375,
          "vsNegative": 0.75
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
      "framesSha256": "4e8536a5e2e6c214de0dad253f50fe9ea39f0667841d877328e847dce7f771bb",
      "bundleSha256": "19fc388ecb2c126e8d7688150966542c8b57131f5cc880c5acae1b6701aa1b85",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/led-wall-pullback/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/led-wall-pullback/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/led-wall-pullback/16x9/detail.mp4",
      "bg": "#e8f6ff",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fac1b9029e60f67f74f6257b48b314dc07a0cb86a91f013431addc67158838ec",
        "loop": "51bf5d930173003b33e413315658fc03dba593d6ba8801e8d07d52a5478410c2",
        "detail": "16f6fb59822a8d41b0c35c346e1ef39da60764614fac21f8023cae2deebcabcd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/led-wall-pullback/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/led-wall-pullback/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/led-wall-pullback/9x16/detail.mp4",
      "bg": "#e8f6ff",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a09cb658c053bb10dcfe8aef1089e28056378a0511e2a2555b3c0b0856bf5f6c",
        "loop": "e7ec2cfb0d9503f77104dbd31e512605269035907d0b4dd6c25531c41ac48db5",
        "detail": "e4568289abd57c4ce932dc3dd26d99331c019920b92268219513ebd7a1081711"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/led-wall-pullback/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/led-wall-pullback/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/led-wall-pullback/1x1/detail.mp4",
      "bg": "#d9eefa",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "34bc78cddc08403ce797db4cf280b699f0525444958d22bb9c5e0372e917a3f5",
        "loop": "3c48990b334e9370d7bce9b75afbe28b88af579275f1ee2023c8ad5cf8d1a261",
        "detail": "cc1579543fb5c40b7465533a26ec5c551471666f4e8d7d6fd3877febe1a25f6b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/19fc388ecb2c126e8d7688150966542c8b57131f5cc880c5acae1b6701aa1b85/index.mjs",
    "sha256": "19fc388ecb2c126e8d7688150966542c8b57131f5cc880c5acae1b6701aa1b85",
    "bytes": 181211,
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
    "at": "2026-10-09T19:21:16.923Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
