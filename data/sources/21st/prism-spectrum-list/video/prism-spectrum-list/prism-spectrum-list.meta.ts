// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/craft",
  "job": "process",
  "language": "aura",
  "mechanic": [
    "refraction"
  ],
  "energy": "calm",
  "tags": [
    "list",
    "steps",
    "process",
    "prism",
    "spectrum",
    "light",
    "refraction",
    "optics",
    "glow",
    "craft"
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
      "in": 130,
      "out": 0
    },
    "markers": {
      "settled": 130,
      "impact": 26,
      "bands": 34,
      "dim": 106
    },
    "beats": [
      0,
      26,
      34,
      106,
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
      "key": "items",
      "type": "list",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "beam",
      "prop": "length",
      "from": "left",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "band",
      "prop": "sweep",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "label",
      "prop": "x",
      "from": "slit",
      "settledBy": 110,
      "easing": "spring"
    },
    {
      "target": "prism",
      "prop": "opacity",
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
    "sourceUrl": "21st first-party (a beam refracts through a prism into one brand-colored band per list item, 2026-10-08)"
  },
  "defaults": {
    "items": [
      "Research",
      "Design",
      "Build",
      "Test",
      "Launch"
    ],
    "color": "#F5F5F7",
    "primary": "#4F7BFF",
    "secondary": "#FF6A3D",
    "background": "#0B0B0F",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono",
    "showIndex": true,
    "intensity": 0.85
  },
  "fields": [
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "label"
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
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "showIndex",
      "label": "Show index",
      "type": "boolean"
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Prism Spectrum List",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "prism-spectrum-list",
    "bundleSha256": "50972fef32d2ce33a75f27443f388ac1a983af8bafb0db618750fbfdf94bd62c",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T07:57:38.944Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-paper.png",
        "sha256": "455f6a8af25e6097908df84a17c6bbeaa2c5b57ba6866b045aba1a6922591bc8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-night.png",
        "sha256": "2f13e155bd404d6edbb06d0268e59a921b00eeb61334ba4e75b63c876f82c696"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-color.png",
        "sha256": "98587f81ad0b2e078c34231f6e75d91b5fc3ffcb04913b883d2ba0dbc6fa6d76"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-paper.png",
        "sha256": "3a07a27fbe83f85051a72daf7722cab928e0769abe4846e035ef3509d9e77805"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-night.png",
        "sha256": "26fe13d3878703e77889a9f717e634337ca9c696b8e4854ae4ac66037e5e9146"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-color.png",
        "sha256": "f8c7117e6629a6a477e66db607c10f252d773fab2e33b8a2e1cd3e098a2138d6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-paper.png",
        "sha256": "143848088725c4439c0b4f94930f539fe72eca26fa2b9d15cb82cbf4fd4f1687"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-night.png",
        "sha256": "a11fedbf2770722f76237ae48a982629b23c1b625761b95479a360aca7076023"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-color.png",
        "sha256": "00d740a1407e29b5155c2c74da0c4a49448aa90116bdeaa295090927bc68b708"
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
          "prism-spectrum-list--16x9",
          "prism-spectrum-list--9x16",
          "prism-spectrum-list--1x1"
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
            "paperNight": 50.78691948784722,
            "paperColor": 35.712972005208336,
            "region": {
              "left": 3,
              "top": 134,
              "width": 1865,
              "height": 812
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 55.06578233506944,
            "paperColor": 35.665771484375,
            "region": {
              "left": 66,
              "top": 0,
              "width": 984,
              "height": 1756
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 55.165201822916664,
            "paperColor": 37.04242621527778,
            "region": {
              "left": 0,
              "top": 156,
              "width": 1050,
              "height": 768
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
            "occupancy": 1.029476380315501,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0350261182147757,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.029476380315501,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1558053648414102,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1809623540774337,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1558053648414102,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.972350531433424,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9798157946306096,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.972350531433424,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 24.96853298611111,
        "frames": [
          19,
          130,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 24.917643229166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-150-frame-18.png",
                "sha256": "16ce76f436f51d555b4bf3acfe444df0eaa1d89eee6b5cfa6e5f8d0d20475259",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-150-frame-130.png",
                "sha256": "96c5eb356167d781344493350afbf063c7051fd1426deac77dfb99b96ed2d0f5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-150-frame-132.png",
                "sha256": "3bcd29a497809fd97918719b79ef01156b93945f88420e296827f278160875f5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-150-frame-149.png",
                "sha256": "40f24657dd0201191d00b5b8e59ae9952260cabb481c151a3ef0b22c9ebd51a8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 24.96853298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-600-frame-19.png",
                "sha256": "34cca9c473c712871ff773e9e228388cc39a04f312ad929fb3dbfed4c9ea6c34",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-600-frame-130.png",
                "sha256": "96c5eb356167d781344493350afbf063c7051fd1426deac77dfb99b96ed2d0f5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-600-frame-528.png",
                "sha256": "1b699fcab8a79fc7966c9c71238ad8620b97c6512224caa0ace975670405be76",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/16x9-duration-600-frame-599.png",
                "sha256": "007855d3f8776b152ac80c00c3357276f5d59537073fbbb399dc7e0a4c813783",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 29.79155815972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-150-frame-18.png",
                "sha256": "43dd35de87dcc6242fa0814e30fd20fb5d0a33b23e1f45ee197d9ca5d39c8086",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-150-frame-130.png",
                "sha256": "0d731e41a405c8f9ef8577543758b0215e286078d0a3e2fc57835df240809206",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-150-frame-132.png",
                "sha256": "9cb659c5964d41f7a48d3cd995c692bd7e7e2d69a88f70cb4d678d655b9a0d09",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-150-frame-149.png",
                "sha256": "f3beb76d2a82bf4c88e91c3f7288c7650e2efa9930eb795b8673d06ce2980425",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 29.856770833333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-600-frame-19.png",
                "sha256": "3c96f1d2c9243e2b10562f708718f57b8ca0ca542ff0511161145b8d578fc323",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-600-frame-130.png",
                "sha256": "0d731e41a405c8f9ef8577543758b0215e286078d0a3e2fc57835df240809206",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-600-frame-528.png",
                "sha256": "1ce946120d4f0e2a53a3ad43089d6abf5651be092ee8a1de29e2c163861ebfa2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/9x16-duration-600-frame-599.png",
                "sha256": "b8838b567925855e0083027c0a642602b656e637f1b8a4c91b5d4c5e645e6120",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 24.353190104166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-150-frame-18.png",
                "sha256": "70ab4dec41fe6a65bf16db687fa2332383817b221e7ab0f7e348c364331d23ae",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-150-frame-130.png",
                "sha256": "dbd93a31784c5246901a9d1240c17880da5cecb04a979234b96075fa1e58c0d2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-150-frame-132.png",
                "sha256": "a1719275aaf81c0b95e0af09a8ce96e9f73ca49250474f5764bc1b0ebe6084d6",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-150-frame-149.png",
                "sha256": "3173f6236a799a35c7124bc88cc1c48caf8c1eb47c767a3e30587ded08ab3aeb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 24.411783854166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-600-frame-19.png",
                "sha256": "9e8834abb2436f4ea3bbd2574a517bcf002def192d16f74306260f36965a88cf",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-600-frame-130.png",
                "sha256": "dbd93a31784c5246901a9d1240c17880da5cecb04a979234b96075fa1e58c0d2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-600-frame-528.png",
                "sha256": "7602502c7a25790908724d5ef896a10a824387adf4f3fdda0b6804902bb304a4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/prism-spectrum-list/1x1-duration-600-frame-599.png",
                "sha256": "113a9b3f3c31aeb1b2f8d724c15a44eae832a953181933d29823580f3a616706",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject is a prism dispersing a light beam into five colored bands, each labeled with a stage from the named-slot content ('Research', 'Design', etc.), matching the concept of 'Prism Spectrum List' both visually (prism, spectrum, list format) and in sampled motion (images 2-4 show spectrum bands and labels revealing over time). No evidence of a merely titled or unsubstantiated effect; the effect is apparent in the actual subject and animation samples.\n\nNoBakedHeading: There are no decorative, fixed, or unexplained block titles, category, or language labels baked into any composition. All prominent text corresponds to editable named-slot content or functional parts of the design (labels in the spectrum); no extraneous headings are present.\n\nBrandAdherence: Three palette rebrands (images 5-7) show distinct backgrounds, spectrum and text colors according to the supplied palettes. The subject and material remain unchanged; contrast and legibility are consistently maintained. All band and ink colors change appropriately, retaining the intended band shapes and material softness, with no unexplained or fixed color blocks. No inappropriate transfers or retention.\n\nLanguageAdherence: All rebrands and motion samples retain the same structured subject, with continuous soft light fields around the sharp subject, in keeping with the material description. No evidence of restricted or shifted type roles—type remains sans and clearly tabular for numerals. Light is gradient and ambient per brand role, and motion progression in samples (images 2–4) follows the expected verbs ('reveal', 'focus', 'breathe') with atmospheric light, preserving legibility. Language card is present and followed across all variants."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 17,
        "compared": 17,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "50972fef32d2ce33a75f27443f388ac1a983af8bafb0db618750fbfdf94bd62c",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.546Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/prism-spectrum-list/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-spectrum-list/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-spectrum-list/16x9/detail.mp4",
      "bg": "#0b0b0f",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "708e3958c42eb5f57d1b7e6231aa3c9f22aaafdac2be2b167f26c7cbc4c68680",
        "loop": "39e2157d2826a0e5edf6fa2b4ed9567243c6857f3fa331efa33f4b4807c4625c",
        "detail": "cbb813e6f6ed8981ea38562e6bebd896d358ff3f45480f0a3b0386ce76194b40"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/prism-spectrum-list/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-spectrum-list/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-spectrum-list/9x16/detail.mp4",
      "bg": "#0b0b0f",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01b1757bdbca9bc2688ee1f221df7ad316749fb5be6f049e71b86d3925d7e358",
        "loop": "a8669c5b15a378acf095b090a4f2beec2542071a818eee860feae4ef95e56965",
        "detail": "82d4d794721e49345a76d344cdbd72d8e61c3f53b1ac091af997fde9edd00d85"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/prism-spectrum-list/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/prism-spectrum-list/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/prism-spectrum-list/1x1/detail.mp4",
      "bg": "#0b0b0f",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e7b20ada6a685c67553c100d7c47649d82a74874f764845f5d71860c59f43fc4",
        "loop": "82978dabdb5a0cb04ed5a78cf6ee7bf33231d41d5b66a390455d2bea5c76c6c2",
        "detail": "19ba22278b48b68cfdd5f4a3703c8f7738c24743a004d31b50836382bb2e9084"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/50972fef32d2ce33a75f27443f388ac1a983af8bafb0db618750fbfdf94bd62c/index.mjs",
    "sha256": "50972fef32d2ce33a75f27443f388ac1a983af8bafb0db618750fbfdf94bd62c",
    "bytes": 177184,
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
    "at": "2026-10-09T09:02:11.879Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
