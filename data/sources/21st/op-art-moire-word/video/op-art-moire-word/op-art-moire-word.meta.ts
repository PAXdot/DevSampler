// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "moire"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "word",
    "moire",
    "op art",
    "interference",
    "line grating",
    "optical illusion",
    "stripes",
    "kinetic type",
    "poster",
    "reveal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 130,
      "out": 0
    },
    "markers": {
      "settled": 130,
      "emerge": 78,
      "lock": 100
    },
    "beats": [
      0,
      46,
      78,
      100,
      130
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
      "key": "text",
      "type": "text",
      "maxChars": 24,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "gratings",
      "prop": "rotation",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "fringes",
      "prop": "flow",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "opacity",
      "from": "interference",
      "settledBy": 114,
      "easing": "ease"
    },
    {
      "target": "lines",
      "prop": "glint",
      "settledBy": 130,
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
    "sourceUrl": "21st first-party (two line gratings rotate into alignment and the word emerges from their moire interference, 2026-10-08)"
  },
  "defaults": {
    "text": "Look closer",
    "color": "#FCEFF9",
    "primary": "#E56399",
    "secondary": "#7FD1B9",
    "background": "#1A1423",
    "fontFamily": "Bricolage Grotesque",
    "angle": -22,
    "density": 1,
    "shimmer": 0.8,
    "seed": 7
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
      "role": "headline"
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
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": -75,
      "max": 75
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.6,
      "max": 1.6
    },
    {
      "key": "shimmer",
      "label": "Shimmer",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    }
  ],
  "name": "Moire Word",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "op-art-moire-word",
    "bundleSha256": "2eb5d819798729cfdcea7834d0e24d8863dc253f9088b9edd8cd7723659673a4",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:24:32.802Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-paper.png",
        "sha256": "dcc05bc1dbc0ec7275da3d301d0a761eef6056e80babf1ec7920fde0021609e0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-night.png",
        "sha256": "c29dff00aebf001a04ff2aebbaf5a09ba8c168d31b5de5494a5c6dfa0b6f1338"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-color.png",
        "sha256": "61032cc02dc749f8050f1f1cd25988ac593f6a36a6b80ae3abd2757e4bd77eed"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-paper.png",
        "sha256": "77c8c5a7ce1f6b8eb0fd16e0f6f7cc49732807241e8cd95500115cd3dbb51fad"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-night.png",
        "sha256": "d97a240ed73b2641512936bdea59cf0e77bc1e8300e9df458fd3e8061fc2deaa"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-color.png",
        "sha256": "07b9f7c0bef1fa363d7c0bff306ea5440dce31e6ba67c82b91dbb5d09da5bced"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-paper.png",
        "sha256": "6ad8fbd2f05d7b8cd15f0dd2487dea0d20de6100b02377cff022bb39ad5d7d6d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-night.png",
        "sha256": "6568579d10000134a95527c85301b32dd336eee58aee8289460fb267abd3531f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-color.png",
        "sha256": "598c38a9198aabe1afc70bbf9316f5fb0aa7a7da613d70c852414686a8399afe"
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
          "op-art-moire-word--16x9",
          "op-art-moire-word--9x16",
          "op-art-moire-word--1x1"
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
            "paperNight": 40.11846245659722,
            "paperColor": 38.367458767361114,
            "region": {
              "left": 42,
              "top": 24,
              "width": 1837,
              "height": 1033
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 42.50697157118056,
            "paperColor": 35.686686197916664,
            "region": {
              "left": 24,
              "top": 42,
              "width": 1033,
              "height": 1837
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.44306098090278,
            "paperColor": 43.257405598958336,
            "region": {
              "left": 24,
              "top": 24,
              "width": 1033,
              "height": 1033
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
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2969580273596066,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965657942417939,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965657942417939,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2965657942417939,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 37.247721354166664,
        "frames": [
          19,
          130,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 140,
            "averageChannelDifference": 36.99652777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-140-frame-16.png",
                "sha256": "338a8c601ad03a6c936045c65d5526df59190c4dcdcfa3c6fbeed75e2fcb5ed4",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-140-frame-130.png",
                "sha256": "48be6da3404a91ddf61b71790b69d0ec259e06d6b6abd57fe08f101e40cda598",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-140-frame-123.png",
                "sha256": "6c19e68cf20858334acfac82f15de84d8808514832dd880c36814e93d809ba66",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-140-frame-139.png",
                "sha256": "d78b63d68408a09d158fc9e47772267757e266aba6d665fa75a99420b01e9cea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 37.247721354166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-600-frame-19.png",
                "sha256": "c0d52ff26e997a39df3643ff7a6e67188345ac36cbea44f57d53456d3680d215",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-600-frame-130.png",
                "sha256": "48be6da3404a91ddf61b71790b69d0ec259e06d6b6abd57fe08f101e40cda598",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-600-frame-528.png",
                "sha256": "82b18aaeab60b301fdcfa08fc044180052aa0d947deec92a1513bed0bb57fd2e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/16x9-duration-600-frame-599.png",
                "sha256": "901ce179098a6332b9f479a405b004eb896235bae6948c54d7e6ad41d58265f1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 140,
            "averageChannelDifference": 35.179470486111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-140-frame-16.png",
                "sha256": "d6e0ddb829242de13dfd604a7fd36046aad2502a153e647da3f919185a7bbbe7",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-140-frame-130.png",
                "sha256": "f3d12944b102d6584b70877d9362fe85ffcdc83ea255d06fbd1908de081827a5",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-140-frame-123.png",
                "sha256": "50c1ce4f68f5d2c3a6ac55ed4095314e688dac7fd4429a57fe26aa975bbf22c8",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-140-frame-139.png",
                "sha256": "a50afedd99c6f479b8aa9a7fefa45328d772c9c95c62bf635b06112e65762904",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 35.84418402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-600-frame-19.png",
                "sha256": "8719d09cf50e64c30ee9b43c0b8af04ec9ea022fea4505eeafbb122c2e8158d4",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-600-frame-130.png",
                "sha256": "f3d12944b102d6584b70877d9362fe85ffcdc83ea255d06fbd1908de081827a5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-600-frame-528.png",
                "sha256": "c4394ff842d51a9a457de4523bd3b7884b76bc9e92096627a3c46ba84c81df74",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/9x16-duration-600-frame-599.png",
                "sha256": "728baf6822ee35522442b350e505797782dfd384bfd2cee1b2587043c732a89d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 140,
            "averageChannelDifference": 39.10460069444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-140-frame-16.png",
                "sha256": "1cd152cce0c660cc9b3514c87a4e873e331a419412f6380fc00cc382b3ab177f",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-140-frame-130.png",
                "sha256": "57b4244a448179fda54725011b87857b2b68e824a9d2e1514761725cbaa5a9d6",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-140-frame-123.png",
                "sha256": "e4d6bc6dd40bfccc5a7fcc6c93c30e9be036dc55838e5f3fa888d5af91cc6133",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-140-frame-139.png",
                "sha256": "d08f0e18af754262e0640e7aefb50bd59b2b33e1180572a661c6cb7adbd73c5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 40.08094618055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-600-frame-19.png",
                "sha256": "3daf65958d5fb3abae8e03eee3878acb37011ea7d0ed5307379b43be3ec50480",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-600-frame-130.png",
                "sha256": "a1bc8f998fd25cf49139586f5233b90c6a2801f0ca41cca705359431915892e1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-600-frame-528.png",
                "sha256": "1b76ac34c2000d5a5a30cf7d187a7f1d51ed44107d04eba7c1a60842324c4f18",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/op-art-moire-word/1x1-duration-600-frame-599.png",
                "sha256": "69d3468d32c3b1ca0fbe92ef987a3f5cbd6eaa58cc1c00d3b9ba58eb0faa24f8",
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
        "note": "TitleMatches: The sequence of images supports the title 'Moire Word.' The poster and motion samples use overlapping diagonal lines and distorted backgrounds that create a visible moiré effect. The transition in the motion samples (images 2-4) show an animated distortion, consistent with movement and assembly that would produce a moiré pattern, before the type 'Look closer' re-emerges. No effect is merely claimed in text; the visual evidence directly supports it.\n\nNoBakedHeading: There are no decorative or unexplained headings, block titles, or language labels baked into the composition. The only text present is legitimate slot content ('Look closer').\n\nBrandAdherence: All three supplied brand palettes (images 5-7) are present and each variant is clearly legible. The color in each adheres to the provided palette description (gold/green/dark text, green/white/dark text, purple/blue/light green and blue text, respectively). The shapes and moiré structure remain consistent, with palette-applied backgrounds and ink, while avoiding unexplained fixed block colors. \n\nLanguageAdherence: The images maintain consistent use of oversized, sans-serif type with tabular numerals (where applicable), graphic cut masks, and flat color fields, as per the language card. Motion is carried by the background pattern (not by the type or floating cards), adhering to camera and motion directives. No forbidden material or chrome is present. All examples are consistent in material and type roles across palettes and frames."
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
      "bundleSha256": "2eb5d819798729cfdcea7834d0e24d8863dc253f9088b9edd8cd7723659673a4",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.830Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/op-art-moire-word/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/op-art-moire-word/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/op-art-moire-word/16x9/detail.mp4",
      "bg": "#808c90",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9efadb0c92672c57c5956b451002b0dfe4f9f06114248d1701e7384acb42de09",
        "loop": "43687f12dc735178618d44b4f6ccc4491d9162a35b19966f11b04db0d2c304e9",
        "detail": "5569f893a4fd545f2d8997d625ed2d84be2e6de7c2443dbe145ddb29a3e16105"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/op-art-moire-word/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/op-art-moire-word/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/op-art-moire-word/9x16/detail.mp4",
      "bg": "#858d93",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "568cb167391e2c53c3a2df2f31bdf033f9ced11bf9dbed107a7bcefe528574d7",
        "loop": "dea70443ac75565ba2c7e46fbe49b61821e1d33886972f449ee9f6e844614114",
        "detail": "58847e5862c515ea66237c41ea3507b85397c617b89340b5856486c83cfbf330"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/op-art-moire-word/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/op-art-moire-word/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/op-art-moire-word/1x1/detail.mp4",
      "bg": "#718888",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "471647ed8dcc1220fcefae26ba2b3fb9ea9b8e3bf9d24f2a934571f89e1e0cd0",
        "loop": "3e1f62ee7c256aab237561c8f0b8c122ab7966a5454cead5665d56a348accd5f",
        "detail": "e055ee23c7755521498323477ede68615d720d30f055dea8904d4b25cafcc0eb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2eb5d819798729cfdcea7834d0e24d8863dc253f9088b9edd8cd7723659673a4/index.mjs",
    "sha256": "2eb5d819798729cfdcea7834d0e24d8863dc253f9088b9edd8cd7723659673a4",
    "bytes": 165913,
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
    "at": "2026-10-09T10:44:58.005Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
