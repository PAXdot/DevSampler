// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/number",
  "tags": [
    "metrics",
    "dashboard",
    "stats",
    "counter",
    "odometer",
    "analytics"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80
    },
    "beats": [
      0,
      12,
      21,
      30,
      39
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "range",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "rows",
      "type": "list",
      "lines": 5,
      "role": "value"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "rows",
      "prop": "opacity",
      "from": "0.3",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "rows",
      "prop": "count",
      "from": "0.9",
      "settledBy": 80,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V20, twitter-remotion-research)"
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
    "title": "Installs by surface",
    "range": "Last 30 days",
    "rows": [
      {
        "label": "cli",
        "value": 130733672,
        "delta": 12.4
      },
      {
        "label": "mcp",
        "value": 14470905,
        "delta": 31.8
      },
      {
        "label": "registry",
        "value": 4232855,
        "delta": 6.1
      },
      {
        "label": "templates",
        "value": 3755811,
        "delta": -2.3
      }
    ],
    "stagger": 9,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "range",
      "label": "Range",
      "type": "text",
      "max": 24,
      "role": "subline"
    },
    {
      "key": "rows",
      "label": "Rows",
      "type": "list",
      "max": 5,
      "role": "value"
    },
    {
      "key": "stagger",
      "label": "Stagger",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 20
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Odometer Rows",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "odometer-rows",
    "bundleSha256": "c0aedf6687f2453b25c5dd3d161e858c8de7e22b7bc5f54741bd10e9fa390672",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:00.941Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-paper.png",
        "sha256": "3d8b53ac9e942d0f06a7262d483dfca05ff74d6c7c439865af76ce8ee683475d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-night.png",
        "sha256": "e11ab2f3b9b8ce49e9b05473ed6122615eca6859cebe185d221e9bbb45abc82e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-color.png",
        "sha256": "60af575ba7a74742658013086646f269e2b5aa8aa60cb51b97122ea032a9a536"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-paper.png",
        "sha256": "2884c18f950ef188b87d46fc410bc1aa0f5e94d9931cd3596a521f9509ce2990"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-night.png",
        "sha256": "7e2fca6c3f7262b25582197e42198a0ea5e7dee3363fa454afd0e24b76b649b0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-color.png",
        "sha256": "920f1c160abeb6183f2be056732dd306c4f1b5315eaf5334acff93b11af92dbb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-paper.png",
        "sha256": "f5e10e5357b935ddfb42c8748dc32be441fbcb0beba98fa489c2e3ce76090c54"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-night.png",
        "sha256": "d64412aa5c54f59f0bbf67037e0aff5cebab929d2b8b3fbafe8442518ccfa41a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-color.png",
        "sha256": "ea5daa062cb58156b30bd69d5500eb44d07a77802e06d294aacbc28d4b7a4036"
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
          "odometer-rows--16x9",
          "odometer-rows--9x16",
          "odometer-rows--1x1"
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
            "paperNight": 169.20562065972223,
            "paperColor": 39.70619032118056,
            "region": {
              "left": 192,
              "top": 216,
              "width": 1536,
              "height": 648
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 156.150634765625,
            "paperColor": 41.40936957465278,
            "region": {
              "left": 108,
              "top": 398,
              "width": 864,
              "height": 1124
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 166.55536566840277,
            "paperColor": 40.77495659722222,
            "region": {
              "left": 108,
              "top": 272,
              "width": 864,
              "height": 536
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
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3827869110607207,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3827869110607207,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3827869110607207,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1722796114330507,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1722796114330507,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1722796114330507,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.7626953125,
        "frames": [
          12,
          80,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 3.9024522569444446,
            "retainedAlpha": 0.9966679928386711,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-60-frame-7.png",
                "sha256": "a47d4738c52d8adbf922b3408702c11b042c2715bd83ef1c398c2c765e209be5",
                "alphaMass": 10512
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-60-frame-59.png",
                "sha256": "c6ceb2c2162a4984fcf6fb9e52ff9d803935c5bafedff48ce2b02385cd001426",
                "alphaMass": 20108
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-60-frame-52.png",
                "sha256": "9a457182334475dc8d3a7724c3b1d9e25770f7a1e91a0d8af83520a9be239a4d",
                "alphaMass": 20041
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.7626953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-600-frame-12.png",
                "sha256": "f4901717892f7592bc6e59add9008c0ce39d4f5bc283d5c260a78f712d068944",
                "alphaMass": 13547
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-600-frame-80.png",
                "sha256": "c622a0a761c2c59ff019c84f7d52303e4b3d008515db32232a9512ee543f1043",
                "alphaMass": 20181
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-600-frame-528.png",
                "sha256": "c622a0a761c2c59ff019c84f7d52303e4b3d008515db32232a9512ee543f1043",
                "alphaMass": 20181
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/16x9-duration-600-frame-599.png",
                "sha256": "c622a0a761c2c59ff019c84f7d52303e4b3d008515db32232a9512ee543f1043",
                "alphaMass": 20181
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 9.753363715277779,
            "retainedAlpha": 0.9969331288752583,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-60-frame-7.png",
                "sha256": "f4164a9f7a1fdc96ab9c54227b0ee2b6cd436bf4295856e5b9b376f1697875a2",
                "alphaMass": 10728
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-60-frame-59.png",
                "sha256": "a169d1ce9b1c48ca9e5e6e6b6b381d9c00362630e9d4b0a82cf50a42c130fc97",
                "alphaMass": 29998
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-60-frame-52.png",
                "sha256": "9d47b82556023d4246230b90090b7d137be7a85a3533ea2065ddf3b1be049629",
                "alphaMass": 29906
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.38357204861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-600-frame-12.png",
                "sha256": "5380a4e2389a1da829e6c95a6b89de878046a97c143c44f7e84b596f320e51c2",
                "alphaMass": 15060
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-600-frame-80.png",
                "sha256": "b0142f0fbaa227fe7e0548c41f119bdaed3897ee67311243599a7bd68ae68eb8",
                "alphaMass": 30094
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-600-frame-528.png",
                "sha256": "b0142f0fbaa227fe7e0548c41f119bdaed3897ee67311243599a7bd68ae68eb8",
                "alphaMass": 30094
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/9x16-duration-600-frame-599.png",
                "sha256": "b0142f0fbaa227fe7e0548c41f119bdaed3897ee67311243599a7bd68ae68eb8",
                "alphaMass": 30094
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 7.519965277777778,
            "retainedAlpha": 0.9953053892215569,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-60-frame-7.png",
                "sha256": "ff4c31a556bcfaebf627ab05b66f1190dcfe5f4285a600a68d2e8fb309eefc28",
                "alphaMass": 9025
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-60-frame-59.png",
                "sha256": "715def4970c60d7418b4f69ee687e662fdf9597df2174f22b0bfa01cbe2709c4",
                "alphaMass": 20875
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-60-frame-52.png",
                "sha256": "9bacf77658953f7994e2e7e6aafcb067c98b7f5cc1f945571c23e6e0ef26fde4",
                "alphaMass": 20777
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.177625868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-600-frame-12.png",
                "sha256": "a3a8420e395c581347548ca54504e500867a36304837875216abdf6c253fdd6b",
                "alphaMass": 12281
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-600-frame-80.png",
                "sha256": "b08f5a961aeeba09d2ec8ba54c37247025a72ec56058519887143708087a458a",
                "alphaMass": 20963
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-600-frame-528.png",
                "sha256": "b08f5a961aeeba09d2ec8ba54c37247025a72ec56058519887143708087a458a",
                "alphaMass": 20963
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/odometer-rows/1x1-duration-600-frame-599.png",
                "sha256": "b08f5a961aeeba09d2ec8ba54c37247025a72ec56058519887143708087a458a",
                "alphaMass": 20963
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
        "note": "Rows of install counts roll up like odometers with deltas."
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
      "bundleSha256": "c0aedf6687f2453b25c5dd3d161e858c8de7e22b7bc5f54741bd10e9fa390672",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.945021Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/odometer-rows/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/odometer-rows/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/odometer-rows/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "04a2e82a4c82e34e772bcd6b124f71403af988b83c12eda2eedcb6dfbd249fbf",
        "loop": "cb0946871d690eaf60345d93faf95223bd5aac1430587c0ef349855cd0b9187b",
        "detail": "cdb14c76c88fb5d0ee39a33626a1c776c277db612f528a50e1386cffaa6fa8be"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/odometer-rows/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/odometer-rows/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/odometer-rows/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "6e34733778bb99763c270ef3c3bd02f0924019588b2faccfa17ac3e3a7720b48",
        "loop": "472b43f5daa79e262d3fde4e963e0ff740a55e19556e27d125444031edf11d73",
        "detail": "fcdabdf6d015e71f84b464634dea4314676c4e5674d1cffa1a1e81e61cfcb3fc"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/odometer-rows/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/odometer-rows/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/odometer-rows/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "0869816a4e7b1945ac3f3a1cf49b10fadeda6bd5e137175424d5ee3049da0000",
        "loop": "2e0214b9d0d9c26d9cea85c3c042dba143c631279e865129b63ee41f6c8add85",
        "detail": "f8425f0826edf95ec3e493a0406391866f5f40a8cd98b883c65ad54810a1c393"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c0aedf6687f2453b25c5dd3d161e858c8de7e22b7bc5f54741bd10e9fa390672/index.mjs",
    "sha256": "c0aedf6687f2453b25c5dd3d161e858c8de7e22b7bc5f54741bd10e9fa390672",
    "bytes": 161930,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:22:44.622Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
