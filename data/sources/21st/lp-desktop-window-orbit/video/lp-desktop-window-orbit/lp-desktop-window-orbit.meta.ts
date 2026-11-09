// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
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
    "desktop-window-orbit",
    "product-proof",
    "desktop-window-orbit",
    "interface"
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
    },
    {
      "key": "from",
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
    "title": "Every workspace, one view",
    "subtitle": "Four independent surfaces settle into a clear window wall.",
    "items": [
      "Planning",
      "Design",
      "Build",
      "Review"
    ],
    "screenshot": "",
    "from": "",
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
    },
    {
      "key": "from",
      "label": "From",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Orbiting application windows",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-desktop-window-orbit",
    "bundleSha256": "b7cd468b3d95f7fa6f3dc5228f5b6e5362994cc164ee09fd70595dafbbea26c7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:52.750Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-paper.png",
        "sha256": "52c1e44df97e4e7d1c106df39cd9558bec612349101afdd9d3034db70262f7e9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-night.png",
        "sha256": "69a536cc13d14fd3191535d28de95da8f477916ff34eb33669327bb964086a86"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-color.png",
        "sha256": "78e7511a374c4a1bb3800cb92f67d386746aeac0899050b827d954e05a13da41"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-paper.png",
        "sha256": "42b9ecbd5d2de21c877d6cb3ab26494cd880ccc2379ca708369f0478a7c9e9a6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-night.png",
        "sha256": "0f8213cf38c421c24b85ac9990770a0ad5071ec94c374dc157b918313c48c210"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-color.png",
        "sha256": "0629ec94370c0d9c22c1fea509dc02b926fd70ca9101e17687d93b578c9264df"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-paper.png",
        "sha256": "c6a9c34c0f1a0eef12064a0883408b3287de6de3c350eeff4cb5adae7e6e3992"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-night.png",
        "sha256": "f108915534d532f0a7415ec85bd3e779ff495c0f94fd532a86e8685af2a12fe0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-color.png",
        "sha256": "4190c58a6fac1e0c5fc27a480e55b233d933b9d28b00e0b4873fd0fb446e979a"
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
          "lp-desktop-window-orbit--16x9",
          "lp-desktop-window-orbit--9x16",
          "lp-desktop-window-orbit--1x1"
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
            "paperNight": 122.25916883680556,
            "paperColor": 11.9599609375,
            "region": {
              "left": 145,
              "top": 108,
              "width": 1582,
              "height": 816
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 117.85468207465277,
            "paperColor": 14.004747178819445,
            "region": {
              "left": 77,
              "top": 192,
              "width": 898,
              "height": 1444
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 121.09456380208333,
            "paperColor": 13.773600260416666,
            "region": {
              "left": 77,
              "top": 108,
              "width": 898,
              "height": 816
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
            "occupancy": 0.8822935038212818,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8822935038212818,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8822935038212818,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8862576023207639,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8862576023207639,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8862576023207639,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8903492810018385,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8903492810018385,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8903492810018385,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 103.49782986111111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 103.5,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-150-frame-18.png",
                "sha256": "fd317be68e7fbf4411ecb649465ffaf96463ba5b8c69cc84bfc691a5a40d7958",
                "alphaMass": 9633
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-150-frame-132.png",
                "sha256": "7dc17ebee1fe070dd6f0b333f2dcb9a6a0dcf8e13b3322990cfc60f371f3be3c",
                "alphaMass": 274151
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-150-frame-149.png",
                "sha256": "7dc17ebee1fe070dd6f0b333f2dcb9a6a0dcf8e13b3322990cfc60f371f3be3c",
                "alphaMass": 274151
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 103.49782986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-900-frame-19.png",
                "sha256": "f16b3d32e571205aea864884c8c9c2155d182ad342b8da315e18cf7373667402",
                "alphaMass": 15278
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-900-frame-132.png",
                "sha256": "7dc17ebee1fe070dd6f0b333f2dcb9a6a0dcf8e13b3322990cfc60f371f3be3c",
                "alphaMass": 274151
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-900-frame-792.png",
                "sha256": "7dc17ebee1fe070dd6f0b333f2dcb9a6a0dcf8e13b3322990cfc60f371f3be3c",
                "alphaMass": 274151
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/16x9-duration-900-frame-899.png",
                "sha256": "7dc17ebee1fe070dd6f0b333f2dcb9a6a0dcf8e13b3322990cfc60f371f3be3c",
                "alphaMass": 274151
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 102.34884982638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-150-frame-18.png",
                "sha256": "e1f3ea28f14a0376b2769b47c310ea4cbd228f7de826881a3f2a00a43b75dd22",
                "alphaMass": 9595
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-150-frame-132.png",
                "sha256": "0a8956969ba9ac5bbcb8f772939200633ab089d241100d13b4d44b7304a57407",
                "alphaMass": 273652
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-150-frame-149.png",
                "sha256": "0a8956969ba9ac5bbcb8f772939200633ab089d241100d13b4d44b7304a57407",
                "alphaMass": 273652
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 103.04633246527777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-900-frame-19.png",
                "sha256": "11c511141264bfb59a68bf6f0a703508bee4b4a42273542d3a13b9b7a2ebe4de",
                "alphaMass": 15244
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-900-frame-132.png",
                "sha256": "0a8956969ba9ac5bbcb8f772939200633ab089d241100d13b4d44b7304a57407",
                "alphaMass": 273652
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-900-frame-792.png",
                "sha256": "24acf5ba21c93392d873b938d06af467c5de37edd8e1220e3280f28cbca65150",
                "alphaMass": 273652
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/9x16-duration-900-frame-899.png",
                "sha256": "24acf5ba21c93392d873b938d06af467c5de37edd8e1220e3280f28cbca65150",
                "alphaMass": 273652
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 103.37120225694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-150-frame-18.png",
                "sha256": "90ddb212d1e16af96de4e310aeae18b80d712bfc511cbdc31f033d6af132ad9b",
                "alphaMass": 9617
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-150-frame-132.png",
                "sha256": "98e5d6d01e8157ae8f937a808f317c8fd91c9e1c598286bbff9cbd4a5d63f627",
                "alphaMass": 274409
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-150-frame-149.png",
                "sha256": "98e5d6d01e8157ae8f937a808f317c8fd91c9e1c598286bbff9cbd4a5d63f627",
                "alphaMass": 274409
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 103.71440972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-900-frame-19.png",
                "sha256": "f07b9ba33ccfb568e110fd2621e9c20f1786c4287ee58112930cf0d2cf8cd773",
                "alphaMass": 15285
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-900-frame-132.png",
                "sha256": "98e5d6d01e8157ae8f937a808f317c8fd91c9e1c598286bbff9cbd4a5d63f627",
                "alphaMass": 274409
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-900-frame-792.png",
                "sha256": "98e5d6d01e8157ae8f937a808f317c8fd91c9e1c598286bbff9cbd4a5d63f627",
                "alphaMass": 274409
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-desktop-window-orbit/1x1-duration-900-frame-899.png",
                "sha256": "98e5d6d01e8157ae8f937a808f317c8fd91c9e1c598286bbff9cbd4a5d63f627",
                "alphaMass": 274409
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
        "note": "Four application windows orbit into a grid with brand-blue charts."
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
      "bundleSha256": "b7cd468b3d95f7fa6f3dc5228f5b6e5362994cc164ee09fd70595dafbbea26c7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d80ef5daaed31a4956ee14fdd05b2dc72db0fd46fac3839c0f6ec3d4a24a27e1",
        "loop": "2c15900d0248122af1c04dc83a4e17b9c35425c3d729de9fd5966f1ed8a3a987",
        "detail": "e1dc0a697b82d202b87c743900fe067057a68b49f4b680cf9ce647cae846c6a9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6fb26f174babfbfb7d700e56a4b33a2331845a900268f75f5c3627840e9a5cec",
        "loop": "475e76726aa39bd11b54e921f7cd224db77dafd92e76e8f85b477c8243e52094",
        "detail": "10fc1e6b0a186dc3ed5445f60f987b2a9337859e53af1d0ca1099ce75eb61afb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-desktop-window-orbit/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fdc7e7a328c776dfce41eb5ffe74efb3b9711537b082431cccfc5045a29952b1",
        "loop": "7a55f50a03d319f0e6f56b20f0b1c9b566710041f5c3a13dc65de30609ad2093",
        "detail": "10c4f9ac5ebe9ade39b092ea6b3db7b1b57829b95b00b129860e182186dba9bc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b7cd468b3d95f7fa6f3dc5228f5b6e5362994cc164ee09fd70595dafbbea26c7/index.mjs",
    "sha256": "b7cd468b3d95f7fa6f3dc5228f5b6e5362994cc164ee09fd70595dafbbea26c7",
    "bytes": 298424,
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
    "at": "2026-10-09T03:23:25.061Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
