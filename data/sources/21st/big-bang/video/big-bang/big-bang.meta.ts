// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "device/phone",
  "tags": [
    "phone",
    "3d",
    "burst",
    "reveal",
    "stickers",
    "launch",
    "device"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 450
    },
    "stretch": "hold",
    "phases": {
      "in": 20,
      "out": 0
    },
    "markers": {
      "settled": 30
    },
    "beats": [
      2,
      11,
      22
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "9:16",
      "16:9"
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
      "key": "label",
      "type": "text",
      "maxChars": 36,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "screen",
      "type": "image",
      "role": "screen"
    }
  ],
  "brand": {
    "secondary": "colors.secondary",
    "frameColor": "colors.background",
    "screenBackground": "colors.background",
    "screenColor": "colors.text",
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "burst",
      "prop": "scale",
      "from": "0.02",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "phone",
      "prop": "rotateY",
      "from": "-40",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "label",
      "prop": "y",
      "from": "below",
      "settledBy": 30,
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
      "frame": 44
    },
    "hover": [
      0,
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V07"
  },
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "orbit"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "label": "Now on every phone",
    "screen": "",
    "stickers": 24,
    "seed": 7,
    "secondary": "#FF8A5B",
    "frameColor": "#121214",
    "screenBackground": "#FFFFFF",
    "screenColor": "#0A0A0A",
    "accent": "#3D63FF",
    "color": "#0A0A0A",
    "background": "#FFFFFF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 36,
      "role": "label"
    },
    {
      "key": "screen",
      "label": "Screen",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "stickers",
      "label": "Stickers",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 36
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "frameColor",
      "label": "Frame color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "screenBackground",
      "label": "Screen background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "screenColor",
      "label": "Screen color",
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
  "name": "Big Bang Burst",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "big-bang",
    "bundleSha256": "ad7fe41faabf51a04b44a227f87407ff285e26fbfa8b09a085ae0b1e67629bf6",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:01.075Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-paper.png",
        "sha256": "26d475ad2c761d84eae36e0f67137b2852bcf0a63bf68a8b619c666c7a4e1d66"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-night.png",
        "sha256": "383072dd01789f733813476aa257d9ff8ba0395da9074393588655508f9e9b50"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-color.png",
        "sha256": "a830bff28a99a57e3b39a13a2e78d9ba78dcfaca1aedd22f76f6c6ba5e2c2fbd"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-paper.png",
        "sha256": "494af15763c71269ba936092e002da7384afb30563ed0d3d301624655f46b2c7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-night.png",
        "sha256": "2482d578137884073f2246984268ded04c71bcbdc9c01b8283e52f2ac7d0ef97"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-color.png",
        "sha256": "00cb7bbe3e4b1dcd25d559726de6faf932b343de41b1e0baee96a19b8874c7e5"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-paper.png",
        "sha256": "0c15ed966def50e6374307fc43604046ec5927b8bb0fbb0b7e70612af0504aec"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-night.png",
        "sha256": "e3ef3e387938d100cdba441e444004c8007352f06bb4abaf26de8ba32a79accf"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-color.png",
        "sha256": "08385e22d2f94f4aab2ef7cbb1b17b71d5927a5981cdb0cebee71bfad4b60d1f"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "big-bang--1x1",
          "big-bang--9x16",
          "big-bang--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.92499457465278,
            "paperColor": 21.932969835069443,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1060
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.237223307291664,
            "paperColor": 18.909098307291668,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1840
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 25.51239691840278,
            "paperColor": 22.72976345486111,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1060
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3909884941630977,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3909884941630977,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3909884941630977,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3581821617535905,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3581821617535905,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3581821617535905,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3909884941630977,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3909884941630977,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.378672450204362,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.1201171875,
        "frames": [
          6,
          44,
          119
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 25.930338541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-60-frame-6.png",
                "sha256": "2e59a759b48b651e16e1673feed93efcbda0e85c549854affa2270691ea000eb",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-60-frame-44.png",
                "sha256": "54e95d76bdcece7b1d2afa3e5d49510bbc4cc07bd576e7e5de0fe1324e01234d",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-60-frame-52.png",
                "sha256": "0646f4017e7cfff4ca95ece7e0df64c08f31e5846b7b6dad7d99a77fe7a0f082",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-60-frame-59.png",
                "sha256": "9cdc03aa30901c1bfe0ba55f7a10e61424ad8b5407fe048bb756ca8f9c89c5c6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 450,
            "averageChannelDifference": 13.22927517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-450-frame-6.png",
                "sha256": "8221a49301e81db89071b0a0534e9de4a63d827732606d6d19b727311601b195",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-450-frame-44.png",
                "sha256": "bad301cbbc014497c4b4bbd674e9fa596f1dbb136977aba1e69bb5b749e82a7e",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-450-frame-396.png",
                "sha256": "ab39d3abe451997fcc116177c68d37b631885f9854b1069d67782b12573ab52c",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/1x1-duration-450-frame-449.png",
                "sha256": "efdaab1391e06d3ee1546e8c018925116a63e13fe6159a84530d9e1d44c5bde2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 29.609700520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-60-frame-6.png",
                "sha256": "2f362ea29fa08bf8fcf97b1eb498675ada866e0f82288db14089986e9c85483d",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-60-frame-44.png",
                "sha256": "1169bb73d879dbb88c5402303ca4f3ac9893813be8dcabcbcf2fe3ed9ad34de0",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-60-frame-52.png",
                "sha256": "24af91b62ad9992e6c275636bc7639ee48a44a3a9f0287e3564de70fe306ef67",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-60-frame-59.png",
                "sha256": "5c8014e8f6abaea6b90e8ed8b2eb189ad7e897c0e971608b5fc5f0956eba80ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 450,
            "averageChannelDifference": 19.04741753472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-450-frame-6.png",
                "sha256": "0157686ba1695c53a692c78d2c5d328e34583ac72e25b25ccdf73385cc0cf4b9",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-450-frame-44.png",
                "sha256": "057959b187207c63e8d74fb455f1dedff83e33bf26594796cca3cca43f53bfd7",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-450-frame-396.png",
                "sha256": "fe604f0ea4fc2c38176498f27a9bb85b41ddf073ff60374c5a0d8c1bf8095970",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/9x16-duration-450-frame-449.png",
                "sha256": "e1fc049286f427f9f9f3d2c59a8260cd948029a1c35344b457580e91a03602bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 14.935438368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-60-frame-6.png",
                "sha256": "1a33629aee0a043431d56e17fc6f830eacedb588753a1dddf73105ace064d8ed",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-60-frame-44.png",
                "sha256": "a029ba79c7fdb46cf9fd7648eb43337b1ce59b67a0980e09e3a9336a3bedb9ad",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-60-frame-52.png",
                "sha256": "2d116cc6125f52291a851703715d7a4f9bc82ee082f48d0c112bc3f2f01bdc12",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-60-frame-59.png",
                "sha256": "8c35b4bd1819a35380a99aa00d92775177b682545fdad58a8a410f2548a830dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 450,
            "averageChannelDifference": 7.2783203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-450-frame-6.png",
                "sha256": "8b6af50667ce0881a7076813c11ecfe7cc7b70c18a2c470660d4af1e1126e58e",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-450-frame-44.png",
                "sha256": "9817191a712c80cc2c82f90fe35e1ca0abc9ebb30ae98eb8351da452e94acc6e",
                "alphaMass": 587520
              },
              {
                "frame": 396,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-450-frame-396.png",
                "sha256": "116b39e671a849688799adbdeacead1d4389828d4c6ac9285d1bb49bf469859c",
                "alphaMass": 587520
              },
              {
                "frame": 449,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/big-bang/16x9-duration-450-frame-449.png",
                "sha256": "520da455f5613305a35e1100a6c82a930dec2b75ae9cb529665a6ad87aa461c2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Phone bursts out of a cloud of stickers and chips; stickers are brand blue, neutral tints and warm secondary, no purple."
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
      "bundleSha256": "ad7fe41faabf51a04b44a227f87407ff285e26fbfa8b09a085ae0b1e67629bf6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/big-bang/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/big-bang/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/big-bang/1x1/detail.mp4",
      "bg": "#ffffff",
      "posterFrame": 44,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "b90bfe8122e539c16fec18f8ffb292ff9dfea2249bf70099a28d74becb8a2fc4",
        "loop": "35b65baacaaf0a1581e879e1e533f3206756a052cb7a0ebc3e1ac60c5d73aaae",
        "detail": "8b56025d09f363ecbfcb0ed9e3687c8fb6e287c82aad310a109fa3638a70eac8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/big-bang/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/big-bang/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/big-bang/9x16/detail.mp4",
      "bg": "#ffffff",
      "posterFrame": 44,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "235853cbb270f9b2edbe7ce392f602593486e92a8b9281d360a5e885a3a9f4d9",
        "loop": "d19aba9ee6a601cf07e7f96652367acf9392d70da4f23cfb01a4944f860bb0d5",
        "detail": "df7823151f72272846fc31da38020ec0f6b623022abc5d0fdac14e841fff13e8"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/big-bang/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/big-bang/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/big-bang/16x9/detail.mp4",
      "bg": "#ffffff",
      "posterFrame": 44,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "70fbd9b1b419017caad8909da77bf7d4ae0f1ea590837b04e9f481e5cfbb6c29",
        "loop": "10fab5f854f8f0505e1d228c85ba994026f5d8ef77cbc6b8602372e324321ef3",
        "detail": "d4f732e254ba826bb30c88c30d386232ef0eede46f855b2f509b80e8960df6c3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ad7fe41faabf51a04b44a227f87407ff285e26fbfa8b09a085ae0b1e67629bf6/index.mjs",
    "sha256": "ad7fe41faabf51a04b44a227f87407ff285e26fbfa8b09a085ae0b1e67629bf6",
    "bytes": 811200,
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
    "1:1": {
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
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:09:43.876Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
