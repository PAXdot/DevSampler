// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "culture-tiles-wipe-up-mosaic"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "culture-tiles-wipe-up-mosaic",
    "hiring",
    "careers",
    "culture",
    "mosaic"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 60,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
      "role": "cta"
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
      "target": "culture-tiles-wipe-up-mosaic",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#F4EEE3",
    "accent": "#FF5B2E",
    "secondary": "#7BE0A8",
    "paper": "#171316",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Wayfold",
    "kicker": "Careers · 12 open roles",
    "headline": "Do the best work of your life, with people you like.",
    "cta": "See open roles"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
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
      "max": 60,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Careers Culture Mosaic",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-mosaic",
    "bundleSha256": "ca1432aaaa59862e05177074e9a138c627bbc7a5ab4c3f0f03a9e497b3fbbdba",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:00:48.176Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-paper.png",
        "sha256": "3327b91ad90ee7fea3f22645873adc9465cce155a61b9ce90db5f69c41fe0c34"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-night.png",
        "sha256": "f04a8c01dda812f2d22bd15ae7513ccc4030dc7db998d6545a97feaf735f398d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-color.png",
        "sha256": "f579059ab5e365adc61bbbfc0fe041358ef9072ea904a87aa488f862d6157dab"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-paper.png",
        "sha256": "b0d7658ee56f5b18940c28201acc66b4f8f973bce575dd3361d14f6647ac8723"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-night.png",
        "sha256": "a8ff66cd2d720b5f86c668ac669d014be38073c37fb3e6f1e9e23bb5f1fc929e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-color.png",
        "sha256": "25be21b16c88fd8caeea4ad0bad1a0e52f411a22fd74eca73f908d0da0c06339"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-paper.png",
        "sha256": "03848170a337e7bc898a8029a1e63629129eec55b9403271d99fe053904af751"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-night.png",
        "sha256": "bfd0940f61f6b5718bb09f27637f4bbe01538e9cca2acb144b0e098e2e7f20ae"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-color.png",
        "sha256": "0a175f031b5e3f1d4cad45d95c3bfa04635b7b2b5f709425aada18e214aedb8d"
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
          "mg-hire-mosaic--16x9",
          "mg-hire-mosaic--9x16",
          "mg-hire-mosaic--1x1"
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
            "paperNight": 43.525906032986114,
            "paperColor": 17.48000759548611,
            "region": {
              "left": 94,
              "top": 86,
              "width": 1720,
              "height": 906
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.504123263888886,
            "paperColor": 20.263346354166668,
            "region": {
              "left": 73,
              "top": 121,
              "width": 934,
              "height": 1704
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 44.282796223958336,
            "paperColor": 14.175916883680555,
            "region": {
              "left": 63,
              "top": 67,
              "width": 941,
              "height": 969
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
            "occupancy": 1.0650575816746455,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0650575816746455,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0650575816746455,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0877595637020243,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0877595637020243,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0877595637020243,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1079172323936435,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1079172323936435,
            "bad": [],
            "measured": 14
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1079172323936435,
            "bad": [],
            "measured": 14
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 31.302734375,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 31.333875868055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-90-frame-10.png",
                "sha256": "2ecbf0f13fec1443d599bafe362d38b87442254941957d8d7586db7bca94b1a0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-90-frame-89.png",
                "sha256": "09adcb03db84d1c1a4035b6496d4c08a83e564f32a95dac2010fa529ee6ad98e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-90-frame-79.png",
                "sha256": "09adcb03db84d1c1a4035b6496d4c08a83e564f32a95dac2010fa529ee6ad98e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 31.302734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-900-frame-14.png",
                "sha256": "4fe9856cb9cc8e4efc6196a131116c954d0d183ce1e3b5c5321fb79379c5a683",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-900-frame-96.png",
                "sha256": "09adcb03db84d1c1a4035b6496d4c08a83e564f32a95dac2010fa529ee6ad98e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-900-frame-792.png",
                "sha256": "09adcb03db84d1c1a4035b6496d4c08a83e564f32a95dac2010fa529ee6ad98e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/16x9-duration-900-frame-899.png",
                "sha256": "09adcb03db84d1c1a4035b6496d4c08a83e564f32a95dac2010fa529ee6ad98e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 26.767903645833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-90-frame-10.png",
                "sha256": "3de76b8cb9cd4cbec9e8147bb612a1803175b28ddf0c8b7d4712f58b406d429d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-90-frame-89.png",
                "sha256": "7ac226d9efd169f2b1569cf004651e3a5462d402e92643d347a03a75c4a05416",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-90-frame-79.png",
                "sha256": "7ac226d9efd169f2b1569cf004651e3a5462d402e92643d347a03a75c4a05416",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 26.706705729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-900-frame-14.png",
                "sha256": "463615c5a666547ecded2e3925d318ad9ae53e7d601f0cf187fa96e6a74bafec",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-900-frame-96.png",
                "sha256": "7ac226d9efd169f2b1569cf004651e3a5462d402e92643d347a03a75c4a05416",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-900-frame-792.png",
                "sha256": "7ac226d9efd169f2b1569cf004651e3a5462d402e92643d347a03a75c4a05416",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/9x16-duration-900-frame-899.png",
                "sha256": "7ac226d9efd169f2b1569cf004651e3a5462d402e92643d347a03a75c4a05416",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 25.080729166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-90-frame-10.png",
                "sha256": "86572f7ea1e72c0d801a019c997366c051774d2c18c258fa564e8aad8c507a2c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-90-frame-89.png",
                "sha256": "9cc1f293feb485043139d20d21be48bdef6fd6b150cf9997c540ba3ebaeacc4d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-90-frame-79.png",
                "sha256": "9cc1f293feb485043139d20d21be48bdef6fd6b150cf9997c540ba3ebaeacc4d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 25.092881944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-900-frame-14.png",
                "sha256": "1fe19112ecc087c0ce59c49541b31825d4a93d490ee9bb815ecbe4da69d29096",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-900-frame-96.png",
                "sha256": "9cc1f293feb485043139d20d21be48bdef6fd6b150cf9997c540ba3ebaeacc4d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-900-frame-792.png",
                "sha256": "9cc1f293feb485043139d20d21be48bdef6fd6b150cf9997c540ba3ebaeacc4d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-mosaic/1x1-duration-900-frame-899.png",
                "sha256": "9cc1f293feb485043139d20d21be48bdef6fd6b150cf9997c540ba3ebaeacc4d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Careers headline, CTAs and team count beside a culture photo mosaic; copy flows in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ca1432aaaa59862e05177074e9a138c627bbc7a5ab4c3f0f03a9e497b3fbbdba",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.090Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/16x9/detail.mp4",
      "bg": "#45211a",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "855ac9f168a91964e60c789db9620ba9f67c449d63df4877951a86e134d8b740",
        "loop": "4a8af3e86d001b088a67bd3dff87d069721a9c52475222f473f7270bbdf7dbf3",
        "detail": "147539dd9d67da8bef569b38ff6bdeb21a7adb98e5a95dcd9cae5a8b54d6a66a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/9x16/detail.mp4",
      "bg": "#45211a",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "46dab6bdd15cb4b6088694727716f5dfe909f11d8a8dd43e6f34ae99b6336bf4",
        "loop": "ab4dfa270adeea32eb548e4a1b46d31d65c291f7cc6c77511d9004ce891add59",
        "detail": "1c49f0b345ea8ddab62767ec6f5af89a14116d33c77a503ae602194eefc1d954"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-mosaic/1x1/detail.mp4",
      "bg": "#45211a",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f308eac4ccc6a83a3ce4841d699ae176dbc6b0cbaf9ef138ea8cd6e499dc99d7",
        "loop": "2f6853263919a520a94c77552232f8550a57c8a6b7a2403760c11d528ee0fe7b",
        "detail": "55f18f99963001cf0c30a30f169ba580a6e17da137ffd1fa7c4019618339d2f7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ca1432aaaa59862e05177074e9a138c627bbc7a5ab4c3f0f03a9e497b3fbbdba/index.mjs",
    "sha256": "ca1432aaaa59862e05177074e9a138c627bbc7a5ab4c3f0f03a9e497b3fbbdba",
    "bytes": 202630,
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
    "at": "2026-10-09T07:15:00.970Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
