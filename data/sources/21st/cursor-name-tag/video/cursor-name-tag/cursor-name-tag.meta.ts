// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "name tag",
    "multiplayer",
    "collaboration",
    "presence",
    "teammate",
    "checklist",
    "realtime"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 132,
      "min": 84,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104,
      "join": 14,
      "check1": 38,
      "check2": 58,
      "check3": 78
    },
    "beats": [
      0,
      14,
      38,
      58,
      78
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
      "maxChars": 28,
      "lines": 2,
      "role": "title"
    },
    {
      "key": "items",
      "type": "list",
      "maxChars": 28,
      "lines": 2,
      "role": "body"
    },
    {
      "key": "teammate",
      "type": "text",
      "maxChars": 12,
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
      "target": "doc",
      "prop": "rise",
      "from": "below",
      "settledBy": 14,
      "easing": "ease"
    },
    {
      "target": "avatar",
      "prop": "scale",
      "from": "0",
      "settledBy": 16,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "avatar",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "nameTag",
      "prop": "scale",
      "settledBy": 90,
      "easing": "ease"
    },
    {
      "target": "checkbox",
      "prop": "fill",
      "settledBy": 92,
      "easing": "ease"
    },
    {
      "target": "progress",
      "prop": "width",
      "from": "0",
      "settledBy": 92,
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
    "sourceUrl": "21st first-party (a teammate's name-tag cursor checks off a shared checklist, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "presence"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Launch checklist",
    "items": [
      "Record the demo",
      "Write release notes",
      "Update pricing page",
      "Post the launch"
    ],
    "teammate": "Maya",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#F97316",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "title"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 4,
      "role": "body"
    },
    {
      "key": "teammate",
      "label": "Teammate",
      "type": "text",
      "max": 12,
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
  "name": "Name Tag Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-name-tag",
    "bundleSha256": "7307eb26c7aa86ce9b9871275559bb21c9708034ede4099f089f29026c52d61b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:40.817Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-paper.png",
        "sha256": "5ead521788c53e12363094a710dbaa09b888ea932e3db9002bdaef5e173ec9bd"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-night.png",
        "sha256": "d0ae778ea355ee989c3e7d6c319cdbdc196ac5293e160959fa7d96fb91f38992"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-color.png",
        "sha256": "8748f1ded6af79f724f88069c5f6256e286debb5c86f5c15500645e625888dd4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-paper.png",
        "sha256": "6931ae8942d189e6441b8aabbb8fbbd3ba11a4440fbe67a37bda3f1c3cbbb4a8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-night.png",
        "sha256": "544e75f3c59a99468580b426dc1f69bb4e225c6dfbeb382f44400671af007b57"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-color.png",
        "sha256": "95623625a3c5d190e6e14983efce3a583df4ccb50dd5fd96860ad4d849e5b353"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-paper.png",
        "sha256": "af1a24755ca3eeae7621f3654ecd954fdb7f9d0170633cb7c2517c48d779a918"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-night.png",
        "sha256": "5b857c956444e3ee972d6c533dc2ec126c1c672fc6a1e7c461d8ff3a0eccd340"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-color.png",
        "sha256": "3e364c412828ab00aae8055a7bb67633d4bca75d8bfc8cd4319d348a20fb3237"
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
          "cursor-name-tag--16x9",
          "cursor-name-tag--9x16",
          "cursor-name-tag--1x1"
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
            "paperNight": 117.93961588541667,
            "paperColor": 19.756103515625,
            "region": {
              "left": 434,
              "top": 132,
              "width": 1052,
              "height": 872
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 122.04408094618056,
            "paperColor": 28.585584852430557,
            "region": {
              "left": 16,
              "top": 240,
              "width": 1048,
              "height": 1496
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 117.39748806423611,
            "paperColor": 19.795762803819443,
            "region": {
              "left": 25,
              "top": 132,
              "width": 1030,
              "height": 872
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
            "occupancy": 0.566800472761121,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6269727541222252,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.566800472761121,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.995061170687411,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0715423000475912,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9539712393445035,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9855654081477129,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0913087228489935,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9855654081477129,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.3907335069444446,
        "frames": [
          15,
          104,
          131
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 84,
            "averageChannelDifference": 2.472873263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-84-frame-10.png",
                "sha256": "773dde0f9bed04e37ade4b39707d671c00f7a702476792bf0ee6576502d637a7",
                "alphaMass": 587520
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-84-frame-83.png",
                "sha256": "c1de67799c55db6c5864d878a50346063b2fff3a88b64caa09663b283d79e6d1",
                "alphaMass": 587520
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-84-frame-73.png",
                "sha256": "c1de67799c55db6c5864d878a50346063b2fff3a88b64caa09663b283d79e6d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.3907335069444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-600-frame-15.png",
                "sha256": "6470e4ab99ff1c4b11a6a2a1d9aa3849636dbd59a05c2dbac377265380e28dc5",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-600-frame-104.png",
                "sha256": "c1de67799c55db6c5864d878a50346063b2fff3a88b64caa09663b283d79e6d1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-600-frame-528.png",
                "sha256": "7bf8e149b8d416153b7476e0c2e4c088b1c1d576170b9719499128d791a3dc82",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/16x9-duration-600-frame-599.png",
                "sha256": "c1de67799c55db6c5864d878a50346063b2fff3a88b64caa09663b283d79e6d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 84,
            "averageChannelDifference": 4.594075520833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-84-frame-10.png",
                "sha256": "295055a7eed8a4be5cc2c0bae56d9899fab950e1cb56903d5c76e6703cfe80fe",
                "alphaMass": 587520
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-84-frame-83.png",
                "sha256": "3714cc5645ae8502e57a4f76f648b38726c47806a318edcab6bba3e568d73f4f",
                "alphaMass": 587520
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-84-frame-73.png",
                "sha256": "ae74261c40b1b285ee7b26f4a78af2cca5339cfe534338e0e75522b9e1a26dc3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.469943576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-600-frame-15.png",
                "sha256": "ef330f2062014ea083d78850897fc029458dd381dd55c2515e64a68b5f61c95d",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-600-frame-104.png",
                "sha256": "3714cc5645ae8502e57a4f76f648b38726c47806a318edcab6bba3e568d73f4f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-600-frame-528.png",
                "sha256": "ae74261c40b1b285ee7b26f4a78af2cca5339cfe534338e0e75522b9e1a26dc3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/9x16-duration-600-frame-599.png",
                "sha256": "3714cc5645ae8502e57a4f76f648b38726c47806a318edcab6bba3e568d73f4f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 84,
            "averageChannelDifference": 4.362847222222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-84-frame-10.png",
                "sha256": "26566dc66e0801b048a96bf85a8221b7dabea57ed9f0be6026c5d1938e7ec162",
                "alphaMass": 587520
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-84-frame-83.png",
                "sha256": "49d10ff098a4464c16bca40736d9c96e027fe9932daba2093fd2e97f472cde2d",
                "alphaMass": 587520
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-84-frame-73.png",
                "sha256": "49d10ff098a4464c16bca40736d9c96e027fe9932daba2093fd2e97f472cde2d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.2236328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-600-frame-15.png",
                "sha256": "38f589ba5b55f14f70ee8b46b61c6e7fe6f7e5cfb1989741e7d7ac590989f294",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-600-frame-104.png",
                "sha256": "49d10ff098a4464c16bca40736d9c96e027fe9932daba2093fd2e97f472cde2d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-600-frame-528.png",
                "sha256": "49d10ff098a4464c16bca40736d9c96e027fe9932daba2093fd2e97f472cde2d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/cursor-name-tag/1x1-duration-600-frame-599.png",
                "sha256": "49d10ff098a4464c16bca40736d9c96e027fe9932daba2093fd2e97f472cde2d",
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
        "note": "A teammate's colored cursor with a name pill checks off items in a shared launch checklist."
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
      "bundleSha256": "7307eb26c7aa86ce9b9871275559bb21c9708034ede4099f089f29026c52d61b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-name-tag/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-name-tag/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-name-tag/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "f8078b70f71ae55f258398271b7e200ce2ebc2e108603313e240cb57c162e4c4",
        "loop": "292a6c0b4f77fb735a0e08f2d9f80f33efc14564a413331f511d07c06387376d",
        "detail": "1316d4db906dfbf3c66f4a6db3e27c8323d7c4c4e2dcefab2ebe26a3ae075df3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-name-tag/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-name-tag/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-name-tag/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "6d2fb0b565db3cede30860a1d1ea49f680b2699023727d4892f93ab3db0845d8",
        "loop": "f52e6b88069c43efca9e13e3dd2c80b0b231ff211cff1b8b5a3d642c3f9ed987",
        "detail": "232edfac0a910b8ac717c5881fe52fcb99a9c4e3ef916192da09413223a555b8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-name-tag/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-name-tag/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-name-tag/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 132,
      "sha256": {
        "poster": "45774e224a1aa0c40b07b12d960e7e5cddbe016393c51b2c0c04d1d9eb1d692a",
        "loop": "f030ddf62950d87d80a9c568b0fa2581c9e14a098804ca2c71565869bbf8df45",
        "detail": "091d490005e22f051c75c9d33afefd0e653146563b0f624875decff9f563f05d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7307eb26c7aa86ce9b9871275559bb21c9708034ede4099f089f29026c52d61b/index.mjs",
    "sha256": "7307eb26c7aa86ce9b9871275559bb21c9708034ede4099f089f29026c52d61b",
    "bytes": 176427,
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
    "at": "2026-10-09T03:12:18.033Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
