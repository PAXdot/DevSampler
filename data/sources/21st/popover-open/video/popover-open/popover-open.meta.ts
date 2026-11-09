// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/menu",
  "tags": [
    "popover",
    "menu",
    "dropdown",
    "versions",
    "hover",
    "cursor",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 56,
      "out": 0
    },
    "markers": {
      "settled": 60,
      "open": 16,
      "pick": 48
    },
    "beats": [
      14,
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
      "key": "anchorLabel",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "items",
      "type": "list",
      "role": "body"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "popover",
      "prop": "scaleY",
      "from": "0.9",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "rows",
      "prop": "opacity",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "xy",
      "settledBy": 46,
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V04 version popover, V15 sources popover)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "anchorLabel": "Version history",
    "items": [
      {
        "text": "v6 Yearly toggle",
        "meta": "now"
      },
      {
        "text": "v5 Savings badges",
        "meta": "4m"
      },
      {
        "text": "v4 Calmer hero",
        "meta": "12m"
      },
      {
        "text": "v3 Three tiers",
        "meta": "1h"
      },
      {
        "text": "v2 First draft",
        "meta": "2h"
      }
    ],
    "activeIndex": 2,
    "cursor": true,
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "anchorLabel",
      "label": "Anchor label",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "body"
    },
    {
      "key": "activeIndex",
      "label": "Active index",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 5
    },
    {
      "key": "cursor",
      "label": "Cursor",
      "type": "boolean"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Popover Open",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "popover-open",
    "bundleSha256": "5a2bc757f9848116751bcbbe2e80bfb80c9fb5d68c5078de1c36ebfb47b9edf0",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:06:44.591Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-paper.png",
        "sha256": "7c901cac50d6e7b73dc545555d090f6a7275256ab0f70b09d4bc3931a8150959"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-night.png",
        "sha256": "372d76f89b70de4bc63a50cce3e3ecefd0290727a1213b74a94a329d94221a4f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-color.png",
        "sha256": "ffbdd59669c4790341f24bf1f0aef37e0d650016bc239e00d50786fd5a017f80"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-paper.png",
        "sha256": "32d2b8f6367544cef02b9128eb62a4fddff577742ab707f525e1cc93c2b96d11"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-night.png",
        "sha256": "26902a91d72740625acf44ace35c455c7f3b4201a87e7aea4d405e510908b502"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-color.png",
        "sha256": "26c4a34b632a78f8d53148bcf35d56c08529269a909c34f45bd5cc08dfd22c3d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-paper.png",
        "sha256": "e228ac5c105095aa9b82c01cf2188789de898021604c94c8c77a34e7813769e3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-night.png",
        "sha256": "4d7a2d82daeef35386765ac3deb13de3c2badb80f56a0e34e4cd06bfa6a749d3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-color.png",
        "sha256": "081dcf145e8986bb2e931eb0d0f0dcbb7bcfa9db5cdaf911d5595b626b1382b7"
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
          "popover-open--16x9",
          "popover-open--1x1",
          "popover-open--9x16"
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
            "paperNight": 130.24110243055554,
            "paperColor": 10.809461805555555,
            "region": {
              "left": 345,
              "top": 218,
              "width": 1230,
              "height": 708
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 126.15310329861111,
            "paperColor": 10.886311848958334,
            "region": {
              "left": 49,
              "top": 218,
              "width": 982,
              "height": 708
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 131.02851019965277,
            "paperColor": 12.900553385416666,
            "region": {
              "left": 8,
              "top": 350,
              "width": 1064,
              "height": 1282
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
            "occupancy": 0.549342036197195,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5951888857394811,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.549342036197195,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7717021422194851,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8447703498408967,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7717021422194851,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8731883796471265,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9322794189692339,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8731883796471265,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 71.61306423611111,
        "frames": [
          9,
          60,
          104
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 71.25054253472223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-60-frame-7.png",
                "sha256": "a13b12ebf502aa041aeae36bc126a104e7ab028fcfbc380afd66012ecb558166",
                "alphaMass": 35962
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-60-frame-59.png",
                "sha256": "898aa453a252ddd5ab68c6241b4ab2fa38744fca051428fec3737bfa4c8b28bf",
                "alphaMass": 194920
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-60-frame-52.png",
                "sha256": "b4be4b524fd982c1cf4ce8ddd5451401b8faa0cf62e27dedcf39608576a89a84",
                "alphaMass": 194920
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 71.61306423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-600-frame-9.png",
                "sha256": "263aaa6a167fac04e8ce427afe259213a818aa5f1108907e6ee39d2bc8ff5e16",
                "alphaMass": 35738
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-600-frame-60.png",
                "sha256": "5d225d58e1e07c04fb6adce84dd8a82d885e409e5854db7351f8c7290d23fa0e",
                "alphaMass": 194920
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-600-frame-528.png",
                "sha256": "80b84024463b40656a9bcbd2f8829e1edccb3d25a1f884fc7bdb1063b89f7952",
                "alphaMass": 194920
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/16x9-duration-600-frame-599.png",
                "sha256": "80b84024463b40656a9bcbd2f8829e1edccb3d25a1f884fc7bdb1063b89f7952",
                "alphaMass": 194920
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 96.21799045138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-60-frame-7.png",
                "sha256": "08e3348d58d1b139663234b8ccbed621a7f845cffd2705e1a16979fe23141e58",
                "alphaMass": 50018
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-60-frame-59.png",
                "sha256": "9d62d6cea0ec68579ad8720217322de2b860257d55c9b019d9ea57edd85865ec",
                "alphaMass": 270984
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-60-frame-52.png",
                "sha256": "4e896e10c100bd3aa6e92bc9e756fa0b0a6d0ce157fe563c29361d853a6693df",
                "alphaMass": 270984
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 96.46538628472223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-600-frame-9.png",
                "sha256": "94a756c003d8c10c99205f9c9e32c9beb79c64cb6ef2c1fdc2346aa31f2bef27",
                "alphaMass": 49641
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-600-frame-60.png",
                "sha256": "6850b56360cc51a075a271b8a93de014fac7278c151bf7b1c0bc006f55ba3d53",
                "alphaMass": 270984
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-600-frame-528.png",
                "sha256": "e18e98e1e8d37854701249dc5a7674ce34691c99b3bd198e0d7f452caa8295f7",
                "alphaMass": 270984
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/1x1-duration-600-frame-599.png",
                "sha256": "e18e98e1e8d37854701249dc5a7674ce34691c99b3bd198e0d7f452caa8295f7",
                "alphaMass": 270984
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 122.55870225694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-60-frame-7.png",
                "sha256": "8f1921ba1a34ea6f4cc4c66dab83a7c73eb88d90781e188c976f3ba8d2957563",
                "alphaMass": 44719
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-60-frame-59.png",
                "sha256": "b0b92fa0b78a840870513b8a6cbcaa4ad43f9221d5687df66d79dac777596527",
                "alphaMass": 320909
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-60-frame-52.png",
                "sha256": "c4421ca4a7f8b66b20c5e1997d97eee68b6f2e522b2f461517f626ab1cd3dfbc",
                "alphaMass": 320909
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 122.69802517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-600-frame-9.png",
                "sha256": "a925b288dbbad38e374d6be03853f28e4d7e893a0c8cad8a027a869bc467bc45",
                "alphaMass": 44535
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-600-frame-60.png",
                "sha256": "62f519e18effa4b5c373bf87e7a9d1574a166b4c6ba03e946966436b8ff20183",
                "alphaMass": 320909
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-600-frame-528.png",
                "sha256": "d3ce768136793845ccdf8b88274d95b51e5d87812210f62e7b2576a6823ea24c",
                "alphaMass": 320909
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/popover-open/9x16-duration-600-frame-599.png",
                "sha256": "d3ce768136793845ccdf8b88274d95b51e5d87812210f62e7b2576a6823ea24c",
                "alphaMass": 320909
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
        "note": "A version-history popover opens and a version is picked."
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
      "bundleSha256": "5a2bc757f9848116751bcbbe2e80bfb80c9fb5d68c5078de1c36ebfb47b9edf0",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.022380Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/popover-open/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/popover-open/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/popover-open/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "a8a569cd9004f394e1ad6bd95749aa1a85a3a86e5490eaabdbfd9909056bd7c1",
        "loop": "232e2ef83b2d9de00ddd669b91949c1e0b47f3d2b0bf3c12bbaccda6d2fc5f26",
        "detail": "726943d9c35f56d4ff1f5f9244941d2602f69fe87f1aa191b16bbc130bec49e0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/popover-open/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/popover-open/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/popover-open/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "3599741e7705b18ee4db251fe45a544ef292452e6c5867e8c1935f9e74464375",
        "loop": "bf8df4e1eeb7d7b092f557b7b431106eda37d3d8940423344b56c1715214136c",
        "detail": "e0f76db3450fc8d851e9d86b834b5a4d5f9add74cbaf884376b406b9b4856c8c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/popover-open/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/popover-open/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/popover-open/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "fdd56380aa684100d04c1bced1243db7a89562bfadbccc24b6bfa6b2f0648a9b",
        "loop": "61f33eeb9f0f7fd3bba2164ddf77c36a9fb140ab0a816cbf723cd948f826f851",
        "detail": "c1598f1f5de767184db0c89ebfa366e8e1e6620426cc6e3ffa9ead4f5a9881a6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5a2bc757f9848116751bcbbe2e80bfb80c9fb5d68c5078de1c36ebfb47b9edf0/index.mjs",
    "sha256": "5a2bc757f9848116751bcbbe2e80bfb80c9fb5d68c5078de1c36ebfb47b9edf0",
    "bytes": 172023,
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
    "at": "2026-10-07T02:33:44.636Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
