// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "phone-notification-capture",
    "product-proof",
    "phone-notification-capture",
    "device"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "The result arrives with you",
    "subtitle": "A compact notification opens into the complete task.",
    "items": [
      "Task complete",
      "Your update is ready",
      "Open result",
      "Review complete"
    ],
    "screenshot": "",
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
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
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Notification expands into task",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-phone-notification-capture",
    "bundleSha256": "6e94e3771bfa2f0871cb864cd194c41973c8aed75479cb046ee87150d080244c",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:21.954Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-paper.png",
        "sha256": "5026f988ec1ee5c6644436ec470960b019cadcaa7960903f617507def0399800"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-night.png",
        "sha256": "22c8ffa9aa57e110534c09a899da42ffdb40622a3963d77e8258a79b508d0214"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-color.png",
        "sha256": "ec82c919c59100a184106b286b34193cd4c846c2c4f7041bbafe5ec9544ccc59"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-paper.png",
        "sha256": "c662219e9c864988fcea5bfdd83a3362344cbfd0d88a461067984a6619731ccd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-night.png",
        "sha256": "96608cf0c9b2f766252647556f728b94abd54dca41d65921b0f4a32e500301f1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-color.png",
        "sha256": "2b3d74d168fd70c11a861eb28baa61a94b8b056748573a077d0bb795c4fd30e9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-paper.png",
        "sha256": "b2340f2833c94da6fbc427ff1677cc07b333b2fe4f26cb7233dd9cd170e61d85"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-night.png",
        "sha256": "cd406021342fc46869aa5711a65e2bb43985f2efddde87476c4de1be7a391d7e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-color.png",
        "sha256": "1fe0d95a1db15582372adddf92d387c2036cf414eb48980406630f049fe1f6e4"
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
          "lp-phone-notification-capture--16x9",
          "lp-phone-notification-capture--9x16",
          "lp-phone-notification-capture--1x1"
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
            "paperNight": 129.51641167534723,
            "paperColor": 18.214219835069443,
            "region": {
              "left": 734,
              "top": 108,
              "width": 452,
              "height": 869
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 130.88435872395834,
            "paperColor": 18.030897352430557,
            "region": {
              "left": 231,
              "top": 192,
              "width": 618,
              "height": 1527
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 129.51627604166666,
            "paperColor": 18.21343315972222,
            "region": {
              "left": 314,
              "top": 108,
              "width": 452,
              "height": 869
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
            "occupancy": 0.26845695196803004,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.26845695196803004,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.26845695196803004,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6449765959624592,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6449765959624592,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6449765959624592,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47725680349872013,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47725680349872013,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47725680349872013,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.918185763888889,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 2.918185763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-150-frame-18.png",
                "sha256": "8363fc88d4ea7b169cba1c066937f2da0be0f50ed5d67e62d13e723c3b2fcd3d",
                "alphaMass": 103676
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-150-frame-132.png",
                "sha256": "6624803a04737dbe696afe0b57235a44e46976ae13fb7e0375c01cee46ce3dac",
                "alphaMass": 103676
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-150-frame-149.png",
                "sha256": "6624803a04737dbe696afe0b57235a44e46976ae13fb7e0375c01cee46ce3dac",
                "alphaMass": 103676
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.918185763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-900-frame-19.png",
                "sha256": "8363fc88d4ea7b169cba1c066937f2da0be0f50ed5d67e62d13e723c3b2fcd3d",
                "alphaMass": 103676
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-900-frame-132.png",
                "sha256": "6624803a04737dbe696afe0b57235a44e46976ae13fb7e0375c01cee46ce3dac",
                "alphaMass": 103676
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-900-frame-792.png",
                "sha256": "6624803a04737dbe696afe0b57235a44e46976ae13fb7e0375c01cee46ce3dac",
                "alphaMass": 103676
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/16x9-duration-900-frame-899.png",
                "sha256": "6624803a04737dbe696afe0b57235a44e46976ae13fb7e0375c01cee46ce3dac",
                "alphaMass": 103676
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.7529296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-150-frame-18.png",
                "sha256": "c4e3b059daa07f6be92fc37fd20174ae1dd0fbd464e4497319106c055165928e",
                "alphaMass": 253562
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-150-frame-132.png",
                "sha256": "4432876e29151717aa67a512016ff5b65b08cc9437beef6bec7c1614d35d73bc",
                "alphaMass": 253561
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-150-frame-149.png",
                "sha256": "4432876e29151717aa67a512016ff5b65b08cc9437beef6bec7c1614d35d73bc",
                "alphaMass": 253561
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.7529296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-900-frame-19.png",
                "sha256": "c4e3b059daa07f6be92fc37fd20174ae1dd0fbd464e4497319106c055165928e",
                "alphaMass": 253562
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-900-frame-132.png",
                "sha256": "4432876e29151717aa67a512016ff5b65b08cc9437beef6bec7c1614d35d73bc",
                "alphaMass": 253561
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-900-frame-792.png",
                "sha256": "4432876e29151717aa67a512016ff5b65b08cc9437beef6bec7c1614d35d73bc",
                "alphaMass": 253561
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/9x16-duration-900-frame-899.png",
                "sha256": "4432876e29151717aa67a512016ff5b65b08cc9437beef6bec7c1614d35d73bc",
                "alphaMass": 253561
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 5.313368055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-150-frame-18.png",
                "sha256": "5a6ae721f5775b6120fecaa9e92345fe4a9adc2069c70f180754c90a5def75ca",
                "alphaMass": 183080
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-150-frame-132.png",
                "sha256": "22ea47fe164c02b6b26e14382538e25b7708e2c388b5636af1b64d4b538f7452",
                "alphaMass": 183080
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-150-frame-149.png",
                "sha256": "a2ce642b030251295f1355941e3d60d0ba62078b8ffe0e3926737af8e62d8680",
                "alphaMass": 183080
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.313368055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-900-frame-19.png",
                "sha256": "5a6ae721f5775b6120fecaa9e92345fe4a9adc2069c70f180754c90a5def75ca",
                "alphaMass": 183080
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-900-frame-132.png",
                "sha256": "22ea47fe164c02b6b26e14382538e25b7708e2c388b5636af1b64d4b538f7452",
                "alphaMass": 183080
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-900-frame-792.png",
                "sha256": "22ea47fe164c02b6b26e14382538e25b7708e2c388b5636af1b64d4b538f7452",
                "alphaMass": 183080
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-phone-notification-capture/1x1-duration-900-frame-899.png",
                "sha256": "22ea47fe164c02b6b26e14382538e25b7708e2c388b5636af1b64d4b538f7452",
                "alphaMass": 183080
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
        "note": "A phone lock-screen notification expands into a task result; wallpaper is a light brand-blue gradient (hue 229), no lavender."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6e94e3771bfa2f0871cb864cd194c41973c8aed75479cb046ee87150d080244c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "abae6b55f9b5b57cc5409227689a8137b89b202150513794bf61fbc90190e165",
        "loop": "31a00bc4f49cb2dba20bacbc382c1634b55551fb05476e7501a376be4f8b9ee6",
        "detail": "06bee1c142d2e66ae2d2abde8f07bdd3e1067f10087a562c11c2642c7d2ead7f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ea1857946c6a8ac77de7a9e5ee45e48976473627e1b5ec2a9db705e602f554bf",
        "loop": "a328f60143c18cae88b79a10c3a413be88c525fc399815373c318862705d91ec",
        "detail": "f4330a3879c279a86b7e7fd80c9d1db4c92173e2161556a66d307d56aa84b4a4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-phone-notification-capture/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "62a62c7d9e8319b1f43474d775cb43365fc55597d4f68bd565bdc2433ac1ecca",
        "loop": "eed4e877fe08b7bdde0270d336bbba08a5617ee8b68631109f31ec86b26119f6",
        "detail": "b8038b95a187e0d0aa00e36e8a7d79b17553058d3e76cbe770d586696eb2be6c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6e94e3771bfa2f0871cb864cd194c41973c8aed75479cb046ee87150d080244c/index.mjs",
    "sha256": "6e94e3771bfa2f0871cb864cd194c41973c8aed75479cb046ee87150d080244c",
    "bytes": 298454,
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
    "at": "2026-10-09T03:30:02.253Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
