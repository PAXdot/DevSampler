// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "uncurl"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "ribbon",
    "spiral",
    "uncurl",
    "text on path",
    "kinetic type",
    "banner",
    "opener",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 120,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 112,
      "out": 0
    },
    "markers": {
      "settled": 112,
      "emerge": 30,
      "uncurl": 42
    },
    "beats": [
      0,
      30,
      42,
      80,
      112
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
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "eyebrow"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "ribbon",
      "prop": "path",
      "settledBy": 30,
      "easing": "ease"
    },
    {
      "target": "ribbon",
      "prop": "curl",
      "settledBy": 112,
      "easing": "spring"
    },
    {
      "target": "kicker",
      "prop": "y",
      "from": "below",
      "settledBy": 112,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (a headline ribbon spools out of a spiral and uncurls flat onto its baseline, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "kicker": "Introducing",
    "color": "#141414",
    "primary": "#0F766E",
    "secondary": "#B45309",
    "background": "#FAF7F2",
    "fontFamily": "Bricolage Grotesque",
    "bodyFontFamily": "Geist",
    "ghosts": true
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
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
      "key": "ghosts",
      "label": "Ghosts",
      "type": "boolean"
    }
  ],
  "name": "Uncurling Ribbon Text",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "ribbon-path-text",
    "bundleSha256": "947f5dbbd1ca83981e0230ea2d01d272a464d1b9b6dbb66dd849243442b2830c",
    "sourceSnapshot": {
      "sha256": "a0bf921565e20b46119c2943b1bf56c893d63f6fe38bc741ab25e796006b7256",
      "files": 1866
    },
    "renderedAt": "2026-10-09T13:59:10.562Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-paper.png",
        "sha256": "f7f5492fb41be9bf34ef41d66afb89989df90b822e1874c609225ef06ebb4522"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-night.png",
        "sha256": "c4a5637a720d0473d553f189974b9f1932706bf2463e70fefa0c77edf5b70b20"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-color.png",
        "sha256": "f62427b89a614590e1a9ff87d1a8c41f42b50483823483791cb923bbcc2a5f31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-paper.png",
        "sha256": "03b79b1000fb1bb226f4669d4dc6577e4e6fac1ef3b36289eb78e49eaa51d9a7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-night.png",
        "sha256": "dcdafacf359759d6d9222d49b1d5de8f91e746570c17d59d7e2ee633fd702781"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-color.png",
        "sha256": "bd8533e9878ecf3b104cce6770ffe5cc2367651b60aca8967e51df287b6ee995"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-paper.png",
        "sha256": "b199a191647fbdb2b203e327df6e825d72fbe18e2409154cbe83581ba1459e79"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-night.png",
        "sha256": "ca990d6e876f59e062b4cb398c6d47549ff2dedd165f78ee3dd060ba2d7c5b72"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-color.png",
        "sha256": "dc562e6851f9dbe7d8ed5eae5ebbcc906adc08701b869d98786a75d4f0834e06"
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
          "ribbon-path-text--16x9",
          "ribbon-path-text--9x16",
          "ribbon-path-text--1x1"
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
            "paperNight": 45.117404513888886,
            "paperColor": 21.228379991319443,
            "region": {
              "left": 0,
              "top": 421,
              "width": 1920,
              "height": 338
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.38037109375,
            "paperColor": 58.235866970486114,
            "region": {
              "left": 0,
              "top": 292,
              "width": 1080,
              "height": 1353
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.974636501736114,
            "paperColor": 22.051188151041668,
            "region": {
              "left": 0,
              "top": 425,
              "width": 1080,
              "height": 361
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
            "occupancy": 0.4317313345091124,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4435416141765349,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4317313345091124,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8997956821617538,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8997956821617538,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9987067743764174,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4632254136222391,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47372343999328137,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4632254136222391,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.919921875,
        "frames": [
          16,
          112,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 120,
            "averageChannelDifference": 21.0458984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-120-frame-14.png",
                "sha256": "3832f43206249e01087214212b91aaab654419e323fc7f0d274f05e0956d4cf3",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-120-frame-112.png",
                "sha256": "b530c7be8dd48766d18f7386ee7fd0d733aab7ef029c227f87b228654a15cab9",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-120-frame-105.png",
                "sha256": "5fe3c4ada81b0abcf1e321ee2f3be04ecccaaac6d530b27c4545cc2574f1fce4",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-120-frame-119.png",
                "sha256": "5c2ba909a88647edc26e0ce93c49a3bf80f4e17afdce272647b103a10472405f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.919921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-600-frame-16.png",
                "sha256": "4856bd86bee2d2ef3d6eb72a703b2802bd724c0773482f006ac37396cff0c16a",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-600-frame-112.png",
                "sha256": "b530c7be8dd48766d18f7386ee7fd0d733aab7ef029c227f87b228654a15cab9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-600-frame-528.png",
                "sha256": "b7ee0f98a4f00b2bb152d3051e20bc4f2cce350f87eb106bdbd73f7d6c4d51d1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/16x9-duration-600-frame-599.png",
                "sha256": "b7ee0f98a4f00b2bb152d3051e20bc4f2cce350f87eb106bdbd73f7d6c4d51d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 120,
            "averageChannelDifference": 33.915690104166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-120-frame-14.png",
                "sha256": "96961d005d17fb082ef38214ba685c3fa3cd821b46c90bee8f246c7c34711026",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-120-frame-112.png",
                "sha256": "f2c032546626e5eaa40078f6ca5d5f111ece532f7b2f329d93c27d11ac564ae3",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-120-frame-105.png",
                "sha256": "48da2919fd9e769ddf0f254bbd88ecdafeb6f3214111e02d33fcd3d45d020f23",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-120-frame-119.png",
                "sha256": "0a11a0a8b7e12211342fce5da92ab80c614d4e48b1c4068e25742da3bcbe8c31",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 33.68641493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-600-frame-16.png",
                "sha256": "efc721e9128d5d8620c7e3f4ee87837e50c1b49fe108395b641774d5f3afac8c",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-600-frame-112.png",
                "sha256": "f2c032546626e5eaa40078f6ca5d5f111ece532f7b2f329d93c27d11ac564ae3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-600-frame-528.png",
                "sha256": "61495127c45d766b0f18629e3b5f58544959619f66e72ce812b5d1778ed24500",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/9x16-duration-600-frame-599.png",
                "sha256": "61495127c45d766b0f18629e3b5f58544959619f66e72ce812b5d1778ed24500",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 120,
            "averageChannelDifference": 19.681749131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-120-frame-14.png",
                "sha256": "103ff27ceec9c5dc0bb1d350b0039b3af874d91e119e3cb23be40bddc389f380",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-120-frame-112.png",
                "sha256": "114aefb1f0081203eecb724315efa746f22ea56c31ba1a3c52b7c983b3c9f79f",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-120-frame-105.png",
                "sha256": "d4fc3d2e2156839d77550832e7d31c5adf8b7425120e3148ea6ddfa887097e03",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-120-frame-119.png",
                "sha256": "619ed56e41ed4db8391936227b9cb12d7ef11f123d600f4fbf1fb745f5fbde95",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 19.448567708333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-600-frame-16.png",
                "sha256": "c36236bfd07e2e363b826413ccc66e834f9a00f99d065ddfdd78670516327dc5",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-600-frame-112.png",
                "sha256": "114aefb1f0081203eecb724315efa746f22ea56c31ba1a3c52b7c983b3c9f79f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-600-frame-528.png",
                "sha256": "f4cf0c7aa7d04f36960478608bc63451b56129b70b1bfb1e07f50cfbf62c4f2f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/ribbon-path-text/1x1-duration-600-frame-599.png",
                "sha256": "f4cf0c7aa7d04f36960478608bc63451b56129b70b1bfb1e07f50cfbf62c4f2f",
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
        "note": "1. TitleMatches: The subject visually and structurally supports 'Uncurling Ribbon Text'. The first image presents a ribbon with text ('Ship faster'), and the second image clearly shows the ribbon curled into a spiral, making the text appear on an uncurling tape—matching the promised 'uncurling' effect. The third image resumes to the straight ribbon. This makes the transformation clear and aligns with the title.\n\n2. noBakedHeading: There is no decorative, unexplained block title or category label baked into any image. The only text visible as a heading is the editable 'Introducing' kicker, which legitimately matches the named slot content.\n\n3. BrandAdherence: All three rebrand images use the correct palette order, with appropriate primary/secondary/bg/text assignments. Each rebrand adapts the ribbon and text colors accordingly, while preserving the overall shape and material of the composition. The text, border, and accent marks are all clearly legible in each palette.\n\n4. LanguageAdherence: Across all sampled images (including rebrands and motion sequence), the visual material, type roles, and graphic treatment remain consistent with the supplied language card. Type stays oversized and sans-serif, with tabular-like numerals visible, a static background, and no use of forbidden effects (e.g., frosted glass, browser chrome, floating cards). Movements and type appearance align with card instructions."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "947f5dbbd1ca83981e0230ea2d01d272a464d1b9b6dbb66dd849243442b2830c",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T13:59:22.272Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/ribbon-path-text/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ribbon-path-text/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ribbon-path-text/16x9/detail.mp4",
      "bg": "#faf7f2",
      "posterFrame": 112,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "a365063f3440258bba30ee3824fae80a046333d93682655fd78ebb2eea9d7f62",
        "loop": "600df23347f7b60314f80a054837b69ced108cb9baf0707de39d78ac48b01ed5",
        "detail": "54f0a09d6affb99b4b5892b62e8b840972911e51339c30a779cb410856da7a3a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/ribbon-path-text/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ribbon-path-text/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ribbon-path-text/9x16/detail.mp4",
      "bg": "#faf7f2",
      "posterFrame": 112,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "cae3ecc5bd5bf9c0d43659644acca4cc7932b890b51c13b213c14735de86b258",
        "loop": "c80f6d67759e0fdd0dda190d47eccaefdd6e86082aa2ecd0b0451c9d952d5337",
        "detail": "156c93ac2a9bf48f26ca8e44b1662ce72f401308bb7650a2e68f64eae31e3f26"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/ribbon-path-text/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ribbon-path-text/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ribbon-path-text/1x1/detail.mp4",
      "bg": "#faf7f2",
      "posterFrame": 112,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "06e1b0d7158615e4f56ccbe9186ef82356e9527ee65beb29c2dba9f77319289b",
        "loop": "51ea9fa3b9feb55693117829f10a39c83db277eee7489e4305a06e675775b836",
        "detail": "22bde8dccd3a91107775ab5e137e9b5d623a5d75e45a7b4a39469c4556651b29"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/947f5dbbd1ca83981e0230ea2d01d272a464d1b9b6dbb66dd849243442b2830c/index.mjs",
    "sha256": "947f5dbbd1ca83981e0230ea2d01d272a464d1b9b6dbb66dd849243442b2830c",
    "bytes": 168614,
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
    "at": "2026-10-09T14:04:01.884Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
