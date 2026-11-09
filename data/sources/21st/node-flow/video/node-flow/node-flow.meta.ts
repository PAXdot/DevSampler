// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/flow",
  "tags": [
    "diagram",
    "flow",
    "arrow",
    "a to b",
    "explainer",
    "checklist",
    "nodes"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 56,
      "out": 0
    },
    "markers": {
      "settled": 58
    },
    "beats": [
      0,
      10,
      22,
      32,
      40,
      48
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "from",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "to",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "arrowLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "benefits",
      "type": "list",
      "maxChars": 36,
      "role": "body"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "from",
      "prop": "scale",
      "from": "0.7",
      "settledBy": 10,
      "easing": "spring"
    },
    {
      "target": "arrow",
      "prop": "draw",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "to",
      "prop": "scale",
      "from": "0.7",
      "settledBy": 32,
      "easing": "spring"
    },
    {
      "target": "benefits",
      "prop": "y",
      "from": "below",
      "settledBy": 56,
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
    "sourceUrl": "21st first-party; motion recipe from research V13"
  },
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "from": "Your repo",
    "fromIcon": "code",
    "to": "Edge network",
    "toIcon": "globe",
    "arrowLabel": "git push",
    "benefits": [
      "Live in seconds",
      "Zero config",
      "Instant rollbacks"
    ],
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "from",
      "label": "From",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "fromIcon",
      "label": "From icon",
      "type": "select",
      "options": [
        "zap",
        "shield",
        "globe",
        "layers",
        "code",
        "lock",
        "heart",
        "star",
        "database",
        "message",
        "play",
        "music",
        "image",
        "mail",
        "user",
        "chart",
        "search",
        "cloud",
        "terminal",
        "branch",
        "check",
        "folder",
        "file"
      ]
    },
    {
      "key": "to",
      "label": "To",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "toIcon",
      "label": "To icon",
      "type": "select",
      "options": [
        "zap",
        "shield",
        "globe",
        "layers",
        "code",
        "lock",
        "heart",
        "star",
        "database",
        "message",
        "play",
        "music",
        "image",
        "mail",
        "user",
        "chart",
        "search",
        "cloud",
        "terminal",
        "branch",
        "check",
        "folder",
        "file"
      ]
    },
    {
      "key": "arrowLabel",
      "label": "Arrow label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "benefits",
      "label": "Benefits",
      "type": "list",
      "max": 4,
      "role": "body"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Node Flow",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "node-flow",
    "bundleSha256": "2775452f9057324c76cb84da3cbbd0fb297140dbaa288bf40c34e3767ff8c3fe",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:28.383Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-paper.png",
        "sha256": "3b2ed5619ba15d8dc8b03a4c568c88f4aadb9cd20f7b6bb15f59c467248ec22b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-night.png",
        "sha256": "614e16feb664581d3d58439b10d388d0bd5d511d2ecdf75fedb6e29b9d14a0d3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-color.png",
        "sha256": "5da312dbb6fbf8996f90fae691c51ca43651b4bd84b4ff8fd740808d461669d9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-paper.png",
        "sha256": "077b364c50145b1c54951420b7060f7359c3f162a773ca4b4118b5d52970be1f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-night.png",
        "sha256": "2c0997e28c5b398e905ff0d029d1e2f08b3547e52179fb26b20bb691359cac6d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-color.png",
        "sha256": "54675dfbeab8d12df26a2fe4afebd97229cb8c228da8cba0c5288f97ec829d74"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-paper.png",
        "sha256": "b42eed1fdf383e044fd2d5f7ddc85fb01232bdf86c1fc173311e63a37466bd3b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-night.png",
        "sha256": "bf7ce22e003965e75d7a4574030ffc919b1fb5b41d8c51dbbc72adc1aa5f9674"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-color.png",
        "sha256": "90767c15e4691e6085e08c83c05e53ff089fd36a2638883a867e8d4e2d690c50"
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
          "node-flow--16x9",
          "node-flow--1x1",
          "node-flow--9x16"
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
            "paperNight": 39.88335503472222,
            "paperColor": 12.747748480902779,
            "region": {
              "left": 223,
              "top": 286,
              "width": 1530,
              "height": 492
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 27.897705078125,
            "paperColor": 9.04977756076389,
            "region": {
              "left": 125,
              "top": 349,
              "width": 860,
              "height": 418
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 65.67610677083333,
            "paperColor": 23.728895399305557,
            "region": {
              "left": 135,
              "top": 414,
              "width": 810,
              "height": 1097
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
            "occupancy": 1.071844391691862,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.071844391691862,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.071844391691862,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9099707079143196,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9099707079143196,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9099707079143196,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2652223432775889,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2652223432775889,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2652223432775889,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 27.36056857638889,
        "frames": [
          8,
          58,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 27.391710069444443,
            "retainedAlpha": 1.0405885337392187,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-60-frame-7.png",
                "sha256": "f83e481f856366862a4c173d06ef802019cf4666d267397984a5f697cfec15ff",
                "alphaMass": 2406
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-60-frame-58.png",
                "sha256": "1692eb2e6c6ee83039270fb851ce1625f9f1280fd36732a9c3a0f6dcb6ee1946",
                "alphaMass": 14359
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-60-frame-52.png",
                "sha256": "45dd8e77af73d8739c8e8c08e216c6cb033eb4908d78591640a7f0c4cf554e31",
                "alphaMass": 13797
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-60-frame-59.png",
                "sha256": "9e49bba6bdaa885c1615252a5db096a58064392d3ab927252730bb8fa8515292",
                "alphaMass": 14357
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 27.36056857638889,
            "retainedAlpha": 1.0005575301414733,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-900-frame-8.png",
                "sha256": "802e2b628d24823c63041952afaa16d04f0c0aad93716a8c58b0ae19c216dc9a",
                "alphaMass": 2398
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-900-frame-58.png",
                "sha256": "1692eb2e6c6ee83039270fb851ce1625f9f1280fd36732a9c3a0f6dcb6ee1946",
                "alphaMass": 14359
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-900-frame-792.png",
                "sha256": "81cb93022d25420b12cf2e33a6a0244cfb9e88f1f8a3019149bf92e37bb8ed50",
                "alphaMass": 14349
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/16x9-duration-900-frame-899.png",
                "sha256": "9e49bba6bdaa885c1615252a5db096a58064392d3ab927252730bb8fa8515292",
                "alphaMass": 14357
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 18.574544270833332,
            "retainedAlpha": 1.0441767068273093,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-60-frame-7.png",
                "sha256": "5074236809ebdf0afad5cb06a6302bfdf3274fad392c244d7004ec659b54005c",
                "alphaMass": 1365
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-60-frame-58.png",
                "sha256": "d7b230bc2f24ee1bb23e97d479b6677ead2e8af1627e3d800d2701d477b725b6",
                "alphaMass": 8322
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-60-frame-52.png",
                "sha256": "63054f8ceaeb4dbce990fab4011d6bd12bba21fd0b7d83fd0f749b10d210d44e",
                "alphaMass": 7968
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-60-frame-59.png",
                "sha256": "1fcd81a168d79a065d8c4dea6c749d4c430982939a10a4a5c23870ad532e42de",
                "alphaMass": 8320
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 18.71169704861111,
            "retainedAlpha": 1.000601322910403,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-900-frame-8.png",
                "sha256": "eba8090ca4ddb794e76ec7c301aa8df42aab85dff6cfdaaf7d4ae2de4e7761d8",
                "alphaMass": 1340
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-900-frame-58.png",
                "sha256": "d7b230bc2f24ee1bb23e97d479b6677ead2e8af1627e3d800d2701d477b725b6",
                "alphaMass": 8322
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-900-frame-792.png",
                "sha256": "80b8d83f616e59a7da64b0ec1bd680f931f26c8910d5b6b12fabd7b14163ba5e",
                "alphaMass": 8315
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/1x1-duration-900-frame-899.png",
                "sha256": "1fcd81a168d79a065d8c4dea6c749d4c430982939a10a4a5c23870ad532e42de",
                "alphaMass": 8320
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 43.582356770833336,
            "retainedAlpha": 1.0455231490923924,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-60-frame-7.png",
                "sha256": "7329fd69cae65e8d5d0b04bafbcfd5c8dc1811e47413da940eb1e040ed3f4de4",
                "alphaMass": 4123
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-60-frame-58.png",
                "sha256": "2409d6cccf8427dab57245bb650a306c3ca277c7d9d755d7bd159de51a181583",
                "alphaMass": 25634
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-60-frame-52.png",
                "sha256": "3d20bc0e63b87359769d77d58146b967e566c8675f80db4fb848923ac6ef5882",
                "alphaMass": 24515
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-60-frame-59.png",
                "sha256": "eb6ac427c9750f4bcbf6479cddd0dace02913705e3b732cc41a7d91166f9e6f3",
                "alphaMass": 25631
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 43.22960069444444,
            "retainedAlpha": 1.0002341463414635,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-900-frame-8.png",
                "sha256": "2b28fabea0293fb7fe97cb8bf22e42080cc09aa6223ac28c29b2a4359f706a1b",
                "alphaMass": 4099
              },
              {
                "frame": 58,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-900-frame-58.png",
                "sha256": "2409d6cccf8427dab57245bb650a306c3ca277c7d9d755d7bd159de51a181583",
                "alphaMass": 25634
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-900-frame-792.png",
                "sha256": "8c6080d72883d46d32ea9e650b4fe42f886029911362bd5eb35081e0b22f5a5a",
                "alphaMass": 25625
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/node-flow/9x16-duration-900-frame-899.png",
                "sha256": "eb6ac427c9750f4bcbf6479cddd0dace02913705e3b732cc41a7d91166f9e6f3",
                "alphaMass": 25631
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
        "note": "Repo node connects to an edge-network node via git push with three benefits; a flow."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 12,
        "compared": 12,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2775452f9057324c76cb84da3cbbd0fb297140dbaa288bf40c34e3767ff8c3fe",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.991375Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/node-flow/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/node-flow/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/node-flow/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 58,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "e24c7a1e8e263027790e1d7c829120a61c8833637d0b9b23090e1066632c2b77",
        "loop": "3ae8e90bf1587b66ab0bddfb9c0081f06e4fa3c87a7298d7f5194914a8bd7d0f",
        "detail": "33420a006d42dcaa95f4565a3528bfd86b7a0438b4096a219bdb391595636d0e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/node-flow/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/node-flow/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/node-flow/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 58,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "caa34852d62ff71ae923803e56093860ce592176fc569f306a060eaeb3dea805",
        "loop": "5d7581a42e6b4cbdc442fb23e54279feba54f25ccc2fa9fc91948a9fc76738fe",
        "detail": "d2f4fbc9ad06f9b280249627de88c7db94e66f69bce9602aff8a212f299113bc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/node-flow/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/node-flow/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/node-flow/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 58,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "98ee6d5dba5bdb8bd8b1915a939b3631c3076d56362c4215a60490d591758295",
        "loop": "69b88a1032147cd098245b6260473c8aa28bcf84dfd36a09c369757babfed0c7",
        "detail": "841528e56cfed59ee2df8262d3d305f2fd38b93dcf658fff57d1f5b9a0463475"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2775452f9057324c76cb84da3cbbd0fb297140dbaa288bf40c34e3767ff8c3fe/index.mjs",
    "sha256": "2775452f9057324c76cb84da3cbbd0fb297140dbaa288bf40c34e3767ff8c3fe",
    "bytes": 166299,
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
    "at": "2026-10-07T02:40:47.714Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
