// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "part"
  ],
  "tags": [
    "screenshot",
    "curtain",
    "beads",
    "reveal",
    "glass",
    "physics",
    "pendulum",
    "chains"
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
      "part": 65
    },
    "beats": [
      0,
      30,
      65,
      105,
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
  "motionBeats": [],
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
    "sourceUrl": "21st first-party (a deterministic constrained bead curtain parts around a screenshot, 2026-10-09)"
  },
  "defaults": {
    "screenshot": "",
    "caption": "Step into something new",
    "primary": "#FF8A3D",
    "secondary": "#FFD27A",
    "color": "#F3EEE6",
    "background": "#0E0F12",
    "fontFamily": "DM Sans"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Bead Curtain Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "bead-curtain-reveal",
    "bundleSha256": "cee88fe38b781dcb17035b9e878b865214a96a5b6dfd1d3767b3ff25b533e4e5",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T19:02:13.272Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-paper.png",
        "sha256": "2adf90af1699914cdfd7905adda92ad35e75fa2c5fad8e1c3dffca67e204a633"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-night.png",
        "sha256": "1cf6eae5f8c12b8f52f06d518fc01c2c3295eb901918f44e4362fd38091e081b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-color.png",
        "sha256": "ea17a5d0c9909515086dd714919c436cbe1d71e69e9d6065b8a099f2197c89c3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-paper.png",
        "sha256": "3ec7b07251cd329064b03be15105c0c5c38d7f604cac6213b8cd32ab7bd70e46"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-night.png",
        "sha256": "c24cf11477dbb87f94cd2ce82003dcf670dbc4a9521476da4590305abbc41e64"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-color.png",
        "sha256": "bdfb4bb25481ffaf00818a51138fec3ae994c3e3eb3cf7fb45079da86b9450c5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-paper.png",
        "sha256": "37b627442ceb49c2017beca4ff7e0640ecd562863d181f42991d5da0a2b7390f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-night.png",
        "sha256": "bbc235caa891abae4ea453d057a539df38b6c47f89163ba045719283681b06d7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-color.png",
        "sha256": "d19702cdbe0bca1c87155880ccf8b6ae49336392d1292ba5ca4b3843d7536634"
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
          "bead-curtain-reveal--16x9",
          "bead-curtain-reveal--9x16",
          "bead-curtain-reveal--1x1"
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
            "paperNight": 16.376356336805557,
            "paperColor": 9.66848415798611,
            "region": {
              "left": 153,
              "top": 125,
              "width": 1614,
              "height": 840
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 27.683485243055557,
            "paperColor": 11.619194878472221,
            "region": {
              "left": 86,
              "top": 224,
              "width": 908,
              "height": 1557
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.26250542534722,
            "paperColor": 8.430284288194445,
            "region": {
              "left": 86,
              "top": 125,
              "width": 908,
              "height": 840
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
            "occupancy": 0.9266148589065257,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9266148589065257,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9266148589065257,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9662531100403127,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9662531100403127,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9650119371308196,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9267424390881183,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9267424390881183,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9267424390881183,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.486328125,
        "frames": [
          21,
          140,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 9.490234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-150-frame-18.png",
                "sha256": "29131c38ce743dcc3a3ff8962884a3c9588baeb2ea361b864a5c5ceaa71fc808",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-150-frame-140.png",
                "sha256": "8a6e155e9965e8635a0721af76991698a8458ddec39363422e918cc0d951e4ab",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-150-frame-132.png",
                "sha256": "787522fe4dbce4012534c123e8d490d453f81a3cc46b533092e81a540b630cbc",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-150-frame-149.png",
                "sha256": "22c8790a187c582df495fe1dce80657ea4cc28ae46981ba12b488027b48dbb50",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.486328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-600-frame-21.png",
                "sha256": "616011f969cd5c492a45cf3bf6df5bccb9a8d4708715196395654c265315b7e9",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-600-frame-140.png",
                "sha256": "8a6e155e9965e8635a0721af76991698a8458ddec39363422e918cc0d951e4ab",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-600-frame-528.png",
                "sha256": "22c8790a187c582df495fe1dce80657ea4cc28ae46981ba12b488027b48dbb50",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/16x9-duration-600-frame-599.png",
                "sha256": "22c8790a187c582df495fe1dce80657ea4cc28ae46981ba12b488027b48dbb50",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 9.786241319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-150-frame-18.png",
                "sha256": "6b3156a5acc5e592c70325b0ef138ad91689ec7c70d6b398d1359e2c9e0def6b",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-150-frame-140.png",
                "sha256": "bc4d72ddaab402259a308926a87dd39c7b7cb5a921cdc98db354c23c76a74ab0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-150-frame-132.png",
                "sha256": "f7c1fcf7ebc94baf50d038400d808f189e07a0630a320367450ead8d24fed4c0",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-150-frame-149.png",
                "sha256": "0fa10cc1ca4272088d03e0470223827afb9d902b17c4db3a31e4036fda90f520",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.771375868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-600-frame-21.png",
                "sha256": "8f081aa156bcdeb52de3e0bc683e4399b24eda501d660bace8fd87840e7f0dc4",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-600-frame-140.png",
                "sha256": "bc4d72ddaab402259a308926a87dd39c7b7cb5a921cdc98db354c23c76a74ab0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-600-frame-528.png",
                "sha256": "0fa10cc1ca4272088d03e0470223827afb9d902b17c4db3a31e4036fda90f520",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/9x16-duration-600-frame-599.png",
                "sha256": "0fa10cc1ca4272088d03e0470223827afb9d902b17c4db3a31e4036fda90f520",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 12.421983506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-150-frame-18.png",
                "sha256": "1ae62a86e35b99a951dd7f2b5cc6ac6a0a8ed7688ebe0f7f1435a47d1a5dc663",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-150-frame-140.png",
                "sha256": "3dd5aad203c704d3401d5903d071135c4c605914c96767a0c93b9667015dc688",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-150-frame-132.png",
                "sha256": "a1b5af4e7cf6cbc4dbd8a2fa90a71a5c38da47fca08929f7cd0ab92f3ec3bf8d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-150-frame-149.png",
                "sha256": "2bfec0040f25732871d755601548c1d43d8cfabdf70580a45af8f0bf927e18ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.378038194444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-600-frame-21.png",
                "sha256": "1e6ad1ad7005d2c21c23d6aad987a6c56e8669fcd44b3f0a62609b4fc61dcd64",
                "alphaMass": 587520
              },
              {
                "frame": 140,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-600-frame-140.png",
                "sha256": "3dd5aad203c704d3401d5903d071135c4c605914c96767a0c93b9667015dc688",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-600-frame-528.png",
                "sha256": "2bfec0040f25732871d755601548c1d43d8cfabdf70580a45af8f0bf927e18ed",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/bead-curtain-reveal/1x1-duration-600-frame-599.png",
                "sha256": "2bfec0040f25732871d755601548c1d43d8cfabdf70580a45af8f0bf927e18ed",
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
        "note": "TitleMatches: The images directly support the claimed title 'Bead Curtain Reveal'. The motion samples (images 2-4) chronologically depict bead chains fully obscuring the main content, then parting in an arched reveal analogous to the movement of a bead curtain, visually matching the described reveal action. No effect is taken on claim alone; the structure and motion match the subject.\n\nNoBakedHeading: There is no decorative block-title, label, or unexplained category heading baked into the design; all large visible text is editable, matches named slot ('Step into something new'), and is content, not decoration. There are no language or category markers unrelated to function.\n\nBrandAdherence: Images 5-7 show the design rendered under three distinct palettes. Each maintains clear bead and UI visibility, appropriate application of given primary/secondary/background/text colors, and preserves shape/material. No fixed unexplained block coloring remains, and legibility persists across the light, dark, and color-accented backgrounds.\n\nLanguageAdherence: The material, light, and camera properties persist consistently. Translucent bead chains, visible depth, and refractive overlap (with parallax) are present throughout all palette and motion samples. No forbidden effects like generic cards, unmotivated glow, or blurred primary text appear. Type is consistently sans-serif and clear in each variant, suiting the supplied language card. Motion appears to 'focus', 'float', and 'refract' as described, without exceeding the max scale or adding uncalled-for effects."
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
      "bundleSha256": "cee88fe38b781dcb17035b9e878b865214a96a5b6dfd1d3767b3ff25b533e4e5",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:23.129Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "bead-curtain-reveal",
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
      "framesSha256": "27e253e68e0d90ec01eed26348127e9f3fceefa67ee3afa42db21c8a550eac1e",
      "bundleSha256": "cee88fe38b781dcb17035b9e878b865214a96a5b6dfd1d3767b3ff25b533e4e5",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/16x9/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 140,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f14dbd50d81e0d737da995c2e521c47e787f318fe0a8111b4a922f179943a769",
        "loop": "764661a8998da15fba771265ea683cc6b27ddf8f405366f5de9f9922bac20391",
        "detail": "4bb7214feccdec93002dc38120494b6126b87304d87d186b86acd75b57cee329"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/9x16/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 140,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f2c2a6473d4023af031cc1b4098187ad8b3e99ad68e16a3fc1a2425fb5b1839a",
        "loop": "823413843bc49f4f928cbd209d9c99a242f815491de8917a0a98560ff7a88f47",
        "detail": "a842387940a3b34bca4f6dd08536ac6d8c6cb562e9293edc724b4bd8629eddf7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bead-curtain-reveal/1x1/detail.mp4",
      "bg": "#0e0f12",
      "posterFrame": 140,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ebeb5bdbc2947c8a3896e868f7e6ea8668934e20ebef564c9fb9318c4b5a7834",
        "loop": "f2d3b199f38d2621dcd0e8fdfd199cf8fe56745b02f0f20899daf02f5db75852",
        "detail": "4a01818b75fc5294cc76b284e88c4484a735e3fe8d70fdacc00f18932e4932fd"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/cee88fe38b781dcb17035b9e878b865214a96a5b6dfd1d3767b3ff25b533e4e5/index.mjs",
    "sha256": "cee88fe38b781dcb17035b9e878b865214a96a5b6dfd1d3767b3ff25b533e4e5",
    "bytes": 165697,
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
    "at": "2026-10-09T19:29:07.211Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
