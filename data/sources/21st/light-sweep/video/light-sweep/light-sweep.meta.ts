// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "overlay-fx",
  "category": "overlay/light",
  "tags": [
    "light sweep",
    "sheen",
    "shine",
    "glint",
    "beat",
    "overlay",
    "hype"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 60,
      "min": 16,
      "max": 1800
    },
    "stretch": "hold",
    "phases": {
      "in": 6,
      "out": 0
    },
    "markers": {
      "settled": 16,
      "sweep": 6
    },
    "beats": [
      6,
      42
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
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "none",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [],
  "brand": {
    "color": "colors.text"
  },
  "motionBeats": [
    {
      "target": "band",
      "prop": "x",
      "from": "left",
      "settledBy": 16,
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
      "frame": 11
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V03, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "aura",
  "mechanic": [
    "flow"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "angle": 20,
    "width": 0.2,
    "strength": 0.22,
    "sweepFrames": 10,
    "every": 36,
    "color": "#FFFFFF"
  },
  "fields": [
    {
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": -45,
      "max": 45
    },
    {
      "key": "width",
      "label": "Width",
      "type": "number",
      "min": 0.05,
      "max": 0.5
    },
    {
      "key": "strength",
      "label": "Strength",
      "type": "number",
      "min": 0.03,
      "max": 0.6
    },
    {
      "key": "sweepFrames",
      "label": "Sweep frames",
      "type": "number",
      "step": 1,
      "min": 6,
      "max": 40
    },
    {
      "key": "every",
      "label": "Every",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 240
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    }
  ],
  "name": "Light Sweep",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "light-sweep",
    "bundleSha256": "42dfbe4ce6018ddcb9a35d91d85b4ec8a408320256a7bbd5d975453d725a33b2",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:20.616Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-paper.png",
        "sha256": "392203723390b8b6f07ab21ffb70deb1abb218d9a6a4191121130c7943ac5d9e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-night.png",
        "sha256": "ec400a7090f237ebbf1cb07e1424a6833534a742866966b35f582e4f0cd9f15c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-color.png",
        "sha256": "9c44577e845d5c5eb25dedb70e7206752f72d581fc5ae0bd1c0ee15732cb6a56"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-paper.png",
        "sha256": "c061ad80c26c4f24c38440e4a942eed9979b84f4c93039ab72f7c775d80b7e87"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-night.png",
        "sha256": "b7c20ae74c7b0ab98fc65f531b5c97983f49851ef9d813c62f20cb13dce1d666"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-color.png",
        "sha256": "99605f3ebc03be87a6a6727a6f5ea2ddac05571042594678bd30f1f6767fdbed"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-paper.png",
        "sha256": "b8644f3551e18a245ff8d2b37c05cea19221cc20fae689b92659a443b9cae675"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-night.png",
        "sha256": "7cc5defb0e753f881e075e93a34698861d86d99761ae508fc0dd77797ead57a8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-color.png",
        "sha256": "c26161b4c27382a81006168244190e4c2da2ed961fad3a71612da8802f7b18f2"
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
          "light-sweep--16x9",
          "light-sweep--9x16",
          "light-sweep--1x1"
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
            "paperNight": 125.85696072048611,
            "paperColor": 30.74343532986111,
            "region": {
              "left": 785,
              "top": 6,
              "width": 697,
              "height": 1068
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 65.72330729166667,
            "paperColor": 16.88009982638889,
            "region": {
              "left": 232,
              "top": 12,
              "width": 812,
              "height": 1896
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 96.088134765625,
            "paperColor": 24.73000759548611,
            "region": {
              "left": 367,
              "top": 7,
              "width": 542,
              "height": 1067
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
            "occupancy": 0.5087688045897373,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5087688045897373,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5087688045897373,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0522303057025282,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0522303057025282,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0522303057025282,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7026800489285794,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7026800489285794,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7026800489285794,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 41.574978298611114,
        "frames": [
          1,
          11,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 16,
            "averageChannelDifference": 41.574978298611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-16-frame-1.png",
                "sha256": "0f7d365e49d084a3ff5f3bb90274bbb6a7b296b988fec5c73ec2d183d5167a84",
                "alphaMass": 282
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-16-frame-11.png",
                "sha256": "126add6382ed9a9eceff9d457112a2ec48d9ddf78ad67fbe6a3643faebe2b2b0",
                "alphaMass": 11908
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-16-frame-14.png",
                "sha256": "126add6382ed9a9eceff9d457112a2ec48d9ddf78ad67fbe6a3643faebe2b2b0",
                "alphaMass": 11908
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-16-frame-15.png",
                "sha256": "126add6382ed9a9eceff9d457112a2ec48d9ddf78ad67fbe6a3643faebe2b2b0",
                "alphaMass": 11908
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 41.574978298611114,
            "retainedAlpha": 7.489308176100629,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-1800-frame-1.png",
                "sha256": "0f7d365e49d084a3ff5f3bb90274bbb6a7b296b988fec5c73ec2d183d5167a84",
                "alphaMass": 282
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-1800-frame-11.png",
                "sha256": "126add6382ed9a9eceff9d457112a2ec48d9ddf78ad67fbe6a3643faebe2b2b0",
                "alphaMass": 11908
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-1800-frame-1584.png",
                "sha256": "fc3e89e04bc84ddfbea67b83a9a6b1383d58088497401d34189b5c0c2f3037a0",
                "alphaMass": 1590
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/16x9-duration-1800-frame-1799.png",
                "sha256": "126add6382ed9a9eceff9d457112a2ec48d9ddf78ad67fbe6a3643faebe2b2b0",
                "alphaMass": 11908
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 16,
            "averageChannelDifference": 38.96299913194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-16-frame-1.png",
                "sha256": "6730d5ea267c8d08839d35c3517bf25a1d0206e999695a2063c770d95ff58ba8",
                "alphaMass": 264
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-16-frame-11.png",
                "sha256": "2bdce849336b5ebe64a6895bd2ca0b137fab71d23687e237c2a3a60feafbe700",
                "alphaMass": 11959
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-16-frame-14.png",
                "sha256": "2bdce849336b5ebe64a6895bd2ca0b137fab71d23687e237c2a3a60feafbe700",
                "alphaMass": 11959
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-16-frame-15.png",
                "sha256": "2bdce849336b5ebe64a6895bd2ca0b137fab71d23687e237c2a3a60feafbe700",
                "alphaMass": 11959
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 38.96299913194444,
            "retainedAlpha": 7.427950310559006,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-1800-frame-1.png",
                "sha256": "6730d5ea267c8d08839d35c3517bf25a1d0206e999695a2063c770d95ff58ba8",
                "alphaMass": 264
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-1800-frame-11.png",
                "sha256": "2bdce849336b5ebe64a6895bd2ca0b137fab71d23687e237c2a3a60feafbe700",
                "alphaMass": 11959
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-1800-frame-1584.png",
                "sha256": "fcd96598975af3a11e3cc283635f42c4846a1c31c24f033b48073e25c09b4262",
                "alphaMass": 1610
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/9x16-duration-1800-frame-1799.png",
                "sha256": "2bdce849336b5ebe64a6895bd2ca0b137fab71d23687e237c2a3a60feafbe700",
                "alphaMass": 11959
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 16,
            "averageChannelDifference": 38.11273871527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-16-frame-1.png",
                "sha256": "edc355d1fb8e1637d1332eb925e443d936327f6f2091321d5f3c0897aa40e9a8",
                "alphaMass": 274
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-16-frame-11.png",
                "sha256": "a3af4c33527a23507c631f5a3e6925ad33e086fbd2b2475dda9e6bbf6861c53a",
                "alphaMass": 11936
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-16-frame-14.png",
                "sha256": "a3af4c33527a23507c631f5a3e6925ad33e086fbd2b2475dda9e6bbf6861c53a",
                "alphaMass": 11936
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-16-frame-15.png",
                "sha256": "a3af4c33527a23507c631f5a3e6925ad33e086fbd2b2475dda9e6bbf6861c53a",
                "alphaMass": 11936
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 38.11273871527778,
            "retainedAlpha": 7.372452130945028,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-1800-frame-1.png",
                "sha256": "edc355d1fb8e1637d1332eb925e443d936327f6f2091321d5f3c0897aa40e9a8",
                "alphaMass": 274
              },
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-1800-frame-11.png",
                "sha256": "a3af4c33527a23507c631f5a3e6925ad33e086fbd2b2475dda9e6bbf6861c53a",
                "alphaMass": 11936
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-1800-frame-1584.png",
                "sha256": "d3347a6a01a79f996f13c7ceb9b6937cfc3198566560f06b3468476333dc8e9d",
                "alphaMass": 1619
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/light-sweep/1x1-duration-1800-frame-1799.png",
                "sha256": "a3af4c33527a23507c631f5a3e6925ad33e086fbd2b2475dda9e6bbf6861c53a",
                "alphaMass": 11936
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A single light streak sweeps across; overlay/background accent."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "42dfbe4ce6018ddcb9a35d91d85b4ec8a408320256a7bbd5d975453d725a33b2",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.927423Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/light-sweep/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/light-sweep/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/light-sweep/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 11,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "8a25d323c9f09e485d78242c2f14395bfbe98fbc049bd4a8e8aca83bcda21bc6",
        "loop": "172c2d4a5fee779e695e97d46d439f67bd711e440054b804ffdda9d0098c78e3",
        "detail": "0658d3b93b8f61b819c3d11c12592beb707472b8215d532cf0c863ea56b79b1e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/light-sweep/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/light-sweep/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/light-sweep/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 11,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "63db8851340ac0ad775b11000ff9d901e90fd3128c427b5b431e1322642d458a",
        "loop": "dd1385cfa8e1868c69eda7d73cbd8179dd4bd7f345209c9f5dc02c524b27fcd9",
        "detail": "31ac6aaa645d519f2efb58fa6820e8618d2c1d01747483eede46db057caa4826"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/light-sweep/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/light-sweep/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/light-sweep/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 11,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "4d4f81d98fcfa7fec1a91dfa669e8b8b90a3c5eb8867f5e28015caf77e700cd5",
        "loop": "a13e68d687899ed9a8bed8296abdab8f90eef1b6f4c8ed5181fad5266416ce2f",
        "detail": "a19fb52bc175dac785e9a5f48368ccd4164ec4ebbeb7493fa89b3c7c94a5149a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/42dfbe4ce6018ddcb9a35d91d85b4ec8a408320256a7bbd5d975453d725a33b2/index.mjs",
    "sha256": "42dfbe4ce6018ddcb9a35d91d85b4ec8a408320256a7bbd5d975453d725a33b2",
    "bytes": 50421,
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
    "at": "2026-10-07T02:20:06.275Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
