// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "tags": [
    "number",
    "stat",
    "metric",
    "bar chart",
    "chart",
    "data",
    "counter",
    "kpi",
    "reveal",
    "growth",
    "glow"
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
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "rise": 4,
      "update": 28,
      "scan": 50,
      "formed": 96
    },
    "beats": [
      0,
      4,
      28,
      50,
      96,
      120
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
      "key": "value",
      "type": "number",
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "caption"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "accent2": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.display"
  },
  "motionBeats": [
    {
      "target": "bars",
      "prop": "height",
      "from": "baseline",
      "settledBy": 48,
      "easing": "spring"
    },
    {
      "target": "bars",
      "prop": "shape",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "label",
      "prop": "y",
      "from": "below",
      "settledBy": 108,
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
    "sourceUrl": "21st first-party (chart bars rise, then a scan beam retargets them into the number, 2026-10-08)"
  },
  "defaults": {
    "value": 12480,
    "decimals": 0,
    "separators": true,
    "prefix": "",
    "suffix": "",
    "label": "Teams onboarded this year",
    "color": "#E9FFF8",
    "accent": "#2EE6B6",
    "accent2": "#7AD7FF",
    "background": "#071A1F",
    "fontFamily": "Geist",
    "reflection": true
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000,
      "role": "value"
    },
    {
      "key": "decimals",
      "label": "Decimals",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 2
    },
    {
      "key": "separators",
      "label": "Separators",
      "type": "boolean"
    },
    {
      "key": "prefix",
      "label": "Prefix",
      "type": "text",
      "max": 3
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 3
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 48,
      "role": "caption"
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
      "key": "accent2",
      "label": "Accent 2",
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
      "brand": "fonts.display"
    },
    {
      "key": "reflection",
      "label": "Reflection",
      "type": "boolean"
    }
  ],
  "name": "Bar-Built Digits",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "bar-built-digits",
    "bundleSha256": "8a213269f0bf31f5232221edbedf30c590e6c61cb1db013d2c9294dcc9cc2383",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T08:01:31.436Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-paper.png",
        "sha256": "f5c876aa45b86a2742768649f0f76f4540cf44222e5e00c9c64f076051eb91d4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-night.png",
        "sha256": "33a7639209b79e621e96711d179e8f1a3173bc32c681073ffcb1c9f1cb589a7b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-color.png",
        "sha256": "820a194ad71313910693620fca938333ebb157c827ad6b390f213b3396798460"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-paper.png",
        "sha256": "2b7d21832a6f61c251a135de40668ba7a098fbcebd188ceb011213232a97c8e1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-night.png",
        "sha256": "93ac6010833ead616436ead7ee7b08854bc3684e9f297178a07ecb6d4a7dcd21"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-color.png",
        "sha256": "23de7e4db27c58b030f15c4d1492ac672d2d8b008e6fabc448dc8afb39d3a1af"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-paper.png",
        "sha256": "4d9cec9e793a8e5973a8e335e4f2433b4806a30769d687b70d926620cc196f17"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-night.png",
        "sha256": "2a18f2ba0d9ffa1583cab48453ae461c662518c3129da90dab39c07b0b8281be"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-color.png",
        "sha256": "24282a01a921b16340666731d57c2a60993a369a65a12a45ef5bff6690bc0d86"
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
          "bar-built-digits--16x9",
          "bar-built-digits--9x16",
          "bar-built-digits--1x1"
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
            "paperNight": 77.916748046875,
            "paperColor": 58.82587348090278,
            "region": {
              "left": 82,
              "top": 176,
              "width": 1756,
              "height": 655
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 65.78068033854167,
            "paperColor": 66.48152669270833,
            "region": {
              "left": 0,
              "top": 354,
              "width": 1080,
              "height": 1244
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 78.566162109375,
            "paperColor": 63.542697482638886,
            "region": {
              "left": 33,
              "top": 256,
              "width": 1014,
              "height": 522
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
            "occupancy": 0.7008963564849809,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7576403761092916,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5847728751994626,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6902835079505054,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7536434712774001,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7560670390841523,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5470346574843931,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5963170590595636,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.542096696932088,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.87445746527778,
        "frames": [
          18,
          120,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 120,
            "averageChannelDifference": 21.00564236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-120-frame-14.png",
                "sha256": "0c9a49cf06f2627deedd55ba07681b579217ba5bbbc42a9d70b212f607d63f14",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-120-frame-119.png",
                "sha256": "f7e61763dc0887b91c51acd9318bcea5fb95c59ba73cbd5aac854510844c3de5",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-120-frame-105.png",
                "sha256": "e9d597b1bc7c600b59e0f3bdea2fc7979711e583fae4ce4353d22359c5a0c2d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.87445746527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-600-frame-18.png",
                "sha256": "b378250093abc315fbf71ce272c7d6d1c90503adc68a29fd1a9c6b268d2c52e5",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-600-frame-120.png",
                "sha256": "f7e61763dc0887b91c51acd9318bcea5fb95c59ba73cbd5aac854510844c3de5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-600-frame-528.png",
                "sha256": "f7e61763dc0887b91c51acd9318bcea5fb95c59ba73cbd5aac854510844c3de5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/16x9-duration-600-frame-599.png",
                "sha256": "f7e61763dc0887b91c51acd9318bcea5fb95c59ba73cbd5aac854510844c3de5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 120,
            "averageChannelDifference": 21.755967881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-120-frame-14.png",
                "sha256": "6935cafe8172b7cffa951b4bbdd921eeb63db847541a42bf9582a8523d72d5a9",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-120-frame-119.png",
                "sha256": "053ad4148ee1411ab01e3be84a25e79d2fb1370923fc0397cf79df896bb6328e",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-120-frame-105.png",
                "sha256": "ef63a2c2e6f770d0bfc766c56a90015e8986f2158c0a01886c106de00d6805af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 20.26345486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-600-frame-18.png",
                "sha256": "3fa5e8f3cb72fbd1e8dab7f2030482e4613fc3279fa526528e4b32334e8fe501",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-600-frame-120.png",
                "sha256": "053ad4148ee1411ab01e3be84a25e79d2fb1370923fc0397cf79df896bb6328e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-600-frame-528.png",
                "sha256": "053ad4148ee1411ab01e3be84a25e79d2fb1370923fc0397cf79df896bb6328e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/9x16-duration-600-frame-599.png",
                "sha256": "053ad4148ee1411ab01e3be84a25e79d2fb1370923fc0397cf79df896bb6328e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 120,
            "averageChannelDifference": 16.37554253472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-120-frame-14.png",
                "sha256": "abcb3cd341ea7de2b519fd8891d3cc0564bdb3dd25fa60b6d4c0a034197eb526",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-120-frame-119.png",
                "sha256": "d9f0b429ca7ee8ccbb618e4f15205efa79cee82b5faf318a64042646511e6b6a",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-120-frame-105.png",
                "sha256": "08802a8a7c80db3da51f2b3321e05eb4935ac1915ed33a725303794ebbaec46f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 14.559027777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-600-frame-18.png",
                "sha256": "db3658b345f63d7d8535dd8bcacfdf4e2a36846f1f11777d67ee20976450b300",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-600-frame-120.png",
                "sha256": "d9f0b429ca7ee8ccbb618e4f15205efa79cee82b5faf318a64042646511e6b6a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-600-frame-528.png",
                "sha256": "d9f0b429ca7ee8ccbb618e4f15205efa79cee82b5faf318a64042646511e6b6a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/bar-built-digits/1x1-duration-600-frame-599.png",
                "sha256": "d9f0b429ca7ee8ccbb618e4f15205efa79cee82b5faf318a64042646511e6b6a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The title 'Bar-Built Digits' is directly supported visually—the numeric value is constructed out of vertical bar segments, and the motion samples (images 2-4) show the bars assembling first as a histogram shape, then sliding to form the digits, consistent with the motion verbs (assemble, replace, slide) from the language card. No effect is accepted on copy alone: this title is verified by the bar construction and transformation of digits seen. \n\nNoBakedHeading: There are no irrelevant decorative or block-title labels imposed in the imagery—all headline text present ('Teams onboarded this year') matches editable named-slot content, and no unexplained title or category is baked in the layout outside this legitimate context.\n\nBrandAdherence: The last three images present three distinct, listed brand palette adaptations. Each variant preserves the shape and the 'bar' structure of the digits (preserving material) and applies the intended color roles (primary/secondary/text/background provided) to the ink and background roles. The text and numbers remain legible in each palette, and there are no fixed block colors left unexplained or inconsistent with the palette (image assets in this context retain their purpose as core illustration, not a separate screenshot).\n\nLanguageAdherence: Throughout the sequence and across all palettes, the composition maintains the oversize, accent-style numerical display built from compressed graphical bar shapes and tabular numerals as listed. There is no appearance of frosted glass, browser chrome, or other forbidden ornament. The poster and rebrands use flat color fields as backgrounds, and type hierarchy and roles remain consistent with the language card. The sampled motion in images 2-4 (histogram to digits via animated bars) confirms the designated role of movement driven by type and masks, not external pictorial content."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "8a213269f0bf31f5232221edbedf30c590e6c61cb1db013d2c9294dcc9cc2383",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.548Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/bar-built-digits/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-built-digits/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-built-digits/16x9/detail.mp4",
      "bg": "#071a1f",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "b8416e69f8db15a8370a89c0f301a7bd45e056ae943fde9bb9c2a3307f6fa0ef",
        "loop": "070bda30664ad330876f75d213fd8cd1589bf56d905b62000264547887eadb44",
        "detail": "fb4728b6f0a53dbc6c38a05450898f2c873f0958ea2c9fd6199c00fa19a95e69"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/bar-built-digits/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-built-digits/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-built-digits/9x16/detail.mp4",
      "bg": "#071a1f",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "20552e69ef8026ae199a557273d39c19619fd25349cff4d9b1622511447c228d",
        "loop": "e619fbb653775a6e486082f26e302fccbcd658198b664680989580957904bfa4",
        "detail": "45714e03df89ff18cceaecbe3ebf43c6ac1854ee34861f8adf1cdf39ce971b0e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/bar-built-digits/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bar-built-digits/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bar-built-digits/1x1/detail.mp4",
      "bg": "#071a1f",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7ac9f120be98bde4690455d3463e16c9c1e9c6cc863c06ac6655805a762e9671",
        "loop": "947c3ac3a2fe4b1acac243a46da46412a98da142bfcde14d30744df03d5981f4",
        "detail": "8babc760849f316cb206644d1f6ee6c7aac9fda97b3a8805fae562fd64a1f557"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8a213269f0bf31f5232221edbedf30c590e6c61cb1db013d2c9294dcc9cc2383/index.mjs",
    "sha256": "8a213269f0bf31f5232221edbedf30c590e6c61cb1db013d2c9294dcc9cc2383",
    "bytes": 171242,
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
    "at": "2026-10-09T09:05:57.829Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
