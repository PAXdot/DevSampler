// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "engrave"
  ],
  "energy": "calm",
  "requiresScreenshot": true,
  "tags": [
    "engraving",
    "banknote",
    "line art",
    "intaglio",
    "guilloche",
    "image reveal",
    "photo",
    "screenshot",
    "editorial",
    "premium"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 140,
      "out": 0
    },
    "markers": {
      "settled": 140,
      "wave": 46,
      "dissolve": 98
    },
    "beats": [
      0,
      46,
      98,
      140
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "ink": "colors.primary",
    "accent": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "lines",
      "prop": "draw",
      "from": "left",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "plate",
      "prop": "wave",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "image",
      "prop": "reveal",
      "settledBy": 140,
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
    "sourceUrl": "21st first-party (image engraved as banknote lines that ripple, then open into the real image, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "ink": "#1E5B44",
    "accent": "#B8862E",
    "color": "#1D2A22",
    "background": "#EFEADB",
    "lines": 110,
    "wave": 0.7,
    "guilloche": true
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "accent",
      "label": "Accent",
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
      "key": "lines",
      "label": "Lines",
      "type": "number",
      "step": 1,
      "min": 48,
      "max": 160
    },
    {
      "key": "wave",
      "label": "Wave",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "guilloche",
      "label": "Guilloche",
      "type": "boolean"
    }
  ],
  "name": "Engraved Screenshot",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "engraved-line-render",
    "bundleSha256": "e45ab0cbdbd5be9d30c51dae9d3a145ab4c55de9d8e4aaa77573dfebf90e8162",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T07:58:49.776Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-paper.png",
        "sha256": "f2844ab0f9a9fe8aaca8843d7e5227e2dbdb507ab7cf15b9622ce9bd4754e737"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-night.png",
        "sha256": "bad9671a2226ea2e9d5a165aaca18c7c9e43e7acaf17b8858a1e41529a9651c6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-color.png",
        "sha256": "dfb2dd35db07ef01012bb215db833db4aef3ee2767723438c8d68b2b7c47d8a8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-paper.png",
        "sha256": "bfba25836f61eba90d06bba5d2a56727cfbd1686830b29c5eb478418ca9de3ca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-night.png",
        "sha256": "aceddde7de508af54c73f4f1552c8c2c3f7374a04391f4e1eca1d984580798f1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-color.png",
        "sha256": "4007e3ff622ec1aa62be6e26996ec17b52192c522c17d6644a7d87605e8ac82f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-paper.png",
        "sha256": "257251a981c203997166a8e876759c197e94eeeabbca8c0d0e3126b44a50562b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-night.png",
        "sha256": "93480984eaf2e70a9f01a62958a1c14ff25955687551daa8746189a42b22095c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-color.png",
        "sha256": "875e798bb5de8846d387d88dbd2d15a6e37a4dbe2f685c310669bd986cfd9791"
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
          "engraved-line-render--16x9",
          "engraved-line-render--9x16",
          "engraved-line-render--1x1"
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
            "paperNight": 19.214192708333332,
            "paperColor": 8.817925347222221,
            "region": {
              "left": 223,
              "top": 0,
              "width": 1474,
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
            "paperNight": 28.675699869791668,
            "paperColor": 16.70608181423611,
            "region": {
              "left": 0,
              "top": 223,
              "width": 1080,
              "height": 1474
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 20.78814019097222,
            "paperColor": 6.786566840277778,
            "region": {
              "left": 65,
              "top": 125,
              "width": 950,
              "height": 830
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
            "occupancy": 0.8844177138447974,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0880220143613004,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8844177138447974,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6576439410640801,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0880220143613004,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6576439410640801,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8010820354662214,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.958066411292455,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8010820354662214,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.77419704861111,
        "frames": [
          21,
          140,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 14.07931857638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-150-frame-18.png",
                "sha256": "15f021f4f00394670c390365bc575c4b9f2f83cae9ccb331c49bf5de9a34c582",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-150-frame-140.png",
                "sha256": "e893bfb7a28d66173e2bf4d3b6751e9832612fa4f39a0825981ac90db5bf4b5b",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-150-frame-132.png",
                "sha256": "f96e2728449d2dd44b37651f1c13fc14ff75d2b7d2094b8fe14eaa3d359b371c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-150-frame-149.png",
                "sha256": "e893bfb7a28d66173e2bf4d3b6751e9832612fa4f39a0825981ac90db5bf4b5b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.77419704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-600-frame-21.png",
                "sha256": "1f1f88d581452765e6a51085eb8cb050a89365fd43a8140b4f856131969d1b85",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-600-frame-140.png",
                "sha256": "e893bfb7a28d66173e2bf4d3b6751e9832612fa4f39a0825981ac90db5bf4b5b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-600-frame-528.png",
                "sha256": "e893bfb7a28d66173e2bf4d3b6751e9832612fa4f39a0825981ac90db5bf4b5b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/16x9-duration-600-frame-599.png",
                "sha256": "e893bfb7a28d66173e2bf4d3b6751e9832612fa4f39a0825981ac90db5bf4b5b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.425672743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-150-frame-18.png",
                "sha256": "adcb7ce0bb9b7ac3cde205b3129381e3f24f2aa271f215d8f1944d4b134b300c",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-150-frame-140.png",
                "sha256": "7809b86f5ccd6f00707908a9ed626074573c3be68e3630b061db8b79a9a42fc2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-150-frame-132.png",
                "sha256": "76233bcaa8762e3e1451efd926356a98c43db7ec3ebbdeebbc7b68ec505ceac1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-150-frame-149.png",
                "sha256": "7809b86f5ccd6f00707908a9ed626074573c3be68e3630b061db8b79a9a42fc2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.208984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-600-frame-21.png",
                "sha256": "0a1f0f5558313a91eb1515737d92dddfb50650573f4eea60fe49fa9230c7d906",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-600-frame-140.png",
                "sha256": "7809b86f5ccd6f00707908a9ed626074573c3be68e3630b061db8b79a9a42fc2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-600-frame-528.png",
                "sha256": "7809b86f5ccd6f00707908a9ed626074573c3be68e3630b061db8b79a9a42fc2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/9x16-duration-600-frame-599.png",
                "sha256": "7809b86f5ccd6f00707908a9ed626074573c3be68e3630b061db8b79a9a42fc2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 13.00368923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-150-frame-18.png",
                "sha256": "d24dae49237304249e8898c1d8682b3a1c08db9ab4527d184dc91c44a3f346df",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-150-frame-140.png",
                "sha256": "9edaf1ca21258bf83e4aea7911a62782987ddf266810f1e31f6fd7e983df7ec5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-150-frame-132.png",
                "sha256": "ae16983fcfc6bbe083ed6a38ed3f527b1c7330bbd34f434b231cf2ad7f96d886",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-150-frame-149.png",
                "sha256": "9edaf1ca21258bf83e4aea7911a62782987ddf266810f1e31f6fd7e983df7ec5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.553602430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-600-frame-21.png",
                "sha256": "7bcdec3452401a7b47c3104b5467ced105388031f11c921f1a8326048ffcf3f8",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-600-frame-140.png",
                "sha256": "9edaf1ca21258bf83e4aea7911a62782987ddf266810f1e31f6fd7e983df7ec5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-600-frame-528.png",
                "sha256": "9edaf1ca21258bf83e4aea7911a62782987ddf266810f1e31f6fd7e983df7ec5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/engraved-line-render/1x1-duration-600-frame-599.png",
                "sha256": "9edaf1ca21258bf83e4aea7911a62782987ddf266810f1e31f6fd7e983df7ec5",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The sequence shows an interface that is 'engraved' onto a simulated paper backdrop, with screenshot elements redrawn as fine lines in motion sample 2, resembling an etched or engraved reveal. This directly supports the title 'Engraved Screenshot.'\n\nnoBakedHeading: No visible decorative block title or category text is baked into the poster or rebrands; all large text is UI content. There are no unexplained headings.\n\nbrandAdherence: All three rebrand images (5-7) show the design fully adapting to different palettes, with appropriate color changes for the border and background, and maintaining clear, legible UI content. Palettes correspond to the supplied primaries/backgrounds. No fixed block colors remain across rebrands.\n\nlanguageAdherence: The visual style is consistently 'paper grain' with lined textures and no glow, glass, or gradients. Markings, type, and accent rules align with a paper/engraving concept throughout, including the motion sample. No deviation in type roles or effects is visible across rebrands. The evidence supports full adherence to the supplied language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 56,
        "compared": 56,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e45ab0cbdbd5be9d30c51dae9d3a145ab4c55de9d8e4aaa77573dfebf90e8162",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.547Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/engraved-line-render/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/engraved-line-render/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/engraved-line-render/16x9/detail.mp4",
      "bg": "#efeadb",
      "posterFrame": 140,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9e96d8c1fb956656936c4e33473fd07f01be8ec847208e7767c904e429422a6c",
        "loop": "c7aa55357fa0d151c408df72cd7f5b834e0d9e4c14539a9559fa6d41b73e1af5",
        "detail": "3c297ae198a806c0a0ec52a8459bb6d0199572d0007252041850bb637a339274"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/engraved-line-render/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/engraved-line-render/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/engraved-line-render/9x16/detail.mp4",
      "bg": "#efeadb",
      "posterFrame": 140,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9338b90fcad8384afd05c23ba8c6a4db3ab7e4c5393db6e174294e45dde4ab74",
        "loop": "252cb22a93274c56b5d0ae132cf3dac10a28f033ab100c4ea68812425c9b6462",
        "detail": "30623ebed11bc762c63c12bed5c49fc2a3d3b66f5b6b1a1fbb2b91cca901ffe4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/engraved-line-render/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/engraved-line-render/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/engraved-line-render/1x1/detail.mp4",
      "bg": "#efeadb",
      "posterFrame": 140,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "516884b3374b1ddf4f654f9fa73eb7959ea89e8284a16c0b13166e06fcf4fc54",
        "loop": "dcf2b9bb381273d12d0a40edbb6f480a06bc06ccde39675de0db1878324d0325",
        "detail": "c38ace0cff3ca2ba7457f54d159585691063fe4a809d54b8a5a6c317749ef92e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e45ab0cbdbd5be9d30c51dae9d3a145ab4c55de9d8e4aaa77573dfebf90e8162/index.mjs",
    "sha256": "e45ab0cbdbd5be9d30c51dae9d3a145ab4c55de9d8e4aaa77573dfebf90e8162",
    "bytes": 66843,
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
    "at": "2026-10-09T08:19:42.265Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
