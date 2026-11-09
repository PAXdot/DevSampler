// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/logo-reveal",
  "tags": [
    "logo",
    "shockwave",
    "rings",
    "flash",
    "pop",
    "hype",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 72,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 52,
      "out": 0
    },
    "markers": {
      "settled": 52,
      "impact": 8
    },
    "beats": [
      0,
      8,
      12,
      18,
      24
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "mark",
      "prop": "scale",
      "from": "1.3",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "rings",
      "prop": "radius",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "name",
      "prop": "y",
      "from": "below",
      "settledBy": 36,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V03, research 2026-10-05)"
  },
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "logo": "",
    "name": "Vantage",
    "tagline": "summer build week",
    "accent": "#38BDF8",
    "secondary": "#F5A524",
    "color": "#F4F4F5",
    "rings": 2,
    "sweep": true,
    "fontFamily": "Space Grotesk"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 48,
      "role": "subline"
    },
    {
      "key": "accent",
      "label": "Accent",
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
      "key": "rings",
      "label": "Rings",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 3
    },
    {
      "key": "sweep",
      "label": "Sweep",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Shockwave Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "shockwave-logo",
    "bundleSha256": "6cdc051f1845306730fb0ff038b855c97023f6f1c60d3c90a4d306356d790ad9",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:09:49.931Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-paper.png",
        "sha256": "b51203e676f119a1b71c0ae7cad3138a991fc32562046303d54c6a28a6afbd17"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-night.png",
        "sha256": "b873362f19d774780fbbd9528391c5ef866c08ee760b4235af7cb3a1e33a811e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-color.png",
        "sha256": "bd92c0edd52a9f5dfc4348a392785fa396aa461031d50b929c3a158727036f3a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-paper.png",
        "sha256": "7e41eeba0bd2bde5d5641def50e2c8af151db053d922fbdc10d459faeaad0f66"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-night.png",
        "sha256": "64da52f73f8a4c52c5d12227814d4de380f2fd3438d77d65a923b9ea6e459ab4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-color.png",
        "sha256": "c2b05f95d6d5494c6001389554ce1c76c98465f447b5542ddaad2848b3d2574a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-paper.png",
        "sha256": "352ce6ad928db6230d5726cd07a0c42a826ca50b925c7f41121ecd7c877f8747"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-night.png",
        "sha256": "0a5bd5814c4090da18f92751598e58afcec04b7e9d4542309e8feaa6ad3f809e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-color.png",
        "sha256": "0582eca6dad2aeef6ecaad85a7220fea14337d5d104cac2db4b19efdd497d3a3"
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
          "shockwave-logo--16x9",
          "shockwave-logo--9x16",
          "shockwave-logo--1x1"
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
            "paperNight": 59.79814995659722,
            "paperColor": 34.003634982638886,
            "region": {
              "left": 818,
              "top": 338,
              "width": 284,
              "height": 382
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.092854817708336,
            "paperColor": 32.32891167534722,
            "region": {
              "left": 218,
              "top": 362,
              "width": 644,
              "height": 864
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 59.791097005208336,
            "paperColor": 34.01068793402778,
            "region": {
              "left": 398,
              "top": 338,
              "width": 284,
              "height": 382
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
            "occupancy": 0.15447453951573772,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1533866906459086,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.13454013614190535,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7922729276895945,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7922729276895945,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7895219800240056,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2746214035835337,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2726874500371708,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.23918246425227616,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.714518229166666,
        "frames": [
          7,
          52,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 72,
            "averageChannelDifference": 9.714518229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-72-frame-7.png",
                "sha256": "349b13f06afba0950a4ee185f990fd19f7c60bb6d4c05377a0f762f1cc20add3",
                "alphaMass": 328
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-72-frame-52.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-72-frame-63.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-72-frame-71.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.714518229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-600-frame-7.png",
                "sha256": "349b13f06afba0950a4ee185f990fd19f7c60bb6d4c05377a0f762f1cc20add3",
                "alphaMass": 328
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-600-frame-52.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-600-frame-528.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/16x9-duration-600-frame-599.png",
                "sha256": "85a196115ad7f9cce1e7ca2ed24a151e2534cfd794132193e7bbf1881aa2c39b",
                "alphaMass": 9879
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 72,
            "averageChannelDifference": 46.567599826388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-72-frame-7.png",
                "sha256": "b04f8069f027111942e0ff0bba47aa687a1850259581606ca5869a3d69453c54",
                "alphaMass": 192
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-72-frame-52.png",
                "sha256": "cbe7c7f053cf666de733137b572415d1131cbdb1f3485c8a1bde60e95d656cd4",
                "alphaMass": 58397
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-72-frame-63.png",
                "sha256": "cbe7c7f053cf666de733137b572415d1131cbdb1f3485c8a1bde60e95d656cd4",
                "alphaMass": 58397
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-72-frame-71.png",
                "sha256": "90720f2430c4d6dd42bbdd26719780464bae88b968a9fc28a06607aad327ff90",
                "alphaMass": 58397
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 46.567599826388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-600-frame-7.png",
                "sha256": "b04f8069f027111942e0ff0bba47aa687a1850259581606ca5869a3d69453c54",
                "alphaMass": 192
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-600-frame-52.png",
                "sha256": "cbe7c7f053cf666de733137b572415d1131cbdb1f3485c8a1bde60e95d656cd4",
                "alphaMass": 58397
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-600-frame-528.png",
                "sha256": "90720f2430c4d6dd42bbdd26719780464bae88b968a9fc28a06607aad327ff90",
                "alphaMass": 58397
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/9x16-duration-600-frame-599.png",
                "sha256": "90720f2430c4d6dd42bbdd26719780464bae88b968a9fc28a06607aad327ff90",
                "alphaMass": 58397
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 72,
            "averageChannelDifference": 14.439344618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-72-frame-7.png",
                "sha256": "69185f4caf67953b56c9d6070c3bd4a742abd08afa8fb7d6fe592ac76a8eb249",
                "alphaMass": 336
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-72-frame-52.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-72-frame-63.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-72-frame-71.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 14.439344618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-600-frame-7.png",
                "sha256": "69185f4caf67953b56c9d6070c3bd4a742abd08afa8fb7d6fe592ac76a8eb249",
                "alphaMass": 336
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-600-frame-52.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-600-frame-528.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/shockwave-logo/1x1-duration-600-frame-599.png",
                "sha256": "86846c39823ff273208c36f11117b15f056bd5544c43a70345e6178fdde54d54",
                "alphaMass": 17648
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
        "note": "An app mark lands with a shockwave and the wordmark appears."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6cdc051f1845306730fb0ff038b855c97023f6f1c60d3c90a4d306356d790ad9",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.025515Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/shockwave-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shockwave-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shockwave-logo/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "bf564d51f998c7e2d99e7cd78631716176425dd7efff73781103524182cb6869",
        "loop": "dc967581412b4874ae61413558668a26c79556636fdc1c70f36b12707500eae6",
        "detail": "1db131e9e9666efd2cd439d6f294ed776c72d60304634e8200ef801a34c4734e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/shockwave-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shockwave-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shockwave-logo/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "0f7a7b2afd4489bac79914944dd60ebe9f5272095d0bc6bffadb4cf239d4df50",
        "loop": "0c5556679e03bf2f47a6d9f56a806f278bee035c35929f992d9247c1d434ce62",
        "detail": "5f73815e50d613f06a80ec4e57d3157be458e7c07226ed172a466627c910e31d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/shockwave-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shockwave-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shockwave-logo/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "4f5f59a7d8d7fc10e759d0313d4a6f5d08e026df2590e55835529d90efd5685b",
        "loop": "969cdd203526904c97447da21da63692357354af0822d53f35b9a59cc72a0306",
        "detail": "3cc356ebf7644e058d54646ece3909a7134f294eb34364429d9efb9ec3b50ba8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6cdc051f1845306730fb0ff038b855c97023f6f1c60d3c90a4d306356d790ad9/index.mjs",
    "sha256": "6cdc051f1845306730fb0ff038b855c97023f6f1c60d3c90a4d306356d790ad9",
    "bytes": 161564,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:35:13.806Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
