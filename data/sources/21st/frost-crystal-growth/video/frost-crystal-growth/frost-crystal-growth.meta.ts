// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "crystallize"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "frost",
    "ice",
    "snowflake",
    "crystal",
    "dendrite",
    "glass",
    "winter",
    "cold",
    "glint",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 170,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 160,
      "out": 0
    },
    "markers": {
      "settled": 160,
      "seed": 4,
      "race": 14,
      "bloom": 60,
      "glint": 114
    },
    "beats": [
      0,
      14,
      60,
      114,
      160
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
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "plate",
      "prop": "outline",
      "from": "corners",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "mark",
      "prop": "opacity",
      "from": "hidden",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "dendrites",
      "prop": "length",
      "from": "plate corners",
      "settledBy": 148,
      "easing": "ease"
    },
    {
      "target": "glint",
      "prop": "x",
      "from": "left",
      "settledBy": 156,
      "easing": "linear"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (six-fold frost dendrites crystallize across a glass pane from the logo outward, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Crystal clear",
    "primary": "#58A6FF",
    "secondary": "#3FB950",
    "color": "#E6EDF3",
    "background": "#0E1116",
    "density": 1,
    "grain": true,
    "fontFamily": "Inter"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.5,
      "max": 1.5
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Frost Crystal Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "frost-crystal-growth",
    "bundleSha256": "33371a54ed80da8fd402de7dd3dca9ec39aabc2ab41dca5013351a46f363e95f",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:58:25.475Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-paper.png",
        "sha256": "9385706a66ee60f946a7bf5e8087ad737dc8ad28e19104b020fcfd722faf5887"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-night.png",
        "sha256": "93411136333eaed1a4d1cb06310a0026831f6a6c0c1c6dc7e52878dacd4a35a7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-color.png",
        "sha256": "e10644d07d29f6dba6eeaae17e199251915e51fb2ab742d24320f5f2c7d38b57"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-paper.png",
        "sha256": "cbf256272fc2d6dbacdbf8381ffb2306c4636efb6ad3eac20890b8963b5db335"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-night.png",
        "sha256": "ad6b5a341b97115b856be76db060fed99a8950e41c6f9a5288e0917fa6f05459"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-color.png",
        "sha256": "d29b652e02d4d68a47c479f5b564c8669fe34a947d0278debd6757be9dd4fd43"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-paper.png",
        "sha256": "3e217c20e231d3cd7430b500a02f48d0a910ad7100798b10c15735ac422a4113"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-night.png",
        "sha256": "4fc215abefbb9154204147718dfcdff5e5b5ba2a3677641847eaad78628e7c5a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-color.png",
        "sha256": "68900229536ea7632eedbd1ff9bf30e867951681fc36512d7746743fccb9f435"
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
          "frost-crystal-growth--16x9",
          "frost-crystal-growth--9x16",
          "frost-crystal-growth--1x1"
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
            "paperNight": 21.41924370659722,
            "paperColor": 10.972547743055555,
            "region": {
              "left": 11,
              "top": 7,
              "width": 1893,
              "height": 1067
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.708604600694443,
            "paperColor": 10.875786675347221,
            "region": {
              "left": 5,
              "top": 7,
              "width": 1070,
              "height": 1899
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.059326171875,
            "paperColor": 10.523763020833334,
            "region": {
              "left": 4,
              "top": 7,
              "width": 1072,
              "height": 1068
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
            "occupancy": 1.3804843166047287,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3797550591738756,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3804843166047287,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3887535627677,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3867250378803788,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3887535627677,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3911051389005535,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3911051389005535,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3911051389005535,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.037217881944443,
        "frames": [
          24,
          160,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 20.337999131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-170-frame-20.png",
                "sha256": "01a07cb38d432996809492992f48eecb2633e57c1cc172621645a4ef3b54153c",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-170-frame-160.png",
                "sha256": "0833f5e3b137b371074b05c7b30d2b53586f9684d3eb297e1828b68fc9b48af2",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-170-frame-149.png",
                "sha256": "0908780cbfa45a2a20acf6d705508a70d98de392805694be442658ce0c3ef393",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-170-frame-169.png",
                "sha256": "1269b720dbd079941920e25e09f3412dac888bbf41339e4bea6049e08072d69c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.037217881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-600-frame-24.png",
                "sha256": "5289591bda383bb55db953825f77106797e7ca15f5cda7ef701954ec295b7479",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-600-frame-160.png",
                "sha256": "0833f5e3b137b371074b05c7b30d2b53586f9684d3eb297e1828b68fc9b48af2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-600-frame-528.png",
                "sha256": "af16aa5d86bdb4d3b651a852045d73b9523f0199bb7abf316b214e303421336b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/16x9-duration-600-frame-599.png",
                "sha256": "b8a771759cc065008889b0d49cb55975c49408590ba10d285940727d2849d191",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 19.875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-170-frame-20.png",
                "sha256": "18984d761ae7eeae47abe14f7a1b0455f2cf0feb5fb41c63ca83562d731b8a25",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-170-frame-160.png",
                "sha256": "dbb4c6717ad597ba8baa3e81b3cc8180e0d0f9c5505f2e5c6bb63f041203abc7",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-170-frame-149.png",
                "sha256": "b5adb6af0c40544659cbb0e263eb8c2d99d8c96571d3f6692df9770f133a5e4e",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-170-frame-169.png",
                "sha256": "b49d02b067d49aec18fc260958716b222a20c0f9a3f9df7d0bcb64798585570e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.557508680555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-600-frame-24.png",
                "sha256": "6bc10a20fd26c55ea058ec47f30911fb429a5a05c542c29a81af0c56b03080ab",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-600-frame-160.png",
                "sha256": "dbb4c6717ad597ba8baa3e81b3cc8180e0d0f9c5505f2e5c6bb63f041203abc7",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-600-frame-528.png",
                "sha256": "b84412ea9b96b5ae7d0c77087de6f5f67e3220285cfd4de1f63ca9898299fd55",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/9x16-duration-600-frame-599.png",
                "sha256": "6eeed1d187aa665a9c47182ff384d28c96a59cd11640b48fa71b71f117aad2bf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 20.286024305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-170-frame-20.png",
                "sha256": "4b90f151d9146159a02efc1f1edfbee4898fdff8107b0d7a24dd871d5685b516",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-170-frame-160.png",
                "sha256": "76c8b746973317a9a3499f120c6b43f46d8e38413b2c79d388d12644762bef8f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-170-frame-149.png",
                "sha256": "dde8675c3720906930ecb47c0803cbc3d84fac22fc1a6a673044710811c042c5",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-170-frame-169.png",
                "sha256": "b2089461de0d4fc60f8e3e49ba70a3292499994d1c8698d525e9c45e2c9af3d4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.018880208333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-600-frame-24.png",
                "sha256": "e01b94e87639d2b083387442e7c8a8fc231fe97938341578a1cd069e130c22f7",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-600-frame-160.png",
                "sha256": "76c8b746973317a9a3499f120c6b43f46d8e38413b2c79d388d12644762bef8f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-600-frame-528.png",
                "sha256": "dae00e333498045002175ad276396b5cca26cbbb3e8b41e5ebae06b454160b00",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/frost-crystal-growth/1x1-duration-600-frame-599.png",
                "sha256": "1cb6ed635234734bfd88e194d53c9a1c9f58cba73dfa04f882dbc57000063047",
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
        "note": "TitleMatches: The subject and sampled motion (frames 2–4) support 'Frost Crystal Logo.' The central logo is surrounded by crystalline, snowflake-like structures, with motion frames showing a parallax zoom and growth of branches, matching the language card's description of 'overlapping translucent lenses ... visible depth,' 'shallow parallax,' and 'refractive layers.'\n\nnoBakedHeading: No decorative title, category, or language label is visually baked into the design; visible heading ('Crystal clear') matches the named slot for editable content and appears in a proper UI/content context, so this is legitimate.\n\nbrandAdherence: The last three images (5–7) each rebrand the same poster design under distinctly different color palettes (light, dark, color-tinted backgrounds) and update content, lines, and text color to remain legible and on-brand without unexplained color artifacts. All elements preserve logo shape and 'material,' directly reflecting the provided color palettes.\n\nlanguageAdherence: Across all rebrands and motion frames, the type role remains sans-serif and consistent, numerals retain a tabular style, and text is always legible. Panel and lens effects rely on translucency and refractive structure, never showing opaque generic cards or unmotivated neon. Edge highlights, parallax, and refractive motion/scale are present, consistent with the supplied language card. No contradictory language present."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 34,
        "compared": 34,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "33371a54ed80da8fd402de7dd3dca9ec39aabc2ab41dca5013351a46f363e95f",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.884Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "frost-crystal-growth",
      "vsPositive": 1,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "809bb0036fd24a8ed7f75b32e2fdc5bf1c7214e1158b1020823b75660e987c07",
      "bundleSha256": "33371a54ed80da8fd402de7dd3dca9ec39aabc2ab41dca5013351a46f363e95f",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/frost-crystal-growth/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frost-crystal-growth/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frost-crystal-growth/16x9/detail.mp4",
      "bg": "#10151c",
      "posterFrame": 160,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "06612861d277f6d5b6f5c4ba3242d97a8d081f72bf56587d9f599877862e3092",
        "loop": "635050b4260965284308491fb3dbd25515ba0194d31321760518e7fff67d191c",
        "detail": "77fd35599d288affdd3b5127bca790518bc1736053554009e1c0d0789558a811"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/frost-crystal-growth/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frost-crystal-growth/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frost-crystal-growth/9x16/detail.mp4",
      "bg": "#10161e",
      "posterFrame": 160,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "dbd0c1f5713dcae6e0d960933f3722ee423c3379996a0d5a90cc842e4cec3c1d",
        "loop": "8c4d21c80b241e928093954c6186e7e3e4317004812aa4a5844749a373161207",
        "detail": "deb68b3e585262dc4db774793f35e3b9c244f5b6ccd6accf992dab6304462073"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/frost-crystal-growth/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frost-crystal-growth/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frost-crystal-growth/1x1/detail.mp4",
      "bg": "#0e131b",
      "posterFrame": 160,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "9c150ed5c82611b6ae719255d3bca57bfba2ace11fb2fa372fe99696dd6f8bbb",
        "loop": "f13a2916b4971f3b6eefa3d71e957c712f4ac192b6ff7e653207706a55e2d2cf",
        "detail": "8c82cb72178cd9dc1e11a0b0408e6a1a59adee407b857a415f9a3fbb672d07f0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/33371a54ed80da8fd402de7dd3dca9ec39aabc2ab41dca5013351a46f363e95f/index.mjs",
    "sha256": "33371a54ed80da8fd402de7dd3dca9ec39aabc2ab41dca5013351a46f363e95f",
    "bytes": 176490,
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
    "at": "2026-10-09T19:24:55.980Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
