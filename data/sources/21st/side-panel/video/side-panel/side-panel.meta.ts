// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/panel",
  "tags": [
    "side panel",
    "drawer",
    "extension",
    "plugin",
    "settings",
    "sync",
    "cursor",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 80,
      "click": 52
    },
    "beats": [
      0,
      14,
      52,
      66
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
    "backdrop": []
  },
  "slots": [
    {
      "key": "image",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "panelTitle",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "items",
      "type": "list",
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "toast",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "doneColor": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "panel",
      "prop": "x",
      "from": "right",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "toast",
      "prop": "scale",
      "from": "0.95",
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V15 browser side panel + synced toast)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "image": "",
    "panelTitle": "Sync to workspace",
    "items": [
      "Customers table",
      "Pipeline view",
      "Weekly report"
    ],
    "cta": "Sync now",
    "doneLabel": "Synced",
    "toast": "Everything is up to date",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "doneColor": "#16A34A",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "panelTitle",
      "label": "Panel title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 5,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 22,
      "role": "subline"
    },
    {
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "doneColor",
      "label": "Done color",
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
  "name": "Side Panel Slide",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "side-panel",
    "bundleSha256": "0c09b424d631dbddfa9c6b6fcdd8bc1760feb54f2679f311a51b1a0568799f2c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:22.635Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-paper.png",
        "sha256": "9ad42633ac8faa855f5513950afcf9ba5bdd336fb7a7aae55ae6641e9c629b7e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-night.png",
        "sha256": "c4ff7cbef0e55f33ea9bccd43f6b8b5197e1b46b660447b9730d395c9bba7de7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-color.png",
        "sha256": "b3f6eb3633b44492fd25b7525cf0a7c3bb884452651b0895ce587233f92c56c7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-paper.png",
        "sha256": "3ae7bb0739896905c12d85152b884fc7516a3ce8440cfdc6eea7dc93c558bfc5"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-night.png",
        "sha256": "e201dd5b5d916105f6c016c6b377954e5f88bbceead27559a4d651bba85e40e4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-color.png",
        "sha256": "be0684b669003fc2e6dd723e7deee7f41ea71b38d1d8b86bbac3155461c14435"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-paper.png",
        "sha256": "b21063fd255d3eacd8e14e26fcc12484115928d433afa5992f4c8aea4c967739"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-night.png",
        "sha256": "6d2128abec79a19236ff71aa34836e17b1e0115ff0bcf572289b1d816926e3ed"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-color.png",
        "sha256": "07499d9f6a970e68b28665e5b3bf009c68aa6e8c0ef5a71e03b28a4a2b89dfd5"
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
          "side-panel--16x9",
          "side-panel--1x1",
          "side-panel--9x16"
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
            "paperNight": 122.69517686631944,
            "paperColor": 8.49148220486111,
            "region": {
              "left": 121,
              "top": 23,
              "width": 1680,
              "height": 1057
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 117.28708224826389,
            "paperColor": 8.48141818576389,
            "region": {
              "left": 0,
              "top": 117,
              "width": 1080,
              "height": 894
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 124.32530381944444,
            "paperColor": 14.913411458333334,
            "region": {
              "left": 0,
              "top": 211,
              "width": 1080,
              "height": 1709
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
            "occupancy": 1.1634765789031665,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2136702674897122,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1634765789031665,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1063510337834266,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.173154446963971,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1063510337834266,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1682704042265057,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2614854969765688,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1682704042265057,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 21.14963107638889,
        "frames": [
          12,
          80,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 21.133463541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-90-frame-10.png",
                "sha256": "556af0b0dbf42ca939ee1b24c8cd2da691ca00dc5c10ce4ffdac69e8ca5b6200",
                "alphaMass": 448731
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-90-frame-80.png",
                "sha256": "355a062c38b6d526d872c43e44d875534cf85daaa54c658f3e5b1b58b397ce0b",
                "alphaMass": 449052
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-90-frame-79.png",
                "sha256": "aa9b5b46d967bbbb88b02a315e054c12275bffd1e389028bfe1510422b5dfbcf",
                "alphaMass": 449052
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-90-frame-89.png",
                "sha256": "150fb6975b21d9d15b6fc568f4864a906f9c14a0b8e6659fd047621de56ce9a3",
                "alphaMass": 449052
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 21.14963107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-600-frame-12.png",
                "sha256": "b8b093413b88ad133db61179f439e42d8d4672afd9024728537ea3f5e3c5ae5e",
                "alphaMass": 448720
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-600-frame-80.png",
                "sha256": "355a062c38b6d526d872c43e44d875534cf85daaa54c658f3e5b1b58b397ce0b",
                "alphaMass": 449052
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-600-frame-528.png",
                "sha256": "150fb6975b21d9d15b6fc568f4864a906f9c14a0b8e6659fd047621de56ce9a3",
                "alphaMass": 449052
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/16x9-duration-600-frame-599.png",
                "sha256": "150fb6975b21d9d15b6fc568f4864a906f9c14a0b8e6659fd047621de56ce9a3",
                "alphaMass": 449052
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 21.31814236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-90-frame-10.png",
                "sha256": "87d66693636ceddb8dd4e85ee6f37bf2ae14dfdba723225a19274fb75d116c08",
                "alphaMass": 416856
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-90-frame-80.png",
                "sha256": "82867ec1535e6bc452a79c65304cfb392507f6dd94b64dc13981a02e0851943a",
                "alphaMass": 417962
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-90-frame-79.png",
                "sha256": "8d5f648ba7e6e738d5c2277801f846ffcb7f8eb96d768f40916cef1d9cefdc85",
                "alphaMass": 417962
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-90-frame-89.png",
                "sha256": "6cb0ea8641d7cfac45bc311dcef2a553783e53e75ef9cf35dbfd98426013d802",
                "alphaMass": 417962
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 21.34809027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-600-frame-12.png",
                "sha256": "ff141c9f275ca3dbb572a5b46dfd504bab60ca85485947c5013ff7b59033831e",
                "alphaMass": 417364
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-600-frame-80.png",
                "sha256": "82867ec1535e6bc452a79c65304cfb392507f6dd94b64dc13981a02e0851943a",
                "alphaMass": 417962
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-600-frame-528.png",
                "sha256": "6cb0ea8641d7cfac45bc311dcef2a553783e53e75ef9cf35dbfd98426013d802",
                "alphaMass": 417962
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/1x1-duration-600-frame-599.png",
                "sha256": "6cb0ea8641d7cfac45bc311dcef2a553783e53e75ef9cf35dbfd98426013d802",
                "alphaMass": 417962
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 28.12543402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-90-frame-10.png",
                "sha256": "119f4be0892615a0051d526cf764b1709a01beab768d6a929d055f9caac31bec",
                "alphaMass": 420887
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-90-frame-80.png",
                "sha256": "f2cab44f1992e1a439c4305a55af4b9ed1760822e535cc35789e9fc956d6c774",
                "alphaMass": 447299
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-90-frame-79.png",
                "sha256": "ecc212d682e2892fa05b1f02984db420515a0a095e29b6b5f6fefb5661d5bda9",
                "alphaMass": 447299
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-90-frame-89.png",
                "sha256": "d2e92672189ffd29806ca6b05893dfb5f8e1c3e9fe6e102746227b99ee2bbc6d",
                "alphaMass": 447299
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 28.132486979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-600-frame-12.png",
                "sha256": "c410a4757280750c51195f8e33cf632ec827c7131ee7e5ddb4e8470ab39c6cac",
                "alphaMass": 421664
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-600-frame-80.png",
                "sha256": "f2cab44f1992e1a439c4305a55af4b9ed1760822e535cc35789e9fc956d6c774",
                "alphaMass": 447299
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-600-frame-528.png",
                "sha256": "d2e92672189ffd29806ca6b05893dfb5f8e1c3e9fe6e102746227b99ee2bbc6d",
                "alphaMass": 447299
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/side-panel/9x16-duration-600-frame-599.png",
                "sha256": "d2e92672189ffd29806ca6b05893dfb5f8e1c3e9fe6e102746227b99ee2bbc6d",
                "alphaMass": 447299
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
        "note": "A side panel slides over an app, toggles switch and Sync turns to Synced."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0c09b424d631dbddfa9c6b6fcdd8bc1760feb54f2679f311a51b1a0568799f2c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.964030Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/side-panel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/side-panel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/side-panel/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "419bf752711fce543c2097fc9264da87674e811bf93005d56bbb7656aeda9577",
        "loop": "b819019cb386dbc87cacbbe9d379ff604af6364fbd493783419c49c96b6c5c29",
        "detail": "83fb7b40a0f8df185e611b2626e06a7ab7eab31b53fc945aaa32c5735455fc27"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/side-panel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/side-panel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/side-panel/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "dd85a405e892d7ea1e08f6b7756ee21d0d54f3acf06468a23f82e3cf299bf780",
        "loop": "80fa5bbb6dfd18d82fafb216819995417ac40393c093c5a473de7378688468d7",
        "detail": "4444ecd2627765882b16f3485045de39e85f2bbb0888a375a806a12a46f07013"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/side-panel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/side-panel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/side-panel/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "476da8fc12106ef2bc9d1de6c79127f87b73e5c7a0363c4e7798924e961ccb7c",
        "loop": "0a82c3ea515cddef2dc9b809c75fe694fe0440fabbd39b47d46479109c887c7e",
        "detail": "b968a978dbb1d1990d1cf64927501fc42605713c5ad7c06759e4478a05a9d617"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0c09b424d631dbddfa9c6b6fcdd8bc1760feb54f2679f311a51b1a0568799f2c/index.mjs",
    "sha256": "0c09b424d631dbddfa9c6b6fcdd8bc1760feb54f2679f311a51b1a0568799f2c",
    "bytes": 180986,
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
    "at": "2026-10-07T02:24:51.015Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
