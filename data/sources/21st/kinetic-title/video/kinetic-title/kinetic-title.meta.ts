// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "title",
    "headline",
    "kinetic-type",
    "launch",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 24
    },
    "beats": [
      0,
      6,
      12
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "serifFontFamily": "fonts.serif",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "title",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "factor-marketplace/remotion/components/kinetic.tsx, mixed-text.tsx"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "serifFontFamily": "Instrument Serif",
    "title": "Deploy at the *edge*",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "energy": "default",
    "align": "center"
  },
  "fields": [
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 60,
      "role": "headline"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "energy",
      "label": "Energy",
      "type": "select",
      "options": [
        "calm",
        "default",
        "punchy"
      ]
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "center",
        "left"
      ]
    }
  ],
  "name": "Kinetic Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "kinetic-title",
    "bundleSha256": "489a67a127b17751eb53a8720ebfaed1224eceeebb5a25a1c68916ad61870b8c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:00.515Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-paper.png",
        "sha256": "1b215e7fae9d1e05b28b49a53e1c09b7de5ee64421ef272d4d2b668d5a7774e8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-night.png",
        "sha256": "ae7021c112023456abafde32f710679904c8c404e3fddec53e39743db2087652"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-color.png",
        "sha256": "ed6f3654d31b98f650e406ad599d0f63446f9579f1bfd3091cb8d7a2f59999b8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-paper.png",
        "sha256": "22b751b8891ae8cdf9ded19c7dd7661cc0bc2dbb48d17f495158582412700acf"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-night.png",
        "sha256": "0f7edbe1c6945760106999c031132b1a815118ff2d41d8efdf39f13bc15631e5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-color.png",
        "sha256": "d8583307a0fa027bd5db46488f38689d34117f9237ed8ffddff0aa67a5077791"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-paper.png",
        "sha256": "eb1947f0f2d0e2bf53fbe04f667fa0c6182754e59f83943b621743d586b53a23"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-night.png",
        "sha256": "4756aa4d14f1a618a82cbf6a63011e25c08ba566101d469faa109f9138ebb351"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-color.png",
        "sha256": "36cffab91a23874b91738cfca6a5ded99232deaa388a91d27b82f0dc4f3d5701"
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
          "kinetic-title--16x9",
          "kinetic-title--9x16",
          "kinetic-title--1x1"
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
            "paperNight": 72.21446397569444,
            "paperColor": 30.86762152777778,
            "region": {
              "left": 310,
              "top": 378,
              "width": 1331,
              "height": 366
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.06854926215278,
            "paperColor": 25.486707899305557,
            "region": {
              "left": 149,
              "top": 530,
              "width": 782,
              "height": 931
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 71.75447591145833,
            "paperColor": 30.512858072916668,
            "region": {
              "left": 174,
              "top": 447,
              "width": 749,
              "height": 208
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
            "occupancy": 0.4074663243909104,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5289593935246424,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28513316254356685,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0266274692961892,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9431649701418634,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9512127735610706,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2332059402693405,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3011702318482644,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1620926457955534,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.773546006944443,
        "frames": [
          3,
          24,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 20.773546006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-45-frame-3.png",
                "sha256": "382c75c498a9a42f8bdbb2521b423e18699499b549514791796ba9be75f2939c",
                "alphaMass": 846
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-45-frame-24.png",
                "sha256": "c047086c14b11b3c003a928041f6171401f8a8044ea41dc922cc1d9b15c92b67",
                "alphaMass": 18806
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-45-frame-39.png",
                "sha256": "d776a6bc46d2def828080d6bab4bc9bd7da989675c586b4f807a2ec828c8bb62",
                "alphaMass": 18814
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-45-frame-44.png",
                "sha256": "b179d83f091d6938af2afff690f16db8735fbdd9fbfbb1e498daa2b5fe8b9a84",
                "alphaMass": 18814
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.773546006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-600-frame-3.png",
                "sha256": "07d5cd8c7932fd7a9d75252f67d585a37b5220fcab578692ff0253cdbe3b3a5e",
                "alphaMass": 846
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-600-frame-24.png",
                "sha256": "a6595cefe0004708961b2ccce7e8e55e4c541a8e1360383c78eabd6adf4e419b",
                "alphaMass": 18806
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-600-frame-528.png",
                "sha256": "2d8a73b0655b9041998adc01908cbd8313b614e8c8a5745330334c6c40cd6b6d",
                "alphaMass": 18814
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/16x9-duration-600-frame-599.png",
                "sha256": "ae34400136ebe04e6409c91a47587937aec9843cad56850047ec2ec55031571c",
                "alphaMass": 18814
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 31.43381076388889,
            "retainedAlpha": 1.0000416597233794,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-45-frame-3.png",
                "sha256": "94846d6be617cf177d361bc4a9bcd4a7c2d3692b35c3834cb952602329e43308",
                "alphaMass": 948
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-45-frame-24.png",
                "sha256": "cfe30df6b0254cc25efb4f2f1f04114df4ecb0c052c46e8cd9183d1002dad327",
                "alphaMass": 24113
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-45-frame-39.png",
                "sha256": "ee737258c3305bac9ad44f662f5c1cceea9d0ec1f36926e92255e4c68ed2f321",
                "alphaMass": 24004
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-45-frame-44.png",
                "sha256": "cf25813eec5aabe0a716381eaf7ef43e4123a778f991a72345db4bd9d513dc4a",
                "alphaMass": 24005
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 31.43381076388889,
            "retainedAlpha": 1.0000416597233794,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-600-frame-3.png",
                "sha256": "94846d6be617cf177d361bc4a9bcd4a7c2d3692b35c3834cb952602329e43308",
                "alphaMass": 948
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-600-frame-24.png",
                "sha256": "fa71acdaf674d9ba884b94b9ef78ace83e1b9568f8731840921667ab5a3929a1",
                "alphaMass": 24113
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-600-frame-528.png",
                "sha256": "b3b3c79d9da46e98d530510e4d9483f40095aaa3e87c590290dab13ec90e4bc6",
                "alphaMass": 24004
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/9x16-duration-600-frame-599.png",
                "sha256": "f42aead7b29bdc27821a2564e2690a7383b2c963caea65697bc47febc9d84370",
                "alphaMass": 24005
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 16.739583333333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-45-frame-3.png",
                "sha256": "e69f046e4920dde4ad52043dbc98a5f41921c5a5fca9c6e8bcf2d89795b6405a",
                "alphaMass": 517
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-45-frame-24.png",
                "sha256": "f627ec255e99501e62d68eefeb44b952923800d41895e57d83ed96c11e924326",
                "alphaMass": 11443
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-45-frame-39.png",
                "sha256": "c17efdedf4deefde732dfe3859d36010623df7883f1446b01ab7a2cd3d1bf591",
                "alphaMass": 11469
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-45-frame-44.png",
                "sha256": "c17efdedf4deefde732dfe3859d36010623df7883f1446b01ab7a2cd3d1bf591",
                "alphaMass": 11469
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.739583333333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-600-frame-3.png",
                "sha256": "e69f046e4920dde4ad52043dbc98a5f41921c5a5fca9c6e8bcf2d89795b6405a",
                "alphaMass": 517
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-600-frame-24.png",
                "sha256": "f627ec255e99501e62d68eefeb44b952923800d41895e57d83ed96c11e924326",
                "alphaMass": 11443
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-600-frame-528.png",
                "sha256": "c17efdedf4deefde732dfe3859d36010623df7883f1446b01ab7a2cd3d1bf591",
                "alphaMass": 11469
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/kinetic-title/1x1-duration-600-frame-599.png",
                "sha256": "c17efdedf4deefde732dfe3859d36010623df7883f1446b01ab7a2cd3d1bf591",
                "alphaMass": 11469
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
        "note": "Headline assembles word by word with a script accent word; title card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "489a67a127b17751eb53a8720ebfaed1224eceeebb5a25a1c68916ad61870b8c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.988620Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-title/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "4a64a59e149876565cf5fcc070c2ff67686e1f48efdf448423b1e1fc1cdfca78",
        "loop": "a90f98b0bc4c0409efd4a895184ae4a406f5a3cef37f58badd6fd91428189bdf",
        "detail": "836b8b91a999588bae21e33a2579e2b0f800e9b9c589e7db02938d28d0afe327"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-title/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "2004cbb7815369c18a0448b39acb744131bd10fa75db250547fd122ddef9164d",
        "loop": "c26bd846645026dfcfd2b7c9a5bddc2c3be5bcd9da047366f307f6348ad70f48",
        "detail": "ec723720386732b33e93e269f26fac7a01d67647686bd1956b3d3cf0deb7a1e2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/kinetic-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/kinetic-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/kinetic-title/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "333f56b2e9581d93031cfe9bbebc71218ed0f5ff847e189cadfd69c6abeebedc",
        "loop": "caa140804d39e4278a7b644122524a005cf5f99d09f093a81c58ac436382291f",
        "detail": "5acd9754124ce3fccf2f06c73c36f5f21dc642ee7215a2d975a09560d14e3ff6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/489a67a127b17751eb53a8720ebfaed1224eceeebb5a25a1c68916ad61870b8c/index.mjs",
    "sha256": "489a67a127b17751eb53a8720ebfaed1224eceeebb5a25a1c68916ad61870b8c",
    "bytes": 159346,
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
    "at": "2026-10-07T01:41:34.435Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
