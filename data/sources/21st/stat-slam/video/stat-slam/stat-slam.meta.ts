// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/number",
  "tags": [
    "stats",
    "numbers",
    "social proof",
    "counter",
    "metrics",
    "hype"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 140,
      "min": 45,
      "max": 450
    },
    "stretch": "hold",
    "phases": {
      "in": 94,
      "out": 0
    },
    "markers": {
      "settled": 94
    },
    "beats": [
      0,
      38,
      76
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
      "key": "stats",
      "type": "list",
      "lines": 5,
      "role": "value"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "stats",
      "prop": "count",
      "from": "0.4",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "flash",
      "prop": "opacity",
      "from": "0.35",
      "settledBy": 4,
      "easing": "linear"
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
      140
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V03, twitter-remotion-research)"
  },
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "stats": [
      {
        "value": 47000,
        "prefix": "",
        "suffix": "",
        "label": "builders on the waitlist",
        "decimals": 0
      },
      {
        "value": 14287,
        "prefix": "",
        "suffix": "",
        "label": "components shipped",
        "decimals": 0
      },
      {
        "value": 99.9,
        "prefix": "",
        "suffix": "%",
        "label": "uptime this quarter",
        "decimals": 1
      }
    ],
    "beat": 38,
    "align": "cycle",
    "glow": true,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "stats",
      "label": "Stats",
      "type": "list",
      "max": 5,
      "role": "value"
    },
    {
      "key": "beat",
      "label": "Beat",
      "type": "number",
      "step": 1,
      "min": 24,
      "max": 90
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "cycle",
        "center",
        "left"
      ]
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "boolean"
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
  "name": "Stat Slam",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "stat-slam",
    "bundleSha256": "70231630b6004be83b3b942fc353ad30c7a6b671fb5f0cab81992e6052b7a2b3",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:43.551Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-paper.png",
        "sha256": "0dd68d1a02d9c740e68f3feb350424400fdc391b31f2928f36ad068929ca6184"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-night.png",
        "sha256": "d64acd82e88f5908b8929fd02914e01b03a0465902cac9d85c66ee57b39f0d12"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-color.png",
        "sha256": "4b370e3f5b4ff4d8228738715b5279df626423f95c7c3af86d20f5e090ff0ff6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-paper.png",
        "sha256": "b947581e924cb0a6e3a1f817fa7c31b8b18774be46eb447f40b74f9be4a3b889"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-night.png",
        "sha256": "99526e9bbe3a267eee12a896091a142099b801a655d366d72d3463671bf38b2b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-color.png",
        "sha256": "22ee445e1d2237616fbeef6337301d2f9199aa2daef3eeecd54951cc6d946cbd"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-paper.png",
        "sha256": "78990ecbc3a2276151966643b8bc650737fb5f9748c8a6da3cbacafc9a64ddb5"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-night.png",
        "sha256": "83369a8db39793305a7fcebb48ed4be30cc64f6a8efda1be76c8a8c148875ee5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-color.png",
        "sha256": "176e704a3e95e48ef9b0ae743565f4be5341652b0019c6821ec746d4e453ce0e"
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
          "stat-slam--16x9",
          "stat-slam--9x16",
          "stat-slam--1x1"
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
            "paperNight": 55.19618055555556,
            "paperColor": 32.632242838541664,
            "region": {
              "left": 423,
              "top": 293,
              "width": 1074,
              "height": 494
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.865641276041664,
            "paperColor": 32.74717881944444,
            "region": {
              "left": 151,
              "top": 229,
              "width": 772,
              "height": 1441
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 77.27962239583333,
            "paperColor": 39.055338541666664,
            "region": {
              "left": 190,
              "top": 293,
              "width": 710,
              "height": 494
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
            "occupancy": 0.36261659370538346,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36261659370538346,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36261659370538346,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6953821587791497,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6953821587791497,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7603222937837688,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.42556617411482206,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4249659397366629,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3625415644081136,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.80392795138889,
        "frames": [
          14,
          94,
          139
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 8.21115451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-45-frame-5.png",
                "sha256": "620cc0d454d798e5cba4683cd04cad241149184026d5522baf08d8ac18c916fa",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-45-frame-44.png",
                "sha256": "2f70b2b63eda138a15188f5070e142a4af805bf0e906dc80180db7624aa64c92",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-45-frame-39.png",
                "sha256": "008024fe3c1a905df844a3933b2b993585a6233b1f0bc4f0dd0b6cf8d0345621",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 450,
            "averageChannelDifference": 8.80392795138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-450-frame-14.png",
                "sha256": "2dd348860e57e0058207d0aa8fdd13285929b58d82bd7b079b6865e63267877f",
                "alphaMass": 587520
              },
              {
                "frame": 94,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-450-frame-94.png",
                "sha256": "5cb681cf0ce82c2eb1914844c21a3fce5a1086b77050202be3fbe62c7ee3f3d1",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-450-frame-396.png",
                "sha256": "e93379b09e1e420dd9863a46bcdb1544ceab0769e74071f65f95e05e2faa6985",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/16x9-duration-450-frame-449.png",
                "sha256": "909e40fac35333ee9543e0f69cddcba44062a959e0b8d628b0fb6c0f8a06ecd1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 8.318033854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-45-frame-5.png",
                "sha256": "feb4cc82ad6a06385c5fc4a6aacd9d3fc11924a72dfc76b63aec8c0c64f07e9c",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-45-frame-44.png",
                "sha256": "2f58033fbee8ee5c6e6118bff52e8038c7c71912fee44b7c27aa810d594524be",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-45-frame-39.png",
                "sha256": "5bf7f4f717786ebbfa6ac97e4eaa248b257e028dd9982233c0305e38f1bca941",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 450,
            "averageChannelDifference": 8.163411458333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-450-frame-14.png",
                "sha256": "0cd2b01e3077c03540ee4d4a213c89f89a5dcb03b3658ef89f8845a632079ce3",
                "alphaMass": 587520
              },
              {
                "frame": 94,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-450-frame-94.png",
                "sha256": "7521c9d87c0da1ccc49450eef555ae392d6b67154ebdb634a8af521a71dfaeb4",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-450-frame-396.png",
                "sha256": "c95245b64f8ba3f99af58cf4d7d8b392dddc2de4f57f156296d90d0be010565b",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/9x16-duration-450-frame-449.png",
                "sha256": "36159e0b5a3d89147fdb4ac037bf01bc4516b7e84a6554d45735d1bb61204ce8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 10.471245659722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-45-frame-5.png",
                "sha256": "b79a80d05ae644ac391daea5fa8691276f3b1818e07c7521c7cdc2210ad12ca5",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-45-frame-44.png",
                "sha256": "dd2b230052e7f23bf8f59b6a28fa9a7589b54ffd3be6680600604696d1ca7c43",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-45-frame-39.png",
                "sha256": "faac3f42493584b3ee8ec00d3ca2b029f09c18d5fede61f842febcf754734bd1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 450,
            "averageChannelDifference": 9.980143229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-450-frame-14.png",
                "sha256": "6a725bc94b6a99b82284c37d534e476b4775ef5b1f0e8b7a6dae2d5732201a1e",
                "alphaMass": 587520
              },
              {
                "frame": 94,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-450-frame-94.png",
                "sha256": "4e029308190ac709190bc535b1c7b9aa04e55f639b498a38cdd3dcc08f643abc",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-450-frame-396.png",
                "sha256": "31c8f3f6e3264aed836d29d0bed61fd00ba3585a727ada6215c7dbc1f531f20c",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/stat-slam/1x1-duration-450-frame-449.png",
                "sha256": "d329aae1e744a1a3d4b9d43a3937520760a7a34099f465cdf491f62aa88b1192",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Stats slam in one after another and land on the final one."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 11,
        "compared": 11,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "70231630b6004be83b3b942fc353ad30c7a6b671fb5f0cab81992e6052b7a2b3",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.938471Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/stat-slam/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stat-slam/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stat-slam/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 94,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "2fa88d88c905b749aacc4a5d8cca6f1fbb3ad88656204c2098e993c758935e06",
        "loop": "d66650f999757e4485dbd9cda383d61b773032bd79d92646cd9794b237236f10",
        "detail": "3c971bcfee48b9ff8d7e7f255b49a9f2be827a140afd3d88b06f674a51337cd1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/stat-slam/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stat-slam/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stat-slam/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 94,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "0028ae8b1bb5577b0f3a6956d63631cf4593fe8da32ae61b5f26b870a6d44d35",
        "loop": "58d8bb17d6b625663ef28a4204a4bf499d3492cc9fa06c4bb743b674cef75b5e",
        "detail": "9413f4c825d22546f6c81b399c195c4aa65d0fbd875d25cd0a52d5f885ad4e50"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/stat-slam/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stat-slam/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stat-slam/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 94,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "7198e808ccce83363f958eb3ba4c711bcf1d9acd7754bb06ee439c76d012b74d",
        "loop": "9a1da9da275181412b547be75f2fc459e674ac48cc69191d7309d8d019bb1559",
        "detail": "eab32f92ca125765fd52ca4fd9cf73a5b01984faccc6b9a5d163fc4d5ff9fe1c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/70231630b6004be83b3b942fc353ad30c7a6b671fb5f0cab81992e6052b7a2b3/index.mjs",
    "sha256": "70231630b6004be83b3b942fc353ad30c7a6b671fb5f0cab81992e6052b7a2b3",
    "bytes": 160624,
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
    "at": "2026-10-07T02:21:40.176Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
