// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "magnetism"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "ferrofluid",
    "liquid",
    "magnetic",
    "spikes",
    "glossy",
    "chrome",
    "studio",
    "3d",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 132,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 128,
      "out": 0
    },
    "markers": {
      "settled": 128,
      "drop": 12,
      "pulse1": 20,
      "pulse2": 40,
      "reach": 58,
      "touch": 92
    },
    "beats": [
      12,
      20,
      40,
      58,
      92,
      100,
      124
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "fluid",
      "prop": "drop",
      "from": "above the floor",
      "settledBy": 30,
      "easing": "spring"
    },
    {
      "target": "spikes",
      "prop": "length",
      "settledBy": 124,
      "easing": "spring"
    },
    {
      "target": "tendril",
      "prop": "reach",
      "settledBy": 124,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "lock-in",
      "from": "dim, slightly small",
      "settledBy": 112,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (ray-shaded ferrofluid crown reaches up and touches the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "primary": "#1F3A93",
    "secondary": "#E0475B",
    "color": "#16161D",
    "background": "#F6F4EF",
    "spikes": 44,
    "pull": 0.75,
    "fieldLines": true,
    "reflection": true,
    "grain": true
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "spikes",
      "label": "Spikes",
      "type": "number",
      "step": 1,
      "min": 16,
      "max": 52
    },
    {
      "key": "pull",
      "label": "Pull",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "fieldLines",
      "label": "Field lines",
      "type": "boolean"
    },
    {
      "key": "reflection",
      "label": "Reflection",
      "type": "boolean"
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Ferrofluid Reach",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "ferrofluid-reach",
    "bundleSha256": "275271796153b5ac8f785667ef372376d5eaf6a78fc6f1d92c0c3bac3216b7ef",
    "sourceSnapshot": {
      "sha256": "6efc08ffa63cd79c1ef030574e46b7d37feaf9d76cf75693411a9f12cc69f3ef",
      "files": 1851
    },
    "renderedAt": "2026-10-09T11:51:39.793Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-paper.png",
        "sha256": "66b8fc558b4dc307d27e49f75b79d3e3bb196e19671839b991fef028f1ffca04"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-night.png",
        "sha256": "6b5a2cd080d80ea5b299f77c85a2af57a684d5091a73991b0552e3723c6e9fac"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-color.png",
        "sha256": "607520b31ade32bb6d38fd7a6bc824e0e2064fb0a078cad92ff85f824e536951"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-paper.png",
        "sha256": "03c54c3b6a732d89a1b445d8de2e2c403d95dd7953060327a8ed58d6da25de85"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-night.png",
        "sha256": "cb4c8092dc1144ca2f6f8c0379c1f3931f259a7de80ade9de8a020fa27607d27"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-color.png",
        "sha256": "2327d2316b0f047b1e966e8488eadc8df601eb6ae5495a27ec4c525b4a31f4f5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-paper.png",
        "sha256": "505186ad97c935183d323e35175527b49cfb5b9b6b4ec03c3599910715744ca0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-night.png",
        "sha256": "80d0b5297f691f68b16b87087add8c5ac85f7650acb94ef8883f49eac5ec6756"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-color.png",
        "sha256": "88a302500d71a02610622eef7c6c263e731d34382d587d182bbba6d1586f0d42"
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
          "ferrofluid-reach--16x9",
          "ferrofluid-reach--9x16",
          "ferrofluid-reach--1x1"
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
            "paperNight": 11.876356336805555,
            "paperColor": 6.825113932291667,
            "region": {
              "left": 486,
              "top": 110,
              "width": 948,
              "height": 970
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 13.437418619791666,
            "paperColor": 7.112630208333333,
            "region": {
              "left": 16,
              "top": 322,
              "width": 1048,
              "height": 1505
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 13.955023871527779,
            "paperColor": 7.446641710069445,
            "region": {
              "left": 116,
              "top": 72,
              "width": 848,
              "height": 1008
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
            "occupancy": 0.6165540097211726,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6284873131351307,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6165540097211726,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0510930195123318,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0779887443660594,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0510930195123318,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0190084264158341,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0386047423084461,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0190084264158341,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.793077256944445,
        "frames": [
          19,
          128,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 132,
            "averageChannelDifference": 10.329644097222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-132-frame-15.png",
                "sha256": "40315ed6d5099afd222096b16dcd1a5185fdffb2d249347787686fc7a15ead2b",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-132-frame-128.png",
                "sha256": "433a756858ba71b2cb9e927ace29a56d81b5840ef0a0a6bee9290974570163ff",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-132-frame-116.png",
                "sha256": "27ceaa8ef64e281021bb922ffc37ab96c57d698807cd00f8300627b40a35f89c",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-132-frame-131.png",
                "sha256": "273406ae4d1e05be8723caf4e82dd8d7aeddea190cc911bd6f430ba8904f7b07",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.793077256944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-600-frame-19.png",
                "sha256": "a9b1e0db79120b84769de381f80e623ea18227d5979f68e6cad31d2d3887109e",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-600-frame-128.png",
                "sha256": "433a756858ba71b2cb9e927ace29a56d81b5840ef0a0a6bee9290974570163ff",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-600-frame-528.png",
                "sha256": "eb6486adec8202b5ff83f82ebf72f9186ec34f65e8d97885c89fba78bf7405e4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/16x9-duration-600-frame-599.png",
                "sha256": "71200b03d4107bdbdc79c16a394789f7c64776238dce487964c9720b7bac55f2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 132,
            "averageChannelDifference": 16.3681640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-132-frame-15.png",
                "sha256": "b065b79e6a6589199b788b4ea0c07a9c8ceb20d5a11822231d9d1f20456f64cf",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-132-frame-128.png",
                "sha256": "4db957677e7a9ad81c723d00f56a4be6117e22a886b4e0f919edaa71f26f7e4a",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-132-frame-116.png",
                "sha256": "a9ff1fe3ef497621f9358d058448d96ec2d0d4ef2356fb9972421adb8cebceeb",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-132-frame-131.png",
                "sha256": "8f8844e7f5f5245590e03e5159caca6bbae5f28f2ed85713e4a38f699554bdfc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 16.00434027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-600-frame-19.png",
                "sha256": "70a3845c2106c224f12990519c59178df5affb04e08bce8dfaf8914bbd21791e",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-600-frame-128.png",
                "sha256": "4db957677e7a9ad81c723d00f56a4be6117e22a886b4e0f919edaa71f26f7e4a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-600-frame-528.png",
                "sha256": "ab3f730040580bca22f386e2b75ec24fb3f3db1b3d0d0f3d50907a5711a79960",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/9x16-duration-600-frame-599.png",
                "sha256": "927d7d743be96e69cdfe8cf1aec6278b672b343721c7a9655985d756012b2929",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 132,
            "averageChannelDifference": 17.687174479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-132-frame-15.png",
                "sha256": "b56eb70e5cd6b3f92232bd38d2e3b096835605d5853e664351783e77795d9766",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-132-frame-128.png",
                "sha256": "504bbd5335c5b1b31a7bc2f3a96485a0cf28c1426076252b316097a913937f38",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-132-frame-116.png",
                "sha256": "2359b668d11e212ca605bfbf730e35d3692281a68b6772aa334098edec046d14",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-132-frame-131.png",
                "sha256": "8f702a1587ef070e5494e1f36f8d1801f2646018829bfc00882451ab55b5009a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.34320746527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-600-frame-19.png",
                "sha256": "742043db6b0fb3f0c8d80cdb010b59c7e52136db0127b1260d199579918e59f6",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-600-frame-128.png",
                "sha256": "504bbd5335c5b1b31a7bc2f3a96485a0cf28c1426076252b316097a913937f38",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-600-frame-528.png",
                "sha256": "db79631a0eac871486618d7c3c54d318b262dfac8286b0bca8390c829cb7731f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/ferrofluid-reach/1x1-duration-600-frame-599.png",
                "sha256": "d215a4ea05510fc828d7e32c0c62275f557e83596879fb20a9fd69d272482ab2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The images depict ferrofluid spikes reaching upward, consistent with the title 'Ferrofluid Reach.' The motion samples show the spikes contracting into a pool and then reforming, directly supporting the idea of reach. No misleading effects or unsupported claims are evident. \n\nNoBakedHeading: There are no visible decorative block titles, category, or baked-in language labels anywhere in the composition—just graphics. All visible elements serve as image content only.\n\nBrandAdherence: The final three images show the same poster under three distinct palettes, each accurately applying the supplied color roles: the background, ink, and accent features change appropriately while maintaining material and legibility. No unexplained block color remains, and all elements are clearly visible in each palette, as required.\n\nLanguageAdherence: The subject (ferrofluid) and the ambient light field around it align with the language card ('Continuous soft light fields... sharp isolated subject'). The motion samples (spikes extend and settle smoothly) fit the described motion verbs (\"breathe,\" \"focus,\" \"reveal\") and camera guidance. Type roles are not tested here, but the graphic style is consistent across all palettes and motion samples, fulfilling the card's requirements for visual material and consistency."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "275271796153b5ac8f785667ef372376d5eaf6a78fc6f1d92c0c3bac3216b7ef",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:52:25.674Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/ferrofluid-reach/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ferrofluid-reach/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ferrofluid-reach/16x9/detail.mp4",
      "bg": "#f6f4ef",
      "posterFrame": 128,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2fd2b661e8ae30584dde6b3d27c038f4a902a71a1bac62edc3e4290885b8d25c",
        "loop": "23c85cee1170de569d60e1aa7fc29aaef0c417b906a98dbf79420d8370b9c452",
        "detail": "05ff2c576efa26fe6034e52f24a4d5198407459354b98a864550f578142e63fc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/ferrofluid-reach/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ferrofluid-reach/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ferrofluid-reach/9x16/detail.mp4",
      "bg": "#f6f4ef",
      "posterFrame": 128,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "eddc5805c4f862b6a3b38b8a7f4cb1b397e136f0dd21779902e2df57b266a338",
        "loop": "5cd60cf86aa2fe61b740278167dd21fc41474d0cef3359737e1726746ff0122e",
        "detail": "6f3bb04f9a1947ba6066137165d4b6126b340030d3d5e12d1b5bac16ee97e92e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/ferrofluid-reach/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ferrofluid-reach/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ferrofluid-reach/1x1/detail.mp4",
      "bg": "#f6f4ef",
      "posterFrame": 128,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a85038c1f1721f79cb0c5e95863f0830ef2d22351f51aa0d138b01fcc6bb87aa",
        "loop": "19b5d707cbe984fc1ce451bd6560e7ce57ca37527e9d0447bed81cb1ed560aa4",
        "detail": "531a6f3b7f7b3ac7c22b3257c5843a2673a34d99d153845c9ba2b79b2c14b06a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/275271796153b5ac8f785667ef372376d5eaf6a78fc6f1d92c0c3bac3216b7ef/index.mjs",
    "sha256": "275271796153b5ac8f785667ef372376d5eaf6a78fc6f1d92c0c3bac3216b7ef",
    "bytes": 64798,
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
    "at": "2026-10-09T11:59:19.453Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
