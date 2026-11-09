// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "marquee",
    "drag select",
    "multi-select",
    "files",
    "file grid",
    "selection bar",
    "file manager",
    "bulk actions"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 132,
      "min": 78,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104,
      "grab": 18,
      "release": 62,
      "bar": 68
    },
    "beats": [
      0,
      18,
      62,
      68
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
      "key": "fileNames",
      "type": "list",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "selectionLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "actions",
      "type": "list",
      "maxChars": 10,
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
      "target": "cursor",
      "prop": "path",
      "from": "left",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "marquee",
      "prop": "size",
      "from": "0",
      "settledBy": 62,
      "easing": "ease"
    },
    {
      "target": "card badges",
      "prop": "scale",
      "from": "0",
      "settledBy": 74,
      "easing": "spring"
    },
    {
      "target": "selection bar",
      "prop": "y",
      "from": "below",
      "settledBy": 94,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "settledBy": 94,
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
      132
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (drag box selects files in a grid, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "marquee-select"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "fileNames": [
      "hero.png",
      "teaser.mp4",
      "logo.svg",
      "brief.pdf",
      "metrics.csv",
      "assets.zip"
    ],
    "selectionLabel": "selected",
    "actions": [
      "Move",
      "Share",
      "Delete"
    ],
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "fileNames",
      "label": "File names",
      "type": "list",
      "max": 6,
      "role": "label"
    },
    {
      "key": "selectionLabel",
      "label": "Selection label",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "actions",
      "label": "Actions",
      "type": "list",
      "max": 3,
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
  "name": "Marquee Select Files",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "marquee-select",
    "bundleSha256": "bffd1d05de78918e4754d0b766df441556bd60bc26d97e33655f97faf69939ea",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:16.557Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-paper.png",
        "sha256": "48f22f943a8951d0f8b146cf7ad461064f2c5968bca161017faf96d932b0274b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-night.png",
        "sha256": "8ba46ea56f517dbd850767cb2294f7b083237fe6c95b9d6043e2e035ef8bb413"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-color.png",
        "sha256": "3d0fcab97c659793706e43748c269fe02dc39cd8a2cef4828872fd08c83b5ad2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-paper.png",
        "sha256": "fdbf0f37fd83919846e599836864f6f8739861bcfae7c49dee2a1709ae60f282"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-night.png",
        "sha256": "1549cd74e8f60568bc5a017a8813559bd8fc119944cfa71c1c736e9aaa686cea"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-color.png",
        "sha256": "f1bcc1673098002c11446ec7dd28c7956fd0f06150f34a9e7fa5bc7ad960fe01"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-paper.png",
        "sha256": "5437aee2942375019c480653c6e365db87f2a870b64d4d34a492579be70baf4a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-night.png",
        "sha256": "969b16e1230eeef7da9933a7726c3c2eef4fe53aa2617085418493879d6445ce"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-color.png",
        "sha256": "398b0f9c0e665045f0293f327618754a69f531791f4efac3c5a7b7d8bf0acc0b"
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
          "marquee-select--16x9",
          "marquee-select--9x16",
          "marquee-select--1x1"
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
            "paperNight": 82.69037543402777,
            "paperColor": 20.55050998263889,
            "region": {
              "left": 297,
              "top": 144,
              "width": 1326,
              "height": 848
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 95.61208767361111,
            "paperColor": 20.87893337673611,
            "region": {
              "left": 5,
              "top": 75,
              "width": 1070,
              "height": 1825
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 78.50935872395833,
            "paperColor": 22.990559895833332,
            "region": {
              "left": 28,
              "top": 192,
              "width": 1024,
              "height": 754
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
            "occupancy": 0.7138657932308727,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7685211430251114,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7138657932308727,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2576635592508612,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.334636783597184,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2576635592508612,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8603424222912761,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9381347417796567,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8603424222912761,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.699435763888889,
        "frames": [
          15,
          104,
          131
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 78,
            "averageChannelDifference": 3.699435763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-78-frame-9.png",
                "sha256": "2b67096d3b93e2c239118889a125c45902f133578ee09ff1838ca61da3568fa3",
                "alphaMass": 587520
              },
              {
                "frame": 77,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-78-frame-77.png",
                "sha256": "81ca1ce09692b5af9dcb1fde46054124e7cc906e316bbf550de6fb0ee94a9074",
                "alphaMass": 587520
              },
              {
                "frame": 68,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-78-frame-68.png",
                "sha256": "81ca1ce09692b5af9dcb1fde46054124e7cc906e316bbf550de6fb0ee94a9074",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.699435763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-600-frame-15.png",
                "sha256": "2b67096d3b93e2c239118889a125c45902f133578ee09ff1838ca61da3568fa3",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-600-frame-104.png",
                "sha256": "a82e18deb01f1170c91aae4991edc818ead652e1582d34c83914670a52f38b7b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-600-frame-528.png",
                "sha256": "a82e18deb01f1170c91aae4991edc818ead652e1582d34c83914670a52f38b7b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/16x9-duration-600-frame-599.png",
                "sha256": "81ca1ce09692b5af9dcb1fde46054124e7cc906e316bbf550de6fb0ee94a9074",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 78,
            "averageChannelDifference": 9.768229166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-78-frame-9.png",
                "sha256": "c8c7363cfe86cb5f5d9115e63e989237857482feae96bc10b792d78429ab7a48",
                "alphaMass": 587520
              },
              {
                "frame": 77,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-78-frame-77.png",
                "sha256": "ca9a6a92f8dbdcaebca11e9d50208fda937c4b4fe04f017b5ade9de9bee74cad",
                "alphaMass": 587520
              },
              {
                "frame": 68,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-78-frame-68.png",
                "sha256": "ca9a6a92f8dbdcaebca11e9d50208fda937c4b4fe04f017b5ade9de9bee74cad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.768229166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-600-frame-15.png",
                "sha256": "c8c7363cfe86cb5f5d9115e63e989237857482feae96bc10b792d78429ab7a48",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-600-frame-104.png",
                "sha256": "ca9a6a92f8dbdcaebca11e9d50208fda937c4b4fe04f017b5ade9de9bee74cad",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-600-frame-528.png",
                "sha256": "ca9a6a92f8dbdcaebca11e9d50208fda937c4b4fe04f017b5ade9de9bee74cad",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/9x16-duration-600-frame-599.png",
                "sha256": "ca9a6a92f8dbdcaebca11e9d50208fda937c4b4fe04f017b5ade9de9bee74cad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 78,
            "averageChannelDifference": 5.129123263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-78-frame-9.png",
                "sha256": "91fa3d866800e908958306f296b579098ef5b954e6d72ca6b13a08798f0cec28",
                "alphaMass": 587520
              },
              {
                "frame": 77,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-78-frame-77.png",
                "sha256": "ab18397c2e3e68d5c3a4f186828771cfd628c7809c2f81536dfc002d7ec0952d",
                "alphaMass": 587520
              },
              {
                "frame": 68,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-78-frame-68.png",
                "sha256": "ab18397c2e3e68d5c3a4f186828771cfd628c7809c2f81536dfc002d7ec0952d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.129123263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-600-frame-15.png",
                "sha256": "91fa3d866800e908958306f296b579098ef5b954e6d72ca6b13a08798f0cec28",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-600-frame-104.png",
                "sha256": "ab18397c2e3e68d5c3a4f186828771cfd628c7809c2f81536dfc002d7ec0952d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-600-frame-528.png",
                "sha256": "ab18397c2e3e68d5c3a4f186828771cfd628c7809c2f81536dfc002d7ec0952d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/marquee-select/1x1-duration-600-frame-599.png",
                "sha256": "ab18397c2e3e68d5c3a4f186828771cfd628c7809c2f81536dfc002d7ec0952d",
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
        "note": "A cursor drags a marquee over file tiles and selects four, then a Move, Share, Delete bar appears; tiles in brand blue."
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
      "bundleSha256": "bffd1d05de78918e4754d0b766df441556bd60bc26d97e33655f97faf69939ea",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/marquee-select/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/marquee-select/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/marquee-select/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "745424f0111c300f07799cf842485d49ee8626c43e59523def69d9f37589aaaa",
        "loop": "ab721cbcd8731e13f152f68a3ebb69f030591e066d5ba2253f1e0ad301533bb2",
        "detail": "5fd285cad2ac1f4d3dfc65256bdb83d08800e382e3d4ed05c17e0e422dc0eca4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/marquee-select/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/marquee-select/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/marquee-select/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "400a2a310805a6d0aaba9f0e18c5dd2261d3c3884eb986264ec54bd6bf4761d7",
        "loop": "ffab0314271ff4d957b723590970ccbbce19b20e52e44f6b47d9af88c666195a",
        "detail": "79ad06831f043224766b97cd2ec35ccf35c036dcfefba2492fda1fc81711a78d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/marquee-select/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/marquee-select/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/marquee-select/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "058fd7e7a6f8c556179b8afdef61a7d611d30add2843abb97fb95d8c17eff63b",
        "loop": "a0856ee26cea4967f431e23eb99fca6c09bd3e0e46d2a9aa2c240deeab665569",
        "detail": "528ef7cf66fd1e7765cd7f740c0381e6e45c3545d72c269a238a5e37f8b73cc3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bffd1d05de78918e4754d0b766df441556bd60bc26d97e33655f97faf69939ea/index.mjs",
    "sha256": "bffd1d05de78918e4754d0b766df441556bd60bc26d97e33655f97faf69939ea",
    "bytes": 179980,
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
    "at": "2026-10-09T03:37:15.084Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
