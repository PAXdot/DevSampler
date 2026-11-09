// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "review-columns-hero-lift"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "review-columns-hero-lift",
    "reviews",
    "social-proof",
    "rating"
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
      "key": "headline",
      "type": "text",
      "maxChars": 52,
      "role": "headline"
    },
    {
      "key": "score",
      "type": "text",
      "maxChars": 4,
      "role": "value"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 72,
      "role": "body"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 36,
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
      "target": "review-columns-hero-lift",
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
    "ink": "#1D1A16",
    "accent": "#FF5B2E",
    "secondary": "#8FAE86",
    "paper": "#F4EFE7",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "People don't just buy them. They rebuy them.",
    "score": "4.9",
    "quote": "“Wore them through a 14-hour travel day. Zero regrets.”",
    "note": "62% come back for a second pair"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 52,
      "role": "headline"
    },
    {
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 4,
      "role": "value"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 72,
      "role": "body"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 36,
      "role": "caption"
    }
  ],
  "name": "Customer Review Wall",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-review-wall",
    "bundleSha256": "7fad5706867a4e7f09136e57f5ebf926a749c0d844a65f1236ccb6b762583f3e",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:37.976Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-paper.png",
        "sha256": "7b2f6a52b2576483b5239a8c99bdd0259924207b8e06e91d40aed837f100f98c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-night.png",
        "sha256": "e696d665ae847c61f5077d0dfec9ae81ad2e576743171d761b8ba1469620c71e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-color.png",
        "sha256": "f2ed78c9c9e74d4a537bc1c98efbc77009534f88589253ede9a419f02ceb593c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-paper.png",
        "sha256": "83501479ac57f73a4dca5d71179b85f83d5b89d99e3ef2711192a17a31903af7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-night.png",
        "sha256": "8420e69492642902c5f7c035efb51f288a409a2bc3bb41a65687ab8e9a5b0c18"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-color.png",
        "sha256": "2c064d5d1159ffd03e6deb091a425b6d911a4472aade1a6a824b31d846048f41"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-paper.png",
        "sha256": "4659c1b004962518d7488fc559049fa1f2f37aa74b4bbe93c78de91bebb15927"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-night.png",
        "sha256": "0aecb28e09955b72b897a61ea28feebecaa4040cdb8b0683550a15251f7d96c0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-color.png",
        "sha256": "3df95313ee021ee3acd0b54bd7cf8e3bca956c53acedc25ee0e5ffb8e754086f"
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
          "mg-shop-review-wall--16x9",
          "mg-shop-review-wall--9x16",
          "mg-shop-review-wall--1x1"
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
            "paperNight": 105.81171332465277,
            "paperColor": 15.13525390625,
            "region": {
              "left": 95,
              "top": 3,
              "width": 1825,
              "height": 1074
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 95.45423719618056,
            "paperColor": 21.669189453125,
            "region": {
              "left": 0,
              "top": 123,
              "width": 1080,
              "height": 1677
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 90.35541449652777,
            "paperColor": 15.549397786458334,
            "region": {
              "left": 0,
              "top": 63,
              "width": 1080,
              "height": 1017
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
            "occupancy": 1.3388920382968006,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3396260799844633,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3381579966091377,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.226792800453515,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2378649376417237,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2297453703703707,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3345616024187454,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3345616024187454,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3345616024187454,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.235785590277779,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.391493055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-90-frame-10.png",
                "sha256": "c1e737765c04fea83f9d98e2f1e418c9c815ac6f80183d7e900e340b796e3878",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-90-frame-89.png",
                "sha256": "55d8da4fb5cb16daf452c1c1cfdacd60f91cbc15378b27411bdb445ed1386b09",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-90-frame-79.png",
                "sha256": "55d8da4fb5cb16daf452c1c1cfdacd60f91cbc15378b27411bdb445ed1386b09",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.235785590277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-900-frame-13.png",
                "sha256": "8351b9c24a0bed060eac9b864efa171b76d004f528877542bcb26a52c3445c15",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-900-frame-90.png",
                "sha256": "3b8e2f05171f2feab8f5155f8e0a462ad7f367818c6f7bca3856d0beb68584b0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-900-frame-792.png",
                "sha256": "3b8e2f05171f2feab8f5155f8e0a462ad7f367818c6f7bca3856d0beb68584b0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/16x9-duration-900-frame-899.png",
                "sha256": "55d8da4fb5cb16daf452c1c1cfdacd60f91cbc15378b27411bdb445ed1386b09",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.213975694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-90-frame-10.png",
                "sha256": "0a0bad38b9fb73f70c90ddac5080b415a19d96f641fc080e92a8dd80db0b435c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-90-frame-89.png",
                "sha256": "d4b03c6e411104495cfe202ae583cf2e69a427b5284f82522be413ffc3ad09dd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-90-frame-79.png",
                "sha256": "73008bdbdafa3b262cfdc9d4f0f98192e3cf82380549881367e3f5d0938b2152",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.916341145833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-900-frame-13.png",
                "sha256": "fcde232707f64c38f8a35dee1d31be47ba1314c32c615d03e0dc6526f9efbe6d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-900-frame-90.png",
                "sha256": "73008bdbdafa3b262cfdc9d4f0f98192e3cf82380549881367e3f5d0938b2152",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-900-frame-792.png",
                "sha256": "bd458137f75e2b2931b7c5cc82f4bf3ffecf227a110b2ad3ff0f35b9fb306b44",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/9x16-duration-900-frame-899.png",
                "sha256": "0dd455f6a6f0b7aab16caa9b25f3e36172631b5ba7d0cc67904bbe26ddb069d2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.1689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-90-frame-10.png",
                "sha256": "e6212c2d93e55f04440f371961265b9da3b104aecf56b9e0ca98af0d32a7301c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-90-frame-89.png",
                "sha256": "9ffe0e4dc10aaab7d202f686c20cecea17976348def400142fc05059af92c034",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-90-frame-79.png",
                "sha256": "9ffe0e4dc10aaab7d202f686c20cecea17976348def400142fc05059af92c034",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.896592881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-900-frame-13.png",
                "sha256": "3a163fd18851a05c25c881232ee045eea85f13198c73de9f6124d7b90d19f2ea",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-900-frame-90.png",
                "sha256": "9ffe0e4dc10aaab7d202f686c20cecea17976348def400142fc05059af92c034",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-900-frame-792.png",
                "sha256": "9ffe0e4dc10aaab7d202f686c20cecea17976348def400142fc05059af92c034",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-review-wall/1x1-duration-900-frame-899.png",
                "sha256": "9ffe0e4dc10aaab7d202f686c20cecea17976348def400142fc05059af92c034",
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
        "note": "Serif headline and rating beside a review wall with one review lifted out; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7fad5706867a4e7f09136e57f5ebf926a749c0d844a65f1236ccb6b762583f3e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.087Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/16x9/detail.mp4",
      "bg": "#f4efe7",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0cb0e451d4d08d22dd5bfb9acf6c1a4650d2dab7d88b7927a84575a7ecf655dc",
        "loop": "b99dbebaae9f5299d2b5ff36c10ac236af9aea2891309d5c2f61fc45c59c9832",
        "detail": "4774bdf2226b43744892a11b655f21062ffb51d9909d7aa8c45d6b2a19a7d23e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/9x16/detail.mp4",
      "bg": "#f4efe7",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "de6d0544d04dadf072eaa7d7634b636c23491a68fd29add279e4d9da14a71674",
        "loop": "639491851a2166075ed7bd78b0c74d0c23fbcd85b62520844f2feddc84790ac4",
        "detail": "4dc9f5621d02c971840c39c015208ed709e68bc4e33ad11629efa3c402ade122"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-review-wall/1x1/detail.mp4",
      "bg": "#f4efe7",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4ebbdae7c488b8857d7e72be3c04706a6e1d63b355d2fcd9607307515c29594a",
        "loop": "2483a65635f26d30322aa1461fddc507eec42f2b53f5998c5f2fe9fb9f9f0044",
        "detail": "0038b3a6f40766a4fb5c1b96ef72b9b8b8c9b2ea0e5d39931d515693f07968f9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7fad5706867a4e7f09136e57f5ebf926a749c0d844a65f1236ccb6b762583f3e/index.mjs",
    "sha256": "7fad5706867a4e7f09136e57f5ebf926a749c0d844a65f1236ccb6b762583f3e",
    "bytes": 304196,
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
    "at": "2026-10-09T07:13:05.849Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
