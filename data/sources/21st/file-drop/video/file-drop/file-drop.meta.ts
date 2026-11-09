// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "drag and drop",
    "file upload",
    "drop zone",
    "progress bar",
    "upload",
    "dropzone",
    "file"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "drop": 50,
      "upload": 60,
      "done": 100
    },
    "beats": [
      0,
      50,
      60,
      100
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
      "key": "zoneTitle",
      "type": "text",
      "maxChars": 28,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "zoneHint",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "fileName",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "fileSize",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-left",
      "settledBy": 46,
      "easing": "ease"
    },
    {
      "target": "drop zone",
      "prop": "highlight",
      "settledBy": 70,
      "easing": "ease"
    },
    {
      "target": "file chip",
      "prop": "scale",
      "from": "1.05",
      "settledBy": 62,
      "easing": "spring"
    },
    {
      "target": "progress",
      "prop": "width",
      "from": "0",
      "settledBy": 98,
      "easing": "ease"
    },
    {
      "target": "doneLabel",
      "prop": "scale",
      "from": "0.6",
      "settledBy": 116,
      "easing": "spring"
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
    "sourceUrl": "21st first-party (file dragged into a drop zone uploads to done, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "drag-drop"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "zoneTitle": "Drop files to upload",
    "zoneHint": "ZIP, PNG or MP4 up to 2 GB",
    "fileName": "brand-kit.zip",
    "fileSize": "24.6 MB",
    "doneLabel": "Uploaded",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "zoneTitle",
      "label": "Zone title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "zoneHint",
      "label": "Zone hint",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "fileName",
      "label": "File name",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "fileSize",
      "label": "File size",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 14,
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
  "name": "Drop File to Upload",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "file-drop",
    "bundleSha256": "1f6934f2257755971a7a614322f9ae3d41cb6b139a3359bffaa7dc88b4a72f90",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:45:47.514Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-paper.png",
        "sha256": "cbb6e0227ab5c8494f3ba020bb1b9ed0a0c36b5786906ef873d197e68fa54c5e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-night.png",
        "sha256": "8bae6975b3b5f9802220f8e3e0fe5f5da3726ce762e6c535de12e2f8af7602f3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-color.png",
        "sha256": "a5f81b33670b1b7da9bff6b7e44bb7182d37559bd01e7be4fe2c9879ae593c6e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-paper.png",
        "sha256": "356585408f957507505a165ca1bc47692b6cbbe3b603ff3adda4fb213d1707ee"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-night.png",
        "sha256": "02491689da49fafecf6c32c105159c1535572098f875357fe44770698e3d2109"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-color.png",
        "sha256": "9dd845c3714361b208016f7e133b3c2864c3ed5bef95c869bb552532254f5ac6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-paper.png",
        "sha256": "c1160f5dd4387a9c745d9fb7d79b0f7e2abe0543e7d05ed4ce91a2d4a140d8ff"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-night.png",
        "sha256": "5bbc591a33fa9d4e247fcb2c7e1708d1830f5b95158f8c4acc061577746f289e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-color.png",
        "sha256": "6c8e5ae93b0d0a7c49d93ae28547afaefd8d124282c3bc72f1c2b493a80fd2bd"
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
          "file-drop--16x9",
          "file-drop--9x16",
          "file-drop--1x1"
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
            "paperNight": 140.04039171006946,
            "paperColor": 31.448838975694443,
            "region": {
              "left": 480,
              "top": 205,
              "width": 960,
              "height": 670
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 143.50075954861111,
            "paperColor": 30.15058051215278,
            "region": {
              "left": 65,
              "top": 326,
              "width": 951,
              "height": 1268
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 140.67792426215277,
            "paperColor": 31.209825303819443,
            "region": {
              "left": 86,
              "top": 151,
              "width": 908,
              "height": 778
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
            "occupancy": 0.43960485428739404,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.43960485428739404,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.43960485428739404,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8241688843747377,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8241688843747377,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8241688843747377,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8583400209649477,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8583400209649477,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8583400209649477,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.711154513888889,
        "frames": [
          18,
          120,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 2.7289496527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-90-frame-10.png",
                "sha256": "e64e29703dd84ad752cff73b7e30fa8adf4a6e1be44476a6cb3c3b67f2e09f2a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-90-frame-89.png",
                "sha256": "b4f2591733a301f4847833542c56ebf1d2ba6ab07436b25cce53907e0bd62413",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-90-frame-79.png",
                "sha256": "b4f2591733a301f4847833542c56ebf1d2ba6ab07436b25cce53907e0bd62413",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.711154513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-600-frame-18.png",
                "sha256": "5965fd268666db5007a7a10308d8510c0759ba116c308bc985c33693ebbfe5a5",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-600-frame-120.png",
                "sha256": "b4f2591733a301f4847833542c56ebf1d2ba6ab07436b25cce53907e0bd62413",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-600-frame-528.png",
                "sha256": "b4f2591733a301f4847833542c56ebf1d2ba6ab07436b25cce53907e0bd62413",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/16x9-duration-600-frame-599.png",
                "sha256": "b4f2591733a301f4847833542c56ebf1d2ba6ab07436b25cce53907e0bd62413",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.83908420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-90-frame-10.png",
                "sha256": "c14ed3fffe8dbaa9c1200eecb174359bccf5dd656f23d091dea63edc36ee8639",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-90-frame-89.png",
                "sha256": "9a201ec9e7538d31d58b452d190910ae37aedac08f17d85330131e870e195a6d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-90-frame-79.png",
                "sha256": "9a201ec9e7538d31d58b452d190910ae37aedac08f17d85330131e870e195a6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.731987847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-600-frame-18.png",
                "sha256": "d1df122532d81dc0cc5ee82d98ac7468d7fd54fab017b85f878e88c15d2395fb",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-600-frame-120.png",
                "sha256": "9a201ec9e7538d31d58b452d190910ae37aedac08f17d85330131e870e195a6d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-600-frame-528.png",
                "sha256": "9a201ec9e7538d31d58b452d190910ae37aedac08f17d85330131e870e195a6d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/9x16-duration-600-frame-599.png",
                "sha256": "9a201ec9e7538d31d58b452d190910ae37aedac08f17d85330131e870e195a6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.7373046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-90-frame-10.png",
                "sha256": "077c7ce88998ddfd98ae585010cf36471e1d7c63fd760979fa525297be64f626",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-90-frame-89.png",
                "sha256": "a2d78dffbb82982dc6c978ea166b14d8393b54fe3572076add646b63ab7b717f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-90-frame-79.png",
                "sha256": "a2d78dffbb82982dc6c978ea166b14d8393b54fe3572076add646b63ab7b717f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.748372395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-600-frame-18.png",
                "sha256": "7cd6abf02443c8bb14d3c6eb7b65262ea1c650a2ba10787dfd32bc48f95a9182",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-600-frame-120.png",
                "sha256": "ab32b0ad92c24265f142db76bc25f61a55a9d665b6b9f848016c41ec3f893a1a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-600-frame-528.png",
                "sha256": "a2d78dffbb82982dc6c978ea166b14d8393b54fe3572076add646b63ab7b717f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/file-drop/1x1-duration-600-frame-599.png",
                "sha256": "a2d78dffbb82982dc6c978ea166b14d8393b54fe3572076add646b63ab7b717f",
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
        "note": "The cursor drags a file into a drop zone that lights up, then the upload runs to Uploaded."
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
      "bundleSha256": "1f6934f2257755971a7a614322f9ae3d41cb6b139a3359bffaa7dc88b4a72f90",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.267Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/file-drop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-drop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-drop/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c5e4d8d09ba42be598770d1d1993a8b82d5f5fbc33ff6d2a8e9e65c703e01c57",
        "loop": "a1f5f0d4599f19c1c0c9632309fb2029b4c6a1097e022379dffdde9b0b4d1f09",
        "detail": "2b98cb12fa8adac2341981f43faf5fc8255afe28014e31231aec87feb6a0e738"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/file-drop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-drop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-drop/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "dc6b8793dd3b9bd635c1a1dc6e198f412b1d941b90f4448551906a2c493c32a9",
        "loop": "e6934c61cc4976bcb17345a8ff98711c8af33ee1f186e7c33d41b81cbbd195ab",
        "detail": "6c4b974eabad50d654a6f857b16a1727d2d9a924f848ad2c3bab1ec26a0ce9f8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/file-drop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-drop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-drop/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "876e9f30b4c45ee87a23c43dc7744da9411aadebf40d1747f8c76e3c270efb52",
        "loop": "1d03e188e1e508cc370c8e2678a3316e6202cd89478b7c8bfa469a26d4545ca3",
        "detail": "f69a5388b57bf4df83eee2f4cc57bd7f443df5d61fe14a10af9c1b0f44ae11b5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1f6934f2257755971a7a614322f9ae3d41cb6b139a3359bffaa7dc88b4a72f90/index.mjs",
    "sha256": "1f6934f2257755971a7a614322f9ae3d41cb6b139a3359bffaa7dc88b4a72f90",
    "bytes": 178504,
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
    "at": "2026-10-08T00:03:05.941Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
