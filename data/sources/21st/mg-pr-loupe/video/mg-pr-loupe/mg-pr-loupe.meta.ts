// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "loupe-magnify-row"
  ],
  "energy": "calm",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "loupe-magnify-row",
    "table",
    "loupe",
    "data"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "loupe-magnify-row",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#1E1A14",
    "accent": "#D2461F",
    "secondary": "#FFDD40",
    "paper": "#ECE6DA",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Usage ledger · October",
    "headline": "One account is quietly expanding",
    "cta": "Halcyon Labs, up 38%"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Loupe Over Table",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-loupe",
    "bundleSha256": "e6bab09a18b7d6bf5901b6ee7ae4c134ad322873030ba93d42e40b7d0558590f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:50.980Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-paper.png",
        "sha256": "16d4860efffb7b9156cca089915909a587daa1413fc8368e3c4a770a28d926f7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-night.png",
        "sha256": "19996db7fed25e34a20e879c87f3f24878ad59b22f061c371fac0e05a5991e56"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-color.png",
        "sha256": "6eb6826623f3f3bce4611fd171309e8cce1e8df1c2437672b96bfbeceee9e908"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-paper.png",
        "sha256": "a5d2f4a404e46613b4331009ef39dbbbc3c404afeb8b38f9b0bfabd08c4dfb14"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-night.png",
        "sha256": "15fd92ccce7dc56752f1ff6ef0cb946f5236d04a0f26811fd7753ed9008900cd"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-color.png",
        "sha256": "3b95296730bc71643eeb95e410350104cd590c3038c677c9271be7fb5db68403"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-paper.png",
        "sha256": "96efc873f5c9427600296982b9fd4893988e590b3851e44b12011f051c02a2bd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-night.png",
        "sha256": "9b419a4761fa9a7f22c7384f00cf84736084e460a1eda8377a1cf4f74c612e7a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-color.png",
        "sha256": "1ae7f0a66579362c3d205e05416eae0a9e90818cc13890af3b97be871e7c2471"
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
          "mg-pr-loupe--16x9",
          "mg-pr-loupe--9x16",
          "mg-pr-loupe--1x1"
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
            "paperNight": 13.64352756076389,
            "paperColor": 4.660753038194445,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 35.585693359375,
            "paperColor": 11.180365668402779,
            "region": {
              "left": 14,
              "top": 174,
              "width": 1052,
              "height": 1570
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 21.873942057291668,
            "paperColor": 7.048719618055555,
            "region": {
              "left": 26,
              "top": 63,
              "width": 1028,
              "height": 956
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
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1288385596007953,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1288385596007953,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1281195541488203,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1941116181269034,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1941116181269034,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1941116181269034,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.830295138888889,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.852105034722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-90-frame-10.png",
                "sha256": "7151fb22b225331e6b776b1a2593f2a66a38d676672626da1e43eadd085e1cb4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-90-frame-89.png",
                "sha256": "d36a2febc9bd4c2a4aae86c49bfeeda799834d68cee0f45a63604f1abcc26ac3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-90-frame-79.png",
                "sha256": "d36a2febc9bd4c2a4aae86c49bfeeda799834d68cee0f45a63604f1abcc26ac3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.830295138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-900-frame-13.png",
                "sha256": "79690fbd8fceb6e0188eac6b580b4ddcdbabb4d6d9550097a6a09fd6d930f828",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-900-frame-90.png",
                "sha256": "d36a2febc9bd4c2a4aae86c49bfeeda799834d68cee0f45a63604f1abcc26ac3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-900-frame-792.png",
                "sha256": "d36a2febc9bd4c2a4aae86c49bfeeda799834d68cee0f45a63604f1abcc26ac3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/16x9-duration-900-frame-899.png",
                "sha256": "d36a2febc9bd4c2a4aae86c49bfeeda799834d68cee0f45a63604f1abcc26ac3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.617078993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-90-frame-10.png",
                "sha256": "4acb634fa9200a5f59cf87be1e313f42ca6248209aceb89651e344d9cdac09a2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-90-frame-89.png",
                "sha256": "1c9bb934c00dbb700a92d8f5897e8fced799a5d01b7faf15c7f36657a1084526",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-90-frame-79.png",
                "sha256": "1c9bb934c00dbb700a92d8f5897e8fced799a5d01b7faf15c7f36657a1084526",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.491753472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-900-frame-13.png",
                "sha256": "32615f3c8fad8e081de68be67bd630de9c7c7dbb06878e5ea56295b68ac23de5",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-900-frame-90.png",
                "sha256": "1c9bb934c00dbb700a92d8f5897e8fced799a5d01b7faf15c7f36657a1084526",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-900-frame-792.png",
                "sha256": "1c9bb934c00dbb700a92d8f5897e8fced799a5d01b7faf15c7f36657a1084526",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/9x16-duration-900-frame-899.png",
                "sha256": "1c9bb934c00dbb700a92d8f5897e8fced799a5d01b7faf15c7f36657a1084526",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.784505208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-90-frame-10.png",
                "sha256": "ed661784a22fbc3ab2fe07d7dae49e3a31a89164ca456279b485f0f1f130eeed",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-90-frame-89.png",
                "sha256": "bc30205fc7cc8b566ac8f8bc9490bc9b0ed5d9d07d2012d7ff05fb59b0ad9b1b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-90-frame-79.png",
                "sha256": "bc30205fc7cc8b566ac8f8bc9490bc9b0ed5d9d07d2012d7ff05fb59b0ad9b1b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.721462673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-900-frame-13.png",
                "sha256": "ada2e1106957595acbeaa560b2b026b21a985d2a9373ec0d976c1232c1bfce07",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-900-frame-90.png",
                "sha256": "bc30205fc7cc8b566ac8f8bc9490bc9b0ed5d9d07d2012d7ff05fb59b0ad9b1b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-900-frame-792.png",
                "sha256": "bc30205fc7cc8b566ac8f8bc9490bc9b0ed5d9d07d2012d7ff05fb59b0ad9b1b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-loupe/1x1-duration-900-frame-899.png",
                "sha256": "bc30205fc7cc8b566ac8f8bc9490bc9b0ed5d9d07d2012d7ff05fb59b0ad9b1b",
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
        "note": "Loupe magnifies one table row; headline readable, rebrands recolor highlight and type."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e6bab09a18b7d6bf5901b6ee7ae4c134ad322873030ba93d42e40b7d0558590f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-loupe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-loupe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-loupe/16x9/detail.mp4",
      "bg": "#eae3d7",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6157d523d10d4b24dedc4c824b35537cad10024ed60e88a6c0807bfe983038ff",
        "loop": "3afdaccc72d0ec902e92e6010767c442473b1f642286e0597881be4db84d134a",
        "detail": "54c6110b7fda530c8b7449135d3a932506c2651a4cec1a5d60166e0feb2c5a58"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-loupe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-loupe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-loupe/9x16/detail.mp4",
      "bg": "#eae3d7",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e7ccb18e96ca6db80210a1a99b17e30d49e76f7ba0ad5410f310e839211baa7a",
        "loop": "711877bf1891854441181f30c9204d698df143aab956d6660a6043ce489b50a6",
        "detail": "4ef9603bcbfdf27faf9df696122a78893e5a6c0fc65829bfacab4a36c1187421"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-loupe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-loupe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-loupe/1x1/detail.mp4",
      "bg": "#eae3d7",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "67a3c3f804077c1005483320e7268c05ba892dc5a99bc03d7443cc7a2aedc2fe",
        "loop": "51182e825d98cc6c923cc8af7b962802b459c8de19b30363d4a2d8b525f29f6a",
        "detail": "4d3ec20cf6cb7cc426ac101eee323453a1cc3c551e316f08700573273fa528ef"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e6bab09a18b7d6bf5901b6ee7ae4c134ad322873030ba93d42e40b7d0558590f/index.mjs",
    "sha256": "e6bab09a18b7d6bf5901b6ee7ae4c134ad322873030ba93d42e40b7d0558590f",
    "bytes": 178622,
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
    "at": "2026-10-09T04:03:34.723Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
