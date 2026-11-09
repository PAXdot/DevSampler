// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "background/mesh",
  "tags": [
    "background",
    "mesh",
    "gradient",
    "blobs",
    "ambient",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 60,
      "max": 1800
    },
    "stretch": "loop",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      60,
      120,
      180
    ],
    "loop": true
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [],
  "brand": {
    "c1": "colors.primary",
    "c2": "colors.secondary",
    "background": "colors.background",
    "c3": "colors.primary",
    "c4": "colors.secondary"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 60
    },
    "hover": [
      0,
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (Canvas2D mesh gradient)"
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
    "c1": "#3D63FF",
    "c2": "#898B8F",
    "c3": "#0EA5E9",
    "c4": "#52555C",
    "background": "#07070A",
    "intensity": 0.7,
    "cycles": 1,
    "grain": true
  },
  "fields": [
    {
      "key": "c1",
      "label": "C 1",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "c2",
      "label": "C 2",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "c3",
      "label": "C 3",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "c4",
      "label": "C 4",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "cycles",
      "label": "Cycles",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Gradient Mesh",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "gradient-mesh",
    "bundleSha256": "2d8e7f05a9dff71b319ec4b6cc0c6beb015edb73171e7352f9b4c7ace0e51549",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:50.203Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-paper.png",
        "sha256": "003a0aab312d18c000136e56efa8eaad9e7ac076d9895972f5e1651ca33524ad"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-night.png",
        "sha256": "6419873975fb073042d6611af52ec63e9a916464c3f0d810f72f248bfcbd80a9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-color.png",
        "sha256": "dcef208cddd73050c20d7612fbb4f72414b537ab502fbf950eb0cee8cd3acaea"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-paper.png",
        "sha256": "1dda1a4a81c454523da3a679e8ad27ce2d9e2f3cdd2127aa12d72d5f38540f09"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-night.png",
        "sha256": "58e4bb4ff73a288fcf3c77baa189c1d29dfb502f139ed30a2193dc40adc4653c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-color.png",
        "sha256": "0e8064d6a738e1ba59c663be8041e5c0ce9d6c1b3d9ff86974ec06e1d44c0fe2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-paper.png",
        "sha256": "ae2547746b84903ea41cc992e574e20f4c976dd6d838d6777f31241d96a21600"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-night.png",
        "sha256": "02b82d8ea963f3d6169552cc94a7992e54aa4c7cc49cecab42ab172ea9f97578"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-color.png",
        "sha256": "40988de8484bc70fb56feeb14fb0c86509174ac9bd48a210cd050d415e2feba5"
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
          "gradient-mesh--16x9",
          "gradient-mesh--9x16",
          "gradient-mesh--1x1"
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
            "paperNight": 41.242431640625,
            "paperColor": 22.360270182291668,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.199951171875,
            "paperColor": 19.60519748263889,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.637966579861114,
            "paperColor": 21.471516927083332,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 23.785264756944443,
        "frames": [
          28,
          108,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 23.785264756944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-60-frame-7.png",
                "sha256": "01edb0bb505412a4f1729a0447d6bc56aa8337d79fa41c63cfb14bdecc912d10",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-60-frame-27.png",
                "sha256": "6237eb6141d8d501fff830c3c49641f31289bfb64d9a31a0c4ce10228e863fcc",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-60-frame-52.png",
                "sha256": "c9f3094abc7527726a304c1915206f4e2e28507294b360173157c051d3287307",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-60-frame-59.png",
                "sha256": "b9a3febd29c89f276f4290db05eb0603e7f61f2105e499889135042805c1fbbe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 23.87250434027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-1800-frame-216.png",
                "sha256": "b9133ff841d77d6745ca52d78304ff5069a1d41f533ff740adb18c3c2d9ccc7a",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-1800-frame-810.png",
                "sha256": "6237eb6141d8d501fff830c3c49641f31289bfb64d9a31a0c4ce10228e863fcc",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-1800-frame-1584.png",
                "sha256": "e400db017e308ae842d22a2e1188935dd83a73920c22854183a16985166063c5",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/16x9-duration-1800-frame-1799.png",
                "sha256": "38ceea2fd6b1a0b5fe2bddf8ff8acac1390c7e3f8e9723c3b83bfb5aa275006d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 24.84516059027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-60-frame-7.png",
                "sha256": "08af6bb6bf38bb4d165bee61227416231c6e675f1f7d5658d07138587cbd0c78",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-60-frame-27.png",
                "sha256": "bb34bda80eee2bca2f4090f5e1ab00e869859fe3a84abf876ab05c744cd4c757",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-60-frame-52.png",
                "sha256": "ff5be76f7022114a1ffc3edd7c2d512a5cc30afa6f33e7017032a231d7915036",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-60-frame-59.png",
                "sha256": "24588fa45c7b7f14bf7acc54f6c2cf7dd135df328088ddce318d876e80a9b8d6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 24.743489583333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-1800-frame-216.png",
                "sha256": "b807dc3a6214aaea76332d1bc905dff0e7e937fa847414051e7158024068ef0a",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-1800-frame-810.png",
                "sha256": "bb34bda80eee2bca2f4090f5e1ab00e869859fe3a84abf876ab05c744cd4c757",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-1800-frame-1584.png",
                "sha256": "ad5ccfb2a2719da3a23a2950fe578f4806c4c13479b6056901abb6708ced6302",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/9x16-duration-1800-frame-1799.png",
                "sha256": "918c06a9cddd3127745d9ebb21297caf68d98e42876cf9cdc72187e5abb0e30a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 23.06976996527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-60-frame-7.png",
                "sha256": "f116d0cd0f0448d065165ba18d077e48f8a10bfef6f84f9137bddb54adfd7fcf",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-60-frame-27.png",
                "sha256": "ba5bc5aad8381b0480ae1e63e73df03cafde4bd060d9ca69b2413a6bff568036",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-60-frame-52.png",
                "sha256": "8594d75ff788a520aa2a9dd2d3c711f3e86b91b18d51311f118cd7ccedbd47aa",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-60-frame-59.png",
                "sha256": "b1df1d76297649b43e5ab2f339b155b97ef10d7f0aeb931b3bc9969d73b479f6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 23.0888671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-1800-frame-216.png",
                "sha256": "7370cf216b119c2b31d245afb073e62573d59dbb445ed323cd0695ed6290dcfd",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-1800-frame-810.png",
                "sha256": "ba5bc5aad8381b0480ae1e63e73df03cafde4bd060d9ca69b2413a6bff568036",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-1800-frame-1584.png",
                "sha256": "159c44672f11d2a8349683ba4d78ee68a23372a8bc61282b7a418be6270d858a",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/gradient-mesh/1x1-duration-1800-frame-1799.png",
                "sha256": "6c8d7c583c68acf8f1e80859d7e21c3024da2589d58f1ac43e965d08d05921c9",
                "alphaMass": 587520
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
        "note": "A slow gradient mesh drifts across the frame in brand blue, sky and graphite; no purple or pink."
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
      "bundleSha256": "2d8e7f05a9dff71b319ec4b6cc0c6beb015edb73171e7352f9b4c7ace0e51549",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/gradient-mesh/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gradient-mesh/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gradient-mesh/16x9/detail.mp4",
      "bg": "#07070a",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "f510b318512934333c8e4126b9a7567a221854d84efe0dcdbe832f45655236bb",
        "loop": "8bd0d801c9b64370a0a93f1b43d0591b5534cd8dd4a7a409a8dd482025c95db6",
        "detail": "7c511ab5c029f224671e2f1cd266b44370b008c013c2a4743a25235f0a8fe9ed"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/gradient-mesh/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gradient-mesh/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gradient-mesh/9x16/detail.mp4",
      "bg": "#07070b",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "a3466629340be5e1c1f38e5f437c34c34dc13e113a9fd099982f2961ad655bd5",
        "loop": "1c7d4f9b32729d24ba4ba5ef301eaa8d56f71de0b0ad3ad9091e46945eef9b53",
        "detail": "b43a2329d00a63a0eb4ec93aed5c380c2b652db267ebae07e8254539c0551885"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/gradient-mesh/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gradient-mesh/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gradient-mesh/1x1/detail.mp4",
      "bg": "#07070a",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "76b57ac7adb112dcff92d2222de2ed7b3ead19514dca6b0621f6779c92356c48",
        "loop": "0e389480678c2cd4a177dd23d2cb12b6824692cccd9f19ec5baa29a311a43797",
        "detail": "46042f3388cc7b86fde1bb49412b00953431b8d5f3bcacb6705e97f3a8dc3b1e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2d8e7f05a9dff71b319ec4b6cc0c6beb015edb73171e7352f9b4c7ace0e51549/index.mjs",
    "sha256": "2d8e7f05a9dff71b319ec4b6cc0c6beb015edb73171e7352f9b4c7ace0e51549",
    "bytes": 52350,
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
      "loop": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:16:08.144Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
