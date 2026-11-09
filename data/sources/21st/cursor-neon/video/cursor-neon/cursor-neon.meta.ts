// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "neon",
    "glow",
    "prompt",
    "ai",
    "generate",
    "dark"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 115,
      "min": 70,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 92,
      "out": 0
    },
    "markers": {
      "settled": 92,
      "typed": 34,
      "hover": 47,
      "click": 56
    },
    "beats": [
      0,
      34,
      56
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
      "key": "headline",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "prompt",
      "type": "text",
      "maxChars": 56,
      "lines": 3,
      "role": "prompt"
    },
    {
      "key": "options",
      "type": "list",
      "maxChars": 5,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "label",
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
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "bar edges",
      "prop": "flicker",
      "settledBy": 12,
      "easing": "linear"
    },
    {
      "target": "prompt",
      "prop": "typing",
      "settledBy": 34,
      "easing": "linear"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-right",
      "settledBy": 80,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "flash",
      "settledBy": 72,
      "easing": "ease"
    },
    {
      "target": "bar edges",
      "prop": "sweep",
      "settledBy": 88,
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
      115
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (neon tube cursor clicks Generate on a glowing prompt bar, 2026-10-07)"
  },
  "job": "cursors",
  "language": "aura",
  "mechanic": [
    "press"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "headline": "What should we make?",
    "prompt": "A neon city at night, slow dolly through the rain",
    "options": [
      "16:9",
      "8s",
      "4K"
    ],
    "label": "Generate",
    "doneLabel": "Generating",
    "color": "#F4F4F5",
    "accent": "#22D3EE",
    "secondary": "#86888C",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 56,
      "role": "prompt"
    },
    {
      "key": "options",
      "label": "Options",
      "type": "list",
      "max": 3,
      "role": "label"
    },
    {
      "key": "label",
      "label": "Label",
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
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Neon Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-neon",
    "bundleSha256": "775e365c3d17b8ed2c15f7be6b6254be305d6f372e1946913c59aeeb6cf611b1",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:42.556Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-paper.png",
        "sha256": "097f032605a664b2aa47b0d2349480870cc9daa15ada76b2b917c1afcf05082e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-night.png",
        "sha256": "6d276c11180563e230a26afddfd0e6d9877e6ccf8d3c0c74c49b2b839b05025b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-color.png",
        "sha256": "ab67430adb5cd10f2f66a23a460f964926ac03cde5b455a7557616dae07fae0a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-paper.png",
        "sha256": "fca559949f2b46d6187af16335b624e708c9c7f682890bb0f18ec172a39598e0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-night.png",
        "sha256": "6f5d9833e6291129f14a348446606df0cabc07b61dda576590637c16acabcac8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-color.png",
        "sha256": "daec5bb37771e0331e9944545142c135feaa562a4e1d0c319b024587f0b7075d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-paper.png",
        "sha256": "a57f519a4db703d6b7159259d1a240699dea4bdec8caaf678c894d7ccaed368f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-night.png",
        "sha256": "a1476beaff8d0132331b07e4d88fe3b5b4c7c51e819561571d12b5e77478b02e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-color.png",
        "sha256": "139741556052bfeac115aa8d1932480c9ce8428b74f4991ffa31b8b1e79c8d01"
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
          "cursor-neon--16x9",
          "cursor-neon--9x16",
          "cursor-neon--1x1"
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
            "paperNight": 19.28860134548611,
            "paperColor": 32.377170138888886,
            "region": {
              "left": 317,
              "top": 359,
              "width": 1286,
              "height": 455
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 21.74685329861111,
            "paperColor": 36.86235894097222,
            "region": {
              "left": 0,
              "top": 455,
              "width": 1080,
              "height": 1121
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.736680772569443,
            "paperColor": 33.272976345486114,
            "region": {
              "left": 18,
              "top": 356,
              "width": 1044,
              "height": 464
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
            "occupancy": 0.39218740158100285,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39727921775706176,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3939343387818091,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8215525793650795,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8245051492819352,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8245051492819352,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5752675441461451,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5860523221634334,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5777851263962376,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.801974826388889,
        "frames": [
          13,
          92,
          114
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 70,
            "averageChannelDifference": 2.7561848958333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-70-frame-8.png",
                "sha256": "e762d9edf2c80c3166752a65bd6a77665bfcc6c49c3c94e9446f35c863b961e9",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-70-frame-69.png",
                "sha256": "fc4c1fc9d96d75cc7e497264992bb7d8cb5a6ab371bc93a0a6d8404783213f62",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-70-frame-61.png",
                "sha256": "cb0f39a605a7cced7997edc863b7a66c50b520bf884fb5f5698a531655538886",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.801974826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-600-frame-13.png",
                "sha256": "cb2dab91396f0f87adda0082af0e748b8f3ac4bfd03ebd1147d5238e5898a2e3",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-600-frame-92.png",
                "sha256": "cb0f39a605a7cced7997edc863b7a66c50b520bf884fb5f5698a531655538886",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-600-frame-528.png",
                "sha256": "cb0f39a605a7cced7997edc863b7a66c50b520bf884fb5f5698a531655538886",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/16x9-duration-600-frame-599.png",
                "sha256": "cb0f39a605a7cced7997edc863b7a66c50b520bf884fb5f5698a531655538886",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 70,
            "averageChannelDifference": 8.046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-70-frame-8.png",
                "sha256": "d2c27a196f8d92d141aff46eaf015ec0c43c2f0b170dcc52d20d23f5b65d3dd4",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-70-frame-69.png",
                "sha256": "eda31bc65dfdf8a0725dd1c103e2eb78430defc482896cf796cd37bd5d756c01",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-70-frame-61.png",
                "sha256": "eda31bc65dfdf8a0725dd1c103e2eb78430defc482896cf796cd37bd5d756c01",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.185546875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-600-frame-13.png",
                "sha256": "57483ad20ce4848405ad2278d9fa3732800949a7a585c674d5f3100a815233ec",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-600-frame-92.png",
                "sha256": "eda31bc65dfdf8a0725dd1c103e2eb78430defc482896cf796cd37bd5d756c01",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-600-frame-528.png",
                "sha256": "285b3f5b7d2f1f9b1b29a9840638368dcd9a33c0851853f5c0399298b6daf118",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/9x16-duration-600-frame-599.png",
                "sha256": "285b3f5b7d2f1f9b1b29a9840638368dcd9a33c0851853f5c0399298b6daf118",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 70,
            "averageChannelDifference": 4.443250868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-70-frame-8.png",
                "sha256": "de4f132fd04c9a0339b080264428b16fd28f1053334845f1e3e926e404aa03a4",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-70-frame-69.png",
                "sha256": "ed7f9143a65b061f35b38d908326884e635056d697524bcc9952f10789902872",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-70-frame-61.png",
                "sha256": "35d14aafc8ae6441036773c5817398243d80aa3cacbadacdf723e765ee977f87",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.515625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-600-frame-13.png",
                "sha256": "dab04cc08d804b348576752a090c9ca0f8853e23d8896d1ba8e4cb106b0f3949",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-600-frame-92.png",
                "sha256": "ed7f9143a65b061f35b38d908326884e635056d697524bcc9952f10789902872",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-600-frame-528.png",
                "sha256": "ed7f9143a65b061f35b38d908326884e635056d697524bcc9952f10789902872",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/cursor-neon/1x1-duration-600-frame-599.png",
                "sha256": "ed7f9143a65b061f35b38d908326884e635056d697524bcc9952f10789902872",
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
        "note": "Glowing neon outline cursor clicks Generate on a neon-edged prompt bar."
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
      "bundleSha256": "775e365c3d17b8ed2c15f7be6b6254be305d6f372e1946913c59aeeb6cf611b1",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-neon/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-neon/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-neon/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 92,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 115,
      "sha256": {
        "poster": "6cbf51a9d2251836ad666ce04b0a950b0d1406eb7c80df8caf9bcbfa3d44208d",
        "loop": "fecaaea4cd7ee9aa737eeb1686fe08b80efcfffc6df394031b202ebcfc1b5ed9",
        "detail": "49b7545e15462015700f093e1c7adbea562dc4545deb60d85d1e23015102b6ec"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-neon/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-neon/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-neon/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 92,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 115,
      "sha256": {
        "poster": "49f1f96f5e1193e595cdd3c3f7ab32108d64fad447c8d967da6a847b02b46fcd",
        "loop": "0af25876f7503f1af8ba0bb1d4839eda6b098fb6740a4c71e381f0cc7cda607c",
        "detail": "8be7038d66da3dc12e0308c310515fa14dd69e6c5f3fa630209876879cc253d9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-neon/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-neon/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-neon/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 92,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 115,
      "sha256": {
        "poster": "1c40624d8ca19105af0025ac36bc3029519324ef73d2cdd70beb3cb79d318bb6",
        "loop": "46dcdf541cb7782541de64761097a414a591cb269396b356e1280593683b734c",
        "detail": "ac89d7e918acb87bd7e1f6ba2175f6c4caadb4eb37030f370a97cb002f5b0ce4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/775e365c3d17b8ed2c15f7be6b6254be305d6f372e1946913c59aeeb6cf611b1/index.mjs",
    "sha256": "775e365c3d17b8ed2c15f7be6b6254be305d6f372e1946913c59aeeb6cf611b1",
    "bytes": 173253,
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
    "at": "2026-10-09T03:13:14.456Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
