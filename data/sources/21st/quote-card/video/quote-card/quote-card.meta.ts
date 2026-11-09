// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/quote",
  "tags": [
    "quote",
    "testimonial",
    "press",
    "social proof",
    "stat",
    "count up"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 135,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 78,
      "stat": 56
    },
    "beats": [
      2,
      6,
      26,
      56
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "9:16",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 160,
      "lines": 5,
      "role": "headline"
    },
    {
      "key": "attribution",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "stat",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "stat"
    },
    {
      "key": "statLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "serifFontFamily": "fonts.serif",
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "quote",
      "prop": "opacity",
      "from": "0.4",
      "settledBy": 16,
      "easing": "ease"
    },
    {
      "target": "attribution",
      "prop": "opacity",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "stat",
      "prop": "value",
      "from": "0",
      "settledBy": 76,
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
      135
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research X1, V14 (quote card with stat pop); own copy"
  },
  "job": "testimonials",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "serifFontFamily": "Instrument Serif",
    "eyebrow": "What teams say",
    "quote": "We replaced a week of motion work with one afternoon, and the videos finally look like our product.",
    "attribution": "Mara Lind, head of design at Northwind",
    "stat": "3.2x",
    "statLabel": "faster launch videos",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 160,
      "role": "headline"
    },
    {
      "key": "attribution",
      "label": "Attribution",
      "type": "text",
      "max": 48,
      "role": "name"
    },
    {
      "key": "stat",
      "label": "Stat",
      "type": "text",
      "max": 12,
      "role": "stat"
    },
    {
      "key": "statLabel",
      "label": "Stat label",
      "type": "text",
      "max": 32,
      "role": "subline"
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
    }
  ],
  "name": "Quote Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "quote-card",
    "bundleSha256": "146b76410213c3e6df4e25d6b44fa8ceb4b9660e4fd1572ba9c01c86729e6be7",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:05.087Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-paper.png",
        "sha256": "3877de3a4b476d9a61beac7e2a8c9186bb3ba3d32b6dc896a61e70aefecfc87a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-night.png",
        "sha256": "e47f0ab7cac93ac24f9046831a3ebcb0681c02b56eaf95fc4ed7156a0af1b697"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-color.png",
        "sha256": "23b84455f6348a2aa28587156512e4baf0596ce9e36c2f75adbfdcb79407e72f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-paper.png",
        "sha256": "5282911f033c0ed20c3baa69c3ae2bd97313cfdfc157a9dca2d587eea07b4b84"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-night.png",
        "sha256": "6b8ab5bb9f6f7d711aebb692441e76ffc42e0bf6019798c605baa4801527cdff"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-color.png",
        "sha256": "626f6feb42e2cc02a72871689dee748e088fef026d3d7ded7ce45a062064e3cf"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-paper.png",
        "sha256": "ea19510c05c945a625fffc5b6d071aa5835d59af7b10cb21ce76a4e4b32c1866"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-night.png",
        "sha256": "41b1e8f02b057185130fca88026d4b73465083cfd7ad513d9a1389b139be1318"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-color.png",
        "sha256": "8f2f0193b76c37fbea31631b493900b1ea9367cfddd87453c334862f0462768e"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "quote-card--1x1",
          "quote-card--9x16",
          "quote-card--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 66.68953450520833,
            "paperColor": 27.153211805555557,
            "region": {
              "left": 55,
              "top": 5,
              "width": 928,
              "height": 763
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 57.528645833333336,
            "paperColor": 19.03106011284722,
            "region": {
              "left": 50,
              "top": 164,
              "width": 933,
              "height": 1584
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 53.037027994791664,
            "paperColor": 24.26372612847222,
            "region": {
              "left": 117,
              "top": 5,
              "width": 1648,
              "height": 522
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8580775703056716,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8291132239361224,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7421484969159132,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.005610456952843,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9782069174120267,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9910437618977634,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5828591724755747,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5763163595556536,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4520596416936117,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.184353298611111,
        "frames": [
          11,
          78,
          134
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 6.9736328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-60-frame-7.png",
                "sha256": "8f9f808c4b2ddbe5db5610df4dded8407bf9c417f61567d61c0e41870c00e46e",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-60-frame-59.png",
                "sha256": "27325c0768e96665ccaa111642dc63bae8b6a1e9d56291986dd046e8658c33e6",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-60-frame-52.png",
                "sha256": "e26864128b2c9de56f9d5db2ccc0ad5ac492a74512999255e154250af29f7be9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.170681423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-600-frame-11.png",
                "sha256": "2de0fd3a0a051072a74fd55baeb110d00029b5d048447f565bb117373f002d47",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-600-frame-78.png",
                "sha256": "2a278f05004bfd8afb8e6a444818a0cfc0e444f7dca21a37fade9b7e9b83633f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-600-frame-528.png",
                "sha256": "2a278f05004bfd8afb8e6a444818a0cfc0e444f7dca21a37fade9b7e9b83633f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/1x1-duration-600-frame-599.png",
                "sha256": "2a278f05004bfd8afb8e6a444818a0cfc0e444f7dca21a37fade9b7e9b83633f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 4.867404513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-60-frame-7.png",
                "sha256": "48791d0ce57ce178a33633663ec6521dc6e4a2307642c5415d77379cc208dc55",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-60-frame-59.png",
                "sha256": "206ecca0f2b25ef1b2f67c0556bc9bb9d6f1c2af757daf70d11bb95c3ea6dbfd",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-60-frame-52.png",
                "sha256": "e4e789ba96be1f3f8bf022cb9c8200c747afd6a4a317da85f6e9f6cf1b34f46a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.6442057291666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-600-frame-11.png",
                "sha256": "48b50026979d804e75b6b865f4fbd4aa82690384ff3b4d3c89634f78564b2563",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-600-frame-78.png",
                "sha256": "06723c87766b6dca5d04d9607bc1b7f3af1daa0027812606f22a4dc8799ee3c9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-600-frame-528.png",
                "sha256": "06723c87766b6dca5d04d9607bc1b7f3af1daa0027812606f22a4dc8799ee3c9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/9x16-duration-600-frame-599.png",
                "sha256": "06723c87766b6dca5d04d9607bc1b7f3af1daa0027812606f22a4dc8799ee3c9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 4.8818359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-60-frame-7.png",
                "sha256": "44be84dc75ce027592801f973ed53e185e7aee40b161f9d42e94a46d8cb709c8",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-60-frame-59.png",
                "sha256": "fd3a1a782ece19c3fba9bb2e2f52fad320fafde06136f9769badfc7f4d6c5ec4",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-60-frame-52.png",
                "sha256": "eefe86115b944a231984ca4e236f1420406df8076b62ccce8d493c0e03bd8001",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.184353298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-600-frame-11.png",
                "sha256": "7b10fef337957c8a21f7ec9d5e8b886b1944e9f473ecaa1fe47f11a17e68422a",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-600-frame-78.png",
                "sha256": "110ddadd9ab032be6c54595a5ba7e20aa4bdd2b5928ab4b17634e30abc4a88d9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-600-frame-528.png",
                "sha256": "110ddadd9ab032be6c54595a5ba7e20aa4bdd2b5928ab4b17634e30abc4a88d9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/quote-card/16x9-duration-600-frame-599.png",
                "sha256": "ca6062098965a780acef54768509153e09083c732c60ccfe831c6c2a012d627e",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A customer quote with attribution and a big result number; testimonial."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 2,
        "compared": 2,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "146b76410213c3e6df4e25d6b44fa8ceb4b9660e4fd1572ba9c01c86729e6be7",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.006905Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/quote-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-card/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 78,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 135,
      "sha256": {
        "poster": "901ffaf1715b2c6874a0e962128f3644d906701031de6b2e32c6947a7e70aef4",
        "loop": "4bc506b32c906e14769879eaa7a89a3c2cfdd57c15aadf37fb737b2c68695c8a",
        "detail": "dfccdef60125014534cc901fc970b70323d50ce7b9be48b7d5d3dd4fc4c70721"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/quote-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-card/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 78,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 135,
      "sha256": {
        "poster": "c59dd2882f0e4bc80190503be7e02b0049ffa81bcf3647a88e9f6e682f1daa7b",
        "loop": "15ae5b556ba533dac51fe746ec0fc82cf5c5e44e34ad96d5dff4246d90a5dd76",
        "detail": "8522c035fee12ded33ea724171c72e60afa8aa8552b9fa6ed6ccd3b131c6e4df"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/quote-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-card/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 78,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 135,
      "sha256": {
        "poster": "2eb4d4c0ee2c1b5cc49a286bcf783902a835fc3ce50b2aee6e8eebc146d3e9a8",
        "loop": "e023f256f77ba5f65a92d3e1a3c239607cd27f528089ac7b00b11ee4f9e8b292",
        "detail": "10167d8e2f5eb68c9afd6f550e61aa88641c00c48e8ce4286c312bdfcbe414d1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/146b76410213c3e6df4e25d6b44fa8ceb4b9660e4fd1572ba9c01c86729e6be7/index.mjs",
    "sha256": "146b76410213c3e6df4e25d6b44fa8ceb4b9660e4fd1572ba9c01c86729e6be7",
    "bytes": 162240,
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
    "1:1": {
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
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:31:16.929Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
