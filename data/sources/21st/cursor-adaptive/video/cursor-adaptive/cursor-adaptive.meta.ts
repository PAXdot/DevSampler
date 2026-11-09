// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "adaptive",
    "ipad pointer",
    "tablet",
    "toolbar",
    "tool palette",
    "hover",
    "morph",
    "canvas"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 70,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 76,
      "click": 48
    },
    "beats": [
      0,
      26,
      48,
      62
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
      "key": "title",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "tools",
      "type": "list",
      "maxChars": 8,
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
      "target": "board",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom",
      "settledBy": 68,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "shape",
      "from": "disc",
      "settledBy": 74,
      "easing": "ease"
    },
    {
      "target": "tool",
      "prop": "fill",
      "settledBy": 58,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (iPad-style pointer melting into a tool palette, 2026-10-07)"
  },
  "job": "cursors",
  "language": "glass",
  "mechanic": [
    "snap"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Launch moodboard",
    "tools": [
      "Select",
      "Pen",
      "Shapes",
      "Text",
      "Note"
    ],
    "pick": 1,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "tools",
      "label": "Tools",
      "type": "list",
      "max": 5,
      "role": "label"
    },
    {
      "key": "pick",
      "label": "Pick",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 4
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
  "name": "Adaptive Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-adaptive",
    "bundleSha256": "f66479c3bfa91057c8ee9a535edd58ca46b969bf91f05d96e9ec912200616f9b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:12.161Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-paper.png",
        "sha256": "1ded27fe503580f3bfd8a69392d387694503fbe9a7c868d0cddbcaee469aad7a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-night.png",
        "sha256": "28f9f791d5d02c47421c9f8b9f178111ada5bf1e136d1655ded8fe84474e4f5a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-color.png",
        "sha256": "d63fe990952d62dc448b9e0fa09909277b476e521805ad89549587049a3aa55e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-paper.png",
        "sha256": "b859682251d4b31603d38eed081f316a6218ccc6d2151d1bfb010e95d349bb36"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-night.png",
        "sha256": "abac2b31d6ddce7f453b4bdbd3c4371f9c85794c0f82bb61d4910c0ed6bed5c6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-color.png",
        "sha256": "091994535fe9e193edffe5e922560592a7530c9a2f7e10fec88cea13d323ab6d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-paper.png",
        "sha256": "e5baf2dafaca6307779b979ad8d8be1c2dc73e4c37df9acb7bdf02afa1ec756c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-night.png",
        "sha256": "372f6ce359fab7b55c57953c0df697d5977c17f96e26fb8afbb2228882887361"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-color.png",
        "sha256": "9978369b080c5ac5d7d8cd307061bd263c20bc1845d5b9bdd6d1275d0170fa39"
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
          "cursor-adaptive--16x9",
          "cursor-adaptive--9x16",
          "cursor-adaptive--1x1"
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
            "paperNight": 119.58341471354167,
            "paperColor": 15.586724175347221,
            "region": {
              "left": 316,
              "top": 87,
              "width": 1288,
              "height": 962
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 114.19276258680556,
            "paperColor": 15.94949001736111,
            "region": {
              "left": 15,
              "top": 247,
              "width": 1050,
              "height": 1482
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 116.81947157118056,
            "paperColor": 16.21484375,
            "region": {
              "left": 27,
              "top": 76,
              "width": 1026,
              "height": 984
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
            "occupancy": 0.7801058791572186,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8468517293748777,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7801058791572186,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9841038556626356,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0635402888007057,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9841038556626356,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1204942081999698,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2266943814562865,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1204942081999698,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.842230902777778,
        "frames": [
          11,
          76,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 70,
            "averageChannelDifference": 4.897894965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-70-frame-8.png",
                "sha256": "2f6e67cce506a11bf340a872881657fbc870ba1d2e56eaf3b2e39b95c365498a",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-70-frame-69.png",
                "sha256": "3b05c1b5218428fd663ce546d9c8d0c8426b8cd3b42fdda946e535dc563eae18",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-70-frame-61.png",
                "sha256": "4c52031ed8180ac9ac40477a0ec2a94351bccb63be136448845f85de36fb47fb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.842230902777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-600-frame-11.png",
                "sha256": "470cb6fc2b8baa59f617ca8989c3d4b3eb356d152848bcd63cfa493d6fd9dddc",
                "alphaMass": 587520
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-600-frame-76.png",
                "sha256": "c5846e7ad8c3a2afe226e121b2933a6db118d285ab0f75a457b8e64fe34debeb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-600-frame-528.png",
                "sha256": "3b05c1b5218428fd663ce546d9c8d0c8426b8cd3b42fdda946e535dc563eae18",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/16x9-duration-600-frame-599.png",
                "sha256": "3b05c1b5218428fd663ce546d9c8d0c8426b8cd3b42fdda946e535dc563eae18",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 70,
            "averageChannelDifference": 8.588758680555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-70-frame-8.png",
                "sha256": "be42a81eb85a6cceaa1044b9d66f679421c5854a6328da020cd23d5941b77c25",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-70-frame-69.png",
                "sha256": "b81b8a77ec65cc19500919ca6ef6d19a42fff86634bc99dba8fe0c9480eb2d6f",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-70-frame-61.png",
                "sha256": "b81b8a77ec65cc19500919ca6ef6d19a42fff86634bc99dba8fe0c9480eb2d6f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.513129340277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-600-frame-11.png",
                "sha256": "14a2348cac8ae1cc8f2d05ea78b7dcf1e488027483651abc00ec43263cee6cb5",
                "alphaMass": 587520
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-600-frame-76.png",
                "sha256": "b3bdcee16ec0b4e5cc6d5702d230fd61198f9e3712eff9caa51030e727f05f38",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-600-frame-528.png",
                "sha256": "b81b8a77ec65cc19500919ca6ef6d19a42fff86634bc99dba8fe0c9480eb2d6f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/9x16-duration-600-frame-599.png",
                "sha256": "b81b8a77ec65cc19500919ca6ef6d19a42fff86634bc99dba8fe0c9480eb2d6f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 70,
            "averageChannelDifference": 7.017361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-70-frame-8.png",
                "sha256": "39099194d434a8c8adfb71b9d397232def48e85d4a21dd90233b8ee7d635ee62",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-70-frame-69.png",
                "sha256": "0a5d9531230e43452c4b4f21928f1ed5f19655e02f8f2a54b2814efa0e7e79f2",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-70-frame-61.png",
                "sha256": "0a5d9531230e43452c4b4f21928f1ed5f19655e02f8f2a54b2814efa0e7e79f2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 6.956488715277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-600-frame-11.png",
                "sha256": "03d9a4c48d44a3d87314622d23c8b4e2de0565283b44a5d31692d6a36935cdb1",
                "alphaMass": 587520
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-600-frame-76.png",
                "sha256": "16987ed9b7c51abbfcab035f1c8e9c7cfffd6fa5a513fe39b0f5c9f2ee5edb52",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-600-frame-528.png",
                "sha256": "0a5d9531230e43452c4b4f21928f1ed5f19655e02f8f2a54b2814efa0e7e79f2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-adaptive/1x1-duration-600-frame-599.png",
                "sha256": "0a5d9531230e43452c4b4f21928f1ed5f19655e02f8f2a54b2814efa0e7e79f2",
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
        "note": "A soft disc pointer melts into each tool button it hovers on a moodboard palette and selects Pen."
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
      "bundleSha256": "f66479c3bfa91057c8ee9a535edd58ca46b969bf91f05d96e9ec912200616f9b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-adaptive/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-adaptive/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-adaptive/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 76,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "4c890f6cde42f1e205af12298274bff1eb4399de4e477a6df47f48dd20eb0efa",
        "loop": "08d03b19bda8467f52ffa8ad0ce99233e927e0afa428439b9de9cb0a48d75d16",
        "detail": "c3e6084f0603696f72c27621c13132c2da3d667a0e592022df1e4398ccdfd2f8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-adaptive/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-adaptive/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-adaptive/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 76,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "55d635c2b27ce4eb8979f27cd74e5d41a4b123a4922294d4934f3aecf357e896",
        "loop": "a84c5e90cd39ec61c2d335fe67d143764a7eec1474dde77191d5e182e41334c0",
        "detail": "7fff75ffc16fbc1ac3e74a4f09384a565a35b84f21247928a59062a17a1a6b7b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-adaptive/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-adaptive/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-adaptive/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 76,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "d76547674ddf53a2220f50dfa2e5077bca649aa669aa73dde7b7dc5113f45c56",
        "loop": "d0552a8c5cd094b88d04634560affe126f07ef95f472a750e5804c83ef678de9",
        "detail": "bcf09ae581aaa63cb2a489d7ec5d231936a0ba136c075f65115c5c736bd3ab1d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f66479c3bfa91057c8ee9a535edd58ca46b969bf91f05d96e9ec912200616f9b/index.mjs",
    "sha256": "f66479c3bfa91057c8ee9a535edd58ca46b969bf91f05d96e9ec912200616f9b",
    "bytes": 171078,
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
    "at": "2026-10-09T03:11:21.747Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
