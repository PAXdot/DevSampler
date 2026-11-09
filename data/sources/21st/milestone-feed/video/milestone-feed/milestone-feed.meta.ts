// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/milestone",
  "tags": [
    "milestone",
    "stars",
    "followers",
    "feed",
    "counter",
    "celebration",
    "users"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 90,
      "max": 900
    },
    "stretch": "scale",
    "phases": {
      "in": 186,
      "out": 0
    },
    "markers": {
      "settled": 186
    },
    "beats": [
      12,
      186
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
      "key": "project",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "verb",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "unit",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "target",
      "type": "number",
      "role": "value"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "feed",
      "prop": "scroll",
      "settledBy": 186,
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
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V08, twitter-remotion-research)"
  },
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "project": "acme/ui",
    "verb": "starred",
    "unit": "stars",
    "target": 1000,
    "seed": 21,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "background": "#09090B",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "project",
      "label": "Project",
      "type": "text",
      "max": 32,
      "role": "name"
    },
    {
      "key": "verb",
      "label": "Verb",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "unit",
      "label": "Unit",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "target",
      "label": "Target",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 1000000,
      "role": "value"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 9999
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
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Milestone Feed",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "milestone-feed",
    "bundleSha256": "62d2f8ac634d32fb3f6e3bc843017b5917f093e8f2e7e5c28f2787cfff0a0adb",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:31.202Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-paper.png",
        "sha256": "ea0da7782fb46872ae51a6ff14dd7704fd95a726ca9bf3f50af827f4d1a8f13b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-night.png",
        "sha256": "164bbe3da4197e204cbe009f34c538d79ebcdb04668206da45ee2e983e0eb74c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-color.png",
        "sha256": "1217d9e27b455d50ae7c75a7784bd3363715c7a9d6db4bcf6a640bd05d2fc59f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-paper.png",
        "sha256": "9dacf05f50057759318b947045cb995852f12b1af5cd2cca1f88c3b579ad7e0f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-night.png",
        "sha256": "4d00662c315ee85755f526d83adb8eab24f05721162a35157e47065f83b198e3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-color.png",
        "sha256": "31c2db2c240db7227ae54ce1679eab9e0b8022912d2fbd6db813868e495558ae"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-paper.png",
        "sha256": "15e3320e869bd070c16dd33108513df20442c555389221c5fb9e965e70c4dc34"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-night.png",
        "sha256": "c1e0cdf7d2dd844134a102830870b7f1f58c2c279ce582b02ef326fbb3ec3527"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-color.png",
        "sha256": "d1bd7b4a5709efe4bbb8f37522bf9077d1bec1c831a8537e9ba6fcfceddbc260"
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
          "milestone-feed--16x9",
          "milestone-feed--9x16",
          "milestone-feed--1x1"
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
            "paperNight": 127.644775390625,
            "paperColor": 41.622395833333336,
            "region": {
              "left": 269,
              "top": 0,
              "width": 1382,
              "height": 853
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 132.07671440972223,
            "paperColor": 42.739990234375,
            "region": {
              "left": 76,
              "top": 0,
              "width": 928,
              "height": 1680
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 124.43964301215277,
            "paperColor": 41.650553385416664,
            "region": {
              "left": 151,
              "top": 0,
              "width": 778,
              "height": 853
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
            "occupancy": 0.8057002861587024,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8057002861587024,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8057002861587024,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0649154209008709,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.065549676660788,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0623783978612023,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8063480593426215,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8063480593426215,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8063480593426215,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.242296006944445,
        "frames": [
          28,
          186,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.354926215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-90-frame-10.png",
                "sha256": "57169e9e9cdf9203b250ffaea6db4bc3b2cea334d93be5a9326c1c85c741eb6f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-90-frame-89.png",
                "sha256": "2fde67b5c33e5f90b24093d7d9c820c2ad4f54ac2cc723b727edf146231aae1c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-90-frame-79.png",
                "sha256": "2fde67b5c33e5f90b24093d7d9c820c2ad4f54ac2cc723b727edf146231aae1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.1805555555555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-900-frame-108.png",
                "sha256": "3bfc95b6b850aef58cccd83881b5a74ff202e46c2239d9806cae60d237545c88",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-900-frame-186.png",
                "sha256": "ce138d61084bdd1e60b923f0476aee969d7bec92f4ac09328921b1e4128fd196",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-900-frame-792.png",
                "sha256": "738809ed9d2497d381d49d79d3a9fd02ef6a6f316474bdcfb749103605e4ee30",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/16x9-duration-900-frame-899.png",
                "sha256": "2fde67b5c33e5f90b24093d7d9c820c2ad4f54ac2cc723b727edf146231aae1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.052300347222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-90-frame-10.png",
                "sha256": "fcaa74fe1845347226de45d1884ab63ef72e818a35045895cc9f4cb8ad494e86",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-90-frame-89.png",
                "sha256": "4fc4fbccf074ee76c65ad93ecdbc8cb05fdb435f97c10419f05e0c7fe4630ec0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-90-frame-79.png",
                "sha256": "4fc4fbccf074ee76c65ad93ecdbc8cb05fdb435f97c10419f05e0c7fe4630ec0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.2177734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-900-frame-108.png",
                "sha256": "87d6ab3dcd65387f40a357f31385953d074bf0caa686274d363b67c90f33c10c",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-900-frame-186.png",
                "sha256": "24fb4f9646f9e1f74b5eb3c8cca8009ae1feff670557d880f89c143ea7968bf1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-900-frame-792.png",
                "sha256": "01ae83d27f26371ff0c1938c18f155384e4d55ebbcab7b3f6996337d023ba233",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/9x16-duration-900-frame-899.png",
                "sha256": "4fc4fbccf074ee76c65ad93ecdbc8cb05fdb435f97c10419f05e0c7fe4630ec0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.997287326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-90-frame-10.png",
                "sha256": "2e29ad3f416fa692e34a564fd517abf25f85499ea2356435a22fe138f0b8f332",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-90-frame-89.png",
                "sha256": "0ccbc643d467542ca30bcf6b124713da0a3ed9bf7b3c533124244318a8506033",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-90-frame-79.png",
                "sha256": "0ccbc643d467542ca30bcf6b124713da0a3ed9bf7b3c533124244318a8506033",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.5355902777777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-900-frame-108.png",
                "sha256": "babb90a1b19b1717ed64556d319e04792782eb7168b9914d4cd78a7d2b3e7e5c",
                "alphaMass": 587520
              },
              {
                "frame": 186,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-900-frame-186.png",
                "sha256": "2a7e3b56d4167d9ad72dbb63ace6c6680ece63a1ace271f79636eb96e9243187",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-900-frame-792.png",
                "sha256": "f12aa122c871267961e10864a9dad1cee7bd20398da7545eb9e9086053b6ee0e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/milestone-feed/1x1-duration-900-frame-899.png",
                "sha256": "0ccbc643d467542ca30bcf6b124713da0a3ed9bf7b3c533124244318a8506033",
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
        "note": "A repo star feed scrolls to a 1,000-star milestone."
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
      "bundleSha256": "62d2f8ac634d32fb3f6e3bc843017b5917f093e8f2e7e5c28f2787cfff0a0adb",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.959289Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/milestone-feed/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/milestone-feed/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/milestone-feed/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 186,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "332bbe5d2cdebb26f72e61ae434aeb34a3dc11e0c7b01cb27e7e88befe131227",
        "loop": "0739f3212a58ba49c422ae9b609a5731820f742455a0228670e5feb3e8219738",
        "detail": "c285d7853170f5729319fe7db24fd44fda7836a62d1eccfdfed8979641bcbe57"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/milestone-feed/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/milestone-feed/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/milestone-feed/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 186,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "9f1a5d39f826721c6781be66b6317c6fbc014cebacc94e277e1aebf75cfc4e49",
        "loop": "b7ca68c5a8d06601531d75e3d289068c64d36c0d880e2006efb893af32fe46de",
        "detail": "f228a7c7b9d5e3e8707fc67991253b65938a2770207301fb246d1e7d4ac9fab4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/milestone-feed/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/milestone-feed/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/milestone-feed/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 186,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "1b2f574599128b1a6f3b3f984b01fcd387a466464c933a8d278b66cb0b8e65b4",
        "loop": "08790c7c84b1b5e1cf5c9bd85060c015caa9731899273136fb06a487631c4bc3",
        "detail": "1458e5c326eb00f052229e2c2e77143558260741be5d548053ceae225faebeeb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/62d2f8ac634d32fb3f6e3bc843017b5917f093e8f2e7e5c28f2787cfff0a0adb/index.mjs",
    "sha256": "62d2f8ac634d32fb3f6e3bc843017b5917f093e8f2e7e5c28f2787cfff0a0adb",
    "bytes": 162418,
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
    "at": "2026-10-07T02:25:32.244Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
