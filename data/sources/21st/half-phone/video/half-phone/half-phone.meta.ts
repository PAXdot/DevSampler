// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "device/phone",
  "tags": [
    "phone",
    "mobile",
    "demo",
    "gesture",
    "touch",
    "cropped",
    "device"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 14,
      "out": 0
    },
    "markers": {
      "settled": 16
    },
    "beats": [
      0,
      10,
      30
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
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "screen",
      "type": "video",
      "role": "screen"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "screenBackground": "colors.background",
    "screenColor": "colors.text",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "frameColor": "colors.background",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "phone",
      "prop": "y",
      "from": "below",
      "settledBy": 12,
      "easing": "ease"
    },
    {
      "target": "touch",
      "prop": "y",
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
      "frame": 62
    },
    "hover": [
      0,
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V09"
  },
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "scroll"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "screen": "",
    "label": "Swipe up to explore",
    "touch": true,
    "screenBackground": "#F4F4F5",
    "screenColor": "#0A0A0A",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "frameColor": "#141416",
    "background": "transparent",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "screen",
      "label": "Screen",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "touch",
      "label": "Touch",
      "type": "boolean"
    },
    {
      "key": "screenBackground",
      "label": "Screen background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "screenColor",
      "label": "Screen color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "frameColor",
      "label": "Frame color",
      "type": "color",
      "brand": "colors.background"
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
    }
  ],
  "name": "Half Phone Rise",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "half-phone",
    "bundleSha256": "318525ef68e370d15ab1f743d284ee62e54c28ecef5e0539be8630a8a11a94f7",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:38.371Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-paper.png",
        "sha256": "b97c59e0cce74eb90f932ae758be5fa34276b52f6099e15355c50fa820bc2554"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-night.png",
        "sha256": "d0944137eb3cc9cb1eac9fb1095ff0c33b52894d739a7f538c7386a48274d388"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-color.png",
        "sha256": "50b63936d3294cdaf4b12aa5efde5c96030d37aaf01166c77c5d4ec6c763be22"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-paper.png",
        "sha256": "1c12d710618dce97a1a13b5cb2391640467ec523a46a4af51eb11053c8a4a170"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-night.png",
        "sha256": "f1415c0def13b7d6b98e07e41c5705ec18dcc02ae0f367a0bc7e9210ae800b58"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-color.png",
        "sha256": "9b356da230049775e4cd249ba523c1f4f54baeb62ce9ca510f8dd7f971942927"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-paper.png",
        "sha256": "92efe7c29892d66039e7e2185c89329da3c128a18ea8d234d290b64f42b5cb02"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-night.png",
        "sha256": "ff87908c345cb146062f976439e83151794377183eda3243aa0b5f7bb077b317"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-color.png",
        "sha256": "e450bd6c08b94eb5b78b38e142490d137339b1a10a1bed550ff3826e55d38629"
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
          "half-phone--16x9",
          "half-phone--1x1",
          "half-phone--9x16"
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
            "paperNight": 68.07671440972223,
            "paperColor": 10.026421440972221,
            "region": {
              "left": 628,
              "top": 19,
              "width": 664,
              "height": 1061
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 67.25607638888889,
            "paperColor": 11.78420681423611,
            "region": {
              "left": 250,
              "top": 151,
              "width": 580,
              "height": 929
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 72.84638129340277,
            "paperColor": 11.463460286458334,
            "region": {
              "left": 142,
              "top": 558,
              "width": 796,
              "height": 1362
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
            "occupancy": 0.4815040084964028,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4815040084964028,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4815040084964028,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6546928899589101,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6546928899589101,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6546928899589101,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7409802269673303,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7409802269673303,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7409802269673303,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.46723090277778,
        "frames": [
          9,
          62,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 9.778428819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-45-frame-5.png",
                "sha256": "3e7785d512c7a80fa78c194ce172d79fb662bfd15c2d9ae60d4711d8d476346e",
                "alphaMass": 147534
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-45-frame-44.png",
                "sha256": "6cab89e573e26c7b9a3cde4bd05a6eaeb7c9b88f4fece239e7db2e9febea5bf3",
                "alphaMass": 152884
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-45-frame-39.png",
                "sha256": "2d70239701f21d65b859e8a59e2af2b21f54da3e426a9acdc505da4cd6110b0d",
                "alphaMass": 152884
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 18.46723090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-900-frame-9.png",
                "sha256": "75337b171a53034ae2caa223c316e4a63aedadaf4c3a4d360583f2ff434bd43c",
                "alphaMass": 151058
              },
              {
                "frame": 62,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-900-frame-62.png",
                "sha256": "b0f33d79b7fbfcd566e7a02dff29f03c270a0b5da706945e0fe20e8cd559b12f",
                "alphaMass": 152884
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-900-frame-792.png",
                "sha256": "13a0ab336b9206a97468dfb2056215a7daa0aa660b88448c8250f95d88f3d7b1",
                "alphaMass": 152884
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/16x9-duration-900-frame-899.png",
                "sha256": "13a0ab336b9206a97468dfb2056215a7daa0aa660b88448c8250f95d88f3d7b1",
                "alphaMass": 152884
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 14.196397569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-45-frame-5.png",
                "sha256": "39493cc0dd83a291286f59f7f3faa9e087dda22717237a5c0d2d6270d15879ff",
                "alphaMass": 192358
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-45-frame-44.png",
                "sha256": "45ee468714d005636ee412c37a6c569dbc21b4e52fd01083b98e9aa8cfffae9d",
                "alphaMass": 199829
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-45-frame-39.png",
                "sha256": "15b5e266098523b18671a8684c5b9f49fdc6dd8aa430be5dfa3f95eab793e01e",
                "alphaMass": 199829
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 25.5947265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-900-frame-9.png",
                "sha256": "12f6e39354b750205deca4b4a0149dba530918ee61a3fccd8c08291e27164c07",
                "alphaMass": 196572
              },
              {
                "frame": 62,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-900-frame-62.png",
                "sha256": "c5332dd72d93944d6d6cfacfb9db5b65405049068916b12f82f5c35249af8b1b",
                "alphaMass": 199829
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-900-frame-792.png",
                "sha256": "bf067f6cbd7e661c858938c1bb89c1493d781e7035869e397c8a42eac5ef9d14",
                "alphaMass": 199827
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/1x1-duration-900-frame-899.png",
                "sha256": "bf067f6cbd7e661c858938c1bb89c1493d781e7035869e397c8a42eac5ef9d14",
                "alphaMass": 199827
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 19.9345703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-45-frame-5.png",
                "sha256": "496c6a3ef2200334a93b6fd36f3fe2cfe45729f80b0e14c557b29ead7ca0459e",
                "alphaMass": 221531
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-45-frame-44.png",
                "sha256": "f83de1d0d35fd0888ad199115ad93287307910a8fc06588d16619be7e9a295a3",
                "alphaMass": 231497
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-45-frame-39.png",
                "sha256": "2b1c79c91159975f80863601348d2d8ea82729c89f36d213a2598c60f1acfc1d",
                "alphaMass": 231497
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 34.121853298611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-900-frame-9.png",
                "sha256": "3bca12c4d1b3189aa6f863a454434cf215937499757557db3307b3ef45f6c9c1",
                "alphaMass": 226668
              },
              {
                "frame": 62,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-900-frame-62.png",
                "sha256": "961262deed723e7ba917221bded0d168a0b95d05fb2ba8d05dbc5f274227b07f",
                "alphaMass": 231497
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-900-frame-792.png",
                "sha256": "d8ee387e10f3edc0318a349eb6269ce85d4d8d31da73bdd29391fbd1bf1b4cb5",
                "alphaMass": 231497
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/half-phone/9x16-duration-900-frame-899.png",
                "sha256": "d8ee387e10f3edc0318a349eb6269ce85d4d8d31da73bdd29391fbd1bf1b4cb5",
                "alphaMass": 231497
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A phone rises half out of frame and its feed scrolls with a swipe hint."
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
      "bundleSha256": "318525ef68e370d15ab1f743d284ee62e54c28ecef5e0539be8630a8a11a94f7",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.949398Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/half-phone/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/half-phone/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/half-phone/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 62,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "b9ad8e0a6d5341516fdf59b05a61963a0a65b737b4d534f4eaba0d9fdc9f7810",
        "loop": "3f831314e7ef112dbad14bc8bbcd544b92a982eb0d50574730d2e5b2340ce070",
        "detail": "648fcef844b23ea7844a1c25cf51e43ecbdca5d436f8924cea7106e12f58a085"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/half-phone/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/half-phone/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/half-phone/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 62,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "3ab7621bb76a5754579da9df44e139e3ac83e748b8801fd4eef08796e7cf7820",
        "loop": "2e77b89efb9f5f1b5fa6bf8c211cf19b5e29dda615436c8b027576a97b98d2fd",
        "detail": "be60bffe0cc63a5f677e3a5c1820e04834309afe1d461dc024ff83dad8893a48"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/half-phone/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/half-phone/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/half-phone/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 62,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "ed7061298bac45d54583c07acbeee33be56ccf6ce961801f838a7687a0bec722",
        "loop": "317434ff5e5d7b3b885dc9de78d48f545e4e83749f5b89357c7d7f253ebf06b8",
        "detail": "6ee53b5d0d066b35b4a36b815e78b65169c95ee635d1b0b9d0038ac55a6d016c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/318525ef68e370d15ab1f743d284ee62e54c28ecef5e0539be8630a8a11a94f7/index.mjs",
    "sha256": "318525ef68e370d15ab1f743d284ee62e54c28ecef5e0539be8630a8a11a94f7",
    "bytes": 805697,
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
    "at": "2026-10-07T02:24:08.547Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
