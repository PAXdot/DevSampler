// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/language",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "cta-arrow-snap"
  ],
  "looks": [
    {
      "id": "default",
      "name": "Product research example",
      "props": {}
    },
    {
      "id": "alternate",
      "name": "Compact layout",
      "description": "Content or composition changes; palette remains owned by the brand.",
      "props": {
        "action": "Generate with 21st AI",
        "url": "21st.dev/ai"
      }
    }
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "catalog-language",
    "kinetic-poster",
    "cta",
    "cta-arrow-snap"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 72
    },
    "beats": [
      0,
      18,
      36,
      54,
      72
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
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "action",
      "type": "text",
      "role": "action"
    },
    {
      "key": "url",
      "type": "text",
      "role": "url"
    },
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "numeralsFont": "fonts.numerals",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "cta-arrow-snap",
      "prop": "transform",
      "from": "enter",
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-catalog-2026-10-06/plan.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#898B8F",
    "paper": "#0B0B10",
    "displayFont": "Space Grotesk",
    "bodyFont": "Inter",
    "numeralsFont": "IBM Plex Mono",
    "paintBackground": false,
    "motion": "default",
    "action": "Find your next component",
    "url": "EZPZ Components",
    "logo": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGZpbGxSdWxlPSJldmVub2RkIgogICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICBkPSJNMzU4LjMzMyAwQzM4MS4zNDUgMCA0MDAgMTguNjU0OCA0MDAgNDEuNjY2N1YyOTUuODMzQzQwMCAyOTguMTM1IDM5OC4xMzQgMzAwIDM5NS44MzMgMzAwSDI3MC44MzNDMjY4LjUzMiAzMDAgMjY2LjY2NyAzMDEuODY1IDI2Ni42NjcgMzA0LjE2N1YzOTUuODMzQzI2Ni42NjcgMzk4LjEzNCAyNjQuODAxIDQwMCAyNjIuNSA0MDBINDEuNjY2N0MxOC42NTQ4IDQwMCAwIDM4MS4zNDUgMCAzNTguMzMzVjMwNC43MkMwIDMwMS43OTMgMS41NDI2OSAyOTkuMDgxIDQuMDUyNzMgMjk3LjU3NUwxNTMuNzYgMjA3Ljc0N0MxNTcuMTU5IDIwNS43MDggMTU2LjAyIDIwMC42NzkgMTUyLjM3NiAyMDAuMDY1TDE1MS42MjggMjAwSDQuMTY2NjdDMS44NjU0OCAyMDAgNi43MTEwM2UtMDggMTk4LjEzNSAwIDE5NS44MzNWMTA0LjE2N0MxLjA3Mzc2ZS0wNiAxMDEuODY1IDEuODY1NDggMTAwIDQuMTY2NjcgMTAwSDE2Mi41QzE2NC44MDEgMTAwIDE2Ni42NjcgOTguMTM0NSAxNjYuNjY3IDk1LjgzMzNWNC4xNjY2N0MxNjYuNjY3IDEuODY1NDggMTY4LjUzMiAxLjAwNjY2ZS0wNyAxNzAuODMzIDBIMzU4LjMzM1pNMTcwLjgzMyAxMDBDMTY4LjUzMiAxMDAgMTY2LjY2NyAxMDEuODY1IDE2Ni42NjcgMTA0LjE2N1YyOTUuODMzQzE2Ni42NjcgMjk4LjEzNSAxNjguNTMyIDMwMCAxNzAuODMzIDMwMEgyNjIuNUMyNjQuODAxIDMwMCAyNjYuNjY3IDI5OC4xMzUgMjY2LjY2NyAyOTUuODMzVjEwNC4xNjdDMjY2LjY2NyAxMDEuODY1IDI2NC44MDEgMTAwIDI2Mi41IDEwMEgxNzAuODMzWiIKICAgIGZpbGw9IiMwMDQwRkYiCiAgLz4KPC9zdmc+Cgo="
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.accent"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "numeralsFont",
      "label": "Numerals font",
      "type": "font",
      "brand": "fonts.numerals"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "motion",
      "label": "Motion",
      "type": "select",
      "options": [
        "calm",
        "default",
        "punchy"
      ]
    },
    {
      "key": "action",
      "label": "Action",
      "type": "text",
      "max": 40,
      "role": "action"
    },
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 40,
      "role": "url"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
    }
  ],
  "name": "Call to action locks into an oversized arrow poster",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "language-kinetic-poster-cta",
    "bundleSha256": "69336a374544afda31157f6a47fae82201a9a0029eaa09ecafaf26d7863a321c",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:37:30.615Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-paper.png",
        "sha256": "473960ab05d223c555f0a9ae1703866722b6546c221a7d3fdad27cd3d57066cc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-night.png",
        "sha256": "1cfdb675c57d48bf8e2ee1a31e569cf43971002ddd2dfcc4c6be6a4bd16c1fa2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-color.png",
        "sha256": "79b72dbd7f6da934e8850e4c75278db8b043576102114d95b589497739d08d8b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-paper.png",
        "sha256": "db9784de9223d7f73fd71570b0e8350cd1f5daaf30944df2bad3d92cf4843a12"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-night.png",
        "sha256": "3d1ac491eeedaf1fb53969c819081e6527a27b441b776b961fc6442a3cf89a56"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-color.png",
        "sha256": "96f1bf69cdaf11ca5672d504319f10bd1d48b09168983f8de80736df48df10a5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-paper.png",
        "sha256": "d850e79ab0772e152e885bb4483c9c68489282e51c8cb38c9ecb3bd5afccb29e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-night.png",
        "sha256": "85bb8e43b7d2612ed09a673f4d39455813bcf401356274f8b7d148065e02dcde"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-color.png",
        "sha256": "e48c0c68e00fb4f76af7521b23ca6d12afd569d127767145375cad58f935d4a8"
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
          "language-kinetic-poster-cta--16x9",
          "language-kinetic-poster-cta--9x16",
          "language-kinetic-poster-cta--1x1"
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
            "paperNight": 53.57568359375,
            "paperColor": 17.59052191840278,
            "region": {
              "left": 154,
              "top": 97,
              "width": 1612,
              "height": 850
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 55.97930230034722,
            "paperColor": 19.128553602430557,
            "region": {
              "left": 86,
              "top": 173,
              "width": 908,
              "height": 1431
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 54.735921223958336,
            "paperColor": 18.57522243923611,
            "region": {
              "left": 86,
              "top": 97,
              "width": 908,
              "height": 822
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
            "occupancy": 0.9364840972397191,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9342806052462139,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9364840972397191,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8880592167422526,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8868180438327596,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8880592167422526,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.90688367253623,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9046771429193535,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.90688367253623,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 75.40451388888889,
        "frames": [
          10,
          72,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 71.18684895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-90-frame-10.png",
                "sha256": "751e96563bbeab66828d57572b1f04dcff6371b7e604b337218655b922c492da",
                "alphaMass": 124346
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-90-frame-72.png",
                "sha256": "7ea8fb38b15c9e47331aa580a124f59c2f63ad93179a8870ed190a4e4a93b450",
                "alphaMass": 309439
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-90-frame-79.png",
                "sha256": "57ba80c7913384286ef8dedb6f3fdcb0b6c3c1469e16efadff7ecd9729df833c",
                "alphaMass": 309439
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-90-frame-89.png",
                "sha256": "95e4b95591e58d60435107aebd4a7cf524ad708d931be4ac4a706c1d0bde1b48",
                "alphaMass": 309439
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 75.40451388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-900-frame-10.png",
                "sha256": "87f5a150af3b53a616f1d503576190e1ab41ef69c0da6806d42d3c03a0bd2b37",
                "alphaMass": 111202
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-900-frame-72.png",
                "sha256": "a970466b1ac2b3e4ae70436338b987e899dd30f7982ed5ef58ffe42b2ddc6a53",
                "alphaMass": 309439
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-900-frame-792.png",
                "sha256": "3b2b7ede4acd256cddded71cd7a744d985d26501b40075457f2c1dc278b01b00",
                "alphaMass": 309439
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/16x9-duration-900-frame-899.png",
                "sha256": "14cebc3fa5f455c1bfcec006bd053b02b0c21cf6e66e9c1e00362e8b14d0a0a3",
                "alphaMass": 309439
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 75.71853298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-90-frame-10.png",
                "sha256": "eea5eb6fe9e3f5d93ff649a91e3c02c7c208af0a65472d091dc85a8eec76c1a0",
                "alphaMass": 124331
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-90-frame-72.png",
                "sha256": "7e09d0255176afdf4a8aa6f24afe236487ea543a8de3baaed94333f4d8be6c57",
                "alphaMass": 309558
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-90-frame-79.png",
                "sha256": "367799f778d470d4b43c7c97cdac887ea629805d7b02fe3f2ec5bdcf82c9f9f9",
                "alphaMass": 309558
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-90-frame-89.png",
                "sha256": "2d3dc867cb62626e3a7b129b81b70e180780d609da78ec78e8de44d490535ecd",
                "alphaMass": 309558
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 79.70746527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-900-frame-10.png",
                "sha256": "294a2f93357ddb66f5b17aa7fb1313ddfefc54fe61faf0e963a154852957f1d3",
                "alphaMass": 111182
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-900-frame-72.png",
                "sha256": "0dd6ada46376eac089534cabec333f444f4e9502af7cab2a09ad96bec675cdcf",
                "alphaMass": 309558
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-900-frame-792.png",
                "sha256": "367799f778d470d4b43c7c97cdac887ea629805d7b02fe3f2ec5bdcf82c9f9f9",
                "alphaMass": 309558
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/9x16-duration-900-frame-899.png",
                "sha256": "2d3dc867cb62626e3a7b129b81b70e180780d609da78ec78e8de44d490535ecd",
                "alphaMass": 309558
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 70.62912326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-90-frame-10.png",
                "sha256": "487208ffde89c1feee61da407355d2e7a1b77813a0a6de624720f6fc621e6d83",
                "alphaMass": 124387
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-90-frame-72.png",
                "sha256": "0d56b000764ad8731c63f5db9dc493ec259ba99823f66b775ee24d2e3a59a61c",
                "alphaMass": 309258
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-90-frame-79.png",
                "sha256": "272a952f6757781a0f8f5f9c1eacb3977a249930bd0df73a08662812ebefa5fd",
                "alphaMass": 309258
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-90-frame-89.png",
                "sha256": "43ef96937324397081fd4766716444567af710b2db6967e7eb53775d89a8da7c",
                "alphaMass": 309258
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 74.89518229166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-900-frame-10.png",
                "sha256": "c251bc9cfeb7e26940561465bc462eaf1e83cdc17a12b6d3fb2c9d2e884ecb48",
                "alphaMass": 111239
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-900-frame-72.png",
                "sha256": "0d56b000764ad8731c63f5db9dc493ec259ba99823f66b775ee24d2e3a59a61c",
                "alphaMass": 309258
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-900-frame-792.png",
                "sha256": "89014d7297bd4a20d9cce9273ef99a5626b9ba57b4554aeef2d4137bd01be7d3",
                "alphaMass": 309258
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/language-kinetic-poster-cta/1x1-duration-900-frame-899.png",
                "sha256": "43ef96937324397081fd4766716444567af710b2db6967e7eb53775d89a8da7c",
                "alphaMass": 309258
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
        "note": "The call to action locks into an oversized brand-blue arrow poster above the URL."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 6,
        "compared": 6,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "69336a374544afda31157f6a47fae82201a9a0029eaa09ecafaf26d7863a321c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "51b2541a1debad3149c07bc42a46972feb1eeba0a45b6d37a5c92fc0f6779598",
        "loop": "8df582988bfa407bcc87e4afb35f5c8d6bd4e06f6f69cf4f8083592631ee9dbe",
        "detail": "61c350b90c3e8da68457cab02f7f6a259777d55f8683df2b5cbcd67b19c8437b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5a4e7138ece2d57b590fd07d2b8b6ab729048b519468ea7f5c66ebb8bb4e2b48",
        "loop": "d281e6c54c04d1d41115996ba4ffb18b91dd5ea66d9ff1a7347afdad46fa7d1a",
        "detail": "363063b9f69658e315c2325173405a3a8e16980663ac30358cebe13a6736fd2f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-cta/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "894322cf2d3ab470927faad040083623e28f86a14ccb5f9a999749a35aba92d0",
        "loop": "8c22779a8ee1e36ce4022c5694a1afdecb5dcfbd23cd9e49f2633cd78be4e22d",
        "detail": "098de893fd8b09368e95dd9bd5aca3995ad0cd724a8b57af6925615d2c5e3b24"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/69336a374544afda31157f6a47fae82201a9a0029eaa09ecafaf26d7863a321c/index.mjs",
    "sha256": "69336a374544afda31157f6a47fae82201a9a0029eaa09ecafaf26d7863a321c",
    "bytes": 908483,
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
    "at": "2026-10-09T03:18:42.968Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
