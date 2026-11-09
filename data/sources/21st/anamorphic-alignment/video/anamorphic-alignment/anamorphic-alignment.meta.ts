// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "assemble"
  ],
  "tags": [
    "title",
    "headline",
    "logo",
    "wordmark",
    "reveal",
    "shatter",
    "shards",
    "assemble",
    "3d",
    "camera move",
    "opener"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 156,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 152,
      "out": 0
    },
    "markers": {
      "settled": 152,
      "lock": 108,
      "reveal": 126
    },
    "beats": [
      0,
      60,
      108,
      126,
      136
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
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 28,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "logo": "logos.light",
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "camera",
      "prop": "orbit",
      "from": "off-axis",
      "settledBy": 132,
      "easing": "spring"
    },
    {
      "target": "shards",
      "prop": "alignment",
      "settledBy": 132,
      "easing": "spring"
    },
    {
      "target": "fragments",
      "prop": "position",
      "from": "title",
      "settledBy": 140,
      "easing": "ease"
    },
    {
      "target": "bar",
      "prop": "width",
      "from": "left",
      "settledBy": 140,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 152,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (title cut into shards scattered in depth, the camera swings in and they assemble into the headline, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "title": "Ship faster",
    "caption": "Everything falls into place",
    "color": "#F3EEE6",
    "primary": "#FF8A3D",
    "secondary": "#FFD27A",
    "background": "#0E0F12",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "shards": 150,
    "depth": 0.85,
    "grain": true
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "subline"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "shards",
      "label": "Shards",
      "type": "number",
      "step": 1,
      "min": 40,
      "max": 420
    },
    {
      "key": "depth",
      "label": "Depth",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Shattered Title Assembly",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "anamorphic-alignment",
    "bundleSha256": "65a9a052c9ac5e9ba559b3452fca144dc280531ac9e0842155f9bd2c1bffb60d",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:26:16.302Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-paper.png",
        "sha256": "70f44dcf0bc17ceb14502141d795a20586a8afa119559d1c0d68cba5060d31af"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-night.png",
        "sha256": "c08683e2a815a7c0e32007397ff6e40c7aa77884a2dfaddd5a70ecf2e4ce75a8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-color.png",
        "sha256": "7e1ae04617758ed54fce4abb056844b118f67d584af61f2735386bd6b99a64da"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-paper.png",
        "sha256": "ace55a5640cee86982b576eaf365d73b9cda7345ddd78b8021a8fd514a02b8c7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-night.png",
        "sha256": "ceabbafaca05a1a9b9f92fad715aa7fbb12bc0f1f99c787ea5152026920a3aa2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-color.png",
        "sha256": "db714c7b174176f0814833cda47cbaa4fff7f69bb01bc117ce3bd1ec7330eaeb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-paper.png",
        "sha256": "ebea60f5df66716cf1eb5847085aaf01df8b91d7580f708b8b1ed5025f93f794"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-night.png",
        "sha256": "529e8692e89a2b7249a94c1fd8f1a4f8e2c72fb1696366be9a3386d9588ae5c3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-color.png",
        "sha256": "a7f11d724646bd008ddf8e4559ed227816406901c85d842165a7c6482e187cec"
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
          "anamorphic-alignment--16x9",
          "anamorphic-alignment--9x16",
          "anamorphic-alignment--1x1"
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
            "paperNight": 31.508924696180557,
            "paperColor": 15.46047634548611,
            "region": {
              "left": 220,
              "top": 66,
              "width": 1635,
              "height": 973
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 39.097683376736114,
            "paperColor": 17.520751953125,
            "region": {
              "left": 78,
              "top": 117,
              "width": 966,
              "height": 1728
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 27.46587456597222,
            "paperColor": 23.277425130208332,
            "region": {
              "left": 43,
              "top": 66,
              "width": 1001,
              "height": 973
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
            "occupancy": 1.0225597118991632,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0872941238609644,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0225597118991632,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1213272764095352,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.140873015873016,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0847365968635398,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1822430160907529,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1834252591068437,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1822430160907529,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.894965277777778,
        "frames": [
          21,
          152,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 156,
            "averageChannelDifference": 7.918077256944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-156-frame-18.png",
                "sha256": "2fc001b5ea6c91264365cb48d5631974131cb406650d119a9477380287c937a6",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-156-frame-152.png",
                "sha256": "b6323180000a96f7b79f2b2bd3f89145782aa4f910019902c0bf764e0cb87281",
                "alphaMass": 587520
              },
              {
                "frame": 137,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-156-frame-137.png",
                "sha256": "3dcd575657c9b99ede5425322c10c6598e3e4f725d8df1cc146a8376b7a2ff95",
                "alphaMass": 587520
              },
              {
                "frame": 155,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-156-frame-155.png",
                "sha256": "5f545b9e8e231169a88b949d1570c5d2c7cfe9553253d8792d99c0ec531eff03",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.889973958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-600-frame-22.png",
                "sha256": "f733ce6ade534cd01065b8779f720befc79be44d32d039313d8c27688db11dd3",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-600-frame-152.png",
                "sha256": "83f5a4e1b5773861a1348eab8c3417e1d807cce8ec0a2e8f8c956e1d150d9b11",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-600-frame-528.png",
                "sha256": "afeff2144fdbd2ff7f22e91fdd7316f65fd5063b56db2c35d36f3061296d136e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/16x9-duration-600-frame-599.png",
                "sha256": "6133a00fbac10b1673484cde674a9d61032c3f8770373ae5979b9489448b6754",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 156,
            "averageChannelDifference": 10.44921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-156-frame-18.png",
                "sha256": "0e20dfacaf09ce63b9159508397aca57e40d7ecb455816a951d1b5a1fd34101f",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-156-frame-152.png",
                "sha256": "9247b7def45de9b0304f3b2cfa56e2f006da0a3e53d1735f409ecdff6d7433b1",
                "alphaMass": 587520
              },
              {
                "frame": 137,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-156-frame-137.png",
                "sha256": "a6cd83b481d1a3ebda387908e02bd8705135722705e214429a343069e7dafa97",
                "alphaMass": 587520
              },
              {
                "frame": 155,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-156-frame-155.png",
                "sha256": "c80ba36d0cbd7653f6115de5b6b687bdd18f81f6937e3a3b25f576ffb8967f62",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.4404296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-600-frame-22.png",
                "sha256": "db5bda081ddea88b93bba33271eda1d64eb39454e570c5e3b7014917a64270fa",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-600-frame-152.png",
                "sha256": "9247b7def45de9b0304f3b2cfa56e2f006da0a3e53d1735f409ecdff6d7433b1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-600-frame-528.png",
                "sha256": "512f00ab0cc2e6cea16f96047a3b0b4f64e0b615a08426c628a1e1a9a41b458b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/9x16-duration-600-frame-599.png",
                "sha256": "512f00ab0cc2e6cea16f96047a3b0b4f64e0b615a08426c628a1e1a9a41b458b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 156,
            "averageChannelDifference": 7.953667534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-156-frame-18.png",
                "sha256": "598dd4065ff3ac0060060884b479478932f3e79bdad369a30abf919cab98a5b3",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-156-frame-152.png",
                "sha256": "477a6e2fb43e0d5b093a29851c2526100654fde99afcfa8aed19696a02b37673",
                "alphaMass": 587520
              },
              {
                "frame": 137,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-156-frame-137.png",
                "sha256": "52ceb84e5688ff481277d90d8b6d5fefa9e108a9803ae116258ca4e9f07d103c",
                "alphaMass": 587520
              },
              {
                "frame": 155,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-156-frame-155.png",
                "sha256": "25dce96eacb7ec78ae21c8925305768b978e70c209b74152e93de0867fb4142f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.014973958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-600-frame-22.png",
                "sha256": "1da7e3feac1c615d35ddd4245655c010007e592fe634f67e4446259bf992dd2b",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-600-frame-152.png",
                "sha256": "4fb94683445d69d7bee86bb7600aabff24e09234d2c5ae952be4d94d3e38f0c6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-600-frame-528.png",
                "sha256": "a44d34aaa88b1fa3fb570387c768dd990d233cc3bd2290a301c0f09e23f7a018",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/anamorphic-alignment/1x1-duration-600-frame-599.png",
                "sha256": "418946d976ce6255ba047a13778025bfa04df9ff7717140e15d39c9ef0a46338",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The poster and motion samples directly support the claimed title \"Shattered Title Assembly.\" The motion frames (images 2 and 3) show the title breaking into fragments and then assembling back, which directly matches the idea of a shattered title coming together. The rest state (images 1 and 4) is intact, with graphic fragments suggesting recent assembly, supporting both the assembly and 'falling into place' claim.\n\n2. noBakedHeading: There is no decorative or unexplained block/category/language label visible in the composition. All text present in the design (\"Ship faster\", \"Everything falls into place\") is legitimate heading and caption content, matching the named slots provided.\n\n3. brandAdherence: All three palette variants (images 5-7) change the background, accent, and title/fragment/underline colors correctly according to the supplied palettes, while maintaining shape and material in each case. No unexplained fixed color blocks are present; each variant uses a new palette. Legibility is preserved in all three versions. Original artwork (e.g., the shatter fragments) remains consistent.\n\n4. languageAdherence: Oversized display type, sans body, and the accent lines match the language card notes. Bold, flat color fields serve as backgrounds, with no glass, chrome, or floating card effects. The material, display, and accent roles remain uniform across all variants and motion samples. Type roles and masks are consistent; no language card is missing or contradicted."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 47,
        "compared": 47,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "65a9a052c9ac5e9ba559b3452fca144dc280531ac9e0842155f9bd2c1bffb60d",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.837Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/anamorphic-alignment/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/anamorphic-alignment/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/anamorphic-alignment/16x9/detail.mp4",
      "bg": "#101012",
      "posterFrame": 152,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4a1dee9d39b4814054f37d29647ee5ac3111b77e24679c813ef4c33653b660fc",
        "loop": "434fe1f8ad9126340db864dd2b3cb265fc6424fd608a219cf623168d8b85c096",
        "detail": "9f6d0271abc2f5193f45bf0611b55fc9aea53d457f65da50f7d4f1bbf6899add"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/anamorphic-alignment/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/anamorphic-alignment/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/anamorphic-alignment/9x16/detail.mp4",
      "bg": "#121113",
      "posterFrame": 152,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cf7c3442c0c3b0ebd24324b49117b0504967c81861a31ecba8182c7f7e7dabc2",
        "loop": "65c07ae35b7507d8ee9b9cccf5d164c74f348c498958e7b4873858c03796c041",
        "detail": "5a40a7eb4cc38b32db1e5f349b05604f27a825d709c75ba14262edf5cb8bb507"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/anamorphic-alignment/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/anamorphic-alignment/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/anamorphic-alignment/1x1/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 152,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "02f0d056c914ddc388dcd340c754d8fbd64cfc6444ecc4fbda446ab66e0e94c7",
        "loop": "2c8796992ee4bc5a65a51cb46f47238050f9d52f7f50b9cf48ea349f1f149007",
        "detail": "7f8675693453607f3b9c68255719d7014abf8092a9f13f085e0238a862e82af0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/65a9a052c9ac5e9ba559b3452fca144dc280531ac9e0842155f9bd2c1bffb60d/index.mjs",
    "sha256": "65a9a052c9ac5e9ba559b3452fca144dc280531ac9e0842155f9bd2c1bffb60d",
    "bytes": 179588,
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
    "at": "2026-10-09T10:47:02.899Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
