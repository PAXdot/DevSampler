// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "countdown-ring-work-to-rest"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "countdown-ring-work-to-rest",
    "fitness",
    "timer",
    "workout"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "work",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "rest",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "next",
      "type": "text",
      "maxChars": 24,
      "role": "label"
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
      "target": "countdown-ring-work-to-rest",
      "prop": "transform",
      "from": "enter",
      "settledBy": 132,
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
    "ink": "#EEF2EA",
    "accent": "#C8FF2E",
    "secondary": "#B9A6FF",
    "paper": "#07080A",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "MOVARA",
    "work": "Burpees",
    "rest": "Breathe",
    "next": "Kettlebell swings"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "work",
      "label": "Work",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "rest",
      "label": "Rest",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "next",
      "label": "Next",
      "type": "text",
      "max": 24,
      "role": "label"
    }
  ],
  "name": "Interval Ring Timer",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-interval-timer",
    "bundleSha256": "af7c30525c829240f635c8078d7e45c2fc094defc6ba09d29454680dff63cf1b",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:54.569Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-paper.png",
        "sha256": "b0ded101fb1dbf1ff2b36e3243fbe3b99754de5e9fb59af80d5058680cee5d41"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-night.png",
        "sha256": "7c7ccd590befb8ac861358528c80b4837cebab8e2637b82d6e39bff92ad8b6f7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-color.png",
        "sha256": "765969590da3ea9f2ab58f19e760446eb84314a079309ed94e78d32ac3586476"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-paper.png",
        "sha256": "edb59c82a2c20d0a0bbb2c3eee0a65e892646693461acec7af6ac3db53ff117c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-night.png",
        "sha256": "dabaf1cc27225196e4ea05f3178772b77c79be830bdb49750a23969848f1e6b5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-color.png",
        "sha256": "875211354f805f308a929cd3f6f6ae1d888f3262c3dacd9452a41163f5c39830"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-paper.png",
        "sha256": "20dfaeb48d4980fdc3325f045aa803667eb6349295651e1226a59c61463316a8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-night.png",
        "sha256": "22f80810f80b7dc9752df7e40d106aad98bb6739035efa6f2c5c514c977c9e7d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-color.png",
        "sha256": "7c165bde8e0fa0a59e05fbb436fe1be1ae7235eaef387babdb56b9d4f8a85121"
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
          "mg-fit-interval-timer--16x9",
          "mg-fit-interval-timer--9x16",
          "mg-fit-interval-timer--1x1"
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
            "paperNight": 30.045328776041668,
            "paperColor": 16.35186089409722,
            "region": {
              "left": 80,
              "top": 58,
              "width": 1763,
              "height": 871
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.01942274305556,
            "paperColor": 24.74956597222222,
            "region": {
              "left": 62,
              "top": 84,
              "width": 956,
              "height": 1742
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 30.49484592013889,
            "paperColor": 16.48825412326389,
            "region": {
              "left": 8,
              "top": 54,
              "width": 1030,
              "height": 792
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
            "occupancy": 1.0495107974388318,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0495107974388318,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0495107974388318,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.138210235225778,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.138210235225778,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.138210235225778,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.991188656532572,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.991188656532572,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.991188656532572,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.240668402777779,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.257703993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-90-frame-10.png",
                "sha256": "7448bbca03ba1c0b1ca680b10043d8723e696e0247e4db448fecb8d5f8552cf9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-90-frame-89.png",
                "sha256": "61396c637a51054247452e8ccde8a9430305196c1bb6021a9320750c6331d88f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-90-frame-79.png",
                "sha256": "61396c637a51054247452e8ccde8a9430305196c1bb6021a9320750c6331d88f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.240668402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-900-frame-19.png",
                "sha256": "53b2b246a29b8936c7b099e930491c9a1baf8d1526f5b8233f767833e9ad6ed5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-900-frame-132.png",
                "sha256": "61396c637a51054247452e8ccde8a9430305196c1bb6021a9320750c6331d88f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-900-frame-792.png",
                "sha256": "61396c637a51054247452e8ccde8a9430305196c1bb6021a9320750c6331d88f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/16x9-duration-900-frame-899.png",
                "sha256": "61396c637a51054247452e8ccde8a9430305196c1bb6021a9320750c6331d88f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.732747395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-90-frame-10.png",
                "sha256": "890eb901010f5431a7e9854ed826ae5abe95bb0ce8bd6875957cbe0fe343af79",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-90-frame-89.png",
                "sha256": "824d30dc5bfac7d655a038f32c0b065bda86a2722411549810aa9c4aa93d984e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-90-frame-79.png",
                "sha256": "824d30dc5bfac7d655a038f32c0b065bda86a2722411549810aa9c4aa93d984e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.68869357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-900-frame-19.png",
                "sha256": "18710d05d1a2755ea75a6746bbc66cc2451aec4eb71635ad48e212c9b3a76e11",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-900-frame-132.png",
                "sha256": "824d30dc5bfac7d655a038f32c0b065bda86a2722411549810aa9c4aa93d984e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-900-frame-792.png",
                "sha256": "824d30dc5bfac7d655a038f32c0b065bda86a2722411549810aa9c4aa93d984e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/9x16-duration-900-frame-899.png",
                "sha256": "824d30dc5bfac7d655a038f32c0b065bda86a2722411549810aa9c4aa93d984e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.594401041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-90-frame-10.png",
                "sha256": "6138d270659afe6e735f9f828ea231fff837445b02d5417fc1e70f665032bdeb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-90-frame-89.png",
                "sha256": "344b008295452cbeb6763d8606376653570126ebb4819842138182ff9c055e37",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-90-frame-79.png",
                "sha256": "344b008295452cbeb6763d8606376653570126ebb4819842138182ff9c055e37",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.577907986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-900-frame-19.png",
                "sha256": "73e6679debe58ccd68a409c5a8c6cb8acfcba1af721e7ad125aabdde70a4d26c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-900-frame-132.png",
                "sha256": "344b008295452cbeb6763d8606376653570126ebb4819842138182ff9c055e37",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-900-frame-792.png",
                "sha256": "344b008295452cbeb6763d8606376653570126ebb4819842138182ff9c055e37",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-fit-interval-timer/1x1-duration-900-frame-899.png",
                "sha256": "344b008295452cbeb6763d8606376653570126ebb4819842138182ff9c055e37",
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
        "note": "Interval ring timer flips from work to rest with the next move card; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "af7c30525c829240f635c8078d7e45c2fc094defc6ba09d29454680dff63cf1b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/16x9/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8c99a2c15ce67ad18be4ff41738ba67ea8ce92cd750b89a87177c238dcf3d1e4",
        "loop": "4004544378f19fc9c8895a3ade58aaaf8478a81bc37f986c7e8ca69fb15c38c2",
        "detail": "dcd55dc705e90b267ddcb13664ef21ae0597fe8749da1c97949c7280e72f405a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/9x16/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d200cc84649b866b5ef583f89f44caaf17f4abd069227f073533c0ba1e5585ee",
        "loop": "a3e9514d2a7a180d9bca5906806b1918348e1f845ee5006bd143a780560beefd",
        "detail": "ab690849827de92189d3abeef85d3eac3bf5d07bd8faf411e685e82925fd7026"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-interval-timer/1x1/detail.mp4",
      "bg": "#07080a",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "98b419a7b8dc3da0ed93f1224a2a83e2e4cffb774644949ace156bd5f745d9a0",
        "loop": "4b0dd3524c6e623aa3bfdd7f13ac61994535c26c1919d22a855a898031dc0a9e",
        "detail": "4a199568d601cf0231b7768651cb383b892618b0afd4b1059bb24796de1a0254"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/af7c30525c829240f635c8078d7e45c2fc094defc6ba09d29454680dff63cf1b/index.mjs",
    "sha256": "af7c30525c829240f635c8078d7e45c2fc094defc6ba09d29454680dff63cf1b",
    "bytes": 176050,
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
    "at": "2026-10-09T07:11:28.271Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
