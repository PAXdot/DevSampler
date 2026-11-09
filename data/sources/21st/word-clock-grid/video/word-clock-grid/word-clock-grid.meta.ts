// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "pixel-terminal",
  "mechanic": [
    "light"
  ],
  "tags": [
    "letters",
    "grid",
    "word-clock",
    "sentence",
    "headline",
    "light",
    "hidden"
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
      "settled": 135,
      "scan": 25,
      "words": 75
    },
    "beats": [
      0,
      25,
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
      "maxChars": 48,
      "lines": 9,
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
    "sourceUrl": "21st first-party (words light up in a seeded field of dim letters to reveal the user sentence, 2026-10-09)"
  },
  "defaults": {
    "text": "Make time for what matters",
    "primary": "#58A6FF",
    "secondary": "#3FB950",
    "color": "#E6EDF3",
    "background": "#0E1116",
    "fontFamily": "IBM Plex Mono",
    "seed": 37
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 48,
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
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Hidden Sentence Grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "word-clock-grid",
    "bundleSha256": "6cb5ff1ccfc397d0aeffe1619eced86660c9a84dd22f925aaf0cdd6a24571d44",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:37:38.639Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-paper.png",
        "sha256": "b1f3daa69c4dcdd2230bbe28753c183de1862c5a4901e21569acc1c59ad3a043"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-night.png",
        "sha256": "eaa2bf65b86305c554f3ec325c5e41a708e5506ea722d339c5c3c1f4d6f69926"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-color.png",
        "sha256": "9ae1a4af1401380534a28c8da27847c4b5349607a930175b015a857913292acf"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-paper.png",
        "sha256": "ff3d3504cee965af75c0d41023d455b29ca7272980a57f69fc09329f89305273"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-night.png",
        "sha256": "a04fd4ddbb84dea29345fe1d12450fb8460a5b0256542ba18c15043ee72078c4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-color.png",
        "sha256": "5583f182c9a3b74f42434c5f1c5292ff856ee7eba331857b3bdcaa0c2aa748a5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-paper.png",
        "sha256": "f392dd7c12863b022566bb6babcbf18b4019ba13531a3538da468c39d887d714"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-night.png",
        "sha256": "c6049201ba41c0e297e6ecd0d57d0fb05c248fd7fc9f956796259f8d2b4a0894"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-color.png",
        "sha256": "9836f866cf392ad6aa3c0f534d6de1f8ffd09a4855c3ac7d0660ba9c951ec7e0"
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
          "word-clock-grid--16x9",
          "word-clock-grid--9x16",
          "word-clock-grid--1x1"
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
            "paperNight": 52.11591254340278,
            "paperColor": 15.282389322916666,
            "region": {
              "left": 191,
              "top": 150,
              "width": 1540,
              "height": 790
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.44200303819444,
            "paperColor": 11.82326931423611,
            "region": {
              "left": 111,
              "top": 267,
              "width": 856,
              "height": 1386
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.397216796875,
            "paperColor": 11.34299045138889,
            "region": {
              "left": 106,
              "top": 161,
              "width": 869,
              "height": 765
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
            "occupancy": 0.8272936875367433,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8272704497179532,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8257046308106578,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8087581097253718,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.806866277889757,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8083958731383502,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8056348253750518,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8057624055566444,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8045789474912052,
            "bad": [],
            "measured": 22
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.627712673611111,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 2.5533854166666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-150-frame-18.png",
                "sha256": "37cdbd2e5c9f76472c54fc8acfe570109b7a5714cf38c731e4f28cbfff14acef",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-150-frame-135.png",
                "sha256": "45b1ca724e29369a722c29be85486aa9bcad80051d1e5893f64ad6d360fee258",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-150-frame-132.png",
                "sha256": "82f4130eea5f4147513d3725a82a6d22d78045e60eb4866f3c024970900ea213",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-150-frame-149.png",
                "sha256": "45b1ca724e29369a722c29be85486aa9bcad80051d1e5893f64ad6d360fee258",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.627712673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-600-frame-20.png",
                "sha256": "6b8be395ff268a904beb149270d4e40c8f3e38045987da3a603253b23185b230",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-600-frame-135.png",
                "sha256": "45b1ca724e29369a722c29be85486aa9bcad80051d1e5893f64ad6d360fee258",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-600-frame-528.png",
                "sha256": "45b1ca724e29369a722c29be85486aa9bcad80051d1e5893f64ad6d360fee258",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/16x9-duration-600-frame-599.png",
                "sha256": "45b1ca724e29369a722c29be85486aa9bcad80051d1e5893f64ad6d360fee258",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 2.3873697916666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-150-frame-18.png",
                "sha256": "edb76d93b3419c569c79d4a653e038960ba5d3defa6645d22c0803f0c3b1fb27",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-150-frame-135.png",
                "sha256": "79a4cc21d18541c013978418d80f87f36f0288d6899266eaaa3f87ddd718ec0d",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-150-frame-132.png",
                "sha256": "5c0566c6e04b8b7316d30488f614d315e2127216389d0671b0d72086d804c337",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-150-frame-149.png",
                "sha256": "79a4cc21d18541c013978418d80f87f36f0288d6899266eaaa3f87ddd718ec0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.4033203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-600-frame-20.png",
                "sha256": "4ea9e6f4e2f632840f7bc51acdc5abd0c0083dfb9cfc1bcbc3097935986c721a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-600-frame-135.png",
                "sha256": "79a4cc21d18541c013978418d80f87f36f0288d6899266eaaa3f87ddd718ec0d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-600-frame-528.png",
                "sha256": "79a4cc21d18541c013978418d80f87f36f0288d6899266eaaa3f87ddd718ec0d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/9x16-duration-600-frame-599.png",
                "sha256": "79a4cc21d18541c013978418d80f87f36f0288d6899266eaaa3f87ddd718ec0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 2.1630859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-150-frame-18.png",
                "sha256": "a4826df456d6476ddbb9e4c0332e69951189f8091a1fcfe42607e3280fd56726",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-150-frame-135.png",
                "sha256": "8b023fb19435f269107cbc7c74ebdbfb15d3fb4f453dda5dccb7d93961450318",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-150-frame-132.png",
                "sha256": "2a5a0046b696824536ce739d7b4021dff63f5652697853f69f783a1e502e49d8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-150-frame-149.png",
                "sha256": "8b023fb19435f269107cbc7c74ebdbfb15d3fb4f453dda5dccb7d93961450318",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.2256944444444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-600-frame-20.png",
                "sha256": "946f8632e4ade2ef1ccdaf8608623189bea3b62b9c07432d6935b2e80b791fca",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-600-frame-135.png",
                "sha256": "8b023fb19435f269107cbc7c74ebdbfb15d3fb4f453dda5dccb7d93961450318",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-600-frame-528.png",
                "sha256": "8b023fb19435f269107cbc7c74ebdbfb15d3fb4f453dda5dccb7d93961450318",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/word-clock-grid/1x1-duration-600-frame-599.png",
                "sha256": "8b023fb19435f269107cbc7c74ebdbfb15d3fb4f453dda5dccb7d93961450318",
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
        "note": "TitleMatches: The visible subject is a grid of discrete character cells resembling a word-search, with the phrase 'Make time for what matters' highlighted vertically, matching the claimed title 'Hidden Sentence Grid'. The motion samples (images 2–4) show a horizontal scan line and stepped highlighting, which aligns with the description of 'scan', 'type', and 'step' actions in the language card. No other effect is falsely claimed or depicted.\n\nnoBakedHeading: There is no decorative or extraneous block title, category, or language label embedded; the only prominent text is legitimate content matching the named slot ('Make time for what matters').\n\nbrandAdherence: All three rebrand/poster variants (images 5–7) use the supplied color palettes. Each keeps the grid, text, and highlight visually clear with appropriate contrasts, no unexplained fixed block colors, and text/material preserved across light, dark, and colored backgrounds as specified. There is no retention of visual elements outside the brand’s intent.\n\nlanguageAdherence: Across palette variants and motion samples, all visible material adheres to the supplied language card: mono type, flat lighting, no lens/gloass effects, grid-based, linear eased stepping, fixed perspective, clear highlight roles for cursor/scan. There is no evidence of elements forbidden by the card. The structure supports discrete cell/grid visuals and movement verbs exactly as described."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 62,
        "compared": 62,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6cb5ff1ccfc397d0aeffe1619eced86660c9a84dd22f925aaf0cdd6a24571d44",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:07.053Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "word-clock-grid",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "5f138dbdcc2887d076b46feee4880d043a36be0f0d67d64795f7a3584708a679",
      "bundleSha256": "6cb5ff1ccfc397d0aeffe1619eced86660c9a84dd22f925aaf0cdd6a24571d44",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/word-clock-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-clock-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-clock-grid/16x9/detail.mp4",
      "bg": "#0e1116",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "68fc48770d8e0db9b83959ac14a9071bb13c3feba83ec2acc42a942d353d7947",
        "loop": "cfd819ee00180b3811e91142f3a67af3fce9f0d0d89e8fb37d3b810b5b5522ab",
        "detail": "367430860e95a9ffd085f3ddf99aa25fd26a56ebc64873f1334099c14c198f29"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/word-clock-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-clock-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-clock-grid/9x16/detail.mp4",
      "bg": "#0e1116",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5f3faa755755a2f72a0de626d5e30ce56f537d8e0342774de14db078a07a84ea",
        "loop": "5320e0a185fac545997de41c78d658a20a5aaab74d641bd1c5b298accb9b76ec",
        "detail": "77f108af21ec4832f208f8186cafd638d9784f3dab4d3b920322ebce2e2544f7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/word-clock-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-clock-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-clock-grid/1x1/detail.mp4",
      "bg": "#0e1116",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3feffe6b3677e60b2bfa284d5656c96e5582a66623c30559332fe7b8736b25a2",
        "loop": "ab2d99801b7e66ea30dfcde1c70f57c255ff4061ae3e85150cf8754b5c5914d0",
        "detail": "0952965b43b4ac43cf4c31fb30b58b907fe258312473ea4fe1fc56b20f2a28d8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6cb5ff1ccfc397d0aeffe1619eced86660c9a84dd22f925aaf0cdd6a24571d44/index.mjs",
    "sha256": "6cb5ff1ccfc397d0aeffe1619eced86660c9a84dd22f925aaf0cdd6a24571d44",
    "bytes": 160060,
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
    "at": "2026-10-09T19:58:27.450Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
