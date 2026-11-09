// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "fold"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "reflection",
    "water",
    "lake",
    "ripple",
    "mirror",
    "fold",
    "flip",
    "horizon",
    "sunset",
    "glow",
    "opener",
    "launch",
    "kinetic type"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 100,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96,
      "reflection": 0,
      "fold": 36,
      "flat": 48,
      "upright": 57
    },
    "beats": [
      0,
      36,
      48,
      57,
      70,
      96
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
      "maxChars": 40,
      "lines": 3,
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
      "target": "reflection",
      "prop": "opacity",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "rotateX",
      "from": "below",
      "settledBy": 96,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (a title rises out of its rippling water reflection and stands on the waterline, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "color": "#22172E",
    "primary": "#6B3FA0",
    "secondary": "#FF7F50",
    "background": "#E9E4F2",
    "fontFamily": "DM Serif Display",
    "ripple": 0.4,
    "reflection": 0.6,
    "glow": 0.8,
    "grain": true,
    "seed": 7
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 40,
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
      "key": "ripple",
      "label": "Ripple",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "reflection",
      "label": "Reflection",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
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
  "name": "Water Reflection Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "reflection-fold",
    "bundleSha256": "9d2d5a13ea29d15bf25768471f2cb05e7bb5fc16f4836f55f7e1849a8f33ef8f",
    "sourceSnapshot": {
      "sha256": "c8715db50bf5f6e7adeda1c9cc3c7aaf7ceeb34bc8961bc41f1e021a1e367666",
      "files": 1845
    },
    "renderedAt": "2026-10-09T11:07:54.108Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-paper.png",
        "sha256": "d6d8ac34aba907ed0acfec1b1d7788f798ec6c821abb8243cf52ed4cd70f08df"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-night.png",
        "sha256": "01831d0e7ceff668f836195449e8c99413db31e99799a51173950153f32a2c32"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-color.png",
        "sha256": "360d314825d9ecf2fade9490c86176571106847ab577a4c6219526957978339e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-paper.png",
        "sha256": "6cc67faf195f9e97191178d1daa03d0dacbd223c4c302a9a5f7187351d163ad0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-night.png",
        "sha256": "031fd6833ab9d6041f390735aeabd20df3c6c7b72e43c7299bee043106fce03d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-color.png",
        "sha256": "19e1d1ed59a3a5dafbc5621c3d3e1ba957fd03626650d7551c4737476be36e9c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-paper.png",
        "sha256": "7f9c202ec411eb2cf5b13c1e03075b89a9e09b842cad040ee1a22db7e774021e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-night.png",
        "sha256": "21fe8f7a54e43601a39be86d64fde6cac25005ea2775af944faff21dfb1b7e6b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-color.png",
        "sha256": "16f2a525b0c676e029f5f2ea3f38ae7f8930b2c2a4030373e8a5bc819a1f914e"
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
          "reflection-fold--16x9",
          "reflection-fold--9x16",
          "reflection-fold--1x1"
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
            "paperNight": 97.21698676215277,
            "paperColor": 49.207248263888886,
            "region": {
              "left": 90,
              "top": 467,
              "width": 1740,
              "height": 413
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 63.903347439236114,
            "paperColor": 32.49034288194444,
            "region": {
              "left": 0,
              "top": 449,
              "width": 1080,
              "height": 1312
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 66.62950303819444,
            "paperColor": 57.327311197916664,
            "region": {
              "left": 16,
              "top": 478,
              "width": 1048,
              "height": 347
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
            "occupancy": 0.4832482118361749,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4875841154362981,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.34800957420005046,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9492512282690856,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9470368008314439,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8249699056577365,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3134827319130671,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3047052154195012,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4418599858782105,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.6435546875,
        "frames": [
          14,
          96,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 100,
            "averageChannelDifference": 5.991102430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-100-frame-12.png",
                "sha256": "620314a5d6163668d4a101fe3a5e76211487f92a031af9912686b72fe47373bc",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-100-frame-96.png",
                "sha256": "d1513920a4bbc013b122d35b10c3c53fac6b2a248517df03972750febd392b3f",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-100-frame-88.png",
                "sha256": "cbaa22741f989514af047fbae62b0685e2e25b26789c5db3445f8906a16ac50c",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-100-frame-99.png",
                "sha256": "bcc098463ae30346ad2c817f526c3603ff55696d3b96d4851854efe0dfed6e88",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.6435546875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-600-frame-14.png",
                "sha256": "b734e9015f40e7685605783efa6fe8c9a8571633218929dbe51a341723c74c74",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-600-frame-96.png",
                "sha256": "d1513920a4bbc013b122d35b10c3c53fac6b2a248517df03972750febd392b3f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-600-frame-528.png",
                "sha256": "f22a999918ef4ecbe3b647aa2df07a046ba57c65303233f29c335d676aafa360",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/16x9-duration-600-frame-599.png",
                "sha256": "a2478e3e1058e163598f1e34697fe8a71f76a9c619b37ec770dcbfb1597b753d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 100,
            "averageChannelDifference": 8.257269965277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-100-frame-12.png",
                "sha256": "9a27bd6b540e06f3a1e2feb06cb52fe606a506edc5b77b6646ae0db20f10b7e1",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-100-frame-96.png",
                "sha256": "ee1d81dea1cf34a05b8a781e908d93af49789cfb97abae777b0a38560b48d0b9",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-100-frame-88.png",
                "sha256": "eed03b99dfb17f57068bbfdb72285bc43a68449bc24ce3f184729a121569a208",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-100-frame-99.png",
                "sha256": "d6051fd4fe678cd7ddd7821cba0d86af0fb94723574a18581f63809d5c1cb215",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.980577256944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-600-frame-14.png",
                "sha256": "eae596be20a7354df3dd553074dfc73b96d066abfd62320287e8f74edbcf637e",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-600-frame-96.png",
                "sha256": "ee1d81dea1cf34a05b8a781e908d93af49789cfb97abae777b0a38560b48d0b9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-600-frame-528.png",
                "sha256": "865fe8c269d944e4cf69b07e063351078f19159cf367d63f54d7cabddf8cab10",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/9x16-duration-600-frame-599.png",
                "sha256": "9ffd803724020c995e057104cbda9d5258243b9a14e5d2bf9ceb239478afdf9d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 100,
            "averageChannelDifference": 5.857638888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-100-frame-12.png",
                "sha256": "0ee034f5a04ed6c4b69fce4f941dee66f81fd0d640850c526ce9af526b6e2d63",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-100-frame-96.png",
                "sha256": "8be1b63b367d1a33a6516d5deaf6bbb8ceaacf2374ff9cf6bc8d8db5e470c78d",
                "alphaMass": 587520
              },
              {
                "frame": 88,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-100-frame-88.png",
                "sha256": "cc678323ce4945055eaa3ff2c55ad76497d437d1c168b0ea39bcac895e63fca4",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-100-frame-99.png",
                "sha256": "519377b0db7f94f45a0f533bf10bd0f31813560784908f6be99cde793d504830",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.517361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-600-frame-14.png",
                "sha256": "7bac41f1d68af3a0a422df1db2a2d7537e4f9adfee311ea526aa89a5785de43c",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-600-frame-96.png",
                "sha256": "cadb7568146b1e7f0ea3dfada4bd10fce19c3c1bce23a88ebcd5bb1193807489",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-600-frame-528.png",
                "sha256": "7061c2930b1a9ab701e70f6409b003e5f49f8371f05987128a52ae8a9052e02b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/reflection-fold/1x1-duration-600-frame-599.png",
                "sha256": "3f76b73bc544bc5523d6a69ff2c1bdb7d30634295afea2176fd439eb61ba13ea",
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
        "note": "1. TitleMatches: The title 'Water Reflection Title' is clearly supported by the visible subject and the motion samples. All images show the text 'Ship faster' with a water-like reflective effect beneath it. The motion samples (images 2-4) show the reflection behavior, consistent with water, including a transition where the text disappears and only the water reflection remains. This directly supports the claimed title.\n\n2. noBakedHeading: There are no decorative or unexplained block titles, category, or language labels baked into any composition. All visible text matches legitimate slot content and serves only as the main message.\n\n3. brandAdherence: Images 5-7 display the same poster in three distinctly different palettes. Each poster exhibits strong visible legibility in both light and dark modes, and the inks/backgrounds reflect the supplied palette colors, while the shapes and water-reflection material are preserved. There are no unexplained fixed block colors.\n\n4. languageAdherence: All visible type roles (oversized, display, sans, numerals), material effects (mask, waterlike behavior), and graphic qualities appear consistent across rebrands and motion frames. There is no use of forbidden elements (glass, browser chrome, floating cards)."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 51,
        "compared": 51,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9d2d5a13ea29d15bf25768471f2cb05e7bb5fc16f4836f55f7e1849a8f33ef8f",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:09:26.020Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/reflection-fold/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reflection-fold/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reflection-fold/16x9/detail.mp4",
      "bg": "#d0c4e2",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0ba9fde4a7dc12bdae6d6b75fd36a1ce049c7c6536eaf6018b709eb2efc50777",
        "loop": "ee43a6e12e7a2fcee7b464b9a0e1cfe46c88d15d013e9b2b5bad3406284259c0",
        "detail": "1115cf5534a7d3ae0db4dd14a66bd677cc5c667224782bebf800894088799ef6"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/reflection-fold/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reflection-fold/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reflection-fold/9x16/detail.mp4",
      "bg": "#d0c3e2",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "354c383728c9ba45728bf1b4fb9322109ce8df8ba96ef2d9689921abdcef4bd5",
        "loop": "602d6e9df24500237baa26c1b84fa157092835b7d1b97480ea6bce1181de8f6d",
        "detail": "f4fc57f89529ab8418021784449269402658b067ab9edee3ac3b7b2616422233"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/reflection-fold/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reflection-fold/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reflection-fold/1x1/detail.mp4",
      "bg": "#d0c4e2",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7e7848ed8c0ae28901bf37e65764b7cf1814f43bf443963685cc40334418deae",
        "loop": "42426e288641ade1f0d64494707655910816a01471f94cd5917245218816d230",
        "detail": "67164e136d4a1e0da1af3c14d1111250705c6b8a69b25fb1710aa504b736a32c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9d2d5a13ea29d15bf25768471f2cb05e7bb5fc16f4836f55f7e1849a8f33ef8f/index.mjs",
    "sha256": "9d2d5a13ea29d15bf25768471f2cb05e7bb5fc16f4836f55f7e1849a8f33ef8f",
    "bytes": 170138,
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
    "at": "2026-10-09T11:25:32.077Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
