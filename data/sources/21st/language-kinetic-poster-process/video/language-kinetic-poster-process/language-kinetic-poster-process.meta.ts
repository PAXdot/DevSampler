// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/language",
  "job": "process",
  "language": "kinetic-poster",
  "mechanic": [
    "word-staircase"
  ],
  "looks": [
    {
      "id": "default",
      "name": "Product research example",
      "props": {}
    },
    {
      "id": "alternate",
      "name": "Compact layout",
      "description": "Content or composition changes; palette remains owned by the brand.",
      "props": {
        "steps": [
          "Search",
          "Choose",
          "Install"
        ],
        "activeStep": 1
      }
    }
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "catalog-language",
    "kinetic-poster",
    "process",
    "word-staircase"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 72
    },
    "beats": [
      0,
      18,
      36,
      54,
      72
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "steps",
      "type": "list",
      "role": "steps"
    },
    {
      "key": "activeStep",
      "type": "number",
      "role": "activeStep"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "numeralsFont": "fonts.numerals"
  },
  "motionBeats": [
    {
      "target": "word-staircase",
      "prop": "transform",
      "from": "enter",
      "settledBy": 72,
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
    "sourceUrl": "docs/research/video-catalog-2026-10-06/plan.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#898B8F",
    "paper": "#0B0B10",
    "displayFont": "Space Grotesk",
    "bodyFont": "Inter",
    "numeralsFont": "IBM Plex Mono",
    "paintBackground": false,
    "motion": "default",
    "steps": [
      "Find a component",
      "Preview the code",
      "Make it yours"
    ],
    "activeStep": 2
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.accent"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "numeralsFont",
      "label": "Numerals font",
      "type": "font",
      "brand": "fonts.numerals"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "motion",
      "label": "Motion",
      "type": "select",
      "options": [
        "calm",
        "default",
        "punchy"
      ]
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "list",
      "max": 3,
      "role": "steps"
    },
    {
      "key": "activeStep",
      "label": "Active step",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 2,
      "role": "activeStep"
    }
  ],
  "name": "Process words slide into a stepped poster staircase",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "language-kinetic-poster-process",
    "bundleSha256": "03162319c06c00a791fd52cae64ef9667f62e7bf12ce983dcbad078e243d32b3",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:18.757Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-paper.png",
        "sha256": "024620fa4e946af11fe33fcc13728e9ee99b4f68e15afdf1e27c5aa12a4bbda8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-night.png",
        "sha256": "7b23629ca4d8ae1801331e22df782efca8bb004d6550fa197eb7297347771edd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-color.png",
        "sha256": "dbca9fbea8f70cbe77d2fada62cd6b1fd24df0cc23a6dc69f441157316525b81"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-paper.png",
        "sha256": "d89babb4c153613928b07d54be44a5df3c1e52fcb19d5326b3d3f1a03e3ca3c9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-night.png",
        "sha256": "f05eb9a22e026fdd618f067a7379a4ca8d06a89d6186af759d3553dea559d355"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-color.png",
        "sha256": "72d3b78d7614f2582e5df2610b5dee8317780df5e35b437e94a5e6e6e291e0c5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-paper.png",
        "sha256": "18f70f48119fd87b86a470121e96a26bd080bbf430c3db3b7445ce3fe2bf3441"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-night.png",
        "sha256": "c9a13c76045e33e8fb319530d4065a21dceeb3f7c1c56c496eaafbb4e4b53e54"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-color.png",
        "sha256": "0759f7f5c859049587107a55218fb00a85a59748230e8026efa6e12cf464a0c5"
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
          "language-kinetic-poster-process--16x9",
          "language-kinetic-poster-process--9x16",
          "language-kinetic-poster-process--1x1"
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
            "paperNight": 45.60096571180556,
            "paperColor": 21.42336697048611,
            "region": {
              "left": 154,
              "top": 168,
              "width": 1612,
              "height": 717
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.13007269965278,
            "paperColor": 20.949869791666668,
            "region": {
              "left": 86,
              "top": 280,
              "width": 908,
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
            "paperNight": 41.477294921875,
            "paperColor": 21.370252821180557,
            "region": {
              "left": 86,
              "top": 162,
              "width": 908,
              "height": 723
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
            "occupancy": 0.7822396576943537,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.789951879671622,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7822396576943537,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.799315353713502,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8030388724419811,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.799315353713502,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7921441324586534,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7976604565008446,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7921441324586534,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 75.32921006944444,
        "frames": [
          10,
          72,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 75.17241753472223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-90-frame-10.png",
                "sha256": "83af93f91f98bd06ab56fbca3bf308d8d7655313106e266095cd927f7197d7e7",
                "alphaMass": 6805
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-90-frame-72.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-90-frame-79.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-90-frame-89.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 75.32921006944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-900-frame-10.png",
                "sha256": "9e5621e659de7ac40ed4b5e5447399a4fa3d904bece16f1fc2f006aaf49241a8",
                "alphaMass": 6804
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-900-frame-72.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-900-frame-792.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/16x9-duration-900-frame-899.png",
                "sha256": "2634c3bb2719df2a3bc622ddc3af2602636de727464817393c88f220d1c674ad",
                "alphaMass": 111460
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 79.47612847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-90-frame-10.png",
                "sha256": "ab883e47d6013fbc5ddf5310ba8df8e13fde321310b135656ac21368734a88a1",
                "alphaMass": 4285
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-90-frame-72.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-90-frame-79.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-90-frame-89.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 79.47612847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-900-frame-10.png",
                "sha256": "3432feb8a0d2fe0ee50fe8f7839295e6538968bf0314cc4948d309ad32e77c04",
                "alphaMass": 4285
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-900-frame-72.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-900-frame-792.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/9x16-duration-900-frame-899.png",
                "sha256": "29ba4bd4660c56b3a528cbfc8d805309aa8acf55062383213f85de29b016aa43",
                "alphaMass": 108376
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 74.35427517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-90-frame-10.png",
                "sha256": "5c8a57d54347f98c42e7554791f71f0e79e1a51310107ea5d34b096a638ab3cb",
                "alphaMass": 6809
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-90-frame-72.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-90-frame-79.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-90-frame-89.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 74.42740885416667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-900-frame-10.png",
                "sha256": "9bca8ef4b1c49cfe0e4976eb6d98fd6e3afc1a0f687f824739e48fe1f9e6da4a",
                "alphaMass": 6805
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-900-frame-72.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-900-frame-792.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/language-kinetic-poster-process/1x1-duration-900-frame-899.png",
                "sha256": "1da7a94ab4a783a5ca43bd8d69d393d6b813fd1d898d8ff296ab195885dfaa0c",
                "alphaMass": 109996
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Process steps slide into a stepped poster staircase with a brand-blue band on the last step."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "03162319c06c00a791fd52cae64ef9667f62e7bf12ce983dcbad078e243d32b3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ff0ff077f05dce1e1851b6e241eb06677cb05a02b9620891bb0c7def8d9e350d",
        "loop": "09e85d69ed7281f0c76068696de139da33ebd3f6bcf0d26ae66b06e9ea935e16",
        "detail": "17ebf203ffc5fc7a90aa03fad45ceb3e1cc902592bf8781e91c685f574c5a81e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3f79558abd252fea356383fddec7715839de78f965c80e1b6e08a91c6497e895",
        "loop": "185b081436af59f41ead3e93eaeb7214b0265a4119c6178b092cb8bb5dbd16ed",
        "detail": "477262a54d778b078c4bfe125747eb73621e09cb9fb2a8e8a9a7fa4a5c4be774"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-process/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "648610ba4e6f27d6029ec37f35726ce4bb3801ab01461c231b03938f8eaaa1b9",
        "loop": "143baf6ca2f6506d922e56000bd5daa385e631282daa55541f7dc2f31f963ebc",
        "detail": "039d303bd9a0e6c5e44771600b01c2b507def788506622386f00bba6ac3c7cee"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/03162319c06c00a791fd52cae64ef9667f62e7bf12ce983dcbad078e243d32b3/index.mjs",
    "sha256": "03162319c06c00a791fd52cae64ef9667f62e7bf12ce983dcbad078e243d32b3",
    "bytes": 908503,
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
    "at": "2026-10-09T03:18:16.719Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
