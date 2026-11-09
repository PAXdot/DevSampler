// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "camera-push-to-metric"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "camera-push-to-metric",
    "dashboard",
    "zoom",
    "metric"
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
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104
    },
    "beats": [
      0,
      26,
      52,
      78,
      104
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
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "camera-push-to-metric",
      "prop": "transform",
      "from": "enter",
      "settledBy": 104,
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
    "ink": "#14161F",
    "accent": "#3D63FF",
    "secondary": "#4F7DFF",
    "paper": "#EBEDF3",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Insights · last 30 days",
    "headline": "Hours saved, up 31% this month",
    "cta": "See your own numbers"
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
      "brand": "fonts.display"
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
      "role": "cta"
    }
  ],
  "name": "Auto Zoom To Metric",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-autozoom",
    "bundleSha256": "40868c2f0d951b102c4ce8f36be8b7aaae81e68936a47b73315aa6eb381cfbcd",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:49:32.894Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-paper.png",
        "sha256": "183cc7be0398007ccc0b1084dff35821af2c091f1620951be8291d2d799736b2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-night.png",
        "sha256": "12682534e736db1000544c520eb022996064a7bccd3d64d196874c6392eaa5ac"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-color.png",
        "sha256": "644fa57e421d2b563d968c891f9c935d7f6bead36ad9f20f69cc40039322f161"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-paper.png",
        "sha256": "6174d21028f35333eb5fc0057de0d60848fe351ec837212a99d2fd92e79f50b4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-night.png",
        "sha256": "63183dcf18078542055e0199db6f052e0eb79c434b5101d89136fb1489ec5e5f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-color.png",
        "sha256": "c9a1573e4fd8667b37f19ebd04080ed330c30abee397c7cf95fe86138541779c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-paper.png",
        "sha256": "312c839e5363c1be7dcdc67558b5196e1fff6272842cc8a51f4b288f59a2c0e3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-night.png",
        "sha256": "da558f39d7d278d14ff83894e32d0872f549cb4195000f084bb6fa1316a4d570"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-color.png",
        "sha256": "a32c47d024ab6484f5a35c3a368f06984f981da20d5fa768512cee6d6414b163"
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
          "mg-pr-autozoom--16x9",
          "mg-pr-autozoom--9x16",
          "mg-pr-autozoom--1x1"
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
            "paperNight": 8.794623480902779,
            "paperColor": 5.737386067708333,
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
            "paperNight": 27.13861762152778,
            "paperColor": 12.949517144097221,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
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
            "paperNight": 14.4326171875,
            "paperColor": 7.557156032986111,
            "region": {
              "left": 22,
              "top": 63,
              "width": 1036,
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
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.147811555177627,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1581455498866216,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2034043155442335,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2034043155442335,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2034043155442335,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.244249131944445,
        "frames": [
          15,
          104,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.314778645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-90-frame-10.png",
                "sha256": "2caf8bffde0bca5f5e5e1a73ba6e556bc8b939aaf2b5c5caf87f7bee065221b6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-90-frame-89.png",
                "sha256": "e37a4b6c228190b7ac192a57a532a78184f31fc0a7cbdfe67da17be258fc351c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-90-frame-79.png",
                "sha256": "e37a4b6c228190b7ac192a57a532a78184f31fc0a7cbdfe67da17be258fc351c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.244249131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-900-frame-15.png",
                "sha256": "cbc71c9feec1f50a4c527b35cf97a242cb1ae5960e52dc6f03e2b8797da4a10a",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-900-frame-104.png",
                "sha256": "e37a4b6c228190b7ac192a57a532a78184f31fc0a7cbdfe67da17be258fc351c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-900-frame-792.png",
                "sha256": "e37a4b6c228190b7ac192a57a532a78184f31fc0a7cbdfe67da17be258fc351c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/16x9-duration-900-frame-899.png",
                "sha256": "e37a4b6c228190b7ac192a57a532a78184f31fc0a7cbdfe67da17be258fc351c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.306206597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-90-frame-10.png",
                "sha256": "7f848e4b9b83b963122a603cbc77c75eda4898b1a50c8c8a3535fc27cfb3f4c3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-90-frame-89.png",
                "sha256": "55e075fca2700eb26e071f47038a8b2a25da72ee8119f67b4deb0385d78b5785",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-90-frame-79.png",
                "sha256": "55e075fca2700eb26e071f47038a8b2a25da72ee8119f67b4deb0385d78b5785",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.117078993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-900-frame-15.png",
                "sha256": "6c7fb5aa0a31d5834f2a34d805a8a4e945f56b03f6046c995688e7f094391d73",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-900-frame-104.png",
                "sha256": "55e075fca2700eb26e071f47038a8b2a25da72ee8119f67b4deb0385d78b5785",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-900-frame-792.png",
                "sha256": "55e075fca2700eb26e071f47038a8b2a25da72ee8119f67b4deb0385d78b5785",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/9x16-duration-900-frame-899.png",
                "sha256": "55e075fca2700eb26e071f47038a8b2a25da72ee8119f67b4deb0385d78b5785",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.655056423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-90-frame-10.png",
                "sha256": "b1762c9d2215310f080753d24e078da9e97f2c464ab1c66331a702efad18e551",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-90-frame-89.png",
                "sha256": "efaa9bbbaad163e37bb8e8183e4e5f36044584245aea4c6154ced777175df385",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-90-frame-79.png",
                "sha256": "efaa9bbbaad163e37bb8e8183e4e5f36044584245aea4c6154ced777175df385",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.533420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-900-frame-15.png",
                "sha256": "195b9bd369a4e9aa2a0f359cd9b89fc734cff02ebe49ce2051e160b27528f5db",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-900-frame-104.png",
                "sha256": "efaa9bbbaad163e37bb8e8183e4e5f36044584245aea4c6154ced777175df385",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-900-frame-792.png",
                "sha256": "efaa9bbbaad163e37bb8e8183e4e5f36044584245aea4c6154ced777175df385",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-pr-autozoom/1x1-duration-900-frame-899.png",
                "sha256": "efaa9bbbaad163e37bb8e8183e4e5f36044584245aea4c6154ced777175df385",
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
        "note": "A dashboard auto-zooms into one Hours saved metric card on a light brand-blue wash (hue 225)."
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
      "bundleSha256": "40868c2f0d951b102c4ce8f36be8b7aaae81e68936a47b73315aa6eb381cfbcd",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/16x9/detail.mp4",
      "bg": "#d7ddf4",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7c0752cb75f07e8c2a2b4508f6cf1dc5c3d979d1a53d68a0f827bc4c86f3ce59",
        "loop": "c115cb22aae30c2f61968b3dda39c91910c7c236cebad414cba8c9b42539164d",
        "detail": "ceff4561a773018fd144a3cfd6646067f0bd912843ec72c188b974d6ba89e277"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/9x16/detail.mp4",
      "bg": "#dbe0f4",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8ccee4d9bae4fc7f5a0e3b6501a713b0a4175bcd8b7f769bbd614e4db464cc6d",
        "loop": "f2d05b7c0cca00089a6189b97a3dd3cd340ccb924315ded4802791e4140fbb74",
        "detail": "dd0582d9297832c9e57dc573480581f6fcd123d78e032cd8a0052eda3f01be25"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-autozoom/1x1/detail.mp4",
      "bg": "#d8def4",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6005b27f19da17ae4acc60012eb63c03cb78786f64462748f388daa1cd626a7c",
        "loop": "74f70f46f323343cce71ca327ed3be3c708a1879c2505285d2e22a8b07d9e030",
        "detail": "f9ae4318529471ff4e41a868648e3358c7a86aa0ead4d01905a0b62882ed44a1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/40868c2f0d951b102c4ce8f36be8b7aaae81e68936a47b73315aa6eb381cfbcd/index.mjs",
    "sha256": "40868c2f0d951b102c4ce8f36be8b7aaae81e68936a47b73315aa6eb381cfbcd",
    "bytes": 181141,
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
    "at": "2026-10-09T04:23:18.528Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
