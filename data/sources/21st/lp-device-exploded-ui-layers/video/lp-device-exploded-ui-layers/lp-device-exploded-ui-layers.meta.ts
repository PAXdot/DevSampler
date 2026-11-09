// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "product-ui",
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
    "device-exploded-ui-layers",
    "product-proof",
    "device-exploded-ui-layers",
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
    "title": "See how the interface fits",
    "subtitle": "Separate the frame, content, overlay, and controls.",
    "items": [
      "Device frame",
      "Content layer",
      "Overlay",
      "Controls"
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
  "name": "Exploded interface plane proof",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-device-exploded-ui-layers",
    "bundleSha256": "7be21f024100adbd36a570654f906dfd7477dcc7271d2d99c48dc9ce1d02f714",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:06.165Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-paper.png",
        "sha256": "34f0f72364792e63c91bd884b25263b1c5700c6293a02459e3321caaadd5e7e6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-night.png",
        "sha256": "8eac5bd7e3882e15e3d62fa651b90b629cf9163d527fa199d726c181a040368a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-color.png",
        "sha256": "895e26301cc0b2fb54f6e9549d64d23d3bb0719c1912851c2faed83202306b71"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-paper.png",
        "sha256": "e29cb2bf1013662bbe300da7ad8899b260e47b701bc547c31dcca5ec397ec40b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-night.png",
        "sha256": "fe1dd5cc97de5607a7910c1102440d98eb02fad38261674292b2e93cf10278c9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-color.png",
        "sha256": "0662eef10fca9ac2c49b42190e835ffaedfd86da2dd251c9872984ea190990f7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-paper.png",
        "sha256": "f762aed0c39ae3e524e07d8caaf8e9410e6fc9a1266de1c39966ea165968bf02"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-night.png",
        "sha256": "8558e3378a15a12b6b0fd74f1bc99e172cde4d7ecdb72a807957c7ecb2a53687"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-color.png",
        "sha256": "ef6047cbed9f54753460698069ad4a04085779232b17415ce40437957247d51d"
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
          "lp-device-exploded-ui-layers--16x9",
          "lp-device-exploded-ui-layers--9x16",
          "lp-device-exploded-ui-layers--1x1"
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
            "paperNight": 133.07820638020834,
            "paperColor": 14.04758029513889,
            "region": {
              "left": 468,
              "top": 229,
              "width": 984,
              "height": 622
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.92108832465277,
            "paperColor": 14.43112521701389,
            "region": {
              "left": 186,
              "top": 269,
              "width": 708,
              "height": 1382
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 133.73556857638889,
            "paperColor": 14.009168836805555,
            "region": {
              "left": 263,
              "top": 229,
              "width": 554,
              "height": 622
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
            "occupancy": 0.418313544553624,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.418313544553624,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.418313544553624,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6687406830015958,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6687406830015958,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6687406830015958,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4186914249010076,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4186914249010076,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4186914249010076,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 48.39756944444444,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 48.39756944444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-150-frame-18.png",
                "sha256": "028c074553b08e6fa25922d72ddf17cf0876708e7b89342df070375ed8f6f2c4",
                "alphaMass": 257848
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-150-frame-132.png",
                "sha256": "f89fdf939a839a37d502ec68f76cb4cafd915d6614fd0e2f1b2697757526b322",
                "alphaMass": 173932
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-150-frame-149.png",
                "sha256": "f89fdf939a839a37d502ec68f76cb4cafd915d6614fd0e2f1b2697757526b322",
                "alphaMass": 173932
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 48.39756944444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-900-frame-19.png",
                "sha256": "028c074553b08e6fa25922d72ddf17cf0876708e7b89342df070375ed8f6f2c4",
                "alphaMass": 257848
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-900-frame-132.png",
                "sha256": "f89fdf939a839a37d502ec68f76cb4cafd915d6614fd0e2f1b2697757526b322",
                "alphaMass": 173932
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-900-frame-792.png",
                "sha256": "f89fdf939a839a37d502ec68f76cb4cafd915d6614fd0e2f1b2697757526b322",
                "alphaMass": 173932
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/16x9-duration-900-frame-899.png",
                "sha256": "f89fdf939a839a37d502ec68f76cb4cafd915d6614fd0e2f1b2697757526b322",
                "alphaMass": 173932
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 61.43760850694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-150-frame-18.png",
                "sha256": "faea0b79b0eb7f229314ba2fbf3d6e48fb8a68bae9a870bb727c56b2e1f25829",
                "alphaMass": 382832
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-150-frame-132.png",
                "sha256": "4c89992e9f0ecb57f953d18e990bfce96b0c89d97608183a8039b45aed69f581",
                "alphaMass": 276965
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-150-frame-149.png",
                "sha256": "4c89992e9f0ecb57f953d18e990bfce96b0c89d97608183a8039b45aed69f581",
                "alphaMass": 276965
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 61.43760850694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-900-frame-19.png",
                "sha256": "faea0b79b0eb7f229314ba2fbf3d6e48fb8a68bae9a870bb727c56b2e1f25829",
                "alphaMass": 382832
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-900-frame-132.png",
                "sha256": "4c89992e9f0ecb57f953d18e990bfce96b0c89d97608183a8039b45aed69f581",
                "alphaMass": 276965
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-900-frame-792.png",
                "sha256": "4c89992e9f0ecb57f953d18e990bfce96b0c89d97608183a8039b45aed69f581",
                "alphaMass": 276965
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/9x16-duration-900-frame-899.png",
                "sha256": "4c89992e9f0ecb57f953d18e990bfce96b0c89d97608183a8039b45aed69f581",
                "alphaMass": 276965
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 48.82074652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-150-frame-18.png",
                "sha256": "08f80035ef0d9a0ba93057680b136693c510e42f7cbf9692716ada43861b790d",
                "alphaMass": 261045
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-150-frame-132.png",
                "sha256": "3a3152b78af650c07a06d6eb0d61941b136c422dd04fc28f79f72f663e0e268f",
                "alphaMass": 173872
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-150-frame-149.png",
                "sha256": "3a3152b78af650c07a06d6eb0d61941b136c422dd04fc28f79f72f663e0e268f",
                "alphaMass": 173872
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 48.82074652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-900-frame-19.png",
                "sha256": "08f80035ef0d9a0ba93057680b136693c510e42f7cbf9692716ada43861b790d",
                "alphaMass": 261045
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-900-frame-132.png",
                "sha256": "3a3152b78af650c07a06d6eb0d61941b136c422dd04fc28f79f72f663e0e268f",
                "alphaMass": 173872
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-900-frame-792.png",
                "sha256": "3a3152b78af650c07a06d6eb0d61941b136c422dd04fc28f79f72f663e0e268f",
                "alphaMass": 173872
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-device-exploded-ui-layers/1x1-duration-900-frame-899.png",
                "sha256": "3a3152b78af650c07a06d6eb0d61941b136c422dd04fc28f79f72f663e0e268f",
                "alphaMass": 173872
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
        "note": "A dashboard separates into exploded interface planes and settles back; accent brand blue."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7be21f024100adbd36a570654f906dfd7477dcc7271d2d99c48dc9ce1d02f714",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "84f4bb2dd9cbe3179029ce9b4102d1e7e5cf93643d9dba2e1335f27d96ff6847",
        "loop": "cb2f972dc402a2fcd667da61ed95305667dd69d8ce3e610b0f1d78990c513111",
        "detail": "1ef23688104222c2c89a32d0aeaa8b2596258c293a619c88bef96d8db9c3450c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d28faf31db8ae227d1048eadefefd94fb41b7af785a17866b0a7df9af27e789f",
        "loop": "20d62e4bb317629a46b17c17ab65a3135592bab74a336f2efb8865871784f86a",
        "detail": "29712bd9b0a1694aad977fb20d296e7d4a72c4ab0a6f71584ab6e48bb0992114"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-exploded-ui-layers/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e5c7553b89845087b182a0a2c423aa6090a436f498dfe09e09a72b7c23c007b1",
        "loop": "c4ee04e3229d6b00e27369befff62293cad0f3ec1849a0cd4afc7c6bc9b5235d",
        "detail": "3c8773cf2241961e638b9aeb24f1fe0f4b27575eba62512732c46def5178ec30"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7be21f024100adbd36a570654f906dfd7477dcc7271d2d99c48dc9ce1d02f714/index.mjs",
    "sha256": "7be21f024100adbd36a570654f906dfd7477dcc7271d2d99c48dc9ce1d02f714",
    "bytes": 298449,
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
    "at": "2026-10-09T03:24:12.067Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
