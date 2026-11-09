// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "editorial",
  "mechanic": [
    "construct"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "logo construction",
    "construction lines",
    "guides",
    "golden ratio",
    "grid",
    "clear space",
    "technical drawing",
    "drafting",
    "fine rules",
    "measurements",
    "serif",
    "brand",
    "opener"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 170,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "grid": 2,
      "circles": 18,
      "measure": 44,
      "trace": 56,
      "snap": 86
    },
    "beats": [
      0,
      18,
      44,
      56,
      86,
      150
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
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "lines": 3,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.serif",
    "monoFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "grid",
      "prop": "draw",
      "from": "center",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "circles",
      "prop": "draw",
      "from": "compass point",
      "settledBy": 70,
      "easing": "ease"
    },
    {
      "target": "measurements",
      "prop": "write",
      "from": "left",
      "settledBy": 84,
      "easing": "ease"
    },
    {
      "target": "logo",
      "prop": "scale",
      "from": "1.1",
      "settledBy": 110,
      "easing": "spring"
    },
    {
      "target": "guides",
      "prop": "opacity",
      "from": "full",
      "settledBy": 140,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "reveal",
      "from": "below",
      "settledBy": 150,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (ruled drafting sheet: grid, compass circles, clear space and dimensions draw on, then the logo snaps onto them, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "eyebrow": "Introducing",
    "title": "Every line has a reason",
    "primary": "#FF3B30",
    "secondary": "#EDEDED",
    "color": "#EDEDED",
    "background": "#0B0B0B",
    "guides": 1,
    "grain": true,
    "fontFamily": "Instrument Serif",
    "monoFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
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
      "key": "guides",
      "label": "Guides",
      "type": "number",
      "min": 0.4,
      "max": 1.6
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
      "brand": "fonts.serif"
    },
    {
      "key": "monoFamily",
      "label": "Mono family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Logo Construction Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "construction-lines-logo",
    "bundleSha256": "558e9131a003647980781d80b066602f30fed238c2a13ce82bd8786d4b34c33a",
    "sourceSnapshot": {
      "sha256": "3912a1c1847b30436039691f198cd5d8e660dd1089f4139805bc21ce78e20cf0",
      "files": 1860
    },
    "renderedAt": "2026-10-09T13:22:15.772Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-paper.png",
        "sha256": "f5fa44ef84154cd322936c6f51ed72021777cf3ce1dcd5d07182a8821b9f656e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-night.png",
        "sha256": "d9284ba777e3e7c3d01307d540023ac49888246fc181ea50f6b5abeb9dab3744"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-color.png",
        "sha256": "36a97737bfabf8b48f1a61b3b291f856f76cb3a4639ad0822264645054e471e4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-paper.png",
        "sha256": "055667cabbf5d75c2691f6b389dcfff312d14cf75e0327eabea5b3bc087e3200"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-night.png",
        "sha256": "f991c2c269f6911b2ee0cd28fed8afc72426a416d4564493be8cc6979768f81b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-color.png",
        "sha256": "f3ce4ec0908ecb582662db7d506a917a26fc266237a8d7580b1a6b173382980d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-paper.png",
        "sha256": "a0fbcdd3a710b74963877a8e61a574ee6cfcf778bd2fa35a63cf131b497d2789"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-night.png",
        "sha256": "2e5a2a2bb979db8cdd1a6c36371d279b7b6e0dd12f664ce1cd6183084ad08f88"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-color.png",
        "sha256": "862bf69e97ce7fe00f0d0520ff1ba7c554741f3e80772c06e2e054b0535f098e"
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
          "construction-lines-logo--16x9",
          "construction-lines-logo--9x16",
          "construction-lines-logo--1x1"
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
            "paperNight": 18.432210286458332,
            "paperColor": 6.414577907986111,
            "region": {
              "left": 53,
              "top": 16,
              "width": 1819,
              "height": 1006
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 40.927408854166664,
            "paperColor": 25.880533854166668,
            "region": {
              "left": 0,
              "top": 45,
              "width": 1080,
              "height": 1692
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.80056423611111,
            "paperColor": 8.91555447048611,
            "region": {
              "left": 27,
              "top": 20,
              "width": 1047,
              "height": 1030
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
            "occupancy": 1.2389940222488174,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2002101026881948,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1956773610936147,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2304835128495846,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2489370748299322,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2489370748299322,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3103213679161654,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3053153646003444,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3103213679161654,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.889756944444445,
        "frames": [
          22,
          150,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 5.897786458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-170-frame-20.png",
                "sha256": "eb1263c5479d331696588d5414589f5eaec1e146852ad04c575a2e3198bd4a14",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-170-frame-150.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-170-frame-149.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-170-frame-169.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.889756944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-600-frame-22.png",
                "sha256": "47670c216c93c5b9be011444754ff9cc53046703416b57157f11f5b3c9bf9c3a",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-600-frame-150.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-600-frame-528.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/16x9-duration-600-frame-599.png",
                "sha256": "8870a8ace7bf1884bd1e206078e5c442644e56ca06f641c187204eecad3f1016",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 13.26540798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-170-frame-20.png",
                "sha256": "a1f7a287641b93573791dc88d222063e7801594e7284fccd77897aa38e236ee0",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-170-frame-150.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-170-frame-149.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-170-frame-169.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 13.23611111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-600-frame-22.png",
                "sha256": "e574d82e1a609a0976a90a5bac56fed18ea852e0fe71b89d06b192a66aff5da4",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-600-frame-150.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-600-frame-528.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/9x16-duration-600-frame-599.png",
                "sha256": "445e10da326f9d2b8e53b2ea5856fe3af8a3b486b895c3296698c7de50b2b02a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 11.783854166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-170-frame-20.png",
                "sha256": "e2601222e21cd63f9cd28aec1a54acf6cb7b4512d9f42944bb511417ce31a54c",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-170-frame-150.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-170-frame-149.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-170-frame-169.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.732096354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-600-frame-22.png",
                "sha256": "c37d33fc813d3363bb6eb52e03f64b00b0f0de8024aadcd21bb83d08eb052fbe",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-600-frame-150.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-600-frame-528.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/construction-lines-logo/1x1-duration-600-frame-599.png",
                "sha256": "01e1600f315758724ec69fbe990a9d3ca780536338f718cc6e3cb8923801bb47",
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
        "note": "TitleMatches: The imagery in all poster and motion samples shows precise geometric construction lines, grid annotations, and measurement marks around a composed graphic, directly illustrating the title 'Logo Construction Lines.' Motion samples (second image) emphasize drawn lines and points with red marks, which supports the 'every line has a reason' concept—showing the construction logic behind the shapes.\n\nnoBakedHeading: There are no extraneous or decorative block-titles, categories, or explicit language labels baked into the visual design. The visible headings 'Introducing' and 'Every line has a reason' match the named-slot content, both in their textual and positional roles.\n\nbrandAdherence: Three additional images present the settled poster with different palette treatments matching the palette evidence. Each version preserves legibility: lines and text are clearly visible across light, dark, and colored backgrounds, with fine rules and accent marks adapting to the new palette. Shape and material are consistent; no unexplained fixed block colors appear; all versions appropriately use brand roles (backgrounds, ink/text, accents).\n\nlanguageAdherence: The artwork maintains a 'paper and fine-rule' motif with drawn construction annotations, static camera, and absence of any glow, glass, gradients, or drop shadows—consistent with the language card. The type in all three brand palettes remains serif for both display and body; the numerals and cap/base indicators are maintained across rebrands; accent roles and margins match provided instructions. The motion sample also follows the described verbs ('draw,' 'rise'), with easing and static structure, supporting language adherence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "558e9131a003647980781d80b066602f30fed238c2a13ce82bd8786d4b34c33a",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T13:22:28.498Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/construction-lines-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/construction-lines-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/construction-lines-logo/16x9/detail.mp4",
      "bg": "#0b0b0b",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "1d4591b3e393602f2cafbad4ad442e088e39fa1f078f706d320a346905ad556f",
        "loop": "b365d1a842b271a03c4f4466fa210e03282a6be73fed03bb8e1ac66c96097d26",
        "detail": "b3614c8e42856799ee667630f0d001c7e5a17e8e33627428dfd6d216bd55101f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/construction-lines-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/construction-lines-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/construction-lines-logo/9x16/detail.mp4",
      "bg": "#0b0b0b",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "762ca8d90897b5b803a0a5e80061aed6622ba703f0723b0e14c54e803a4ad541",
        "loop": "71adc900d05a30d300eebc4caf1ed78a62e41f834f18e27acc498d671c4bd490",
        "detail": "c140aac268fd685a85d651df8230767007329d2b965af1dad1b7723b8c58f58b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/construction-lines-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/construction-lines-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/construction-lines-logo/1x1/detail.mp4",
      "bg": "#0b0b0b",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "91da243b3986fc9aba7439cea3dca54d86871ffb6d3365b96abf58cdc18b1bce",
        "loop": "11e27df8096a2771cfc6f4005ffcebf18b8a69894287846b6db181a84a81a12e",
        "detail": "afa064c234e3ed959e07cde580e973136a9cd214b06d1bce9185f46c76946726"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/558e9131a003647980781d80b066602f30fed238c2a13ce82bd8786d4b34c33a/index.mjs",
    "sha256": "558e9131a003647980781d80b066602f30fed238c2a13ce82bd8786d4b34c33a",
    "bytes": 179147,
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
    "at": "2026-10-09T13:36:28.342Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
