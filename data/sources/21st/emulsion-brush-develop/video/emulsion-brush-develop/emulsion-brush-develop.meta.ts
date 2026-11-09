// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "photo-collage",
  "mechanic": [
    "develop",
    "brush"
  ],
  "tags": [
    "screenshot",
    "reveal",
    "brush stroke",
    "paint",
    "brush",
    "print",
    "paper",
    "texture",
    "develop",
    "product ui"
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
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "brush": 4,
      "develop": 54,
      "color": 90,
      "peak": 126
    },
    "beats": [
      4,
      54,
      90,
      126
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
      "key": "image",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "paperColor": "colors.background",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "brush",
      "prop": "stroke",
      "from": "left",
      "settledBy": 64,
      "easing": "ease"
    },
    {
      "target": "print",
      "prop": "density",
      "settledBy": 128,
      "easing": "ease"
    },
    {
      "target": "print",
      "prop": "color",
      "settledBy": 136,
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
    "sourceUrl": "21st first-party (liquid emulsion brushed on paper, screenshot develops like a darkroom print, 2026-10-08)"
  },
  "defaults": {
    "image": "",
    "color": "#1B1A17",
    "accent": "#2440B8",
    "paperColor": "#F1EBDD",
    "background": "transparent",
    "tone": 0.12,
    "marks": true
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
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
      "key": "paperColor",
      "label": "Paper color",
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
      "key": "tone",
      "label": "Tone",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "marks",
      "label": "Marks",
      "type": "boolean"
    }
  ],
  "name": "Brush Stroke Screenshot Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "emulsion-brush-develop",
    "bundleSha256": "365ce54afa079c12724e3c4dd83898b41789876fb3833fa5a5946770509bc6a2",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:25:44.773Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-paper.png",
        "sha256": "07944b9b8d9ae92039ebf13f357ee2f9c042ed1c1d254d35e38bb1c7572bc48d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-night.png",
        "sha256": "635b5b0cd2740f78da83e98f21f68b5b986b0e807f9bd109ff66cc752394ce62"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-color.png",
        "sha256": "81e8f8f4c5773d2f9394a6389474bba550bfe101283503133caed4225391cce2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-paper.png",
        "sha256": "1b6620b67cfab0b2f4902f42fafd0e8af8c9b03fbb9c9b93c7b7a5467bf7e259"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-night.png",
        "sha256": "9984557885d131fa42b6f412d224702eff96ec13a385bfe291d68d30008e7386"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-color.png",
        "sha256": "2a51278e3f0701baad9235ef3fa67753b08787bb2b6fb0d6e82d80b57b6bb6a2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-paper.png",
        "sha256": "991c2b2279bbe43c671598e3c30fc294c0f12c97fc3df08bab8788ee2bbac796"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-night.png",
        "sha256": "eed4be16b2c2be5a0d0e07f40ca58bb48de64e63aee5019921159ecb5f58131c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-color.png",
        "sha256": "c27b79630b87cc96c08fa00f7a11e0891d7988f2b55058f8d90e439eba262679"
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
          "emulsion-brush-develop--16x9",
          "emulsion-brush-develop--9x16",
          "emulsion-brush-develop--1x1"
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
            "paperNight": 24.94729275173611,
            "paperColor": 15.184271918402779,
            "region": {
              "left": 549,
              "top": 240,
              "width": 822,
              "height": 600
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.82196723090278,
            "paperColor": 16.21701388888889,
            "region": {
              "left": 113,
              "top": 632,
              "width": 859,
              "height": 656
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 24.961181640625,
            "paperColor": 15.142659505208334,
            "region": {
              "left": 129,
              "top": 240,
              "width": 822,
              "height": 600
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
            "occupancy": 0.7022605531410095,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7022605531410095,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7022605531410095,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8023654313405747,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8023654313405747,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8023654313405747,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248463205584017,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248463205584017,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248463205584017,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.99685329861111,
        "frames": [
          21,
          150,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 26.21169704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-150-frame-18.png",
                "sha256": "707ac4b0bd49191d9581f3daae999c6153a34162f677a9163016c70f7300a9bd",
                "alphaMass": 31475
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-150-frame-149.png",
                "sha256": "26401cb7432b2cef00ad2c445f07b03a10dccd48d0ed9d8d8f5f16e23f22972f",
                "alphaMass": 93410
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-150-frame-132.png",
                "sha256": "7a7aa22778eb5c82ea0dc76508de4d333aab181c000059f215c74c29da3da078",
                "alphaMass": 93410
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 22.27419704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-600-frame-22.png",
                "sha256": "8fd068aacfdd8cb10308b220c05b0ff01d56cfcb67a10d8e80e0d12fd75e3318",
                "alphaMass": 45190
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-600-frame-150.png",
                "sha256": "30ade4a2986dd397f02b0938bdbbcf8762850738b40f38a9f68fab9c088ee8d0",
                "alphaMass": 93399
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-600-frame-528.png",
                "sha256": "30ade4a2986dd397f02b0938bdbbcf8762850738b40f38a9f68fab9c088ee8d0",
                "alphaMass": 93399
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/16x9-duration-600-frame-599.png",
                "sha256": "30ade4a2986dd397f02b0938bdbbcf8762850738b40f38a9f68fab9c088ee8d0",
                "alphaMass": 93399
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 28.241861979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-150-frame-18.png",
                "sha256": "98e3c940d8493d01af6dd311d398b8e2b86d448e7d196e0176c9dbc24dc931fc",
                "alphaMass": 36261
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-150-frame-149.png",
                "sha256": "b16333602024cd22c8047a18f58bf56f60f716040c5b622e9f72bb2ef7cbf742",
                "alphaMass": 107589
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-150-frame-132.png",
                "sha256": "9e1198ddb7a59aa4318f8f247e3f74ab223bf9c97be3d4f894437e34260619f5",
                "alphaMass": 107589
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 24.81098090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-600-frame-22.png",
                "sha256": "a64ef64ebb33f62dc268e3facaabf56819775e3a49e503576fab10152142ef4a",
                "alphaMass": 52497
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-600-frame-150.png",
                "sha256": "f383d822058c72834a601f38dfc7e6076afda3e0dd77a590b2f00cc4a99e973b",
                "alphaMass": 107572
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-600-frame-528.png",
                "sha256": "f383d822058c72834a601f38dfc7e6076afda3e0dd77a590b2f00cc4a99e973b",
                "alphaMass": 107572
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/9x16-duration-600-frame-599.png",
                "sha256": "f383d822058c72834a601f38dfc7e6076afda3e0dd77a590b2f00cc4a99e973b",
                "alphaMass": 107572
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 46.10687934027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-150-frame-18.png",
                "sha256": "dd63107412cc9b5f3b82b5de6e4f5f3ca446a5af5e5f3b8f1bb6586956ceb990",
                "alphaMass": 55793
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-150-frame-149.png",
                "sha256": "9ff7a7e3676fe330f166415be62cb20f50b9bdbc4537d50f8097a07b1c843455",
                "alphaMass": 165918
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-150-frame-132.png",
                "sha256": "baf34a182a4e758b1f0b5484a91a6ff71ccfce4416e3a38dc3e1b758f70a562f",
                "alphaMass": 165918
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 38.891927083333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-600-frame-22.png",
                "sha256": "ed1bd3ac0d5040ac5e1270fcabe29759e78b49e0154e25495d79289fac1cc626",
                "alphaMass": 80319
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-600-frame-150.png",
                "sha256": "0507a3e76764daed777f7b5e2817b0c1f8758966901c10c3f81ccb4ec6af6434",
                "alphaMass": 165903
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-600-frame-528.png",
                "sha256": "0507a3e76764daed777f7b5e2817b0c1f8758966901c10c3f81ccb4ec6af6434",
                "alphaMass": 165903
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/emulsion-brush-develop/1x1-duration-600-frame-599.png",
                "sha256": "0507a3e76764daed777f7b5e2817b0c1f8758966901c10c3f81ccb4ec6af6434",
                "alphaMass": 165903
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
        "note": "1. TitleMatches: The sequence (Images 2-4) shows a brush-stroke texture appearing, revealing a centered screenshot as the stroke completes, supported by the visible motion and structure. This is consistent with the claimed title, 'Brush Stroke Screenshot Reveal'. The movement visibly 'reveals' the screenshot underneath, not just covering/replacing it. \n2. NoBakedHeading: There are no baked-in decorative or unexplained headings, block titles, categories, or language labels in the compositions—only the screenshot content and the brush effect itself. All headings and visible UI text belong to the simulated screenshot asset, which is legitimate content.\n3. BrandAdherence: Three palettes are present (Images 5-7), each using primary/secondary/background/text colors matching the supplied palettes (#c27c46/brown, #554388/purple, #9b47b2/lavender), adapting the brush texture and matting accordingly while preserving the layout/material and keeping all incorporated content legible. The brush and screenshot both visibly contrast the backgrounds, and there are no unexplained fixed block colors.\n4. LanguageAdherence: The compositions in all rebrands use consistent material (hand-brushed borders, matte backgrounds, cropped screenshot), aligning with the language card's guidance on photographic light, type roles (in screenshot), absence of synthetic stock faces, and motion verbs (reveal). Type within the screenshot asset remains consistent. All three rebrands and all phases of the reveal respect this material and role usage, confirming adherence. \n\nIn summary, all checks are passed with visible evidence from every supplied image."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 58,
        "compared": 58,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "365ce54afa079c12724e3c4dd83898b41789876fb3833fa5a5946770509bc6a2",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.836Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7aeba1e7d7c241ec5b9cc02c80fe56c0994e8779b8d7ef215f3e7f654c3295f3",
        "loop": "58e03fdc2d0b6683a3de47e652d749149379f4cacfd4453f69d55816f0f277da",
        "detail": "0721f637c1977fc9afbf8cbef3212c15e8a0b00e479714185db96dd9b0120080"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2552b1d5ab3c89e54ac65bc8634d5c230056b1fddf36e2fc94574133eb00d815",
        "loop": "bb051c5e0f5a8c9a178be5aa0d81c5c711ee438b8bdb7e488735004412dd749a",
        "detail": "0f1d4d99e60ead29d1e238c84bb739b240dae2abd8d6cc41301022603f15b2e8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/emulsion-brush-develop/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "880f7f345d88ff245bf489f800239e83e6cf7cf2903bb3e20af2d2c6e5be210d",
        "loop": "9ca595a716be6cab9c39caf094cd857dc31a49bd510dece8701301122df09746",
        "detail": "cbb0d448c3cc0d97a0fd8ea9c1fdbdf727bbb419e69f5acdb7204240d866ecc3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/365ce54afa079c12724e3c4dd83898b41789876fb3833fa5a5946770509bc6a2/index.mjs",
    "sha256": "365ce54afa079c12724e3c4dd83898b41789876fb3833fa5a5946770509bc6a2",
    "bytes": 69134,
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
    "at": "2026-10-09T10:46:20.427Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
