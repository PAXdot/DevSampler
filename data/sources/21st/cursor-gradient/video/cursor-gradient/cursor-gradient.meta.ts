// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "gradient",
    "pricing",
    "plans",
    "click",
    "brand",
    "glow"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 66,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 88,
      "out": 0
    },
    "markers": {
      "settled": 88,
      "hover": 44,
      "click": 55
    },
    "beats": [
      0,
      26,
      55
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
      "key": "plans",
      "type": "list",
      "maxChars": 20,
      "lines": 1,
      "role": "body"
    },
    {
      "key": "period",
      "type": "text",
      "maxChars": 5,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "plans",
      "prop": "y",
      "from": "below",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-left",
      "settledBy": 76,
      "easing": "ease"
    },
    {
      "target": "featured button",
      "prop": "scale",
      "settledBy": 62,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "bloom",
      "settledBy": 80,
      "easing": "ease"
    },
    {
      "target": "featured ring",
      "prop": "opacity",
      "settledBy": 70,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (gradient brand cursor picks the featured pricing plan, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "press"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "plans": [
      {
        "name": "Starter",
        "price": "$0",
        "features": [
          "1 project",
          "Community help"
        ]
      },
      {
        "name": "Pro",
        "price": "$24",
        "features": [
          "Unlimited projects",
          "Priority support"
        ]
      },
      {
        "name": "Team",
        "price": "$79",
        "features": [
          "Everything in Pro",
          "SSO and audit log"
        ]
      }
    ],
    "period": "/mo",
    "badge": "Most popular",
    "cta": "Choose plan",
    "doneLabel": "Selected",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "plans",
      "label": "Plans",
      "type": "list",
      "max": 3,
      "role": "body"
    },
    {
      "key": "period",
      "label": "Period",
      "type": "text",
      "max": 5,
      "role": "label"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "color",
      "label": "Color",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
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
  "name": "Gradient Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-gradient",
    "bundleSha256": "d0f66f52f8ef315826077b1baf3c6bdda8bcaf584ddf0d1f030e3034f8389127",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:21.804Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-paper.png",
        "sha256": "1a7acf5a01b4e7ff7168512f806b6eeb71b0d9c7001186fbf1e924198e39eea3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-night.png",
        "sha256": "5da1b834516413115d144b570e17ab46dbbcd25b42673f98334af552dfbd1fa8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-color.png",
        "sha256": "97a004e87d1d8e9409a8215b87edec2e21a70b55ff44a1d41730ecfd2ccd1496"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-paper.png",
        "sha256": "a84c4d12639ccf08cd228f745b4bef6c1e47b1fd6cfeff23cf9d4fcc07f224f4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-night.png",
        "sha256": "c5f19a5e6634f38b876bcf8d9278f027ba19bdf7b97ca670ec140059c75eea0f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-color.png",
        "sha256": "76aa4fe6a87a3615dbd9c986bf4fbb73d41f8a6cefef42d05d459cc398037ee4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-paper.png",
        "sha256": "74516d3afed9f292d52e6423af6eaca5186f0055ca96b98dcac95f272d289a4f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-night.png",
        "sha256": "4259c539bef02c5a6b3bfd8b490fd86341de1a42de26f59fa4b8a70de620a284"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-color.png",
        "sha256": "2079e4bdee72a69e9b1040b53021d65908f1d211ad15d7f536cbda8a05fec36d"
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
          "cursor-gradient--16x9",
          "cursor-gradient--9x16",
          "cursor-gradient--1x1"
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
            "paperNight": 95.978271484375,
            "paperColor": 20.01394314236111,
            "region": {
              "left": 291,
              "top": 216,
              "width": 1338,
              "height": 679
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 100.46365017361111,
            "paperColor": 24.96660698784722,
            "region": {
              "left": 0,
              "top": 357,
              "width": 1080,
              "height": 1294
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 92.19227430555556,
            "paperColor": 20.78219943576389,
            "region": {
              "left": 17,
              "top": 228,
              "width": 1046,
              "height": 657
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
            "occupancy": 0.5836875323689148,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6209295543062906,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5836875323689148,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.913886001931637,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9551563681027969,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.913886001931637,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7812767310856672,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8350086433750457,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7812767310856672,
            "bad": [],
            "measured": 19
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.2049696180555554,
        "frames": [
          13,
          88,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 66,
            "averageChannelDifference": 3.4678819444444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-66-frame-7.png",
                "sha256": "6d99260f49d2b6462cd73e4fa717c9cb2b333eff62a6a5a8510b48fdfe1317b0",
                "alphaMass": 587520
              },
              {
                "frame": 65,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-66-frame-65.png",
                "sha256": "d27ec7f1f85815de78319aa52ae74b2cc84c6f82a8914d3b87e2a7f698ba11ed",
                "alphaMass": 587520
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-66-frame-58.png",
                "sha256": "d27ec7f1f85815de78319aa52ae74b2cc84c6f82a8914d3b87e2a7f698ba11ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.2049696180555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-600-frame-13.png",
                "sha256": "d2f06d66ed5aad8963869f886eb5119a2128bb2bae13f047a68ef96ace8b95f8",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-600-frame-88.png",
                "sha256": "d27ec7f1f85815de78319aa52ae74b2cc84c6f82a8914d3b87e2a7f698ba11ed",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-600-frame-528.png",
                "sha256": "d27ec7f1f85815de78319aa52ae74b2cc84c6f82a8914d3b87e2a7f698ba11ed",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/16x9-duration-600-frame-599.png",
                "sha256": "d27ec7f1f85815de78319aa52ae74b2cc84c6f82a8914d3b87e2a7f698ba11ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 66,
            "averageChannelDifference": 5.795355902777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-66-frame-7.png",
                "sha256": "9b63005636624dedd2891bf8fe1d9da804340749a8ff36c015155ab83553c187",
                "alphaMass": 587520
              },
              {
                "frame": 65,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-66-frame-65.png",
                "sha256": "cdff3be58f7463c4a602c417377af785efc282259e0e8c6b6f9173173fb6daed",
                "alphaMass": 587520
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-66-frame-58.png",
                "sha256": "cdff3be58f7463c4a602c417377af785efc282259e0e8c6b6f9173173fb6daed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.876410590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-600-frame-13.png",
                "sha256": "3d1297940d4ea87f0b9cfa6bb9e27fb9c63605bc0dedf81422a65cb75b8a2e18",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-600-frame-88.png",
                "sha256": "cdff3be58f7463c4a602c417377af785efc282259e0e8c6b6f9173173fb6daed",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-600-frame-528.png",
                "sha256": "cdff3be58f7463c4a602c417377af785efc282259e0e8c6b6f9173173fb6daed",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/9x16-duration-600-frame-599.png",
                "sha256": "cdff3be58f7463c4a602c417377af785efc282259e0e8c6b6f9173173fb6daed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 66,
            "averageChannelDifference": 4.751627604166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-66-frame-7.png",
                "sha256": "19c40ec0fd4e0b46a626052032538352587842584c450240ab6739a2abe2d367",
                "alphaMass": 587520
              },
              {
                "frame": 65,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-66-frame-65.png",
                "sha256": "c6fbe93d3fce6a1f4e50f423d1db238665ae0b5da02dc37c1237de6f5c88758f",
                "alphaMass": 587520
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-66-frame-58.png",
                "sha256": "c6fbe93d3fce6a1f4e50f423d1db238665ae0b5da02dc37c1237de6f5c88758f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.379231770833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-600-frame-13.png",
                "sha256": "ccbd1fdfe3d67e011f6ccb0bbeba091fc7167550fd2eb2b2f5f247e332d026b5",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-600-frame-88.png",
                "sha256": "c6fbe93d3fce6a1f4e50f423d1db238665ae0b5da02dc37c1237de6f5c88758f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-600-frame-528.png",
                "sha256": "c6fbe93d3fce6a1f4e50f423d1db238665ae0b5da02dc37c1237de6f5c88758f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cursor-gradient/1x1-duration-600-frame-599.png",
                "sha256": "c6fbe93d3fce6a1f4e50f423d1db238665ae0b5da02dc37c1237de6f5c88758f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Brand-gradient cursor chooses the featured pricing plan, which fills and glows."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d0f66f52f8ef315826077b1baf3c6bdda8bcaf584ddf0d1f030e3034f8389127",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-gradient/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-gradient/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-gradient/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 88,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "0561eb34ee34d8bbab3ffc417e0f2c2ff03a90baf7654d57bbff76f1e513174e",
        "loop": "dc0f6cce5e0e3864db8bb1f86bc35719455d71d6f7e5edfc178ae22a8a6be0f8",
        "detail": "020d5b493f8d2ced7a55e572cc178d046c0c67ccb5a7de79a4a0f29deb838e27"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-gradient/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-gradient/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-gradient/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 88,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "ec9d97fa05d3c73fe050a99e8d86ba49930d0d81fd06fb81d42e34b7bf16670d",
        "loop": "f872c5d92cf65f6bf279c5f0fc520f2cc509475d0a53ca4d715ff1c3380e4736",
        "detail": "5c73e872eec8e30da60ecea099bb9b49ae01652e597d28572be035f119e3f38b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-gradient/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-gradient/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-gradient/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 88,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "7ec6854fd321d8ae371ae08805c0807cb6675154267f5f3fe45822593c7eb68c",
        "loop": "cba36c4bf911d5f64c2777d0ecc084f4b2d1424d8800f9643e49a6d7b66aa51e",
        "detail": "230ea3b203fd8bda89c08142eebe8ecfce81293c80f58acf3f49443e3ffa5fea"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d0f66f52f8ef315826077b1baf3c6bdda8bcaf584ddf0d1f030e3034f8389127/index.mjs",
    "sha256": "d0f66f52f8ef315826077b1baf3c6bdda8bcaf584ddf0d1f030e3034f8389127",
    "bytes": 175405,
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
    "at": "2026-10-09T03:12:23.983Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
