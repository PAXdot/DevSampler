// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/craft",
  "job": "data",
  "language": "hand-drawn",
  "mechanic": [
    "count"
  ],
  "tags": [
    "tally",
    "count",
    "number",
    "ink",
    "chalk",
    "strokes"
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
      "count": 65,
      "collapse": 96
    },
    "beats": [
      0,
      18,
      65,
      96,
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
      "key": "value",
      "type": "number",
      "role": "metric"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.display"
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
    "sourceUrl": "21st first-party (tally strokes count in fives and compress into the user metric, 2026-10-09)"
  },
  "defaults": {
    "value": 180,
    "label": "And counting",
    "primary": "#FFB703",
    "secondary": "#FB5607",
    "color": "#F5EEF8",
    "background": "transparent",
    "fontFamily": "Caveat",
    "seed": 19
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 200,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
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
      "brand": "fonts.display"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Tally Count",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "tally-count",
    "bundleSha256": "a83f6904e07d6e936ba1423f61c524fd93cf2eb713c1418eb5accba98372c2f2",
    "sourceSnapshot": {
      "sha256": "380231fb2fdd78399e0d2fdba550087ac492a21dcf3b4339f6900174d4b37b75",
      "files": 2025
    },
    "renderedAt": "2026-10-09T20:36:13.490Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-paper.png",
        "sha256": "aa0c1be8a49e8651e2b61ec315e6f42588a2734ead6c3c4a116abd70bd2d494b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-night.png",
        "sha256": "8cda7bc6d33aec758b41fe9d6fbeb7f2efc7e494c49dcef5c7f66a2a22d04b66"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-color.png",
        "sha256": "90d1b79cd209ea3de90daf9cf314f65165f42c301fe01a8ed4f4fd70ffdf94ce"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-paper.png",
        "sha256": "465f4bf4e4c45f20f9f4c9d94ede0a18a4fe8f6a2e9e40e9f7e4f2222c3817ed"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-night.png",
        "sha256": "7252b04a51b1b1beb3b222bc2b42edebf3c9140aba294e55ebe339faa858a744"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-color.png",
        "sha256": "6f43dcdde94e3bb9b12455e0efd6a52e6491888ba9b742658c2933b7fc88609a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-paper.png",
        "sha256": "ff1fde10cf29d67e4f4c92675acb0fc1b2f20d6de28fb08899b59eeec2872b2d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-night.png",
        "sha256": "a0c772b5897d2823de88e9331bbde392d4b1df4fa5f37ba3394548c7386557dd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-color.png",
        "sha256": "9354095fc8f6986480e772ce096567be03c8d54c33dc6633fbad8d3484f6b9d0"
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
          "tally-count--16x9",
          "tally-count--9x16",
          "tally-count--1x1"
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
            "paperNight": 57.47607421875,
            "paperColor": 19.844102647569443,
            "region": {
              "left": 644,
              "top": 272,
              "width": 631,
              "height": 557
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 62.86219618055556,
            "paperColor": 23.012098524305557,
            "region": {
              "left": 277,
              "top": 486,
              "width": 526,
              "height": 1012
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 57.31382921006944,
            "paperColor": 19.11200629340278,
            "region": {
              "left": 224,
              "top": 272,
              "width": 631,
              "height": 557
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
            "occupancy": 0.5004489250421963,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4995504530044186,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4950580928155299,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7579515806236762,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7557046885862542,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7459681564240924,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8896869778527934,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8880896942300774,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8801032761164975,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.889973958333332,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 23.01898871527778,
            "retainedAlpha": 1.0084579368675426,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-150-frame-18.png",
                "sha256": "0761cb22d34bbd656af612b9eb78f28f19eed9411942fed8c74c9d33dc7d45cd",
                "alphaMass": 10
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-150-frame-135.png",
                "sha256": "6efb05cf974cf16a666ad5be68221c03b66eb597d89dbb56184f00e7e27a5744",
                "alphaMass": 6677
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-150-frame-132.png",
                "sha256": "b93f3a2856919f921252d8b68ab7b064bf13a4afaabdbc4f0d55c6f565fdc1df",
                "alphaMass": 6621
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-150-frame-149.png",
                "sha256": "6efb05cf974cf16a666ad5be68221c03b66eb597d89dbb56184f00e7e27a5744",
                "alphaMass": 6677
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 22.889973958333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-600-frame-20.png",
                "sha256": "a6b63e87446d0d08a7795d399184cf2d4df586ed8d3d578266196a14f2602dbc",
                "alphaMass": 16
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-600-frame-135.png",
                "sha256": "6efb05cf974cf16a666ad5be68221c03b66eb597d89dbb56184f00e7e27a5744",
                "alphaMass": 6677
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-600-frame-528.png",
                "sha256": "6efb05cf974cf16a666ad5be68221c03b66eb597d89dbb56184f00e7e27a5744",
                "alphaMass": 6677
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/16x9-duration-600-frame-599.png",
                "sha256": "6efb05cf974cf16a666ad5be68221c03b66eb597d89dbb56184f00e7e27a5744",
                "alphaMass": 6677
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 36.85069444444444,
            "retainedAlpha": 1.0110246433203631,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-150-frame-18.png",
                "sha256": "99135b5f12509773be9f847dc22a2a94d2a2067e0c48458e7520a2cfbfd688e3",
                "alphaMass": 15
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-150-frame-135.png",
                "sha256": "5aff15a7de5e95d75ac8e0ecc045e09dbe3ba252e995c105f5fced07616b3061",
                "alphaMass": 10913
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-150-frame-132.png",
                "sha256": "3fe4a1fdc61e0d5ff15d0295373c079d7d4fb6815d0de10588bb10bd8643e9c6",
                "alphaMass": 10794
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-150-frame-149.png",
                "sha256": "5aff15a7de5e95d75ac8e0ecc045e09dbe3ba252e995c105f5fced07616b3061",
                "alphaMass": 10913
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 36.79144965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-600-frame-20.png",
                "sha256": "d856783644f7c03171331adba74ac2fa80d80cfecc17fca23665ec7db322b0df",
                "alphaMass": 24
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-600-frame-135.png",
                "sha256": "5aff15a7de5e95d75ac8e0ecc045e09dbe3ba252e995c105f5fced07616b3061",
                "alphaMass": 10913
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-600-frame-528.png",
                "sha256": "5aff15a7de5e95d75ac8e0ecc045e09dbe3ba252e995c105f5fced07616b3061",
                "alphaMass": 10913
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/9x16-duration-600-frame-599.png",
                "sha256": "5aff15a7de5e95d75ac8e0ecc045e09dbe3ba252e995c105f5fced07616b3061",
                "alphaMass": 10913
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 37.233615451388886,
            "retainedAlpha": 1.0085833188833015,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-150-frame-18.png",
                "sha256": "0c69d43c9731d2383ed66563e99331dfc5e859652d0fcf89b433c8ddaf745502",
                "alphaMass": 17
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-150-frame-135.png",
                "sha256": "c3adeb70a3602d92e6e0add92e1ad79855e46457c3d66dd0628b9dd132722390",
                "alphaMass": 11633
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-150-frame-132.png",
                "sha256": "bc2b16c598bc7d920d198b8ffbde2b8f654fb8095b76c057f4754b57cb990bb5",
                "alphaMass": 11534
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-150-frame-149.png",
                "sha256": "c3adeb70a3602d92e6e0add92e1ad79855e46457c3d66dd0628b9dd132722390",
                "alphaMass": 11633
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 37.18153211805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-600-frame-20.png",
                "sha256": "224fd7432e66e16fb3897d32f94bcc2d64fdd3970d584b0f3051c41b3773c5e8",
                "alphaMass": 27
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-600-frame-135.png",
                "sha256": "c3adeb70a3602d92e6e0add92e1ad79855e46457c3d66dd0628b9dd132722390",
                "alphaMass": 11633
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-600-frame-528.png",
                "sha256": "c3adeb70a3602d92e6e0add92e1ad79855e46457c3d66dd0628b9dd132722390",
                "alphaMass": 11633
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/tally-count/1x1-duration-600-frame-599.png",
                "sha256": "c3adeb70a3602d92e6e0add92e1ad79855e46457c3d66dd0628b9dd132722390",
                "alphaMass": 11633
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
        "note": "TitleMatches: The sequence of images (poster and chronological motion samples) all visually support the title \"Tally Count\": the repeated tally marks and the numerical summary (\"180\") correspond directly to counting tally marks, and the motion samples show tally marks being drawn by hand, matching the claim. \n\nNoBakedHeading: There are no decorative, unrelated headings or block titles embedded into the poster itself; all text visible is legitimate heading or explanatory content that matches editable named slots (value and label), with no extraneous label or category visible.\n\nBrandAdherence: The last three images clearly correspond to different, supplied palettes with the correct background and ink colors (beige with brown, dark grey with lavender, light green with blue). All key poster content is preserved and clearly visible/legible with shape and material intact, and no unexplained fixed block colors appear; screenshots and tally marks retain appropriate, differentiated linework.\n\nLanguageAdherence: Material, type roles, and the hand-drawn feel of the tally marks are consistent across all rebrands and in the sampled motion; display and body type, numerals, and drawing surface/ink conventions all match the supplied language card. Markings are imperfect and combine flat drawing surfaces and static camera with linear hand drawing motion. No forbidden effects (repeated boxes, drop shadows, random noise) are present."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "a83f6904e07d6e936ba1423f61c524fd93cf2eb713c1418eb5accba98372c2f2",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:54:56.102Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "tally-count",
      "vsPositive": 0.9583333333333334,
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
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "7c7161ce06806845e16527aaa77f5e533554895e190b31426ee52d9082473519",
      "bundleSha256": "a83f6904e07d6e936ba1423f61c524fd93cf2eb713c1418eb5accba98372c2f2",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/tally-count/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tally-count/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tally-count/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d3edcb9780bc9b70e43b75052b5f9aba096481a850498404d42d66ac374fb382",
        "loop": "a7fd52e26424ab80fc2eda67719622ac449a2af1072b0904016c96d16bd5fe65",
        "detail": "d1bd690b6bd2bcae94b49dc07cc091def9c8ad4ec10ad3a33bda345d9f78c97f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/tally-count/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tally-count/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tally-count/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cf8e6f9f2044554283e29a47a37ce8e43b552f0211b09d22ef5df8c469fa729b",
        "loop": "548330538bcd5c684e2ba1ef088baadbef1f52ea7125dfa99d77efab3d6efb45",
        "detail": "0fb0cae58ad141b9f8f27508fc4ed99e77f748e871a81ea9905980fc0a9f5d29"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/tally-count/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tally-count/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tally-count/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "aa26734ef02010bcfef97e10dfd2f84329e51ffca4418e237c84047664e2a54b",
        "loop": "04897fa39f8d3bcc9ee5dc76a072c25773ac707e654da3ee74ac9ab9b776eae4",
        "detail": "d8075f496a9ac3d16fa20536f1b2e34da6d2010852f3f448d97949be12614fcb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a83f6904e07d6e936ba1423f61c524fd93cf2eb713c1418eb5accba98372c2f2/index.mjs",
    "sha256": "a83f6904e07d6e936ba1423f61c524fd93cf2eb713c1418eb5accba98372c2f2",
    "bytes": 160804,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T20:56:35.594Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
