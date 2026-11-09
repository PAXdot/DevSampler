// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/cursor",
  "tags": [
    "cursors",
    "multiplayer",
    "collaboration",
    "presence",
    "canvas",
    "design tool",
    "realtime"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 72,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 60,
      "out": 0
    },
    "markers": {
      "settled": 64
    },
    "beats": [
      22,
      32,
      44
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
      "key": "names",
      "type": "list",
      "role": "label"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 18,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "image",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "selectColor": "colors.primary",
    "clickColor": "colors.secondary",
    "resizeColor": "colors.primary",
    "wanderColor": "colors.secondary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursors",
      "prop": "xy",
      "from": "edges",
      "settledBy": 40,
      "easing": "ease"
    },
    {
      "target": "selection",
      "prop": "rect",
      "settledBy": 38,
      "easing": "ease"
    },
    {
      "target": "image",
      "prop": "size",
      "settledBy": 52,
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
    "sourceUrl": "own (cursor family per research G5; multiplayer presence pattern)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "names": [
      "Mia",
      "Theo",
      "Ana",
      "Sam"
    ],
    "headline": "Design together, ship the same day",
    "cta": "Start a file",
    "image": "",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "selectColor": "#F97316",
    "clickColor": "#10B981",
    "resizeColor": "#EC4899",
    "wanderColor": "#0EA5E9",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "names",
      "label": "Names",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 18,
      "role": "cta"
    },
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "media"
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
      "key": "selectColor",
      "label": "Select color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "clickColor",
      "label": "Click color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "resizeColor",
      "label": "Resize color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "wanderColor",
      "label": "Wander color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Multiplayer Cursors",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "multi-cursor",
    "bundleSha256": "ac44260378e5e646fff6beba35966636b76658e2c93629c2ceaf1880db59b44f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:46:15.791Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-paper.png",
        "sha256": "cc84d019e7919e639bab4a897909c24c90d6bec4442bde25736f24d212927ba5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-night.png",
        "sha256": "90ea91f1ac59d9b7da9f4934d7fe4c55a68441a0fb1d61bf4c32d9a9cb74da5f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-color.png",
        "sha256": "e488f6640c2e78303085c08a7c974f42db84b936faf92bc64860b836115e52bb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-paper.png",
        "sha256": "a8983ad88e1b36708aeaa8f08c55a249bf1ecf8dbc4c0cd214b8eb6a31bb2770"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-night.png",
        "sha256": "380ea17aa8bd8d42b781058c17fe4515f965b2c07d838f6f91410141ba602e2e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-color.png",
        "sha256": "bbe2e9c5fcbfd5dc6a4ea0e92b884077c50736450e43a04b56d71f3cee34bce7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-paper.png",
        "sha256": "441b8ec29fd5656cbd48ae9c54e8b0641c1d5f0d2ba4ca18c20681b17085f8e7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-night.png",
        "sha256": "d672e60e764a0740e80567324e5e35ccd8decb18fc7be1859a21e9beda4979cc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-color.png",
        "sha256": "9c749875d3d4b4f9d8e90f52d39eb25aa27e16ced3d753725914ccac9f9bb6b8"
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
          "multi-cursor--16x9",
          "multi-cursor--1x1",
          "multi-cursor--9x16"
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
            "paperNight": 124.55574544270833,
            "paperColor": 13.982855902777779,
            "region": {
              "left": 124,
              "top": 9,
              "width": 1672,
              "height": 1071
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 113.76171875,
            "paperColor": 13.023328993055555,
            "region": {
              "left": 0,
              "top": 190,
              "width": 1080,
              "height": 752
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 96.19943576388889,
            "paperColor": 15.783610026041666,
            "region": {
              "left": 0,
              "top": 303,
              "width": 1080,
              "height": 1367
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
            "occupancy": 1.1643350112678819,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2238894400352736,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1643350112678819,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9144412794839016,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9868144788779711,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9144412794839016,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9624462085502927,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0090407690854122,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9624462085502927,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.963541666666667,
        "frames": [
          9,
          64,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 72,
            "averageChannelDifference": 7.954535590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-72-frame-8.png",
                "sha256": "d7af864e84a06db95395e28ffec46c9cc3976ae948241c568a8bfbd4cd61fed1",
                "alphaMass": 455032
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-72-frame-64.png",
                "sha256": "97e83906659ba9274947117f442e31f508b023453ea410e0e5a181d8e5e0cab8",
                "alphaMass": 455720
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-72-frame-63.png",
                "sha256": "d009fe7b499eac455c7da9df705010d8cce1484463033f2c478b995018978869",
                "alphaMass": 455720
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-72-frame-71.png",
                "sha256": "98149e4ed19f2c42b8ad35fa9f13000193d47ce9d54c9f5f00a331f4a6abcb77",
                "alphaMass": 455720
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.963541666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-900-frame-9.png",
                "sha256": "759bc81bd819162dbf2cb61a4d1192357b697b051e7f7ad8dc0af80fc47b67f8",
                "alphaMass": 455090
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-900-frame-64.png",
                "sha256": "97e83906659ba9274947117f442e31f508b023453ea410e0e5a181d8e5e0cab8",
                "alphaMass": 455720
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-900-frame-792.png",
                "sha256": "12685965ac0739ecfab1bbb90c7ede88edd6668811c55a7ec0b63a773a597879",
                "alphaMass": 455720
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/16x9-duration-900-frame-899.png",
                "sha256": "12685965ac0739ecfab1bbb90c7ede88edd6668811c55a7ec0b63a773a597879",
                "alphaMass": 455720
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 72,
            "averageChannelDifference": 7.584526909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-72-frame-8.png",
                "sha256": "c5c8579309273c7d804f304f1e22bcc9d3ccbd4ce31cd2b8b3f5779a70c5e39e",
                "alphaMass": 337756
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-72-frame-64.png",
                "sha256": "faddd66429b99b09f74f3d9a5e9e454885336fc5599332c80527e1146d96e53e",
                "alphaMass": 337266
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-72-frame-63.png",
                "sha256": "252f43e29c54c9aa8c7fbbf628a6c378c5e13e71caec817186a419af31e454ee",
                "alphaMass": 337266
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-72-frame-71.png",
                "sha256": "91bc5e00cb914b7cf41bacaed6f0a272b25971ca900cd59821ee4526639d894b",
                "alphaMass": 337266
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.361545138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-900-frame-9.png",
                "sha256": "dfd5251dfca5e4333ccf26a754284c1a5c4be973422a3ba814a46887677dfbc7",
                "alphaMass": 338221
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-900-frame-64.png",
                "sha256": "faddd66429b99b09f74f3d9a5e9e454885336fc5599332c80527e1146d96e53e",
                "alphaMass": 337266
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-900-frame-792.png",
                "sha256": "fcdf3979cd508eb52c80ad7de54afde3795b3b028099da0b068c79d68eb7d793",
                "alphaMass": 337266
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/1x1-duration-900-frame-899.png",
                "sha256": "fcdf3979cd508eb52c80ad7de54afde3795b3b028099da0b068c79d68eb7d793",
                "alphaMass": 337266
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 72,
            "averageChannelDifference": 17.287760416666668,
            "retainedAlpha": 0.9986525992585212,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-72-frame-8.png",
                "sha256": "23f237d2b9aab0eeedc18ae79135dec21d3ac6c0b317c57d0a9f6fe35dbca9d4",
                "alphaMass": 367867
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-72-frame-64.png",
                "sha256": "c8641eb72f8507770d339f2276b0ee30bd0315dcf1ebf931c56a1e07aafe8b39",
                "alphaMass": 367160
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-72-frame-63.png",
                "sha256": "a06df3d8124aeafc44f91857d7614722706af1bcff4190f191d36e82626f2a8d",
                "alphaMass": 367374
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-72-frame-71.png",
                "sha256": "d08f14899824b65870db7e04a461eb0e6c29c6d5bc5b4516afbf2bf55685fbe2",
                "alphaMass": 366879
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.423502604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-900-frame-9.png",
                "sha256": "49e0101ed9942db5cb9e1956673b8d6f4a0540b6e08e9334958109ee2682c03d",
                "alphaMass": 369414
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-900-frame-64.png",
                "sha256": "c8641eb72f8507770d339f2276b0ee30bd0315dcf1ebf931c56a1e07aafe8b39",
                "alphaMass": 367160
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-900-frame-792.png",
                "sha256": "d0257abce650df8bfb1505ee8d7ba3968a3a449d29f27021be4deae90a63c11d",
                "alphaMass": 366879
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/multi-cursor/9x16-duration-900-frame-899.png",
                "sha256": "d0257abce650df8bfb1505ee8d7ba3968a3a449d29f27021be4deae90a63c11d",
                "alphaMass": 366879
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
        "note": "Four named cursors select, click, resize and wander over a canvas; placeholder art goes blue to sky to orange, no purple."
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
      "bundleSha256": "ac44260378e5e646fff6beba35966636b76658e2c93629c2ceaf1880db59b44f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/multi-cursor/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/multi-cursor/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/multi-cursor/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "f90e5478371fcf8ba2714bc61984ce2d86c93a424f92f99b9a8224e2b8e1682d",
        "loop": "31f8f28e5c8e855b3b8f96d4a9ddaa754f7765bd69b27a14f28b5d1d3917ca4f",
        "detail": "375c157d99c5c1b3248e053f0e767d7edf537795677440283b40083855b3c328"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/multi-cursor/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/multi-cursor/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/multi-cursor/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "e9479e40962f8ceaf318c179a7a153b2b1ef9218d53dc61fd5eb4fb858285966",
        "loop": "0b5f01519c5e8cb714634e1be741b645262e6bc277e5993b0fd17322f28fd5b2",
        "detail": "fb10444bcbcba74412839078827ee7583ae418bcba2d92455f23ec054a637cb0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/multi-cursor/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/multi-cursor/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/multi-cursor/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "f51bc22f74342fbf7fca9b8dbf2a27c0a988198ffd63e215a63f9f94430b7a1d",
        "loop": "fa639a22fa5102048045091cb29fbe0ad3bb8dd11644a4c6efe3ca8c36d04929",
        "detail": "b2400169c3082cf91c67a931fd3ed9255635aae9f0afa2bffe2abb4c648d43bd"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ac44260378e5e646fff6beba35966636b76658e2c93629c2ceaf1880db59b44f/index.mjs",
    "sha256": "ac44260378e5e646fff6beba35966636b76658e2c93629c2ceaf1880db59b44f",
    "bytes": 174680,
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
    "at": "2026-10-09T04:16:59.430Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
