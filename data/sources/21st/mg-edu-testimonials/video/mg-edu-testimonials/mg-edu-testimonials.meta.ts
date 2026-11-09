// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "hand-drawn",
  "mechanic": [
    "sticky-note-drop"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "sticky-note-drop",
    "reviews",
    "testimonials",
    "notebook",
    "students"
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
      "in": 87,
      "out": 0
    },
    "markers": {
      "settled": 87
    },
    "beats": [
      0,
      22,
      44,
      65,
      87
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
      "key": "head",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 70,
      "role": "body"
    },
    {
      "key": "score",
      "type": "text",
      "maxChars": 4,
      "role": "value"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "sticky-note-drop",
      "prop": "transform",
      "from": "enter",
      "settledBy": 87,
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
    "ink": "#22314F",
    "accent": "#FF6B5B",
    "secondary": "#F4B324",
    "paper": "#FDFCF6",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "head": "What students say",
    "quote": "The weekly feedback calls alone were worth the price.",
    "score": "4.9",
    "cta": "Join cohort 15"
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
      "brand": "fonts.accent"
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
      "key": "head",
      "label": "Head",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 70,
      "role": "body"
    },
    {
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 4,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Sticky Note Reviews",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-testimonials",
    "bundleSha256": "f2ddb9fb39a809d461d4e121e9303336fd0eb0fdec3f2ca93a70085b3d0901b3",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:10:31.339Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-paper.png",
        "sha256": "4ea860d4d1b5f680110766d1d232d09666d2cb1320843f25cfbdae61e2b3c88a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-night.png",
        "sha256": "7ef681c239ad2be3f827e370a79866ad7051ff198bc88eaf91c4d4091bd08c72"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-color.png",
        "sha256": "656f946c6b9b1a29326cbbb5db08de2a93291dd1f4a9154d704020343b8a42d0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-paper.png",
        "sha256": "bf58573e52908b26ca5350f87f1e6e92f4545766ee7b7ce056b90adc82161a11"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-night.png",
        "sha256": "0a9363134bda142be0ff40559dcf5e2e6f95c6b75bcd5238f0e3646391fd7295"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-color.png",
        "sha256": "50302e2dfb362c67572095dda76792fdbf0cc9d5e1dfd359bd6afe5022b698bc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-paper.png",
        "sha256": "6483130ad83581a25839fbabf2104ccd560c6729561f404122b7e19da439083b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-night.png",
        "sha256": "550d66c389e51515c65bb78650c77b79e3580c8850f394ab9ccb629ffe0ae023"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-color.png",
        "sha256": "182db77514e8ef3ce5f07f2957bfd0bf6b800aa7d2f345af7d4495de44457839"
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
          "mg-edu-testimonials--16x9",
          "mg-edu-testimonials--9x16",
          "mg-edu-testimonials--1x1"
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
            "paperNight": 24.623128255208332,
            "paperColor": 9.278266059027779,
            "region": {
              "left": 211,
              "top": 82,
              "width": 1611,
              "height": 884
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.130099826388886,
            "paperColor": 12.49319118923611,
            "region": {
              "left": 128,
              "top": 119,
              "width": 888,
              "height": 1715
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.15839301215278,
            "paperColor": 10.179578993055555,
            "region": {
              "left": 125,
              "top": 89,
              "width": 912,
              "height": 894
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
            "occupancy": 0.9634297150573194,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9733392778407661,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9634297150573194,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0318575732762243,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.040862911522634,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0318575732762243,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.981798755167362,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.99066375521402,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.981798755167362,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.870551215277779,
        "frames": [
          13,
          87,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 13.50900607638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-90-frame-10.png",
                "sha256": "5908c341be956642955063cf39e907e5fe456829fdaf3b21c3a1658623a7f852",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-90-frame-87.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-90-frame-79.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-90-frame-89.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.870551215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-900-frame-13.png",
                "sha256": "9c6e6975563887ba9ba693f1a90607b7a1c71e996782a40f35a97beada9bfb9f",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-900-frame-87.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-900-frame-792.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/16x9-duration-900-frame-899.png",
                "sha256": "9e8cbc4475dcf52ed001ffe7d076fe9e8a16e076d036a3a735738aa4dc85b71e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 18.17795138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-90-frame-10.png",
                "sha256": "9a0496a7404dcd5057333df9e206d9b79bef91d01ebdffe8efe19e271404d8c0",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-90-frame-87.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-90-frame-79.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-90-frame-89.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 18.1689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-900-frame-13.png",
                "sha256": "0e3f0505b6e42aa6c4ab8cf63e16d781137eb4952b4081329b224469720c7d46",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-900-frame-87.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-900-frame-792.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/9x16-duration-900-frame-899.png",
                "sha256": "033de8bef16e98a26ea33fc278000ac1b31751fd19b2f5a1843821230f39adcd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.634114583333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-90-frame-10.png",
                "sha256": "2c9a5027692f841e9dd01c8d79249b35172050e02f9843cb8d37e26342d6ec89",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-90-frame-87.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-90-frame-79.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-90-frame-89.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.943359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-900-frame-13.png",
                "sha256": "1405c6ae3bf1d761dcb5f9809345521da90ff14fc65569795c34da091ae2b8cb",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-900-frame-87.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-900-frame-792.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-testimonials/1x1-duration-900-frame-899.png",
                "sha256": "4cf27f63d978a627d8c28b8496243fbf09e7e6ebd7fa0c89a27bd00a61f96207",
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
        "note": "Student sticky-note reviews pin onto a notebook page with a rating and CTA; rebrands distinct."
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
      "bundleSha256": "f2ddb9fb39a809d461d4e121e9303336fd0eb0fdec3f2ca93a70085b3d0901b3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.093Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/16x9/detail.mp4",
      "bg": "#fdfcf6",
      "posterFrame": 87,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d66c3c39782ae7fd3f59150bb7ea09a734f9817199655ff35c5a1cb484c1c850",
        "loop": "3a1da90aeb7449cc59f4254262a8957f619bc5d5bf9f0456d820ed784e65a76d",
        "detail": "637eb97e8d5b0b42b2d308fad7794b95546903cbad8112de2517fe5f9c5d9540"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/9x16/detail.mp4",
      "bg": "#fdfcf6",
      "posterFrame": 87,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6034e96d410ef3f0ab52a304dcd58a9fde3c94345ad1cd98862cde642b0121ed",
        "loop": "9a1437834647256115d3fe5d00bc8ce6f1beb334cba962db9b3767981c07b5a2",
        "detail": "7c7aee9c21ca2ef031f5797da39a5aac345c3dd2d680545ef46b60e14d503a4d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-testimonials/1x1/detail.mp4",
      "bg": "#fdfcf6",
      "posterFrame": 87,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0d2f138254a4ff03c9d91f227184b56ed7e2f044e0133eed2b0adc6d73264fae",
        "loop": "5578f1558c1bca8546fa4c88b62883bcf69ce8d621f0af69647d780f793105d0",
        "detail": "30a3d1abf5f5c39aa51cf0db3b173512d039fd6f721fe35d5bc210d8907e0c04"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f2ddb9fb39a809d461d4e121e9303336fd0eb0fdec3f2ca93a70085b3d0901b3/index.mjs",
    "sha256": "f2ddb9fb39a809d461d4e121e9303336fd0eb0fdec3f2ca93a70085b3d0901b3",
    "bytes": 287733,
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
    "at": "2026-10-09T07:17:05.436Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
