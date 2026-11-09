// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "smear"
  ],
  "energy": "punchy",
  "requiresScreenshot": true,
  "tags": [
    "transition",
    "slit-scan",
    "light streaks",
    "long exposure",
    "smear",
    "before after",
    "screenshot",
    "redesign",
    "product ui",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
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
      "launch": 26,
      "hero": 60,
      "land": 117
    },
    "beats": [
      0,
      26,
      60,
      117,
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
    },
    {
      "key": "nextScreenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "caption"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "rows",
      "prop": "x",
      "settledBy": 125,
      "easing": "ease"
    },
    {
      "target": "streaks",
      "prop": "length",
      "settledBy": 125,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "x",
      "from": "left",
      "settledBy": 105,
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
      "frame": 105
    },
    "hover": [
      0,
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (slit-scan long-exposure streaks carry screenshot A out and B in, row by row, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "nextScreenshot": "",
    "caption": "Introducing the new version",
    "color": "#F5EEF8",
    "primary": "#FFB703",
    "secondary": "#FB5607",
    "background": "#130B1A",
    "fontFamily": "Inter",
    "intensity": 0.85
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "nextScreenshot",
      "label": "Next screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "label": "Caption",
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
      "brand": "fonts.body"
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Light Streak Screen Swap",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "slit-scan-smear",
    "bundleSha256": "bfffd0ddacb06370c1f1e46e2173f67871da26a0e740817fcf6cbb7ea87494b9",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:55:36.788Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-paper.png",
        "sha256": "863d700f679f4210d24f4cf1c9a94e4ab38d54178b3b32caff307333c59f0071"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-night.png",
        "sha256": "c130d76a1f5ceb41c4fb3a0374687acf88a8f99ba4dde44364192f2d69dc0db7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-color.png",
        "sha256": "e40acef516cfd41ec00bf8615698053d4db1d9ee5d4952f7949b53fc7390d908"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-paper.png",
        "sha256": "aedfa8ada2399dcc38a17ceb6076cf929637b75fb9a4c2f98ebd7fc6382dad8d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-night.png",
        "sha256": "3a4a8f2bb0c6c3a657e26be3cc3b01318e658580d282b0a4f2bcf845d9564fee"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-color.png",
        "sha256": "84d333d3246271cb0298814b0294ba646b3f6dfc8d28aae377264b0427c81ae2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-paper.png",
        "sha256": "c7a88dd86dc356178c5563d2024feae1e48282182a96ae0665fa5cbfe1f5bbde"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-night.png",
        "sha256": "d226a49dd7312d60570e6d1bfcf0edeb4e5ab9e516111a78d9127290dd93968d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-color.png",
        "sha256": "f02ff7d0452b20fdc9e6f6056cd684204bf20dc03eb66f843e6257f260c7c615"
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
          "slit-scan-smear--16x9",
          "slit-scan-smear--9x16",
          "slit-scan-smear--1x1"
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
            "paperNight": 41.869140625,
            "paperColor": 30.08791775173611,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1052
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.582194010416664,
            "paperColor": 35.5966796875,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1812
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.466525607638886,
            "paperColor": 33.69346788194444,
            "region": {
              "left": 0,
              "top": 14,
              "width": 1080,
              "height": 952
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
            "occupancy": 1.3096287897875203,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3804904677920553,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3096287897875203,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.274033919123205,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3375141723356012,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.274033919123205,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1364113546653232,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2492651381540272,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1364113546653232,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 33.865993923611114,
        "frames": [
          15,
          105,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 33.865993923611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-150-frame-15.png",
                "sha256": "b77f93014b7bbda3d2d6ee5fa6546f20a5aa1eaad6cfb9f974c05f83de620c6d",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-150-frame-105.png",
                "sha256": "b6d8cb16fbad0b2f3d7dc0db455fa25622ed9b7f7d2b3ad3f73e3745c89d048a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-150-frame-132.png",
                "sha256": "4d72b64c194bd9d32ce6b0baa3bb806f1a70e28423af5b48848e64e48c03cad9",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-150-frame-149.png",
                "sha256": "b2fff82af7ded15a38d4212de47cb1aff6705ce1c35d3517d8e6d95a0d240545",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 33.865993923611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-600-frame-15.png",
                "sha256": "b77f93014b7bbda3d2d6ee5fa6546f20a5aa1eaad6cfb9f974c05f83de620c6d",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-600-frame-105.png",
                "sha256": "b6d8cb16fbad0b2f3d7dc0db455fa25622ed9b7f7d2b3ad3f73e3745c89d048a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-600-frame-528.png",
                "sha256": "b2fff82af7ded15a38d4212de47cb1aff6705ce1c35d3517d8e6d95a0d240545",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/16x9-duration-600-frame-599.png",
                "sha256": "b2fff82af7ded15a38d4212de47cb1aff6705ce1c35d3517d8e6d95a0d240545",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 46.67816840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-150-frame-15.png",
                "sha256": "8b12ee79a8f247ad6eb1cc130494741a8389953d2d1cbfec798911f6112620d5",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-150-frame-105.png",
                "sha256": "20632fd7e9a7a5c71d24859c28c3bf3066cb9225222f59b7ef904ddbc418fd93",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-150-frame-132.png",
                "sha256": "d5dc89f8adedff028258eb0fdd478c0835f10c7d8d9069b7102eb00a20ade69f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-150-frame-149.png",
                "sha256": "1704125ef672344f3576d245b8e74551bb3885423f364ff461bc2aac0ae2341d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 46.67816840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-600-frame-15.png",
                "sha256": "8b12ee79a8f247ad6eb1cc130494741a8389953d2d1cbfec798911f6112620d5",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-600-frame-105.png",
                "sha256": "20632fd7e9a7a5c71d24859c28c3bf3066cb9225222f59b7ef904ddbc418fd93",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-600-frame-528.png",
                "sha256": "1704125ef672344f3576d245b8e74551bb3885423f364ff461bc2aac0ae2341d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/9x16-duration-600-frame-599.png",
                "sha256": "1704125ef672344f3576d245b8e74551bb3885423f364ff461bc2aac0ae2341d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 37.81239149305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-150-frame-15.png",
                "sha256": "6b0493d3c998f8895020d558bc61fdea9bfa5553f3966ad44b3f7b770ea6d357",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-150-frame-105.png",
                "sha256": "cc1033a55e5a964e76cd03ab14aebf44fe3a65fe8e551c39c98feab7c8c20827",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-150-frame-132.png",
                "sha256": "533935bc9957aa2f983c574ca3c06d514e9d4d9f3dd2da20f7480db7b88eb24f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-150-frame-149.png",
                "sha256": "81c7243b37c882b2b03f503b6b905a19fa0fdd1760720d4693c835e6eb5fbcdb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 37.81239149305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-600-frame-15.png",
                "sha256": "6b0493d3c998f8895020d558bc61fdea9bfa5553f3966ad44b3f7b770ea6d357",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-600-frame-105.png",
                "sha256": "cc1033a55e5a964e76cd03ab14aebf44fe3a65fe8e551c39c98feab7c8c20827",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-600-frame-528.png",
                "sha256": "81c7243b37c882b2b03f503b6b905a19fa0fdd1760720d4693c835e6eb5fbcdb",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/slit-scan-smear/1x1-duration-600-frame-599.png",
                "sha256": "81c7243b37c882b2b03f503b6b905a19fa0fdd1760720d4693c835e6eb5fbcdb",
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
        "note": "TitleMatches: The poster and motion samples illustrate a digital interface with streaked, blurred lines evoking light trails that visually swap between two states on the screen, supporting the 'Light Streak Screen Swap' title with clear visual transitions reminiscent of a screen swap effect using light streaks. \n\nnoBakedHeading: There is no decorative or unexplained block title or language/category label imposed on the artwork itself. The only prominent text is 'Introducing the new version,' which matches the caption provided as named-slot content. No unrelated labels or decorative headlines are observed. \n\nBrandAdherence: The final three images represent the same poster under three different color palettes. Each uses the primary, secondary, text, and background hues from the supplied palettes, adapting the illustration while preserving the form and legibility of the interface shapes. The palettes reflect the correct supplied order, and no fixed or unexplained block colors remain. The designs remain clearly legible in all palettes. \n\nLanguageAdherence: The materials remain visually flat and surface-focused, text roles and interface structure persist across rebrands and sampled frames, numerals and headings remain sans, with clear light/dark consistency, matching the proficiency rules in the language card. There is no text or element contradicting the language card requirements."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 64,
        "compared": 64,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "bfffd0ddacb06370c1f1e46e2173f67871da26a0e740817fcf6cbb7ea87494b9",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.831Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "slit-scan-smear",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.125,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "5e1c6b86adf0472712e1478e3313901e482df0ced11189d2d37d70ad33bf3c63",
      "bundleSha256": "bfffd0ddacb06370c1f1e46e2173f67871da26a0e740817fcf6cbb7ea87494b9",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/slit-scan-smear/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/slit-scan-smear/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/slit-scan-smear/16x9/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 105,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "5a7d13aa555eb03610b5efdf3b41924d8f617195da5749db823628d3aedaa870",
        "loop": "ae1c3e1f7d2443224a7e5e389ca4b0ffd23bf2586fd8725ff3ebb14cc270b4dc",
        "detail": "0cf3d6d1255df8c3a6f3dccb15c9a22f10a33b38663615a1c0b73f80e5b3c41a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/slit-scan-smear/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/slit-scan-smear/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/slit-scan-smear/9x16/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 105,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e79d30e681eb09832e5a5f6c6db46f46f44d0f727a59ae048afce674fe7dc1a1",
        "loop": "ef13d621c53f4d0066c09bd27c1eb1f1d761823678aeff4ad26553991bded8e8",
        "detail": "a251ab640b5497519ee6f436ad7379b76a441114bfa3941f7a6db5dafd5e04ed"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/slit-scan-smear/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/slit-scan-smear/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/slit-scan-smear/1x1/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 105,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4c74b3c6d94e6935baa62bc02da442d782df109d682391e57f5096e6fcf28966",
        "loop": "78672f178771bd90eaa5482ec5fda1a4396a1db909a8cd7fc3f34f81b8ce7131",
        "detail": "1b718fe0b498cf83113fe904d071aa3e93ffb6a158815b966123d960da19f272"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bfffd0ddacb06370c1f1e46e2173f67871da26a0e740817fcf6cbb7ea87494b9/index.mjs",
    "sha256": "bfffd0ddacb06370c1f1e46e2173f67871da26a0e740817fcf6cbb7ea87494b9",
    "bytes": 174613,
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
    "at": "2026-10-09T19:23:51.520Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
