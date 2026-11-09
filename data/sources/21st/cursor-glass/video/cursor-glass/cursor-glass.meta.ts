// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "glass",
    "frosted",
    "glassmorphism",
    "media player",
    "music",
    "play button",
    "hero shot"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 114,
      "min": 80,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 84,
      "out": 0
    },
    "markers": {
      "settled": 84,
      "play": 54
    },
    "beats": [
      0,
      54
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
      "key": "label",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "artist",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "elapsed",
      "type": "text",
      "maxChars": 6,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "duration",
      "type": "text",
      "maxChars": 6,
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
      "target": "widget",
      "prop": "y",
      "from": "below",
      "settledBy": 20,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom",
      "settledBy": 48,
      "easing": "ease"
    },
    {
      "target": "playButton",
      "prop": "icon",
      "settledBy": 64,
      "easing": "ease"
    },
    {
      "target": "cover",
      "prop": "scale",
      "settledBy": 76,
      "easing": "spring"
    },
    {
      "target": "blobs",
      "prop": "xy",
      "settledBy": 84,
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
      114
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (frosted glass arrow plays a track on a glass media widget, 2026-10-07)"
  },
  "job": "cursors",
  "language": "glass",
  "mechanic": [
    "press"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Now playing",
    "title": "Midnight Drive",
    "artist": "Nova Lines",
    "elapsed": "1:24",
    "duration": "3:41",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#A1A1AA",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 16,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "artist",
      "label": "Artist",
      "type": "text",
      "max": 24,
      "role": "subline"
    },
    {
      "key": "elapsed",
      "label": "Elapsed",
      "type": "text",
      "max": 6,
      "role": "label"
    },
    {
      "key": "duration",
      "label": "Duration",
      "type": "text",
      "max": 6,
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
  "name": "Glass Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-glass",
    "bundleSha256": "380d70005b13bb16c9d157b85fa7bb4c7374dfcdc1c94bbddb80d2de7370ebd2",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:07.397Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-paper.png",
        "sha256": "4ed49ff9d810233d88d89d39af846666a43d339fb7ab47ff6b291bbf1ddeb99c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-night.png",
        "sha256": "861adab631df73227a9b5cec1124ea92f7b6e695a3af4a3579e8c57badec41cb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-color.png",
        "sha256": "e6da827408fe0fa238c5c3714380c1c717a3fc9024e3be93eb6d7b4b01227e33"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-paper.png",
        "sha256": "890503b310e55b1feb0495e212e4c0f9958a250d05da2c107504641f5d44cf14"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-night.png",
        "sha256": "b186dccdd0e67710116bcd29e1fe2e3f19f6a809997c89c35f5790c6b291a734"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-color.png",
        "sha256": "488ff375edf92d353ccadff13c294a266df9e66f969bed71baf15abdf928b9a8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-paper.png",
        "sha256": "a77b9b007ef421df4b102a23921e78cb61d4fd19aa9dbb8762f0164bec3e6a9f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-night.png",
        "sha256": "742b01f9bbf6035c025f1d50ed3ff6516f6efd61502f6b4a34b9fe34a7ac25b6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-color.png",
        "sha256": "986f99bef772e73707321ea92ee849a56df447c78ba840a2ed4493a91aa46ad9"
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
          "cursor-glass--16x9",
          "cursor-glass--9x16",
          "cursor-glass--1x1"
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
            "paperNight": 20.552354600694443,
            "paperColor": 19.796875,
            "region": {
              "left": 216,
              "top": 2,
              "width": 1480,
              "height": 1049
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.64230685763889,
            "paperColor": 23.968858506944443,
            "region": {
              "left": 0,
              "top": 56,
              "width": 1080,
              "height": 1818
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 27.261149088541668,
            "paperColor": 22.32807074652778,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1040,
              "height": 1080
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
            "occupancy": 1.0610934831751633,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0610934831751633,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0610934831751633,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3419430272108845,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3419430272108845,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3419430272108845,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3594944150499708,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.364743428235492,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3594944150499708,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.6409505208333335,
        "frames": [
          12,
          84,
          113
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 80,
            "averageChannelDifference": 3.689670138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-80-frame-9.png",
                "sha256": "e1605fbbd05567ea92b851fffa6949928673bf192b3d26a24d1083f0829df788",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-80-frame-79.png",
                "sha256": "4d6dcf4cbceb011c9b8ba0c052bbb458f5a1bad0566cd0444df82227295dda74",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-80-frame-70.png",
                "sha256": "4d6dcf4cbceb011c9b8ba0c052bbb458f5a1bad0566cd0444df82227295dda74",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.6409505208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-600-frame-12.png",
                "sha256": "641a379bd38f5e446d0f993591d9b151c01886d344a52b8e0a9321a81e2e42f3",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-600-frame-84.png",
                "sha256": "4d6dcf4cbceb011c9b8ba0c052bbb458f5a1bad0566cd0444df82227295dda74",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-600-frame-528.png",
                "sha256": "4d6dcf4cbceb011c9b8ba0c052bbb458f5a1bad0566cd0444df82227295dda74",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/16x9-duration-600-frame-599.png",
                "sha256": "4d6dcf4cbceb011c9b8ba0c052bbb458f5a1bad0566cd0444df82227295dda74",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 80,
            "averageChannelDifference": 5.833116319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-80-frame-9.png",
                "sha256": "bcba22ac01d1f338ed5c7f59861046bbc944a0da59738e4dfe316b2c057b73ac",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-80-frame-79.png",
                "sha256": "da52079c037b940a4674162dfadb2fdefb857dda278ebb73dff03224540dd91c",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-80-frame-70.png",
                "sha256": "da52079c037b940a4674162dfadb2fdefb857dda278ebb73dff03224540dd91c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.742513020833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-600-frame-12.png",
                "sha256": "870f4f80cb15afe02680b24637b02cc149b22f4e69b1b76fb005427f1317c2b1",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-600-frame-84.png",
                "sha256": "da52079c037b940a4674162dfadb2fdefb857dda278ebb73dff03224540dd91c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-600-frame-528.png",
                "sha256": "da52079c037b940a4674162dfadb2fdefb857dda278ebb73dff03224540dd91c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/9x16-duration-600-frame-599.png",
                "sha256": "da52079c037b940a4674162dfadb2fdefb857dda278ebb73dff03224540dd91c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 80,
            "averageChannelDifference": 4.900607638888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-80-frame-9.png",
                "sha256": "ae61f6ad88a7d9ed4f4f7cbc9eddea343082e2c7441046b0888732cd028b4367",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-80-frame-79.png",
                "sha256": "3193ab73acd00b48c23d14659c624384bbf1e644dc7faa086fc7e6bfcd4275aa",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-80-frame-70.png",
                "sha256": "3193ab73acd00b48c23d14659c624384bbf1e644dc7faa086fc7e6bfcd4275aa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.829644097222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-600-frame-12.png",
                "sha256": "2d9b532cd45e3a6d2006e5875ffffd7432ed2ff2d5106ddd134ded5c516e1657",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-600-frame-84.png",
                "sha256": "3193ab73acd00b48c23d14659c624384bbf1e644dc7faa086fc7e6bfcd4275aa",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-600-frame-528.png",
                "sha256": "3193ab73acd00b48c23d14659c624384bbf1e644dc7faa086fc7e6bfcd4275aa",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/cursor-glass/1x1-duration-600-frame-599.png",
                "sha256": "3193ab73acd00b48c23d14659c624384bbf1e644dc7faa086fc7e6bfcd4275aa",
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
        "note": "A glass cursor clicks play on a frosted music player over blue and neutral blobs; no purple in the default."
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
      "bundleSha256": "380d70005b13bb16c9d157b85fa7bb4c7374dfcdc1c94bbddb80d2de7370ebd2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-glass/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-glass/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-glass/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 114,
      "sha256": {
        "poster": "01f352c0cd39febfb5d947408a721b4b4e0d0c45d5cd81aeefce8e8038ed9dcf",
        "loop": "443115ab84f02f03af60a89d8f21acb7bfe68c045d6c33b00424f11185c793e5",
        "detail": "3106b8c1008c835211f322c03355c605e7fc644edb9a27855bbd3c6e41ea1d2b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-glass/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-glass/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-glass/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 114,
      "sha256": {
        "poster": "c91c284f882f133e04da8ce8d690cb52e88e6dbb0c2c2c2e029bf817d7c32724",
        "loop": "3cd2b34ba75af494b41a097da452abc5f007e3cbe79d4c9d3fb9cff513cfb8b5",
        "detail": "bf9f2130aabb3b647a4e425f744c8dc10924b6d93db6e15745af54b82c012734"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-glass/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-glass/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-glass/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 114,
      "sha256": {
        "poster": "0653a5ef5cbfdd049fa33d0c81df64f3042709559b25d013326a264db0dc75e5",
        "loop": "26e9132c2e9edc48e3786782aa4b20af00b11c78e52f6416d31020855ae368a0",
        "detail": "2b092fad2b4e147842b735ac83adc1c90b7cdd9ed7a71a9d77b3066883f6b37b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/380d70005b13bb16c9d157b85fa7bb4c7374dfcdc1c94bbddb80d2de7370ebd2/index.mjs",
    "sha256": "380d70005b13bb16c9d157b85fa7bb4c7374dfcdc1c94bbddb80d2de7370ebd2",
    "bytes": 172742,
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
    "at": "2026-10-09T03:12:05.594Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
