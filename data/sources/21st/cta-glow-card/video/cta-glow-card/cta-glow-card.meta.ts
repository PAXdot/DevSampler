// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand/end-card",
  "tags": [
    "end card",
    "cta",
    "outro",
    "button",
    "glow",
    "url",
    "call to action"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 32,
      "out": 0
    },
    "markers": {
      "settled": 32
    },
    "beats": [
      4,
      10,
      16,
      22
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "url",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "url"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "eyebrow",
      "prop": "y",
      "from": "below",
      "settledBy": 12,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "y",
      "from": "below",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "cta",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
      "easing": "ease"
    },
    {
      "target": "url",
      "prop": "opacity",
      "settledBy": 30,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V12, V04, V02, research 2026-10-05)"
  },
  "job": "cta",
  "language": "aura",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "eyebrow": "available today",
    "title": "Ship your next launch in a day",
    "cta": "Start building",
    "url": "northwind.dev",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#08080B",
    "glow": 0.7,
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
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 40,
      "role": "url"
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
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "CTA Glow Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cta-glow-card",
    "bundleSha256": "5bea29dcb8614cdb5e58406337cbd3e519589f2d2e712a196408668c3d7fcabc",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:41.589Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-paper.png",
        "sha256": "f302af3e192315936af7aa7bdc54bef9f7b580eb124ceee5e112c8ea48b32d72"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-night.png",
        "sha256": "e82d0144ff2bd6ebb363d2e4e6552cd0f85d7c6429a2d14f0f10af4481e9b0c5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-color.png",
        "sha256": "1ab78617eb7495555751153689561bca8b37138f436c5bce0044aff1cd2642ea"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-paper.png",
        "sha256": "f4ba7db501b454fc3dc3bbba5af026c2014ff7304f3b866c512e98b4228d7f19"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-night.png",
        "sha256": "e47813b1df85f30441daf5c93c71584c31f3e0a3c622915d4f44ecb3ca265e30"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-color.png",
        "sha256": "2563cafc30a1c8a5b452ea37a099230145caeae536e4df7e4d228d6af44cd0c3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-paper.png",
        "sha256": "6e9fe09ac1b113fa551cf05ec3c78c5b796791c14151d6bb1ac5441a28f60091"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-night.png",
        "sha256": "f893fd72a99f54e16f0b5468f563194b421f5bdcbd585de9e88b25d727c7d48e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-color.png",
        "sha256": "849a638e997c7a13399338379c78228de758a2e13cad3905169dc9c23b502b54"
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
          "cta-glow-card--16x9",
          "cta-glow-card--9x16",
          "cta-glow-card--1x1"
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
            "paperNight": 38.923855251736114,
            "paperColor": 33.878499348958336,
            "region": {
              "left": 218,
              "top": 205,
              "width": 1485,
              "height": 583
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.148654513888886,
            "paperColor": 43.93443467881944,
            "region": {
              "left": 0,
              "top": 509,
              "width": 1080,
              "height": 899
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.867024739583336,
            "paperColor": 40.51527235243056,
            "region": {
              "left": 123,
              "top": 205,
              "width": 836,
              "height": 588
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
            "occupancy": 0.5797596575281349,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.591713464899849,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.494090704697517,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6621138038548754,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6635900888133033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6126582577475436,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5115454961133974,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5172610882487426,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5922004718668447,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.006510416666666,
        "frames": [
          4,
          32,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 8.006510416666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-60-frame-4.png",
                "sha256": "43839e1e5bf757ba63d0531a73ed4d604dbe7cf8514737ac3ff193ce85732f09",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-60-frame-32.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-60-frame-52.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-60-frame-59.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.006510416666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-600-frame-4.png",
                "sha256": "43839e1e5bf757ba63d0531a73ed4d604dbe7cf8514737ac3ff193ce85732f09",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-600-frame-32.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-600-frame-528.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/16x9-duration-600-frame-599.png",
                "sha256": "7fc13900aab837d0f98573d2335e7687560d25b018248c11151356e145a71879",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 12.30490451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-60-frame-4.png",
                "sha256": "2fdd0f891fa9b97f6f7d89e0580b8cf3a1041d380ad7e83a77c27b763cc33438",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-60-frame-32.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-60-frame-52.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-60-frame-59.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 12.30490451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-600-frame-4.png",
                "sha256": "2fdd0f891fa9b97f6f7d89e0580b8cf3a1041d380ad7e83a77c27b763cc33438",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-600-frame-32.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-600-frame-528.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/9x16-duration-600-frame-599.png",
                "sha256": "88b66480eb4614839305deef3256d13020594f1e0a51f191f9300ffd61454546",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 10.198893229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-60-frame-4.png",
                "sha256": "515f1ccc22743a118aedf98c6805e5f7f7d0164b3d4fbe5ddab7ce81b26aa2a0",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-60-frame-32.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-60-frame-52.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-60-frame-59.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 10.198893229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-600-frame-4.png",
                "sha256": "515f1ccc22743a118aedf98c6805e5f7f7d0164b3d4fbe5ddab7ce81b26aa2a0",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-600-frame-32.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-600-frame-528.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cta-glow-card/1x1-duration-600-frame-599.png",
                "sha256": "54dba0c14f028035dae836984b3f9fdf883873991eb281c7dc4b39bfd14b1a6f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A call to action with a button over a glow; ending."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 3,
        "compared": 3,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5bea29dcb8614cdb5e58406337cbd3e519589f2d2e712a196408668c3d7fcabc",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.946261Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cta-glow-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cta-glow-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cta-glow-card/16x9/detail.mp4",
      "bg": "#08080b",
      "posterFrame": 32,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "8116c3256735e5a082171333c64fd3a2f9906c2a43222eaa0bc7987d37ae67f7",
        "loop": "ca1f4a60b6ecf7359977c54780fdb7d182bf782d9a577dfe57a7b4689446d31c",
        "detail": "cc4b7fe5356f29491e5b29e1f87ad53ae9e2574428c22fb327c671b5f0ba7de8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cta-glow-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cta-glow-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cta-glow-card/9x16/detail.mp4",
      "bg": "#08080b",
      "posterFrame": 32,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "deb655b1dd80c1cf86d51b83e6d513eb16060ebc08f28cb1127f790d77f5fc73",
        "loop": "acc9fe9c4bb3807a312e74640c027e8c970fb5a5f4ba23f713279fcf50b69d79",
        "detail": "baecb5b704d5457301961306d068a2df8ca5f128369e5007bfc1f057c53175fd"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cta-glow-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cta-glow-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cta-glow-card/1x1/detail.mp4",
      "bg": "#08080b",
      "posterFrame": 32,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "035a5c2a94d4b57f03f8e96da2892cc6094a98c6a4c29f6683b8130c00d97b89",
        "loop": "30e075a4bb87f10d95e578032954ea32fa07bf0abca991198f1784a477ee4582",
        "detail": "9ac24fe7131a699bb6ea9a5b67d7079d841711a7cccbb41d32e82db00e467b65"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5bea29dcb8614cdb5e58406337cbd3e519589f2d2e712a196408668c3d7fcabc/index.mjs",
    "sha256": "5bea29dcb8614cdb5e58406337cbd3e519589f2d2e712a196408668c3d7fcabc",
    "bytes": 161396,
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
    "at": "2026-10-07T02:22:48.750Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
