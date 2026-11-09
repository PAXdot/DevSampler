// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "classic",
    "arrow",
    "pointer",
    "settings",
    "toggle",
    "dialog",
    "save",
    "product demo"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 130,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 100,
      "out": 0
    },
    "markers": {
      "settled": 100,
      "toggle": 42,
      "save": 74
    },
    "beats": [
      0,
      42,
      74
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
      "key": "title",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "firstLabel",
      "type": "text",
      "maxChars": 20,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "firstHint",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "body"
    },
    {
      "key": "secondLabel",
      "type": "text",
      "maxChars": 20,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "secondHint",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "body"
    },
    {
      "key": "cancelLabel",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "saveLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "savedLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "cta"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "dialog",
      "prop": "scale",
      "from": "0.96",
      "settledBy": 16,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-right",
      "settledBy": 36,
      "easing": "ease"
    },
    {
      "target": "toggle",
      "prop": "x",
      "settledBy": 56,
      "easing": "spring"
    },
    {
      "target": "saveButton",
      "prop": "fill",
      "settledBy": 90,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "xy",
      "settledBy": 96,
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
      130
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (classic arrow flips a setting and saves a dialog, 2026-10-07)"
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
    "title": "Notifications",
    "subtitle": "Choose what we send you",
    "firstLabel": "Email updates",
    "firstHint": "News about features you use",
    "secondLabel": "Push alerts",
    "secondHint": "Mentions and replies on mobile",
    "cancelLabel": "Cancel",
    "saveLabel": "Save changes",
    "savedLabel": "Saved",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "firstLabel",
      "label": "First label",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "firstHint",
      "label": "First hint",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "secondLabel",
      "label": "Second label",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "secondHint",
      "label": "Second hint",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "cancelLabel",
      "label": "Cancel label",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "saveLabel",
      "label": "Save label",
      "type": "text",
      "max": 16,
      "role": "cta"
    },
    {
      "key": "savedLabel",
      "label": "Saved label",
      "type": "text",
      "max": 16,
      "role": "cta"
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
  "name": "Classic Cursor Click",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-classic",
    "bundleSha256": "5ed8274b0e51d48bbbfb23c2b5799ba7d5508c4a6dab5dcf3fd0ddc9bb78b40b",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:48:26.129Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-paper.png",
        "sha256": "6ec9e0ef789c43fdb2a38c96d5981a2784e839d14c8ba8fdb1c1a85932a1b5e8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-night.png",
        "sha256": "cc86ee4d749e2d8a2abd7d1a361797d1c89dfa836614ec91cfb9382f082309c1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-color.png",
        "sha256": "2357d8d524dbe00b593ff5badd1a479e3dbc440c42c5d88ffa406cf0b10f6f48"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-paper.png",
        "sha256": "e95d37fa03e4f3efa3127e453e8170a63b7b24fd0c2288ea0e29364e875d96c8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-night.png",
        "sha256": "93a0f0b9da2c04057da0068d686255e9a93a419e2f355416275be284dc5a7020"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-color.png",
        "sha256": "aae8ec68e6f765a5aa502b59ce54ab65e7205ed0e754da2ad6970086e1c2941e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-paper.png",
        "sha256": "6f2633a103b241df57635be5799e78d2ed4f01bb3b8bddf3880cca8eec0c3efc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-night.png",
        "sha256": "6f07242faff5e742ec4eee2a2d5f4a15c2dbadb28cdd6cc9b7719da7000d0e82"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-color.png",
        "sha256": "7b9f56292cdcb76db2b450aef9daafbaf9bf6e7540d3998e4a33c04de93e1c02"
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
          "cursor-classic--16x9",
          "cursor-classic--9x16",
          "cursor-classic--1x1"
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
            "paperNight": 115.81182183159723,
            "paperColor": 19.36477322048611,
            "region": {
              "left": 490,
              "top": 234,
              "width": 940,
              "height": 668
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 114.14336480034723,
            "paperColor": 19.21563042534722,
            "region": {
              "left": 25,
              "top": 334,
              "width": 1030,
              "height": 1308
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 116.09163411458333,
            "paperColor": 19.06005859375,
            "region": {
              "left": 60,
              "top": 228,
              "width": 960,
              "height": 680
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
            "occupancy": 0.3843302849689259,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4291615051370343,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3843302849689259,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8470075594538229,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9207917349038383,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8470075594538229,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7118658220032413,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7931842147009697,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7118658220032413,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.2208116319444444,
        "frames": [
          15,
          100,
          129
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.2100694444444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-90-frame-10.png",
                "sha256": "f5c9dffb24895429c61d7eedb090620bb7217ce75a3a554ebd9c692f7b198a76",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-90-frame-89.png",
                "sha256": "a28bc6c10d0e06fa50ea362fe9dfd004818cbaa8784081970014517c8c94135b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-90-frame-79.png",
                "sha256": "a28bc6c10d0e06fa50ea362fe9dfd004818cbaa8784081970014517c8c94135b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.2208116319444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-600-frame-15.png",
                "sha256": "237bc6fbf152fd3857838b91d751952805943a981bedb5a348a0caf741a7bf79",
                "alphaMass": 587520
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-600-frame-100.png",
                "sha256": "a28bc6c10d0e06fa50ea362fe9dfd004818cbaa8784081970014517c8c94135b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-600-frame-528.png",
                "sha256": "a28bc6c10d0e06fa50ea362fe9dfd004818cbaa8784081970014517c8c94135b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/16x9-duration-600-frame-599.png",
                "sha256": "a28bc6c10d0e06fa50ea362fe9dfd004818cbaa8784081970014517c8c94135b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.546332465277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-90-frame-10.png",
                "sha256": "59ba85ab09f9831d456ad5a6320cc971b9601ceafc90ea096b601e6e67c5e59c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-90-frame-89.png",
                "sha256": "07f69fce1275527f017462d8d8d97ede085f03402109fd7aa3d7c50273175e81",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-90-frame-79.png",
                "sha256": "07f69fce1275527f017462d8d8d97ede085f03402109fd7aa3d7c50273175e81",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.606011284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-600-frame-15.png",
                "sha256": "44d928830dd71d5890558a870825cfe4201d86300ab616d81f5300b977ce8da7",
                "alphaMass": 587520
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-600-frame-100.png",
                "sha256": "07f69fce1275527f017462d8d8d97ede085f03402109fd7aa3d7c50273175e81",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-600-frame-528.png",
                "sha256": "07f69fce1275527f017462d8d8d97ede085f03402109fd7aa3d7c50273175e81",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/9x16-duration-600-frame-599.png",
                "sha256": "07f69fce1275527f017462d8d8d97ede085f03402109fd7aa3d7c50273175e81",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.2159288194444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-90-frame-10.png",
                "sha256": "d08d1205a0c051fb0ca9ae0529f0cf7a892e2d327be8f84504610950ae5a9ec7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-90-frame-89.png",
                "sha256": "e13eaa84fbaef645bde21a0135eefac9b67736685d3a00ade45677f43fda573f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-90-frame-79.png",
                "sha256": "e13eaa84fbaef645bde21a0135eefac9b67736685d3a00ade45677f43fda573f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.215603298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-600-frame-15.png",
                "sha256": "f02eb1405ca3a94c51e4b4c3034d38bf9dfec1e80ee589e77ad339e953aee721",
                "alphaMass": 587520
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-600-frame-100.png",
                "sha256": "e13eaa84fbaef645bde21a0135eefac9b67736685d3a00ade45677f43fda573f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-600-frame-528.png",
                "sha256": "e13eaa84fbaef645bde21a0135eefac9b67736685d3a00ade45677f43fda573f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-classic/1x1-duration-600-frame-599.png",
                "sha256": "e13eaa84fbaef645bde21a0135eefac9b67736685d3a00ade45677f43fda573f",
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
        "note": "A classic arrow cursor flips a notification toggle and clicks Save in a settings dialog."
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
      "bundleSha256": "5ed8274b0e51d48bbbfb23c2b5799ba7d5508c4a6dab5dcf3fd0ddc9bb78b40b",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.263Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-classic/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-classic/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-classic/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 100,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 130,
      "sha256": {
        "poster": "c7e24aba46067177134760fb18d5d760725168d765b88150dd879efff7d0df91",
        "loop": "157e0a9fb1b670b45011e2aab997c400bc47f91b02fd39e7c30eaf4b50443738",
        "detail": "e67833b8fe570d62d3a87a2d7326503786abcd0cd61ec5eb7ba96fd2bc0998fc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-classic/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-classic/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-classic/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 100,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 130,
      "sha256": {
        "poster": "810721e93dd9cc326ac33e22383c88f3edaa0803433a623f71a871ecfb801352",
        "loop": "be06d3a62376d3293b76d802b76bae05e4e6954900f228d0f8846707f14cad2f",
        "detail": "acee6503730743b81830662b901e5546e92d0c4c2740ee6624fe6c4a95c3f2d1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-classic/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-classic/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-classic/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 100,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 130,
      "sha256": {
        "poster": "e9dbae42e484ec8cbbe1f463f7656a46749845133c3b287a7aa0e8f6fafb0ee7",
        "loop": "c4ef9840fac869a441442af9e925a2c1efa3af6d14b1e0f631fd137e18803d42",
        "detail": "07fb507c9772a50e3fac9cff1401add49a9a04d5ea71e264bc91bbd8ec153e00"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5ed8274b0e51d48bbbfb23c2b5799ba7d5508c4a6dab5dcf3fd0ddc9bb78b40b/index.mjs",
    "sha256": "5ed8274b0e51d48bbbfb23c2b5799ba7d5508c4a6dab5dcf3fd0ddc9bb78b40b",
    "bytes": 176376,
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
    "at": "2026-10-08T00:02:01.946Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
