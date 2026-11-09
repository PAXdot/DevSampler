// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "emboss"
  ],
  "tags": [
    "label",
    "printed",
    "tape",
    "physical"
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
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      20,
      45,
      75,
      110,
      135
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
      "lines": 5,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (Embossed Label Strip, 2026-10-09)"
  },
  "defaults": {
    "text": "Make something worth keeping",
    "primary": "#B44735",
    "secondary": "#E69166",
    "color": "#FFF2DA",
    "background": "#E6DECD",
    "fontFamily": "IBM Plex Mono"
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
      "brand": "fonts.mono"
    }
  ],
  "name": "Label Maker Strip",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "label-maker-strip",
    "bundleSha256": "076b30bcdb1a1368e068fadb12c7dfc1623bebb397e4905f8512b463460d9f76",
    "sourceSnapshot": {
      "sha256": "380231fb2fdd78399e0d2fdba550087ac492a21dcf3b4339f6900174d4b37b75",
      "files": 2025
    },
    "renderedAt": "2026-10-09T20:31:49.540Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-paper.png",
        "sha256": "294e08593e7f4949f4b5fb7a19efa7d50495aad35d5e3552aef9e0bcdeb71449"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-night.png",
        "sha256": "836467fdd4ce18f368529fa60e16ad2070b0b7f8797433622313d84922bad9c9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-color.png",
        "sha256": "695500686936ff75d1ffeeceac16f03928a2d3211d14259ebe6966f31a8268bd"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-paper.png",
        "sha256": "1733b496e0642fbccf0316e2434823b7d502a5505ff41a54c2e13a5eb288f99c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-night.png",
        "sha256": "0e3bb11e6e1f47ea6c2e77ce2cbec32937383a44a7d7b3cdd305108a8e319af7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-color.png",
        "sha256": "669c025d8a4c8b5e5bd55fd60f571e7fa518b6a7c1cd7b02efcceac9793352a6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-paper.png",
        "sha256": "80212b7480154fa5946e91cfc23be8711655e2f7620e8fdc6e966945df45dfdc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-night.png",
        "sha256": "3536d57e5281d0d1612e9d50af2fece920efe283cfbaca786de2311f1d3b6c2f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-color.png",
        "sha256": "52f4803c7867725db195ad9d9cf1373e74ac0122c3d619543d9baad796dc34b9"
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
          "label-maker-strip--16x9",
          "label-maker-strip--9x16",
          "label-maker-strip--1x1"
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
            "paperNight": 30.86452907986111,
            "paperColor": 16.38525390625,
            "region": {
              "left": 197,
              "top": 324,
              "width": 1526,
              "height": 382
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 35.41655815972222,
            "paperColor": 18.475341796875,
            "region": {
              "left": 60,
              "top": 466,
              "width": 959,
              "height": 945
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.209364149305557,
            "paperColor": 16.864637586805557,
            "region": {
              "left": 111,
              "top": 419,
              "width": 858,
              "height": 215
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
            "occupancy": 0.39841377008622386,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39841377008622386,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39841377008622386,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6193938078703705,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6193938078703705,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6193938078703705,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.22414015331784296,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.22414015331784296,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.22414015331784296,
            "bad": [],
            "measured": 25
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.609483506944445,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 8.363172743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-150-frame-18.png",
                "sha256": "6c3ed8be26702255a50a8bef1b7b459038a85be467f14107961ef1c0b7f36d48",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-150-frame-135.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-150-frame-132.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-150-frame-149.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.609483506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-600-frame-20.png",
                "sha256": "31af824d60fd27b43941cd9a045a0949cfb1bcd306d0915acbff3e00876f2e1e",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-600-frame-135.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-600-frame-528.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/16x9-duration-600-frame-599.png",
                "sha256": "7265801315505b14a9d716ecfb69a268829dbef67c3f2659df51ba42d8f371b0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 15.2880859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-150-frame-18.png",
                "sha256": "e87ede30482e61bc67c06bcb022ab0ce37ba4793ac4508d2bd6a693cd7c324e0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-150-frame-135.png",
                "sha256": "cab91bd49892c2147019814f03fcfabb8202d2881550490863e4114f7e95678c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-150-frame-132.png",
                "sha256": "4ee1f622967290c9f3489a3f5770da6f52fe187df5030ae22bc87626a8eb5734",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-150-frame-149.png",
                "sha256": "cab91bd49892c2147019814f03fcfabb8202d2881550490863e4114f7e95678c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 14.046006944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-600-frame-20.png",
                "sha256": "1fa57f142496759e3f619869f45b3e3e737ca4ecf4ff747f2b4f1997e512449f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-600-frame-135.png",
                "sha256": "cab91bd49892c2147019814f03fcfabb8202d2881550490863e4114f7e95678c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-600-frame-528.png",
                "sha256": "cab91bd49892c2147019814f03fcfabb8202d2881550490863e4114f7e95678c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/9x16-duration-600-frame-599.png",
                "sha256": "cab91bd49892c2147019814f03fcfabb8202d2881550490863e4114f7e95678c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 4.635091145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-150-frame-18.png",
                "sha256": "69563396996a6e567deb33682bccffb8e4b944ef2d76769391132455b5a0d3a2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-150-frame-135.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-150-frame-132.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-150-frame-149.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.769748263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-600-frame-20.png",
                "sha256": "e243bc5367afb4757cb5583c9f10c5c086bbe5d7d896f7c273b50c67c268b473",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-600-frame-135.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-600-frame-528.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/label-maker-strip/1x1-duration-600-frame-599.png",
                "sha256": "c9277a9cf7139bb83032da5ee9d718b0f500fc06c6fb339d810608aea4bc22d7",
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
        "note": "titleMatches: The images show type resembling a physical label maker's output (raised letters on rectangular strips, punch-marks on edges), visually assembling into the phrase 'MAKE SOMETHING WORTH KEEPING', directly matching both the claimed title ('Label Maker Strip') and the editable text content. Chronological samples (images 2-4) show the tape strips being assembled and replaced in position, supporting the expected 'assemble', 'replace', and 'slide' motion verbs. \nnoBakedHeading: There is no decorative or fixed block title or label present; all visible text is editable poster content in the format of label tape. \nbrandAdherence: Three poster variants (images 5-7) clearly use three distinct palettes matching supplied colors: 1) light green/black on off-white, 2) purple/green/white on dark, 3) blue on pale green. Tape and lettering colors visibly change as required, and the label shapes/material remain appropriate and consistent. No unexplained fixed colors persist.\nlanguageAdherence: All poster variants and motion samples use oversized type, cut-mask effects, geometric tape strips, and tabular numerals (where present); no card/chrome/glass/mock UI elements intrude. The label maker strip motif remains consistent across all themes, with type and tape serving as the structural material and motion carrier as described in the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 66,
        "compared": 66,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "076b30bcdb1a1368e068fadb12c7dfc1623bebb397e4905f8512b463460d9f76",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:46:26.556Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "label-maker-strip",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "5504c5167b3d1d6b80abb1716a8c5a727e0dcad31aed8d20d3a140f9b2c2de97",
      "bundleSha256": "076b30bcdb1a1368e068fadb12c7dfc1623bebb397e4905f8512b463460d9f76",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/label-maker-strip/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/label-maker-strip/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/label-maker-strip/16x9/detail.mp4",
      "bg": "#e6decd",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c58ba2b52026ea01b062b53f07750e0ddb55ae04dc72594f5f2a4a042b069f91",
        "loop": "b672cc481ef3a552eef9971a159c2b469b3f232b3217f5b508ccf00dd09be6a6",
        "detail": "51efa4edd08101081bb7d2d74e98089d982c30d75fe104088c3d3944eb976b80"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/label-maker-strip/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/label-maker-strip/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/label-maker-strip/9x16/detail.mp4",
      "bg": "#e6decd",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ac6bf836ffbec1026438526f96fadb560aa48ac42c398244ad981bc7de299aa0",
        "loop": "036e30fb2f328f6be628212d15d00d244f077ac4f694629065837d3eca5fb805",
        "detail": "c853010af82bd1638f48a18ac8da9d216bee9d80e4177863c2dd9ef6055b3f83"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/label-maker-strip/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/label-maker-strip/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/label-maker-strip/1x1/detail.mp4",
      "bg": "#e6decd",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cd92ebf08dfb006b25a45064d73824343d14ec12f4e9a7e48cc3b2bd2a9fb1d9",
        "loop": "c893985035c6faf6b2c6e8cfe9d48336c7f2affac3600231f79f9624a187a923",
        "detail": "2fd9fb133b4eee8c51fbdbd438f911211f6487fe6161fd29f1420166394ac6da"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/076b30bcdb1a1368e068fadb12c7dfc1623bebb397e4905f8512b463460d9f76/index.mjs",
    "sha256": "076b30bcdb1a1368e068fadb12c7dfc1623bebb397e4905f8512b463460d9f76",
    "bytes": 159830,
    "externals": [
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
    "at": "2026-10-09T20:53:31.125Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
